const { createHash, createSecretKey } = require('crypto');
const { networkInterfaces } = require('os');
const { EventEmitter, captureRejectionSymbol } = require('events');

const WebSocket = require('ws');
const { stringify, parse } = require('json-bigint')({ useNativeBigInt: true });

const logger = require('./logger');
const Message = require('./message');
const { PullRequest, Confirm } = require('./message-kind');
const {
  CONNECT, SEND, SENDACK, CONNECTACK,
} = require('./message-type');
const {
  APP_KEY, GROUP_NAME, INTRANET_IP, TIMESTAMP, SIGN, SDK, TYPE, CODE, TOKEN, CONTENT, ID, TOPIC,
} = require('./message-fields');

const kAddress = Symbol('kAddress');
const kAppKey = Symbol('kAppKey');
const kAppSecret = Symbol('kAppSecret');
const kGroupName = Symbol('kGroupName');
const kToken = Symbol('kToken');
const kOptions = Symbol('kOptions');
const kWebSocket = Symbol('kWebSocket');

function ipAddr() {
  return Object.values(networkInterfaces()).flat().find(
    ({ internal, family, address }) => !internal && (family === 'IPv4' || family === 4) && address !== '127.0.0.1',
  )?.address;
}

class TaoMessageConsumer extends EventEmitter {
  [kAddress] = 'ws://mc.api.taobao.com/';

  [kGroupName] = 'default';

  [kAppKey];

  [kAppSecret];

  [kToken];

  [kOptions] = {
    pullRequestInterval: 5e3,
    onErrorReconnection: 15e3,
    onCloseReconnection: 3e3,
    autoParseContentJson: true,
    autoReplyConfirmation: true,
    /** @since v0.3.6 */
    autoGroupedEmitting: true,
  };

  [kWebSocket];

  constructor(appKey, appSecret, groupName, options = {}) {
    super({ captureRejections: true });

    this[kAppKey] = appKey;
    this[kAppSecret] = createSecretKey(appSecret);
    if (groupName && typeof groupName === 'string') { this[kGroupName] = groupName; }
    this[kOptions] = {
      ...this[kOptions],
      ...(typeof groupName === 'object' ? groupName : options),
    };

    return /* eslint-disable-line no-constructor-return */ new Proxy(this, {
      get(target, topic) {
        if (typeof topic === 'symbol') { return target[topic]; }
        if (!Object.prototype.hasOwnProperty.call(target, topic) && !(topic in target)) {
          Object.defineProperty(target, topic, {
            value: function subscriber(callback) {
              if (typeof callback !== 'function') {
                throw new TypeError('The callback must be a function here.');
              }
              return this.on(topic, callback);
            },
          });
        }

        return target[topic];
      },
    });
  }

  sign(timestamp) {
    const sk = this[kAppSecret].export();
    return [
      [APP_KEY, this[kAppKey]],
      [GROUP_NAME, this[kGroupName]],
      [TIMESTAMP, `${timestamp}`],
    ].reduce(
      (h, [k, v]) => h.update(k).update(v),
      createHash('md5').update(sk),
    ).update(sk).digest('hex').toUpperCase();
  }

  /**
   * @param {Message} data - The data
   * @param {object|Function} [options] - The options
   * @param {Function} [cb] - The Callback
   * @returns {void}
   * @since v0.3.4
   */
  send(data, options = { mask: true, binary: true }, cb = undefined) {
    if (data instanceof Message) { this[kWebSocket]?.send(data.with(TOKEN, this[kToken]).buffer, options, cb); }
  }

  onopen() {
    const now = `${Date.now()}`;
    const msg = new Message(CONNECT)
      .with(APP_KEY, this[kAppKey])
      .with(GROUP_NAME, this[kGroupName])
      .with(TIMESTAMP, now)
      .with(SIGN, this.sign(now))
      .with(SDK, this.constructor.name)
      .with(INTRANET_IP, ipAddr());

    logger.onopen(stringify(msg));

    this.send(msg);

    if (this[kOptions].intervalId) { clearInterval(this[kOptions].intervalId); }

    this[kOptions].intervalId = setInterval(() => this.onpull(), this[kOptions].pullRequestInterval);
  }

