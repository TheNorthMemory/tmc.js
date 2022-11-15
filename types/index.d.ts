/// <reference types="node" />
/// <reference path="message.d.ts" />
/// <reference path="message.in.d.ts" />

import { BinaryLike } from "crypto";
import EventEmitter from "events";

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
}

declare interface TaoMessageConstractor extends EventEmitter {
    new (appKey: string, appSecret: BinaryLike, groupName?: string | ConsumerOptions, options?: ConsumerOptions): TaoMessageConsumer;
}

declare interface TaoMessageSubscriber {
    [K: string]: TopicSubscriber;
}

declare interface TopicSubscriber {
    (fn: TaoMessageProcessor): TaoMessageConsumer;
}

declare interface TaoMessageProcessor {
    (this: TaoMessageConsumer, message: Message): void;
}

declare type TaoMessageConsumer = TaoMessageConstractor & TaoMessageSubscriber & TaoTopicsDescriptor & TaoEventsListener;

declare interface TaoTopicsDescriptor {
  /** {@link IncomingMessage.AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  alibaba_adlab_IotDevice(fn: (message: IncomingMessage.AlibabaAdlabIotDevice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  alibaba_adlab_OrderItemEtaUpdate(fn: (message: IncomingMessage.AlibabaAdlabOrderItemEtaUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  alibaba_adlab_OrderItemStatus(fn: (message: IncomingMessage.AlibabaAdlabOrderItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  alibaba_alicom_FlowGiftSendNotify(fn: (message: IncomingMessage.AlibabaAlicomFlowGiftSendNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthBillProcessStatusNotify 阿里健康-疫苗 > 单据处理状态通知} */
  alibaba_alihealth_BillProcessStatusNotify(fn: (message: IncomingMessage.AlibabaAlihealthBillProcessStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthDoctorMessage 阿里健康-疫苗 > 医生、服务相关消息} */
  alibaba_alihealth_DoctorMessage(fn: (message: IncomingMessage.AlibabaAlihealthDoctorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange 阿里健康-疫苗 > 中台订单状态变化推送} */
  alibaba_alihealth_NrmopOrderStatusChange(fn: (message: IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthOrderStatusChange 阿里健康-疫苗 > 平台通知三方机构"订单状态变更"} */
  alibaba_alihealth_OrderStatusChange(fn: (message: IncomingMessage.AlibabaAlihealthOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeOrderStatusChange 阿里健康-疫苗 > O2O订单状态变更通知} */
  alibaba_alihealth_TradeOrderStatusChange(fn: (message: IncomingMessage.AlibabaAlihealthTradeOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康-疫苗 > 疫苗交易预约信息变动} */
  alibaba_alihealth_TradeVaccineSubscribeChange(fn: (message: IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceDataPush 阿里物联 > 设备数据推送} */
  alibaba_alink_DeviceDataPush(fn: (message: IncomingMessage.AlibabaAlinkDeviceDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceMessage 阿里物联 > 设备报警消息} */
  alibaba_alink_DeviceMessage(fn: (message: IncomingMessage.AlibabaAlinkDeviceMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  alibaba_aliqin_DigitalSmsTemplateDR(fn: (message: IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  alibaba_aliqin_FcActiveIotcard(fn: (message: IncomingMessage.AlibabaAliqinFcActiveIotcard) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  alibaba_aliqin_FcCallCdr(fn: (message: IncomingMessage.AlibabaAliqinFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallRecord 阿里通信 > 录音回执} */
  alibaba_aliqin_FcCallRecord(fn: (message: IncomingMessage.AlibabaAliqinFcCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcFlowUp 阿里通信 > 流量直充状态报告} */
  alibaba_aliqin_FcFlowUp(fn: (message: IncomingMessage.AlibabaAliqinFcFlowUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcSmsDR 阿里通信 > 短消息发送结果报告} */
  alibaba_aliqin_FcSmsDR(fn: (message: IncomingMessage.AlibabaAliqinFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcSmsUp 阿里通信 > 短信上行} */
  alibaba_aliqin_FcSmsUp(fn: (message: IncomingMessage.AlibabaAliqinFcSmsUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcTmpStatus 阿里通信 > 语音呼叫中间状态消息} */
  alibaba_aliqin_FcTmpStatus(fn: (message: IncomingMessage.AlibabaAliqinFcTmpStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFlowDirectCharge 阿里通信 > 流量直充} */
  alibaba_aliqin_FlowDirectCharge(fn: (message: IncomingMessage.AlibabaAliqinFlowDirectCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  alibaba_aliqin_IotPersonalConfirmNotice(fn: (message: IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知} */
  alibaba_aliqin_IotStatusNotice(fn: (message: IncomingMessage.AlibabaAliqinIotStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  alibaba_aliqin_TaFcSmsDR(fn: (message: IncomingMessage.AlibabaAliqinTaFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  alibaba_einvoice_ApplyUpdate(fn: (message: IncomingMessage.AlibabaEinvoiceApplyUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息} */
  alibaba_einvoice_CompanyDoAction(fn: (message: IncomingMessage.AlibabaEinvoiceCompanyDoAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  alibaba_einvoice_OrderRefundResult(fn: (message: IncomingMessage.AlibabaEinvoiceOrderRefundResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  alibaba_einvoice_RegisterFlowChange(fn: (message: IncomingMessage.AlibabaEinvoiceRegisterFlowChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  alibaba_einvoice_RegisterFlowCreate(fn: (message: IncomingMessage.AlibabaEinvoiceRegisterFlowCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  alibaba_einvoice_TaxDeviceOrder(fn: (message: IncomingMessage.AlibabaEinvoiceTaxDeviceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息} */
  alibaba_fuwu_OrderPaid(fn: (message: IncomingMessage.AlibabaFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  alibaba_happytrip_OrderNotify(fn: (message: IncomingMessage.AlibabaHappytripOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApply 阿里发票 > 开票申请} */
  alibaba_invoice_Apply(fn: (message: IncomingMessage.AlibabaInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyResult 阿里发票 > 开票申请审核结果} */
  alibaba_invoice_ApplyResult(fn: (message: IncomingMessage.AlibabaInvoiceApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskOffline 阿里发票 > 税盘下架单新增和更新通知} */
  alibaba_invoice_DiskOffline(fn: (message: IncomingMessage.AlibabaInvoiceDiskOffline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceFlowBuket 阿里发票 > 资源包开通/订购记录同步} */
  alibaba_invoice_FlowBuket(fn: (message: IncomingMessage.AlibabaInvoiceFlowBuket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInvoiceApply 阿里发票 > 税控服务开票申请} */
  alibaba_invoice_InvoiceApply(fn: (message: IncomingMessage.AlibabaInvoiceInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceLogistics 阿里发票 > 发票对外通知物流信息} */
  alibaba_invoice_Logistics(fn: (message: IncomingMessage.AlibabaInvoiceLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePaperOpsReturn 阿里发票 > 纸票操作结果回传（打印、作废等）} */
  alibaba_invoice_PaperOpsReturn(fn: (message: IncomingMessage.AlibabaInvoicePaperOpsReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePreConsulting 阿里发票 > 电子发票售前咨询} */
  alibaba_invoice_PreConsulting(fn: (message: IncomingMessage.AlibabaInvoicePreConsulting) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQuery 阿里发票 > 数据查询请求} */
  alibaba_invoice_Query(fn: (message: IncomingMessage.AlibabaInvoiceQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQueryInvoice 阿里发票 > 查询发票信息} */
  alibaba_invoice_QueryInvoice(fn: (message: IncomingMessage.AlibabaInvoiceQueryInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegist 阿里发票 > 入驻阿里发票平台} */
  alibaba_invoice_Regist(fn: (message: IncomingMessage.AlibabaInvoiceRegist) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceResultReturn 阿里发票 > 开票请求结果} */
  alibaba_invoice_ResultReturn(fn: (message: IncomingMessage.AlibabaInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceStatusChange 阿里发票 > 发票状态变更消息} */
  alibaba_invoice_StatusChange(fn: (message: IncomingMessage.AlibabaInvoiceStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxChange 阿里发票 > 商家税号变更} */
  alibaba_invoice_TaxChange(fn: (message: IncomingMessage.AlibabaInvoiceTaxChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnissue 阿里发票 > 创建未开具发票通知} */
  alibaba_invoice_Unissue(fn: (message: IncomingMessage.AlibabaInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstBmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化} */
  alibaba_lst_BmOrderLogisticsChange(fn: (message: IncomingMessage.AlibabaLstBmOrderLogisticsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstBroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  alibaba_lst_BroadcastSelfOrderShipChange(fn: (message: IncomingMessage.AlibabaLstBroadcastSelfOrderShipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstCashierSync 零售通_公共 > 收银快照同步消息} */
  alibaba_lst_CashierSync(fn: (message: IncomingMessage.AlibabaLstCashierSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstGoodsSync 零售通_公共 > 商品同步消息} */
  alibaba_lst_GoodsSync(fn: (message: IncomingMessage.AlibabaLstGoodsSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstInventorySync 零售通_公共 > 商品库存修改同步消息} */
  alibaba_lst_InventorySync(fn: (message: IncomingMessage.AlibabaLstInventorySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstMsgTest 零售通_公共 > 消息测试} */
  alibaba_lst_MsgTest(fn: (message: IncomingMessage.AlibabaLstMsgTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息} */
  alibaba_lst_OrderChange(fn: (message: IncomingMessage.AlibabaLstOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstRefundChange 零售通_公共 > 订单退单} */
  alibaba_lst_RefundChange(fn: (message: IncomingMessage.AlibabaLstRefundChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  alibaba_lst_SpeakerAdvertPlayRecord(fn: (message: IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  alibaba_lst_SupplierOrderChange(fn: (message: IncomingMessage.AlibabaLstSupplierOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息} */
  alibaba_mmc_OpenStockAlterNotify(fn: (message: IncomingMessage.AlibabaMmcOpenStockAlterNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息} */
  alibaba_mmc_OpenStockItemAlter(fn: (message: IncomingMessage.AlibabaMmcOpenStockItemAlter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcOrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息} */
  alibaba_mmc_OrderNotify(fn: (message: IncomingMessage.AlibabaMmcOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcPriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息} */
  alibaba_mmc_PriceUpdate(fn: (message: IncomingMessage.AlibabaMmcPriceUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcRefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息} */
  alibaba_mmc_RefundOrderNotify(fn: (message: IncomingMessage.AlibabaMmcRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitorEventSendMessage 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  alibaba_monitor_EventSendMessage(fn: (message: IncomingMessage.AlibabaMonitorEventSendMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitorMessageSend 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  alibaba_monitor_MessageSend(fn: (message: IncomingMessage.AlibabaMonitorMessageSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrder 银泰开放平台消息 > 销售单状态变更} */
  alibaba_mos_SaleOrder(fn: (message: IncomingMessage.AlibabaMosSaleOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  alibaba_mos_SaleOrderRefund(fn: (message: IncomingMessage.AlibabaMosSaleOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaAbandonCert 网上法庭 > 作废存证消息接口} */
  alibaba_nazca_AbandonCert(fn: (message: IncomingMessage.AlibabaNazcaAbandonCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaQueryChargeNum 网上法庭 > 查询收费数量} */
  alibaba_nazca_QueryChargeNum(fn: (message: IncomingMessage.AlibabaNazcaQueryChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaSaveCert 网上法庭 > 发起存证消息接口} */
  alibaba_nazca_SaveCert(fn: (message: IncomingMessage.AlibabaNazcaSaveCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaUpdateChargeNum 网上法庭 > 更新收费数量} */
  alibaba_nazca_UpdateChargeNum(fn: (message: IncomingMessage.AlibabaNazcaUpdateChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  alibaba_nlife_BToBTradeStatusNotify(fn: (message: IncomingMessage.AlibabaNlifeBToBTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  alibaba_nlife_BToCTradeOrderSync(fn: (message: IncomingMessage.AlibabaNlifeBToCTradeOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  alibaba_nlife_BtoBTradeDeliverNotify(fn: (message: IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  alibaba_nlife_BtoBTradeEffectiveNotify(fn: (message: IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  alibaba_nlife_BtobTradeRefundConfirmMsgNotify(fn: (message: IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  alibaba_nlife_BtobTradeRefundNotify(fn: (message: IncomingMessage.AlibabaNlifeBtobTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  alibaba_nlife_InstorageDiffAuditNotify(fn: (message: IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息} */
  alibaba_nlife_ItemUpdate(fn: (message: IncomingMessage.AlibabaNlifeItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatformFulfilTask 天猫服务 > 服务供应链核销单消息} */
  alibaba_serviceplatform_FulfilTask(fn: (message: IncomingMessage.AlibabaServiceplatformFulfilTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatformServiceOrder 天猫服务 > 服务供应链服务单消息} */
  alibaba_serviceplatform_ServiceOrder(fn: (message: IncomingMessage.AlibabaServiceplatformServiceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSpNotifyPaymentResult 阿里智付 > 通知付款结果} */
  alibaba_sp_NotifyPaymentResult(fn: (message: IncomingMessage.AlibabaSpNotifyPaymentResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTaxEmployeeSignResult 阿里发票 > 税优雇员签约结果消息} */
  alibaba_tax_EmployeeSignResult(fn: (message: IncomingMessage.AlibabaTaxEmployeeSignResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTaxSalaryPayResult 阿里发票 > 税优发薪结果通知} */
  alibaba_tax_SalaryPayResult(fn: (message: IncomingMessage.AlibabaTaxSalaryPayResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  alibaba_tianji_ContractOrder(fn: (message: IncomingMessage.AlibabaTianjiContractOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  alibaba_tianji_OrderCreate(fn: (message: IncomingMessage.AlibabaTianjiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelCommentAudit 五道口商品 > 差评回评} */
  alibaba_wdk_ChannelCommentAudit(fn: (message: IncomingMessage.AlibabaWdkChannelCommentAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCancel 五道口商品 > 五道口售中取消外部订单消息} */
  alibaba_wdk_ChannelOrderCancel(fn: (message: IncomingMessage.AlibabaWdkChannelOrderCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit 五道口商品 > 客服审核退款结果} */
  alibaba_wdk_ChannelOrderCsRefundAudit(fn: (message: IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsUserrefund 五道口商品 > 客服代客发起售后退款(整单/部分)} */
  alibaba_wdk_ChannelOrderCsUserrefund(fn: (message: IncomingMessage.AlibabaWdkChannelOrderCsUserrefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderStatusChange 五道口商品 > 订单状态变更消息} */
  alibaba_wdk_ChannelOrderStatusChange(fn: (message: IncomingMessage.AlibabaWdkChannelOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelStockSync 五道口商品 > 库存同步} */
  alibaba_wdk_ChannelStockSync(fn: (message: IncomingMessage.AlibabaWdkChannelStockSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillOrderChange 五道口商品 > 售中履约变更消息} */
  alibaba_wdk_FulfillOrderChange(fn: (message: IncomingMessage.AlibabaWdkFulfillOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkStoreItemUpdate 五道口商品 > 商家渠道商品变动消息} */
  alibaba_wdk_StoreItemUpdate(fn: (message: IncomingMessage.AlibabaWdkStoreItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkitemWarehouseSkuModify 五道口商品 > 五道口仓商品变更消息} */
  alibaba_wdkitem_WarehouseSkuModify(fn: (message: IncomingMessage.AlibabaWdkitemWarehouseSkuModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopRexAccountChange 五道口订单 > Rex用户信息变更消息} */
  alibaba_wdkop_RexAccountChange(fn: (message: IncomingMessage.AlibabaWdkopRexAccountChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenOrderMessage 五道口订单 > 五道口交易状态变更消息通知} */
  alibaba_wdkopen_OrderMessage(fn: (message: IncomingMessage.AlibabaWdkopenOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenPriceAdjust 五道口订单 > 采购价变更消息} */
  alibaba_wdkopen_PriceAdjust(fn: (message: IncomingMessage.AlibabaWdkopenPriceAdjust) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkopenRefundMessage 五道口订单 > 同城零售逆向交易消息} */
  alibaba_wdkopen_RefundMessage(fn: (message: IncomingMessage.AlibabaWdkopenRefundMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderFulfillStatusChange 五道口订单 > 五道口订单履约状态变更消息} */
  alibaba_wdkorder_FulfillStatusChange(fn: (message: IncomingMessage.AlibabaWdkorderFulfillStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderInsuranceOrder 五道口订单 > 共享库存保险正向投保消息} */
  alibaba_wdkorder_InsuranceOrder(fn: (message: IncomingMessage.AlibabaWdkorderInsuranceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderInsuranceRefund 五道口订单 > 共享库存保险逆向理赔消息} */
  alibaba_wdkorder_InsuranceRefund(fn: (message: IncomingMessage.AlibabaWdkorderInsuranceRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderFulfillPush 五道口订单 > 订单履约状态变更消息} */
  alibaba_wdkorder_OrderFulfillPush(fn: (message: IncomingMessage.AlibabaWdkorderOrderFulfillPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderFulfillTokenPush 五道口订单 > 履约状态变更消息} */
  alibaba_wdkorder_OrderFulfillTokenPush(fn: (message: IncomingMessage.AlibabaWdkorderOrderFulfillTokenPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderOrderStatusPush 五道口订单 > 猫超订单数据变更消息通知} */
  alibaba_wdkorder_OrderStatusPush(fn: (message: IncomingMessage.AlibabaWdkorderOrderStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderRefundOrgPoint 五道口订单 > 逆向单企业积分消息发送} */
  alibaba_wdkorder_RefundOrgPoint(fn: (message: IncomingMessage.AlibabaWdkorderRefundOrgPoint) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderRefundSuccess 五道口订单 > 五道口淘鲜达逆向订单消息} */
  alibaba_wdkorder_RefundSuccess(fn: (message: IncomingMessage.AlibabaWdkorderRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderSoPo 五道口订单 > 共享库存SOPO} */
  alibaba_wdkorder_SoPo(fn: (message: IncomingMessage.AlibabaWdkorderSoPo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderStatusChange 五道口订单 > 五道口订单状态变更消息} */
  alibaba_wdkorder_StatusChange(fn: (message: IncomingMessage.AlibabaWdkorderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkorderVoucherStatus 五道口订单 > 淘鲜达订单优惠券状态变更} */
  alibaba_wdkorder_VoucherStatus(fn: (message: IncomingMessage.AlibabaWdkorderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdktradeCouponInstance 五道口营销 > 营销券实例消息} */
  alibaba_wdktrade_CouponInstance(fn: (message: IncomingMessage.AlibabaWdktradeCouponInstance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunioDataTransfer 平台消息 > YunIO数据流转} */
  alibaba_yunio_DataTransfer(fn: (message: IncomingMessage.AlibabaYunioDataTransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步} */
  alicom_axb_SubsEventSync(fn: (message: IncomingMessage.AlicomAxbSubsEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  aliexpress_aeia_TaskplatformInterestNotice(fn: (message: IncomingMessage.AliexpressAeiaTaskplatformInterestNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderFinish AE-交易 > 交易成功} */
  aliexpress_order_Finish(fn: (message: IncomingMessage.AliexpressOrderFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderFundProcessing AE-交易 > 资金处理中} */
  aliexpress_order_FundProcessing(fn: (message: IncomingMessage.AliexpressOrderFundProcessing) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderInCancel AE-交易 > 取消订单中} */
  aliexpress_order_InCancel(fn: (message: IncomingMessage.AliexpressOrderInCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderPlaceOrderSuccess AE-交易 > 下单成功} */
  aliexpress_order_PlaceOrderSuccess(fn: (message: IncomingMessage.AliexpressOrderPlaceOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderRiskControl AE-交易 > 风控24小时} */
  aliexpress_order_RiskControl(fn: (message: IncomingMessage.AliexpressOrderRiskControl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderSellerPartSendGoods AE-交易 > 等待部分发货} */
  aliexpress_order_SellerPartSendGoods(fn: (message: IncomingMessage.AliexpressOrderSellerPartSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  aliexpress_order_WaitBuyerAcceptGoods(fn: (message: IncomingMessage.AliexpressOrderWaitBuyerAcceptGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitGroupSuccess AE-交易 > 等待成团} */
  aliexpress_order_WaitGroupSuccess(fn: (message: IncomingMessage.AliexpressOrderWaitGroupSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitSellerExamineMoney AE-交易 > 待卖家验款} */
  aliexpress_order_WaitSellerExamineMoney(fn: (message: IncomingMessage.AliexpressOrderWaitSellerExamineMoney) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderWaitSellerSendGoods AE-交易 > 等待卖家发货} */
  aliexpress_order_WaitSellerSendGoods(fn: (message: IncomingMessage.AliexpressOrderWaitSellerSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  alihealth_cep_OrderStatusChange(fn: (message: IncomingMessage.AlihealthCepOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  alihealth_ys_OrderMemConsume(fn: (message: IncomingMessage.AlihealthYsOrderMemConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  alihealth_ys_OrderPushConsume(fn: (message: IncomingMessage.AlihealthYsOrderPushConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgentNotify 淘宝机票 > 商家机票业务通知} */
  alitrip_agent_Notify(fn: (message: IncomingMessage.AlitripAgentNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripCorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  alitrip_btrip_CorpSignCallback(fn: (message: IncomingMessage.AlitripBtripCorpSignCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  alitrip_btrip_ExceedApplySubmit(fn: (message: IncomingMessage.AlitripBtripExceedApplySubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChange 淘宝机票 > 航变消息} */
  alitrip_flight_Change(fn: (message: IncomingMessage.AlitripFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesrFlightChange 淘宝机票 > 航变数据推送} */
  alitrip_iesr_FlightChange(fn: (message: IncomingMessage.AlitripIesrFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesrTicketMessage 淘宝机票 > 国际运价采购票消息} */
  alitrip_iesr_TicketMessage(fn: (message: IncomingMessage.AlitripIesrTicketMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeChangeMsg 淘宝机票 > 国际机票改签订单状态消息} */
  alitrip_ietrade_ChangeMsg(fn: (message: IncomingMessage.AlitripIetradeChangeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeOrderMsg 淘宝机票 > 国际机票订单消息} */
  alitrip_ietrade_OrderMsg(fn: (message: IncomingMessage.AlitripIetradeOrderMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetradeRefundMsg 淘宝机票 > 国际机票退票订单状态消息} */
  alitrip_ietrade_RefundMsg(fn: (message: IncomingMessage.AlitripIetradeRefundMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  alitrip_train_AgentStopQuery(fn: (message: IncomingMessage.AlitripTrainAgentStopQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelOrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息} */
  alitrip_travel_OrderChanged(fn: (message: IncomingMessage.AlitripTravelOrderChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelPersonChanged 航旅度假交易 > 出行人信息变更消息} */
  alitrip_travel_PersonChanged(fn: (message: IncomingMessage.AlitripTravelPersonChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelVisaService 航旅度假交易 > 签证消息服务} */
  alitrip_travel_VisaService(fn: (message: IncomingMessage.AlitripTravelVisaService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticketTravellerCreate 航旅度假交易 > 旅行机票交易创建} */
  alitrip_tripticket_TravellerCreate(fn: (message: IncomingMessage.AlitripTripticketTravellerCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisaTradeDone 航旅度假交易 > 在线签证交易完成消息} */
  alitrip_visa_TradeDone(fn: (message: IncomingMessage.AlitripVisaTradeDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步} */
  aliyun_iot_OrderSync(fn: (message: IncomingMessage.AliyunIotOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRightTradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  banma_right_TradeCreate(fn: (message: IncomingMessage.BanmaRightTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatformLogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  cainiao_consignplatform_LogisiticsDetail(fn: (message: IncomingMessage.CainiaoConsignplatformLogisiticsDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIotAftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  cainiao_iot_AftersalesTicket(fn: (message: IncomingMessage.CainiaoIotAftersalesTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  damai_distribution_PerformCancel(fn: (message: IncomingMessage.DamaiDistributionPerformCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  damai_distribution_PerformStatus(fn: (message: IncomingMessage.DamaiDistributionPerformStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  damai_distribution_PreSaleToNow(fn: (message: IncomingMessage.DamaiDistributionPreSaleToNow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  damai_distribution_ProjectStatus(fn: (message: IncomingMessage.DamaiDistributionProjectStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  damai_distribution_TicketItemStatus(fn: (message: IncomingMessage.DamaiDistributionTicketItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  damai_trade_TicketStatusPush(fn: (message: IncomingMessage.DamaiTradeTicketStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化} */
  fliggy_btrip_HotelDistributionOrderChange(fn: (message: IncomingMessage.FliggyBtripHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务} */
  fliggy_jipiao_FlightChange(fn: (message: IncomingMessage.FliggyJipiaoFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  fliggy_ticket_OrderRefund(fn: (message: IncomingMessage.FliggyTicketOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  fliggy_ticket_OrderStatusChange(fn: (message: IncomingMessage.FliggyTicketOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  fliggy_ticket_VerifyNotify(fn: (message: IncomingMessage.FliggyTicketVerifyNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmFail 服务市场 > 收入确认失败} */
  fuwu_confirm_Fail(fn: (message: IncomingMessage.FuwuConfirmFail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmSuccess 服务市场 > 收入确认成功} */
  fuwu_confirm_Success(fn: (message: IncomingMessage.FuwuConfirmSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  gov_auction_PushVehicleDataToBM(fn: (message: IncomingMessage.GovAuctionPushVehicleDataToBM) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  gov_auction_VehicleDataPush(fn: (message: IncomingMessage.GovAuctionVehicleDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreementStatusChange 闲鱼 > 闲鱼代扣消息通知} */
  idle_agreement_StatusChange(fn: (message: IncomingMessage.IdleAgreementStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvItemSyn 闲鱼已验货 > 已验货商品消息} */
  idle_appraiseisv_ItemSyn(fn: (message: IncomingMessage.IdleAppraiseisvItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvOrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  idle_appraiseisv_OrderSyn(fn: (message: IncomingMessage.IdleAppraiseisvOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvRefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  idle_appraiseisv_RefundSyn(fn: (message: IncomingMessage.IdleAppraiseisvRefundSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentOrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  idle_consignment_OrderSyn(fn: (message: IncomingMessage.IdleConsignmentOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentiiOrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  idle_consignmentii_OrderSyn(fn: (message: IncomingMessage.IdleConsignmentiiOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  idle_recycle_OrderSyn(fn: (message: IncomingMessage.IdleRecycleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息} */
  idle_recycle_RefundStatusModify(fn: (message: IncomingMessage.IdleRecycleRefundStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvGlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知} */
  idle_topisv_GlobalProductNotice(fn: (message: IncomingMessage.IdleTopisvGlobalProductNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知} */
  idle_topisv_ItemNotice(fn: (message: IncomingMessage.IdleTopisvItemNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvRefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知} */
  idle_topisv_RefundNotice(fn: (message: IncomingMessage.IdleTopisvRefundNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvTradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知} */
  idle_topisv_TradeNotice(fn: (message: IncomingMessage.IdleTopisvTradeNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息} */
  idle_tranferpay_OrderChange(fn: (message: IncomingMessage.IdleTranferpayOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  jae_trade_PaidSuccessed(fn: (message: IncomingMessage.JaeTradePaidSuccessed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplierBroadcastFastRefundMessage 零售通_公共 > 零售通广播极速退款消息} */
  lst_supplier_BroadcastFastRefundMessage(fn: (message: IncomingMessage.LstSupplierBroadcastFastRefundMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplierFastRefundMessageCreate 零售通_公共 > 品牌商极速退款消息创建} */
  lst_supplier_FastRefundMessageCreate(fn: (message: IncomingMessage.LstSupplierFastRefundMessageCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息} */
  taobao_ag_RefundSignInfo(fn: (message: IncomingMessage.TaobaoAgRefundSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  taobao_aps_CommentAdd(fn: (message: IncomingMessage.TaobaoApsCommentAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsNewFeedback 平台消息 > 收到舆情} */
  taobao_aps_NewFeedback(fn: (message: IncomingMessage.TaobaoApsNewFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  taobao_axin_RefundCallBack(fn: (message: IncomingMessage.TaobaoAxinRefundCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活} */
  taobao_baichuan_ASODeviceActivate(fn: (message: IncomingMessage.TaobaoBaichuanASODeviceActivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息} */
  taobao_baichuan_PasswordRuleChange(fn: (message: IncomingMessage.TaobaoBaichuanPasswordRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmcShortMessageStatus 导购平台 > 短信状态} */
  taobao_bmc_ShortMessageStatus(fn: (message: IncomingMessage.TaobaoBmcShortMessageStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePay 淘宝汽车票 > 自助机付款成功结果} */
  taobao_bus_TVMTradePay(fn: (message: IncomingMessage.TaobaoBusTVMTradePay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知} */
  taobao_bus_TVMTradePayStatusNotice(fn: (message: IncomingMessage.TaobaoBusTVMTradePayStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息} */
  taobao_bus_TVMTradePaySuccess(fn: (message: IncomingMessage.TaobaoBusTVMTradePaySuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusTradePayStatus 淘宝汽车票 > 交易支付状态节点} */
  taobao_bus_TradePayStatus(fn: (message: IncomingMessage.TaobaoBusTradePayStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarleaseFreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息} */
  taobao_carlease_FreeDpOrderMsgSend(fn: (message: IncomingMessage.TaobaoCarleaseFreeDpOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  taobao_daifa_DistributorOrderStatusChange(fn: (message: IncomingMessage.TaobaoDaifaDistributorOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  taobao_daifa_SupplierOrderStatusChange(fn: (message: IncomingMessage.TaobaoDaifaSupplierOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDdPush 淘宝点点 > 淘点点消息推送} */
  taobao_dd_Push(fn: (message: IncomingMessage.TaobaoDdPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  taobao_diandian_ServeOrder(fn: (message: IncomingMessage.TaobaoDiandianServeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasAuthTokenCreate DPAAS > dpaas三方服务token} */
  taobao_dpaas_AuthTokenCreate(fn: (message: IncomingMessage.TaobaoDpaasAuthTokenCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerFlow DPAAS > 客流新增及会员到店消息} */
  taobao_dpaas_CustomerFlow(fn: (message: IncomingMessage.TaobaoDpaasCustomerFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerUpload DPAAS > 客户上传图片} */
  taobao_dpaas_CustomerUpload(fn: (message: IncomingMessage.TaobaoDpaasCustomerUpload) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasCustomerUploadAck DPAAS > 会员人脸信息更新} */
  taobao_dpaas_CustomerUploadAck(fn: (message: IncomingMessage.TaobaoDpaasCustomerUploadAck) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasEquipmentCreate DPAAS > 创建设备} */
  taobao_dpaas_EquipmentCreate(fn: (message: IncomingMessage.TaobaoDpaasEquipmentCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaasFaceToCustomerAck DPAAS > 会员标示消息推送} */
  taobao_dpaas_FaceToCustomerAck(fn: (message: IncomingMessage.TaobaoDpaasFaceToCustomerAck) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceBuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  taobao_einvoice_BuyerConfirmSend(fn: (message: IncomingMessage.TaobaoEinvoiceBuyerConfirmSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流} */
  taobao_einvoice_InvoiceResultReturn(fn: (message: IncomingMessage.TaobaoEinvoiceInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerAgree 淘宝分销 > 经销采购单审核通过} */
  taobao_fenxiao_DealerAgree(fn: (message: IncomingMessage.TaobaoFenxiaoDealerAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerClose 淘宝分销 > 经销采购单关闭} */
  taobao_fenxiao_DealerClose(fn: (message: IncomingMessage.TaobaoFenxiaoDealerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerConfirm 淘宝分销 > 经销采购单采购成功} */
  taobao_fenxiao_DealerConfirm(fn: (message: IncomingMessage.TaobaoFenxiaoDealerConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerCreate 淘宝分销 > 经销采购单创建} */
  taobao_fenxiao_DealerCreate(fn: (message: IncomingMessage.TaobaoFenxiaoDealerCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerInstock 淘宝分销 > 经销采购单入库} */
  taobao_fenxiao_DealerInstock(fn: (message: IncomingMessage.TaobaoFenxiaoDealerInstock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerModify 淘宝分销 > 经销采购单修改} */
  taobao_fenxiao_DealerModify(fn: (message: IncomingMessage.TaobaoFenxiaoDealerModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerPay 淘宝分销 > 经销采购单付款} */
  taobao_fenxiao_DealerPay(fn: (message: IncomingMessage.TaobaoFenxiaoDealerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerRefuse 淘宝分销 > 经销采购单拒绝通过} */
  taobao_fenxiao_DealerRefuse(fn: (message: IncomingMessage.TaobaoFenxiaoDealerRefuse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoDealerShipped 淘宝分销 > 经销采购单已发货} */
  taobao_fenxiao_DealerShipped(fn: (message: IncomingMessage.TaobaoFenxiaoDealerShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderClosed 淘宝分销 > 采购单关闭消息消息} */
  taobao_fenxiao_FxOrderClosed(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderCreate 淘宝分销 > 采购单创建消息} */
  taobao_fenxiao_FxOrderCreate(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderModifyConsign 淘宝分销 > 分销属性变更} */
  taobao_fenxiao_FxOrderModifyConsign(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderModifyConsign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderModifyPrice 淘宝分销 > 修改采购单价格消息} */
  taobao_fenxiao_FxOrderModifyPrice(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderModifyPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderPaid 淘宝分销 > 采购单付款消息} */
  taobao_fenxiao_FxOrderPaid(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderShipped 淘宝分销 > 采购单发货消息} */
  taobao_fenxiao_FxOrderShipped(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderSuccess 淘宝分销 > 采购单确认收货消息} */
  taobao_fenxiao_FxOrderSuccess(fn: (message: IncomingMessage.TaobaoFenxiaoFxOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  taobao_fenxiao_FxRefundAgree(fn: (message: IncomingMessage.TaobaoFenxiaoFxRefundAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  taobao_fenxiao_FxRefundClose(fn: (message: IncomingMessage.TaobaoFenxiaoFxRefundClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  taobao_fenxiao_FxRefundCreate(fn: (message: IncomingMessage.TaobaoFenxiaoFxRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  taobao_fenxiao_FxRefundRefuseGoods(fn: (message: IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  taobao_fenxiao_FxRefundSuccess(fn: (message: IncomingMessage.TaobaoFenxiaoFxRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  taobao_fenxiao_FxTradeRefundCreate(fn: (message: IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  taobao_fenxiao_FxTradeRefundSuccess(fn: (message: IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyCommonContractSign 酒店标准库基础信息变更消息 > 飞猪通用合同签约消息} */
  taobao_fliggy_CommonContractSign(fn: (message: IncomingMessage.TaobaoFliggyCommonContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHicItemChange 酒店标准库基础信息变更消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  taobao_fliggy_HspHicItemChange(fn: (message: IncomingMessage.TaobaoFliggyHspHicItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySignStatus 酒店标准库基础信息变更消息 > 飞猪签约状态消息} */
  taobao_fliggy_SignStatus(fn: (message: IncomingMessage.TaobaoFliggySignStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdHotelModify 酒店标准库基础信息变更消息 > 标准酒店实体变更消息} */
  taobao_fliggy_StdHotelModify(fn: (message: IncomingMessage.TaobaoFliggyStdHotelModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdRoomTypeModify 酒店标准库基础信息变更消息 > 标准房型领域模型实体变更消息} */
  taobao_fliggy_StdRoomTypeModify(fn: (message: IncomingMessage.TaobaoFliggyStdRoomTypeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderClosed 服务市场 > 订单关闭消息} */
  taobao_fuwu_OrderClosed(fn: (message: IncomingMessage.TaobaoFuwuOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderCreated 服务市场 > 订单创建消息} */
  taobao_fuwu_OrderCreated(fn: (message: IncomingMessage.TaobaoFuwuOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderPaid 服务市场 > 订单支付消息} */
  taobao_fuwu_OrderPaid(fn: (message: IncomingMessage.TaobaoFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuServiceOpen 服务市场 > 服务开通消息} */
  taobao_fuwu_ServiceOpen(fn: (message: IncomingMessage.TaobaoFuwuServiceOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuWitkeySyncModeling 服务市场 > 威客同步建模数据} */
  taobao_fuwu_WitkeySyncModeling(fn: (message: IncomingMessage.TaobaoFuwuWitkeySyncModeling) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  taobao_globalbuys_SeamailOrderNotify(fn: (message: IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  taobao_homeai_CaseSyncResult(fn: (message: IncomingMessage.TaobaoHomeaiCaseSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  taobao_homeai_LayoutTransferResult(fn: (message: IncomingMessage.TaobaoHomeaiLayoutTransferResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息} */
  taobao_homeai_RenderRequest(fn: (message: IncomingMessage.TaobaoHomeaiRenderRequest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelCreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息} */
  taobao_hotel_CreditToPreHotelStatus(fn: (message: IncomingMessage.TaobaoHotelCreditToPreHotelStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息} */
  taobao_hotel_SearchMonitor(fn: (message: IncomingMessage.TaobaoHotelSearchMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchTrigger 酒店签约中心消息 > 热搜酒店消息} */
  taobao_hotel_SearchTrigger(fn: (message: IncomingMessage.TaobaoHotelSearchTrigger) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息} */
  taobao_istore_GiftingMsg(fn: (message: IncomingMessage.TaobaoIstoreGiftingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemAdd 淘宝商品 > 商品新增消息} */
  taobao_item_ItemAdd(fn: (message: IncomingMessage.TaobaoItemItemAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDelete 淘宝商品 > 商品删除消息} */
  taobao_item_ItemDelete(fn: (message: IncomingMessage.TaobaoItemItemDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息} */
  taobao_item_ItemDownshelf(fn: (message: IncomingMessage.TaobaoItemItemDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishCc 淘宝商品 > 小二CC商品消息} */
  taobao_item_ItemPunishCc(fn: (message: IncomingMessage.TaobaoItemItemPunishCc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishDelete 淘宝商品 > 小二删除商品消息} */
  taobao_item_ItemPunishDelete(fn: (message: IncomingMessage.TaobaoItemItemPunishDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemPunishDownshelf 淘宝商品 > 小二下架商品消息} */
  taobao_item_ItemPunishDownshelf(fn: (message: IncomingMessage.TaobaoItemItemPunishDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息} */
  taobao_item_ItemRecommendAdd(fn: (message: IncomingMessage.TaobaoItemItemRecommendAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息} */
  taobao_item_ItemRecommendDelete(fn: (message: IncomingMessage.TaobaoItemItemRecommendDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息} */
  taobao_item_ItemSkuZeroStock(fn: (message: IncomingMessage.TaobaoItemItemSkuZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemStockChanged 淘宝商品 > 修改商品库存消息} */
  taobao_item_ItemStockChanged(fn: (message: IncomingMessage.TaobaoItemItemStockChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpdate 淘宝商品 > 商品更新消息} */
  taobao_item_ItemUpdate(fn: (message: IncomingMessage.TaobaoItemItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息} */
  taobao_item_ItemUpshelf(fn: (message: IncomingMessage.TaobaoItemItemUpshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息} */
  taobao_item_ItemZeroStock(fn: (message: IncomingMessage.TaobaoItemItemZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  taobao_jipiao_AncillaryOrderPaid(fn: (message: IncomingMessage.TaobaoJipiaoAncillaryOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  taobao_jipiao_JipiaoModifyOrderNotify(fn: (message: IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  taobao_jipiao_JipiaoOrderStatusNotify(fn: (message: IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  taobao_jipiao_JipiaoRefundOrderNotify(fn: (message: IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  taobao_jipiao_SellerOrderNotify(fn: (message: IncomingMessage.TaobaoJipiaoSellerOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  taobao_jipiao_SellerRefundOrderNotify(fn: (message: IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  taobao_logistics_LogsticDetailTrace(fn: (message: IncomingMessage.TaobaoLogisticsLogsticDetailTrace) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddressResultNotify 聚石塔 > 自助改地址结果消息通知} */
  taobao_modifyaddress_ResultNotify(fn: (message: IncomingMessage.TaobaoModifyaddressResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorderConsistencyResult 聚石塔 > 订单一致性校验消息} */
  taobao_modifyorder_ConsistencyResult(fn: (message: IncomingMessage.TaobaoModifyorderConsistencyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyskuResultNotify 聚石塔 > 修改商品信息结果消息} */
  taobao_modifysku_ResultNotify(fn: (message: IncomingMessage.TaobaoModifyskuResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOcTradeTagChanged 交易全链路 > oc订单标签变更} */
  taobao_oc_TradeTagChanged(fn: (message: IncomingMessage.TaobaoOcTradeTagChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccountDataSync 导购平台 > openaccount数据同步} */
  taobao_openaccount_DataSync(fn: (message: IncomingMessage.TaobaoOpenaccountDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmAuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  taobao_opencrm_AuthTouchMessage(fn: (message: IncomingMessage.TaobaoOpencrmAuthTouchMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  taobao_opencrm_CardEstTask(fn: (message: IncomingMessage.TaobaoOpencrmCardEstTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  taobao_opencrm_CardTplExamine(fn: (message: IncomingMessage.TaobaoOpencrmCardTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstResult 客户运营平台API > 人群快照生成结果} */
  taobao_opencrm_CrowdInstResult(fn: (message: IncomingMessage.TaobaoOpencrmCrowdInstResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  taobao_opencrm_CrowdInstSaveResult(fn: (message: IncomingMessage.TaobaoOpencrmCrowdInstSaveResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFeedback 客户运营平台API > 反馈tmc} */
  taobao_opencrm_Feedback(fn: (message: IncomingMessage.TaobaoOpencrmFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberGradeChange 客户运营平台API > 会员等级变更} */
  taobao_opencrm_MemberGradeChange(fn: (message: IncomingMessage.TaobaoOpencrmMemberGradeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmNodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  taobao_opencrm_NodeExecuteFinished(fn: (message: IncomingMessage.TaobaoOpencrmNodeExecuteFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmOpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  taobao_opencrm_OpenStrategyEvent(fn: (message: IncomingMessage.TaobaoOpencrmOpenStrategyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  taobao_opencrm_SellerDimensionCharge(fn: (message: IncomingMessage.TaobaoOpencrmSellerDimensionCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageBill 客户运营平台API > 短信账单} */
  taobao_opencrm_ShortMessageBill(fn: (message: IncomingMessage.TaobaoOpencrmShortMessageBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmUtouch 客户运营平台API > 智能外呼回执} */
  taobao_opencrm_Utouch(fn: (message: IncomingMessage.TaobaoOpencrmUtouch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenimOffMsgPush OpenIM消息 > openim 离线消息推送} */
  taobao_openim_OffMsgPush(fn: (message: IncomingMessage.TaobaoOpenimOffMsgPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallAlarmMsg OpenMall-API > Openmall告警消息通知} */
  taobao_openmall_AlarmMsg(fn: (message: IncomingMessage.TaobaoOpenmallAlarmMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallItemChanged OpenMall-API > Openmall商品变更消息} */
  taobao_openmall_ItemChanged(fn: (message: IncomingMessage.TaobaoOpenmallItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallItemStockChanged OpenMall-API > openmall商品库存变更消息通知} */
  taobao_openmall_ItemStockChanged(fn: (message: IncomingMessage.TaobaoOpenmallItemStockChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallRefundChanged OpenMall-API > OpenMall退款单变更} */
  taobao_openmall_RefundChanged(fn: (message: IncomingMessage.TaobaoOpenmallRefundChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmallTradeChanged OpenMall-API > 订单消息通知} */
  taobao_openmall_TradeChanged(fn: (message: IncomingMessage.TaobaoOpenmallTradeChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息} */
  taobao_rdcaligenius_OrderMsgSend(fn: (message: IncomingMessage.TaobaoRdcaligeniusOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  taobao_recycle_OfnPreRedPacketSync(fn: (message: IncomingMessage.TaobaoRecycleOfnPreRedPacketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息} */
  taobao_refund_RefundBlockMessage(fn: (message: IncomingMessage.TaobaoRefundRefundBlockMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息} */
  taobao_refund_RefundBuyerModifyAgreement(fn: (message: IncomingMessage.TaobaoRefundRefundBuyerModifyAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息} */
  taobao_refund_RefundBuyerReturnGoods(fn: (message: IncomingMessage.TaobaoRefundRefundBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundClosed 淘宝退款 > 退款关闭消息} */
  taobao_refund_RefundClosed(fn: (message: IncomingMessage.TaobaoRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundCreateMessage 淘宝退款 > 发表退款留言消息} */
  taobao_refund_RefundCreateMessage(fn: (message: IncomingMessage.TaobaoRefundRefundCreateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundCreated 淘宝退款 > 退款创建消息} */
  taobao_refund_RefundCreated(fn: (message: IncomingMessage.TaobaoRefundRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息} */
  taobao_refund_RefundSellerAgreeAgreement(fn: (message: IncomingMessage.TaobaoRefundRefundSellerAgreeAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息} */
  taobao_refund_RefundSellerRefuseAgreement(fn: (message: IncomingMessage.TaobaoRefundRefundSellerRefuseAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundSuccess 淘宝退款 > 退款成功消息} */
  taobao_refund_RefundSuccess(fn: (message: IncomingMessage.TaobaoRefundRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息} */
  taobao_refund_RefundableCanceled(fn: (message: IncomingMessage.TaobaoRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息} */
  taobao_refund_RefundableMarked(fn: (message: IncomingMessage.TaobaoRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  taobao_refund_TaobaoInterApplied(fn: (message: IncomingMessage.TaobaoRefundTaobaoInterApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  taobao_refund_TaobaoIntervened(fn: (message: IncomingMessage.TaobaoRefundTaobaoIntervened) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更} */
  taobao_rhino_DeviceStatus(fn: (message: IncomingMessage.TaobaoRhinoDeviceStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanAuctionChange 导购平台 > 商品信息变更} */
  taobao_tae_BaichuanAuctionChange(fn: (message: IncomingMessage.TaobaoTaeBaichuanAuctionChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeClosed 导购平台 > 交易关闭} */
  taobao_tae_BaichuanTradeClosed(fn: (message: IncomingMessage.TaobaoTaeBaichuanTradeClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeCreated 导购平台 > 创建订单} */
  taobao_tae_BaichuanTradeCreated(fn: (message: IncomingMessage.TaobaoTaeBaichuanTradeCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradePaidDone 导购平台 > 付款成功} */
  taobao_tae_BaichuanTradePaidDone(fn: (message: IncomingMessage.TaobaoTaeBaichuanTradePaidDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeRefundCreated 导购平台 > 创建退款消息} */
  taobao_tae_BaichuanTradeRefundCreated(fn: (message: IncomingMessage.TaobaoTaeBaichuanTradeRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeRefundSuccess 导购平台 > 退款成功} */
  taobao_tae_BaichuanTradeRefundSuccess(fn: (message: IncomingMessage.TaobaoTaeBaichuanTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeBaichuanTradeSuccess 导购平台 > 交易成功} */
  taobao_tae_BaichuanTradeSuccess(fn: (message: IncomingMessage.TaobaoTaeBaichuanTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemDownShelf 导购平台 > 商品下架} */
  taobao_tae_ItemDownShelf(fn: (message: IncomingMessage.TaobaoTaeItemDownShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemImageChange 导购平台 > 商品主图变更} */
  taobao_tae_ItemImageChange(fn: (message: IncomingMessage.TaobaoTaeItemImageChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemPriceChange 导购平台 > 订阅的商品变更消息} */
  taobao_tae_ItemPriceChange(fn: (message: IncomingMessage.TaobaoTaeItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuDelete 导购平台 > sku删除} */
  taobao_tae_ItemSkuDelete(fn: (message: IncomingMessage.TaobaoTaeItemSkuDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuPublish 导购平台 > sku发布} */
  taobao_tae_ItemSkuPublish(fn: (message: IncomingMessage.TaobaoTaeItemSkuPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSkuSoldOut 导购平台 > 商品sku售空} */
  taobao_tae_ItemSkuSoldOut(fn: (message: IncomingMessage.TaobaoTaeItemSkuSoldOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSoldOut 导购平台 > 商品售空} */
  taobao_tae_ItemSoldOut(fn: (message: IncomingMessage.TaobaoTaeItemSoldOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemSubscribe 导购平台 > 商品订阅成功} */
  taobao_tae_ItemSubscribe(fn: (message: IncomingMessage.TaobaoTaeItemSubscribe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemTitleChange 导购平台 > 商品标题变更} */
  taobao_tae_ItemTitleChange(fn: (message: IncomingMessage.TaobaoTaeItemTitleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemUnSubscribe 导购平台 > 取消商品订阅} */
  taobao_tae_ItemUnSubscribe(fn: (message: IncomingMessage.TaobaoTaeItemUnSubscribe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaeItemUpShelf 导购平台 > 商品上架} */
  taobao_tae_ItemUpShelf(fn: (message: IncomingMessage.TaobaoTaeItemUpShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopAuthCancel 平台消息 > 取消授权消息通知} */
  taobao_top_AuthCancel(fn: (message: IncomingMessage.TaobaoTopAuthCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成} */
  taobao_topats_TaskComplete(fn: (message: IncomingMessage.TaobaoTopatsTaskComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  taobao_trade_TradeAlipayCreate(fn: (message: IncomingMessage.TaobaoTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  taobao_trade_TradeBuyerPay(fn: (message: IncomingMessage.TaobaoTradeTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerStepPay 淘宝交易 > 分阶段订单付定金} */
  taobao_trade_TradeBuyerStepPay(fn: (message: IncomingMessage.TaobaoTradeTradeBuyerStepPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeChanged 淘宝交易 > 订单信息变更消息} */
  taobao_trade_TradeChanged(fn: (message: IncomingMessage.TaobaoTradeTradeChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeClose 淘宝交易 > 关闭交易消息} */
  taobao_trade_TradeClose(fn: (message: IncomingMessage.TaobaoTradeTradeClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息} */
  taobao_trade_TradeCloseAndModifyDetailOrder(fn: (message: IncomingMessage.TaobaoTradeTradeCloseAndModifyDetailOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCreate 淘宝交易 > 创建淘宝交易消息} */
  taobao_trade_TradeCreate(fn: (message: IncomingMessage.TaobaoTradeTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeDelayConfirmPay 淘宝交易 > 延长收货时间消息} */
  taobao_trade_TradeDelayConfirmPay(fn: (message: IncomingMessage.TaobaoTradeTradeDelayConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息} */
  taobao_trade_TradeLogisticsAddressChanged(fn: (message: IncomingMessage.TaobaoTradeTradeLogisticsAddressChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeMemoModified 淘宝交易 > 交易备注修改消息} */
  taobao_trade_TradeMemoModified(fn: (message: IncomingMessage.TaobaoTradeTradeMemoModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeModifyFee 淘宝交易 > 修改交易费用消息} */
  taobao_trade_TradeModifyFee(fn: (message: IncomingMessage.TaobaoTradeTradeModifyFee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息} */
  taobao_trade_TradePartlyConfirmPay(fn: (message: IncomingMessage.TaobaoTradeTradePartlyConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlyRefund 淘宝交易 > 子订单退款成功消息} */
  taobao_trade_TradePartlyRefund(fn: (message: IncomingMessage.TaobaoTradeTradePartlyRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息} */
  taobao_trade_TradePartlySellerShip(fn: (message: IncomingMessage.TaobaoTradeTradePartlySellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息} */
  taobao_trade_TradeRated(fn: (message: IncomingMessage.TaobaoTradeTradeRated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息} */
  taobao_trade_TradeSellerShip(fn: (message: IncomingMessage.TaobaoTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息} */
  taobao_trade_TradeSuccess(fn: (message: IncomingMessage.TaobaoTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  taobao_trade_TradeTimeoutRemind(fn: (message: IncomingMessage.TaobaoTradeTradeTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainAgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  taobao_train_AgentQueryInfoNotify(fn: (message: IncomingMessage.TaobaoTrainAgentQueryInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainOrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  taobao_train_OrderNotify(fn: (message: IncomingMessage.TaobaoTrainOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  taobao_train_ThirdPartyTradeNotify(fn: (message: IncomingMessage.TaobaoTrainThirdPartyTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainTradeNotify 淘宝火车票 > 火车票订单消息} */
  taobao_train_TradeNotify(fn: (message: IncomingMessage.TaobaoTrainTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  taobao_uscesl_AlarmCreate(fn: (message: IncomingMessage.TaobaoUsceslAlarmCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  taobao_uscesl_BindResult(fn: (message: IncomingMessage.TaobaoUsceslBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiGrabOrderResult 淘宝点点 > 点点送抢单结果通知消息} */
  taobao_waimai_GrabOrderResult(fn: (message: IncomingMessage.TaobaoWaimaiGrabOrderResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderClose 淘宝点点 > 淘点点外卖订单关闭消息通知} */
  taobao_waimai_OrderClose(fn: (message: IncomingMessage.TaobaoWaimaiOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplain 淘宝点点 > 点点送订单投诉} */
  taobao_waimai_OrderComplain(fn: (message: IncomingMessage.TaobaoWaimaiOrderComplain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplainCancel 淘宝点点 > 点点送订单撤诉} */
  taobao_waimai_OrderComplainCancel(fn: (message: IncomingMessage.TaobaoWaimaiOrderComplainCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderComplainResult 淘宝点点 > 点点送订单投诉结果} */
  taobao_waimai_OrderComplainResult(fn: (message: IncomingMessage.TaobaoWaimaiOrderComplainResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderDispatch 淘宝点点 > 点点送订单通知消息} */
  taobao_waimai_OrderDispatch(fn: (message: IncomingMessage.TaobaoWaimaiOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderDispatchSimple 淘宝点点 > 点点送派单通知} */
  taobao_waimai_OrderDispatchSimple(fn: (message: IncomingMessage.TaobaoWaimaiOrderDispatchSimple) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderPush 淘宝点点 > 点点送接单广播通知消息} */
  taobao_waimai_OrderPush(fn: (message: IncomingMessage.TaobaoWaimaiOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOrderRemind 淘宝点点 > 点点送催单消息通知} */
  taobao_waimai_OrderRemind(fn: (message: IncomingMessage.TaobaoWaimaiOrderRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimaiOuterOrderDispatch 淘宝点点 > 点点送外部订单通知消息} */
  taobao_waimai_OuterOrderDispatch(fn: (message: IncomingMessage.TaobaoWaimaiOuterOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  taobao_wisdomstore_RecognitionNotice(fn: (message: IncomingMessage.TaobaoWisdomstoreRecognitionNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  taobao_wisdomstore_RecognitionPush(fn: (message: IncomingMessage.TaobaoWisdomstoreRecognitionPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  taobao_xianyu_RentalItemReturnCanceled(fn: (message: IncomingMessage.TaobaoXianyuRentalItemReturnCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  taobao_xianyu_RentalItemReturnReserved(fn: (message: IncomingMessage.TaobaoXianyuRentalItemReturnReserved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消} */
  taobao_xianyu_RentalOrderCanceled(fn: (message: IncomingMessage.TaobaoXianyuRentalOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建} */
  taobao_xianyu_RentalOrderCreated(fn: (message: IncomingMessage.TaobaoXianyuRentalOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息} */
  taobao_xiaowei_Message(fn: (message: IncomingMessage.TaobaoXiaoweiMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  tmall_aliauto_StepOrderPartConfirmed(fn: (message: IncomingMessage.TmallAliautoStepOrderPartConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  tmall_auto_TradeModify(fn: (message: IncomingMessage.TmallAutoTradeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  tmall_auto_TwoWheelsReceiptCreate(fn: (message: IncomingMessage.TmallAutoTwoWheelsReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelApplyOrderChange 渠道中心API > 申请单变更消息} */
  tmall_channel_ApplyOrderChange(fn: (message: IncomingMessage.TmallChannelApplyOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelDeliverOrderChange 渠道中心API > 发货单消息变更} */
  tmall_channel_DeliverOrderChange(fn: (message: IncomingMessage.TmallChannelDeliverOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelPurchaseOrderChange 渠道中心API > 采购单变更消息} */
  tmall_channel_PurchaseOrderChange(fn: (message: IncomingMessage.TmallChannelPurchaseOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannelStopOrderChange 渠道中心API > 停止发货单变更消息} */
  tmall_channel_StopOrderChange(fn: (message: IncomingMessage.TmallChannelStopOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuAnomalyRecourse 天猫服务 > 天猫服务平台一键求助单消息队列} */
  tmall_fuwu_AnomalyRecourse(fn: (message: IncomingMessage.TmallFuwuAnomalyRecourse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuAnomalyRecourseStatusUpdate 天猫服务 > 一键求助状态变更消息} */
  tmall_fuwu_AnomalyRecourseStatusUpdate(fn: (message: IncomingMessage.TmallFuwuAnomalyRecourseStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuLogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  tmall_fuwu_LogisticsInfoMessage(fn: (message: IncomingMessage.TmallFuwuLogisticsInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceItemUpdate 天猫服务 > 服务商品信息变更消息} */
  tmall_fuwu_ServiceItemUpdate(fn: (message: IncomingMessage.TmallFuwuServiceItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceMonitorMessage 天猫服务 > 服务预警消息} */
  tmall_fuwu_ServiceMonitorMessage(fn: (message: IncomingMessage.TmallFuwuServiceMonitorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuServiceStoreRegister 天猫服务 > 服务网点注册消息} */
  tmall_fuwu_ServiceStoreRegister(fn: (message: IncomingMessage.TmallFuwuServiceStoreRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送} */
  tmall_fuwu_SettleAdjustmentStatusUpdate(fn: (message: IncomingMessage.TmallFuwuSettleAdjustmentStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardContract 天猫服务 > 天猫服务履约合同单} */
  tmall_fuwu_WorkcardContract(fn: (message: IncomingMessage.TmallFuwuWorkcardContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardInfo 天猫服务 > 天猫服务任务工单} */
  tmall_fuwu_WorkcardInfo(fn: (message: IncomingMessage.TmallFuwuWorkcardInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  tmall_fuwu_WorkcardStatusUpdate(fn: (message: IncomingMessage.TmallFuwuWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiMemberRegister 天猫美妆 > 飞行入会消息} */
  tmall_mei_MemberRegister(fn: (message: IncomingMessage.TmallMeiMemberRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiPointChange 天猫美妆 > 品牌积分变更通知} */
  tmall_mei_PointChange(fn: (message: IncomingMessage.TmallMeiPointChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtItemsToEasyHome 新零售终端上行消息 > 商品信息同步} */
  tmall_nrt_ItemsToEasyHome(fn: (message: IncomingMessage.TmallNrtItemsToEasyHome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelInventoryChange 聚石塔 > 商品库存变化} */
  tmall_omnichannel_InventoryChange(fn: (message: IncomingMessage.TmallOmnichannelInventoryChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelInventoryZero 聚石塔 > 商品库存归零} */
  tmall_omnichannel_InventoryZero(fn: (message: IncomingMessage.TmallOmnichannelInventoryZero) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemDescChange 聚石塔 > 商品描述变化} */
  tmall_omnichannel_ItemDescChange(fn: (message: IncomingMessage.TmallOmnichannelItemDescChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemDownShelf 聚石塔 > 商品下架} */
  tmall_omnichannel_ItemDownShelf(fn: (message: IncomingMessage.TmallOmnichannelItemDownShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemImageChange 聚石塔 > 商品图片变化} */
  tmall_omnichannel_ItemImageChange(fn: (message: IncomingMessage.TmallOmnichannelItemImageChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelItemPriceChange 聚石塔 > 商品价格变更} */
  tmall_omnichannel_ItemPriceChange(fn: (message: IncomingMessage.TmallOmnichannelItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  tmall_servicecenter_TaskUpdate(fn: (message: IncomingMessage.TmallServicecenterTaskUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSignCreate 天猫服务 > 签到消息} */
  tmall_serviceplatform_SignCreate(fn: (message: IncomingMessage.TmallServiceplatformSignCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息} */
  tmall_serviceplatform_WorkerLeave(fn: (message: IncomingMessage.TmallServiceplatformWorkerLeave) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelBottomPriceRuleChange 酒店商品消息api > 酒店商品底价加价商品加价规则消息通知} */
  trip_hotel_BottomPriceRuleChange(fn: (message: IncomingMessage.TripHotelBottomPriceRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelHotelChange 酒店商品消息api > 飞猪卖家酒店实体变更消息同步} */
  trip_hotel_HotelChange(fn: (message: IncomingMessage.TripHotelHotelChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRateChange 酒店商品消息api > 酒店rate信息变更} */
  trip_hotel_RateChange(fn: (message: IncomingMessage.TripHotelRateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRatePlanChange 酒店商品消息api > 酒店价格计划消息} */
  trip_hotel_RatePlanChange(fn: (message: IncomingMessage.TripHotelRatePlanChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRoomChange 酒店商品消息api > room变更消息} */
  trip_hotel_RoomChange(fn: (message: IncomingMessage.TripHotelRoomChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotelRoomTypeChange 酒店商品消息api > 酒店房型消息} */
  trip_hotel_RoomTypeChange(fn: (message: IncomingMessage.TripHotelRoomTypeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuError 五道口营销 > 营销操作错误消息} */
  wdk_market_OperateSkuError(fn: (message: IncomingMessage.WdkMarketOperateSkuError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuErrror 五道口营销 > 营销发布商品错误} */
  wdk_market_OperateSkuErrror(fn: (message: IncomingMessage.WdkMarketOperateSkuErrror) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataPublishError 五道口营销 > 五道口开放数据发布错误} */
  wdk_open_DataPublishError(fn: (message: IncomingMessage.WdkOpenDataPublishError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataRelation 五道口营销 > 五道口开放数据关联通知} */
  wdk_open_DataRelation(fn: (message: IncomingMessage.WdkOpenDataRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersaleOrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  xianyu_aftersale_OrderSyn(fn: (message: IncomingMessage.XianyuAftersaleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraiseOrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  xianyu_appraise_OrderSyn(fn: (message: IncomingMessage.XianyuAppraiseOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCarOrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  xianyu_car_OrderStatusSync(fn: (message: IncomingMessage.XianyuCarOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleOrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  xianyu_recycle_OrderStatusSync(fn: (message: IncomingMessage.XianyuRecycleOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleSpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  xianyu_recycle_SpuModifySync(fn: (message: IncomingMessage.XianyuRecycleSpuModifySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateQuesChange 闲鱼 > 闲鱼问卷变更} */
  xianyu_template_QuesChange(fn: (message: IncomingMessage.XianyuTemplateQuesChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateStatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  xianyu_template_StatusChange(fn: (message: IncomingMessage.XianyuTemplateStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTenderOrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  xianyu_tender_OrderSyn(fn: (message: IncomingMessage.XianyuTenderOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  youku_tvosappstore_AppStatusChange(fn: (message: IncomingMessage.YoukuTvosappstoreAppStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  yunos_yoc_DatapoolSandbox(fn: (message: IncomingMessage.YunosYocDatapoolSandbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocMessageService YunOS YoC > yoc消息服务} */
  yunos_yoc_MessageService(fn: (message: IncomingMessage.YunosYocMessageService) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaAlihealthBillProcessStatusNotify 阿里健康-疫苗 > 单据处理状态通知} */
  on(topic: 'alibaba_alihealth_BillProcessStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthBillProcessStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthDoctorMessage 阿里健康-疫苗 > 医生、服务相关消息} */
  on(topic: 'alibaba_alihealth_DoctorMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthDoctorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange 阿里健康-疫苗 > 中台订单状态变化推送} */
  on(topic: 'alibaba_alihealth_NrmopOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthOrderStatusChange 阿里健康-疫苗 > 平台通知三方机构"订单状态变更"} */
  on(topic: 'alibaba_alihealth_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeOrderStatusChange 阿里健康-疫苗 > O2O订单状态变更通知} */
  on(topic: 'alibaba_alihealth_TradeOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康-疫苗 > 疫苗交易预约信息变动} */
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
  /** {@link IncomingMessage.AlibabaInvoiceApply 阿里发票 > 开票申请} */
  on(topic: 'alibaba_invoice_Apply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyResult 阿里发票 > 开票申请审核结果} */
  on(topic: 'alibaba_invoice_ApplyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskOffline 阿里发票 > 税盘下架单新增和更新通知} */
  on(topic: 'alibaba_invoice_DiskOffline', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskOffline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceFlowBuket 阿里发票 > 资源包开通/订购记录同步} */
  on(topic: 'alibaba_invoice_FlowBuket', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceFlowBuket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInvoiceApply 阿里发票 > 税控服务开票申请} */
  on(topic: 'alibaba_invoice_InvoiceApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceLogistics 阿里发票 > 发票对外通知物流信息} */
  on(topic: 'alibaba_invoice_Logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePaperOpsReturn 阿里发票 > 纸票操作结果回传（打印、作废等）} */
  on(topic: 'alibaba_invoice_PaperOpsReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePaperOpsReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePreConsulting 阿里发票 > 电子发票售前咨询} */
  on(topic: 'alibaba_invoice_PreConsulting', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePreConsulting) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQuery 阿里发票 > 数据查询请求} */
  on(topic: 'alibaba_invoice_Query', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQueryInvoice 阿里发票 > 查询发票信息} */
  on(topic: 'alibaba_invoice_QueryInvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQueryInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegist 阿里发票 > 入驻阿里发票平台} */
  on(topic: 'alibaba_invoice_Regist', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegist) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceResultReturn 阿里发票 > 开票请求结果} */
  on(topic: 'alibaba_invoice_ResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceStatusChange 阿里发票 > 发票状态变更消息} */
  on(topic: 'alibaba_invoice_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxChange 阿里发票 > 商家税号变更} */
  on(topic: 'alibaba_invoice_TaxChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnissue 阿里发票 > 创建未开具发票通知} */
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
  /** {@link IncomingMessage.AlibabaWdkChannelCommentAudit 五道口商品 > 差评回评} */
  on(topic: 'alibaba_wdk_ChannelCommentAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelCommentAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCancel 五道口商品 > 五道口售中取消外部订单消息} */
  on(topic: 'alibaba_wdk_ChannelOrderCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit 五道口商品 > 客服审核退款结果} */
  on(topic: 'alibaba_wdk_ChannelOrderCsRefundAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCsRefundAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderCsUserrefund 五道口商品 > 客服代客发起售后退款(整单/部分)} */
  on(topic: 'alibaba_wdk_ChannelOrderCsUserrefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderCsUserrefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelOrderStatusChange 五道口商品 > 订单状态变更消息} */
  on(topic: 'alibaba_wdk_ChannelOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkChannelStockSync 五道口商品 > 库存同步} */
  on(topic: 'alibaba_wdk_ChannelStockSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkChannelStockSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillOrderChange 五道口商品 > 售中履约变更消息} */
  on(topic: 'alibaba_wdk_FulfillOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkStoreItemUpdate 五道口商品 > 商家渠道商品变动消息} */
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
  /** {@link IncomingMessage.TaobaoFliggyCommonContractSign 酒店标准库基础信息变更消息 > 飞猪通用合同签约消息} */
  on(topic: 'taobao_fliggy_CommonContractSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyCommonContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHicItemChange 酒店标准库基础信息变更消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  on(topic: 'taobao_fliggy_HspHicItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHicItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySignStatus 酒店标准库基础信息变更消息 > 飞猪签约状态消息} */
  on(topic: 'taobao_fliggy_SignStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySignStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdHotelModify 酒店标准库基础信息变更消息 > 标准酒店实体变更消息} */
  on(topic: 'taobao_fliggy_StdHotelModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdHotelModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdRoomTypeModify 酒店标准库基础信息变更消息 > 标准房型领域模型实体变更消息} */
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
  /** {@link IncomingMessage.TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成} */
  on(topic: 'taobao_topats_TaskComplete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopatsTaskComplete) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallNrtItemsToEasyHome 新零售终端上行消息 > 商品信息同步} */
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
}

declare const TMC: TaoMessageConsumer;

export = TMC;
