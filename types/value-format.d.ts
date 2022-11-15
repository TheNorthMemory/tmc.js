declare namespace ValueFormat {
  type Void = 0;
  type CountedString = 1;
  type Byte = 2;
  type Int16 = 3;
  type Int32 = 4;
  type Int64 = 5;
  type Date = 6;
  type ByteArray = 7;
}

declare class ValueFormat {
  static Void: ValueFormat.Void;
  static CountedString: ValueFormat.CountedString;
  static Byte: ValueFormat.Byte;
  static Int16: ValueFormat.Int16;
  static Int32: ValueFormat.Int32;
  static Int64: ValueFormat.Int64;
  static Date: ValueFormat.Date;
  static ByteArray: ValueFormat.ByteArray;
}
