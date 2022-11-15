/// <reference types="node" />
/// <reference path="header-type.d.ts" />
/// <reference path="message-kind.d.ts" />

declare class Message {
  constructor(
    type?: MessageType.CONNECT | MessageType.CONNECTACK | MessageType.SEND | MessageType.SENDACK,
    kind?: MessageKind.None | MessageKind.PullRequest | MessageKind.Confirm | MessageKind.Data | MessageKind.Failed
  );
  protocolVersion: number;
  messageType: number;
  statusCode?: number;
  statusPhrase?: string;
  flag?: number;
  token?: string;
  content?: MessageContent;
  with(key: string, value?: number | bigint | string | Buffer | Date): this;
  get buffer(): Buffer;
  static from(buf: Buffer): Message;
}

declare interface MessageContent {
  __kind?: MessageKind.None | MessageKind.PullRequest | MessageKind.Confirm | MessageKind.Data | MessageKind.Failed;
  id?: number | bigint;
  nick?: string;
  retried?: number;
  dataid?: number | bigint;
  outtime?: string | Date;
  topic?: string;
  publisher?: string;
  time?: string | Date;
  userid?: number | bigint;
  notify?: string;
  content?: string | object;
}

declare namespace Message {
  class Encoder {
    constructor(message: Message);
    compress(): this;
    put(value: number): this;
    putShort(value: number): this;
    putInt(value: number): this;
    putLong(value: number | bigint): this;
    writeCountedString(value?: string): this;
    writeCustomValue(value?: number | bigint | string | Buffer | Date): this;
    get buffer(): Buffer;
  }
  class Decoder {
    constructor(buf: Buffer);
    extract(): this;
    pick0(): Message;
    pick1(): Message;
    pick2(): Message;
    pick3(): Message;
    pick4(): Message;
    pick5(): Message;
    reset(): this;
    get(): number;
    getShort(): number;
    getInt(): number;
    getLong(): bigint;
    readBuffer(): Buffer;
    readCountedString(): null | string;
    readCustomValue(): null | number | bigint | string | Buffer | Date;
    parse0(): null;
    parse1(): number;
    parse2(): number;
    parse3(): number;
    parse4(): bigint;
    parse5(): Date;
    parse6(): Buffer;
    parse7(): string;
    get message(): Message;
  }
}
