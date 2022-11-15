declare namespace MessageType {
  type CONNECT = 0;
  type CONNECTACK = 1;
  type SEND = 2;
  type SENDACK = 3;
  interface includes {
    (value: any): boolean;
  }
}

declare class MessageType {
  static CONNECT: MessageType.CONNECT;
  static CONNECTACK: MessageType.CONNECTACK;
  static SEND: MessageType.SEND;
  static SENDACK: MessageType.SENDACK;
  static includes: MessageType.includes;
}
