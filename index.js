const TaoMessageConsumer = require('./lib/consumer');
const HeaderType = require('./lib/header-type');
const MessageFields = require('./lib/message-fields');
const MessageKind = require('./lib/message-kind');
const MessageType = require('./lib/message-type');
const Message = require('./lib/message');
const ValueFormat = require('./lib/value-format');

module.exports = TaoMessageConsumer;
module.exports.default = TaoMessageConsumer;
module.exports.HeaderType = HeaderType;
module.exports.MessageFields = MessageFields;
module.exports.MessageKind = MessageKind;
module.exports.MessageType = MessageType;
module.exports.Message = Message;
module.exports.ValueFormat = ValueFormat;
