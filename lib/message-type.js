const CONNECT = 0;
const CONNECTACK = 1;
const SEND = 2;
const SENDACK = 3;

function includes(value) { return [CONNECT, CONNECTACK, SEND, SENDACK].includes(value); }

class MessageType {
  static CONNECT = CONNECT;

  static CONNECTACK = CONNECTACK;

  static SEND = SEND;

  static SENDACK = SENDACK;

  static includes = includes;
}

module.exports = MessageType;
module.exports.default = MessageType;
module.exports.CONNECT = CONNECT;
module.exports.CONNECTACK = CONNECTACK;
module.exports.SEND = SEND;
module.exports.SENDACK = SENDACK;
module.exports.includes = includes;
