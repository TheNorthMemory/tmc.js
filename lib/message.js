/* eslint max-classes-per-file: ["error", 3] */
const { types } = require('util');
const ValueFormat = require('./value-format');
const MessageType = require('./message-type');
const MessageKind = require('./message-kind');
const {
  EndOfHeaders, Custom, StatusCode, StatusPhrase, Flag, Token,
} = require('./header-type');
const {
  TYPE, CODE, PHRASE, FLAG, TOKEN, CONTENT,
} = require('./message-fields');

class Message {
  protocolVersion = 2;

  [TYPE];

  [CODE];

  [PHRASE];

  [FLAG];

  [TOKEN];

  [CONTENT] = {};

  constructor(type, kind) {
    /* eslint-disable-next-line no-unused-expressions */
    MessageType.includes(type) && Reflect.set(this, TYPE, type);
    /* eslint-disable-next-line no-unused-expressions */
    MessageKind.includes(kind) && Reflect.set(this[CONTENT], MessageKind, kind);
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
    return new Decoder(buf).data;
  }
}

const utf8 = 'utf8';

const write = 'write';

const writeInt8 = 'writeInt8';

const writeInt16LE = 'writeInt16LE';

const writeInt32LE = 'writeInt32LE';

const writeBigInt64LE = 'writeBigInt64LE';

const {
  Void, Byte, Int16, Int32, Int64, ByteArray, CountedString,
} = ValueFormat;

function pick(size, method, ...value) {
  const buf = Buffer.alloc(size);
  buf[method](...value);

  return Buffer.from(buf.buffer);
}

class Encoder {
  buffers = [];

  data;

  constructor(message) {
    if (!(message instanceof Message)) {
      throw new TypeError('Must be an instance Message here.');
    }
    this.data = message;
  }

  compress() {
    this.put(this.data.protocolVersion).put(this.data[TYPE]);
    /* eslint-disable-next-line no-unused-expressions */
    this.data[CODE] && this.putShort(StatusCode).putShort(this.data[CODE]);
    /* eslint-disable-next-line no-unused-expressions */
    this.data[PHRASE] && this.putShort(StatusPhrase).writeCountedString(this.data[PHRASE]);
    /* eslint-disable-next-line no-unused-expressions */
    this.data[FLAG] && this.putShort(Flag).putInt(this.data[FLAG]);
    /* eslint-disable-next-line no-unused-expressions */
    this.data[TOKEN] && this.putShort(Token).writeCountedString(this.data[TOKEN]);
    Object.entries(this.data[CONTENT] || {}).forEach(([k, v]) => this.putShort(Custom).writeCountedString(k).writeCustomValue(v));
    this.putShort(EndOfHeaders);

    return this;
  }

  put(value) {
    this.buffers.push(pick(1, writeInt8, Number(value)));

    return this;
  }

  putShort(value) {
    this.buffers.push(pick(2, writeInt16LE, Number(value)));

    return this;
  }

  putInt(value) {
    this.buffers.push(pick(4, writeInt32LE, Number(value)));

    return this;
  }

  putLong(value) {
    this.buffers.push(pick(8, writeBigInt64LE, BigInt(value)));

    return this;
  }

  writeCountedString(value) {
    const len = value ? Buffer.byteLength(value) : 0;
    this.putInt(len);
    /* eslint-disable-next-line no-unused-expressions */
    len && this.buffers.push(pick(len, write, value, utf8));

    return this;
  }

  writeCustomValue(value) {
    const type = typeof value;
    if (value === null || ['undefined', 'symbol', 'boolean', 'function'].includes(type)) {
      return this.put(Void);
    }

    if (type === 'number') {
      switch (true) {
        case value > -128 && value < 127:
          return this.put(Byte).put(value);

        case value > -32_768 && value < 32_767:
          return this.put(Int16).putShort(value);

        case value > -2_147_483_648 && value < 2_147_483_647:
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
      return this.put(ValueFormat.Date).putLong(value);
    }

    if (Buffer.isBuffer(value)) {
      this.put(ByteArray).putInt(value.length);
      this.buffers.push(value);
    }

    return this;
  }

  get buffer() { return Buffer.concat(this.compress().buffers); }
}

const readInt8 = 'readInt8';

const readInt16LE = 'readInt16LE';

const readInt32LE = 'readInt32LE';

const readBigInt64LE = 'readBigInt64LE';

function read(buffer, method, offset, ...extra) {
  return buffer[method](offset, ...extra);
}

class Decoder {
  offset = 1;

  buffer;

  data;

  constructor(buf) {
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('Must be an instance Buffer here.');
    }
    this.buffer = buf;
    this.data = new Message();
    this.extract();
  }

  extract() {
    this.data.with(TYPE, this.reset().get());

    let headerType;
    do {
      headerType = this.getShort();
      this[`pick${headerType}`]();
    } while (headerType !== EndOfHeaders);

    this.reset();
  }

  [`pick${EndOfHeaders}`]() { return this.data; }

  [`pick${Custom}`]() { return this.data.with(this.readCountedString(), this.readCustomValue()); }

  [`pick${StatusCode}`]() { return this.data.with(CODE, this.getInt()); }

  [`pick${StatusPhrase}`]() { return this.data.with(PHRASE, this.readCountedString()); }

  [`pick${Flag}`]() { return this.data.with(FLAG, this.getInt()); }

  [`pick${Token}`]() { return this.data.with(TOKEN, this.readCountedString()); }

  reset() {
    this.offset = 1;
    return this;
  }

  get() {
    const value = read(this.buffer, readInt8, this.offset);
    this.offset += 1;
    return Number(value);
  }

  getShort() {
    const value = read(this.buffer, readInt16LE, this.offset);
    this.offset += 2;
    return Number(value);
  }

  getInt() {
    const value = read(this.buffer, readInt32LE, this.offset);
    this.offset += 4;
    return Number(value);
  }

  getLong() {
    const value = read(this.buffer, readBigInt64LE, this.offset);
    this.offset += 8;
    return BigInt(value);
  }

  readBuffer() {
    const size = this.getInt();
    if (size === 0) {
      return null;
    }
    const buf = this.buffer.subarray(this.offset, this.offset + size);
    this.offset += size;
    return buf;
  }

  readCountedString() { return this.readBuffer()?.toString(utf8); }

  readCustomValue() { return this[`parse${this.get()}`](); }

  [`parse${Void}`]() { /* eslint-disable-line class-methods-use-this */ return null; }

  [`parse${Byte}`]() { return this.get(); }

  [`parse${Int16}`]() { return this.getShort(); }

  [`parse${Int32}`]() { return this.getInt(); }

  [`parse${Int64}`]() { return this.getLong(); }

  [`parse${ValueFormat.Date}`]() { return new Date(Number(this.getLong())); }

  [`parse${ByteArray}`]() { return this.readBuffer(); }

  [`parse${CountedString}`]() { return this.readCountedString(); }

  get message() { return this.data; }
}

module.exports = Message;
module.exports.default = Message;
module.exports.Encoder = Encoder;
module.exports.Decoder = Decoder;
