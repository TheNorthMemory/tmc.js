/// <reference path="message.d.ts" />
/// <reference path="ae.d.ts" />
/// <reference path="ali.d.ts" />
/// <reference path="alibaba.d.ts" />
/// <reference path="alicom.d.ts" />
/// <reference path="aliexpress.d.ts" />
/// <reference path="alihealth.d.ts" />
/// <reference path="alihouse.d.ts" />
/// <reference path="alios.d.ts" />
/// <reference path="alipay.d.ts" />
/// <reference path="alipic.d.ts" />
/// <reference path="alisports.d.ts" />
/// <reference path="alitrip.d.ts" />
/// <reference path="aliyun.d.ts" />
/// <reference path="alsc.d.ts" />
/// <reference path="ascp.d.ts" />
/// <reference path="banma.d.ts" />
/// <reference path="cainiao.d.ts" />
/// <reference path="damai.d.ts" />
/// <reference path="ele.d.ts" />
/// <reference path="eleme.d.ts" />
/// <reference path="fliggy.d.ts" />
/// <reference path="fuwu.d.ts" />
/// <reference path="gaode.d.ts" />
/// <reference path="genie.d.ts" />
/// <reference path="global.d.ts" />
/// <reference path="gov.d.ts" />
/// <reference path="icbu.d.ts" />
/// <reference path="idle.d.ts" />
/// <reference path="intime.d.ts" />
/// <reference path="jae.d.ts" />
/// <reference path="jym.d.ts" />
/// <reference path="lark.d.ts" />
/// <reference path="lianfan.d.ts" />
/// <reference path="lst.d.ts" />
/// <reference path="niaochao.d.ts" />
/// <reference path="taobao.d.ts" />
/// <reference path="taotao.d.ts" />
/// <reference path="tmall.d.ts" />
/// <reference path="tobao.d.ts" />
/// <reference path="trip.d.ts" />
/// <reference path="umeng.d.ts" />
/// <reference path="wdk.d.ts" />
/// <reference path="xhotel.d.ts" />
/// <reference path="xianyu.d.ts" />
/// <reference path="youku.d.ts" />
/// <reference path="yunos.d.ts" />

declare namespace IncomingMessage {
  /** {@link Ae.Logistics.TrackingNoUpdate AE > 运单号修改} */
  type AeLogisticsTrackingNoUpdate = Message & { content?: MessageContent & { topic?: 'ae_logistics_TrackingNoUpdate', content?: string | Ae.Logistics.TrackingNoUpdate } };
  /** {@link Ali.Fin.DybClaimResult 阿里金融 > 阿里场景金融大延保理赔结果通知给服务商} */
  type AliFinDybClaimResult = Message & { content?: MessageContent & { topic?: 'ali_fin_DybClaimResult', content?: string | Ali.Fin.DybClaimResult } };
  /** {@link Ali.Infodept.CaseFilingInfo 网上法庭 > 网上法庭数据交换消息} */
  type AliInfodeptCaseFilingInfo = Message & { content?: MessageContent & { topic?: 'ali_infodept_CaseFilingInfo', content?: string | Ali.Infodept.CaseFilingInfo } };
  /** {@link Ali.Infodept.PreserveEvidence 网上法庭 > 证件保全通知} */
  type AliInfodeptPreserveEvidence = Message & { content?: MessageContent & { topic?: 'ali_infodept_PreserveEvidence', content?: string | Ali.Infodept.PreserveEvidence } };
  /** {@link Ali.Infodept.YuncourtMsg 网上法庭 > 网上法庭开放平台消息} */
  type AliInfodeptYuncourtMsg = Message & { content?: MessageContent & { topic?: 'ali_infodept_YuncourtMsg', content?: string | Ali.Infodept.YuncourtMsg } };
  /** {@link Alibaba.Adlab.IotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  type AlibabaAdlabIotDevice = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_IotDevice', content?: string | Alibaba.Adlab.IotDevice } };
  /** {@link Alibaba.Adlab.OrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  type AlibabaAdlabOrderItemEtaUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_OrderItemEtaUpdate', content?: string | Alibaba.Adlab.OrderItemEtaUpdate } };
  /** {@link Alibaba.Adlab.OrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  type AlibabaAdlabOrderItemStatus = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_OrderItemStatus', content?: string | Alibaba.Adlab.OrderItemStatus } };
  /** {@link Alibaba.Adlab.PackageCheckIn 自动驾驶API > 包裹入库消息} */
  type AlibabaAdlabPackageCheckIn = Message & { content?: MessageContent & { topic?: 'alibaba_adlab_PackageCheckIn', content?: string | Alibaba.Adlab.PackageCheckIn } };
  /** {@link Alibaba.Agro.AccountConfirmPrice 蜂巢 > 分销商同意或者拒绝调价} */
  type AlibabaAgroAccountConfirmPrice = Message & { content?: MessageContent & { topic?: 'alibaba_agro_AccountConfirmPrice', content?: string | Alibaba.Agro.AccountConfirmPrice } };
  /** {@link Alibaba.Agro.ItemPriceChange 蜂巢 > 商品调价通知isv} */
  type AlibabaAgroItemPriceChange = Message & { content?: MessageContent & { topic?: 'alibaba_agro_ItemPriceChange', content?: string | Alibaba.Agro.ItemPriceChange } };
  /** {@link Alibaba.Agro.LogisticsOrderStatusChange 蜂巢 > 子物流单状态变化小} */
  type AlibabaAgroLogisticsOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_agro_LogisticsOrderStatusChange', content?: string | Alibaba.Agro.LogisticsOrderStatusChange } };
  /** {@link Alibaba.Agro.UnpunishProduct 蜂巢 > 取消铺货产品下架} */
  type AlibabaAgroUnpunishProduct = Message & { content?: MessageContent & { topic?: 'alibaba_agro_UnpunishProduct', content?: string | Alibaba.Agro.UnpunishProduct } };
  /** {@link Alibaba.Ailabs.AutocarNofity 无人车 > 无人车消息推送} */
  type AlibabaAilabsAutocarNofity = Message & { content?: MessageContent & { topic?: 'alibaba_ailabs_AutocarNofity', content?: string | Alibaba.Ailabs.AutocarNofity } };
  /** {@link Alibaba.Ailbas.IotMessage 精灵IOT > 精灵iot消息} */
  type AlibabaAilbasIotMessage = Message & { content?: MessageContent & { topic?: 'alibaba_ailbas_IotMessage', content?: string | Alibaba.Ailbas.IotMessage } };
  /** {@link Alibaba.Ais.SupplierComponentActualDepartureNote AIS&供应商数据对接 > 部件实际发货通知} */
  type AlibabaAisSupplierComponentActualDepartureNote = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentActualDepartureNote', content?: string | Alibaba.Ais.SupplierComponentActualDepartureNote } };
  /** {@link Alibaba.Ais.SupplierComponentDeductionPlanNote AIS&供应商数据对接 > 部件扣料计划反馈通知} */
  type AlibabaAisSupplierComponentDeductionPlanNote = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentDeductionPlanNote', content?: string | Alibaba.Ais.SupplierComponentDeductionPlanNote } };
  /** {@link Alibaba.Ais.SupplierComponentEstimatedArrivalNote AIS&供应商数据对接 > 部件预计到货通知-ETA} */
  type AlibabaAisSupplierComponentEstimatedArrivalNote = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentEstimatedArrivalNote', content?: string | Alibaba.Ais.SupplierComponentEstimatedArrivalNote } };
  /** {@link Alibaba.Ais.SupplierComponentInventoryNote AIS&供应商数据对接 > 订阅整机库存反馈通知} */
  type AlibabaAisSupplierComponentInventoryNote = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentInventoryNote', content?: string | Alibaba.Ais.SupplierComponentInventoryNote } };
  /** {@link Alibaba.Ais.SupplierComponentManufactureOrderNote AIS&供应商数据对接 > 订阅整机生产指令通知} */
  type AlibabaAisSupplierComponentManufactureOrderNote = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentManufactureOrderNote', content?: string | Alibaba.Ais.SupplierComponentManufactureOrderNote } };
  /** {@link Alibaba.Ais.SupplierComponentMpnPnNote AIS&供应商数据对接 > 订阅MPN/PN查询通知} */
  type AlibabaAisSupplierComponentMpnPnNote = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentMpnPnNote', content?: string | Alibaba.Ais.SupplierComponentMpnPnNote } };
  /** {@link Alibaba.Ais.SupplierComponentPurchaseDirective AIS&供应商数据对接 > 阿里向整机供应商下发部件采购指令} */
  type AlibabaAisSupplierComponentPurchaseDirective = Message & { content?: MessageContent & { topic?: 'alibaba_ais_SupplierComponentPurchaseDirective', content?: string | Alibaba.Ais.SupplierComponentPurchaseDirective } };
  /** {@link Alibaba.Aliabs.TmallSign 蚂蚁安全 > ailabs蚂蚁安全异步消息} */
  type AlibabaAliabsTmallSign = Message & { content?: MessageContent & { topic?: 'alibaba_aliabs_TmallSign', content?: string | Alibaba.Aliabs.TmallSign } };
  /** {@link Alibaba.Alicom.FlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  type AlibabaAlicomFlowGiftSendNotify = Message & { content?: MessageContent & { topic?: 'alibaba_alicom_FlowGiftSendNotify', content?: string | Alibaba.Alicom.FlowGiftSendNotify } };
  /** {@link Alibaba.Alihealth.BillProcessStatusNotify 阿里健康追溯码 > 单据处理状态通知} */
  type AlibabaAlihealthBillProcessStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_BillProcessStatusNotify', content?: string | Alibaba.Alihealth.BillProcessStatusNotify } };
  /** {@link Alibaba.Alihealth.DoctorMessage 阿里健康追溯码 > 医生、服务相关消息} */
  type AlibabaAlihealthDoctorMessage = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_DoctorMessage', content?: string | Alibaba.Alihealth.DoctorMessage } };
  /** {@link Alibaba.Alihealth.MvmBizStatusChange 阿里健康追溯码 > 售药机营业、歇业消息} */
  type AlibabaAlihealthMvmBizStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_MvmBizStatusChange', content?: string | Alibaba.Alihealth.MvmBizStatusChange } };
  /** {@link Alibaba.Alihealth.MvmInventorySwitch 阿里健康追溯码 > 售药机商品库存切换} */
  type AlibabaAlihealthMvmInventorySwitch = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_MvmInventorySwitch', content?: string | Alibaba.Alihealth.MvmInventorySwitch } };
  /** {@link Alibaba.Alihealth.MvmOrderNotify 阿里健康追溯码 > 接单/拒单/取货成功/取消订单消息通知} */
  type AlibabaAlihealthMvmOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_MvmOrderNotify', content?: string | Alibaba.Alihealth.MvmOrderNotify } };
  /** {@link Alibaba.Alihealth.MvmOrderOfflineSync 阿里健康追溯码 > 售药机线下订单生成通知} */
  type AlibabaAlihealthMvmOrderOfflineSync = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_MvmOrderOfflineSync', content?: string | Alibaba.Alihealth.MvmOrderOfflineSync } };
  /** {@link Alibaba.Alihealth.MvmShopBindStatusChange 阿里健康追溯码 > 售药机绑定、解绑} */
  type AlibabaAlihealthMvmShopBindStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_MvmShopBindStatusChange', content?: string | Alibaba.Alihealth.MvmShopBindStatusChange } };
  /** {@link Alibaba.Alihealth.MvmUpdateInventory 阿里健康追溯码 > 售药机商品上下架} */
  type AlibabaAlihealthMvmUpdateInventory = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_MvmUpdateInventory', content?: string | Alibaba.Alihealth.MvmUpdateInventory } };
  /** {@link Alibaba.Alihealth.NrmopOrderStatusChange 阿里健康追溯码 > 中台订单状态变化推送} */
  type AlibabaAlihealthNrmopOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_NrmopOrderStatusChange', content?: string | Alibaba.Alihealth.NrmopOrderStatusChange } };
  /** {@link Alibaba.Alihealth.OrderStatusChange 阿里健康追溯码 > 平台通知三方机构"订单状态变更"} */
  type AlibabaAlihealthOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_OrderStatusChange', content?: string | Alibaba.Alihealth.OrderStatusChange } };
  /** {@link Alibaba.Alihealth.PrescriptionConfirm 阿里健康追溯码 > 处方平台处方核销消息} */
  type AlibabaAlihealthPrescriptionConfirm = Message & { content?: MessageContent & { topic?: 'alibaba_alihealth_PrescriptionConfirm', content?: string | Alibaba.Alihealth.PrescriptionConfirm } };
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
  /** {@link Alibaba.Aliqin.AxbCallRecord 阿里通信 > axb通话记录} */
  type AlibabaAliqinAxbCallRecord = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_AxbCallRecord', content?: string | Alibaba.Aliqin.AxbCallRecord } };
  /** {@link Alibaba.Aliqin.AxbCallRelease 阿里通信 > 通话结束时产生的通话记录} */
  type AlibabaAliqinAxbCallRelease = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_AxbCallRelease', content?: string | Alibaba.Aliqin.AxbCallRelease } };
  /** {@link Alibaba.Aliqin.DigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  type AlibabaAliqinDigitalSmsTemplateDR = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_DigitalSmsTemplateDR', content?: string | Alibaba.Aliqin.DigitalSmsTemplateDR } };
  /** {@link Alibaba.Aliqin.FcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  type AlibabaAliqinFcActiveIotcard = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcActiveIotcard', content?: string | Alibaba.Aliqin.FcActiveIotcard } };
  /** {@link Alibaba.Aliqin.FcCallCdr 阿里通信 > 语音呼叫结果推送} */
  type AlibabaAliqinFcCallCdr = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcCallCdr', content?: string | Alibaba.Aliqin.FcCallCdr } };
  /** {@link Alibaba.Aliqin.FcCallRecord 阿里通信 > 录音回执} */
  type AlibabaAliqinFcCallRecord = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcCallRecord', content?: string | Alibaba.Aliqin.FcCallRecord } };
  /** {@link Alibaba.Aliqin.FcCodeSmsUp 阿里通信 > 编码发送短信上行消息} */
  type AlibabaAliqinFcCodeSmsUp = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_FcCodeSmsUp', content?: string | Alibaba.Aliqin.FcCodeSmsUp } };
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
  /** {@link Alibaba.Aliqin.IotCurFlowLimitNotice 阿里通信 > 物联网卡剩余流量提醒} */
  type AlibabaAliqinIotCurFlowLimitNotice = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_IotCurFlowLimitNotice', content?: string | Alibaba.Aliqin.IotCurFlowLimitNotice } };
  /** {@link Alibaba.Aliqin.IotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  type AlibabaAliqinIotPersonalConfirmNotice = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_IotPersonalConfirmNotice', content?: string | Alibaba.Aliqin.IotPersonalConfirmNotice } };
  /** {@link Alibaba.Aliqin.IotStatusNotice 阿里通信 > 物联网停机消息通知} */
  type AlibabaAliqinIotStatusNotice = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_IotStatusNotice', content?: string | Alibaba.Aliqin.IotStatusNotice } };
  /** {@link Alibaba.Aliqin.MiuaCallRecord 阿里通信 > Miua通话记录Top推送} */
  type AlibabaAliqinMiuaCallRecord = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_MiuaCallRecord', content?: string | Alibaba.Aliqin.MiuaCallRecord } };
  /** {@link Alibaba.Aliqin.PlatformMonitorRecord 阿里通信 > 平台监控记录} */
  type AlibabaAliqinPlatformMonitorRecord = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_PlatformMonitorRecord', content?: string | Alibaba.Aliqin.PlatformMonitorRecord } };
  /** {@link Alibaba.Aliqin.TaFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  type AlibabaAliqinTaFcCallCdr = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_TaFcCallCdr', content?: string | Alibaba.Aliqin.TaFcCallCdr } };
  /** {@link Alibaba.Aliqin.TaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  type AlibabaAliqinTaFcSmsDR = Message & { content?: MessageContent & { topic?: 'alibaba_aliqin_TaFcSmsDR', content?: string | Alibaba.Aliqin.TaFcSmsDR } };
  /** {@link Alibaba.Alisports.FishingTest 阿里体育 > 钓鱼测试消息} */
  type AlibabaAlisportsFishingTest = Message & { content?: MessageContent & { topic?: 'alibaba_alisports_FishingTest', content?: string | Alibaba.Alisports.FishingTest } };
  /** {@link Alibaba.Ascpchannelmanagermentmsg.OrderAudit 集采 > 集采订单审核通知} */
  type AlibabaAscpchannelmanagermentmsgOrderAudit = Message & { content?: MessageContent & { topic?: 'alibaba_ascpchannelmanagermentmsg_OrderAudit', content?: string | Alibaba.Ascpchannelmanagermentmsg.OrderAudit } };
  /** {@link Alibaba.Ascpchannelmanagermentmsg.OrderClose 集采 > 集采订单关闭通知} */
  type AlibabaAscpchannelmanagermentmsgOrderClose = Message & { content?: MessageContent & { topic?: 'alibaba_ascpchannelmanagermentmsg_OrderClose', content?: string | Alibaba.Ascpchannelmanagermentmsg.OrderClose } };
  /** {@link Alibaba.Ascpchannelmanagermentmsg.OrderDeliver 集采 > 集采订单发货通知} */
  type AlibabaAscpchannelmanagermentmsgOrderDeliver = Message & { content?: MessageContent & { topic?: 'alibaba_ascpchannelmanagermentmsg_OrderDeliver', content?: string | Alibaba.Ascpchannelmanagermentmsg.OrderDeliver } };
  /** {@link Alibaba.Cfo.AccountFlowNotify TMI付款及银行支行主数据 > 账号流水通知消息} */
  type AlibabaCfoAccountFlowNotify = Message & { content?: MessageContent & { topic?: 'alibaba_cfo_AccountFlowNotify', content?: string | Alibaba.Cfo.AccountFlowNotify } };
  /** {@link Alibaba.Coupon.OpenCouponDraw 券开放消息权限包 > 用户领取券消息通知} */
  type AlibabaCouponOpenCouponDraw = Message & { content?: MessageContent & { topic?: 'alibaba_coupon_OpenCouponDraw', content?: string | Alibaba.Coupon.OpenCouponDraw } };
  /** {@link Alibaba.Crm.OutboundInfoMessage ICBU-CRM智能机器人外呼沟通 > 外呼名单消息发送} */
  type AlibabaCrmOutboundInfoMessage = Message & { content?: MessageContent & { topic?: 'alibaba_crm_OutboundInfoMessage', content?: string | Alibaba.Crm.OutboundInfoMessage } };
  /** {@link Alibaba.Crowdsourcing.Material - > 素材生成通知} */
  type AlibabaCrowdsourcingMaterial = Message & { content?: MessageContent & { topic?: 'alibaba_crowdsourcing_Material', content?: string | Alibaba.Crowdsourcing.Material } };
  /** {@link Alibaba.Decoration.AidesignFinish 阿里楼盘 > AI设计方案状态变更通知} */
  type AlibabaDecorationAidesignFinish = Message & { content?: MessageContent & { topic?: 'alibaba_decoration_AidesignFinish', content?: string | Alibaba.Decoration.AidesignFinish } };
  /** {@link Alibaba.Decoration.ApartmentExport 阿里楼盘 > 生成户型图消息} */
  type AlibabaDecorationApartmentExport = Message & { content?: MessageContent & { topic?: 'alibaba_decoration_ApartmentExport', content?: string | Alibaba.Decoration.ApartmentExport } };
  /** {@link Alibaba.Decoration.DamoStatusChange 阿里楼盘 > 达摩院户型图消息推送} */
  type AlibabaDecorationDamoStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_decoration_DamoStatusChange', content?: string | Alibaba.Decoration.DamoStatusChange } };
  /** {@link Alibaba.Decoration.ExternalAccountFinish 阿里楼盘 > 账号绑定消息} */
  type AlibabaDecorationExternalAccountFinish = Message & { content?: MessageContent & { topic?: 'alibaba_decoration_ExternalAccountFinish', content?: string | Alibaba.Decoration.ExternalAccountFinish } };
  /** {@link Alibaba.Decoration.HousethreedImage 阿里楼盘 > 生成3d全屋漫游图后的消息} */
  type AlibabaDecorationHousethreedImage = Message & { content?: MessageContent & { topic?: 'alibaba_decoration_HousethreedImage', content?: string | Alibaba.Decoration.HousethreedImage } };
  /** {@link Alibaba.Einvoice.ApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  type AlibabaEinvoiceApplyUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_ApplyUpdate', content?: string | Alibaba.Einvoice.ApplyUpdate } };
  /** {@link Alibaba.Einvoice.CompanyDoAction 电子发票 > 商户事件触发消息} */
  type AlibabaEinvoiceCompanyDoAction = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_CompanyDoAction', content?: string | Alibaba.Einvoice.CompanyDoAction } };
  /** {@link Alibaba.Einvoice.DeviceOperation 电子发票 > 设备绑定变化消息通知} */
  type AlibabaEinvoiceDeviceOperation = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_DeviceOperation', content?: string | Alibaba.Einvoice.DeviceOperation } };
  /** {@link Alibaba.Einvoice.MerchantAbilityUpdate 电子发票 > 开票能力变更通知} */
  type AlibabaEinvoiceMerchantAbilityUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_MerchantAbilityUpdate', content?: string | Alibaba.Einvoice.MerchantAbilityUpdate } };
  /** {@link Alibaba.Einvoice.OrderRefund 电子发票 > 订购单退款通知} */
  type AlibabaEinvoiceOrderRefund = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_OrderRefund', content?: string | Alibaba.Einvoice.OrderRefund } };
  /** {@link Alibaba.Einvoice.OrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  type AlibabaEinvoiceOrderRefundResult = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_OrderRefundResult', content?: string | Alibaba.Einvoice.OrderRefundResult } };
  /** {@link Alibaba.Einvoice.RegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  type AlibabaEinvoiceRegisterFlowChange = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_RegisterFlowChange', content?: string | Alibaba.Einvoice.RegisterFlowChange } };
  /** {@link Alibaba.Einvoice.RegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  type AlibabaEinvoiceRegisterFlowCreate = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_RegisterFlowCreate', content?: string | Alibaba.Einvoice.RegisterFlowCreate } };
  /** {@link Alibaba.Einvoice.RenewOrder 电子发票 > 订购单续约通知} */
  type AlibabaEinvoiceRenewOrder = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_RenewOrder', content?: string | Alibaba.Einvoice.RenewOrder } };
  /** {@link Alibaba.Einvoice.TaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  type AlibabaEinvoiceTaxDeviceOrder = Message & { content?: MessageContent & { topic?: 'alibaba_einvoice_TaxDeviceOrder', content?: string | Alibaba.Einvoice.TaxDeviceOrder } };
  /** {@link Alibaba.Esl.SendMsgAliyun ESL > 给阿里云发送消息} */
  type AlibabaEslSendMsgAliyun = Message & { content?: MessageContent & { topic?: 'alibaba_esl_SendMsgAliyun', content?: string | Alibaba.Esl.SendMsgAliyun } };
  /** {@link Alibaba.Fuwu.OrderPaid 1688服务市场 > 订单支付消息} */
  type AlibabaFuwuOrderPaid = Message & { content?: MessageContent & { topic?: 'alibaba_fuwu_OrderPaid', content?: string | Alibaba.Fuwu.OrderPaid } };
  /** {@link Alibaba.Fuwu.TradeAction 1688服务市场 > 外贸服务市场订单变更消息} */
  type AlibabaFuwuTradeAction = Message & { content?: MessageContent & { topic?: 'alibaba_fuwu_TradeAction', content?: string | Alibaba.Fuwu.TradeAction } };
  /** {@link Alibaba.Fuwu.TradePayAction 1688服务市场 > ICBU服务市场交易支付消息} */
  type AlibabaFuwuTradePayAction = Message & { content?: MessageContent & { topic?: 'alibaba_fuwu_TradePayAction', content?: string | Alibaba.Fuwu.TradePayAction } };
  /** {@link Alibaba.Happyfinance.InNotify 娱乐宝 > CP入驻通知} */
  type AlibabaHappyfinanceInNotify = Message & { content?: MessageContent & { topic?: 'alibaba_happyfinance_InNotify', content?: string | Alibaba.Happyfinance.InNotify } };
  /** {@link Alibaba.Happytrip.OrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  type AlibabaHappytripOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_happytrip_OrderNotify', content?: string | Alibaba.Happytrip.OrderNotify } };
  /** {@link Alibaba.Hj.InvoiceCancel 汇金销项票 > 汇金销项票作废通知} */
  type AlibabaHjInvoiceCancel = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceCancel', content?: string | Alibaba.Hj.InvoiceCancel } };
  /** {@link Alibaba.Hj.InvoiceFileUpload 汇金销项票 > 汇金销项票文件上传通知} */
  type AlibabaHjInvoiceFileUpload = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceFileUpload', content?: string | Alibaba.Hj.InvoiceFileUpload } };
  /** {@link Alibaba.Hj.InvoiceIssue 汇金销项票 > 汇金销项票开具通知} */
  type AlibabaHjInvoiceIssue = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceIssue', content?: string | Alibaba.Hj.InvoiceIssue } };
  /** {@link Alibaba.Hj.InvoiceRedIssue 汇金销项票 > 汇金销项票冲红通知} */
  type AlibabaHjInvoiceRedIssue = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceRedIssue', content?: string | Alibaba.Hj.InvoiceRedIssue } };
  /** {@link Alibaba.Hj.InvoiceReject 汇金销项票 > 汇金销项票开票拒绝通知} */
  type AlibabaHjInvoiceReject = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceReject', content?: string | Alibaba.Hj.InvoiceReject } };
  /** {@link Alibaba.Hj.InvoiceReturnReject 汇金销项票 > 汇金销项票拒绝退票通知} */
  type AlibabaHjInvoiceReturnReject = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceReturnReject', content?: string | Alibaba.Hj.InvoiceReturnReject } };
  /** {@link Alibaba.Hj.InvoiceSend 汇金销项票 > 汇金销项票发票寄送通知} */
  type AlibabaHjInvoiceSend = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceSend', content?: string | Alibaba.Hj.InvoiceSend } };
  /** {@link Alibaba.Hj.InvoiceUnissue 汇金销项票 > 汇金销项票待开通知} */
  type AlibabaHjInvoiceUnissue = Message & { content?: MessageContent & { topic?: 'alibaba_hj_InvoiceUnissue', content?: string | Alibaba.Hj.InvoiceUnissue } };
  /** {@link Alibaba.Homestyler.AigcContentImageGenerateCallback 洞窝 > 设计家aigc生图结果消息通知} */
  type AlibabaHomestylerAigcContentImageGenerateCallback = Message & { content?: MessageContent & { topic?: 'alibaba_homestyler_AigcContentImageGenerateCallback', content?: string | Alibaba.Homestyler.AigcContentImageGenerateCallback } };
  /** {@link Alibaba.Homestyler.AigcPanoramaReplaceCallback 洞窝 > 洞窝全景图替换消息回调} */
  type AlibabaHomestylerAigcPanoramaReplaceCallback = Message & { content?: MessageContent & { topic?: 'alibaba_homestyler_AigcPanoramaReplaceCallback', content?: string | Alibaba.Homestyler.AigcPanoramaReplaceCallback } };
  /** {@link Alibaba.Icbulive.CommentNotice ICBU > 直播评论通知} */
  type AlibabaIcbuliveCommentNotice = Message & { content?: MessageContent & { topic?: 'alibaba_icbulive_CommentNotice', content?: string | Alibaba.Icbulive.CommentNotice } };
  /** {@link Alibaba.Icbulive.EnterNotice ICBU > 直播观众进场通知} */
  type AlibabaIcbuliveEnterNotice = Message & { content?: MessageContent & { topic?: 'alibaba_icbulive_EnterNotice', content?: string | Alibaba.Icbulive.EnterNotice } };
  /** {@link Alibaba.Idle.HouseStatusNotify 闲鱼 > 闲鱼房源状态变更通知} */
  type AlibabaIdleHouseStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_idle_HouseStatusNotify', content?: string | Alibaba.Idle.HouseStatusNotify } };
  /** {@link Alibaba.Ifp.PackageCfcContainer 五道口配送 > 同城履约包裹状态变更消息} */
  type AlibabaIfpPackageCfcContainer = Message & { content?: MessageContent & { topic?: 'alibaba_ifp_PackageCfcContainer', content?: string | Alibaba.Ifp.PackageCfcContainer } };
  /** {@link Alibaba.Infop.GoodsChange 采购系统 > 采购系统商品消息变更消息} */
  type AlibabaInfopGoodsChange = Message & { content?: MessageContent & { topic?: 'alibaba_infop_GoodsChange', content?: string | Alibaba.Infop.GoodsChange } };
  /** {@link Alibaba.Infop.PRAudited 采购系统 > PR 审批完成通知} */
  type AlibabaInfopPRAudited = Message & { content?: MessageContent & { topic?: 'alibaba_infop_PRAudited', content?: string | Alibaba.Infop.PRAudited } };
  /** {@link Alibaba.Infop.RcvAuditStatusChange 采购系统 > 采购系统接收单状态变更通知} */
  type AlibabaInfopRcvAuditStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_infop_RcvAuditStatusChange', content?: string | Alibaba.Infop.RcvAuditStatusChange } };
  /** {@link Alibaba.Infop.RcvCreateSuccess 采购系统 > 接收单创建成功通知} */
  type AlibabaInfopRcvCreateSuccess = Message & { content?: MessageContent & { topic?: 'alibaba_infop_RcvCreateSuccess', content?: string | Alibaba.Infop.RcvCreateSuccess } };
  /** {@link Alibaba.Intime.ServiceOrderCreateUpdate 银泰 > 银泰服务订单创建&更新} */
  type AlibabaIntimeServiceOrderCreateUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_intime_ServiceOrderCreateUpdate', content?: string | Alibaba.Intime.ServiceOrderCreateUpdate } };
  /** {@link Alibaba.Invoice.AlipayApply 电子发票 > 开票申请(支付宝专用)} */
  type AlibabaInvoiceAlipayApply = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_AlipayApply', content?: string | Alibaba.Invoice.AlipayApply } };
  /** {@link Alibaba.Invoice.AlipayApplyResult 电子发票 > 开票申请审核结果(支付宝专用)} */
  type AlibabaInvoiceAlipayApplyResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_AlipayApplyResult', content?: string | Alibaba.Invoice.AlipayApplyResult } };
  /** {@link Alibaba.Invoice.AlipayCreateReq 电子发票 > 开票请求(支付宝专用)} */
  type AlibabaInvoiceAlipayCreateReq = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_AlipayCreateReq', content?: string | Alibaba.Invoice.AlipayCreateReq } };
  /** {@link Alibaba.Invoice.AlipayResultReturn 电子发票 > 开票请求结果(支付宝专用)} */
  type AlibabaInvoiceAlipayResultReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_AlipayResultReturn', content?: string | Alibaba.Invoice.AlipayResultReturn } };
  /** {@link Alibaba.Invoice.Apply 电子发票 > 开票申请} */
  type AlibabaInvoiceApply = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Apply', content?: string | Alibaba.Invoice.Apply } };
  /** {@link Alibaba.Invoice.ApplyDisagree 电子发票 > 商家拒绝开票} */
  type AlibabaInvoiceApplyDisagree = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ApplyDisagree', content?: string | Alibaba.Invoice.ApplyDisagree } };
  /** {@link Alibaba.Invoice.ApplyResult 电子发票 > 开票申请审核结果} */
  type AlibabaInvoiceApplyResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ApplyResult', content?: string | Alibaba.Invoice.ApplyResult } };
  /** {@link Alibaba.Invoice.ChangePaper 电子发票 > 电换纸消息} */
  type AlibabaInvoiceChangePaper = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ChangePaper', content?: string | Alibaba.Invoice.ChangePaper } };
  /** {@link Alibaba.Invoice.ClerkStatusChange 电子发票 > 商户店员状态变更} */
  type AlibabaInvoiceClerkStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ClerkStatusChange', content?: string | Alibaba.Invoice.ClerkStatusChange } };
  /** {@link Alibaba.Invoice.CreateReq 电子发票 > 开票请求消息} */
  type AlibabaInvoiceCreateReq = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_CreateReq', content?: string | Alibaba.Invoice.CreateReq } };
  /** {@link Alibaba.Invoice.DiskMail 电子发票 > 商家邮寄税控盘消息} */
  type AlibabaInvoiceDiskMail = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_DiskMail', content?: string | Alibaba.Invoice.DiskMail } };
  /** {@link Alibaba.Invoice.DiskOffline 电子发票 > 税盘下架单新增和更新通知} */
  type AlibabaInvoiceDiskOffline = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_DiskOffline', content?: string | Alibaba.Invoice.DiskOffline } };
  /** {@link Alibaba.Invoice.FlowBuket 电子发票 > 资源包开通/订购记录同步} */
  type AlibabaInvoiceFlowBuket = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_FlowBuket', content?: string | Alibaba.Invoice.FlowBuket } };
  /** {@link Alibaba.Invoice.GetXmlFile 电子发票 > 获取xml发票文件} */
  type AlibabaInvoiceGetXmlFile = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_GetXmlFile', content?: string | Alibaba.Invoice.GetXmlFile } };
  /** {@link Alibaba.Invoice.HxQuery 电子发票 > 830平台查询单机盒子消息} */
  type AlibabaInvoiceHxQuery = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_HxQuery', content?: string | Alibaba.Invoice.HxQuery } };
  /** {@link Alibaba.Invoice.IncomeCertificateResult 电子发票 > 进项发票认证结果通知} */
  type AlibabaInvoiceIncomeCertificateResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_IncomeCertificateResult', content?: string | Alibaba.Invoice.IncomeCertificateResult } };
  /** {@link Alibaba.Invoice.IncomeOcrResult 电子发票 > ocr结果通知} */
  type AlibabaInvoiceIncomeOcrResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_IncomeOcrResult', content?: string | Alibaba.Invoice.IncomeOcrResult } };
  /** {@link Alibaba.Invoice.IncomeScanResult 电子发票 > 进项扫描结果通知} */
  type AlibabaInvoiceIncomeScanResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_IncomeScanResult', content?: string | Alibaba.Invoice.IncomeScanResult } };
  /** {@link Alibaba.Invoice.IncomeVerifyResult 电子发票 > 进项查验结果通知} */
  type AlibabaInvoiceIncomeVerifyResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_IncomeVerifyResult', content?: string | Alibaba.Invoice.IncomeVerifyResult } };
  /** {@link Alibaba.Invoice.InnerResultReturn 电子发票 > 开票请求结果(内部专用)} */
  type AlibabaInvoiceInnerResultReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_InnerResultReturn', content?: string | Alibaba.Invoice.InnerResultReturn } };
  /** {@link Alibaba.Invoice.InvoiceApply 电子发票 > 税控服务开票申请} */
  type AlibabaInvoiceInvoiceApply = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_InvoiceApply', content?: string | Alibaba.Invoice.InvoiceApply } };
  /** {@link Alibaba.Invoice.ItemNoSwitch 电子发票 > 税号商品编码切换消息} */
  type AlibabaInvoiceItemNoSwitch = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ItemNoSwitch', content?: string | Alibaba.Invoice.ItemNoSwitch } };
  /** {@link Alibaba.Invoice.Logistics 电子发票 > 发票对外通知物流信息} */
  type AlibabaInvoiceLogistics = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Logistics', content?: string | Alibaba.Invoice.Logistics } };
  /** {@link Alibaba.Invoice.MakeUp 电子发票 > 补开票消息} */
  type AlibabaInvoiceMakeUp = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_MakeUp', content?: string | Alibaba.Invoice.MakeUp } };
  /** {@link Alibaba.Invoice.PaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）} */
  type AlibabaInvoicePaperOpsReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_PaperOpsReturn', content?: string | Alibaba.Invoice.PaperOpsReturn } };
  /** {@link Alibaba.Invoice.PreConsulting 电子发票 > 电子发票售前咨询} */
  type AlibabaInvoicePreConsulting = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_PreConsulting', content?: string | Alibaba.Invoice.PreConsulting } };
  /** {@link Alibaba.Invoice.ProxyCreateReq 电子发票 > 开票请求消息} */
  type AlibabaInvoiceProxyCreateReq = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ProxyCreateReq', content?: string | Alibaba.Invoice.ProxyCreateReq } };
  /** {@link Alibaba.Invoice.ProxyCreateReqTest 电子发票 > 开票请求消息影子Topic} */
  type AlibabaInvoiceProxyCreateReqTest = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ProxyCreateReqTest', content?: string | Alibaba.Invoice.ProxyCreateReqTest } };
  /** {@link Alibaba.Invoice.Query 电子发票 > 数据查询请求} */
  type AlibabaInvoiceQuery = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Query', content?: string | Alibaba.Invoice.Query } };
  /** {@link Alibaba.Invoice.QueryInvoice 电子发票 > 查询发票信息} */
  type AlibabaInvoiceQueryInvoice = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_QueryInvoice', content?: string | Alibaba.Invoice.QueryInvoice } };
  /** {@link Alibaba.Invoice.RecreateBlue 电子发票 > 订单退款冲红后重开蓝票消息} */
  type AlibabaInvoiceRecreateBlue = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_RecreateBlue', content?: string | Alibaba.Invoice.RecreateBlue } };
  /** {@link Alibaba.Invoice.Regist 电子发票 > 入驻阿里发票平台} */
  type AlibabaInvoiceRegist = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Regist', content?: string | Alibaba.Invoice.Regist } };
  /** {@link Alibaba.Invoice.RegistQuit 电子发票 > 商家请求退出} */
  type AlibabaInvoiceRegistQuit = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_RegistQuit', content?: string | Alibaba.Invoice.RegistQuit } };
  /** {@link Alibaba.Invoice.RegistResult 电子发票 > 入驻阿里发票平台结果} */
  type AlibabaInvoiceRegistResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_RegistResult', content?: string | Alibaba.Invoice.RegistResult } };
  /** {@link Alibaba.Invoice.ResultReturn 电子发票 > 开票请求结果} */
  type AlibabaInvoiceResultReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ResultReturn', content?: string | Alibaba.Invoice.ResultReturn } };
  /** {@link Alibaba.Invoice.RetryApply 电子发票 > 开票申请失败重试消息} */
  type AlibabaInvoiceRetryApply = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_RetryApply', content?: string | Alibaba.Invoice.RetryApply } };
  /** {@link Alibaba.Invoice.ServiceClose 电子发票 > 服务到期关闭} */
  type AlibabaInvoiceServiceClose = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_ServiceClose', content?: string | Alibaba.Invoice.ServiceClose } };
  /** {@link Alibaba.Invoice.StatusChange 电子发票 > 发票状态变更消息} */
  type AlibabaInvoiceStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_StatusChange', content?: string | Alibaba.Invoice.StatusChange } };
  /** {@link Alibaba.Invoice.SubService 电子发票 > 服务子单消息} */
  type AlibabaInvoiceSubService = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_SubService', content?: string | Alibaba.Invoice.SubService } };
  /** {@link Alibaba.Invoice.TaxChange 电子发票 > 商家税号变更} */
  type AlibabaInvoiceTaxChange = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_TaxChange', content?: string | Alibaba.Invoice.TaxChange } };
  /** {@link Alibaba.Invoice.TaxCodeSwitch 电子发票 > 税号切换商品编码消息} */
  type AlibabaInvoiceTaxCodeSwitch = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_TaxCodeSwitch', content?: string | Alibaba.Invoice.TaxCodeSwitch } };
  /** {@link Alibaba.Invoice.TaxOfficeUserkeyReturn 电子发票 > 浙江税局注册商户信息回传} */
  type AlibabaInvoiceTaxOfficeUserkeyReturn = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_TaxOfficeUserkeyReturn', content?: string | Alibaba.Invoice.TaxOfficeUserkeyReturn } };
  /** {@link Alibaba.Invoice.Unissue 电子发票 > 创建未开具发票通知} */
  type AlibabaInvoiceUnissue = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_Unissue', content?: string | Alibaba.Invoice.Unissue } };
  /** {@link Alibaba.Invoice.UnitBuy 电子发票 > 税控单元订购记录同步} */
  type AlibabaInvoiceUnitBuy = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_UnitBuy', content?: string | Alibaba.Invoice.UnitBuy } };
  /** {@link Alibaba.Invoice.UnitRefund 电子发票 > 税控单元退款消息} */
  type AlibabaInvoiceUnitRefund = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_UnitRefund', content?: string | Alibaba.Invoice.UnitRefund } };
  /** {@link Alibaba.Invoice.VerifyResult 电子发票 > 发票查验结果通知消息} */
  type AlibabaInvoiceVerifyResult = Message & { content?: MessageContent & { topic?: 'alibaba_invoice_VerifyResult', content?: string | Alibaba.Invoice.VerifyResult } };
  /** {@link Alibaba.Jym.SteamTradeOrderNotify 交易猫 > 交易猫steam正向消息通知} */
  type AlibabaJymSteamTradeOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_jym_SteamTradeOrderNotify', content?: string | Alibaba.Jym.SteamTradeOrderNotify } };
  /** {@link Alibaba.Jym.SteamTradeRefundNotify 交易猫 > 交易猫steam逆向通知} */
  type AlibabaJymSteamTradeRefundNotify = Message & { content?: MessageContent & { topic?: 'alibaba_jym_SteamTradeRefundNotify', content?: string | Alibaba.Jym.SteamTradeRefundNotify } };
  /** {@link Alibaba.Jym.TradeRefundNotify 交易猫 > 交易猫逆向单状态通知} */
  type AlibabaJymTradeRefundNotify = Message & { content?: MessageContent & { topic?: 'alibaba_jym_TradeRefundNotify', content?: string | Alibaba.Jym.TradeRefundNotify } };
  /** {@link Alibaba.Kaola.AlipayTaskFinish 考拉 > 考拉用户完成支付宝任务} */
  type AlibabaKaolaAlipayTaskFinish = Message & { content?: MessageContent & { topic?: 'alibaba_kaola_AlipayTaskFinish', content?: string | Alibaba.Kaola.AlipayTaskFinish } };
  /** {@link Alibaba.Kaola.SendPromoevent 考拉 > 考拉发送消息到Promoevent} */
  type AlibabaKaolaSendPromoevent = Message & { content?: MessageContent & { topic?: 'alibaba_kaola_SendPromoevent', content?: string | Alibaba.Kaola.SendPromoevent } };
  /** {@link Alibaba.Kongur.BusinessMsg 司法开放平台 > 司法开放平台推送消息给提供律师服务的供应商} */
  type AlibabaKongurBusinessMsg = Message & { content?: MessageContent & { topic?: 'alibaba_kongur_BusinessMsg', content?: string | Alibaba.Kongur.BusinessMsg } };
  /** {@link Alibaba.Lassen.FileStatusNotify 网上法庭 > 网上法庭证据文件状态变更通知} */
  type AlibabaLassenFileStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_lassen_FileStatusNotify', content?: string | Alibaba.Lassen.FileStatusNotify } };
  /** {@link Alibaba.Lassen.LegalCasePaymentOrderNotify 网上法庭 > 发送支付令} */
  type AlibabaLassenLegalCasePaymentOrderNotify = Message & { content?: MessageContent & { topic?: 'alibaba_lassen_LegalCasePaymentOrderNotify', content?: string | Alibaba.Lassen.LegalCasePaymentOrderNotify } };
  /** {@link Alibaba.Lassen.LegalCaseStatusNotify 网上法庭 > 网上法庭案件状态变更通知} */
  type AlibabaLassenLegalCaseStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_lassen_LegalCaseStatusNotify', content?: string | Alibaba.Lassen.LegalCaseStatusNotify } };
  /** {@link Alibaba.Legal.MasterdataCompany - > 公司消息变更通知} */
  type AlibabaLegalMasterdataCompany = Message & { content?: MessageContent & { topic?: 'alibaba_legal_MasterdataCompany', content?: string | Alibaba.Legal.MasterdataCompany } };
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
  /** {@link Alibaba.Lst.OpenOrderCreate 零售通_公共 > 零售通门店订单创建消息推送} */
  type AlibabaLstOpenOrderCreate = Message & { content?: MessageContent & { topic?: 'alibaba_lst_OpenOrderCreate', content?: string | Alibaba.Lst.OpenOrderCreate } };
  /** {@link Alibaba.Lst.OrderChange 零售通_公共 > 零售通交易订单变更消息} */
  type AlibabaLstOrderChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_OrderChange', content?: string | Alibaba.Lst.OrderChange } };
  /** {@link Alibaba.Lst.RefundChange 零售通_公共 > 订单退单} */
  type AlibabaLstRefundChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_RefundChange', content?: string | Alibaba.Lst.RefundChange } };
  /** {@link Alibaba.Lst.SelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  type AlibabaLstSelfOrderShipChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_SelfOrderShipChange', content?: string | Alibaba.Lst.SelfOrderShipChange } };
  /** {@link Alibaba.Lst.SpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  type AlibabaLstSpeakerAdvertPlayRecord = Message & { content?: MessageContent & { topic?: 'alibaba_lst_SpeakerAdvertPlayRecord', content?: string | Alibaba.Lst.SpeakerAdvertPlayRecord } };
  /** {@link Alibaba.Lst.SupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  type AlibabaLstSupplierOrderChange = Message & { content?: MessageContent & { topic?: 'alibaba_lst_SupplierOrderChange', content?: string | Alibaba.Lst.SupplierOrderChange } };
  /** {@link Alibaba.Lst.VendingInventoryUpdate 零售通_公共 > 自动售货机库存更新消息} */
  type AlibabaLstVendingInventoryUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_lst_VendingInventoryUpdate', content?: string | Alibaba.Lst.VendingInventoryUpdate } };
  /** {@link Alibaba.Lst.VendingTradeCreate 零售通_公共 > 售货机交易创建消息} */
  type AlibabaLstVendingTradeCreate = Message & { content?: MessageContent & { topic?: 'alibaba_lst_VendingTradeCreate', content?: string | Alibaba.Lst.VendingTradeCreate } };
  /** {@link Alibaba.Mmc.InventorySynchronous MMC五盘货项目 > RT店仓项目-MMC库存增量推送消息} */
  type AlibabaMmcInventorySynchronous = Message & { content?: MessageContent & { topic?: 'alibaba_mmc_InventorySynchronous', content?: string | Alibaba.Mmc.InventorySynchronous } };
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
  /** {@link Alibaba.Mos.SaleOrderDeliver 银泰开放平台消息 > 销售单发货消息} */
  type AlibabaMosSaleOrderDeliver = Message & { content?: MessageContent & { topic?: 'alibaba_mos_SaleOrderDeliver', content?: string | Alibaba.Mos.SaleOrderDeliver } };
  /** {@link Alibaba.Mos.SaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  type AlibabaMosSaleOrderRefund = Message & { content?: MessageContent & { topic?: 'alibaba_mos_SaleOrderRefund', content?: string | Alibaba.Mos.SaleOrderRefund } };
  /** {@link Alibaba.Mos.TradeOrder 银泰开放平台消息 > 交易订单状态变动} */
  type AlibabaMosTradeOrder = Message & { content?: MessageContent & { topic?: 'alibaba_mos_TradeOrder', content?: string | Alibaba.Mos.TradeOrder } };
  /** {@link Alibaba.Msd.SettlementBillDetail 天猫服务 > 喵速达服务供应链结算单明细消息} */
  type AlibabaMsdSettlementBillDetail = Message & { content?: MessageContent & { topic?: 'alibaba_msd_SettlementBillDetail', content?: string | Alibaba.Msd.SettlementBillDetail } };
  /** {@link Alibaba.Msfservice.AuditCreate 天猫服务 > 喵师傅审核单通知} */
  type AlibabaMsfserviceAuditCreate = Message & { content?: MessageContent & { topic?: 'alibaba_msfservice_AuditCreate', content?: string | Alibaba.Msfservice.AuditCreate } };
  /** {@link Alibaba.Msfservice.ExtrafeeRecordCreate 天猫服务 > 喵师傅收费单消息通知} */
  type AlibabaMsfserviceExtrafeeRecordCreate = Message & { content?: MessageContent & { topic?: 'alibaba_msfservice_ExtrafeeRecordCreate', content?: string | Alibaba.Msfservice.ExtrafeeRecordCreate } };
  /** {@link Alibaba.Msfservice.ReminderCreate 天猫服务 > 催单消息} */
  type AlibabaMsfserviceReminderCreate = Message & { content?: MessageContent & { topic?: 'alibaba_msfservice_ReminderCreate', content?: string | Alibaba.Msfservice.ReminderCreate } };
  /** {@link Alibaba.Mtp.ItemAddOrUpdate MTP > MTP-商品新建/编辑成功消息} */
  type AlibabaMtpItemAddOrUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_mtp_ItemAddOrUpdate', content?: string | Alibaba.Mtp.ItemAddOrUpdate } };
  /** {@link Alibaba.Mtp.SupplierAddUpdate MTP > 二级供应商入驻/编辑消息} */
  type AlibabaMtpSupplierAddUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_mtp_SupplierAddUpdate', content?: string | Alibaba.Mtp.SupplierAddUpdate } };
  /** {@link Alibaba.Nazca.AbandonCert 网上法庭 > 作废存证消息接口} */
  type AlibabaNazcaAbandonCert = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_AbandonCert', content?: string | Alibaba.Nazca.AbandonCert } };
  /** {@link Alibaba.Nazca.QueryChargeNum 网上法庭 > 查询收费数量} */
  type AlibabaNazcaQueryChargeNum = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_QueryChargeNum', content?: string | Alibaba.Nazca.QueryChargeNum } };
  /** {@link Alibaba.Nazca.SaveCert 网上法庭 > 发起存证消息接口} */
  type AlibabaNazcaSaveCert = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_SaveCert', content?: string | Alibaba.Nazca.SaveCert } };
  /** {@link Alibaba.Nazca.UpdateChargeNum 网上法庭 > 更新收费数量} */
  type AlibabaNazcaUpdateChargeNum = Message & { content?: MessageContent & { topic?: 'alibaba_nazca_UpdateChargeNum', content?: string | Alibaba.Nazca.UpdateChargeNum } };
  /** {@link Alibaba.Newretail.PosOrderMessage 本地生活 > 阿里本地生活智慧菜场RTP订单消息} */
  type AlibabaNewretailPosOrderMessage = Message & { content?: MessageContent & { topic?: 'alibaba_newretail_PosOrderMessage', content?: string | Alibaba.Newretail.PosOrderMessage } };
  /** {@link Alibaba.Nlife.BToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  type AlibabaNlifeBToBTradeStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BToBTradeStatusNotify', content?: string | Alibaba.Nlife.BToBTradeStatusNotify } };
  /** {@link Alibaba.Nlife.BToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  type AlibabaNlifeBToCTradeOrderSync = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BToCTradeOrderSync', content?: string | Alibaba.Nlife.BToCTradeOrderSync } };
  /** {@link Alibaba.Nlife.BToCTradeStatusNotify 零售plus > B2C交易订单状态变化通知} */
  type AlibabaNlifeBToCTradeStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BToCTradeStatusNotify', content?: string | Alibaba.Nlife.BToCTradeStatusNotify } };
  /** {@link Alibaba.Nlife.BtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  type AlibabaNlifeBtoBTradeDeliverNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtoBTradeDeliverNotify', content?: string | Alibaba.Nlife.BtoBTradeDeliverNotify } };
  /** {@link Alibaba.Nlife.BtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  type AlibabaNlifeBtoBTradeEffectiveNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtoBTradeEffectiveNotify', content?: string | Alibaba.Nlife.BtoBTradeEffectiveNotify } };
  /** {@link Alibaba.Nlife.BtobRefundInfoNotify 零售plus > 二级供货商批次采退单通知信息} */
  type AlibabaNlifeBtobRefundInfoNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtobRefundInfoNotify', content?: string | Alibaba.Nlife.BtobRefundInfoNotify } };
  /** {@link Alibaba.Nlife.BtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  type AlibabaNlifeBtobTradeRefundConfirmMsgNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtobTradeRefundConfirmMsgNotify', content?: string | Alibaba.Nlife.BtobTradeRefundConfirmMsgNotify } };
  /** {@link Alibaba.Nlife.BtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  type AlibabaNlifeBtobTradeRefundNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_BtobTradeRefundNotify', content?: string | Alibaba.Nlife.BtobTradeRefundNotify } };
  /** {@link Alibaba.Nlife.InstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  type AlibabaNlifeInstorageDiffAuditNotify = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_InstorageDiffAuditNotify', content?: string | Alibaba.Nlife.InstorageDiffAuditNotify } };
  /** {@link Alibaba.Nlife.ItemUpdate 零售plus > 零售+商品变动消息} */
  type AlibabaNlifeItemUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_nlife_ItemUpdate', content?: string | Alibaba.Nlife.ItemUpdate } };
  /** {@link Alibaba.Okki.SpuStatusSync 小满 > 小满商品服务状态同步} */
  type AlibabaOkkiSpuStatusSync = Message & { content?: MessageContent & { topic?: 'alibaba_okki_SpuStatusSync', content?: string | Alibaba.Okki.SpuStatusSync } };
  /** {@link Alibaba.Paimai.AlipayConsumeGoldTaskFinish 阿里拍卖 > 支付宝用户完成消费金任务} */
  type AlibabaPaimaiAlipayConsumeGoldTaskFinish = Message & { content?: MessageContent & { topic?: 'alibaba_paimai_AlipayConsumeGoldTaskFinish', content?: string | Alibaba.Paimai.AlipayConsumeGoldTaskFinish } };
  /** {@link Alibaba.Paimai.CommonPromoTask 阿里拍卖 > 拍卖支付宝营销通用消息} */
  type AlibabaPaimaiCommonPromoTask = Message & { content?: MessageContent & { topic?: 'alibaba_paimai_CommonPromoTask', content?: string | Alibaba.Paimai.CommonPromoTask } };
  /** {@link Alibaba.Pur.ContractStatusChange 信息平台-采购 > 合同状态改变发送消息} */
  type AlibabaPurContractStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_pur_ContractStatusChange', content?: string | Alibaba.Pur.ContractStatusChange } };
  /** {@link Alibaba.Pur.DelSettlementContract 信息平台-采购 > 作废结算合同} */
  type AlibabaPurDelSettlementContract = Message & { content?: MessageContent & { topic?: 'alibaba_pur_DelSettlementContract', content?: string | Alibaba.Pur.DelSettlementContract } };
  /** {@link Alibaba.Pur.FaApproveFinished 信息平台-采购 > 入库单审批完成消息广播} */
  type AlibabaPurFaApproveFinished = Message & { content?: MessageContent & { topic?: 'alibaba_pur_FaApproveFinished', content?: string | Alibaba.Pur.FaApproveFinished } };
  /** {@link Alibaba.Pur.PoAudited 信息平台-采购 > PO审批完成} */
  type AlibabaPurPoAudited = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PoAudited', content?: string | Alibaba.Pur.PoAudited } };
  /** {@link Alibaba.Pur.PoCancelled 信息平台-采购 > PO作废消息发送} */
  type AlibabaPurPoCancelled = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PoCancelled', content?: string | Alibaba.Pur.PoCancelled } };
  /** {@link Alibaba.Pur.PoClosed 信息平台-采购 > PO关闭发送消息} */
  type AlibabaPurPoClosed = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PoClosed', content?: string | Alibaba.Pur.PoClosed } };
  /** {@link Alibaba.Pur.PrApproved 信息平台-采购 > PR审批完成消息通知} */
  type AlibabaPurPrApproved = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PrApproved', content?: string | Alibaba.Pur.PrApproved } };
  /** {@link Alibaba.Pur.PrDelete 信息平台-采购 > pr删除通知消息} */
  type AlibabaPurPrDelete = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PrDelete', content?: string | Alibaba.Pur.PrDelete } };
  /** {@link Alibaba.Pur.PurchaseRequisition 信息平台-采购 > 创建pr} */
  type AlibabaPurPurchaseRequisition = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PurchaseRequisition', content?: string | Alibaba.Pur.PurchaseRequisition } };
  /** {@link Alibaba.Pur.PurchaseRequisitionCancel 信息平台-采购 > PR作废消息通知} */
  type AlibabaPurPurchaseRequisitionCancel = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PurchaseRequisitionCancel', content?: string | Alibaba.Pur.PurchaseRequisitionCancel } };
  /** {@link Alibaba.Pur.PurchaseRequisitionDelete 信息平台-采购 > PR删除消息通知} */
  type AlibabaPurPurchaseRequisitionDelete = Message & { content?: MessageContent & { topic?: 'alibaba_pur_PurchaseRequisitionDelete', content?: string | Alibaba.Pur.PurchaseRequisitionDelete } };
  /** {@link Alibaba.Pur.ResourceOrderCancelNotify 信息平台-采购 > 取消订单结果通知} */
  type AlibabaPurResourceOrderCancelNotify = Message & { content?: MessageContent & { topic?: 'alibaba_pur_ResourceOrderCancelNotify', content?: string | Alibaba.Pur.ResourceOrderCancelNotify } };
  /** {@link Alibaba.Pur.ResourceOrderShipNotify 信息平台-采购 > 发货提醒} */
  type AlibabaPurResourceOrderShipNotify = Message & { content?: MessageContent & { topic?: 'alibaba_pur_ResourceOrderShipNotify', content?: string | Alibaba.Pur.ResourceOrderShipNotify } };
  /** {@link Alibaba.Pur.RtAudited 信息平台-采购 > RT审批完成消息通知} */
  type AlibabaPurRtAudited = Message & { content?: MessageContent & { topic?: 'alibaba_pur_RtAudited', content?: string | Alibaba.Pur.RtAudited } };
  /** {@link Alibaba.Pur.SettlementContract 信息平台-采购 > 维护结算合同消息发送} */
  type AlibabaPurSettlementContract = Message & { content?: MessageContent & { topic?: 'alibaba_pur_SettlementContract', content?: string | Alibaba.Pur.SettlementContract } };
  /** {@link Alibaba.Pur.SupplierChange 信息平台-采购 > 供应商信息变更} */
  type AlibabaPurSupplierChange = Message & { content?: MessageContent & { topic?: 'alibaba_pur_SupplierChange', content?: string | Alibaba.Pur.SupplierChange } };
  /** {@link Alibaba.Pur.VprApproved 信息平台-采购 > VPR审批报价完成发送消息} */
  type AlibabaPurVprApproved = Message & { content?: MessageContent & { topic?: 'alibaba_pur_VprApproved', content?: string | Alibaba.Pur.VprApproved } };
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
  /** {@link Alibaba.Tbdx.EBookContent 淘宝电子书 > 电子书内容变更消息} */
  type AlibabaTbdxEBookContent = Message & { content?: MessageContent & { topic?: 'alibaba_tbdx_EBookContent', content?: string | Alibaba.Tbdx.EBookContent } };
  /** {@link Alibaba.Tbdx.EBookSellerSign 淘宝电子书 > 电子书商家签约消息} */
  type AlibabaTbdxEBookSellerSign = Message & { content?: MessageContent & { topic?: 'alibaba_tbdx_EBookSellerSign', content?: string | Alibaba.Tbdx.EBookSellerSign } };
  /** {@link Alibaba.Tbdx.EBookUserOrder 淘宝电子书 > 电子书用户下单消息} */
  type AlibabaTbdxEBookUserOrder = Message & { content?: MessageContent & { topic?: 'alibaba_tbdx_EBookUserOrder', content?: string | Alibaba.Tbdx.EBookUserOrder } };
  /** {@link Alibaba.Tbdx.PaperPush 淘宝电子书 > 淘宝教育论文查重推送} */
  type AlibabaTbdxPaperPush = Message & { content?: MessageContent & { topic?: 'alibaba_tbdx_PaperPush', content?: string | Alibaba.Tbdx.PaperPush } };
  /** {@link Alibaba.Tc.LogisticsStatusUpdate 同城 > 同城履约物流状态通知} */
  type AlibabaTcLogisticsStatusUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_tc_LogisticsStatusUpdate', content?: string | Alibaba.Tc.LogisticsStatusUpdate } };
  /** {@link Alibaba.Threehours.AuthorizationResult 三小时公益 > 授权结果} */
  type AlibabaThreehoursAuthorizationResult = Message & { content?: MessageContent & { topic?: 'alibaba_threehours_AuthorizationResult', content?: string | Alibaba.Threehours.AuthorizationResult } };
  /** {@link Alibaba.Threehours.DonateStep 三小时公益 > 益起来捐步成功消息} */
  type AlibabaThreehoursDonateStep = Message & { content?: MessageContent & { topic?: 'alibaba_threehours_DonateStep', content?: string | Alibaba.Threehours.DonateStep } };
  /** {@link Alibaba.Threehours.UserBindResult 三小时公益 > 用户绑定结果通知} */
  type AlibabaThreehoursUserBindResult = Message & { content?: MessageContent & { topic?: 'alibaba_threehours_UserBindResult', content?: string | Alibaba.Threehours.UserBindResult } };
  /** {@link Alibaba.Threehours.UserJoinActivity 三小时公益 > 用户参与志愿服务活动} */
  type AlibabaThreehoursUserJoinActivity = Message & { content?: MessageContent & { topic?: 'alibaba_threehours_UserJoinActivity', content?: string | Alibaba.Threehours.UserJoinActivity } };
  /** {@link Alibaba.Tianji.ContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  type AlibabaTianjiContractOrder = Message & { content?: MessageContent & { topic?: 'alibaba_tianji_ContractOrder', content?: string | Alibaba.Tianji.ContractOrder } };
  /** {@link Alibaba.Tianji.OrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  type AlibabaTianjiOrderCreate = Message & { content?: MessageContent & { topic?: 'alibaba_tianji_OrderCreate', content?: string | Alibaba.Tianji.OrderCreate } };
  /** {@link Alibaba.Txd.InteractEventNotice 淘鲜达 > 淘鲜达互动事件通知} */
  type AlibabaTxdInteractEventNotice = Message & { content?: MessageContent & { topic?: 'alibaba_txd_InteractEventNotice', content?: string | Alibaba.Txd.InteractEventNotice } };
  /** {@link Alibaba.Txd.OrderStatusChangeToAlipay 淘鲜达 > 淘鲜达交易状态变化} */
  type AlibabaTxdOrderStatusChangeToAlipay = Message & { content?: MessageContent & { topic?: 'alibaba_txd_OrderStatusChangeToAlipay', content?: string | Alibaba.Txd.OrderStatusChangeToAlipay } };
  /** {@link Alibaba.Uni.TradeStatusNotify 全域收单 > 全域收单交易消息} */
  type AlibabaUniTradeStatusNotify = Message & { content?: MessageContent & { topic?: 'alibaba_uni_TradeStatusNotify', content?: string | Alibaba.Uni.TradeStatusNotify } };
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
  /** {@link Alibaba.Wdk.DmsSignError 五道口订单 > 配送异常信消息} */
  type AlibabaWdkDmsSignError = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_DmsSignError', content?: string | Alibaba.Wdk.DmsSignError } };
  /** {@link Alibaba.Wdk.FulfillOrderChange 五道口订单 > 售中履约变更消息} */
  type AlibabaWdkFulfillOrderChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_FulfillOrderChange', content?: string | Alibaba.Wdk.FulfillOrderChange } };
  /** {@link Alibaba.Wdk.FulfillWarehouseHandover 五道口订单 > 仓配交接消息} */
  type AlibabaWdkFulfillWarehouseHandover = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_FulfillWarehouseHandover', content?: string | Alibaba.Wdk.FulfillWarehouseHandover } };
  /** {@link Alibaba.Wdk.ReturnWarehouseStatusChange 五道口订单 > 退仓单物流状态变更通知} */
  type AlibabaWdkReturnWarehouseStatusChange = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_ReturnWarehouseStatusChange', content?: string | Alibaba.Wdk.ReturnWarehouseStatusChange } };
  /** {@link Alibaba.Wdk.StoreItemUpdate 五道口订单 > 商家渠道商品变动消息} */
  type AlibabaWdkStoreItemUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_StoreItemUpdate', content?: string | Alibaba.Wdk.StoreItemUpdate } };
  /** {@link Alibaba.Wdk.TxdCrmChannelMessagePush 五道口订单 > 外部商家发送push消息} */
  type AlibabaWdkTxdCrmChannelMessagePush = Message & { content?: MessageContent & { topic?: 'alibaba_wdk_TxdCrmChannelMessagePush', content?: string | Alibaba.Wdk.TxdCrmChannelMessagePush } };
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
  /** {@link Alibaba.Wdkorder.OrderRefundPush 五道口订单 > 猫超订单逆向消息通知商户} */
  type AlibabaWdkorderOrderRefundPush = Message & { content?: MessageContent & { topic?: 'alibaba_wdkorder_OrderRefundPush', content?: string | Alibaba.Wdkorder.OrderRefundPush } };
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
  /** {@link Alibaba.Yichao.InsuranceUpdate 天猫服务 > 蚁巢保单修改消息} */
  type AlibabaYichaoInsuranceUpdate = Message & { content?: MessageContent & { topic?: 'alibaba_yichao_InsuranceUpdate', content?: string | Alibaba.Yichao.InsuranceUpdate } };
  /** {@link Alibaba.Yunio.DataTransfer 平台消息 > YunIO数据流转} */
  type AlibabaYunioDataTransfer = Message & { content?: MessageContent & { topic?: 'alibaba_yunio_DataTransfer', content?: string | Alibaba.Yunio.DataTransfer } };
  /** {@link Alicom.Axb.SubsEventSync 阿里通信 > 绑定事件同步} */
  type AlicomAxbSubsEventSync = Message & { content?: MessageContent & { topic?: 'alicom_axb_SubsEventSync', content?: string | Alicom.Axb.SubsEventSync } };
  /** {@link Alicom.Deduct.OrderPay 阿里通信 > 阿里通信代扣订单支付结果消息} */
  type AlicomDeductOrderPay = Message & { content?: MessageContent & { topic?: 'alicom_deduct_OrderPay', content?: string | Alicom.Deduct.OrderPay } };
  /** {@link Alicom.Flow.AliPayChargeWalletFlow 阿里通信 > 支付宝流量钱包提取流量} */
  type AlicomFlowAliPayChargeWalletFlow = Message & { content?: MessageContent & { topic?: 'alicom_flow_AliPayChargeWalletFlow', content?: string | Alicom.Flow.AliPayChargeWalletFlow } };
  /** {@link Alicom.Flow.AliPayChargeWalletRed 阿里通信 > 支付宝流量钱包发红包} */
  type AlicomFlowAliPayChargeWalletRed = Message & { content?: MessageContent & { topic?: 'alicom_flow_AliPayChargeWalletRed', content?: string | Alicom.Flow.AliPayChargeWalletRed } };
  /** {@link Alicom.Flow.AliPayWalletFlowDraw 阿里通信 > 支付宝流量钱包领取红包} */
  type AlicomFlowAliPayWalletFlowDraw = Message & { content?: MessageContent & { topic?: 'alicom_flow_AliPayWalletFlowDraw', content?: string | Alicom.Flow.AliPayWalletFlowDraw } };
  /** {@link Aliexpress.Aeia.TaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  type AliexpressAeiaTaskplatformInterestNotice = Message & { content?: MessageContent & { topic?: 'aliexpress_aeia_TaskplatformInterestNotice', content?: string | Aliexpress.Aeia.TaskplatformInterestNotice } };
  /** {@link Aliexpress.Aftersaleinsurance.MessageFromAE AE > AE发送给蚂蚁保险的消息} */
  type AliexpressAftersaleinsuranceMessageFromAE = Message & { content?: MessageContent & { topic?: 'aliexpress_aftersaleinsurance_MessageFromAE', content?: string | Aliexpress.Aftersaleinsurance.MessageFromAE } };
  /** {@link Aliexpress.Aftersaleinsurance.MessageFromAnt AE > 蚂蚁保险消息-蚂蚁发出到AE} */
  type AliexpressAftersaleinsuranceMessageFromAnt = Message & { content?: MessageContent & { topic?: 'aliexpress_aftersaleinsurance_MessageFromAnt', content?: string | Aliexpress.Aftersaleinsurance.MessageFromAnt } };
  /** {@link Aliexpress.Message.Pushnewmsg AE > 站内信新消息主动推送} */
  type AliexpressMessagePushnewmsg = Message & { content?: MessageContent & { topic?: 'aliexpress_message_Pushnewmsg', content?: string | Aliexpress.Message.Pushnewmsg } };
  /** {@link Aliexpress.Order.AllFinish AE-交易 > 交易成功} */
  type AliexpressOrderAllFinish = Message & { content?: MessageContent & { topic?: 'aliexpress_order_AllFinish', content?: string | Aliexpress.Order.AllFinish } };
  /** {@link Aliexpress.Order.AllFulfillmentOrderCreated AE-交易 > 等待卖家发货（所有卖家的订单）} */
  type AliexpressOrderAllFulfillmentOrderCreated = Message & { content?: MessageContent & { topic?: 'aliexpress_order_AllFulfillmentOrderCreated', content?: string | Aliexpress.Order.AllFulfillmentOrderCreated } };
  /** {@link Aliexpress.Order.AllSellerPartSendGoods AE-交易 > 卖家部分发货（所有卖家的订单）} */
  type AliexpressOrderAllSellerPartSendGoods = Message & { content?: MessageContent & { topic?: 'aliexpress_order_AllSellerPartSendGoods', content?: string | Aliexpress.Order.AllSellerPartSendGoods } };
  /** {@link Aliexpress.Order.AllWaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  type AliexpressOrderAllWaitBuyerAcceptGoods = Message & { content?: MessageContent & { topic?: 'aliexpress_order_AllWaitBuyerAcceptGoods', content?: string | Aliexpress.Order.AllWaitBuyerAcceptGoods } };
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
  /** {@link Aliexpress.Trade.OrderNotify AE > AE订单状态通知} */
  type AliexpressTradeOrderNotify = Message & { content?: MessageContent & { topic?: 'aliexpress_trade_OrderNotify', content?: string | Aliexpress.Trade.OrderNotify } };
  /** {@link Aliexpress.Warranty.CreateWarrantyOrderByPms AE > 发送保修单消息ByPms} */
  type AliexpressWarrantyCreateWarrantyOrderByPms = Message & { content?: MessageContent & { topic?: 'aliexpress_warranty_CreateWarrantyOrderByPms', content?: string | Aliexpress.Warranty.CreateWarrantyOrderByPms } };
  /** {@link Aliexpress.Warranty.WarrantyOrderMessageFromAE AE > 保修商消息-AE} */
  type AliexpressWarrantyWarrantyOrderMessageFromAE = Message & { content?: MessageContent & { topic?: 'aliexpress_warranty_WarrantyOrderMessageFromAE', content?: string | Aliexpress.Warranty.WarrantyOrderMessageFromAE } };
  /** {@link Aliexpress.Warranty.WarrantyOrderMessageFromAliExpress AE > 保修商消息-AliExpress} */
  type AliexpressWarrantyWarrantyOrderMessageFromAliExpress = Message & { content?: MessageContent & { topic?: 'aliexpress_warranty_WarrantyOrderMessageFromAliExpress', content?: string | Aliexpress.Warranty.WarrantyOrderMessageFromAliExpress } };
  /** {@link Alihealth.Cep.OrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  type AlihealthCepOrderStatusChange = Message & { content?: MessageContent & { topic?: 'alihealth_cep_OrderStatusChange', content?: string | Alihealth.Cep.OrderStatusChange } };
  /** {@link Alihealth.Hb.PushPatientCardToHis 阿里健康 > 患者就诊卡推送至医院进行验证} */
  type AlihealthHbPushPatientCardToHis = Message & { content?: MessageContent & { topic?: 'alihealth_hb_PushPatientCardToHis', content?: string | Alihealth.Hb.PushPatientCardToHis } };
  /** {@link Alihealth.Hb.PushPrescriptionToYh 阿里健康 > 处方推送给银海} */
  type AlihealthHbPushPrescriptionToYh = Message & { content?: MessageContent & { topic?: 'alihealth_hb_PushPrescriptionToYh', content?: string | Alihealth.Hb.PushPrescriptionToYh } };
  /** {@link Alihealth.Test.TmcCreate 阿里健康 > 阿里健康测试消息} */
  type AlihealthTestTmcCreate = Message & { content?: MessageContent & { topic?: 'alihealth_test_TmcCreate', content?: string | Alihealth.Test.TmcCreate } };
  /** {@link Alihealth.Ys.OrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  type AlihealthYsOrderMemConsume = Message & { content?: MessageContent & { topic?: 'alihealth_ys_OrderMemConsume', content?: string | Alihealth.Ys.OrderMemConsume } };
  /** {@link Alihealth.Ys.OrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  type AlihealthYsOrderPushConsume = Message & { content?: MessageContent & { topic?: 'alihealth_ys_OrderPushConsume', content?: string | Alihealth.Ys.OrderPushConsume } };
  /** {@link Alihealth.Ys.OrderRefund 阿里健康&一树-电商中台对接 > 订单退款成功推送} */
  type AlihealthYsOrderRefund = Message & { content?: MessageContent & { topic?: 'alihealth_ys_OrderRefund', content?: string | Alihealth.Ys.OrderRefund } };
  /** {@link Alihealth.Ys.VipChange 阿里健康&一树-电商中台对接 > 会员变动} */
  type AlihealthYsVipChange = Message & { content?: MessageContent & { topic?: 'alihealth_ys_VipChange', content?: string | Alihealth.Ys.VipChange } };
  /** {@link Alihealth.Ys.VipIntegralChange 阿里健康&一树-电商中台对接 > 会员积分变动} */
  type AlihealthYsVipIntegralChange = Message & { content?: MessageContent & { topic?: 'alihealth_ys_VipIntegralChange', content?: string | Alihealth.Ys.VipIntegralChange } };
  /** {@link Alihealth.Ys.VipIntegralSync 阿里健康&一树-电商中台对接 > 会员积分同步} */
  type AlihealthYsVipIntegralSync = Message & { content?: MessageContent & { topic?: 'alihealth_ys_VipIntegralSync', content?: string | Alihealth.Ys.VipIntegralSync } };
  /** {@link Alihealth.Ys.VipSync 阿里健康&一树-电商中台对接 > 会员信息同步} */
  type AlihealthYsVipSync = Message & { content?: MessageContent & { topic?: 'alihealth_ys_VipSync', content?: string | Alihealth.Ys.VipSync } };
  /** {@link Alihouse.Customer.ActionClueId 阿里楼盘 > 动作线索消息} */
  type AlihouseCustomerActionClueId = Message & { content?: MessageContent & { topic?: 'alihouse_customer_ActionClueId', content?: string | Alihouse.Customer.ActionClueId } };
  /** {@link Alihouse.Customer.AppNoteSync 阿里楼盘 > 来客通_备注信息同步} */
  type AlihouseCustomerAppNoteSync = Message & { content?: MessageContent & { topic?: 'alihouse_customer_AppNoteSync', content?: string | Alihouse.Customer.AppNoteSync } };
  /** {@link Alihouse.Customer.BehaviorClueId 阿里楼盘 > 用户行为线索产出} */
  type AlihouseCustomerBehaviorClueId = Message & { content?: MessageContent & { topic?: 'alihouse_customer_BehaviorClueId', content?: string | Alihouse.Customer.BehaviorClueId } };
  /** {@link Alihouse.Customer.BehaviorClueMsg 阿里楼盘 > 新二租归一表单线索消息通知} */
  type AlihouseCustomerBehaviorClueMsg = Message & { content?: MessageContent & { topic?: 'alihouse_customer_BehaviorClueMsg', content?: string | Alihouse.Customer.BehaviorClueMsg } };
  /** {@link Alihouse.Customer.ImMsg 阿里楼盘 > IM线索消息通知} */
  type AlihouseCustomerImMsg = Message & { content?: MessageContent & { topic?: 'alihouse_customer_ImMsg', content?: string | Alihouse.Customer.ImMsg } };
  /** {@link Alihouse.Customer.RemindNotice 阿里楼盘 > 用户关注提醒消息} */
  type AlihouseCustomerRemindNotice = Message & { content?: MessageContent & { topic?: 'alihouse_customer_RemindNotice', content?: string | Alihouse.Customer.RemindNotice } };
  /** {@link Alihouse.Customer.RentBehaviorClueId 阿里楼盘 > 租房用户行为线索消息通知} */
  type AlihouseCustomerRentBehaviorClueId = Message & { content?: MessageContent & { topic?: 'alihouse_customer_RentBehaviorClueId', content?: string | Alihouse.Customer.RentBehaviorClueId } };
  /** {@link Alihouse.Customer.SecondBehaviorClueId 阿里楼盘 > 二手房用户行为线索消息通知} */
  type AlihouseCustomerSecondBehaviorClueId = Message & { content?: MessageContent & { topic?: 'alihouse_customer_SecondBehaviorClueId', content?: string | Alihouse.Customer.SecondBehaviorClueId } };
  /** {@link Alihouse.House.ProjectAudit 阿里楼盘 > 楼盘消息审核} */
  type AlihouseHouseProjectAudit = Message & { content?: MessageContent & { topic?: 'alihouse_house_ProjectAudit', content?: string | Alihouse.House.ProjectAudit } };
  /** {@link Alihouse.House.ProjectSaleAudit 阿里楼盘 > 天猫好房商品审核结果通知} */
  type AlihouseHouseProjectSaleAudit = Message & { content?: MessageContent & { topic?: 'alihouse_house_ProjectSaleAudit', content?: string | Alihouse.House.ProjectSaleAudit } };
  /** {@link Alios.Cosmo.StreamPush AliOS COSMO > 流式API} */
  type AliosCosmoStreamPush = Message & { content?: MessageContent & { topic?: 'alios_cosmo_StreamPush', content?: string | Alios.Cosmo.StreamPush } };
  /** {@link Alios.Watch.NotifyMessagePush AliOS手表 > 消息推送服务} */
  type AliosWatchNotifyMessagePush = Message & { content?: MessageContent & { topic?: 'alios_watch_NotifyMessagePush', content?: string | Alios.Watch.NotifyMessagePush } };
  /** {@link Alios.Watch.PassthroughMessagePush AliOS手表 > 透传消息} */
  type AliosWatchPassthroughMessagePush = Message & { content?: MessageContent & { topic?: 'alios_watch_PassthroughMessagePush', content?: string | Alios.Watch.PassthroughMessagePush } };
  /** {@link Alipay.Ae.TradePreloan 支付宝 > AE提前放款} */
  type AlipayAeTradePreloan = Message & { content?: MessageContent & { topic?: 'alipay_ae_TradePreloan', content?: string | Alipay.Ae.TradePreloan } };
  /** {@link Alipay.Ae.TradePreloanNew 支付宝 > AE提前放款新链路} */
  type AlipayAeTradePreloanNew = Message & { content?: MessageContent & { topic?: 'alipay_ae_TradePreloanNew', content?: string | Alipay.Ae.TradePreloanNew } };
  /** {@link Alipay.Baoming.Msg 支付宝 > 活动报名消息} */
  type AlipayBaomingMsg = Message & { content?: MessageContent & { topic?: 'alipay_baoming_Msg', content?: string | Alipay.Baoming.Msg } };
  /** {@link Alipay.Baoxian.PolicySyncAuthorize 支付宝 > 保险线下同步授权消息} */
  type AlipayBaoxianPolicySyncAuthorize = Message & { content?: MessageContent & { topic?: 'alipay_baoxian_PolicySyncAuthorize', content?: string | Alipay.Baoxian.PolicySyncAuthorize } };
  /** {@link Alipay.Baoxian.PolicySyncCancel 支付宝 > 保险线下同步解除授权消息} */
  type AlipayBaoxianPolicySyncCancel = Message & { content?: MessageContent & { topic?: 'alipay_baoxian_PolicySyncCancel', content?: string | Alipay.Baoxian.PolicySyncCancel } };
  /** {@link Alipay.Charity.ThreeHoursBillSync 支付宝 > 支付宝公益平台实时同步淘宝公益三小时流水} */
  type AlipayCharityThreeHoursBillSync = Message & { content?: MessageContent & { topic?: 'alipay_charity_ThreeHoursBillSync', content?: string | Alipay.Charity.ThreeHoursBillSync } };
  /** {@link Alipay.Fenxiao.FxOrderClosed 支付宝 > 采购单关闭} */
  type AlipayFenxiaoFxOrderClosed = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderClosed', content?: string | Alipay.Fenxiao.FxOrderClosed } };
  /** {@link Alipay.Fenxiao.FxOrderCreate 支付宝 > 采购单创建} */
  type AlipayFenxiaoFxOrderCreate = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderCreate', content?: string | Alipay.Fenxiao.FxOrderCreate } };
  /** {@link Alipay.Fenxiao.FxOrderModifyPrice 支付宝 > 改价} */
  type AlipayFenxiaoFxOrderModifyPrice = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderModifyPrice', content?: string | Alipay.Fenxiao.FxOrderModifyPrice } };
  /** {@link Alipay.Fenxiao.FxOrderPaid 支付宝 > 采购单付款} */
  type AlipayFenxiaoFxOrderPaid = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderPaid', content?: string | Alipay.Fenxiao.FxOrderPaid } };
  /** {@link Alipay.Fenxiao.FxOrderShipped 支付宝 > 采购单发货} */
  type AlipayFenxiaoFxOrderShipped = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderShipped', content?: string | Alipay.Fenxiao.FxOrderShipped } };
  /** {@link Alipay.Fenxiao.FxOrderSuccess 支付宝 > 采购成功} */
  type AlipayFenxiaoFxOrderSuccess = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderSuccess', content?: string | Alipay.Fenxiao.FxOrderSuccess } };
  /** {@link Alipay.Fenxiao.FxOrderTransfered 支付宝 > 采购单结算完成} */
  type AlipayFenxiaoFxOrderTransfered = Message & { content?: MessageContent & { topic?: 'alipay_fenxiao_FxOrderTransfered', content?: string | Alipay.Fenxiao.FxOrderTransfered } };
  /** {@link Alipay.Refund.Dispute 支付宝 > 新退款消息} */
  type AlipayRefundDispute = Message & { content?: MessageContent & { topic?: 'alipay_refund_Dispute', content?: string | Alipay.Refund.Dispute } };
  /** {@link Alipay.Refund.RefundClosed 支付宝 > 退款关闭} */
  type AlipayRefundRefundClosed = Message & { content?: MessageContent & { topic?: 'alipay_refund_RefundClosed', content?: string | Alipay.Refund.RefundClosed } };
  /** {@link Alipay.Refund.RefundCreated 支付宝 > 退款消息} */
  type AlipayRefundRefundCreated = Message & { content?: MessageContent & { topic?: 'alipay_refund_RefundCreated', content?: string | Alipay.Refund.RefundCreated } };
  /** {@link Alipay.Refund.RefundSuccess 支付宝 > 退款成功消息} */
  type AlipayRefundRefundSuccess = Message & { content?: MessageContent & { topic?: 'alipay_refund_RefundSuccess', content?: string | Alipay.Refund.RefundSuccess } };
  /** {@link Alipay.Scf.Advance 支付宝 > 支付宝菜鸟消息} */
  type AlipayScfAdvance = Message & { content?: MessageContent & { topic?: 'alipay_scf_Advance', content?: string | Alipay.Scf.Advance } };
  /** {@link Alipay.Trade.AdvanceDisburse 支付宝 > 订单极速放款成功} */
  type AlipayTradeAdvanceDisburse = Message & { content?: MessageContent & { topic?: 'alipay_trade_AdvanceDisburse', content?: string | Alipay.Trade.AdvanceDisburse } };
  /** {@link Alipay.Trade.BuyerPay 支付宝 > 买家付款} */
  type AlipayTradeBuyerPay = Message & { content?: MessageContent & { topic?: 'alipay_trade_BuyerPay', content?: string | Alipay.Trade.BuyerPay } };
  /** {@link Alipay.Trade.FakeTrade 支付宝 > 虚假交易订单} */
  type AlipayTradeFakeTrade = Message & { content?: MessageContent & { topic?: 'alipay_trade_FakeTrade', content?: string | Alipay.Trade.FakeTrade } };
  /** {@link Alipay.Trade.TradeAlipayCreate 支付宝 > 支付宝订单号创建} */
  type AlipayTradeTradeAlipayCreate = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradeAlipayCreate', content?: string | Alipay.Trade.TradeAlipayCreate } };
  /** {@link Alipay.Trade.TradeBuyerClose 支付宝 > 买家关闭订单} */
  type AlipayTradeTradeBuyerClose = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradeBuyerClose', content?: string | Alipay.Trade.TradeBuyerClose } };
  /** {@link Alipay.Trade.TradeBuyerStepPay 支付宝 > 阶段付款} */
  type AlipayTradeTradeBuyerStepPay = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradeBuyerStepPay', content?: string | Alipay.Trade.TradeBuyerStepPay } };
  /** {@link Alipay.Trade.TradeCreate 支付宝 > 订单创建} */
  type AlipayTradeTradeCreate = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradeCreate', content?: string | Alipay.Trade.TradeCreate } };
  /** {@link Alipay.Trade.TradePartlyConfirmPay 支付宝 > 部分收货} */
  type AlipayTradeTradePartlyConfirmPay = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradePartlyConfirmPay', content?: string | Alipay.Trade.TradePartlyConfirmPay } };
  /** {@link Alipay.Trade.TradePeriodSuccess 支付宝 > 交易阶段成功} */
  type AlipayTradeTradePeriodSuccess = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradePeriodSuccess', content?: string | Alipay.Trade.TradePeriodSuccess } };
  /** {@link Alipay.Trade.TradeSellerShip 支付宝 > 订单发货} */
  type AlipayTradeTradeSellerShip = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradeSellerShip', content?: string | Alipay.Trade.TradeSellerShip } };
  /** {@link Alipay.Trade.TradeSuccess 支付宝 > 交易成功} */
  type AlipayTradeTradeSuccess = Message & { content?: MessageContent & { topic?: 'alipay_trade_TradeSuccess', content?: string | Alipay.Trade.TradeSuccess } };
  /** {@link Alipay.Update.Seller 支付宝 > 卖家信息变更} */
  type AlipayUpdateSeller = Message & { content?: MessageContent & { topic?: 'alipay_update_Seller', content?: string | Alipay.Update.Seller } };
  /** {@link Alipay.Xiaodai.SignNotify 阿里金融 > 阿里金融签约通知} */
  type AlipayXiaodaiSignNotify = Message & { content?: MessageContent & { topic?: 'alipay_xiaodai_SignNotify', content?: string | Alipay.Xiaodai.SignNotify } };
  /** {@link Alipic.Lark.JiayingDataReport ALIPIC > 佳影数据上云} */
  type AlipicLarkJiayingDataReport = Message & { content?: MessageContent & { topic?: 'alipic_lark_JiayingDataReport', content?: string | Alipic.Lark.JiayingDataReport } };
  /** {@link Alipic.Lark.ResultDataDownlink ALIPIC > POS配置态数据增量下行} */
  type AlipicLarkResultDataDownlink = Message & { content?: MessageContent & { topic?: 'alipic_lark_ResultDataDownlink', content?: string | Alipic.Lark.ResultDataDownlink } };
  /** {@link Alipic.Lark.SchedulesDataDownlink ALIPIC > 排期列表数据增量下行} */
  type AlipicLarkSchedulesDataDownlink = Message & { content?: MessageContent & { topic?: 'alipic_lark_SchedulesDataDownlink', content?: string | Alipic.Lark.SchedulesDataDownlink } };
  /** {@link Alisports.Bank.Alipayattention 支付宝体育 > 支付宝体育服务小程序关注消息} */
  type AlisportsBankAlipayattention = Message & { content?: MessageContent & { topic?: 'alisports_bank_Alipayattention', content?: string | Alisports.Bank.Alipayattention } };
  /** {@link Alitrip.Agent.Notify 淘宝机票 > 商家机票业务通知} */
  type AlitripAgentNotify = Message & { content?: MessageContent & { topic?: 'alitrip_agent_Notify', content?: string | Alitrip.Agent.Notify } };
  /** {@link Alitrip.Btrip.CorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  type AlitripBtripCorpSignCallback = Message & { content?: MessageContent & { topic?: 'alitrip_btrip_CorpSignCallback', content?: string | Alitrip.Btrip.CorpSignCallback } };
  /** {@link Alitrip.Btrip.ExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  type AlitripBtripExceedApplySubmit = Message & { content?: MessageContent & { topic?: 'alitrip_btrip_ExceedApplySubmit', content?: string | Alitrip.Btrip.ExceedApplySubmit } };
  /** {@link Alitrip.Btriphotel.RpAudit 商旅API > 商旅酒店rp发布审核} */
  type AlitripBtriphotelRpAudit = Message & { content?: MessageContent & { topic?: 'alitrip_btriphotel_RpAudit', content?: string | Alitrip.Btriphotel.RpAudit } };
  /** {@link Alitrip.Ebooking.ActivityAudit 商旅API > tmc营销审核消息} */
  type AlitripEbookingActivityAudit = Message & { content?: MessageContent & { topic?: 'alitrip_ebooking_ActivityAudit', content?: string | Alitrip.Ebooking.ActivityAudit } };
  /** {@link Alitrip.Ebooking.ActivityChange 商旅API > EBK天天特惠营销活动变更} */
  type AlitripEbookingActivityChange = Message & { content?: MessageContent & { topic?: 'alitrip_ebooking_ActivityChange', content?: string | Alitrip.Ebooking.ActivityChange } };
  /** {@link Alitrip.Ebooking.CreateRatePlan 商旅API > 通知生成RatePlan消息} */
  type AlitripEbookingCreateRatePlan = Message & { content?: MessageContent & { topic?: 'alitrip_ebooking_CreateRatePlan', content?: string | Alitrip.Ebooking.CreateRatePlan } };
  /** {@link Alitrip.Ebooking.RepostMessage 商旅API > alitrip_ebooking_RepostMessage} */
  type AlitripEbookingRepostMessage = Message & { content?: MessageContent & { topic?: 'alitrip_ebooking_RepostMessage', content?: string | Alitrip.Ebooking.RepostMessage } };
  /** {@link Alitrip.Ebooking.SmsRecepit 商旅API > 订单短信回执消息} */
  type AlitripEbookingSmsRecepit = Message & { content?: MessageContent & { topic?: 'alitrip_ebooking_SmsRecepit', content?: string | Alitrip.Ebooking.SmsRecepit } };
  /** {@link Alitrip.Ebooking.TmcPassNotify 商旅API > tmc转发notify消息} */
  type AlitripEbookingTmcPassNotify = Message & { content?: MessageContent & { topic?: 'alitrip_ebooking_TmcPassNotify', content?: string | Alitrip.Ebooking.TmcPassNotify } };
  /** {@link Alitrip.Flight.Change 淘宝机票 > 航变消息} */
  type AlitripFlightChange = Message & { content?: MessageContent & { topic?: 'alitrip_flight_Change', content?: string | Alitrip.Flight.Change } };
  /** {@link Alitrip.Flight.ChangeStatusNotify 淘宝机票 > 机票改签流程状态通知} */
  type AlitripFlightChangeStatusNotify = Message & { content?: MessageContent & { topic?: 'alitrip_flight_ChangeStatusNotify', content?: string | Alitrip.Flight.ChangeStatusNotify } };
  /** {@link Alitrip.Flight.FlightChange 淘宝机票 > 新京航航变消息} */
  type AlitripFlightFlightChange = Message & { content?: MessageContent & { topic?: 'alitrip_flight_FlightChange', content?: string | Alitrip.Flight.FlightChange } };
  /** {@link Alitrip.Flight.PayNotification 淘宝机票 > 机票支付结果异步通知} */
  type AlitripFlightPayNotification = Message & { content?: MessageContent & { topic?: 'alitrip_flight_PayNotification', content?: string | Alitrip.Flight.PayNotification } };
  /** {@link Alitrip.Flight.RefundNotify 淘宝机票 > 新京杭-退票相关通知} */
  type AlitripFlightRefundNotify = Message & { content?: MessageContent & { topic?: 'alitrip_flight_RefundNotify', content?: string | Alitrip.Flight.RefundNotify } };
  /** {@link Alitrip.Flight.TradeNotify 淘宝机票 > 机票交易通知} */
  type AlitripFlightTradeNotify = Message & { content?: MessageContent & { topic?: 'alitrip_flight_TradeNotify', content?: string | Alitrip.Flight.TradeNotify } };
  /** {@link Alitrip.Hotel.HotelCrawler 商旅API > 转发飞猪推送比价消息} */
  type AlitripHotelHotelCrawler = Message & { content?: MessageContent & { topic?: 'alitrip_hotel_HotelCrawler', content?: string | Alitrip.Hotel.HotelCrawler } };
  /** {@link Alitrip.Hotel.OrderOperation 商旅API > 酒店交易发送云上消息} */
  type AlitripHotelOrderOperation = Message & { content?: MessageContent & { topic?: 'alitrip_hotel_OrderOperation', content?: string | Alitrip.Hotel.OrderOperation } };
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
  /** {@link Alitrip.Sync.IatkfTaobao 商旅API > 机票自营淘内应用消息同步云上} */
  type AlitripSyncIatkfTaobao = Message & { content?: MessageContent & { topic?: 'alitrip_sync_IatkfTaobao', content?: string | Alitrip.Sync.IatkfTaobao } };
  /** {@link Alitrip.Tf.OrderStatusChanged 商旅API > 旅行购订单状态变化消息} */
  type AlitripTfOrderStatusChanged = Message & { content?: MessageContent & { topic?: 'alitrip_tf_OrderStatusChanged', content?: string | Alitrip.Tf.OrderStatusChanged } };
  /** {@link Alitrip.Trade.ModifyApply 商旅API > 国内机票改签申请消息} */
  type AlitripTradeModifyApply = Message & { content?: MessageContent & { topic?: 'alitrip_trade_ModifyApply', content?: string | Alitrip.Trade.ModifyApply } };
  /** {@link Alitrip.Train.AgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  type AlitripTrainAgentStopQuery = Message & { content?: MessageContent & { topic?: 'alitrip_train_AgentStopQuery', content?: string | Alitrip.Train.AgentStopQuery } };
  /** {@link Alitrip.Train.RiskNotify 淘宝火车票 > 飞猪火车票风控消息} */
  type AlitripTrainRiskNotify = Message & { content?: MessageContent & { topic?: 'alitrip_train_RiskNotify', content?: string | Alitrip.Train.RiskNotify } };
  /** {@link Alitrip.Train.TobOrderCreate 淘宝火车票 > 创建订单成功消息} */
  type AlitripTrainTobOrderCreate = Message & { content?: MessageContent & { topic?: 'alitrip_train_TobOrderCreate', content?: string | Alitrip.Train.TobOrderCreate } };
  /** {@link Alitrip.Travel.FaceOrder 航旅度假交易 > 线上人脸录入通知消息} */
  type AlitripTravelFaceOrder = Message & { content?: MessageContent & { topic?: 'alitrip_travel_FaceOrder', content?: string | Alitrip.Travel.FaceOrder } };
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
  /** {@link Aliyun.Gsc.ProductionQualityCpkCreate 阿里云质检 > 质检结果CPK触发查询} */
  type AliyunGscProductionQualityCpkCreate = Message & { content?: MessageContent & { topic?: 'aliyun_gsc_ProductionQualityCpkCreate', content?: string | Aliyun.Gsc.ProductionQualityCpkCreate } };
  /** {@link Aliyun.Gsc.ProductionQualityDetailSpcCreate 阿里云质检 > 质检结果SPC详情触发查询} */
  type AliyunGscProductionQualityDetailSpcCreate = Message & { content?: MessageContent & { topic?: 'aliyun_gsc_ProductionQualityDetailSpcCreate', content?: string | Aliyun.Gsc.ProductionQualityDetailSpcCreate } };
  /** {@link Aliyun.Gsc.ProductionQualitySpcCreate 阿里云质检 > 质检结果SPC触发查询} */
  type AliyunGscProductionQualitySpcCreate = Message & { content?: MessageContent & { topic?: 'aliyun_gsc_ProductionQualitySpcCreate', content?: string | Aliyun.Gsc.ProductionQualitySpcCreate } };
  /** {@link Aliyun.Gsc.ProductionReceiptInfoCreate 阿里云质检 > C2M物流信息下发} */
  type AliyunGscProductionReceiptInfoCreate = Message & { content?: MessageContent & { topic?: 'aliyun_gsc_ProductionReceiptInfoCreate', content?: string | Aliyun.Gsc.ProductionReceiptInfoCreate } };
  /** {@link Aliyun.Iot.OrderSync IOT-智能制造 > 天天工厂采购单同步} */
  type AliyunIotOrderSync = Message & { content?: MessageContent & { topic?: 'aliyun_iot_OrderSync', content?: string | Aliyun.Iot.OrderSync } };
  /** {@link Alsc.Coupon.CouponSync 口碑 > 本地联盟卡券同步消息} */
  type AlscCouponCouponSync = Message & { content?: MessageContent & { topic?: 'alsc_coupon_CouponSync', content?: string | Alsc.Coupon.CouponSync } };
  /** {@link Alsc.Coupon.OrderVoucherStatus 口碑 > 饿了么卡券openapi订单消息} */
  type AlscCouponOrderVoucherStatus = Message & { content?: MessageContent & { topic?: 'alsc_coupon_OrderVoucherStatus', content?: string | Alsc.Coupon.OrderVoucherStatus } };
  /** {@link Alsc.Couponpackage.PurchaseSync 口碑 > 本地联盟卡券包采购同步消息} */
  type AlscCouponpackagePurchaseSync = Message & { content?: MessageContent & { topic?: 'alsc_couponpackage_PurchaseSync', content?: string | Alsc.Couponpackage.PurchaseSync } };
  /** {@link Alsc.Couponpackage.PurchaseTicketSync 口碑 > 本地联盟卡券包采购凭证同步} */
  type AlscCouponpackagePurchaseTicketSync = Message & { content?: MessageContent & { topic?: 'alsc_couponpackage_PurchaseTicketSync', content?: string | Alsc.Couponpackage.PurchaseTicketSync } };
  /** {@link Alsc.Daodian.HaitunPromoEventNotify 口碑 > 本地生活到店多渠道投放海豚活动事件通知} */
  type AlscDaodianHaitunPromoEventNotify = Message & { content?: MessageContent & { topic?: 'alsc_daodian_HaitunPromoEventNotify', content?: string | Alsc.Daodian.HaitunPromoEventNotify } };
  /** {@link Alsc.Kb.ShopAudit 口碑 > 本地生活口碑店铺审核消息} */
  type AlscKbShopAudit = Message & { content?: MessageContent & { topic?: 'alsc_kb_ShopAudit', content?: string | Alsc.Kb.ShopAudit } };
  /** {@link Alsc.Kb.ShopChange 口碑 > 本地生活口碑店铺变更消息} */
  type AlscKbShopChange = Message & { content?: MessageContent & { topic?: 'alsc_kb_ShopChange', content?: string | Alsc.Kb.ShopChange } };
  /** {@link Alsc.Kbbaobaotuan.OrderVoucherStatus 口碑 > 口碑爆爆团三方订单&凭证状态消息} */
  type AlscKbbaobaotuanOrderVoucherStatus = Message & { content?: MessageContent & { topic?: 'alsc_kbbaobaotuan_OrderVoucherStatus', content?: string | Alsc.Kbbaobaotuan.OrderVoucherStatus } };
  /** {@link Alsc.Kbbbt.OrderVoucherStatus 口碑 > 口碑爆爆团凭证消息流} */
  type AlscKbbbtOrderVoucherStatus = Message & { content?: MessageContent & { topic?: 'alsc_kbbbt_OrderVoucherStatus', content?: string | Alsc.Kbbbt.OrderVoucherStatus } };
  /** {@link Alsc.Kbbbt.ProductChange 口碑 > 口碑爆爆团商品变更的消息} */
  type AlscKbbbtProductChange = Message & { content?: MessageContent & { topic?: 'alsc_kbbbt_ProductChange', content?: string | Alsc.Kbbbt.ProductChange } };
  /** {@link Alsc.Reviewbwc.ActivityEnrollSync 口碑 > 本地联盟饿了么评价有礼门店活动消息} */
  type AlscReviewbwcActivityEnrollSync = Message & { content?: MessageContent & { topic?: 'alsc_reviewbwc_ActivityEnrollSync', content?: string | Alsc.Reviewbwc.ActivityEnrollSync } };
  /** {@link Alsc.Reviewbwc.SidBindSync 口碑 > 评价有礼渠道用户身份SID绑定通知} */
  type AlscReviewbwcSidBindSync = Message & { content?: MessageContent & { topic?: 'alsc_reviewbwc_SidBindSync', content?: string | Alsc.Reviewbwc.SidBindSync } };
  /** {@link Alsc.Risk.PunishSend 口碑 > 本地生活处罚中心处罚下发} */
  type AlscRiskPunishSend = Message & { content?: MessageContent & { topic?: 'alsc_risk_PunishSend', content?: string | Alsc.Risk.PunishSend } };
  /** {@link Alsc.Salesadaptor.ShopAuditingNotify 口碑 > 饿了么开店状态通知接口} */
  type AlscSalesadaptorShopAuditingNotify = Message & { content?: MessageContent & { topic?: 'alsc_salesadaptor_ShopAuditingNotify', content?: string | Alsc.Salesadaptor.ShopAuditingNotify } };
  /** {@link Alsc.Salescrm.LeadsActionNotify 口碑 > alsc销售商机变更通知} */
  type AlscSalescrmLeadsActionNotify = Message & { content?: MessageContent & { topic?: 'alsc_salescrm_LeadsActionNotify', content?: string | Alsc.Salescrm.LeadsActionNotify } };
  /** {@link Alsc.Salescrm.OpportunityActionNotify 口碑 > alsc销售商机变更通知} */
  type AlscSalescrmOpportunityActionNotify = Message & { content?: MessageContent & { topic?: 'alsc_salescrm_OpportunityActionNotify', content?: string | Alsc.Salescrm.OpportunityActionNotify } };
  /** {@link Ascp.Insdustry.CancelInquiry 天猫服务 > 送货入户并安装取消询价接口} */
  type AscpInsdustryCancelInquiry = Message & { content?: MessageContent & { topic?: 'ascp_insdustry_CancelInquiry', content?: string | Ascp.Insdustry.CancelInquiry } };
  /** {@link Ascp.Instantsonline.LogisticsStatusCallback 同城配送 > 同城配送在线下单物流状态回告} */
  type AscpInstantsonlineLogisticsStatusCallback = Message & { content?: MessageContent & { topic?: 'ascp_instantsonline_LogisticsStatusCallback', content?: string | Ascp.Instantsonline.LogisticsStatusCallback } };
  /** {@link Banma.Right.TradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  type BanmaRightTradeCreate = Message & { content?: MessageContent & { topic?: 'banma_right_TradeCreate', content?: string | Banma.Right.TradeCreate } };
  /** {@link Cainiao.Consignplatform.LogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  type CainiaoConsignplatformLogisiticsDetail = Message & { content?: MessageContent & { topic?: 'cainiao_consignplatform_LogisiticsDetail', content?: string | Cainiao.Consignplatform.LogisiticsDetail } };
  /** {@link Cainiao.Iot.AftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  type CainiaoIotAftersalesTicket = Message & { content?: MessageContent & { topic?: 'cainiao_iot_AftersalesTicket', content?: string | Cainiao.Iot.AftersalesTicket } };
  /** {@link Cainiao.Logistics.AbnormalOrderCreate 菜鸟 > 菜鸟物流异常件创建} */
  type CainiaoLogisticsAbnormalOrderCreate = Message & { content?: MessageContent & { topic?: 'cainiao_logistics_AbnormalOrderCreate', content?: string | Cainiao.Logistics.AbnormalOrderCreate } };
  /** {@link Cainiao.Logistics.AbnormalOrderUpdate 菜鸟 > 异常件变更消息} */
  type CainiaoLogisticsAbnormalOrderUpdate = Message & { content?: MessageContent & { topic?: 'cainiao_logistics_AbnormalOrderUpdate', content?: string | Cainiao.Logistics.AbnormalOrderUpdate } };
  /** {@link Cainiao.Moduan.AlertOrder 菜鸟 > 异常订单预警通知} */
  type CainiaoModuanAlertOrder = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_AlertOrder', content?: string | Cainiao.Moduan.AlertOrder } };
  /** {@link Cainiao.Moduan.CancelTask 菜鸟 > 任务取消消息推送} */
  type CainiaoModuanCancelTask = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CancelTask', content?: string | Cainiao.Moduan.CancelTask } };
  /** {@link Cainiao.Moduan.CommonMailnoUpdated 菜鸟 > 运单号更新} */
  type CainiaoModuanCommonMailnoUpdated = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonMailnoUpdated', content?: string | Cainiao.Moduan.CommonMailnoUpdated } };
  /** {@link Cainiao.Moduan.CommonOrderCanceled 菜鸟 > 订单取消} */
  type CainiaoModuanCommonOrderCanceled = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonOrderCanceled', content?: string | Cainiao.Moduan.CommonOrderCanceled } };
  /** {@link Cainiao.Moduan.CommonOrderGrasped 菜鸟 > 普通寄件接单消息} */
  type CainiaoModuanCommonOrderGrasped = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonOrderGrasped', content?: string | Cainiao.Moduan.CommonOrderGrasped } };
  /** {@link Cainiao.Moduan.CommonOrderMailnoReturned 菜鸟 > 回单消息} */
  type CainiaoModuanCommonOrderMailnoReturned = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonOrderMailnoReturned', content?: string | Cainiao.Moduan.CommonOrderMailnoReturned } };
  /** {@link Cainiao.Moduan.CommonOrderPickup 菜鸟 > 揽件消息} */
  type CainiaoModuanCommonOrderPickup = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonOrderPickup', content?: string | Cainiao.Moduan.CommonOrderPickup } };
  /** {@link Cainiao.Moduan.CommonWaitWithholdTimeOut 菜鸟 > 支付订单超时} */
  type CainiaoModuanCommonWaitWithholdTimeOut = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonWaitWithholdTimeOut', content?: string | Cainiao.Moduan.CommonWaitWithholdTimeOut } };
  /** {@link Cainiao.Moduan.CommonWithholdResult 菜鸟 > 代扣结果通知} */
  type CainiaoModuanCommonWithholdResult = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CommonWithholdResult', content?: string | Cainiao.Moduan.CommonWithholdResult } };
  /** {@link Cainiao.Moduan.CourierAccountSync 菜鸟 > 小件员账号同步} */
  type CainiaoModuanCourierAccountSync = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CourierAccountSync', content?: string | Cainiao.Moduan.CourierAccountSync } };
  /** {@link Cainiao.Moduan.CreateAppointOrder 菜鸟 > 创建预约订单通知} */
  type CainiaoModuanCreateAppointOrder = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_CreateAppointOrder', content?: string | Cainiao.Moduan.CreateAppointOrder } };
  /** {@link Cainiao.Moduan.DispatchTask 菜鸟 > 直送任务广播} */
  type CainiaoModuanDispatchTask = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_DispatchTask', content?: string | Cainiao.Moduan.DispatchTask } };
  /** {@link Cainiao.Moduan.GongyiData 菜鸟 > 公益数据对接下发} */
  type CainiaoModuanGongyiData = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_GongyiData', content?: string | Cainiao.Moduan.GongyiData } };
  /** {@link Cainiao.Moduan.GraspedTask 菜鸟 > 直送抢单成功后消息推送} */
  type CainiaoModuanGraspedTask = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_GraspedTask', content?: string | Cainiao.Moduan.GraspedTask } };
  /** {@link Cainiao.Moduan.ModifyAppointOrder 菜鸟 > 修改预约订单通知} */
  type CainiaoModuanModifyAppointOrder = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_ModifyAppointOrder', content?: string | Cainiao.Moduan.ModifyAppointOrder } };
  /** {@link Cainiao.Moduan.OrderFeeTrans 菜鸟 > 末端订单转账结果通知} */
  type CainiaoModuanOrderFeeTrans = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_OrderFeeTrans', content?: string | Cainiao.Moduan.OrderFeeTrans } };
  /** {@link Cainiao.Moduan.OrderGrasp 菜鸟 > 小件员已接单推送信息} */
  type CainiaoModuanOrderGrasp = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_OrderGrasp', content?: string | Cainiao.Moduan.OrderGrasp } };
  /** {@link Cainiao.Moduan.OrderInfo 菜鸟 > 菜鸟末端订单信息} */
  type CainiaoModuanOrderInfo = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_OrderInfo', content?: string | Cainiao.Moduan.OrderInfo } };
  /** {@link Cainiao.Moduan.OrderPickup 菜鸟 > 小件员已揽件推送信息} */
  type CainiaoModuanOrderPickup = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_OrderPickup', content?: string | Cainiao.Moduan.OrderPickup } };
  /** {@link Cainiao.Moduan.OrderReturnMailNO 菜鸟 > 回传运单号通知} */
  type CainiaoModuanOrderReturnMailNO = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_OrderReturnMailNO', content?: string | Cainiao.Moduan.OrderReturnMailNO } };
  /** {@link Cainiao.Moduan.RedispatchApplied 菜鸟 > 申请改派消息} */
  type CainiaoModuanRedispatchApplied = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_RedispatchApplied', content?: string | Cainiao.Moduan.RedispatchApplied } };
  /** {@link Cainiao.Moduan.SignInfo 菜鸟 > 签收信息回传} */
  type CainiaoModuanSignInfo = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_SignInfo', content?: string | Cainiao.Moduan.SignInfo } };
  /** {@link Cainiao.Moduan.TaskAskGrasp 菜鸟 > 抢单通知} */
  type CainiaoModuanTaskAskGrasp = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskAskGrasp', content?: string | Cainiao.Moduan.TaskAskGrasp } };
  /** {@link Cainiao.Moduan.TaskCancel 菜鸟 > 任务被取消} */
  type CainiaoModuanTaskCancel = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskCancel', content?: string | Cainiao.Moduan.TaskCancel } };
  /** {@link Cainiao.Moduan.TaskFeeTrans 菜鸟 > 结算通知} */
  type CainiaoModuanTaskFeeTrans = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskFeeTrans', content?: string | Cainiao.Moduan.TaskFeeTrans } };
  /** {@link Cainiao.Moduan.TaskGrasp 菜鸟 > 订单被[抢/兜/追/派]后同步给CP} */
  type CainiaoModuanTaskGrasp = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskGrasp', content?: string | Cainiao.Moduan.TaskGrasp } };
  /** {@link Cainiao.Moduan.TaskGroupDone 菜鸟 > 抢单任务组被抢通知} */
  type CainiaoModuanTaskGroupDone = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskGroupDone', content?: string | Cainiao.Moduan.TaskGroupDone } };
  /** {@link Cainiao.Moduan.TaskGroupTimeOut 菜鸟 > 抢单任务组超时通知} */
  type CainiaoModuanTaskGroupTimeOut = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskGroupTimeOut', content?: string | Cainiao.Moduan.TaskGroupTimeOut } };
  /** {@link Cainiao.Moduan.TaskGroupViolate 菜鸟 > 兜底任务CP违约通知} */
  type CainiaoModuanTaskGroupViolate = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskGroupViolate', content?: string | Cainiao.Moduan.TaskGroupViolate } };
  /** {@link Cainiao.Moduan.TaskModifyGotDate 菜鸟 > 修改上门取件时间} */
  type CainiaoModuanTaskModifyGotDate = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskModifyGotDate', content?: string | Cainiao.Moduan.TaskModifyGotDate } };
  /** {@link Cainiao.Moduan.TaskPaid 菜鸟 > 用户付款通知} */
  type CainiaoModuanTaskPaid = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskPaid', content?: string | Cainiao.Moduan.TaskPaid } };
  /** {@link Cainiao.Moduan.TaskPriceInfo 菜鸟 > 仓配派单订单价格通知} */
  type CainiaoModuanTaskPriceInfo = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskPriceInfo', content?: string | Cainiao.Moduan.TaskPriceInfo } };
  /** {@link Cainiao.Moduan.TaskRedispatch 菜鸟 > 订单改派} */
  type CainiaoModuanTaskRedispatch = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskRedispatch', content?: string | Cainiao.Moduan.TaskRedispatch } };
  /** {@link Cainiao.Moduan.TaskReturnMailNo 菜鸟 > 小件员回传运单号通知} */
  type CainiaoModuanTaskReturnMailNo = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskReturnMailNo', content?: string | Cainiao.Moduan.TaskReturnMailNo } };
  /** {@link Cainiao.Moduan.TaskTaken 菜鸟 > 小件员已上门取件} */
  type CainiaoModuanTaskTaken = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_TaskTaken', content?: string | Cainiao.Moduan.TaskTaken } };
  /** {@link Cainiao.Moduan.UserWord 菜鸟 > 用户留言通知} */
  type CainiaoModuanUserWord = Message & { content?: MessageContent & { topic?: 'cainiao_moduan_UserWord', content?: string | Cainiao.Moduan.UserWord } };
  /** {@link Cainiao.Scf.LoanCreate 菜鸟 > 菜鸟金融贷款通知databus} */
  type CainiaoScfLoanCreate = Message & { content?: MessageContent & { topic?: 'cainiao_scf_LoanCreate', content?: string | Cainiao.Scf.LoanCreate } };
  /** {@link Cainiao.Waybill.TrackTicketStatus 菜鸟 > 单据状态跟踪} */
  type CainiaoWaybillTrackTicketStatus = Message & { content?: MessageContent & { topic?: 'cainiao_waybill_TrackTicketStatus', content?: string | Cainiao.Waybill.TrackTicketStatus } };
  /** {@link Cainiao.Yima.SmsRecordPush 菜鸟 > 短信记录推送} */
  type CainiaoYimaSmsRecordPush = Message & { content?: MessageContent & { topic?: 'cainiao_yima_SmsRecordPush', content?: string | Cainiao.Yima.SmsRecordPush } };
  /** {@link Damai.Distribution.MatchSeat 大麦第三方票务供应商接入 > 履约补选座位成功通知三方} */
  type DamaiDistributionMatchSeat = Message & { content?: MessageContent & { topic?: 'damai_distribution_MatchSeat', content?: string | Damai.Distribution.MatchSeat } };
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
  /** {@link Damai.Distribution.RefundRule 大麦第三方票务供应商接入 > 项目退款规则} */
  type DamaiDistributionRefundRule = Message & { content?: MessageContent & { topic?: 'damai_distribution_RefundRule', content?: string | Damai.Distribution.RefundRule } };
  /** {@link Damai.Distribution.SendExpress 大麦第三方票务供应商接入 > 履约发快递成功通知三方} */
  type DamaiDistributionSendExpress = Message & { content?: MessageContent & { topic?: 'damai_distribution_SendExpress', content?: string | Damai.Distribution.SendExpress } };
  /** {@link Damai.Distribution.TicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  type DamaiDistributionTicketItemStatus = Message & { content?: MessageContent & { topic?: 'damai_distribution_TicketItemStatus', content?: string | Damai.Distribution.TicketItemStatus } };
  /** {@link Damai.Mev.DatasyncTalkMaitix 大麦 > maitix与datasync数据同步} */
  type DamaiMevDatasyncTalkMaitix = Message & { content?: MessageContent & { topic?: 'damai_mev_DatasyncTalkMaitix', content?: string | Damai.Mev.DatasyncTalkMaitix } };
  /** {@link Damai.Mz.EventStateChange 大麦 > 场次状态通知接口} */
  type DamaiMzEventStateChange = Message & { content?: MessageContent & { topic?: 'damai_mz_EventStateChange', content?: string | Damai.Mz.EventStateChange } };
  /** {@link Damai.Mz.ForwardMessage 大麦 > 大麦新麦座消息} */
  type DamaiMzForwardMessage = Message & { content?: MessageContent & { topic?: 'damai_mz_ForwardMessage', content?: string | Damai.Mz.ForwardMessage } };
  /** {@link Damai.Mz.OrderChangeState 大麦 > 订单状态变动通知} */
  type DamaiMzOrderChangeState = Message & { content?: MessageContent & { topic?: 'damai_mz_OrderChangeState', content?: string | Damai.Mz.OrderChangeState } };
  /** {@link Damai.Mz.OrderRefund 大麦 > 麦座退单审核通过通知} */
  type DamaiMzOrderRefund = Message & { content?: MessageContent & { topic?: 'damai_mz_OrderRefund', content?: string | Damai.Mz.OrderRefund } };
  /** {@link Damai.Mz.OrderStateChange 大麦 > 订单状态通知} */
  type DamaiMzOrderStateChange = Message & { content?: MessageContent & { topic?: 'damai_mz_OrderStateChange', content?: string | Damai.Mz.OrderStateChange } };
  /** {@link Damai.Mz.SeatStateChange 大麦 > 大麦麦座座位状态变化消息} */
  type DamaiMzSeatStateChange = Message & { content?: MessageContent & { topic?: 'damai_mz_SeatStateChange', content?: string | Damai.Mz.SeatStateChange } };
  /** {@link Damai.Mz.TicketStateChange 大麦 > 大麦麦座票状态变化消息} */
  type DamaiMzTicketStateChange = Message & { content?: MessageContent & { topic?: 'damai_mz_TicketStateChange', content?: string | Damai.Mz.TicketStateChange } };
  /** {@link Damai.Mz.UserRegister 大麦 > 麦座会员注册成功通知} */
  type DamaiMzUserRegister = Message & { content?: MessageContent & { topic?: 'damai_mz_UserRegister', content?: string | Damai.Mz.UserRegister } };
  /** {@link Damai.Trade.TicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  type DamaiTradeTicketStatusPush = Message & { content?: MessageContent & { topic?: 'damai_trade_TicketStatusPush', content?: string | Damai.Trade.TicketStatusPush } };
  /** {@link Ele.Enterprise.PushOrderDetail 饿了么 > 饿了么企业订餐推送订单详情} */
  type EleEnterprisePushOrderDetail = Message & { content?: MessageContent & { topic?: 'ele_enterprise_PushOrderDetail', content?: string | Ele.Enterprise.PushOrderDetail } };
  /** {@link Eleme.Bankstatement.Get 饿了么 > 饿了么银行流水对接} */
  type ElemeBankstatementGet = Message & { content?: MessageContent & { topic?: 'eleme_bankstatement_Get', content?: string | Eleme.Bankstatement.Get } };
  /** {@link Eleme.Retail.PosOrderMessage 饿了么 > 饿了么零售智慧菜场订单状态消息} */
  type ElemeRetailPosOrderMessage = Message & { content?: MessageContent & { topic?: 'eleme_retail_PosOrderMessage', content?: string | Eleme.Retail.PosOrderMessage } };
  /** {@link Fliggy.Btrip.HotelDistributionOrderChange 商旅API > 订单状态变化} */
  type FliggyBtripHotelDistributionOrderChange = Message & { content?: MessageContent & { topic?: 'fliggy_btrip_HotelDistributionOrderChange', content?: string | Fliggy.Btrip.HotelDistributionOrderChange } };
  /** {@link Fliggy.Interact.HaitunEventCreate 飞猪 > 飞猪互动海豚事件产生} */
  type FliggyInteractHaitunEventCreate = Message & { content?: MessageContent & { topic?: 'fliggy_interact_HaitunEventCreate', content?: string | Fliggy.Interact.HaitunEventCreate } };
  /** {@link Fliggy.Jipiao.FlightChange 淘宝机票 > 航变消息服务} */
  type FliggyJipiaoFlightChange = Message & { content?: MessageContent & { topic?: 'fliggy_jipiao_FlightChange', content?: string | Fliggy.Jipiao.FlightChange } };
  /** {@link Fliggy.Member.LevelChange 飞猪 > 通知合作商家飞猪会员等级变更消息} */
  type FliggyMemberLevelChange = Message & { content?: MessageContent & { topic?: 'fliggy_member_LevelChange', content?: string | Fliggy.Member.LevelChange } };
  /** {@link Fliggy.Push.HaitunEventCreate 飞猪 > 飞猪多端投放体系海豚事件产生} */
  type FliggyPushHaitunEventCreate = Message & { content?: MessageContent & { topic?: 'fliggy_push_HaitunEventCreate', content?: string | Fliggy.Push.HaitunEventCreate } };
  /** {@link Fliggy.Sht.OrderMsg 飞猪 > 飞猪四海通订单消息} */
  type FliggyShtOrderMsg = Message & { content?: MessageContent & { topic?: 'fliggy_sht_OrderMsg', content?: string | Fliggy.Sht.OrderMsg } };
  /** {@link Fliggy.Ticket.OrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  type FliggyTicketOrderRefund = Message & { content?: MessageContent & { topic?: 'fliggy_ticket_OrderRefund', content?: string | Fliggy.Ticket.OrderRefund } };
  /** {@link Fliggy.Ticket.OrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  type FliggyTicketOrderStatusChange = Message & { content?: MessageContent & { topic?: 'fliggy_ticket_OrderStatusChange', content?: string | Fliggy.Ticket.OrderStatusChange } };
  /** {@link Fliggy.Ticket.VerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  type FliggyTicketVerifyNotify = Message & { content?: MessageContent & { topic?: 'fliggy_ticket_VerifyNotify', content?: string | Fliggy.Ticket.VerifyNotify } };
  /** {@link Fliggy.Visa.ApplicantStatusChanged 飞猪 > 签证申请人状态变更消息} */
  type FliggyVisaApplicantStatusChanged = Message & { content?: MessageContent & { topic?: 'fliggy_visa_ApplicantStatusChanged', content?: string | Fliggy.Visa.ApplicantStatusChanged } };
  /** {@link Fliggy.Visa.StatusChange 飞猪 > 签证状态变化消息} */
  type FliggyVisaStatusChange = Message & { content?: MessageContent & { topic?: 'fliggy_visa_StatusChange', content?: string | Fliggy.Visa.StatusChange } };
  /** {@link Fliggy.Xhotel.ComboCreateResult 飞猪 > 套餐创建消息回传} */
  type FliggyXhotelComboCreateResult = Message & { content?: MessageContent & { topic?: 'fliggy_xhotel_ComboCreateResult', content?: string | Fliggy.Xhotel.ComboCreateResult } };
  /** {@link Fuwu.Confirm.Fail 服务市场 > 收入确认失败} */
  type FuwuConfirmFail = Message & { content?: MessageContent & { topic?: 'fuwu_confirm_Fail', content?: string | Fuwu.Confirm.Fail } };
  /** {@link Fuwu.Confirm.Success 服务市场 > 收入确认成功} */
  type FuwuConfirmSuccess = Message & { content?: MessageContent & { topic?: 'fuwu_confirm_Success', content?: string | Fuwu.Confirm.Success } };
  /** {@link Gaode.Caiji.EccTaskAuditStatusNotify 高德 > 高德采集生态小程序任务状态通知} */
  type GaodeCaijiEccTaskAuditStatusNotify = Message & { content?: MessageContent & { topic?: 'gaode_caiji_EccTaskAuditStatusNotify', content?: string | Gaode.Caiji.EccTaskAuditStatusNotify } };
  /** {@link Genie.Gsc.OrderStatusUpdate 天猫精灵供应链 > 单据状态同步} */
  type GenieGscOrderStatusUpdate = Message & { content?: MessageContent & { topic?: 'genie_gsc_OrderStatusUpdate', content?: string | Genie.Gsc.OrderStatusUpdate } };
  /** {@link Global.Virtual.MerchantSendCode 国际虚拟业务 > 国际虚拟业务对接码商} */
  type GlobalVirtualMerchantSendCode = Message & { content?: MessageContent & { topic?: 'global_virtual_MerchantSendCode', content?: string | Global.Virtual.MerchantSendCode } };
  /** {@link Gov.Auction.AuctionOrderPaid 大资产拍卖Top端拍品消息 > 订单支付消息} */
  type GovAuctionAuctionOrderPaid = Message & { content?: MessageContent & { topic?: 'gov_auction_AuctionOrderPaid', content?: string | Gov.Auction.AuctionOrderPaid } };
  /** {@link Gov.Auction.End 大资产拍卖Top端拍品消息 > 大资产拍卖拍品结束消息} */
  type GovAuctionEnd = Message & { content?: MessageContent & { topic?: 'gov_auction_End', content?: string | Gov.Auction.End } };
  /** {@link Gov.Auction.EndImmediate 大资产拍卖Top端拍品消息 > 标的结束即刻消息} */
  type GovAuctionEndImmediate = Message & { content?: MessageContent & { topic?: 'gov_auction_EndImmediate', content?: string | Gov.Auction.EndImmediate } };
  /** {@link Gov.Auction.Publish 大资产拍卖Top端拍品消息 > 大资产标的上架消息} */
  type GovAuctionPublish = Message & { content?: MessageContent & { topic?: 'gov_auction_Publish', content?: string | Gov.Auction.Publish } };
  /** {@link Gov.Auction.PushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  type GovAuctionPushVehicleDataToBM = Message & { content?: MessageContent & { topic?: 'gov_auction_PushVehicleDataToBM', content?: string | Gov.Auction.PushVehicleDataToBM } };
  /** {@link Gov.Auction.QuanAnAssetsPack 大资产拍卖Top端拍品消息 > 全案资产打包信息} */
  type GovAuctionQuanAnAssetsPack = Message & { content?: MessageContent & { topic?: 'gov_auction_QuanAnAssetsPack', content?: string | Gov.Auction.QuanAnAssetsPack } };
  /** {@link Gov.Auction.VehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  type GovAuctionVehicleDataPush = Message & { content?: MessageContent & { topic?: 'gov_auction_VehicleDataPush', content?: string | Gov.Auction.VehicleDataPush } };
  /** {@link Gov.Qual.Submit 资产拍卖 > 拍品资质审核提交消息} */
  type GovQualSubmit = Message & { content?: MessageContent & { topic?: 'gov_qual_Submit', content?: string | Gov.Qual.Submit } };
  /** {@link Gov.Radarclue.ExcelFinish 竞价雷达 > 财产线索Excel监控源解析结果通知} */
  type GovRadarclueExcelFinish = Message & { content?: MessageContent & { topic?: 'gov_radarclue_ExcelFinish', content?: string | Gov.Radarclue.ExcelFinish } };
  /** {@link Gov.Radarclue.Info 竞价雷达 > 财产线索定时统计消息通知} */
  type GovRadarclueInfo = Message & { content?: MessageContent & { topic?: 'gov_radarclue_Info', content?: string | Gov.Radarclue.Info } };
  /** {@link Icbu.Alicrm.CustomerModified ICBU > 客户信息变更同步小满} */
  type IcbuAlicrmCustomerModified = Message & { content?: MessageContent & { topic?: 'icbu_alicrm_CustomerModified', content?: string | Icbu.Alicrm.CustomerModified } };
  /** {@link Icbu.Alicrm.NoteModified ICBU > 客户通小记变更} */
  type IcbuAlicrmNoteModified = Message & { content?: MessageContent & { topic?: 'icbu_alicrm_NoteModified', content?: string | Icbu.Alicrm.NoteModified } };
  /** {@link Icbu.Alicrm.OfflineDataChanged ICBU > 客户通离线数据变更同步} */
  type IcbuAlicrmOfflineDataChanged = Message & { content?: MessageContent & { topic?: 'icbu_alicrm_OfflineDataChanged', content?: string | Icbu.Alicrm.OfflineDataChanged } };
  /** {@link Icbu.Chat.MessageTipForXiaoMan ICBU > ICBU沟通消息推送给小满提醒} */
  type IcbuChatMessageTipForXiaoMan = Message & { content?: MessageContent & { topic?: 'icbu_chat_MessageTipForXiaoMan', content?: string | Icbu.Chat.MessageTipForXiaoMan } };
  /** {@link Icbu.Crm.GgsXMOrderChange ICBU > ICBU CRM小满订单状态变更通知（GGS港台）} */
  type IcbuCrmGgsXMOrderChange = Message & { content?: MessageContent & { topic?: 'icbu_crm_GgsXMOrderChange', content?: string | Icbu.Crm.GgsXMOrderChange } };
  /** {@link Icbu.Crm.XMOrderChange ICBU > ICBU CRM小满订单状态变更通知} */
  type IcbuCrmXMOrderChange = Message & { content?: MessageContent & { topic?: 'icbu_crm_XMOrderChange', content?: string | Icbu.Crm.XMOrderChange } };
  /** {@link Icbu.Member.XmUnBind ICBU > icbu国际站账号解绑小满账号} */
  type IcbuMemberXmUnBind = Message & { content?: MessageContent & { topic?: 'icbu_member_XmUnBind', content?: string | Icbu.Member.XmUnBind } };
  /** {@link Icbu.Risk.ZeroersMessage ICBU > 天鹿风控事件异步消息结果} */
  type IcbuRiskZeroersMessage = Message & { content?: MessageContent & { topic?: 'icbu_risk_ZeroersMessage', content?: string | Icbu.Risk.ZeroersMessage } };
  /** {@link Icbu.Trade.OrderNotify ICBU-交易 > 国际站订单变更消息} */
  type IcbuTradeOrderNotify = Message & { content?: MessageContent & { topic?: 'icbu_trade_OrderNotify', content?: string | Icbu.Trade.OrderNotify } };
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
  /** {@link Idle.Cro.PunishMsg 闲鱼 > 闲鱼安全处罚消息} */
  type IdleCroPunishMsg = Message & { content?: MessageContent & { topic?: 'idle_cro_PunishMsg', content?: string | Idle.Cro.PunishMsg } };
  /** {@link Idle.Cycleshop.GoodsNotice 闲鱼 > 闲鱼循环商店-货品变更通知} */
  type IdleCycleshopGoodsNotice = Message & { content?: MessageContent & { topic?: 'idle_cycleshop_GoodsNotice', content?: string | Idle.Cycleshop.GoodsNotice } };
  /** {@link Idle.Cycleshop.SaleOrderNotice 闲鱼 > 闲鱼循环商店-销售单变更通知} */
  type IdleCycleshopSaleOrderNotice = Message & { content?: MessageContent & { topic?: 'idle_cycleshop_SaleOrderNotice', content?: string | Idle.Cycleshop.SaleOrderNotice } };
  /** {@link Idle.Newoutlets.UserTagNotice 闲鱼 > 闲鱼用户身份变更消息} */
  type IdleNewoutletsUserTagNotice = Message & { content?: MessageContent & { topic?: 'idle_newoutlets_UserTagNotice', content?: string | Idle.Newoutlets.UserTagNotice } };
  /** {@link Idle.Recycle.OrderStateSyn 闲鱼回收商消息 > 闲鱼回收业务订单消息} */
  type IdleRecycleOrderStateSyn = Message & { content?: MessageContent & { topic?: 'idle_recycle_OrderStateSyn', content?: string | Idle.Recycle.OrderStateSyn } };
  /** {@link Idle.Recycle.OrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  type IdleRecycleOrderSyn = Message & { content?: MessageContent & { topic?: 'idle_recycle_OrderSyn', content?: string | Idle.Recycle.OrderSyn } };
  /** {@link Idle.Recycle.RefundStatusModify 闲鱼回收商消息 > 退款消息} */
  type IdleRecycleRefundStatusModify = Message & { content?: MessageContent & { topic?: 'idle_recycle_RefundStatusModify', content?: string | Idle.Recycle.RefundStatusModify } };
  /** {@link Idle.Topisv.CompensateNotice 闲鱼已验货 > 闲鱼开放平台-服务赔付单变更消息通知} */
  type IdleTopisvCompensateNotice = Message & { content?: MessageContent & { topic?: 'idle_topisv_CompensateNotice', content?: string | Idle.Topisv.CompensateNotice } };
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
  /** {@link Idle.Twjd.OrderSyn 闲鱼 > 闲鱼图文鉴定业务订单消息} */
  type IdleTwjdOrderSyn = Message & { content?: MessageContent & { topic?: 'idle_twjd_OrderSyn', content?: string | Idle.Twjd.OrderSyn } };
  /** {@link Intime.Datacenter.OrderStatus 银泰 > 状态同步} */
  type IntimeDatacenterOrderStatus = Message & { content?: MessageContent & { topic?: 'intime_datacenter_OrderStatus', content?: string | Intime.Datacenter.OrderStatus } };
  /** {@link Intime.Sc.OrderCreateUpdate 银泰 > 服务单创建和更新} */
  type IntimeScOrderCreateUpdate = Message & { content?: MessageContent & { topic?: 'intime_sc_OrderCreateUpdate', content?: string | Intime.Sc.OrderCreateUpdate } };
  /** {@link Jae.Trade.PaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  type JaeTradePaidSuccessed = Message & { content?: MessageContent & { topic?: 'jae_trade_PaidSuccessed', content?: string | Jae.Trade.PaidSuccessed } };
  /** {@link Jym.Order.BoosterStatusChange 交易猫 > 交易猫代练订单状态变更} */
  type JymOrderBoosterStatusChange = Message & { content?: MessageContent & { topic?: 'jym_order_BoosterStatusChange', content?: string | Jym.Order.BoosterStatusChange } };
  /** {@link Lark.Trade.PosTradeDataTransmit 云智POS > 云智POS离线交易信息同步} */
  type LarkTradePosTradeDataTransmit = Message & { content?: MessageContent & { topic?: 'lark_trade_PosTradeDataTransmit', content?: string | Lark.Trade.PosTradeDataTransmit } };
  /** {@link Lianfan.Huiwa.ModelStateUpdate 连凡 > 绘蛙模型状态变更消息} */
  type LianfanHuiwaModelStateUpdate = Message & { content?: MessageContent & { topic?: 'lianfan_huiwa_ModelStateUpdate', content?: string | Lianfan.Huiwa.ModelStateUpdate } };
  /** {@link Lianfan.Huiwa.TaskStateUpdate 连凡 > 绘蛙生图任务状态变更消息} */
  type LianfanHuiwaTaskStateUpdate = Message & { content?: MessageContent & { topic?: 'lianfan_huiwa_TaskStateUpdate', content?: string | Lianfan.Huiwa.TaskStateUpdate } };
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
  /** {@link Taobao.Ag.RefundBroad AliGenius > AG退款消息广播} */
  type TaobaoAgRefundBroad = Message & { content?: MessageContent & { topic?: 'taobao_ag_RefundBroad', content?: string | Taobao.Ag.RefundBroad } };
  /** {@link Taobao.Ag.RefundSignInfo AliGenius > 商家在AG的签收信息} */
  type TaobaoAgRefundSignInfo = Message & { content?: MessageContent & { topic?: 'taobao_ag_RefundSignInfo', content?: string | Taobao.Ag.RefundSignInfo } };
  /** {@link Taobao.Ag.SignInfo AliGenius > AG仓库核验信息} */
  type TaobaoAgSignInfo = Message & { content?: MessageContent & { topic?: 'taobao_ag_SignInfo', content?: string | Taobao.Ag.SignInfo } };
  /** {@link Taobao.Ag.TicketsMsg AliGenius > 商家工单消息} */
  type TaobaoAgTicketsMsg = Message & { content?: MessageContent & { topic?: 'taobao_ag_TicketsMsg', content?: string | Taobao.Ag.TicketsMsg } };
  /** {@link Taobao.Ais.CommonMessage 淘宝 > 厂商协同统一消息} */
  type TaobaoAisCommonMessage = Message & { content?: MessageContent & { topic?: 'taobao_ais_CommonMessage', content?: string | Taobao.Ais.CommonMessage } };
  /** {@link Taobao.Alipic.Wuyatestoutmsg 淘宝 > 异业会员正向消息测试} */
  type TaobaoAlipicWuyatestoutmsg = Message & { content?: MessageContent & { topic?: 'taobao_alipic_Wuyatestoutmsg', content?: string | Taobao.Alipic.Wuyatestoutmsg } };
  /** {@link Taobao.Alsc.DaodianOrderAfterSaleRefund 淘宝 > 本地生活到店交易逆向售后退款消息通知} */
  type TaobaoAlscDaodianOrderAfterSaleRefund = Message & { content?: MessageContent & { topic?: 'taobao_alsc_DaodianOrderAfterSaleRefund', content?: string | Taobao.Alsc.DaodianOrderAfterSaleRefund } };
  /** {@link Taobao.Alsc.DaodianOrderAgreeRefund 淘宝 > 本地生活到店交易，逆向单审核通过消息通知} */
  type TaobaoAlscDaodianOrderAgreeRefund = Message & { content?: MessageContent & { topic?: 'taobao_alsc_DaodianOrderAgreeRefund', content?: string | Taobao.Alsc.DaodianOrderAgreeRefund } };
  /** {@link Taobao.Alsc.DaodianOrderApplyRefund 淘宝 > 本地生活到店交易用户发起退款消息通知} */
  type TaobaoAlscDaodianOrderApplyRefund = Message & { content?: MessageContent & { topic?: 'taobao_alsc_DaodianOrderApplyRefund', content?: string | Taobao.Alsc.DaodianOrderApplyRefund } };
  /** {@link Taobao.Alsc.DaodianOrderDeliver 淘宝 > 本地生活到店订单发货成功消息通知} */
  type TaobaoAlscDaodianOrderDeliver = Message & { content?: MessageContent & { topic?: 'taobao_alsc_DaodianOrderDeliver', content?: string | Taobao.Alsc.DaodianOrderDeliver } };
  /** {@link Taobao.Alsc.DaodianOrderRejectRefund 淘宝 > 本地生活到店交易逆向单审核拒绝消息通知} */
  type TaobaoAlscDaodianOrderRejectRefund = Message & { content?: MessageContent & { topic?: 'taobao_alsc_DaodianOrderRejectRefund', content?: string | Taobao.Alsc.DaodianOrderRejectRefund } };
  /** {@link Taobao.Alsc.DaodianTicketUsed 淘宝 > 本地生活到店凭证核销消息通知} */
  type TaobaoAlscDaodianTicketUsed = Message & { content?: MessageContent & { topic?: 'taobao_alsc_DaodianTicketUsed', content?: string | Taobao.Alsc.DaodianTicketUsed } };
  /** {@link Taobao.Aps.CommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  type TaobaoApsCommentAdd = Message & { content?: MessageContent & { topic?: 'taobao_aps_CommentAdd', content?: string | Taobao.Aps.CommentAdd } };
  /** {@link Taobao.Aps.NewFeedback 平台消息 > 收到舆情} */
  type TaobaoApsNewFeedback = Message & { content?: MessageContent & { topic?: 'taobao_aps_NewFeedback', content?: string | Taobao.Aps.NewFeedback } };
  /** {@link Taobao.Auction.ApplyEvent 淘宝 > 大资产拍卖报名消息} */
  type TaobaoAuctionApplyEvent = Message & { content?: MessageContent & { topic?: 'taobao_auction_ApplyEvent', content?: string | Taobao.Auction.ApplyEvent } };
  /** {@link Taobao.Auction.BidEvent 淘宝 > 大资产拍卖出价消息} */
  type TaobaoAuctionBidEvent = Message & { content?: MessageContent & { topic?: 'taobao_auction_BidEvent', content?: string | Taobao.Auction.BidEvent } };
  /** {@link Taobao.Auction.QuanAnEvaluatePrice 淘宝 > 拍卖全案评估价变更消息} */
  type TaobaoAuctionQuanAnEvaluatePrice = Message & { content?: MessageContent & { topic?: 'taobao_auction_QuanAnEvaluatePrice', content?: string | Taobao.Auction.QuanAnEvaluatePrice } };
  /** {@link Taobao.Axin.AlipayDkSignCallBack 阿信消息通知前台类目 > 支付宝代扣签约回调消息} */
  type TaobaoAxinAlipayDkSignCallBack = Message & { content?: MessageContent & { topic?: 'taobao_axin_AlipayDkSignCallBack', content?: string | Taobao.Axin.AlipayDkSignCallBack } };
  /** {@link Taobao.Axin.DivisionApplyResult 阿信消息通知前台类目 > 新增行政区划结果通知} */
  type TaobaoAxinDivisionApplyResult = Message & { content?: MessageContent & { topic?: 'taobao_axin_DivisionApplyResult', content?: string | Taobao.Axin.DivisionApplyResult } };
  /** {@link Taobao.Axin.HotelChangeEvent 阿信消息通知前台类目 > 阿信酒店RP变更通知} */
  type TaobaoAxinHotelChangeEvent = Message & { content?: MessageContent & { topic?: 'taobao_axin_HotelChangeEvent', content?: string | Taobao.Axin.HotelChangeEvent } };
  /** {@link Taobao.Axin.HotelOrderStatus 阿信消息通知前台类目 > 阿信酒店分销订单状态变更通知} */
  type TaobaoAxinHotelOrderStatus = Message & { content?: MessageContent & { topic?: 'taobao_axin_HotelOrderStatus', content?: string | Taobao.Axin.HotelOrderStatus } };
  /** {@link Taobao.Axin.PackageOrderChange 阿信消息通知前台类目 > 阿信订单变更消息} */
  type TaobaoAxinPackageOrderChange = Message & { content?: MessageContent & { topic?: 'taobao_axin_PackageOrderChange', content?: string | Taobao.Axin.PackageOrderChange } };
  /** {@link Taobao.Axin.PackageProductChange 阿信消息通知前台类目 > 阿信酒套产品价库变更消息} */
  type TaobaoAxinPackageProductChange = Message & { content?: MessageContent & { topic?: 'taobao_axin_PackageProductChange', content?: string | Taobao.Axin.PackageProductChange } };
  /** {@link Taobao.Axin.PoiApplyResult 阿信消息通知前台类目 > 新增POI结果通知} */
  type TaobaoAxinPoiApplyResult = Message & { content?: MessageContent & { topic?: 'taobao_axin_PoiApplyResult', content?: string | Taobao.Axin.PoiApplyResult } };
  /** {@link Taobao.Axin.RefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  type TaobaoAxinRefundCallBack = Message & { content?: MessageContent & { topic?: 'taobao_axin_RefundCallBack', content?: string | Taobao.Axin.RefundCallBack } };
  /** {@link Taobao.Baichuan.ASODeviceActivate 百川 > 设备APP激活} */
  type TaobaoBaichuanASODeviceActivate = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_ASODeviceActivate', content?: string | Taobao.Baichuan.ASODeviceActivate } };
  /** {@link Taobao.Baichuan.BrandInfoSend 百川 > 百川媒体品牌号获取} */
  type TaobaoBaichuanBrandInfoSend = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_BrandInfoSend', content?: string | Taobao.Baichuan.BrandInfoSend } };
  /** {@link Taobao.Baichuan.BrandSync 百川 > 媒体内容数据同步接口} */
  type TaobaoBaichuanBrandSync = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_BrandSync', content?: string | Taobao.Baichuan.BrandSync } };
  /** {@link Taobao.Baichuan.PasswordRuleChange 百川 > 口令规则变化消息} */
  type TaobaoBaichuanPasswordRuleChange = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_PasswordRuleChange', content?: string | Taobao.Baichuan.PasswordRuleChange } };
  /** {@link Taobao.Baichuan.TaoPasswordRule 百川 > 淘口令规则发生变化} */
  type TaobaoBaichuanTaoPasswordRule = Message & { content?: MessageContent & { topic?: 'taobao_baichuan_TaoPasswordRule', content?: string | Taobao.Baichuan.TaoPasswordRule } };
  /** {@link Taobao.Baoxian.AcceptInsurance 淘宝 > 淘宝保险出单数据消息} */
  type TaobaoBaoxianAcceptInsurance = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_AcceptInsurance', content?: string | Taobao.Baoxian.AcceptInsurance } };
  /** {@link Taobao.Baoxian.ClaimApply 淘宝 > 保险理赔消息} */
  type TaobaoBaoxianClaimApply = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_ClaimApply', content?: string | Taobao.Baoxian.ClaimApply } };
  /** {@link Taobao.Baoxian.ClaimSuccess 淘宝 > 理赔结果给保险公司消息} */
  type TaobaoBaoxianClaimSuccess = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_ClaimSuccess', content?: string | Taobao.Baoxian.ClaimSuccess } };
  /** {@link Taobao.Baoxian.EndorsementSuccess 淘宝 > 批单成功给保险公司消息} */
  type TaobaoBaoxianEndorsementSuccess = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_EndorsementSuccess', content?: string | Taobao.Baoxian.EndorsementSuccess } };
  /** {@link Taobao.Baoxian.Issue 淘宝 > 承保中心出单消息} */
  type TaobaoBaoxianIssue = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_Issue', content?: string | Taobao.Baoxian.Issue } };
  /** {@link Taobao.Baoxian.IssueSuccess 淘宝 > 出单成功给保险公司消息} */
  type TaobaoBaoxianIssueSuccess = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_IssueSuccess', content?: string | Taobao.Baoxian.IssueSuccess } };
  /** {@link Taobao.Baoxian.SurrenderredResult 淘宝 > 退保结果给保险公司消息} */
  type TaobaoBaoxianSurrenderredResult = Message & { content?: MessageContent & { topic?: 'taobao_baoxian_SurrenderredResult', content?: string | Taobao.Baoxian.SurrenderredResult } };
  /** {@link Taobao.Bashlive.LiveEventChange 淘宝 > 本地生活直播氛围数据共享} */
  type TaobaoBashliveLiveEventChange = Message & { content?: MessageContent & { topic?: 'taobao_bashlive_LiveEventChange', content?: string | Taobao.Bashlive.LiveEventChange } };
  /** {@link Taobao.Bmc.ShortMessageStatus 导购平台 > 短信状态} */
  type TaobaoBmcShortMessageStatus = Message & { content?: MessageContent & { topic?: 'taobao_bmc_ShortMessageStatus', content?: string | Taobao.Bmc.ShortMessageStatus } };
  /** {@link Taobao.Bus.InsureStatus 淘宝汽车票 > 保险投保退保状态} */
  type TaobaoBusInsureStatus = Message & { content?: MessageContent & { topic?: 'taobao_bus_InsureStatus', content?: string | Taobao.Bus.InsureStatus } };
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
  /** {@link Taobao.Cco.AlipayCase 淘宝 > CCO工单通知支付宝} */
  type TaobaoCcoAlipayCase = Message & { content?: MessageContent & { topic?: 'taobao_cco_AlipayCase', content?: string | Taobao.Cco.AlipayCase } };
  /** {@link Taobao.Cco.GjCase 淘宝 > cco工单创建广交通知} */
  type TaobaoCcoGjCase = Message & { content?: MessageContent & { topic?: 'taobao_cco_GjCase', content?: string | Taobao.Cco.GjCase } };
  /** {@link Taobao.Content.AuditAutocut 淘宝交易 > 智能混剪发布视频空间审核结果} */
  type TaobaoContentAuditAutocut = Message & { content?: MessageContent & { topic?: 'taobao_content_AuditAutocut', content?: string | Taobao.Content.AuditAutocut } };
  /** {@link Taobao.Content.AuditMvx 淘宝交易 > 视频工具发布视频空间审核结果} */
  type TaobaoContentAuditMvx = Message & { content?: MessageContent & { topic?: 'taobao_content_AuditMvx', content?: string | Taobao.Content.AuditMvx } };
  /** {@link Taobao.Content.OrderAuditChange 淘宝交易 > 短视频模板订单审核状态更新} */
  type TaobaoContentOrderAuditChange = Message & { content?: MessageContent & { topic?: 'taobao_content_OrderAuditChange', content?: string | Taobao.Content.OrderAuditChange } };
  /** {@link Taobao.Content.OrderPaid 淘宝交易 > 内容开放短视频模板支付消息} */
  type TaobaoContentOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_content_OrderPaid', content?: string | Taobao.Content.OrderPaid } };
  /** {@link Taobao.Content.TaoSubChanged 淘宝交易 > [淘宝订阅]变更通知} */
  type TaobaoContentTaoSubChanged = Message & { content?: MessageContent & { topic?: 'taobao_content_TaoSubChanged', content?: string | Taobao.Content.TaoSubChanged } };
  /** {@link Taobao.Daifa.BindChange 代发管理 > 关系绑定更改} */
  type TaobaoDaifaBindChange = Message & { content?: MessageContent & { topic?: 'taobao_daifa_BindChange', content?: string | Taobao.Daifa.BindChange } };
  /** {@link Taobao.Daifa.DistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  type TaobaoDaifaDistributorOrderStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_daifa_DistributorOrderStatusChange', content?: string | Taobao.Daifa.DistributorOrderStatusChange } };
  /** {@link Taobao.Daifa.SupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  type TaobaoDaifaSupplierOrderStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_daifa_SupplierOrderStatusChange', content?: string | Taobao.Daifa.SupplierOrderStatusChange } };
  /** {@link Taobao.Daifa.UserJoin 代发管理 > 代发用户入驻} */
  type TaobaoDaifaUserJoin = Message & { content?: MessageContent & { topic?: 'taobao_daifa_UserJoin', content?: string | Taobao.Daifa.UserJoin } };
  /** {@link Taobao.Datapush.QueryBiz 淘宝 > 数据推送查询订单} */
  type TaobaoDatapushQueryBiz = Message & { content?: MessageContent & { topic?: 'taobao_datapush_QueryBiz', content?: string | Taobao.Datapush.QueryBiz } };
  /** {@link Taobao.Dd.Push 淘宝点点 > 淘点点消息推送} */
  type TaobaoDdPush = Message & { content?: MessageContent & { topic?: 'taobao_dd_Push', content?: string | Taobao.Dd.Push } };
  /** {@link Taobao.Diandian.ServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  type TaobaoDiandianServeOrder = Message & { content?: MessageContent & { topic?: 'taobao_diandian_ServeOrder', content?: string | Taobao.Diandian.ServeOrder } };
  /** {@link Taobao.Dispute.ExchangeAgree 淘宝 > 同意换货} */
  type TaobaoDisputeExchangeAgree = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeAgree', content?: string | Taobao.Dispute.ExchangeAgree } };
  /** {@link Taobao.Dispute.ExchangeClosed 淘宝 > 买家关闭换货协议} */
  type TaobaoDisputeExchangeClosed = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeClosed', content?: string | Taobao.Dispute.ExchangeClosed } };
  /** {@link Taobao.Dispute.ExchangeModified 淘宝 > 买家修改换货申请} */
  type TaobaoDisputeExchangeModified = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeModified', content?: string | Taobao.Dispute.ExchangeModified } };
  /** {@link Taobao.Dispute.ExchangeSellerConfirmed 淘宝 > 卖家确认收货} */
  type TaobaoDisputeExchangeSellerConfirmed = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeSellerConfirmed', content?: string | Taobao.Dispute.ExchangeSellerConfirmed } };
  /** {@link Taobao.Dispute.ExchangeSellerGoodsConsigned 淘宝 > 换货-卖家寄出商品} */
  type TaobaoDisputeExchangeSellerGoodsConsigned = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeSellerGoodsConsigned', content?: string | Taobao.Dispute.ExchangeSellerGoodsConsigned } };
  /** {@link Taobao.Dispute.ExchangeSuccess 淘宝 > 买家确认收货,换货成功} */
  type TaobaoDisputeExchangeSuccess = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeSuccess', content?: string | Taobao.Dispute.ExchangeSuccess } };
  /** {@link Taobao.Dispute.ExchangeTurnToRefund 淘宝 > 卖家换货转退款} */
  type TaobaoDisputeExchangeTurnToRefund = Message & { content?: MessageContent & { topic?: 'taobao_dispute_ExchangeTurnToRefund', content?: string | Taobao.Dispute.ExchangeTurnToRefund } };
  /** {@link Taobao.Dispute.RefundCreated 淘宝 > 新退款创建} */
  type TaobaoDisputeRefundCreated = Message & { content?: MessageContent & { topic?: 'taobao_dispute_RefundCreated', content?: string | Taobao.Dispute.RefundCreated } };
  /** {@link Taobao.Dispute.RefundPriceProtect 淘宝 > 价保退款成功} */
  type TaobaoDisputeRefundPriceProtect = Message & { content?: MessageContent & { topic?: 'taobao_dispute_RefundPriceProtect', content?: string | Taobao.Dispute.RefundPriceProtect } };
  /** {@link Taobao.Dispute.RefundSuccess 淘宝 > 新退款成功消息} */
  type TaobaoDisputeRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_dispute_RefundSuccess', content?: string | Taobao.Dispute.RefundSuccess } };
  /** {@link Taobao.Dispute.TaobaoInterApplied 淘宝 > 申请小二介入} */
  type TaobaoDisputeTaobaoInterApplied = Message & { content?: MessageContent & { topic?: 'taobao_dispute_TaobaoInterApplied', content?: string | Taobao.Dispute.TaobaoInterApplied } };
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
  /** {@link Taobao.Einvoice.InvoiceRequestCreate 电子发票 > 电子发票开票请求} */
  type TaobaoEinvoiceInvoiceRequestCreate = Message & { content?: MessageContent & { topic?: 'taobao_einvoice_InvoiceRequestCreate', content?: string | Taobao.Einvoice.InvoiceRequestCreate } };
  /** {@link Taobao.Einvoice.InvoiceResultReturn 电子发票 > 电子发票开票回流} */
  type TaobaoEinvoiceInvoiceResultReturn = Message & { content?: MessageContent & { topic?: 'taobao_einvoice_InvoiceResultReturn', content?: string | Taobao.Einvoice.InvoiceResultReturn } };
  /** {@link Taobao.Epp.OrderCreate 淘宝 > epp企业购对接isv订单状态同步} */
  type TaobaoEppOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_epp_OrderCreate', content?: string | Taobao.Epp.OrderCreate } };
  /** {@link Taobao.Epp.PurchaseOrderStatusUpdate 淘宝 > 天猫企业购实物采购单状态变更消息} */
  type TaobaoEppPurchaseOrderStatusUpdate = Message & { content?: MessageContent & { topic?: 'taobao_epp_PurchaseOrderStatusUpdate', content?: string | Taobao.Epp.PurchaseOrderStatusUpdate } };
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
  /** {@link Taobao.Fenxiao.FxOrderTransfered 淘宝分销 > 采购单结算完成} */
  type TaobaoFenxiaoFxOrderTransfered = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxOrderTransfered', content?: string | Taobao.Fenxiao.FxOrderTransfered } };
  /** {@link Taobao.Fenxiao.FxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  type TaobaoFenxiaoFxRefundAgree = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundAgree', content?: string | Taobao.Fenxiao.FxRefundAgree } };
  /** {@link Taobao.Fenxiao.FxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  type TaobaoFenxiaoFxRefundClose = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundClose', content?: string | Taobao.Fenxiao.FxRefundClose } };
  /** {@link Taobao.Fenxiao.FxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  type TaobaoFenxiaoFxRefundCreate = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundCreate', content?: string | Taobao.Fenxiao.FxRefundCreate } };
  /** {@link Taobao.Fenxiao.FxRefundModify 淘宝分销 > 分销退款单修改} */
  type TaobaoFenxiaoFxRefundModify = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundModify', content?: string | Taobao.Fenxiao.FxRefundModify } };
  /** {@link Taobao.Fenxiao.FxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  type TaobaoFenxiaoFxRefundRefuseGoods = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundRefuseGoods', content?: string | Taobao.Fenxiao.FxRefundRefuseGoods } };
  /** {@link Taobao.Fenxiao.FxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  type TaobaoFenxiaoFxRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxRefundSuccess', content?: string | Taobao.Fenxiao.FxRefundSuccess } };
  /** {@link Taobao.Fenxiao.FxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  type TaobaoFenxiaoFxTradeRefundCreate = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxTradeRefundCreate', content?: string | Taobao.Fenxiao.FxTradeRefundCreate } };
  /** {@link Taobao.Fenxiao.FxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  type TaobaoFenxiaoFxTradeRefundSuccess = Message & { content?: MessageContent & { topic?: 'taobao_fenxiao_FxTradeRefundSuccess', content?: string | Taobao.Fenxiao.FxTradeRefundSuccess } };
  /** {@link Taobao.Film.ExternalOrderPush 淘宝 > 淘宝电影tforder消息推送（外部）} */
  type TaobaoFilmExternalOrderPush = Message & { content?: MessageContent & { topic?: 'taobao_film_ExternalOrderPush', content?: string | Taobao.Film.ExternalOrderPush } };
  /** {@link Taobao.Film.OrderPush 淘宝 > 淘宝电影tforder消息推送} */
  type TaobaoFilmOrderPush = Message & { content?: MessageContent & { topic?: 'taobao_film_OrderPush', content?: string | Taobao.Film.OrderPush } };
  /** {@link Taobao.Film.RefundTicketPush 淘宝 > 淘宝电影退票消息推送} */
  type TaobaoFilmRefundTicketPush = Message & { content?: MessageContent & { topic?: 'taobao_film_RefundTicketPush', content?: string | Taobao.Film.RefundTicketPush } };
  /** {@link Taobao.Fliggy.CommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息} */
  type TaobaoFliggyCommonContractSign = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_CommonContractSign', content?: string | Taobao.Fliggy.CommonContractSign } };
  /** {@link Taobao.Fliggy.HspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  type TaobaoFliggyHspHicItemChange = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_HspHicItemChange', content?: string | Taobao.Fliggy.HspHicItemChange } };
  /** {@link Taobao.Fliggy.HspHotelIcItemChange 酒店签约中心消息 > HSP酒店商品库价变更消息} */
  type TaobaoFliggyHspHotelIcItemChange = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_HspHotelIcItemChange', content?: string | Taobao.Fliggy.HspHotelIcItemChange } };
  /** {@link Taobao.Fliggy.MciIndex 酒店签约中心消息 > 商家项目mci} */
  type TaobaoFliggyMciIndex = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_MciIndex', content?: string | Taobao.Fliggy.MciIndex } };
  /** {@link Taobao.Fliggy.SignStatus 酒店签约中心消息 > 飞猪签约状态消息} */
  type TaobaoFliggySignStatus = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_SignStatus', content?: string | Taobao.Fliggy.SignStatus } };
  /** {@link Taobao.Fliggy.StdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息} */
  type TaobaoFliggyStdHotelModify = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_StdHotelModify', content?: string | Taobao.Fliggy.StdHotelModify } };
  /** {@link Taobao.Fliggy.StdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息} */
  type TaobaoFliggyStdRoomTypeModify = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_StdRoomTypeModify', content?: string | Taobao.Fliggy.StdRoomTypeModify } };
  /** {@link Taobao.Fliggy.Sycm 酒店签约中心消息 > 消息推送} */
  type TaobaoFliggySycm = Message & { content?: MessageContent & { topic?: 'taobao_fliggy_Sycm', content?: string | Taobao.Fliggy.Sycm } };
  /** {@link Taobao.Fsc.RouteOrderStatusChange 阿信消息通知前台类目 > 线路订单状态变更通知} */
  type TaobaoFscRouteOrderStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_fsc_RouteOrderStatusChange', content?: string | Taobao.Fsc.RouteOrderStatusChange } };
  /** {@link Taobao.Fuwu.AddressChanged 服务市场 > 收货地址发生变更} */
  type TaobaoFuwuAddressChanged = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_AddressChanged', content?: string | Taobao.Fuwu.AddressChanged } };
  /** {@link Taobao.Fuwu.FundsChange 服务市场 > 以旧换新资金变更通知消息} */
  type TaobaoFuwuFundsChange = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_FundsChange', content?: string | Taobao.Fuwu.FundsChange } };
  /** {@link Taobao.Fuwu.OrderClosed 服务市场 > 订单关闭消息} */
  type TaobaoFuwuOrderClosed = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_OrderClosed', content?: string | Taobao.Fuwu.OrderClosed } };
  /** {@link Taobao.Fuwu.OrderCreated 服务市场 > 订单创建消息} */
  type TaobaoFuwuOrderCreated = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_OrderCreated', content?: string | Taobao.Fuwu.OrderCreated } };
  /** {@link Taobao.Fuwu.OrderPaid 服务市场 > 订单支付消息} */
  type TaobaoFuwuOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_OrderPaid', content?: string | Taobao.Fuwu.OrderPaid } };
  /** {@link Taobao.Fuwu.RecycleFinalService 服务市场 > 以旧换新取送一体服务最终决策通知} */
  type TaobaoFuwuRecycleFinalService = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_RecycleFinalService', content?: string | Taobao.Fuwu.RecycleFinalService } };
  /** {@link Taobao.Fuwu.RecycleOut 服务市场 > 上门换新回收信息} */
  type TaobaoFuwuRecycleOut = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_RecycleOut', content?: string | Taobao.Fuwu.RecycleOut } };
  /** {@link Taobao.Fuwu.ServiceOpen 服务市场 > 服务开通消息} */
  type TaobaoFuwuServiceOpen = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_ServiceOpen', content?: string | Taobao.Fuwu.ServiceOpen } };
  /** {@link Taobao.Fuwu.SubCreated 服务市场 > 订购消息} */
  type TaobaoFuwuSubCreated = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_SubCreated', content?: string | Taobao.Fuwu.SubCreated } };
  /** {@link Taobao.Fuwu.WitkeySyncModeling 服务市场 > 威客同步建模数据} */
  type TaobaoFuwuWitkeySyncModeling = Message & { content?: MessageContent & { topic?: 'taobao_fuwu_WitkeySyncModeling', content?: string | Taobao.Fuwu.WitkeySyncModeling } };
  /** {@link Taobao.Globalbuys.SeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  type TaobaoGlobalbuysSeamailOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_globalbuys_SeamailOrderNotify', content?: string | Taobao.Globalbuys.SeamailOrderNotify } };
  /** {@link Taobao.Homeai.CaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  type TaobaoHomeaiCaseSyncResult = Message & { content?: MessageContent & { topic?: 'taobao_homeai_CaseSyncResult', content?: string | Taobao.Homeai.CaseSyncResult } };
  /** {@link Taobao.Homeai.HomestylerRenderResult HOMEAI消息对接 > 居然极速渲染结果} */
  type TaobaoHomeaiHomestylerRenderResult = Message & { content?: MessageContent & { topic?: 'taobao_homeai_HomestylerRenderResult', content?: string | Taobao.Homeai.HomestylerRenderResult } };
  /** {@link Taobao.Homeai.LayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  type TaobaoHomeaiLayoutTransferResult = Message & { content?: MessageContent & { topic?: 'taobao_homeai_LayoutTransferResult', content?: string | Taobao.Homeai.LayoutTransferResult } };
  /** {@link Taobao.Homeai.ModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系} */
  type TaobaoHomeaiModelSkuRelation = Message & { content?: MessageContent & { topic?: 'taobao_homeai_ModelSkuRelation', content?: string | Taobao.Homeai.ModelSkuRelation } };
  /** {@link Taobao.Homeai.RenderRequest HOMEAI消息对接 > HS渲染消息} */
  type TaobaoHomeaiRenderRequest = Message & { content?: MessageContent & { topic?: 'taobao_homeai_RenderRequest', content?: string | Taobao.Homeai.RenderRequest } };
  /** {@link Taobao.Hotel.ControlMsg 酒店签约中心消息 > 酒店管控中心消息通知} */
  type TaobaoHotelControlMsg = Message & { content?: MessageContent & { topic?: 'taobao_hotel_ControlMsg', content?: string | Taobao.Hotel.ControlMsg } };
  /** {@link Taobao.Hotel.CreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息} */
  type TaobaoHotelCreditToPreHotelStatus = Message & { content?: MessageContent & { topic?: 'taobao_hotel_CreditToPreHotelStatus', content?: string | Taobao.Hotel.CreditToPreHotelStatus } };
  /** {@link Taobao.Hotel.DistributionOrderChange 酒店签约中心消息 > 分销渠道订单变动通知} */
  type TaobaoHotelDistributionOrderChange = Message & { content?: MessageContent & { topic?: 'taobao_hotel_DistributionOrderChange', content?: string | Taobao.Hotel.DistributionOrderChange } };
  /** {@link Taobao.Hotel.EbkCommonMessage 酒店签约中心消息 > 通用消息提醒} */
  type TaobaoHotelEbkCommonMessage = Message & { content?: MessageContent & { topic?: 'taobao_hotel_EbkCommonMessage', content?: string | Taobao.Hotel.EbkCommonMessage } };
  /** {@link Taobao.Hotel.OrderChange 酒店签约中心消息 > 订单变动通知} */
  type TaobaoHotelOrderChange = Message & { content?: MessageContent & { topic?: 'taobao_hotel_OrderChange', content?: string | Taobao.Hotel.OrderChange } };
  /** {@link Taobao.Hotel.SearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息} */
  type TaobaoHotelSearchMonitor = Message & { content?: MessageContent & { topic?: 'taobao_hotel_SearchMonitor', content?: string | Taobao.Hotel.SearchMonitor } };
  /** {@link Taobao.Hotel.SearchTrigger 酒店签约中心消息 > 热搜酒店消息} */
  type TaobaoHotelSearchTrigger = Message & { content?: MessageContent & { topic?: 'taobao_hotel_SearchTrigger', content?: string | Taobao.Hotel.SearchTrigger } };
  /** {@link Taobao.Hotel.SignRollback 酒店签约中心消息 > 飞猪单体酒店签约重置} */
  type TaobaoHotelSignRollback = Message & { content?: MessageContent & { topic?: 'taobao_hotel_SignRollback', content?: string | Taobao.Hotel.SignRollback } };
  /** {@link Taobao.Idlefish.RentContractClose 淘宝 > 合约关闭通知} */
  type TaobaoIdlefishRentContractClose = Message & { content?: MessageContent & { topic?: 'taobao_idlefish_RentContractClose', content?: string | Taobao.Idlefish.RentContractClose } };
  /** {@link Taobao.Idlefish.SellerPaid 淘宝 > 打款给房东消息} */
  type TaobaoIdlefishSellerPaid = Message & { content?: MessageContent & { topic?: 'taobao_idlefish_SellerPaid', content?: string | Taobao.Idlefish.SellerPaid } };
  /** {@link Taobao.Ifashion.ItemAmountChanged 淘宝 > 库存变更} */
  type TaobaoIfashionItemAmountChanged = Message & { content?: MessageContent & { topic?: 'taobao_ifashion_ItemAmountChanged', content?: string | Taobao.Ifashion.ItemAmountChanged } };
  /** {@link Taobao.Ifashion.ItemInfoCreate 淘宝 > 商品基础信息创建} */
  type TaobaoIfashionItemInfoCreate = Message & { content?: MessageContent & { topic?: 'taobao_ifashion_ItemInfoCreate', content?: string | Taobao.Ifashion.ItemInfoCreate } };
  /** {@link Taobao.Ifashion.OrderCreate 淘宝 > 创建单据} */
  type TaobaoIfashionOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_ifashion_OrderCreate', content?: string | Taobao.Ifashion.OrderCreate } };
  /** {@link Taobao.Ihome.AigcTaskChange 淘宝 > aigc任务状态变更} */
  type TaobaoIhomeAigcTaskChange = Message & { content?: MessageContent & { topic?: 'taobao_ihome_AigcTaskChange', content?: string | Taobao.Ihome.AigcTaskChange } };
  /** {@link Taobao.Inventory.ShareInventory 淘宝 > 天猫国际共享库存订单push} */
  type TaobaoInventoryShareInventory = Message & { content?: MessageContent & { topic?: 'taobao_inventory_ShareInventory', content?: string | Taobao.Inventory.ShareInventory } };
  /** {@link Taobao.Istore.GiftingMsg Gifting送礼 > istoreGifing消息} */
  type TaobaoIstoreGiftingMsg = Message & { content?: MessageContent & { topic?: 'taobao_istore_GiftingMsg', content?: string | Taobao.Istore.GiftingMsg } };
  /** {@link Taobao.Item.AuditResultNotify 淘宝商品 > 淘宝商品审核结果消息通知} */
  type TaobaoItemAuditResultNotify = Message & { content?: MessageContent & { topic?: 'taobao_item_AuditResultNotify', content?: string | Taobao.Item.AuditResultNotify } };
  /** {@link Taobao.Item.DistributeItemEdit 淘宝商品 > 商品变更消息通知} */
  type TaobaoItemDistributeItemEdit = Message & { content?: MessageContent & { topic?: 'taobao_item_DistributeItemEdit', content?: string | Taobao.Item.DistributeItemEdit } };
  /** {@link Taobao.Item.ItemAdd 淘宝商品 > 商品新增消息} */
  type TaobaoItemItemAdd = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemAdd', content?: string | Taobao.Item.ItemAdd } };
  /** {@link Taobao.Item.ItemDelete 淘宝商品 > 商品删除消息} */
  type TaobaoItemItemDelete = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemDelete', content?: string | Taobao.Item.ItemDelete } };
  /** {@link Taobao.Item.ItemDownshelf 淘宝商品 > 商品下架消息} */
  type TaobaoItemItemDownshelf = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemDownshelf', content?: string | Taobao.Item.ItemDownshelf } };
  /** {@link Taobao.Item.ItemOfflineNotice 淘宝商品 > 淘宝商品下降消息提醒} */
  type TaobaoItemItemOfflineNotice = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemOfflineNotice', content?: string | Taobao.Item.ItemOfflineNotice } };
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
  /** {@link Taobao.Item.ItemStockChangedOut 淘宝商品 > 淘宝开放平台内部使用库存变更消息out} */
  type TaobaoItemItemStockChangedOut = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemStockChangedOut', content?: string | Taobao.Item.ItemStockChangedOut } };
  /** {@link Taobao.Item.ItemUpdate 淘宝商品 > 商品更新消息} */
  type TaobaoItemItemUpdate = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemUpdate', content?: string | Taobao.Item.ItemUpdate } };
  /** {@link Taobao.Item.ItemUpshelf 淘宝商品 > 商品上架消息} */
  type TaobaoItemItemUpshelf = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemUpshelf', content?: string | Taobao.Item.ItemUpshelf } };
  /** {@link Taobao.Item.ItemZeroStock 淘宝商品 > 商品卖空消息} */
  type TaobaoItemItemZeroStock = Message & { content?: MessageContent & { topic?: 'taobao_item_ItemZeroStock', content?: string | Taobao.Item.ItemZeroStock } };
  /** {@link Taobao.Itemmarket.ItemDistributorChange 淘宝 > 三方货源分销商货品消息} */
  type TaobaoItemmarketItemDistributorChange = Message & { content?: MessageContent & { topic?: 'taobao_itemmarket_ItemDistributorChange', content?: string | Taobao.Itemmarket.ItemDistributorChange } };
  /** {@link Taobao.Itemmarket.ItemRelationChange 淘宝 > 铺货成功推送} */
  type TaobaoItemmarketItemRelationChange = Message & { content?: MessageContent & { topic?: 'taobao_itemmarket_ItemRelationChange', content?: string | Taobao.Itemmarket.ItemRelationChange } };
  /** {@link Taobao.Itemmarket.MaterialChange 淘宝 > 货品素材信息变更} */
  type TaobaoItemmarketMaterialChange = Message & { content?: MessageContent & { topic?: 'taobao_itemmarket_MaterialChange', content?: string | Taobao.Itemmarket.MaterialChange } };
  /** {@link Taobao.Itemmarket.PurchaseDistributorChange 淘宝 > 三方货源分销商采购单消息} */
  type TaobaoItemmarketPurchaseDistributorChange = Message & { content?: MessageContent & { topic?: 'taobao_itemmarket_PurchaseDistributorChange', content?: string | Taobao.Itemmarket.PurchaseDistributorChange } };
  /** {@link Taobao.Itemmarket.PurchaseOrderChange 淘宝 > 三方货源采购单变更} */
  type TaobaoItemmarketPurchaseOrderChange = Message & { content?: MessageContent & { topic?: 'taobao_itemmarket_PurchaseOrderChange', content?: string | Taobao.Itemmarket.PurchaseOrderChange } };
  /** {@link Taobao.Itemmarket.VideoCreate 淘宝 > 货品视频创建} */
  type TaobaoItemmarketVideoCreate = Message & { content?: MessageContent & { topic?: 'taobao_itemmarket_VideoCreate', content?: string | Taobao.Itemmarket.VideoCreate } };
  /** {@link Taobao.Jaq.AuditResult 淘宝 > 聚安全实人认证审核结果} */
  type TaobaoJaqAuditResult = Message & { content?: MessageContent & { topic?: 'taobao_jaq_AuditResult', content?: string | Taobao.Jaq.AuditResult } };
  /** {@link Taobao.Jipiao.AncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  type TaobaoJipiaoAncillaryOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_AncillaryOrderPaid', content?: string | Taobao.Jipiao.AncillaryOrderPaid } };
  /** {@link Taobao.Jipiao.JipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  type TaobaoJipiaoJipiaoModifyOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_JipiaoModifyOrderNotify', content?: string | Taobao.Jipiao.JipiaoModifyOrderNotify } };
  /** {@link Taobao.Jipiao.JipiaoOrderChanged 淘宝机票 > 机票订单变更} */
  type TaobaoJipiaoJipiaoOrderChanged = Message & { content?: MessageContent & { topic?: 'taobao_jipiao_JipiaoOrderChanged', content?: string | Taobao.Jipiao.JipiaoOrderChanged } };
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
  /** {@link Taobao.Kcb.Msg 淘宝 > 库存宝消息} */
  type TaobaoKcbMsg = Message & { content?: MessageContent & { topic?: 'taobao_kcb_Msg', content?: string | Taobao.Kcb.Msg } };
  /** {@link Taobao.Lbs.MonitorPush 淘宝 > 支付宝位移监控消息推送} */
  type TaobaoLbsMonitorPush = Message & { content?: MessageContent & { topic?: 'taobao_lbs_MonitorPush', content?: string | Taobao.Lbs.MonitorPush } };
  /** {@link Taobao.Lbs.UserMonitorPush 淘宝 > 支付宝用户位移消息推送} */
  type TaobaoLbsUserMonitorPush = Message & { content?: MessageContent & { topic?: 'taobao_lbs_UserMonitorPush', content?: string | Taobao.Lbs.UserMonitorPush } };
  /** {@link Taobao.Life.GroupActivityNotify 淘宝 > 本地生活生服拼团活动变更提醒} */
  type TaobaoLifeGroupActivityNotify = Message & { content?: MessageContent & { topic?: 'taobao_life_GroupActivityNotify', content?: string | Taobao.Life.GroupActivityNotify } };
  /** {@link Taobao.Life.Order 淘宝 > 生活服务订单消息订阅} */
  type TaobaoLifeOrder = Message & { content?: MessageContent & { topic?: 'taobao_life_Order', content?: string | Taobao.Life.Order } };
  /** {@link Taobao.Life.OrderNotify 淘宝 > 本地生活生服行业订单触达} */
  type TaobaoLifeOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_life_OrderNotify', content?: string | Taobao.Life.OrderNotify } };
  /** {@link Taobao.Life.StoreInfoChange 淘宝 > 生服门店变更同步消息} */
  type TaobaoLifeStoreInfoChange = Message & { content?: MessageContent & { topic?: 'taobao_life_StoreInfoChange', content?: string | Taobao.Life.StoreInfoChange } };
  /** {@link Taobao.Lifeservice.ItemMsg 淘宝 > 本地生活生服商品消息} */
  type TaobaoLifeserviceItemMsg = Message & { content?: MessageContent & { topic?: 'taobao_lifeservice_ItemMsg', content?: string | Taobao.Lifeservice.ItemMsg } };
  /** {@link Taobao.Live.AgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知} */
  type TaobaoLiveAgencyItemChanged = Message & { content?: MessageContent & { topic?: 'taobao_live_AgencyItemChanged', content?: string | Taobao.Live.AgencyItemChanged } };
  /** {@link Taobao.Live.AlipayStatusChange 淘宝直播API > 淘宝直播开播或关闭} */
  type TaobaoLiveAlipayStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_live_AlipayStatusChange', content?: string | Taobao.Live.AlipayStatusChange } };
  /** {@link Taobao.Live.AnchorRoleChange 淘宝直播API > 主播注册身份时通知} */
  type TaobaoLiveAnchorRoleChange = Message & { content?: MessageContent & { topic?: 'taobao_live_AnchorRoleChange', content?: string | Taobao.Live.AnchorRoleChange } };
  /** {@link Taobao.Live.BdshLiveEventChange 淘宝直播API > 本地生活直播间氛围消息} */
  type TaobaoLiveBdshLiveEventChange = Message & { content?: MessageContent & { topic?: 'taobao_live_BdshLiveEventChange', content?: string | Taobao.Live.BdshLiveEventChange } };
  /** {@link Taobao.Live.BookInfoChange 淘宝直播API > 直播预约信息变更} */
  type TaobaoLiveBookInfoChange = Message & { content?: MessageContent & { topic?: 'taobao_live_BookInfoChange', content?: string | Taobao.Live.BookInfoChange } };
  /** {@link Taobao.Live.FeedRelated 淘宝直播API > 淘宝直播上下播消息} */
  type TaobaoLiveFeedRelated = Message & { content?: MessageContent & { topic?: 'taobao_live_FeedRelated', content?: string | Taobao.Live.FeedRelated } };
  /** {@link Taobao.Live.PrintScreen 淘宝直播API > 淘宝直播结帧} */
  type TaobaoLivePrintScreen = Message & { content?: MessageContent & { topic?: 'taobao_live_PrintScreen', content?: string | Taobao.Live.PrintScreen } };
  /** {@link Taobao.Live.RoomItemChange 淘宝直播API > 直播间添加宝贝} */
  type TaobaoLiveRoomItemChange = Message & { content?: MessageContent & { topic?: 'taobao_live_RoomItemChange', content?: string | Taobao.Live.RoomItemChange } };
  /** {@link Taobao.Live.RoomStatusChange 淘宝直播API > 支付宝直播间状态变更消息} */
  type TaobaoLiveRoomStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_live_RoomStatusChange', content?: string | Taobao.Live.RoomStatusChange } };
  /** {@link Taobao.Live.StatusChange 淘宝直播API > 淘宝直播流状态变更} */
  type TaobaoLiveStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_live_StatusChange', content?: string | Taobao.Live.StatusChange } };
  /** {@link Taobao.Live.TcpOrder 淘宝直播API > 淘宝直播订单消息} */
  type TaobaoLiveTcpOrder = Message & { content?: MessageContent & { topic?: 'taobao_live_TcpOrder', content?: string | Taobao.Live.TcpOrder } };
  /** {@link Taobao.Local.OrderPorcess 淘宝 > 通知58订单发生变化} */
  type TaobaoLocalOrderPorcess = Message & { content?: MessageContent & { topic?: 'taobao_local_OrderPorcess', content?: string | Taobao.Local.OrderPorcess } };
  /** {@link Taobao.Localorder.StatusNotify 淘宝 > 通知到家服务商订单状态变化} */
  type TaobaoLocalorderStatusNotify = Message & { content?: MessageContent & { topic?: 'taobao_localorder_StatusNotify', content?: string | Taobao.Localorder.StatusNotify } };
  /** {@link Taobao.Logistics.Accept 淘宝物流 > 物流揽收} */
  type TaobaoLogisticsAccept = Message & { content?: MessageContent & { topic?: 'taobao_logistics_Accept', content?: string | Taobao.Logistics.Accept } };
  /** {@link Taobao.Logistics.LogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  type TaobaoLogisticsLogsticDetailTrace = Message & { content?: MessageContent & { topic?: 'taobao_logistics_LogsticDetailTrace', content?: string | Taobao.Logistics.LogsticDetailTrace } };
  /** {@link Taobao.Logistics.UnTaobaoLogstic 淘宝物流 > 非淘物流消息} */
  type TaobaoLogisticsUnTaobaoLogstic = Message & { content?: MessageContent & { topic?: 'taobao_logistics_UnTaobaoLogstic', content?: string | Taobao.Logistics.UnTaobaoLogstic } };
  /** {@link Taobao.Miniapp.ArticleContentUnlawful 轻应用 > 小程序文章内容非法} */
  type TaobaoMiniappArticleContentUnlawful = Message & { content?: MessageContent & { topic?: 'taobao_miniapp_ArticleContentUnlawful', content?: string | Taobao.Miniapp.ArticleContentUnlawful } };
  /** {@link Taobao.Miniapp.ItemMsg 轻应用 > 轻交易商品状态同步消息} */
  type TaobaoMiniappItemMsg = Message & { content?: MessageContent & { topic?: 'taobao_miniapp_ItemMsg', content?: string | Taobao.Miniapp.ItemMsg } };
  /** {@link Taobao.Miniapp.RefundMsg 轻应用 > 轻应用轻交易退款消息} */
  type TaobaoMiniappRefundMsg = Message & { content?: MessageContent & { topic?: 'taobao_miniapp_RefundMsg', content?: string | Taobao.Miniapp.RefundMsg } };
  /** {@link Taobao.Miniapp.TradeMsg 轻应用 > 小程序轻应用轻交易的订单状态同步消息} */
  type TaobaoMiniappTradeMsg = Message & { content?: MessageContent & { topic?: 'taobao_miniapp_TradeMsg', content?: string | Taobao.Miniapp.TradeMsg } };
  /** {@link Taobao.Modifyaddress.ResultNotify 聚石塔 > 自助改地址结果消息通知} */
  type TaobaoModifyaddressResultNotify = Message & { content?: MessageContent & { topic?: 'taobao_modifyaddress_ResultNotify', content?: string | Taobao.Modifyaddress.ResultNotify } };
  /** {@link Taobao.Modifyorder.ConsistencyResult 聚石塔 > 订单一致性校验消息} */
  type TaobaoModifyorderConsistencyResult = Message & { content?: MessageContent & { topic?: 'taobao_modifyorder_ConsistencyResult', content?: string | Taobao.Modifyorder.ConsistencyResult } };
  /** {@link Taobao.Modifysku.ResultNotify 聚石塔 > 修改商品信息结果消息} */
  type TaobaoModifyskuResultNotify = Message & { content?: MessageContent & { topic?: 'taobao_modifysku_ResultNotify', content?: string | Taobao.Modifysku.ResultNotify } };
  /** {@link Taobao.Oc.TradeTagChanged 交易全链路 > oc订单标签变更} */
  type TaobaoOcTradeTagChanged = Message & { content?: MessageContent & { topic?: 'taobao_oc_TradeTagChanged', content?: string | Taobao.Oc.TradeTagChanged } };
  /** {@link Taobao.Ofn.CreditPayStatusChange 淘宝交易 > 信用代扣状态变更同步} */
  type TaobaoOfnCreditPayStatusChange = Message & { content?: MessageContent & { topic?: 'taobao_ofn_CreditPayStatusChange', content?: string | Taobao.Ofn.CreditPayStatusChange } };
  /** {@link Taobao.Ofn.NewOrderEventSync 淘宝交易 > 以旧换新新机单事件同步} */
  type TaobaoOfnNewOrderEventSync = Message & { content?: MessageContent & { topic?: 'taobao_ofn_NewOrderEventSync', content?: string | Taobao.Ofn.NewOrderEventSync } };
  /** {@link Taobao.Ofn.OrderStatusSync 淘宝交易 > 以旧换新回收单状态同步} */
  type TaobaoOfnOrderStatusSync = Message & { content?: MessageContent & { topic?: 'taobao_ofn_OrderStatusSync', content?: string | Taobao.Ofn.OrderStatusSync } };
  /** {@link Taobao.Ofn.RateSync 淘宝交易 > 以旧换新回收单评价消息} */
  type TaobaoOfnRateSync = Message & { content?: MessageContent & { topic?: 'taobao_ofn_RateSync', content?: string | Taobao.Ofn.RateSync } };
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
  /** {@link Taobao.Opencrm.MobileRankingReceipt 客户运营平台API > 手机热榜回执消息} */
  type TaobaoOpencrmMobileRankingReceipt = Message & { content?: MessageContent & { topic?: 'taobao_opencrm_MobileRankingReceipt', content?: string | Taobao.Opencrm.MobileRankingReceipt } };
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
  /** {@link Taobao.Opentrade.OrderCreated 百川 > 百川订单创建成功} */
  type TaobaoOpentradeOrderCreated = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_OrderCreated', content?: string | Taobao.Opentrade.OrderCreated } };
  /** {@link Taobao.Opentrade.OrderModified 百川 > 百川订单修改成功} */
  type TaobaoOpentradeOrderModified = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_OrderModified', content?: string | Taobao.Opentrade.OrderModified } };
  /** {@link Taobao.Opentrade.PayOrderCreated 百川 > 百川资金流水单创建成功} */
  type TaobaoOpentradePayOrderCreated = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_PayOrderCreated', content?: string | Taobao.Opentrade.PayOrderCreated } };
  /** {@link Taobao.Opentrade.PayOrderFailed 百川 > 百川资金流水单处理失败} */
  type TaobaoOpentradePayOrderFailed = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_PayOrderFailed', content?: string | Taobao.Opentrade.PayOrderFailed } };
  /** {@link Taobao.Opentrade.PayOrderProceed 百川 > 百川资金流水单处理成功} */
  type TaobaoOpentradePayOrderProceed = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_PayOrderProceed', content?: string | Taobao.Opentrade.PayOrderProceed } };
  /** {@link Taobao.Opentrade.SettleDisburseFailed 百川 > 百川订单分账处理失败} */
  type TaobaoOpentradeSettleDisburseFailed = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_SettleDisburseFailed', content?: string | Taobao.Opentrade.SettleDisburseFailed } };
  /** {@link Taobao.Opentrade.SettleDisburseSucceed 百川 > 百川订单分账处理成功} */
  type TaobaoOpentradeSettleDisburseSucceed = Message & { content?: MessageContent & { topic?: 'taobao_opentrade_SettleDisburseSucceed', content?: string | Taobao.Opentrade.SettleDisburseSucceed } };
  /** {@link Taobao.Os.ActivityCompleted 营销平台 > 前N有礼活动开奖消息} */
  type TaobaoOsActivityCompleted = Message & { content?: MessageContent & { topic?: 'taobao_os_ActivityCompleted', content?: string | Taobao.Os.ActivityCompleted } };
  /** {@link Taobao.Paimai.DigitalTradeSuccess 淘宝 > 阿里拍卖数字商品交易成功消息} */
  type TaobaoPaimaiDigitalTradeSuccess = Message & { content?: MessageContent & { topic?: 'taobao_paimai_DigitalTradeSuccess', content?: string | Taobao.Paimai.DigitalTradeSuccess } };
  /** {@link Taobao.Paimai.OrderCreate 淘宝 > 二手车xpos订单生成消息} */
  type TaobaoPaimaiOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_paimai_OrderCreate', content?: string | Taobao.Paimai.OrderCreate } };
  /** {@link Taobao.Paimai.OrderPaid 淘宝 > 二手车xpos订单支付完成消息} */
  type TaobaoPaimaiOrderPaid = Message & { content?: MessageContent & { topic?: 'taobao_paimai_OrderPaid', content?: string | Taobao.Paimai.OrderPaid } };
  /** {@link Taobao.Profit.ResultNotify 淘宝 > 权益领取结果通知} */
  type TaobaoProfitResultNotify = Message & { content?: MessageContent & { topic?: 'taobao_profit_ResultNotify', content?: string | Taobao.Profit.ResultNotify } };
  /** {@link Taobao.Punish.Forall 淘宝 > 淘宝处罚消息} */
  type TaobaoPunishForall = Message & { content?: MessageContent & { topic?: 'taobao_punish_Forall', content?: string | Taobao.Punish.Forall } };
  /** {@link Taobao.Qianniu.CreateComment 千牛 > 工单评论} */
  type TaobaoQianniuCreateComment = Message & { content?: MessageContent & { topic?: 'taobao_qianniu_CreateComment', content?: string | Taobao.Qianniu.CreateComment } };
  /** {@link Taobao.Qianniu.CreateLog 千牛 > 工单操作记录} */
  type TaobaoQianniuCreateLog = Message & { content?: MessageContent & { topic?: 'taobao_qianniu_CreateLog', content?: string | Taobao.Qianniu.CreateLog } };
  /** {@link Taobao.Qianniu.CreateTask 千牛 > 工单创建消息} */
  type TaobaoQianniuCreateTask = Message & { content?: MessageContent & { topic?: 'taobao_qianniu_CreateTask', content?: string | Taobao.Qianniu.CreateTask } };
  /** {@link Taobao.Rdc.AgDealRefund 淘宝 > AG退款处理} */
  type TaobaoRdcAgDealRefund = Message & { content?: MessageContent & { topic?: 'taobao_rdc_AgDealRefund', content?: string | Taobao.Rdc.AgDealRefund } };
  /** {@link Taobao.Rdcaligenius.OrderMsgSend 淘宝交易 > 订单消息} */
  type TaobaoRdcaligeniusOrderMsgSend = Message & { content?: MessageContent & { topic?: 'taobao_rdcaligenius_OrderMsgSend', content?: string | Taobao.Rdcaligenius.OrderMsgSend } };
  /** {@link Taobao.Recycle.OfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  type TaobaoRecycleOfnPreRedPacketSync = Message & { content?: MessageContent & { topic?: 'taobao_recycle_OfnPreRedPacketSync', content?: string | Taobao.Recycle.OfnPreRedPacketSync } };
  /** {@link Taobao.Refund.OrderStatusSync 淘宝退款 > 逆向订单数据同步} */
  type TaobaoRefundOrderStatusSync = Message & { content?: MessageContent & { topic?: 'taobao_refund_OrderStatusSync', content?: string | Taobao.Refund.OrderStatusSync } };
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
  /** {@link Taobao.Refund.RefundTimeoutRemind 淘宝退款 > 消息已下线} */
  type TaobaoRefundRefundTimeoutRemind = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundTimeoutRemind', content?: string | Taobao.Refund.RefundTimeoutRemind } };
  /** {@link Taobao.Refund.RefundableCanceled 淘宝退款 > 退款标记取消消息} */
  type TaobaoRefundRefundableCanceled = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundableCanceled', content?: string | Taobao.Refund.RefundableCanceled } };
  /** {@link Taobao.Refund.RefundableMarked 淘宝退款 > 退款标记创建消息} */
  type TaobaoRefundRefundableMarked = Message & { content?: MessageContent & { topic?: 'taobao_refund_RefundableMarked', content?: string | Taobao.Refund.RefundableMarked } };
  /** {@link Taobao.Refund.TaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  type TaobaoRefundTaobaoInterApplied = Message & { content?: MessageContent & { topic?: 'taobao_refund_TaobaoInterApplied', content?: string | Taobao.Refund.TaobaoInterApplied } };
  /** {@link Taobao.Refund.TaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  type TaobaoRefundTaobaoIntervened = Message & { content?: MessageContent & { topic?: 'taobao_refund_TaobaoIntervened', content?: string | Taobao.Refund.TaobaoIntervened } };
  /** {@link Taobao.Rhino.DeliveryUpdate 智能制造API > 订单发货通知} */
  type TaobaoRhinoDeliveryUpdate = Message & { content?: MessageContent & { topic?: 'taobao_rhino_DeliveryUpdate', content?: string | Taobao.Rhino.DeliveryUpdate } };
  /** {@link Taobao.Rhino.DeviceStatus 智能制造API > 智能制造-设备状态变更} */
  type TaobaoRhinoDeviceStatus = Message & { content?: MessageContent & { topic?: 'taobao_rhino_DeviceStatus', content?: string | Taobao.Rhino.DeviceStatus } };
  /** {@link Taobao.Rhino.IntegrationCutProgressUpdateMessage 智能制造API > 裁剪进度变更消息} */
  type TaobaoRhinoIntegrationCutProgressUpdateMessage = Message & { content?: MessageContent & { topic?: 'taobao_rhino_IntegrationCutProgressUpdateMessage', content?: string | Taobao.Rhino.IntegrationCutProgressUpdateMessage } };
  /** {@link Taobao.Rhino.IntegrationOrderProcessUpdateMessage 智能制造API > 订单工序变更通知消息} */
  type TaobaoRhinoIntegrationOrderProcessUpdateMessage = Message & { content?: MessageContent & { topic?: 'taobao_rhino_IntegrationOrderProcessUpdateMessage', content?: string | Taobao.Rhino.IntegrationOrderProcessUpdateMessage } };
  /** {@link Taobao.Rhino.IntegrationOuterOrderCreateMessage 智能制造API > 外协订单创建消息通知} */
  type TaobaoRhinoIntegrationOuterOrderCreateMessage = Message & { content?: MessageContent & { topic?: 'taobao_rhino_IntegrationOuterOrderCreateMessage', content?: string | Taobao.Rhino.IntegrationOuterOrderCreateMessage } };
  /** {@link Taobao.Rhino.IntegrationOuterProgressUpdateMessage 智能制造API > 外协进度变更消息} */
  type TaobaoRhinoIntegrationOuterProgressUpdateMessage = Message & { content?: MessageContent & { topic?: 'taobao_rhino_IntegrationOuterProgressUpdateMessage', content?: string | Taobao.Rhino.IntegrationOuterProgressUpdateMessage } };
  /** {@link Taobao.Rhino.OrderStatusUpdate 智能制造API > 生产订单状态变化通知} */
  type TaobaoRhinoOrderStatusUpdate = Message & { content?: MessageContent & { topic?: 'taobao_rhino_OrderStatusUpdate', content?: string | Taobao.Rhino.OrderStatusUpdate } };
  /** {@link Taobao.Rhino.PurchaseOrderCreate 智能制造API > 犀牛制造采购订单创建} */
  type TaobaoRhinoPurchaseOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_rhino_PurchaseOrderCreate', content?: string | Taobao.Rhino.PurchaseOrderCreate } };
  /** {@link Taobao.Rhino.QcResultUpdate 智能制造API > 犀牛智造自动验布机质检结果更新消息} */
  type TaobaoRhinoQcResultUpdate = Message & { content?: MessageContent & { topic?: 'taobao_rhino_QcResultUpdate', content?: string | Taobao.Rhino.QcResultUpdate } };
  /** {@link Taobao.Rhino.WarehouseUpdate 智能制造API > 订单入库通知} */
  type TaobaoRhinoWarehouseUpdate = Message & { content?: MessageContent & { topic?: 'taobao_rhino_WarehouseUpdate', content?: string | Taobao.Rhino.WarehouseUpdate } };
  /** {@link Taobao.Sec.WlcAlipaySync 淘宝 > 无量尺风控信息同步支付宝} */
  type TaobaoSecWlcAlipaySync = Message & { content?: MessageContent & { topic?: 'taobao_sec_WlcAlipaySync', content?: string | Taobao.Sec.WlcAlipaySync } };
  /** {@link Taobao.Shop.Vary 淘宝 > 淘宝店铺变更} */
  type TaobaoShopVary = Message & { content?: MessageContent & { topic?: 'taobao_shop_Vary', content?: string | Taobao.Shop.Vary } };
  /** {@link Taobao.Shoptransfer.UniTrans 淘宝 > 过户结果消息} */
  type TaobaoShoptransferUniTrans = Message & { content?: MessageContent & { topic?: 'taobao_shoptransfer_UniTrans', content?: string | Taobao.Shoptransfer.UniTrans } };
  /** {@link Taobao.Sinian.Test 淘宝 > 似年测试消息服务} */
  type TaobaoSinianTest = Message & { content?: MessageContent & { topic?: 'taobao_sinian_Test', content?: string | Taobao.Sinian.Test } };
  /** {@link Taobao.Smartapp.AppSubChange 平台消息 > 用户订阅变更消息} */
  type TaobaoSmartappAppSubChange = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_AppSubChange', content?: string | Taobao.Smartapp.AppSubChange } };
  /** {@link Taobao.Smartapp.DataSync 平台消息 > 智能应用服务登记数据变更消息} */
  type TaobaoSmartappDataSync = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_DataSync', content?: string | Taobao.Smartapp.DataSync } };
  /** {@link Taobao.Smartapp.DiagnosticMetrics 平台消息 > 智能应用开放生意参谋诊断指标} */
  type TaobaoSmartappDiagnosticMetrics = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_DiagnosticMetrics', content?: string | Taobao.Smartapp.DiagnosticMetrics } };
  /** {@link Taobao.Smartapp.OrderAlert 平台消息 > 淘宝智能应用订单预警事件} */
  type TaobaoSmartappOrderAlert = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_OrderAlert', content?: string | Taobao.Smartapp.OrderAlert } };
  /** {@link Taobao.Smartapp.PresellEnd 平台消息 > 淘宝智能应用预售尾款截止短信催付} */
  type TaobaoSmartappPresellEnd = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_PresellEnd', content?: string | Taobao.Smartapp.PresellEnd } };
  /** {@link Taobao.Smartapp.PresellStart 平台消息 > 淘宝智能应用预售开始短信催付} */
  type TaobaoSmartappPresellStart = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_PresellStart', content?: string | Taobao.Smartapp.PresellStart } };
  /** {@link Taobao.Smartapp.SchedulerTask 平台消息 > 定时任务消息} */
  type TaobaoSmartappSchedulerTask = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_SchedulerTask', content?: string | Taobao.Smartapp.SchedulerTask } };
  /** {@link Taobao.Smartapp.SendMsg 平台消息 > 淘宝智能应用短信发送触发} */
  type TaobaoSmartappSendMsg = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_SendMsg', content?: string | Taobao.Smartapp.SendMsg } };
  /** {@link Taobao.Smartapp.TableSync 平台消息 > 智能应用服务登记工作表变更消息} */
  type TaobaoSmartappTableSync = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_TableSync', content?: string | Taobao.Smartapp.TableSync } };
  /** {@link Taobao.Smartapp.WorktableRecord 平台消息 > 智能应用工作表数据操作消息} */
  type TaobaoSmartappWorktableRecord = Message & { content?: MessageContent & { topic?: 'taobao_smartapp_WorktableRecord', content?: string | Taobao.Smartapp.WorktableRecord } };
  /** {@link Taobao.Smartmall.ItemAssigned 淘宝 > 商品已分配消息} */
  type TaobaoSmartmallItemAssigned = Message & { content?: MessageContent & { topic?: 'taobao_smartmall_ItemAssigned', content?: string | Taobao.Smartmall.ItemAssigned } };
  /** {@link Taobao.Smartmall.Logistic 淘宝 > 发货物流通知} */
  type TaobaoSmartmallLogistic = Message & { content?: MessageContent & { topic?: 'taobao_smartmall_Logistic', content?: string | Taobao.Smartmall.Logistic } };
  /** {@link Taobao.Smartmall.PaySuccess 淘宝 > 付款成功消息} */
  type TaobaoSmartmallPaySuccess = Message & { content?: MessageContent & { topic?: 'taobao_smartmall_PaySuccess', content?: string | Taobao.Smartmall.PaySuccess } };
  /** {@link Taobao.Supp.Payment 淘宝 > 猫超供应链打款} */
  type TaobaoSuppPayment = Message & { content?: MessageContent & { topic?: 'taobao_supp_Payment', content?: string | Taobao.Supp.Payment } };
  /** {@link Taobao.Survey.AnswerNotify 淘宝 > 悉牛问卷答案提交通知} */
  type TaobaoSurveyAnswerNotify = Message & { content?: MessageContent & { topic?: 'taobao_survey_AnswerNotify', content?: string | Taobao.Survey.AnswerNotify } };
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
  /** {@link Taobao.Tae.ItemDelete 导购平台 > 商品删除消息} */
  type TaobaoTaeItemDelete = Message & { content?: MessageContent & { topic?: 'taobao_tae_ItemDelete', content?: string | Taobao.Tae.ItemDelete } };
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
  /** {@link Taobao.Taotv.VideoInvalid 淘宝电视 > 媒资视频下线消息} */
  type TaobaoTaotvVideoInvalid = Message & { content?: MessageContent & { topic?: 'taobao_taotv_VideoInvalid', content?: string | Taobao.Taotv.VideoInvalid } };
  /** {@link Taobao.Taotv.VideoPublish 淘宝电视 > 媒资视频上线消息} */
  type TaobaoTaotvVideoPublish = Message & { content?: MessageContent & { topic?: 'taobao_taotv_VideoPublish', content?: string | Taobao.Taotv.VideoPublish } };
  /** {@link Taobao.Tbk.ContentMsgGet 淘宝 > 媒体内容消息接收API} */
  type TaobaoTbkContentMsgGet = Message & { content?: MessageContent & { topic?: 'taobao_tbk_ContentMsgGet', content?: string | Taobao.Tbk.ContentMsgGet } };
  /** {@link Taobao.Tbk.ItemMaterialPush 淘宝 > 淘宝联盟官方单品物料推送} */
  type TaobaoTbkItemMaterialPush = Message & { content?: MessageContent & { topic?: 'taobao_tbk_ItemMaterialPush', content?: string | Taobao.Tbk.ItemMaterialPush } };
  /** {@link Taobao.Tbk.JINGCAITOUTIAOTljReport 淘宝 > 淘礼金实时报表} */
  type TaobaoTbkJINGCAITOUTIAOTljReport = Message & { content?: MessageContent & { topic?: 'taobao_tbk_JINGCAITOUTIAOTljReport', content?: string | Taobao.Tbk.JINGCAITOUTIAOTljReport } };
  /** {@link Taobao.Tbk.JUXIAOXITljReport 淘宝 > 淘礼金实时报表} */
  type TaobaoTbkJUXIAOXITljReport = Message & { content?: MessageContent & { topic?: 'taobao_tbk_JUXIAOXITljReport', content?: string | Taobao.Tbk.JUXIAOXITljReport } };
  /** {@link Taobao.Tbk.MENGXIAOMITljReport 淘宝 > 淘礼金实时报表} */
  type TaobaoTbkMENGXIAOMITljReport = Message & { content?: MessageContent & { topic?: 'taobao_tbk_MENGXIAOMITljReport', content?: string | Taobao.Tbk.MENGXIAOMITljReport } };
  /** {@link Taobao.Tbk.PubOrderDispatch 淘宝 > 淘宝客-服务商-pub派单消息发送} */
  type TaobaoTbkPubOrderDispatch = Message & { content?: MessageContent & { topic?: 'taobao_tbk_PubOrderDispatch', content?: string | Taobao.Tbk.PubOrderDispatch } };
  /** {@link Taobao.Tbk.YOUSHITljReport 淘宝 > 淘礼金报表API} */
  type TaobaoTbkYOUSHITljReport = Message & { content?: MessageContent & { topic?: 'taobao_tbk_YOUSHITljReport', content?: string | Taobao.Tbk.YOUSHITljReport } };
  /** {@link Taobao.Tc.MaterialStock 淘宝 > 物资库存变动} */
  type TaobaoTcMaterialStock = Message & { content?: MessageContent & { topic?: 'taobao_tc_MaterialStock', content?: string | Taobao.Tc.MaterialStock } };
  /** {@link Taobao.Test.ChengfeiDirect 淘宝 > taobao_test_ChengfeiDirect} */
  type TaobaoTestChengfeiDirect = Message & { content?: MessageContent & { topic?: 'taobao_test_ChengfeiDirect', content?: string | Taobao.Test.ChengfeiDirect } };
  /** {@link Taobao.Test.EventScheduleOne 淘宝 > taobao_test_EventScheduleOne} */
  type TaobaoTestEventScheduleOne = Message & { content?: MessageContent & { topic?: 'taobao_test_EventScheduleOne', content?: string | Taobao.Test.EventScheduleOne } };
  /** {@link Taobao.Test.EventScheduleThree 淘宝 > taobao_test_EventScheduleThree} */
  type TaobaoTestEventScheduleThree = Message & { content?: MessageContent & { topic?: 'taobao_test_EventScheduleThree', content?: string | Taobao.Test.EventScheduleThree } };
  /** {@link Taobao.Test.EventScheduleTwo 淘宝 > taobao_test_EventScheduleTwo} */
  type TaobaoTestEventScheduleTwo = Message & { content?: MessageContent & { topic?: 'taobao_test_EventScheduleTwo', content?: string | Taobao.Test.EventScheduleTwo } };
  /** {@link Taobao.Test.HelloWorld 淘宝 > taobao_test_hellollll} */
  type TaobaoTestHelloWorld = Message & { content?: MessageContent & { topic?: 'taobao_test_HelloWorld', content?: string | Taobao.Test.HelloWorld } };
  /** {@link Taobao.Test.TaoNodeTopic 淘宝 > 物流消息taobao_test_logistics_TaoNodeTopic} */
  type TaobaoTestTaoNodeTopic = Message & { content?: MessageContent & { topic?: 'taobao_test_TaoNodeTopic', content?: string | Taobao.Test.TaoNodeTopic } };
  /** {@link Taobao.Top.AuthCancel 平台消息 > 取消授权消息通知} */
  type TaobaoTopAuthCancel = Message & { content?: MessageContent & { topic?: 'taobao_top_AuthCancel', content?: string | Taobao.Top.AuthCancel } };
  /** {@link Taobao.Top.MqfNotify 平台消息 > mqf消息通道} */
  type TaobaoTopMqfNotify = Message & { content?: MessageContent & { topic?: 'taobao_top_MqfNotify', content?: string | Taobao.Top.MqfNotify } };
  /** {@link Taobao.Top.OnsSinianTest 平台消息 > 似年测试ONS} */
  type TaobaoTopOnsSinianTest = Message & { content?: MessageContent & { topic?: 'taobao_top_OnsSinianTest', content?: string | Taobao.Top.OnsSinianTest } };
  /** {@link Taobao.Top.Onstest 平台消息 > 承仙测试ons} */
  type TaobaoTopOnstest = Message & { content?: MessageContent & { topic?: 'taobao_top_Onstest', content?: string | Taobao.Top.Onstest } };
  /** {@link Taobao.Top.ProcessCallback 平台消息 > 工作流执行回调消息} */
  type TaobaoTopProcessCallback = Message & { content?: MessageContent & { topic?: 'taobao_top_ProcessCallback', content?: string | Taobao.Top.ProcessCallback } };
  /** {@link Taobao.Top.SellerFeedbackQuery 平台消息 > 三方应用质量——商家反馈查询} */
  type TaobaoTopSellerFeedbackQuery = Message & { content?: MessageContent & { topic?: 'taobao_top_SellerFeedbackQuery', content?: string | Taobao.Top.SellerFeedbackQuery } };
  /** {@link Taobao.Top.TdpCheckOrderAdvance 平台消息 > 淘宝-开放平台-数据推送-对单架构升级-对单任务消息} */
  type TaobaoTopTdpCheckOrderAdvance = Message & { content?: MessageContent & { topic?: 'taobao_top_TdpCheckOrderAdvance', content?: string | Taobao.Top.TdpCheckOrderAdvance } };
  /** {@link Taobao.Topadmin.HelloWorld 淘宝 > 友仔消息测试} */
  type TaobaoTopadminHelloWorld = Message & { content?: MessageContent & { topic?: 'taobao_topadmin_HelloWorld', content?: string | Taobao.Topadmin.HelloWorld } };
  /** {@link Taobao.Topats.TaskComplete 平台消息 > 异步任务执行完成} */
  type TaobaoTopatsTaskComplete = Message & { content?: MessageContent & { topic?: 'taobao_topats_TaskComplete', content?: string | Taobao.Topats.TaskComplete } };
  /** {@link Taobao.Trade.AdvanceDisburse 淘宝交易 > 订单极速放款成功消息} */
  type TaobaoTradeAdvanceDisburse = Message & { content?: MessageContent & { topic?: 'taobao_trade_AdvanceDisburse', content?: string | Taobao.Trade.AdvanceDisburse } };
  /** {@link Taobao.Trade.DoorInstallsettle 淘宝交易 > 淘宝上门安装服务费用结算} */
  type TaobaoTradeDoorInstallsettle = Message & { content?: MessageContent & { topic?: 'taobao_trade_DoorInstallsettle', content?: string | Taobao.Trade.DoorInstallsettle } };
  /** {@link Taobao.Trade.FiveApi 淘宝交易 > 第五个测试API} */
  type TaobaoTradeFiveApi = Message & { content?: MessageContent & { topic?: 'taobao_trade_FiveApi', content?: string | Taobao.Trade.FiveApi } };
  /** {@link Taobao.Trade.OpenTradePush 淘宝交易 > 开放交易推进消息} */
  type TaobaoTradeOpenTradePush = Message & { content?: MessageContent & { topic?: 'taobao_trade_OpenTradePush', content?: string | Taobao.Trade.OpenTradePush } };
  /** {@link Taobao.Trade.SecondApi 淘宝交易 > 第二个测试API} */
  type TaobaoTradeSecondApi = Message & { content?: MessageContent & { topic?: 'taobao_trade_SecondApi', content?: string | Taobao.Trade.SecondApi } };
  /** {@link Taobao.Trade.Test 淘宝交易 > 挚涵消息测试} */
  type TaobaoTradeTest = Message & { content?: MessageContent & { topic?: 'taobao_trade_Test', content?: string | Taobao.Trade.Test } };
  /** {@link Taobao.Trade.TestFour 淘宝交易 > taobao_trade_TestFour} */
  type TaobaoTradeTestFour = Message & { content?: MessageContent & { topic?: 'taobao_trade_TestFour', content?: string | Taobao.Trade.TestFour } };
  /** {@link Taobao.Trade.ThirdApi 淘宝交易 > 第三个测试API} */
  type TaobaoTradeThirdApi = Message & { content?: MessageContent & { topic?: 'taobao_trade_ThirdApi', content?: string | Taobao.Trade.ThirdApi } };
  /** {@link Taobao.Trade.TradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  type TaobaoTradeTradeAlipayCreate = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeAlipayCreate', content?: string | Taobao.Trade.TradeAlipayCreate } };
  /** {@link Taobao.Trade.TradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  type TaobaoTradeTradeBuyerPay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeBuyerPay', content?: string | Taobao.Trade.TradeBuyerPay } };
  /** {@link Taobao.Trade.TradeBuyerPaySubOut 淘宝交易 > 子订单维度付款消息（对外）} */
  type TaobaoTradeTradeBuyerPaySubOut = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeBuyerPaySubOut', content?: string | Taobao.Trade.TradeBuyerPaySubOut } };
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
  /** {@link Taobao.Trade.TradeCreateDelay 淘宝交易 > 创建淘宝交易延迟消息} */
  type TaobaoTradeTradeCreateDelay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeCreateDelay', content?: string | Taobao.Trade.TradeCreateDelay } };
  /** {@link Taobao.Trade.TradeCreatess 淘宝交易 > 双} */
  type TaobaoTradeTradeCreatess = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeCreatess', content?: string | Taobao.Trade.TradeCreatess } };
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
  /** {@link Taobao.Trade.TradePeriodSuccess 淘宝交易 > 交易阶段成功消息} */
  type TaobaoTradeTradePeriodSuccess = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradePeriodSuccess', content?: string | Taobao.Trade.TradePeriodSuccess } };
  /** {@link Taobao.Trade.TradeRated 淘宝交易 > 交易评价变更消息} */
  type TaobaoTradeTradeRated = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeRated', content?: string | Taobao.Trade.TradeRated } };
  /** {@link Taobao.Trade.TradeRatedOut 淘宝交易 > 淘宝开发平台内部使用评价变更消息out} */
  type TaobaoTradeTradeRatedOut = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeRatedOut', content?: string | Taobao.Trade.TradeRatedOut } };
  /** {@link Taobao.Trade.TradeSellerShip 淘宝交易 > 卖家发货消息} */
  type TaobaoTradeTradeSellerShip = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeSellerShip', content?: string | Taobao.Trade.TradeSellerShip } };
  /** {@link Taobao.Trade.TradeSuccess 淘宝交易 > 交易成功消息} */
  type TaobaoTradeTradeSuccess = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeSuccess', content?: string | Taobao.Trade.TradeSuccess } };
  /** {@link Taobao.Trade.TradeSuccessDelay 淘宝交易 > 交易成功延迟消息} */
  type TaobaoTradeTradeSuccessDelay = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeSuccessDelay', content?: string | Taobao.Trade.TradeSuccessDelay } };
  /** {@link Taobao.Trade.TradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  type TaobaoTradeTradeTimeoutRemind = Message & { content?: MessageContent & { topic?: 'taobao_trade_TradeTimeoutRemind', content?: string | Taobao.Trade.TradeTimeoutRemind } };
  /** {@link Taobao.Trade.Zhihan 淘宝交易 > API测试} */
  type TaobaoTradeZhihan = Message & { content?: MessageContent & { topic?: 'taobao_trade_Zhihan', content?: string | Taobao.Trade.Zhihan } };
  /** {@link Taobao.Traderate.ImprBadTag 淘宝 > 负面印象评价消息} */
  type TaobaoTraderateImprBadTag = Message & { content?: MessageContent & { topic?: 'taobao_traderate_ImprBadTag', content?: string | Taobao.Traderate.ImprBadTag } };
  /** {@link Taobao.Train.AgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  type TaobaoTrainAgentQueryInfoNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_AgentQueryInfoNotify', content?: string | Taobao.Train.AgentQueryInfoNotify } };
  /** {@link Taobao.Train.OrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  type TaobaoTrainOrderNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_OrderNotify', content?: string | Taobao.Train.OrderNotify } };
  /** {@link Taobao.Train.ThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  type TaobaoTrainThirdPartyTradeNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_ThirdPartyTradeNotify', content?: string | Taobao.Train.ThirdPartyTradeNotify } };
  /** {@link Taobao.Train.TradeNotify 淘宝火车票 > 火车票订单消息} */
  type TaobaoTrainTradeNotify = Message & { content?: MessageContent & { topic?: 'taobao_train_TradeNotify', content?: string | Taobao.Train.TradeNotify } };
  /** {@link Taobao.Travelticket.MsgTrade 淘宝 > 门票交易消息通知} */
  type TaobaoTravelticketMsgTrade = Message & { content?: MessageContent & { topic?: 'taobao_travelticket_MsgTrade', content?: string | Taobao.Travelticket.MsgTrade } };
  /** {@link Taobao.Trip.PartnerLevelUpMessage 淘宝 > 航旅会员升级消息} */
  type TaobaoTripPartnerLevelUpMessage = Message & { content?: MessageContent & { topic?: 'taobao_trip_PartnerLevelUpMessage', content?: string | Taobao.Trip.PartnerLevelUpMessage } };
  /** {@link Taobao.Trip.UserFlightDelayInsurance 淘宝 > 航旅会员机票延误险消息} */
  type TaobaoTripUserFlightDelayInsurance = Message & { content?: MessageContent & { topic?: 'taobao_trip_UserFlightDelayInsurance', content?: string | Taobao.Trip.UserFlightDelayInsurance } };
  /** {@link Taobao.Uscesl.AlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  type TaobaoUsceslAlarmCreate = Message & { content?: MessageContent & { topic?: 'taobao_uscesl_AlarmCreate', content?: string | Taobao.Uscesl.AlarmCreate } };
  /** {@link Taobao.Uscesl.BindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  type TaobaoUsceslBindResult = Message & { content?: MessageContent & { topic?: 'taobao_uscesl_BindResult', content?: string | Taobao.Uscesl.BindResult } };
  /** {@link Taobao.Usergrowth.IconRelationBind 淘宝 > 金币游戏专用-好友通过之后发消息} */
  type TaobaoUsergrowthIconRelationBind = Message & { content?: MessageContent & { topic?: 'taobao_usergrowth_IconRelationBind', content?: string | Taobao.Usergrowth.IconRelationBind } };
  /** {@link Taobao.Usergrowth.RelationBind 淘宝 > 好友关系确认消息通知} */
  type TaobaoUsergrowthRelationBind = Message & { content?: MessageContent & { topic?: 'taobao_usergrowth_RelationBind', content?: string | Taobao.Usergrowth.RelationBind } };
  /** {@link Taobao.Verify.AuditResult 淘宝 > 实人认证审核结果} */
  type TaobaoVerifyAuditResult = Message & { content?: MessageContent & { topic?: 'taobao_verify_AuditResult', content?: string | Taobao.Verify.AuditResult } };
  /** {@link Taobao.Verify.TokenSend 淘宝 > 发送令牌} */
  type TaobaoVerifyTokenSend = Message & { content?: MessageContent & { topic?: 'taobao_verify_TokenSend', content?: string | Taobao.Verify.TokenSend } };
  /** {@link Taobao.Video.SyncResult 淘宝视频 > 淘视频同步视频接口} */
  type TaobaoVideoSyncResult = Message & { content?: MessageContent & { topic?: 'taobao_video_SyncResult', content?: string | Taobao.Video.SyncResult } };
  /** {@link Taobao.Video.VideoTran 淘宝视频 > 淘宝视频转码结果消息} */
  type TaobaoVideoVideoTran = Message & { content?: MessageContent & { topic?: 'taobao_video_VideoTran', content?: string | Taobao.Video.VideoTran } };
  /** {@link Taobao.Vip.LevelChange 淘宝VIP > 会员身份变化} */
  type TaobaoVipLevelChange = Message & { content?: MessageContent & { topic?: 'taobao_vip_LevelChange', content?: string | Taobao.Vip.LevelChange } };
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
  /** {@link Taobao.Wangwang.OANotify 淘宝 > 主子账号之间旺旺消息发送} */
  type TaobaoWangwangOANotify = Message & { content?: MessageContent & { topic?: 'taobao_wangwang_OANotify', content?: string | Taobao.Wangwang.OANotify } };
  /** {@link Taobao.Wdktms.Deliverer 淘宝 > 配送员消息推送} */
  type TaobaoWdktmsDeliverer = Message & { content?: MessageContent & { topic?: 'taobao_wdktms_Deliverer', content?: string | Taobao.Wdktms.Deliverer } };
  /** {@link Taobao.Wdktms.SendDemand 淘宝 > 运力消息} */
  type TaobaoWdktmsSendDemand = Message & { content?: MessageContent & { topic?: 'taobao_wdktms_SendDemand', content?: string | Taobao.Wdktms.SendDemand } };
  /** {@link Taobao.Wdktms.Waybill 淘宝 > 运单变更消息通知外部系统} */
  type TaobaoWdktmsWaybill = Message & { content?: MessageContent & { topic?: 'taobao_wdktms_Waybill', content?: string | Taobao.Wdktms.Waybill } };
  /** {@link Taobao.Wisdomstore.RecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  type TaobaoWisdomstoreRecognitionNotice = Message & { content?: MessageContent & { topic?: 'taobao_wisdomstore_RecognitionNotice', content?: string | Taobao.Wisdomstore.RecognitionNotice } };
  /** {@link Taobao.Wisdomstore.RecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  type TaobaoWisdomstoreRecognitionPush = Message & { content?: MessageContent & { topic?: 'taobao_wisdomstore_RecognitionPush', content?: string | Taobao.Wisdomstore.RecognitionPush } };
  /** {@link Taobao.Wms.ReserveStatusCallback 淘宝 > WMS预约单状态回传} */
  type TaobaoWmsReserveStatusCallback = Message & { content?: MessageContent & { topic?: 'taobao_wms_ReserveStatusCallback', content?: string | Taobao.Wms.ReserveStatusCallback } };
  /** {@link Taobao.Wms.ReserveStockInOrderConfirm 淘宝 > 到货通知单收货确认} */
  type TaobaoWmsReserveStockInOrderConfirm = Message & { content?: MessageContent & { topic?: 'taobao_wms_ReserveStockInOrderConfirm', content?: string | Taobao.Wms.ReserveStockInOrderConfirm } };
  /** {@link Taobao.Worktable.InsertData 淘宝 > 智能应用工作表数据新增} */
  type TaobaoWorktableInsertData = Message & { content?: MessageContent & { topic?: 'taobao_worktable_InsertData', content?: string | Taobao.Worktable.InsertData } };
  /** {@link Taobao.Wt.OpenTradeMsg 淘宝 > 礼包交易开放消息同步支付宝话费宝侧} */
  type TaobaoWtOpenTradeMsg = Message & { content?: MessageContent & { topic?: 'taobao_wt_OpenTradeMsg', content?: string | Taobao.Wt.OpenTradeMsg } };
  /** {@link Taobao.Wt.OpenTradePreauthorizMsg 淘宝 > 存送业务预授权操作结果通知} */
  type TaobaoWtOpenTradePreauthorizMsg = Message & { content?: MessageContent & { topic?: 'taobao_wt_OpenTradePreauthorizMsg', content?: string | Taobao.Wt.OpenTradePreauthorizMsg } };
  /** {@link Taobao.Wt.OpenTradeTaskMsg 淘宝 > 开放交易任务完成消息} */
  type TaobaoWtOpenTradeTaskMsg = Message & { content?: MessageContent & { topic?: 'taobao_wt_OpenTradeTaskMsg', content?: string | Taobao.Wt.OpenTradeTaskMsg } };
  /** {@link Taobao.Wt.VerifyInform 淘宝 > 阿里通信实人认证主动通知运营商} */
  type TaobaoWtVerifyInform = Message & { content?: MessageContent & { topic?: 'taobao_wt_VerifyInform', content?: string | Taobao.Wt.VerifyInform } };
  /** {@link Taobao.Xhotel.DistributionStdInfoChange 酒店标准库基础信息变更消息 > 通用分销 标准信息变更消息} */
  type TaobaoXhotelDistributionStdInfoChange = Message & { content?: MessageContent & { topic?: 'taobao_xhotel_DistributionStdInfoChange', content?: string | Taobao.Xhotel.DistributionStdInfoChange } };
  /** {@link Taobao.Xianyu.HouseBooking 闲鱼 > 闲鱼房源预约消息} */
  type TaobaoXianyuHouseBooking = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_HouseBooking', content?: string | Taobao.Xianyu.HouseBooking } };
  /** {@link Taobao.Xianyu.RentBillPaid 闲鱼 > 闲鱼租房订单支付} */
  type TaobaoXianyuRentBillPaid = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentBillPaid', content?: string | Taobao.Xianyu.RentBillPaid } };
  /** {@link Taobao.Xianyu.RentContractCreate 闲鱼 > 闲鱼租房合约创建} */
  type TaobaoXianyuRentContractCreate = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentContractCreate', content?: string | Taobao.Xianyu.RentContractCreate } };
  /** {@link Taobao.Xianyu.RentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  type TaobaoXianyuRentalItemReturnCanceled = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalItemReturnCanceled', content?: string | Taobao.Xianyu.RentalItemReturnCanceled } };
  /** {@link Taobao.Xianyu.RentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  type TaobaoXianyuRentalItemReturnReserved = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalItemReturnReserved', content?: string | Taobao.Xianyu.RentalItemReturnReserved } };
  /** {@link Taobao.Xianyu.RentalOrderCanceled 闲鱼 > 租赁订单取消} */
  type TaobaoXianyuRentalOrderCanceled = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalOrderCanceled', content?: string | Taobao.Xianyu.RentalOrderCanceled } };
  /** {@link Taobao.Xianyu.RentalOrderCreated 闲鱼 > 租赁订单创建} */
  type TaobaoXianyuRentalOrderCreated = Message & { content?: MessageContent & { topic?: 'taobao_xianyu_RentalOrderCreated', content?: string | Taobao.Xianyu.RentalOrderCreated } };
  /** {@link Taobao.Xiaoqu.OrderChange 淘宝 > 订单变更通知} */
  type TaobaoXiaoquOrderChange = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderChange', content?: string | Taobao.Xiaoqu.OrderChange } };
  /** {@link Taobao.Xiaoqu.OrderClose 淘宝 > 订单关闭通知} */
  type TaobaoXiaoquOrderClose = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderClose', content?: string | Taobao.Xiaoqu.OrderClose } };
  /** {@link Taobao.Xiaoqu.OrderCreate 淘宝 > 创建订单消息通知} */
  type TaobaoXiaoquOrderCreate = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderCreate', content?: string | Taobao.Xiaoqu.OrderCreate } };
  /** {@link Taobao.Xiaoqu.OrderFinish 淘宝 > 订单正常完成通知} */
  type TaobaoXiaoquOrderFinish = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderFinish', content?: string | Taobao.Xiaoqu.OrderFinish } };
  /** {@link Taobao.Xiaoqu.OrderPackage 淘宝 > 订单打包完成通知} */
  type TaobaoXiaoquOrderPackage = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderPackage', content?: string | Taobao.Xiaoqu.OrderPackage } };
  /** {@link Taobao.Xiaoqu.OrderPay 淘宝 > 买家付款消息通知} */
  type TaobaoXiaoquOrderPay = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderPay', content?: string | Taobao.Xiaoqu.OrderPay } };
  /** {@link Taobao.Xiaoqu.OrderPorcess 淘宝 > 通知合作伙伴订单发生变化} */
  type TaobaoXiaoquOrderPorcess = Message & { content?: MessageContent & { topic?: 'taobao_xiaoqu_OrderPorcess', content?: string | Taobao.Xiaoqu.OrderPorcess } };
  /** {@link Taobao.Xiaowei.Message IOT-智能制造 > 获取推送消息} */
  type TaobaoXiaoweiMessage = Message & { content?: MessageContent & { topic?: 'taobao_xiaowei_Message', content?: string | Taobao.Xiaowei.Message } };
  /** {@link Taobao.Xiaowei.Test IOT-智能制造 > xiaowe测试消息} */
  type TaobaoXiaoweiTest = Message & { content?: MessageContent & { topic?: 'taobao_xiaowei_Test', content?: string | Taobao.Xiaowei.Test } };
  /** {@link Taobao.Yichao.WarrantyCodeStatusUpdate 淘宝 > 蚁巢保修码状态变更消息} */
  type TaobaoYichaoWarrantyCodeStatusUpdate = Message & { content?: MessageContent & { topic?: 'taobao_yichao_WarrantyCodeStatusUpdate', content?: string | Taobao.Yichao.WarrantyCodeStatusUpdate } };
  /** {@link Taobao.Zk.FirstLogisticsNotify 淘宝真酷 > 淘宝真酷一段物流发货消息} */
  type TaobaoZkFirstLogisticsNotify = Message & { content?: MessageContent & { topic?: 'taobao_zk_FirstLogisticsNotify', content?: string | Taobao.Zk.FirstLogisticsNotify } };
  /** {@link Taobao.Zk.FirstLogisticsReceivedNotify 淘宝真酷 > 一段物流签收通知} */
  type TaobaoZkFirstLogisticsReceivedNotify = Message & { content?: MessageContent & { topic?: 'taobao_zk_FirstLogisticsReceivedNotify', content?: string | Taobao.Zk.FirstLogisticsReceivedNotify } };
  /** {@link Taobao.Zk.IdentifyCreate 淘宝真酷 > 淘宝真酷需求鉴别单创建消息} */
  type TaobaoZkIdentifyCreate = Message & { content?: MessageContent & { topic?: 'taobao_zk_IdentifyCreate', content?: string | Taobao.Zk.IdentifyCreate } };
  /** {@link Taobao.Zk.RefundNotify 淘宝真酷 > 真酷鉴定用户退款通知} */
  type TaobaoZkRefundNotify = Message & { content?: MessageContent & { topic?: 'taobao_zk_RefundNotify', content?: string | Taobao.Zk.RefundNotify } };
  /** {@link Taobao.Zk.SecondLogisticsGotNotify 淘宝真酷 > 淘宝真酷二段寄出后揽收通知机构} */
  type TaobaoZkSecondLogisticsGotNotify = Message & { content?: MessageContent & { topic?: 'taobao_zk_SecondLogisticsGotNotify', content?: string | Taobao.Zk.SecondLogisticsGotNotify } };
  /** {@link Taotao.Film.ThirdPartyRefundPush 淘宝 > 退款消息同步} */
  type TaotaoFilmThirdPartyRefundPush = Message & { content?: MessageContent & { topic?: 'taotao_film_ThirdPartyRefundPush', content?: string | Taotao.Film.ThirdPartyRefundPush } };
  /** {@link Tmall.Aliauto.StepOrderPartConfirm 天猫汽车 > 天猫汽车分阶段订单打款消息} */
  type TmallAliautoStepOrderPartConfirm = Message & { content?: MessageContent & { topic?: 'tmall_aliauto_StepOrderPartConfirm', content?: string | Tmall.Aliauto.StepOrderPartConfirm } };
  /** {@link Tmall.Aliauto.StepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  type TmallAliautoStepOrderPartConfirmed = Message & { content?: MessageContent & { topic?: 'tmall_aliauto_StepOrderPartConfirmed', content?: string | Tmall.Aliauto.StepOrderPartConfirmed } };
  /** {@link Tmall.Auto.ServiceReceiptCreate 天猫汽车 > 服务工单创建} */
  type TmallAutoServiceReceiptCreate = Message & { content?: MessageContent & { topic?: 'tmall_auto_ServiceReceiptCreate', content?: string | Tmall.Auto.ServiceReceiptCreate } };
  /** {@link Tmall.Auto.TradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  type TmallAutoTradeModify = Message & { content?: MessageContent & { topic?: 'tmall_auto_TradeModify', content?: string | Tmall.Auto.TradeModify } };
  /** {@link Tmall.Auto.TwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  type TmallAutoTwoWheelsReceiptCreate = Message & { content?: MessageContent & { topic?: 'tmall_auto_TwoWheelsReceiptCreate', content?: string | Tmall.Auto.TwoWheelsReceiptCreate } };
  /** {@link Tmall.Car.AbnormalSettleSeller 天猫汽车 > 天猫汽车安装服务-异常商家上下线通知} */
  type TmallCarAbnormalSettleSeller = Message & { content?: MessageContent & { topic?: 'tmall_car_AbnormalSettleSeller', content?: string | Tmall.Car.AbnormalSettleSeller } };
  /** {@link Tmall.Car.AliapayTelRedPacket 天猫汽车 > 天猫汽车-支付宝手机充值红包发放} */
  type TmallCarAliapayTelRedPacket = Message & { content?: MessageContent & { topic?: 'tmall_car_AliapayTelRedPacket', content?: string | Tmall.Car.AliapayTelRedPacket } };
  /** {@link Tmall.Car.AlipayEvent 天猫汽车 > 天猫汽车触发支付宝事件发奖} */
  type TmallCarAlipayEvent = Message & { content?: MessageContent & { topic?: 'tmall_car_AlipayEvent', content?: string | Tmall.Car.AlipayEvent } };
  /** {@link Tmall.Car.ContractSign 天猫汽车 > 合同签署消息} */
  type TmallCarContractSign = Message & { content?: MessageContent & { topic?: 'tmall_car_ContractSign', content?: string | Tmall.Car.ContractSign } };
  /** {@link Tmall.Car.FinanceMsg 天猫汽车 > 汽车金融消息} */
  type TmallCarFinanceMsg = Message & { content?: MessageContent & { topic?: 'tmall_car_FinanceMsg', content?: string | Tmall.Car.FinanceMsg } };
  /** {@link Tmall.Car.TelCoupon 天猫汽车 > 天猫汽车特惠充} */
  type TmallCarTelCoupon = Message & { content?: MessageContent & { topic?: 'tmall_car_TelCoupon', content?: string | Tmall.Car.TelCoupon } };
  /** {@link Tmall.Carprofile.AuthStatusChangeToISV 天猫 > 用户车辆档案授权状态更新} */
  type TmallCarprofileAuthStatusChangeToISV = Message & { content?: MessageContent & { topic?: 'tmall_carprofile_AuthStatusChangeToISV', content?: string | Tmall.Carprofile.AuthStatusChangeToISV } };
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
  /** {@link Tmall.Fuwu.NewAnomalyRecourseStatusUpdate 天猫服务 > 服务管控消息更新} */
  type TmallFuwuNewAnomalyRecourseStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_NewAnomalyRecourseStatusUpdate', content?: string | Tmall.Fuwu.NewAnomalyRecourseStatusUpdate } };
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
  /** {@link Tmall.Fuwu.WorkcardStatusChange 天猫服务 > 天猫服务任务工单状态更新} */
  type TmallFuwuWorkcardStatusChange = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_WorkcardStatusChange', content?: string | Tmall.Fuwu.WorkcardStatusChange } };
  /** {@link Tmall.Fuwu.WorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  type TmallFuwuWorkcardStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_fuwu_WorkcardStatusUpdate', content?: string | Tmall.Fuwu.WorkcardStatusUpdate } };
  /** {@link Tmall.Homedecorationfuwu.WorkcardStatusUpdateForSeller 天猫 > 天猫家装服务工单状态推送} */
  type TmallHomedecorationfuwuWorkcardStatusUpdateForSeller = Message & { content?: MessageContent & { topic?: 'tmall_homedecorationfuwu_WorkcardStatusUpdateForSeller', content?: string | Tmall.Homedecorationfuwu.WorkcardStatusUpdateForSeller } };
  /** {@link Tmall.Ifpfulfill.ResultNotice 天猫 > 创建订单结果通知接口} */
  type TmallIfpfulfillResultNotice = Message & { content?: MessageContent & { topic?: 'tmall_ifpfulfill_ResultNotice', content?: string | Tmall.Ifpfulfill.ResultNotice } };
  /** {@link Tmall.Jst.BusinessInformationSend 天猫 > 商家消息} */
  type TmallJstBusinessInformationSend = Message & { content?: MessageContent & { topic?: 'tmall_jst_BusinessInformationSend', content?: string | Tmall.Jst.BusinessInformationSend } };
  /** {@link Tmall.Mei.CrmBind 天猫美妆 > 绑定操作通知} */
  type TmallMeiCrmBind = Message & { content?: MessageContent & { topic?: 'tmall_mei_CrmBind', content?: string | Tmall.Mei.CrmBind } };
  /** {@link Tmall.Mei.CrmBindQuery 天猫美妆 > 用户绑定请求} */
  type TmallMeiCrmBindQuery = Message & { content?: MessageContent & { topic?: 'tmall_mei_CrmBindQuery', content?: string | Tmall.Mei.CrmBindQuery } };
  /** {@link Tmall.Mei.CrmMemberQuery 天猫美妆 > 会员信息查询通知} */
  type TmallMeiCrmMemberQuery = Message & { content?: MessageContent & { topic?: 'tmall_mei_CrmMemberQuery', content?: string | Tmall.Mei.CrmMemberQuery } };
  /** {@link Tmall.Mei.GiftExchange 天猫美妆 > 天猫美妆店铺礼品兑换通知} */
  type TmallMeiGiftExchange = Message & { content?: MessageContent & { topic?: 'tmall_mei_GiftExchange', content?: string | Tmall.Mei.GiftExchange } };
  /** {@link Tmall.Mei.MemberRegister 天猫美妆 > 飞行入会消息} */
  type TmallMeiMemberRegister = Message & { content?: MessageContent & { topic?: 'tmall_mei_MemberRegister', content?: string | Tmall.Mei.MemberRegister } };
  /** {@link Tmall.Mei.PointChange 天猫美妆 > 品牌积分变更通知} */
  type TmallMeiPointChange = Message & { content?: MessageContent & { topic?: 'tmall_mei_PointChange', content?: string | Tmall.Mei.PointChange } };
  /** {@link Tmall.Mlh.InseasonUpdateNotify 天猫 > 魅力惠Inseason关键属性变化通知} */
  type TmallMlhInseasonUpdateNotify = Message & { content?: MessageContent & { topic?: 'tmall_mlh_InseasonUpdateNotify', content?: string | Tmall.Mlh.InseasonUpdateNotify } };
  /** {@link Tmall.Mlh.InventorySync 天猫 > 魅力惠分销库存同步} */
  type TmallMlhInventorySync = Message & { content?: MessageContent & { topic?: 'tmall_mlh_InventorySync', content?: string | Tmall.Mlh.InventorySync } };
  /** {@link Tmall.Mlh.OrderCancelNotify 天猫 > 魅力惠订单取消通知} */
  type TmallMlhOrderCancelNotify = Message & { content?: MessageContent & { topic?: 'tmall_mlh_OrderCancelNotify', content?: string | Tmall.Mlh.OrderCancelNotify } };
  /** {@link Tmall.Mlh.OrderDeliveryCallBack 天猫 > 魅力惠发货同步回调消息} */
  type TmallMlhOrderDeliveryCallBack = Message & { content?: MessageContent & { topic?: 'tmall_mlh_OrderDeliveryCallBack', content?: string | Tmall.Mlh.OrderDeliveryCallBack } };
  /** {@link Tmall.Mlh.OrderReturnCallBack 天猫 > 分销消退入库消息} */
  type TmallMlhOrderReturnCallBack = Message & { content?: MessageContent & { topic?: 'tmall_mlh_OrderReturnCallBack', content?: string | Tmall.Mlh.OrderReturnCallBack } };
  /** {@link Tmall.Mlh.POAuditCompletedNotify 天猫 > 魅力惠PO单审批通过消息通知} */
  type TmallMlhPOAuditCompletedNotify = Message & { content?: MessageContent & { topic?: 'tmall_mlh_POAuditCompletedNotify', content?: string | Tmall.Mlh.POAuditCompletedNotify } };
  /** {@link Tmall.Mlh.PoReceivedNotify 天猫 > 魅力惠PO收货消息} */
  type TmallMlhPoReceivedNotify = Message & { content?: MessageContent & { topic?: 'tmall_mlh_PoReceivedNotify', content?: string | Tmall.Mlh.PoReceivedNotify } };
  /** {@link Tmall.Multshop.Msg 天猫 > 多旗舰店签约完成消息} */
  type TmallMultshopMsg = Message & { content?: MessageContent & { topic?: 'tmall_multshop_Msg', content?: string | Tmall.Multshop.Msg } };
  /** {@link Tmall.Nrt.ItemsToEasyHome 新零售终端下行消息 > 商品信息同步} */
  type TmallNrtItemsToEasyHome = Message & { content?: MessageContent & { topic?: 'tmall_nrt_ItemsToEasyHome', content?: string | Tmall.Nrt.ItemsToEasyHome } };
  /** {@link Tmall.Nrt.TcpsDeliveryStatus 新零售终端下行消息 > 天猫同城配送状态消息} */
  type TmallNrtTcpsDeliveryStatus = Message & { content?: MessageContent & { topic?: 'tmall_nrt_TcpsDeliveryStatus', content?: string | Tmall.Nrt.TcpsDeliveryStatus } };
  /** {@link Tmall.Oic.InventoryInbound 天猫 > 天猫货品入库消息} */
  type TmallOicInventoryInbound = Message & { content?: MessageContent & { topic?: 'tmall_oic_InventoryInbound', content?: string | Tmall.Oic.InventoryInbound } };
  /** {@link Tmall.Omnichannel.DiscountedPriceChange 聚石塔 > 商品优惠价格变更} */
  type TmallOmnichannelDiscountedPriceChange = Message & { content?: MessageContent & { topic?: 'tmall_omnichannel_DiscountedPriceChange', content?: string | Tmall.Omnichannel.DiscountedPriceChange } };
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
  /** {@link Tmall.Onehour.ScmItem 天猫 > 货品商品同步} */
  type TmallOnehourScmItem = Message & { content?: MessageContent & { topic?: 'tmall_onehour_ScmItem', content?: string | Tmall.Onehour.ScmItem } };
  /** {@link Tmall.Posfee.Msg 天猫 > 刷卡费率消息} */
  type TmallPosfeeMsg = Message & { content?: MessageContent & { topic?: 'tmall_posfee_Msg', content?: string | Tmall.Posfee.Msg } };
  /** {@link Tmall.Refund.RefundClosed 天猫 > 退款关闭消息} */
  type TmallRefundRefundClosed = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundClosed', content?: string | Tmall.Refund.RefundClosed } };
  /** {@link Tmall.Refund.RefundCreate 天猫 > 退款创建消息} */
  type TmallRefundRefundCreate = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundCreate', content?: string | Tmall.Refund.RefundCreate } };
  /** {@link Tmall.Refund.RefundMessageCreated 天猫 > 创建退款留言消息} */
  type TmallRefundRefundMessageCreated = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundMessageCreated', content?: string | Tmall.Refund.RefundMessageCreated } };
  /** {@link Tmall.Refund.RefundModified 天猫 > 买家修改协议消息} */
  type TmallRefundRefundModified = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundModified', content?: string | Tmall.Refund.RefundModified } };
  /** {@link Tmall.Refund.RefundPaymentFinished 天猫 > 赔付完成消息} */
  type TmallRefundRefundPaymentFinished = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundPaymentFinished', content?: string | Tmall.Refund.RefundPaymentFinished } };
  /** {@link Tmall.Refund.RefundPrepaid 天猫 > 极速退款消息} */
  type TmallRefundRefundPrepaid = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundPrepaid', content?: string | Tmall.Refund.RefundPrepaid } };
  /** {@link Tmall.Refund.RefundSellerAgreeReturn 天猫 > 卖家同意退货消息} */
  type TmallRefundRefundSellerAgreeReturn = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundSellerAgreeReturn', content?: string | Tmall.Refund.RefundSellerAgreeReturn } };
  /** {@link Tmall.Refund.RefundSellerRefuse 天猫 > 卖家拒绝退款消息} */
  type TmallRefundRefundSellerRefuse = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundSellerRefuse', content?: string | Tmall.Refund.RefundSellerRefuse } };
  /** {@link Tmall.Refund.RefundSucceed 天猫 > 退款成功消息} */
  type TmallRefundRefundSucceed = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundSucceed', content?: string | Tmall.Refund.RefundSucceed } };
  /** {@link Tmall.Refund.RefundTaobaoInvolved 天猫 > 小二介入消息} */
  type TmallRefundRefundTaobaoInvolved = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundTaobaoInvolved', content?: string | Tmall.Refund.RefundTaobaoInvolved } };
  /** {@link Tmall.Refund.RefundableCanceled 天猫 > 退款标记取消消息} */
  type TmallRefundRefundableCanceled = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundableCanceled', content?: string | Tmall.Refund.RefundableCanceled } };
  /** {@link Tmall.Refund.RefundableMarked 天猫 > 退款标记创建消息} */
  type TmallRefundRefundableMarked = Message & { content?: MessageContent & { topic?: 'tmall_refund_RefundableMarked', content?: string | Tmall.Refund.RefundableMarked } };
  /** {@link Tmall.Refund.ReturnBuyerReturnGoods 天猫 > 买家退货，填写退货单消息} */
  type TmallRefundReturnBuyerReturnGoods = Message & { content?: MessageContent & { topic?: 'tmall_refund_ReturnBuyerReturnGoods', content?: string | Tmall.Refund.ReturnBuyerReturnGoods } };
  /** {@link Tmall.Refund.ReturnConfirmFailed 天猫 > 买家填写物流单，卖家拒绝退货消息} */
  type TmallRefundReturnConfirmFailed = Message & { content?: MessageContent & { topic?: 'tmall_refund_ReturnConfirmFailed', content?: string | Tmall.Refund.ReturnConfirmFailed } };
  /** {@link Tmall.Refund.ReturnConfirmSucceed 天猫 > 买家填写物流单，卖家确认收货消息} */
  type TmallRefundReturnConfirmSucceed = Message & { content?: MessageContent & { topic?: 'tmall_refund_ReturnConfirmSucceed', content?: string | Tmall.Refund.ReturnConfirmSucceed } };
  /** {@link Tmall.Refund.ReturnCreated 天猫 > 卖家同意退货，退货单创建消息} */
  type TmallRefundReturnCreated = Message & { content?: MessageContent & { topic?: 'tmall_refund_ReturnCreated', content?: string | Tmall.Refund.ReturnCreated } };
  /** {@link Tmall.Refund.ReturnModified 天猫 > 退货单修改消息} */
  type TmallRefundReturnModified = Message & { content?: MessageContent & { topic?: 'tmall_refund_ReturnModified', content?: string | Tmall.Refund.ReturnModified } };
  /** {@link Tmall.Retail.EcRelation 天猫 > 会员管理关系变更同步商家} */
  type TmallRetailEcRelation = Message & { content?: MessageContent & { topic?: 'tmall_retail_EcRelation', content?: string | Tmall.Retail.EcRelation } };
  /** {@link Tmall.Sasssign.Msg 天猫 > sass签约消息} */
  type TmallSasssignMsg = Message & { content?: MessageContent & { topic?: 'tmall_sasssign_Msg', content?: string | Tmall.Sasssign.Msg } };
  /** {@link Tmall.Scm.SendTmcsDistributeSettleFee 天猫 > 猫超经销结算打款消息} */
  type TmallScmSendTmcsDistributeSettleFee = Message & { content?: MessageContent & { topic?: 'tmall_scm_SendTmcsDistributeSettleFee', content?: string | Tmall.Scm.SendTmcsDistributeSettleFee } };
  /** {@link Tmall.Service.CycleBillInvoice 天猫服务 > 服务结算账期账单发票消息} */
  type TmallServiceCycleBillInvoice = Message & { content?: MessageContent & { topic?: 'tmall_service_CycleBillInvoice', content?: string | Tmall.Service.CycleBillInvoice } };
  /** {@link Tmall.Servicecenter.ConsultationMessage 天猫服务 > 咨询工单消息} */
  type TmallServicecenterConsultationMessage = Message & { content?: MessageContent & { topic?: 'tmall_servicecenter_ConsultationMessage', content?: string | Tmall.Servicecenter.ConsultationMessage } };
  /** {@link Tmall.Servicecenter.TaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  type TmallServicecenterTaskUpdate = Message & { content?: MessageContent & { topic?: 'tmall_servicecenter_TaskUpdate', content?: string | Tmall.Servicecenter.TaskUpdate } };
  /** {@link Tmall.Serviceplatform.ServiceProductChanged 天猫服务 > 天猫服务产品变更消息} */
  type TmallServiceplatformServiceProductChanged = Message & { content?: MessageContent & { topic?: 'tmall_serviceplatform_ServiceProductChanged', content?: string | Tmall.Serviceplatform.ServiceProductChanged } };
  /** {@link Tmall.Serviceplatform.SignCreate 天猫服务 > 签到消息} */
  type TmallServiceplatformSignCreate = Message & { content?: MessageContent & { topic?: 'tmall_serviceplatform_SignCreate', content?: string | Tmall.Serviceplatform.SignCreate } };
  /** {@link Tmall.Serviceplatform.SubscribeServiceChanged 天猫服务 > 天猫服务订购消息} */
  type TmallServiceplatformSubscribeServiceChanged = Message & { content?: MessageContent & { topic?: 'tmall_serviceplatform_SubscribeServiceChanged', content?: string | Tmall.Serviceplatform.SubscribeServiceChanged } };
  /** {@link Tmall.Serviceplatform.WorkerLeave 天猫服务 > 工人请假发送消息} */
  type TmallServiceplatformWorkerLeave = Message & { content?: MessageContent & { topic?: 'tmall_serviceplatform_WorkerLeave', content?: string | Tmall.Serviceplatform.WorkerLeave } };
  /** {@link Tmall.Supermarket.HaitunEventCreate 天猫 > 猫超业务支付宝海豚事件创建} */
  type TmallSupermarketHaitunEventCreate = Message & { content?: MessageContent & { topic?: 'tmall_supermarket_HaitunEventCreate', content?: string | Tmall.Supermarket.HaitunEventCreate } };
  /** {@link Tmall.Tccompass.DeliveryRangesUpdate 天猫 > 罗盘变动消息} */
  type TmallTccompassDeliveryRangesUpdate = Message & { content?: MessageContent & { topic?: 'tmall_tccompass_DeliveryRangesUpdate', content?: string | Tmall.Tccompass.DeliveryRangesUpdate } };
  /** {@link Tmall.Tlc.ItemExcelSchemaNotify 天猫 > JV商品发布excel schema生成后通知ISV的消息} */
  type TmallTlcItemExcelSchemaNotify = Message & { content?: MessageContent & { topic?: 'tmall_tlc_ItemExcelSchemaNotify', content?: string | Tmall.Tlc.ItemExcelSchemaNotify } };
  /** {@link Tmall.Tlc.ItemPriceExcelNotify 天猫 > 商品批量改价} */
  type TmallTlcItemPriceExcelNotify = Message & { content?: MessageContent & { topic?: 'tmall_tlc_ItemPriceExcelNotify', content?: string | Tmall.Tlc.ItemPriceExcelNotify } };
  /** {@link Tmall.Tlc.ItemsExcelResultNotify 天猫 > 商品批量发布excel结果反馈消息} */
  type TmallTlcItemsExcelResultNotify = Message & { content?: MessageContent & { topic?: 'tmall_tlc_ItemsExcelResultNotify', content?: string | Tmall.Tlc.ItemsExcelResultNotify } };
  /** {@link Tmall.Tlc.ProductsExcelResultNotify 天猫 > 上传货品详情excel结果生成TOP消息} */
  type TmallTlcProductsExcelResultNotify = Message & { content?: MessageContent & { topic?: 'tmall_tlc_ProductsExcelResultNotify', content?: string | Tmall.Tlc.ProductsExcelResultNotify } };
  /** {@link Tmall.Tlc.ProductsExcelSchemaNotify 天猫 > 货品详情excel模版生成TOP消息} */
  type TmallTlcProductsExcelSchemaNotify = Message & { content?: MessageContent & { topic?: 'tmall_tlc_ProductsExcelSchemaNotify', content?: string | Tmall.Tlc.ProductsExcelSchemaNotify } };
  /** {@link Tmall.Tlc.UpDownItemNotify 天猫 > JV商品上下架通知ISV的消息} */
  type TmallTlcUpDownItemNotify = Message & { content?: MessageContent & { topic?: 'tmall_tlc_UpDownItemNotify', content?: string | Tmall.Tlc.UpDownItemNotify } };
  /** {@link Tmall.Tmg.BrandMemberTrade 天猫 > 天猫国际品牌会员交易消息} */
  type TmallTmgBrandMemberTrade = Message & { content?: MessageContent & { topic?: 'tmall_tmg_BrandMemberTrade', content?: string | Tmall.Tmg.BrandMemberTrade } };
  /** {@link Tmall.Xf.FutureOrders 天猫 > 天猫鞋服期货订单消息} */
  type TmallXfFutureOrders = Message & { content?: MessageContent & { topic?: 'tmall_xf_FutureOrders', content?: string | Tmall.Xf.FutureOrders } };
  /** {@link Tmall.Xf.GoodsInfo 天猫 > 天猫鞋服货品信息回流} */
  type TmallXfGoodsInfo = Message & { content?: MessageContent & { topic?: 'tmall_xf_GoodsInfo', content?: string | Tmall.Xf.GoodsInfo } };
  /** {@link Tmall.Yichao.WorkcardStatusUpdate 天猫服务 > 蚁巢工单更新消息} */
  type TmallYichaoWorkcardStatusUpdate = Message & { content?: MessageContent & { topic?: 'tmall_yichao_WorkcardStatusUpdate', content?: string | Tmall.Yichao.WorkcardStatusUpdate } };
  /** {@link Tmall.Yougou.ItemChange 天猫 > 天猫优购商品变更} */
  type TmallYougouItemChange = Message & { content?: MessageContent & { topic?: 'tmall_yougou_ItemChange', content?: string | Tmall.Yougou.ItemChange } };
  /** {@link Tmall.Yougou.OrderChange 天猫 > 天猫优购订单变更} */
  type TmallYougouOrderChange = Message & { content?: MessageContent & { topic?: 'tmall_yougou_OrderChange', content?: string | Tmall.Yougou.OrderChange } };
  /** {@link Tobao.Live.LiveEventChange 直播间 > 直播间氛围消息开放} */
  type TobaoLiveLiveEventChange = Message & { content?: MessageContent & { topic?: 'tobao_live_LiveEventChange', content?: string | Tobao.Live.LiveEventChange } };
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
  /** {@link Umeng.Oplus.OfflineDataToAlipay 友盟 > 友盟线下数据} */
  type UmengOplusOfflineDataToAlipay = Message & { content?: MessageContent & { topic?: 'umeng_oplus_OfflineDataToAlipay', content?: string | Umeng.Oplus.OfflineDataToAlipay } };
  /** {@link Wdk.Capacity.Delivery 五道口 > 盒马运力消息} */
  type WdkCapacityDelivery = Message & { content?: MessageContent & { topic?: 'wdk_capacity_Delivery', content?: string | Wdk.Capacity.Delivery } };
  /** {@link Wdk.Market.OperateSkuError 五道口营销 > 营销操作错误消息} */
  type WdkMarketOperateSkuError = Message & { content?: MessageContent & { topic?: 'wdk_market_OperateSkuError', content?: string | Wdk.Market.OperateSkuError } };
  /** {@link Wdk.Market.OperateSkuErrror 五道口营销 > 营销发布商品错误} */
  type WdkMarketOperateSkuErrror = Message & { content?: MessageContent & { topic?: 'wdk_market_OperateSkuErrror', content?: string | Wdk.Market.OperateSkuErrror } };
  /** {@link Wdk.Open.DataPublishError 五道口营销 > 五道口开放数据发布错误} */
  type WdkOpenDataPublishError = Message & { content?: MessageContent & { topic?: 'wdk_open_DataPublishError', content?: string | Wdk.Open.DataPublishError } };
  /** {@link Wdk.Open.DataRelation 五道口营销 > 五道口开放数据关联通知} */
  type WdkOpenDataRelation = Message & { content?: MessageContent & { topic?: 'wdk_open_DataRelation', content?: string | Wdk.Open.DataRelation } };
  /** {@link Wdk.Workforce.RequirementPublish 五道口 > 盒马三方用工需求发布} */
  type WdkWorkforceRequirementPublish = Message & { content?: MessageContent & { topic?: 'wdk_workforce_RequirementPublish', content?: string | Wdk.Workforce.RequirementPublish } };
  /** {@link Xhotel.Distribution.StatusChange 飞猪 > 飞猪酒店订单状态变更消息} */
  type XhotelDistributionStatusChange = Message & { content?: MessageContent & { topic?: 'xhotel_distribution_StatusChange', content?: string | Xhotel.Distribution.StatusChange } };
  /** {@link Xianyu.Aftersale.OrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  type XianyuAftersaleOrderSyn = Message & { content?: MessageContent & { topic?: 'xianyu_aftersale_OrderSyn', content?: string | Xianyu.Aftersale.OrderSyn } };
  /** {@link Xianyu.Appraise.OrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  type XianyuAppraiseOrderSyn = Message & { content?: MessageContent & { topic?: 'xianyu_appraise_OrderSyn', content?: string | Xianyu.Appraise.OrderSyn } };
  /** {@link Xianyu.Car.OrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  type XianyuCarOrderStatusSync = Message & { content?: MessageContent & { topic?: 'xianyu_car_OrderStatusSync', content?: string | Xianyu.Car.OrderStatusSync } };
  /** {@link Xianyu.Ctox.CommissionStateSyn 闲鱼 > 闲鱼C2X抽佣退佣消息同步} */
  type XianyuCtoxCommissionStateSyn = Message & { content?: MessageContent & { topic?: 'xianyu_ctox_CommissionStateSyn', content?: string | Xianyu.Ctox.CommissionStateSyn } };
  /** {@link Xianyu.Ctox.PayDkChange 闲鱼 > c2x代扣协议变更通知} */
  type XianyuCtoxPayDkChange = Message & { content?: MessageContent & { topic?: 'xianyu_ctox_PayDkChange', content?: string | Xianyu.Ctox.PayDkChange } };
  /** {@link Xianyu.Ctox.RateStateSyn 闲鱼 > c2x业务订单评价消息同步} */
  type XianyuCtoxRateStateSyn = Message & { content?: MessageContent & { topic?: 'xianyu_ctox_RateStateSyn', content?: string | Xianyu.Ctox.RateStateSyn } };
  /** {@link Xianyu.Environment.EventSyn 闲鱼 > 闲鱼双11公益游戏任务事件同步} */
  type XianyuEnvironmentEventSyn = Message & { content?: MessageContent & { topic?: 'xianyu_environment_EventSyn', content?: string | Xianyu.Environment.EventSyn } };
  /** {@link Xianyu.Fishmarket.ItemSyn 闲鱼 > 鱼市商品状态变更} */
  type XianyuFishmarketItemSyn = Message & { content?: MessageContent & { topic?: 'xianyu_fishmarket_ItemSyn', content?: string | Xianyu.Fishmarket.ItemSyn } };
  /** {@link Xianyu.Isv.OrderRemind 闲鱼 > 闲鱼服务商订单提醒} */
  type XianyuIsvOrderRemind = Message & { content?: MessageContent & { topic?: 'xianyu_isv_OrderRemind', content?: string | Xianyu.Isv.OrderRemind } };
  /** {@link Xianyu.Marketrecycle.OrderStateSyn 闲鱼 > 保卖订单变更通知} */
  type XianyuMarketrecycleOrderStateSyn = Message & { content?: MessageContent & { topic?: 'xianyu_marketrecycle_OrderStateSyn', content?: string | Xianyu.Marketrecycle.OrderStateSyn } };
  /** {@link Xianyu.Marketrecycle.PlanStateSyn 闲鱼 > 闲鱼保卖计划变更消息} */
  type XianyuMarketrecyclePlanStateSyn = Message & { content?: MessageContent & { topic?: 'xianyu_marketrecycle_PlanStateSyn', content?: string | Xianyu.Marketrecycle.PlanStateSyn } };
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
  /** {@link Youku.Aigc.TrainResultNotify 优酷 > 妙鸭SaaS对外开放-训练结果通知} */
  type YoukuAigcTrainResultNotify = Message & { content?: MessageContent & { topic?: 'youku_aigc_TrainResultNotify', content?: string | Youku.Aigc.TrainResultNotify } };
  /** {@link Youku.Tvosappstore.AppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  type YoukuTvosappstoreAppStatusChange = Message & { content?: MessageContent & { topic?: 'youku_tvosappstore_AppStatusChange', content?: string | Youku.Tvosappstore.AppStatusChange } };
  /** {@link Yunos.Watch.CmnsReceive AliOS手表 > 透传cmns接收消息} */
  type YunosWatchCmnsReceive = Message & { content?: MessageContent & { topic?: 'yunos_watch_CmnsReceive', content?: string | Yunos.Watch.CmnsReceive } };
  /** {@link Yunos.Yoc.DatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  type YunosYocDatapoolSandbox = Message & { content?: MessageContent & { topic?: 'yunos_yoc_DatapoolSandbox', content?: string | Yunos.Yoc.DatapoolSandbox } };
  /** {@link Yunos.Yoc.MessageService YunOS YoC > yoc消息服务} */
  type YunosYocMessageService = Message & { content?: MessageContent & { topic?: 'yunos_yoc_MessageService', content?: string | Yunos.Yoc.MessageService } };
  /**
   * - {@link AeLogisticsTrackingNoUpdate AE > 运单号修改}
   */
  type AeLogistics = AeLogisticsTrackingNoUpdate;
  /**
   * - {@link AliFinDybClaimResult 阿里金融 > 阿里场景金融大延保理赔结果通知给服务商}
   */
  type AliFin = AliFinDybClaimResult;
  /**
   * - {@link AliInfodeptCaseFilingInfo 网上法庭 > 网上法庭数据交换消息}
   * - {@link AliInfodeptPreserveEvidence 网上法庭 > 证件保全通知}
   * - {@link AliInfodeptYuncourtMsg 网上法庭 > 网上法庭开放平台消息}
   */
  type AliInfodept = AliInfodeptCaseFilingInfo
    | AliInfodeptPreserveEvidence
    | AliInfodeptYuncourtMsg;
  /**
   * - {@link AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息}
   * - {@link AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新}
   * - {@link AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新}
   * - {@link AlibabaAdlabPackageCheckIn 自动驾驶API > 包裹入库消息}
   */
  type AlibabaAdlab = AlibabaAdlabIotDevice
    | AlibabaAdlabOrderItemEtaUpdate
    | AlibabaAdlabOrderItemStatus
    | AlibabaAdlabPackageCheckIn;
  /**
   * - {@link AlibabaAgroAccountConfirmPrice 蜂巢 > 分销商同意或者拒绝调价}
   * - {@link AlibabaAgroItemPriceChange 蜂巢 > 商品调价通知isv}
   * - {@link AlibabaAgroLogisticsOrderStatusChange 蜂巢 > 子物流单状态变化小}
   * - {@link AlibabaAgroUnpunishProduct 蜂巢 > 取消铺货产品下架}
   */
  type AlibabaAgro = AlibabaAgroAccountConfirmPrice
    | AlibabaAgroItemPriceChange
    | AlibabaAgroLogisticsOrderStatusChange
    | AlibabaAgroUnpunishProduct;
  /**
   * - {@link AlibabaAilabsAutocarNofity 无人车 > 无人车消息推送}
   */
  type AlibabaAilabs = AlibabaAilabsAutocarNofity;
  /**
   * - {@link AlibabaAilbasIotMessage 精灵IOT > 精灵iot消息}
   */
  type AlibabaAilbas = AlibabaAilbasIotMessage;
  /**
   * - {@link AlibabaAisSupplierComponentActualDepartureNote AIS&供应商数据对接 > 部件实际发货通知}
   * - {@link AlibabaAisSupplierComponentDeductionPlanNote AIS&供应商数据对接 > 部件扣料计划反馈通知}
   * - {@link AlibabaAisSupplierComponentEstimatedArrivalNote AIS&供应商数据对接 > 部件预计到货通知-ETA}
   * - {@link AlibabaAisSupplierComponentInventoryNote AIS&供应商数据对接 > 订阅整机库存反馈通知}
   * - {@link AlibabaAisSupplierComponentManufactureOrderNote AIS&供应商数据对接 > 订阅整机生产指令通知}
   * - {@link AlibabaAisSupplierComponentMpnPnNote AIS&供应商数据对接 > 订阅MPN/PN查询通知}
   * - {@link AlibabaAisSupplierComponentPurchaseDirective AIS&供应商数据对接 > 阿里向整机供应商下发部件采购指令}
   */
  type AlibabaAis = AlibabaAisSupplierComponentActualDepartureNote
    | AlibabaAisSupplierComponentDeductionPlanNote
    | AlibabaAisSupplierComponentEstimatedArrivalNote
    | AlibabaAisSupplierComponentInventoryNote
    | AlibabaAisSupplierComponentManufactureOrderNote
    | AlibabaAisSupplierComponentMpnPnNote
    | AlibabaAisSupplierComponentPurchaseDirective;
  /**
   * - {@link AlibabaAliabsTmallSign 蚂蚁安全 > ailabs蚂蚁安全异步消息}
   */
  type AlibabaAliabs = AlibabaAliabsTmallSign;
  /**
   * - {@link AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知}
   */
  type AlibabaAlicom = AlibabaAlicomFlowGiftSendNotify;
  /**
   * - {@link AlibabaAlihealthBillProcessStatusNotify 阿里健康追溯码 > 单据处理状态通知}
   * - {@link AlibabaAlihealthDoctorMessage 阿里健康追溯码 > 医生、服务相关消息}
   * - {@link AlibabaAlihealthMvmBizStatusChange 阿里健康追溯码 > 售药机营业、歇业消息}
   * - {@link AlibabaAlihealthMvmInventorySwitch 阿里健康追溯码 > 售药机商品库存切换}
   * - {@link AlibabaAlihealthMvmOrderNotify 阿里健康追溯码 > 接单/拒单/取货成功/取消订单消息通知}
   * - {@link AlibabaAlihealthMvmOrderOfflineSync 阿里健康追溯码 > 售药机线下订单生成通知}
   * - {@link AlibabaAlihealthMvmShopBindStatusChange 阿里健康追溯码 > 售药机绑定、解绑}
   * - {@link AlibabaAlihealthMvmUpdateInventory 阿里健康追溯码 > 售药机商品上下架}
   * - {@link AlibabaAlihealthNrmopOrderStatusChange 阿里健康追溯码 > 中台订单状态变化推送}
   * - {@link AlibabaAlihealthOrderStatusChange 阿里健康追溯码 > 平台通知三方机构"订单状态变更"}
   * - {@link AlibabaAlihealthPrescriptionConfirm 阿里健康追溯码 > 处方平台处方核销消息}
   * - {@link AlibabaAlihealthTradeOrderStatusChange 阿里健康追溯码 > O2O订单状态变更通知}
   * - {@link AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康追溯码 > 疫苗交易预约信息变动}
   * - {@link AlibabaAlihealthVcRegisterCancel 阿里健康追溯码 > 用户取消订阅缺苗登记同步isv}
   */
  type AlibabaAlihealth = AlibabaAlihealthBillProcessStatusNotify
    | AlibabaAlihealthDoctorMessage
    | AlibabaAlihealthMvmBizStatusChange
    | AlibabaAlihealthMvmInventorySwitch
    | AlibabaAlihealthMvmOrderNotify
    | AlibabaAlihealthMvmOrderOfflineSync
    | AlibabaAlihealthMvmShopBindStatusChange
    | AlibabaAlihealthMvmUpdateInventory
    | AlibabaAlihealthNrmopOrderStatusChange
    | AlibabaAlihealthOrderStatusChange
    | AlibabaAlihealthPrescriptionConfirm
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
   * - {@link AlibabaAliqinAxbCallRecord 阿里通信 > axb通话记录}
   * - {@link AlibabaAliqinAxbCallRelease 阿里通信 > 通话结束时产生的通话记录}
   * - {@link AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执}
   * - {@link AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知}
   * - {@link AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送}
   * - {@link AlibabaAliqinFcCallRecord 阿里通信 > 录音回执}
   * - {@link AlibabaAliqinFcCodeSmsUp 阿里通信 > 编码发送短信上行消息}
   * - {@link AlibabaAliqinFcFlowUp 阿里通信 > 流量直充状态报告}
   * - {@link AlibabaAliqinFcSmsDR 阿里通信 > 短消息发送结果报告}
   * - {@link AlibabaAliqinFcSmsUp 阿里通信 > 短信上行}
   * - {@link AlibabaAliqinFcTmpStatus 阿里通信 > 语音呼叫中间状态消息}
   * - {@link AlibabaAliqinFlowDirectCharge 阿里通信 > 流量直充}
   * - {@link AlibabaAliqinIotCurFlowLimitNotice 阿里通信 > 物联网卡剩余流量提醒}
   * - {@link AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知}
   * - {@link AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知}
   * - {@link AlibabaAliqinMiuaCallRecord 阿里通信 > Miua通话记录Top推送}
   * - {@link AlibabaAliqinPlatformMonitorRecord 阿里通信 > 平台监控记录}
   * - {@link AlibabaAliqinTaFcCallCdr 阿里通信 > 语音呼叫结果推送}
   * - {@link AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告}
   */
  type AlibabaAliqin = AlibabaAliqinAxbCallRecord
    | AlibabaAliqinAxbCallRelease
    | AlibabaAliqinDigitalSmsTemplateDR
    | AlibabaAliqinFcActiveIotcard
    | AlibabaAliqinFcCallCdr
    | AlibabaAliqinFcCallRecord
    | AlibabaAliqinFcCodeSmsUp
    | AlibabaAliqinFcFlowUp
    | AlibabaAliqinFcSmsDR
    | AlibabaAliqinFcSmsUp
    | AlibabaAliqinFcTmpStatus
    | AlibabaAliqinFlowDirectCharge
    | AlibabaAliqinIotCurFlowLimitNotice
    | AlibabaAliqinIotPersonalConfirmNotice
    | AlibabaAliqinIotStatusNotice
    | AlibabaAliqinMiuaCallRecord
    | AlibabaAliqinPlatformMonitorRecord
    | AlibabaAliqinTaFcCallCdr
    | AlibabaAliqinTaFcSmsDR;
  /**
   * - {@link AlibabaAlisportsFishingTest 阿里体育 > 钓鱼测试消息}
   */
  type AlibabaAlisports = AlibabaAlisportsFishingTest;
  /**
   * - {@link AlibabaAscpchannelmanagermentmsgOrderAudit 集采 > 集采订单审核通知}
   * - {@link AlibabaAscpchannelmanagermentmsgOrderClose 集采 > 集采订单关闭通知}
   * - {@link AlibabaAscpchannelmanagermentmsgOrderDeliver 集采 > 集采订单发货通知}
   */
  type AlibabaAscpchannelmanagermentmsg = AlibabaAscpchannelmanagermentmsgOrderAudit
    | AlibabaAscpchannelmanagermentmsgOrderClose
    | AlibabaAscpchannelmanagermentmsgOrderDeliver;
  /**
   * - {@link AlibabaCfoAccountFlowNotify TMI付款及银行支行主数据 > 账号流水通知消息}
   */
  type AlibabaCfo = AlibabaCfoAccountFlowNotify;
  /**
   * - {@link AlibabaCouponOpenCouponDraw 券开放消息权限包 > 用户领取券消息通知}
   */
  type AlibabaCoupon = AlibabaCouponOpenCouponDraw;
  /**
   * - {@link AlibabaCrmOutboundInfoMessage ICBU-CRM智能机器人外呼沟通 > 外呼名单消息发送}
   */
  type AlibabaCrm = AlibabaCrmOutboundInfoMessage;
  /**
   * - {@link AlibabaCrowdsourcingMaterial - > 素材生成通知}
   */
  type AlibabaCrowdsourcing = AlibabaCrowdsourcingMaterial;
  /**
   * - {@link AlibabaDecorationAidesignFinish 阿里楼盘 > AI设计方案状态变更通知}
   * - {@link AlibabaDecorationApartmentExport 阿里楼盘 > 生成户型图消息}
   * - {@link AlibabaDecorationDamoStatusChange 阿里楼盘 > 达摩院户型图消息推送}
   * - {@link AlibabaDecorationExternalAccountFinish 阿里楼盘 > 账号绑定消息}
   * - {@link AlibabaDecorationHousethreedImage 阿里楼盘 > 生成3d全屋漫游图后的消息}
   */
  type AlibabaDecoration = AlibabaDecorationAidesignFinish
    | AlibabaDecorationApartmentExport
    | AlibabaDecorationDamoStatusChange
    | AlibabaDecorationExternalAccountFinish
    | AlibabaDecorationHousethreedImage;
  /**
   * - {@link AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知}
   * - {@link AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息}
   * - {@link AlibabaEinvoiceDeviceOperation 电子发票 > 设备绑定变化消息通知}
   * - {@link AlibabaEinvoiceMerchantAbilityUpdate 电子发票 > 开票能力变更通知}
   * - {@link AlibabaEinvoiceOrderRefund 电子发票 > 订购单退款通知}
   * - {@link AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知}
   * - {@link AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息}
   * - {@link AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息}
   * - {@link AlibabaEinvoiceRenewOrder 电子发票 > 订购单续约通知}
   * - {@link AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息}
   */
  type AlibabaEinvoice = AlibabaEinvoiceApplyUpdate
    | AlibabaEinvoiceCompanyDoAction
    | AlibabaEinvoiceDeviceOperation
    | AlibabaEinvoiceMerchantAbilityUpdate
    | AlibabaEinvoiceOrderRefund
    | AlibabaEinvoiceOrderRefundResult
    | AlibabaEinvoiceRegisterFlowChange
    | AlibabaEinvoiceRegisterFlowCreate
    | AlibabaEinvoiceRenewOrder
    | AlibabaEinvoiceTaxDeviceOrder;
  /**
   * - {@link AlibabaEslSendMsgAliyun ESL > 给阿里云发送消息}
   */
  type AlibabaEsl = AlibabaEslSendMsgAliyun;
  /**
   * - {@link AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息}
   * - {@link AlibabaFuwuTradeAction 1688服务市场 > 外贸服务市场订单变更消息}
   * - {@link AlibabaFuwuTradePayAction 1688服务市场 > ICBU服务市场交易支付消息}
   */
  type AlibabaFuwu = AlibabaFuwuOrderPaid
    | AlibabaFuwuTradeAction
    | AlibabaFuwuTradePayAction;
  /**
   * - {@link AlibabaHappyfinanceInNotify 娱乐宝 > CP入驻通知}
   */
  type AlibabaHappyfinance = AlibabaHappyfinanceInNotify;
  /**
   * - {@link AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息}
   */
  type AlibabaHappytrip = AlibabaHappytripOrderNotify;
  /**
   * - {@link AlibabaHjInvoiceCancel 汇金销项票 > 汇金销项票作废通知}
   * - {@link AlibabaHjInvoiceFileUpload 汇金销项票 > 汇金销项票文件上传通知}
   * - {@link AlibabaHjInvoiceIssue 汇金销项票 > 汇金销项票开具通知}
   * - {@link AlibabaHjInvoiceRedIssue 汇金销项票 > 汇金销项票冲红通知}
   * - {@link AlibabaHjInvoiceReject 汇金销项票 > 汇金销项票开票拒绝通知}
   * - {@link AlibabaHjInvoiceReturnReject 汇金销项票 > 汇金销项票拒绝退票通知}
   * - {@link AlibabaHjInvoiceSend 汇金销项票 > 汇金销项票发票寄送通知}
   * - {@link AlibabaHjInvoiceUnissue 汇金销项票 > 汇金销项票待开通知}
   */
  type AlibabaHj = AlibabaHjInvoiceCancel
    | AlibabaHjInvoiceFileUpload
    | AlibabaHjInvoiceIssue
    | AlibabaHjInvoiceRedIssue
    | AlibabaHjInvoiceReject
    | AlibabaHjInvoiceReturnReject
    | AlibabaHjInvoiceSend
    | AlibabaHjInvoiceUnissue;
  /**
   * - {@link AlibabaHomestylerAigcContentImageGenerateCallback 洞窝 > 设计家aigc生图结果消息通知}
   * - {@link AlibabaHomestylerAigcPanoramaReplaceCallback 洞窝 > 洞窝全景图替换消息回调}
   */
  type AlibabaHomestyler = AlibabaHomestylerAigcContentImageGenerateCallback
    | AlibabaHomestylerAigcPanoramaReplaceCallback;
  /**
   * - {@link AlibabaIcbuliveCommentNotice ICBU > 直播评论通知}
   * - {@link AlibabaIcbuliveEnterNotice ICBU > 直播观众进场通知}
   */
  type AlibabaIcbulive = AlibabaIcbuliveCommentNotice
    | AlibabaIcbuliveEnterNotice;
  /**
   * - {@link AlibabaIdleHouseStatusNotify 闲鱼 > 闲鱼房源状态变更通知}
   */
  type AlibabaIdle = AlibabaIdleHouseStatusNotify;
  /**
   * - {@link AlibabaIfpPackageCfcContainer 五道口配送 > 同城履约包裹状态变更消息}
   */
  type AlibabaIfp = AlibabaIfpPackageCfcContainer;
  /**
   * - {@link AlibabaInfopGoodsChange 采购系统 > 采购系统商品消息变更消息}
   * - {@link AlibabaInfopPRAudited 采购系统 > PR 审批完成通知}
   * - {@link AlibabaInfopRcvAuditStatusChange 采购系统 > 采购系统接收单状态变更通知}
   * - {@link AlibabaInfopRcvCreateSuccess 采购系统 > 接收单创建成功通知}
   */
  type AlibabaInfop = AlibabaInfopGoodsChange
    | AlibabaInfopPRAudited
    | AlibabaInfopRcvAuditStatusChange
    | AlibabaInfopRcvCreateSuccess;
  /**
   * - {@link AlibabaIntimeServiceOrderCreateUpdate 银泰 > 银泰服务订单创建&更新}
   */
  type AlibabaIntime = AlibabaIntimeServiceOrderCreateUpdate;
  /**
   * - {@link AlibabaInvoiceAlipayApply 电子发票 > 开票申请(支付宝专用)}
   * - {@link AlibabaInvoiceAlipayApplyResult 电子发票 > 开票申请审核结果(支付宝专用)}
   * - {@link AlibabaInvoiceAlipayCreateReq 电子发票 > 开票请求(支付宝专用)}
   * - {@link AlibabaInvoiceAlipayResultReturn 电子发票 > 开票请求结果(支付宝专用)}
   * - {@link AlibabaInvoiceApply 电子发票 > 开票申请}
   * - {@link AlibabaInvoiceApplyDisagree 电子发票 > 商家拒绝开票}
   * - {@link AlibabaInvoiceApplyResult 电子发票 > 开票申请审核结果}
   * - {@link AlibabaInvoiceChangePaper 电子发票 > 电换纸消息}
   * - {@link AlibabaInvoiceClerkStatusChange 电子发票 > 商户店员状态变更}
   * - {@link AlibabaInvoiceCreateReq 电子发票 > 开票请求消息}
   * - {@link AlibabaInvoiceDiskMail 电子发票 > 商家邮寄税控盘消息}
   * - {@link AlibabaInvoiceDiskOffline 电子发票 > 税盘下架单新增和更新通知}
   * - {@link AlibabaInvoiceFlowBuket 电子发票 > 资源包开通/订购记录同步}
   * - {@link AlibabaInvoiceGetXmlFile 电子发票 > 获取xml发票文件}
   * - {@link AlibabaInvoiceHxQuery 电子发票 > 830平台查询单机盒子消息}
   * - {@link AlibabaInvoiceIncomeCertificateResult 电子发票 > 进项发票认证结果通知}
   * - {@link AlibabaInvoiceIncomeOcrResult 电子发票 > ocr结果通知}
   * - {@link AlibabaInvoiceIncomeScanResult 电子发票 > 进项扫描结果通知}
   * - {@link AlibabaInvoiceIncomeVerifyResult 电子发票 > 进项查验结果通知}
   * - {@link AlibabaInvoiceInnerResultReturn 电子发票 > 开票请求结果(内部专用)}
   * - {@link AlibabaInvoiceInvoiceApply 电子发票 > 税控服务开票申请}
   * - {@link AlibabaInvoiceItemNoSwitch 电子发票 > 税号商品编码切换消息}
   * - {@link AlibabaInvoiceLogistics 电子发票 > 发票对外通知物流信息}
   * - {@link AlibabaInvoiceMakeUp 电子发票 > 补开票消息}
   * - {@link AlibabaInvoicePaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）}
   * - {@link AlibabaInvoicePreConsulting 电子发票 > 电子发票售前咨询}
   * - {@link AlibabaInvoiceProxyCreateReq 电子发票 > 开票请求消息}
   * - {@link AlibabaInvoiceProxyCreateReqTest 电子发票 > 开票请求消息影子Topic}
   * - {@link AlibabaInvoiceQuery 电子发票 > 数据查询请求}
   * - {@link AlibabaInvoiceQueryInvoice 电子发票 > 查询发票信息}
   * - {@link AlibabaInvoiceRecreateBlue 电子发票 > 订单退款冲红后重开蓝票消息}
   * - {@link AlibabaInvoiceRegist 电子发票 > 入驻阿里发票平台}
   * - {@link AlibabaInvoiceRegistQuit 电子发票 > 商家请求退出}
   * - {@link AlibabaInvoiceRegistResult 电子发票 > 入驻阿里发票平台结果}
   * - {@link AlibabaInvoiceResultReturn 电子发票 > 开票请求结果}
   * - {@link AlibabaInvoiceRetryApply 电子发票 > 开票申请失败重试消息}
   * - {@link AlibabaInvoiceServiceClose 电子发票 > 服务到期关闭}
   * - {@link AlibabaInvoiceStatusChange 电子发票 > 发票状态变更消息}
   * - {@link AlibabaInvoiceSubService 电子发票 > 服务子单消息}
   * - {@link AlibabaInvoiceTaxChange 电子发票 > 商家税号变更}
   * - {@link AlibabaInvoiceTaxCodeSwitch 电子发票 > 税号切换商品编码消息}
   * - {@link AlibabaInvoiceTaxOfficeUserkeyReturn 电子发票 > 浙江税局注册商户信息回传}
   * - {@link AlibabaInvoiceUnissue 电子发票 > 创建未开具发票通知}
   * - {@link AlibabaInvoiceUnitBuy 电子发票 > 税控单元订购记录同步}
   * - {@link AlibabaInvoiceUnitRefund 电子发票 > 税控单元退款消息}
   * - {@link AlibabaInvoiceVerifyResult 电子发票 > 发票查验结果通知消息}
   */
  type AlibabaInvoice = AlibabaInvoiceAlipayApply
    | AlibabaInvoiceAlipayApplyResult
    | AlibabaInvoiceAlipayCreateReq
    | AlibabaInvoiceAlipayResultReturn
    | AlibabaInvoiceApply
    | AlibabaInvoiceApplyDisagree
    | AlibabaInvoiceApplyResult
    | AlibabaInvoiceChangePaper
    | AlibabaInvoiceClerkStatusChange
    | AlibabaInvoiceCreateReq
    | AlibabaInvoiceDiskMail
    | AlibabaInvoiceDiskOffline
    | AlibabaInvoiceFlowBuket
    | AlibabaInvoiceGetXmlFile
    | AlibabaInvoiceHxQuery
    | AlibabaInvoiceIncomeCertificateResult
    | AlibabaInvoiceIncomeOcrResult
    | AlibabaInvoiceIncomeScanResult
    | AlibabaInvoiceIncomeVerifyResult
    | AlibabaInvoiceInnerResultReturn
    | AlibabaInvoiceInvoiceApply
    | AlibabaInvoiceItemNoSwitch
    | AlibabaInvoiceLogistics
    | AlibabaInvoiceMakeUp
    | AlibabaInvoicePaperOpsReturn
    | AlibabaInvoicePreConsulting
    | AlibabaInvoiceProxyCreateReq
    | AlibabaInvoiceProxyCreateReqTest
    | AlibabaInvoiceQuery
    | AlibabaInvoiceQueryInvoice
    | AlibabaInvoiceRecreateBlue
    | AlibabaInvoiceRegist
    | AlibabaInvoiceRegistQuit
    | AlibabaInvoiceRegistResult
    | AlibabaInvoiceResultReturn
    | AlibabaInvoiceRetryApply
    | AlibabaInvoiceServiceClose
    | AlibabaInvoiceStatusChange
    | AlibabaInvoiceSubService
    | AlibabaInvoiceTaxChange
    | AlibabaInvoiceTaxCodeSwitch
    | AlibabaInvoiceTaxOfficeUserkeyReturn
    | AlibabaInvoiceUnissue
    | AlibabaInvoiceUnitBuy
    | AlibabaInvoiceUnitRefund
    | AlibabaInvoiceVerifyResult;
  /**
   * - {@link AlibabaJymSteamTradeOrderNotify 交易猫 > 交易猫steam正向消息通知}
   * - {@link AlibabaJymSteamTradeRefundNotify 交易猫 > 交易猫steam逆向通知}
   * - {@link AlibabaJymTradeRefundNotify 交易猫 > 交易猫逆向单状态通知}
   */
  type AlibabaJym = AlibabaJymSteamTradeOrderNotify
    | AlibabaJymSteamTradeRefundNotify
    | AlibabaJymTradeRefundNotify;
  /**
   * - {@link AlibabaKaolaAlipayTaskFinish 考拉 > 考拉用户完成支付宝任务}
   * - {@link AlibabaKaolaSendPromoevent 考拉 > 考拉发送消息到Promoevent}
   */
  type AlibabaKaola = AlibabaKaolaAlipayTaskFinish
    | AlibabaKaolaSendPromoevent;
  /**
   * - {@link AlibabaKongurBusinessMsg 司法开放平台 > 司法开放平台推送消息给提供律师服务的供应商}
   */
  type AlibabaKongur = AlibabaKongurBusinessMsg;
  /**
   * - {@link AlibabaLassenFileStatusNotify 网上法庭 > 网上法庭证据文件状态变更通知}
   * - {@link AlibabaLassenLegalCasePaymentOrderNotify 网上法庭 > 发送支付令}
   * - {@link AlibabaLassenLegalCaseStatusNotify 网上法庭 > 网上法庭案件状态变更通知}
   */
  type AlibabaLassen = AlibabaLassenFileStatusNotify
    | AlibabaLassenLegalCasePaymentOrderNotify
    | AlibabaLassenLegalCaseStatusNotify;
  /**
   * - {@link AlibabaLegalMasterdataCompany - > 公司消息变更通知}
   */
  type AlibabaLegal = AlibabaLegalMasterdataCompany;
  /**
   * - {@link AlibabaLstBmOrderLogisticsChange 零售通_公共 > 品牌商-订单物流状态变化}
   * - {@link AlibabaLstBroadcastSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息}
   * - {@link AlibabaLstCashierSync 零售通_公共 > 收银快照同步消息}
   * - {@link AlibabaLstGoodsSync 零售通_公共 > 商品同步消息}
   * - {@link AlibabaLstInventorySync 零售通_公共 > 商品库存修改同步消息}
   * - {@link AlibabaLstMsgTest 零售通_公共 > 消息测试}
   * - {@link AlibabaLstOpenOrderCreate 零售通_公共 > 零售通门店订单创建消息推送}
   * - {@link AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息}
   * - {@link AlibabaLstRefundChange 零售通_公共 > 订单退单}
   * - {@link AlibabaLstSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息}
   * - {@link AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志}
   * - {@link AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息}
   * - {@link AlibabaLstVendingInventoryUpdate 零售通_公共 > 自动售货机库存更新消息}
   * - {@link AlibabaLstVendingTradeCreate 零售通_公共 > 售货机交易创建消息}
   */
  type AlibabaLst = AlibabaLstBmOrderLogisticsChange
    | AlibabaLstBroadcastSelfOrderShipChange
    | AlibabaLstCashierSync
    | AlibabaLstGoodsSync
    | AlibabaLstInventorySync
    | AlibabaLstMsgTest
    | AlibabaLstOpenOrderCreate
    | AlibabaLstOrderChange
    | AlibabaLstRefundChange
    | AlibabaLstSelfOrderShipChange
    | AlibabaLstSpeakerAdvertPlayRecord
    | AlibabaLstSupplierOrderChange
    | AlibabaLstVendingInventoryUpdate
    | AlibabaLstVendingTradeCreate;
  /**
   * - {@link AlibabaMmcInventorySynchronous MMC五盘货项目 > RT店仓项目-MMC库存增量推送消息}
   * - {@link AlibabaMmcOpenStockAlterNotify MMC五盘货项目 > MMC五盘货盘招投域盘货变更消息}
   * - {@link AlibabaMmcOpenStockItemAlter MMC五盘货项目 > MMC盘招投商品变更消息}
   * - {@link AlibabaMmcOrderNotify MMC五盘货项目 > MMC五盘货对接大润发正向订单消息}
   * - {@link AlibabaMmcPriceUpdate MMC五盘货项目 > MMC五盘货对接大润发价格修改消息}
   * - {@link AlibabaMmcRefundOrderNotify MMC五盘货项目 > MMC五盘货对接大润发逆向交易消息}
   */
  type AlibabaMmc = AlibabaMmcInventorySynchronous
    | AlibabaMmcOpenStockAlterNotify
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
   * - {@link AlibabaMosSaleOrderDeliver 银泰开放平台消息 > 销售单发货消息}
   * - {@link AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息}
   * - {@link AlibabaMosTradeOrder 银泰开放平台消息 > 交易订单状态变动}
   */
  type AlibabaMos = AlibabaMosSaleOrder
    | AlibabaMosSaleOrderDeliver
    | AlibabaMosSaleOrderRefund
    | AlibabaMosTradeOrder;
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
   * - {@link AlibabaMtpItemAddOrUpdate MTP > MTP-商品新建/编辑成功消息}
   * - {@link AlibabaMtpSupplierAddUpdate MTP > 二级供应商入驻/编辑消息}
   */
  type AlibabaMtp = AlibabaMtpItemAddOrUpdate
    | AlibabaMtpSupplierAddUpdate;
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
   * - {@link AlibabaNewretailPosOrderMessage 本地生活 > 阿里本地生活智慧菜场RTP订单消息}
   */
  type AlibabaNewretail = AlibabaNewretailPosOrderMessage;
  /**
   * - {@link AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知}
   * - {@link AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息}
   * - {@link AlibabaNlifeBToCTradeStatusNotify 零售plus > B2C交易订单状态变化通知}
   * - {@link AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息}
   * - {@link AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息}
   * - {@link AlibabaNlifeBtobRefundInfoNotify 零售plus > 二级供货商批次采退单通知信息}
   * - {@link AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息}
   * - {@link AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息}
   * - {@link AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息}
   * - {@link AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息}
   */
  type AlibabaNlife = AlibabaNlifeBToBTradeStatusNotify
    | AlibabaNlifeBToCTradeOrderSync
    | AlibabaNlifeBToCTradeStatusNotify
    | AlibabaNlifeBtoBTradeDeliverNotify
    | AlibabaNlifeBtoBTradeEffectiveNotify
    | AlibabaNlifeBtobRefundInfoNotify
    | AlibabaNlifeBtobTradeRefundConfirmMsgNotify
    | AlibabaNlifeBtobTradeRefundNotify
    | AlibabaNlifeInstorageDiffAuditNotify
    | AlibabaNlifeItemUpdate;
  /**
   * - {@link AlibabaOkkiSpuStatusSync 小满 > 小满商品服务状态同步}
   */
  type AlibabaOkki = AlibabaOkkiSpuStatusSync;
  /**
   * - {@link AlibabaPaimaiAlipayConsumeGoldTaskFinish 阿里拍卖 > 支付宝用户完成消费金任务}
   * - {@link AlibabaPaimaiCommonPromoTask 阿里拍卖 > 拍卖支付宝营销通用消息}
   */
  type AlibabaPaimai = AlibabaPaimaiAlipayConsumeGoldTaskFinish
    | AlibabaPaimaiCommonPromoTask;
  /**
   * - {@link AlibabaPurContractStatusChange 信息平台-采购 > 合同状态改变发送消息}
   * - {@link AlibabaPurDelSettlementContract 信息平台-采购 > 作废结算合同}
   * - {@link AlibabaPurFaApproveFinished 信息平台-采购 > 入库单审批完成消息广播}
   * - {@link AlibabaPurPoAudited 信息平台-采购 > PO审批完成}
   * - {@link AlibabaPurPoCancelled 信息平台-采购 > PO作废消息发送}
   * - {@link AlibabaPurPoClosed 信息平台-采购 > PO关闭发送消息}
   * - {@link AlibabaPurPrApproved 信息平台-采购 > PR审批完成消息通知}
   * - {@link AlibabaPurPrDelete 信息平台-采购 > pr删除通知消息}
   * - {@link AlibabaPurPurchaseRequisition 信息平台-采购 > 创建pr}
   * - {@link AlibabaPurPurchaseRequisitionCancel 信息平台-采购 > PR作废消息通知}
   * - {@link AlibabaPurPurchaseRequisitionDelete 信息平台-采购 > PR删除消息通知}
   * - {@link AlibabaPurResourceOrderCancelNotify 信息平台-采购 > 取消订单结果通知}
   * - {@link AlibabaPurResourceOrderShipNotify 信息平台-采购 > 发货提醒}
   * - {@link AlibabaPurRtAudited 信息平台-采购 > RT审批完成消息通知}
   * - {@link AlibabaPurSettlementContract 信息平台-采购 > 维护结算合同消息发送}
   * - {@link AlibabaPurSupplierChange 信息平台-采购 > 供应商信息变更}
   * - {@link AlibabaPurVprApproved 信息平台-采购 > VPR审批报价完成发送消息}
   */
  type AlibabaPur = AlibabaPurContractStatusChange
    | AlibabaPurDelSettlementContract
    | AlibabaPurFaApproveFinished
    | AlibabaPurPoAudited
    | AlibabaPurPoCancelled
    | AlibabaPurPoClosed
    | AlibabaPurPrApproved
    | AlibabaPurPrDelete
    | AlibabaPurPurchaseRequisition
    | AlibabaPurPurchaseRequisitionCancel
    | AlibabaPurPurchaseRequisitionDelete
    | AlibabaPurResourceOrderCancelNotify
    | AlibabaPurResourceOrderShipNotify
    | AlibabaPurRtAudited
    | AlibabaPurSettlementContract
    | AlibabaPurSupplierChange
    | AlibabaPurVprApproved;
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
   * - {@link AlibabaTbdxEBookContent 淘宝电子书 > 电子书内容变更消息}
   * - {@link AlibabaTbdxEBookSellerSign 淘宝电子书 > 电子书商家签约消息}
   * - {@link AlibabaTbdxEBookUserOrder 淘宝电子书 > 电子书用户下单消息}
   * - {@link AlibabaTbdxPaperPush 淘宝电子书 > 淘宝教育论文查重推送}
   */
  type AlibabaTbdx = AlibabaTbdxEBookContent
    | AlibabaTbdxEBookSellerSign
    | AlibabaTbdxEBookUserOrder
    | AlibabaTbdxPaperPush;
  /**
   * - {@link AlibabaTcLogisticsStatusUpdate 同城 > 同城履约物流状态通知}
   */
  type AlibabaTc = AlibabaTcLogisticsStatusUpdate;
  /**
   * - {@link AlibabaThreehoursAuthorizationResult 三小时公益 > 授权结果}
   * - {@link AlibabaThreehoursDonateStep 三小时公益 > 益起来捐步成功消息}
   * - {@link AlibabaThreehoursUserBindResult 三小时公益 > 用户绑定结果通知}
   * - {@link AlibabaThreehoursUserJoinActivity 三小时公益 > 用户参与志愿服务活动}
   */
  type AlibabaThreehours = AlibabaThreehoursAuthorizationResult
    | AlibabaThreehoursDonateStep
    | AlibabaThreehoursUserBindResult
    | AlibabaThreehoursUserJoinActivity;
  /**
   * - {@link AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息}
   * - {@link AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息}
   */
  type AlibabaTianji = AlibabaTianjiContractOrder
    | AlibabaTianjiOrderCreate;
  /**
   * - {@link AlibabaTxdInteractEventNotice 淘鲜达 > 淘鲜达互动事件通知}
   * - {@link AlibabaTxdOrderStatusChangeToAlipay 淘鲜达 > 淘鲜达交易状态变化}
   */
  type AlibabaTxd = AlibabaTxdInteractEventNotice
    | AlibabaTxdOrderStatusChangeToAlipay;
  /**
   * - {@link AlibabaUniTradeStatusNotify 全域收单 > 全域收单交易消息}
   */
  type AlibabaUni = AlibabaUniTradeStatusNotify;
  /**
   * - {@link AlibabaWdkChannelCommentAudit 五道口订单 > 差评回评}
   * - {@link AlibabaWdkChannelOrderCancel 五道口订单 > 五道口售中取消外部订单消息}
   * - {@link AlibabaWdkChannelOrderCsRefundAudit 五道口订单 > 客服审核退款结果}
   * - {@link AlibabaWdkChannelOrderCsUserrefund 五道口订单 > 客服代客发起售后退款(整单/部分)}
   * - {@link AlibabaWdkChannelOrderStatusChange 五道口订单 > 订单状态变更消息}
   * - {@link AlibabaWdkChannelStockSync 五道口订单 > 库存同步}
   * - {@link AlibabaWdkDmsSignError 五道口订单 > 配送异常信消息}
   * - {@link AlibabaWdkFulfillOrderChange 五道口订单 > 售中履约变更消息}
   * - {@link AlibabaWdkFulfillWarehouseHandover 五道口订单 > 仓配交接消息}
   * - {@link AlibabaWdkReturnWarehouseStatusChange 五道口订单 > 退仓单物流状态变更通知}
   * - {@link AlibabaWdkStoreItemUpdate 五道口订单 > 商家渠道商品变动消息}
   * - {@link AlibabaWdkTxdCrmChannelMessagePush 五道口订单 > 外部商家发送push消息}
   */
  type AlibabaWdk = AlibabaWdkChannelCommentAudit
    | AlibabaWdkChannelOrderCancel
    | AlibabaWdkChannelOrderCsRefundAudit
    | AlibabaWdkChannelOrderCsUserrefund
    | AlibabaWdkChannelOrderStatusChange
    | AlibabaWdkChannelStockSync
    | AlibabaWdkDmsSignError
    | AlibabaWdkFulfillOrderChange
    | AlibabaWdkFulfillWarehouseHandover
    | AlibabaWdkReturnWarehouseStatusChange
    | AlibabaWdkStoreItemUpdate
    | AlibabaWdkTxdCrmChannelMessagePush;
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
   * - {@link AlibabaWdkorderOrderRefundPush 五道口订单 > 猫超订单逆向消息通知商户}
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
    | AlibabaWdkorderOrderRefundPush
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
   * - {@link AlibabaYichaoInsuranceUpdate 天猫服务 > 蚁巢保单修改消息}
   */
  type AlibabaYichao = AlibabaYichaoInsuranceUpdate;
  /**
   * - {@link AlibabaYunioDataTransfer 平台消息 > YunIO数据流转}
   */
  type AlibabaYunio = AlibabaYunioDataTransfer;
  /**
   * - {@link AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步}
   */
  type AlicomAxb = AlicomAxbSubsEventSync;
  /**
   * - {@link AlicomDeductOrderPay 阿里通信 > 阿里通信代扣订单支付结果消息}
   */
  type AlicomDeduct = AlicomDeductOrderPay;
  /**
   * - {@link AlicomFlowAliPayChargeWalletFlow 阿里通信 > 支付宝流量钱包提取流量}
   * - {@link AlicomFlowAliPayChargeWalletRed 阿里通信 > 支付宝流量钱包发红包}
   * - {@link AlicomFlowAliPayWalletFlowDraw 阿里通信 > 支付宝流量钱包领取红包}
   */
  type AlicomFlow = AlicomFlowAliPayChargeWalletFlow
    | AlicomFlowAliPayChargeWalletRed
    | AlicomFlowAliPayWalletFlowDraw;
  /**
   * - {@link AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知}
   */
  type AliexpressAeia = AliexpressAeiaTaskplatformInterestNotice;
  /**
   * - {@link AliexpressAftersaleinsuranceMessageFromAE AE > AE发送给蚂蚁保险的消息}
   * - {@link AliexpressAftersaleinsuranceMessageFromAnt AE > 蚂蚁保险消息-蚂蚁发出到AE}
   */
  type AliexpressAftersaleinsurance = AliexpressAftersaleinsuranceMessageFromAE
    | AliexpressAftersaleinsuranceMessageFromAnt;
  /**
   * - {@link AliexpressMessagePushnewmsg AE > 站内信新消息主动推送}
   */
  type AliexpressMessage = AliexpressMessagePushnewmsg;
  /**
   * - {@link AliexpressOrderAllFinish AE-交易 > 交易成功}
   * - {@link AliexpressOrderAllFulfillmentOrderCreated AE-交易 > 等待卖家发货（所有卖家的订单）}
   * - {@link AliexpressOrderAllSellerPartSendGoods AE-交易 > 卖家部分发货（所有卖家的订单）}
   * - {@link AliexpressOrderAllWaitBuyerAcceptGoods AE-交易 > 等待买家收货}
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
  type AliexpressOrder = AliexpressOrderAllFinish
    | AliexpressOrderAllFulfillmentOrderCreated
    | AliexpressOrderAllSellerPartSendGoods
    | AliexpressOrderAllWaitBuyerAcceptGoods
    | AliexpressOrderFinish
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
   * - {@link AliexpressTradeOrderNotify AE > AE订单状态通知}
   */
  type AliexpressTrade = AliexpressTradeOrderNotify;
  /**
   * - {@link AliexpressWarrantyCreateWarrantyOrderByPms AE > 发送保修单消息ByPms}
   * - {@link AliexpressWarrantyWarrantyOrderMessageFromAE AE > 保修商消息-AE}
   * - {@link AliexpressWarrantyWarrantyOrderMessageFromAliExpress AE > 保修商消息-AliExpress}
   */
  type AliexpressWarranty = AliexpressWarrantyCreateWarrantyOrderByPms
    | AliexpressWarrantyWarrantyOrderMessageFromAE
    | AliexpressWarrantyWarrantyOrderMessageFromAliExpress;
  /**
   * - {@link AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知}
   */
  type AlihealthCep = AlihealthCepOrderStatusChange;
  /**
   * - {@link AlihealthHbPushPatientCardToHis 阿里健康 > 患者就诊卡推送至医院进行验证}
   * - {@link AlihealthHbPushPrescriptionToYh 阿里健康 > 处方推送给银海}
   */
  type AlihealthHb = AlihealthHbPushPatientCardToHis
    | AlihealthHbPushPrescriptionToYh;
  /**
   * - {@link AlihealthTestTmcCreate 阿里健康 > 阿里健康测试消息}
   */
  type AlihealthTest = AlihealthTestTmcCreate;
  /**
   * - {@link AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送}
   * - {@link AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知}
   * - {@link AlihealthYsOrderRefund 阿里健康&一树-电商中台对接 > 订单退款成功推送}
   * - {@link AlihealthYsVipChange 阿里健康&一树-电商中台对接 > 会员变动}
   * - {@link AlihealthYsVipIntegralChange 阿里健康&一树-电商中台对接 > 会员积分变动}
   * - {@link AlihealthYsVipIntegralSync 阿里健康&一树-电商中台对接 > 会员积分同步}
   * - {@link AlihealthYsVipSync 阿里健康&一树-电商中台对接 > 会员信息同步}
   */
  type AlihealthYs = AlihealthYsOrderMemConsume
    | AlihealthYsOrderPushConsume
    | AlihealthYsOrderRefund
    | AlihealthYsVipChange
    | AlihealthYsVipIntegralChange
    | AlihealthYsVipIntegralSync
    | AlihealthYsVipSync;
  /**
   * - {@link AlihouseCustomerActionClueId 阿里楼盘 > 动作线索消息}
   * - {@link AlihouseCustomerAppNoteSync 阿里楼盘 > 来客通_备注信息同步}
   * - {@link AlihouseCustomerBehaviorClueId 阿里楼盘 > 用户行为线索产出}
   * - {@link AlihouseCustomerBehaviorClueMsg 阿里楼盘 > 新二租归一表单线索消息通知}
   * - {@link AlihouseCustomerImMsg 阿里楼盘 > IM线索消息通知}
   * - {@link AlihouseCustomerRemindNotice 阿里楼盘 > 用户关注提醒消息}
   * - {@link AlihouseCustomerRentBehaviorClueId 阿里楼盘 > 租房用户行为线索消息通知}
   * - {@link AlihouseCustomerSecondBehaviorClueId 阿里楼盘 > 二手房用户行为线索消息通知}
   */
  type AlihouseCustomer = AlihouseCustomerActionClueId
    | AlihouseCustomerAppNoteSync
    | AlihouseCustomerBehaviorClueId
    | AlihouseCustomerBehaviorClueMsg
    | AlihouseCustomerImMsg
    | AlihouseCustomerRemindNotice
    | AlihouseCustomerRentBehaviorClueId
    | AlihouseCustomerSecondBehaviorClueId;
  /**
   * - {@link AlihouseHouseProjectAudit 阿里楼盘 > 楼盘消息审核}
   * - {@link AlihouseHouseProjectSaleAudit 阿里楼盘 > 天猫好房商品审核结果通知}
   */
  type AlihouseHouse = AlihouseHouseProjectAudit
    | AlihouseHouseProjectSaleAudit;
  /**
   * - {@link AliosCosmoStreamPush AliOS COSMO > 流式API}
   */
  type AliosCosmo = AliosCosmoStreamPush;
  /**
   * - {@link AliosWatchNotifyMessagePush AliOS手表 > 消息推送服务}
   * - {@link AliosWatchPassthroughMessagePush AliOS手表 > 透传消息}
   */
  type AliosWatch = AliosWatchNotifyMessagePush
    | AliosWatchPassthroughMessagePush;
  /**
   * - {@link AlipayAeTradePreloan 支付宝 > AE提前放款}
   * - {@link AlipayAeTradePreloanNew 支付宝 > AE提前放款新链路}
   */
  type AlipayAe = AlipayAeTradePreloan
    | AlipayAeTradePreloanNew;
  /**
   * - {@link AlipayBaomingMsg 支付宝 > 活动报名消息}
   */
  type AlipayBaoming = AlipayBaomingMsg;
  /**
   * - {@link AlipayBaoxianPolicySyncAuthorize 支付宝 > 保险线下同步授权消息}
   * - {@link AlipayBaoxianPolicySyncCancel 支付宝 > 保险线下同步解除授权消息}
   */
  type AlipayBaoxian = AlipayBaoxianPolicySyncAuthorize
    | AlipayBaoxianPolicySyncCancel;
  /**
   * - {@link AlipayCharityThreeHoursBillSync 支付宝 > 支付宝公益平台实时同步淘宝公益三小时流水}
   */
  type AlipayCharity = AlipayCharityThreeHoursBillSync;
  /**
   * - {@link AlipayFenxiaoFxOrderClosed 支付宝 > 采购单关闭}
   * - {@link AlipayFenxiaoFxOrderCreate 支付宝 > 采购单创建}
   * - {@link AlipayFenxiaoFxOrderModifyPrice 支付宝 > 改价}
   * - {@link AlipayFenxiaoFxOrderPaid 支付宝 > 采购单付款}
   * - {@link AlipayFenxiaoFxOrderShipped 支付宝 > 采购单发货}
   * - {@link AlipayFenxiaoFxOrderSuccess 支付宝 > 采购成功}
   * - {@link AlipayFenxiaoFxOrderTransfered 支付宝 > 采购单结算完成}
   */
  type AlipayFenxiao = AlipayFenxiaoFxOrderClosed
    | AlipayFenxiaoFxOrderCreate
    | AlipayFenxiaoFxOrderModifyPrice
    | AlipayFenxiaoFxOrderPaid
    | AlipayFenxiaoFxOrderShipped
    | AlipayFenxiaoFxOrderSuccess
    | AlipayFenxiaoFxOrderTransfered;
  /**
   * - {@link AlipayRefundDispute 支付宝 > 新退款消息}
   * - {@link AlipayRefundRefundClosed 支付宝 > 退款关闭}
   * - {@link AlipayRefundRefundCreated 支付宝 > 退款消息}
   * - {@link AlipayRefundRefundSuccess 支付宝 > 退款成功消息}
   */
  type AlipayRefund = AlipayRefundDispute
    | AlipayRefundRefundClosed
    | AlipayRefundRefundCreated
    | AlipayRefundRefundSuccess;
  /**
   * - {@link AlipayScfAdvance 支付宝 > 支付宝菜鸟消息}
   */
  type AlipayScf = AlipayScfAdvance;
  /**
   * - {@link AlipayTradeAdvanceDisburse 支付宝 > 订单极速放款成功}
   * - {@link AlipayTradeBuyerPay 支付宝 > 买家付款}
   * - {@link AlipayTradeFakeTrade 支付宝 > 虚假交易订单}
   * - {@link AlipayTradeTradeAlipayCreate 支付宝 > 支付宝订单号创建}
   * - {@link AlipayTradeTradeBuyerClose 支付宝 > 买家关闭订单}
   * - {@link AlipayTradeTradeBuyerStepPay 支付宝 > 阶段付款}
   * - {@link AlipayTradeTradeCreate 支付宝 > 订单创建}
   * - {@link AlipayTradeTradePartlyConfirmPay 支付宝 > 部分收货}
   * - {@link AlipayTradeTradePeriodSuccess 支付宝 > 交易阶段成功}
   * - {@link AlipayTradeTradeSellerShip 支付宝 > 订单发货}
   * - {@link AlipayTradeTradeSuccess 支付宝 > 交易成功}
   */
  type AlipayTrade = AlipayTradeAdvanceDisburse
    | AlipayTradeBuyerPay
    | AlipayTradeFakeTrade
    | AlipayTradeTradeAlipayCreate
    | AlipayTradeTradeBuyerClose
    | AlipayTradeTradeBuyerStepPay
    | AlipayTradeTradeCreate
    | AlipayTradeTradePartlyConfirmPay
    | AlipayTradeTradePeriodSuccess
    | AlipayTradeTradeSellerShip
    | AlipayTradeTradeSuccess;
  /**
   * - {@link AlipayUpdateSeller 支付宝 > 卖家信息变更}
   */
  type AlipayUpdate = AlipayUpdateSeller;
  /**
   * - {@link AlipayXiaodaiSignNotify 阿里金融 > 阿里金融签约通知}
   */
  type AlipayXiaodai = AlipayXiaodaiSignNotify;
  /**
   * - {@link AlipicLarkJiayingDataReport ALIPIC > 佳影数据上云}
   * - {@link AlipicLarkResultDataDownlink ALIPIC > POS配置态数据增量下行}
   * - {@link AlipicLarkSchedulesDataDownlink ALIPIC > 排期列表数据增量下行}
   */
  type AlipicLark = AlipicLarkJiayingDataReport
    | AlipicLarkResultDataDownlink
    | AlipicLarkSchedulesDataDownlink;
  /**
   * - {@link AlisportsBankAlipayattention 支付宝体育 > 支付宝体育服务小程序关注消息}
   */
  type AlisportsBank = AlisportsBankAlipayattention;
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
   * - {@link AlitripBtriphotelRpAudit 商旅API > 商旅酒店rp发布审核}
   */
  type AlitripBtriphotel = AlitripBtriphotelRpAudit;
  /**
   * - {@link AlitripEbookingActivityAudit 商旅API > tmc营销审核消息}
   * - {@link AlitripEbookingActivityChange 商旅API > EBK天天特惠营销活动变更}
   * - {@link AlitripEbookingCreateRatePlan 商旅API > 通知生成RatePlan消息}
   * - {@link AlitripEbookingRepostMessage 商旅API > alitrip_ebooking_RepostMessage}
   * - {@link AlitripEbookingSmsRecepit 商旅API > 订单短信回执消息}
   * - {@link AlitripEbookingTmcPassNotify 商旅API > tmc转发notify消息}
   */
  type AlitripEbooking = AlitripEbookingActivityAudit
    | AlitripEbookingActivityChange
    | AlitripEbookingCreateRatePlan
    | AlitripEbookingRepostMessage
    | AlitripEbookingSmsRecepit
    | AlitripEbookingTmcPassNotify;
  /**
   * - {@link AlitripFlightChange 淘宝机票 > 航变消息}
   * - {@link AlitripFlightChangeStatusNotify 淘宝机票 > 机票改签流程状态通知}
   * - {@link AlitripFlightFlightChange 淘宝机票 > 新京航航变消息}
   * - {@link AlitripFlightPayNotification 淘宝机票 > 机票支付结果异步通知}
   * - {@link AlitripFlightRefundNotify 淘宝机票 > 新京杭-退票相关通知}
   * - {@link AlitripFlightTradeNotify 淘宝机票 > 机票交易通知}
   */
  type AlitripFlight = AlitripFlightChange
    | AlitripFlightChangeStatusNotify
    | AlitripFlightFlightChange
    | AlitripFlightPayNotification
    | AlitripFlightRefundNotify
    | AlitripFlightTradeNotify;
  /**
   * - {@link AlitripHotelHotelCrawler 商旅API > 转发飞猪推送比价消息}
   * - {@link AlitripHotelOrderOperation 商旅API > 酒店交易发送云上消息}
   */
  type AlitripHotel = AlitripHotelHotelCrawler
    | AlitripHotelOrderOperation;
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
   * - {@link AlitripSyncIatkfTaobao 商旅API > 机票自营淘内应用消息同步云上}
   */
  type AlitripSync = AlitripSyncIatkfTaobao;
  /**
   * - {@link AlitripTfOrderStatusChanged 商旅API > 旅行购订单状态变化消息}
   */
  type AlitripTf = AlitripTfOrderStatusChanged;
  /**
   * - {@link AlitripTradeModifyApply 商旅API > 国内机票改签申请消息}
   */
  type AlitripTrade = AlitripTradeModifyApply;
  /**
   * - {@link AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息}
   * - {@link AlitripTrainRiskNotify 淘宝火车票 > 飞猪火车票风控消息}
   * - {@link AlitripTrainTobOrderCreate 淘宝火车票 > 创建订单成功消息}
   */
  type AlitripTrain = AlitripTrainAgentStopQuery
    | AlitripTrainRiskNotify
    | AlitripTrainTobOrderCreate;
  /**
   * - {@link AlitripTravelFaceOrder 航旅度假交易 > 线上人脸录入通知消息}
   * - {@link AlitripTravelOrderChanged 航旅度假交易 > 飞猪度假交易订单状态变更消息}
   * - {@link AlitripTravelPersonChanged 航旅度假交易 > 出行人信息变更消息}
   * - {@link AlitripTravelVisaService 航旅度假交易 > 签证消息服务}
   */
  type AlitripTravel = AlitripTravelFaceOrder
    | AlitripTravelOrderChanged
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
   * - {@link AliyunGscProductionQualityCpkCreate 阿里云质检 > 质检结果CPK触发查询}
   * - {@link AliyunGscProductionQualityDetailSpcCreate 阿里云质检 > 质检结果SPC详情触发查询}
   * - {@link AliyunGscProductionQualitySpcCreate 阿里云质检 > 质检结果SPC触发查询}
   * - {@link AliyunGscProductionReceiptInfoCreate 阿里云质检 > C2M物流信息下发}
   */
  type AliyunGsc = AliyunGscProductionQualityCpkCreate
    | AliyunGscProductionQualityDetailSpcCreate
    | AliyunGscProductionQualitySpcCreate
    | AliyunGscProductionReceiptInfoCreate;
  /**
   * - {@link AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步}
   */
  type AliyunIot = AliyunIotOrderSync;
  /**
   * - {@link AlscCouponCouponSync 口碑 > 本地联盟卡券同步消息}
   * - {@link AlscCouponOrderVoucherStatus 口碑 > 饿了么卡券openapi订单消息}
   */
  type AlscCoupon = AlscCouponCouponSync
    | AlscCouponOrderVoucherStatus;
  /**
   * - {@link AlscCouponpackagePurchaseSync 口碑 > 本地联盟卡券包采购同步消息}
   * - {@link AlscCouponpackagePurchaseTicketSync 口碑 > 本地联盟卡券包采购凭证同步}
   */
  type AlscCouponpackage = AlscCouponpackagePurchaseSync
    | AlscCouponpackagePurchaseTicketSync;
  /**
   * - {@link AlscDaodianHaitunPromoEventNotify 口碑 > 本地生活到店多渠道投放海豚活动事件通知}
   */
  type AlscDaodian = AlscDaodianHaitunPromoEventNotify;
  /**
   * - {@link AlscKbShopAudit 口碑 > 本地生活口碑店铺审核消息}
   * - {@link AlscKbShopChange 口碑 > 本地生活口碑店铺变更消息}
   */
  type AlscKb = AlscKbShopAudit
    | AlscKbShopChange;
  /**
   * - {@link AlscKbbaobaotuanOrderVoucherStatus 口碑 > 口碑爆爆团三方订单&凭证状态消息}
   */
  type AlscKbbaobaotuan = AlscKbbaobaotuanOrderVoucherStatus;
  /**
   * - {@link AlscKbbbtOrderVoucherStatus 口碑 > 口碑爆爆团凭证消息流}
   * - {@link AlscKbbbtProductChange 口碑 > 口碑爆爆团商品变更的消息}
   */
  type AlscKbbbt = AlscKbbbtOrderVoucherStatus
    | AlscKbbbtProductChange;
  /**
   * - {@link AlscReviewbwcActivityEnrollSync 口碑 > 本地联盟饿了么评价有礼门店活动消息}
   * - {@link AlscReviewbwcSidBindSync 口碑 > 评价有礼渠道用户身份SID绑定通知}
   */
  type AlscReviewbwc = AlscReviewbwcActivityEnrollSync
    | AlscReviewbwcSidBindSync;
  /**
   * - {@link AlscRiskPunishSend 口碑 > 本地生活处罚中心处罚下发}
   */
  type AlscRisk = AlscRiskPunishSend;
  /**
   * - {@link AlscSalesadaptorShopAuditingNotify 口碑 > 饿了么开店状态通知接口}
   */
  type AlscSalesadaptor = AlscSalesadaptorShopAuditingNotify;
  /**
   * - {@link AlscSalescrmLeadsActionNotify 口碑 > alsc销售商机变更通知}
   * - {@link AlscSalescrmOpportunityActionNotify 口碑 > alsc销售商机变更通知}
   */
  type AlscSalescrm = AlscSalescrmLeadsActionNotify
    | AlscSalescrmOpportunityActionNotify;
  /**
   * - {@link AscpInsdustryCancelInquiry 天猫服务 > 送货入户并安装取消询价接口}
   */
  type AscpInsdustry = AscpInsdustryCancelInquiry;
  /**
   * - {@link AscpInstantsonlineLogisticsStatusCallback 同城配送 > 同城配送在线下单物流状态回告}
   */
  type AscpInstantsonline = AscpInstantsonlineLogisticsStatusCallback;
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
   * - {@link CainiaoLogisticsAbnormalOrderCreate 菜鸟 > 菜鸟物流异常件创建}
   * - {@link CainiaoLogisticsAbnormalOrderUpdate 菜鸟 > 异常件变更消息}
   */
  type CainiaoLogistics = CainiaoLogisticsAbnormalOrderCreate
    | CainiaoLogisticsAbnormalOrderUpdate;
  /**
   * - {@link CainiaoModuanAlertOrder 菜鸟 > 异常订单预警通知}
   * - {@link CainiaoModuanCancelTask 菜鸟 > 任务取消消息推送}
   * - {@link CainiaoModuanCommonMailnoUpdated 菜鸟 > 运单号更新}
   * - {@link CainiaoModuanCommonOrderCanceled 菜鸟 > 订单取消}
   * - {@link CainiaoModuanCommonOrderGrasped 菜鸟 > 普通寄件接单消息}
   * - {@link CainiaoModuanCommonOrderMailnoReturned 菜鸟 > 回单消息}
   * - {@link CainiaoModuanCommonOrderPickup 菜鸟 > 揽件消息}
   * - {@link CainiaoModuanCommonWaitWithholdTimeOut 菜鸟 > 支付订单超时}
   * - {@link CainiaoModuanCommonWithholdResult 菜鸟 > 代扣结果通知}
   * - {@link CainiaoModuanCourierAccountSync 菜鸟 > 小件员账号同步}
   * - {@link CainiaoModuanCreateAppointOrder 菜鸟 > 创建预约订单通知}
   * - {@link CainiaoModuanDispatchTask 菜鸟 > 直送任务广播}
   * - {@link CainiaoModuanGongyiData 菜鸟 > 公益数据对接下发}
   * - {@link CainiaoModuanGraspedTask 菜鸟 > 直送抢单成功后消息推送}
   * - {@link CainiaoModuanModifyAppointOrder 菜鸟 > 修改预约订单通知}
   * - {@link CainiaoModuanOrderFeeTrans 菜鸟 > 末端订单转账结果通知}
   * - {@link CainiaoModuanOrderGrasp 菜鸟 > 小件员已接单推送信息}
   * - {@link CainiaoModuanOrderInfo 菜鸟 > 菜鸟末端订单信息}
   * - {@link CainiaoModuanOrderPickup 菜鸟 > 小件员已揽件推送信息}
   * - {@link CainiaoModuanOrderReturnMailNO 菜鸟 > 回传运单号通知}
   * - {@link CainiaoModuanRedispatchApplied 菜鸟 > 申请改派消息}
   * - {@link CainiaoModuanSignInfo 菜鸟 > 签收信息回传}
   * - {@link CainiaoModuanTaskAskGrasp 菜鸟 > 抢单通知}
   * - {@link CainiaoModuanTaskCancel 菜鸟 > 任务被取消}
   * - {@link CainiaoModuanTaskFeeTrans 菜鸟 > 结算通知}
   * - {@link CainiaoModuanTaskGrasp 菜鸟 > 订单被[抢/兜/追/派]后同步给CP}
   * - {@link CainiaoModuanTaskGroupDone 菜鸟 > 抢单任务组被抢通知}
   * - {@link CainiaoModuanTaskGroupTimeOut 菜鸟 > 抢单任务组超时通知}
   * - {@link CainiaoModuanTaskGroupViolate 菜鸟 > 兜底任务CP违约通知}
   * - {@link CainiaoModuanTaskModifyGotDate 菜鸟 > 修改上门取件时间}
   * - {@link CainiaoModuanTaskPaid 菜鸟 > 用户付款通知}
   * - {@link CainiaoModuanTaskPriceInfo 菜鸟 > 仓配派单订单价格通知}
   * - {@link CainiaoModuanTaskRedispatch 菜鸟 > 订单改派}
   * - {@link CainiaoModuanTaskReturnMailNo 菜鸟 > 小件员回传运单号通知}
   * - {@link CainiaoModuanTaskTaken 菜鸟 > 小件员已上门取件}
   * - {@link CainiaoModuanUserWord 菜鸟 > 用户留言通知}
   */
  type CainiaoModuan = CainiaoModuanAlertOrder
    | CainiaoModuanCancelTask
    | CainiaoModuanCommonMailnoUpdated
    | CainiaoModuanCommonOrderCanceled
    | CainiaoModuanCommonOrderGrasped
    | CainiaoModuanCommonOrderMailnoReturned
    | CainiaoModuanCommonOrderPickup
    | CainiaoModuanCommonWaitWithholdTimeOut
    | CainiaoModuanCommonWithholdResult
    | CainiaoModuanCourierAccountSync
    | CainiaoModuanCreateAppointOrder
    | CainiaoModuanDispatchTask
    | CainiaoModuanGongyiData
    | CainiaoModuanGraspedTask
    | CainiaoModuanModifyAppointOrder
    | CainiaoModuanOrderFeeTrans
    | CainiaoModuanOrderGrasp
    | CainiaoModuanOrderInfo
    | CainiaoModuanOrderPickup
    | CainiaoModuanOrderReturnMailNO
    | CainiaoModuanRedispatchApplied
    | CainiaoModuanSignInfo
    | CainiaoModuanTaskAskGrasp
    | CainiaoModuanTaskCancel
    | CainiaoModuanTaskFeeTrans
    | CainiaoModuanTaskGrasp
    | CainiaoModuanTaskGroupDone
    | CainiaoModuanTaskGroupTimeOut
    | CainiaoModuanTaskGroupViolate
    | CainiaoModuanTaskModifyGotDate
    | CainiaoModuanTaskPaid
    | CainiaoModuanTaskPriceInfo
    | CainiaoModuanTaskRedispatch
    | CainiaoModuanTaskReturnMailNo
    | CainiaoModuanTaskTaken
    | CainiaoModuanUserWord;
  /**
   * - {@link CainiaoScfLoanCreate 菜鸟 > 菜鸟金融贷款通知databus}
   */
  type CainiaoScf = CainiaoScfLoanCreate;
  /**
   * - {@link CainiaoWaybillTrackTicketStatus 菜鸟 > 单据状态跟踪}
   */
  type CainiaoWaybill = CainiaoWaybillTrackTicketStatus;
  /**
   * - {@link CainiaoYimaSmsRecordPush 菜鸟 > 短信记录推送}
   */
  type CainiaoYima = CainiaoYimaSmsRecordPush;
  /**
   * - {@link DamaiDistributionMatchSeat 大麦第三方票务供应商接入 > 履约补选座位成功通知三方}
   * - {@link DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送}
   * - {@link DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送}
   * - {@link DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票}
   * - {@link DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送}
   * - {@link DamaiDistributionRefundOrder 大麦第三方票务供应商接入 > 退票通知}
   * - {@link DamaiDistributionRefundRule 大麦第三方票务供应商接入 > 项目退款规则}
   * - {@link DamaiDistributionSendExpress 大麦第三方票务供应商接入 > 履约发快递成功通知三方}
   * - {@link DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更}
   */
  type DamaiDistribution = DamaiDistributionMatchSeat
    | DamaiDistributionPerformCancel
    | DamaiDistributionPerformStatus
    | DamaiDistributionPreSaleToNow
    | DamaiDistributionProjectStatus
    | DamaiDistributionRefundOrder
    | DamaiDistributionRefundRule
    | DamaiDistributionSendExpress
    | DamaiDistributionTicketItemStatus;
  /**
   * - {@link DamaiMevDatasyncTalkMaitix 大麦 > maitix与datasync数据同步}
   */
  type DamaiMev = DamaiMevDatasyncTalkMaitix;
  /**
   * - {@link DamaiMzEventStateChange 大麦 > 场次状态通知接口}
   * - {@link DamaiMzForwardMessage 大麦 > 大麦新麦座消息}
   * - {@link DamaiMzOrderChangeState 大麦 > 订单状态变动通知}
   * - {@link DamaiMzOrderRefund 大麦 > 麦座退单审核通过通知}
   * - {@link DamaiMzOrderStateChange 大麦 > 订单状态通知}
   * - {@link DamaiMzSeatStateChange 大麦 > 大麦麦座座位状态变化消息}
   * - {@link DamaiMzTicketStateChange 大麦 > 大麦麦座票状态变化消息}
   * - {@link DamaiMzUserRegister 大麦 > 麦座会员注册成功通知}
   */
  type DamaiMz = DamaiMzEventStateChange
    | DamaiMzForwardMessage
    | DamaiMzOrderChangeState
    | DamaiMzOrderRefund
    | DamaiMzOrderStateChange
    | DamaiMzSeatStateChange
    | DamaiMzTicketStateChange
    | DamaiMzUserRegister;
  /**
   * - {@link DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送}
   */
  type DamaiTrade = DamaiTradeTicketStatusPush;
  /**
   * - {@link EleEnterprisePushOrderDetail 饿了么 > 饿了么企业订餐推送订单详情}
   */
  type EleEnterprise = EleEnterprisePushOrderDetail;
  /**
   * - {@link ElemeBankstatementGet 饿了么 > 饿了么银行流水对接}
   */
  type ElemeBankstatement = ElemeBankstatementGet;
  /**
   * - {@link ElemeRetailPosOrderMessage 饿了么 > 饿了么零售智慧菜场订单状态消息}
   */
  type ElemeRetail = ElemeRetailPosOrderMessage;
  /**
   * - {@link FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化}
   */
  type FliggyBtrip = FliggyBtripHotelDistributionOrderChange;
  /**
   * - {@link FliggyInteractHaitunEventCreate 飞猪 > 飞猪互动海豚事件产生}
   */
  type FliggyInteract = FliggyInteractHaitunEventCreate;
  /**
   * - {@link FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务}
   */
  type FliggyJipiao = FliggyJipiaoFlightChange;
  /**
   * - {@link FliggyMemberLevelChange 飞猪 > 通知合作商家飞猪会员等级变更消息}
   */
  type FliggyMember = FliggyMemberLevelChange;
  /**
   * - {@link FliggyPushHaitunEventCreate 飞猪 > 飞猪多端投放体系海豚事件产生}
   */
  type FliggyPush = FliggyPushHaitunEventCreate;
  /**
   * - {@link FliggyShtOrderMsg 飞猪 > 飞猪四海通订单消息}
   */
  type FliggySht = FliggyShtOrderMsg;
  /**
   * - {@link FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息}
   * - {@link FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息}
   * - {@link FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息}
   */
  type FliggyTicket = FliggyTicketOrderRefund
    | FliggyTicketOrderStatusChange
    | FliggyTicketVerifyNotify;
  /**
   * - {@link FliggyVisaApplicantStatusChanged 飞猪 > 签证申请人状态变更消息}
   * - {@link FliggyVisaStatusChange 飞猪 > 签证状态变化消息}
   */
  type FliggyVisa = FliggyVisaApplicantStatusChanged
    | FliggyVisaStatusChange;
  /**
   * - {@link FliggyXhotelComboCreateResult 飞猪 > 套餐创建消息回传}
   */
  type FliggyXhotel = FliggyXhotelComboCreateResult;
  /**
   * - {@link FuwuConfirmFail 服务市场 > 收入确认失败}
   * - {@link FuwuConfirmSuccess 服务市场 > 收入确认成功}
   */
  type FuwuConfirm = FuwuConfirmFail
    | FuwuConfirmSuccess;
  /**
   * - {@link GaodeCaijiEccTaskAuditStatusNotify 高德 > 高德采集生态小程序任务状态通知}
   */
  type GaodeCaiji = GaodeCaijiEccTaskAuditStatusNotify;
  /**
   * - {@link GenieGscOrderStatusUpdate 天猫精灵供应链 > 单据状态同步}
   */
  type GenieGsc = GenieGscOrderStatusUpdate;
  /**
   * - {@link GlobalVirtualMerchantSendCode 国际虚拟业务 > 国际虚拟业务对接码商}
   */
  type GlobalVirtual = GlobalVirtualMerchantSendCode;
  /**
   * - {@link GovAuctionAuctionOrderPaid 大资产拍卖Top端拍品消息 > 订单支付消息}
   * - {@link GovAuctionEnd 大资产拍卖Top端拍品消息 > 大资产拍卖拍品结束消息}
   * - {@link GovAuctionEndImmediate 大资产拍卖Top端拍品消息 > 标的结束即刻消息}
   * - {@link GovAuctionPublish 大资产拍卖Top端拍品消息 > 大资产标的上架消息}
   * - {@link GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马}
   * - {@link GovAuctionQuanAnAssetsPack 大资产拍卖Top端拍品消息 > 全案资产打包信息}
   * - {@link GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送}
   */
  type GovAuction = GovAuctionAuctionOrderPaid
    | GovAuctionEnd
    | GovAuctionEndImmediate
    | GovAuctionPublish
    | GovAuctionPushVehicleDataToBM
    | GovAuctionQuanAnAssetsPack
    | GovAuctionVehicleDataPush;
  /**
   * - {@link GovQualSubmit 资产拍卖 > 拍品资质审核提交消息}
   */
  type GovQual = GovQualSubmit;
  /**
   * - {@link GovRadarclueExcelFinish 竞价雷达 > 财产线索Excel监控源解析结果通知}
   * - {@link GovRadarclueInfo 竞价雷达 > 财产线索定时统计消息通知}
   */
  type GovRadarclue = GovRadarclueExcelFinish
    | GovRadarclueInfo;
  /**
   * - {@link IcbuAlicrmCustomerModified ICBU > 客户信息变更同步小满}
   * - {@link IcbuAlicrmNoteModified ICBU > 客户通小记变更}
   * - {@link IcbuAlicrmOfflineDataChanged ICBU > 客户通离线数据变更同步}
   */
  type IcbuAlicrm = IcbuAlicrmCustomerModified
    | IcbuAlicrmNoteModified
    | IcbuAlicrmOfflineDataChanged;
  /**
   * - {@link IcbuChatMessageTipForXiaoMan ICBU > ICBU沟通消息推送给小满提醒}
   */
  type IcbuChat = IcbuChatMessageTipForXiaoMan;
  /**
   * - {@link IcbuCrmGgsXMOrderChange ICBU > ICBU CRM小满订单状态变更通知（GGS港台）}
   * - {@link IcbuCrmXMOrderChange ICBU > ICBU CRM小满订单状态变更通知}
   */
  type IcbuCrm = IcbuCrmGgsXMOrderChange
    | IcbuCrmXMOrderChange;
  /**
   * - {@link IcbuMemberXmUnBind ICBU > icbu国际站账号解绑小满账号}
   */
  type IcbuMember = IcbuMemberXmUnBind;
  /**
   * - {@link IcbuRiskZeroersMessage ICBU > 天鹿风控事件异步消息结果}
   */
  type IcbuRisk = IcbuRiskZeroersMessage;
  /**
   * - {@link IcbuTradeOrderNotify ICBU-交易 > 国际站订单变更消息}
   */
  type IcbuTrade = IcbuTradeOrderNotify;
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
   * - {@link IdleCroPunishMsg 闲鱼 > 闲鱼安全处罚消息}
   */
  type IdleCro = IdleCroPunishMsg;
  /**
   * - {@link IdleCycleshopGoodsNotice 闲鱼 > 闲鱼循环商店-货品变更通知}
   * - {@link IdleCycleshopSaleOrderNotice 闲鱼 > 闲鱼循环商店-销售单变更通知}
   */
  type IdleCycleshop = IdleCycleshopGoodsNotice
    | IdleCycleshopSaleOrderNotice;
  /**
   * - {@link IdleNewoutletsUserTagNotice 闲鱼 > 闲鱼用户身份变更消息}
   */
  type IdleNewoutlets = IdleNewoutletsUserTagNotice;
  /**
   * - {@link IdleRecycleOrderStateSyn 闲鱼回收商消息 > 闲鱼回收业务订单消息}
   * - {@link IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息}
   * - {@link IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息}
   */
  type IdleRecycle = IdleRecycleOrderStateSyn
    | IdleRecycleOrderSyn
    | IdleRecycleRefundStatusModify;
  /**
   * - {@link IdleTopisvCompensateNotice 闲鱼已验货 > 闲鱼开放平台-服务赔付单变更消息通知}
   * - {@link IdleTopisvGlobalProductNotice 闲鱼已验货 > 闲鱼开放平台-国际货品变更消息通知}
   * - {@link IdleTopisvItemNotice 闲鱼已验货 > 闲鱼开放平台-商品变更消息通知}
   * - {@link IdleTopisvRefundNotice 闲鱼已验货 > 闲鱼开放平台-订单逆向变更消息通知}
   * - {@link IdleTopisvTradeNotice 闲鱼已验货 > 闲鱼开放平台-订单变更消息通知}
   */
  type IdleTopisv = IdleTopisvCompensateNotice
    | IdleTopisvGlobalProductNotice
    | IdleTopisvItemNotice
    | IdleTopisvRefundNotice
    | IdleTopisvTradeNotice;
  /**
   * - {@link IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息}
   */
  type IdleTranferpay = IdleTranferpayOrderChange;
  /**
   * - {@link IdleTwjdOrderSyn 闲鱼 > 闲鱼图文鉴定业务订单消息}
   */
  type IdleTwjd = IdleTwjdOrderSyn;
  /**
   * - {@link IntimeDatacenterOrderStatus 银泰 > 状态同步}
   */
  type IntimeDatacenter = IntimeDatacenterOrderStatus;
  /**
   * - {@link IntimeScOrderCreateUpdate 银泰 > 服务单创建和更新}
   */
  type IntimeSc = IntimeScOrderCreateUpdate;
  /**
   * - {@link JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息}
   */
  type JaeTrade = JaeTradePaidSuccessed;
  /**
   * - {@link JymOrderBoosterStatusChange 交易猫 > 交易猫代练订单状态变更}
   */
  type JymOrder = JymOrderBoosterStatusChange;
  /**
   * - {@link LarkTradePosTradeDataTransmit 云智POS > 云智POS离线交易信息同步}
   */
  type LarkTrade = LarkTradePosTradeDataTransmit;
  /**
   * - {@link LianfanHuiwaModelStateUpdate 连凡 > 绘蛙模型状态变更消息}
   * - {@link LianfanHuiwaTaskStateUpdate 连凡 > 绘蛙生图任务状态变更消息}
   */
  type LianfanHuiwa = LianfanHuiwaModelStateUpdate
    | LianfanHuiwaTaskStateUpdate;
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
   * - {@link TaobaoAgRefundBroad AliGenius > AG退款消息广播}
   * - {@link TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息}
   * - {@link TaobaoAgSignInfo AliGenius > AG仓库核验信息}
   * - {@link TaobaoAgTicketsMsg AliGenius > 商家工单消息}
   */
  type TaobaoAg = TaobaoAgRefundBroad
    | TaobaoAgRefundSignInfo
    | TaobaoAgSignInfo
    | TaobaoAgTicketsMsg;
  /**
   * - {@link TaobaoAisCommonMessage 淘宝 > 厂商协同统一消息}
   */
  type TaobaoAis = TaobaoAisCommonMessage;
  /**
   * - {@link TaobaoAlipicWuyatestoutmsg 淘宝 > 异业会员正向消息测试}
   */
  type TaobaoAlipic = TaobaoAlipicWuyatestoutmsg;
  /**
   * - {@link TaobaoAlscDaodianOrderAfterSaleRefund 淘宝 > 本地生活到店交易逆向售后退款消息通知}
   * - {@link TaobaoAlscDaodianOrderAgreeRefund 淘宝 > 本地生活到店交易，逆向单审核通过消息通知}
   * - {@link TaobaoAlscDaodianOrderApplyRefund 淘宝 > 本地生活到店交易用户发起退款消息通知}
   * - {@link TaobaoAlscDaodianOrderDeliver 淘宝 > 本地生活到店订单发货成功消息通知}
   * - {@link TaobaoAlscDaodianOrderRejectRefund 淘宝 > 本地生活到店交易逆向单审核拒绝消息通知}
   * - {@link TaobaoAlscDaodianTicketUsed 淘宝 > 本地生活到店凭证核销消息通知}
   */
  type TaobaoAlsc = TaobaoAlscDaodianOrderAfterSaleRefund
    | TaobaoAlscDaodianOrderAgreeRefund
    | TaobaoAlscDaodianOrderApplyRefund
    | TaobaoAlscDaodianOrderDeliver
    | TaobaoAlscDaodianOrderRejectRefund
    | TaobaoAlscDaodianTicketUsed;
  /**
   * - {@link TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复}
   * - {@link TaobaoApsNewFeedback 平台消息 > 收到舆情}
   */
  type TaobaoAps = TaobaoApsCommentAdd
    | TaobaoApsNewFeedback;
  /**
   * - {@link TaobaoAuctionApplyEvent 淘宝 > 大资产拍卖报名消息}
   * - {@link TaobaoAuctionBidEvent 淘宝 > 大资产拍卖出价消息}
   * - {@link TaobaoAuctionQuanAnEvaluatePrice 淘宝 > 拍卖全案评估价变更消息}
   */
  type TaobaoAuction = TaobaoAuctionApplyEvent
    | TaobaoAuctionBidEvent
    | TaobaoAuctionQuanAnEvaluatePrice;
  /**
   * - {@link TaobaoAxinAlipayDkSignCallBack 阿信消息通知前台类目 > 支付宝代扣签约回调消息}
   * - {@link TaobaoAxinDivisionApplyResult 阿信消息通知前台类目 > 新增行政区划结果通知}
   * - {@link TaobaoAxinHotelChangeEvent 阿信消息通知前台类目 > 阿信酒店RP变更通知}
   * - {@link TaobaoAxinHotelOrderStatus 阿信消息通知前台类目 > 阿信酒店分销订单状态变更通知}
   * - {@link TaobaoAxinPackageOrderChange 阿信消息通知前台类目 > 阿信订单变更消息}
   * - {@link TaobaoAxinPackageProductChange 阿信消息通知前台类目 > 阿信酒套产品价库变更消息}
   * - {@link TaobaoAxinPoiApplyResult 阿信消息通知前台类目 > 新增POI结果通知}
   * - {@link TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息}
   */
  type TaobaoAxin = TaobaoAxinAlipayDkSignCallBack
    | TaobaoAxinDivisionApplyResult
    | TaobaoAxinHotelChangeEvent
    | TaobaoAxinHotelOrderStatus
    | TaobaoAxinPackageOrderChange
    | TaobaoAxinPackageProductChange
    | TaobaoAxinPoiApplyResult
    | TaobaoAxinRefundCallBack;
  /**
   * - {@link TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活}
   * - {@link TaobaoBaichuanBrandInfoSend 百川 > 百川媒体品牌号获取}
   * - {@link TaobaoBaichuanBrandSync 百川 > 媒体内容数据同步接口}
   * - {@link TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息}
   * - {@link TaobaoBaichuanTaoPasswordRule 百川 > 淘口令规则发生变化}
   */
  type TaobaoBaichuan = TaobaoBaichuanASODeviceActivate
    | TaobaoBaichuanBrandInfoSend
    | TaobaoBaichuanBrandSync
    | TaobaoBaichuanPasswordRuleChange
    | TaobaoBaichuanTaoPasswordRule;
  /**
   * - {@link TaobaoBaoxianAcceptInsurance 淘宝 > 淘宝保险出单数据消息}
   * - {@link TaobaoBaoxianClaimApply 淘宝 > 保险理赔消息}
   * - {@link TaobaoBaoxianClaimSuccess 淘宝 > 理赔结果给保险公司消息}
   * - {@link TaobaoBaoxianEndorsementSuccess 淘宝 > 批单成功给保险公司消息}
   * - {@link TaobaoBaoxianIssue 淘宝 > 承保中心出单消息}
   * - {@link TaobaoBaoxianIssueSuccess 淘宝 > 出单成功给保险公司消息}
   * - {@link TaobaoBaoxianSurrenderredResult 淘宝 > 退保结果给保险公司消息}
   */
  type TaobaoBaoxian = TaobaoBaoxianAcceptInsurance
    | TaobaoBaoxianClaimApply
    | TaobaoBaoxianClaimSuccess
    | TaobaoBaoxianEndorsementSuccess
    | TaobaoBaoxianIssue
    | TaobaoBaoxianIssueSuccess
    | TaobaoBaoxianSurrenderredResult;
  /**
   * - {@link TaobaoBashliveLiveEventChange 淘宝 > 本地生活直播氛围数据共享}
   */
  type TaobaoBashlive = TaobaoBashliveLiveEventChange;
  /**
   * - {@link TaobaoBmcShortMessageStatus 导购平台 > 短信状态}
   */
  type TaobaoBmc = TaobaoBmcShortMessageStatus;
  /**
   * - {@link TaobaoBusInsureStatus 淘宝汽车票 > 保险投保退保状态}
   * - {@link TaobaoBusTVMTradePay 淘宝汽车票 > 自助机付款成功结果}
   * - {@link TaobaoBusTVMTradePayStatusNotice 淘宝汽车票 > 交易支付状态节点通知}
   * - {@link TaobaoBusTVMTradePaySuccess 淘宝汽车票 > 支付成功回调消息}
   * - {@link TaobaoBusTradePayStatus 淘宝汽车票 > 交易支付状态节点}
   */
  type TaobaoBus = TaobaoBusInsureStatus
    | TaobaoBusTVMTradePay
    | TaobaoBusTVMTradePayStatusNotice
    | TaobaoBusTVMTradePaySuccess
    | TaobaoBusTradePayStatus;
  /**
   * - {@link TaobaoCarleaseFreeDpOrderMsgSend 天猫服务 > 天猫汽车直租免首付订单消息}
   */
  type TaobaoCarlease = TaobaoCarleaseFreeDpOrderMsgSend;
  /**
   * - {@link TaobaoCcoAlipayCase 淘宝 > CCO工单通知支付宝}
   * - {@link TaobaoCcoGjCase 淘宝 > cco工单创建广交通知}
   */
  type TaobaoCco = TaobaoCcoAlipayCase
    | TaobaoCcoGjCase;
  /**
   * - {@link TaobaoContentAuditAutocut 淘宝交易 > 智能混剪发布视频空间审核结果}
   * - {@link TaobaoContentAuditMvx 淘宝交易 > 视频工具发布视频空间审核结果}
   * - {@link TaobaoContentOrderAuditChange 淘宝交易 > 短视频模板订单审核状态更新}
   * - {@link TaobaoContentOrderPaid 淘宝交易 > 内容开放短视频模板支付消息}
   * - {@link TaobaoContentTaoSubChanged 淘宝交易 > [淘宝订阅]变更通知}
   */
  type TaobaoContent = TaobaoContentAuditAutocut
    | TaobaoContentAuditMvx
    | TaobaoContentOrderAuditChange
    | TaobaoContentOrderPaid
    | TaobaoContentTaoSubChanged;
  /**
   * - {@link TaobaoDaifaBindChange 代发管理 > 关系绑定更改}
   * - {@link TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息}
   * - {@link TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息}
   * - {@link TaobaoDaifaUserJoin 代发管理 > 代发用户入驻}
   */
  type TaobaoDaifa = TaobaoDaifaBindChange
    | TaobaoDaifaDistributorOrderStatusChange
    | TaobaoDaifaSupplierOrderStatusChange
    | TaobaoDaifaUserJoin;
  /**
   * - {@link TaobaoDatapushQueryBiz 淘宝 > 数据推送查询订单}
   */
  type TaobaoDatapush = TaobaoDatapushQueryBiz;
  /**
   * - {@link TaobaoDdPush 淘宝点点 > 淘点点消息推送}
   */
  type TaobaoDd = TaobaoDdPush;
  /**
   * - {@link TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息}
   */
  type TaobaoDiandian = TaobaoDiandianServeOrder;
  /**
   * - {@link TaobaoDisputeExchangeAgree 淘宝 > 同意换货}
   * - {@link TaobaoDisputeExchangeClosed 淘宝 > 买家关闭换货协议}
   * - {@link TaobaoDisputeExchangeModified 淘宝 > 买家修改换货申请}
   * - {@link TaobaoDisputeExchangeSellerConfirmed 淘宝 > 卖家确认收货}
   * - {@link TaobaoDisputeExchangeSellerGoodsConsigned 淘宝 > 换货-卖家寄出商品}
   * - {@link TaobaoDisputeExchangeSuccess 淘宝 > 买家确认收货,换货成功}
   * - {@link TaobaoDisputeExchangeTurnToRefund 淘宝 > 卖家换货转退款}
   * - {@link TaobaoDisputeRefundCreated 淘宝 > 新退款创建}
   * - {@link TaobaoDisputeRefundPriceProtect 淘宝 > 价保退款成功}
   * - {@link TaobaoDisputeRefundSuccess 淘宝 > 新退款成功消息}
   * - {@link TaobaoDisputeTaobaoInterApplied 淘宝 > 申请小二介入}
   */
  type TaobaoDispute = TaobaoDisputeExchangeAgree
    | TaobaoDisputeExchangeClosed
    | TaobaoDisputeExchangeModified
    | TaobaoDisputeExchangeSellerConfirmed
    | TaobaoDisputeExchangeSellerGoodsConsigned
    | TaobaoDisputeExchangeSuccess
    | TaobaoDisputeExchangeTurnToRefund
    | TaobaoDisputeRefundCreated
    | TaobaoDisputeRefundPriceProtect
    | TaobaoDisputeRefundSuccess
    | TaobaoDisputeTaobaoInterApplied;
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
   * - {@link TaobaoEinvoiceInvoiceRequestCreate 电子发票 > 电子发票开票请求}
   * - {@link TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流}
   */
  type TaobaoEinvoice = TaobaoEinvoiceBuyerConfirmSend
    | TaobaoEinvoiceInvoiceRequestCreate
    | TaobaoEinvoiceInvoiceResultReturn;
  /**
   * - {@link TaobaoEppOrderCreate 淘宝 > epp企业购对接isv订单状态同步}
   * - {@link TaobaoEppPurchaseOrderStatusUpdate 淘宝 > 天猫企业购实物采购单状态变更消息}
   */
  type TaobaoEpp = TaobaoEppOrderCreate
    | TaobaoEppPurchaseOrderStatusUpdate;
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
   * - {@link TaobaoFenxiaoFxOrderTransfered 淘宝分销 > 采购单结算完成}
   * - {@link TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息}
   * - {@link TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息}
   * - {@link TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息}
   * - {@link TaobaoFenxiaoFxRefundModify 淘宝分销 > 分销退款单修改}
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
    | TaobaoFenxiaoFxOrderTransfered
    | TaobaoFenxiaoFxRefundAgree
    | TaobaoFenxiaoFxRefundClose
    | TaobaoFenxiaoFxRefundCreate
    | TaobaoFenxiaoFxRefundModify
    | TaobaoFenxiaoFxRefundRefuseGoods
    | TaobaoFenxiaoFxRefundSuccess
    | TaobaoFenxiaoFxTradeRefundCreate
    | TaobaoFenxiaoFxTradeRefundSuccess;
  /**
   * - {@link TaobaoFilmExternalOrderPush 淘宝 > 淘宝电影tforder消息推送（外部）}
   * - {@link TaobaoFilmOrderPush 淘宝 > 淘宝电影tforder消息推送}
   * - {@link TaobaoFilmRefundTicketPush 淘宝 > 淘宝电影退票消息推送}
   */
  type TaobaoFilm = TaobaoFilmExternalOrderPush
    | TaobaoFilmOrderPush
    | TaobaoFilmRefundTicketPush;
  /**
   * - {@link TaobaoFliggyCommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息}
   * - {@link TaobaoFliggyHspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息}
   * - {@link TaobaoFliggyHspHotelIcItemChange 酒店签约中心消息 > HSP酒店商品库价变更消息}
   * - {@link TaobaoFliggyMciIndex 酒店签约中心消息 > 商家项目mci}
   * - {@link TaobaoFliggySignStatus 酒店签约中心消息 > 飞猪签约状态消息}
   * - {@link TaobaoFliggyStdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息}
   * - {@link TaobaoFliggyStdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息}
   * - {@link TaobaoFliggySycm 酒店签约中心消息 > 消息推送}
   */
  type TaobaoFliggy = TaobaoFliggyCommonContractSign
    | TaobaoFliggyHspHicItemChange
    | TaobaoFliggyHspHotelIcItemChange
    | TaobaoFliggyMciIndex
    | TaobaoFliggySignStatus
    | TaobaoFliggyStdHotelModify
    | TaobaoFliggyStdRoomTypeModify
    | TaobaoFliggySycm;
  /**
   * - {@link TaobaoFscRouteOrderStatusChange 阿信消息通知前台类目 > 线路订单状态变更通知}
   */
  type TaobaoFsc = TaobaoFscRouteOrderStatusChange;
  /**
   * - {@link TaobaoFuwuAddressChanged 服务市场 > 收货地址发生变更}
   * - {@link TaobaoFuwuFundsChange 服务市场 > 以旧换新资金变更通知消息}
   * - {@link TaobaoFuwuOrderClosed 服务市场 > 订单关闭消息}
   * - {@link TaobaoFuwuOrderCreated 服务市场 > 订单创建消息}
   * - {@link TaobaoFuwuOrderPaid 服务市场 > 订单支付消息}
   * - {@link TaobaoFuwuRecycleFinalService 服务市场 > 以旧换新取送一体服务最终决策通知}
   * - {@link TaobaoFuwuRecycleOut 服务市场 > 上门换新回收信息}
   * - {@link TaobaoFuwuServiceOpen 服务市场 > 服务开通消息}
   * - {@link TaobaoFuwuSubCreated 服务市场 > 订购消息}
   * - {@link TaobaoFuwuWitkeySyncModeling 服务市场 > 威客同步建模数据}
   */
  type TaobaoFuwu = TaobaoFuwuAddressChanged
    | TaobaoFuwuFundsChange
    | TaobaoFuwuOrderClosed
    | TaobaoFuwuOrderCreated
    | TaobaoFuwuOrderPaid
    | TaobaoFuwuRecycleFinalService
    | TaobaoFuwuRecycleOut
    | TaobaoFuwuServiceOpen
    | TaobaoFuwuSubCreated
    | TaobaoFuwuWitkeySyncModeling;
  /**
   * - {@link TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息}
   */
  type TaobaoGlobalbuys = TaobaoGlobalbuysSeamailOrderNotify;
  /**
   * - {@link TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback}
   * - {@link TaobaoHomeaiHomestylerRenderResult HOMEAI消息对接 > 居然极速渲染结果}
   * - {@link TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果}
   * - {@link TaobaoHomeaiModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系}
   * - {@link TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息}
   */
  type TaobaoHomeai = TaobaoHomeaiCaseSyncResult
    | TaobaoHomeaiHomestylerRenderResult
    | TaobaoHomeaiLayoutTransferResult
    | TaobaoHomeaiModelSkuRelation
    | TaobaoHomeaiRenderRequest;
  /**
   * - {@link TaobaoHotelControlMsg 酒店签约中心消息 > 酒店管控中心消息通知}
   * - {@link TaobaoHotelCreditToPreHotelStatus 酒店签约中心消息 > 信用住转预付酒店签约状态消息}
   * - {@link TaobaoHotelDistributionOrderChange 酒店签约中心消息 > 分销渠道订单变动通知}
   * - {@link TaobaoHotelEbkCommonMessage 酒店签约中心消息 > 通用消息提醒}
   * - {@link TaobaoHotelOrderChange 酒店签约中心消息 > 订单变动通知}
   * - {@link TaobaoHotelSearchMonitor 酒店签约中心消息 > 酒店搜索触发商品更新消息}
   * - {@link TaobaoHotelSearchTrigger 酒店签约中心消息 > 热搜酒店消息}
   * - {@link TaobaoHotelSignRollback 酒店签约中心消息 > 飞猪单体酒店签约重置}
   */
  type TaobaoHotel = TaobaoHotelControlMsg
    | TaobaoHotelCreditToPreHotelStatus
    | TaobaoHotelDistributionOrderChange
    | TaobaoHotelEbkCommonMessage
    | TaobaoHotelOrderChange
    | TaobaoHotelSearchMonitor
    | TaobaoHotelSearchTrigger
    | TaobaoHotelSignRollback;
  /**
   * - {@link TaobaoIdlefishRentContractClose 淘宝 > 合约关闭通知}
   * - {@link TaobaoIdlefishSellerPaid 淘宝 > 打款给房东消息}
   */
  type TaobaoIdlefish = TaobaoIdlefishRentContractClose
    | TaobaoIdlefishSellerPaid;
  /**
   * - {@link TaobaoIfashionItemAmountChanged 淘宝 > 库存变更}
   * - {@link TaobaoIfashionItemInfoCreate 淘宝 > 商品基础信息创建}
   * - {@link TaobaoIfashionOrderCreate 淘宝 > 创建单据}
   */
  type TaobaoIfashion = TaobaoIfashionItemAmountChanged
    | TaobaoIfashionItemInfoCreate
    | TaobaoIfashionOrderCreate;
  /**
   * - {@link TaobaoIhomeAigcTaskChange 淘宝 > aigc任务状态变更}
   */
  type TaobaoIhome = TaobaoIhomeAigcTaskChange;
  /**
   * - {@link TaobaoInventoryShareInventory 淘宝 > 天猫国际共享库存订单push}
   */
  type TaobaoInventory = TaobaoInventoryShareInventory;
  /**
   * - {@link TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息}
   */
  type TaobaoIstore = TaobaoIstoreGiftingMsg;
  /**
   * - {@link TaobaoItemAuditResultNotify 淘宝商品 > 淘宝商品审核结果消息通知}
   * - {@link TaobaoItemDistributeItemEdit 淘宝商品 > 商品变更消息通知}
   * - {@link TaobaoItemItemAdd 淘宝商品 > 商品新增消息}
   * - {@link TaobaoItemItemDelete 淘宝商品 > 商品删除消息}
   * - {@link TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息}
   * - {@link TaobaoItemItemOfflineNotice 淘宝商品 > 淘宝商品下降消息提醒}
   * - {@link TaobaoItemItemPunishCc 淘宝商品 > 小二CC商品消息}
   * - {@link TaobaoItemItemPunishDelete 淘宝商品 > 小二删除商品消息}
   * - {@link TaobaoItemItemPunishDownshelf 淘宝商品 > 小二下架商品消息}
   * - {@link TaobaoItemItemRecommendAdd 淘宝商品 > 橱窗推荐商品消息}
   * - {@link TaobaoItemItemRecommendDelete 淘宝商品 > 取消橱窗推荐商品消息}
   * - {@link TaobaoItemItemSkuZeroStock 淘宝商品 > 商品SKU卖空消息}
   * - {@link TaobaoItemItemStockChanged 淘宝商品 > 修改商品库存消息}
   * - {@link TaobaoItemItemStockChangedOut 淘宝商品 > 淘宝开放平台内部使用库存变更消息out}
   * - {@link TaobaoItemItemUpdate 淘宝商品 > 商品更新消息}
   * - {@link TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息}
   * - {@link TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息}
   */
  type TaobaoItem = TaobaoItemAuditResultNotify
    | TaobaoItemDistributeItemEdit
    | TaobaoItemItemAdd
    | TaobaoItemItemDelete
    | TaobaoItemItemDownshelf
    | TaobaoItemItemOfflineNotice
    | TaobaoItemItemPunishCc
    | TaobaoItemItemPunishDelete
    | TaobaoItemItemPunishDownshelf
    | TaobaoItemItemRecommendAdd
    | TaobaoItemItemRecommendDelete
    | TaobaoItemItemSkuZeroStock
    | TaobaoItemItemStockChanged
    | TaobaoItemItemStockChangedOut
    | TaobaoItemItemUpdate
    | TaobaoItemItemUpshelf
    | TaobaoItemItemZeroStock;
  /**
   * - {@link TaobaoItemmarketItemDistributorChange 淘宝 > 三方货源分销商货品消息}
   * - {@link TaobaoItemmarketItemRelationChange 淘宝 > 铺货成功推送}
   * - {@link TaobaoItemmarketMaterialChange 淘宝 > 货品素材信息变更}
   * - {@link TaobaoItemmarketPurchaseDistributorChange 淘宝 > 三方货源分销商采购单消息}
   * - {@link TaobaoItemmarketPurchaseOrderChange 淘宝 > 三方货源采购单变更}
   * - {@link TaobaoItemmarketVideoCreate 淘宝 > 货品视频创建}
   */
  type TaobaoItemmarket = TaobaoItemmarketItemDistributorChange
    | TaobaoItemmarketItemRelationChange
    | TaobaoItemmarketMaterialChange
    | TaobaoItemmarketPurchaseDistributorChange
    | TaobaoItemmarketPurchaseOrderChange
    | TaobaoItemmarketVideoCreate;
  /**
   * - {@link TaobaoJaqAuditResult 淘宝 > 聚安全实人认证审核结果}
   */
  type TaobaoJaq = TaobaoJaqAuditResult;
  /**
   * - {@link TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口}
   * - {@link TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知}
   * - {@link TaobaoJipiaoJipiaoOrderChanged 淘宝机票 > 机票订单变更}
   * - {@link TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送}
   * - {@link TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送}
   * - {@link TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知}
   * - {@link TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知}
   * - {@link TaobaoJipiaoUrgeIssueTicket 淘宝机票 > 催出票/拦截出票消息}
   */
  type TaobaoJipiao = TaobaoJipiaoAncillaryOrderPaid
    | TaobaoJipiaoJipiaoModifyOrderNotify
    | TaobaoJipiaoJipiaoOrderChanged
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
   * - {@link TaobaoKcbMsg 淘宝 > 库存宝消息}
   */
  type TaobaoKcb = TaobaoKcbMsg;
  /**
   * - {@link TaobaoLbsMonitorPush 淘宝 > 支付宝位移监控消息推送}
   * - {@link TaobaoLbsUserMonitorPush 淘宝 > 支付宝用户位移消息推送}
   */
  type TaobaoLbs = TaobaoLbsMonitorPush
    | TaobaoLbsUserMonitorPush;
  /**
   * - {@link TaobaoLifeGroupActivityNotify 淘宝 > 本地生活生服拼团活动变更提醒}
   * - {@link TaobaoLifeOrder 淘宝 > 生活服务订单消息订阅}
   * - {@link TaobaoLifeOrderNotify 淘宝 > 本地生活生服行业订单触达}
   * - {@link TaobaoLifeStoreInfoChange 淘宝 > 生服门店变更同步消息}
   */
  type TaobaoLife = TaobaoLifeGroupActivityNotify
    | TaobaoLifeOrder
    | TaobaoLifeOrderNotify
    | TaobaoLifeStoreInfoChange;
  /**
   * - {@link TaobaoLifeserviceItemMsg 淘宝 > 本地生活生服商品消息}
   */
  type TaobaoLifeservice = TaobaoLifeserviceItemMsg;
  /**
   * - {@link TaobaoLiveAgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知}
   * - {@link TaobaoLiveAlipayStatusChange 淘宝直播API > 淘宝直播开播或关闭}
   * - {@link TaobaoLiveAnchorRoleChange 淘宝直播API > 主播注册身份时通知}
   * - {@link TaobaoLiveBdshLiveEventChange 淘宝直播API > 本地生活直播间氛围消息}
   * - {@link TaobaoLiveBookInfoChange 淘宝直播API > 直播预约信息变更}
   * - {@link TaobaoLiveFeedRelated 淘宝直播API > 淘宝直播上下播消息}
   * - {@link TaobaoLivePrintScreen 淘宝直播API > 淘宝直播结帧}
   * - {@link TaobaoLiveRoomItemChange 淘宝直播API > 直播间添加宝贝}
   * - {@link TaobaoLiveRoomStatusChange 淘宝直播API > 支付宝直播间状态变更消息}
   * - {@link TaobaoLiveStatusChange 淘宝直播API > 淘宝直播流状态变更}
   * - {@link TaobaoLiveTcpOrder 淘宝直播API > 淘宝直播订单消息}
   */
  type TaobaoLive = TaobaoLiveAgencyItemChanged
    | TaobaoLiveAlipayStatusChange
    | TaobaoLiveAnchorRoleChange
    | TaobaoLiveBdshLiveEventChange
    | TaobaoLiveBookInfoChange
    | TaobaoLiveFeedRelated
    | TaobaoLivePrintScreen
    | TaobaoLiveRoomItemChange
    | TaobaoLiveRoomStatusChange
    | TaobaoLiveStatusChange
    | TaobaoLiveTcpOrder;
  /**
   * - {@link TaobaoLocalOrderPorcess 淘宝 > 通知58订单发生变化}
   */
  type TaobaoLocal = TaobaoLocalOrderPorcess;
  /**
   * - {@link TaobaoLocalorderStatusNotify 淘宝 > 通知到家服务商订单状态变化}
   */
  type TaobaoLocalorder = TaobaoLocalorderStatusNotify;
  /**
   * - {@link TaobaoLogisticsAccept 淘宝物流 > 物流揽收}
   * - {@link TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息}
   * - {@link TaobaoLogisticsUnTaobaoLogstic 淘宝物流 > 非淘物流消息}
   */
  type TaobaoLogistics = TaobaoLogisticsAccept
    | TaobaoLogisticsLogsticDetailTrace
    | TaobaoLogisticsUnTaobaoLogstic;
  /**
   * - {@link TaobaoMiniappArticleContentUnlawful 轻应用 > 小程序文章内容非法}
   * - {@link TaobaoMiniappItemMsg 轻应用 > 轻交易商品状态同步消息}
   * - {@link TaobaoMiniappRefundMsg 轻应用 > 轻应用轻交易退款消息}
   * - {@link TaobaoMiniappTradeMsg 轻应用 > 小程序轻应用轻交易的订单状态同步消息}
   */
  type TaobaoMiniapp = TaobaoMiniappArticleContentUnlawful
    | TaobaoMiniappItemMsg
    | TaobaoMiniappRefundMsg
    | TaobaoMiniappTradeMsg;
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
   * - {@link TaobaoOfnCreditPayStatusChange 淘宝交易 > 信用代扣状态变更同步}
   * - {@link TaobaoOfnNewOrderEventSync 淘宝交易 > 以旧换新新机单事件同步}
   * - {@link TaobaoOfnOrderStatusSync 淘宝交易 > 以旧换新回收单状态同步}
   * - {@link TaobaoOfnRateSync 淘宝交易 > 以旧换新回收单评价消息}
   */
  type TaobaoOfn = TaobaoOfnCreditPayStatusChange
    | TaobaoOfnNewOrderEventSync
    | TaobaoOfnOrderStatusSync
    | TaobaoOfnRateSync;
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
   * - {@link TaobaoOpencrmMobileRankingReceipt 客户运营平台API > 手机热榜回执消息}
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
    | TaobaoOpencrmMobileRankingReceipt
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
   * - {@link TaobaoOpentradeOrderCreated 百川 > 百川订单创建成功}
   * - {@link TaobaoOpentradeOrderModified 百川 > 百川订单修改成功}
   * - {@link TaobaoOpentradePayOrderCreated 百川 > 百川资金流水单创建成功}
   * - {@link TaobaoOpentradePayOrderFailed 百川 > 百川资金流水单处理失败}
   * - {@link TaobaoOpentradePayOrderProceed 百川 > 百川资金流水单处理成功}
   * - {@link TaobaoOpentradeSettleDisburseFailed 百川 > 百川订单分账处理失败}
   * - {@link TaobaoOpentradeSettleDisburseSucceed 百川 > 百川订单分账处理成功}
   */
  type TaobaoOpentrade = TaobaoOpentradeOrderCreated
    | TaobaoOpentradeOrderModified
    | TaobaoOpentradePayOrderCreated
    | TaobaoOpentradePayOrderFailed
    | TaobaoOpentradePayOrderProceed
    | TaobaoOpentradeSettleDisburseFailed
    | TaobaoOpentradeSettleDisburseSucceed;
  /**
   * - {@link TaobaoOsActivityCompleted 营销平台 > 前N有礼活动开奖消息}
   */
  type TaobaoOs = TaobaoOsActivityCompleted;
  /**
   * - {@link TaobaoPaimaiDigitalTradeSuccess 淘宝 > 阿里拍卖数字商品交易成功消息}
   * - {@link TaobaoPaimaiOrderCreate 淘宝 > 二手车xpos订单生成消息}
   * - {@link TaobaoPaimaiOrderPaid 淘宝 > 二手车xpos订单支付完成消息}
   */
  type TaobaoPaimai = TaobaoPaimaiDigitalTradeSuccess
    | TaobaoPaimaiOrderCreate
    | TaobaoPaimaiOrderPaid;
  /**
   * - {@link TaobaoProfitResultNotify 淘宝 > 权益领取结果通知}
   */
  type TaobaoProfit = TaobaoProfitResultNotify;
  /**
   * - {@link TaobaoPunishForall 淘宝 > 淘宝处罚消息}
   */
  type TaobaoPunish = TaobaoPunishForall;
  /**
   * - {@link TaobaoQianniuCreateComment 千牛 > 工单评论}
   * - {@link TaobaoQianniuCreateLog 千牛 > 工单操作记录}
   * - {@link TaobaoQianniuCreateTask 千牛 > 工单创建消息}
   */
  type TaobaoQianniu = TaobaoQianniuCreateComment
    | TaobaoQianniuCreateLog
    | TaobaoQianniuCreateTask;
  /**
   * - {@link TaobaoRdcAgDealRefund 淘宝 > AG退款处理}
   */
  type TaobaoRdc = TaobaoRdcAgDealRefund;
  /**
   * - {@link TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息}
   */
  type TaobaoRdcaligenius = TaobaoRdcaligeniusOrderMsgSend;
  /**
   * - {@link TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据}
   */
  type TaobaoRecycle = TaobaoRecycleOfnPreRedPacketSync;
  /**
   * - {@link TaobaoRefundOrderStatusSync 淘宝退款 > 逆向订单数据同步}
   * - {@link TaobaoRefundRefundBlockMessage 淘宝退款 > 屏蔽退款留言消息-无此消息}
   * - {@link TaobaoRefundRefundBuyerModifyAgreement 淘宝退款 > 买家修改退款协议消息}
   * - {@link TaobaoRefundRefundBuyerReturnGoods 淘宝退款 > 买家退货给卖家消息}
   * - {@link TaobaoRefundRefundClosed 淘宝退款 > 退款关闭消息}
   * - {@link TaobaoRefundRefundCreateMessage 淘宝退款 > 发表退款留言消息}
   * - {@link TaobaoRefundRefundCreated 淘宝退款 > 退款创建消息}
   * - {@link TaobaoRefundRefundSellerAgreeAgreement 淘宝退款 > 卖家同意退款协议消息}
   * - {@link TaobaoRefundRefundSellerRefuseAgreement 淘宝退款 > 卖家拒绝退款协议消息}
   * - {@link TaobaoRefundRefundSuccess 淘宝退款 > 退款成功消息}
   * - {@link TaobaoRefundRefundTimeoutRemind 淘宝退款 > 消息已下线}
   * - {@link TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息}
   * - {@link TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息}
   * - {@link TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息}
   * - {@link TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息}
   */
  type TaobaoRefund = TaobaoRefundOrderStatusSync
    | TaobaoRefundRefundBlockMessage
    | TaobaoRefundRefundBuyerModifyAgreement
    | TaobaoRefundRefundBuyerReturnGoods
    | TaobaoRefundRefundClosed
    | TaobaoRefundRefundCreateMessage
    | TaobaoRefundRefundCreated
    | TaobaoRefundRefundSellerAgreeAgreement
    | TaobaoRefundRefundSellerRefuseAgreement
    | TaobaoRefundRefundSuccess
    | TaobaoRefundRefundTimeoutRemind
    | TaobaoRefundRefundableCanceled
    | TaobaoRefundRefundableMarked
    | TaobaoRefundTaobaoInterApplied
    | TaobaoRefundTaobaoIntervened;
  /**
   * - {@link TaobaoRhinoDeliveryUpdate 智能制造API > 订单发货通知}
   * - {@link TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更}
   * - {@link TaobaoRhinoIntegrationCutProgressUpdateMessage 智能制造API > 裁剪进度变更消息}
   * - {@link TaobaoRhinoIntegrationOrderProcessUpdateMessage 智能制造API > 订单工序变更通知消息}
   * - {@link TaobaoRhinoIntegrationOuterOrderCreateMessage 智能制造API > 外协订单创建消息通知}
   * - {@link TaobaoRhinoIntegrationOuterProgressUpdateMessage 智能制造API > 外协进度变更消息}
   * - {@link TaobaoRhinoOrderStatusUpdate 智能制造API > 生产订单状态变化通知}
   * - {@link TaobaoRhinoPurchaseOrderCreate 智能制造API > 犀牛制造采购订单创建}
   * - {@link TaobaoRhinoQcResultUpdate 智能制造API > 犀牛智造自动验布机质检结果更新消息}
   * - {@link TaobaoRhinoWarehouseUpdate 智能制造API > 订单入库通知}
   */
  type TaobaoRhino = TaobaoRhinoDeliveryUpdate
    | TaobaoRhinoDeviceStatus
    | TaobaoRhinoIntegrationCutProgressUpdateMessage
    | TaobaoRhinoIntegrationOrderProcessUpdateMessage
    | TaobaoRhinoIntegrationOuterOrderCreateMessage
    | TaobaoRhinoIntegrationOuterProgressUpdateMessage
    | TaobaoRhinoOrderStatusUpdate
    | TaobaoRhinoPurchaseOrderCreate
    | TaobaoRhinoQcResultUpdate
    | TaobaoRhinoWarehouseUpdate;
  /**
   * - {@link TaobaoSecWlcAlipaySync 淘宝 > 无量尺风控信息同步支付宝}
   */
  type TaobaoSec = TaobaoSecWlcAlipaySync;
  /**
   * - {@link TaobaoShopVary 淘宝 > 淘宝店铺变更}
   */
  type TaobaoShop = TaobaoShopVary;
  /**
   * - {@link TaobaoShoptransferUniTrans 淘宝 > 过户结果消息}
   */
  type TaobaoShoptransfer = TaobaoShoptransferUniTrans;
  /**
   * - {@link TaobaoSinianTest 淘宝 > 似年测试消息服务}
   */
  type TaobaoSinian = TaobaoSinianTest;
  /**
   * - {@link TaobaoSmartappAppSubChange 平台消息 > 用户订阅变更消息}
   * - {@link TaobaoSmartappDataSync 平台消息 > 智能应用服务登记数据变更消息}
   * - {@link TaobaoSmartappDiagnosticMetrics 平台消息 > 智能应用开放生意参谋诊断指标}
   * - {@link TaobaoSmartappOrderAlert 平台消息 > 淘宝智能应用订单预警事件}
   * - {@link TaobaoSmartappPresellEnd 平台消息 > 淘宝智能应用预售尾款截止短信催付}
   * - {@link TaobaoSmartappPresellStart 平台消息 > 淘宝智能应用预售开始短信催付}
   * - {@link TaobaoSmartappSchedulerTask 平台消息 > 定时任务消息}
   * - {@link TaobaoSmartappSendMsg 平台消息 > 淘宝智能应用短信发送触发}
   * - {@link TaobaoSmartappTableSync 平台消息 > 智能应用服务登记工作表变更消息}
   * - {@link TaobaoSmartappWorktableRecord 平台消息 > 智能应用工作表数据操作消息}
   */
  type TaobaoSmartapp = TaobaoSmartappAppSubChange
    | TaobaoSmartappDataSync
    | TaobaoSmartappDiagnosticMetrics
    | TaobaoSmartappOrderAlert
    | TaobaoSmartappPresellEnd
    | TaobaoSmartappPresellStart
    | TaobaoSmartappSchedulerTask
    | TaobaoSmartappSendMsg
    | TaobaoSmartappTableSync
    | TaobaoSmartappWorktableRecord;
  /**
   * - {@link TaobaoSmartmallItemAssigned 淘宝 > 商品已分配消息}
   * - {@link TaobaoSmartmallLogistic 淘宝 > 发货物流通知}
   * - {@link TaobaoSmartmallPaySuccess 淘宝 > 付款成功消息}
   */
  type TaobaoSmartmall = TaobaoSmartmallItemAssigned
    | TaobaoSmartmallLogistic
    | TaobaoSmartmallPaySuccess;
  /**
   * - {@link TaobaoSuppPayment 淘宝 > 猫超供应链打款}
   */
  type TaobaoSupp = TaobaoSuppPayment;
  /**
   * - {@link TaobaoSurveyAnswerNotify 淘宝 > 悉牛问卷答案提交通知}
   */
  type TaobaoSurvey = TaobaoSurveyAnswerNotify;
  /**
   * - {@link TaobaoTaeBaichuanAuctionChange 导购平台 > 商品信息变更}
   * - {@link TaobaoTaeBaichuanTradeClosed 导购平台 > 交易关闭}
   * - {@link TaobaoTaeBaichuanTradeCreated 导购平台 > 创建订单}
   * - {@link TaobaoTaeBaichuanTradePaidDone 导购平台 > 付款成功}
   * - {@link TaobaoTaeBaichuanTradeRefundCreated 导购平台 > 创建退款消息}
   * - {@link TaobaoTaeBaichuanTradeRefundSuccess 导购平台 > 退款成功}
   * - {@link TaobaoTaeBaichuanTradeSuccess 导购平台 > 交易成功}
   * - {@link TaobaoTaeItemDelete 导购平台 > 商品删除消息}
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
    | TaobaoTaeItemDelete
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
   * - {@link TaobaoTaotvVideoInvalid 淘宝电视 > 媒资视频下线消息}
   * - {@link TaobaoTaotvVideoPublish 淘宝电视 > 媒资视频上线消息}
   */
  type TaobaoTaotv = TaobaoTaotvVideoInvalid
    | TaobaoTaotvVideoPublish;
  /**
   * - {@link TaobaoTbkContentMsgGet 淘宝 > 媒体内容消息接收API}
   * - {@link TaobaoTbkItemMaterialPush 淘宝 > 淘宝联盟官方单品物料推送}
   * - {@link TaobaoTbkJINGCAITOUTIAOTljReport 淘宝 > 淘礼金实时报表}
   * - {@link TaobaoTbkJUXIAOXITljReport 淘宝 > 淘礼金实时报表}
   * - {@link TaobaoTbkMENGXIAOMITljReport 淘宝 > 淘礼金实时报表}
   * - {@link TaobaoTbkPubOrderDispatch 淘宝 > 淘宝客-服务商-pub派单消息发送}
   * - {@link TaobaoTbkYOUSHITljReport 淘宝 > 淘礼金报表API}
   */
  type TaobaoTbk = TaobaoTbkContentMsgGet
    | TaobaoTbkItemMaterialPush
    | TaobaoTbkJINGCAITOUTIAOTljReport
    | TaobaoTbkJUXIAOXITljReport
    | TaobaoTbkMENGXIAOMITljReport
    | TaobaoTbkPubOrderDispatch
    | TaobaoTbkYOUSHITljReport;
  /**
   * - {@link TaobaoTcMaterialStock 淘宝 > 物资库存变动}
   */
  type TaobaoTc = TaobaoTcMaterialStock;
  /**
   * - {@link TaobaoTestChengfeiDirect 淘宝 > taobao_test_ChengfeiDirect}
   * - {@link TaobaoTestEventScheduleOne 淘宝 > taobao_test_EventScheduleOne}
   * - {@link TaobaoTestEventScheduleThree 淘宝 > taobao_test_EventScheduleThree}
   * - {@link TaobaoTestEventScheduleTwo 淘宝 > taobao_test_EventScheduleTwo}
   * - {@link TaobaoTestHelloWorld 淘宝 > taobao_test_hellollll}
   * - {@link TaobaoTestTaoNodeTopic 淘宝 > 物流消息taobao_test_logistics_TaoNodeTopic}
   */
  type TaobaoTest = TaobaoTestChengfeiDirect
    | TaobaoTestEventScheduleOne
    | TaobaoTestEventScheduleThree
    | TaobaoTestEventScheduleTwo
    | TaobaoTestHelloWorld
    | TaobaoTestTaoNodeTopic;
  /**
   * - {@link TaobaoTopAuthCancel 平台消息 > 取消授权消息通知}
   * - {@link TaobaoTopMqfNotify 平台消息 > mqf消息通道}
   * - {@link TaobaoTopOnsSinianTest 平台消息 > 似年测试ONS}
   * - {@link TaobaoTopOnstest 平台消息 > 承仙测试ons}
   * - {@link TaobaoTopProcessCallback 平台消息 > 工作流执行回调消息}
   * - {@link TaobaoTopSellerFeedbackQuery 平台消息 > 三方应用质量——商家反馈查询}
   * - {@link TaobaoTopTdpCheckOrderAdvance 平台消息 > 淘宝-开放平台-数据推送-对单架构升级-对单任务消息}
   */
  type TaobaoTop = TaobaoTopAuthCancel
    | TaobaoTopMqfNotify
    | TaobaoTopOnsSinianTest
    | TaobaoTopOnstest
    | TaobaoTopProcessCallback
    | TaobaoTopSellerFeedbackQuery
    | TaobaoTopTdpCheckOrderAdvance;
  /**
   * - {@link TaobaoTopadminHelloWorld 淘宝 > 友仔消息测试}
   */
  type TaobaoTopadmin = TaobaoTopadminHelloWorld;
  /**
   * - {@link TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成}
   */
  type TaobaoTopats = TaobaoTopatsTaskComplete;
  /**
   * - {@link TaobaoTradeAdvanceDisburse 淘宝交易 > 订单极速放款成功消息}
   * - {@link TaobaoTradeDoorInstallsettle 淘宝交易 > 淘宝上门安装服务费用结算}
   * - {@link TaobaoTradeFiveApi 淘宝交易 > 第五个测试API}
   * - {@link TaobaoTradeOpenTradePush 淘宝交易 > 开放交易推进消息}
   * - {@link TaobaoTradeSecondApi 淘宝交易 > 第二个测试API}
   * - {@link TaobaoTradeTest 淘宝交易 > 挚涵消息测试}
   * - {@link TaobaoTradeTestFour 淘宝交易 > taobao_trade_TestFour}
   * - {@link TaobaoTradeThirdApi 淘宝交易 > 第三个测试API}
   * - {@link TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息}
   * - {@link TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款}
   * - {@link TaobaoTradeTradeBuyerPaySubOut 淘宝交易 > 子订单维度付款消息（对外）}
   * - {@link TaobaoTradeTradeBuyerStepPay 淘宝交易 > 分阶段订单付定金}
   * - {@link TaobaoTradeTradeChanged 淘宝交易 > 订单信息变更消息}
   * - {@link TaobaoTradeTradeClose 淘宝交易 > 关闭交易消息}
   * - {@link TaobaoTradeTradeCloseAndModifyDetailOrder 淘宝交易 > 关闭或修改子订单消息}
   * - {@link TaobaoTradeTradeCreate 淘宝交易 > 创建淘宝交易消息}
   * - {@link TaobaoTradeTradeCreateDelay 淘宝交易 > 创建淘宝交易延迟消息}
   * - {@link TaobaoTradeTradeCreatess 淘宝交易 > 双}
   * - {@link TaobaoTradeTradeDelayConfirmPay 淘宝交易 > 延长收货时间消息}
   * - {@link TaobaoTradeTradeLogisticsAddressChanged 淘宝交易 > 修改交易收货地址消息}
   * - {@link TaobaoTradeTradeMemoModified 淘宝交易 > 交易备注修改消息}
   * - {@link TaobaoTradeTradeModifyFee 淘宝交易 > 修改交易费用消息}
   * - {@link TaobaoTradeTradePartlyConfirmPay 淘宝交易 > 子订单打款成功消息}
   * - {@link TaobaoTradeTradePartlyRefund 淘宝交易 > 子订单退款成功消息}
   * - {@link TaobaoTradeTradePartlySellerShip 淘宝交易 > 交易的部分子订单发货消息}
   * - {@link TaobaoTradeTradePeriodSuccess 淘宝交易 > 交易阶段成功消息}
   * - {@link TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息}
   * - {@link TaobaoTradeTradeRatedOut 淘宝交易 > 淘宝开发平台内部使用评价变更消息out}
   * - {@link TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息}
   * - {@link TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息}
   * - {@link TaobaoTradeTradeSuccessDelay 淘宝交易 > 交易成功延迟消息}
   * - {@link TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息}
   * - {@link TaobaoTradeZhihan 淘宝交易 > API测试}
   */
  type TaobaoTrade = TaobaoTradeAdvanceDisburse
    | TaobaoTradeDoorInstallsettle
    | TaobaoTradeFiveApi
    | TaobaoTradeOpenTradePush
    | TaobaoTradeSecondApi
    | TaobaoTradeTest
    | TaobaoTradeTestFour
    | TaobaoTradeThirdApi
    | TaobaoTradeTradeAlipayCreate
    | TaobaoTradeTradeBuyerPay
    | TaobaoTradeTradeBuyerPaySubOut
    | TaobaoTradeTradeBuyerStepPay
    | TaobaoTradeTradeChanged
    | TaobaoTradeTradeClose
    | TaobaoTradeTradeCloseAndModifyDetailOrder
    | TaobaoTradeTradeCreate
    | TaobaoTradeTradeCreateDelay
    | TaobaoTradeTradeCreatess
    | TaobaoTradeTradeDelayConfirmPay
    | TaobaoTradeTradeLogisticsAddressChanged
    | TaobaoTradeTradeMemoModified
    | TaobaoTradeTradeModifyFee
    | TaobaoTradeTradePartlyConfirmPay
    | TaobaoTradeTradePartlyRefund
    | TaobaoTradeTradePartlySellerShip
    | TaobaoTradeTradePeriodSuccess
    | TaobaoTradeTradeRated
    | TaobaoTradeTradeRatedOut
    | TaobaoTradeTradeSellerShip
    | TaobaoTradeTradeSuccess
    | TaobaoTradeTradeSuccessDelay
    | TaobaoTradeTradeTimeoutRemind
    | TaobaoTradeZhihan;
  /**
   * - {@link TaobaoTraderateImprBadTag 淘宝 > 负面印象评价消息}
   */
  type TaobaoTraderate = TaobaoTraderateImprBadTag;
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
   * - {@link TaobaoTravelticketMsgTrade 淘宝 > 门票交易消息通知}
   */
  type TaobaoTravelticket = TaobaoTravelticketMsgTrade;
  /**
   * - {@link TaobaoTripPartnerLevelUpMessage 淘宝 > 航旅会员升级消息}
   * - {@link TaobaoTripUserFlightDelayInsurance 淘宝 > 航旅会员机票延误险消息}
   */
  type TaobaoTrip = TaobaoTripPartnerLevelUpMessage
    | TaobaoTripUserFlightDelayInsurance;
  /**
   * - {@link TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口}
   * - {@link TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息}
   */
  type TaobaoUscesl = TaobaoUsceslAlarmCreate
    | TaobaoUsceslBindResult;
  /**
   * - {@link TaobaoUsergrowthIconRelationBind 淘宝 > 金币游戏专用-好友通过之后发消息}
   * - {@link TaobaoUsergrowthRelationBind 淘宝 > 好友关系确认消息通知}
   */
  type TaobaoUsergrowth = TaobaoUsergrowthIconRelationBind
    | TaobaoUsergrowthRelationBind;
  /**
   * - {@link TaobaoVerifyAuditResult 淘宝 > 实人认证审核结果}
   * - {@link TaobaoVerifyTokenSend 淘宝 > 发送令牌}
   */
  type TaobaoVerify = TaobaoVerifyAuditResult
    | TaobaoVerifyTokenSend;
  /**
   * - {@link TaobaoVideoSyncResult 淘宝视频 > 淘视频同步视频接口}
   * - {@link TaobaoVideoVideoTran 淘宝视频 > 淘宝视频转码结果消息}
   */
  type TaobaoVideo = TaobaoVideoSyncResult
    | TaobaoVideoVideoTran;
  /**
   * - {@link TaobaoVipLevelChange 淘宝VIP > 会员身份变化}
   */
  type TaobaoVip = TaobaoVipLevelChange;
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
   * - {@link TaobaoWangwangOANotify 淘宝 > 主子账号之间旺旺消息发送}
   */
  type TaobaoWangwang = TaobaoWangwangOANotify;
  /**
   * - {@link TaobaoWdktmsDeliverer 淘宝 > 配送员消息推送}
   * - {@link TaobaoWdktmsSendDemand 淘宝 > 运力消息}
   * - {@link TaobaoWdktmsWaybill 淘宝 > 运单变更消息通知外部系统}
   */
  type TaobaoWdktms = TaobaoWdktmsDeliverer
    | TaobaoWdktmsSendDemand
    | TaobaoWdktmsWaybill;
  /**
   * - {@link TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息}
   * - {@link TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV}
   */
  type TaobaoWisdomstore = TaobaoWisdomstoreRecognitionNotice
    | TaobaoWisdomstoreRecognitionPush;
  /**
   * - {@link TaobaoWmsReserveStatusCallback 淘宝 > WMS预约单状态回传}
   * - {@link TaobaoWmsReserveStockInOrderConfirm 淘宝 > 到货通知单收货确认}
   */
  type TaobaoWms = TaobaoWmsReserveStatusCallback
    | TaobaoWmsReserveStockInOrderConfirm;
  /**
   * - {@link TaobaoWorktableInsertData 淘宝 > 智能应用工作表数据新增}
   */
  type TaobaoWorktable = TaobaoWorktableInsertData;
  /**
   * - {@link TaobaoWtOpenTradeMsg 淘宝 > 礼包交易开放消息同步支付宝话费宝侧}
   * - {@link TaobaoWtOpenTradePreauthorizMsg 淘宝 > 存送业务预授权操作结果通知}
   * - {@link TaobaoWtOpenTradeTaskMsg 淘宝 > 开放交易任务完成消息}
   * - {@link TaobaoWtVerifyInform 淘宝 > 阿里通信实人认证主动通知运营商}
   */
  type TaobaoWt = TaobaoWtOpenTradeMsg
    | TaobaoWtOpenTradePreauthorizMsg
    | TaobaoWtOpenTradeTaskMsg
    | TaobaoWtVerifyInform;
  /**
   * - {@link TaobaoXhotelDistributionStdInfoChange 酒店标准库基础信息变更消息 > 通用分销 标准信息变更消息}
   */
  type TaobaoXhotel = TaobaoXhotelDistributionStdInfoChange;
  /**
   * - {@link TaobaoXianyuHouseBooking 闲鱼 > 闲鱼房源预约消息}
   * - {@link TaobaoXianyuRentBillPaid 闲鱼 > 闲鱼租房订单支付}
   * - {@link TaobaoXianyuRentContractCreate 闲鱼 > 闲鱼租房合约创建}
   * - {@link TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还}
   * - {@link TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件}
   * - {@link TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消}
   * - {@link TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建}
   */
  type TaobaoXianyu = TaobaoXianyuHouseBooking
    | TaobaoXianyuRentBillPaid
    | TaobaoXianyuRentContractCreate
    | TaobaoXianyuRentalItemReturnCanceled
    | TaobaoXianyuRentalItemReturnReserved
    | TaobaoXianyuRentalOrderCanceled
    | TaobaoXianyuRentalOrderCreated;
  /**
   * - {@link TaobaoXiaoquOrderChange 淘宝 > 订单变更通知}
   * - {@link TaobaoXiaoquOrderClose 淘宝 > 订单关闭通知}
   * - {@link TaobaoXiaoquOrderCreate 淘宝 > 创建订单消息通知}
   * - {@link TaobaoXiaoquOrderFinish 淘宝 > 订单正常完成通知}
   * - {@link TaobaoXiaoquOrderPackage 淘宝 > 订单打包完成通知}
   * - {@link TaobaoXiaoquOrderPay 淘宝 > 买家付款消息通知}
   * - {@link TaobaoXiaoquOrderPorcess 淘宝 > 通知合作伙伴订单发生变化}
   */
  type TaobaoXiaoqu = TaobaoXiaoquOrderChange
    | TaobaoXiaoquOrderClose
    | TaobaoXiaoquOrderCreate
    | TaobaoXiaoquOrderFinish
    | TaobaoXiaoquOrderPackage
    | TaobaoXiaoquOrderPay
    | TaobaoXiaoquOrderPorcess;
  /**
   * - {@link TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息}
   * - {@link TaobaoXiaoweiTest IOT-智能制造 > xiaowe测试消息}
   */
  type TaobaoXiaowei = TaobaoXiaoweiMessage
    | TaobaoXiaoweiTest;
  /**
   * - {@link TaobaoYichaoWarrantyCodeStatusUpdate 淘宝 > 蚁巢保修码状态变更消息}
   */
  type TaobaoYichao = TaobaoYichaoWarrantyCodeStatusUpdate;
  /**
   * - {@link TaobaoZkFirstLogisticsNotify 淘宝真酷 > 淘宝真酷一段物流发货消息}
   * - {@link TaobaoZkFirstLogisticsReceivedNotify 淘宝真酷 > 一段物流签收通知}
   * - {@link TaobaoZkIdentifyCreate 淘宝真酷 > 淘宝真酷需求鉴别单创建消息}
   * - {@link TaobaoZkRefundNotify 淘宝真酷 > 真酷鉴定用户退款通知}
   * - {@link TaobaoZkSecondLogisticsGotNotify 淘宝真酷 > 淘宝真酷二段寄出后揽收通知机构}
   */
  type TaobaoZk = TaobaoZkFirstLogisticsNotify
    | TaobaoZkFirstLogisticsReceivedNotify
    | TaobaoZkIdentifyCreate
    | TaobaoZkRefundNotify
    | TaobaoZkSecondLogisticsGotNotify;
  /**
   * - {@link TaotaoFilmThirdPartyRefundPush 淘宝 > 退款消息同步}
   */
  type TaotaoFilm = TaotaoFilmThirdPartyRefundPush;
  /**
   * - {@link TmallAliautoStepOrderPartConfirm 天猫汽车 > 天猫汽车分阶段订单打款消息}
   * - {@link TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息}
   */
  type TmallAliauto = TmallAliautoStepOrderPartConfirm
    | TmallAliautoStepOrderPartConfirmed;
  /**
   * - {@link TmallAutoServiceReceiptCreate 天猫汽车 > 服务工单创建}
   * - {@link TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放}
   * - {@link TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放}
   */
  type TmallAuto = TmallAutoServiceReceiptCreate
    | TmallAutoTradeModify
    | TmallAutoTwoWheelsReceiptCreate;
  /**
   * - {@link TmallCarAbnormalSettleSeller 天猫汽车 > 天猫汽车安装服务-异常商家上下线通知}
   * - {@link TmallCarAliapayTelRedPacket 天猫汽车 > 天猫汽车-支付宝手机充值红包发放}
   * - {@link TmallCarAlipayEvent 天猫汽车 > 天猫汽车触发支付宝事件发奖}
   * - {@link TmallCarContractSign 天猫汽车 > 合同签署消息}
   * - {@link TmallCarFinanceMsg 天猫汽车 > 汽车金融消息}
   * - {@link TmallCarTelCoupon 天猫汽车 > 天猫汽车特惠充}
   */
  type TmallCar = TmallCarAbnormalSettleSeller
    | TmallCarAliapayTelRedPacket
    | TmallCarAlipayEvent
    | TmallCarContractSign
    | TmallCarFinanceMsg
    | TmallCarTelCoupon;
  /**
   * - {@link TmallCarprofileAuthStatusChangeToISV 天猫 > 用户车辆档案授权状态更新}
   */
  type TmallCarprofile = TmallCarprofileAuthStatusChangeToISV;
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
   * - {@link TmallFuwuNewAnomalyRecourseStatusUpdate 天猫服务 > 服务管控消息更新}
   * - {@link TmallFuwuRateMessageTP 天猫服务 > 消费者评价成功top消息}
   * - {@link TmallFuwuServiceItemUpdate 天猫服务 > 服务商品信息变更消息}
   * - {@link TmallFuwuServiceMonitorMessage 天猫服务 > 服务预警消息}
   * - {@link TmallFuwuServiceStoreRegister 天猫服务 > 服务网点注册消息}
   * - {@link TmallFuwuSettleAdjustmentStatusUpdate 天猫服务 > 单个结算调整单数据推送}
   * - {@link TmallFuwuSettleSupplierFcBill 天猫服务 > 天猫服务服务商分账消息推送}
   * - {@link TmallFuwuWorkcardContract 天猫服务 > 天猫服务履约合同单}
   * - {@link TmallFuwuWorkcardInfo 天猫服务 > 天猫服务任务工单}
   * - {@link TmallFuwuWorkcardStatusChange 天猫服务 > 天猫服务任务工单状态更新}
   * - {@link TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更}
   */
  type TmallFuwu = TmallFuwuAnomalyRecourse
    | TmallFuwuAnomalyRecourseStatusUpdate
    | TmallFuwuElectricMaintenanceWorkCardComplete
    | TmallFuwuElectricWarrantyCodeStatusUpdate
    | TmallFuwuHomeDecorationSupplyRuleUpdate
    | TmallFuwuLogisticsInfoMessage
    | TmallFuwuNewAnomalyRecourseStatusUpdate
    | TmallFuwuRateMessageTP
    | TmallFuwuServiceItemUpdate
    | TmallFuwuServiceMonitorMessage
    | TmallFuwuServiceStoreRegister
    | TmallFuwuSettleAdjustmentStatusUpdate
    | TmallFuwuSettleSupplierFcBill
    | TmallFuwuWorkcardContract
    | TmallFuwuWorkcardInfo
    | TmallFuwuWorkcardStatusChange
    | TmallFuwuWorkcardStatusUpdate;
  /**
   * - {@link TmallHomedecorationfuwuWorkcardStatusUpdateForSeller 天猫 > 天猫家装服务工单状态推送}
   */
  type TmallHomedecorationfuwu = TmallHomedecorationfuwuWorkcardStatusUpdateForSeller;
  /**
   * - {@link TmallIfpfulfillResultNotice 天猫 > 创建订单结果通知接口}
   */
  type TmallIfpfulfill = TmallIfpfulfillResultNotice;
  /**
   * - {@link TmallJstBusinessInformationSend 天猫 > 商家消息}
   */
  type TmallJst = TmallJstBusinessInformationSend;
  /**
   * - {@link TmallMeiCrmBind 天猫美妆 > 绑定操作通知}
   * - {@link TmallMeiCrmBindQuery 天猫美妆 > 用户绑定请求}
   * - {@link TmallMeiCrmMemberQuery 天猫美妆 > 会员信息查询通知}
   * - {@link TmallMeiGiftExchange 天猫美妆 > 天猫美妆店铺礼品兑换通知}
   * - {@link TmallMeiMemberRegister 天猫美妆 > 飞行入会消息}
   * - {@link TmallMeiPointChange 天猫美妆 > 品牌积分变更通知}
   */
  type TmallMei = TmallMeiCrmBind
    | TmallMeiCrmBindQuery
    | TmallMeiCrmMemberQuery
    | TmallMeiGiftExchange
    | TmallMeiMemberRegister
    | TmallMeiPointChange;
  /**
   * - {@link TmallMlhInseasonUpdateNotify 天猫 > 魅力惠Inseason关键属性变化通知}
   * - {@link TmallMlhInventorySync 天猫 > 魅力惠分销库存同步}
   * - {@link TmallMlhOrderCancelNotify 天猫 > 魅力惠订单取消通知}
   * - {@link TmallMlhOrderDeliveryCallBack 天猫 > 魅力惠发货同步回调消息}
   * - {@link TmallMlhOrderReturnCallBack 天猫 > 分销消退入库消息}
   * - {@link TmallMlhPOAuditCompletedNotify 天猫 > 魅力惠PO单审批通过消息通知}
   * - {@link TmallMlhPoReceivedNotify 天猫 > 魅力惠PO收货消息}
   */
  type TmallMlh = TmallMlhInseasonUpdateNotify
    | TmallMlhInventorySync
    | TmallMlhOrderCancelNotify
    | TmallMlhOrderDeliveryCallBack
    | TmallMlhOrderReturnCallBack
    | TmallMlhPOAuditCompletedNotify
    | TmallMlhPoReceivedNotify;
  /**
   * - {@link TmallMultshopMsg 天猫 > 多旗舰店签约完成消息}
   */
  type TmallMultshop = TmallMultshopMsg;
  /**
   * - {@link TmallNrtItemsToEasyHome 新零售终端下行消息 > 商品信息同步}
   * - {@link TmallNrtTcpsDeliveryStatus 新零售终端下行消息 > 天猫同城配送状态消息}
   */
  type TmallNrt = TmallNrtItemsToEasyHome
    | TmallNrtTcpsDeliveryStatus;
  /**
   * - {@link TmallOicInventoryInbound 天猫 > 天猫货品入库消息}
   */
  type TmallOic = TmallOicInventoryInbound;
  /**
   * - {@link TmallOmnichannelDiscountedPriceChange 聚石塔 > 商品优惠价格变更}
   * - {@link TmallOmnichannelInventoryChange 聚石塔 > 商品库存变化}
   * - {@link TmallOmnichannelInventoryZero 聚石塔 > 商品库存归零}
   * - {@link TmallOmnichannelItemDescChange 聚石塔 > 商品描述变化}
   * - {@link TmallOmnichannelItemDownShelf 聚石塔 > 商品下架}
   * - {@link TmallOmnichannelItemImageChange 聚石塔 > 商品图片变化}
   * - {@link TmallOmnichannelItemPriceChange 聚石塔 > 商品价格变更}
   */
  type TmallOmnichannel = TmallOmnichannelDiscountedPriceChange
    | TmallOmnichannelInventoryChange
    | TmallOmnichannelInventoryZero
    | TmallOmnichannelItemDescChange
    | TmallOmnichannelItemDownShelf
    | TmallOmnichannelItemImageChange
    | TmallOmnichannelItemPriceChange;
  /**
   * - {@link TmallOnehourScmItem 天猫 > 货品商品同步}
   */
  type TmallOnehour = TmallOnehourScmItem;
  /**
   * - {@link TmallPosfeeMsg 天猫 > 刷卡费率消息}
   */
  type TmallPosfee = TmallPosfeeMsg;
  /**
   * - {@link TmallRefundRefundClosed 天猫 > 退款关闭消息}
   * - {@link TmallRefundRefundCreate 天猫 > 退款创建消息}
   * - {@link TmallRefundRefundMessageCreated 天猫 > 创建退款留言消息}
   * - {@link TmallRefundRefundModified 天猫 > 买家修改协议消息}
   * - {@link TmallRefundRefundPaymentFinished 天猫 > 赔付完成消息}
   * - {@link TmallRefundRefundPrepaid 天猫 > 极速退款消息}
   * - {@link TmallRefundRefundSellerAgreeReturn 天猫 > 卖家同意退货消息}
   * - {@link TmallRefundRefundSellerRefuse 天猫 > 卖家拒绝退款消息}
   * - {@link TmallRefundRefundSucceed 天猫 > 退款成功消息}
   * - {@link TmallRefundRefundTaobaoInvolved 天猫 > 小二介入消息}
   * - {@link TmallRefundRefundableCanceled 天猫 > 退款标记取消消息}
   * - {@link TmallRefundRefundableMarked 天猫 > 退款标记创建消息}
   * - {@link TmallRefundReturnBuyerReturnGoods 天猫 > 买家退货，填写退货单消息}
   * - {@link TmallRefundReturnConfirmFailed 天猫 > 买家填写物流单，卖家拒绝退货消息}
   * - {@link TmallRefundReturnConfirmSucceed 天猫 > 买家填写物流单，卖家确认收货消息}
   * - {@link TmallRefundReturnCreated 天猫 > 卖家同意退货，退货单创建消息}
   * - {@link TmallRefundReturnModified 天猫 > 退货单修改消息}
   */
  type TmallRefund = TmallRefundRefundClosed
    | TmallRefundRefundCreate
    | TmallRefundRefundMessageCreated
    | TmallRefundRefundModified
    | TmallRefundRefundPaymentFinished
    | TmallRefundRefundPrepaid
    | TmallRefundRefundSellerAgreeReturn
    | TmallRefundRefundSellerRefuse
    | TmallRefundRefundSucceed
    | TmallRefundRefundTaobaoInvolved
    | TmallRefundRefundableCanceled
    | TmallRefundRefundableMarked
    | TmallRefundReturnBuyerReturnGoods
    | TmallRefundReturnConfirmFailed
    | TmallRefundReturnConfirmSucceed
    | TmallRefundReturnCreated
    | TmallRefundReturnModified;
  /**
   * - {@link TmallRetailEcRelation 天猫 > 会员管理关系变更同步商家}
   */
  type TmallRetail = TmallRetailEcRelation;
  /**
   * - {@link TmallSasssignMsg 天猫 > sass签约消息}
   */
  type TmallSasssign = TmallSasssignMsg;
  /**
   * - {@link TmallScmSendTmcsDistributeSettleFee 天猫 > 猫超经销结算打款消息}
   */
  type TmallScm = TmallScmSendTmcsDistributeSettleFee;
  /**
   * - {@link TmallServiceCycleBillInvoice 天猫服务 > 服务结算账期账单发票消息}
   */
  type TmallService = TmallServiceCycleBillInvoice;
  /**
   * - {@link TmallServicecenterConsultationMessage 天猫服务 > 咨询工单消息}
   * - {@link TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新}
   */
  type TmallServicecenter = TmallServicecenterConsultationMessage
    | TmallServicecenterTaskUpdate;
  /**
   * - {@link TmallServiceplatformServiceProductChanged 天猫服务 > 天猫服务产品变更消息}
   * - {@link TmallServiceplatformSignCreate 天猫服务 > 签到消息}
   * - {@link TmallServiceplatformSubscribeServiceChanged 天猫服务 > 天猫服务订购消息}
   * - {@link TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息}
   */
  type TmallServiceplatform = TmallServiceplatformServiceProductChanged
    | TmallServiceplatformSignCreate
    | TmallServiceplatformSubscribeServiceChanged
    | TmallServiceplatformWorkerLeave;
  /**
   * - {@link TmallSupermarketHaitunEventCreate 天猫 > 猫超业务支付宝海豚事件创建}
   */
  type TmallSupermarket = TmallSupermarketHaitunEventCreate;
  /**
   * - {@link TmallTccompassDeliveryRangesUpdate 天猫 > 罗盘变动消息}
   */
  type TmallTccompass = TmallTccompassDeliveryRangesUpdate;
  /**
   * - {@link TmallTlcItemExcelSchemaNotify 天猫 > JV商品发布excel schema生成后通知ISV的消息}
   * - {@link TmallTlcItemPriceExcelNotify 天猫 > 商品批量改价}
   * - {@link TmallTlcItemsExcelResultNotify 天猫 > 商品批量发布excel结果反馈消息}
   * - {@link TmallTlcProductsExcelResultNotify 天猫 > 上传货品详情excel结果生成TOP消息}
   * - {@link TmallTlcProductsExcelSchemaNotify 天猫 > 货品详情excel模版生成TOP消息}
   * - {@link TmallTlcUpDownItemNotify 天猫 > JV商品上下架通知ISV的消息}
   */
  type TmallTlc = TmallTlcItemExcelSchemaNotify
    | TmallTlcItemPriceExcelNotify
    | TmallTlcItemsExcelResultNotify
    | TmallTlcProductsExcelResultNotify
    | TmallTlcProductsExcelSchemaNotify
    | TmallTlcUpDownItemNotify;
  /**
   * - {@link TmallTmgBrandMemberTrade 天猫 > 天猫国际品牌会员交易消息}
   */
  type TmallTmg = TmallTmgBrandMemberTrade;
  /**
   * - {@link TmallXfFutureOrders 天猫 > 天猫鞋服期货订单消息}
   * - {@link TmallXfGoodsInfo 天猫 > 天猫鞋服货品信息回流}
   */
  type TmallXf = TmallXfFutureOrders
    | TmallXfGoodsInfo;
  /**
   * - {@link TmallYichaoWorkcardStatusUpdate 天猫服务 > 蚁巢工单更新消息}
   */
  type TmallYichao = TmallYichaoWorkcardStatusUpdate;
  /**
   * - {@link TmallYougouItemChange 天猫 > 天猫优购商品变更}
   * - {@link TmallYougouOrderChange 天猫 > 天猫优购订单变更}
   */
  type TmallYougou = TmallYougouItemChange
    | TmallYougouOrderChange;
  /**
   * - {@link TobaoLiveLiveEventChange 直播间 > 直播间氛围消息开放}
   */
  type TobaoLive = TobaoLiveLiveEventChange;
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
   * - {@link UmengOplusOfflineDataToAlipay 友盟 > 友盟线下数据}
   */
  type UmengOplus = UmengOplusOfflineDataToAlipay;
  /**
   * - {@link WdkCapacityDelivery 五道口 > 盒马运力消息}
   */
  type WdkCapacity = WdkCapacityDelivery;
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
   * - {@link WdkWorkforceRequirementPublish 五道口 > 盒马三方用工需求发布}
   */
  type WdkWorkforce = WdkWorkforceRequirementPublish;
  /**
   * - {@link XhotelDistributionStatusChange 飞猪 > 飞猪酒店订单状态变更消息}
   */
  type XhotelDistribution = XhotelDistributionStatusChange;
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
   * - {@link XianyuCtoxCommissionStateSyn 闲鱼 > 闲鱼C2X抽佣退佣消息同步}
   * - {@link XianyuCtoxPayDkChange 闲鱼 > c2x代扣协议变更通知}
   * - {@link XianyuCtoxRateStateSyn 闲鱼 > c2x业务订单评价消息同步}
   */
  type XianyuCtox = XianyuCtoxCommissionStateSyn
    | XianyuCtoxPayDkChange
    | XianyuCtoxRateStateSyn;
  /**
   * - {@link XianyuEnvironmentEventSyn 闲鱼 > 闲鱼双11公益游戏任务事件同步}
   */
  type XianyuEnvironment = XianyuEnvironmentEventSyn;
  /**
   * - {@link XianyuFishmarketItemSyn 闲鱼 > 鱼市商品状态变更}
   */
  type XianyuFishmarket = XianyuFishmarketItemSyn;
  /**
   * - {@link XianyuIsvOrderRemind 闲鱼 > 闲鱼服务商订单提醒}
   */
  type XianyuIsv = XianyuIsvOrderRemind;
  /**
   * - {@link XianyuMarketrecycleOrderStateSyn 闲鱼 > 保卖订单变更通知}
   * - {@link XianyuMarketrecyclePlanStateSyn 闲鱼 > 闲鱼保卖计划变更消息}
   */
  type XianyuMarketrecycle = XianyuMarketrecycleOrderStateSyn
    | XianyuMarketrecyclePlanStateSyn;
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
   * - {@link YoukuAigcTrainResultNotify 优酷 > 妙鸭SaaS对外开放-训练结果通知}
   */
  type YoukuAigc = YoukuAigcTrainResultNotify;
  /**
   * - {@link YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息}
   */
  type YoukuTvosappstore = YoukuTvosappstoreAppStatusChange;
  /**
   * - {@link YunosWatchCmnsReceive AliOS手表 > 透传cmns接收消息}
   */
  type YunosWatch = YunosWatchCmnsReceive;
  /**
   * - {@link YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境}
   * - {@link YunosYocMessageService YunOS YoC > yoc消息服务}
   */
  type YunosYoc = YunosYocDatapoolSandbox
    | YunosYocMessageService;
  /**
   * - {@link AeLogistics}
   */
  type Ae = AeLogistics;
  /**
   * - {@link AliFin}
   * - {@link AliInfodept}
   */
  type Ali = AliFin
    | AliInfodept;
  /**
   * - {@link AlibabaAdlab}
   * - {@link AlibabaAgro}
   * - {@link AlibabaAilabs}
   * - {@link AlibabaAilbas}
   * - {@link AlibabaAis}
   * - {@link AlibabaAliabs}
   * - {@link AlibabaAlicom}
   * - {@link AlibabaAlihealth}
   * - {@link AlibabaAlink}
   * - {@link AlibabaAliqin}
   * - {@link AlibabaAlisports}
   * - {@link AlibabaAscpchannelmanagermentmsg}
   * - {@link AlibabaCfo}
   * - {@link AlibabaCoupon}
   * - {@link AlibabaCrm}
   * - {@link AlibabaCrowdsourcing}
   * - {@link AlibabaDecoration}
   * - {@link AlibabaEinvoice}
   * - {@link AlibabaEsl}
   * - {@link AlibabaFuwu}
   * - {@link AlibabaHappyfinance}
   * - {@link AlibabaHappytrip}
   * - {@link AlibabaHj}
   * - {@link AlibabaHomestyler}
   * - {@link AlibabaIcbulive}
   * - {@link AlibabaIdle}
   * - {@link AlibabaIfp}
   * - {@link AlibabaInfop}
   * - {@link AlibabaIntime}
   * - {@link AlibabaInvoice}
   * - {@link AlibabaJym}
   * - {@link AlibabaKaola}
   * - {@link AlibabaKongur}
   * - {@link AlibabaLassen}
   * - {@link AlibabaLegal}
   * - {@link AlibabaLst}
   * - {@link AlibabaMmc}
   * - {@link AlibabaMonitor}
   * - {@link AlibabaMos}
   * - {@link AlibabaMsd}
   * - {@link AlibabaMsfservice}
   * - {@link AlibabaMtp}
   * - {@link AlibabaNazca}
   * - {@link AlibabaNewretail}
   * - {@link AlibabaNlife}
   * - {@link AlibabaOkki}
   * - {@link AlibabaPaimai}
   * - {@link AlibabaPur}
   * - {@link AlibabaServiceplatform}
   * - {@link AlibabaSp}
   * - {@link AlibabaTax}
   * - {@link AlibabaTbdx}
   * - {@link AlibabaTc}
   * - {@link AlibabaThreehours}
   * - {@link AlibabaTianji}
   * - {@link AlibabaTxd}
   * - {@link AlibabaUni}
   * - {@link AlibabaWdk}
   * - {@link AlibabaWdkitem}
   * - {@link AlibabaWdkop}
   * - {@link AlibabaWdkopen}
   * - {@link AlibabaWdkorder}
   * - {@link AlibabaWdktrade}
   * - {@link AlibabaYichao}
   * - {@link AlibabaYunio}
   */
  type Alibaba = AlibabaAdlab
    | AlibabaAgro
    | AlibabaAilabs
    | AlibabaAilbas
    | AlibabaAis
    | AlibabaAliabs
    | AlibabaAlicom
    | AlibabaAlihealth
    | AlibabaAlink
    | AlibabaAliqin
    | AlibabaAlisports
    | AlibabaAscpchannelmanagermentmsg
    | AlibabaCfo
    | AlibabaCoupon
    | AlibabaCrm
    | AlibabaCrowdsourcing
    | AlibabaDecoration
    | AlibabaEinvoice
    | AlibabaEsl
    | AlibabaFuwu
    | AlibabaHappyfinance
    | AlibabaHappytrip
    | AlibabaHj
    | AlibabaHomestyler
    | AlibabaIcbulive
    | AlibabaIdle
    | AlibabaIfp
    | AlibabaInfop
    | AlibabaIntime
    | AlibabaInvoice
    | AlibabaJym
    | AlibabaKaola
    | AlibabaKongur
    | AlibabaLassen
    | AlibabaLegal
    | AlibabaLst
    | AlibabaMmc
    | AlibabaMonitor
    | AlibabaMos
    | AlibabaMsd
    | AlibabaMsfservice
    | AlibabaMtp
    | AlibabaNazca
    | AlibabaNewretail
    | AlibabaNlife
    | AlibabaOkki
    | AlibabaPaimai
    | AlibabaPur
    | AlibabaServiceplatform
    | AlibabaSp
    | AlibabaTax
    | AlibabaTbdx
    | AlibabaTc
    | AlibabaThreehours
    | AlibabaTianji
    | AlibabaTxd
    | AlibabaUni
    | AlibabaWdk
    | AlibabaWdkitem
    | AlibabaWdkop
    | AlibabaWdkopen
    | AlibabaWdkorder
    | AlibabaWdktrade
    | AlibabaYichao
    | AlibabaYunio;
  /**
   * - {@link AlicomAxb}
   * - {@link AlicomDeduct}
   * - {@link AlicomFlow}
   */
  type Alicom = AlicomAxb
    | AlicomDeduct
    | AlicomFlow;
  /**
   * - {@link AliexpressAeia}
   * - {@link AliexpressAftersaleinsurance}
   * - {@link AliexpressMessage}
   * - {@link AliexpressOrder}
   * - {@link AliexpressTrade}
   * - {@link AliexpressWarranty}
   */
  type Aliexpress = AliexpressAeia
    | AliexpressAftersaleinsurance
    | AliexpressMessage
    | AliexpressOrder
    | AliexpressTrade
    | AliexpressWarranty;
  /**
   * - {@link AlihealthCep}
   * - {@link AlihealthHb}
   * - {@link AlihealthTest}
   * - {@link AlihealthYs}
   */
  type Alihealth = AlihealthCep
    | AlihealthHb
    | AlihealthTest
    | AlihealthYs;
  /**
   * - {@link AlihouseCustomer}
   * - {@link AlihouseHouse}
   */
  type Alihouse = AlihouseCustomer
    | AlihouseHouse;
  /**
   * - {@link AliosCosmo}
   * - {@link AliosWatch}
   */
  type Alios = AliosCosmo
    | AliosWatch;
  /**
   * - {@link AlipayAe}
   * - {@link AlipayBaoming}
   * - {@link AlipayBaoxian}
   * - {@link AlipayCharity}
   * - {@link AlipayFenxiao}
   * - {@link AlipayRefund}
   * - {@link AlipayScf}
   * - {@link AlipayTrade}
   * - {@link AlipayUpdate}
   * - {@link AlipayXiaodai}
   */
  type Alipay = AlipayAe
    | AlipayBaoming
    | AlipayBaoxian
    | AlipayCharity
    | AlipayFenxiao
    | AlipayRefund
    | AlipayScf
    | AlipayTrade
    | AlipayUpdate
    | AlipayXiaodai;
  /**
   * - {@link AlipicLark}
   */
  type Alipic = AlipicLark;
  /**
   * - {@link AlisportsBank}
   */
  type Alisports = AlisportsBank;
  /**
   * - {@link AlitripAgent}
   * - {@link AlitripBtrip}
   * - {@link AlitripBtriphotel}
   * - {@link AlitripEbooking}
   * - {@link AlitripFlight}
   * - {@link AlitripHotel}
   * - {@link AlitripIesr}
   * - {@link AlitripIetrade}
   * - {@link AlitripSync}
   * - {@link AlitripTf}
   * - {@link AlitripTrade}
   * - {@link AlitripTrain}
   * - {@link AlitripTravel}
   * - {@link AlitripTripticket}
   * - {@link AlitripVisa}
   */
  type Alitrip = AlitripAgent
    | AlitripBtrip
    | AlitripBtriphotel
    | AlitripEbooking
    | AlitripFlight
    | AlitripHotel
    | AlitripIesr
    | AlitripIetrade
    | AlitripSync
    | AlitripTf
    | AlitripTrade
    | AlitripTrain
    | AlitripTravel
    | AlitripTripticket
    | AlitripVisa;
  /**
   * - {@link AliyunGsc}
   * - {@link AliyunIot}
   */
  type Aliyun = AliyunGsc
    | AliyunIot;
  /**
   * - {@link AlscCoupon}
   * - {@link AlscCouponpackage}
   * - {@link AlscDaodian}
   * - {@link AlscKb}
   * - {@link AlscKbbaobaotuan}
   * - {@link AlscKbbbt}
   * - {@link AlscReviewbwc}
   * - {@link AlscRisk}
   * - {@link AlscSalesadaptor}
   * - {@link AlscSalescrm}
   */
  type Alsc = AlscCoupon
    | AlscCouponpackage
    | AlscDaodian
    | AlscKb
    | AlscKbbaobaotuan
    | AlscKbbbt
    | AlscReviewbwc
    | AlscRisk
    | AlscSalesadaptor
    | AlscSalescrm;
  /**
   * - {@link AscpInsdustry}
   * - {@link AscpInstantsonline}
   */
  type Ascp = AscpInsdustry
    | AscpInstantsonline;
  /**
   * - {@link BanmaRight}
   */
  type Banma = BanmaRight;
  /**
   * - {@link CainiaoConsignplatform}
   * - {@link CainiaoIot}
   * - {@link CainiaoLogistics}
   * - {@link CainiaoModuan}
   * - {@link CainiaoScf}
   * - {@link CainiaoWaybill}
   * - {@link CainiaoYima}
   */
  type Cainiao = CainiaoConsignplatform
    | CainiaoIot
    | CainiaoLogistics
    | CainiaoModuan
    | CainiaoScf
    | CainiaoWaybill
    | CainiaoYima;
  /**
   * - {@link DamaiDistribution}
   * - {@link DamaiMev}
   * - {@link DamaiMz}
   * - {@link DamaiTrade}
   */
  type Damai = DamaiDistribution
    | DamaiMev
    | DamaiMz
    | DamaiTrade;
  /**
   * - {@link EleEnterprise}
   */
  type Ele = EleEnterprise;
  /**
   * - {@link ElemeBankstatement}
   * - {@link ElemeRetail}
   */
  type Eleme = ElemeBankstatement
    | ElemeRetail;
  /**
   * - {@link FliggyBtrip}
   * - {@link FliggyInteract}
   * - {@link FliggyJipiao}
   * - {@link FliggyMember}
   * - {@link FliggyPush}
   * - {@link FliggySht}
   * - {@link FliggyTicket}
   * - {@link FliggyVisa}
   * - {@link FliggyXhotel}
   */
  type Fliggy = FliggyBtrip
    | FliggyInteract
    | FliggyJipiao
    | FliggyMember
    | FliggyPush
    | FliggySht
    | FliggyTicket
    | FliggyVisa
    | FliggyXhotel;
  /**
   * - {@link FuwuConfirm}
   */
  type Fuwu = FuwuConfirm;
  /**
   * - {@link GaodeCaiji}
   */
  type Gaode = GaodeCaiji;
  /**
   * - {@link GenieGsc}
   */
  type Genie = GenieGsc;
  /**
   * - {@link GlobalVirtual}
   */
  type Global = GlobalVirtual;
  /**
   * - {@link GovAuction}
   * - {@link GovQual}
   * - {@link GovRadarclue}
   */
  type Gov = GovAuction
    | GovQual
    | GovRadarclue;
  /**
   * - {@link IcbuAlicrm}
   * - {@link IcbuChat}
   * - {@link IcbuCrm}
   * - {@link IcbuMember}
   * - {@link IcbuRisk}
   * - {@link IcbuTrade}
   */
  type Icbu = IcbuAlicrm
    | IcbuChat
    | IcbuCrm
    | IcbuMember
    | IcbuRisk
    | IcbuTrade;
  /**
   * - {@link IdleAgreement}
   * - {@link IdleAppraiseisv}
   * - {@link IdleAutotrade}
   * - {@link IdleConsignment}
   * - {@link IdleConsignmentii}
   * - {@link IdleCro}
   * - {@link IdleCycleshop}
   * - {@link IdleNewoutlets}
   * - {@link IdleRecycle}
   * - {@link IdleTopisv}
   * - {@link IdleTranferpay}
   * - {@link IdleTwjd}
   */
  type Idle = IdleAgreement
    | IdleAppraiseisv
    | IdleAutotrade
    | IdleConsignment
    | IdleConsignmentii
    | IdleCro
    | IdleCycleshop
    | IdleNewoutlets
    | IdleRecycle
    | IdleTopisv
    | IdleTranferpay
    | IdleTwjd;
  /**
   * - {@link IntimeDatacenter}
   * - {@link IntimeSc}
   */
  type Intime = IntimeDatacenter
    | IntimeSc;
  /**
   * - {@link JaeTrade}
   */
  type Jae = JaeTrade;
  /**
   * - {@link JymOrder}
   */
  type Jym = JymOrder;
  /**
   * - {@link LarkTrade}
   */
  type Lark = LarkTrade;
  /**
   * - {@link LianfanHuiwa}
   */
  type Lianfan = LianfanHuiwa;
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
   * - {@link TaobaoAis}
   * - {@link TaobaoAlipic}
   * - {@link TaobaoAlsc}
   * - {@link TaobaoAps}
   * - {@link TaobaoAuction}
   * - {@link TaobaoAxin}
   * - {@link TaobaoBaichuan}
   * - {@link TaobaoBaoxian}
   * - {@link TaobaoBashlive}
   * - {@link TaobaoBmc}
   * - {@link TaobaoBus}
   * - {@link TaobaoCarlease}
   * - {@link TaobaoCco}
   * - {@link TaobaoContent}
   * - {@link TaobaoDaifa}
   * - {@link TaobaoDatapush}
   * - {@link TaobaoDd}
   * - {@link TaobaoDiandian}
   * - {@link TaobaoDispute}
   * - {@link TaobaoDpaas}
   * - {@link TaobaoDv}
   * - {@link TaobaoEinvoice}
   * - {@link TaobaoEpp}
   * - {@link TaobaoFenxiao}
   * - {@link TaobaoFilm}
   * - {@link TaobaoFliggy}
   * - {@link TaobaoFsc}
   * - {@link TaobaoFuwu}
   * - {@link TaobaoGlobalbuys}
   * - {@link TaobaoHomeai}
   * - {@link TaobaoHotel}
   * - {@link TaobaoIdlefish}
   * - {@link TaobaoIfashion}
   * - {@link TaobaoIhome}
   * - {@link TaobaoInventory}
   * - {@link TaobaoIstore}
   * - {@link TaobaoItem}
   * - {@link TaobaoItemmarket}
   * - {@link TaobaoJaq}
   * - {@link TaobaoJipiao}
   * - {@link TaobaoJzfx}
   * - {@link TaobaoKcb}
   * - {@link TaobaoLbs}
   * - {@link TaobaoLife}
   * - {@link TaobaoLifeservice}
   * - {@link TaobaoLive}
   * - {@link TaobaoLocal}
   * - {@link TaobaoLocalorder}
   * - {@link TaobaoLogistics}
   * - {@link TaobaoMiniapp}
   * - {@link TaobaoModifyaddress}
   * - {@link TaobaoModifyorder}
   * - {@link TaobaoModifysku}
   * - {@link TaobaoOc}
   * - {@link TaobaoOfn}
   * - {@link TaobaoOpenaccount}
   * - {@link TaobaoOpencrm}
   * - {@link TaobaoOpenim}
   * - {@link TaobaoOpenmall}
   * - {@link TaobaoOpentrade}
   * - {@link TaobaoOs}
   * - {@link TaobaoPaimai}
   * - {@link TaobaoProfit}
   * - {@link TaobaoPunish}
   * - {@link TaobaoQianniu}
   * - {@link TaobaoRdc}
   * - {@link TaobaoRdcaligenius}
   * - {@link TaobaoRecycle}
   * - {@link TaobaoRefund}
   * - {@link TaobaoRhino}
   * - {@link TaobaoSec}
   * - {@link TaobaoShop}
   * - {@link TaobaoShoptransfer}
   * - {@link TaobaoSinian}
   * - {@link TaobaoSmartapp}
   * - {@link TaobaoSmartmall}
   * - {@link TaobaoSupp}
   * - {@link TaobaoSurvey}
   * - {@link TaobaoTae}
   * - {@link TaobaoTaotv}
   * - {@link TaobaoTbk}
   * - {@link TaobaoTc}
   * - {@link TaobaoTest}
   * - {@link TaobaoTop}
   * - {@link TaobaoTopadmin}
   * - {@link TaobaoTopats}
   * - {@link TaobaoTrade}
   * - {@link TaobaoTraderate}
   * - {@link TaobaoTrain}
   * - {@link TaobaoTravelticket}
   * - {@link TaobaoTrip}
   * - {@link TaobaoUscesl}
   * - {@link TaobaoUsergrowth}
   * - {@link TaobaoVerify}
   * - {@link TaobaoVideo}
   * - {@link TaobaoVip}
   * - {@link TaobaoWaimai}
   * - {@link TaobaoWangwang}
   * - {@link TaobaoWdktms}
   * - {@link TaobaoWisdomstore}
   * - {@link TaobaoWms}
   * - {@link TaobaoWorktable}
   * - {@link TaobaoWt}
   * - {@link TaobaoXhotel}
   * - {@link TaobaoXianyu}
   * - {@link TaobaoXiaoqu}
   * - {@link TaobaoXiaowei}
   * - {@link TaobaoYichao}
   * - {@link TaobaoZk}
   */
  type Taobao = TaobaoAg
    | TaobaoAis
    | TaobaoAlipic
    | TaobaoAlsc
    | TaobaoAps
    | TaobaoAuction
    | TaobaoAxin
    | TaobaoBaichuan
    | TaobaoBaoxian
    | TaobaoBashlive
    | TaobaoBmc
    | TaobaoBus
    | TaobaoCarlease
    | TaobaoCco
    | TaobaoContent
    | TaobaoDaifa
    | TaobaoDatapush
    | TaobaoDd
    | TaobaoDiandian
    | TaobaoDispute
    | TaobaoDpaas
    | TaobaoDv
    | TaobaoEinvoice
    | TaobaoEpp
    | TaobaoFenxiao
    | TaobaoFilm
    | TaobaoFliggy
    | TaobaoFsc
    | TaobaoFuwu
    | TaobaoGlobalbuys
    | TaobaoHomeai
    | TaobaoHotel
    | TaobaoIdlefish
    | TaobaoIfashion
    | TaobaoIhome
    | TaobaoInventory
    | TaobaoIstore
    | TaobaoItem
    | TaobaoItemmarket
    | TaobaoJaq
    | TaobaoJipiao
    | TaobaoJzfx
    | TaobaoKcb
    | TaobaoLbs
    | TaobaoLife
    | TaobaoLifeservice
    | TaobaoLive
    | TaobaoLocal
    | TaobaoLocalorder
    | TaobaoLogistics
    | TaobaoMiniapp
    | TaobaoModifyaddress
    | TaobaoModifyorder
    | TaobaoModifysku
    | TaobaoOc
    | TaobaoOfn
    | TaobaoOpenaccount
    | TaobaoOpencrm
    | TaobaoOpenim
    | TaobaoOpenmall
    | TaobaoOpentrade
    | TaobaoOs
    | TaobaoPaimai
    | TaobaoProfit
    | TaobaoPunish
    | TaobaoQianniu
    | TaobaoRdc
    | TaobaoRdcaligenius
    | TaobaoRecycle
    | TaobaoRefund
    | TaobaoRhino
    | TaobaoSec
    | TaobaoShop
    | TaobaoShoptransfer
    | TaobaoSinian
    | TaobaoSmartapp
    | TaobaoSmartmall
    | TaobaoSupp
    | TaobaoSurvey
    | TaobaoTae
    | TaobaoTaotv
    | TaobaoTbk
    | TaobaoTc
    | TaobaoTest
    | TaobaoTop
    | TaobaoTopadmin
    | TaobaoTopats
    | TaobaoTrade
    | TaobaoTraderate
    | TaobaoTrain
    | TaobaoTravelticket
    | TaobaoTrip
    | TaobaoUscesl
    | TaobaoUsergrowth
    | TaobaoVerify
    | TaobaoVideo
    | TaobaoVip
    | TaobaoWaimai
    | TaobaoWangwang
    | TaobaoWdktms
    | TaobaoWisdomstore
    | TaobaoWms
    | TaobaoWorktable
    | TaobaoWt
    | TaobaoXhotel
    | TaobaoXianyu
    | TaobaoXiaoqu
    | TaobaoXiaowei
    | TaobaoYichao
    | TaobaoZk;
  /**
   * - {@link TaotaoFilm}
   */
  type Taotao = TaotaoFilm;
  /**
   * - {@link TmallAliauto}
   * - {@link TmallAuto}
   * - {@link TmallCar}
   * - {@link TmallCarprofile}
   * - {@link TmallChannel}
   * - {@link TmallFuwu}
   * - {@link TmallHomedecorationfuwu}
   * - {@link TmallIfpfulfill}
   * - {@link TmallJst}
   * - {@link TmallMei}
   * - {@link TmallMlh}
   * - {@link TmallMultshop}
   * - {@link TmallNrt}
   * - {@link TmallOic}
   * - {@link TmallOmnichannel}
   * - {@link TmallOnehour}
   * - {@link TmallPosfee}
   * - {@link TmallRefund}
   * - {@link TmallRetail}
   * - {@link TmallSasssign}
   * - {@link TmallScm}
   * - {@link TmallService}
   * - {@link TmallServicecenter}
   * - {@link TmallServiceplatform}
   * - {@link TmallSupermarket}
   * - {@link TmallTccompass}
   * - {@link TmallTlc}
   * - {@link TmallTmg}
   * - {@link TmallXf}
   * - {@link TmallYichao}
   * - {@link TmallYougou}
   */
  type Tmall = TmallAliauto
    | TmallAuto
    | TmallCar
    | TmallCarprofile
    | TmallChannel
    | TmallFuwu
    | TmallHomedecorationfuwu
    | TmallIfpfulfill
    | TmallJst
    | TmallMei
    | TmallMlh
    | TmallMultshop
    | TmallNrt
    | TmallOic
    | TmallOmnichannel
    | TmallOnehour
    | TmallPosfee
    | TmallRefund
    | TmallRetail
    | TmallSasssign
    | TmallScm
    | TmallService
    | TmallServicecenter
    | TmallServiceplatform
    | TmallSupermarket
    | TmallTccompass
    | TmallTlc
    | TmallTmg
    | TmallXf
    | TmallYichao
    | TmallYougou;
  /**
   * - {@link TobaoLive}
   */
  type Tobao = TobaoLive;
  /**
   * - {@link TripHotel}
   */
  type Trip = TripHotel;
  /**
   * - {@link UmengOplus}
   */
  type Umeng = UmengOplus;
  /**
   * - {@link WdkCapacity}
   * - {@link WdkMarket}
   * - {@link WdkOpen}
   * - {@link WdkWorkforce}
   */
  type Wdk = WdkCapacity
    | WdkMarket
    | WdkOpen
    | WdkWorkforce;
  /**
   * - {@link XhotelDistribution}
   */
  type Xhotel = XhotelDistribution;
  /**
   * - {@link XianyuAftersale}
   * - {@link XianyuAppraise}
   * - {@link XianyuCar}
   * - {@link XianyuCtox}
   * - {@link XianyuEnvironment}
   * - {@link XianyuFishmarket}
   * - {@link XianyuIsv}
   * - {@link XianyuMarketrecycle}
   * - {@link XianyuRecycle}
   * - {@link XianyuRegister}
   * - {@link XianyuTemplate}
   * - {@link XianyuTender}
   */
  type Xianyu = XianyuAftersale
    | XianyuAppraise
    | XianyuCar
    | XianyuCtox
    | XianyuEnvironment
    | XianyuFishmarket
    | XianyuIsv
    | XianyuMarketrecycle
    | XianyuRecycle
    | XianyuRegister
    | XianyuTemplate
    | XianyuTender;
  /**
   * - {@link YoukuAigc}
   * - {@link YoukuTvosappstore}
   */
  type Youku = YoukuAigc
    | YoukuTvosappstore;
  /**
   * - {@link YunosWatch}
   * - {@link YunosYoc}
   */
  type Yunos = YunosWatch
    | YunosYoc;
}
