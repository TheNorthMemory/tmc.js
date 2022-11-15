const Void = 0;
const CountedString = 1;
const Byte = 2;
const Int16 = 3;
const Int32 = 4;
const Int64 = 5;
const FmtDate = 6;
const ByteArray = 7;

class ValueFormat {
  static Void = Void;

  static CountedString = CountedString;

  static Byte = Byte;

  static Int16 = Int16;

  static Int32 = Int32;

  static Int64 = Int64;

  static Date = FmtDate;

  static ByteArray = ByteArray;
}

module.exports = ValueFormat;
module.exports.default = ValueFormat;
module.exports.Void = Void;
module.exports.CountedString = CountedString;
module.exports.Byte = Byte;
module.exports.Int16 = Int16;
module.exports.Int32 = Int32;
module.exports.Int64 = Int64;
module.exports.Date = FmtDate;
module.exports.ByteArray = ByteArray;
