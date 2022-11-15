const None = 0;
const PullRequest = 1;
const Confirm = 2;
const Data = 3;
const Failed = 20;

function includes(value) { return [None, PullRequest, Confirm, Data, Failed].includes(value); }

function toPrimitive() { return '__kind'; }

class MessageKind {
  static None = None;

  static PullRequest = PullRequest;

  static Confirm = Confirm;

  static Data = Data;

  static Failed = Failed;

  static includes = includes;

  static [Symbol.toPrimitive] = toPrimitive;
}

module.exports = MessageKind;
module.exports.default = MessageKind;
module.exports.None = None;
module.exports.PullRequest = PullRequest;
module.exports.Confirm = Confirm;
module.exports.Data = Data;
module.exports.Failed = Failed;
module.exports.includes = includes;
module.exports[Symbol.toPrimitive] = toPrimitive;
