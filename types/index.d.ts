/// <reference types="node" />
/// <reference path="header-type.d.ts" />
/// <reference path="message-fields.d.ts" />
/// <reference path="message-kind.d.ts" />
/// <reference path="message-type.d.ts" />
/// <reference path="message.d.ts" />
/// <reference path="message.in.d.ts" />
/// <reference path="message.out.d.ts" />
/// <reference path="value-format.d.ts" />

import { BinaryLike } from "crypto";
import { EventEmitter } from "events";

declare interface ConsumerOptions {
  /** @default 5000 */
  pullRequestInterval?: number;
  /** @default 15000 */
  onErrorReconnection?: number;
  /** @default 3000 */
  onCloseReconnection?: number;
  /** @default true */
  autoParseContentJson?: boolean;
  /** @default true */
  autoReplyConfirmation?: boolean;
  /** @default true @since v0.3.6 */
  autoGroupedEmitting?: boolean;
}

declare interface TaoMessageConstractor extends EventEmitter {
  new (appKey: string, appSecret: BinaryLike, options?: ConsumerOptions): TaoMessageConsumer;
  new (appKey: string, appSecret: BinaryLike, groupName?: string, options?: ConsumerOptions): TaoMessageConsumer;
  sign(timestamp: string): string;
  /** @since v0.3.4 */
  send(data: Message, cb?: (err?: Error) => void): void;
  /** @since v0.3.4 */
  send(data: Message, options?: { mask?: true, binary?: true, compress?: boolean, fin?: boolean }, cb?: (err: Error) => void): void;
  onopen(): void;
  onpull(): void;
  onping(data: Buffer): void;
  onerror(err: Error): void;
  onclose(code: number, reason: Buffer): void;
  onmessage(data: Buffer, isBinary: boolean): void;
  process0(): void;
  process1(msg: Message): void;
  process2(msg: Message): void;
  process3(): void;
  processundefined(): void;
  reconnect(ms: number): TaoMessageConsumer;
  connect(address?: string): TaoMessageConsumer;
}

declare interface TaoMessageSubscriber {
  [K: string]: TaoTopicSubscriber;
}

declare interface TaoTopicSubscriber {
  (fn: TaoMessageProcessor): TaoMessageConsumer;
}

declare interface TaoMessageProcessor {
  (this: TaoMessageConsumer, message: Message): void;
}

declare type TaoMessageConsumer = TaoMessageConstractor & TaoMessageSubscriber & TaoTopicsDescriptor & TaoEventsListener;

