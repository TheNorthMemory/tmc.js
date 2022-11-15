# Taobao Message Channel (tmc.js)

Events driven and chained Taobao Message Channel(TMC) for NodeJS

## 使用

`npm i tmc.js`

```js
import TMC from 'tmc.js';

new TMC('your_app_key', 'your_app_secret')
.on('taobao_trade_TradeChanged', msg => console.info(msg))
.taobao_trade_TradeClose(msg => console.info(msg))
.connect();
```

## API

**`new TMC(appKey: string, appSecret: BinaryLike, groupName?: string | object, options?: object)`**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appKey | `string` | 应用ID |
| appSecret | `BinaryLike` | 应用密钥 |
| groupName | `string` | 消息分组(可选，默认`default`) |
| options | `object` | 消费端配置参数(可选) |
| options.pullRequestInterval | `number` | 定时发送`pullRequest`请求时间间隔(默认`5000`毫秒) |
| options.onErrorReconnection | `number` | 当消费端出现错误，重试连接间隔(默认`15000`毫秒) |
| options.onCloseReconnection | `number` | 当消费端断开连接，重试连接间隔(默认`3000`毫秒) |
| options.autoParseContentJson | `boolean` | 自动解析推送消息`$.content.content`字段为对象(默认`true`) |
| options.autoReplyConfirmation | `boolean` | 以推送的`$.content.id`字段自动`Confirm`消息(默认`true`) |

## License

[MIT](LICENSE)
