/* eslint max-classes-per-file: ["error", 3] */
const { types } = require('util');
const MessageType = require('./message-type');
const MessageKind = require('./message-kind');
const {
  EndOfHeaders, Custom, StatusCode, StatusPhrase, Flag, Token,
} = require('./header-type');
const {
  TYPE, CODE, PHRASE, FLAG, TOKEN, CONTENT,
} = require('./message-fields');
const {
  Void, Byte, Int16, Int32, Int64, ByteArray, CountedString, Date: FmtDate,
} = require('./value-format');

const kData = Symbol('kData');
const kBuffer = Symbol('kBuffer');

class Message {
  protocolVersion = 2;

  [TYPE];

  [CODE];

  [PHRASE];

  [FLAG];

  [TOKEN];

  [CONTENT] = {};

  constructor(type, kind) {
    if (MessageType.includes(type)) { this[TYPE] = type; }
    if (MessageKind.includes(kind)) { this[CONTENT][MessageKind] = kind; }
  }

  with(key, value) {
    Reflect.set(
      [TYPE, CODE, PHRASE, FLAG, TOKEN].includes(key) ? this : this[CONTENT],
      key,
      value,
    );

    return this;
  }

  get buffer() {
    /* eslint-disable-next-line no-use-before-define */
    return new Encoder(this).buffer;
  }

  static from(buf) {
    /* eslint-disable-next-line no-use-before-define */
    return new Decoder(buf).message;
  }
}

const utf8 = 'utf8';

const kOffset = Symbol('kOffset');

class Encoder {
  [kOffset] = 0;

  [kBuffer] = [/* method, value, offset, length, charset */];

  [kData];

  constructor(message) {
    if (!(message instanceof Message)) {
      throw new TypeError('Must be an instance Message here.');
    }
    this[kData] = message;
  }

  compress() {
    this.put(this[kData].protocolVersion).put(this[kData][TYPE]);
    if (this[kData][CODE]) { this.putShort(StatusCode).putShort(this[kData][CODE]); }
    if (this[kData][PHRASE]) { this.putShort(StatusPhrase).writeCountedString(this[kData][PHRASE]); }
    if (this[kData][FLAG]) { this.putShort(Flag).putInt(this[kData][FLAG]); }
    if (this[kData][TOKEN]) { this.putShort(Token).writeCountedString(this[kData][TOKEN]); }
    Object.entries(this[kData][CONTENT] || {}).forEach(([k, v]) => this.putShort(Custom).writeCountedString(k).writeCustomValue(v));
    this.putShort(EndOfHeaders);

    return this;
  }

  put(value) {
    this[kBuffer].push(['writeInt8', Number(value), (this[kOffset] += 1) - 1]);

    return this;
  }

  putShort(value) {
    this[kBuffer].push(['writeInt16LE', Number(value), (this[kOffset] += 2) - 2]);

    return this;
  }

  putInt(value) {
    this[kBuffer].push(['writeInt32LE', Number(value), (this[kOffset] += 4) - 4]);

    return this;
  }

  putLong(value) {
    this[kBuffer].push(['writeBigInt64LE', BigInt(value), (this[kOffset] += 8) - 8]);

    return this;
  }

  writeCountedString(value) {
    const len = value ? Buffer.byteLength(value) : 0;
    this.putInt(len);
    if (len) { this[kBuffer].push(['write', value, (this[kOffset] += len) - len, len, utf8]); }

    return this;
  }