declare interface TaoTopicsDescriptor {
  /** {@link IncomingMessage.AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  alibaba_adlab_IotDevice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabIotDevice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  alibaba_adlab_OrderItemEtaUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemEtaUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  alibaba_adlab_OrderItemStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  alibaba_alicom_FlowGiftSendNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicomFlowGiftSendNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthBillProcessStatusNotify 阿里健康追溯码 > 单据处理状态通知} */
  alibaba_alihealth_BillProcessStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthBillProcessStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthDoctorMessage 阿里健康追溯码 > 医生、服务相关消息} */
  alibaba_alihealth_DoctorMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthDoctorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange 阿里健康追溯码 > 中台订单状态变化推送} */
  alibaba_alihealth_NrmopOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthOrderStatusChange 阿里健康追溯码 > 平台通知三方机构"订单状态变更"} */
  alibaba_alihealth_OrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeOrderStatusChange 阿里健康追溯码 > O2O订单状态变更通知} */
  alibaba_alihealth_TradeOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康追溯码 > 疫苗交易预约信息变动} */
  alibaba_alihealth_TradeVaccineSubscribeChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceDataPush 阿里物联 > 设备数据推送} */
  alibaba_alink_DeviceDataPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceMessage 阿里物联 > 设备报警消息} */
  alibaba_alink_DeviceMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  alibaba_aliqin_DigitalSmsTemplateDR(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  alibaba_aliqin_FcActiveIotcard(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcActiveIotcard) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  alibaba_aliqin_FcCallCdr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallRecord 阿里通信 > 录音回执} */
  alibaba_aliqin_FcCallRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcFlowUp 阿里通信 > 流量直充状态报告} */
  alibaba_aliqin_FcFlowUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcFlowUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcSmsDR 阿里通信 > 短消息发送结果报告} */
  alibaba_aliqin_FcSmsDR(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcSmsUp 阿里通信 > 短信上行} */
  alibaba_aliqin_FcSmsUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcSmsUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcTmpStatus 阿里通信 > 语音呼叫中间状态消息} */
  alibaba_aliqin_FcTmpStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcTmpStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFlowDirectCharge 阿里通信 > 流量直充} */
  alibaba_aliqin_FlowDirectCharge(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFlowDirectCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  alibaba_aliqin_IotPersonalConfirmNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知} */
  alibaba_aliqin_IotStatusNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  alibaba_aliqin_TaFcCallCdr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  alibaba_aliqin_TaFcSmsDR(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  alibaba_einvoice_ApplyUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceApplyUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息} */
  alibaba_einvoice_CompanyDoAction(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceCompanyDoAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  alibaba_einvoice_OrderRefundResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceOrderRefundResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  alibaba_einvoice_RegisterFlowChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  alibaba_einvoice_RegisterFlowCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  alibaba_einvoice_TaxDeviceOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceTaxDeviceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息} */
  alibaba_fuwu_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  alibaba_happytrip_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytripOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApply 电子发票 > 开票申请} */
  alibaba_invoice_Apply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyResult 电子发票 > 开票申请审核结果} */
  alibaba_invoice_ApplyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskOffline 电子发票 > 税盘下架单新增和更新通知} */
  alibaba_invoice_DiskOffline(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskOffline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceFlowBuket 电子发票 > 资源包开通/订购记录同步} */
  alibaba_invoice_FlowBuket(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceFlowBuket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInvoiceApply 电子发票 > 税控服务开票申请} */
  alibaba_invoice_InvoiceApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceLogistics 电子发票 > 发票对外通知物流信息} */
  alibaba_invoice_Logistics(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）} */
  alibaba_invoice_PaperOpsReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePaperOpsReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePreConsulting 电子发票 > 电子发票售前咨询} */
  alibaba_invoice_PreConsulting(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePreConsulting) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQuery 电子发票 > 数据查询请求} */
  alibaba_invoice_Query(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQueryInvoice 电子发票 > 查询发票信息} */
  alibaba_invoice_QueryInvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQueryInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegist 电子发票 > 入驻阿里发票平台} */
  alibaba_invoice_Regist(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegist) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceResultReturn 电子发票 > 开票请求结果} */
  alibaba_invoice_ResultReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceStatusChange 电子发票 > 发票状态变更消息} */
  alibaba_invoice_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxChange 电子发票 > 商家税号变更} */
  alibaba_invoice_TaxChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnissue 电子发票 > 创建未开具发票通知} */
  alibaba_invoice_Unissue(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstBmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化} */
  alibaba_lst_BmOrderLogisticsChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstBmOrderLogisticsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstBroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  alibaba_lst_BroadcastSelfOrderShipChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstBroadcastSelfOrderShipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstCashierSync 零售通_公共 > 收银快照同步消息} */
  alibaba_lst_CashierSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstCashierSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstGoodsSync 零售通_公共 > 商品同步消息} */
  alibaba_lst_GoodsSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstGoodsSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstInventorySync 零售通_公共 > 商品库存修改同步消息} */
  alibaba_lst_InventorySync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstInventorySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstMsgTest 零售通_公共 > 消息测试} */
  alibaba_lst_MsgTest(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstMsgTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息} */
  alibaba_lst_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstRefundChange 零售通_公共 > 订单退单} */
  alibaba_lst_RefundChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstRefundChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  alibaba_lst_SpeakerAdvertPlayRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  alibaba_lst_SupplierOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSupplierOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息} */
  alibaba_mmc_OpenStockAlterNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcOpenStockAlterNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息} */
  alibaba_mmc_OpenStockItemAlter(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcOpenStockItemAlter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息} */
  alibaba_mmc_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcPriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息} */
  alibaba_mmc_PriceUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcPriceUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcRefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息} */
  alibaba_mmc_RefundOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitorEventSendMessage 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  alibaba_monitor_EventSendMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitorEventSendMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitorMessageSend 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  alibaba_monitor_MessageSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitorMessageSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrder 银泰开放平台消息 > 销售单状态变更} */
  alibaba_mos_SaleOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  alibaba_mos_SaleOrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaAbandonCert 网上法庭 > 作废存证消息接口} */
  alibaba_nazca_AbandonCert(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaAbandonCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaQueryChargeNum 网上法庭 > 查询收费数量} */
  alibaba_nazca_QueryChargeNum(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaQueryChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaSaveCert 网上法庭 > 发起存证消息接口} */
  alibaba_nazca_SaveCert(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaSaveCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaUpdateChargeNum 网上法庭 > 更新收费数量} */
  alibaba_nazca_UpdateChargeNum(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaUpdateChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  alibaba_nlife_BToBTradeStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToBTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  alibaba_nlife_BToCTradeOrderSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToCTradeOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  alibaba_nlife_BtoBTradeDeliverNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  alibaba_nlife_BtoBTradeEffectiveNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  alibaba_nlife_BtobTradeRefundConfirmMsgNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  alibaba_nlife_BtobTradeRefundNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  alibaba_nlife_InstorageDiffAuditNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息} */
  alibaba_nlife_ItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatformFulfilTask 天猫服务 > 服务供应链核销单消息} */
  alibaba_serviceplatform_FulfilTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatformFulfilTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatformServiceOrder 天猫服务 > 服务供应链服务单消息} */
  alibaba_serviceplatform_ServiceOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatformServiceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSpNotifyPaymentResult 阿里智付 > 通知付款结果} */
  alibaba_sp_NotifyPaymentResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaSpNotifyPaymentResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTaxEmployeeSignResult 阿里发票 > 税优雇员签约结果消息} */
  alibaba_tax_EmployeeSignResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTaxEmployeeSignResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTaxSalaryPayResult 阿里发票 > 税优发薪结果通知} */
  alibaba_tax_SalaryPayResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTaxSalaryPayResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  alibaba_tianji_ContractOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiContractOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  alibaba_tianji_OrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelCommentAudit 五道口订单 > 差评回评} */
  alibaba_wdk_ChannelCommentAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelCommentAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCancel 五道口订单 > 五道口售中取消外部订单消息} */
  alibaba_wdk_ChannelOrderCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit 五道口订单 > 客服审核退款结果} */
  alibaba_wdk_ChannelOrderCsRefundAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsUserrefund 五道口订单 > 客服代客发起售后退款(整单/部分)} */
  alibaba_wdk_ChannelOrderCsUserrefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCsUserrefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderStatusChange 五道口订单 > 订单状态变更消息} */
  alibaba_wdk_ChannelOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelStockSync 五道口订单 > 库存同步} */
  alibaba_wdk_ChannelStockSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelStockSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillOrderChange 五道口订单 > 售中履约变更消息} */
  alibaba_wdk_FulfillOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkStoreItemUpdate 五道口订单 > 商家渠道商品变动消息} */
  alibaba_wdk_StoreItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkStoreItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkitemWarehouseSkuModify 五道口商品 > 五道口仓商品变更消息} */
  alibaba_wdkitem_WarehouseSkuModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkitemWarehouseSkuModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopRexAccountChange 五道口订单 > Rex用户信息变更消息} */
  alibaba_wdkop_RexAccountChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopRexAccountChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenOrderMessage 五道口订单 > 五道口交易状态变更消息通知} */
  alibaba_wdkopen_OrderMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopenOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenPriceAdjust 五道口订单 > 采购价变更消息} */
  alibaba_wdkopen_PriceAdjust(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopenPriceAdjust) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenRefundMessage 五道口订单 > 同城零售逆向交易消息} */
  alibaba_wdkopen_RefundMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopenRefundMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderFulfillStatusChange 五道口订单 > 五道口订单履约状态变更消息} */
  alibaba_wdkorder_FulfillStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderFulfillStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderInsuranceOrder 五道口订单 > 共享库存保险正向投保消息} */
  alibaba_wdkorder_InsuranceOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderInsuranceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderInsuranceRefund 五道口订单 > 共享库存保险逆向理赔消息} */
  alibaba_wdkorder_InsuranceRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderInsuranceRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderFulfillPush 五道口订单 > 订单履约状态变更消息} */
  alibaba_wdkorder_OrderFulfillPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderFulfillPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderFulfillTokenPush 五道口订单 > 履约状态变更消息} */
  alibaba_wdkorder_OrderFulfillTokenPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderFulfillTokenPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderStatusPush 五道口订单 > 猫超订单数据变更消息通知} */
  alibaba_wdkorder_OrderStatusPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderRefundOrgPoint 五道口订单 > 逆向单企业积分消息发送} */
  alibaba_wdkorder_RefundOrgPoint(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderRefundOrgPoint) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderRefundSuccess 五道口订单 > 五道口淘鲜达逆向订单消息} */
  alibaba_wdkorder_RefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderSoPo 五道口订单 > 共享库存SOPO} */
  alibaba_wdkorder_SoPo(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderSoPo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderStatusChange 五道口订单 > 五道口订单状态变更消息} */
  alibaba_wdkorder_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderVoucherStatus 五道口订单 > 淘鲜达订单优惠券状态变更} */
  alibaba_wdkorder_VoucherStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdktradeCouponInstance 五道口营销 > 营销券实例消息} */
  alibaba_wdktrade_CouponInstance(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdktradeCouponInstance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunioDataTransfer 平台消息 > YunIO数据流转} */
  alibaba_yunio_DataTransfer(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunioDataTransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步} */
  alicom_axb_SubsEventSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxbSubsEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  aliexpress_aeia_TaskplatformInterestNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeiaTaskplatformInterestNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderFinish AE-交易 > 交易成功} */
  aliexpress_order_Finish(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderFundProcessing AE-交易 > 资金处理中} */
  aliexpress_order_FundProcessing(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderFundProcessing) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderInCancel AE-交易 > 取消订单中} */
  aliexpress_order_InCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderInCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderPlaceOrderSuccess AE-交易 > 下单成功} */
  aliexpress_order_PlaceOrderSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderPlaceOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderRiskControl AE-交易 > 风控24小时} */
  aliexpress_order_RiskControl(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderRiskControl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderSellerPartSendGoods AE-交易 > 等待部分发货} */
  aliexpress_order_SellerPartSendGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderSellerPartSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  aliexpress_order_WaitBuyerAcceptGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitBuyerAcceptGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitGroupSuccess AE-交易 > 等待成团} */
  aliexpress_order_WaitGroupSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitGroupSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitSellerExamineMoney AE-交易 > 待卖家验款} */
  aliexpress_order_WaitSellerExamineMoney(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitSellerExamineMoney) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitSellerSendGoods AE-交易 > 等待卖家发货} */
  aliexpress_order_WaitSellerSendGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitSellerSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  alihealth_cep_OrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCepOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  alihealth_ys_OrderMemConsume(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderMemConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  alihealth_ys_OrderPushConsume(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderPushConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgentNotify 淘宝机票 > 商家机票业务通知} */
  alitrip_agent_Notify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgentNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripCorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  alitrip_btrip_CorpSignCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripCorpSignCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  alitrip_btrip_ExceedApplySubmit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripExceedApplySubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChange 淘宝机票 > 航变消息} */
  alitrip_flight_Change(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesrFlightChange 淘宝机票 > 航变数据推送} */
  alitrip_iesr_FlightChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesrFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesrTicketMessage 淘宝机票 > 国际运价采购票消息} */
  alitrip_iesr_TicketMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesrTicketMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeChangeMsg 淘宝机票 > 国际机票改签订单状态消息} */
  alitrip_ietrade_ChangeMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetradeChangeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeOrderMsg 淘宝机票 > 国际机票订单消息} */
  alitrip_ietrade_OrderMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetradeOrderMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeRefundMsg 淘宝机票 > 国际机票退票订单状态消息} */
  alitrip_ietrade_RefundMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetradeRefundMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  alitrip_train_AgentStopQuery(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainAgentStopQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelOrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息} */
  alitrip_travel_OrderChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelOrderChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelPersonChanged 航旅度假交易 > 出行人信息变更消息} */
  alitrip_travel_PersonChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelPersonChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelVisaService 航旅度假交易 > 签证消息服务} */
  alitrip_travel_VisaService(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelVisaService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticketTravellerCreate 航旅度假交易 > 旅行机票交易创建} */
  alitrip_tripticket_TravellerCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTripticketTravellerCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisaTradeDone 航旅度假交易 > 在线签证交易完成消息} */
  alitrip_visa_TradeDone(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripVisaTradeDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步} */
  aliyun_iot_OrderSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIotOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustryCancelInquiry 天猫服务 > 送货入户并安装取消询价接口} */
  ascp_insdustry_CancelInquiry(fn: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustryCancelInquiry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRightTradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  banma_right_TradeCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRightTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatformLogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  cainiao_consignplatform_LogisiticsDetail(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatformLogisiticsDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIotAftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  cainiao_iot_AftersalesTicket(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIotAftersalesTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  damai_distribution_PerformCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  damai_distribution_PerformStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  damai_distribution_PreSaleToNow(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPreSaleToNow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  damai_distribution_ProjectStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionProjectStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  damai_distribution_TicketItemStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionTicketItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  damai_trade_TicketStatusPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTradeTicketStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化} */
  fliggy_btrip_HotelDistributionOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtripHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务} */
  fliggy_jipiao_FlightChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiaoFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  fliggy_ticket_OrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  fliggy_ticket_OrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  fliggy_ticket_VerifyNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketVerifyNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmFail 服务市场 > 收入确认失败} */
  fuwu_confirm_Fail(fn: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmFail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmSuccess 服务市场 > 收入确认成功} */
  fuwu_confirm_Success(fn: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  gov_auction_PushVehicleDataToBM(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionPushVehicleDataToBM) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  gov_auction_VehicleDataPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionVehicleDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreementStatusChange 闲鱼 > 闲鱼代扣消息通知} */
  idle_agreement_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreementStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvItemSyn 闲鱼已验货 > 已验货商品消息} */
  idle_appraiseisv_ItemSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvOrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  idle_appraiseisv_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvRefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  idle_appraiseisv_RefundSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvRefundSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentOrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  idle_consignment_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentiiOrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  idle_consignmentii_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentiiOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  idle_recycle_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息} */
  idle_recycle_RefundStatusModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleRefundStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvGlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知} */
  idle_topisv_GlobalProductNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvGlobalProductNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知} */
  idle_topisv_ItemNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvItemNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvRefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知} */
  idle_topisv_RefundNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvRefundNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvTradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知} */
  idle_topisv_TradeNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvTradeNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息} */
  idle_tranferpay_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpayOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  jae_trade_PaidSuccessed(fn: (this: TaoMessageConsumer, message: IncomingMessage.JaeTradePaidSuccessed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplierBroadcastFastRefundMessage 零售通_公共 > 零售通广播极速退款消息} */
  lst_supplier_BroadcastFastRefundMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplierBroadcastFastRefundMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplierFastRefundMessageCreate 零售通_公共 > 品牌商极速退款消息创建} */
  lst_supplier_FastRefundMessageCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplierFastRefundMessageCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompassDockInfoChange 五道口配送 > 鸟潮站点变更消息} */
  niaochao_tccompass_DockInfoChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompassDockInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompassMaterialCodeUpdate 五道口配送 > 物资箱号变动消息} */
  niaochao_tccompass_MaterialCodeUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompassMaterialCodeUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompassWarehouseNetworkChange 五道口配送 > 仓网络变更消息} */
  niaochao_tccompass_WarehouseNetworkChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompassWarehouseNetworkChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息} */
  taobao_ag_RefundSignInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgRefundSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  taobao_aps_CommentAdd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsCommentAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsNewFeedback 平台消息 > 收到舆情} */
  taobao_aps_NewFeedback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsNewFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  taobao_axin_RefundCallBack(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinRefundCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活} */
  taobao_baichuan_ASODeviceActivate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanASODeviceActivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息} */
  taobao_baichuan_PasswordRuleChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanPasswordRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmcShortMessageStatus 导购平台 > 短信状态} */
  taobao_bmc_ShortMessageStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmcShortMessageStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePay 淘宝汽车票 > 自助机付款成功结果} */
  taobao_bus_TVMTradePay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTVMTradePay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知} */
  taobao_bus_TVMTradePayStatusNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTVMTradePayStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息} */
  taobao_bus_TVMTradePaySuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTVMTradePaySuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTradePayStatus 淘宝汽车票 > 交易支付状态节点} */
  taobao_bus_TradePayStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTradePayStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarleaseFreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息} */
  taobao_carlease_FreeDpOrderMsgSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCarleaseFreeDpOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentOrderPaid 淘宝交易 > 内容开放短视频模板支付消息} */
  taobao_content_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  taobao_daifa_DistributorOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaDistributorOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  taobao_daifa_SupplierOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaSupplierOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDdPush 淘宝点点 > 淘点点消息推送} */
  taobao_dd_Push(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDdPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  taobao_diandian_ServeOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandianServeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasAuthTokenCreate DPAAS > dpaas三方服务token} */
  taobao_dpaas_AuthTokenCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasAuthTokenCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerFlow DPAAS > 客流新增及会员到店消息} */
  taobao_dpaas_CustomerFlow(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasCustomerFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerUpload DPAAS > 客户上传图片} */
  taobao_dpaas_CustomerUpload(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasCustomerUpload) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerUploadAck DPAAS > 会员人脸信息更新} */
  taobao_dpaas_CustomerUploadAck(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasCustomerUploadAck) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasEquipmentCreate DPAAS > 创建设备} */
  taobao_dpaas_EquipmentCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasEquipmentCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasFaceToCustomerAck DPAAS > 会员标示消息推送} */
  taobao_dpaas_FaceToCustomerAck(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasFaceToCustomerAck) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceBuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  taobao_einvoice_BuyerConfirmSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceBuyerConfirmSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流} */
  taobao_einvoice_InvoiceResultReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerAgree 淘宝分销 > 经销采购单审核通过} */
  taobao_fenxiao_DealerAgree(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerClose 淘宝分销 > 经销采购单关闭} */
  taobao_fenxiao_DealerClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerConfirm 淘宝分销 > 经销采购单采购成功} */
  taobao_fenxiao_DealerConfirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerCreate 淘宝分销 > 经销采购单创建} */
  taobao_fenxiao_DealerCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerInstock 淘宝分销 > 经销采购单入库} */
  taobao_fenxiao_DealerInstock(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerInstock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerModify 淘宝分销 > 经销采购单修改} */
  taobao_fenxiao_DealerModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerPay 淘宝分销 > 经销采购单付款} */
  taobao_fenxiao_DealerPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerRefuse 淘宝分销 > 经销采购单拒绝通过} */
  taobao_fenxiao_DealerRefuse(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerRefuse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerShipped 淘宝分销 > 经销采购单已发货} */
  taobao_fenxiao_DealerShipped(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderClosed 淘宝分销 > 采购单关闭消息消息} */
  taobao_fenxiao_FxOrderClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderCreate 淘宝分销 > 采购单创建消息} */
  taobao_fenxiao_FxOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderModifyConsign 淘宝分销 > 分销属性变更} */
  taobao_fenxiao_FxOrderModifyConsign(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderModifyConsign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderModifyPrice 淘宝分销 > 修改采购单价格消息} */
  taobao_fenxiao_FxOrderModifyPrice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderModifyPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderPaid 淘宝分销 > 采购单付款消息} */
  taobao_fenxiao_FxOrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderShipped 淘宝分销 > 采购单发货消息} */
  taobao_fenxiao_FxOrderShipped(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderSuccess 淘宝分销 > 采购单确认收货消息} */
  taobao_fenxiao_FxOrderSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  taobao_fenxiao_FxRefundAgree(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  taobao_fenxiao_FxRefundClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  taobao_fenxiao_FxRefundCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  taobao_fenxiao_FxRefundRefuseGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  taobao_fenxiao_FxRefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  taobao_fenxiao_FxTradeRefundCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  taobao_fenxiao_FxTradeRefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyCommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息} */
  taobao_fliggy_CommonContractSign(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyCommonContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  taobao_fliggy_HspHicItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHicItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySignStatus 酒店签约中心消息 > 飞猪签约状态消息} */
  taobao_fliggy_SignStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySignStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息} */
  taobao_fliggy_StdHotelModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdHotelModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息} */
  taobao_fliggy_StdRoomTypeModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdRoomTypeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderClosed 服务市场 > 订单关闭消息} */
  taobao_fuwu_OrderClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderCreated 服务市场 > 订单创建消息} */
  taobao_fuwu_OrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderPaid 服务市场 > 订单支付消息} */
  taobao_fuwu_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuServiceOpen 服务市场 > 服务开通消息} */
  taobao_fuwu_ServiceOpen(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuServiceOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuWitkeySyncModeling 服务市场 > 威客同步建模数据} */
  taobao_fuwu_WitkeySyncModeling(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuWitkeySyncModeling) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  taobao_globalbuys_SeamailOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  taobao_homeai_CaseSyncResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiCaseSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  taobao_homeai_LayoutTransferResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiLayoutTransferResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系} */
  taobao_homeai_ModelSkuRelation(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiModelSkuRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息} */
  taobao_homeai_RenderRequest(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiRenderRequest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelCreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息} */
  taobao_hotel_CreditToPreHotelStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelCreditToPreHotelStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息} */
  taobao_hotel_SearchMonitor(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchTrigger 酒店签约中心消息 > 热搜酒店消息} */
  taobao_hotel_SearchTrigger(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchTrigger) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息} */
  taobao_istore_GiftingMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstoreGiftingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemAdd 淘宝商品 > 商品新增消息} */
  taobao_item_ItemAdd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDelete 淘宝商品 > 商品删除消息} */
  taobao_item_ItemDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息} */
  taobao_item_ItemDownshelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishCc 淘宝商品 > 小二CC商品消息} */
  taobao_item_ItemPunishCc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemPunishCc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishDelete 淘宝商品 > 小二删除商品消息} */
  taobao_item_ItemPunishDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemPunishDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishDownshelf 淘宝商品 > 小二下架商品消息} */
  taobao_item_ItemPunishDownshelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemPunishDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息} */
  taobao_item_ItemRecommendAdd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemRecommendAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息} */
  taobao_item_ItemRecommendDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemRecommendDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息} */
  taobao_item_ItemSkuZeroStock(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemSkuZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemStockChanged 淘宝商品 > 修改商品库存消息} */
  taobao_item_ItemStockChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemStockChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpdate 淘宝商品 > 商品更新消息} */
  taobao_item_ItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息} */
  taobao_item_ItemUpshelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息} */
  taobao_item_ItemZeroStock(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  taobao_jipiao_AncillaryOrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoAncillaryOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  taobao_jipiao_JipiaoModifyOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  taobao_jipiao_JipiaoOrderStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  taobao_jipiao_JipiaoRefundOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  taobao_jipiao_SellerOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  taobao_jipiao_SellerRefundOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知} */
  taobao_live_AgencyItemChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAgencyItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveFeedRelated 淘宝直播API > 淘宝直播上下播消息} */
  taobao_live_FeedRelated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveFeedRelated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveTcpOrder 淘宝直播API > 淘宝直播订单消息} */
  taobao_live_TcpOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveTcpOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  taobao_logistics_LogsticDetailTrace(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsLogsticDetailTrace) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddressResultNotify 聚石塔 > 自助改地址结果消息通知} */
  taobao_modifyaddress_ResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddressResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorderConsistencyResult 聚石塔 > 订单一致性校验消息} */
  taobao_modifyorder_ConsistencyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorderConsistencyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyskuResultNotify 聚石塔 > 修改商品信息结果消息} */
  taobao_modifysku_ResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyskuResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOcTradeTagChanged 交易全链路 > oc订单标签变更} */
  taobao_oc_TradeTagChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOcTradeTagChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccountDataSync 导购平台 > openaccount数据同步} */
  taobao_openaccount_DataSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccountDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmAuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  taobao_opencrm_AuthTouchMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmAuthTouchMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  taobao_opencrm_CardEstTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardEstTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  taobao_opencrm_CardTplExamine(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstResult 客户运营平台API > 人群快照生成结果} */
  taobao_opencrm_CrowdInstResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  taobao_opencrm_CrowdInstSaveResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstSaveResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmDigitalTplExamine 客户运营平台API > 数字短信模板审核消息} */
  taobao_opencrm_DigitalTplExamine(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmDigitalTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFeedback 客户运营平台API > 反馈tmc} */
  taobao_opencrm_Feedback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberGradeChange 客户运营平台API > 会员等级变更} */
  taobao_opencrm_MemberGradeChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberGradeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmNodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  taobao_opencrm_NodeExecuteFinished(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmNodeExecuteFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmOpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  taobao_opencrm_OpenStrategyEvent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmOpenStrategyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  taobao_opencrm_SellerDimensionCharge(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmSellerDimensionCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageBill 客户运营平台API > 短信账单} */
  taobao_opencrm_ShortMessageBill(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmShortMessageBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmUtouch 客户运营平台API > 智能外呼回执} */
  taobao_opencrm_Utouch(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmUtouch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenimOffMsgPush OpenIM消息 > openim 离线消息推送} */
  taobao_openim_OffMsgPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenimOffMsgPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallAlarmMsg OpenMall-API > Openmall告警消息通知} */
  taobao_openmall_AlarmMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallAlarmMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallItemChanged OpenMall-API > Openmall商品变更消息} */
  taobao_openmall_ItemChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallItemStockChanged OpenMall-API > openmall商品库存变更消息通知} */
  taobao_openmall_ItemStockChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallItemStockChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallRefundChanged OpenMall-API > OpenMall退款单变更} */
  taobao_openmall_RefundChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallRefundChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallTradeChanged OpenMall-API > 订单消息通知} */
  taobao_openmall_TradeChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallTradeChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOsActivityCompleted 营销平台 > 前N有礼活动开奖消息} */
  taobao_os_ActivityCompleted(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOsActivityCompleted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息} */
  taobao_rdcaligenius_OrderMsgSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligeniusOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  taobao_recycle_OfnPreRedPacketSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycleOfnPreRedPacketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息} */
  taobao_refund_RefundBlockMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundBlockMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息} */
  taobao_refund_RefundBuyerModifyAgreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundBuyerModifyAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息} */
  taobao_refund_RefundBuyerReturnGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundClosed 淘宝退款 > 退款关闭消息} */
  taobao_refund_RefundClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundCreateMessage 淘宝退款 > 发表退款留言消息} */
  taobao_refund_RefundCreateMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundCreateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundCreated 淘宝退款 > 退款创建消息} */
  taobao_refund_RefundCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息} */
  taobao_refund_RefundSellerAgreeAgreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundSellerAgreeAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息} */
  taobao_refund_RefundSellerRefuseAgreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundSellerRefuseAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSuccess 淘宝退款 > 退款成功消息} */
  taobao_refund_RefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息} */
  taobao_refund_RefundableCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息} */
  taobao_refund_RefundableMarked(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  taobao_refund_TaobaoInterApplied(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoInterApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  taobao_refund_TaobaoIntervened(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoIntervened) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更} */
  taobao_rhino_DeviceStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoDeviceStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappAppSubChange 平台消息 > 用户订阅变更消息} */
  taobao_smartapp_AppSubChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappAppSubChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanAuctionChange 导购平台 > 商品信息变更} */
  taobao_tae_BaichuanAuctionChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanAuctionChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeClosed 导购平台 > 交易关闭} */
  taobao_tae_BaichuanTradeClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeCreated 导购平台 > 创建订单} */
  taobao_tae_BaichuanTradeCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradePaidDone 导购平台 > 付款成功} */
  taobao_tae_BaichuanTradePaidDone(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradePaidDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeRefundCreated 导购平台 > 创建退款消息} */
  taobao_tae_BaichuanTradeRefundCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeRefundSuccess 导购平台 > 退款成功} */
  taobao_tae_BaichuanTradeRefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeSuccess 导购平台 > 交易成功} */
  taobao_tae_BaichuanTradeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemDownShelf 导购平台 > 商品下架} */
  taobao_tae_ItemDownShelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemDownShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemImageChange 导购平台 > 商品主图变更} */
  taobao_tae_ItemImageChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemImageChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemPriceChange 导购平台 > 订阅的商品变更消息} */
  taobao_tae_ItemPriceChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuDelete 导购平台 > sku删除} */
  taobao_tae_ItemSkuDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSkuDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuPublish 导购平台 > sku发布} */
  taobao_tae_ItemSkuPublish(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSkuPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuSoldOut 导购平台 > 商品sku售空} */
  taobao_tae_ItemSkuSoldOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSkuSoldOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSoldOut 导购平台 > 商品售空} */
  taobao_tae_ItemSoldOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSoldOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSubscribe 导购平台 > 商品订阅成功} */
  taobao_tae_ItemSubscribe(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSubscribe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemTitleChange 导购平台 > 商品标题变更} */
  taobao_tae_ItemTitleChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemTitleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemUnSubscribe 导购平台 > 取消商品订阅} */
  taobao_tae_ItemUnSubscribe(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemUnSubscribe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemUpShelf 导购平台 > 商品上架} */
  taobao_tae_ItemUpShelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemUpShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopAuthCancel 平台消息 > 取消授权消息通知} */
  taobao_top_AuthCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopAuthCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopProcessCallback 平台消息 > 工作流执行回调消息} */
  taobao_top_ProcessCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopProcessCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成} */
  taobao_topats_TaskComplete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopatsTaskComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeAdvanceDisburse 淘宝交易 > 订单极速放款成功消息} */
  taobao_trade_AdvanceDisburse(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeAdvanceDisburse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  taobao_trade_TradeAlipayCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  taobao_trade_TradeBuyerPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerStepPay 淘宝交易 > 分阶段订单付定金} */
  taobao_trade_TradeBuyerStepPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerStepPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeChanged 淘宝交易 > 订单信息变更消息} */
  taobao_trade_TradeChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeClose 淘宝交易 > 关闭交易消息} */
  taobao_trade_TradeClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息} */
  taobao_trade_TradeCloseAndModifyDetailOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCloseAndModifyDetailOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCreate 淘宝交易 > 创建淘宝交易消息} */
  taobao_trade_TradeCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeDelayConfirmPay 淘宝交易 > 延长收货时间消息} */
  taobao_trade_TradeDelayConfirmPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeDelayConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息} */
  taobao_trade_TradeLogisticsAddressChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeLogisticsAddressChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeMemoModified 淘宝交易 > 交易备注修改消息} */
  taobao_trade_TradeMemoModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeMemoModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeModifyFee 淘宝交易 > 修改交易费用消息} */
  taobao_trade_TradeModifyFee(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeModifyFee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息} */
  taobao_trade_TradePartlyConfirmPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePartlyConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlyRefund 淘宝交易 > 子订单退款成功消息} */
  taobao_trade_TradePartlyRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePartlyRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息} */
  taobao_trade_TradePartlySellerShip(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePartlySellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息} */
  taobao_trade_TradeRated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeRated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息} */
  taobao_trade_TradeSellerShip(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息} */
  taobao_trade_TradeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  taobao_trade_TradeTimeoutRemind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainAgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  taobao_train_AgentQueryInfoNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainAgentQueryInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainOrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  taobao_train_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  taobao_train_ThirdPartyTradeNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainThirdPartyTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainTradeNotify 淘宝火车票 > 火车票订单消息} */
  taobao_train_TradeNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  taobao_uscesl_AlarmCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslAlarmCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  taobao_uscesl_BindResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiGrabOrderResult 淘宝点点 > 点点送抢单结果通知消息} */
  taobao_waimai_GrabOrderResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiGrabOrderResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderClose 淘宝点点 > 淘点点外卖订单关闭消息通知} */
  taobao_waimai_OrderClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplain 淘宝点点 > 点点送订单投诉} */
  taobao_waimai_OrderComplain(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderComplain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplainCancel 淘宝点点 > 点点送订单撤诉} */
  taobao_waimai_OrderComplainCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderComplainCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplainResult 淘宝点点 > 点点送订单投诉结果} */
  taobao_waimai_OrderComplainResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderComplainResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderDispatch 淘宝点点 > 点点送订单通知消息} */
  taobao_waimai_OrderDispatch(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderDispatchSimple 淘宝点点 > 点点送派单通知} */
  taobao_waimai_OrderDispatchSimple(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderDispatchSimple) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderPush 淘宝点点 > 点点送接单广播通知消息} */
  taobao_waimai_OrderPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderRemind 淘宝点点 > 点点送催单消息通知} */
  taobao_waimai_OrderRemind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOuterOrderDispatch 淘宝点点 > 点点送外部订单通知消息} */
  taobao_waimai_OuterOrderDispatch(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOuterOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  taobao_wisdomstore_RecognitionNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  taobao_wisdomstore_RecognitionPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  taobao_xianyu_RentalItemReturnCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  taobao_xianyu_RentalItemReturnReserved(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnReserved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消} */
  taobao_xianyu_RentalOrderCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建} */
  taobao_xianyu_RentalOrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息} */
  taobao_xiaowei_Message(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoweiMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  tmall_aliauto_StepOrderPartConfirmed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliautoStepOrderPartConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  tmall_auto_TradeModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTradeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  tmall_auto_TwoWheelsReceiptCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTwoWheelsReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarContractSign 天猫汽车 > 合同签署消息} */
  tmall_car_ContractSign(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarFinanceMsg 天猫汽车 > 汽车金融消息} */
  tmall_car_FinanceMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarFinanceMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelApplyOrderChange 渠道中心API > 申请单变更消息} */
  tmall_channel_ApplyOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelApplyOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelDeliverOrderChange 渠道中心API > 发货单消息变更} */
  tmall_channel_DeliverOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelDeliverOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelPurchaseOrderChange 渠道中心API > 采购单变更消息} */
  tmall_channel_PurchaseOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelPurchaseOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelStopOrderChange 渠道中心API > 停止发货单变更消息} */
  tmall_channel_StopOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelStopOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuAnomalyRecourse 天猫服务 > 天猫服务平台一键求助单消息队列} */
  tmall_fuwu_AnomalyRecourse(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuAnomalyRecourse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuAnomalyRecourseStatusUpdate 天猫服务 > 一键求助状态变更消息} */
  tmall_fuwu_AnomalyRecourseStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuAnomalyRecourseStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuLogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  tmall_fuwu_LogisticsInfoMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuLogisticsInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceItemUpdate 天猫服务 > 服务商品信息变更消息} */
  tmall_fuwu_ServiceItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuServiceItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceMonitorMessage 天猫服务 > 服务预警消息} */
  tmall_fuwu_ServiceMonitorMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuServiceMonitorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceStoreRegister 天猫服务 > 服务网点注册消息} */
  tmall_fuwu_ServiceStoreRegister(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuServiceStoreRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送} */
  tmall_fuwu_SettleAdjustmentStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuSettleAdjustmentStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSettleSupplierFcBill 天猫服务 > 天猫服务服务商分账消息推送} */
  tmall_fuwu_SettleSupplierFcBill(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuSettleSupplierFcBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardContract 天猫服务 > 天猫服务履约合同单} */
  tmall_fuwu_WorkcardContract(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardInfo 天猫服务 > 天猫服务任务工单} */
  tmall_fuwu_WorkcardInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  tmall_fuwu_WorkcardStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiMemberRegister 天猫美妆 > 飞行入会消息} */
  tmall_mei_MemberRegister(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiMemberRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiPointChange 天猫美妆 > 品牌积分变更通知} */
  tmall_mei_PointChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiPointChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtItemsToEasyHome 新零售终端下行消息 > 商品信息同步} */
  tmall_nrt_ItemsToEasyHome(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrtItemsToEasyHome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelInventoryChange 聚石塔 > 商品库存变化} */
  tmall_omnichannel_InventoryChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelInventoryChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelInventoryZero 聚石塔 > 商品库存归零} */
  tmall_omnichannel_InventoryZero(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelInventoryZero) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemDescChange 聚石塔 > 商品描述变化} */
  tmall_omnichannel_ItemDescChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemDescChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemDownShelf 聚石塔 > 商品下架} */
  tmall_omnichannel_ItemDownShelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemDownShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemImageChange 聚石塔 > 商品图片变化} */
  tmall_omnichannel_ItemImageChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemImageChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemPriceChange 聚石塔 > 商品价格变更} */
  tmall_omnichannel_ItemPriceChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  tmall_servicecenter_TaskUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenterTaskUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSignCreate 天猫服务 > 签到消息} */
  tmall_serviceplatform_SignCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformSignCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息} */
  tmall_serviceplatform_WorkerLeave(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformWorkerLeave) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelBottomPriceRuleChange 酒店商品消息api > 酒店商品底价加价商品加价规则消息通知} */
  trip_hotel_BottomPriceRuleChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelBottomPriceRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelHotelChange 酒店商品消息api > 飞猪卖家酒店实体变更消息同步} */
  trip_hotel_HotelChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelHotelChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRateChange 酒店商品消息api > 酒店rate信息变更} */
  trip_hotel_RateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRatePlanChange 酒店商品消息api > 酒店价格计划消息} */
  trip_hotel_RatePlanChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRatePlanChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRoomChange 酒店商品消息api > room变更消息} */
  trip_hotel_RoomChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRoomChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRoomTypeChange 酒店商品消息api > 酒店房型消息} */
  trip_hotel_RoomTypeChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRoomTypeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuError 五道口营销 > 营销操作错误消息} */
  wdk_market_OperateSkuError(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuErrror 五道口营销 > 营销发布商品错误} */
  wdk_market_OperateSkuErrror(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuErrror) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataPublishError 五道口营销 > 五道口开放数据发布错误} */
  wdk_open_DataPublishError(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataPublishError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataRelation 五道口营销 > 五道口开放数据关联通知} */
  wdk_open_DataRelation(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersaleOrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  xianyu_aftersale_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersaleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraiseOrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  xianyu_appraise_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraiseOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCarOrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  xianyu_car_OrderStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCarOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleOrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  xianyu_recycle_OrderStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleSpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  xianyu_recycle_SpuModifySync(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleSpuModifySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateQuesChange 闲鱼 > 闲鱼问卷变更} */
  xianyu_template_QuesChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateQuesChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateStatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  xianyu_template_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTenderOrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  xianyu_tender_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTenderOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  youku_tvosappstore_AppStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstoreAppStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  yunos_yoc_DatapoolSandbox(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocDatapoolSandbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocMessageService YunOS YoC > yoc消息服务} */
  yunos_yoc_MessageService(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocMessageService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlab} */
  alibaba_adlab(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlab) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicom} */
  alibaba_alicom(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealth} */
  alibaba_alihealth(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlink} */
  alibaba_alink(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqin} */
  alibaba_aliqin(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoice} */
  alibaba_einvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwu} */
  alibaba_fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytrip} */
  alibaba_happytrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoice} */
  alibaba_invoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLst} */
  alibaba_lst(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmc} */
  alibaba_mmc(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitor} */
  alibaba_monitor(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMos} */
  alibaba_mos(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMos) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazca} */
  alibaba_nazca(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazca) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlife} */
  alibaba_nlife(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlife) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatform} */
  alibaba_serviceplatform(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSp} */
  alibaba_sp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaSp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTax} */
  alibaba_tax(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTax) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianji} */
  alibaba_tianji(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianji) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdk} */
  alibaba_wdk(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkitem} */
  alibaba_wdkitem(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkitem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkop} */
  alibaba_wdkop(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopen} */
  alibaba_wdkopen(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorder} */
  alibaba_wdkorder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdktrade} */
  alibaba_wdktrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdktrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunio} */
  alibaba_yunio(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunio) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxb} */
  alicom_axb(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeia} */
  aliexpress_aeia(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeia) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrder} */
  aliexpress_order(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCep} */
  alihealth_cep(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCep) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYs} */
  alihealth_ys(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgent} */
  alitrip_agent(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtrip} */
  alitrip_btrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlight} */
  alitrip_flight(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesr} */
  alitrip_iesr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetrade} */
  alitrip_ietrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrain} */
  alitrip_train(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravel} */
  alitrip_travel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticket} */
  alitrip_tripticket(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTripticket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisa} */
  alitrip_visa(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripVisa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIot} */
  aliyun_iot(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustry} */
  ascp_insdustry(fn: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRight} */
  banma_right(fn: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatform} */
  cainiao_consignplatform(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIot} */
  cainiao_iot(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistribution} */
  damai_distribution(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTrade} */
  damai_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtrip} */
  fliggy_btrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiao} */
  fliggy_jipiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicket} */
  fliggy_ticket(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirm} */
  fuwu_confirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuction} */
  gov_auction(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreement} */
  idle_agreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisv} */
  idle_appraiseisv(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignment} */
  idle_consignment(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentii} */
  idle_consignmentii(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentii) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycle} */
  idle_recycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisv} */
  idle_topisv(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpay} */
  idle_tranferpay(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTrade} */
  jae_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.JaeTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplier} */
  lst_supplier(fn: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplier) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompass} */
  niaochao_tccompass(fn: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompass) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAg} */
  taobao_ag(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAps} */
  taobao_aps(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAps) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxin} */
  taobao_axin(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuan} */
  taobao_baichuan(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmc} */
  taobao_bmc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBus} */
  taobao_bus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarlease} */
  taobao_carlease(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCarlease) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContent} */
  taobao_content(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifa} */
  taobao_daifa(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDd} */
  taobao_dd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandian} */
  taobao_diandian(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaas} */
  taobao_dpaas(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaas) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoice} */
  taobao_einvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiao} */
  taobao_fenxiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggy} */
  taobao_fliggy(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwu} */
  taobao_fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuys} */
  taobao_globalbuys(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuys) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeai} */
  taobao_homeai(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotel} */
  taobao_hotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstore} */
  taobao_istore(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItem} */
  taobao_item(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiao} */
  taobao_jipiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLive} */
  taobao_live(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogistics} */
  taobao_logistics(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddress} */
  taobao_modifyaddress(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorder} */
  taobao_modifyorder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifysku} */
  taobao_modifysku(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifysku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOc} */
  taobao_oc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccount} */
  taobao_openaccount(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccount) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrm} */
  taobao_opencrm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenim} */
  taobao_openim(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenim) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmall} */
  taobao_openmall(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOs} */
  taobao_os(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligenius} */
  taobao_rdcaligenius(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligenius) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycle} */
  taobao_recycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefund} */
  taobao_refund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhino} */
  taobao_rhino(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhino) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartapp} */
  taobao_smartapp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartapp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTae} */
  taobao_tae(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTop} */
  taobao_top(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopats} */
  taobao_topats(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopats) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrade} */
  taobao_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrain} */
  taobao_train(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUscesl} */
  taobao_uscesl(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUscesl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimai} */
  taobao_waimai(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstore} */
  taobao_wisdomstore(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyu} */
  taobao_xianyu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaowei} */
  taobao_xiaowei(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaowei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliauto} */
  tmall_aliauto(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliauto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAuto} */
  tmall_auto(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAuto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCar} */
  tmall_car(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannel} */
  tmall_channel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwu} */
  tmall_fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMei} */
  tmall_mei(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrt} */
  tmall_nrt(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannel} */
  tmall_omnichannel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenter} */
  tmall_servicecenter(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatform} */
  tmall_serviceplatform(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotel} */
  trip_hotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarket} */
  wdk_market(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpen} */
  wdk_open(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersale} */
  xianyu_aftersale(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersale) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraise} */
  xianyu_appraise(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCar} */
  xianyu_car(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycle} */
  xianyu_recycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplate} */
  xianyu_template(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTender} */
  xianyu_tender(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTender) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstore} */
  youku_tvosappstore(fn: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYoc} */
  yunos_yoc(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosYoc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alibaba} */
  alibaba(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alibaba) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alicom} */
  alicom(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliexpress} */
  aliexpress(fn: (this: TaoMessageConsumer, message: IncomingMessage.Aliexpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alihealth} */
  alihealth(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alitrip} */
  alitrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alitrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliyun} */
  aliyun(fn: (this: TaoMessageConsumer, message: IncomingMessage.Aliyun) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ascp} */
  ascp(fn: (this: TaoMessageConsumer, message: IncomingMessage.Ascp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Banma} */
  banma(fn: (this: TaoMessageConsumer, message: IncomingMessage.Banma) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Cainiao} */
  cainiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Cainiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Damai} */
  damai(fn: (this: TaoMessageConsumer, message: IncomingMessage.Damai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fliggy} */
  fliggy(fn: (this: TaoMessageConsumer, message: IncomingMessage.Fliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fuwu} */
  fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.Fuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Gov} */
  gov(fn: (this: TaoMessageConsumer, message: IncomingMessage.Gov) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Idle} */
  idle(fn: (this: TaoMessageConsumer, message: IncomingMessage.Idle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Jae} */
  jae(fn: (this: TaoMessageConsumer, message: IncomingMessage.Jae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lst} */
  lst(fn: (this: TaoMessageConsumer, message: IncomingMessage.Lst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Niaochao} */
  niaochao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Niaochao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Taobao} */
  taobao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Taobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Tmall} */
  tmall(fn: (this: TaoMessageConsumer, message: IncomingMessage.Tmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Trip} */
  trip(fn: (this: TaoMessageConsumer, message: IncomingMessage.Trip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Wdk} */
  wdk(fn: (this: TaoMessageConsumer, message: IncomingMessage.Wdk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Xianyu} */
  xianyu(fn: (this: TaoMessageConsumer, message: IncomingMessage.Xianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Youku} */
  youku(fn: (this: TaoMessageConsumer, message: IncomingMessage.Youku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Yunos} */
  yunos(fn: (this: TaoMessageConsumer, message: IncomingMessage.Yunos) => void): TaoMessageConsumer;
}

declare interface TaoEventsListener {
  /** {@link IncomingMessage.AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  on(topic: 'alibaba_adlab_IotDevice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabIotDevice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  on(topic: 'alibaba_adlab_OrderItemEtaUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemEtaUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  on(topic: 'alibaba_adlab_OrderItemStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  on(topic: 'alibaba_alicom_FlowGiftSendNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicomFlowGiftSendNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthBillProcessStatusNotify 阿里健康追溯码 > 单据处理状态通知} */
  on(topic: 'alibaba_alihealth_BillProcessStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthBillProcessStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthDoctorMessage 阿里健康追溯码 > 医生、服务相关消息} */
  on(topic: 'alibaba_alihealth_DoctorMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthDoctorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange 阿里健康追溯码 > 中台订单状态变化推送} */
  on(topic: 'alibaba_alihealth_NrmopOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthOrderStatusChange 阿里健康追溯码 > 平台通知三方机构"订单状态变更"} */
  on(topic: 'alibaba_alihealth_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeOrderStatusChange 阿里健康追溯码 > O2O订单状态变更通知} */
  on(topic: 'alibaba_alihealth_TradeOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康追溯码 > 疫苗交易预约信息变动} */
  on(topic: 'alibaba_alihealth_TradeVaccineSubscribeChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceDataPush 阿里物联 > 设备数据推送} */
  on(topic: 'alibaba_alink_DeviceDataPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceMessage 阿里物联 > 设备报警消息} */
  on(topic: 'alibaba_alink_DeviceMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  on(topic: 'alibaba_aliqin_DigitalSmsTemplateDR', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  on(topic: 'alibaba_aliqin_FcActiveIotcard', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcActiveIotcard) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  on(topic: 'alibaba_aliqin_FcCallCdr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallRecord 阿里通信 > 录音回执} */
  on(topic: 'alibaba_aliqin_FcCallRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcFlowUp 阿里通信 > 流量直充状态报告} */
  on(topic: 'alibaba_aliqin_FcFlowUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcFlowUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcSmsDR 阿里通信 > 短消息发送结果报告} */
  on(topic: 'alibaba_aliqin_FcSmsDR', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcSmsUp 阿里通信 > 短信上行} */
  on(topic: 'alibaba_aliqin_FcSmsUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcSmsUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcTmpStatus 阿里通信 > 语音呼叫中间状态消息} */
  on(topic: 'alibaba_aliqin_FcTmpStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcTmpStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFlowDirectCharge 阿里通信 > 流量直充} */
  on(topic: 'alibaba_aliqin_FlowDirectCharge', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFlowDirectCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  on(topic: 'alibaba_aliqin_IotPersonalConfirmNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知} */
  on(topic: 'alibaba_aliqin_IotStatusNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  on(topic: 'alibaba_aliqin_TaFcCallCdr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  on(topic: 'alibaba_aliqin_TaFcSmsDR', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  on(topic: 'alibaba_einvoice_ApplyUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceApplyUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息} */
  on(topic: 'alibaba_einvoice_CompanyDoAction', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceCompanyDoAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  on(topic: 'alibaba_einvoice_OrderRefundResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceOrderRefundResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  on(topic: 'alibaba_einvoice_RegisterFlowChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  on(topic: 'alibaba_einvoice_RegisterFlowCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  on(topic: 'alibaba_einvoice_TaxDeviceOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceTaxDeviceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息} */
  on(topic: 'alibaba_fuwu_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  on(topic: 'alibaba_happytrip_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytripOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApply 电子发票 > 开票申请} */
  on(topic: 'alibaba_invoice_Apply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyResult 电子发票 > 开票申请审核结果} */
  on(topic: 'alibaba_invoice_ApplyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskOffline 电子发票 > 税盘下架单新增和更新通知} */
  on(topic: 'alibaba_invoice_DiskOffline', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskOffline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceFlowBuket 电子发票 > 资源包开通/订购记录同步} */
  on(topic: 'alibaba_invoice_FlowBuket', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceFlowBuket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInvoiceApply 电子发票 > 税控服务开票申请} */
  on(topic: 'alibaba_invoice_InvoiceApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceLogistics 电子发票 > 发票对外通知物流信息} */
  on(topic: 'alibaba_invoice_Logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）} */
  on(topic: 'alibaba_invoice_PaperOpsReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePaperOpsReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePreConsulting 电子发票 > 电子发票售前咨询} */
  on(topic: 'alibaba_invoice_PreConsulting', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePreConsulting) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQuery 电子发票 > 数据查询请求} */
  on(topic: 'alibaba_invoice_Query', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQueryInvoice 电子发票 > 查询发票信息} */
  on(topic: 'alibaba_invoice_QueryInvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQueryInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegist 电子发票 > 入驻阿里发票平台} */
  on(topic: 'alibaba_invoice_Regist', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegist) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceResultReturn 电子发票 > 开票请求结果} */
  on(topic: 'alibaba_invoice_ResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceStatusChange 电子发票 > 发票状态变更消息} */
  on(topic: 'alibaba_invoice_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxChange 电子发票 > 商家税号变更} */
  on(topic: 'alibaba_invoice_TaxChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnissue 电子发票 > 创建未开具发票通知} */
  on(topic: 'alibaba_invoice_Unissue', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstBmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化} */
  on(topic: 'alibaba_lst_BmOrderLogisticsChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstBmOrderLogisticsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstBroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  on(topic: 'alibaba_lst_BroadcastSelfOrderShipChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstBroadcastSelfOrderShipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstCashierSync 零售通_公共 > 收银快照同步消息} */
  on(topic: 'alibaba_lst_CashierSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstCashierSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstGoodsSync 零售通_公共 > 商品同步消息} */
  on(topic: 'alibaba_lst_GoodsSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstGoodsSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstInventorySync 零售通_公共 > 商品库存修改同步消息} */
  on(topic: 'alibaba_lst_InventorySync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstInventorySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstMsgTest 零售通_公共 > 消息测试} */
  on(topic: 'alibaba_lst_MsgTest', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstMsgTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息} */
  on(topic: 'alibaba_lst_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstRefundChange 零售通_公共 > 订单退单} */
  on(topic: 'alibaba_lst_RefundChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstRefundChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  on(topic: 'alibaba_lst_SpeakerAdvertPlayRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  on(topic: 'alibaba_lst_SupplierOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSupplierOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息} */
  on(topic: 'alibaba_mmc_OpenStockAlterNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcOpenStockAlterNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息} */
  on(topic: 'alibaba_mmc_OpenStockItemAlter', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcOpenStockItemAlter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息} */
  on(topic: 'alibaba_mmc_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcPriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息} */
  on(topic: 'alibaba_mmc_PriceUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcPriceUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcRefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息} */
  on(topic: 'alibaba_mmc_RefundOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitorEventSendMessage 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  on(topic: 'alibaba_monitor_EventSendMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitorEventSendMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitorMessageSend 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  on(topic: 'alibaba_monitor_MessageSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitorMessageSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrder 银泰开放平台消息 > 销售单状态变更} */
  on(topic: 'alibaba_mos_SaleOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  on(topic: 'alibaba_mos_SaleOrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaAbandonCert 网上法庭 > 作废存证消息接口} */
  on(topic: 'alibaba_nazca_AbandonCert', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaAbandonCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaQueryChargeNum 网上法庭 > 查询收费数量} */
  on(topic: 'alibaba_nazca_QueryChargeNum', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaQueryChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaSaveCert 网上法庭 > 发起存证消息接口} */
  on(topic: 'alibaba_nazca_SaveCert', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaSaveCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaUpdateChargeNum 网上法庭 > 更新收费数量} */
  on(topic: 'alibaba_nazca_UpdateChargeNum', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaUpdateChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  on(topic: 'alibaba_nlife_BToBTradeStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToBTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  on(topic: 'alibaba_nlife_BToCTradeOrderSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToCTradeOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  on(topic: 'alibaba_nlife_BtoBTradeDeliverNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  on(topic: 'alibaba_nlife_BtoBTradeEffectiveNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  on(topic: 'alibaba_nlife_BtobTradeRefundConfirmMsgNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  on(topic: 'alibaba_nlife_BtobTradeRefundNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  on(topic: 'alibaba_nlife_InstorageDiffAuditNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息} */
  on(topic: 'alibaba_nlife_ItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatformFulfilTask 天猫服务 > 服务供应链核销单消息} */
  on(topic: 'alibaba_serviceplatform_FulfilTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatformFulfilTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatformServiceOrder 天猫服务 > 服务供应链服务单消息} */
  on(topic: 'alibaba_serviceplatform_ServiceOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatformServiceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSpNotifyPaymentResult 阿里智付 > 通知付款结果} */
  on(topic: 'alibaba_sp_NotifyPaymentResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaSpNotifyPaymentResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTaxEmployeeSignResult 阿里发票 > 税优雇员签约结果消息} */
  on(topic: 'alibaba_tax_EmployeeSignResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTaxEmployeeSignResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTaxSalaryPayResult 阿里发票 > 税优发薪结果通知} */
  on(topic: 'alibaba_tax_SalaryPayResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTaxSalaryPayResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  on(topic: 'alibaba_tianji_ContractOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiContractOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  on(topic: 'alibaba_tianji_OrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelCommentAudit 五道口订单 > 差评回评} */
  on(topic: 'alibaba_wdk_ChannelCommentAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelCommentAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCancel 五道口订单 > 五道口售中取消外部订单消息} */
  on(topic: 'alibaba_wdk_ChannelOrderCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit 五道口订单 > 客服审核退款结果} */
  on(topic: 'alibaba_wdk_ChannelOrderCsRefundAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsUserrefund 五道口订单 > 客服代客发起售后退款(整单/部分)} */
  on(topic: 'alibaba_wdk_ChannelOrderCsUserrefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCsUserrefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderStatusChange 五道口订单 > 订单状态变更消息} */
  on(topic: 'alibaba_wdk_ChannelOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelStockSync 五道口订单 > 库存同步} */
  on(topic: 'alibaba_wdk_ChannelStockSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelStockSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillOrderChange 五道口订单 > 售中履约变更消息} */
  on(topic: 'alibaba_wdk_FulfillOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkStoreItemUpdate 五道口订单 > 商家渠道商品变动消息} */
  on(topic: 'alibaba_wdk_StoreItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkStoreItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkitemWarehouseSkuModify 五道口商品 > 五道口仓商品变更消息} */
  on(topic: 'alibaba_wdkitem_WarehouseSkuModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkitemWarehouseSkuModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopRexAccountChange 五道口订单 > Rex用户信息变更消息} */
  on(topic: 'alibaba_wdkop_RexAccountChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopRexAccountChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenOrderMessage 五道口订单 > 五道口交易状态变更消息通知} */
  on(topic: 'alibaba_wdkopen_OrderMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopenOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenPriceAdjust 五道口订单 > 采购价变更消息} */
  on(topic: 'alibaba_wdkopen_PriceAdjust', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopenPriceAdjust) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenRefundMessage 五道口订单 > 同城零售逆向交易消息} */
  on(topic: 'alibaba_wdkopen_RefundMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopenRefundMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderFulfillStatusChange 五道口订单 > 五道口订单履约状态变更消息} */
  on(topic: 'alibaba_wdkorder_FulfillStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderFulfillStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderInsuranceOrder 五道口订单 > 共享库存保险正向投保消息} */
  on(topic: 'alibaba_wdkorder_InsuranceOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderInsuranceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderInsuranceRefund 五道口订单 > 共享库存保险逆向理赔消息} */
  on(topic: 'alibaba_wdkorder_InsuranceRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderInsuranceRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderFulfillPush 五道口订单 > 订单履约状态变更消息} */
  on(topic: 'alibaba_wdkorder_OrderFulfillPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderFulfillPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderFulfillTokenPush 五道口订单 > 履约状态变更消息} */
  on(topic: 'alibaba_wdkorder_OrderFulfillTokenPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderFulfillTokenPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderStatusPush 五道口订单 > 猫超订单数据变更消息通知} */
  on(topic: 'alibaba_wdkorder_OrderStatusPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderRefundOrgPoint 五道口订单 > 逆向单企业积分消息发送} */
  on(topic: 'alibaba_wdkorder_RefundOrgPoint', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderRefundOrgPoint) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderRefundSuccess 五道口订单 > 五道口淘鲜达逆向订单消息} */
  on(topic: 'alibaba_wdkorder_RefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderSoPo 五道口订单 > 共享库存SOPO} */
  on(topic: 'alibaba_wdkorder_SoPo', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderSoPo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderStatusChange 五道口订单 > 五道口订单状态变更消息} */
  on(topic: 'alibaba_wdkorder_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderVoucherStatus 五道口订单 > 淘鲜达订单优惠券状态变更} */
  on(topic: 'alibaba_wdkorder_VoucherStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdktradeCouponInstance 五道口营销 > 营销券实例消息} */
  on(topic: 'alibaba_wdktrade_CouponInstance', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdktradeCouponInstance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunioDataTransfer 平台消息 > YunIO数据流转} */
  on(topic: 'alibaba_yunio_DataTransfer', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunioDataTransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步} */
  on(topic: 'alicom_axb_SubsEventSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxbSubsEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  on(topic: 'aliexpress_aeia_TaskplatformInterestNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeiaTaskplatformInterestNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderFinish AE-交易 > 交易成功} */
  on(topic: 'aliexpress_order_Finish', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderFundProcessing AE-交易 > 资金处理中} */
  on(topic: 'aliexpress_order_FundProcessing', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderFundProcessing) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderInCancel AE-交易 > 取消订单中} */
  on(topic: 'aliexpress_order_InCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderInCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderPlaceOrderSuccess AE-交易 > 下单成功} */
  on(topic: 'aliexpress_order_PlaceOrderSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderPlaceOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderRiskControl AE-交易 > 风控24小时} */
  on(topic: 'aliexpress_order_RiskControl', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderRiskControl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderSellerPartSendGoods AE-交易 > 等待部分发货} */
  on(topic: 'aliexpress_order_SellerPartSendGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderSellerPartSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  on(topic: 'aliexpress_order_WaitBuyerAcceptGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitBuyerAcceptGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitGroupSuccess AE-交易 > 等待成团} */
  on(topic: 'aliexpress_order_WaitGroupSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitGroupSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitSellerExamineMoney AE-交易 > 待卖家验款} */
  on(topic: 'aliexpress_order_WaitSellerExamineMoney', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitSellerExamineMoney) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitSellerSendGoods AE-交易 > 等待卖家发货} */
  on(topic: 'aliexpress_order_WaitSellerSendGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderWaitSellerSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  on(topic: 'alihealth_cep_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCepOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  on(topic: 'alihealth_ys_OrderMemConsume', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderMemConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  on(topic: 'alihealth_ys_OrderPushConsume', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderPushConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgentNotify 淘宝机票 > 商家机票业务通知} */
  on(topic: 'alitrip_agent_Notify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgentNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripCorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  on(topic: 'alitrip_btrip_CorpSignCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripCorpSignCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  on(topic: 'alitrip_btrip_ExceedApplySubmit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripExceedApplySubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChange 淘宝机票 > 航变消息} */
  on(topic: 'alitrip_flight_Change', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesrFlightChange 淘宝机票 > 航变数据推送} */
  on(topic: 'alitrip_iesr_FlightChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesrFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesrTicketMessage 淘宝机票 > 国际运价采购票消息} */
  on(topic: 'alitrip_iesr_TicketMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesrTicketMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeChangeMsg 淘宝机票 > 国际机票改签订单状态消息} */
  on(topic: 'alitrip_ietrade_ChangeMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetradeChangeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeOrderMsg 淘宝机票 > 国际机票订单消息} */
  on(topic: 'alitrip_ietrade_OrderMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetradeOrderMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeRefundMsg 淘宝机票 > 国际机票退票订单状态消息} */
  on(topic: 'alitrip_ietrade_RefundMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetradeRefundMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  on(topic: 'alitrip_train_AgentStopQuery', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainAgentStopQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelOrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息} */
  on(topic: 'alitrip_travel_OrderChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelOrderChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelPersonChanged 航旅度假交易 > 出行人信息变更消息} */
  on(topic: 'alitrip_travel_PersonChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelPersonChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelVisaService 航旅度假交易 > 签证消息服务} */
  on(topic: 'alitrip_travel_VisaService', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelVisaService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticketTravellerCreate 航旅度假交易 > 旅行机票交易创建} */
  on(topic: 'alitrip_tripticket_TravellerCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTripticketTravellerCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisaTradeDone 航旅度假交易 > 在线签证交易完成消息} */
  on(topic: 'alitrip_visa_TradeDone', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripVisaTradeDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步} */
  on(topic: 'aliyun_iot_OrderSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIotOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustryCancelInquiry 天猫服务 > 送货入户并安装取消询价接口} */
  on(topic: 'ascp_insdustry_CancelInquiry', listener: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustryCancelInquiry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRightTradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  on(topic: 'banma_right_TradeCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRightTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatformLogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  on(topic: 'cainiao_consignplatform_LogisiticsDetail', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatformLogisiticsDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIotAftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  on(topic: 'cainiao_iot_AftersalesTicket', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIotAftersalesTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  on(topic: 'damai_distribution_PerformCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  on(topic: 'damai_distribution_PerformStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  on(topic: 'damai_distribution_PreSaleToNow', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPreSaleToNow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  on(topic: 'damai_distribution_ProjectStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionProjectStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  on(topic: 'damai_distribution_TicketItemStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionTicketItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  on(topic: 'damai_trade_TicketStatusPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTradeTicketStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化} */
  on(topic: 'fliggy_btrip_HotelDistributionOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtripHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务} */
  on(topic: 'fliggy_jipiao_FlightChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiaoFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  on(topic: 'fliggy_ticket_OrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  on(topic: 'fliggy_ticket_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  on(topic: 'fliggy_ticket_VerifyNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketVerifyNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmFail 服务市场 > 收入确认失败} */
  on(topic: 'fuwu_confirm_Fail', listener: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmFail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmSuccess 服务市场 > 收入确认成功} */
  on(topic: 'fuwu_confirm_Success', listener: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  on(topic: 'gov_auction_PushVehicleDataToBM', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionPushVehicleDataToBM) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  on(topic: 'gov_auction_VehicleDataPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionVehicleDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreementStatusChange 闲鱼 > 闲鱼代扣消息通知} */
  on(topic: 'idle_agreement_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreementStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvItemSyn 闲鱼已验货 > 已验货商品消息} */
  on(topic: 'idle_appraiseisv_ItemSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvOrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  on(topic: 'idle_appraiseisv_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvRefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  on(topic: 'idle_appraiseisv_RefundSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvRefundSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentOrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  on(topic: 'idle_consignment_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentiiOrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  on(topic: 'idle_consignmentii_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentiiOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  on(topic: 'idle_recycle_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息} */
  on(topic: 'idle_recycle_RefundStatusModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleRefundStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvGlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知} */
  on(topic: 'idle_topisv_GlobalProductNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvGlobalProductNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知} */
  on(topic: 'idle_topisv_ItemNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvItemNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvRefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知} */
  on(topic: 'idle_topisv_RefundNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvRefundNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvTradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知} */
  on(topic: 'idle_topisv_TradeNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvTradeNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息} */
  on(topic: 'idle_tranferpay_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpayOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  on(topic: 'jae_trade_PaidSuccessed', listener: (this: TaoMessageConsumer, message: IncomingMessage.JaeTradePaidSuccessed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplierBroadcastFastRefundMessage 零售通_公共 > 零售通广播极速退款消息} */
  on(topic: 'lst_supplier_BroadcastFastRefundMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplierBroadcastFastRefundMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplierFastRefundMessageCreate 零售通_公共 > 品牌商极速退款消息创建} */
  on(topic: 'lst_supplier_FastRefundMessageCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplierFastRefundMessageCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompassDockInfoChange 五道口配送 > 鸟潮站点变更消息} */
  on(topic: 'niaochao_tccompass_DockInfoChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompassDockInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompassMaterialCodeUpdate 五道口配送 > 物资箱号变动消息} */
  on(topic: 'niaochao_tccompass_MaterialCodeUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompassMaterialCodeUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompassWarehouseNetworkChange 五道口配送 > 仓网络变更消息} */
  on(topic: 'niaochao_tccompass_WarehouseNetworkChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompassWarehouseNetworkChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息} */
  on(topic: 'taobao_ag_RefundSignInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgRefundSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  on(topic: 'taobao_aps_CommentAdd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsCommentAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsNewFeedback 平台消息 > 收到舆情} */
  on(topic: 'taobao_aps_NewFeedback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsNewFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  on(topic: 'taobao_axin_RefundCallBack', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinRefundCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活} */
  on(topic: 'taobao_baichuan_ASODeviceActivate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanASODeviceActivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息} */
  on(topic: 'taobao_baichuan_PasswordRuleChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanPasswordRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmcShortMessageStatus 导购平台 > 短信状态} */
  on(topic: 'taobao_bmc_ShortMessageStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmcShortMessageStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePay 淘宝汽车票 > 自助机付款成功结果} */
  on(topic: 'taobao_bus_TVMTradePay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTVMTradePay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知} */
  on(topic: 'taobao_bus_TVMTradePayStatusNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTVMTradePayStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息} */
  on(topic: 'taobao_bus_TVMTradePaySuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTVMTradePaySuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTradePayStatus 淘宝汽车票 > 交易支付状态节点} */
  on(topic: 'taobao_bus_TradePayStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusTradePayStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarleaseFreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息} */
  on(topic: 'taobao_carlease_FreeDpOrderMsgSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCarleaseFreeDpOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentOrderPaid 淘宝交易 > 内容开放短视频模板支付消息} */
  on(topic: 'taobao_content_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  on(topic: 'taobao_daifa_DistributorOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaDistributorOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  on(topic: 'taobao_daifa_SupplierOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaSupplierOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDdPush 淘宝点点 > 淘点点消息推送} */
  on(topic: 'taobao_dd_Push', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDdPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  on(topic: 'taobao_diandian_ServeOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandianServeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasAuthTokenCreate DPAAS > dpaas三方服务token} */
  on(topic: 'taobao_dpaas_AuthTokenCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasAuthTokenCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerFlow DPAAS > 客流新增及会员到店消息} */
  on(topic: 'taobao_dpaas_CustomerFlow', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasCustomerFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerUpload DPAAS > 客户上传图片} */
  on(topic: 'taobao_dpaas_CustomerUpload', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasCustomerUpload) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerUploadAck DPAAS > 会员人脸信息更新} */
  on(topic: 'taobao_dpaas_CustomerUploadAck', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasCustomerUploadAck) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasEquipmentCreate DPAAS > 创建设备} */
  on(topic: 'taobao_dpaas_EquipmentCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasEquipmentCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasFaceToCustomerAck DPAAS > 会员标示消息推送} */
  on(topic: 'taobao_dpaas_FaceToCustomerAck', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaasFaceToCustomerAck) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceBuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  on(topic: 'taobao_einvoice_BuyerConfirmSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceBuyerConfirmSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流} */
  on(topic: 'taobao_einvoice_InvoiceResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerAgree 淘宝分销 > 经销采购单审核通过} */
  on(topic: 'taobao_fenxiao_DealerAgree', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerClose 淘宝分销 > 经销采购单关闭} */
  on(topic: 'taobao_fenxiao_DealerClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerConfirm 淘宝分销 > 经销采购单采购成功} */
  on(topic: 'taobao_fenxiao_DealerConfirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerCreate 淘宝分销 > 经销采购单创建} */
  on(topic: 'taobao_fenxiao_DealerCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerInstock 淘宝分销 > 经销采购单入库} */
  on(topic: 'taobao_fenxiao_DealerInstock', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerInstock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerModify 淘宝分销 > 经销采购单修改} */
  on(topic: 'taobao_fenxiao_DealerModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerPay 淘宝分销 > 经销采购单付款} */
  on(topic: 'taobao_fenxiao_DealerPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerRefuse 淘宝分销 > 经销采购单拒绝通过} */
  on(topic: 'taobao_fenxiao_DealerRefuse', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerRefuse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerShipped 淘宝分销 > 经销采购单已发货} */
  on(topic: 'taobao_fenxiao_DealerShipped', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoDealerShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderClosed 淘宝分销 > 采购单关闭消息消息} */
  on(topic: 'taobao_fenxiao_FxOrderClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderCreate 淘宝分销 > 采购单创建消息} */
  on(topic: 'taobao_fenxiao_FxOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderModifyConsign 淘宝分销 > 分销属性变更} */
  on(topic: 'taobao_fenxiao_FxOrderModifyConsign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderModifyConsign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderModifyPrice 淘宝分销 > 修改采购单价格消息} */
  on(topic: 'taobao_fenxiao_FxOrderModifyPrice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderModifyPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderPaid 淘宝分销 > 采购单付款消息} */
  on(topic: 'taobao_fenxiao_FxOrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderShipped 淘宝分销 > 采购单发货消息} */
  on(topic: 'taobao_fenxiao_FxOrderShipped', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderSuccess 淘宝分销 > 采购单确认收货消息} */
  on(topic: 'taobao_fenxiao_FxOrderSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  on(topic: 'taobao_fenxiao_FxRefundAgree', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  on(topic: 'taobao_fenxiao_FxRefundClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  on(topic: 'taobao_fenxiao_FxRefundCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  on(topic: 'taobao_fenxiao_FxRefundRefuseGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  on(topic: 'taobao_fenxiao_FxRefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  on(topic: 'taobao_fenxiao_FxTradeRefundCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  on(topic: 'taobao_fenxiao_FxTradeRefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyCommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息} */
  on(topic: 'taobao_fliggy_CommonContractSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyCommonContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  on(topic: 'taobao_fliggy_HspHicItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHicItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySignStatus 酒店签约中心消息 > 飞猪签约状态消息} */
  on(topic: 'taobao_fliggy_SignStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySignStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息} */
  on(topic: 'taobao_fliggy_StdHotelModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdHotelModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息} */
  on(topic: 'taobao_fliggy_StdRoomTypeModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdRoomTypeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderClosed 服务市场 > 订单关闭消息} */
  on(topic: 'taobao_fuwu_OrderClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderCreated 服务市场 > 订单创建消息} */
  on(topic: 'taobao_fuwu_OrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderPaid 服务市场 > 订单支付消息} */
  on(topic: 'taobao_fuwu_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuServiceOpen 服务市场 > 服务开通消息} */
  on(topic: 'taobao_fuwu_ServiceOpen', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuServiceOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuWitkeySyncModeling 服务市场 > 威客同步建模数据} */
  on(topic: 'taobao_fuwu_WitkeySyncModeling', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuWitkeySyncModeling) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  on(topic: 'taobao_globalbuys_SeamailOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  on(topic: 'taobao_homeai_CaseSyncResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiCaseSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  on(topic: 'taobao_homeai_LayoutTransferResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiLayoutTransferResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系} */
  on(topic: 'taobao_homeai_ModelSkuRelation', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiModelSkuRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息} */
  on(topic: 'taobao_homeai_RenderRequest', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiRenderRequest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelCreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息} */
  on(topic: 'taobao_hotel_CreditToPreHotelStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelCreditToPreHotelStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息} */
  on(topic: 'taobao_hotel_SearchMonitor', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchTrigger 酒店签约中心消息 > 热搜酒店消息} */
  on(topic: 'taobao_hotel_SearchTrigger', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchTrigger) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息} */
  on(topic: 'taobao_istore_GiftingMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstoreGiftingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemAdd 淘宝商品 > 商品新增消息} */
  on(topic: 'taobao_item_ItemAdd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDelete 淘宝商品 > 商品删除消息} */
  on(topic: 'taobao_item_ItemDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息} */
  on(topic: 'taobao_item_ItemDownshelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishCc 淘宝商品 > 小二CC商品消息} */
  on(topic: 'taobao_item_ItemPunishCc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemPunishCc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishDelete 淘宝商品 > 小二删除商品消息} */
  on(topic: 'taobao_item_ItemPunishDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemPunishDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishDownshelf 淘宝商品 > 小二下架商品消息} */
  on(topic: 'taobao_item_ItemPunishDownshelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemPunishDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息} */
  on(topic: 'taobao_item_ItemRecommendAdd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemRecommendAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息} */
  on(topic: 'taobao_item_ItemRecommendDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemRecommendDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息} */
  on(topic: 'taobao_item_ItemSkuZeroStock', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemSkuZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemStockChanged 淘宝商品 > 修改商品库存消息} */
  on(topic: 'taobao_item_ItemStockChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemStockChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpdate 淘宝商品 > 商品更新消息} */
  on(topic: 'taobao_item_ItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息} */
  on(topic: 'taobao_item_ItemUpshelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息} */
  on(topic: 'taobao_item_ItemZeroStock', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  on(topic: 'taobao_jipiao_AncillaryOrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoAncillaryOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  on(topic: 'taobao_jipiao_JipiaoModifyOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  on(topic: 'taobao_jipiao_JipiaoOrderStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  on(topic: 'taobao_jipiao_JipiaoRefundOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  on(topic: 'taobao_jipiao_SellerOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  on(topic: 'taobao_jipiao_SellerRefundOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知} */
  on(topic: 'taobao_live_AgencyItemChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAgencyItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveFeedRelated 淘宝直播API > 淘宝直播上下播消息} */
  on(topic: 'taobao_live_FeedRelated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveFeedRelated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveTcpOrder 淘宝直播API > 淘宝直播订单消息} */
  on(topic: 'taobao_live_TcpOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveTcpOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  on(topic: 'taobao_logistics_LogsticDetailTrace', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsLogsticDetailTrace) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddressResultNotify 聚石塔 > 自助改地址结果消息通知} */
  on(topic: 'taobao_modifyaddress_ResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddressResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorderConsistencyResult 聚石塔 > 订单一致性校验消息} */
  on(topic: 'taobao_modifyorder_ConsistencyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorderConsistencyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyskuResultNotify 聚石塔 > 修改商品信息结果消息} */
  on(topic: 'taobao_modifysku_ResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyskuResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOcTradeTagChanged 交易全链路 > oc订单标签变更} */
  on(topic: 'taobao_oc_TradeTagChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOcTradeTagChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccountDataSync 导购平台 > openaccount数据同步} */
  on(topic: 'taobao_openaccount_DataSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccountDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmAuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  on(topic: 'taobao_opencrm_AuthTouchMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmAuthTouchMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  on(topic: 'taobao_opencrm_CardEstTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardEstTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  on(topic: 'taobao_opencrm_CardTplExamine', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstResult 客户运营平台API > 人群快照生成结果} */
  on(topic: 'taobao_opencrm_CrowdInstResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  on(topic: 'taobao_opencrm_CrowdInstSaveResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstSaveResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmDigitalTplExamine 客户运营平台API > 数字短信模板审核消息} */
  on(topic: 'taobao_opencrm_DigitalTplExamine', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmDigitalTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFeedback 客户运营平台API > 反馈tmc} */
  on(topic: 'taobao_opencrm_Feedback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberGradeChange 客户运营平台API > 会员等级变更} */
  on(topic: 'taobao_opencrm_MemberGradeChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberGradeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmNodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  on(topic: 'taobao_opencrm_NodeExecuteFinished', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmNodeExecuteFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmOpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  on(topic: 'taobao_opencrm_OpenStrategyEvent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmOpenStrategyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  on(topic: 'taobao_opencrm_SellerDimensionCharge', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmSellerDimensionCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageBill 客户运营平台API > 短信账单} */
  on(topic: 'taobao_opencrm_ShortMessageBill', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmShortMessageBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmUtouch 客户运营平台API > 智能外呼回执} */
  on(topic: 'taobao_opencrm_Utouch', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmUtouch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenimOffMsgPush OpenIM消息 > openim 离线消息推送} */
  on(topic: 'taobao_openim_OffMsgPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenimOffMsgPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallAlarmMsg OpenMall-API > Openmall告警消息通知} */
  on(topic: 'taobao_openmall_AlarmMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallAlarmMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallItemChanged OpenMall-API > Openmall商品变更消息} */
  on(topic: 'taobao_openmall_ItemChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallItemStockChanged OpenMall-API > openmall商品库存变更消息通知} */
  on(topic: 'taobao_openmall_ItemStockChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallItemStockChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallRefundChanged OpenMall-API > OpenMall退款单变更} */
  on(topic: 'taobao_openmall_RefundChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallRefundChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallTradeChanged OpenMall-API > 订单消息通知} */
  on(topic: 'taobao_openmall_TradeChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmallTradeChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOsActivityCompleted 营销平台 > 前N有礼活动开奖消息} */
  on(topic: 'taobao_os_ActivityCompleted', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOsActivityCompleted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息} */
  on(topic: 'taobao_rdcaligenius_OrderMsgSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligeniusOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  on(topic: 'taobao_recycle_OfnPreRedPacketSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycleOfnPreRedPacketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息} */
  on(topic: 'taobao_refund_RefundBlockMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundBlockMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息} */
  on(topic: 'taobao_refund_RefundBuyerModifyAgreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundBuyerModifyAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息} */
  on(topic: 'taobao_refund_RefundBuyerReturnGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundClosed 淘宝退款 > 退款关闭消息} */
  on(topic: 'taobao_refund_RefundClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundCreateMessage 淘宝退款 > 发表退款留言消息} */
  on(topic: 'taobao_refund_RefundCreateMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundCreateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundCreated 淘宝退款 > 退款创建消息} */
  on(topic: 'taobao_refund_RefundCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息} */
  on(topic: 'taobao_refund_RefundSellerAgreeAgreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundSellerAgreeAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息} */
  on(topic: 'taobao_refund_RefundSellerRefuseAgreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundSellerRefuseAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSuccess 淘宝退款 > 退款成功消息} */
  on(topic: 'taobao_refund_RefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息} */
  on(topic: 'taobao_refund_RefundableCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息} */
  on(topic: 'taobao_refund_RefundableMarked', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  on(topic: 'taobao_refund_TaobaoInterApplied', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoInterApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  on(topic: 'taobao_refund_TaobaoIntervened', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoIntervened) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更} */
  on(topic: 'taobao_rhino_DeviceStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoDeviceStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappAppSubChange 平台消息 > 用户订阅变更消息} */
  on(topic: 'taobao_smartapp_AppSubChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappAppSubChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanAuctionChange 导购平台 > 商品信息变更} */
  on(topic: 'taobao_tae_BaichuanAuctionChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanAuctionChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeClosed 导购平台 > 交易关闭} */
  on(topic: 'taobao_tae_BaichuanTradeClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeCreated 导购平台 > 创建订单} */
  on(topic: 'taobao_tae_BaichuanTradeCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradePaidDone 导购平台 > 付款成功} */
  on(topic: 'taobao_tae_BaichuanTradePaidDone', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradePaidDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeRefundCreated 导购平台 > 创建退款消息} */
  on(topic: 'taobao_tae_BaichuanTradeRefundCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeRefundSuccess 导购平台 > 退款成功} */
  on(topic: 'taobao_tae_BaichuanTradeRefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeSuccess 导购平台 > 交易成功} */
  on(topic: 'taobao_tae_BaichuanTradeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeBaichuanTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemDownShelf 导购平台 > 商品下架} */
  on(topic: 'taobao_tae_ItemDownShelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemDownShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemImageChange 导购平台 > 商品主图变更} */
  on(topic: 'taobao_tae_ItemImageChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemImageChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemPriceChange 导购平台 > 订阅的商品变更消息} */
  on(topic: 'taobao_tae_ItemPriceChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuDelete 导购平台 > sku删除} */
  on(topic: 'taobao_tae_ItemSkuDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSkuDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuPublish 导购平台 > sku发布} */
  on(topic: 'taobao_tae_ItemSkuPublish', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSkuPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuSoldOut 导购平台 > 商品sku售空} */
  on(topic: 'taobao_tae_ItemSkuSoldOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSkuSoldOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSoldOut 导购平台 > 商品售空} */
  on(topic: 'taobao_tae_ItemSoldOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSoldOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSubscribe 导购平台 > 商品订阅成功} */
  on(topic: 'taobao_tae_ItemSubscribe', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemSubscribe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemTitleChange 导购平台 > 商品标题变更} */
  on(topic: 'taobao_tae_ItemTitleChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemTitleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemUnSubscribe 导购平台 > 取消商品订阅} */
  on(topic: 'taobao_tae_ItemUnSubscribe', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemUnSubscribe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemUpShelf 导购平台 > 商品上架} */
  on(topic: 'taobao_tae_ItemUpShelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemUpShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopAuthCancel 平台消息 > 取消授权消息通知} */
  on(topic: 'taobao_top_AuthCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopAuthCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopProcessCallback 平台消息 > 工作流执行回调消息} */
  on(topic: 'taobao_top_ProcessCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopProcessCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成} */
  on(topic: 'taobao_topats_TaskComplete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopatsTaskComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeAdvanceDisburse 淘宝交易 > 订单极速放款成功消息} */
  on(topic: 'taobao_trade_AdvanceDisburse', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeAdvanceDisburse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  on(topic: 'taobao_trade_TradeAlipayCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  on(topic: 'taobao_trade_TradeBuyerPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerStepPay 淘宝交易 > 分阶段订单付定金} */
  on(topic: 'taobao_trade_TradeBuyerStepPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerStepPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeChanged 淘宝交易 > 订单信息变更消息} */
  on(topic: 'taobao_trade_TradeChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeClose 淘宝交易 > 关闭交易消息} */
  on(topic: 'taobao_trade_TradeClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息} */
  on(topic: 'taobao_trade_TradeCloseAndModifyDetailOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCloseAndModifyDetailOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCreate 淘宝交易 > 创建淘宝交易消息} */
  on(topic: 'taobao_trade_TradeCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeDelayConfirmPay 淘宝交易 > 延长收货时间消息} */
  on(topic: 'taobao_trade_TradeDelayConfirmPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeDelayConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息} */
  on(topic: 'taobao_trade_TradeLogisticsAddressChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeLogisticsAddressChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeMemoModified 淘宝交易 > 交易备注修改消息} */
  on(topic: 'taobao_trade_TradeMemoModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeMemoModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeModifyFee 淘宝交易 > 修改交易费用消息} */
  on(topic: 'taobao_trade_TradeModifyFee', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeModifyFee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息} */
  on(topic: 'taobao_trade_TradePartlyConfirmPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePartlyConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlyRefund 淘宝交易 > 子订单退款成功消息} */
  on(topic: 'taobao_trade_TradePartlyRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePartlyRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息} */
  on(topic: 'taobao_trade_TradePartlySellerShip', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePartlySellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息} */
  on(topic: 'taobao_trade_TradeRated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeRated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息} */
  on(topic: 'taobao_trade_TradeSellerShip', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息} */
  on(topic: 'taobao_trade_TradeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  on(topic: 'taobao_trade_TradeTimeoutRemind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainAgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  on(topic: 'taobao_train_AgentQueryInfoNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainAgentQueryInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainOrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  on(topic: 'taobao_train_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  on(topic: 'taobao_train_ThirdPartyTradeNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainThirdPartyTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainTradeNotify 淘宝火车票 > 火车票订单消息} */
  on(topic: 'taobao_train_TradeNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  on(topic: 'taobao_uscesl_AlarmCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslAlarmCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  on(topic: 'taobao_uscesl_BindResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiGrabOrderResult 淘宝点点 > 点点送抢单结果通知消息} */
  on(topic: 'taobao_waimai_GrabOrderResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiGrabOrderResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderClose 淘宝点点 > 淘点点外卖订单关闭消息通知} */
  on(topic: 'taobao_waimai_OrderClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplain 淘宝点点 > 点点送订单投诉} */
  on(topic: 'taobao_waimai_OrderComplain', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderComplain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplainCancel 淘宝点点 > 点点送订单撤诉} */
  on(topic: 'taobao_waimai_OrderComplainCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderComplainCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplainResult 淘宝点点 > 点点送订单投诉结果} */
  on(topic: 'taobao_waimai_OrderComplainResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderComplainResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderDispatch 淘宝点点 > 点点送订单通知消息} */
  on(topic: 'taobao_waimai_OrderDispatch', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderDispatchSimple 淘宝点点 > 点点送派单通知} */
  on(topic: 'taobao_waimai_OrderDispatchSimple', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderDispatchSimple) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderPush 淘宝点点 > 点点送接单广播通知消息} */
  on(topic: 'taobao_waimai_OrderPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderRemind 淘宝点点 > 点点送催单消息通知} */
  on(topic: 'taobao_waimai_OrderRemind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOrderRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOuterOrderDispatch 淘宝点点 > 点点送外部订单通知消息} */
  on(topic: 'taobao_waimai_OuterOrderDispatch', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimaiOuterOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  on(topic: 'taobao_wisdomstore_RecognitionNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  on(topic: 'taobao_wisdomstore_RecognitionPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  on(topic: 'taobao_xianyu_RentalItemReturnCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  on(topic: 'taobao_xianyu_RentalItemReturnReserved', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnReserved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消} */
  on(topic: 'taobao_xianyu_RentalOrderCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建} */
  on(topic: 'taobao_xianyu_RentalOrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息} */
  on(topic: 'taobao_xiaowei_Message', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoweiMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  on(topic: 'tmall_aliauto_StepOrderPartConfirmed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliautoStepOrderPartConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  on(topic: 'tmall_auto_TradeModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTradeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  on(topic: 'tmall_auto_TwoWheelsReceiptCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTwoWheelsReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarContractSign 天猫汽车 > 合同签署消息} */
  on(topic: 'tmall_car_ContractSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarFinanceMsg 天猫汽车 > 汽车金融消息} */
  on(topic: 'tmall_car_FinanceMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarFinanceMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelApplyOrderChange 渠道中心API > 申请单变更消息} */
  on(topic: 'tmall_channel_ApplyOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelApplyOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelDeliverOrderChange 渠道中心API > 发货单消息变更} */
  on(topic: 'tmall_channel_DeliverOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelDeliverOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelPurchaseOrderChange 渠道中心API > 采购单变更消息} */
  on(topic: 'tmall_channel_PurchaseOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelPurchaseOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelStopOrderChange 渠道中心API > 停止发货单变更消息} */
  on(topic: 'tmall_channel_StopOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannelStopOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuAnomalyRecourse 天猫服务 > 天猫服务平台一键求助单消息队列} */
  on(topic: 'tmall_fuwu_AnomalyRecourse', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuAnomalyRecourse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuAnomalyRecourseStatusUpdate 天猫服务 > 一键求助状态变更消息} */
  on(topic: 'tmall_fuwu_AnomalyRecourseStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuAnomalyRecourseStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuLogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  on(topic: 'tmall_fuwu_LogisticsInfoMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuLogisticsInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceItemUpdate 天猫服务 > 服务商品信息变更消息} */
  on(topic: 'tmall_fuwu_ServiceItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuServiceItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceMonitorMessage 天猫服务 > 服务预警消息} */
  on(topic: 'tmall_fuwu_ServiceMonitorMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuServiceMonitorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceStoreRegister 天猫服务 > 服务网点注册消息} */
  on(topic: 'tmall_fuwu_ServiceStoreRegister', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuServiceStoreRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送} */
  on(topic: 'tmall_fuwu_SettleAdjustmentStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuSettleAdjustmentStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSettleSupplierFcBill 天猫服务 > 天猫服务服务商分账消息推送} */
  on(topic: 'tmall_fuwu_SettleSupplierFcBill', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuSettleSupplierFcBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardContract 天猫服务 > 天猫服务履约合同单} */
  on(topic: 'tmall_fuwu_WorkcardContract', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardInfo 天猫服务 > 天猫服务任务工单} */
  on(topic: 'tmall_fuwu_WorkcardInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  on(topic: 'tmall_fuwu_WorkcardStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiMemberRegister 天猫美妆 > 飞行入会消息} */
  on(topic: 'tmall_mei_MemberRegister', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiMemberRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiPointChange 天猫美妆 > 品牌积分变更通知} */
  on(topic: 'tmall_mei_PointChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiPointChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtItemsToEasyHome 新零售终端下行消息 > 商品信息同步} */
  on(topic: 'tmall_nrt_ItemsToEasyHome', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrtItemsToEasyHome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelInventoryChange 聚石塔 > 商品库存变化} */
  on(topic: 'tmall_omnichannel_InventoryChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelInventoryChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelInventoryZero 聚石塔 > 商品库存归零} */
  on(topic: 'tmall_omnichannel_InventoryZero', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelInventoryZero) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemDescChange 聚石塔 > 商品描述变化} */
  on(topic: 'tmall_omnichannel_ItemDescChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemDescChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemDownShelf 聚石塔 > 商品下架} */
  on(topic: 'tmall_omnichannel_ItemDownShelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemDownShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemImageChange 聚石塔 > 商品图片变化} */
  on(topic: 'tmall_omnichannel_ItemImageChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemImageChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemPriceChange 聚石塔 > 商品价格变更} */
  on(topic: 'tmall_omnichannel_ItemPriceChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  on(topic: 'tmall_servicecenter_TaskUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenterTaskUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSignCreate 天猫服务 > 签到消息} */
  on(topic: 'tmall_serviceplatform_SignCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformSignCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息} */
  on(topic: 'tmall_serviceplatform_WorkerLeave', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformWorkerLeave) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelBottomPriceRuleChange 酒店商品消息api > 酒店商品底价加价商品加价规则消息通知} */
  on(topic: 'trip_hotel_BottomPriceRuleChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelBottomPriceRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelHotelChange 酒店商品消息api > 飞猪卖家酒店实体变更消息同步} */
  on(topic: 'trip_hotel_HotelChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelHotelChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRateChange 酒店商品消息api > 酒店rate信息变更} */
  on(topic: 'trip_hotel_RateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRatePlanChange 酒店商品消息api > 酒店价格计划消息} */
  on(topic: 'trip_hotel_RatePlanChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRatePlanChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRoomChange 酒店商品消息api > room变更消息} */
  on(topic: 'trip_hotel_RoomChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRoomChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRoomTypeChange 酒店商品消息api > 酒店房型消息} */
  on(topic: 'trip_hotel_RoomTypeChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotelRoomTypeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuError 五道口营销 > 营销操作错误消息} */
  on(topic: 'wdk_market_OperateSkuError', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuErrror 五道口营销 > 营销发布商品错误} */
  on(topic: 'wdk_market_OperateSkuErrror', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuErrror) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataPublishError 五道口营销 > 五道口开放数据发布错误} */
  on(topic: 'wdk_open_DataPublishError', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataPublishError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataRelation 五道口营销 > 五道口开放数据关联通知} */
  on(topic: 'wdk_open_DataRelation', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersaleOrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  on(topic: 'xianyu_aftersale_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersaleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraiseOrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  on(topic: 'xianyu_appraise_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraiseOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCarOrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  on(topic: 'xianyu_car_OrderStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCarOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleOrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  on(topic: 'xianyu_recycle_OrderStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleSpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  on(topic: 'xianyu_recycle_SpuModifySync', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleSpuModifySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateQuesChange 闲鱼 > 闲鱼问卷变更} */
  on(topic: 'xianyu_template_QuesChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateQuesChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateStatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  on(topic: 'xianyu_template_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTenderOrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  on(topic: 'xianyu_tender_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTenderOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  on(topic: 'youku_tvosappstore_AppStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstoreAppStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  on(topic: 'yunos_yoc_DatapoolSandbox', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocDatapoolSandbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocMessageService YunOS YoC > yoc消息服务} */
  on(topic: 'yunos_yoc_MessageService', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocMessageService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlab} */
  on(topic: 'alibaba_adlab', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlab) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicom} */
  on(topic: 'alibaba_alicom', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealth} */
  on(topic: 'alibaba_alihealth', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlink} */
  on(topic: 'alibaba_alink', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqin} */
  on(topic: 'alibaba_aliqin', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoice} */
  on(topic: 'alibaba_einvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwu} */
  on(topic: 'alibaba_fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytrip} */
  on(topic: 'alibaba_happytrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoice} */
  on(topic: 'alibaba_invoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLst} */
  on(topic: 'alibaba_lst', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmc} */
  on(topic: 'alibaba_mmc', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitor} */
  on(topic: 'alibaba_monitor', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMos} */
  on(topic: 'alibaba_mos', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMos) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazca} */
  on(topic: 'alibaba_nazca', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazca) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlife} */
  on(topic: 'alibaba_nlife', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlife) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatform} */
  on(topic: 'alibaba_serviceplatform', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSp} */
  on(topic: 'alibaba_sp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaSp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTax} */
  on(topic: 'alibaba_tax', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTax) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianji} */
  on(topic: 'alibaba_tianji', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianji) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdk} */
  on(topic: 'alibaba_wdk', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkitem} */
  on(topic: 'alibaba_wdkitem', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkitem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkop} */
  on(topic: 'alibaba_wdkop', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopen} */
  on(topic: 'alibaba_wdkopen', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkopen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorder} */
  on(topic: 'alibaba_wdkorder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdktrade} */
  on(topic: 'alibaba_wdktrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdktrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunio} */
  on(topic: 'alibaba_yunio', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunio) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxb} */
  on(topic: 'alicom_axb', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeia} */
  on(topic: 'aliexpress_aeia', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeia) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrder} */
  on(topic: 'aliexpress_order', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCep} */
  on(topic: 'alihealth_cep', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCep) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYs} */
  on(topic: 'alihealth_ys', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgent} */
  on(topic: 'alitrip_agent', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtrip} */
  on(topic: 'alitrip_btrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlight} */
  on(topic: 'alitrip_flight', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesr} */
  on(topic: 'alitrip_iesr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetrade} */
  on(topic: 'alitrip_ietrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrain} */
  on(topic: 'alitrip_train', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravel} */
  on(topic: 'alitrip_travel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticket} */
  on(topic: 'alitrip_tripticket', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTripticket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisa} */
  on(topic: 'alitrip_visa', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripVisa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIot} */
  on(topic: 'aliyun_iot', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustry} */
  on(topic: 'ascp_insdustry', listener: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRight} */
  on(topic: 'banma_right', listener: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatform} */
  on(topic: 'cainiao_consignplatform', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIot} */
  on(topic: 'cainiao_iot', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistribution} */
  on(topic: 'damai_distribution', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTrade} */
  on(topic: 'damai_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtrip} */
  on(topic: 'fliggy_btrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiao} */
  on(topic: 'fliggy_jipiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicket} */
  on(topic: 'fliggy_ticket', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirm} */
  on(topic: 'fuwu_confirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuction} */
  on(topic: 'gov_auction', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreement} */
  on(topic: 'idle_agreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisv} */
  on(topic: 'idle_appraiseisv', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignment} */
  on(topic: 'idle_consignment', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentii} */
  on(topic: 'idle_consignmentii', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentii) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycle} */
  on(topic: 'idle_recycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisv} */
  on(topic: 'idle_topisv', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpay} */
  on(topic: 'idle_tranferpay', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTrade} */
  on(topic: 'jae_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.JaeTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplier} */
  on(topic: 'lst_supplier', listener: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplier) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompass} */
  on(topic: 'niaochao_tccompass', listener: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompass) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAg} */
  on(topic: 'taobao_ag', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAps} */
  on(topic: 'taobao_aps', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAps) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxin} */
  on(topic: 'taobao_axin', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuan} */
  on(topic: 'taobao_baichuan', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmc} */
  on(topic: 'taobao_bmc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBus} */
  on(topic: 'taobao_bus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarlease} */
  on(topic: 'taobao_carlease', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCarlease) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContent} */
  on(topic: 'taobao_content', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifa} */
  on(topic: 'taobao_daifa', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDd} */
  on(topic: 'taobao_dd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandian} */
  on(topic: 'taobao_diandian', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaas} */
  on(topic: 'taobao_dpaas', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaas) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoice} */
  on(topic: 'taobao_einvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiao} */
  on(topic: 'taobao_fenxiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggy} */
  on(topic: 'taobao_fliggy', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwu} */
  on(topic: 'taobao_fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuys} */
  on(topic: 'taobao_globalbuys', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuys) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeai} */
  on(topic: 'taobao_homeai', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotel} */
  on(topic: 'taobao_hotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstore} */
  on(topic: 'taobao_istore', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItem} */
  on(topic: 'taobao_item', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiao} */
  on(topic: 'taobao_jipiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLive} */
  on(topic: 'taobao_live', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogistics} */
  on(topic: 'taobao_logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddress} */
  on(topic: 'taobao_modifyaddress', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorder} */
  on(topic: 'taobao_modifyorder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifysku} */
  on(topic: 'taobao_modifysku', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifysku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOc} */
  on(topic: 'taobao_oc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccount} */
  on(topic: 'taobao_openaccount', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccount) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrm} */
  on(topic: 'taobao_opencrm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenim} */
  on(topic: 'taobao_openim', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenim) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmall} */
  on(topic: 'taobao_openmall', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOs} */
  on(topic: 'taobao_os', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligenius} */
  on(topic: 'taobao_rdcaligenius', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligenius) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycle} */
  on(topic: 'taobao_recycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefund} */
  on(topic: 'taobao_refund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhino} */
  on(topic: 'taobao_rhino', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhino) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartapp} */
  on(topic: 'taobao_smartapp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartapp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTae} */
  on(topic: 'taobao_tae', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTop} */
  on(topic: 'taobao_top', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopats} */
  on(topic: 'taobao_topats', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopats) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrade} */
  on(topic: 'taobao_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrain} */
  on(topic: 'taobao_train', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUscesl} */
  on(topic: 'taobao_uscesl', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUscesl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimai} */
  on(topic: 'taobao_waimai', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstore} */
  on(topic: 'taobao_wisdomstore', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyu} */
  on(topic: 'taobao_xianyu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaowei} */
  on(topic: 'taobao_xiaowei', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaowei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliauto} */
  on(topic: 'tmall_aliauto', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliauto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAuto} */
  on(topic: 'tmall_auto', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAuto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCar} */
  on(topic: 'tmall_car', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannel} */
  on(topic: 'tmall_channel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwu} */
  on(topic: 'tmall_fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMei} */
  on(topic: 'tmall_mei', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrt} */
  on(topic: 'tmall_nrt', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannel} */
  on(topic: 'tmall_omnichannel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenter} */
  on(topic: 'tmall_servicecenter', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatform} */
  on(topic: 'tmall_serviceplatform', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotel} */
  on(topic: 'trip_hotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarket} */
  on(topic: 'wdk_market', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpen} */
  on(topic: 'wdk_open', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersale} */
  on(topic: 'xianyu_aftersale', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersale) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraise} */
  on(topic: 'xianyu_appraise', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCar} */
  on(topic: 'xianyu_car', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycle} */
  on(topic: 'xianyu_recycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplate} */
  on(topic: 'xianyu_template', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTender} */
  on(topic: 'xianyu_tender', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTender) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstore} */
  on(topic: 'youku_tvosappstore', listener: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYoc} */
  on(topic: 'yunos_yoc', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosYoc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alibaba} */
  on(topic: 'alibaba', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alibaba) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alicom} */
  on(topic: 'alicom', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliexpress} */
  on(topic: 'aliexpress', listener: (this: TaoMessageConsumer, message: IncomingMessage.Aliexpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alihealth} */
  on(topic: 'alihealth', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alitrip} */
  on(topic: 'alitrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alitrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliyun} */
  on(topic: 'aliyun', listener: (this: TaoMessageConsumer, message: IncomingMessage.Aliyun) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ascp} */
  on(topic: 'ascp', listener: (this: TaoMessageConsumer, message: IncomingMessage.Ascp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Banma} */
  on(topic: 'banma', listener: (this: TaoMessageConsumer, message: IncomingMessage.Banma) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Cainiao} */
  on(topic: 'cainiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Cainiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Damai} */
  on(topic: 'damai', listener: (this: TaoMessageConsumer, message: IncomingMessage.Damai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fliggy} */
  on(topic: 'fliggy', listener: (this: TaoMessageConsumer, message: IncomingMessage.Fliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fuwu} */
  on(topic: 'fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.Fuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Gov} */
  on(topic: 'gov', listener: (this: TaoMessageConsumer, message: IncomingMessage.Gov) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Idle} */
  on(topic: 'idle', listener: (this: TaoMessageConsumer, message: IncomingMessage.Idle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Jae} */
  on(topic: 'jae', listener: (this: TaoMessageConsumer, message: IncomingMessage.Jae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lst} */
  on(topic: 'lst', listener: (this: TaoMessageConsumer, message: IncomingMessage.Lst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Niaochao} */
  on(topic: 'niaochao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Niaochao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Taobao} */
  on(topic: 'taobao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Taobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Tmall} */
  on(topic: 'tmall', listener: (this: TaoMessageConsumer, message: IncomingMessage.Tmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Trip} */
  on(topic: 'trip', listener: (this: TaoMessageConsumer, message: IncomingMessage.Trip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Wdk} */
  on(topic: 'wdk', listener: (this: TaoMessageConsumer, message: IncomingMessage.Wdk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Xianyu} */
  on(topic: 'xianyu', listener: (this: TaoMessageConsumer, message: IncomingMessage.Xianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Youku} */
  on(topic: 'youku', listener: (this: TaoMessageConsumer, message: IncomingMessage.Youku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Yunos} */
  on(topic: 'yunos', listener: (this: TaoMessageConsumer, message: IncomingMessage.Yunos) => void): TaoMessageConsumer;
}

declare const TMC: TaoMessageConsumer;

type internalMessage = Message;
type internalMessageFields = MessageFields;
type internalMessageKind = MessageKind;
type internalMessageType = MessageType;
type internalHeaderType = HeaderType;
type internalValueFormat = ValueFormat;
declare namespace TMC {
  export {
    internalMessage as Message,
    internalMessageFields as MessageFields,
    internalMessageKind as MessageKind,
    internalMessageType as MessageType,
    internalHeaderType as HeaderType,
    internalValueFormat as ValueFormat,
  };
}

export = TMC;
