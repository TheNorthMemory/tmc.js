declare namespace HeaderType {
  type EndOfHeaders = 0;
  type Custom = 1;
  type StatusCode = 2;
  type StatusPhrase = 3;
  type Flag = 4;
  type Token = 5;
  interface includes {
    (value: any): boolean;
  }
}

declare class HeaderType {
  static EndOfHeaders: HeaderType.EndOfHeaders;
  static Custom: HeaderType.Custom;
  static StatusCode: HeaderType.StatusCode;
  static StatusPhrase: HeaderType.StatusPhrase;
  static Flag: HeaderType.Flag;
  static Token: HeaderType.Token;
  static includes: HeaderType.includes;
}
