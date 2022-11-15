/// <reference path="message.d.ts" />
/// <reference path="alibaba.d.ts" />
/// <reference path="alicom.d.ts" />
/// <reference path="aliexpress.d.ts" />
/// <reference path="alihealth.d.ts" />
/// <reference path="alitrip.d.ts" />
/// <reference path="aliyun.d.ts" />
/// <reference path="banma.d.ts" />
/// <reference path="cainiao.d.ts" />
/// <reference path="damai.d.ts" />
/// <reference path="fliggy.d.ts" />
/// <reference path="fuwu.d.ts" />
/// <reference path="gov.d.ts" />
/// <reference path="idle.d.ts" />
/// <reference path="jae.d.ts" />
/// <reference path="lst.d.ts" />
/// <reference path="taobao.d.ts" />
/// <reference path="tmall.d.ts" />
/// <reference path="trip.d.ts" />
/// <reference path="wdk.d.ts" />
/// <reference path="xianyu.d.ts" />
/// <reference path="youku.d.ts" />
/// <reference path="yunos.d.ts" />

declare namespace IncomingMessage {
  /** {@link Alibaba.Adlab.IotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  type AlibabaAdlabIotDevice = Message & { content?: MessageContent & { content?: string | Alibaba.Adlab.IotDevice } };
  /** {@link Alibaba.Adlab.OrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  type AlibabaAdlabOrderItemEtaUpdate = Message & { content?: MessageContent & { content?: string | Alibaba.Adlab.OrderItemEtaUpdate } };
  /** {@link Alibaba.Adlab.OrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  type AlibabaAdlabOrderItemStatus = Message & { content?: MessageContent & { content?: string | Alibaba.Adlab.OrderItemStatus } };
  /** {@link Alibaba.Alicom.FlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  type AlibabaAlicomFlowGiftSendNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Alicom.FlowGiftSendNotify } };
  /** {@link Alibaba.Alihealth.BillProcessStatusNotify 阿里健康-疫苗 > 单据处理状态通知} */
  type AlibabaAlihealthBillProcessStatusNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Alihealth.BillProcessStatusNotify } };
  /** {@link Alibaba.Alihealth.DoctorMessage 阿里健康-疫苗 > 医生、服务相关消息} */
  type AlibabaAlihealthDoctorMessage = Message & { content?: MessageContent & { content?: string | Alibaba.Alihealth.DoctorMessage } };
  /** {@link Alibaba.Alihealth.NrmopOrderStatusChange 阿里健康-疫苗 > 中台订单状态变化推送} */
  type AlibabaAlihealthNrmopOrderStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Alihealth.NrmopOrderStatusChange } };
  /** {@link Alibaba.Alihealth.OrderStatusChange 阿里健康-疫苗 > 平台通知三方机构"订单状态变更"} */
  type AlibabaAlihealthOrderStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Alihealth.OrderStatusChange } };
  /** {@link Alibaba.Alihealth.TradeOrderStatusChange 阿里健康-疫苗 > O2O订单状态变更通知} */
  type AlibabaAlihealthTradeOrderStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Alihealth.TradeOrderStatusChange } };
  /** {@link Alibaba.Alihealth.TradeVaccineSubscribeChange 阿里健康-疫苗 > 疫苗交易预约信息变动} */
  type AlibabaAlihealthTradeVaccineSubscribeChange = Message & { content?: MessageContent & { content?: string | Alibaba.Alihealth.TradeVaccineSubscribeChange } };
  /** {@link Alibaba.Alink.DeviceDataPush 阿里物联 > 设备数据推送} */
  type AlibabaAlinkDeviceDataPush = Message & { content?: MessageContent & { content?: string | Alibaba.Alink.DeviceDataPush } };
  /** {@link Alibaba.Alink.DeviceMessage 阿里物联 > 设备报警消息} */
  type AlibabaAlinkDeviceMessage = Message & { content?: MessageContent & { content?: string | Alibaba.Alink.DeviceMessage } };
  /** {@link Alibaba.Aliqin.DigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  type AlibabaAliqinDigitalSmsTemplateDR = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.DigitalSmsTemplateDR } };
  /** {@link Alibaba.Aliqin.FcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  type AlibabaAliqinFcActiveIotcard = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcActiveIotcard } };
  /** {@link Alibaba.Aliqin.FcCallCdr 阿里通信 > 语音呼叫结果推送} */
  type AlibabaAliqinFcCallCdr = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcCallCdr } };
  /** {@link Alibaba.Aliqin.FcCallRecord 阿里通信 > 录音回执} */
  type AlibabaAliqinFcCallRecord = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcCallRecord } };
  /** {@link Alibaba.Aliqin.FcFlowUp 阿里通信 > 流量直充状态报告} */
  type AlibabaAliqinFcFlowUp = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcFlowUp } };
  /** {@link Alibaba.Aliqin.FcSmsDR 阿里通信 > 短消息发送结果报告} */
  type AlibabaAliqinFcSmsDR = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcSmsDR } };
  /** {@link Alibaba.Aliqin.FcSmsUp 阿里通信 > 短信上行} */
  type AlibabaAliqinFcSmsUp = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcSmsUp } };
  /** {@link Alibaba.Aliqin.FcTmpStatus 阿里通信 > 语音呼叫中间状态消息} */
  type AlibabaAliqinFcTmpStatus = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FcTmpStatus } };
  /** {@link Alibaba.Aliqin.FlowDirectCharge 阿里通信 > 流量直充} */
  type AlibabaAliqinFlowDirectCharge = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.FlowDirectCharge } };
  /** {@link Alibaba.Aliqin.IotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  type AlibabaAliqinIotPersonalConfirmNotice = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.IotPersonalConfirmNotice } };
  /** {@link Alibaba.Aliqin.IotStatusNotice 阿里通信 > 物联网停机消息通知} */
  type AlibabaAliqinIotStatusNotice = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.IotStatusNotice } };
  /** {@link Alibaba.Aliqin.TaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  type AlibabaAliqinTaFcSmsDR = Message & { content?: MessageContent & { content?: string | Alibaba.Aliqin.TaFcSmsDR } };
  /** {@link Alibaba.Einvoice.ApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  type AlibabaEinvoiceApplyUpdate = Message & { content?: MessageContent & { content?: string | Alibaba.Einvoice.ApplyUpdate } };
  /** {@link Alibaba.Einvoice.CompanyDoAction 电子发票 > 商户事件触发消息} */
  type AlibabaEinvoiceCompanyDoAction = Message & { content?: MessageContent & { content?: string | Alibaba.Einvoice.CompanyDoAction } };
  /** {@link Alibaba.Einvoice.OrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  type AlibabaEinvoiceOrderRefundResult = Message & { content?: MessageContent & { content?: string | Alibaba.Einvoice.OrderRefundResult } };
  /** {@link Alibaba.Einvoice.RegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  type AlibabaEinvoiceRegisterFlowChange = Message & { content?: MessageContent & { content?: string | Alibaba.Einvoice.RegisterFlowChange } };
  /** {@link Alibaba.Einvoice.RegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  type AlibabaEinvoiceRegisterFlowCreate = Message & { content?: MessageContent & { content?: string | Alibaba.Einvoice.RegisterFlowCreate } };
  /** {@link Alibaba.Einvoice.TaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  type AlibabaEinvoiceTaxDeviceOrder = Message & { content?: MessageContent & { content?: string | Alibaba.Einvoice.TaxDeviceOrder } };
  /** {@link Alibaba.Fuwu.OrderPaid 1688服务市场 > 订单支付消息} */
  type AlibabaFuwuOrderPaid = Message & { content?: MessageContent & { content?: string | Alibaba.Fuwu.OrderPaid } };
  /** {@link Alibaba.Happytrip.OrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  type AlibabaHappytripOrderNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Happytrip.OrderNotify } };
  /** {@link Alibaba.Invoice.Apply 阿里发票 > 开票申请} */
  type AlibabaInvoiceApply = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.Apply } };
  /** {@link Alibaba.Invoice.ApplyResult 阿里发票 > 开票申请审核结果} */
  type AlibabaInvoiceApplyResult = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.ApplyResult } };
  /** {@link Alibaba.Invoice.DiskOffline 阿里发票 > 税盘下架单新增和更新通知} */
  type AlibabaInvoiceDiskOffline = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.DiskOffline } };
  /** {@link Alibaba.Invoice.FlowBuket 阿里发票 > 资源包开通/订购记录同步} */
  type AlibabaInvoiceFlowBuket = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.FlowBuket } };
  /** {@link Alibaba.Invoice.InvoiceApply 阿里发票 > 税控服务开票申请} */
  type AlibabaInvoiceInvoiceApply = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.InvoiceApply } };
  /** {@link Alibaba.Invoice.Logistics 阿里发票 > 发票对外通知物流信息} */
  type AlibabaInvoiceLogistics = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.Logistics } };
  /** {@link Alibaba.Invoice.PaperOpsReturn 阿里发票 > 纸票操作结果回传（打印、作废等）} */
  type AlibabaInvoicePaperOpsReturn = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.PaperOpsReturn } };
  /** {@link Alibaba.Invoice.PreConsulting 阿里发票 > 电子发票售前咨询} */
  type AlibabaInvoicePreConsulting = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.PreConsulting } };
  /** {@link Alibaba.Invoice.Query 阿里发票 > 数据查询请求} */
  type AlibabaInvoiceQuery = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.Query } };
  /** {@link Alibaba.Invoice.QueryInvoice 阿里发票 > 查询发票信息} */
  type AlibabaInvoiceQueryInvoice = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.QueryInvoice } };
  /** {@link Alibaba.Invoice.Regist 阿里发票 > 入驻阿里发票平台} */
  type AlibabaInvoiceRegist = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.Regist } };
  /** {@link Alibaba.Invoice.ResultReturn 阿里发票 > 开票请求结果} */
  type AlibabaInvoiceResultReturn = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.ResultReturn } };
  /** {@link Alibaba.Invoice.StatusChange 阿里发票 > 发票状态变更消息} */
  type AlibabaInvoiceStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.StatusChange } };
  /** {@link Alibaba.Invoice.TaxChange 阿里发票 > 商家税号变更} */
  type AlibabaInvoiceTaxChange = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.TaxChange } };
  /** {@link Alibaba.Invoice.Unissue 阿里发票 > 创建未开具发票通知} */
  type AlibabaInvoiceUnissue = Message & { content?: MessageContent & { content?: string | Alibaba.Invoice.Unissue } };
  /** {@link Alibaba.Lst.BmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化} */
  type AlibabaLstBmOrderLogisticsChange = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.BmOrderLogisticsChange } };
  /** {@link Alibaba.Lst.BroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  type AlibabaLstBroadcastSelfOrderShipChange = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.BroadcastSelfOrderShipChange } };
  /** {@link Alibaba.Lst.CashierSync 零售通_公共 > 收银快照同步消息} */
  type AlibabaLstCashierSync = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.CashierSync } };
  /** {@link Alibaba.Lst.GoodsSync 零售通_公共 > 商品同步消息} */
  type AlibabaLstGoodsSync = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.GoodsSync } };
  /** {@link Alibaba.Lst.InventorySync 零售通_公共 > 商品库存修改同步消息} */
  type AlibabaLstInventorySync = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.InventorySync } };
  /** {@link Alibaba.Lst.MsgTest 零售通_公共 > 消息测试} */
  type AlibabaLstMsgTest = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.MsgTest } };
  /** {@link Alibaba.Lst.OrderChange 零售通_公共 > 零售通交易订单变更消息} */
  type AlibabaLstOrderChange = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.OrderChange } };
  /** {@link Alibaba.Lst.RefundChange 零售通_公共 > 订单退单} */
  type AlibabaLstRefundChange = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.RefundChange } };
  /** {@link Alibaba.Lst.SpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  type AlibabaLstSpeakerAdvertPlayRecord = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.SpeakerAdvertPlayRecord } };
  /** {@link Alibaba.Lst.SupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  type AlibabaLstSupplierOrderChange = Message & { content?: MessageContent & { content?: string | Alibaba.Lst.SupplierOrderChange } };
  /** {@link Alibaba.Mmc.OpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息} */
  type AlibabaMmcOpenStockAlterNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Mmc.OpenStockAlterNotify } };
  /** {@link Alibaba.Mmc.OpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息} */
  type AlibabaMmcOpenStockItemAlter = Message & { content?: MessageContent & { content?: string | Alibaba.Mmc.OpenStockItemAlter } };
  /** {@link Alibaba.Mmc.OrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息} */
  type AlibabaMmcOrderNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Mmc.OrderNotify } };
  /** {@link Alibaba.Mmc.PriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息} */
  type AlibabaMmcPriceUpdate = Message & { content?: MessageContent & { content?: string | Alibaba.Mmc.PriceUpdate } };
  /** {@link Alibaba.Mmc.RefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息} */
  type AlibabaMmcRefundOrderNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Mmc.RefundOrderNotify } };
  /** {@link Alibaba.Monitor.EventSendMessage 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  type AlibabaMonitorEventSendMessage = Message & { content?: MessageContent & { content?: string | Alibaba.Monitor.EventSendMessage } };
  /** {@link Alibaba.Monitor.MessageSend 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  type AlibabaMonitorMessageSend = Message & { content?: MessageContent & { content?: string | Alibaba.Monitor.MessageSend } };
  /** {@link Alibaba.Mos.SaleOrder 银泰开放平台消息 > 销售单状态变更} */
  type AlibabaMosSaleOrder = Message & { content?: MessageContent & { content?: string | Alibaba.Mos.SaleOrder } };
  /** {@link Alibaba.Mos.SaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  type AlibabaMosSaleOrderRefund = Message & { content?: MessageContent & { content?: string | Alibaba.Mos.SaleOrderRefund } };
  /** {@link Alibaba.Nazca.AbandonCert 网上法庭 > 作废存证消息接口} */
  type AlibabaNazcaAbandonCert = Message & { content?: MessageContent & { content?: string | Alibaba.Nazca.AbandonCert } };
  /** {@link Alibaba.Nazca.QueryChargeNum 网上法庭 > 查询收费数量} */
  type AlibabaNazcaQueryChargeNum = Message & { content?: MessageContent & { content?: string | Alibaba.Nazca.QueryChargeNum } };
  /** {@link Alibaba.Nazca.SaveCert 网上法庭 > 发起存证消息接口} */
  type AlibabaNazcaSaveCert = Message & { content?: MessageContent & { content?: string | Alibaba.Nazca.SaveCert } };
  /** {@link Alibaba.Nazca.UpdateChargeNum 网上法庭 > 更新收费数量} */
  type AlibabaNazcaUpdateChargeNum = Message & { content?: MessageContent & { content?: string | Alibaba.Nazca.UpdateChargeNum } };
  /** {@link Alibaba.Nlife.BToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  type AlibabaNlifeBToBTradeStatusNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.BToBTradeStatusNotify } };
  /** {@link Alibaba.Nlife.BToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  type AlibabaNlifeBToCTradeOrderSync = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.BToCTradeOrderSync } };
  /** {@link Alibaba.Nlife.BtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  type AlibabaNlifeBtoBTradeDeliverNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.BtoBTradeDeliverNotify } };
  /** {@link Alibaba.Nlife.BtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  type AlibabaNlifeBtoBTradeEffectiveNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.BtoBTradeEffectiveNotify } };
  /** {@link Alibaba.Nlife.BtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  type AlibabaNlifeBtobTradeRefundConfirmMsgNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.BtobTradeRefundConfirmMsgNotify } };
  /** {@link Alibaba.Nlife.BtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  type AlibabaNlifeBtobTradeRefundNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.BtobTradeRefundNotify } };
  /** {@link Alibaba.Nlife.InstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  type AlibabaNlifeInstorageDiffAuditNotify = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.InstorageDiffAuditNotify } };
  /** {@link Alibaba.Nlife.ItemUpdate 零售plus > 零售+商品变动消息} */
  type AlibabaNlifeItemUpdate = Message & { content?: MessageContent & { content?: string | Alibaba.Nlife.ItemUpdate } };
  /** {@link Alibaba.Serviceplatform.FulfilTask 天猫服务 > 服务供应链核销单消息} */
  type AlibabaServiceplatformFulfilTask = Message & { content?: MessageContent & { content?: string | Alibaba.Serviceplatform.FulfilTask } };
  /** {@link Alibaba.Serviceplatform.ServiceOrder 天猫服务 > 服务供应链服务单消息} */
  type AlibabaServiceplatformServiceOrder = Message & { content?: MessageContent & { content?: string | Alibaba.Serviceplatform.ServiceOrder } };
  /** {@link Alibaba.Sp.NotifyPaymentResult 阿里智付 > 通知付款结果} */
  type AlibabaSpNotifyPaymentResult = Message & { content?: MessageContent & { content?: string | Alibaba.Sp.NotifyPaymentResult } };
  /** {@link Alibaba.Tax.EmployeeSignResult 阿里发票 > 税优雇员签约结果消息} */
  type AlibabaTaxEmployeeSignResult = Message & { content?: MessageContent & { content?: string | Alibaba.Tax.EmployeeSignResult } };
  /** {@link Alibaba.Tax.SalaryPayResult 阿里发票 > 税优发薪结果通知} */
  type AlibabaTaxSalaryPayResult = Message & { content?: MessageContent & { content?: string | Alibaba.Tax.SalaryPayResult } };
  /** {@link Alibaba.Tianji.ContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  type AlibabaTianjiContractOrder = Message & { content?: MessageContent & { content?: string | Alibaba.Tianji.ContractOrder } };
  /** {@link Alibaba.Tianji.OrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  type AlibabaTianjiOrderCreate = Message & { content?: MessageContent & { content?: string | Alibaba.Tianji.OrderCreate } };
  /** {@link Alibaba.Wdk.ChannelCommentAudit 五道口商品 > 差评回评} */
  type AlibabaWdkChannelCommentAudit = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.ChannelCommentAudit } };
  /** {@link Alibaba.Wdk.ChannelOrderCancel 五道口商品 > 五道口售中取消外部订单消息} */
  type AlibabaWdkChannelOrderCancel = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.ChannelOrderCancel } };
  /** {@link Alibaba.Wdk.ChannelOrderCsRefundAudit 五道口商品 > 客服审核退款结果} */
  type AlibabaWdkChannelOrderCsRefundAudit = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.ChannelOrderCsRefundAudit } };
  /** {@link Alibaba.Wdk.ChannelOrderCsUserrefund 五道口商品 > 客服代客发起售后退款(整单/部分)} */
  type AlibabaWdkChannelOrderCsUserrefund = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.ChannelOrderCsUserrefund } };
  /** {@link Alibaba.Wdk.ChannelOrderStatusChange 五道口商品 > 订单状态变更消息} */
  type AlibabaWdkChannelOrderStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.ChannelOrderStatusChange } };
  /** {@link Alibaba.Wdk.ChannelStockSync 五道口商品 > 库存同步} */
  type AlibabaWdkChannelStockSync = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.ChannelStockSync } };
  /** {@link Alibaba.Wdk.FulfillOrderChange 五道口商品 > 售中履约变更消息} */
  type AlibabaWdkFulfillOrderChange = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.FulfillOrderChange } };
  /** {@link Alibaba.Wdk.StoreItemUpdate 五道口商品 > 商家渠道商品变动消息} */
  type AlibabaWdkStoreItemUpdate = Message & { content?: MessageContent & { content?: string | Alibaba.Wdk.StoreItemUpdate } };
  /** {@link Alibaba.Wdkitem.WarehouseSkuModify 五道口商品 > 五道口仓商品变更消息} */
  type AlibabaWdkitemWarehouseSkuModify = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkitem.WarehouseSkuModify } };
  /** {@link Alibaba.Wdkop.RexAccountChange 五道口订单 > Rex用户信息变更消息} */
  type AlibabaWdkopRexAccountChange = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkop.RexAccountChange } };
  /** {@link Alibaba.Wdkopen.OrderMessage 五道口订单 > 五道口交易状态变更消息通知} */
  type AlibabaWdkopenOrderMessage = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkopen.OrderMessage } };
  /** {@link Alibaba.Wdkopen.PriceAdjust 五道口订单 > 采购价变更消息} */
  type AlibabaWdkopenPriceAdjust = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkopen.PriceAdjust } };
  /** {@link Alibaba.Wdkopen.RefundMessage 五道口订单 > 同城零售逆向交易消息} */
  type AlibabaWdkopenRefundMessage = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkopen.RefundMessage } };
  /** {@link Alibaba.Wdkorder.FulfillStatusChange 五道口订单 > 五道口订单履约状态变更消息} */
  type AlibabaWdkorderFulfillStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.FulfillStatusChange } };
  /** {@link Alibaba.Wdkorder.InsuranceOrder 五道口订单 > 共享库存保险正向投保消息} */
  type AlibabaWdkorderInsuranceOrder = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.InsuranceOrder } };
  /** {@link Alibaba.Wdkorder.InsuranceRefund 五道口订单 > 共享库存保险逆向理赔消息} */
  type AlibabaWdkorderInsuranceRefund = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.InsuranceRefund } };
  /** {@link Alibaba.Wdkorder.OrderFulfillPush 五道口订单 > 订单履约状态变更消息} */
  type AlibabaWdkorderOrderFulfillPush = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.OrderFulfillPush } };
  /** {@link Alibaba.Wdkorder.OrderFulfillTokenPush 五道口订单 > 履约状态变更消息} */
  type AlibabaWdkorderOrderFulfillTokenPush = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.OrderFulfillTokenPush } };
  /** {@link Alibaba.Wdkorder.OrderStatusPush 五道口订单 > 猫超订单数据变更消息通知} */
  type AlibabaWdkorderOrderStatusPush = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.OrderStatusPush } };
  /** {@link Alibaba.Wdkorder.RefundOrgPoint 五道口订单 > 逆向单企业积分消息发送} */
  type AlibabaWdkorderRefundOrgPoint = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.RefundOrgPoint } };
  /** {@link Alibaba.Wdkorder.RefundSuccess 五道口订单 > 五道口淘鲜达逆向订单消息} */
  type AlibabaWdkorderRefundSuccess = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.RefundSuccess } };
  /** {@link Alibaba.Wdkorder.SoPo 五道口订单 > 共享库存SOPO} */
  type AlibabaWdkorderSoPo = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.SoPo } };
  /** {@link Alibaba.Wdkorder.StatusChange 五道口订单 > 五道口订单状态变更消息} */
  type AlibabaWdkorderStatusChange = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.StatusChange } };
  /** {@link Alibaba.Wdkorder.VoucherStatus 五道口订单 > 淘鲜达订单优惠券状态变更} */
  type AlibabaWdkorderVoucherStatus = Message & { content?: MessageContent & { content?: string | Alibaba.Wdkorder.VoucherStatus } };
  /** {@link Alibaba.Wdktrade.CouponInstance 五道口营销 > 营销券实例消息} */
  type AlibabaWdktradeCouponInstance = Message & { content?: MessageContent & { content?: string | Alibaba.Wdktrade.CouponInstance } };
  /** {@link Alibaba.Yunio.DataTransfer 平台消息 > YunIO数据流转} */
  type AlibabaYunioDataTransfer = Message & { content?: MessageContent & { content?: string | Alibaba.Yunio.DataTransfer } };
  /** {@link Alicom.Axb.SubsEventSync 阿里通信 > 绑定事件同步} */
  type AlicomAxbSubsEventSync = Message & { content?: MessageContent & { content?: string | Alicom.Axb.SubsEventSync } };
  /** {@link Aliexpress.Aeia.TaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  type AliexpressAeiaTaskplatformInterestNotice = Message & { content?: MessageContent & { content?: string | Aliexpress.Aeia.TaskplatformInterestNotice } };
  /** {@link Aliexpress.Order.Finish AE-交易 > 交易成功} */
  type AliexpressOrderFinish = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.Finish } };
  /** {@link Aliexpress.Order.FundProcessing AE-交易 > 资金处理中} */
  type AliexpressOrderFundProcessing = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.FundProcessing } };
  /** {@link Aliexpress.Order.InCancel AE-交易 > 取消订单中} */
  type AliexpressOrderInCancel = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.InCancel } };
  /** {@link Aliexpress.Order.PlaceOrderSuccess AE-交易 > 下单成功} */
  type AliexpressOrderPlaceOrderSuccess = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.PlaceOrderSuccess } };
  /** {@link Aliexpress.Order.RiskControl AE-交易 > 风控24小时} */
  type AliexpressOrderRiskControl = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.RiskControl } };
  /** {@link Aliexpress.Order.SellerPartSendGoods AE-交易 > 等待部分发货} */
  type AliexpressOrderSellerPartSendGoods = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.SellerPartSendGoods } };
  /** {@link Aliexpress.Order.WaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  type AliexpressOrderWaitBuyerAcceptGoods = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.WaitBuyerAcceptGoods } };
  /** {@link Aliexpress.Order.WaitGroupSuccess AE-交易 > 等待成团} */
  type AliexpressOrderWaitGroupSuccess = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.WaitGroupSuccess } };
  /** {@link Aliexpress.Order.WaitSellerExamineMoney AE-交易 > 待卖家验款} */
  type AliexpressOrderWaitSellerExamineMoney = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.WaitSellerExamineMoney } };
  /** {@link Aliexpress.Order.WaitSellerSendGoods AE-交易 > 等待卖家发货} */
  type AliexpressOrderWaitSellerSendGoods = Message & { content?: MessageContent & { content?: string | Aliexpress.Order.WaitSellerSendGoods } };
  /** {@link Alihealth.Cep.OrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  type AlihealthCepOrderStatusChange = Message & { content?: MessageContent & { content?: string | Alihealth.Cep.OrderStatusChange } };
  /** {@link Alihealth.Ys.OrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  type AlihealthYsOrderMemConsume = Message & { content?: MessageContent & { content?: string | Alihealth.Ys.OrderMemConsume } };
  /** {@link Alihealth.Ys.OrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  type AlihealthYsOrderPushConsume = Message & { content?: MessageContent & { content?: string | Alihealth.Ys.OrderPushConsume } };
  /** {@link Alitrip.Agent.Notify 淘宝机票 > 商家机票业务通知} */
  type AlitripAgentNotify = Message & { content?: MessageContent & { content?: string | Alitrip.Agent.Notify } };
  /** {@link Alitrip.Btrip.CorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  type AlitripBtripCorpSignCallback = Message & { content?: MessageContent & { content?: string | Alitrip.Btrip.CorpSignCallback } };
  /** {@link Alitrip.Btrip.ExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  type AlitripBtripExceedApplySubmit = Message & { content?: MessageContent & { content?: string | Alitrip.Btrip.ExceedApplySubmit } };
  /** {@link Alitrip.Flight.Change 淘宝机票 > 航变消息} */
  type AlitripFlightChange = Message & { content?: MessageContent & { content?: string | Alitrip.Flight.Change } };
  /** {@link Alitrip.Iesr.FlightChange 淘宝机票 > 航变数据推送} */
  type AlitripIesrFlightChange = Message & { content?: MessageContent & { content?: string | Alitrip.Iesr.FlightChange } };
  /** {@link Alitrip.Iesr.TicketMessage 淘宝机票 > 国际运价采购票消息} */
  type AlitripIesrTicketMessage = Message & { content?: MessageContent & { content?: string | Alitrip.Iesr.TicketMessage } };
  /** {@link Alitrip.Ietrade.ChangeMsg 淘宝机票 > 国际机票改签订单状态消息} */
  type AlitripIetradeChangeMsg = Message & { content?: MessageContent & { content?: string | Alitrip.Ietrade.ChangeMsg } };
  /** {@link Alitrip.Ietrade.OrderMsg 淘宝机票 > 国际机票订单消息} */
  type AlitripIetradeOrderMsg = Message & { content?: MessageContent & { content?: string | Alitrip.Ietrade.OrderMsg } };
  /** {@link Alitrip.Ietrade.RefundMsg 淘宝机票 > 国际机票退票订单状态消息} */
  type AlitripIetradeRefundMsg = Message & { content?: MessageContent & { content?: string | Alitrip.Ietrade.RefundMsg } };
  /** {@link Alitrip.Train.AgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  type AlitripTrainAgentStopQuery = Message & { content?: MessageContent & { content?: string | Alitrip.Train.AgentStopQuery } };
  /** {@link Alitrip.Travel.OrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息} */
  type AlitripTravelOrderChanged = Message & { content?: MessageContent & { content?: string | Alitrip.Travel.OrderChanged } };
  /** {@link Alitrip.Travel.PersonChanged 航旅度假交易 > 出行人信息变更消息} */
  type AlitripTravelPersonChanged = Message & { content?: MessageContent & { content?: string | Alitrip.Travel.PersonChanged } };
  /** {@link Alitrip.Travel.VisaService 航旅度假交易 > 签证消息服务} */
  type AlitripTravelVisaService = Message & { content?: MessageContent & { content?: string | Alitrip.Travel.VisaService } };
  /** {@link Alitrip.Tripticket.TravellerCreate 航旅度假交易 > 旅行机票交易创建} */
  type AlitripTripticketTravellerCreate = Message & { content?: MessageContent & { content?: string | Alitrip.Tripticket.TravellerCreate } };
  /** {@link Alitrip.Visa.TradeDone 航旅度假交易 > 在线签证交易完成消息} */
  type AlitripVisaTradeDone = Message & { content?: MessageContent & { content?: string | Alitrip.Visa.TradeDone } };
  /** {@link Aliyun.Iot.OrderSync IOT-智能制造 > 天天工厂采购单同步} */
  type AliyunIotOrderSync = Message & { content?: MessageContent & { content?: string | Aliyun.Iot.OrderSync } };
  /** {@link Banma.Right.TradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  type BanmaRightTradeCreate = Message & { content?: MessageContent & { content?: string | Banma.Right.TradeCreate } };
  /** {@link Cainiao.Consignplatform.LogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  type CainiaoConsignplatformLogisiticsDetail = Message & { content?: MessageContent & { content?: string | Cainiao.Consignplatform.LogisiticsDetail } };
  /** {@link Cainiao.Iot.AftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  type CainiaoIotAftersalesTicket = Message & { content?: MessageContent & { content?: string | Cainiao.Iot.AftersalesTicket } };
  /** {@link Damai.Distribution.PerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  type DamaiDistributionPerformCancel = Message & { content?: MessageContent & { content?: string | Damai.Distribution.PerformCancel } };
  /** {@link Damai.Distribution.PerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  type DamaiDistributionPerformStatus = Message & { content?: MessageContent & { content?: string | Damai.Distribution.PerformStatus } };
  /** {@link Damai.Distribution.PreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  type DamaiDistributionPreSaleToNow = Message & { content?: MessageContent & { content?: string | Damai.Distribution.PreSaleToNow } };
  /** {@link Damai.Distribution.ProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  type DamaiDistributionProjectStatus = Message & { content?: MessageContent & { content?: string | Damai.Distribution.ProjectStatus } };
  /** {@link Damai.Distribution.TicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  type DamaiDistributionTicketItemStatus = Message & { content?: MessageContent & { content?: string | Damai.Distribution.TicketItemStatus } };
  /** {@link Damai.Trade.TicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  type DamaiTradeTicketStatusPush = Message & { content?: MessageContent & { content?: string | Damai.Trade.TicketStatusPush } };
  /** {@link Fliggy.Btrip.HotelDistributionOrderChange 商旅API > 订单状态变化} */
  type FliggyBtripHotelDistributionOrderChange = Message & { content?: MessageContent & { content?: string | Fliggy.Btrip.HotelDistributionOrderChange } };
  /** {@link Fliggy.Jipiao.FlightChange 淘宝机票 > 航变消息服务} */
  type FliggyJipiaoFlightChange = Message & { content?: MessageContent & { content?: string | Fliggy.Jipiao.FlightChange } };
  /** {@link Fliggy.Ticket.OrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  type FliggyTicketOrderRefund = Message & { content?: MessageContent & { content?: string | Fliggy.Ticket.OrderRefund } };
  /** {@link Fliggy.Ticket.OrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  type FliggyTicketOrderStatusChange = Message & { content?: MessageContent & { content?: string | Fliggy.Ticket.OrderStatusChange } };
  /** {@link Fliggy.Ticket.VerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  type FliggyTicketVerifyNotify = Message & { content?: MessageContent & { content?: string | Fliggy.Ticket.VerifyNotify } };
  /** {@link Fuwu.Confirm.Fail 服务市场 > 收入确认失败} */
  type FuwuConfirmFail = Message & { content?: MessageContent & { content?: string | Fuwu.Confirm.Fail } };
  /** {@link Fuwu.Confirm.Success 服务市场 > 收入确认成功} */
  type FuwuConfirmSuccess = Message & { content?: MessageContent & { content?: string | Fuwu.Confirm.Success } };
  /** {@link Gov.Auction.PushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  type GovAuctionPushVehicleDataToBM = Message & { content?: MessageContent & { content?: string | Gov.Auction.PushVehicleDataToBM } };
  /** {@link Gov.Auction.VehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  type GovAuctionVehicleDataPush = Message & { content?: MessageContent & { content?: string | Gov.Auction.VehicleDataPush } };
  /** {@link Idle.Agreement.StatusChange 闲鱼 > 闲鱼代扣消息通知} */
  type IdleAgreementStatusChange = Message & { content?: MessageContent & { content?: string | Idle.Agreement.StatusChange } };
  /** {@link Idle.Appraiseisv.ItemSyn 闲鱼已验货 > 已验货商品消息} */
  type IdleAppraiseisvItemSyn = Message & { content?: MessageContent & { content?: string | Idle.Appraiseisv.ItemSyn } };
  /** {@link Idle.Appraiseisv.OrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  type IdleAppraiseisvOrderSyn = Message & { content?: MessageContent & { content?: string | Idle.Appraiseisv.OrderSyn } };
  /** {@link Idle.Appraiseisv.RefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  type IdleAppraiseisvRefundSyn = Message & { content?: MessageContent & { content?: string | Idle.Appraiseisv.RefundSyn } };
  /** {@link Idle.Consignment.OrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  type IdleConsignmentOrderSyn = Message & { content?: MessageContent & { content?: string | Idle.Consignment.OrderSyn } };
  /** {@link Idle.Consignmentii.OrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  type IdleConsignmentiiOrderSyn = Message & { content?: MessageContent & { content?: string | Idle.Consignmentii.OrderSyn } };
  /** {@link Idle.Recycle.OrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  type IdleRecycleOrderSyn = Message & { content?: MessageContent & { content?: string | Idle.Recycle.OrderSyn } };
  /** {@link Idle.Recycle.RefundStatusModify 闲鱼回收商消息 > 退款消息} */
  type IdleRecycleRefundStatusModify = Message & { content?: MessageContent & { content?: string | Idle.Recycle.RefundStatusModify } };
  /** {@link Idle.Topisv.GlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知} */
  type IdleTopisvGlobalProductNotice = Message & { content?: MessageContent & { content?: string | Idle.Topisv.GlobalProductNotice } };
  /** {@link Idle.Topisv.ItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知} */
  type IdleTopisvItemNotice = Message & { content?: MessageContent & { content?: string | Idle.Topisv.ItemNotice } };
  /** {@link Idle.Topisv.RefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知} */
  type IdleTopisvRefundNotice = Message & { content?: MessageContent & { content?: string | Idle.Topisv.RefundNotice } };
  /** {@link Idle.Topisv.TradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知} */
  type IdleTopisvTradeNotice = Message & { content?: MessageContent & { content?: string | Idle.Topisv.TradeNotice } };
  /** {@link Idle.Tranferpay.OrderChange 闲鱼 > 直接转账交易消息} */
  type IdleTranferpayOrderChange = Message & { content?: MessageContent & { content?: string | Idle.Tranferpay.OrderChange } };
  /** {@link Jae.Trade.PaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  type JaeTradePaidSuccessed = Message & { content?: MessageContent & { content?: string | Jae.Trade.PaidSuccessed } };
  /** {@link Lst.Supplier.BroadcastFastRefundMessage 零售通_公共 > 零售通广播极速退款消息} */
  type LstSupplierBroadcastFastRefundMessage = Message & { content?: MessageContent & { content?: string | Lst.Supplier.BroadcastFastRefundMessage } };
  /** {@link Lst.Supplier.FastRefundMessageCreate 零售通_公共 > 品牌商极速退款消息创建} */
  type LstSupplierFastRefundMessageCreate = Message & { content?: MessageContent & { content?: string | Lst.Supplier.FastRefundMessageCreate } };
  /** {@link Taobao.Ag.RefundSignInfo AliGenius > 商家在AG的签收信息} */
  type TaobaoAgRefundSignInfo = Message & { content?: MessageContent & { content?: string | Taobao.Ag.RefundSignInfo } };
  /** {@link Taobao.Aps.CommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  type TaobaoApsCommentAdd = Message & { content?: MessageContent & { content?: string | Taobao.Aps.CommentAdd } };
  /** {@link Taobao.Aps.NewFeedback 平台消息 > 收到舆情} */
  type TaobaoApsNewFeedback = Message & { content?: MessageContent & { content?: string | Taobao.Aps.NewFeedback } };
  /** {@link Taobao.Axin.RefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  type TaobaoAxinRefundCallBack = Message & { content?: MessageContent & { content?: string | Taobao.Axin.RefundCallBack } };
  /** {@link Taobao.Baichuan.ASODeviceActivate 百川 > 设备APP激活} */
  type TaobaoBaichuanASODeviceActivate = Message & { content?: MessageContent & { content?: string | Taobao.Baichuan.ASODeviceActivate } };
  /** {@link Taobao.Baichuan.PasswordRuleChange 百川 > 口令规则变化消息} */
  type TaobaoBaichuanPasswordRuleChange = Message & { content?: MessageContent & { content?: string | Taobao.Baichuan.PasswordRuleChange } };
  /** {@link Taobao.Bmc.ShortMessageStatus 导购平台 > 短信状态} */
  type TaobaoBmcShortMessageStatus = Message & { content?: MessageContent & { content?: string | Taobao.Bmc.ShortMessageStatus } };
  /** {@link Taobao.Bus.TVMTradePay 淘宝汽车票 > 自助机付款成功结果} */
  type TaobaoBusTVMTradePay = Message & { content?: MessageContent & { content?: string | Taobao.Bus.TVMTradePay } };
  /** {@link Taobao.Bus.TVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知} */
  type TaobaoBusTVMTradePayStatusNotice = Message & { content?: MessageContent & { content?: string | Taobao.Bus.TVMTradePayStatusNotice } };
  /** {@link Taobao.Bus.TVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息} */
  type TaobaoBusTVMTradePaySuccess = Message & { content?: MessageContent & { content?: string | Taobao.Bus.TVMTradePaySuccess } };
  /** {@link Taobao.Bus.TradePayStatus 淘宝汽车票 > 交易支付状态节点} */
  type TaobaoBusTradePayStatus = Message & { content?: MessageContent & { content?: string | Taobao.Bus.TradePayStatus } };
  /** {@link Taobao.Carlease.FreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息} */
  type TaobaoCarleaseFreeDpOrderMsgSend = Message & { content?: MessageContent & { content?: string | Taobao.Carlease.FreeDpOrderMsgSend } };
  /** {@link Taobao.Daifa.DistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  type TaobaoDaifaDistributorOrderStatusChange = Message & { content?: MessageContent & { content?: string | Taobao.Daifa.DistributorOrderStatusChange } };
  /** {@link Taobao.Daifa.SupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  type TaobaoDaifaSupplierOrderStatusChange = Message & { content?: MessageContent & { content?: string | Taobao.Daifa.SupplierOrderStatusChange } };
  /** {@link Taobao.Dd.Push 淘宝点点 > 淘点点消息推送} */
  type TaobaoDdPush = Message & { content?: MessageContent & { content?: string | Taobao.Dd.Push } };
  /** {@link Taobao.Diandian.ServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  type TaobaoDiandianServeOrder = Message & { content?: MessageContent & { content?: string | Taobao.Diandian.ServeOrder } };
  /** {@link Taobao.Dpaas.AuthTokenCreate DPAAS > dpaas三方服务token} */
  type TaobaoDpaasAuthTokenCreate = Message & { content?: MessageContent & { content?: string | Taobao.Dpaas.AuthTokenCreate } };
  /** {@link Taobao.Dpaas.CustomerFlow DPAAS > 客流新增及会员到店消息} */
  type TaobaoDpaasCustomerFlow = Message & { content?: MessageContent & { content?: string | Taobao.Dpaas.CustomerFlow } };
  /** {@link Taobao.Dpaas.CustomerUpload DPAAS > 客户上传图片} */
  type TaobaoDpaasCustomerUpload = Message & { content?: MessageContent & { content?: string | Taobao.Dpaas.CustomerUpload } };
  /** {@link Taobao.Dpaas.CustomerUploadAck DPAAS > 会员人脸信息更新} */
  type TaobaoDpaasCustomerUploadAck = Message & { content?: MessageContent & { content?: string | Taobao.Dpaas.CustomerUploadAck } };
  /** {@link Taobao.Dpaas.EquipmentCreate DPAAS > 创建设备} */
  type TaobaoDpaasEquipmentCreate = Message & { content?: MessageContent & { content?: string | Taobao.Dpaas.EquipmentCreate } };
  /** {@link Taobao.Dpaas.FaceToCustomerAck DPAAS > 会员标示消息推送} */
  type TaobaoDpaasFaceToCustomerAck = Message & { content?: MessageContent & { content?: string | Taobao.Dpaas.FaceToCustomerAck } };
  /** {@link Taobao.Einvoice.BuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  type TaobaoEinvoiceBuyerConfirmSend = Message & { content?: MessageContent & { content?: string | Taobao.Einvoice.BuyerConfirmSend } };
  /** {@link Taobao.Einvoice.InvoiceResultReturn 电子发票 > 电子发票开票回流} */
  type TaobaoEinvoiceInvoiceResultReturn = Message & { content?: MessageContent & { content?: string | Taobao.Einvoice.InvoiceResultReturn } };
  /** {@link Taobao.Fenxiao.DealerAgree 淘宝分销 > 经销采购单审核通过} */
  type TaobaoFenxiaoDealerAgree = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerAgree } };
  /** {@link Taobao.Fenxiao.DealerClose 淘宝分销 > 经销采购单关闭} */
  type TaobaoFenxiaoDealerClose = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerClose } };
  /** {@link Taobao.Fenxiao.DealerConfirm 淘宝分销 > 经销采购单采购成功} */
  type TaobaoFenxiaoDealerConfirm = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerConfirm } };
  /** {@link Taobao.Fenxiao.DealerCreate 淘宝分销 > 经销采购单创建} */
  type TaobaoFenxiaoDealerCreate = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerCreate } };
  /** {@link Taobao.Fenxiao.DealerInstock 淘宝分销 > 经销采购单入库} */
  type TaobaoFenxiaoDealerInstock = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerInstock } };
  /** {@link Taobao.Fenxiao.DealerModify 淘宝分销 > 经销采购单修改} */
  type TaobaoFenxiaoDealerModify = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerModify } };
  /** {@link Taobao.Fenxiao.DealerPay 淘宝分销 > 经销采购单付款} */
  type TaobaoFenxiaoDealerPay = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerPay } };
  /** {@link Taobao.Fenxiao.DealerRefuse 淘宝分销 > 经销采购单拒绝通过} */
  type TaobaoFenxiaoDealerRefuse = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerRefuse } };
  /** {@link Taobao.Fenxiao.DealerShipped 淘宝分销 > 经销采购单已发货} */
  type TaobaoFenxiaoDealerShipped = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.DealerShipped } };
  /** {@link Taobao.Fenxiao.FxOrderClosed 淘宝分销 > 采购单关闭消息消息} */
  type TaobaoFenxiaoFxOrderClosed = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderClosed } };
  /** {@link Taobao.Fenxiao.FxOrderCreate 淘宝分销 > 采购单创建消息} */
  type TaobaoFenxiaoFxOrderCreate = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderCreate } };
  /** {@link Taobao.Fenxiao.FxOrderModifyConsign 淘宝分销 > 分销属性变更} */
  type TaobaoFenxiaoFxOrderModifyConsign = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderModifyConsign } };
  /** {@link Taobao.Fenxiao.FxOrderModifyPrice 淘宝分销 > 修改采购单价格消息} */
  type TaobaoFenxiaoFxOrderModifyPrice = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderModifyPrice } };
  /** {@link Taobao.Fenxiao.FxOrderPaid 淘宝分销 > 采购单付款消息} */
  type TaobaoFenxiaoFxOrderPaid = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderPaid } };
  /** {@link Taobao.Fenxiao.FxOrderShipped 淘宝分销 > 采购单发货消息} */
  type TaobaoFenxiaoFxOrderShipped = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderShipped } };
  /** {@link Taobao.Fenxiao.FxOrderSuccess 淘宝分销 > 采购单确认收货消息} */
  type TaobaoFenxiaoFxOrderSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxOrderSuccess } };
  /** {@link Taobao.Fenxiao.FxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  type TaobaoFenxiaoFxRefundAgree = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxRefundAgree } };
  /** {@link Taobao.Fenxiao.FxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  type TaobaoFenxiaoFxRefundClose = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxRefundClose } };
  /** {@link Taobao.Fenxiao.FxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  type TaobaoFenxiaoFxRefundCreate = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxRefundCreate } };
  /** {@link Taobao.Fenxiao.FxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  type TaobaoFenxiaoFxRefundRefuseGoods = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxRefundRefuseGoods } };
  /** {@link Taobao.Fenxiao.FxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  type TaobaoFenxiaoFxRefundSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxRefundSuccess } };
  /** {@link Taobao.Fenxiao.FxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  type TaobaoFenxiaoFxTradeRefundCreate = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxTradeRefundCreate } };
  /** {@link Taobao.Fenxiao.FxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  type TaobaoFenxiaoFxTradeRefundSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Fenxiao.FxTradeRefundSuccess } };
  /** {@link Taobao.Fliggy.CommonContractSign 酒店标准库基础信息变更消息 > 飞猪通用合同签约消息} */
  type TaobaoFliggyCommonContractSign = Message & { content?: MessageContent & { content?: string | Taobao.Fliggy.CommonContractSign } };
  /** {@link Taobao.Fliggy.HspHicItemChange 酒店标准库基础信息变更消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  type TaobaoFliggyHspHicItemChange = Message & { content?: MessageContent & { content?: string | Taobao.Fliggy.HspHicItemChange } };
  /** {@link Taobao.Fliggy.SignStatus 酒店标准库基础信息变更消息 > 飞猪签约状态消息} */
  type TaobaoFliggySignStatus = Message & { content?: MessageContent & { content?: string | Taobao.Fliggy.SignStatus } };
  /** {@link Taobao.Fliggy.StdHotelModify 酒店标准库基础信息变更消息 > 标准酒店实体变更消息} */
  type TaobaoFliggyStdHotelModify = Message & { content?: MessageContent & { content?: string | Taobao.Fliggy.StdHotelModify } };
  /** {@link Taobao.Fliggy.StdRoomTypeModify 酒店标准库基础信息变更消息 > 标准房型领域模型实体变更消息} */
  type TaobaoFliggyStdRoomTypeModify = Message & { content?: MessageContent & { content?: string | Taobao.Fliggy.StdRoomTypeModify } };
  /** {@link Taobao.Fuwu.OrderClosed 服务市场 > 订单关闭消息} */
  type TaobaoFuwuOrderClosed = Message & { content?: MessageContent & { content?: string | Taobao.Fuwu.OrderClosed } };
  /** {@link Taobao.Fuwu.OrderCreated 服务市场 > 订单创建消息} */
  type TaobaoFuwuOrderCreated = Message & { content?: MessageContent & { content?: string | Taobao.Fuwu.OrderCreated } };
  /** {@link Taobao.Fuwu.OrderPaid 服务市场 > 订单支付消息} */
  type TaobaoFuwuOrderPaid = Message & { content?: MessageContent & { content?: string | Taobao.Fuwu.OrderPaid } };
  /** {@link Taobao.Fuwu.ServiceOpen 服务市场 > 服务开通消息} */
  type TaobaoFuwuServiceOpen = Message & { content?: MessageContent & { content?: string | Taobao.Fuwu.ServiceOpen } };
  /** {@link Taobao.Fuwu.WitkeySyncModeling 服务市场 > 威客同步建模数据} */
  type TaobaoFuwuWitkeySyncModeling = Message & { content?: MessageContent & { content?: string | Taobao.Fuwu.WitkeySyncModeling } };
  /** {@link Taobao.Globalbuys.SeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  type TaobaoGlobalbuysSeamailOrderNotify = Message & { content?: MessageContent & { content?: string | Taobao.Globalbuys.SeamailOrderNotify } };
  /** {@link Taobao.Homeai.CaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  type TaobaoHomeaiCaseSyncResult = Message & { content?: MessageContent & { content?: string | Taobao.Homeai.CaseSyncResult } };
  /** {@link Taobao.Homeai.LayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  type TaobaoHomeaiLayoutTransferResult = Message & { content?: MessageContent & { content?: string | Taobao.Homeai.LayoutTransferResult } };
  /** {@link Taobao.Homeai.RenderRequest HOMEAI消息对接 > HS渲染消息} */
  type TaobaoHomeaiRenderRequest = Message & { content?: MessageContent & { content?: string | Taobao.Homeai.RenderRequest } };
  /** {@link Taobao.Hotel.CreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息} */
  type TaobaoHotelCreditToPreHotelStatus = Message & { content?: MessageContent & { content?: string | Taobao.Hotel.CreditToPreHotelStatus } };
  /** {@link Taobao.Hotel.SearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息} */
  type TaobaoHotelSearchMonitor = Message & { content?: MessageContent & { content?: string | Taobao.Hotel.SearchMonitor } };
  /** {@link Taobao.Hotel.SearchTrigger 酒店签约中心消息 > 热搜酒店消息} */
  type TaobaoHotelSearchTrigger = Message & { content?: MessageContent & { content?: string | Taobao.Hotel.SearchTrigger } };
  /** {@link Taobao.Istore.GiftingMsg Gifting送礼 > istoreGifing消息} */
  type TaobaoIstoreGiftingMsg = Message & { content?: MessageContent & { content?: string | Taobao.Istore.GiftingMsg } };
  /** {@link Taobao.Item.ItemAdd 淘宝商品 > 商品新增消息} */
  type TaobaoItemItemAdd = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemAdd } };
  /** {@link Taobao.Item.ItemDelete 淘宝商品 > 商品删除消息} */
  type TaobaoItemItemDelete = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemDelete } };
  /** {@link Taobao.Item.ItemDownshelf 淘宝商品 > 商品下架消息} */
  type TaobaoItemItemDownshelf = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemDownshelf } };
  /** {@link Taobao.Item.ItemPunishCc 淘宝商品 > 小二CC商品消息} */
  type TaobaoItemItemPunishCc = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemPunishCc } };
  /** {@link Taobao.Item.ItemPunishDelete 淘宝商品 > 小二删除商品消息} */
  type TaobaoItemItemPunishDelete = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemPunishDelete } };
  /** {@link Taobao.Item.ItemPunishDownshelf 淘宝商品 > 小二下架商品消息} */
  type TaobaoItemItemPunishDownshelf = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemPunishDownshelf } };
  /** {@link Taobao.Item.ItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息} */
  type TaobaoItemItemRecommendAdd = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemRecommendAdd } };
  /** {@link Taobao.Item.ItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息} */
  type TaobaoItemItemRecommendDelete = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemRecommendDelete } };
  /** {@link Taobao.Item.ItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息} */
  type TaobaoItemItemSkuZeroStock = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemSkuZeroStock } };
  /** {@link Taobao.Item.ItemStockChanged 淘宝商品 > 修改商品库存消息} */
  type TaobaoItemItemStockChanged = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemStockChanged } };
  /** {@link Taobao.Item.ItemUpdate 淘宝商品 > 商品更新消息} */
  type TaobaoItemItemUpdate = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemUpdate } };
  /** {@link Taobao.Item.ItemUpshelf 淘宝商品 > 商品上架消息} */
  type TaobaoItemItemUpshelf = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemUpshelf } };
  /** {@link Taobao.Item.ItemZeroStock 淘宝商品 > 商品卖空消息} */
  type TaobaoItemItemZeroStock = Message & { content?: MessageContent & { content?: string | Taobao.Item.ItemZeroStock } };
  /** {@link Taobao.Jipiao.AncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  type TaobaoJipiaoAncillaryOrderPaid = Message & { content?: MessageContent & { content?: string | Taobao.Jipiao.AncillaryOrderPaid } };
  /** {@link Taobao.Jipiao.JipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  type TaobaoJipiaoJipiaoModifyOrderNotify = Message & { content?: MessageContent & { content?: string | Taobao.Jipiao.JipiaoModifyOrderNotify } };
  /** {@link Taobao.Jipiao.JipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  type TaobaoJipiaoJipiaoOrderStatusNotify = Message & { content?: MessageContent & { content?: string | Taobao.Jipiao.JipiaoOrderStatusNotify } };
  /** {@link Taobao.Jipiao.JipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  type TaobaoJipiaoJipiaoRefundOrderNotify = Message & { content?: MessageContent & { content?: string | Taobao.Jipiao.JipiaoRefundOrderNotify } };
  /** {@link Taobao.Jipiao.SellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  type TaobaoJipiaoSellerOrderNotify = Message & { content?: MessageContent & { content?: string | Taobao.Jipiao.SellerOrderNotify } };
  /** {@link Taobao.Jipiao.SellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  type TaobaoJipiaoSellerRefundOrderNotify = Message & { content?: MessageContent & { content?: string | Taobao.Jipiao.SellerRefundOrderNotify } };
  /** {@link Taobao.Logistics.LogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  type TaobaoLogisticsLogsticDetailTrace = Message & { content?: MessageContent & { content?: string | Taobao.Logistics.LogsticDetailTrace } };
  /** {@link Taobao.Modifyaddress.ResultNotify 聚石塔 > 自助改地址结果消息通知} */
  type TaobaoModifyaddressResultNotify = Message & { content?: MessageContent & { content?: string | Taobao.Modifyaddress.ResultNotify } };
  /** {@link Taobao.Modifyorder.ConsistencyResult 聚石塔 > 订单一致性校验消息} */
  type TaobaoModifyorderConsistencyResult = Message & { content?: MessageContent & { content?: string | Taobao.Modifyorder.ConsistencyResult } };
  /** {@link Taobao.Modifysku.ResultNotify 聚石塔 > 修改商品信息结果消息} */
  type TaobaoModifyskuResultNotify = Message & { content?: MessageContent & { content?: string | Taobao.Modifysku.ResultNotify } };
  /** {@link Taobao.Oc.TradeTagChanged 交易全链路 > oc订单标签变更} */
  type TaobaoOcTradeTagChanged = Message & { content?: MessageContent & { content?: string | Taobao.Oc.TradeTagChanged } };
  /** {@link Taobao.Openaccount.DataSync 导购平台 > openaccount数据同步} */
  type TaobaoOpenaccountDataSync = Message & { content?: MessageContent & { content?: string | Taobao.Openaccount.DataSync } };
  /** {@link Taobao.Opencrm.AuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  type TaobaoOpencrmAuthTouchMessage = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.AuthTouchMessage } };
  /** {@link Taobao.Opencrm.CardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  type TaobaoOpencrmCardEstTask = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.CardEstTask } };
  /** {@link Taobao.Opencrm.CardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  type TaobaoOpencrmCardTplExamine = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.CardTplExamine } };
  /** {@link Taobao.Opencrm.CrowdInstResult 客户运营平台API > 人群快照生成结果} */
  type TaobaoOpencrmCrowdInstResult = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.CrowdInstResult } };
  /** {@link Taobao.Opencrm.CrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  type TaobaoOpencrmCrowdInstSaveResult = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.CrowdInstSaveResult } };
  /** {@link Taobao.Opencrm.Feedback 客户运营平台API > 反馈tmc} */
  type TaobaoOpencrmFeedback = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.Feedback } };
  /** {@link Taobao.Opencrm.MemberGradeChange 客户运营平台API > 会员等级变更} */
  type TaobaoOpencrmMemberGradeChange = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.MemberGradeChange } };
  /** {@link Taobao.Opencrm.NodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  type TaobaoOpencrmNodeExecuteFinished = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.NodeExecuteFinished } };
  /** {@link Taobao.Opencrm.OpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  type TaobaoOpencrmOpenStrategyEvent = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.OpenStrategyEvent } };
  /** {@link Taobao.Opencrm.SellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  type TaobaoOpencrmSellerDimensionCharge = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.SellerDimensionCharge } };
  /** {@link Taobao.Opencrm.ShortMessageBill 客户运营平台API > 短信账单} */
  type TaobaoOpencrmShortMessageBill = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.ShortMessageBill } };
  /** {@link Taobao.Opencrm.Utouch 客户运营平台API > 智能外呼回执} */
  type TaobaoOpencrmUtouch = Message & { content?: MessageContent & { content?: string | Taobao.Opencrm.Utouch } };
  /** {@link Taobao.Openim.OffMsgPush OpenIM消息 > openim 离线消息推送} */
  type TaobaoOpenimOffMsgPush = Message & { content?: MessageContent & { content?: string | Taobao.Openim.OffMsgPush } };
  /** {@link Taobao.Openmall.AlarmMsg OpenMall-API > Openmall告警消息通知} */
  type TaobaoOpenmallAlarmMsg = Message & { content?: MessageContent & { content?: string | Taobao.Openmall.AlarmMsg } };
  /** {@link Taobao.Openmall.ItemChanged OpenMall-API > Openmall商品变更消息} */
  type TaobaoOpenmallItemChanged = Message & { content?: MessageContent & { content?: string | Taobao.Openmall.ItemChanged } };
  /** {@link Taobao.Openmall.ItemStockChanged OpenMall-API > openmall商品库存变更消息通知} */
  type TaobaoOpenmallItemStockChanged = Message & { content?: MessageContent & { content?: string | Taobao.Openmall.ItemStockChanged } };
  /** {@link Taobao.Openmall.RefundChanged OpenMall-API > OpenMall退款单变更} */
  type TaobaoOpenmallRefundChanged = Message & { content?: MessageContent & { content?: string | Taobao.Openmall.RefundChanged } };
  /** {@link Taobao.Openmall.TradeChanged OpenMall-API > 订单消息通知} */
  type TaobaoOpenmallTradeChanged = Message & { content?: MessageContent & { content?: string | Taobao.Openmall.TradeChanged } };
  /** {@link Taobao.Rdcaligenius.OrderMsgSend 淘宝交易 > 订单消息} */
  type TaobaoRdcaligeniusOrderMsgSend = Message & { content?: MessageContent & { content?: string | Taobao.Rdcaligenius.OrderMsgSend } };
  /** {@link Taobao.Recycle.OfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  type TaobaoRecycleOfnPreRedPacketSync = Message & { content?: MessageContent & { content?: string | Taobao.Recycle.OfnPreRedPacketSync } };
  /** {@link Taobao.Refund.RefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息} */
  type TaobaoRefundRefundBlockMessage = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundBlockMessage } };
  /** {@link Taobao.Refund.RefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息} */
  type TaobaoRefundRefundBuyerModifyAgreement = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundBuyerModifyAgreement } };
  /** {@link Taobao.Refund.RefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息} */
  type TaobaoRefundRefundBuyerReturnGoods = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundBuyerReturnGoods } };
  /** {@link Taobao.Refund.RefundClosed 淘宝退款 > 退款关闭消息} */
  type TaobaoRefundRefundClosed = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundClosed } };
  /** {@link Taobao.Refund.RefundCreateMessage 淘宝退款 > 发表退款留言消息} */
  type TaobaoRefundRefundCreateMessage = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundCreateMessage } };
  /** {@link Taobao.Refund.RefundCreated 淘宝退款 > 退款创建消息} */
  type TaobaoRefundRefundCreated = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundCreated } };
  /** {@link Taobao.Refund.RefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息} */
  type TaobaoRefundRefundSellerAgreeAgreement = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundSellerAgreeAgreement } };
  /** {@link Taobao.Refund.RefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息} */
  type TaobaoRefundRefundSellerRefuseAgreement = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundSellerRefuseAgreement } };
  /** {@link Taobao.Refund.RefundSuccess 淘宝退款 > 退款成功消息} */
  type TaobaoRefundRefundSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundSuccess } };
  /** {@link Taobao.Refund.RefundableCanceled 淘宝退款 > 退款标记取消消息} */
  type TaobaoRefundRefundableCanceled = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundableCanceled } };
  /** {@link Taobao.Refund.RefundableMarked 淘宝退款 > 退款标记创建消息} */
  type TaobaoRefundRefundableMarked = Message & { content?: MessageContent & { content?: string | Taobao.Refund.RefundableMarked } };
  /** {@link Taobao.Refund.TaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  type TaobaoRefundTaobaoInterApplied = Message & { content?: MessageContent & { content?: string | Taobao.Refund.TaobaoInterApplied } };
  /** {@link Taobao.Refund.TaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  type TaobaoRefundTaobaoIntervened = Message & { content?: MessageContent & { content?: string | Taobao.Refund.TaobaoIntervened } };
  /** {@link Taobao.Rhino.DeviceStatus 智能制造API > 智能制造-设备状态变更} */
  type TaobaoRhinoDeviceStatus = Message & { content?: MessageContent & { content?: string | Taobao.Rhino.DeviceStatus } };
  /** {@link Taobao.Tae.BaichuanAuctionChange 导购平台 > 商品信息变更} */
  type TaobaoTaeBaichuanAuctionChange = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanAuctionChange } };
  /** {@link Taobao.Tae.BaichuanTradeClosed 导购平台 > 交易关闭} */
  type TaobaoTaeBaichuanTradeClosed = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanTradeClosed } };
  /** {@link Taobao.Tae.BaichuanTradeCreated 导购平台 > 创建订单} */
  type TaobaoTaeBaichuanTradeCreated = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanTradeCreated } };
  /** {@link Taobao.Tae.BaichuanTradePaidDone 导购平台 > 付款成功} */
  type TaobaoTaeBaichuanTradePaidDone = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanTradePaidDone } };
  /** {@link Taobao.Tae.BaichuanTradeRefundCreated 导购平台 > 创建退款消息} */
  type TaobaoTaeBaichuanTradeRefundCreated = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanTradeRefundCreated } };
  /** {@link Taobao.Tae.BaichuanTradeRefundSuccess 导购平台 > 退款成功} */
  type TaobaoTaeBaichuanTradeRefundSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanTradeRefundSuccess } };
  /** {@link Taobao.Tae.BaichuanTradeSuccess 导购平台 > 交易成功} */
  type TaobaoTaeBaichuanTradeSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Tae.BaichuanTradeSuccess } };
  /** {@link Taobao.Tae.ItemDownShelf 导购平台 > 商品下架} */
  type TaobaoTaeItemDownShelf = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemDownShelf } };
  /** {@link Taobao.Tae.ItemImageChange 导购平台 > 商品主图变更} */
  type TaobaoTaeItemImageChange = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemImageChange } };
  /** {@link Taobao.Tae.ItemPriceChange 导购平台 > 订阅的商品变更消息} */
  type TaobaoTaeItemPriceChange = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemPriceChange } };
  /** {@link Taobao.Tae.ItemSkuDelete 导购平台 > sku删除} */
  type TaobaoTaeItemSkuDelete = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemSkuDelete } };
  /** {@link Taobao.Tae.ItemSkuPublish 导购平台 > sku发布} */
  type TaobaoTaeItemSkuPublish = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemSkuPublish } };
  /** {@link Taobao.Tae.ItemSkuSoldOut 导购平台 > 商品sku售空} */
  type TaobaoTaeItemSkuSoldOut = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemSkuSoldOut } };
  /** {@link Taobao.Tae.ItemSoldOut 导购平台 > 商品售空} */
  type TaobaoTaeItemSoldOut = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemSoldOut } };
  /** {@link Taobao.Tae.ItemSubscribe 导购平台 > 商品订阅成功} */
  type TaobaoTaeItemSubscribe = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemSubscribe } };
  /** {@link Taobao.Tae.ItemTitleChange 导购平台 > 商品标题变更} */
  type TaobaoTaeItemTitleChange = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemTitleChange } };
  /** {@link Taobao.Tae.ItemUnSubscribe 导购平台 > 取消商品订阅} */
  type TaobaoTaeItemUnSubscribe = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemUnSubscribe } };
  /** {@link Taobao.Tae.ItemUpShelf 导购平台 > 商品上架} */
  type TaobaoTaeItemUpShelf = Message & { content?: MessageContent & { content?: string | Taobao.Tae.ItemUpShelf } };
  /** {@link Taobao.Top.AuthCancel 平台消息 > 取消授权消息通知} */
  type TaobaoTopAuthCancel = Message & { content?: MessageContent & { content?: string | Taobao.Top.AuthCancel } };
  /** {@link Taobao.Topats.TaskComplete 平台消息 > 异步任务执行完成} */
  type TaobaoTopatsTaskComplete = Message & { content?: MessageContent & { content?: string | Taobao.Topats.TaskComplete } };
  /** {@link Taobao.Trade.TradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  type TaobaoTradeTradeAlipayCreate = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeAlipayCreate } };
  /** {@link Taobao.Trade.TradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  type TaobaoTradeTradeBuyerPay = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeBuyerPay } };
  /** {@link Taobao.Trade.TradeBuyerStepPay 淘宝交易 > 分阶段订单付定金} */
  type TaobaoTradeTradeBuyerStepPay = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeBuyerStepPay } };
  /** {@link Taobao.Trade.TradeChanged 淘宝交易 > 订单信息变更消息} */
  type TaobaoTradeTradeChanged = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeChanged } };
  /** {@link Taobao.Trade.TradeClose 淘宝交易 > 关闭交易消息} */
  type TaobaoTradeTradeClose = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeClose } };
  /** {@link Taobao.Trade.TradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息} */
  type TaobaoTradeTradeCloseAndModifyDetailOrder = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeCloseAndModifyDetailOrder } };
  /** {@link Taobao.Trade.TradeCreate 淘宝交易 > 创建淘宝交易消息} */
  type TaobaoTradeTradeCreate = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeCreate } };
  /** {@link Taobao.Trade.TradeDelayConfirmPay 淘宝交易 > 延长收货时间消息} */
  type TaobaoTradeTradeDelayConfirmPay = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeDelayConfirmPay } };
  /** {@link Taobao.Trade.TradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息} */
  type TaobaoTradeTradeLogisticsAddressChanged = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeLogisticsAddressChanged } };
  /** {@link Taobao.Trade.TradeMemoModified 淘宝交易 > 交易备注修改消息} */
  type TaobaoTradeTradeMemoModified = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeMemoModified } };
  /** {@link Taobao.Trade.TradeModifyFee 淘宝交易 > 修改交易费用消息} */
  type TaobaoTradeTradeModifyFee = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeModifyFee } };
  /** {@link Taobao.Trade.TradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息} */
  type TaobaoTradeTradePartlyConfirmPay = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradePartlyConfirmPay } };
  /** {@link Taobao.Trade.TradePartlyRefund 淘宝交易 > 子订单退款成功消息} */
  type TaobaoTradeTradePartlyRefund = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradePartlyRefund } };
  /** {@link Taobao.Trade.TradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息} */
  type TaobaoTradeTradePartlySellerShip = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradePartlySellerShip } };
  /** {@link Taobao.Trade.TradeRated 淘宝交易 > 交易评价变更消息} */
  type TaobaoTradeTradeRated = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeRated } };
  /** {@link Taobao.Trade.TradeSellerShip 淘宝交易 > 卖家发货消息} */
  type TaobaoTradeTradeSellerShip = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeSellerShip } };
  /** {@link Taobao.Trade.TradeSuccess 淘宝交易 > 交易成功消息} */
  type TaobaoTradeTradeSuccess = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeSuccess } };
  /** {@link Taobao.Trade.TradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  type TaobaoTradeTradeTimeoutRemind = Message & { content?: MessageContent & { content?: string | Taobao.Trade.TradeTimeoutRemind } };
  /** {@link Taobao.Train.AgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  type TaobaoTrainAgentQueryInfoNotify = Message & { content?: MessageContent & { content?: string | Taobao.Train.AgentQueryInfoNotify } };
  /** {@link Taobao.Train.OrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  type TaobaoTrainOrderNotify = Message & { content?: MessageContent & { content?: string | Taobao.Train.OrderNotify } };
  /** {@link Taobao.Train.ThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  type TaobaoTrainThirdPartyTradeNotify = Message & { content?: MessageContent & { content?: string | Taobao.Train.ThirdPartyTradeNotify } };
  /** {@link Taobao.Train.TradeNotify 淘宝火车票 > 火车票订单消息} */
  type TaobaoTrainTradeNotify = Message & { content?: MessageContent & { content?: string | Taobao.Train.TradeNotify } };
  /** {@link Taobao.Uscesl.AlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  type TaobaoUsceslAlarmCreate = Message & { content?: MessageContent & { content?: string | Taobao.Uscesl.AlarmCreate } };
  /** {@link Taobao.Uscesl.BindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  type TaobaoUsceslBindResult = Message & { content?: MessageContent & { content?: string | Taobao.Uscesl.BindResult } };
  /** {@link Taobao.Waimai.GrabOrderResult 淘宝点点 > 点点送抢单结果通知消息} */
  type TaobaoWaimaiGrabOrderResult = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.GrabOrderResult } };
  /** {@link Taobao.Waimai.OrderClose 淘宝点点 > 淘点点外卖订单关闭消息通知} */
  type TaobaoWaimaiOrderClose = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderClose } };
  /** {@link Taobao.Waimai.OrderComplain 淘宝点点 > 点点送订单投诉} */
  type TaobaoWaimaiOrderComplain = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderComplain } };
  /** {@link Taobao.Waimai.OrderComplainCancel 淘宝点点 > 点点送订单撤诉} */
  type TaobaoWaimaiOrderComplainCancel = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderComplainCancel } };
  /** {@link Taobao.Waimai.OrderComplainResult 淘宝点点 > 点点送订单投诉结果} */
  type TaobaoWaimaiOrderComplainResult = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderComplainResult } };
  /** {@link Taobao.Waimai.OrderDispatch 淘宝点点 > 点点送订单通知消息} */
  type TaobaoWaimaiOrderDispatch = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderDispatch } };
  /** {@link Taobao.Waimai.OrderDispatchSimple 淘宝点点 > 点点送派单通知} */
  type TaobaoWaimaiOrderDispatchSimple = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderDispatchSimple } };
  /** {@link Taobao.Waimai.OrderPush 淘宝点点 > 点点送接单广播通知消息} */
  type TaobaoWaimaiOrderPush = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderPush } };
  /** {@link Taobao.Waimai.OrderRemind 淘宝点点 > 点点送催单消息通知} */
  type TaobaoWaimaiOrderRemind = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OrderRemind } };
  /** {@link Taobao.Waimai.OuterOrderDispatch 淘宝点点 > 点点送外部订单通知消息} */
  type TaobaoWaimaiOuterOrderDispatch = Message & { content?: MessageContent & { content?: string | Taobao.Waimai.OuterOrderDispatch } };
  /** {@link Taobao.Wisdomstore.RecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  type TaobaoWisdomstoreRecognitionNotice = Message & { content?: MessageContent & { content?: string | Taobao.Wisdomstore.RecognitionNotice } };
  /** {@link Taobao.Wisdomstore.RecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  type TaobaoWisdomstoreRecognitionPush = Message & { content?: MessageContent & { content?: string | Taobao.Wisdomstore.RecognitionPush } };
  /** {@link Taobao.Xianyu.RentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  type TaobaoXianyuRentalItemReturnCanceled = Message & { content?: MessageContent & { content?: string | Taobao.Xianyu.RentalItemReturnCanceled } };
  /** {@link Taobao.Xianyu.RentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  type TaobaoXianyuRentalItemReturnReserved = Message & { content?: MessageContent & { content?: string | Taobao.Xianyu.RentalItemReturnReserved } };
  /** {@link Taobao.Xianyu.RentalOrderCanceled 闲鱼 > 租赁订单取消} */
  type TaobaoXianyuRentalOrderCanceled = Message & { content?: MessageContent & { content?: string | Taobao.Xianyu.RentalOrderCanceled } };
  /** {@link Taobao.Xianyu.RentalOrderCreated 闲鱼 > 租赁订单创建} */
  type TaobaoXianyuRentalOrderCreated = Message & { content?: MessageContent & { content?: string | Taobao.Xianyu.RentalOrderCreated } };
  /** {@link Taobao.Xiaowei.Message IOT-智能制造 > 获取推送消息} */
  type TaobaoXiaoweiMessage = Message & { content?: MessageContent & { content?: string | Taobao.Xiaowei.Message } };
  /** {@link Tmall.Aliauto.StepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  type TmallAliautoStepOrderPartConfirmed = Message & { content?: MessageContent & { content?: string | Tmall.Aliauto.StepOrderPartConfirmed } };
  /** {@link Tmall.Auto.TradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  type TmallAutoTradeModify = Message & { content?: MessageContent & { content?: string | Tmall.Auto.TradeModify } };
  /** {@link Tmall.Auto.TwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  type TmallAutoTwoWheelsReceiptCreate = Message & { content?: MessageContent & { content?: string | Tmall.Auto.TwoWheelsReceiptCreate } };
  /** {@link Tmall.Channel.ApplyOrderChange 渠道中心API > 申请单变更消息} */
  type TmallChannelApplyOrderChange = Message & { content?: MessageContent & { content?: string | Tmall.Channel.ApplyOrderChange } };
  /** {@link Tmall.Channel.DeliverOrderChange 渠道中心API > 发货单消息变更} */
  type TmallChannelDeliverOrderChange = Message & { content?: MessageContent & { content?: string | Tmall.Channel.DeliverOrderChange } };
  /** {@link Tmall.Channel.PurchaseOrderChange 渠道中心API > 采购单变更消息} */
  type TmallChannelPurchaseOrderChange = Message & { content?: MessageContent & { content?: string | Tmall.Channel.PurchaseOrderChange } };
  /** {@link Tmall.Channel.StopOrderChange 渠道中心API > 停止发货单变更消息} */
  type TmallChannelStopOrderChange = Message & { content?: MessageContent & { content?: string | Tmall.Channel.StopOrderChange } };
  /** {@link Tmall.Fuwu.AnomalyRecourse 天猫服务 > 天猫服务平台一键求助单消息队列} */
  type TmallFuwuAnomalyRecourse = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.AnomalyRecourse } };
  /** {@link Tmall.Fuwu.AnomalyRecourseStatusUpdate 天猫服务 > 一键求助状态变更消息} */
  type TmallFuwuAnomalyRecourseStatusUpdate = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.AnomalyRecourseStatusUpdate } };
  /** {@link Tmall.Fuwu.LogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  type TmallFuwuLogisticsInfoMessage = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.LogisticsInfoMessage } };
  /** {@link Tmall.Fuwu.ServiceItemUpdate 天猫服务 > 服务商品信息变更消息} */
  type TmallFuwuServiceItemUpdate = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.ServiceItemUpdate } };
  /** {@link Tmall.Fuwu.ServiceMonitorMessage 天猫服务 > 服务预警消息} */
  type TmallFuwuServiceMonitorMessage = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.ServiceMonitorMessage } };
  /** {@link Tmall.Fuwu.ServiceStoreRegister 天猫服务 > 服务网点注册消息} */
  type TmallFuwuServiceStoreRegister = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.ServiceStoreRegister } };
  /** {@link Tmall.Fuwu.SettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送} */
  type TmallFuwuSettleAdjustmentStatusUpdate = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.SettleAdjustmentStatusUpdate } };
  /** {@link Tmall.Fuwu.WorkcardContract 天猫服务 > 天猫服务履约合同单} */
  type TmallFuwuWorkcardContract = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.WorkcardContract } };
  /** {@link Tmall.Fuwu.WorkcardInfo 天猫服务 > 天猫服务任务工单} */
  type TmallFuwuWorkcardInfo = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.WorkcardInfo } };
  /** {@link Tmall.Fuwu.WorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  type TmallFuwuWorkcardStatusUpdate = Message & { content?: MessageContent & { content?: string | Tmall.Fuwu.WorkcardStatusUpdate } };
  /** {@link Tmall.Mei.MemberRegister 天猫美妆 > 飞行入会消息} */
  type TmallMeiMemberRegister = Message & { content?: MessageContent & { content?: string | Tmall.Mei.MemberRegister } };
  /** {@link Tmall.Mei.PointChange 天猫美妆 > 品牌积分变更通知} */
  type TmallMeiPointChange = Message & { content?: MessageContent & { content?: string | Tmall.Mei.PointChange } };
  /** {@link Tmall.Nrt.ItemsToEasyHome 新零售终端上行消息 > 商品信息同步} */
  type TmallNrtItemsToEasyHome = Message & { content?: MessageContent & { content?: string | Tmall.Nrt.ItemsToEasyHome } };
  /** {@link Tmall.Omnichannel.InventoryChange 聚石塔 > 商品库存变化} */
  type TmallOmnichannelInventoryChange = Message & { content?: MessageContent & { content?: string | Tmall.Omnichannel.InventoryChange } };
  /** {@link Tmall.Omnichannel.InventoryZero 聚石塔 > 商品库存归零} */
  type TmallOmnichannelInventoryZero = Message & { content?: MessageContent & { content?: string | Tmall.Omnichannel.InventoryZero } };
  /** {@link Tmall.Omnichannel.ItemDescChange 聚石塔 > 商品描述变化} */
  type TmallOmnichannelItemDescChange = Message & { content?: MessageContent & { content?: string | Tmall.Omnichannel.ItemDescChange } };
  /** {@link Tmall.Omnichannel.ItemDownShelf 聚石塔 > 商品下架} */
  type TmallOmnichannelItemDownShelf = Message & { content?: MessageContent & { content?: string | Tmall.Omnichannel.ItemDownShelf } };
  /** {@link Tmall.Omnichannel.ItemImageChange 聚石塔 > 商品图片变化} */
  type TmallOmnichannelItemImageChange = Message & { content?: MessageContent & { content?: string | Tmall.Omnichannel.ItemImageChange } };
  /** {@link Tmall.Omnichannel.ItemPriceChange 聚石塔 > 商品价格变更} */
  type TmallOmnichannelItemPriceChange = Message & { content?: MessageContent & { content?: string | Tmall.Omnichannel.ItemPriceChange } };
  /** {@link Tmall.Servicecenter.TaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  type TmallServicecenterTaskUpdate = Message & { content?: MessageContent & { content?: string | Tmall.Servicecenter.TaskUpdate } };
  /** {@link Tmall.Serviceplatform.SignCreate 天猫服务 > 签到消息} */
  type TmallServiceplatformSignCreate = Message & { content?: MessageContent & { content?: string | Tmall.Serviceplatform.SignCreate } };
  /** {@link Tmall.Serviceplatform.WorkerLeave 天猫服务 > 工人请假发送消息} */
  type TmallServiceplatformWorkerLeave = Message & { content?: MessageContent & { content?: string | Tmall.Serviceplatform.WorkerLeave } };
  /** {@link Trip.Hotel.BottomPriceRuleChange 酒店商品消息api > 酒店商品底价加价商品加价规则消息通知} */
  type TripHotelBottomPriceRuleChange = Message & { content?: MessageContent & { content?: string | Trip.Hotel.BottomPriceRuleChange } };
  /** {@link Trip.Hotel.HotelChange 酒店商品消息api > 飞猪卖家酒店实体变更消息同步} */
  type TripHotelHotelChange = Message & { content?: MessageContent & { content?: string | Trip.Hotel.HotelChange } };
  /** {@link Trip.Hotel.RateChange 酒店商品消息api > 酒店rate信息变更} */
  type TripHotelRateChange = Message & { content?: MessageContent & { content?: string | Trip.Hotel.RateChange } };
  /** {@link Trip.Hotel.RatePlanChange 酒店商品消息api > 酒店价格计划消息} */
  type TripHotelRatePlanChange = Message & { content?: MessageContent & { content?: string | Trip.Hotel.RatePlanChange } };
  /** {@link Trip.Hotel.RoomChange 酒店商品消息api > room变更消息} */
  type TripHotelRoomChange = Message & { content?: MessageContent & { content?: string | Trip.Hotel.RoomChange } };
  /** {@link Trip.Hotel.RoomTypeChange 酒店商品消息api > 酒店房型消息} */
  type TripHotelRoomTypeChange = Message & { content?: MessageContent & { content?: string | Trip.Hotel.RoomTypeChange } };
  /** {@link Wdk.Market.OperateSkuError 五道口营销 > 营销操作错误消息} */
  type WdkMarketOperateSkuError = Message & { content?: MessageContent & { content?: string | Wdk.Market.OperateSkuError } };
  /** {@link Wdk.Market.OperateSkuErrror 五道口营销 > 营销发布商品错误} */
  type WdkMarketOperateSkuErrror = Message & { content?: MessageContent & { content?: string | Wdk.Market.OperateSkuErrror } };
  /** {@link Wdk.Open.DataPublishError 五道口营销 > 五道口开放数据发布错误} */
  type WdkOpenDataPublishError = Message & { content?: MessageContent & { content?: string | Wdk.Open.DataPublishError } };
  /** {@link Wdk.Open.DataRelation 五道口营销 > 五道口开放数据关联通知} */
  type WdkOpenDataRelation = Message & { content?: MessageContent & { content?: string | Wdk.Open.DataRelation } };
  /** {@link Xianyu.Aftersale.OrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  type XianyuAftersaleOrderSyn = Message & { content?: MessageContent & { content?: string | Xianyu.Aftersale.OrderSyn } };
  /** {@link Xianyu.Appraise.OrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  type XianyuAppraiseOrderSyn = Message & { content?: MessageContent & { content?: string | Xianyu.Appraise.OrderSyn } };
  /** {@link Xianyu.Car.OrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  type XianyuCarOrderStatusSync = Message & { content?: MessageContent & { content?: string | Xianyu.Car.OrderStatusSync } };
  /** {@link Xianyu.Recycle.OrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  type XianyuRecycleOrderStatusSync = Message & { content?: MessageContent & { content?: string | Xianyu.Recycle.OrderStatusSync } };
  /** {@link Xianyu.Recycle.SpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  type XianyuRecycleSpuModifySync = Message & { content?: MessageContent & { content?: string | Xianyu.Recycle.SpuModifySync } };
  /** {@link Xianyu.Template.QuesChange 闲鱼 > 闲鱼问卷变更} */
  type XianyuTemplateQuesChange = Message & { content?: MessageContent & { content?: string | Xianyu.Template.QuesChange } };
  /** {@link Xianyu.Template.StatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  type XianyuTemplateStatusChange = Message & { content?: MessageContent & { content?: string | Xianyu.Template.StatusChange } };
  /** {@link Xianyu.Tender.OrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  type XianyuTenderOrderSyn = Message & { content?: MessageContent & { content?: string | Xianyu.Tender.OrderSyn } };
  /** {@link Youku.Tvosappstore.AppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  type YoukuTvosappstoreAppStatusChange = Message & { content?: MessageContent & { content?: string | Youku.Tvosappstore.AppStatusChange } };
  /** {@link Yunos.Yoc.DatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  type YunosYocDatapoolSandbox = Message & { content?: MessageContent & { content?: string | Yunos.Yoc.DatapoolSandbox } };
  /** {@link Yunos.Yoc.MessageService YunOS YoC > yoc消息服务} */
  type YunosYocMessageService = Message & { content?: MessageContent & { content?: string | Yunos.Yoc.MessageService } };
}
