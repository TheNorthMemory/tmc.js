# tmc.js

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

**NODE_DEBUG=`<label>` 环境变量**

| label | 说明 |
| --- | --- |
| `tmc` | 开启全部`DEBUG`日志模式
| `tmc:onping` | 开启 `onping` 时的日志
| `tmc:onopen` | 开启 `onopen` 时的日志
| `tmc:onpull` | 开启 `onpull` 时的日志
| `tmc:onerror` | 开启 `onerror` 时的日志
| `tmc:onclose` | 开启 `onclose` 时的日志
| `tmc:onmessage` | 开启全部 `onmessage` 时的日志(即`From`淘宝消息)
| `tmc:onmessage:connect` | 开启消费端发起连接 `connect` 时的日志
| `tmc:onmessage:connectack` | 开启消费端回复连接 `connectack` 时的日志
| `tmc:onmessage:send` | 开启消费端接收到(即`From`淘宝)消息 `send` 时的日志
| `tmc:onmessage:sendack` | (暂未明确场景)
| `tmc:onmessage:send:confirm` | 开启消费端回复接收到的(即`From`淘宝消息) `send:confirm` 时的日志

## 支持的TOPICS

<details><summary>共计 81+ 类别，439+ 消息数</summary>

| 类别 | 消息数 |
| --- | --- |
| 淘宝交易 | 20 |
| 淘宝退款 | 13 |
| 淘宝商品 | 13 |
| 淘宝分销 | 23 |
| 淘宝点点 | 12 |
| 淘宝火车票 | 5 |
| 平台消息 | 7 |
| 交易全链路 | 3 |
| 淘宝机票 | 14 |
| 导购平台 | 21 |
| 淘宝汽车票 | 4 |
| 服务市场 | 9 |
| 天猫服务 | 16 |
| 天猫美妆 | 2 |
| 聚石塔 | 9 |
| 淘宝物流 | 1 |
| 阿里通信 | 17 |
| 天猫魔盒 | 2 |
| OpenIM消息 | 1 |
| 网上法庭 | 8 |
| 电子发票 | 20 |
| 航旅度假交易 | 8 |
| YunOS YoC | 2 |
| 阿里物联 | 2 |
| 全球购跨境物流 | 1 |
| 零售plus | 8 |
| 客户运营平台API | 12 |
| AE-交易 | 10 |
| 五道口配送 | 1 |
| 百川 | 2 |
| 闲鱼 | 14 |
| 闲鱼回收商消息 | 5 |
| 零售通POS开放平台消息 | 4 |
| DPAAS | 6 |
| AliGenius | 1 |
| 智慧门店下行消息 | 2 |
| 渠道中心API | 4 |
| 五道口订单 | 22 |
| 信息平台-采购 | 1 |
| 1688服务市场 | 1 |
| 酒店商品消息api | 9 |
| 新零售终端下行消息 | 1 |
| 新零售终端上行消息 | 4 |
| 欢行开放平台 | 1 |
| 阿里发票 | 5 |
| 大麦票单状态 | 1 |
| 五道口营销 | 4 |
| 酒店签约中心消息 | 3 |
| 蜂鸟物流 | 6 |
| 商旅API | 3 |
| 阿里健康-O2O中台 | 2 |
| 业务平台新零售-消息上行 | 2 |
| 大麦第三方票务供应商接入 | 5 |
| TVOS应用审核平台 | 1 |
| Gifting送礼 | 1 |
| 五道口商品 | 2 |
| HOMEAI | 1 |
| HOMEAI消息对接 | 5 |
| 零售通_公共 | 8 |
| 酒店标准库基础信息变更消息 | 2 |
| 菜鸟发货工作台 | 1 |
| IOT-智能制造 | 2 |
| 智能制造API | 1 |
| IoT售后解决方案 | 1 |
| OpenMall-API | 5 |
| 闲鱼已验货 | 6 |
| 阿里健康三方机构 | 2 |
| 聚石塔监控告警 | 2 |
| 大资产拍卖Top端拍品消息 | 2 |
| AE-任务平台消息 | 1 |
| 天猫汽车 | 5 |
| 阿信消息通知前台类目 | 1 |
| 阿里健康追溯码 | 1 |
| 自动驾驶API | 3 |
| MMC五盘货项目 | 5 |
| 银泰开放平台消息 | 2 |
| 阿里智付 | 1 |
| 代发管理 | 2 |
| 蚂蚁采购 | 1 |
| 阿里健康&一树-电商中台对接 | 2 |
| 阿里健康-疫苗 | 1 |

</details>

## 链接

- [淘宝开放平台-消息服务使用介绍](https://open.taobao.com/doc.htm?docId=101663&docType=1)

## License

[MIT](LICENSE)
