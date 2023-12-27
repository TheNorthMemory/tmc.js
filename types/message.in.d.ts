/// <reference path="message.d.ts" />
/// <reference path="alibaba.d.ts" />
/// <reference path="alicom.d.ts" />
/// <reference path="aliexpress.d.ts" />
/// <reference path="alihealth.d.ts" />
/// <reference path="alitrip.d.ts" />
/// <reference path="aliyun.d.ts" />
/// <reference path="ascp.d.ts" />
/// <reference path="banma.d.ts" />
/// <reference path="cainiao.d.ts" />
/// <reference path="damai.d.ts" />
/// <reference path="fliggy.d.ts" />
/// <reference path="fuwu.d.ts" />
/// <reference path="gov.d.ts" />
/// <reference path="idle.d.ts" />
/// <reference path="jae.d.ts" />
/// <reference path="lst.d.ts" />
/// <reference path="niaochao.d.ts" />
/// <reference path="taobao.d.ts" />
/// <reference path="tmall.d.ts" />
/// <reference path="trip.d.ts" />
/// <reference path="wdk.d.ts" />
/// <reference path="xianyu.d.ts" />
/// <reference path="youku.d.ts" />
/// <reference path="yunos.d.ts" />

declare namespace IncomingMessage {
  /** {@link Alibaba.Adlab.IotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  type AlibabaAdlabIotDevice = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_IotDevice', content?: string | Alibaba.Adlab.IotDevice } };
  /** {@link Alibaba.Adlab.OrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  type AlibabaAdlabOrderItemEtaUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_OrderItemEtaUpdate', content?: string | Alibaba.Adlab.OrderItemEtaUpdate } };
  /** {@link Alibaba.Adlab.OrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  type AlibabaAdlabOrderItemStatus = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_OrderItemStatus', content?: string | Alibaba.Adlab.OrderItemStatus } };
  /** {@link Alibaba.Alicom.FlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  type AlibabaAlicomFlowGiftSendNotify = Message & { content?: MessageContent & { topic?: 'alibaba_alicom_FlowGiftSendNotify', content?: string | Alibaba.Alicom.FlowGiftSendNotify } };
  /** {@link Alibaba.Alihealth.BillProcessStatusNotify 阿里健康追溯码 > 单据处理状态通知} */
  type AlibabaAlihealthBillProcessStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_BillProcessStatusNotify', content?: string | Alibaba.Alihealth.BillProcessStatusNotify } };
  /** {@link Alibaba.Alihealth.DoctorMessage 阿里健康追溯码 > 医生、服务相关消息} */
  type AlibabaAlihealthDoctorMessage = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_DoctorMessage', content?: string | Alibaba.Alihealth.DoctorMessage } };
  /** {@link Alibaba.Alihealth.NrmopOrderStatusChange 阿里健康追溯码 > 中台订单状态变化推送} */
  type AlibabaAlihealthNrmopOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_NrmopOrderStatusChange', content?: string | Alibaba.Alihealth.NrmopOrderStatusChange } };
  /** {@link Alibaba.Alihealth.OrderStatusChange 阿里健康追溯码 > 平台通知三方机构"订单状态变更"} */
  type AlibabaAlihealthOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_OrderStatusChange', content?: string | Alibaba.Alihealth.OrderStatusChange } };
  /** {@link Alibaba.Alihealth.TradeOrderStatusChange 阿里健康追溯码 > O2O订单状态变更通知} */
  type AlibabaAlihealthTradeOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_TradeOrderStatusChange', content?: string | Alibaba.Alihealth.TradeOrderStatusChange } };
  /** {@link Alibaba.Alihealth.TradeVaccineSubscribeChange 阿里健康追溯码 > 疫苗交易预约信息变动} */
  type AlibabaAlihealthTradeVaccineSubscribeChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_TradeVaccineSubscribeChange', content?: string | Alibaba.Alihealth.TradeVaccineSubscribeChange } };
  /** {@link Alibaba.Alihealth.VcRegisterCancel 阿里健康追溯码 > 用户取消订阅缺苗登记同步isv} */
  type AlibabaAlihealthVcRegisterCancel = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_VcRegisterCancel', content?: string | Alibaba.Alihealth.VcRegisterCancel } };
  /** {@link Alibaba.Alink.DeviceDataPush 阿里物联 > 设备数据推送} */
  type AlibabaAlinkDeviceDataPush = Message & { content?: MessageContent & { topic?: 'alibaba_alink_DeviceDataPush', content?: string | Alibaba.Alink.DeviceDataPush } };
  /** {@link Alibaba.Alink.DeviceMessage 阿里物联 > 设备报警消息} */
  type AlibabaAlinkDeviceMessage = Message & { content?: MessageContent & { topic?: 'alibaba_alink_DeviceMessage', content?: string | Alibaba.Alink.DeviceMessage } };
  /** {@link Alibaba.Aliqin.DigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  type AlibabaAliqinDigitalSmsTemplateDR = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_DigitalSmsTemplateDR', content?: string | Alibaba.Aliqin.DigitalSmsTemplateDR } };
  /** {@link Alibaba.Aliqin.FcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  type AlibabaAliqinFcActiveIotcard = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcActiveIotcard', content?: string | Alibaba.Aliqin.FcActiveIotcard } };
  /** {@link Alibaba.Aliqin.FcCallCdr 阿里通信 > 语音呼叫结果推送} */
  type AlibabaAliqinFcCallCdr = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcCallCdr', content?: string | Alibaba.Aliqin.FcCallCdr } };
  /** {@link Alibaba.Aliqin.FcCallRecord 阿里通信 > 录音回执} */
  type AlibabaAliqinFcCallRecord = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcCallRecord', content?: string | Alibaba.Aliqin.FcCallRecord } };
  /** {@link Alibaba.Aliqin.FcFlowUp 阿里通信 > 流量直充状态报告} */
  type AlibabaAliqinFcFlowUp = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcFlowUp', content?: string | Alibaba.Aliqin.FcFlowUp } };
  /** {@link Alibaba.Aliqin.FcSmsDR 阿里通信 > 短消息发送结果报告} */
  type AlibabaAliqinFcSmsDR = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcSmsDR', content?: string | Alibaba.Aliqin.FcSmsDR } };
  /** {@link Alibaba.Aliqin.FcSmsUp 阿里通信 > 短信上行} */
  type AlibabaAliqinFcSmsUp = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcSmsUp', content?: string | Alibaba.Aliqin.FcSmsUp } };
  /** {@link Alibaba.Aliqin.FcTmpStatus 阿里通信 > 语音呼叫中间状态消息} */
  type AlibabaAliqinFcTmpStatus = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcTmpStatus', content?: string | Alibaba.Aliqin.FcTmpStatus } };
  /** {@link Alibaba.Aliqin.FlowDirectCharge 阿里通信 > 流量直充} */
  type AlibabaAliqinFlowDirectCharge = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FlowDirectCharge', content?: string | Alibaba.Aliqin.FlowDirectCharge } };
  /** {@link Alibaba.Aliqin.IotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  type AlibabaAliqinIotPersonalConfirmNotice = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_IotPersonalConfirmNotice', content?: string | Alibaba.Aliqin.IotPersonalConfirmNotice } };
  /** {@link Alibaba.Aliqin.IotStatusNotice 阿里通信 > 物联网停机消息通知} */
  type AlibabaAliqinIotStatusNotice = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_IotStatusNotice', content?: string | Alibaba.Aliqin.IotStatusNotice } };
  /** {@link Alibaba.Aliqin.TaFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  type AlibabaAliqinTaFcCallCdr = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_TaFcCallCdr', content?: string | Alibaba.Aliqin.TaFcCallCdr } };
  /** {@link Alibaba.Aliqin.TaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  type AlibabaAliqinTaFcSmsDR = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_TaFcSmsDR', content?: string | Alibaba.Aliqin.TaFcSmsDR } };
  /** {@link Alibaba.Einvoice.ApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  type AlibabaEinvoiceApplyUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_ApplyUpdate', content?: string | Alibaba.Einvoice.ApplyUpdate } };
  /** {@link Alibaba.Einvoice.CompanyDoAction 电子发票 > 商户事件触发消息} */
  type AlibabaEinvoiceCompanyDoAction = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_CompanyDoAction', content?: string | Alibaba.Einvoice.CompanyDoAction } };
  /** {@link Alibaba.Einvoice.OrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  type AlibabaEinvoiceOrderRefundResult = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_OrderRefundResult', content?: string | Alibaba.Einvoice.OrderRefundResult } };
  /** {@link Alibaba.Einvoice.RegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  type AlibabaEinvoiceRegisterFlowChange = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_RegisterFlowChange', content?: string | Alibaba.Einvoice.RegisterFlowChange } };
  /** {@link Alibaba.Einvoice.RegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  type AlibabaEinvoiceRegisterFlowCreate = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_RegisterFlowCreate', content?: string | Alibaba.Einvoice.RegisterFlowCreate } };
  /** {@link Alibaba.Einvoice.TaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  type AlibabaEinvoiceTaxDeviceOrder = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_TaxDeviceOrder', content?: string | Alibaba.Einvoice.TaxDeviceOrder } };
  /** {@link Alibaba.Fuwu.OrderPaid 1688服务市场 > 订单支付消息} */
  type AlibabaFuwuOrderPaid = Message & { content?: MessageContent & { topic?: 'alibaba_fuwu_OrderPaid', content?: string | Alibaba.Fuwu.OrderPaid } };
  /** {@link Alibaba.Happytrip.OrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  type AlibabaHappytripOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_happytrip_OrderNotify', content?: string | Alibaba.Happytrip.OrderNotify } };
  /** {@link Alibaba.Ifp.PackageCfcContainer 五道口配送 > 同城履约包裹状态变更消息} */
  type AlibabaIfpPackageCfcContainer = Message & { content?: MessageContent & { topic?: 'alibaba_ifp_PackageCfcContainer', content?: string | Alibaba.Ifp.PackageCfcContainer } };
  /** {@link Alibaba.Invoice.Apply 电子发票 > 开票申请} */
  type AlibabaInvoiceApply = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Apply', content?: string | Alibaba.Invoice.Apply } };
  /** {@link Alibaba.Invoice.ApplyResult 电子发票 > 开票申请审核结果} */
  type AlibabaInvoiceApplyResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ApplyResult', content?: string | Alibaba.Invoice.ApplyResult } };
  /** {@link Alibaba.Invoice.DiskOffline 电子发票 > 税盘下架单新增和更新通知} */
  type AlibabaInvoiceDiskOffline = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_DiskOffline', content?: string | Alibaba.Invoice.DiskOffline } };
  /** {@link Alibaba.Invoice.FlowBuket 电子发票 > 资源包开通/订购记录同步} */
  type AlibabaInvoiceFlowBuket = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_FlowBuket', content?: string | Alibaba.Invoice.FlowBuket } };
  /** {@link Alibaba.Invoice.GetXmlFile 电子发票 > 获取xml发票文件} */
  type AlibabaInvoiceGetXmlFile = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_GetXmlFile', content?: string | Alibaba.Invoice.GetXmlFile } };
  /** {@link Alibaba.Invoice.InvoiceApply 电子发票 > 税控服务开票申请} */
  type AlibabaInvoiceInvoiceApply = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_InvoiceApply', content?: string | Alibaba.Invoice.InvoiceApply } };
  /** {@link Alibaba.Invoice.Logistics 电子发票 > 发票对外通知物流信息} */
  type AlibabaInvoiceLogistics = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Logistics', content?: string | Alibaba.Invoice.Logistics } };
  /** {@link Alibaba.Invoice.PaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）} */
  type AlibabaInvoicePaperOpsReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_PaperOpsReturn', content?: string | Alibaba.Invoice.PaperOpsReturn } };
  /** {@link Alibaba.Invoice.PreConsulting 电子发票 > 电子发票售前咨询} */
  type AlibabaInvoicePreConsulting = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_PreConsulting', content?: string | Alibaba.Invoice.PreConsulting } };
  /** {@link Alibaba.Invoice.Query 电子发票 > 数据查询请求} */
  type AlibabaInvoiceQuery = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Query', content?: string | Alibaba.Invoice.Query } };
  /** {@link Alibaba.Invoice.QueryInvoice 电子发票 > 查询发票信息} */
  type AlibabaInvoiceQueryInvoice = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_QueryInvoice', content?: string | Alibaba.Invoice.QueryInvoice } };
  /** {@link Alibaba.Invoice.Regist 电子发票 > 入驻阿里发票平台} */
  type AlibabaInvoiceRegist = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Regist', content?: string | Alibaba.Invoice.Regist } };
  /** {@link Alibaba.Invoice.ResultReturn 电子发票 > 开票请求结果} */
  type AlibabaInvoiceResultReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ResultReturn', content?: string | Alibaba.Invoice.ResultReturn } };
  /** {@link Alibaba.Invoice.StatusChange 电子发票 > 发票状态变更消息} */
  type AlibabaInvoiceStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_StatusChange', content?: string | Alibaba.Invoice.StatusChange } };
  /** {@link Alibaba.Invoice.TaxChange 电子发票 > 商家税号变更} */
  type AlibabaInvoiceTaxChange = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_TaxChange', content?: string | Alibaba.Invoice.TaxChange } };
  /** {@link Alibaba.Invoice.Unissue 电子发票 > 创建未开具发票通知} */
  type AlibabaInvoiceUnissue = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Unissue', content?: string | Alibaba.Invoice.Unissue } };
  /** {@link Alibaba.Lst.BmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化} */
  type AlibabaLstBmOrderLogisticsChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_BmOrderLogisticsChange', content?: string | Alibaba.Lst.BmOrderLogisticsChange } };
  /** {@link Alibaba.Lst.BroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  type AlibabaLstBroadcastSelfOrderShipChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_BroadcastSelfOrderShipChange', content?: string | Alibaba.Lst.BroadcastSelfOrderShipChange } };
  /** {@link Alibaba.Lst.CashierSync 零售通_公共 > 收银快照同步消息} */
  type AlibabaLstCashierSync = Message & { content?: MessageContent & { topic?: 'alibaba_lst_CashierSync', content?: string | Alibaba.Lst.CashierSync } };
  /** {@link Alibaba.Lst.GoodsSync 零售通_公共 > 商品同步消息} */
  type AlibabaLstGoodsSync = Message & { content?: MessageContent & { topic?: 'alibaba_lst_GoodsSync', content?: string | Alibaba.Lst.GoodsSync } };
  /** {@link Alibaba.Lst.InventorySync 零售通_公共 > 商品库存修改同步消息} */
  type AlibabaLstInventorySync = Message & { content?: MessageContent & { topic?: 'alibaba_lst_InventorySync', content?: string | Alibaba.Lst.InventorySync } };
  /** {@link Alibaba.Lst.MsgTest 零售通_公共 > 消息测试} */
  type AlibabaLstMsgTest = Message & { content?: MessageContent & { topic?: 'alibaba_lst_MsgTest', content?: string | Alibaba.Lst.MsgTest } };
  /** {@link Alibaba.Lst.OrderChange 零售通_公共 > 零售通交易订单变更消息} */
  type AlibabaLstOrderChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_OrderChange', content?: string | Alibaba.Lst.OrderChange } };
  /** {@link Alibaba.Lst.RefundChange 零售通_公共 > 订单退单} */
  type AlibabaLstRefundChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_RefundChange', content?: string | Alibaba.Lst.RefundChange } };
  /** {@link Alibaba.Lst.SpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  type AlibabaLstSpeakerAdvertPlayRecord = Message & { content?: MessageContent & { topic?: 'alibaba_lst_SpeakerAdvertPlayRecord', content?: string | Alibaba.Lst.SpeakerAdvertPlayRecord } };
  /** {@link Alibaba.Lst.SupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  type AlibabaLstSupplierOrderChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_SupplierOrderChange', content?: string | Alibaba.Lst.SupplierOrderChange } };
  /** {@link Alibaba.Mmc.OpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息} */
  type AlibabaMmcOpenStockAlterNotify = Message & { content?: MessageContent & { topic?: 'alibaba_mmc_OpenStockAlterNotify', content?: string | Alibaba.Mmc.OpenStockAlterNotify } };
  /** {@link Alibaba.Mmc.OpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息} */
  type AlibabaMmcOpenStockItemAlter = Message & { content?: MessageContent & { topic?: 'alibaba_mmc_OpenStockItemAlter', content?: string | Alibaba.Mmc.OpenStockItemAlter } };
  /** {@link Alibaba.Mmc.OrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息} */
  type AlibabaMmcOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_mmc_OrderNotify', content?: string | Alibaba.Mmc.OrderNotify } };
  /** {@link Alibaba.Mmc.PriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息} */
  type AlibabaMmcPriceUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_mmc_PriceUpdate', content?: string | Alibaba.Mmc.PriceUpdate } };
  /** {@link Alibaba.Mmc.RefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息} */
  type AlibabaMmcRefundOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_mmc_RefundOrderNotify', content?: string | Alibaba.Mmc.RefundOrderNotify } };
  /** {@link Alibaba.Monitor.EventSendMessage 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  type AlibabaMonitorEventSendMessage = Message & { content?: MessageContent & { topic?: 'alibaba_monitor_EventSendMessage', content?: string | Alibaba.Monitor.EventSendMessage } };
  /** {@link Alibaba.Monitor.MessageSend 聚石塔监控告警 > 聚石塔监控告警消息投递} */
  type AlibabaMonitorMessageSend = Message & { content?: MessageContent & { topic?: 'alibaba_monitor_MessageSend', content?: string | Alibaba.Monitor.MessageSend } };
  /** {@link Alibaba.Mos.SaleOrder 银泰开放平台消息 > 销售单状态变更} */
  type AlibabaMosSaleOrder = Message & { content?: MessageContent & { topic?: 'alibaba_mos_SaleOrder', content?: string | Alibaba.Mos.SaleOrder } };
  /** {@link Alibaba.Mos.SaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  type AlibabaMosSaleOrderRefund = Message & { content?: MessageContent & { topic?: 'alibaba_mos_SaleOrderRefund', content?: string | Alibaba.Mos.SaleOrderRefund } };
  /** {@link Alibaba.Msd.SettlementBillDetail 天猫服务 > 喵速达服务供应链结算单明细消息} */
  type AlibabaMsdSettlementBillDetail = Message & { content?: MessageContent & { topic?: 'alibaba_msd_SettlementBillDetail', content?: string | Alibaba.Msd.SettlementBillDetail } };
  /** {@link Alibaba.Msfservice.AuditCreate 天猫服务 > 喵师傅审核单通知} */
  type AlibabaMsfserviceAuditCreate = Message & { content?: MessageContent & { topic?: 'alibaba_msfservice_AuditCreate', content?: string | Alibaba.Msfservice.AuditCreate } };
  /** {@link Alibaba.Msfservice.ExtrafeeRecordCreate 天猫服务 > 喵师傅收费单消息通知} */
  type AlibabaMsfserviceExtrafeeRecordCreate = Message & { content?: MessageContent & { topic?: 'alibaba_msfservice_ExtrafeeRecordCreate', content?: string | Alibaba.Msfservice.ExtrafeeRecordCreate } };
  /** {@link Alibaba.Msfservice.ReminderCreate 天猫服务 > 催单消息} */
  type AlibabaMsfserviceReminderCreate = Message & { content?: MessageContent & { topic?: 'alibaba_msfservice_ReminderCreate', content?: string | Alibaba.Msfservice.ReminderCreate } };
  /** {@link Alibaba.Nazca.AbandonCert 网上法庭 > 作废存证消息接口} */
  type AlibabaNazcaAbandonCert = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_AbandonCert', content?: string | Alibaba.Nazca.AbandonCert } };
  /** {@link Alibaba.Nazca.QueryChargeNum 网上法庭 > 查询收费数量} */
  type AlibabaNazcaQueryChargeNum = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_QueryChargeNum', content?: string | Alibaba.Nazca.QueryChargeNum } };
  /** {@link Alibaba.Nazca.SaveCert 网上法庭 > 发起存证消息接口} */
  type AlibabaNazcaSaveCert = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_SaveCert', content?: string | Alibaba.Nazca.SaveCert } };
  /** {@link Alibaba.Nazca.UpdateChargeNum 网上法庭 > 更新收费数量} */
  type AlibabaNazcaUpdateChargeNum = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_UpdateChargeNum', content?: string | Alibaba.Nazca.UpdateChargeNum } };
  /** {@link Alibaba.Nlife.BToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  type AlibabaNlifeBToBTradeStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BToBTradeStatusNotify', content?: string | Alibaba.Nlife.BToBTradeStatusNotify } };
  /** {@link Alibaba.Nlife.BToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  type AlibabaNlifeBToCTradeOrderSync = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BToCTradeOrderSync', content?: string | Alibaba.Nlife.BToCTradeOrderSync } };
  /** {@link Alibaba.Nlife.BtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  type AlibabaNlifeBtoBTradeDeliverNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtoBTradeDeliverNotify', content?: string | Alibaba.Nlife.BtoBTradeDeliverNotify } };
  /** {@link Alibaba.Nlife.BtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  type AlibabaNlifeBtoBTradeEffectiveNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtoBTradeEffectiveNotify', content?: string | Alibaba.Nlife.BtoBTradeEffectiveNotify } };
  /** {@link Alibaba.Nlife.BtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  type AlibabaNlifeBtobTradeRefundConfirmMsgNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtobTradeRefundConfirmMsgNotify', content?: string | Alibaba.Nlife.BtobTradeRefundConfirmMsgNotify } };
  /** {@link Alibaba.Nlife.BtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  type AlibabaNlifeBtobTradeRefundNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtobTradeRefundNotify', content?: string | Alibaba.Nlife.BtobTradeRefundNotify } };
  /** {@link Alibaba.Nlife.InstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  type AlibabaNlifeInstorageDiffAuditNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_InstorageDiffAuditNotify', content?: string | Alibaba.Nlife.InstorageDiffAuditNotify } };
  /** {@link Alibaba.Nlife.ItemUpdate 零售plus > 零售+商品变动消息} */
  type AlibabaNlifeItemUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_ItemUpdate', content?: string | Alibaba.Nlife.ItemUpdate } };
  /** {@link Alibaba.Pur.ResourceOrderCancelNotify 信息平台-采购 > 取消订单结果通知} */
  type AlibabaPurResourceOrderCancelNotify = Message & { content?: MessageContent & { topic?: 'alibaba_pur_ResourceOrderCancelNotify', content?: string | Alibaba.Pur.ResourceOrderCancelNotify } };
  /** {@link Alibaba.Pur.ResourceOrderShipNotify 信息平台-采购 > 发货提醒} */
  type AlibabaPurResourceOrderShipNotify = Message & { content?: MessageContent & { topic?: 'alibaba_pur_ResourceOrderShipNotify', content?: string | Alibaba.Pur.ResourceOrderShipNotify } };
  /** {@link Alibaba.Serviceplatform.FulfilTask 天猫服务 > 服务供应链核销单消息} */
  type AlibabaServiceplatformFulfilTask = Message & { content?: MessageContent & { topic?: 'alibaba_serviceplatform_FulfilTask', content?: string | Alibaba.Serviceplatform.FulfilTask } };
  /** {@link Alibaba.Serviceplatform.ServiceOrder 天猫服务 > 服务供应链服务单消息} */
  type AlibabaServiceplatformServiceOrder = Message & { content?: MessageContent & { topic?: 'alibaba_serviceplatform_ServiceOrder', content?: string | Alibaba.Serviceplatform.ServiceOrder } };
  /** {@link Alibaba.Sp.NotifyPaymentResult 阿里智付 > 通知付款结果} */
  type AlibabaSpNotifyPaymentResult = Message & { content?: MessageContent & { topic?: 'alibaba_sp_NotifyPaymentResult', content?: string | Alibaba.Sp.NotifyPaymentResult } };
  /** {@link Alibaba.Tax.EmployeeSignResult 阿里发票 > 税优雇员签约结果消息} */
  type AlibabaTaxEmployeeSignResult = Message & { content?: MessageContent & { topic?: 'alibaba_tax_EmployeeSignResult', content?: string | Alibaba.Tax.EmployeeSignResult } };
  /** {@link Alibaba.Tax.SalaryPayResult 阿里发票 > 税优发薪结果通知} */
  type AlibabaTaxSalaryPayResult = Message & { content?: MessageContent & { topic?: 'alibaba_tax_SalaryPayResult', content?: string | Alibaba.Tax.SalaryPayResult } };
  /** {@link Alibaba.Tianji.ContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  type AlibabaTianjiContractOrder = Message & { content?: MessageContent & { topic?: 'alibaba_tianji_ContractOrder', content?: string | Alibaba.Tianji.ContractOrder } };
  /** {@link Alibaba.Tianji.OrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  type AlibabaTianjiOrderCreate = Message & { content?: MessageContent & { topic?: 'alibaba_tianji_OrderCreate', content?: string | Alibaba.Tianji.OrderCreate } };
  /** {@link Alibaba.Wdk.ChannelCommentAudit 五道口订单 > 差评回评} */
  type AlibabaWdkChannelCommentAudit = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ChannelCommentAudit', content?: string | Alibaba.Wdk.ChannelCommentAudit } };
  /** {@link Alibaba.Wdk.ChannelOrderCancel 五道口订单 > 五道口售中取消外部订单消息} */
  type AlibabaWdkChannelOrderCancel = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ChannelOrderCancel', content?: string | Alibaba.Wdk.ChannelOrderCancel } };
  /** {@link Alibaba.Wdk.ChannelOrderCsRefundAudit 五道口订单 > 客服审核退款结果} */
  type AlibabaWdkChannelOrderCsRefundAudit = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ChannelOrderCsRefundAudit', content?: string | Alibaba.Wdk.ChannelOrderCsRefundAudit } };
  /** {@link Alibaba.Wdk.ChannelOrderCsUserrefund 五道口订单 > 客服代客发起售后退款(整单/部分)} */
  type AlibabaWdkChannelOrderCsUserrefund = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ChannelOrderCsUserrefund', content?: string | Alibaba.Wdk.ChannelOrderCsUserrefund } };
  /** {@link Alibaba.Wdk.ChannelOrderStatusChange 五道口订单 > 订单状态变更消息} */
  type AlibabaWdkChannelOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ChannelOrderStatusChange', content?: string | Alibaba.Wdk.ChannelOrderStatusChange } };
  /** {@link Alibaba.Wdk.ChannelStockSync 五道口订单 > 库存同步} */
  type AlibabaWdkChannelStockSync = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ChannelStockSync', content?: string | Alibaba.Wdk.ChannelStockSync } };
  /** {@link Alibaba.Wdk.FulfillOrderChange 五道口订单 > 售中履约变更消息} */
  type AlibabaWdkFulfillOrderChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_FulfillOrderChange', content?: string | Alibaba.Wdk.FulfillOrderChange } };
  /** {@link Alibaba.Wdk.StoreItemUpdate 五道口订单 > 商家渠道商品变动消息} */
  type AlibabaWdkStoreItemUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_StoreItemUpdate', content?: string | Alibaba.Wdk.StoreItemUpdate } };
  /** {@link Alibaba.Wdkitem.WarehouseSkuModify 五道口商品 > 五道口仓商品变更消息} */
  type AlibabaWdkitemWarehouseSkuModify = Message & { content?: MessageContent & { topic?: 'alibaba_wdkitem_WarehouseSkuModify', content?: string | Alibaba.Wdkitem.WarehouseSkuModify } };
  /** {@link Alibaba.Wdkop.RexAccountChange 五道口订单 > Rex用户信息变更消息} */
  type AlibabaWdkopRexAccountChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdkop_RexAccountChange', content?: string | Alibaba.Wdkop.RexAccountChange } };
  /** {@link Alibaba.Wdkopen.OrderMessage 五道口订单 > 五道口交易状态变更消息通知} */
  type AlibabaWdkopenOrderMessage = Message & { content?: MessageContent & { topic?: 'alibaba_wdkopen_OrderMessage', content?: string | Alibaba.Wdkopen.OrderMessage } };
  /** {@link Alibaba.Wdkopen.PriceAdjust 五道口订单 > 采购价变更消息} */
  type AlibabaWdkopenPriceAdjust = Message & { content?: MessageContent & { topic?: 'alibaba_wdkopen_PriceAdjust', content?: string | Alibaba.Wdkopen.PriceAdjust } };
  /** {@link Alibaba.Wdkopen.RefundMessage 五道口订单 > 同城零售逆向交易消息} */
  type AlibabaWdkopenRefundMessage = Message & { content?: MessageContent & { topic?: 'alibaba_wdkopen_RefundMessage', content?: string | Alibaba.Wdkopen.RefundMessage } };
  /** {@link Alibaba.Wdkorder.FulfillStatusChange 五道口订单 > 五道口订单履约状态变更消息} */
  type AlibabaWdkorderFulfillStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_FulfillStatusChange', content?: string | Alibaba.Wdkorder.FulfillStatusChange } };
  /** {@link Alibaba.Wdkorder.InsuranceOrder 五道口订单 > 共享库存保险正向投保消息} */
  type AlibabaWdkorderInsuranceOrder = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_InsuranceOrder', content?: string | Alibaba.Wdkorder.InsuranceOrder } };
  /** {@link Alibaba.Wdkorder.InsuranceRefund 五道口订单 > 共享库存保险逆向理赔消息} */
  type AlibabaWdkorderInsuranceRefund = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_InsuranceRefund', content?: string | Alibaba.Wdkorder.InsuranceRefund } };
  /** {@link Alibaba.Wdkorder.OrderFulfillPush 五道口订单 > 订单履约状态变更消息} */
  type AlibabaWdkorderOrderFulfillPush = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_OrderFulfillPush', content?: string | Alibaba.Wdkorder.OrderFulfillPush } };
  /** {@link Alibaba.Wdkorder.OrderFulfillTokenPush 五道口订单 > 履约状态变更消息} */
  type AlibabaWdkorderOrderFulfillTokenPush = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_OrderFulfillTokenPush', content?: string | Alibaba.Wdkorder.OrderFulfillTokenPush } };
  /** {@link Alibaba.Wdkorder.OrderStatusPush 五道口订单 > 猫超订单数据变更消息通知} */
  type AlibabaWdkorderOrderStatusPush = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_OrderStatusPush', content?: string | Alibaba.Wdkorder.OrderStatusPush } };
  /** {@link Alibaba.Wdkorder.RefundOrgPoint 五道口订单 > 逆向单企业积分消息发送} */
  type AlibabaWdkorderRefundOrgPoint = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_RefundOrgPoint', content?: string | Alibaba.Wdkorder.RefundOrgPoint } };
  /** {@link Alibaba.Wdkorder.RefundSuccess 五道口订单 > 五道口淘鲜达逆向订单消息} */
  type AlibabaWdkorderRefundSuccess = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_RefundSuccess', content?: string | Alibaba.Wdkorder.RefundSuccess } };
  /** {@link Alibaba.Wdkorder.SoPo 五道口订单 > 共享库存SOPO} */
  type AlibabaWdkorderSoPo = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_SoPo', content?: string | Alibaba.Wdkorder.SoPo } };
  /** {@link Alibaba.Wdkorder.StatusChange 五道口订单 > 五道口订单状态变更消息} */
  type AlibabaWdkorderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_StatusChange', content?: string | Alibaba.Wdkorder.StatusChange } };
  /** {@link Alibaba.Wdkorder.VoucherStatus 五道口订单 > 淘鲜达订单优惠券状态变更} */
  type AlibabaWdkorderVoucherStatus = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_VoucherStatus', content?: string | Alibaba.Wdkorder.VoucherStatus } };
  /** {@link Alibaba.Wdktrade.CouponInstance 五道口营销 > 营销券实例消息} */
  type AlibabaWdktradeCouponInstance = Message & { content?: MessageContent & { topic?: 'alibaba_wdktrade_CouponInstance', content?: string | Alibaba.Wdktrade.CouponInstance } };
  /** {@link Alibaba.Yunio.DataTransfer 平台消息 > YunIO数据流转} */
  type AlibabaYunioDataTransfer = Message & { content?: MessageContent & { topic?: 'alibaba_yunio_DataTransfer', content?: string | Alibaba.Yunio.DataTransfer } };
  /** {@link Alicom.Axb.SubsEventSync 阿里通信 > 绑定事件同步} */
  type AlicomAxbSubsEventSync = Message & { content?: MessageContent & { topic?: 'alicom_axb_SubsEventSync', content?: string | Alicom.Axb.SubsEventSync } };
  /** {@link Aliexpress.Aeia.TaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  type AliexpressAeiaTaskplatformInterestNotice = Message & { content?: MessageContent & { topic?: 'aliexpress_aeia_TaskplatformInterestNotice', content?: string | Aliexpress.Aeia.TaskplatformInterestNotice } };
  /** {@link Aliexpress.Order.Finish AE-交易 > 交易成功} */
  type AliexpressOrderFinish = Message & { content?: MessageContent & { topic?: 'aliexpress_order_Finish', content?: string | Aliexpress.Order.Finish } };
  /** {@link Aliexpress.Order.FundProcessing AE-交易 > 资金处理中} */
  type AliexpressOrderFundProcessing = Message & { content?: MessageContent & { topic?: 'aliexpress_order_FundProcessing', content?: string | Aliexpress.Order.FundProcessing } };
  /** {@link Aliexpress.Order.InCancel AE-交易 > 取消订单中} */
  type AliexpressOrderInCancel = Message & { content?: MessageContent & { topic?: 'aliexpress_order_InCancel', content?: string | Aliexpress.Order.InCancel } };
  /** {@link Aliexpress.Order.PlaceOrderSuccess AE-交易 > 下单成功} */
  type AliexpressOrderPlaceOrderSuccess = Message & { content?: MessageContent & { topic?: 'aliexpress_order_PlaceOrderSuccess', content?: string | Aliexpress.Order.PlaceOrderSuccess } };
  /** {@link Aliexpress.Order.RiskControl AE-交易 > 风控24小时} */
  type AliexpressOrderRiskControl = Message & { content?: MessageContent & { topic?: 'aliexpress_order_RiskControl', content?: string | Aliexpress.Order.RiskControl } };
  /** {@link Aliexpress.Order.SellerPartSendGoods AE-交易 > 等待部分发货} */
  type AliexpressOrderSellerPartSendGoods = Message & { content?: MessageContent & { topic?: 'aliexpress_order_SellerPartSendGoods', content?: string | Aliexpress.Order.SellerPartSendGoods } };
  /** {@link Aliexpress.Order.WaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  type AliexpressOrderWaitBuyerAcceptGoods = Message & { content?: MessageContent & { topic?: 'aliexpress_order_WaitBuyerAcceptGoods', content?: string | Aliexpress.Order.WaitBuyerAcceptGoods } };
  /** {@link Aliexpress.Order.WaitGroupSuccess AE-交易 > 等待成团} */
  type AliexpressOrderWaitGroupSuccess = Message & { content?: MessageContent & { topic?: 'aliexpress_order_WaitGroupSuccess', content?: string | Aliexpress.Order.WaitGroupSuccess } };
  /** {@link Aliexpress.Order.WaitSellerExamineMoney AE-交易 > 待卖家验款} */
  type AliexpressOrderWaitSellerExamineMoney = Message & { content?: MessageContent & { topic?: 'aliexpress_order_WaitSellerExamineMoney', content?: string | Aliexpress.Order.WaitSellerExamineMoney } };
  /** {@link Aliexpress.Order.WaitSellerSendGoods AE-交易 > 等待卖家发货} */
  type AliexpressOrderWaitSellerSendGoods = Message & { content?: MessageContent & { topic?: 'aliexpress_order_WaitSellerSendGoods', content?: string | Aliexpress.Order.WaitSellerSendGoods } };
  /** {@link Alihealth.Cep.OrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  type AlihealthCepOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alihealth_cep_OrderStatusChange', content?: string | Alihealth.Cep.OrderStatusChange } };
  /** {@link Alihealth.Ys.OrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  type AlihealthYsOrderMemConsume = Message & { content?: MessageContent & { topic?: 'alihealth_ys_OrderMemConsume', content?: string | Alihealth.Ys.OrderMemConsume } };
  /** {@link Alihealth.Ys.OrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  type AlihealthYsOrderPushConsume = Message & { content?: MessageContent & { topic?: 'alihealth_ys_OrderPushConsume', content?: string | Alihealth.Ys.OrderPushConsume } };
  /** {@link Alitrip.Agent.Notify 淘宝机票 > 商家机票业务通知} */
  type AlitripAgentNotify = Message & { content?: MessageContent & { topic?: 'alitrip_agent_Notify', content?: string | Alitrip.Agent.Notify } };
  /** {@link Alitrip.Btrip.CorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  type AlitripBtripCorpSignCallback = Message & { content?: MessageContent & { topic?: 'alitrip_btrip_CorpSignCallback', content?: string | Alitrip.Btrip.CorpSignCallback } };
  /** {@link Alitrip.Btrip.ExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  type AlitripBtripExceedApplySubmit = Message & { content?: MessageContent & { topic?: 'alitrip_btrip_ExceedApplySubmit', content?: string | Alitrip.Btrip.ExceedApplySubmit } };
  /** {@link Alitrip.Flight.Change 淘宝机票 > 航变消息} */
  type AlitripFlightChange = Message & { content?: MessageContent & { topic?: 'alitrip_flight_Change', content?: string | Alitrip.Flight.Change } };
  /** {@link Alitrip.Iesr.FlightChange 淘宝机票 > 航变数据推送} */
  type AlitripIesrFlightChange = Message & { content?: MessageContent & { topic?: 'alitrip_iesr_FlightChange', content?: string | Alitrip.Iesr.FlightChange } };
  /** {@link Alitrip.Iesr.TicketMessage 淘宝机票 > 国际运价采购票消息} */
  type AlitripIesrTicketMessage = Message & { content?: MessageContent & { topic?: 'alitrip_iesr_TicketMessage', content?: string | Alitrip.Iesr.TicketMessage } };
  /** {@link Alitrip.Ietrade.ChangeMsg 淘宝机票 > 国际机票改签订单状态消息} */
  type AlitripIetradeChangeMsg = Message & { content?: MessageContent & { topic?: 'alitrip_ietrade_ChangeMsg', content?: string | Alitrip.Ietrade.ChangeMsg } };
  /** {@link Alitrip.Ietrade.OrderMsg 淘宝机票 > 国际机票订单消息} */
  type AlitripIetradeOrderMsg = Message & { content?: MessageContent & { topic?: 'alitrip_ietrade_OrderMsg', content?: string | Alitrip.Ietrade.OrderMsg } };
  /** {@link Alitrip.Ietrade.RefundMsg 淘宝机票 > 国际机票退票订单状态消息} */
  type AlitripIetradeRefundMsg = Message & { content?: MessageContent & { topic?: 'alitrip_ietrade_RefundMsg', content?: string | Alitrip.Ietrade.RefundMsg } };
  /** {@link Alitrip.Train.AgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  type AlitripTrainAgentStopQuery = Message & { content?: MessageContent & { topic?: 'alitrip_train_AgentStopQuery', content?: string | Alitrip.Train.AgentStopQuery } };
  /** {@link Alitrip.Train.RiskNotify 淘宝火车票 > 飞猪火车票风控消息} */
  type AlitripTrainRiskNotify = Message & { content?: MessageContent & { topic?: 'alitrip_train_RiskNotify', content?: string | Alitrip.Train.RiskNotify } };
  /** {@link Alitrip.Travel.OrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息} */
  type AlitripTravelOrderChanged = Message & { content?: MessageContent & { topic?: 'alitrip_travel_OrderChanged', content?: string | Alitrip.Travel.OrderChanged } };
  /** {@link Alitrip.Travel.PersonChanged 航旅度假交易 > 出行人信息变更消息} */
  type AlitripTravelPersonChanged = Message & { content?: MessageContent & { topic?: 'alitrip_travel_PersonChanged', content?: string | Alitrip.Travel.PersonChanged } };
  /** {@link Alitrip.Travel.VisaService 航旅度假交易 > 签证消息服务} */
  type AlitripTravelVisaService = Message & { content?: MessageContent & { topic?: 'alitrip_travel_VisaService', content?: string | Alitrip.Travel.VisaService } };
  /** {@link Alitrip.Tripticket.TravellerCreate 航旅度假交易 > 旅行机票交易创建} */
  type AlitripTripticketTravellerCreate = Message & { content?: MessageContent & { topic?: 'alitrip_tripticket_TravellerCreate', content?: string | Alitrip.Tripticket.TravellerCreate } };
  /** {@link Alitrip.Visa.TradeDone 航旅度假交易 > 在线签证交易完成消息} */
  type AlitripVisaTradeDone = Message & { content?: MessageContent & { topic?: 'alitrip_visa_TradeDone', content?: string | Alitrip.Visa.TradeDone } };
  /** {@link Aliyun.Iot.OrderSync IOT-智能制造 > 天天工厂采购单同步} */
  type AliyunIotOrderSync = Message & { content?: MessageContent & { topic?: 'aliyun_iot_OrderSync', content?: string | Aliyun.Iot.OrderSync } };
  /** {@link Ascp.Insdustry.CancelInquiry 天猫服务 > 送货入户并安装取消询价接口} */
  type AscpInsdustryCancelInquiry = Message & { content?: MessageContent & { topic?: 'ascp_insdustry_CancelInquiry', content?: string | Ascp.Insdustry.CancelInquiry } };
  /** {@link Banma.Right.TradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  type BanmaRightTradeCreate = Message & { content?: MessageContent & { topic?: 'banma_right_TradeCreate', content?: string | Banma.Right.TradeCreate } };
  /** {@link Cainiao.Consignplatform.LogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  type CainiaoConsignplatformLogisiticsDetail = Message & { content?: MessageContent & { topic?: 'cainiao_consignplatform_LogisiticsDetail', content?: string | Cainiao.Consignplatform.LogisiticsDetail } };
  /** {@link Cainiao.Iot.AftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  type CainiaoIotAftersalesTicket = Message & { content?: MessageContent & { topic?: 'cainiao_iot_AftersalesTicket', content?: string | Cainiao.Iot.AftersalesTicket } };
  /** {@link Damai.Distribution.PerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  type DamaiDistributionPerformCancel = Message & { content?: MessageContent & { topic?: 'damai_distribution_PerformCancel', content?: string | Damai.Distribution.PerformCancel } };
  /** {@link Damai.Distribution.PerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  type DamaiDistributionPerformStatus = Message & { content?: MessageContent & { topic?: 'damai_distribution_PerformStatus', content?: string | Damai.Distribution.PerformStatus } };
  /** {@link Damai.Distribution.PreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  type DamaiDistributionPreSaleToNow = Message & { content?: MessageContent & { topic?: 'damai_distribution_PreSaleToNow', content?: string | Damai.Distribution.PreSaleToNow } };
  /** {@link Damai.Distribution.ProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  type DamaiDistributionProjectStatus = Message & { content?: MessageContent & { topic?: 'damai_distribution_ProjectStatus', content?: string | Damai.Distribution.ProjectStatus } };
  /** {@link Damai.Distribution.RefundOrder 大麦第三方票务供应商接入 > 退票通知} */
  type DamaiDistributionRefundOrder = Message & { content?: MessageContent & { topic?: 'damai_distribution_RefundOrder', content?: string | Damai.Distribution.RefundOrder } };
  /** {@link Damai.Distribution.TicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  type DamaiDistributionTicketItemStatus = Message & { content?: MessageContent & { topic?: 'damai_distribution_TicketItemStatus', content?: string | Damai.Distribution.TicketItemStatus } };
  /** {@link Damai.Trade.TicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  type DamaiTradeTicketStatusPush = Message & { content?: MessageContent & { topic?: 'damai_trade_TicketStatusPush', content?: string | Damai.Trade.TicketStatusPush } };
  /** {@link Fliggy.Btrip.HotelDistributionOrderChange 商旅API > 订单状态变化} */
  type FliggyBtripHotelDistributionOrderChange = Message & { content?: MessageContent & { topic?: 'fliggy_btrip_HotelDistributionOrderChange', content?: string | Fliggy.Btrip.HotelDistributionOrderChange } };
  /** {@link Fliggy.Jipiao.FlightChange 淘宝机票 > 航变消息服务} */
  type FliggyJipiaoFlightChange = Message & { content?: MessageContent & { topic?: 'fliggy_jipiao_FlightChange', content?: string | Fliggy.Jipiao.FlightChange } };
  /** {@link Fliggy.Ticket.OrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  type FliggyTicketOrderRefund = Message & { content?: MessageContent & { topic?: 'fliggy_ticket_OrderRefund', content?: string | Fliggy.Ticket.OrderRefund } };
  /** {@link Fliggy.Ticket.OrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  type FliggyTicketOrderStatusChange = Message & { content?: MessageContent & { topic?: 'fliggy_ticket_OrderStatusChange', content?: string | Fliggy.Ticket.OrderStatusChange } };
  /** {@link Fliggy.Ticket.VerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  type FliggyTicketVerifyNotify = Message & { content?: MessageContent & { topic?: 'fliggy_ticket_VerifyNotify', content?: string | Fliggy.Ticket.VerifyNotify } };
  /** {@link Fuwu.Confirm.Fail 服务市场 > 收入确认失败} */
  type FuwuConfirmFail = Message & { content?: MessageContent & { topic?: 'fuwu_confirm_Fail', content?: string | Fuwu.Confirm.Fail } };
  /** {@link Fuwu.Confirm.Success 服务市场 > 收入确认成功} */
  type FuwuConfirmSuccess = Message & { content?: MessageContent & { topic?: 'fuwu_confirm_Success', content?: string | Fuwu.Confirm.Success } };
  /** {@link Gov.Auction.PushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  type GovAuctionPushVehicleDataToBM = Message & { content?: MessageContent & { topic?: 'gov_auction_PushVehicleDataToBM', content?: string | Gov.Auction.PushVehicleDataToBM } };
  /** {@link Gov.Auction.VehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  type GovAuctionVehicleDataPush = Message & { content?: MessageContent & { topic?: 'gov_auction_VehicleDataPush', content?: string | Gov.Auction.VehicleDataPush } };
  /** {@link Idle.Agreement.StatusChange 闲鱼 > 闲鱼代扣消息通知} */
  type IdleAgreementStatusChange = Message & { content?: MessageContent & { topic?: 'idle_agreement_StatusChange', content?: string | Idle.Agreement.StatusChange } };
  /** {@link Idle.Appraiseisv.ItemSyn 闲鱼已验货 > 已验货商品消息} */
  type IdleAppraiseisvItemSyn = Message & { content?: MessageContent & { topic?: 'idle_appraiseisv_ItemSyn', content?: string | Idle.Appraiseisv.ItemSyn } };
  /** {@link Idle.Appraiseisv.OrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  type IdleAppraiseisvOrderSyn = Message & { content?: MessageContent & { topic?: 'idle_appraiseisv_OrderSyn', content?: string | Idle.Appraiseisv.OrderSyn } };
  /** {@link Idle.Appraiseisv.RefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  type IdleAppraiseisvRefundSyn = Message & { content?: MessageContent & { topic?: 'idle_appraiseisv_RefundSyn', content?: string | Idle.Appraiseisv.RefundSyn } };
  /** {@link Idle.Autotrade.OrderStateSync 闲鱼 > 闲鱼AutoTrade订单状态变更消息} */
  type IdleAutotradeOrderStateSync = Message & { content?: MessageContent & { topic?: 'idle_autotrade_OrderStateSync', content?: string | Idle.Autotrade.OrderStateSync } };
  /** {@link Idle.Autotrade.RefundSync 闲鱼 > 闲鱼AutoTrade逆向退款消息} */
  type IdleAutotradeRefundSync = Message & { content?: MessageContent & { topic?: 'idle_autotrade_RefundSync', content?: string | Idle.Autotrade.RefundSync } };
  /** {@link Idle.Consignment.OrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  type IdleConsignmentOrderSyn = Message & { content?: MessageContent & { topic?: 'idle_consignment_OrderSyn', content?: string | Idle.Consignment.OrderSyn } };
  /** {@link Idle.Consignmentii.OrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  type IdleConsignmentiiOrderSyn = Message & { content?: MessageContent & { topic?: 'idle_consignmentii_OrderSyn', content?: string | Idle.Consignmentii.OrderSyn } };
  /** {@link Idle.Recycle.OrderStateSyn 闲鱼回收商消息 > 闲鱼回收业务订单消息} */
  type IdleRecycleOrderStateSyn = Message & { content?: MessageContent & { topic?: 'idle_recycle_OrderStateSyn', content?: string | Idle.Recycle.OrderStateSyn } };
  /** {@link Idle.Recycle.OrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  type IdleRecycleOrderSyn = Message & { content?: MessageContent & { topic?: 'idle_recycle_OrderSyn', content?: string | Idle.Recycle.OrderSyn } };
  /** {@link Idle.Recycle.RefundStatusModify 闲鱼回收商消息 > 退款消息} */
  type IdleRecycleRefundStatusModify = Message & { content?: MessageContent & { topic?: 'idle_recycle_RefundStatusModify', content?: string | Idle.Recycle.RefundStatusModify } };
  /** {@link Idle.Topisv.GlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知} */
  type IdleTopisvGlobalProductNotice = Message & { content?: MessageContent & { topic?: 'idle_topisv_GlobalProductNotice', content?: string | Idle.Topisv.GlobalProductNotice } };
  /** {@link Idle.Topisv.ItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知} */
  type IdleTopisvItemNotice = Message & { content?: MessageContent & { topic?: 'idle_topisv_ItemNotice', content?: string | Idle.Topisv.ItemNotice } };
  /** {@link Idle.Topisv.RefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知} */
  type IdleTopisvRefundNotice = Message & { content?: MessageContent & { topic?: 'idle_topisv_RefundNotice', content?: string | Idle.Topisv.RefundNotice } };
  /** {@link Idle.Topisv.TradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知} */
  type IdleTopisvTradeNotice = Message & { content?: MessageContent & { topic?: 'idle_topisv_TradeNotice', content?: string | Idle.Topisv.TradeNotice } };
  /** {@link Idle.Tranferpay.OrderChange 闲鱼 > 直接转账交易消息} */
  type IdleTranferpayOrderChange = Message & { content?: MessageContent & { topic?: 'idle_tranferpay_OrderChange', content?: string | Idle.Tranferpay.OrderChange } };
  /** {@link Jae.Trade.PaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  type JaeTradePaidSuccessed = Message & { content?: MessageContent & { topic?: 'jae_trade_PaidSuccessed', content?: string | Jae.Trade.PaidSuccessed } };
  /** {@link Lst.Supplier.BroadcastFastRefundMessage 零售通_公共 > 零售通广播极速退款消息} */
  type LstSupplierBroadcastFastRefundMessage = Message & { content?: MessageContent & { topic?: 'lst_supplier_BroadcastFastRefundMessage', content?: string | Lst.Supplier.BroadcastFastRefundMessage } };
  /** {@link Lst.Supplier.FastRefundMessageCreate 零售通_公共 > 品牌商极速退款消息创建} */
  type LstSupplierFastRefundMessageCreate = Message & { content?: MessageContent & { topic?: 'lst_supplier_FastRefundMessageCreate', content?: string | Lst.Supplier.FastRefundMessageCreate } };
  /** {@link Niaochao.Tccompass.DockInfoChange 五道口配送 > 鸟潮站点变更消息} */
  type NiaochaoTccompassDockInfoChange = Message & { content?: MessageContent & { topic?: 'niaochao_tccompass_DockInfoChange', content?: string | Niaochao.Tccompass.DockInfoChange } };
  /** {@link Niaochao.Tccompass.MaterialCodeUpdate 五道口配送 > 物资箱号变动消息} */
  type NiaochaoTccompassMaterialCodeUpdate = Message & { content?: MessageContent & { topic?: 'niaochao_tccompass_MaterialCodeUpdate', content?: string | Niaochao.Tccompass.MaterialCodeUpdate } };
  /** {@link Niaochao.Tccompass.WarehouseNetworkChange 五道口配送 > 仓网络变更消息} */
  type NiaochaoTccompassWarehouseNetworkChange = Message & { content?: MessageContent & { topic?: 'niaochao_tccompass_WarehouseNetworkChange', content?: string | Niaochao.Tccompass.WarehouseNetworkChange } };
  /** {@link Taobao.Ag.RefundSignInfo AliGenius > 商家在AG的签收信息} */
  type TaobaoAgRefundSignInfo = Message & { content?: MessageContent & { topic?: 'taobao_ag_RefundSignInfo', content?: string | Taobao.Ag.RefundSignInfo } };
  /** {@link Taobao.Aps.CommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  type TaobaoApsCommentAdd = Message & { content?: MessageContent & { topic?: 'taobao_aps_CommentAdd', content?: string | Taobao.Aps.CommentAdd } };
  /** {@link Taobao.Aps.NewFeedback 平台消息 > 收到舆情} */
  type TaobaoApsNewFeedback = Message & { content?: MessageContent & { topic?: 'taobao_aps_NewFeedback', content?: string | Taobao.Aps.NewFeedback } };
  /** {@link Taobao.Axin.DivisionApplyResult 阿信消息通知前台类目 > 新增行政区划结果通知} */
  type TaobaoAxinDivisionApplyResult = Message & { content?: MessageContent & { topic?: 'taobao_axin_DivisionApplyResult', content?: string | Taobao.Axin.DivisionApplyResult } };
  /** {@link Taobao.Axin.PoiApplyResult 阿信消息通知前台类目 > 新增POI结果通知} */
  type TaobaoAxinPoiApplyResult = Message & { content?: MessageContent & { topic?: 'taobao_axin_PoiApplyResult', content?: string | Taobao.Axin.PoiApplyResult } };
  /** {@link Taobao.Axin.RefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  type TaobaoAxinRefundCallBack = Message & { content?: MessageContent & { topic?: 'taobao_axin_RefundCallBack', content?: string | Taobao.Axin.RefundCallBack } };
  /** {@link Taobao.Baichuan.ASODeviceActivate 百川 > 设备APP激活} */
  type TaobaoBaichuanASODeviceActivate = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_ASODeviceActivate', content?: string | Taobao.Baichuan.ASODeviceActivate } };
  /** {@link Taobao.Baichuan.PasswordRuleChange 百川 > 口令规则变化消息} */
  type TaobaoBaichuanPasswordRuleChange = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_PasswordRuleChange', content?: string | Taobao.Baichuan.PasswordRuleChange } };
  /** {@link Taobao.Bmc.ShortMessageStatus 导购平台 > 短信状态} */
  type TaobaoBmcShortMessageStatus = Message & { content?: MessageContent & { topic?: 'taobao_bmc_ShortMessageStatus', content?: string | Taobao.Bmc.ShortMessageStatus } };
  /** {@link Taobao.Bus.TVMTradePay 淘宝汽车票 > 自助机付款成功结果} */
  type TaobaoBusTVMTradePay = Message & { content?: MessageContent & { topic?: 'taobao_bus_TVMTradePay', content?: string | Taobao.Bus.TVMTradePay } };
  /** {@link Taobao.Bus.TVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知} */
  type TaobaoBusTVMTradePayStatusNotice = Message & { content?: MessageContent & { topic?: 'taobao_bus_TVMTradePayStatusNotice', content?: string | Taobao.Bus.TVMTradePayStatusNotice } };
  /** {@link Taobao.Bus.TVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息} */
  type TaobaoBusTVMTradePaySuccess = Message & { content?: MessageContent & { topic?: 'taobao_bus_TVMTradePaySuccess', content?: string | Taobao.Bus.TVMTradePaySuccess } };
  /** {@link Taobao.Bus.TradePayStatus 淘宝汽车票 > 交易支付状态节点} */
  type TaobaoBusTradePayStatus = Message & { content?: MessageContent & { topic?: 'taobao_bus_TradePayStatus', content?: string | Taobao.Bus.TradePayStatus } };
  /** {@link Taobao.Carlease.FreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息} */
  type TaobaoCarleaseFreeDpOrderMsgSend = Message & { content?: MessageContent & { topic?: 'taobao_carlease_FreeDpOrderMsgSend', content?: string | Taobao.Carlease.FreeDpOrderMsgSend } };
  /** {@link Taobao.Content.OrderPaid 淘宝交易 > 内容开放短视频模板支付消息} */
  type TaobaoContentOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_content_OrderPaid', content?: string | Taobao.Content.OrderPaid } };
  /** {@link Taobao.Daifa.DistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  type TaobaoDaifaDistributorOrderStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_daifa_DistributorOrderStatusChange', content?: string | Taobao.Daifa.DistributorOrderStatusChange } };
  /** {@link Taobao.Daifa.SupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  type TaobaoDaifaSupplierOrderStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_daifa_SupplierOrderStatusChange', content?: string | Taobao.Daifa.SupplierOrderStatusChange } };
  /** {@link Taobao.Dd.Push 淘宝点点 > 淘点点消息推送} */
  type TaobaoDdPush = Message & { content?: MessageContent & { topic?: 'taobao_dd_Push', content?: string | Taobao.Dd.Push } };
  /** {@link Taobao.Diandian.ServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  type TaobaoDiandianServeOrder = Message & { content?: MessageContent & { topic?: 'taobao_diandian_ServeOrder', content?: string | Taobao.Diandian.ServeOrder } };
  /** {@link Taobao.Dpaas.AuthTokenCreate DPAAS > dpaas三方服务token} */
  type TaobaoDpaasAuthTokenCreate = Message & { content?: MessageContent & { topic?: 'taobao_dpaas_AuthTokenCreate', content?: string | Taobao.Dpaas.AuthTokenCreate } };
  /** {@link Taobao.Dpaas.CustomerFlow DPAAS > 客流新增及会员到店消息} */
  type TaobaoDpaasCustomerFlow = Message & { content?: MessageContent & { topic?: 'taobao_dpaas_CustomerFlow', content?: string | Taobao.Dpaas.CustomerFlow } };
  /** {@link Taobao.Dpaas.CustomerUpload DPAAS > 客户上传图片} */
  type TaobaoDpaasCustomerUpload = Message & { content?: MessageContent & { topic?: 'taobao_dpaas_CustomerUpload', content?: string | Taobao.Dpaas.CustomerUpload } };
  /** {@link Taobao.Dpaas.CustomerUploadAck DPAAS > 会员人脸信息更新} */
  type TaobaoDpaasCustomerUploadAck = Message & { content?: MessageContent & { topic?: 'taobao_dpaas_CustomerUploadAck', content?: string | Taobao.Dpaas.CustomerUploadAck } };
  /** {@link Taobao.Dpaas.EquipmentCreate DPAAS > 创建设备} */
  type TaobaoDpaasEquipmentCreate = Message & { content?: MessageContent & { topic?: 'taobao_dpaas_EquipmentCreate', content?: string | Taobao.Dpaas.EquipmentCreate } };
  /** {@link Taobao.Dpaas.FaceToCustomerAck DPAAS > 会员标示消息推送} */
  type TaobaoDpaasFaceToCustomerAck = Message & { content?: MessageContent & { topic?: 'taobao_dpaas_FaceToCustomerAck', content?: string | Taobao.Dpaas.FaceToCustomerAck } };
  /** {@link Taobao.Dv.External 阿里通信 > 淘宝数字虚拟外放} */
  type TaobaoDvExternal = Message & { content?: MessageContent & { topic?: 'taobao_dv_External', content?: string | Taobao.Dv.External } };
  /** {@link Taobao.Einvoice.BuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  type TaobaoEinvoiceBuyerConfirmSend = Message & { content?: MessageContent & { topic?: 'taobao_einvoice_BuyerConfirmSend', content?: string | Taobao.Einvoice.BuyerConfirmSend } };
  /** {@link Taobao.Einvoice.InvoiceResultReturn 电子发票 > 电子发票开票回流} */
  type TaobaoEinvoiceInvoiceResultReturn = Message & { content?: MessageContent & { topic?: 'taobao_einvoice_InvoiceResultReturn', content?: string | Taobao.Einvoice.InvoiceResultReturn } };
  /** {@link Taobao.Fenxiao.DealerAgree 淘宝分销 > 经销采购单审核通过} */
  type TaobaoFenxiaoDealerAgree = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerAgree', content?: string | Taobao.Fenxiao.DealerAgree } };
  /** {@link Taobao.Fenxiao.DealerClose 淘宝分销 > 经销采购单关闭} */
  type TaobaoFenxiaoDealerClose = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerClose', content?: string | Taobao.Fenxiao.DealerClose } };
  /** {@link Taobao.Fenxiao.DealerConfirm 淘宝分销 > 经销采购单采购成功} */
  type TaobaoFenxiaoDealerConfirm = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerConfirm', content?: string | Taobao.Fenxiao.DealerConfirm } };
  /** {@link Taobao.Fenxiao.DealerCreate 淘宝分销 > 经销采购单创建} */
  type TaobaoFenxiaoDealerCreate = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerCreate', content?: string | Taobao.Fenxiao.DealerCreate } };
  /** {@link Taobao.Fenxiao.DealerInstock 淘宝分销 > 经销采购单入库} */
  type TaobaoFenxiaoDealerInstock = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerInstock', content?: string | Taobao.Fenxiao.DealerInstock } };
  /** {@link Taobao.Fenxiao.DealerModify 淘宝分销 > 经销采购单修改} */
  type TaobaoFenxiaoDealerModify = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerModify', content?: string | Taobao.Fenxiao.DealerModify } };
  /** {@link Taobao.Fenxiao.DealerPay 淘宝分销 > 经销采购单付款} */
  type TaobaoFenxiaoDealerPay = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerPay', content?: string | Taobao.Fenxiao.DealerPay } };
  /** {@link Taobao.Fenxiao.DealerRefuse 淘宝分销 > 经销采购单拒绝通过} */
  type TaobaoFenxiaoDealerRefuse = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerRefuse', content?: string | Taobao.Fenxiao.DealerRefuse } };
  /** {@link Taobao.Fenxiao.DealerShipped 淘宝分销 > 经销采购单已发货} */
  type TaobaoFenxiaoDealerShipped = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_DealerShipped', content?: string | Taobao.Fenxiao.DealerShipped } };
  /** {@link Taobao.Fenxiao.FxOrderClosed 淘宝分销 > 采购单关闭消息消息} */
  type TaobaoFenxiaoFxOrderClosed = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderClosed', content?: string | Taobao.Fenxiao.FxOrderClosed } };
  /** {@link Taobao.Fenxiao.FxOrderCreate 淘宝分销 > 采购单创建消息} */
  type TaobaoFenxiaoFxOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderCreate', content?: string | Taobao.Fenxiao.FxOrderCreate } };
  /** {@link Taobao.Fenxiao.FxOrderModifyConsign 淘宝分销 > 分销属性变更} */
  type TaobaoFenxiaoFxOrderModifyConsign = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderModifyConsign', content?: string | Taobao.Fenxiao.FxOrderModifyConsign } };
  /** {@link Taobao.Fenxiao.FxOrderModifyPrice 淘宝分销 > 修改采购单价格消息} */
  type TaobaoFenxiaoFxOrderModifyPrice = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderModifyPrice', content?: string | Taobao.Fenxiao.FxOrderModifyPrice } };
  /** {@link Taobao.Fenxiao.FxOrderPaid 淘宝分销 > 采购单付款消息} */
  type TaobaoFenxiaoFxOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderPaid', content?: string | Taobao.Fenxiao.FxOrderPaid } };
  /** {@link Taobao.Fenxiao.FxOrderShipped 淘宝分销 > 采购单发货消息} */
  type TaobaoFenxiaoFxOrderShipped = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderShipped', content?: string | Taobao.Fenxiao.FxOrderShipped } };
  /** {@link Taobao.Fenxiao.FxOrderSuccess 淘宝分销 > 采购单确认收货消息} */
  type TaobaoFenxiaoFxOrderSuccess = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderSuccess', content?: string | Taobao.Fenxiao.FxOrderSuccess } };
  /** {@link Taobao.Fenxiao.FxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  type TaobaoFenxiaoFxRefundAgree = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundAgree', content?: string | Taobao.Fenxiao.FxRefundAgree } };
  /** {@link Taobao.Fenxiao.FxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  type TaobaoFenxiaoFxRefundClose = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundClose', content?: string | Taobao.Fenxiao.FxRefundClose } };
  /** {@link Taobao.Fenxiao.FxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  type TaobaoFenxiaoFxRefundCreate = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundCreate', content?: string | Taobao.Fenxiao.FxRefundCreate } };
  /** {@link Taobao.Fenxiao.FxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  type TaobaoFenxiaoFxRefundRefuseGoods = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundRefuseGoods', content?: string | Taobao.Fenxiao.FxRefundRefuseGoods } };
  /** {@link Taobao.Fenxiao.FxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  type TaobaoFenxiaoFxRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundSuccess', content?: string | Taobao.Fenxiao.FxRefundSuccess } };
  /** {@link Taobao.Fenxiao.FxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  type TaobaoFenxiaoFxTradeRefundCreate = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxTradeRefundCreate', content?: string | Taobao.Fenxiao.FxTradeRefundCreate } };
  /** {@link Taobao.Fenxiao.FxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  type TaobaoFenxiaoFxTradeRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxTradeRefundSuccess', content?: string | Taobao.Fenxiao.FxTradeRefundSuccess } };
  /** {@link Taobao.Fliggy.CommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息} */
  type TaobaoFliggyCommonContractSign = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_CommonContractSign', content?: string | Taobao.Fliggy.CommonContractSign } };
  /** {@link Taobao.Fliggy.HspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  type TaobaoFliggyHspHicItemChange = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_HspHicItemChange', content?: string | Taobao.Fliggy.HspHicItemChange } };
  /** {@link Taobao.Fliggy.SignStatus 酒店签约中心消息 > 飞猪签约状态消息} */
  type TaobaoFliggySignStatus = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_SignStatus', content?: string | Taobao.Fliggy.SignStatus } };
  /** {@link Taobao.Fliggy.StdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息} */
  type TaobaoFliggyStdHotelModify = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_StdHotelModify', content?: string | Taobao.Fliggy.StdHotelModify } };
  /** {@link Taobao.Fliggy.StdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息} */
  type TaobaoFliggyStdRoomTypeModify = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_StdRoomTypeModify', content?: string | Taobao.Fliggy.StdRoomTypeModify } };
  /** {@link Taobao.Fsc.RouteOrderStatusChange 阿信消息通知前台类目 > 线路订单状态变更通知} */
  type TaobaoFscRouteOrderStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_fsc_RouteOrderStatusChange', content?: string | Taobao.Fsc.RouteOrderStatusChange } };
  /** {@link Taobao.Fuwu.FundsChange 淘宝交易 > 以旧换新资金变更通知消息} */
  type TaobaoFuwuFundsChange = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_FundsChange', content?: string | Taobao.Fuwu.FundsChange } };
  /** {@link Taobao.Fuwu.OrderClosed 淘宝交易 > 订单关闭消息} */
  type TaobaoFuwuOrderClosed = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_OrderClosed', content?: string | Taobao.Fuwu.OrderClosed } };
  /** {@link Taobao.Fuwu.OrderCreated 淘宝交易 > 订单创建消息} */
  type TaobaoFuwuOrderCreated = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_OrderCreated', content?: string | Taobao.Fuwu.OrderCreated } };
  /** {@link Taobao.Fuwu.OrderPaid 淘宝交易 > 订单支付消息} */
  type TaobaoFuwuOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_OrderPaid', content?: string | Taobao.Fuwu.OrderPaid } };
  /** {@link Taobao.Fuwu.RecycleFinalService 淘宝交易 > 以旧换新取送一体服务最终决策通知} */
  type TaobaoFuwuRecycleFinalService = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_RecycleFinalService', content?: string | Taobao.Fuwu.RecycleFinalService } };
  /** {@link Taobao.Fuwu.ServiceOpen 淘宝交易 > 服务开通消息} */
  type TaobaoFuwuServiceOpen = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_ServiceOpen', content?: string | Taobao.Fuwu.ServiceOpen } };
  /** {@link Taobao.Fuwu.WitkeySyncModeling 淘宝交易 > 威客同步建模数据} */
  type TaobaoFuwuWitkeySyncModeling = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_WitkeySyncModeling', content?: string | Taobao.Fuwu.WitkeySyncModeling } };
  /** {@link Taobao.Globalbuys.SeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  type TaobaoGlobalbuysSeamailOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_globalbuys_SeamailOrderNotify', content?: string | Taobao.Globalbuys.SeamailOrderNotify } };
  /** {@link Taobao.Homeai.CaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  type TaobaoHomeaiCaseSyncResult = Message & { content?: MessageContent & { topic?: 'taobao_homeai_CaseSyncResult', content?: string | Taobao.Homeai.CaseSyncResult } };
  /** {@link Taobao.Homeai.LayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  type TaobaoHomeaiLayoutTransferResult = Message & { content?: MessageContent & { topic?: 'taobao_homeai_LayoutTransferResult', content?: string | Taobao.Homeai.LayoutTransferResult } };
  /** {@link Taobao.Homeai.ModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系} */
  type TaobaoHomeaiModelSkuRelation = Message & { content?: MessageContent & { topic?: 'taobao_homeai_ModelSkuRelation', content?: string | Taobao.Homeai.ModelSkuRelation } };
  /** {@link Taobao.Homeai.RenderRequest HOMEAI消息对接 > HS渲染消息} */
  type TaobaoHomeaiRenderRequest = Message & { content?: MessageContent & { topic?: 'taobao_homeai_RenderRequest', content?: string | Taobao.Homeai.RenderRequest } };
  /** {@link Taobao.Hotel.CreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息} */
  type TaobaoHotelCreditToPreHotelStatus = Message & { content?: MessageContent & { topic?: 'taobao_hotel_CreditToPreHotelStatus', content?: string | Taobao.Hotel.CreditToPreHotelStatus } };
  /** {@link Taobao.Hotel.SearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息} */
  type TaobaoHotelSearchMonitor = Message & { content?: MessageContent & { topic?: 'taobao_hotel_SearchMonitor', content?: string | Taobao.Hotel.SearchMonitor } };
  /** {@link Taobao.Hotel.SearchTrigger 酒店签约中心消息 > 热搜酒店消息} */
  type TaobaoHotelSearchTrigger = Message & { content?: MessageContent & { topic?: 'taobao_hotel_SearchTrigger', content?: string | Taobao.Hotel.SearchTrigger } };
  /** {@link Taobao.Istore.GiftingMsg Gifting送礼 > istoreGifing消息} */
  type TaobaoIstoreGiftingMsg = Message & { content?: MessageContent & { topic?: 'taobao_istore_GiftingMsg', content?: string | Taobao.Istore.GiftingMsg } };
  /** {@link Taobao.Item.ItemAdd 淘宝商品 > 商品新增消息} */
  type TaobaoItemItemAdd = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemAdd', content?: string | Taobao.Item.ItemAdd } };
  /** {@link Taobao.Item.ItemDelete 淘宝商品 > 商品删除消息} */
  type TaobaoItemItemDelete = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemDelete', content?: string | Taobao.Item.ItemDelete } };
  /** {@link Taobao.Item.ItemDownshelf 淘宝商品 > 商品下架消息} */
  type TaobaoItemItemDownshelf = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemDownshelf', content?: string | Taobao.Item.ItemDownshelf } };
  /** {@link Taobao.Item.ItemPunishCc 淘宝商品 > 小二CC商品消息} */
  type TaobaoItemItemPunishCc = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemPunishCc', content?: string | Taobao.Item.ItemPunishCc } };
  /** {@link Taobao.Item.ItemPunishDelete 淘宝商品 > 小二删除商品消息} */
  type TaobaoItemItemPunishDelete = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemPunishDelete', content?: string | Taobao.Item.ItemPunishDelete } };
  /** {@link Taobao.Item.ItemPunishDownshelf 淘宝商品 > 小二下架商品消息} */
  type TaobaoItemItemPunishDownshelf = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemPunishDownshelf', content?: string | Taobao.Item.ItemPunishDownshelf } };
  /** {@link Taobao.Item.ItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息} */
  type TaobaoItemItemRecommendAdd = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemRecommendAdd', content?: string | Taobao.Item.ItemRecommendAdd } };
  /** {@link Taobao.Item.ItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息} */
  type TaobaoItemItemRecommendDelete = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemRecommendDelete', content?: string | Taobao.Item.ItemRecommendDelete } };
  /** {@link Taobao.Item.ItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息} */
  type TaobaoItemItemSkuZeroStock = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemSkuZeroStock', content?: string | Taobao.Item.ItemSkuZeroStock } };
  /** {@link Taobao.Item.ItemStockChanged 淘宝商品 > 修改商品库存消息} */
  type TaobaoItemItemStockChanged = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemStockChanged', content?: string | Taobao.Item.ItemStockChanged } };
  /** {@link Taobao.Item.ItemUpdate 淘宝商品 > 商品更新消息} */
  type TaobaoItemItemUpdate = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemUpdate', content?: string | Taobao.Item.ItemUpdate } };
  /** {@link Taobao.Item.ItemUpshelf 淘宝商品 > 商品上架消息} */
  type TaobaoItemItemUpshelf = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemUpshelf', content?: string | Taobao.Item.ItemUpshelf } };
  /** {@link Taobao.Item.ItemZeroStock 淘宝商品 > 商品卖空消息} */
  type TaobaoItemItemZeroStock = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemZeroStock', content?: string | Taobao.Item.ItemZeroStock } };
  /** {@link Taobao.Jipiao.AncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  type TaobaoJipiaoAncillaryOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_AncillaryOrderPaid', content?: string | Taobao.Jipiao.AncillaryOrderPaid } };
  /** {@link Taobao.Jipiao.JipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  type TaobaoJipiaoJipiaoModifyOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_JipiaoModifyOrderNotify', content?: string | Taobao.Jipiao.JipiaoModifyOrderNotify } };
  /** {@link Taobao.Jipiao.JipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  type TaobaoJipiaoJipiaoOrderStatusNotify = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_JipiaoOrderStatusNotify', content?: string | Taobao.Jipiao.JipiaoOrderStatusNotify } };
  /** {@link Taobao.Jipiao.JipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  type TaobaoJipiaoJipiaoRefundOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_JipiaoRefundOrderNotify', content?: string | Taobao.Jipiao.JipiaoRefundOrderNotify } };
  /** {@link Taobao.Jipiao.SellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  type TaobaoJipiaoSellerOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_SellerOrderNotify', content?: string | Taobao.Jipiao.SellerOrderNotify } };
  /** {@link Taobao.Jipiao.SellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  type TaobaoJipiaoSellerRefundOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_SellerRefundOrderNotify', content?: string | Taobao.Jipiao.SellerRefundOrderNotify } };
  /** {@link Taobao.Jipiao.UrgeIssueTicket 淘宝机票 > 催出票/拦截出票消息} */
  type TaobaoJipiaoUrgeIssueTicket = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_UrgeIssueTicket', content?: string | Taobao.Jipiao.UrgeIssueTicket } };
  /** {@link Taobao.Jzfx.PurchaseOrderCreate 淘宝分销 > 家装分销_采购单创建} */
  type TaobaoJzfxPurchaseOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_jzfx_PurchaseOrderCreate', content?: string | Taobao.Jzfx.PurchaseOrderCreate } };
  /** {@link Taobao.Jzfx.PurchaseOrderStatusModify 淘宝分销 > 家装分销_采购单状态修改} */
  type TaobaoJzfxPurchaseOrderStatusModify = Message & { content?: MessageContent & { topic?: 'taobao_jzfx_PurchaseOrderStatusModify', content?: string | Taobao.Jzfx.PurchaseOrderStatusModify } };
  /** {@link Taobao.Jzfx.PurchaseReverseOrderCreate 淘宝分销 > 家装分销_采购逆向单创建} */
  type TaobaoJzfxPurchaseReverseOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_jzfx_PurchaseReverseOrderCreate', content?: string | Taobao.Jzfx.PurchaseReverseOrderCreate } };
  /** {@link Taobao.Jzfx.PurchaseReverseOrderStatusModify 淘宝分销 > 家装分销_采购逆向单状态修改} */
  type TaobaoJzfxPurchaseReverseOrderStatusModify = Message & { content?: MessageContent & { topic?: 'taobao_jzfx_PurchaseReverseOrderStatusModify', content?: string | Taobao.Jzfx.PurchaseReverseOrderStatusModify } };
  /** {@link Taobao.Live.AgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知} */
  type TaobaoLiveAgencyItemChanged = Message & { content?: MessageContent & { topic?: 'taobao_live_AgencyItemChanged', content?: string | Taobao.Live.AgencyItemChanged } };
  /** {@link Taobao.Live.FeedRelated 淘宝直播API > 淘宝直播上下播消息} */
  type TaobaoLiveFeedRelated = Message & { content?: MessageContent & { topic?: 'taobao_live_FeedRelated', content?: string | Taobao.Live.FeedRelated } };
  /** {@link Taobao.Live.TcpOrder 淘宝直播API > 淘宝直播订单消息} */
  type TaobaoLiveTcpOrder = Message & { content?: MessageContent & { topic?: 'taobao_live_TcpOrder', content?: string | Taobao.Live.TcpOrder } };
  /** {@link Taobao.Logistics.LogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  type TaobaoLogisticsLogsticDetailTrace = Message & { content?: MessageContent & { topic?: 'taobao_logistics_LogsticDetailTrace', content?: string | Taobao.Logistics.LogsticDetailTrace } };
  /** {@link Taobao.Modifyaddress.ResultNotify 聚石塔 > 自助改地址结果消息通知} */
  type TaobaoModifyaddressResultNotify = Message & { content?: MessageContent & { topic?: 'taobao_modifyaddress_ResultNotify', content?: string | Taobao.Modifyaddress.ResultNotify } };
  /** {@link Taobao.Modifyorder.ConsistencyResult 聚石塔 > 订单一致性校验消息} */
  type TaobaoModifyorderConsistencyResult = Message & { content?: MessageContent & { topic?: 'taobao_modifyorder_ConsistencyResult', content?: string | Taobao.Modifyorder.ConsistencyResult } };
  /** {@link Taobao.Modifysku.ResultNotify 聚石塔 > 修改商品信息结果消息} */
  type TaobaoModifyskuResultNotify = Message & { content?: MessageContent & { topic?: 'taobao_modifysku_ResultNotify', content?: string | Taobao.Modifysku.ResultNotify } };
  /** {@link Taobao.Oc.TradeTagChanged 交易全链路 > oc订单标签变更} */
  type TaobaoOcTradeTagChanged = Message & { content?: MessageContent & { topic?: 'taobao_oc_TradeTagChanged', content?: string | Taobao.Oc.TradeTagChanged } };
  /** {@link Taobao.Ofn.OrderStatusSync 淘宝交易 > 以旧换新回收单状态同步} */
  type TaobaoOfnOrderStatusSync = Message & { content?: MessageContent & { topic?: 'taobao_ofn_OrderStatusSync', content?: string | Taobao.Ofn.OrderStatusSync } };
  /** {@link Taobao.Openaccount.DataSync 导购平台 > openaccount数据同步} */
  type TaobaoOpenaccountDataSync = Message & { content?: MessageContent & { topic?: 'taobao_openaccount_DataSync', content?: string | Taobao.Openaccount.DataSync } };
  /** {@link Taobao.Opencrm.AuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  type TaobaoOpencrmAuthTouchMessage = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_AuthTouchMessage', content?: string | Taobao.Opencrm.AuthTouchMessage } };
  /** {@link Taobao.Opencrm.CardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  type TaobaoOpencrmCardEstTask = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_CardEstTask', content?: string | Taobao.Opencrm.CardEstTask } };
  /** {@link Taobao.Opencrm.CardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  type TaobaoOpencrmCardTplExamine = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_CardTplExamine', content?: string | Taobao.Opencrm.CardTplExamine } };
  /** {@link Taobao.Opencrm.CouponUseUp 客户运营平台API > 优惠券发完TMC} */
  type TaobaoOpencrmCouponUseUp = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_CouponUseUp', content?: string | Taobao.Opencrm.CouponUseUp } };
  /** {@link Taobao.Opencrm.CrowdInstResult 客户运营平台API > 人群快照生成结果} */
  type TaobaoOpencrmCrowdInstResult = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_CrowdInstResult', content?: string | Taobao.Opencrm.CrowdInstResult } };
  /** {@link Taobao.Opencrm.CrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  type TaobaoOpencrmCrowdInstSaveResult = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_CrowdInstSaveResult', content?: string | Taobao.Opencrm.CrowdInstSaveResult } };
  /** {@link Taobao.Opencrm.DigitalTplExamine 客户运营平台API > 数字短信模板审核消息} */
  type TaobaoOpencrmDigitalTplExamine = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_DigitalTplExamine', content?: string | Taobao.Opencrm.DigitalTplExamine } };
  /** {@link Taobao.Opencrm.Feedback 客户运营平台API > 反馈tmc} */
  type TaobaoOpencrmFeedback = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_Feedback', content?: string | Taobao.Opencrm.Feedback } };
  /** {@link Taobao.Opencrm.FullRuleResult 客户运营平台API > 规则全量计算结果通知} */
  type TaobaoOpencrmFullRuleResult = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_FullRuleResult', content?: string | Taobao.Opencrm.FullRuleResult } };
  /** {@link Taobao.Opencrm.MemberGradeChange 客户运营平台API > 会员等级变更} */
  type TaobaoOpencrmMemberGradeChange = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_MemberGradeChange', content?: string | Taobao.Opencrm.MemberGradeChange } };
  /** {@link Taobao.Opencrm.MemberJoin 客户运营平台API > 会员入会消息} */
  type TaobaoOpencrmMemberJoin = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_MemberJoin', content?: string | Taobao.Opencrm.MemberJoin } };
  /** {@link Taobao.Opencrm.MemberJoinPrivate 客户运营平台API > 会员入会消息} */
  type TaobaoOpencrmMemberJoinPrivate = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_MemberJoinPrivate', content?: string | Taobao.Opencrm.MemberJoinPrivate } };
  /** {@link Taobao.Opencrm.NodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  type TaobaoOpencrmNodeExecuteFinished = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_NodeExecuteFinished', content?: string | Taobao.Opencrm.NodeExecuteFinished } };
  /** {@link Taobao.Opencrm.OpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  type TaobaoOpencrmOpenStrategyEvent = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_OpenStrategyEvent', content?: string | Taobao.Opencrm.OpenStrategyEvent } };
  /** {@link Taobao.Opencrm.SMSOfficaial 客户运营平台API > 官方营销场景短信发送通知} */
  type TaobaoOpencrmSMSOfficaial = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_SMSOfficaial', content?: string | Taobao.Opencrm.SMSOfficaial } };
  /** {@link Taobao.Opencrm.SellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  type TaobaoOpencrmSellerDimensionCharge = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_SellerDimensionCharge', content?: string | Taobao.Opencrm.SellerDimensionCharge } };
  /** {@link Taobao.Opencrm.ShortMessageBill 客户运营平台API > 短信账单} */
  type TaobaoOpencrmShortMessageBill = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_ShortMessageBill', content?: string | Taobao.Opencrm.ShortMessageBill } };
  /** {@link Taobao.Opencrm.ShortMessageSent 客户运营平台API > 短信发送TMC} */
  type TaobaoOpencrmShortMessageSent = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_ShortMessageSent', content?: string | Taobao.Opencrm.ShortMessageSent } };
  /** {@link Taobao.Opencrm.Utouch 客户运营平台API > 智能外呼回执} */
  type TaobaoOpencrmUtouch = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_Utouch', content?: string | Taobao.Opencrm.Utouch } };
  /** {@link Taobao.Openim.OffMsgPush OpenIM消息 > openim 离线消息推送} */
  type TaobaoOpenimOffMsgPush = Message & { content?: MessageContent & { topic?: 'taobao_openim_OffMsgPush', content?: string | Taobao.Openim.OffMsgPush } };
  /** {@link Taobao.Openmall.AlarmMsg OpenMall-API > Openmall告警消息通知} */
  type TaobaoOpenmallAlarmMsg = Message & { content?: MessageContent & { topic?: 'taobao_openmall_AlarmMsg', content?: string | Taobao.Openmall.AlarmMsg } };
  /** {@link Taobao.Openmall.ItemChanged OpenMall-API > Openmall商品变更消息} */
  type TaobaoOpenmallItemChanged = Message & { content?: MessageContent & { topic?: 'taobao_openmall_ItemChanged', content?: string | Taobao.Openmall.ItemChanged } };
  /** {@link Taobao.Openmall.ItemStockChanged OpenMall-API > openmall商品库存变更消息通知} */
  type TaobaoOpenmallItemStockChanged = Message & { content?: MessageContent & { topic?: 'taobao_openmall_ItemStockChanged', content?: string | Taobao.Openmall.ItemStockChanged } };
  /** {@link Taobao.Openmall.RefundChanged OpenMall-API > OpenMall退款单变更} */
  type TaobaoOpenmallRefundChanged = Message & { content?: MessageContent & { topic?: 'taobao_openmall_RefundChanged', content?: string | Taobao.Openmall.RefundChanged } };
  /** {@link Taobao.Openmall.TradeChanged OpenMall-API > 订单消息通知} */
  type TaobaoOpenmallTradeChanged = Message & { content?: MessageContent & { topic?: 'taobao_openmall_TradeChanged', content?: string | Taobao.Openmall.TradeChanged } };
  /** {@link Taobao.Os.ActivityCompleted 营销平台 > 前N有礼活动开奖消息} */
  type TaobaoOsActivityCompleted = Message & { content?: MessageContent & { topic?: 'taobao_os_ActivityCompleted', content?: string | Taobao.Os.ActivityCompleted } };
  /** {@link Taobao.Rdcaligenius.OrderMsgSend 淘宝交易 > 订单消息} */
  type TaobaoRdcaligeniusOrderMsgSend = Message & { content?: MessageContent & { topic?: 'taobao_rdcaligenius_OrderMsgSend', content?: string | Taobao.Rdcaligenius.OrderMsgSend } };
  /** {@link Taobao.Recycle.OfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  type TaobaoRecycleOfnPreRedPacketSync = Message & { content?: MessageContent & { topic?: 'taobao_recycle_OfnPreRedPacketSync', content?: string | Taobao.Recycle.OfnPreRedPacketSync } };
  /** {@link Taobao.Refund.RefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息} */
  type TaobaoRefundRefundBlockMessage = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundBlockMessage', content?: string | Taobao.Refund.RefundBlockMessage } };
  /** {@link Taobao.Refund.RefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息} */
  type TaobaoRefundRefundBuyerModifyAgreement = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundBuyerModifyAgreement', content?: string | Taobao.Refund.RefundBuyerModifyAgreement } };
  /** {@link Taobao.Refund.RefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息} */
  type TaobaoRefundRefundBuyerReturnGoods = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundBuyerReturnGoods', content?: string | Taobao.Refund.RefundBuyerReturnGoods } };
  /** {@link Taobao.Refund.RefundClosed 淘宝退款 > 退款关闭消息} */
  type TaobaoRefundRefundClosed = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundClosed', content?: string | Taobao.Refund.RefundClosed } };
  /** {@link Taobao.Refund.RefundCreateMessage 淘宝退款 > 发表退款留言消息} */
  type TaobaoRefundRefundCreateMessage = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundCreateMessage', content?: string | Taobao.Refund.RefundCreateMessage } };
  /** {@link Taobao.Refund.RefundCreated 淘宝退款 > 退款创建消息} */
  type TaobaoRefundRefundCreated = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundCreated', content?: string | Taobao.Refund.RefundCreated } };
  /** {@link Taobao.Refund.RefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息} */
  type TaobaoRefundRefundSellerAgreeAgreement = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundSellerAgreeAgreement', content?: string | Taobao.Refund.RefundSellerAgreeAgreement } };
  /** {@link Taobao.Refund.RefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息} */
  type TaobaoRefundRefundSellerRefuseAgreement = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundSellerRefuseAgreement', content?: string | Taobao.Refund.RefundSellerRefuseAgreement } };
  /** {@link Taobao.Refund.RefundSuccess 淘宝退款 > 退款成功消息} */
  type TaobaoRefundRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundSuccess', content?: string | Taobao.Refund.RefundSuccess } };
  /** {@link Taobao.Refund.RefundableCanceled 淘宝退款 > 退款标记取消消息} */
  type TaobaoRefundRefundableCanceled = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundableCanceled', content?: string | Taobao.Refund.RefundableCanceled } };
  /** {@link Taobao.Refund.RefundableMarked 淘宝退款 > 退款标记创建消息} */
  type TaobaoRefundRefundableMarked = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundableMarked', content?: string | Taobao.Refund.RefundableMarked } };
  /** {@link Taobao.Refund.TaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  type TaobaoRefundTaobaoInterApplied = Message & { content?: MessageContent & { topic?: 'taobao_refund_TaobaoInterApplied', content?: string | Taobao.Refund.TaobaoInterApplied } };
  /** {@link Taobao.Refund.TaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  type TaobaoRefundTaobaoIntervened = Message & { content?: MessageContent & { topic?: 'taobao_refund_TaobaoIntervened', content?: string | Taobao.Refund.TaobaoIntervened } };
  /** {@link Taobao.Rhino.DeviceStatus 智能制造API > 智能制造-设备状态变更} */
  type TaobaoRhinoDeviceStatus = Message & { content?: MessageContent & { topic?: 'taobao_rhino_DeviceStatus', content?: string | Taobao.Rhino.DeviceStatus } };
  /** {@link Taobao.Smartapp.AppSubChange 平台消息 > 用户订阅变更消息} */
  type TaobaoSmartappAppSubChange = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_AppSubChange', content?: string | Taobao.Smartapp.AppSubChange } };
  /** {@link Taobao.Smartapp.DataSync 平台消息 > 智能应用服务登记数据变更消息} */
  type TaobaoSmartappDataSync = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_DataSync', content?: string | Taobao.Smartapp.DataSync } };
  /** {@link Taobao.Tae.BaichuanAuctionChange 导购平台 > 商品信息变更} */
  type TaobaoTaeBaichuanAuctionChange = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanAuctionChange', content?: string | Taobao.Tae.BaichuanAuctionChange } };
  /** {@link Taobao.Tae.BaichuanTradeClosed 导购平台 > 交易关闭} */
  type TaobaoTaeBaichuanTradeClosed = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanTradeClosed', content?: string | Taobao.Tae.BaichuanTradeClosed } };
  /** {@link Taobao.Tae.BaichuanTradeCreated 导购平台 > 创建订单} */
  type TaobaoTaeBaichuanTradeCreated = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanTradeCreated', content?: string | Taobao.Tae.BaichuanTradeCreated } };
  /** {@link Taobao.Tae.BaichuanTradePaidDone 导购平台 > 付款成功} */
  type TaobaoTaeBaichuanTradePaidDone = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanTradePaidDone', content?: string | Taobao.Tae.BaichuanTradePaidDone } };
  /** {@link Taobao.Tae.BaichuanTradeRefundCreated 导购平台 > 创建退款消息} */
  type TaobaoTaeBaichuanTradeRefundCreated = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanTradeRefundCreated', content?: string | Taobao.Tae.BaichuanTradeRefundCreated } };
  /** {@link Taobao.Tae.BaichuanTradeRefundSuccess 导购平台 > 退款成功} */
  type TaobaoTaeBaichuanTradeRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanTradeRefundSuccess', content?: string | Taobao.Tae.BaichuanTradeRefundSuccess } };
  /** {@link Taobao.Tae.BaichuanTradeSuccess 导购平台 > 交易成功} */
  type TaobaoTaeBaichuanTradeSuccess = Message & { content?: MessageContent & { topic?: 'taobao_tae_BaichuanTradeSuccess', content?: string | Taobao.Tae.BaichuanTradeSuccess } };
  /** {@link Taobao.Tae.ItemDownShelf 导购平台 > 商品下架} */
  type TaobaoTaeItemDownShelf = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemDownShelf', content?: string | Taobao.Tae.ItemDownShelf } };
  /** {@link Taobao.Tae.ItemImageChange 导购平台 > 商品主图变更} */
  type TaobaoTaeItemImageChange = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemImageChange', content?: string | Taobao.Tae.ItemImageChange } };
  /** {@link Taobao.Tae.ItemPriceChange 导购平台 > 订阅的商品变更消息} */
  type TaobaoTaeItemPriceChange = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemPriceChange', content?: string | Taobao.Tae.ItemPriceChange } };
  /** {@link Taobao.Tae.ItemSkuDelete 导购平台 > sku删除} */
  type TaobaoTaeItemSkuDelete = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemSkuDelete', content?: string | Taobao.Tae.ItemSkuDelete } };
  /** {@link Taobao.Tae.ItemSkuPublish 导购平台 > sku发布} */
  type TaobaoTaeItemSkuPublish = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemSkuPublish', content?: string | Taobao.Tae.ItemSkuPublish } };
  /** {@link Taobao.Tae.ItemSkuSoldOut 导购平台 > 商品sku售空} */
  type TaobaoTaeItemSkuSoldOut = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemSkuSoldOut', content?: string | Taobao.Tae.ItemSkuSoldOut } };
  /** {@link Taobao.Tae.ItemSoldOut 导购平台 > 商品售空} */
  type TaobaoTaeItemSoldOut = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemSoldOut', content?: string | Taobao.Tae.ItemSoldOut } };
  /** {@link Taobao.Tae.ItemSubscribe 导购平台 > 商品订阅成功} */
  type TaobaoTaeItemSubscribe = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemSubscribe', content?: string | Taobao.Tae.ItemSubscribe } };
  /** {@link Taobao.Tae.ItemTitleChange 导购平台 > 商品标题变更} */
  type TaobaoTaeItemTitleChange = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemTitleChange', content?: string | Taobao.Tae.ItemTitleChange } };
  /** {@link Taobao.Tae.ItemUnSubscribe 导购平台 > 取消商品订阅} */
  type TaobaoTaeItemUnSubscribe = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemUnSubscribe', content?: string | Taobao.Tae.ItemUnSubscribe } };
  /** {@link Taobao.Tae.ItemUpShelf 导购平台 > 商品上架} */
  type TaobaoTaeItemUpShelf = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemUpShelf', content?: string | Taobao.Tae.ItemUpShelf } };
  /** {@link Taobao.Top.AuthCancel 平台消息 > 取消授权消息通知} */
  type TaobaoTopAuthCancel = Message & { content?: MessageContent & { topic?: 'taobao_top_AuthCancel', content?: string | Taobao.Top.AuthCancel } };
  /** {@link Taobao.Top.ProcessCallback 平台消息 > 工作流执行回调消息} */
  type TaobaoTopProcessCallback = Message & { content?: MessageContent & { topic?: 'taobao_top_ProcessCallback', content?: string | Taobao.Top.ProcessCallback } };
  /** {@link Taobao.Topats.TaskComplete 平台消息 > 异步任务执行完成} */
  type TaobaoTopatsTaskComplete = Message & { content?: MessageContent & { topic?: 'taobao_topats_TaskComplete', content?: string | Taobao.Topats.TaskComplete } };
  /** {@link Taobao.Trade.AdvanceDisburse 淘宝交易 > 订单极速放款成功消息} */
  type TaobaoTradeAdvanceDisburse = Message & { content?: MessageContent & { topic?: 'taobao_trade_AdvanceDisburse', content?: string | Taobao.Trade.AdvanceDisburse } };
  /** {@link Taobao.Trade.TradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  type TaobaoTradeTradeAlipayCreate = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeAlipayCreate', content?: string | Taobao.Trade.TradeAlipayCreate } };
  /** {@link Taobao.Trade.TradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  type TaobaoTradeTradeBuyerPay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeBuyerPay', content?: string | Taobao.Trade.TradeBuyerPay } };
  /** {@link Taobao.Trade.TradeBuyerStepPay 淘宝交易 > 分阶段订单付定金} */
  type TaobaoTradeTradeBuyerStepPay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeBuyerStepPay', content?: string | Taobao.Trade.TradeBuyerStepPay } };
  /** {@link Taobao.Trade.TradeChanged 淘宝交易 > 订单信息变更消息} */
  type TaobaoTradeTradeChanged = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeChanged', content?: string | Taobao.Trade.TradeChanged } };
  /** {@link Taobao.Trade.TradeClose 淘宝交易 > 关闭交易消息} */
  type TaobaoTradeTradeClose = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeClose', content?: string | Taobao.Trade.TradeClose } };
  /** {@link Taobao.Trade.TradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息} */
  type TaobaoTradeTradeCloseAndModifyDetailOrder = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeCloseAndModifyDetailOrder', content?: string | Taobao.Trade.TradeCloseAndModifyDetailOrder } };
  /** {@link Taobao.Trade.TradeCreate 淘宝交易 > 创建淘宝交易消息} */
  type TaobaoTradeTradeCreate = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeCreate', content?: string | Taobao.Trade.TradeCreate } };
  /** {@link Taobao.Trade.TradeDelayConfirmPay 淘宝交易 > 延长收货时间消息} */
  type TaobaoTradeTradeDelayConfirmPay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeDelayConfirmPay', content?: string | Taobao.Trade.TradeDelayConfirmPay } };
  /** {@link Taobao.Trade.TradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息} */
  type TaobaoTradeTradeLogisticsAddressChanged = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeLogisticsAddressChanged', content?: string | Taobao.Trade.TradeLogisticsAddressChanged } };
  /** {@link Taobao.Trade.TradeMemoModified 淘宝交易 > 交易备注修改消息} */
  type TaobaoTradeTradeMemoModified = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeMemoModified', content?: string | Taobao.Trade.TradeMemoModified } };
  /** {@link Taobao.Trade.TradeModifyFee 淘宝交易 > 修改交易费用消息} */
  type TaobaoTradeTradeModifyFee = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeModifyFee', content?: string | Taobao.Trade.TradeModifyFee } };
  /** {@link Taobao.Trade.TradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息} */
  type TaobaoTradeTradePartlyConfirmPay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradePartlyConfirmPay', content?: string | Taobao.Trade.TradePartlyConfirmPay } };
  /** {@link Taobao.Trade.TradePartlyRefund 淘宝交易 > 子订单退款成功消息} */
  type TaobaoTradeTradePartlyRefund = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradePartlyRefund', content?: string | Taobao.Trade.TradePartlyRefund } };
  /** {@link Taobao.Trade.TradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息} */
  type TaobaoTradeTradePartlySellerShip = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradePartlySellerShip', content?: string | Taobao.Trade.TradePartlySellerShip } };
  /** {@link Taobao.Trade.TradeRated 淘宝交易 > 交易评价变更消息} */
  type TaobaoTradeTradeRated = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeRated', content?: string | Taobao.Trade.TradeRated } };
  /** {@link Taobao.Trade.TradeSellerShip 淘宝交易 > 卖家发货消息} */
  type TaobaoTradeTradeSellerShip = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeSellerShip', content?: string | Taobao.Trade.TradeSellerShip } };
  /** {@link Taobao.Trade.TradeSuccess 淘宝交易 > 交易成功消息} */
  type TaobaoTradeTradeSuccess = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeSuccess', content?: string | Taobao.Trade.TradeSuccess } };
  /** {@link Taobao.Trade.TradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  type TaobaoTradeTradeTimeoutRemind = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeTimeoutRemind', content?: string | Taobao.Trade.TradeTimeoutRemind } };
  /** {@link Taobao.Train.AgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  type TaobaoTrainAgentQueryInfoNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_AgentQueryInfoNotify', content?: string | Taobao.Train.AgentQueryInfoNotify } };
  /** {@link Taobao.Train.OrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  type TaobaoTrainOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_OrderNotify', content?: string | Taobao.Train.OrderNotify } };
  /** {@link Taobao.Train.ThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  type TaobaoTrainThirdPartyTradeNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_ThirdPartyTradeNotify', content?: string | Taobao.Train.ThirdPartyTradeNotify } };
  /** {@link Taobao.Train.TradeNotify 淘宝火车票 > 火车票订单消息} */
  type TaobaoTrainTradeNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_TradeNotify', content?: string | Taobao.Train.TradeNotify } };
  /** {@link Taobao.Uscesl.AlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  type TaobaoUsceslAlarmCreate = Message & { content?: MessageContent & { topic?: 'taobao_uscesl_AlarmCreate', content?: string | Taobao.Uscesl.AlarmCreate } };
  /** {@link Taobao.Uscesl.BindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  type TaobaoUsceslBindResult = Message & { content?: MessageContent & { topic?: 'taobao_uscesl_BindResult', content?: string | Taobao.Uscesl.BindResult } };
  /** {@link Taobao.Waimai.GrabOrderResult 淘宝点点 > 点点送抢单结果通知消息} */
  type TaobaoWaimaiGrabOrderResult = Message & { content?: MessageContent & { topic?: 'taobao_waimai_GrabOrderResult', content?: string | Taobao.Waimai.GrabOrderResult } };
  /** {@link Taobao.Waimai.OrderClose 淘宝点点 > 淘点点外卖订单关闭消息通知} */
  type TaobaoWaimaiOrderClose = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderClose', content?: string | Taobao.Waimai.OrderClose } };
  /** {@link Taobao.Waimai.OrderComplain 淘宝点点 > 点点送订单投诉} */
  type TaobaoWaimaiOrderComplain = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderComplain', content?: string | Taobao.Waimai.OrderComplain } };
  /** {@link Taobao.Waimai.OrderComplainCancel 淘宝点点 > 点点送订单撤诉} */
  type TaobaoWaimaiOrderComplainCancel = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderComplainCancel', content?: string | Taobao.Waimai.OrderComplainCancel } };
  /** {@link Taobao.Waimai.OrderComplainResult 淘宝点点 > 点点送订单投诉结果} */
  type TaobaoWaimaiOrderComplainResult = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderComplainResult', content?: string | Taobao.Waimai.OrderComplainResult } };
  /** {@link Taobao.Waimai.OrderDispatch 淘宝点点 > 点点送订单通知消息} */
  type TaobaoWaimaiOrderDispatch = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderDispatch', content?: string | Taobao.Waimai.OrderDispatch } };
  /** {@link Taobao.Waimai.OrderDispatchSimple 淘宝点点 > 点点送派单通知} */
  type TaobaoWaimaiOrderDispatchSimple = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderDispatchSimple', content?: string | Taobao.Waimai.OrderDispatchSimple } };
  /** {@link Taobao.Waimai.OrderPush 淘宝点点 > 点点送接单广播通知消息} */
  type TaobaoWaimaiOrderPush = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderPush', content?: string | Taobao.Waimai.OrderPush } };
  /** {@link Taobao.Waimai.OrderRemind 淘宝点点 > 点点送催单消息通知} */
  type TaobaoWaimaiOrderRemind = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OrderRemind', content?: string | Taobao.Waimai.OrderRemind } };
  /** {@link Taobao.Waimai.OuterOrderDispatch 淘宝点点 > 点点送外部订单通知消息} */
  type TaobaoWaimaiOuterOrderDispatch = Message & { content?: MessageContent & { topic?: 'taobao_waimai_OuterOrderDispatch', content?: string | Taobao.Waimai.OuterOrderDispatch } };
  /** {@link Taobao.Wisdomstore.RecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  type TaobaoWisdomstoreRecognitionNotice = Message & { content?: MessageContent & { topic?: 'taobao_wisdomstore_RecognitionNotice', content?: string | Taobao.Wisdomstore.RecognitionNotice } };
  /** {@link Taobao.Wisdomstore.RecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  type TaobaoWisdomstoreRecognitionPush = Message & { content?: MessageContent & { topic?: 'taobao_wisdomstore_RecognitionPush', content?: string | Taobao.Wisdomstore.RecognitionPush } };
  /** {@link Taobao.Xianyu.RentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  type TaobaoXianyuRentalItemReturnCanceled = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalItemReturnCanceled', content?: string | Taobao.Xianyu.RentalItemReturnCanceled } };
  /** {@link Taobao.Xianyu.RentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  type TaobaoXianyuRentalItemReturnReserved = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalItemReturnReserved', content?: string | Taobao.Xianyu.RentalItemReturnReserved } };
  /** {@link Taobao.Xianyu.RentalOrderCanceled 闲鱼 > 租赁订单取消} */
  type TaobaoXianyuRentalOrderCanceled = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalOrderCanceled', content?: string | Taobao.Xianyu.RentalOrderCanceled } };
  /** {@link Taobao.Xianyu.RentalOrderCreated 闲鱼 > 租赁订单创建} */
  type TaobaoXianyuRentalOrderCreated = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalOrderCreated', content?: string | Taobao.Xianyu.RentalOrderCreated } };
  /** {@link Taobao.Xiaowei.Message IOT-智能制造 > 获取推送消息} */
  type TaobaoXiaoweiMessage = Message & { content?: MessageContent & { topic?: 'taobao_xiaowei_Message', content?: string | Taobao.Xiaowei.Message } };
  /** {@link Tmall.Aliauto.StepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  type TmallAliautoStepOrderPartConfirmed = Message & { content?: MessageContent & { topic?: 'tmall_aliauto_StepOrderPartConfirmed', content?: string | Tmall.Aliauto.StepOrderPartConfirmed } };
  /** {@link Tmall.Auto.TradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  type TmallAutoTradeModify = Message & { content?: MessageContent & { topic?: 'tmall_auto_TradeModify', content?: string | Tmall.Auto.TradeModify } };
  /** {@link Tmall.Auto.TwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  type TmallAutoTwoWheelsReceiptCreate = Message & { content?: MessageContent & { topic?: 'tmall_auto_TwoWheelsReceiptCreate', content?: string | Tmall.Auto.TwoWheelsReceiptCreate } };
  /** {@link Tmall.Car.ContractSign 天猫汽车 > 合同签署消息} */
  type TmallCarContractSign = Message & { content?: MessageContent & { topic?: 'tmall_car_ContractSign', content?: string | Tmall.Car.ContractSign } };
  /** {@link Tmall.Car.FinanceMsg 天猫汽车 > 汽车金融消息} */
  type TmallCarFinanceMsg = Message & { content?: MessageContent & { topic?: 'tmall_car_FinanceMsg', content?: string | Tmall.Car.FinanceMsg } };
  /** {@link Tmall.Channel.ApplyOrderChange 渠道中心API > 申请单变更消息} */
  type TmallChannelApplyOrderChange = Message & { content?: MessageContent & { topic?: 'tmall_channel_ApplyOrderChange', content?: string | Tmall.Channel.ApplyOrderChange } };
  /** {@link Tmall.Channel.DeliverOrderChange 渠道中心API > 发货单消息变更} */
  type TmallChannelDeliverOrderChange = Message & { content?: MessageContent & { topic?: 'tmall_channel_DeliverOrderChange', content?: string | Tmall.Channel.DeliverOrderChange } };
  /** {@link Tmall.Channel.PurchaseOrderChange 渠道中心API > 采购单变更消息} */
  type TmallChannelPurchaseOrderChange = Message & { content?: MessageContent & { topic?: 'tmall_channel_PurchaseOrderChange', content?: string | Tmall.Channel.PurchaseOrderChange } };
  /** {@link Tmall.Channel.StopOrderChange 渠道中心API > 停止发货单变更消息} */
  type TmallChannelStopOrderChange = Message & { content?: MessageContent & { topic?: 'tmall_channel_StopOrderChange', content?: string | Tmall.Channel.StopOrderChange } };
  /** {@link Tmall.Fuwu.AnomalyRecourse 天猫服务 > 天猫服务平台一键求助单消息队列} */
  type TmallFuwuAnomalyRecourse = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_AnomalyRecourse', content?: string | Tmall.Fuwu.AnomalyRecourse } };
  /** {@link Tmall.Fuwu.AnomalyRecourseStatusUpdate 天猫服务 > 一键求助状态变更消息} */
  type TmallFuwuAnomalyRecourseStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_AnomalyRecourseStatusUpdate', content?: string | Tmall.Fuwu.AnomalyRecourseStatusUpdate } };
  /** {@link Tmall.Fuwu.ElectricMaintenanceWorkCardComplete 天猫服务 > 天猫服务消电维修工单完结消息} */
  type TmallFuwuElectricMaintenanceWorkCardComplete = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_ElectricMaintenanceWorkCardComplete', content?: string | Tmall.Fuwu.ElectricMaintenanceWorkCardComplete } };
  /** {@link Tmall.Fuwu.ElectricWarrantyCodeStatusUpdate 天猫服务 > 天猫服务消电保修码状态变更} */
  type TmallFuwuElectricWarrantyCodeStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_ElectricWarrantyCodeStatusUpdate', content?: string | Tmall.Fuwu.ElectricWarrantyCodeStatusUpdate } };
  /** {@link Tmall.Fuwu.HomeDecorationSupplyRuleUpdate 天猫服务 > 天猫服务家装优质供给规则变更} */
  type TmallFuwuHomeDecorationSupplyRuleUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_HomeDecorationSupplyRuleUpdate', content?: string | Tmall.Fuwu.HomeDecorationSupplyRuleUpdate } };
  /** {@link Tmall.Fuwu.LogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  type TmallFuwuLogisticsInfoMessage = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_LogisticsInfoMessage', content?: string | Tmall.Fuwu.LogisticsInfoMessage } };
  /** {@link Tmall.Fuwu.RateMessageTP 天猫服务 > 消费者评价成功top消息} */
  type TmallFuwuRateMessageTP = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_RateMessageTP', content?: string | Tmall.Fuwu.RateMessageTP } };
  /** {@link Tmall.Fuwu.ServiceItemUpdate 天猫服务 > 服务商品信息变更消息} */
  type TmallFuwuServiceItemUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_ServiceItemUpdate', content?: string | Tmall.Fuwu.ServiceItemUpdate } };
  /** {@link Tmall.Fuwu.ServiceMonitorMessage 天猫服务 > 服务预警消息} */
  type TmallFuwuServiceMonitorMessage = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_ServiceMonitorMessage', content?: string | Tmall.Fuwu.ServiceMonitorMessage } };
  /** {@link Tmall.Fuwu.ServiceStoreRegister 天猫服务 > 服务网点注册消息} */
  type TmallFuwuServiceStoreRegister = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_ServiceStoreRegister', content?: string | Tmall.Fuwu.ServiceStoreRegister } };
  /** {@link Tmall.Fuwu.SettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送} */
  type TmallFuwuSettleAdjustmentStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_SettleAdjustmentStatusUpdate', content?: string | Tmall.Fuwu.SettleAdjustmentStatusUpdate } };
  /** {@link Tmall.Fuwu.SettleSupplierFcBill 天猫服务 > 天猫服务服务商分账消息推送} */
  type TmallFuwuSettleSupplierFcBill = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_SettleSupplierFcBill', content?: string | Tmall.Fuwu.SettleSupplierFcBill } };
  /** {@link Tmall.Fuwu.WorkcardContract 天猫服务 > 天猫服务履约合同单} */
  type TmallFuwuWorkcardContract = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_WorkcardContract', content?: string | Tmall.Fuwu.WorkcardContract } };
  /** {@link Tmall.Fuwu.WorkcardInfo 天猫服务 > 天猫服务任务工单} */
  type TmallFuwuWorkcardInfo = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_WorkcardInfo', content?: string | Tmall.Fuwu.WorkcardInfo } };
  /** {@link Tmall.Fuwu.WorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  type TmallFuwuWorkcardStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_WorkcardStatusUpdate', content?: string | Tmall.Fuwu.WorkcardStatusUpdate } };
  /** {@link Tmall.Mei.MemberRegister 天猫美妆 > 飞行入会消息} */
  type TmallMeiMemberRegister = Message & { content?: MessageContent & { topic?: 'tmall_mei_MemberRegister', content?: string | Tmall.Mei.MemberRegister } };
  /** {@link Tmall.Mei.PointChange 天猫美妆 > 品牌积分变更通知} */
  type TmallMeiPointChange = Message & { content?: MessageContent & { topic?: 'tmall_mei_PointChange', content?: string | Tmall.Mei.PointChange } };
  /** {@link Tmall.Nrt.ItemsToEasyHome 新零售终端下行消息 > 商品信息同步} */
  type TmallNrtItemsToEasyHome = Message & { content?: MessageContent & { topic?: 'tmall_nrt_ItemsToEasyHome', content?: string | Tmall.Nrt.ItemsToEasyHome } };
  /** {@link Tmall.Omnichannel.InventoryChange 聚石塔 > 商品库存变化} */
  type TmallOmnichannelInventoryChange = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_InventoryChange', content?: string | Tmall.Omnichannel.InventoryChange } };
  /** {@link Tmall.Omnichannel.InventoryZero 聚石塔 > 商品库存归零} */
  type TmallOmnichannelInventoryZero = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_InventoryZero', content?: string | Tmall.Omnichannel.InventoryZero } };
  /** {@link Tmall.Omnichannel.ItemDescChange 聚石塔 > 商品描述变化} */
  type TmallOmnichannelItemDescChange = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_ItemDescChange', content?: string | Tmall.Omnichannel.ItemDescChange } };
  /** {@link Tmall.Omnichannel.ItemDownShelf 聚石塔 > 商品下架} */
  type TmallOmnichannelItemDownShelf = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_ItemDownShelf', content?: string | Tmall.Omnichannel.ItemDownShelf } };
  /** {@link Tmall.Omnichannel.ItemImageChange 聚石塔 > 商品图片变化} */
  type TmallOmnichannelItemImageChange = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_ItemImageChange', content?: string | Tmall.Omnichannel.ItemImageChange } };
  /** {@link Tmall.Omnichannel.ItemPriceChange 聚石塔 > 商品价格变更} */
  type TmallOmnichannelItemPriceChange = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_ItemPriceChange', content?: string | Tmall.Omnichannel.ItemPriceChange } };
  /** {@link Tmall.Servicecenter.TaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  type TmallServicecenterTaskUpdate = Message & { content?: MessageContent & { topic?: 'tmall_servicecenter_TaskUpdate', content?: string | Tmall.Servicecenter.TaskUpdate } };
  /** {@link Tmall.Serviceplatform.SignCreate 天猫服务 > 签到消息} */
  type TmallServiceplatformSignCreate = Message & { content?: MessageContent & { topic?: 'tmall_serviceplatform_SignCreate', content?: string | Tmall.Serviceplatform.SignCreate } };
  /** {@link Tmall.Serviceplatform.WorkerLeave 天猫服务 > 工人请假发送消息} */
  type TmallServiceplatformWorkerLeave = Message & { content?: MessageContent & { topic?: 'tmall_serviceplatform_WorkerLeave', content?: string | Tmall.Serviceplatform.WorkerLeave } };
  /** {@link Trip.Hotel.BottomPriceRuleChange 酒店商品消息api > 酒店商品底价加价商品加价规则消息通知} */
  type TripHotelBottomPriceRuleChange = Message & { content?: MessageContent & { topic?: 'trip_hotel_BottomPriceRuleChange', content?: string | Trip.Hotel.BottomPriceRuleChange } };
  /** {@link Trip.Hotel.HotelChange 酒店商品消息api > 飞猪卖家酒店实体变更消息同步} */
  type TripHotelHotelChange = Message & { content?: MessageContent & { topic?: 'trip_hotel_HotelChange', content?: string | Trip.Hotel.HotelChange } };
  /** {@link Trip.Hotel.RateChange 酒店商品消息api > 酒店rate信息变更} */
  type TripHotelRateChange = Message & { content?: MessageContent & { topic?: 'trip_hotel_RateChange', content?: string | Trip.Hotel.RateChange } };
  /** {@link Trip.Hotel.RatePlanChange 酒店商品消息api > 酒店价格计划消息} */
  type TripHotelRatePlanChange = Message & { content?: MessageContent & { topic?: 'trip_hotel_RatePlanChange', content?: string | Trip.Hotel.RatePlanChange } };
  /** {@link Trip.Hotel.RoomChange 酒店商品消息api > room变更消息} */
  type TripHotelRoomChange = Message & { content?: MessageContent & { topic?: 'trip_hotel_RoomChange', content?: string | Trip.Hotel.RoomChange } };
  /** {@link Trip.Hotel.RoomTypeChange 酒店商品消息api > 酒店房型消息} */
  type TripHotelRoomTypeChange = Message & { content?: MessageContent & { topic?: 'trip_hotel_RoomTypeChange', content?: string | Trip.Hotel.RoomTypeChange } };
  /** {@link Wdk.Market.OperateSkuError 五道口营销 > 营销操作错误消息} */
  type WdkMarketOperateSkuError = Message & { content?: MessageContent & { topic?: 'wdk_market_OperateSkuError', content?: string | Wdk.Market.OperateSkuError } };
  /** {@link Wdk.Market.OperateSkuErrror 五道口营销 > 营销发布商品错误} */
  type WdkMarketOperateSkuErrror = Message & { content?: MessageContent & { topic?: 'wdk_market_OperateSkuErrror', content?: string | Wdk.Market.OperateSkuErrror } };
  /** {@link Wdk.Open.DataPublishError 五道口营销 > 五道口开放数据发布错误} */
  type WdkOpenDataPublishError = Message & { content?: MessageContent & { topic?: 'wdk_open_DataPublishError', content?: string | Wdk.Open.DataPublishError } };
  /** {@link Wdk.Open.DataRelation 五道口营销 > 五道口开放数据关联通知} */
  type WdkOpenDataRelation = Message & { content?: MessageContent & { topic?: 'wdk_open_DataRelation', content?: string | Wdk.Open.DataRelation } };
  /** {@link Xianyu.Aftersale.OrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  type XianyuAftersaleOrderSyn = Message & { content?: MessageContent & { topic?: 'xianyu_aftersale_OrderSyn', content?: string | Xianyu.Aftersale.OrderSyn } };
  /** {@link Xianyu.Appraise.OrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  type XianyuAppraiseOrderSyn = Message & { content?: MessageContent & { topic?: 'xianyu_appraise_OrderSyn', content?: string | Xianyu.Appraise.OrderSyn } };
  /** {@link Xianyu.Car.OrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  type XianyuCarOrderStatusSync = Message & { content?: MessageContent & { topic?: 'xianyu_car_OrderStatusSync', content?: string | Xianyu.Car.OrderStatusSync } };
  /** {@link Xianyu.Recycle.OrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  type XianyuRecycleOrderStatusSync = Message & { content?: MessageContent & { topic?: 'xianyu_recycle_OrderStatusSync', content?: string | Xianyu.Recycle.OrderStatusSync } };
  /** {@link Xianyu.Recycle.SpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  type XianyuRecycleSpuModifySync = Message & { content?: MessageContent & { topic?: 'xianyu_recycle_SpuModifySync', content?: string | Xianyu.Recycle.SpuModifySync } };
  /** {@link Xianyu.Register.StatusChange 闲鱼 > 闲鱼SPU挂载上下线消息} */
  type XianyuRegisterStatusChange = Message & { content?: MessageContent & { topic?: 'xianyu_register_StatusChange', content?: string | Xianyu.Register.StatusChange } };
  /** {@link Xianyu.Template.QuesChange 闲鱼 > 闲鱼问卷变更} */
  type XianyuTemplateQuesChange = Message & { content?: MessageContent & { topic?: 'xianyu_template_QuesChange', content?: string | Xianyu.Template.QuesChange } };
  /** {@link Xianyu.Template.StatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  type XianyuTemplateStatusChange = Message & { content?: MessageContent & { topic?: 'xianyu_template_StatusChange', content?: string | Xianyu.Template.StatusChange } };
  /** {@link Xianyu.Tender.OrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  type XianyuTenderOrderSyn = Message & { content?: MessageContent & { topic?: 'xianyu_tender_OrderSyn', content?: string | Xianyu.Tender.OrderSyn } };
  /** {@link Youku.Tvosappstore.AppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  type YoukuTvosappstoreAppStatusChange = Message & { content?: MessageContent & { topic?: 'youku_tvosappstore_AppStatusChange', content?: string | Youku.Tvosappstore.AppStatusChange } };
  /** {@link Yunos.Yoc.DatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  type YunosYocDatapoolSandbox = Message & { content?: MessageContent & { topic?: 'yunos_yoc_DatapoolSandbox', content?: string | Yunos.Yoc.DatapoolSandbox } };
  /** {@link Yunos.Yoc.MessageService YunOS YoC > yoc消息服务} */
  type YunosYocMessageService = Message & { content?: MessageContent & { topic?: 'yunos_yoc_MessageService', content?: string | Yunos.Yoc.MessageService } };
  /**
   * - {@link AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息}
   * - {@link AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新}
   * - {@link AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新}
   */
  type AlibabaAdlab = AlibabaAdlabIotDevice
    | AlibabaAdlabOrderItemEtaUpdate
    | AlibabaAdlabOrderItemStatus;
  /**
   * - {@link AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知}
   */
  type AlibabaAlicom = AlibabaAlicomFlowGiftSendNotify;
  /**
   * - {@link AlibabaAlihealthBillProcessStatusNotify 阿里健康追溯码 > 单据处理状态通知}
   * - {@link AlibabaAlihealthDoctorMessage 阿里健康追溯码 > 医生、服务相关消息}
   * - {@link AlibabaAlihealthNrmopOrderStatusChange 阿里健康追溯码 > 中台订单状态变化推送}
   * - {@link AlibabaAlihealthOrderStatusChange 阿里健康追溯码 > 平台通知三方机构"订单状态变更"}
   * - {@link AlibabaAlihealthTradeOrderStatusChange 阿里健康追溯码 > O2O订单状态变更通知}
   * - {@link AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康追溯码 > 疫苗交易预约信息变动}
   * - {@link AlibabaAlihealthVcRegisterCancel 阿里健康追溯码 > 用户取消订阅缺苗登记同步isv}
   */
  type AlibabaAlihealth = AlibabaAlihealthBillProcessStatusNotify
    | AlibabaAlihealthDoctorMessage
    | AlibabaAlihealthNrmopOrderStatusChange
    | AlibabaAlihealthOrderStatusChange
    | AlibabaAlihealthTradeOrderStatusChange
    | AlibabaAlihealthTradeVaccineSubscribeChange
    | AlibabaAlihealthVcRegisterCancel;
  /**
   * - {@link AlibabaAlinkDeviceDataPush 阿里物联 > 设备数据推送}
   * - {@link AlibabaAlinkDeviceMessage 阿里物联 > 设备报警消息}
   */
  type AlibabaAlink = AlibabaAlinkDeviceDataPush
    | AlibabaAlinkDeviceMessage;
  /**
   * - {@link AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执}
   * - {@link AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知}
   * - {@link AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送}
   * - {@link AlibabaAliqinFcCallRecord 阿里通信 > 录音回执}
   * - {@link AlibabaAliqinFcFlowUp 阿里通信 > 流量直充状态报告}
   * - {@link AlibabaAliqinFcSmsDR 阿里通信 > 短消息发送结果报告}
   * - {@link AlibabaAliqinFcSmsUp 阿里通信 > 短信上行}
   * - {@link AlibabaAliqinFcTmpStatus 阿里通信 > 语音呼叫中间状态消息}
   * - {@link AlibabaAliqinFlowDirectCharge 阿里通信 > 流量直充}
   * - {@link AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知}
   * - {@link AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知}
   * - {@link AlibabaAliqinTaFcCallCdr 阿里通信 > 语音呼叫结果推送}
   * - {@link AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告}
   */
  type AlibabaAliqin = AlibabaAliqinDigitalSmsTemplateDR
    | AlibabaAliqinFcActiveIotcard
    | AlibabaAliqinFcCallCdr
    | AlibabaAliqinFcCallRecord
    | AlibabaAliqinFcFlowUp
    | AlibabaAliqinFcSmsDR
    | AlibabaAliqinFcSmsUp
    | AlibabaAliqinFcTmpStatus
    | AlibabaAliqinFlowDirectCharge
    | AlibabaAliqinIotPersonalConfirmNotice
    | AlibabaAliqinIotStatusNotice
    | AlibabaAliqinTaFcCallCdr
    | AlibabaAliqinTaFcSmsDR;
  /**
   * - {@link AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知}
   * - {@link AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息}
   * - {@link AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知}
   * - {@link AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息}
   * - {@link AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息}
   * - {@link AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息}
   */
  type AlibabaEinvoice = AlibabaEinvoiceApplyUpdate
    | AlibabaEinvoiceCompanyDoAction
    | AlibabaEinvoiceOrderRefundResult
    | AlibabaEinvoiceRegisterFlowChange
    | AlibabaEinvoiceRegisterFlowCreate
    | AlibabaEinvoiceTaxDeviceOrder;
  /**
   * - {@link AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息}
   */
  type AlibabaFuwu = AlibabaFuwuOrderPaid;
  /**
   * - {@link AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息}
   */
  type AlibabaHappytrip = AlibabaHappytripOrderNotify;
  /**
   * - {@link AlibabaIfpPackageCfcContainer 五道口配送 > 同城履约包裹状态变更消息}
   */
  type AlibabaIfp = AlibabaIfpPackageCfcContainer;
  /**
   * - {@link AlibabaInvoiceApply 电子发票 > 开票申请}
   * - {@link AlibabaInvoiceApplyResult 电子发票 > 开票申请审核结果}
   * - {@link AlibabaInvoiceDiskOffline 电子发票 > 税盘下架单新增和更新通知}
   * - {@link AlibabaInvoiceFlowBuket 电子发票 > 资源包开通/订购记录同步}
   * - {@link AlibabaInvoiceGetXmlFile 电子发票 > 获取xml发票文件}
   * - {@link AlibabaInvoiceInvoiceApply 电子发票 > 税控服务开票申请}
   * - {@link AlibabaInvoiceLogistics 电子发票 > 发票对外通知物流信息}
   * - {@link AlibabaInvoicePaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）}
   * - {@link AlibabaInvoicePreConsulting 电子发票 > 电子发票售前咨询}
   * - {@link AlibabaInvoiceQuery 电子发票 > 数据查询请求}
   * - {@link AlibabaInvoiceQueryInvoice 电子发票 > 查询发票信息}
   * - {@link AlibabaInvoiceRegist 电子发票 > 入驻阿里发票平台}
   * - {@link AlibabaInvoiceResultReturn 电子发票 > 开票请求结果}
   * - {@link AlibabaInvoiceStatusChange 电子发票 > 发票状态变更消息}
   * - {@link AlibabaInvoiceTaxChange 电子发票 > 商家税号变更}
   * - {@link AlibabaInvoiceUnissue 电子发票 > 创建未开具发票通知}
   */
  type AlibabaInvoice = AlibabaInvoiceApply
    | AlibabaInvoiceApplyResult
    | AlibabaInvoiceDiskOffline
    | AlibabaInvoiceFlowBuket
    | AlibabaInvoiceGetXmlFile
    | AlibabaInvoiceInvoiceApply
    | AlibabaInvoiceLogistics
    | AlibabaInvoicePaperOpsReturn
    | AlibabaInvoicePreConsulting
    | AlibabaInvoiceQuery
    | AlibabaInvoiceQueryInvoice
    | AlibabaInvoiceRegist
    | AlibabaInvoiceResultReturn
    | AlibabaInvoiceStatusChange
    | AlibabaInvoiceTaxChange
    | AlibabaInvoiceUnissue;
  /**
   * - {@link AlibabaLstBmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化}
   * - {@link AlibabaLstBroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息}
   * - {@link AlibabaLstCashierSync 零售通_公共 > 收银快照同步消息}
   * - {@link AlibabaLstGoodsSync 零售通_公共 > 商品同步消息}
   * - {@link AlibabaLstInventorySync 零售通_公共 > 商品库存修改同步消息}
   * - {@link AlibabaLstMsgTest 零售通_公共 > 消息测试}
   * - {@link AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息}
   * - {@link AlibabaLstRefundChange 零售通_公共 > 订单退单}
   * - {@link AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志}
   * - {@link AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息}
   */
  type AlibabaLst = AlibabaLstBmOrderLogisticsChange
    | AlibabaLstBroadcastSelfOrderShipChange
    | AlibabaLstCashierSync
    | AlibabaLstGoodsSync
    | AlibabaLstInventorySync
    | AlibabaLstMsgTest
    | AlibabaLstOrderChange
    | AlibabaLstRefundChange
    | AlibabaLstSpeakerAdvertPlayRecord
    | AlibabaLstSupplierOrderChange;
  /**
   * - {@link AlibabaMmcOpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息}
   * - {@link AlibabaMmcOpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息}
   * - {@link AlibabaMmcOrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息}
   * - {@link AlibabaMmcPriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息}
   * - {@link AlibabaMmcRefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息}
   */
  type AlibabaMmc = AlibabaMmcOpenStockAlterNotify
    | AlibabaMmcOpenStockItemAlter
    | AlibabaMmcOrderNotify
    | AlibabaMmcPriceUpdate
    | AlibabaMmcRefundOrderNotify;
  /**
   * - {@link AlibabaMonitorEventSendMessage 聚石塔监控告警 > 聚石塔监控告警消息投递}
   * - {@link AlibabaMonitorMessageSend 聚石塔监控告警 > 聚石塔监控告警消息投递}
   */
  type AlibabaMonitor = AlibabaMonitorEventSendMessage
    | AlibabaMonitorMessageSend;
  /**
   * - {@link AlibabaMosSaleOrder 银泰开放平台消息 > 销售单状态变更}
   * - {@link AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息}
   */
  type AlibabaMos = AlibabaMosSaleOrder
    | AlibabaMosSaleOrderRefund;
  /**
   * - {@link AlibabaMsdSettlementBillDetail 天猫服务 > 喵速达服务供应链结算单明细消息}
   */
  type AlibabaMsd = AlibabaMsdSettlementBillDetail;
  /**
   * - {@link AlibabaMsfserviceAuditCreate 天猫服务 > 喵师傅审核单通知}
   * - {@link AlibabaMsfserviceExtrafeeRecordCreate 天猫服务 > 喵师傅收费单消息通知}
   * - {@link AlibabaMsfserviceReminderCreate 天猫服务 > 催单消息}
   */
  type AlibabaMsfservice = AlibabaMsfserviceAuditCreate
    | AlibabaMsfserviceExtrafeeRecordCreate
    | AlibabaMsfserviceReminderCreate;
  /**
   * - {@link AlibabaNazcaAbandonCert 网上法庭 > 作废存证消息接口}
   * - {@link AlibabaNazcaQueryChargeNum 网上法庭 > 查询收费数量}
   * - {@link AlibabaNazcaSaveCert 网上法庭 > 发起存证消息接口}
   * - {@link AlibabaNazcaUpdateChargeNum 网上法庭 > 更新收费数量}
   */
  type AlibabaNazca = AlibabaNazcaAbandonCert
    | AlibabaNazcaQueryChargeNum
    | AlibabaNazcaSaveCert
    | AlibabaNazcaUpdateChargeNum;
  /**
   * - {@link AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知}
   * - {@link AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息}
   * - {@link AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息}
   * - {@link AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息}
   * - {@link AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息}
   * - {@link AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息}
   * - {@link AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息}
   * - {@link AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息}
   */
  type AlibabaNlife = AlibabaNlifeBToBTradeStatusNotify
    | AlibabaNlifeBToCTradeOrderSync
    | AlibabaNlifeBtoBTradeDeliverNotify
    | AlibabaNlifeBtoBTradeEffectiveNotify
    | AlibabaNlifeBtobTradeRefundConfirmMsgNotify
    | AlibabaNlifeBtobTradeRefundNotify
    | AlibabaNlifeInstorageDiffAuditNotify
    | AlibabaNlifeItemUpdate;
  /**
   * - {@link AlibabaPurResourceOrderCancelNotify 信息平台-采购 > 取消订单结果通知}
   * - {@link AlibabaPurResourceOrderShipNotify 信息平台-采购 > 发货提醒}
   */
  type AlibabaPur = AlibabaPurResourceOrderCancelNotify
    | AlibabaPurResourceOrderShipNotify;
  /**
   * - {@link AlibabaServiceplatformFulfilTask 天猫服务 > 服务供应链核销单消息}
   * - {@link AlibabaServiceplatformServiceOrder 天猫服务 > 服务供应链服务单消息}
   */
  type AlibabaServiceplatform = AlibabaServiceplatformFulfilTask
    | AlibabaServiceplatformServiceOrder;
  /**
   * - {@link AlibabaSpNotifyPaymentResult 阿里智付 > 通知付款结果}
   */
  type AlibabaSp = AlibabaSpNotifyPaymentResult;
  /**
   * - {@link AlibabaTaxEmployeeSignResult 阿里发票 > 税优雇员签约结果消息}
   * - {@link AlibabaTaxSalaryPayResult 阿里发票 > 税优发薪结果通知}
   */
  type AlibabaTax = AlibabaTaxEmployeeSignResult
    | AlibabaTaxSalaryPayResult;
  /**
   * - {@link AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息}
   * - {@link AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息}
   */
  type AlibabaTianji = AlibabaTianjiContractOrder
    | AlibabaTianjiOrderCreate;
  /**
   * - {@link AlibabaWdkChannelCommentAudit 五道口订单 > 差评回评}
   * - {@link AlibabaWdkChannelOrderCancel 五道口订单 > 五道口售中取消外部订单消息}
   * - {@link AlibabaWdkChannelOrderCsRefundAudit 五道口订单 > 客服审核退款结果}
   * - {@link AlibabaWdkChannelOrderCsUserrefund 五道口订单 > 客服代客发起售后退款(整单/部分)}
   * - {@link AlibabaWdkChannelOrderStatusChange 五道口订单 > 订单状态变更消息}
   * - {@link AlibabaWdkChannelStockSync 五道口订单 > 库存同步}
   * - {@link AlibabaWdkFulfillOrderChange 五道口订单 > 售中履约变更消息}
   * - {@link AlibabaWdkStoreItemUpdate 五道口订单 > 商家渠道商品变动消息}
   */
  type AlibabaWdk = AlibabaWdkChannelCommentAudit
    | AlibabaWdkChannelOrderCancel
    | AlibabaWdkChannelOrderCsRefundAudit
    | AlibabaWdkChannelOrderCsUserrefund
    | AlibabaWdkChannelOrderStatusChange
    | AlibabaWdkChannelStockSync
    | AlibabaWdkFulfillOrderChange
    | AlibabaWdkStoreItemUpdate;
  /**
   * - {@link AlibabaWdkitemWarehouseSkuModify 五道口商品 > 五道口仓商品变更消息}
   */
  type AlibabaWdkitem = AlibabaWdkitemWarehouseSkuModify;
  /**
   * - {@link AlibabaWdkopRexAccountChange 五道口订单 > Rex用户信息变更消息}
   */
  type AlibabaWdkop = AlibabaWdkopRexAccountChange;
  /**
   * - {@link AlibabaWdkopenOrderMessage 五道口订单 > 五道口交易状态变更消息通知}
   * - {@link AlibabaWdkopenPriceAdjust 五道口订单 > 采购价变更消息}
   * - {@link AlibabaWdkopenRefundMessage 五道口订单 > 同城零售逆向交易消息}
   */
  type AlibabaWdkopen = AlibabaWdkopenOrderMessage
    | AlibabaWdkopenPriceAdjust
    | AlibabaWdkopenRefundMessage;
  /**
   * - {@link AlibabaWdkorderFulfillStatusChange 五道口订单 > 五道口订单履约状态变更消息}
   * - {@link AlibabaWdkorderInsuranceOrder 五道口订单 > 共享库存保险正向投保消息}
   * - {@link AlibabaWdkorderInsuranceRefund 五道口订单 > 共享库存保险逆向理赔消息}
   * - {@link AlibabaWdkorderOrderFulfillPush 五道口订单 > 订单履约状态变更消息}
   * - {@link AlibabaWdkorderOrderFulfillTokenPush 五道口订单 > 履约状态变更消息}
   * - {@link AlibabaWdkorderOrderStatusPush 五道口订单 > 猫超订单数据变更消息通知}
   * - {@link AlibabaWdkorderRefundOrgPoint 五道口订单 > 逆向单企业积分消息发送}
   * - {@link AlibabaWdkorderRefundSuccess 五道口订单 > 五道口淘鲜达逆向订单消息}
   * - {@link AlibabaWdkorderSoPo 五道口订单 > 共享库存SOPO}
   * - {@link AlibabaWdkorderStatusChange 五道口订单 > 五道口订单状态变更消息}
   * - {@link AlibabaWdkorderVoucherStatus 五道口订单 > 淘鲜达订单优惠券状态变更}
   */
  type AlibabaWdkorder = AlibabaWdkorderFulfillStatusChange
    | AlibabaWdkorderInsuranceOrder
    | AlibabaWdkorderInsuranceRefund
    | AlibabaWdkorderOrderFulfillPush
    | AlibabaWdkorderOrderFulfillTokenPush
    | AlibabaWdkorderOrderStatusPush
    | AlibabaWdkorderRefundOrgPoint
    | AlibabaWdkorderRefundSuccess
    | AlibabaWdkorderSoPo
    | AlibabaWdkorderStatusChange
    | AlibabaWdkorderVoucherStatus;
  /**
   * - {@link AlibabaWdktradeCouponInstance 五道口营销 > 营销券实例消息}
   */
  type AlibabaWdktrade = AlibabaWdktradeCouponInstance;
  /**
   * - {@link AlibabaYunioDataTransfer 平台消息 > YunIO数据流转}
   */
  type AlibabaYunio = AlibabaYunioDataTransfer;
  /**
   * - {@link AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步}
   */
  type AlicomAxb = AlicomAxbSubsEventSync;
  /**
   * - {@link AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知}
   */
  type AliexpressAeia = AliexpressAeiaTaskplatformInterestNotice;
  /**
   * - {@link AliexpressOrderFinish AE-交易 > 交易成功}
   * - {@link AliexpressOrderFundProcessing AE-交易 > 资金处理中}
   * - {@link AliexpressOrderInCancel AE-交易 > 取消订单中}
   * - {@link AliexpressOrderPlaceOrderSuccess AE-交易 > 下单成功}
   * - {@link AliexpressOrderRiskControl AE-交易 > 风控24小时}
   * - {@link AliexpressOrderSellerPartSendGoods AE-交易 > 等待部分发货}
   * - {@link AliexpressOrderWaitBuyerAcceptGoods AE-交易 > 等待买家收货}
   * - {@link AliexpressOrderWaitGroupSuccess AE-交易 > 等待成团}
   * - {@link AliexpressOrderWaitSellerExamineMoney AE-交易 > 待卖家验款}
   * - {@link AliexpressOrderWaitSellerSendGoods AE-交易 > 等待卖家发货}
   */
  type AliexpressOrder = AliexpressOrderFinish
    | AliexpressOrderFundProcessing
    | AliexpressOrderInCancel
    | AliexpressOrderPlaceOrderSuccess
    | AliexpressOrderRiskControl
    | AliexpressOrderSellerPartSendGoods
    | AliexpressOrderWaitBuyerAcceptGoods
    | AliexpressOrderWaitGroupSuccess
    | AliexpressOrderWaitSellerExamineMoney
    | AliexpressOrderWaitSellerSendGoods;
  /**
   * - {@link AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知}
   */
  type AlihealthCep = AlihealthCepOrderStatusChange;
  /**
   * - {@link AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送}
   * - {@link AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知}
   */
  type AlihealthYs = AlihealthYsOrderMemConsume
    | AlihealthYsOrderPushConsume;
  /**
   * - {@link AlitripAgentNotify 淘宝机票 > 商家机票业务通知}
   */
  type AlitripAgent = AlitripAgentNotify;
  /**
   * - {@link AlitripBtripCorpSignCallback 商旅API > 阿里商旅企业签约结果回调}
   * - {@link AlitripBtripExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息}
   */
  type AlitripBtrip = AlitripBtripCorpSignCallback
    | AlitripBtripExceedApplySubmit;
  /**
   * - {@link AlitripFlightChange 淘宝机票 > 航变消息}
   */
  type AlitripFlight = AlitripFlightChange;
  /**
   * - {@link AlitripIesrFlightChange 淘宝机票 > 航变数据推送}
   * - {@link AlitripIesrTicketMessage 淘宝机票 > 国际运价采购票消息}
   */
  type AlitripIesr = AlitripIesrFlightChange
    | AlitripIesrTicketMessage;
  /**
   * - {@link AlitripIetradeChangeMsg 淘宝机票 > 国际机票改签订单状态消息}
   * - {@link AlitripIetradeOrderMsg 淘宝机票 > 国际机票订单消息}
   * - {@link AlitripIetradeRefundMsg 淘宝机票 > 国际机票退票订单状态消息}
   */
  type AlitripIetrade = AlitripIetradeChangeMsg
    | AlitripIetradeOrderMsg
    | AlitripIetradeRefundMsg;
  /**
   * - {@link AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息}
   * - {@link AlitripTrainRiskNotify 淘宝火车票 > 飞猪火车票风控消息}
   */
  type AlitripTrain = AlitripTrainAgentStopQuery
    | AlitripTrainRiskNotify;
  /**
   * - {@link AlitripTravelOrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息}
   * - {@link AlitripTravelPersonChanged 航旅度假交易 > 出行人信息变更消息}
   * - {@link AlitripTravelVisaService 航旅度假交易 > 签证消息服务}
   */
  type AlitripTravel = AlitripTravelOrderChanged
    | AlitripTravelPersonChanged
    | AlitripTravelVisaService;
  /**
   * - {@link AlitripTripticketTravellerCreate 航旅度假交易 > 旅行机票交易创建}
   */
  type AlitripTripticket = AlitripTripticketTravellerCreate;
  /**
   * - {@link AlitripVisaTradeDone 航旅度假交易 > 在线签证交易完成消息}
   */
  type AlitripVisa = AlitripVisaTradeDone;
  /**
   * - {@link AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步}
   */
  type AliyunIot = AliyunIotOrderSync;
  /**
   * - {@link AscpInsdustryCancelInquiry 天猫服务 > 送货入户并安装取消询价接口}
   */
  type AscpInsdustry = AscpInsdustryCancelInquiry;
  /**
   * - {@link BanmaRightTradeCreate 平台消息 > 斑马权益平台权益变更通知}
   */
  type BanmaRight = BanmaRightTradeCreate;
  /**
   * - {@link CainiaoConsignplatformLogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息}
   */
  type CainiaoConsignplatform = CainiaoConsignplatformLogisiticsDetail;
  /**
   * - {@link CainiaoIotAftersalesTicket IoT售后解决方案 > IoT售后工单信息消息}
   */
  type CainiaoIot = CainiaoIotAftersalesTicket;
  /**
   * - {@link DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送}
   * - {@link DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送}
   * - {@link DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票}
   * - {@link DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送}
   * - {@link DamaiDistributionRefundOrder 大麦第三方票务供应商接入 > 退票通知}
   * - {@link DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更}
   */
  type DamaiDistribution = DamaiDistributionPerformCancel
    | DamaiDistributionPerformStatus
    | DamaiDistributionPreSaleToNow
    | DamaiDistributionProjectStatus
    | DamaiDistributionRefundOrder
    | DamaiDistributionTicketItemStatus;
  /**
   * - {@link DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送}
   */
  type DamaiTrade = DamaiTradeTicketStatusPush;
  /**
   * - {@link FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化}
   */
  type FliggyBtrip = FliggyBtripHotelDistributionOrderChange;
  /**
   * - {@link FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务}
   */
  type FliggyJipiao = FliggyJipiaoFlightChange;
  /**
   * - {@link FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息}
   * - {@link FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息}
   * - {@link FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息}
   */
  type FliggyTicket = FliggyTicketOrderRefund
    | FliggyTicketOrderStatusChange
    | FliggyTicketVerifyNotify;
  /**
   * - {@link FuwuConfirmFail 服务市场 > 收入确认失败}
   * - {@link FuwuConfirmSuccess 服务市场 > 收入确认成功}
   */
  type FuwuConfirm = FuwuConfirmFail
    | FuwuConfirmSuccess;
  /**
   * - {@link GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马}
   * - {@link GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送}
   */
  type GovAuction = GovAuctionPushVehicleDataToBM
    | GovAuctionVehicleDataPush;
  /**
   * - {@link IdleAgreementStatusChange 闲鱼 > 闲鱼代扣消息通知}
   */
  type IdleAgreement = IdleAgreementStatusChange;
  /**
   * - {@link IdleAppraiseisvItemSyn 闲鱼已验货 > 已验货商品消息}
   * - {@link IdleAppraiseisvOrderSyn 闲鱼已验货 > 闲鱼已验货交易事件}
   * - {@link IdleAppraiseisvRefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件}
   */
  type IdleAppraiseisv = IdleAppraiseisvItemSyn
    | IdleAppraiseisvOrderSyn
    | IdleAppraiseisvRefundSyn;
  /**
   * - {@link IdleAutotradeOrderStateSync 闲鱼 > 闲鱼AutoTrade订单状态变更消息}
   * - {@link IdleAutotradeRefundSync 闲鱼 > 闲鱼AutoTrade逆向退款消息}
   */
  type IdleAutotrade = IdleAutotradeOrderStateSync
    | IdleAutotradeRefundSync;
  /**
   * - {@link IdleConsignmentOrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步}
   */
  type IdleConsignment = IdleConsignmentOrderSyn;
  /**
   * - {@link IdleConsignmentiiOrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步}
   */
  type IdleConsignmentii = IdleConsignmentiiOrderSyn;
  /**
   * - {@link IdleRecycleOrderStateSyn 闲鱼回收商消息 > 闲鱼回收业务订单消息}
   * - {@link IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息}
   * - {@link IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息}
   */
  type IdleRecycle = IdleRecycleOrderStateSyn
    | IdleRecycleOrderSyn
    | IdleRecycleRefundStatusModify;
  /**
   * - {@link IdleTopisvGlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知}
   * - {@link IdleTopisvItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知}
   * - {@link IdleTopisvRefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知}
   * - {@link IdleTopisvTradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知}
   */
  type IdleTopisv = IdleTopisvGlobalProductNotice
    | IdleTopisvItemNotice
    | IdleTopisvRefundNotice
    | IdleTopisvTradeNotice;
  /**
   * - {@link IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息}
   */
  type IdleTranferpay = IdleTranferpayOrderChange;
  /**
   * - {@link JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息}
   */
  type JaeTrade = JaeTradePaidSuccessed;
  /**
   * - {@link LstSupplierBroadcastFastRefundMessage 零售通_公共 > 零售通广播极速退款消息}
   * - {@link LstSupplierFastRefundMessageCreate 零售通_公共 > 品牌商极速退款消息创建}
   */
  type LstSupplier = LstSupplierBroadcastFastRefundMessage
    | LstSupplierFastRefundMessageCreate;
  /**
   * - {@link NiaochaoTccompassDockInfoChange 五道口配送 > 鸟潮站点变更消息}
   * - {@link NiaochaoTccompassMaterialCodeUpdate 五道口配送 > 物资箱号变动消息}
   * - {@link NiaochaoTccompassWarehouseNetworkChange 五道口配送 > 仓网络变更消息}
   */
  type NiaochaoTccompass = NiaochaoTccompassDockInfoChange
    | NiaochaoTccompassMaterialCodeUpdate
    | NiaochaoTccompassWarehouseNetworkChange;
  /**
   * - {@link TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息}
   */
  type TaobaoAg = TaobaoAgRefundSignInfo;
  /**
   * - {@link TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复}
   * - {@link TaobaoApsNewFeedback 平台消息 > 收到舆情}
   */
  type TaobaoAps = TaobaoApsCommentAdd
    | TaobaoApsNewFeedback;
  /**
   * - {@link TaobaoAxinDivisionApplyResult 阿信消息通知前台类目 > 新增行政区划结果通知}
   * - {@link TaobaoAxinPoiApplyResult 阿信消息通知前台类目 > 新增POI结果通知}
   * - {@link TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息}
   */
  type TaobaoAxin = TaobaoAxinDivisionApplyResult
    | TaobaoAxinPoiApplyResult
    | TaobaoAxinRefundCallBack;
  /**
   * - {@link TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活}
   * - {@link TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息}
   */
  type TaobaoBaichuan = TaobaoBaichuanASODeviceActivate
    | TaobaoBaichuanPasswordRuleChange;
  /**
   * - {@link TaobaoBmcShortMessageStatus 导购平台 > 短信状态}
   */
  type TaobaoBmc = TaobaoBmcShortMessageStatus;
  /**
   * - {@link TaobaoBusTVMTradePay 淘宝汽车票 > 自助机付款成功结果}
   * - {@link TaobaoBusTVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知}
   * - {@link TaobaoBusTVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息}
   * - {@link TaobaoBusTradePayStatus 淘宝汽车票 > 交易支付状态节点}
   */
  type TaobaoBus = TaobaoBusTVMTradePay
    | TaobaoBusTVMTradePayStatusNotice
    | TaobaoBusTVMTradePaySuccess
    | TaobaoBusTradePayStatus;
  /**
   * - {@link TaobaoCarleaseFreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息}
   */
  type TaobaoCarlease = TaobaoCarleaseFreeDpOrderMsgSend;
  /**
   * - {@link TaobaoContentOrderPaid 淘宝交易 > 内容开放短视频模板支付消息}
   */
  type TaobaoContent = TaobaoContentOrderPaid;
  /**
   * - {@link TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息}
   * - {@link TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息}
   */
  type TaobaoDaifa = TaobaoDaifaDistributorOrderStatusChange
    | TaobaoDaifaSupplierOrderStatusChange;
  /**
   * - {@link TaobaoDdPush 淘宝点点 > 淘点点消息推送}
   */
  type TaobaoDd = TaobaoDdPush;
  /**
   * - {@link TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息}
   */
  type TaobaoDiandian = TaobaoDiandianServeOrder;
  /**
   * - {@link TaobaoDpaasAuthTokenCreate DPAAS > dpaas三方服务token}
   * - {@link TaobaoDpaasCustomerFlow DPAAS > 客流新增及会员到店消息}
   * - {@link TaobaoDpaasCustomerUpload DPAAS > 客户上传图片}
   * - {@link TaobaoDpaasCustomerUploadAck DPAAS > 会员人脸信息更新}
   * - {@link TaobaoDpaasEquipmentCreate DPAAS > 创建设备}
   * - {@link TaobaoDpaasFaceToCustomerAck DPAAS > 会员标示消息推送}
   */
  type TaobaoDpaas = TaobaoDpaasAuthTokenCreate
    | TaobaoDpaasCustomerFlow
    | TaobaoDpaasCustomerUpload
    | TaobaoDpaasCustomerUploadAck
    | TaobaoDpaasEquipmentCreate
    | TaobaoDpaasFaceToCustomerAck;
  /**
   * - {@link TaobaoDvExternal 阿里通信 > 淘宝数字虚拟外放}
   */
  type TaobaoDv = TaobaoDvExternal;
  /**
   * - {@link TaobaoEinvoiceBuyerConfirmSend 电子发票 > 买家确认发送到报销系统}
   * - {@link TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流}
   */
  type TaobaoEinvoice = TaobaoEinvoiceBuyerConfirmSend
    | TaobaoEinvoiceInvoiceResultReturn;
  /**
   * - {@link TaobaoFenxiaoDealerAgree 淘宝分销 > 经销采购单审核通过}
   * - {@link TaobaoFenxiaoDealerClose 淘宝分销 > 经销采购单关闭}
   * - {@link TaobaoFenxiaoDealerConfirm 淘宝分销 > 经销采购单采购成功}
   * - {@link TaobaoFenxiaoDealerCreate 淘宝分销 > 经销采购单创建}
   * - {@link TaobaoFenxiaoDealerInstock 淘宝分销 > 经销采购单入库}
   * - {@link TaobaoFenxiaoDealerModify 淘宝分销 > 经销采购单修改}
   * - {@link TaobaoFenxiaoDealerPay 淘宝分销 > 经销采购单付款}
   * - {@link TaobaoFenxiaoDealerRefuse 淘宝分销 > 经销采购单拒绝通过}
   * - {@link TaobaoFenxiaoDealerShipped 淘宝分销 > 经销采购单已发货}
   * - {@link TaobaoFenxiaoFxOrderClosed 淘宝分销 > 采购单关闭消息消息}
   * - {@link TaobaoFenxiaoFxOrderCreate 淘宝分销 > 采购单创建消息}
   * - {@link TaobaoFenxiaoFxOrderModifyConsign 淘宝分销 > 分销属性变更}
   * - {@link TaobaoFenxiaoFxOrderModifyPrice 淘宝分销 > 修改采购单价格消息}
   * - {@link TaobaoFenxiaoFxOrderPaid 淘宝分销 > 采购单付款消息}
   * - {@link TaobaoFenxiaoFxOrderShipped 淘宝分销 > 采购单发货消息}
   * - {@link TaobaoFenxiaoFxOrderSuccess 淘宝分销 > 采购单确认收货消息}
   * - {@link TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息}
   * - {@link TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息}
   * - {@link TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息}
   * - {@link TaobaoFenxiaoFxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息}
   * - {@link TaobaoFenxiaoFxRefundSuccess 淘宝分销 > 采购单退款成功消息}
   * - {@link TaobaoFenxiaoFxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息}
   * - {@link TaobaoFenxiaoFxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息}
   */
  type TaobaoFenxiao = TaobaoFenxiaoDealerAgree
    | TaobaoFenxiaoDealerClose
    | TaobaoFenxiaoDealerConfirm
    | TaobaoFenxiaoDealerCreate
    | TaobaoFenxiaoDealerInstock
    | TaobaoFenxiaoDealerModify
    | TaobaoFenxiaoDealerPay
    | TaobaoFenxiaoDealerRefuse
    | TaobaoFenxiaoDealerShipped
    | TaobaoFenxiaoFxOrderClosed
    | TaobaoFenxiaoFxOrderCreate
    | TaobaoFenxiaoFxOrderModifyConsign
    | TaobaoFenxiaoFxOrderModifyPrice
    | TaobaoFenxiaoFxOrderPaid
    | TaobaoFenxiaoFxOrderShipped
    | TaobaoFenxiaoFxOrderSuccess
    | TaobaoFenxiaoFxRefundAgree
    | TaobaoFenxiaoFxRefundClose
    | TaobaoFenxiaoFxRefundCreate
    | TaobaoFenxiaoFxRefundRefuseGoods
    | TaobaoFenxiaoFxRefundSuccess
    | TaobaoFenxiaoFxTradeRefundCreate
    | TaobaoFenxiaoFxTradeRefundSuccess;
  /**
   * - {@link TaobaoFliggyCommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息}
   * - {@link TaobaoFliggyHspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息}
   * - {@link TaobaoFliggySignStatus 酒店签约中心消息 > 飞猪签约状态消息}
   * - {@link TaobaoFliggyStdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息}
   * - {@link TaobaoFliggyStdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息}
   */
  type TaobaoFliggy = TaobaoFliggyCommonContractSign
    | TaobaoFliggyHspHicItemChange
    | TaobaoFliggySignStatus
    | TaobaoFliggyStdHotelModify
    | TaobaoFliggyStdRoomTypeModify;
  /**
   * - {@link TaobaoFscRouteOrderStatusChange 阿信消息通知前台类目 > 线路订单状态变更通知}
   */
  type TaobaoFsc = TaobaoFscRouteOrderStatusChange;
  /**
   * - {@link TaobaoFuwuFundsChange 淘宝交易 > 以旧换新资金变更通知消息}
   * - {@link TaobaoFuwuOrderClosed 淘宝交易 > 订单关闭消息}
   * - {@link TaobaoFuwuOrderCreated 淘宝交易 > 订单创建消息}
   * - {@link TaobaoFuwuOrderPaid 淘宝交易 > 订单支付消息}
   * - {@link TaobaoFuwuRecycleFinalService 淘宝交易 > 以旧换新取送一体服务最终决策通知}
   * - {@link TaobaoFuwuServiceOpen 淘宝交易 > 服务开通消息}
   * - {@link TaobaoFuwuWitkeySyncModeling 淘宝交易 > 威客同步建模数据}
   */
  type TaobaoFuwu = TaobaoFuwuFundsChange
    | TaobaoFuwuOrderClosed
    | TaobaoFuwuOrderCreated
    | TaobaoFuwuOrderPaid
    | TaobaoFuwuRecycleFinalService
    | TaobaoFuwuServiceOpen
    | TaobaoFuwuWitkeySyncModeling;
  /**
   * - {@link TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息}
   */
  type TaobaoGlobalbuys = TaobaoGlobalbuysSeamailOrderNotify;
  /**
   * - {@link TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback}
   * - {@link TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果}
   * - {@link TaobaoHomeaiModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系}
   * - {@link TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息}
   */
  type TaobaoHomeai = TaobaoHomeaiCaseSyncResult
    | TaobaoHomeaiLayoutTransferResult
    | TaobaoHomeaiModelSkuRelation
    | TaobaoHomeaiRenderRequest;
  /**
   * - {@link TaobaoHotelCreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息}
   * - {@link TaobaoHotelSearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息}
   * - {@link TaobaoHotelSearchTrigger 酒店签约中心消息 > 热搜酒店消息}
   */
  type TaobaoHotel = TaobaoHotelCreditToPreHotelStatus
    | TaobaoHotelSearchMonitor
    | TaobaoHotelSearchTrigger;
  /**
   * - {@link TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息}
   */
  type TaobaoIstore = TaobaoIstoreGiftingMsg;
  /**
   * - {@link TaobaoItemItemAdd 淘宝商品 > 商品新增消息}
   * - {@link TaobaoItemItemDelete 淘宝商品 > 商品删除消息}
   * - {@link TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息}
   * - {@link TaobaoItemItemPunishCc 淘宝商品 > 小二CC商品消息}
   * - {@link TaobaoItemItemPunishDelete 淘宝商品 > 小二删除商品消息}
   * - {@link TaobaoItemItemPunishDownshelf 淘宝商品 > 小二下架商品消息}
   * - {@link TaobaoItemItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息}
   * - {@link TaobaoItemItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息}
   * - {@link TaobaoItemItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息}
   * - {@link TaobaoItemItemStockChanged 淘宝商品 > 修改商品库存消息}
   * - {@link TaobaoItemItemUpdate 淘宝商品 > 商品更新消息}
   * - {@link TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息}
   * - {@link TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息}
   */
  type TaobaoItem = TaobaoItemItemAdd
    | TaobaoItemItemDelete
    | TaobaoItemItemDownshelf
    | TaobaoItemItemPunishCc
    | TaobaoItemItemPunishDelete
    | TaobaoItemItemPunishDownshelf
    | TaobaoItemItemRecommendAdd
    | TaobaoItemItemRecommendDelete
    | TaobaoItemItemSkuZeroStock
    | TaobaoItemItemStockChanged
    | TaobaoItemItemUpdate
    | TaobaoItemItemUpshelf
    | TaobaoItemItemZeroStock;
  /**
   * - {@link TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口}
   * - {@link TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知}
   * - {@link TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送}
   * - {@link TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送}
   * - {@link TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知}
   * - {@link TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知}
   * - {@link TaobaoJipiaoUrgeIssueTicket 淘宝机票 > 催出票/拦截出票消息}
   */
  type TaobaoJipiao = TaobaoJipiaoAncillaryOrderPaid
    | TaobaoJipiaoJipiaoModifyOrderNotify
    | TaobaoJipiaoJipiaoOrderStatusNotify
    | TaobaoJipiaoJipiaoRefundOrderNotify
    | TaobaoJipiaoSellerOrderNotify
    | TaobaoJipiaoSellerRefundOrderNotify
    | TaobaoJipiaoUrgeIssueTicket;
  /**
   * - {@link TaobaoJzfxPurchaseOrderCreate 淘宝分销 > 家装分销_采购单创建}
   * - {@link TaobaoJzfxPurchaseOrderStatusModify 淘宝分销 > 家装分销_采购单状态修改}
   * - {@link TaobaoJzfxPurchaseReverseOrderCreate 淘宝分销 > 家装分销_采购逆向单创建}
   * - {@link TaobaoJzfxPurchaseReverseOrderStatusModify 淘宝分销 > 家装分销_采购逆向单状态修改}
   */
  type TaobaoJzfx = TaobaoJzfxPurchaseOrderCreate
    | TaobaoJzfxPurchaseOrderStatusModify
    | TaobaoJzfxPurchaseReverseOrderCreate
    | TaobaoJzfxPurchaseReverseOrderStatusModify;
  /**
   * - {@link TaobaoLiveAgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知}
   * - {@link TaobaoLiveFeedRelated 淘宝直播API > 淘宝直播上下播消息}
   * - {@link TaobaoLiveTcpOrder 淘宝直播API > 淘宝直播订单消息}
   */
  type TaobaoLive = TaobaoLiveAgencyItemChanged
    | TaobaoLiveFeedRelated
    | TaobaoLiveTcpOrder;
  /**
   * - {@link TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息}
   */
  type TaobaoLogistics = TaobaoLogisticsLogsticDetailTrace;
  /**
   * - {@link TaobaoModifyaddressResultNotify 聚石塔 > 自助改地址结果消息通知}
   */
  type TaobaoModifyaddress = TaobaoModifyaddressResultNotify;
  /**
   * - {@link TaobaoModifyorderConsistencyResult 聚石塔 > 订单一致性校验消息}
   */
  type TaobaoModifyorder = TaobaoModifyorderConsistencyResult;
  /**
   * - {@link TaobaoModifyskuResultNotify 聚石塔 > 修改商品信息结果消息}
   */
  type TaobaoModifysku = TaobaoModifyskuResultNotify;
  /**
   * - {@link TaobaoOcTradeTagChanged 交易全链路 > oc订单标签变更}
   */
  type TaobaoOc = TaobaoOcTradeTagChanged;
  /**
   * - {@link TaobaoOfnOrderStatusSync 淘宝交易 > 以旧换新回收单状态同步}
   */
  type TaobaoOfn = TaobaoOfnOrderStatusSync;
  /**
   * - {@link TaobaoOpenaccountDataSync 导购平台 > openaccount数据同步}
   */
  type TaobaoOpenaccount = TaobaoOpenaccountDataSync;
  /**
   * - {@link TaobaoOpencrmAuthTouchMessage 客户运营平台API > 营销短信授权消息}
   * - {@link TaobaoOpencrmCardEstTask 客户运营平台API > 卡片短信发送预估消息}
   * - {@link TaobaoOpencrmCardTplExamine 客户运营平台API > 卡片短信模板审核消息}
   * - {@link TaobaoOpencrmCouponUseUp 客户运营平台API > 优惠券发完TMC}
   * - {@link TaobaoOpencrmCrowdInstResult 客户运营平台API > 人群快照生成结果}
   * - {@link TaobaoOpencrmCrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果}
   * - {@link TaobaoOpencrmDigitalTplExamine 客户运营平台API > 数字短信模板审核消息}
   * - {@link TaobaoOpencrmFeedback 客户运营平台API > 反馈tmc}
   * - {@link TaobaoOpencrmFullRuleResult 客户运营平台API > 规则全量计算结果通知}
   * - {@link TaobaoOpencrmMemberGradeChange 客户运营平台API > 会员等级变更}
   * - {@link TaobaoOpencrmMemberJoin 客户运营平台API > 会员入会消息}
   * - {@link TaobaoOpencrmMemberJoinPrivate 客户运营平台API > 会员入会消息}
   * - {@link TaobaoOpencrmNodeExecuteFinished 客户运营平台API > 节点执行完成消息}
   * - {@link TaobaoOpencrmOpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息}
   * - {@link TaobaoOpencrmSMSOfficaial 客户运营平台API > 官方营销场景短信发送通知}
   * - {@link TaobaoOpencrmSellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单}
   * - {@link TaobaoOpencrmShortMessageBill 客户运营平台API > 短信账单}
   * - {@link TaobaoOpencrmShortMessageSent 客户运营平台API > 短信发送TMC}
   * - {@link TaobaoOpencrmUtouch 客户运营平台API > 智能外呼回执}
   */
  type TaobaoOpencrm = TaobaoOpencrmAuthTouchMessage
    | TaobaoOpencrmCardEstTask
    | TaobaoOpencrmCardTplExamine
    | TaobaoOpencrmCouponUseUp
    | TaobaoOpencrmCrowdInstResult
    | TaobaoOpencrmCrowdInstSaveResult
    | TaobaoOpencrmDigitalTplExamine
    | TaobaoOpencrmFeedback
    | TaobaoOpencrmFullRuleResult
    | TaobaoOpencrmMemberGradeChange
    | TaobaoOpencrmMemberJoin
    | TaobaoOpencrmMemberJoinPrivate
    | TaobaoOpencrmNodeExecuteFinished
    | TaobaoOpencrmOpenStrategyEvent
    | TaobaoOpencrmSMSOfficaial
    | TaobaoOpencrmSellerDimensionCharge
    | TaobaoOpencrmShortMessageBill
    | TaobaoOpencrmShortMessageSent
    | TaobaoOpencrmUtouch;
  /**
   * - {@link TaobaoOpenimOffMsgPush OpenIM消息 > openim 离线消息推送}
   */
  type TaobaoOpenim = TaobaoOpenimOffMsgPush;
  /**
   * - {@link TaobaoOpenmallAlarmMsg OpenMall-API > Openmall告警消息通知}
   * - {@link TaobaoOpenmallItemChanged OpenMall-API > Openmall商品变更消息}
   * - {@link TaobaoOpenmallItemStockChanged OpenMall-API > openmall商品库存变更消息通知}
   * - {@link TaobaoOpenmallRefundChanged OpenMall-API > OpenMall退款单变更}
   * - {@link TaobaoOpenmallTradeChanged OpenMall-API > 订单消息通知}
   */
  type TaobaoOpenmall = TaobaoOpenmallAlarmMsg
    | TaobaoOpenmallItemChanged
    | TaobaoOpenmallItemStockChanged
    | TaobaoOpenmallRefundChanged
    | TaobaoOpenmallTradeChanged;
  /**
   * - {@link TaobaoOsActivityCompleted 营销平台 > 前N有礼活动开奖消息}
   */
  type TaobaoOs = TaobaoOsActivityCompleted;
  /**
   * - {@link TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息}
   */
  type TaobaoRdcaligenius = TaobaoRdcaligeniusOrderMsgSend;
  /**
   * - {@link TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据}
   */
  type TaobaoRecycle = TaobaoRecycleOfnPreRedPacketSync;
  /**
   * - {@link TaobaoRefundRefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息}
   * - {@link TaobaoRefundRefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息}
   * - {@link TaobaoRefundRefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息}
   * - {@link TaobaoRefundRefundClosed 淘宝退款 > 退款关闭消息}
   * - {@link TaobaoRefundRefundCreateMessage 淘宝退款 > 发表退款留言消息}
   * - {@link TaobaoRefundRefundCreated 淘宝退款 > 退款创建消息}
   * - {@link TaobaoRefundRefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息}
   * - {@link TaobaoRefundRefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息}
   * - {@link TaobaoRefundRefundSuccess 淘宝退款 > 退款成功消息}
   * - {@link TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息}
   * - {@link TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息}
   * - {@link TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息}
   * - {@link TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息}
   */
  type TaobaoRefund = TaobaoRefundRefundBlockMessage
    | TaobaoRefundRefundBuyerModifyAgreement
    | TaobaoRefundRefundBuyerReturnGoods
    | TaobaoRefundRefundClosed
    | TaobaoRefundRefundCreateMessage
    | TaobaoRefundRefundCreated
    | TaobaoRefundRefundSellerAgreeAgreement
    | TaobaoRefundRefundSellerRefuseAgreement
    | TaobaoRefundRefundSuccess
    | TaobaoRefundRefundableCanceled
    | TaobaoRefundRefundableMarked
    | TaobaoRefundTaobaoInterApplied
    | TaobaoRefundTaobaoIntervened;
  /**
   * - {@link TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更}
   */
  type TaobaoRhino = TaobaoRhinoDeviceStatus;
  /**
   * - {@link TaobaoSmartappAppSubChange 平台消息 > 用户订阅变更消息}
   * - {@link TaobaoSmartappDataSync 平台消息 > 智能应用服务登记数据变更消息}
   */
  type TaobaoSmartapp = TaobaoSmartappAppSubChange
    | TaobaoSmartappDataSync;
  /**
   * - {@link TaobaoTaeBaichuanAuctionChange 导购平台 > 商品信息变更}
   * - {@link TaobaoTaeBaichuanTradeClosed 导购平台 > 交易关闭}
   * - {@link TaobaoTaeBaichuanTradeCreated 导购平台 > 创建订单}
   * - {@link TaobaoTaeBaichuanTradePaidDone 导购平台 > 付款成功}
   * - {@link TaobaoTaeBaichuanTradeRefundCreated 导购平台 > 创建退款消息}
   * - {@link TaobaoTaeBaichuanTradeRefundSuccess 导购平台 > 退款成功}
   * - {@link TaobaoTaeBaichuanTradeSuccess 导购平台 > 交易成功}
   * - {@link TaobaoTaeItemDownShelf 导购平台 > 商品下架}
   * - {@link TaobaoTaeItemImageChange 导购平台 > 商品主图变更}
   * - {@link TaobaoTaeItemPriceChange 导购平台 > 订阅的商品变更消息}
   * - {@link TaobaoTaeItemSkuDelete 导购平台 > sku删除}
   * - {@link TaobaoTaeItemSkuPublish 导购平台 > sku发布}
   * - {@link TaobaoTaeItemSkuSoldOut 导购平台 > 商品sku售空}
   * - {@link TaobaoTaeItemSoldOut 导购平台 > 商品售空}
   * - {@link TaobaoTaeItemSubscribe 导购平台 > 商品订阅成功}
   * - {@link TaobaoTaeItemTitleChange 导购平台 > 商品标题变更}
   * - {@link TaobaoTaeItemUnSubscribe 导购平台 > 取消商品订阅}
   * - {@link TaobaoTaeItemUpShelf 导购平台 > 商品上架}
   */
  type TaobaoTae = TaobaoTaeBaichuanAuctionChange
    | TaobaoTaeBaichuanTradeClosed
    | TaobaoTaeBaichuanTradeCreated
    | TaobaoTaeBaichuanTradePaidDone
    | TaobaoTaeBaichuanTradeRefundCreated
    | TaobaoTaeBaichuanTradeRefundSuccess
    | TaobaoTaeBaichuanTradeSuccess
    | TaobaoTaeItemDownShelf
    | TaobaoTaeItemImageChange
    | TaobaoTaeItemPriceChange
    | TaobaoTaeItemSkuDelete
    | TaobaoTaeItemSkuPublish
    | TaobaoTaeItemSkuSoldOut
    | TaobaoTaeItemSoldOut
    | TaobaoTaeItemSubscribe
    | TaobaoTaeItemTitleChange
    | TaobaoTaeItemUnSubscribe
    | TaobaoTaeItemUpShelf;
  /**
   * - {@link TaobaoTopAuthCancel 平台消息 > 取消授权消息通知}
   * - {@link TaobaoTopProcessCallback 平台消息 > 工作流执行回调消息}
   */
  type TaobaoTop = TaobaoTopAuthCancel
    | TaobaoTopProcessCallback;
  /**
   * - {@link TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成}
   */
  type TaobaoTopats = TaobaoTopatsTaskComplete;
  /**
   * - {@link TaobaoTradeAdvanceDisburse 淘宝交易 > 订单极速放款成功消息}
   * - {@link TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息}
   * - {@link TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款}
   * - {@link TaobaoTradeTradeBuyerStepPay 淘宝交易 > 分阶段订单付定金}
   * - {@link TaobaoTradeTradeChanged 淘宝交易 > 订单信息变更消息}
   * - {@link TaobaoTradeTradeClose 淘宝交易 > 关闭交易消息}
   * - {@link TaobaoTradeTradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息}
   * - {@link TaobaoTradeTradeCreate 淘宝交易 > 创建淘宝交易消息}
   * - {@link TaobaoTradeTradeDelayConfirmPay 淘宝交易 > 延长收货时间消息}
   * - {@link TaobaoTradeTradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息}
   * - {@link TaobaoTradeTradeMemoModified 淘宝交易 > 交易备注修改消息}
   * - {@link TaobaoTradeTradeModifyFee 淘宝交易 > 修改交易费用消息}
   * - {@link TaobaoTradeTradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息}
   * - {@link TaobaoTradeTradePartlyRefund 淘宝交易 > 子订单退款成功消息}
   * - {@link TaobaoTradeTradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息}
   * - {@link TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息}
   * - {@link TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息}
   * - {@link TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息}
   * - {@link TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息}
   */
  type TaobaoTrade = TaobaoTradeAdvanceDisburse
    | TaobaoTradeTradeAlipayCreate
    | TaobaoTradeTradeBuyerPay
    | TaobaoTradeTradeBuyerStepPay
    | TaobaoTradeTradeChanged
    | TaobaoTradeTradeClose
    | TaobaoTradeTradeCloseAndModifyDetailOrder
    | TaobaoTradeTradeCreate
    | TaobaoTradeTradeDelayConfirmPay
    | TaobaoTradeTradeLogisticsAddressChanged
    | TaobaoTradeTradeMemoModified
    | TaobaoTradeTradeModifyFee
    | TaobaoTradeTradePartlyConfirmPay
    | TaobaoTradeTradePartlyRefund
    | TaobaoTradeTradePartlySellerShip
    | TaobaoTradeTradeRated
    | TaobaoTradeTradeSellerShip
    | TaobaoTradeTradeSuccess
    | TaobaoTradeTradeTimeoutRemind;
  /**
   * - {@link TaobaoTrainAgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息}
   * - {@link TaobaoTrainOrderNotify 淘宝火车票 > 火车线下票代理商通知}
   * - {@link TaobaoTrainThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息}
   * - {@link TaobaoTrainTradeNotify 淘宝火车票 > 火车票订单消息}
   */
  type TaobaoTrain = TaobaoTrainAgentQueryInfoNotify
    | TaobaoTrainOrderNotify
    | TaobaoTrainThirdPartyTradeNotify
    | TaobaoTrainTradeNotify;
  /**
   * - {@link TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口}
   * - {@link TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息}
   */
  type TaobaoUscesl = TaobaoUsceslAlarmCreate
    | TaobaoUsceslBindResult;
  /**
   * - {@link TaobaoWaimaiGrabOrderResult 淘宝点点 > 点点送抢单结果通知消息}
   * - {@link TaobaoWaimaiOrderClose 淘宝点点 > 淘点点外卖订单关闭消息通知}
   * - {@link TaobaoWaimaiOrderComplain 淘宝点点 > 点点送订单投诉}
   * - {@link TaobaoWaimaiOrderComplainCancel 淘宝点点 > 点点送订单撤诉}
   * - {@link TaobaoWaimaiOrderComplainResult 淘宝点点 > 点点送订单投诉结果}
   * - {@link TaobaoWaimaiOrderDispatch 淘宝点点 > 点点送订单通知消息}
   * - {@link TaobaoWaimaiOrderDispatchSimple 淘宝点点 > 点点送派单通知}
   * - {@link TaobaoWaimaiOrderPush 淘宝点点 > 点点送接单广播通知消息}
   * - {@link TaobaoWaimaiOrderRemind 淘宝点点 > 点点送催单消息通知}
   * - {@link TaobaoWaimaiOuterOrderDispatch 淘宝点点 > 点点送外部订单通知消息}
   */
  type TaobaoWaimai = TaobaoWaimaiGrabOrderResult
    | TaobaoWaimaiOrderClose
    | TaobaoWaimaiOrderComplain
    | TaobaoWaimaiOrderComplainCancel
    | TaobaoWaimaiOrderComplainResult
    | TaobaoWaimaiOrderDispatch
    | TaobaoWaimaiOrderDispatchSimple
    | TaobaoWaimaiOrderPush
    | TaobaoWaimaiOrderRemind
    | TaobaoWaimaiOuterOrderDispatch;
  /**
   * - {@link TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息}
   * - {@link TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV}
   */
  type TaobaoWisdomstore = TaobaoWisdomstoreRecognitionNotice
    | TaobaoWisdomstoreRecognitionPush;
  /**
   * - {@link TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还}
   * - {@link TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件}
   * - {@link TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消}
   * - {@link TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建}
   */
  type TaobaoXianyu = TaobaoXianyuRentalItemReturnCanceled
    | TaobaoXianyuRentalItemReturnReserved
    | TaobaoXianyuRentalOrderCanceled
    | TaobaoXianyuRentalOrderCreated;
  /**
   * - {@link TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息}
   */
  type TaobaoXiaowei = TaobaoXiaoweiMessage;
  /**
   * - {@link TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息}
   */
  type TmallAliauto = TmallAliautoStepOrderPartConfirmed;
  /**
   * - {@link TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放}
   * - {@link TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放}
   */
  type TmallAuto = TmallAutoTradeModify
    | TmallAutoTwoWheelsReceiptCreate;
  /**
   * - {@link TmallCarContractSign 天猫汽车 > 合同签署消息}
   * - {@link TmallCarFinanceMsg 天猫汽车 > 汽车金融消息}
   */
  type TmallCar = TmallCarContractSign
    | TmallCarFinanceMsg;
  /**
   * - {@link TmallChannelApplyOrderChange 渠道中心API > 申请单变更消息}
   * - {@link TmallChannelDeliverOrderChange 渠道中心API > 发货单消息变更}
   * - {@link TmallChannelPurchaseOrderChange 渠道中心API > 采购单变更消息}
   * - {@link TmallChannelStopOrderChange 渠道中心API > 停止发货单变更消息}
   */
  type TmallChannel = TmallChannelApplyOrderChange
    | TmallChannelDeliverOrderChange
    | TmallChannelPurchaseOrderChange
    | TmallChannelStopOrderChange;
  /**
   * - {@link TmallFuwuAnomalyRecourse 天猫服务 > 天猫服务平台一键求助单消息队列}
   * - {@link TmallFuwuAnomalyRecourseStatusUpdate 天猫服务 > 一键求助状态变更消息}
   * - {@link TmallFuwuElectricMaintenanceWorkCardComplete 天猫服务 > 天猫服务消电维修工单完结消息}
   * - {@link TmallFuwuElectricWarrantyCodeStatusUpdate 天猫服务 > 天猫服务消电保修码状态变更}
   * - {@link TmallFuwuHomeDecorationSupplyRuleUpdate 天猫服务 > 天猫服务家装优质供给规则变更}
   * - {@link TmallFuwuLogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息}
   * - {@link TmallFuwuRateMessageTP 天猫服务 > 消费者评价成功top消息}
   * - {@link TmallFuwuServiceItemUpdate 天猫服务 > 服务商品信息变更消息}
   * - {@link TmallFuwuServiceMonitorMessage 天猫服务 > 服务预警消息}
   * - {@link TmallFuwuServiceStoreRegister 天猫服务 > 服务网点注册消息}
   * - {@link TmallFuwuSettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送}
   * - {@link TmallFuwuSettleSupplierFcBill 天猫服务 > 天猫服务服务商分账消息推送}
   * - {@link TmallFuwuWorkcardContract 天猫服务 > 天猫服务履约合同单}
   * - {@link TmallFuwuWorkcardInfo 天猫服务 > 天猫服务任务工单}
   * - {@link TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更}
   */
  type TmallFuwu = TmallFuwuAnomalyRecourse
    | TmallFuwuAnomalyRecourseStatusUpdate
    | TmallFuwuElectricMaintenanceWorkCardComplete
    | TmallFuwuElectricWarrantyCodeStatusUpdate
    | TmallFuwuHomeDecorationSupplyRuleUpdate
    | TmallFuwuLogisticsInfoMessage
    | TmallFuwuRateMessageTP
    | TmallFuwuServiceItemUpdate
    | TmallFuwuServiceMonitorMessage
    | TmallFuwuServiceStoreRegister
    | TmallFuwuSettleAdjustmentStatusUpdate
    | TmallFuwuSettleSupplierFcBill
    | TmallFuwuWorkcardContract
    | TmallFuwuWorkcardInfo
    | TmallFuwuWorkcardStatusUpdate;
  /**
   * - {@link TmallMeiMemberRegister 天猫美妆 > 飞行入会消息}
   * - {@link TmallMeiPointChange 天猫美妆 > 品牌积分变更通知}
   */
  type TmallMei = TmallMeiMemberRegister
    | TmallMeiPointChange;
  /**
   * - {@link TmallNrtItemsToEasyHome 新零售终端下行消息 > 商品信息同步}
   */
  type TmallNrt = TmallNrtItemsToEasyHome;
  /**
   * - {@link TmallOmnichannelInventoryChange 聚石塔 > 商品库存变化}
   * - {@link TmallOmnichannelInventoryZero 聚石塔 > 商品库存归零}
   * - {@link TmallOmnichannelItemDescChange 聚石塔 > 商品描述变化}
   * - {@link TmallOmnichannelItemDownShelf 聚石塔 > 商品下架}
   * - {@link TmallOmnichannelItemImageChange 聚石塔 > 商品图片变化}
   * - {@link TmallOmnichannelItemPriceChange 聚石塔 > 商品价格变更}
   */
  type TmallOmnichannel = TmallOmnichannelInventoryChange
    | TmallOmnichannelInventoryZero
    | TmallOmnichannelItemDescChange
    | TmallOmnichannelItemDownShelf
    | TmallOmnichannelItemImageChange
    | TmallOmnichannelItemPriceChange;
  /**
   * - {@link TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新}
   */
  type TmallServicecenter = TmallServicecenterTaskUpdate;
  /**
   * - {@link TmallServiceplatformSignCreate 天猫服务 > 签到消息}
   * - {@link TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息}
   */
  type TmallServiceplatform = TmallServiceplatformSignCreate
    | TmallServiceplatformWorkerLeave;
  /**
   * - {@link TripHotelBottomPriceRuleChange 酒店商品消息api > 酒店商品底价加价商品加价规则消息通知}
   * - {@link TripHotelHotelChange 酒店商品消息api > 飞猪卖家酒店实体变更消息同步}
   * - {@link TripHotelRateChange 酒店商品消息api > 酒店rate信息变更}
   * - {@link TripHotelRatePlanChange 酒店商品消息api > 酒店价格计划消息}
   * - {@link TripHotelRoomChange 酒店商品消息api > room变更消息}
   * - {@link TripHotelRoomTypeChange 酒店商品消息api > 酒店房型消息}
   */
  type TripHotel = TripHotelBottomPriceRuleChange
    | TripHotelHotelChange
    | TripHotelRateChange
    | TripHotelRatePlanChange
    | TripHotelRoomChange
    | TripHotelRoomTypeChange;
  /**
   * - {@link WdkMarketOperateSkuError 五道口营销 > 营销操作错误消息}
   * - {@link WdkMarketOperateSkuErrror 五道口营销 > 营销发布商品错误}
   */
  type WdkMarket = WdkMarketOperateSkuError
    | WdkMarketOperateSkuErrror;
  /**
   * - {@link WdkOpenDataPublishError 五道口营销 > 五道口开放数据发布错误}
   * - {@link WdkOpenDataRelation 五道口营销 > 五道口开放数据关联通知}
   */
  type WdkOpen = WdkOpenDataPublishError
    | WdkOpenDataRelation;
  /**
   * - {@link XianyuAftersaleOrderSyn 闲鱼 > 闲鱼售后订单状态变更消息}
   */
  type XianyuAftersale = XianyuAftersaleOrderSyn;
  /**
   * - {@link XianyuAppraiseOrderSyn 闲鱼 > 验货担保订单状态同步回收商}
   */
  type XianyuAppraise = XianyuAppraiseOrderSyn;
  /**
   * - {@link XianyuCarOrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步}
   */
  type XianyuCar = XianyuCarOrderStatusSync;
  /**
   * - {@link XianyuRecycleOrderStatusSync 闲鱼 > 订单状态同步给回收商}
   * - {@link XianyuRecycleSpuModifySync 闲鱼 > 闲鱼回收SPU变更消息}
   */
  type XianyuRecycle = XianyuRecycleOrderStatusSync
    | XianyuRecycleSpuModifySync;
  /**
   * - {@link XianyuRegisterStatusChange 闲鱼 > 闲鱼SPU挂载上下线消息}
   */
  type XianyuRegister = XianyuRegisterStatusChange;
  /**
   * - {@link XianyuTemplateQuesChange 闲鱼 > 闲鱼问卷变更}
   * - {@link XianyuTemplateStatusChange 闲鱼 > 闲鱼问卷状态变更消息}
   */
  type XianyuTemplate = XianyuTemplateQuesChange
    | XianyuTemplateStatusChange;
  /**
   * - {@link XianyuTenderOrderSyn 闲鱼 > 省心卖-暗拍项目订单消息}
   */
  type XianyuTender = XianyuTenderOrderSyn;
  /**
   * - {@link YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息}
   */
  type YoukuTvosappstore = YoukuTvosappstoreAppStatusChange;
  /**
   * - {@link YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境}
   * - {@link YunosYocMessageService YunOS YoC > yoc消息服务}
   */
  type YunosYoc = YunosYocDatapoolSandbox
    | YunosYocMessageService;
  /**
   * - {@link AlibabaAdlab}
   * - {@link AlibabaAlicom}
   * - {@link AlibabaAlihealth}
   * - {@link AlibabaAlink}
   * - {@link AlibabaAliqin}
   * - {@link AlibabaEinvoice}
   * - {@link AlibabaFuwu}
   * - {@link AlibabaHappytrip}
   * - {@link AlibabaIfp}
   * - {@link AlibabaInvoice}
   * - {@link AlibabaLst}
   * - {@link AlibabaMmc}
   * - {@link AlibabaMonitor}
   * - {@link AlibabaMos}
   * - {@link AlibabaMsd}
   * - {@link AlibabaMsfservice}
   * - {@link AlibabaNazca}
   * - {@link AlibabaNlife}
   * - {@link AlibabaPur}
   * - {@link AlibabaServiceplatform}
   * - {@link AlibabaSp}
   * - {@link AlibabaTax}
   * - {@link AlibabaTianji}
   * - {@link AlibabaWdk}
   * - {@link AlibabaWdkitem}
   * - {@link AlibabaWdkop}
   * - {@link AlibabaWdkopen}
   * - {@link AlibabaWdkorder}
   * - {@link AlibabaWdktrade}
   * - {@link AlibabaYunio}
   */
  type Alibaba = AlibabaAdlab
    | AlibabaAlicom
    | AlibabaAlihealth
    | AlibabaAlink
    | AlibabaAliqin
    | AlibabaEinvoice
    | AlibabaFuwu
    | AlibabaHappytrip
    | AlibabaIfp
    | AlibabaInvoice
    | AlibabaLst
    | AlibabaMmc
    | AlibabaMonitor
    | AlibabaMos
    | AlibabaMsd
    | AlibabaMsfservice
    | AlibabaNazca
    | AlibabaNlife
    | AlibabaPur
    | AlibabaServiceplatform
    | AlibabaSp
    | AlibabaTax
    | AlibabaTianji
    | AlibabaWdk
    | AlibabaWdkitem
    | AlibabaWdkop
    | AlibabaWdkopen
    | AlibabaWdkorder
    | AlibabaWdktrade
    | AlibabaYunio;
  /**
   * - {@link AlicomAxb}
   */
  type Alicom = AlicomAxb;
  /**
   * - {@link AliexpressAeia}
   * - {@link AliexpressOrder}
   */
  type Aliexpress = AliexpressAeia
    | AliexpressOrder;
  /**
   * - {@link AlihealthCep}
   * - {@link AlihealthYs}
   */
  type Alihealth = AlihealthCep
    | AlihealthYs;
  /**
   * - {@link AlitripAgent}
   * - {@link AlitripBtrip}
   * - {@link AlitripFlight}
   * - {@link AlitripIesr}
   * - {@link AlitripIetrade}
   * - {@link AlitripTrain}
   * - {@link AlitripTravel}
   * - {@link AlitripTripticket}
   * - {@link AlitripVisa}
   */
  type Alitrip = AlitripAgent
    | AlitripBtrip
    | AlitripFlight
    | AlitripIesr
    | AlitripIetrade
    | AlitripTrain
    | AlitripTravel
    | AlitripTripticket
    | AlitripVisa;
  /**
   * - {@link AliyunIot}
   */
  type Aliyun = AliyunIot;
  /**
   * - {@link AscpInsdustry}
   */
  type Ascp = AscpInsdustry;
  /**
   * - {@link BanmaRight}
   */
  type Banma = BanmaRight;
  /**
   * - {@link CainiaoConsignplatform}
   * - {@link CainiaoIot}
   */
  type Cainiao = CainiaoConsignplatform
    | CainiaoIot;
  /**
   * - {@link DamaiDistribution}
   * - {@link DamaiTrade}
   */
  type Damai = DamaiDistribution
    | DamaiTrade;
  /**
   * - {@link FliggyBtrip}
   * - {@link FliggyJipiao}
   * - {@link FliggyTicket}
   */
  type Fliggy = FliggyBtrip
    | FliggyJipiao
    | FliggyTicket;
  /**
   * - {@link FuwuConfirm}
   */
  type Fuwu = FuwuConfirm;
  /**
   * - {@link GovAuction}
   */
  type Gov = GovAuction;
  /**
   * - {@link IdleAgreement}
   * - {@link IdleAppraiseisv}
   * - {@link IdleAutotrade}
   * - {@link IdleConsignment}
   * - {@link IdleConsignmentii}
   * - {@link IdleRecycle}
   * - {@link IdleTopisv}
   * - {@link IdleTranferpay}
   */
  type Idle = IdleAgreement
    | IdleAppraiseisv
    | IdleAutotrade
    | IdleConsignment
    | IdleConsignmentii
    | IdleRecycle
    | IdleTopisv
    | IdleTranferpay;
  /**
   * - {@link JaeTrade}
   */
  type Jae = JaeTrade;
  /**
   * - {@link LstSupplier}
   */
  type Lst = LstSupplier;
  /**
   * - {@link NiaochaoTccompass}
   */
  type Niaochao = NiaochaoTccompass;
  /**
   * - {@link TaobaoAg}
   * - {@link TaobaoAps}
   * - {@link TaobaoAxin}
   * - {@link TaobaoBaichuan}
   * - {@link TaobaoBmc}
   * - {@link TaobaoBus}
   * - {@link TaobaoCarlease}
   * - {@link TaobaoContent}
   * - {@link TaobaoDaifa}
   * - {@link TaobaoDd}
   * - {@link TaobaoDiandian}
   * - {@link TaobaoDpaas}
   * - {@link TaobaoDv}
   * - {@link TaobaoEinvoice}
   * - {@link TaobaoFenxiao}
   * - {@link TaobaoFliggy}
   * - {@link TaobaoFsc}
   * - {@link TaobaoFuwu}
   * - {@link TaobaoGlobalbuys}
   * - {@link TaobaoHomeai}
   * - {@link TaobaoHotel}
   * - {@link TaobaoIstore}
   * - {@link TaobaoItem}
   * - {@link TaobaoJipiao}
   * - {@link TaobaoJzfx}
   * - {@link TaobaoLive}
   * - {@link TaobaoLogistics}
   * - {@link TaobaoModifyaddress}
   * - {@link TaobaoModifyorder}
   * - {@link TaobaoModifysku}
   * - {@link TaobaoOc}
   * - {@link TaobaoOfn}
   * - {@link TaobaoOpenaccount}
   * - {@link TaobaoOpencrm}
   * - {@link TaobaoOpenim}
   * - {@link TaobaoOpenmall}
   * - {@link TaobaoOs}
   * - {@link TaobaoRdcaligenius}
   * - {@link TaobaoRecycle}
   * - {@link TaobaoRefund}
   * - {@link TaobaoRhino}
   * - {@link TaobaoSmartapp}
   * - {@link TaobaoTae}
   * - {@link TaobaoTop}
   * - {@link TaobaoTopats}
   * - {@link TaobaoTrade}
   * - {@link TaobaoTrain}
   * - {@link TaobaoUscesl}
   * - {@link TaobaoWaimai}
   * - {@link TaobaoWisdomstore}
   * - {@link TaobaoXianyu}
   * - {@link TaobaoXiaowei}
   */
  type Taobao = TaobaoAg
    | TaobaoAps
    | TaobaoAxin
    | TaobaoBaichuan
    | TaobaoBmc
    | TaobaoBus
    | TaobaoCarlease
    | TaobaoContent
    | TaobaoDaifa
    | TaobaoDd
    | TaobaoDiandian
    | TaobaoDpaas
    | TaobaoDv
    | TaobaoEinvoice
    | TaobaoFenxiao
    | TaobaoFliggy
    | TaobaoFsc
    | TaobaoFuwu
    | TaobaoGlobalbuys
    | TaobaoHomeai
    | TaobaoHotel
    | TaobaoIstore
    | TaobaoItem
    | TaobaoJipiao
    | TaobaoJzfx
    | TaobaoLive
    | TaobaoLogistics
    | TaobaoModifyaddress
    | TaobaoModifyorder
    | TaobaoModifysku
    | TaobaoOc
    | TaobaoOfn
    | TaobaoOpenaccount
    | TaobaoOpencrm
    | TaobaoOpenim
    | TaobaoOpenmall
    | TaobaoOs
    | TaobaoRdcaligenius
    | TaobaoRecycle
    | TaobaoRefund
    | TaobaoRhino
    | TaobaoSmartapp
    | TaobaoTae
    | TaobaoTop
    | TaobaoTopats
    | TaobaoTrade
    | TaobaoTrain
    | TaobaoUscesl
    | TaobaoWaimai
    | TaobaoWisdomstore
    | TaobaoXianyu
    | TaobaoXiaowei;
  /**
   * - {@link TmallAliauto}
   * - {@link TmallAuto}
   * - {@link TmallCar}
   * - {@link TmallChannel}
   * - {@link TmallFuwu}
   * - {@link TmallMei}
   * - {@link TmallNrt}
   * - {@link TmallOmnichannel}
   * - {@link TmallServicecenter}
   * - {@link TmallServiceplatform}
   */
  type Tmall = TmallAliauto
    | TmallAuto
    | TmallCar
    | TmallChannel
    | TmallFuwu
    | TmallMei
    | TmallNrt
    | TmallOmnichannel
    | TmallServicecenter
    | TmallServiceplatform;
  /**
   * - {@link TripHotel}
   */
  type Trip = TripHotel;
  /**
   * - {@link WdkMarket}
   * - {@link WdkOpen}
   */
  type Wdk = WdkMarket
    | WdkOpen;
  /**
   * - {@link XianyuAftersale}
   * - {@link XianyuAppraise}
   * - {@link XianyuCar}
   * - {@link XianyuRecycle}
   * - {@link XianyuRegister}
   * - {@link XianyuTemplate}
   * - {@link XianyuTender}
   */
  type Xianyu = XianyuAftersale
    | XianyuAppraise
    | XianyuCar
    | XianyuRecycle
    | XianyuRegister
    | XianyuTemplate
    | XianyuTender;
  /**
   * - {@link YoukuTvosappstore}
   */
  type Youku = YoukuTvosappstore;
  /**
   * - {@link YunosYoc}
   */
  type Yunos = YunosYoc;
}