  onpull() {
    const msg = new Message(SEND, PullRequest).with(TOKEN, this[kToken]);
    logger.onpull(stringify(msg));
    this.send(msg);
  }

  onping(data) {
    logger.onping('The channel is onping with data [%s].', data);
    this[kWebSocket]?.pong(data, true);
  }

  onerror(err) {
    logger.onerror('The channel is onerror(%s), let us reconnect.', stringify(err));
    this.reconnect(this[kOptions].onErrorReconnection);
  }

  onclose(code, reason) {
    logger.onclose('The channel is onclose(%d: %s), let us reconnect.', code, reason);
    this.reconnect(this[kOptions].onCloseReconnection);
  }

  [`process${CONNECTACK}`](msg) {
    if (!msg[CODE] && msg[TOKEN]) { this[kToken] = msg[TOKEN]; }
  }

  [`process${SEND}`](msg) {
    if (msg && msg[CONTENT] && msg[CONTENT][TOPIC]) {
      [msg[CONTENT][TOPIC]].concat(
        this[kOptions].autoGroupedEmitting
          ? msg[CONTENT][TOPIC].split(/^(([^_]+)_[^_]+)_.+/).slice(1, -1)
          : [],
      ).forEach((t) => this.emit(t, msg));
    }

    if (this[kOptions].autoReplyConfirmation && msg && msg[CONTENT] && msg[CONTENT][ID]) {
      const reply = new Message(SEND, Confirm).with(TOKEN, this[kToken]).with(ID, msg[CONTENT][ID]);
      logger.onmessage[SEND][Confirm](stringify(reply));
      this.send(reply);
    }
  }

  [`process${CONNECT}`]() { /* eslint-disable-line class-methods-use-this */ }

  [`process${SENDACK}`]() { /* eslint-disable-line class-methods-use-this */ }

  processundefined() { /* eslint-disable-line class-methods-use-this */ }

  [captureRejectionSymbol](err) { this.onerror(err); }

  onmessage(data, isBinary = true) {
    if (!isBinary) { return; }

    const msg = Message.from(data);

    if (
      this[kOptions].autoParseContentJson
      && msg[CONTENT][CONTENT]
      && typeof msg[CONTENT][CONTENT] === 'string'
      && /^\{.*\}$/.test(msg[CONTENT][CONTENT])) {
      Reflect.set(msg[CONTENT], CONTENT, parse(msg[CONTENT][CONTENT]));
    }

    logger.onmessage[msg[TYPE]](stringify(msg));

    this[`process${msg[TYPE]}`](msg);
  }

  reconnect(ms) {
    this[kWebSocket]?.terminate();

    if (this[kOptions].intervalId) { this[kOptions].intervalId = clearInterval(this[kOptions].intervalId); }
    if (this[kOptions].timeoutId) { this[kOptions].timeoutId = clearTimeout(this[kOptions].timeoutId); }

    this[kToken] = undefined;
    this[kWebSocket] = undefined;
    this[kOptions].timeoutId = setTimeout(() => this.connect(), ms);

    return this;
  }

  connect(address) {
    if (address) { this[kAddress] = address; }

    this[kWebSocket] = new WebSocket(this[kAddress])
      .on('message', (data, isBinary) => this.onmessage(data, isBinary))
      .on('close', (code, reason) => this.onclose(code, reason))
      .on('error', (err) => this.onerror(err))
      .on('ping', (data) => this.onping(data))
      .on('open', () => this.onopen());

    return this;
  }
}

module.exports = TaoMessageConsumer;
module.exports.default = TaoMessageConsumer;
