const { debuglog } = require('util');

const logger = debuglog('tmc');

logger.onping = debuglog('tmc:onping');
logger.onopen = debuglog('tmc:onopen');
logger.onpull = debuglog('tmc:onpull');
logger.onerror = debuglog('tmc:onerror');
logger.onclose = debuglog('tmc:onclose');
logger.onmessage = debuglog('tmc:onmessage');
logger.onmessage[0] = debuglog('tmc:onmessage:connect');
logger.onmessage[1] = debuglog('tmc:onmessage:connectack');
logger.onmessage[2] = debuglog('tmc:onmessage:send');
logger.onmessage[3] = debuglog('tmc:onmessage:sendack');
logger.onmessage[2][2] = debuglog('tmc:onmessage:send:confirm');

module.exports = logger;
module.exports.default = logger;
