const EndOfHeaders = 0;
const Custom = 1;
const StatusCode = 2;
const StatusPhrase = 3;
const Flag = 4;
const Token = 5;

class HeaderType {
  static EndOfHeaders = EndOfHeaders;

  static Custom = Custom;

  static StatusCode = StatusCode;

  static StatusPhrase = StatusPhrase;

  static Flag = Flag;

  static Token = Token;
}

module.exports = HeaderType;
module.exports.default = HeaderType;
module.exports.EndOfHeaders = EndOfHeaders;
module.exports.Custom = Custom;
module.exports.StatusCode = StatusCode;
module.exports.StatusPhrase = StatusPhrase;
module.exports.Flag = Flag;
module.exports.Token = Token;
