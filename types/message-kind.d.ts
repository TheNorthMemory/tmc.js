declare namespace MessageKind {
  type None = 0;
  type PullRequest = 1;
  type Confirm = 2;
  type Data = 3;
  type Failed = 20;
  interface includes {
    (value: any): boolean;
  }
  interface toPrimitive {
    (): '__kind';
  }
}

declare class MessageKind {
  static None: MessageKind.None;
  static PullRequest: MessageKind.PullRequest;
  static Confirm: MessageKind.Confirm;
  static Data: MessageKind.Data;
  static Failed: MessageKind.Failed;
  static includes: MessageKind.includes;
  static [Symbol.toPrimitive]: MessageKind.toPrimitive;
}