  /**
   * Only Support kind of `number`(integer), `bigint`, `string`(utf-8), `Date` and `Buffer` values
   * @param {number|bigint|string|Date|Buffer} value - The value
   * @returns {this} This instance
   */
  writeCustomValue(value) {
    const type = typeof value;
    if (value === null || ['undefined', 'symbol', 'boolean', 'function'].includes(type)) {
      return this.put(Void);
    }

    if (type === 'number') {
      switch (true) {
        case value >= -128 && value < 127:
          return this.put(Byte).put(value);

        case value >= -32_768 && value < 32_767:
          return this.put(Int16).putShort(value);

        case value >= -2_147_483_648 && value < 2_147_483_647:
          return this.put(Int32).putInt(value);

        default:
          return this.put(Int64).putLong(value);
      }
    }

    if (type === 'bigint') {
      return this.put(Int64).putLong(value);
    }

    if (type === 'string') {
      return this.put(CountedString).writeCountedString(value);
    }

    if (types.isDate(value)) {
      return this.put(FmtDate).putLong(value);
    }

    if (Buffer.isBuffer(value)) {
      const len = value.length;
      this.put(ByteArray).putInt(len);
      this[kBuffer].push(['fill', value, this[kOffset], this[kOffset] += len]);
      return this;
    }

    return this.put(Void);
  }

  get buffer() {
    this[kOffset] = 0;
    this[kBuffer] = [];
    this.compress();
    const buf = Buffer.alloc(this[kOffset]);
    this[kBuffer].forEach(([method, value, offset, length, charset]) => buf[method](value, offset, length, charset));

    return buf;
  }
}

class Decoder {
  [kOffset] = 1;

  [kBuffer];

  [kData];

  constructor(buf) {
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('Must be an instance Buffer here.');
    }
    this[kBuffer] = buf;
    this[kData] = new Message();
    this.extract();
  }

  extract() {
    this[kData].with(TYPE, this.reset().get());

    let headerType;
    do {
      headerType = this.getShort();
      this[`pick${headerType}`]();
    } while (headerType !== EndOfHeaders);

    return this.reset();
  }

  [`pick${EndOfHeaders}`]() { return this[kData]; }

  [`pick${Custom}`]() { return this[kData].with(this.readCountedString(), this.readCustomValue()); }

  [`pick${StatusCode}`]() { return this[kData].with(CODE, this.getInt()); }

  [`pick${StatusPhrase}`]() { return this[kData].with(PHRASE, this.readCountedString()); }

  [`pick${Flag}`]() { return this[kData].with(FLAG, this.getInt()); }

  [`pick${Token}`]() { return this[kData].with(TOKEN, this.readCountedString()); }

  reset() {
    this[kOffset] = 1;
    return this;
  }

  get() {
    const value = this[kBuffer].readInt8((this[kOffset] += 1) - 1);

    return Number(value);
  }

  getShort() {
    const value = this[kBuffer].readInt16LE((this[kOffset] += 2) - 2);

    return Number(value);
  }

  getInt() {
    const value = this[kBuffer].readInt32LE((this[kOffset] += 4) - 4);

    return Number(value);
  }

  getLong() {
    const value = this[kBuffer].readBigInt64LE((this[kOffset] += 8) - 8);

    return BigInt(value);
  }

  readBuffer() {
    const size = this.getInt();
    if (size === 0) { return null; }

    const buf = this[kBuffer].subarray(this[kOffset], this[kOffset] += size);

    return buf;
  }

  readCountedString() { return this.readBuffer()?.toString(utf8); }

  readCustomValue() { return this[`parse${this.get()}`](); }

  [`parse${Void}`]() { /* eslint-disable-line class-methods-use-this */ return null; }

  [`parse${Byte}`]() { return this.get(); }

  [`parse${Int16}`]() { return this.getShort(); }

  [`parse${Int32}`]() { return this.getInt(); }

  [`parse${Int64}`]() { return this.getLong(); }

  [`parse${FmtDate}`]() { return new Date(Number(this.getLong())); }

  [`parse${ByteArray}`]() { return this.readBuffer(); }

  [`parse${CountedString}`]() { return this.readCountedString(); }

  get message() { return this[kData]; }
}

module.exports = Message;
module.exports.default = Message;
module.exports.Encoder = Encoder;
module.exports.Decoder = Decoder;
