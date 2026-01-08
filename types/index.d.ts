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
  /** {@link IncomingMessage.AeLogisticsTrackingNoUpdate AE > 运单号修改} */
  ae_logistics_TrackingNoUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AeLogisticsTrackingNoUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliFinDybClaimResult 阿里金融 > 阿里场景金融大延保理赔结果通知给服务商} */
  ali_fin_DybClaimResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliFinDybClaimResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodeptCaseFilingInfo 网上法庭 > 网上法庭数据交换消息} */
  ali_infodept_CaseFilingInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodeptCaseFilingInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodeptPreserveEvidence 网上法庭 > 证件保全通知} */
  ali_infodept_PreserveEvidence(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodeptPreserveEvidence) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodeptYuncourtMsg 网上法庭 > 网上法庭开放平台消息} */
  ali_infodept_YuncourtMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodeptYuncourtMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  alibaba_adlab_IotDevice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabIotDevice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  alibaba_adlab_OrderItemEtaUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemEtaUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  alibaba_adlab_OrderItemStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabPackageCheckIn 自动驾驶API > 包裹入库消息} */
  alibaba_adlab_PackageCheckIn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabPackageCheckIn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroAccountConfirmPrice 蜂巢 > 分销商同意或者拒绝调价} */
  alibaba_agro_AccountConfirmPrice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroAccountConfirmPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroItemPriceChange 蜂巢 > 商品调价通知isv} */
  alibaba_agro_ItemPriceChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroLogisticsOrderStatusChange 蜂巢 > 子物流单状态变化小} */
  alibaba_agro_LogisticsOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroLogisticsOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroUnpunishProduct 蜂巢 > 取消铺货产品下架} */
  alibaba_agro_UnpunishProduct(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroUnpunishProduct) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilabsAutocarNofity 无人车 > 无人车消息推送} */
  alibaba_ailabs_AutocarNofity(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilabsAutocarNofity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilbasIotMessage 精灵IOT > 精灵iot消息} */
  alibaba_ailbas_IotMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilbasIotMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentActualDepartureNote AIS&供应商数据对接 > 部件实际发货通知} */
  alibaba_ais_SupplierComponentActualDepartureNote(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentActualDepartureNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentDeductionPlanNote AIS&供应商数据对接 > 部件扣料计划反馈通知} */
  alibaba_ais_SupplierComponentDeductionPlanNote(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentDeductionPlanNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentEstimatedArrivalNote AIS&供应商数据对接 > 部件预计到货通知-ETA} */
  alibaba_ais_SupplierComponentEstimatedArrivalNote(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentEstimatedArrivalNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentInventoryNote AIS&供应商数据对接 > 订阅整机库存反馈通知} */
  alibaba_ais_SupplierComponentInventoryNote(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentInventoryNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentManufactureOrderNote AIS&供应商数据对接 > 订阅整机生产指令通知} */
  alibaba_ais_SupplierComponentManufactureOrderNote(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentManufactureOrderNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentMpnPnNote AIS&供应商数据对接 > 订阅MPN/PN查询通知} */
  alibaba_ais_SupplierComponentMpnPnNote(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentMpnPnNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentPurchaseDirective AIS&供应商数据对接 > 阿里向整机供应商下发部件采购指令} */
  alibaba_ais_SupplierComponentPurchaseDirective(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentPurchaseDirective) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliabsTmallSign 蚂蚁安全 > ailabs蚂蚁安全异步消息} */
  alibaba_aliabs_TmallSign(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliabsTmallSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  alibaba_alicom_FlowGiftSendNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicomFlowGiftSendNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthBillProcessStatusNotify 阿里健康 > 单据处理状态通知} */
  alibaba_alihealth_BillProcessStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthBillProcessStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthDoctorMessage 阿里健康 > 医生、服务相关消息} */
  alibaba_alihealth_DoctorMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthDoctorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmBizStatusChange 阿里健康 > 售药机营业、歇业消息} */
  alibaba_alihealth_MvmBizStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmBizStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmInventorySwitch 阿里健康 > 售药机商品库存切换} */
  alibaba_alihealth_MvmInventorySwitch(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmInventorySwitch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmOrderNotify 阿里健康 > 接单/拒单/取货成功/取消订单消息通知} */
  alibaba_alihealth_MvmOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmOrderOfflineSync 阿里健康 > 售药机线下订单生成通知} */
  alibaba_alihealth_MvmOrderOfflineSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmOrderOfflineSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmShopBindStatusChange 阿里健康 > 售药机绑定、解绑} */
  alibaba_alihealth_MvmShopBindStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmShopBindStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmUpdateInventory 阿里健康 > 售药机商品上下架} */
  alibaba_alihealth_MvmUpdateInventory(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmUpdateInventory) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange 阿里健康 > 中台订单状态变化推送} */
  alibaba_alihealth_NrmopOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthOrderStatusChange 阿里健康 > 平台通知三方机构"订单状态变更"} */
  alibaba_alihealth_OrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthPrescriptionConfirm 阿里健康 > 处方平台处方核销消息} */
  alibaba_alihealth_PrescriptionConfirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthPrescriptionConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeOrderStatusChange 阿里健康 > O2O订单状态变更通知} */
  alibaba_alihealth_TradeOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康 > 疫苗交易预约信息变动} */
  alibaba_alihealth_TradeVaccineSubscribeChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthVcRegisterCancel 阿里健康 > 用户取消订阅缺苗登记同步isv} */
  alibaba_alihealth_VcRegisterCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthVcRegisterCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceDataPush 阿里物联 > 设备数据推送} */
  alibaba_alink_DeviceDataPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceMessage 阿里物联 > 设备报警消息} */
  alibaba_alink_DeviceMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinAxbCallRecord 阿里通信 > axb通话记录} */
  alibaba_aliqin_AxbCallRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinAxbCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinAxbCallRelease 阿里通信 > 通话结束时产生的通话记录} */
  alibaba_aliqin_AxbCallRelease(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinAxbCallRelease) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  alibaba_aliqin_DigitalSmsTemplateDR(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  alibaba_aliqin_FcActiveIotcard(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcActiveIotcard) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  alibaba_aliqin_FcCallCdr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallRecord 阿里通信 > 录音回执} */
  alibaba_aliqin_FcCallRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCodeSmsUp 阿里通信 > 编码发送短信上行消息} */
  alibaba_aliqin_FcCodeSmsUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCodeSmsUp) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaAliqinIotCurFlowLimitNotice 阿里通信 > 物联网卡剩余流量提醒} */
  alibaba_aliqin_IotCurFlowLimitNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotCurFlowLimitNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  alibaba_aliqin_IotPersonalConfirmNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知} */
  alibaba_aliqin_IotStatusNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinMiuaCallRecord 阿里通信 > Miua通话记录Top推送} */
  alibaba_aliqin_MiuaCallRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinMiuaCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinPlatformMonitorRecord 阿里通信 > 平台监控记录} */
  alibaba_aliqin_PlatformMonitorRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinPlatformMonitorRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  alibaba_aliqin_TaFcCallCdr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  alibaba_aliqin_TaFcSmsDR(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlisportsFishingTest 阿里体育 > 钓鱼测试消息} */
  alibaba_alisports_FishingTest(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlisportsFishingTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderAudit 集采 > 集采订单审核通知} */
  alibaba_ascpchannelmanagermentmsg_OrderAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderClose 集采 > 集采订单关闭通知} */
  alibaba_ascpchannelmanagermentmsg_OrderClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderDeliver 集采 > 集采订单发货通知} */
  alibaba_ascpchannelmanagermentmsg_OrderDeliver(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderDeliver) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCfoAccountFlowNotify TMI付款及银行支行主数据 > 账号流水通知消息} */
  alibaba_cfo_AccountFlowNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCfoAccountFlowNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCfoReturnInfo TMI付款及银行支行主数据 > 退票相关消息} */
  alibaba_cfo_ReturnInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCfoReturnInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCouponOpenCouponDraw 券开放消息权限包 > 用户领取券消息通知} */
  alibaba_coupon_OpenCouponDraw(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCouponOpenCouponDraw) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrmOutboundInfoMessage ICBU-CRM智能机器人外呼沟通 > 外呼名单消息发送} */
  alibaba_crm_OutboundInfoMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrmOutboundInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrowdsourcingMaterial - > 素材生成通知} */
  alibaba_crowdsourcing_Material(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrowdsourcingMaterial) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrDonatePointSync 公益三小时公共 > 公益三小时积分捐行为同步} */
  alibaba_csr_DonatePointSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrDonatePointSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceExecProgress 公益三小时公共 > 精准捐需求执行记录同步} */
  alibaba_csr_OpenWorkbenchTargetedInstanceExecProgress(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceExecProgress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceFeedbackStateChange 公益三小时公共 > 精准捐需求反馈记录状态变更} */
  alibaba_csr_OpenWorkbenchTargetedInstanceFeedbackStateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceFeedbackStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceStateChange 公益三小时公共 > 精准捐需求状态变更} */
  alibaba_csr_OpenWorkbenchTargetedInstanceStateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrZhiyuanhuiSyncEnergy 公益三小时公共 > 3小时积分捐同步活力值到志愿汇} */
  alibaba_csr_ZhiyuanhuiSyncEnergy(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrZhiyuanhuiSyncEnergy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationAidesignFinish 阿里楼盘 > AI设计方案状态变更通知} */
  alibaba_decoration_AidesignFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationAidesignFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationApartmentExport 阿里楼盘 > 生成户型图消息} */
  alibaba_decoration_ApartmentExport(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationApartmentExport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationDamoStatusChange 阿里楼盘 > 达摩院户型图消息推送} */
  alibaba_decoration_DamoStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationDamoStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationExternalAccountFinish 阿里楼盘 > 账号绑定消息} */
  alibaba_decoration_ExternalAccountFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationExternalAccountFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationHousethreedImage 阿里楼盘 > 生成3d全屋漫游图后的消息} */
  alibaba_decoration_HousethreedImage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationHousethreedImage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  alibaba_einvoice_ApplyUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceApplyUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息} */
  alibaba_einvoice_CompanyDoAction(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceCompanyDoAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceDeviceOperation 电子发票 > 设备绑定变化消息通知} */
  alibaba_einvoice_DeviceOperation(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceDeviceOperation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceMerchantAbilityUpdate 电子发票 > 开票能力变更通知} */
  alibaba_einvoice_MerchantAbilityUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceMerchantAbilityUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefund 电子发票 > 订购单退款通知} */
  alibaba_einvoice_OrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  alibaba_einvoice_OrderRefundResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceOrderRefundResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  alibaba_einvoice_RegisterFlowChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  alibaba_einvoice_RegisterFlowCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRenewOrder 电子发票 > 订购单续约通知} */
  alibaba_einvoice_RenewOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRenewOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  alibaba_einvoice_TaxDeviceOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceTaxDeviceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEslSendMsgAliyun ESL > 给阿里云发送消息} */
  alibaba_esl_SendMsgAliyun(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEslSendMsgAliyun) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息} */
  alibaba_fuwu_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuTradeAction 1688服务市场 > 外贸服务市场订单变更消息} */
  alibaba_fuwu_TradeAction(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuTradeAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuTradePayAction 1688服务市场 > ICBU服务市场交易支付消息} */
  alibaba_fuwu_TradePayAction(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuTradePayAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappyfinanceInNotify 娱乐宝 > CP入驻通知} */
  alibaba_happyfinance_InNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappyfinanceInNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  alibaba_happytrip_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytripOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripTravelApplyStateNotify 欢行开放平台 > 差旅申请单状态变更同步} */
  alibaba_happytrip_TravelApplyStateNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytripTravelApplyStateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceCancel 汇金销项票 > 汇金销项票作废通知} */
  alibaba_hj_InvoiceCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceFileUpload 汇金销项票 > 汇金销项票文件上传通知} */
  alibaba_hj_InvoiceFileUpload(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceFileUpload) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceIssue 汇金销项票 > 汇金销项票开具通知} */
  alibaba_hj_InvoiceIssue(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceIssue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceRedIssue 汇金销项票 > 汇金销项票冲红通知} */
  alibaba_hj_InvoiceRedIssue(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceRedIssue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceReject 汇金销项票 > 汇金销项票开票拒绝通知} */
  alibaba_hj_InvoiceReject(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceReject) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceReturnReject 汇金销项票 > 汇金销项票拒绝退票通知} */
  alibaba_hj_InvoiceReturnReject(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceReturnReject) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceSend 汇金销项票 > 汇金销项票发票寄送通知} */
  alibaba_hj_InvoiceSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceUnissue 汇金销项票 > 汇金销项票待开通知} */
  alibaba_hj_InvoiceUnissue(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHomestylerAigcContentImageGenerateCallback 洞窝 > 设计家aigc生图结果消息通知} */
  alibaba_homestyler_AigcContentImageGenerateCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHomestylerAigcContentImageGenerateCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHomestylerAigcPanoramaReplaceCallback 洞窝 > 洞窝全景图替换消息回调} */
  alibaba_homestyler_AigcPanoramaReplaceCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHomestylerAigcPanoramaReplaceCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIcbuliveCommentNotice ICBU > 直播评论通知} */
  alibaba_icbulive_CommentNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIcbuliveCommentNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIcbuliveEnterNotice ICBU > 直播观众进场通知} */
  alibaba_icbulive_EnterNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIcbuliveEnterNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleApplyInfoSyn 闲鱼 > 灵活用工报名信息同步} */
  alibaba_idle_ApplyInfoSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleApplyInfoSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleHouseStatusNotify 闲鱼 > 闲鱼房源状态变更通知} */
  alibaba_idle_HouseStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleHouseStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleJobItemChangeStatusNotify 闲鱼 > 岗位状态变更通知} */
  alibaba_idle_JobItemChangeStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleJobItemChangeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleLocalMessageNotify 闲鱼 > 闲鱼KA商家询单消息通知} */
  alibaba_idle_LocalMessageNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleLocalMessageNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIfpPackageCfcContainer 五道口配送 > 同城履约包裹状态变更消息} */
  alibaba_ifp_PackageCfcContainer(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIfpPackageCfcContainer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopGoodsChange 采购系统 > 采购系统商品消息变更消息} */
  alibaba_infop_GoodsChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopGoodsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopPRAudited 采购系统 > PR 审批完成通知} */
  alibaba_infop_PRAudited(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopPRAudited) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopRcvAuditStatusChange 采购系统 > 采购系统接收单状态变更通知} */
  alibaba_infop_RcvAuditStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopRcvAuditStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopRcvCreateSuccess 采购系统 > 接收单创建成功通知} */
  alibaba_infop_RcvCreateSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopRcvCreateSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIntimeServiceOrderCreateUpdate 银泰 > 银泰服务订单创建&更新} */
  alibaba_intime_ServiceOrderCreateUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIntimeServiceOrderCreateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayApply 电子发票 > 开票申请(支付宝专用)} */
  alibaba_invoice_AlipayApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayApplyResult 电子发票 > 开票申请审核结果(支付宝专用)} */
  alibaba_invoice_AlipayApplyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayCreateReq 电子发票 > 开票请求(支付宝专用)} */
  alibaba_invoice_AlipayCreateReq(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayCreateReq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayResultReturn 电子发票 > 开票请求结果(支付宝专用)} */
  alibaba_invoice_AlipayResultReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApply 电子发票 > 开票申请} */
  alibaba_invoice_Apply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyDisagree 电子发票 > 商家拒绝开票} */
  alibaba_invoice_ApplyDisagree(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyDisagree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyResult 电子发票 > 开票申请审核结果} */
  alibaba_invoice_ApplyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceChangePaper 电子发票 > 电换纸消息} */
  alibaba_invoice_ChangePaper(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceChangePaper) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceClerkStatusChange 电子发票 > 商户店员状态变更} */
  alibaba_invoice_ClerkStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceClerkStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceCreateReq 电子发票 > 开票请求消息} */
  alibaba_invoice_CreateReq(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceCreateReq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskMail 电子发票 > 商家邮寄税控盘消息} */
  alibaba_invoice_DiskMail(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskMail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskOffline 电子发票 > 税盘下架单新增和更新通知} */
  alibaba_invoice_DiskOffline(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskOffline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceFlowBuket 电子发票 > 资源包开通/订购记录同步} */
  alibaba_invoice_FlowBuket(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceFlowBuket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceGetXmlFile 电子发票 > 获取xml发票文件} */
  alibaba_invoice_GetXmlFile(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceGetXmlFile) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceHxQuery 电子发票 > 830平台查询单机盒子消息} */
  alibaba_invoice_HxQuery(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceHxQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeCertificateResult 电子发票 > 进项发票认证结果通知} */
  alibaba_invoice_IncomeCertificateResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeCertificateResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeOcrResult 电子发票 > ocr结果通知} */
  alibaba_invoice_IncomeOcrResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeOcrResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeScanResult 电子发票 > 进项扫描结果通知} */
  alibaba_invoice_IncomeScanResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeScanResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeVerifyResult 电子发票 > 进项查验结果通知} */
  alibaba_invoice_IncomeVerifyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeVerifyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInnerResultReturn 电子发票 > 开票请求结果(内部专用)} */
  alibaba_invoice_InnerResultReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInnerResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInvoiceApply 电子发票 > 税控服务开票申请} */
  alibaba_invoice_InvoiceApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceItemNoSwitch 电子发票 > 税号商品编码切换消息} */
  alibaba_invoice_ItemNoSwitch(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceItemNoSwitch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceLogistics 电子发票 > 发票对外通知物流信息} */
  alibaba_invoice_Logistics(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceMakeUp 电子发票 > 补开票消息} */
  alibaba_invoice_MakeUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceMakeUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）} */
  alibaba_invoice_PaperOpsReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePaperOpsReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePreConsulting 电子发票 > 电子发票售前咨询} */
  alibaba_invoice_PreConsulting(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePreConsulting) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceProxyCreateReq 电子发票 > 开票请求消息} */
  alibaba_invoice_ProxyCreateReq(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceProxyCreateReq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceProxyCreateReqTest 电子发票 > 开票请求消息影子Topic} */
  alibaba_invoice_ProxyCreateReqTest(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceProxyCreateReqTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQuery 电子发票 > 数据查询请求} */
  alibaba_invoice_Query(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQueryInvoice 电子发票 > 查询发票信息} */
  alibaba_invoice_QueryInvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQueryInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRecreateBlue 电子发票 > 订单退款冲红后重开蓝票消息} */
  alibaba_invoice_RecreateBlue(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRecreateBlue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegist 电子发票 > 入驻阿里发票平台} */
  alibaba_invoice_Regist(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegist) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegistQuit 电子发票 > 商家请求退出} */
  alibaba_invoice_RegistQuit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegistQuit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegistResult 电子发票 > 入驻阿里发票平台结果} */
  alibaba_invoice_RegistResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegistResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceResultReturn 电子发票 > 开票请求结果} */
  alibaba_invoice_ResultReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRetryApply 电子发票 > 开票申请失败重试消息} */
  alibaba_invoice_RetryApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRetryApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceServiceClose 电子发票 > 服务到期关闭} */
  alibaba_invoice_ServiceClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceServiceClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceStatusChange 电子发票 > 发票状态变更消息} */
  alibaba_invoice_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceSubService 电子发票 > 服务子单消息} */
  alibaba_invoice_SubService(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceSubService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxChange 电子发票 > 商家税号变更} */
  alibaba_invoice_TaxChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxCodeSwitch 电子发票 > 税号切换商品编码消息} */
  alibaba_invoice_TaxCodeSwitch(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxCodeSwitch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxOfficeUserkeyReturn 电子发票 > 浙江税局注册商户信息回传} */
  alibaba_invoice_TaxOfficeUserkeyReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxOfficeUserkeyReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnissue 电子发票 > 创建未开具发票通知} */
  alibaba_invoice_Unissue(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnitBuy 电子发票 > 税控单元订购记录同步} */
  alibaba_invoice_UnitBuy(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnitBuy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnitRefund 电子发票 > 税控单元退款消息} */
  alibaba_invoice_UnitRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnitRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceVerifyResult 电子发票 > 发票查验结果通知消息} */
  alibaba_invoice_VerifyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceVerifyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJymSteamTradeOrderNotify 交易猫 > 交易猫steam正向消息通知} */
  alibaba_jym_SteamTradeOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJymSteamTradeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJymSteamTradeRefundNotify 交易猫 > 交易猫steam逆向通知} */
  alibaba_jym_SteamTradeRefundNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJymSteamTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJymTradeRefundNotify 交易猫 > 交易猫逆向单状态通知} */
  alibaba_jym_TradeRefundNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJymTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKaolaAlipayTaskFinish 考拉 > 考拉用户完成支付宝任务} */
  alibaba_kaola_AlipayTaskFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKaolaAlipayTaskFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKaolaSendPromoevent 考拉 > 考拉发送消息到Promoevent} */
  alibaba_kaola_SendPromoevent(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKaolaSendPromoevent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKongurBusinessMsg 司法开放平台 > 司法开放平台推送消息给提供律师服务的供应商} */
  alibaba_kongur_BusinessMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKongurBusinessMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassenFileStatusNotify 网上法庭 > 网上法庭证据文件状态变更通知} */
  alibaba_lassen_FileStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassenFileStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassenLegalCasePaymentOrderNotify 网上法庭 > 发送支付令} */
  alibaba_lassen_LegalCasePaymentOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassenLegalCasePaymentOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassenLegalCaseStatusNotify 网上法庭 > 网上法庭案件状态变更通知} */
  alibaba_lassen_LegalCaseStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassenLegalCaseStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLegalMasterdataCompany - > 公司消息变更通知} */
  alibaba_legal_MasterdataCompany(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLegalMasterdataCompany) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaLstOpenOrderCreate 零售通_公共 > 零售通门店订单创建消息推送} */
  alibaba_lst_OpenOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstOpenOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息} */
  alibaba_lst_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstRefundChange 零售通_公共 > 订单退单} */
  alibaba_lst_RefundChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstRefundChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  alibaba_lst_SelfOrderShipChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSelfOrderShipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  alibaba_lst_SpeakerAdvertPlayRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  alibaba_lst_SupplierOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSupplierOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstVendingInventoryUpdate 零售通_公共 > 自动售货机库存更新消息} */
  alibaba_lst_VendingInventoryUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstVendingInventoryUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstVendingTradeCreate 零售通_公共 > 售货机交易创建消息} */
  alibaba_lst_VendingTradeCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstVendingTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcInventorySynchronous MMC五盘货项目 > RT店仓项目-MMC库存增量推送消息} */
  alibaba_mmc_InventorySynchronous(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcInventorySynchronous) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaMosSaleOrderDeliver 银泰开放平台消息 > 销售单发货消息} */
  alibaba_mos_SaleOrderDeliver(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrderDeliver) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  alibaba_mos_SaleOrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosTradeOrder 银泰开放平台消息 > 交易订单状态变动} */
  alibaba_mos_TradeOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosTradeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsdSettlementBillDetail 天猫服务 > 喵速达服务供应链结算单明细消息} */
  alibaba_msd_SettlementBillDetail(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsdSettlementBillDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfserviceAuditCreate 天猫服务 > 喵师傅审核单通知} */
  alibaba_msfservice_AuditCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfserviceAuditCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfserviceExtrafeeRecordCreate 天猫服务 > 喵师傅收费单消息通知} */
  alibaba_msfservice_ExtrafeeRecordCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfserviceExtrafeeRecordCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfserviceReminderCreate 天猫服务 > 催单消息} */
  alibaba_msfservice_ReminderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfserviceReminderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMtpItemAddOrUpdate MTP > MTP-商品新建/编辑成功消息} */
  alibaba_mtp_ItemAddOrUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMtpItemAddOrUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMtpSupplierAddUpdate MTP > 二级供应商入驻/编辑消息} */
  alibaba_mtp_SupplierAddUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMtpSupplierAddUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaAbandonCert 网上法庭 > 作废存证消息接口} */
  alibaba_nazca_AbandonCert(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaAbandonCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaQueryChargeNum 网上法庭 > 查询收费数量} */
  alibaba_nazca_QueryChargeNum(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaQueryChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaSaveCert 网上法庭 > 发起存证消息接口} */
  alibaba_nazca_SaveCert(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaSaveCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaUpdateChargeNum 网上法庭 > 更新收费数量} */
  alibaba_nazca_UpdateChargeNum(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaUpdateChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNewretailPosOrderMessage 本地生活 > 阿里本地生活智慧菜场RTP订单消息} */
  alibaba_newretail_PosOrderMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNewretailPosOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  alibaba_nlife_BToBTradeStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToBTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  alibaba_nlife_BToCTradeOrderSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToCTradeOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeStatusNotify 零售plus > B2C交易订单状态变化通知} */
  alibaba_nlife_BToCTradeStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToCTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  alibaba_nlife_BtoBTradeDeliverNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  alibaba_nlife_BtoBTradeEffectiveNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobRefundInfoNotify 零售plus > 二级供货商批次采退单通知信息} */
  alibaba_nlife_BtobRefundInfoNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobRefundInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  alibaba_nlife_BtobTradeRefundConfirmMsgNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  alibaba_nlife_BtobTradeRefundNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  alibaba_nlife_InstorageDiffAuditNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息} */
  alibaba_nlife_ItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaOkkiSpuStatusSync 小满 > 小满商品服务状态同步} */
  alibaba_okki_SpuStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaOkkiSpuStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPaimaiAlipayConsumeGoldTaskFinish 阿里拍卖 > 支付宝用户完成消费金任务} */
  alibaba_paimai_AlipayConsumeGoldTaskFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPaimaiAlipayConsumeGoldTaskFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPaimaiCommonPromoTask 阿里拍卖 > 拍卖支付宝营销通用消息} */
  alibaba_paimai_CommonPromoTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPaimaiCommonPromoTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurContractStatusChange 信息平台-采购 > 合同状态改变发送消息} */
  alibaba_pur_ContractStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurContractStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurDelSettlementContract 信息平台-采购 > 作废结算合同} */
  alibaba_pur_DelSettlementContract(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurDelSettlementContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurFaApproveFinished 信息平台-采购 > 入库单审批完成消息广播} */
  alibaba_pur_FaApproveFinished(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurFaApproveFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoAudited 信息平台-采购 > PO审批完成} */
  alibaba_pur_PoAudited(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoAudited) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoCancelled 信息平台-采购 > PO作废消息发送} */
  alibaba_pur_PoCancelled(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoCancelled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoClosed 信息平台-采购 > PO关闭发送消息} */
  alibaba_pur_PoClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoNotify 信息平台-采购 > PO状态变更后发送消息通知} */
  alibaba_pur_PoNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPrApproved 信息平台-采购 > PR审批完成消息通知} */
  alibaba_pur_PrApproved(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPrApproved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPrDelete 信息平台-采购 > pr删除通知消息} */
  alibaba_pur_PrDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPrDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPurchaseRequisition 信息平台-采购 > 创建pr} */
  alibaba_pur_PurchaseRequisition(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPurchaseRequisition) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPurchaseRequisitionCancel 信息平台-采购 > PR作废消息通知} */
  alibaba_pur_PurchaseRequisitionCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPurchaseRequisitionCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPurchaseRequisitionDelete 信息平台-采购 > PR删除消息通知} */
  alibaba_pur_PurchaseRequisitionDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPurchaseRequisitionDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurRcvNotify 信息平台-采购 > RT状态变更消息通知} */
  alibaba_pur_RcvNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurRcvNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurResourceOrderCancelNotify 信息平台-采购 > 取消订单结果通知} */
  alibaba_pur_ResourceOrderCancelNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurResourceOrderCancelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurResourceOrderShipNotify 信息平台-采购 > 发货提醒} */
  alibaba_pur_ResourceOrderShipNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurResourceOrderShipNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurRtAudited 信息平台-采购 > RT审批完成消息通知} */
  alibaba_pur_RtAudited(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurRtAudited) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurSettlementContract 信息平台-采购 > 维护结算合同消息发送} */
  alibaba_pur_SettlementContract(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurSettlementContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurSupplierChange 信息平台-采购 > 供应商信息变更} */
  alibaba_pur_SupplierChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurSupplierChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurVprApproved 信息平台-采购 > VPR审批报价完成发送消息} */
  alibaba_pur_VprApproved(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurVprApproved) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaTbdxEBookContent 淘宝电子书 > 电子书内容变更消息} */
  alibaba_tbdx_EBookContent(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxEBookContent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdxEBookSellerSign 淘宝电子书 > 电子书商家签约消息} */
  alibaba_tbdx_EBookSellerSign(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxEBookSellerSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdxEBookUserOrder 淘宝电子书 > 电子书用户下单消息} */
  alibaba_tbdx_EBookUserOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxEBookUserOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdxPaperPush 淘宝电子书 > 淘宝教育论文查重推送} */
  alibaba_tbdx_PaperPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxPaperPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTcLogisticsStatusUpdate 同城 > 同城履约物流状态通知} */
  alibaba_tc_LogisticsStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTcLogisticsStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursAuthorizationResult 三小时公益 > 授权结果} */
  alibaba_threehours_AuthorizationResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursAuthorizationResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursDonateStep 三小时公益 > 益起来捐步成功消息} */
  alibaba_threehours_DonateStep(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursDonateStep) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursUserBindResult 三小时公益 > 用户绑定结果通知} */
  alibaba_threehours_UserBindResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursUserBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursUserJoinActivity 三小时公益 > 用户参与志愿服务活动} */
  alibaba_threehours_UserJoinActivity(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursUserJoinActivity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  alibaba_tianji_ContractOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiContractOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  alibaba_tianji_OrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTxdInteractEventNotice 淘鲜达 > 淘鲜达互动事件通知} */
  alibaba_txd_InteractEventNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTxdInteractEventNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTxdOrderStatusChangeToAlipay 淘鲜达 > 淘鲜达交易状态变化} */
  alibaba_txd_OrderStatusChangeToAlipay(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTxdOrderStatusChangeToAlipay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaUniTradeStatusNotify 全域收单 > 全域收单交易消息} */
  alibaba_uni_TradeStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaUniTradeStatusNotify) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaWdkDmsSignError 五道口订单 > 配送异常信消息} */
  alibaba_wdk_DmsSignError(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkDmsSignError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillOrderChange 五道口订单 > 售中履约变更消息} */
  alibaba_wdk_FulfillOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillWarehouseHandover 五道口订单 > 仓配交接消息} */
  alibaba_wdk_FulfillWarehouseHandover(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillWarehouseHandover) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkReturnWarehouseStatusChange 五道口订单 > 退仓单物流状态变更通知} */
  alibaba_wdk_ReturnWarehouseStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkReturnWarehouseStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkStoreItemUpdate 五道口订单 > 商家渠道商品变动消息} */
  alibaba_wdk_StoreItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkStoreItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkTxdCrmChannelMessagePush 五道口订单 > 外部商家发送push消息} */
  alibaba_wdk_TxdCrmChannelMessagePush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkTxdCrmChannelMessagePush) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaWdkorderOrderRefundPush 五道口订单 > 猫超订单逆向消息通知商户} */
  alibaba_wdkorder_OrderRefundPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderRefundPush) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaYichaoClaimOrder 天猫服务 > 蚁巢投保理赔消息} */
  alibaba_yichao_ClaimOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichaoClaimOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYichaoInsuranceUpdate 天猫服务 > 蚁巢保单修改消息} */
  alibaba_yichao_InsuranceUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichaoInsuranceUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYichaoReportOrder 天猫服务 > 蚁巢报案单更新消息} */
  alibaba_yichao_ReportOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichaoReportOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunioDataTransfer 平台消息 > YunIO数据流转} */
  alibaba_yunio_DataTransfer(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunioDataTransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步} */
  alicom_axb_SubsEventSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxbSubsEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomDeductOrderPay 阿里通信 > 阿里通信代扣订单支付结果消息} */
  alicom_deduct_OrderPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomDeductOrderPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlowAliPayChargeWalletFlow 阿里通信 > 支付宝流量钱包提取流量} */
  alicom_flow_AliPayChargeWalletFlow(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlowAliPayChargeWalletFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlowAliPayChargeWalletRed 阿里通信 > 支付宝流量钱包发红包} */
  alicom_flow_AliPayChargeWalletRed(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlowAliPayChargeWalletRed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlowAliPayWalletFlowDraw 阿里通信 > 支付宝流量钱包领取红包} */
  alicom_flow_AliPayWalletFlowDraw(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlowAliPayWalletFlowDraw) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  aliexpress_aeia_TaskplatformInterestNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeiaTaskplatformInterestNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAftersaleinsuranceMessageFromAE AE > AE发送给蚂蚁保险的消息} */
  aliexpress_aftersaleinsurance_MessageFromAE(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAftersaleinsuranceMessageFromAE) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAftersaleinsuranceMessageFromAnt AE > 蚂蚁保险消息-蚂蚁发出到AE} */
  aliexpress_aftersaleinsurance_MessageFromAnt(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAftersaleinsuranceMessageFromAnt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressMessagePushnewmsg AE > 站内信新消息主动推送} */
  aliexpress_message_Pushnewmsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressMessagePushnewmsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllFinish AE-交易 > 交易成功} */
  aliexpress_order_AllFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllFulfillmentOrderCreated AE-交易 > 等待卖家发货（所有卖家的订单）} */
  aliexpress_order_AllFulfillmentOrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllFulfillmentOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllSellerPartSendGoods AE-交易 > 卖家部分发货（所有卖家的订单）} */
  aliexpress_order_AllSellerPartSendGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllSellerPartSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllWaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  aliexpress_order_AllWaitBuyerAcceptGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllWaitBuyerAcceptGoods) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AliexpressTradeOrderNotify AE > AE订单状态通知} */
  aliexpress_trade_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressTradeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarrantyCreateWarrantyOrderByPms AE > 发送保修单消息ByPms} */
  aliexpress_warranty_CreateWarrantyOrderByPms(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarrantyCreateWarrantyOrderByPms) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAE AE > 保修商消息-AE} */
  aliexpress_warranty_WarrantyOrderMessageFromAE(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAE) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAliExpress AE > 保修商消息-AliExpress} */
  aliexpress_warranty_WarrantyOrderMessageFromAliExpress(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAliExpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  alihealth_cep_OrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCepOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthHbPushPatientCardToHis 阿里健康 > 患者就诊卡推送至医院进行验证} */
  alihealth_hb_PushPatientCardToHis(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthHbPushPatientCardToHis) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthHbPushPrescriptionToYh 阿里健康 > 处方推送给银海} */
  alihealth_hb_PushPrescriptionToYh(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthHbPushPrescriptionToYh) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthTestTmcCreate 阿里健康 > 阿里健康测试消息} */
  alihealth_test_TmcCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthTestTmcCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  alihealth_ys_OrderMemConsume(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderMemConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  alihealth_ys_OrderPushConsume(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderPushConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderRefund 阿里健康&一树-电商中台对接 > 订单退款成功推送} */
  alihealth_ys_OrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipChange 阿里健康&一树-电商中台对接 > 会员变动} */
  alihealth_ys_VipChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipIntegralChange 阿里健康&一树-电商中台对接 > 会员积分变动} */
  alihealth_ys_VipIntegralChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipIntegralChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipIntegralSync 阿里健康&一树-电商中台对接 > 会员积分同步} */
  alihealth_ys_VipIntegralSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipIntegralSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipSync 阿里健康&一树-电商中台对接 > 会员信息同步} */
  alihealth_ys_VipSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerActionClueId 阿里楼盘 > 动作线索消息} */
  alihouse_customer_ActionClueId(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerActionClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerAppNoteSync 阿里楼盘 > 来客通_备注信息同步} */
  alihouse_customer_AppNoteSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerAppNoteSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerBehaviorClueId 阿里楼盘 > 用户行为线索产出} */
  alihouse_customer_BehaviorClueId(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerBehaviorClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerBehaviorClueMsg 阿里楼盘 > 新二租归一表单线索消息通知} */
  alihouse_customer_BehaviorClueMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerBehaviorClueMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerImMsg 阿里楼盘 > IM线索消息通知} */
  alihouse_customer_ImMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerImMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerRemindNotice 阿里楼盘 > 用户关注提醒消息} */
  alihouse_customer_RemindNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerRemindNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerRentBehaviorClueId 阿里楼盘 > 租房用户行为线索消息通知} */
  alihouse_customer_RentBehaviorClueId(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerRentBehaviorClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerSecondBehaviorClueId 阿里楼盘 > 二手房用户行为线索消息通知} */
  alihouse_customer_SecondBehaviorClueId(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerSecondBehaviorClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseHouseProjectAudit 阿里楼盘 > 楼盘消息审核} */
  alihouse_house_ProjectAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseHouseProjectAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseHouseProjectSaleAudit 阿里楼盘 > 天猫好房商品审核结果通知} */
  alihouse_house_ProjectSaleAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseHouseProjectSaleAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosCosmoStreamPush AliOS COSMO > 流式API} */
  alios_cosmo_StreamPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliosCosmoStreamPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosWatchNotifyMessagePush AliOS手表 > 消息推送服务} */
  alios_watch_NotifyMessagePush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliosWatchNotifyMessagePush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosWatchPassthroughMessagePush AliOS手表 > 透传消息} */
  alios_watch_PassthroughMessagePush(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliosWatchPassthroughMessagePush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayAeTradePreloan 支付宝 > AE提前放款} */
  alipay_ae_TradePreloan(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayAeTradePreloan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayAeTradePreloanNew 支付宝 > AE提前放款新链路} */
  alipay_ae_TradePreloanNew(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayAeTradePreloanNew) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaomingMsg 支付宝 > 活动报名消息} */
  alipay_baoming_Msg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaomingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoxianPolicySyncAuthorize 支付宝 > 保险线下同步授权消息} */
  alipay_baoxian_PolicySyncAuthorize(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoxianPolicySyncAuthorize) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoxianPolicySyncCancel 支付宝 > 保险线下同步解除授权消息} */
  alipay_baoxian_PolicySyncCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoxianPolicySyncCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayCharityThreeHoursBillSync 支付宝 > 支付宝公益平台实时同步淘宝公益三小时流水} */
  alipay_charity_ThreeHoursBillSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayCharityThreeHoursBillSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderClosed 支付宝 > 采购单关闭} */
  alipay_fenxiao_FxOrderClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderCreate 支付宝 > 采购单创建} */
  alipay_fenxiao_FxOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderModifyPrice 支付宝 > 改价} */
  alipay_fenxiao_FxOrderModifyPrice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderModifyPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderPaid 支付宝 > 采购单付款} */
  alipay_fenxiao_FxOrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderShipped 支付宝 > 采购单发货} */
  alipay_fenxiao_FxOrderShipped(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderSuccess 支付宝 > 采购成功} */
  alipay_fenxiao_FxOrderSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderTransfered 支付宝 > 采购单结算完成} */
  alipay_fenxiao_FxOrderTransfered(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderTransfered) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundDispute 支付宝 > 新退款消息} */
  alipay_refund_Dispute(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundDispute) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundRefundClosed 支付宝 > 退款关闭} */
  alipay_refund_RefundClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundRefundCreated 支付宝 > 退款消息} */
  alipay_refund_RefundCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundRefundSuccess 支付宝 > 退款成功消息} */
  alipay_refund_RefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayScfAdvance 支付宝 > 支付宝菜鸟消息} */
  alipay_scf_Advance(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayScfAdvance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeAdvanceDisburse 支付宝 > 订单极速放款成功} */
  alipay_trade_AdvanceDisburse(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeAdvanceDisburse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeBuyerPay 支付宝 > 买家付款} */
  alipay_trade_BuyerPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeFakeTrade 支付宝 > 虚假交易订单} */
  alipay_trade_FakeTrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeFakeTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeAlipayCreate 支付宝 > 支付宝订单号创建} */
  alipay_trade_TradeAlipayCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeBuyerClose 支付宝 > 买家关闭订单} */
  alipay_trade_TradeBuyerClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeBuyerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeBuyerStepPay 支付宝 > 阶段付款} */
  alipay_trade_TradeBuyerStepPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeBuyerStepPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeCreate 支付宝 > 订单创建} */
  alipay_trade_TradeCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradePartlyConfirmPay 支付宝 > 部分收货} */
  alipay_trade_TradePartlyConfirmPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradePartlyConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradePeriodSuccess 支付宝 > 交易阶段成功} */
  alipay_trade_TradePeriodSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradePeriodSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeSellerShip 支付宝 > 订单发货} */
  alipay_trade_TradeSellerShip(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeSuccess 支付宝 > 交易成功} */
  alipay_trade_TradeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayUpdateSeller 支付宝 > 卖家信息变更} */
  alipay_update_Seller(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayUpdateSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayXiaodaiSignNotify 阿里金融 > 阿里金融签约通知} */
  alipay_xiaodai_SignNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayXiaodaiSignNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLarkJiayingDataReport ALIPIC > 佳影数据上云} */
  alipic_lark_JiayingDataReport(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLarkJiayingDataReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLarkResultDataDownlink ALIPIC > POS配置态数据增量下行} */
  alipic_lark_ResultDataDownlink(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLarkResultDataDownlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLarkSchedulesDataDownlink ALIPIC > 排期列表数据增量下行} */
  alipic_lark_SchedulesDataDownlink(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLarkSchedulesDataDownlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlisportsBankAlipayattention 支付宝体育 > 支付宝体育服务小程序关注消息} */
  alisports_bank_Alipayattention(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlisportsBankAlipayattention) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgentNotify 淘宝机票 > 商家机票业务通知} */
  alitrip_agent_Notify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgentNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripCorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  alitrip_btrip_CorpSignCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripCorpSignCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  alitrip_btrip_ExceedApplySubmit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripExceedApplySubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtriphotelRpAudit 商旅API > 商旅酒店rp发布审核} */
  alitrip_btriphotel_RpAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtriphotelRpAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingActivityAudit 商旅API > tmc营销审核消息} */
  alitrip_ebooking_ActivityAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingActivityAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingActivityChange 商旅API > EBK天天特惠营销活动变更} */
  alitrip_ebooking_ActivityChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingActivityChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingCreateRatePlan 商旅API > 通知生成RatePlan消息} */
  alitrip_ebooking_CreateRatePlan(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingCreateRatePlan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingRepostMessage 商旅API > alitrip_ebooking_RepostMessage} */
  alitrip_ebooking_RepostMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingRepostMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingSmsRecepit 商旅API > 订单短信回执消息} */
  alitrip_ebooking_SmsRecepit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingSmsRecepit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingTmcPassNotify 商旅API > tmc转发notify消息} */
  alitrip_ebooking_TmcPassNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingTmcPassNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChange 淘宝机票 > 航变消息} */
  alitrip_flight_Change(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChangeStatusNotify 淘宝机票 > 机票改签流程状态通知} */
  alitrip_flight_ChangeStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightChangeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightFlightChange 淘宝机票 > 新京航航变消息} */
  alitrip_flight_FlightChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightPayNotification 淘宝机票 > 机票支付结果异步通知} */
  alitrip_flight_PayNotification(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightPayNotification) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightRefundNotify 淘宝机票 > 新京杭-退票相关通知} */
  alitrip_flight_RefundNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightTradeNotify 淘宝机票 > 机票交易通知} */
  alitrip_flight_TradeNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripHotelHotelCrawler 商旅API > 转发飞猪推送比价消息} */
  alitrip_hotel_HotelCrawler(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripHotelHotelCrawler) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripHotelOrderOperation 商旅API > 酒店交易发送云上消息} */
  alitrip_hotel_OrderOperation(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripHotelOrderOperation) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlitripSyncIatkfTaobao 商旅API > 机票自营淘内应用消息同步云上} */
  alitrip_sync_IatkfTaobao(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripSyncIatkfTaobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTfOrderStatusChanged 商旅API > 旅行购订单状态变化消息} */
  alitrip_tf_OrderStatusChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTfOrderStatusChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTradeModifyApply 商旅API > 国内机票改签申请消息} */
  alitrip_trade_ModifyApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTradeModifyApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  alitrip_train_AgentStopQuery(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainAgentStopQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainRiskNotify 淘宝火车票 > 飞猪火车票风控消息} */
  alitrip_train_RiskNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainRiskNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainTobOrderCreate 淘宝火车票 > 创建订单成功消息} */
  alitrip_train_TobOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainTobOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelFaceOrder 航旅度假交易 > 线上人脸录入通知消息} */
  alitrip_travel_FaceOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelFaceOrder) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AliyunGscProductionQualityCpkCreate 阿里云质检 > 质检结果CPK触发查询} */
  aliyun_gsc_ProductionQualityCpkCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionQualityCpkCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGscProductionQualityDetailSpcCreate 阿里云质检 > 质检结果SPC详情触发查询} */
  aliyun_gsc_ProductionQualityDetailSpcCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionQualityDetailSpcCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGscProductionQualitySpcCreate 阿里云质检 > 质检结果SPC触发查询} */
  aliyun_gsc_ProductionQualitySpcCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionQualitySpcCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGscProductionReceiptInfoCreate 阿里云质检 > C2M物流信息下发} */
  aliyun_gsc_ProductionReceiptInfoCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionReceiptInfoCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步} */
  aliyun_iot_OrderSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIotOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponCouponSync 淘宝闪购联盟-卡券消息API > 淘宝闪购联盟卡券同步消息} */
  alsc_coupon_CouponSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponCouponSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponOrderVoucherStatus 淘宝闪购联盟-卡券消息API > 淘宝闪购卡券openapi订单消息} */
  alsc_coupon_OrderVoucherStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponOrderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponpackagePurchaseSync 淘宝闪购联盟-卡券包采购单消息API > 淘宝闪购联盟卡券包采购同步消息} */
  alsc_couponpackage_PurchaseSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponpackagePurchaseSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponpackagePurchaseTicketSync 淘宝闪购联盟-卡券包采购单消息API > 淘宝闪购联盟卡券包采购凭证同步} */
  alsc_couponpackage_PurchaseTicketSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponpackagePurchaseTicketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscDaodianHaitunPromoEventNotify 口碑 > 本地生活到店多渠道投放海豚活动事件通知} */
  alsc_daodian_HaitunPromoEventNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscDaodianHaitunPromoEventNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbShopAudit 口碑 > 本地生活口碑店铺审核消息} */
  alsc_kb_ShopAudit(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbShopAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbShopChange 口碑 > 本地生活口碑店铺变更消息} */
  alsc_kb_ShopChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbShopChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbaobaotuanOrderVoucherStatus 口碑 > 口碑爆爆团三方订单&凭证状态消息} */
  alsc_kbbaobaotuan_OrderVoucherStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbaobaotuanOrderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbbtOrderVoucherStatus 口碑 > 口碑爆爆团凭证消息流} */
  alsc_kbbbt_OrderVoucherStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbbtOrderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbbtProductChange 口碑 > 口碑爆爆团商品变更的消息} */
  alsc_kbbbt_ProductChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbbtProductChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscReviewbwcActivityEnrollSync 淘宝闪购联盟-霸王餐消息推送API > 淘宝闪购评价有礼门店活动消息} */
  alsc_reviewbwc_ActivityEnrollSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscReviewbwcActivityEnrollSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscReviewbwcSidBindSync 淘宝闪购联盟-霸王餐消息推送API > 评价有礼渠道用户身份SID绑定通知} */
  alsc_reviewbwc_SidBindSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscReviewbwcSidBindSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscRiskPunishSend 口碑 > 本地生活处罚中心处罚下发} */
  alsc_risk_PunishSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscRiskPunishSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalesadaptorShopAuditingNotify 口碑 > 饿了么开店状态通知接口} */
  alsc_salesadaptor_ShopAuditingNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalesadaptorShopAuditingNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalescrmLeadsActionNotify 口碑 > alsc销售商机变更通知} */
  alsc_salescrm_LeadsActionNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalescrmLeadsActionNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalescrmOpportunityActionNotify 口碑 > alsc销售商机变更通知} */
  alsc_salescrm_OpportunityActionNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalescrmOpportunityActionNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustryCancelInquiry 天猫服务 > 送货入户并安装取消询价接口} */
  ascp_insdustry_CancelInquiry(fn: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustryCancelInquiry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInstantsonlineLogisticsStatusCallback 同城配送 > 同城配送在线下单物流状态回告} */
  ascp_instantsonline_LogisticsStatusCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.AscpInstantsonlineLogisticsStatusCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRightTradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  banma_right_TradeCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRightTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatformLogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  cainiao_consignplatform_LogisiticsDetail(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatformLogisiticsDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIotAftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  cainiao_iot_AftersalesTicket(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIotAftersalesTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoLogisticsAbnormalOrderCreate 菜鸟 > 菜鸟物流异常件创建} */
  cainiao_logistics_AbnormalOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoLogisticsAbnormalOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoLogisticsAbnormalOrderUpdate 菜鸟 > 异常件变更消息} */
  cainiao_logistics_AbnormalOrderUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoLogisticsAbnormalOrderUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanAlertOrder 菜鸟 > 异常订单预警通知} */
  cainiao_moduan_AlertOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanAlertOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCancelTask 菜鸟 > 任务取消消息推送} */
  cainiao_moduan_CancelTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCancelTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonMailnoUpdated 菜鸟 > 运单号更新} */
  cainiao_moduan_CommonMailnoUpdated(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonMailnoUpdated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderCanceled 菜鸟 > 订单取消} */
  cainiao_moduan_CommonOrderCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderGrasped 菜鸟 > 普通寄件接单消息} */
  cainiao_moduan_CommonOrderGrasped(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderGrasped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderMailnoReturned 菜鸟 > 回单消息} */
  cainiao_moduan_CommonOrderMailnoReturned(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderMailnoReturned) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderPickup 菜鸟 > 揽件消息} */
  cainiao_moduan_CommonOrderPickup(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderPickup) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonWaitWithholdTimeOut 菜鸟 > 支付订单超时} */
  cainiao_moduan_CommonWaitWithholdTimeOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonWaitWithholdTimeOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonWithholdResult 菜鸟 > 代扣结果通知} */
  cainiao_moduan_CommonWithholdResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonWithholdResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCourierAccountSync 菜鸟 > 小件员账号同步} */
  cainiao_moduan_CourierAccountSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCourierAccountSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCreateAppointOrder 菜鸟 > 创建预约订单通知} */
  cainiao_moduan_CreateAppointOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCreateAppointOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanDispatchTask 菜鸟 > 直送任务广播} */
  cainiao_moduan_DispatchTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanDispatchTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanGongyiData 菜鸟 > 公益数据对接下发} */
  cainiao_moduan_GongyiData(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanGongyiData) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanGraspedTask 菜鸟 > 直送抢单成功后消息推送} */
  cainiao_moduan_GraspedTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanGraspedTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanModifyAppointOrder 菜鸟 > 修改预约订单通知} */
  cainiao_moduan_ModifyAppointOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanModifyAppointOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderFeeTrans 菜鸟 > 末端订单转账结果通知} */
  cainiao_moduan_OrderFeeTrans(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderFeeTrans) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderGrasp 菜鸟 > 小件员已接单推送信息} */
  cainiao_moduan_OrderGrasp(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderGrasp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderInfo 菜鸟 > 菜鸟末端订单信息} */
  cainiao_moduan_OrderInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderPickup 菜鸟 > 小件员已揽件推送信息} */
  cainiao_moduan_OrderPickup(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderPickup) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderReturnMailNO 菜鸟 > 回传运单号通知} */
  cainiao_moduan_OrderReturnMailNO(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderReturnMailNO) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanRedispatchApplied 菜鸟 > 申请改派消息} */
  cainiao_moduan_RedispatchApplied(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanRedispatchApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanSignInfo 菜鸟 > 签收信息回传} */
  cainiao_moduan_SignInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskAskGrasp 菜鸟 > 抢单通知} */
  cainiao_moduan_TaskAskGrasp(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskAskGrasp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskCancel 菜鸟 > 任务被取消} */
  cainiao_moduan_TaskCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskFeeTrans 菜鸟 > 结算通知} */
  cainiao_moduan_TaskFeeTrans(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskFeeTrans) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGrasp 菜鸟 > 订单被[抢/兜/追/派]后同步给CP} */
  cainiao_moduan_TaskGrasp(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGrasp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGroupDone 菜鸟 > 抢单任务组被抢通知} */
  cainiao_moduan_TaskGroupDone(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGroupDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGroupTimeOut 菜鸟 > 抢单任务组超时通知} */
  cainiao_moduan_TaskGroupTimeOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGroupTimeOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGroupViolate 菜鸟 > 兜底任务CP违约通知} */
  cainiao_moduan_TaskGroupViolate(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGroupViolate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskModifyGotDate 菜鸟 > 修改上门取件时间} */
  cainiao_moduan_TaskModifyGotDate(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskModifyGotDate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskPaid 菜鸟 > 用户付款通知} */
  cainiao_moduan_TaskPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskPriceInfo 菜鸟 > 仓配派单订单价格通知} */
  cainiao_moduan_TaskPriceInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskPriceInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskRedispatch 菜鸟 > 订单改派} */
  cainiao_moduan_TaskRedispatch(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskRedispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskReturnMailNo 菜鸟 > 小件员回传运单号通知} */
  cainiao_moduan_TaskReturnMailNo(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskReturnMailNo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskTaken 菜鸟 > 小件员已上门取件} */
  cainiao_moduan_TaskTaken(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskTaken) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanUserWord 菜鸟 > 用户留言通知} */
  cainiao_moduan_UserWord(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanUserWord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoScfLoanCreate 菜鸟 > 菜鸟金融贷款通知databus} */
  cainiao_scf_LoanCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoScfLoanCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoWaybillTrackTicketStatus 菜鸟 > 单据状态跟踪} */
  cainiao_waybill_TrackTicketStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoWaybillTrackTicketStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoYimaSmsRecordPush 菜鸟 > 短信记录推送} */
  cainiao_yima_SmsRecordPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoYimaSmsRecordPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionMatchSeat 大麦第三方票务供应商接入 > 履约补选座位成功通知三方} */
  damai_distribution_MatchSeat(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionMatchSeat) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  damai_distribution_PerformCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  damai_distribution_PerformStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformTimeChange 大麦第三方票务供应商接入 > 场次时间变更消息} */
  damai_distribution_PerformTimeChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformTimeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  damai_distribution_PreSaleToNow(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPreSaleToNow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  damai_distribution_ProjectStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionProjectStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionRefundAuditResult 大麦第三方票务供应商接入 > 分销退票审核结果消息通知} */
  damai_distribution_RefundAuditResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionRefundAuditResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionRefundOrder 大麦第三方票务供应商接入 > 退票通知} */
  damai_distribution_RefundOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionRefundOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionRefundRule 大麦第三方票务供应商接入 > 项目退款规则} */
  damai_distribution_RefundRule(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionRefundRule) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionSendExpress 大麦第三方票务供应商接入 > 履约发快递成功通知三方} */
  damai_distribution_SendExpress(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionSendExpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  damai_distribution_TicketItemStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionTicketItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMevDatasyncTalkMaitix 大麦 > maitix与datasync数据同步} */
  damai_mev_DatasyncTalkMaitix(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMevDatasyncTalkMaitix) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzEventStateChange 大麦 > 场次状态通知接口} */
  damai_mz_EventStateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzEventStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzForwardMessage 大麦 > 大麦新麦座消息} */
  damai_mz_ForwardMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzForwardMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzOrderChangeState 大麦 > 订单状态变动通知} */
  damai_mz_OrderChangeState(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzOrderChangeState) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzOrderRefund 大麦 > 麦座退单审核通过通知} */
  damai_mz_OrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzOrderStateChange 大麦 > 订单状态通知} */
  damai_mz_OrderStateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzOrderStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzSeatStateChange 大麦 > 大麦麦座座位状态变化消息} */
  damai_mz_SeatStateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzSeatStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzTicketStateChange 大麦 > 大麦麦座票状态变化消息} */
  damai_mz_TicketStateChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzTicketStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzUserRegister 大麦 > 麦座会员注册成功通知} */
  damai_mz_UserRegister(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzUserRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  damai_trade_TicketStatusPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTradeTicketStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.EleEnterprisePushOrderDetail 饿了么 > 饿了么企业订餐推送订单详情} */
  ele_enterprise_PushOrderDetail(fn: (this: TaoMessageConsumer, message: IncomingMessage.EleEnterprisePushOrderDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeBankstatementGet 饿了么 > 饿了么银行流水对接} */
  eleme_bankstatement_Get(fn: (this: TaoMessageConsumer, message: IncomingMessage.ElemeBankstatementGet) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeFulfillModifyOrderLabour 五道口配送 > 骑手变更消息通知} */
  eleme_fulfill_ModifyOrderLabour(fn: (this: TaoMessageConsumer, message: IncomingMessage.ElemeFulfillModifyOrderLabour) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeRetailPosOrderMessage 饿了么 > 饿了么零售智慧菜场订单状态消息} */
  eleme_retail_PosOrderMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.ElemeRetailPosOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化} */
  fliggy_btrip_HotelDistributionOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtripHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyDujiaApproveSignUp 飞猪商家平台 > 招商审核通过消息} */
  fliggy_dujia_ApproveSignUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyDujiaApproveSignUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyFlightAdvOfferChangeNotify 淘宝机票 > 飞猪机票商家货品优势变更通知} */
  fliggy_flight_AdvOfferChangeNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyFlightAdvOfferChangeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyInteractHaitunEventCreate 飞猪 > 飞猪互动海豚事件产生} */
  fliggy_interact_HaitunEventCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyInteractHaitunEventCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务} */
  fliggy_jipiao_FlightChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiaoFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyMemberLevelChange 飞猪 > 通知合作商家飞猪会员等级变更消息} */
  fliggy_member_LevelChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyMemberLevelChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyPushHaitunEventCreate 飞猪 > 飞猪多端投放体系海豚事件产生} */
  fliggy_push_HaitunEventCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyPushHaitunEventCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyShtOrderMsg 飞猪 > 飞猪四海通订单消息} */
  fliggy_sht_OrderMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyShtOrderMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  fliggy_ticket_OrderRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  fliggy_ticket_OrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  fliggy_ticket_VerifyNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketVerifyNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTravelRechargeJtpOrdercancelApply 航旅度假交易 > 飞猪度假通讯流量包无忧行订单退订申请消息发送} */
  fliggy_travel_RechargeJtpOrdercancelApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTravelRechargeJtpOrdercancelApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTravelRechargeJtpOrdercancelApplyBackUp 航旅度假交易 > 飞猪度假通讯流量包无忧行订单退订申请消息发送（兼容移动老系统）} */
  fliggy_travel_RechargeJtpOrdercancelApplyBackUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTravelRechargeJtpOrdercancelApplyBackUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyVisaApplicantStatusChanged 航旅度假交易 > 签证申请人状态变更消息} */
  fliggy_visa_ApplicantStatusChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyVisaApplicantStatusChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyVisaStatusChange 航旅度假交易 > 签证状态变化消息} */
  fliggy_visa_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyVisaStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyXhotelComboCreateResult 飞猪 > 套餐创建消息回传} */
  fliggy_xhotel_ComboCreateResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyXhotelComboCreateResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FlyggyFlightDomesticDistributionQuotationFull 飞猪机票 > 飞猪机票国内分销全量报价} */
  flyggy_flight_DomesticDistributionQuotationFull(fn: (this: TaoMessageConsumer, message: IncomingMessage.FlyggyFlightDomesticDistributionQuotationFull) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FlyggyFlightDomesticDistributionQuotationIncrement 飞猪机票 > 飞猪机票国内分销增量报价} */
  flyggy_flight_DomesticDistributionQuotationIncrement(fn: (this: TaoMessageConsumer, message: IncomingMessage.FlyggyFlightDomesticDistributionQuotationIncrement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmFail 服务市场 > 收入确认失败} */
  fuwu_confirm_Fail(fn: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmFail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmSuccess 服务市场 > 收入确认成功} */
  fuwu_confirm_Success(fn: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GaodeCaijiEccTaskAuditStatusNotify 高德 > 高德采集生态小程序任务状态通知} */
  gaode_caiji_EccTaskAuditStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.GaodeCaijiEccTaskAuditStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GenieGscOrderStatusUpdate 天猫精灵供应链 > 单据状态同步} */
  genie_gsc_OrderStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.GenieGscOrderStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GlobalVirtualMerchantSendCode 国际虚拟业务 > 国际虚拟业务对接码商} */
  global_virtual_MerchantSendCode(fn: (this: TaoMessageConsumer, message: IncomingMessage.GlobalVirtualMerchantSendCode) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionAuctionOrderPaid 大资产拍卖Top端拍品消息 > 订单支付消息} */
  gov_auction_AuctionOrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionAuctionOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionEnd 大资产拍卖Top端拍品消息 > 大资产拍卖拍品结束消息} */
  gov_auction_End(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionEnd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionEndImmediate 大资产拍卖Top端拍品消息 > 标的结束即刻消息} */
  gov_auction_EndImmediate(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionEndImmediate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPublish 大资产拍卖Top端拍品消息 > 大资产标的上架消息} */
  gov_auction_Publish(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  gov_auction_PushVehicleDataToBM(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionPushVehicleDataToBM) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionQuanAnAssetsPack 大资产拍卖Top端拍品消息 > 打包处置关联资产编号消息} */
  gov_auction_QuanAnAssetsPack(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionQuanAnAssetsPack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  gov_auction_VehicleDataPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionVehicleDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovQualSubmit 资产拍卖 > 拍品资质审核提交消息} */
  gov_qual_Submit(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovQualSubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovRadarclueExcelFinish 竞价雷达 > 财产线索Excel监控源解析结果通知} */
  gov_radarclue_ExcelFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovRadarclueExcelFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovRadarclueInfo 竞价雷达 > 财产线索定时统计消息通知} */
  gov_radarclue_Info(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovRadarclueInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrmCustomerModified ICBU > 客户信息变更同步小满} */
  icbu_alicrm_CustomerModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrmCustomerModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrmNoteModified ICBU > 客户通小记变更} */
  icbu_alicrm_NoteModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrmNoteModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrmOfflineDataChanged ICBU > 客户通离线数据变更同步} */
  icbu_alicrm_OfflineDataChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrmOfflineDataChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuChatMessageTipForXiaoMan ICBU > ICBU沟通消息推送给小满提醒} */
  icbu_chat_MessageTipForXiaoMan(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuChatMessageTipForXiaoMan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuCrmGgsXMOrderChange ICBU > ICBU CRM小满订单状态变更通知（GGS港台）} */
  icbu_crm_GgsXMOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuCrmGgsXMOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuCrmXMOrderChange ICBU > ICBU CRM小满订单状态变更通知} */
  icbu_crm_XMOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuCrmXMOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuMemberXmUnBind ICBU > icbu国际站账号解绑小满账号} */
  icbu_member_XmUnBind(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuMemberXmUnBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuRiskZeroersMessage ICBU-小满 > 天鹿风控事件异步消息结果} */
  icbu_risk_ZeroersMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuRiskZeroersMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuTradeOrderNotify ICBU-交易 > 国际站订单变更消息} */
  icbu_trade_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuTradeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreementStatusChange 闲鱼 > 闲鱼代扣消息通知} */
  idle_agreement_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreementStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvItemSyn 闲鱼已验货 > 已验货商品消息} */
  idle_appraiseisv_ItemSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvOrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  idle_appraiseisv_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvRefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  idle_appraiseisv_RefundSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvRefundSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAutotradeOrderStateSync 闲鱼 > 闲鱼AutoTrade订单状态变更消息} */
  idle_autotrade_OrderStateSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAutotradeOrderStateSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAutotradeRefundSync 闲鱼 > 闲鱼AutoTrade逆向退款消息} */
  idle_autotrade_RefundSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAutotradeRefundSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentOrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  idle_consignment_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentiiOrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  idle_consignmentii_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentiiOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCroPunishMsg 闲鱼电商Saas > 闲鱼安全处罚消息} */
  idle_cro_PunishMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleCroPunishMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCycleshopGoodsNotice 闲鱼循环商店-消息前台 > 闲鱼循环商店-货品变更通知} */
  idle_cycleshop_GoodsNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleCycleshopGoodsNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCycleshopSaleOrderNotice 闲鱼循环商店-消息前台 > 闲鱼循环商店-销售单变更通知} */
  idle_cycleshop_SaleOrderNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleCycleshopSaleOrderNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleDistributionItemChange 闲鱼回收商消息 > 分销闲管家消息通道} */
  idle_distribution_ItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleDistributionItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketBuyerOrderStateSyn 闲鱼 > 闲鱼鱼市买家单状态同步} */
  idle_fishmarket_BuyerOrderStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketBuyerOrderStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketItemAuctionStateSyn 闲鱼 > 闲鱼鱼市商品竞拍消息同步} */
  idle_fishmarket_ItemAuctionStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketItemAuctionStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketTenderAutoAuctionMsg 闲鱼 > 一口价转暗拍自动上架消息推送} */
  idle_fishmarket_TenderAutoAuctionMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketTenderAutoAuctionMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketfixedOrderSyn 闲鱼 > 鱼市一口价买家单订单交易消息变更} */
  idle_fishmarketfixed_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketfixedOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleLuxconsignOrderNotice 闲鱼奢品寄卖 > 闲鱼奢品寄卖-卖家单消息通知} */
  idle_luxconsign_OrderNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleLuxconsignOrderNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleNewoutletsUserTagNotice 闲鱼电商Saas > 闲鱼用户身份变更消息} */
  idle_newoutlets_UserTagNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleNewoutletsUserTagNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderStateSyn 闲鱼回收商消息 > 闲鱼回收业务订单消息} */
  idle_recycle_OrderStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleOrderStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  idle_recycle_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息} */
  idle_recycle_RefundStatusModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleRefundStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleStoreSyn 闲鱼回收商消息 > 黄金回收门店信息变更通知} */
  idle_recycle_StoreSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleStoreSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleSellerImprovePackOrder 闲鱼电商Saas > 闲鱼鱼小铺运营提效包订购消息} */
  idle_seller_ImprovePackOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleSellerImprovePackOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleSellerProShopStatus 闲鱼电商Saas > 鱼小铺专业号身份变更状态} */
  idle_seller_ProShopStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleSellerProShopStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvCompensateNotice 闲鱼电商Saas > 闲鱼开放平台-服务赔付单变更消息通知} */
  idle_topisv_CompensateNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvCompensateNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvGlobalProductNotice 闲鱼电商Saas > 闲鱼开放平台-国际货品变更消息通知} */
  idle_topisv_GlobalProductNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvGlobalProductNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvItemNotice 闲鱼电商Saas > 闲鱼开放平台-商品变更消息通知} */
  idle_topisv_ItemNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvItemNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvRefundNotice 闲鱼电商Saas > 闲鱼开放平台-订单逆向变更消息通知} */
  idle_topisv_RefundNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvRefundNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvTradeNotice 闲鱼电商Saas > 闲鱼开放平台-订单变更消息通知} */
  idle_topisv_TradeNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvTradeNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTradeAddressModify 闲鱼回收商消息 > 买家修改地址通知卖家} */
  idle_trade_AddressModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTradeAddressModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTradeTradeReteSuccess 闲鱼回收商消息 > 服务商订单评价消息} */
  idle_trade_TradeReteSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTradeTradeReteSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息} */
  idle_tranferpay_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpayOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTwjdOrderSyn 闲鱼 > 闲鱼图文鉴定业务订单消息} */
  idle_twjd_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTwjdOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeDatacenterOrderStatus 银泰 > 状态同步} */
  intime_datacenter_OrderStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.IntimeDatacenterOrderStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeScOrderCreateUpdate 银泰 > 服务单创建和更新} */
  intime_sc_OrderCreateUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.IntimeScOrderCreateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  jae_trade_PaidSuccessed(fn: (this: TaoMessageConsumer, message: IncomingMessage.JaeTradePaidSuccessed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JymOrderBoosterStatusChange 交易猫 > 交易猫代练订单状态变更} */
  jym_order_BoosterStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.JymOrderBoosterStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LarkTradePosTradeDataTransmit 云智POS > 云智POS离线交易信息同步} */
  lark_trade_PosTradeDataTransmit(fn: (this: TaoMessageConsumer, message: IncomingMessage.LarkTradePosTradeDataTransmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaModelStateUpdate 绘蛙消息 > 绘蛙模型状态变更消息} */
  lianfan_huiwa_ModelStateUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaModelStateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaProjectDelivery 绘蛙消息 > 项目交付消息} */
  lianfan_huiwa_ProjectDelivery(fn: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaProjectDelivery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaRequirementStateUpdate 绘蛙消息 > 绘蛙需求状态变更消息} */
  lianfan_huiwa_RequirementStateUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaRequirementStateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaTaskStateUpdate 绘蛙消息 > 绘蛙生图任务状态变更消息} */
  lianfan_huiwa_TaskStateUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaTaskStateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LingyangQuickserviceMessageCreate 瓴羊 > 瓴羊卡片消息投递} */
  lingyang_quickservice_MessageCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.LingyangQuickserviceMessageCreate) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.SelectedAppraiseRefundVerifySyn 闲鱼已验货 > 严选售中验订单逆向消息-Saas服务商} */
  selected_appraise_RefundVerifySyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.SelectedAppraiseRefundVerifySyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedAppraiseVerifySyn 闲鱼已验货 > 严选售中验订单正向消息-Saas服务商} */
  selected_appraise_VerifySyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.SelectedAppraiseVerifySyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedReverifyOrderSyn 闲鱼已验货 > 严选售中验订单消息同步-验货中心} */
  selected_reverify_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.SelectedReverifyOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundBroad AliGenius > AG退款消息广播} */
  taobao_ag_RefundBroad(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgRefundBroad) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息} */
  taobao_ag_RefundSignInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgRefundSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgSignInfo AliGenius > AG仓库核验信息} */
  taobao_ag_SignInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgTicketsMsg AliGenius > 商家工单消息} */
  taobao_ag_TicketsMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgTicketsMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgentWorkflowAsyncResult 淘宝 > 工作流开放异步执行结果通知} */
  taobao_agent_WorkflowAsyncResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgentWorkflowAsyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAisCommonMessage 淘宝 > 厂商协同统一消息} */
  taobao_ais_CommonMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAisCommonMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAliautoElectronicVoucherActivationPublish 阿里汽车 > 阿里汽车-电子凭证激活信息推送} */
  taobao_aliauto_ElectronicVoucherActivationPublish(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAliautoElectronicVoucherActivationPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlipicWuyatestoutmsg 淘宝 > 异业会员正向消息测试} */
  taobao_alipic_Wuyatestoutmsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlipicWuyatestoutmsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderAfterSaleRefund 淘宝 > 本地生活到店交易逆向售后退款消息通知} */
  taobao_alsc_DaodianOrderAfterSaleRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderAfterSaleRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderAgreeRefund 淘宝 > 本地生活到店交易，逆向单审核通过消息通知} */
  taobao_alsc_DaodianOrderAgreeRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderAgreeRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderApplyRefund 淘宝 > 本地生活到店交易用户发起退款消息通知} */
  taobao_alsc_DaodianOrderApplyRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderApplyRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderDeliver 淘宝 > 本地生活到店订单发货成功消息通知} */
  taobao_alsc_DaodianOrderDeliver(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderDeliver) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderRejectRefund 淘宝 > 本地生活到店交易逆向单审核拒绝消息通知} */
  taobao_alsc_DaodianOrderRejectRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderRejectRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianTicketUsed 淘宝 > 本地生活到店凭证核销消息通知} */
  taobao_alsc_DaodianTicketUsed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianTicketUsed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  taobao_aps_CommentAdd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsCommentAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsNewFeedback 平台消息 > 收到舆情} */
  taobao_aps_NewFeedback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsNewFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAscpQcInspectToErp 淘宝 > 品控验货任务发送三方检验商系统对接} */
  taobao_ascp_QcInspectToErp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAscpQcInspectToErp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuctionApplyEvent 淘宝 > 大资产拍卖报名消息} */
  taobao_auction_ApplyEvent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuctionApplyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuctionBidEvent 淘宝 > 大资产拍卖出价消息} */
  taobao_auction_BidEvent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuctionBidEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuctionQuanAnEvaluatePrice 淘宝 > 拍卖全案评估价变更消息} */
  taobao_auction_QuanAnEvaluatePrice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuctionQuanAnEvaluatePrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinAlipayDkSignCallBack 阿信消息通知前台类目 > 支付宝代扣签约回调消息} */
  taobao_axin_AlipayDkSignCallBack(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinAlipayDkSignCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinDivisionApplyResult 阿信消息通知前台类目 > 新增行政区划结果通知} */
  taobao_axin_DivisionApplyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinDivisionApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinHotelChangeEvent 阿信消息通知前台类目 > 阿信酒店RP变更通知} */
  taobao_axin_HotelChangeEvent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinHotelChangeEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinHotelOrderStatus 阿信消息通知前台类目 > 阿信酒店分销订单状态变更通知} */
  taobao_axin_HotelOrderStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinHotelOrderStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinPackageOrderChange 阿信消息通知前台类目 > 阿信订单变更消息} */
  taobao_axin_PackageOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinPackageOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinPackageProductChange 阿信消息通知前台类目 > 阿信酒套产品价库变更消息} */
  taobao_axin_PackageProductChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinPackageProductChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinPoiApplyResult 阿信消息通知前台类目 > 新增POI结果通知} */
  taobao_axin_PoiApplyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinPoiApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  taobao_axin_RefundCallBack(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinRefundCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活} */
  taobao_baichuan_ASODeviceActivate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanASODeviceActivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanBrandInfoSend 百川 > 百川媒体品牌号获取} */
  taobao_baichuan_BrandInfoSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanBrandInfoSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanBrandSync 百川 > 媒体内容数据同步接口} */
  taobao_baichuan_BrandSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanBrandSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息} */
  taobao_baichuan_PasswordRuleChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanPasswordRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanTaoPasswordRule 百川 > 淘口令规则发生变化} */
  taobao_baichuan_TaoPasswordRule(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanTaoPasswordRule) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianAcceptInsurance 淘宝 > 淘宝保险出单数据消息} */
  taobao_baoxian_AcceptInsurance(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianAcceptInsurance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianClaimApply 淘宝 > 保险理赔消息} */
  taobao_baoxian_ClaimApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianClaimApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianClaimSuccess 淘宝 > 理赔结果给保险公司消息} */
  taobao_baoxian_ClaimSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianClaimSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianEndorsementSuccess 淘宝 > 批单成功给保险公司消息} */
  taobao_baoxian_EndorsementSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianEndorsementSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianIssue 淘宝 > 承保中心出单消息} */
  taobao_baoxian_Issue(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianIssue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianIssueSuccess 淘宝 > 出单成功给保险公司消息} */
  taobao_baoxian_IssueSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianIssueSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianSurrenderredResult 淘宝 > 退保结果给保险公司消息} */
  taobao_baoxian_SurrenderredResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianSurrenderredResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBashliveLiveEventChange 淘宝 > 本地生活直播氛围数据共享} */
  taobao_bashlive_LiveEventChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBashliveLiveEventChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmcShortMessageStatus 导购平台 > 短信状态} */
  taobao_bmc_ShortMessageStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmcShortMessageStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusInsureStatus 淘宝汽车票 > 保险投保退保状态} */
  taobao_bus_InsureStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusInsureStatus) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoCcoAlipayCase 淘宝 > CCO工单通知支付宝} */
  taobao_cco_AlipayCase(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCcoAlipayCase) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCcoGjCase 淘宝 > cco工单创建广交通知} */
  taobao_cco_GjCase(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCcoGjCase) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentAuditAutocut 内容开放 > 智能混剪发布视频空间审核结果} */
  taobao_content_AuditAutocut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentAuditAutocut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentAuditMvx 内容开放 > 视频工具发布视频空间审核结果} */
  taobao_content_AuditMvx(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentAuditMvx) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentOrderAuditChange 内容开放 > 短视频模板订单审核状态更新} */
  taobao_content_OrderAuditChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentOrderAuditChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentOrderPaid 内容开放 > 内容开放短视频模板支付消息} */
  taobao_content_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentTaoSubChanged 内容开放 > [淘宝订阅]变更通知} */
  taobao_content_TaoSubChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentTaoSubChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaBindChange 代发管理 > 关系绑定更改} */
  taobao_daifa_BindChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaBindChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  taobao_daifa_DistributorOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaDistributorOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  taobao_daifa_SupplierOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaSupplierOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaUserJoin 代发管理 > 代发用户入驻} */
  taobao_daifa_UserJoin(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaUserJoin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDatapushQueryBiz 淘宝 > 数据推送查询订单} */
  taobao_datapush_QueryBiz(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDatapushQueryBiz) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDdPush 淘宝点点 > 淘点点消息推送} */
  taobao_dd_Push(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDdPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  taobao_diandian_ServeOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandianServeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeAgree 淘宝 > 同意换货} */
  taobao_dispute_ExchangeAgree(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeClosed 淘宝 > 买家关闭换货协议} */
  taobao_dispute_ExchangeClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeModified 淘宝 > 买家修改换货申请} */
  taobao_dispute_ExchangeModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeSellerConfirmed 淘宝 > 卖家确认收货} */
  taobao_dispute_ExchangeSellerConfirmed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeSellerConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeSellerGoodsConsigned 淘宝 > 换货-卖家寄出商品} */
  taobao_dispute_ExchangeSellerGoodsConsigned(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeSellerGoodsConsigned) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeSuccess 淘宝 > 买家确认收货,换货成功} */
  taobao_dispute_ExchangeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeTurnToRefund 淘宝 > 卖家换货转退款} */
  taobao_dispute_ExchangeTurnToRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeTurnToRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeNegotiationAgreed 淘宝 > 退款-买家接受协商申请} */
  taobao_dispute_NegotiationAgreed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeNegotiationAgreed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeNegotiationApply 淘宝 > 退款-卖家提交协商申请} */
  taobao_dispute_NegotiationApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeNegotiationApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeNegotiationRefused 淘宝 > 退款-买家拒绝协商申请} */
  taobao_dispute_NegotiationRefused(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeNegotiationRefused) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputePostageRefundSuccess 淘宝 > 退货运费单成功消息} */
  taobao_dispute_PostageRefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputePostageRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeRefundCreated 淘宝 > 新退款创建} */
  taobao_dispute_RefundCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeRefundPriceProtect 淘宝 > 价保退款成功} */
  taobao_dispute_RefundPriceProtect(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeRefundPriceProtect) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeRefundSuccess 淘宝 > 新退款成功消息} */
  taobao_dispute_RefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerApply 淘宝 > 补寄-买家已申请补寄} */
  taobao_dispute_ReshippingBuyerApply(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerClose 淘宝 > 补寄-买家关闭补寄申请} */
  taobao_dispute_ReshippingBuyerClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerConfirm 淘宝 > 补寄-买家确认收货} */
  taobao_dispute_ReshippingBuyerConfirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerModify 淘宝 > 补寄-买家修改补寄申请} */
  taobao_dispute_ReshippingBuyerModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingSellerAccept 淘宝 > 补寄-卖家同意补寄申请} */
  taobao_dispute_ReshippingSellerAccept(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingSellerAccept) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingSellerConsignGoods 淘宝 > 补寄-商家寄出补寄商品} */
  taobao_dispute_ReshippingSellerConsignGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingSellerConsignGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingSellerRefused 淘宝 > 补寄-商家拒绝申请} */
  taobao_dispute_ReshippingSellerRefused(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingSellerRefused) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeTaobaoInterApplied 淘宝 > 申请小二介入} */
  taobao_dispute_TaobaoInterApplied(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeTaobaoInterApplied) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoDvExternal 阿里通信 > 淘宝数字虚拟外放} */
  taobao_dv_External(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDvExternal) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceBuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  taobao_einvoice_BuyerConfirmSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceBuyerConfirmSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceRequestCreate 电子发票 > 电子发票开票请求} */
  taobao_einvoice_InvoiceRequestCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceInvoiceRequestCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流} */
  taobao_einvoice_InvoiceResultReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEppOrderCreate 淘宝 > epp企业购对接isv订单状态同步} */
  taobao_epp_OrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEppOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEppPurchaseOrderStatusUpdate 淘宝 > 天猫企业购实物采购单状态变更消息} */
  taobao_epp_PurchaseOrderStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEppPurchaseOrderStatusUpdate) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderTransfered 淘宝分销 > 采购单结算完成} */
  taobao_fenxiao_FxOrderTransfered(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderTransfered) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  taobao_fenxiao_FxRefundAgree(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  taobao_fenxiao_FxRefundClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  taobao_fenxiao_FxRefundCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundModify 淘宝分销 > 分销退款单修改} */
  taobao_fenxiao_FxRefundModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  taobao_fenxiao_FxRefundRefuseGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  taobao_fenxiao_FxRefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  taobao_fenxiao_FxTradeRefundCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  taobao_fenxiao_FxTradeRefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilmExternalOrderPush 淘宝 > 淘宝电影tforder消息推送（外部）} */
  taobao_film_ExternalOrderPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilmExternalOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilmOrderPush 淘宝 > 淘宝电影tforder消息推送} */
  taobao_film_OrderPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilmOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilmRefundTicketPush 淘宝 > 淘宝电影退票消息推送} */
  taobao_film_RefundTicketPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilmRefundTicketPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyCommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息} */
  taobao_fliggy_CommonContractSign(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyCommonContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  taobao_fliggy_HspHicItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHicItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHotelIcItemChange 酒店签约中心消息 > HSP酒店商品库价变更消息} */
  taobao_fliggy_HspHotelIcItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHotelIcItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyMciIndex 酒店签约中心消息 > 商家项目mci} */
  taobao_fliggy_MciIndex(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyMciIndex) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySignStatus 酒店签约中心消息 > 飞猪签约状态消息} */
  taobao_fliggy_SignStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySignStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息} */
  taobao_fliggy_StdHotelModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdHotelModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息} */
  taobao_fliggy_StdRoomTypeModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdRoomTypeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySycm 酒店签约中心消息 > 消息推送} */
  taobao_fliggy_Sycm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySycm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFscRouteOrderStatusChange 阿信消息通知前台类目 > 线路订单状态变更通知} */
  taobao_fsc_RouteOrderStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFscRouteOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuAddressChanged 服务市场 > 收货地址发生变更} */
  taobao_fuwu_AddressChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuAddressChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuFundsChange 服务市场 > 以旧换新资金变更通知消息} */
  taobao_fuwu_FundsChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuFundsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderClosed 服务市场 > 订单关闭消息} */
  taobao_fuwu_OrderClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderCreated 服务市场 > 订单创建消息} */
  taobao_fuwu_OrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderPaid 服务市场 > 订单支付消息} */
  taobao_fuwu_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuRecycleFinalService 服务市场 > 以旧换新取送一体服务最终决策通知} */
  taobao_fuwu_RecycleFinalService(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuRecycleFinalService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuRecycleOut 服务市场 > 上门换新回收信息} */
  taobao_fuwu_RecycleOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuRecycleOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuServiceOpen 服务市场 > 服务开通消息} */
  taobao_fuwu_ServiceOpen(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuServiceOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuSubCreated 服务市场 > 订购消息} */
  taobao_fuwu_SubCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuSubCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuWitkeySyncModeling 服务市场 > 威客同步建模数据} */
  taobao_fuwu_WitkeySyncModeling(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuWitkeySyncModeling) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  taobao_globalbuys_SeamailOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  taobao_homeai_CaseSyncResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiCaseSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiHomestylerRenderResult HOMEAI消息对接 > 居然极速渲染结果} */
  taobao_homeai_HomestylerRenderResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiHomestylerRenderResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  taobao_homeai_LayoutTransferResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiLayoutTransferResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系} */
  taobao_homeai_ModelSkuRelation(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiModelSkuRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息} */
  taobao_homeai_RenderRequest(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiRenderRequest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelControlMsg 飞猪 > 酒店管控中心消息通知} */
  taobao_hotel_ControlMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelControlMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelCreditToPreHotelStatus 飞猪 > 信用住转预付酒店签约状态消息} */
  taobao_hotel_CreditToPreHotelStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelCreditToPreHotelStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelDistributionOrderChange 飞猪 > 分销渠道订单变动通知} */
  taobao_hotel_DistributionOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelEbkCommonMessage 飞猪 > 通用消息提醒} */
  taobao_hotel_EbkCommonMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelEbkCommonMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelOrderChange 飞猪 > 订单变动通知} */
  taobao_hotel_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchMonitor 飞猪 > 酒店搜索触发商品更新消息} */
  taobao_hotel_SearchMonitor(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchTrigger 飞猪 > 热搜酒店消息} */
  taobao_hotel_SearchTrigger(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchTrigger) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSignRollback 飞猪 > 飞猪单体酒店签约重置} */
  taobao_hotel_SignRollback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSignRollback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIdlefishRentContractClose 淘宝 > 合约关闭通知} */
  taobao_idlefish_RentContractClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIdlefishRentContractClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIdlefishSellerPaid 淘宝 > 打款给房东消息} */
  taobao_idlefish_SellerPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIdlefishSellerPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashionItemAmountChanged 淘宝 > 库存变更} */
  taobao_ifashion_ItemAmountChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashionItemAmountChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashionItemInfoCreate 淘宝 > 商品基础信息创建} */
  taobao_ifashion_ItemInfoCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashionItemInfoCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashionOrderCreate 淘宝 > 创建单据} */
  taobao_ifashion_OrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashionOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIhomeAigcTaskChange 淘宝 > aigc任务状态变更} */
  taobao_ihome_AigcTaskChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIhomeAigcTaskChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoInventoryLowQuantityWarning 销售库存 > 低库存预警消息} */
  taobao_inventory_LowQuantityWarning(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoInventoryLowQuantityWarning) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoInventoryShareInventory 销售库存 > 天猫国际共享库存订单push} */
  taobao_inventory_ShareInventory(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoInventoryShareInventory) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息} */
  taobao_istore_GiftingMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstoreGiftingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemAuditResultNotify 淘宝商品 > 淘宝商品审核结果消息通知} */
  taobao_item_AuditResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemAuditResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemDistributeItemEdit 淘宝商品 > 商品变更消息通知} */
  taobao_item_DistributeItemEdit(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemDistributeItemEdit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemAdd 淘宝商品 > 商品新增消息} */
  taobao_item_ItemAdd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDelete 淘宝商品 > 商品删除消息} */
  taobao_item_ItemDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息} */
  taobao_item_ItemDownshelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemOfflineNotice 淘宝商品 > 淘宝商品下降消息提醒} */
  taobao_item_ItemOfflineNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemOfflineNotice) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoItemItemStockChangedOut 淘宝商品 > 淘宝开放平台内部使用库存变更消息out} */
  taobao_item_ItemStockChangedOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemStockChangedOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpdate 淘宝商品 > 商品更新消息} */
  taobao_item_ItemUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息} */
  taobao_item_ItemUpshelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息} */
  taobao_item_ItemZeroStock(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketItemDistributorChange 货源服务消息 > 三方货源分销商货品消息} */
  taobao_itemmarket_ItemDistributorChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketItemDistributorChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketItemRelationChange 货源服务消息 > 铺货成功推送} */
  taobao_itemmarket_ItemRelationChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketItemRelationChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketMaterialChange 货源服务消息 > 货品素材信息变更} */
  taobao_itemmarket_MaterialChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketMaterialChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketPurchaseDistributorChange 货源服务消息 > 三方货源分销商采购单消息} */
  taobao_itemmarket_PurchaseDistributorChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketPurchaseDistributorChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketPurchaseOrderChange 货源服务消息 > 三方货源采购单变更} */
  taobao_itemmarket_PurchaseOrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketPurchaseOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketVideoCreate 货源服务消息 > 货品视频创建} */
  taobao_itemmarket_VideoCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketVideoCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJaqAuditResult 淘宝 > 聚安全实人认证审核结果} */
  taobao_jaq_AuditResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJaqAuditResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  taobao_jipiao_AncillaryOrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoAncillaryOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  taobao_jipiao_JipiaoModifyOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderChanged 淘宝机票 > 机票订单变更} */
  taobao_jipiao_JipiaoOrderChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoOrderChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  taobao_jipiao_JipiaoOrderStatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  taobao_jipiao_JipiaoRefundOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  taobao_jipiao_SellerOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  taobao_jipiao_SellerRefundOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoUrgeIssueTicket 淘宝机票 > 催出票/拦截出票消息} */
  taobao_jipiao_UrgeIssueTicket(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoUrgeIssueTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseOrderCreate 淘宝分销 > 家装分销_采购单创建} */
  taobao_jzfx_PurchaseOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseOrderStatusModify 淘宝分销 > 家装分销_采购单状态修改} */
  taobao_jzfx_PurchaseOrderStatusModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseOrderStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseReverseOrderCreate 淘宝分销 > 家装分销_采购逆向单创建} */
  taobao_jzfx_PurchaseReverseOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseReverseOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseReverseOrderStatusModify 淘宝分销 > 家装分销_采购逆向单状态修改} */
  taobao_jzfx_PurchaseReverseOrderStatusModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseReverseOrderStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoKcbMsg 淘宝 > 库存宝消息} */
  taobao_kcb_Msg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoKcbMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLbsMonitorPush 淘宝 > 支付宝位移监控消息推送} */
  taobao_lbs_MonitorPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLbsMonitorPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLbsUserMonitorPush 淘宝 > 支付宝用户位移消息推送} */
  taobao_lbs_UserMonitorPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLbsUserMonitorPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeGroupActivityNotify 淘宝 > 本地生活生服拼团活动变更提醒} */
  taobao_life_GroupActivityNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeGroupActivityNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeOrder 淘宝 > 生活服务订单消息订阅} */
  taobao_life_Order(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeOrderNotify 淘宝 > 本地生活生服行业订单触达} */
  taobao_life_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeStoreInfoChange 淘宝 > 生服门店变更同步消息} */
  taobao_life_StoreInfoChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeStoreInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeserviceItemMsg 淘宝 > 本地生活生服商品消息} */
  taobao_lifeservice_ItemMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeserviceItemMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知} */
  taobao_live_AgencyItemChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAgencyItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAlipayStatusChange 淘宝直播API > 淘宝直播开播或关闭} */
  taobao_live_AlipayStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAlipayStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAnchorRoleChange 淘宝直播API > 主播注册身份时通知} */
  taobao_live_AnchorRoleChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAnchorRoleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveBdshLiveEventChange 淘宝直播API > 本地生活直播间氛围消息} */
  taobao_live_BdshLiveEventChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveBdshLiveEventChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveBookInfoChange 淘宝直播API > 直播预约信息变更} */
  taobao_live_BookInfoChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveBookInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveFeedRelated 淘宝直播API > 淘宝直播上下播消息} */
  taobao_live_FeedRelated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveFeedRelated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLivePrintScreen 淘宝直播API > 淘宝直播结帧} */
  taobao_live_PrintScreen(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLivePrintScreen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveRoomItemChange 淘宝直播API > 直播间添加宝贝} */
  taobao_live_RoomItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveRoomItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveRoomStatusChange 淘宝直播API > 支付宝直播间状态变更消息} */
  taobao_live_RoomStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveRoomStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveStatusChange 淘宝直播API > 淘宝直播流状态变更} */
  taobao_live_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveTcpOrder 淘宝直播API > 淘宝直播订单消息} */
  taobao_live_TcpOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveTcpOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveaigcCommentSend 淘宝直播API > 淘宝数字人评论推送} */
  taobao_liveaigc_CommentSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveaigcCommentSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocalOrderPorcess 淘宝 > 通知58订单发生变化} */
  taobao_local_OrderPorcess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocalOrderPorcess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocalorderStatusNotify 淘宝 > 通知到家服务商订单状态变化} */
  taobao_localorder_StatusNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocalorderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsAccept 淘宝物流 > 物流揽收} */
  taobao_logistics_Accept(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsAccept) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsExceptionConfigChange 淘宝物流 > 物流管理-包裹中心-预警配置变更消息} */
  taobao_logistics_ExceptionConfigChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsExceptionConfigChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  taobao_logistics_LogsticDetailTrace(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsLogsticDetailTrace) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsPackageExceptionCreate 淘宝物流 > 物流管理-包裹中心-异常创建消息} */
  taobao_logistics_PackageExceptionCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsPackageExceptionCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsPackageExceptionOff 淘宝物流 > 物流管理-包裹中心-异常核销消息} */
  taobao_logistics_PackageExceptionOff(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsPackageExceptionOff) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsUnTaobaoLogstic 淘宝物流 > 非淘物流消息} */
  taobao_logistics_UnTaobaoLogstic(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsUnTaobaoLogstic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappArticleContentUnlawful 轻应用 > 小程序文章内容非法} */
  taobao_miniapp_ArticleContentUnlawful(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappArticleContentUnlawful) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappItemMsg 轻应用 > 轻交易商品状态同步消息} */
  taobao_miniapp_ItemMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappItemMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappRefundMsg 轻应用 > 轻应用轻交易退款消息} */
  taobao_miniapp_RefundMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappRefundMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappTradeMsg 轻应用 > 小程序轻应用轻交易的订单状态同步消息} */
  taobao_miniapp_TradeMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappTradeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddressResultNotify 聚石塔 > 自助改地址结果消息通知} */
  taobao_modifyaddress_ResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddressResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorderConsistencyResult 聚石塔 > 订单一致性校验消息} */
  taobao_modifyorder_ConsistencyResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorderConsistencyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyskuResultNotify 聚石塔 > 修改商品信息结果消息} */
  taobao_modifysku_ResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyskuResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOcTradeTagChanged 交易全链路 > oc订单标签变更} */
  taobao_oc_TradeTagChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOcTradeTagChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnCreditPayStatusChange 以旧换新-订单域 > 信用代扣状态变更同步} */
  taobao_ofn_CreditPayStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnCreditPayStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnNewOrderEventSync 以旧换新-订单域 > 以旧换新新机单事件同步} */
  taobao_ofn_NewOrderEventSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnNewOrderEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnOrderStatusSync 以旧换新-订单域 > 以旧换新回收单状态同步} */
  taobao_ofn_OrderStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnQaAmountConfirm 以旧换新-订单域 > 以旧换新质检价格通知} */
  taobao_ofn_QaAmountConfirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnQaAmountConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnRateSync 以旧换新-订单域 > 以旧换新回收单评价消息} */
  taobao_ofn_RateSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnRateSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccountDataSync 导购平台 > openaccount数据同步} */
  taobao_openaccount_DataSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccountDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmAuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  taobao_opencrm_AuthTouchMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmAuthTouchMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  taobao_opencrm_CardEstTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardEstTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  taobao_opencrm_CardTplExamine(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCouponUseUp 客户运营平台API > 优惠券发完TMC} */
  taobao_opencrm_CouponUseUp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCouponUseUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstResult 客户运营平台API > 人群快照生成结果} */
  taobao_opencrm_CrowdInstResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  taobao_opencrm_CrowdInstSaveResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstSaveResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmDigitalTplExamine 客户运营平台API > 数字短信模板审核消息} */
  taobao_opencrm_DigitalTplExamine(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmDigitalTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFeedback 客户运营平台API > 反馈tmc} */
  taobao_opencrm_Feedback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFullRuleResult 客户运营平台API > 规则全量计算结果通知} */
  taobao_opencrm_FullRuleResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmFullRuleResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberGradeChange 客户运营平台API > 会员等级变更} */
  taobao_opencrm_MemberGradeChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberGradeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberJoin 客户运营平台API > 会员入会消息} */
  taobao_opencrm_MemberJoin(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberJoin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberJoinPrivate 客户运营平台API > 会员入会消息} */
  taobao_opencrm_MemberJoinPrivate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberJoinPrivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMobileRankingReceipt 客户运营平台API > 手机热榜回执消息} */
  taobao_opencrm_MobileRankingReceipt(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMobileRankingReceipt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmNodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  taobao_opencrm_NodeExecuteFinished(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmNodeExecuteFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmOpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  taobao_opencrm_OpenStrategyEvent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmOpenStrategyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSMSOfficaial 客户运营平台API > 官方营销场景短信发送通知} */
  taobao_opencrm_SMSOfficaial(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmSMSOfficaial) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  taobao_opencrm_SellerDimensionCharge(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmSellerDimensionCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageBill 客户运营平台API > 短信账单} */
  taobao_opencrm_ShortMessageBill(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmShortMessageBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageSent 客户运营平台API > 短信发送TMC} */
  taobao_opencrm_ShortMessageSent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmShortMessageSent) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoOpentradeOrderCreated 百川 > 百川订单创建成功} */
  taobao_opentrade_OrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradeOrderModified 百川 > 百川订单修改成功} */
  taobao_opentrade_OrderModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeOrderModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradePayOrderCreated 百川 > 百川资金流水单创建成功} */
  taobao_opentrade_PayOrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradePayOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradePayOrderFailed 百川 > 百川资金流水单处理失败} */
  taobao_opentrade_PayOrderFailed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradePayOrderFailed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradePayOrderProceed 百川 > 百川资金流水单处理成功} */
  taobao_opentrade_PayOrderProceed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradePayOrderProceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradeSettleDisburseFailed 百川 > 百川订单分账处理失败} */
  taobao_opentrade_SettleDisburseFailed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeSettleDisburseFailed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradeSettleDisburseSucceed 百川 > 百川订单分账处理成功} */
  taobao_opentrade_SettleDisburseSucceed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeSettleDisburseSucceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOsActivityCompleted 营销平台 > 前N有礼活动开奖消息} */
  taobao_os_ActivityCompleted(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOsActivityCompleted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimaiDigitalTradeSuccess 淘宝 > 阿里拍卖数字商品交易成功消息} */
  taobao_paimai_DigitalTradeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimaiDigitalTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimaiOrderCreate 淘宝 > 二手车xpos订单生成消息} */
  taobao_paimai_OrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimaiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimaiOrderPaid 淘宝 > 二手车xpos订单支付完成消息} */
  taobao_paimai_OrderPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimaiOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcBillsGenerate 采购宝API > PC企业购出账消息通知} */
  taobao_pc_BillsGenerate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcBillsGenerate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcEgoDisputeOrder 采购宝API > PC企业购逆向订单消息} */
  taobao_pc_EgoDisputeOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcEgoDisputeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcEgoTradeOrder 采购宝API > PC企业购交易订单消息} */
  taobao_pc_EgoTradeOrder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcEgoTradeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcEgoTradePackage 采购宝API > 订单包裹消息} */
  taobao_pc_EgoTradePackage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcEgoTradePackage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcItemChange 采购宝API > 商品变更消息} */
  taobao_pc_ItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcSaleInvoiceResult 采购宝API > PC企业购发票通知消息} */
  taobao_pc_SaleInvoiceResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcSaleInvoiceResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcSettleProcessEventMsg 采购宝API > PC企业购结算流程事件消息} */
  taobao_pc_SettleProcessEventMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcSettleProcessEventMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoProfitResultNotify 淘宝 > 权益领取结果通知} */
  taobao_profit_ResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoProfitResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPunishForall 淘宝 > 淘宝处罚消息} */
  taobao_punish_Forall(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPunishForall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniuCreateComment 千牛 > 工单评论} */
  taobao_qianniu_CreateComment(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniuCreateComment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniuCreateLog 千牛 > 工单操作记录} */
  taobao_qianniu_CreateLog(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniuCreateLog) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniuCreateTask 千牛 > 工单创建消息} */
  taobao_qianniu_CreateTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniuCreateTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcAgDealRefund 淘宝 > AG退款处理} */
  taobao_rdc_AgDealRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcAgDealRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息} */
  taobao_rdcaligenius_OrderMsgSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligeniusOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  taobao_recycle_OfnPreRedPacketSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycleOfnPreRedPacketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundOrderStatusSync 淘宝退款 > 逆向订单数据同步} */
  taobao_refund_OrderStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundOrderStatusSync) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoRefundRefundTimeoutRemind 淘宝退款 > 消息已下线} */
  taobao_refund_RefundTimeoutRemind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息} */
  taobao_refund_RefundableCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息} */
  taobao_refund_RefundableMarked(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  taobao_refund_TaobaoInterApplied(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoInterApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  taobao_refund_TaobaoIntervened(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoIntervened) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRetrieveCompleted 淘宝退款 > 商家挽回完结消息} */
  taobao_retrieve_Completed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRetrieveCompleted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRetrieveStarted 淘宝退款 > 开始商家挽回消息} */
  taobao_retrieve_Started(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRetrieveStarted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeliveryUpdate 智能制造API > 订单发货通知} */
  taobao_rhino_DeliveryUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoDeliveryUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更} */
  taobao_rhino_DeviceStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoDeviceStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationCutProgressUpdateMessage 智能制造API > 裁剪进度变更消息} */
  taobao_rhino_IntegrationCutProgressUpdateMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationCutProgressUpdateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationOrderProcessUpdateMessage 智能制造API > 订单工序变更通知消息} */
  taobao_rhino_IntegrationOrderProcessUpdateMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationOrderProcessUpdateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationOuterOrderCreateMessage 智能制造API > 外协订单创建消息通知} */
  taobao_rhino_IntegrationOuterOrderCreateMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationOuterOrderCreateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationOuterProgressUpdateMessage 智能制造API > 外协进度变更消息} */
  taobao_rhino_IntegrationOuterProgressUpdateMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationOuterProgressUpdateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoOrderStatusUpdate 智能制造API > 生产订单状态变化通知} */
  taobao_rhino_OrderStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoOrderStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoPurchaseOrderCreate 智能制造API > 犀牛制造采购订单创建} */
  taobao_rhino_PurchaseOrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoPurchaseOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoQcResultUpdate 智能制造API > 犀牛智造自动验布机质检结果更新消息} */
  taobao_rhino_QcResultUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoQcResultUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoWarehouseUpdate 智能制造API > 订单入库通知} */
  taobao_rhino_WarehouseUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoWarehouseUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRobotUserSubscribeResult 淘宝 > 机器人辅助状态变更消息通知} */
  taobao_robot_UserSubscribeResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRobotUserSubscribeResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSecWlcAlipaySync 淘宝 > 无量尺风控信息同步支付宝} */
  taobao_sec_WlcAlipaySync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSecWlcAlipaySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSeedGeneralDataCommutation 淘宝 > 淘宝种草数据交换} */
  taobao_seed_GeneralDataCommutation(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSeedGeneralDataCommutation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundBuyerModifyAgreement 闪购交易 > 买家修改退款协议消息} */
  taobao_shangou_RefundBuyerModifyAgreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundBuyerModifyAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundBuyerReturnGoods 闪购交易 > 买家退货给卖家消息} */
  taobao_shangou_RefundBuyerReturnGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundClosed 闪购交易 > 闪购退款关闭} */
  taobao_shangou_RefundClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundCreated 闪购交易 > 闪购退款创建} */
  taobao_shangou_RefundCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundSellerAgreeAgreement 闪购交易 > 卖家同意退款协议消息} */
  taobao_shangou_RefundSellerAgreeAgreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundSellerAgreeAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundSellerRefuseAgreement 闪购交易 > 卖家拒绝退款协议消息} */
  taobao_shangou_RefundSellerRefuseAgreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundSellerRefuseAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundSuccess 闪购交易 > 闪购退款成功} */
  taobao_shangou_RefundSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeBuyerPay 闪购交易 > 闪购订单付款成功} */
  taobao_shangou_TradeBuyerPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeClose 闪购交易 > 闪购订单关闭} */
  taobao_shangou_TradeClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeCreate 闪购交易 > 闪购订单创建} */
  taobao_shangou_TradeCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeMemoModified 闪购交易 > 闪购订单交易备注变更} */
  taobao_shangou_TradeMemoModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeMemoModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeSellerShip 闪购交易 > 闪购订单发货} */
  taobao_shangou_TradeSellerShip(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeSuccess 闪购交易 > 闪购订单交易成功} */
  taobao_shangou_TradeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShopVary 淘宝 > 淘宝店铺变更} */
  taobao_shop_Vary(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShopVary) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShoptransferUniTrans 淘宝 > 过户结果消息} */
  taobao_shoptransfer_UniTrans(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShoptransferUniTrans) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSinianTest 淘宝 > 似年测试消息服务} */
  taobao_sinian_Test(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSinianTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappAppSubChange 平台消息 > 用户订阅变更消息} */
  taobao_smartapp_AppSubChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappAppSubChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappDataSync 平台消息 > 智能应用服务登记数据变更消息} */
  taobao_smartapp_DataSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappDiagnosticMetrics 平台消息 > 智能应用开放生意参谋诊断指标} */
  taobao_smartapp_DiagnosticMetrics(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappDiagnosticMetrics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappOrderAlert 平台消息 > 淘宝智能应用订单预警事件} */
  taobao_smartapp_OrderAlert(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappOrderAlert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappPresellEnd 平台消息 > 淘宝智能应用预售尾款截止短信催付} */
  taobao_smartapp_PresellEnd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappPresellEnd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappPresellStart 平台消息 > 淘宝智能应用预售开始短信催付} */
  taobao_smartapp_PresellStart(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappPresellStart) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappSchedulerTask 平台消息 > 定时任务消息} */
  taobao_smartapp_SchedulerTask(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappSchedulerTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappSendMsg 平台消息 > 淘宝智能应用短信发送触发} */
  taobao_smartapp_SendMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappSendMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappTableSync 平台消息 > 智能应用服务登记工作表变更消息} */
  taobao_smartapp_TableSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappTableSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappWorktableRecord 平台消息 > 智能应用工作表数据操作消息} */
  taobao_smartapp_WorktableRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappWorktableRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartcallReceipt 客户运营平台API > 智能外呼回执} */
  taobao_smartcall_Receipt(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartcallReceipt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmallItemAssigned 淘宝 > 商品已分配消息} */
  taobao_smartmall_ItemAssigned(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmallItemAssigned) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmallLogistic 淘宝 > 发货物流通知} */
  taobao_smartmall_Logistic(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmallLogistic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmallPaySuccess 淘宝 > 付款成功消息} */
  taobao_smartmall_PaySuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmallPaySuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSuppPayment 淘宝 > 猫超供应链打款} */
  taobao_supp_Payment(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSuppPayment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSurveyAnswerNotify 淘宝 > 悉牛问卷答案提交通知} */
  taobao_survey_AnswerNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSurveyAnswerNotify) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTaeItemDelete 导购平台 > 商品删除消息} */
  taobao_tae_ItemDelete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemDelete) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTaotvVideoInvalid 淘宝电视 > 媒资视频下线消息} */
  taobao_taotv_VideoInvalid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaotvVideoInvalid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaotvVideoPublish 淘宝电视 > 媒资视频上线消息} */
  taobao_taotv_VideoPublish(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaotvVideoPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkContentMsgGet 淘宝 > 媒体内容消息接收API} */
  taobao_tbk_ContentMsgGet(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkContentMsgGet) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkItemMaterialPush 淘宝 > 淘宝联盟官方单品物料推送} */
  taobao_tbk_ItemMaterialPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkItemMaterialPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkJINGCAITOUTIAOTljReport 淘宝 > 淘礼金实时报表} */
  taobao_tbk_JINGCAITOUTIAOTljReport(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkJINGCAITOUTIAOTljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkJUXIAOXITljReport 淘宝 > 淘礼金实时报表} */
  taobao_tbk_JUXIAOXITljReport(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkJUXIAOXITljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkMENGXIAOMITljReport 淘宝 > 淘礼金实时报表} */
  taobao_tbk_MENGXIAOMITljReport(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkMENGXIAOMITljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkPubOrderDispatch 淘宝 > 淘宝客-服务商-pub派单消息发送} */
  taobao_tbk_PubOrderDispatch(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkPubOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkYOUSHITljReport 淘宝 > 淘礼金报表API} */
  taobao_tbk_YOUSHITljReport(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkYOUSHITljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTcMaterialStock 淘宝 > 物资库存变动} */
  taobao_tc_MaterialStock(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTcMaterialStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestChengfeiDirect 淘宝 > taobao_test_ChengfeiDirect} */
  taobao_test_ChengfeiDirect(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestChengfeiDirect) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestEventScheduleOne 淘宝 > taobao_test_EventScheduleOne} */
  taobao_test_EventScheduleOne(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestEventScheduleOne) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestEventScheduleThree 淘宝 > taobao_test_EventScheduleThree} */
  taobao_test_EventScheduleThree(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestEventScheduleThree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestEventScheduleTwo 淘宝 > taobao_test_EventScheduleTwo} */
  taobao_test_EventScheduleTwo(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestEventScheduleTwo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestHelloWorld 淘宝 > taobao_test_hellollll} */
  taobao_test_HelloWorld(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestHelloWorld) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestTaoNodeTopic 淘宝 > 物流消息taobao_test_logistics_TaoNodeTopic} */
  taobao_test_TaoNodeTopic(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestTaoNodeTopic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTmgQualityControlInspectOrderNotify 天猫国际 > 天猫国际品控质检服务单通知} */
  taobao_tmg_QualityControlInspectOrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTmgQualityControlInspectOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTmgTradeInspectOrderChangeTest 天猫国际 > 天猫国际品控质检单开放测试} */
  taobao_tmg_TradeInspectOrderChangeTest(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTmgTradeInspectOrderChangeTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopAuthCancel 平台消息 > 取消授权消息通知} */
  taobao_top_AuthCancel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopAuthCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopMqfNotify 平台消息 > mqf消息通道} */
  taobao_top_MqfNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopMqfNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopOnsSinianTest 平台消息 > 似年测试ONS} */
  taobao_top_OnsSinianTest(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopOnsSinianTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopOnstest 平台消息 > 承仙测试ons} */
  taobao_top_Onstest(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopOnstest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopProcessCallback 平台消息 > 工作流执行回调消息} */
  taobao_top_ProcessCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopProcessCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopSellerFeedbackQuery 平台消息 > 三方应用质量——商家反馈查询} */
  taobao_top_SellerFeedbackQuery(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopSellerFeedbackQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopTdpCheckOrderAdvance 平台消息 > 淘宝-开放平台-数据推送-对单架构升级-对单任务消息} */
  taobao_top_TdpCheckOrderAdvance(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopTdpCheckOrderAdvance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopadminHelloWorld 淘宝 > 友仔消息测试} */
  taobao_topadmin_HelloWorld(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopadminHelloWorld) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成} */
  taobao_topats_TaskComplete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopatsTaskComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeAdvanceDisburse 淘宝交易 > 订单极速放款成功消息} */
  taobao_trade_AdvanceDisburse(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeAdvanceDisburse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeDoorInstallsettle 淘宝交易 > 淘宝上门安装服务费用结算} */
  taobao_trade_DoorInstallsettle(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeDoorInstallsettle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeFiveApi 淘宝交易 > 第五个测试API} */
  taobao_trade_FiveApi(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeFiveApi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeOpenTradePush 淘宝交易 > 开放交易推进消息} */
  taobao_trade_OpenTradePush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeOpenTradePush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeOrderSkuChanged 淘宝交易 > 修改子订单SKU成功} */
  taobao_trade_OrderSkuChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeOrderSkuChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeSecondApi 淘宝交易 > 第二个测试API} */
  taobao_trade_SecondApi(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeSecondApi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTest 淘宝交易 > 挚涵消息测试} */
  taobao_trade_Test(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTestFour 淘宝交易 > taobao_trade_TestFour} */
  taobao_trade_TestFour(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTestFour) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeThirdApi 淘宝交易 > 第三个测试API} */
  taobao_trade_ThirdApi(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeThirdApi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  taobao_trade_TradeAlipayCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  taobao_trade_TradeBuyerPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPaySubOut 淘宝交易 > 子订单维度付款消息（对外）} */
  taobao_trade_TradeBuyerPaySubOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerPaySubOut) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTradeTradeCreateDelay 淘宝交易 > 创建淘宝交易延迟消息} */
  taobao_trade_TradeCreateDelay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCreateDelay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCreatess 淘宝交易 > 双} */
  taobao_trade_TradeCreatess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCreatess) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTradeTradePeriodSuccess 淘宝交易 > 交易阶段成功消息} */
  taobao_trade_TradePeriodSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePeriodSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息} */
  taobao_trade_TradeRated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeRated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRatedOut 淘宝交易 > 淘宝开发平台内部使用评价变更消息out} */
  taobao_trade_TradeRatedOut(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeRatedOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息} */
  taobao_trade_TradeSellerShip(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息} */
  taobao_trade_TradeSuccess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccessDelay 淘宝交易 > 交易成功延迟消息} */
  taobao_trade_TradeSuccessDelay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSuccessDelay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  taobao_trade_TradeTimeoutRemind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeZhihan 淘宝交易 > API测试} */
  taobao_trade_Zhihan(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeZhihan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTraderateImprBadTag 淘宝 > 负面印象评价消息} */
  taobao_traderate_ImprBadTag(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTraderateImprBadTag) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainAgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  taobao_train_AgentQueryInfoNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainAgentQueryInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainOrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  taobao_train_OrderNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  taobao_train_ThirdPartyTradeNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainThirdPartyTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainTradeNotify 淘宝火车票 > 火车票订单消息} */
  taobao_train_TradeNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTravelticketMsgTrade 淘宝 > 门票交易消息通知} */
  taobao_travelticket_MsgTrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTravelticketMsgTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTripPartnerLevelUpMessage 淘宝 > 航旅会员升级消息} */
  taobao_trip_PartnerLevelUpMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTripPartnerLevelUpMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTripUserFlightDelayInsurance 淘宝 > 航旅会员机票延误险消息} */
  taobao_trip_UserFlightDelayInsurance(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTripUserFlightDelayInsurance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  taobao_uscesl_AlarmCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslAlarmCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  taobao_uscesl_BindResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsergrowthIconRelationBind 淘宝 > 金币游戏专用-好友通过之后发消息} */
  taobao_usergrowth_IconRelationBind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsergrowthIconRelationBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsergrowthRelationBind 淘宝 > 好友关系确认消息通知} */
  taobao_usergrowth_RelationBind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsergrowthRelationBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVerifyAuditResult 淘宝 > 实人认证审核结果} */
  taobao_verify_AuditResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVerifyAuditResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVerifyTokenSend 淘宝 > 发送令牌} */
  taobao_verify_TokenSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVerifyTokenSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVideoSyncResult 淘宝视频 > 淘视频同步视频接口} */
  taobao_video_SyncResult(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVideoSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVideoVideoTran 淘宝视频 > 淘宝视频转码结果消息} */
  taobao_video_VideoTran(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVideoVideoTran) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVipLevelChange 淘宝VIP > 会员身份变化} */
  taobao_vip_LevelChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVipLevelChange) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoWangwangOANotify 淘宝 > 主子账号之间旺旺消息发送} */
  taobao_wangwang_OANotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWangwangOANotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktmsDeliverer 淘宝 > 配送员消息推送} */
  taobao_wdktms_Deliverer(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktmsDeliverer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktmsSendDemand 淘宝 > 运力消息} */
  taobao_wdktms_SendDemand(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktmsSendDemand) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktmsWaybill 淘宝 > 运单变更消息通知外部系统} */
  taobao_wdktms_Waybill(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktmsWaybill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  taobao_wisdomstore_RecognitionNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  taobao_wisdomstore_RecognitionPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWmsReserveStatusCallback 淘宝 > WMS预约单状态回传} */
  taobao_wms_ReserveStatusCallback(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWmsReserveStatusCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWmsReserveStockInOrderConfirm 淘宝 > 到货通知单收货确认} */
  taobao_wms_ReserveStockInOrderConfirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWmsReserveStockInOrderConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWorktableInsertData 淘宝 > 智能应用工作表数据新增} */
  taobao_worktable_InsertData(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWorktableInsertData) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtContractOrderMsgSync 淘宝 > 通知运营商合约号卡订单可以下行} */
  taobao_wt_ContractOrderMsgSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtContractOrderMsgSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtOpenTradeMsg 淘宝 > 礼包交易开放消息同步支付宝话费宝侧} */
  taobao_wt_OpenTradeMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtOpenTradeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtOpenTradePreauthorizMsg 淘宝 > 存送业务预授权操作结果通知} */
  taobao_wt_OpenTradePreauthorizMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtOpenTradePreauthorizMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtOpenTradeTaskMsg 淘宝 > 开放交易任务完成消息} */
  taobao_wt_OpenTradeTaskMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtOpenTradeTaskMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtVerifyInform 淘宝 > 阿里通信实人认证主动通知运营商} */
  taobao_wt_VerifyInform(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtVerifyInform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXhotelDistributionStdInfoChange 酒店标准库基础信息变更消息 > 通用分销 标准信息变更消息} */
  taobao_xhotel_DistributionStdInfoChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXhotelDistributionStdInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuHouseBooking 闲鱼 > 闲鱼房源预约消息} */
  taobao_xianyu_HouseBooking(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuHouseBooking) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentBillPaid 闲鱼 > 闲鱼租房订单支付} */
  taobao_xianyu_RentBillPaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentBillPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentContractCreate 闲鱼 > 闲鱼租房合约创建} */
  taobao_xianyu_RentContractCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentContractCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  taobao_xianyu_RentalItemReturnCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  taobao_xianyu_RentalItemReturnReserved(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnReserved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消} */
  taobao_xianyu_RentalOrderCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建} */
  taobao_xianyu_RentalOrderCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderChange 淘宝 > 订单变更通知} */
  taobao_xiaoqu_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderClose 淘宝 > 订单关闭通知} */
  taobao_xiaoqu_OrderClose(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderCreate 淘宝 > 创建订单消息通知} */
  taobao_xiaoqu_OrderCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderFinish 淘宝 > 订单正常完成通知} */
  taobao_xiaoqu_OrderFinish(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderPackage 淘宝 > 订单打包完成通知} */
  taobao_xiaoqu_OrderPackage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderPackage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderPay 淘宝 > 买家付款消息通知} */
  taobao_xiaoqu_OrderPay(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderPorcess 淘宝 > 通知合作伙伴订单发生变化} */
  taobao_xiaoqu_OrderPorcess(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderPorcess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息} */
  taobao_xiaowei_Message(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoweiMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiTest IOT-智能制造 > xiaowe测试消息} */
  taobao_xiaowei_Test(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoweiTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoYichaoWarrantyCodeStatusUpdate 淘宝 > 蚁巢保修码状态变更消息} */
  taobao_yichao_WarrantyCodeStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoYichaoWarrantyCodeStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkCloudIdentifyCreateNotify 淘宝真酷 > 淘宝真酷-云鉴定创建通知} */
  taobao_zk_CloudIdentifyCreateNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkCloudIdentifyCreateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkCloudIdentifyResaleNotify 淘宝真酷 > 淘宝真酷二次鉴别通知} */
  taobao_zk_CloudIdentifyResaleNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkCloudIdentifyResaleNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkFirstLogisticsNotify 淘宝真酷 > 淘宝真酷一段物流发货消息} */
  taobao_zk_FirstLogisticsNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkFirstLogisticsNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkFirstLogisticsReceivedNotify 淘宝真酷 > 一段物流签收通知} */
  taobao_zk_FirstLogisticsReceivedNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkFirstLogisticsReceivedNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkFirstLogisticsUpdateNotify 淘宝真酷 > 淘宝真酷-一段运单号修改消息} */
  taobao_zk_FirstLogisticsUpdateNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkFirstLogisticsUpdateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkIdentifyCancelNotify 淘宝真酷 > 淘宝真酷-取消鉴别通知} */
  taobao_zk_IdentifyCancelNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkIdentifyCancelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkIdentifyCreate 淘宝真酷 > 淘宝真酷需求鉴别单创建消息} */
  taobao_zk_IdentifyCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkIdentifyCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkPauseNotify 淘宝真酷 > 淘宝真酷鉴别单暂停通知} */
  taobao_zk_PauseNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkPauseNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkPreIdentifyModifyPicNotify 淘宝真酷 > 淘宝真酷-提前鉴别修改图片通知} */
  taobao_zk_PreIdentifyModifyPicNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkPreIdentifyModifyPicNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkRefundNotify 淘宝真酷 > 真酷鉴定用户退款通知} */
  taobao_zk_RefundNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkSecondLogisticsGotNotify 淘宝真酷 > 淘宝真酷二段寄出后揽收通知机构} */
  taobao_zk_SecondLogisticsGotNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkSecondLogisticsGotNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkStoreIdentifyRequestResaleNotify 淘宝真酷 > 平台鉴别商家新增/修改二次免鉴申请消息通知isv} */
  taobao_zk_StoreIdentifyRequestResaleNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkStoreIdentifyRequestResaleNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkSubmitQuote 淘宝真酷 > 真酷供应商提交报价结果通知} */
  taobao_zk_SubmitQuote(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkSubmitQuote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaotaoFilmThirdPartyRefundPush 淘宝 > 退款消息同步} */
  taotao_film_ThirdPartyRefundPush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaotaoFilmThirdPartyRefundPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirm 天猫汽车 > 天猫汽车分阶段订单打款消息} */
  tmall_aliauto_StepOrderPartConfirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliautoStepOrderPartConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  tmall_aliauto_StepOrderPartConfirmed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliautoStepOrderPartConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoServiceReceiptCreate 天猫汽车 > 服务工单创建} */
  tmall_auto_ServiceReceiptCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoServiceReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  tmall_auto_TradeModify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTradeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  tmall_auto_TwoWheelsReceiptCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTwoWheelsReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarAbnormalSettleSeller 天猫汽车 > 天猫汽车安装服务-异常商家上下线通知} */
  tmall_car_AbnormalSettleSeller(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarAbnormalSettleSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarAliapayTelRedPacket 天猫汽车 > 天猫汽车-支付宝手机充值红包发放} */
  tmall_car_AliapayTelRedPacket(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarAliapayTelRedPacket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarAlipayEvent 天猫汽车 > 天猫汽车触发支付宝事件发奖} */
  tmall_car_AlipayEvent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarAlipayEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarContractSign 天猫汽车 > 合同签署消息} */
  tmall_car_ContractSign(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarFinanceMsg 天猫汽车 > 汽车金融消息} */
  tmall_car_FinanceMsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarFinanceMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarTelCoupon 天猫汽车 > 天猫汽车特惠充} */
  tmall_car_TelCoupon(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarTelCoupon) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarprofileAuthStatusChangeToISV 天猫 > 用户车辆档案授权状态更新} */
  tmall_carprofile_AuthStatusChangeToISV(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarprofileAuthStatusChangeToISV) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallFuwuElectricMaintenanceWorkCardComplete 天猫服务 > 天猫服务消电维修工单完结消息} */
  tmall_fuwu_ElectricMaintenanceWorkCardComplete(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuElectricMaintenanceWorkCardComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuElectricWarrantyCodeStatusUpdate 天猫服务 > 天猫服务消电保修码状态变更} */
  tmall_fuwu_ElectricWarrantyCodeStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuElectricWarrantyCodeStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuHomeDecorationSupplyRuleUpdate 天猫服务 > 天猫服务家装优质供给规则变更} */
  tmall_fuwu_HomeDecorationSupplyRuleUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuHomeDecorationSupplyRuleUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuLogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  tmall_fuwu_LogisticsInfoMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuLogisticsInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuNewAnomalyRecourseStatusUpdate 天猫服务 > 服务管控消息更新} */
  tmall_fuwu_NewAnomalyRecourseStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuNewAnomalyRecourseStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuRateMessageTP 天猫服务 > 消费者评价成功top消息} */
  tmall_fuwu_RateMessageTP(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuRateMessageTP) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSendCallRecord 天猫服务 > 发送通话记录} */
  tmall_fuwu_SendCallRecord(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuSendCallRecord) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusChange 天猫服务 > 天猫服务任务工单状态更新} */
  tmall_fuwu_WorkcardStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  tmall_fuwu_WorkcardStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomedecorationfuwuWorkcardStatusUpdateForSeller 天猫 > 天猫家装服务工单状态推送} */
  tmall_homedecorationfuwu_WorkcardStatusUpdateForSeller(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomedecorationfuwuWorkcardStatusUpdateForSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeserviceGroupWorkcardCreate 天猫服务 > 整单视角工单全部创建消息} */
  tmall_homeservice_GroupWorkcardCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeserviceGroupWorkcardCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeserviceLogisticsUpdate 天猫服务 > 天猫家享服务物流更新} */
  tmall_homeservice_LogisticsUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeserviceLogisticsUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeserviceTradeRefund 天猫服务 > 交易逆向消息} */
  tmall_homeservice_TradeRefund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeserviceTradeRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallIfpfulfillResultNotice 天猫 > 创建订单结果通知接口} */
  tmall_ifpfulfill_ResultNotice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallIfpfulfillResultNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallJstBusinessInformationSend 天猫 > 商家消息} */
  tmall_jst_BusinessInformationSend(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallJstBusinessInformationSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiCrmBind 天猫美妆 > 绑定操作通知} */
  tmall_mei_CrmBind(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiCrmBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiCrmBindQuery 天猫美妆 > 用户绑定请求} */
  tmall_mei_CrmBindQuery(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiCrmBindQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiCrmMemberQuery 天猫美妆 > 会员信息查询通知} */
  tmall_mei_CrmMemberQuery(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiCrmMemberQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiGiftExchange 天猫美妆 > 天猫美妆店铺礼品兑换通知} */
  tmall_mei_GiftExchange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiGiftExchange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiMemberRegister 天猫美妆 > 飞行入会消息} */
  tmall_mei_MemberRegister(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiMemberRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiPointChange 天猫美妆 > 品牌积分变更通知} */
  tmall_mei_PointChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiPointChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhInseasonUpdateNotify 天猫 > 魅力惠Inseason关键属性变化通知} */
  tmall_mlh_InseasonUpdateNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhInseasonUpdateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhInventorySync 天猫 > 魅力惠分销库存同步} */
  tmall_mlh_InventorySync(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhInventorySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhOrderCancelNotify 天猫 > 魅力惠订单取消通知} */
  tmall_mlh_OrderCancelNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhOrderCancelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhOrderDeliveryCallBack 天猫 > 魅力惠发货同步回调消息} */
  tmall_mlh_OrderDeliveryCallBack(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhOrderDeliveryCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhOrderReturnCallBack 天猫 > 分销消退入库消息} */
  tmall_mlh_OrderReturnCallBack(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhOrderReturnCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhPOAuditCompletedNotify 天猫 > 魅力惠PO单审批通过消息通知} */
  tmall_mlh_POAuditCompletedNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhPOAuditCompletedNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhPoReceivedNotify 天猫 > 魅力惠PO收货消息} */
  tmall_mlh_PoReceivedNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhPoReceivedNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMultshopMsg 天猫 > 多旗舰店签约完成消息} */
  tmall_multshop_Msg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMultshopMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtItemsToEasyHome 新零售终端下行消息 > 商品信息同步} */
  tmall_nrt_ItemsToEasyHome(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrtItemsToEasyHome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtTcpsDeliveryStatus 新零售终端下行消息 > 天猫同城配送状态消息} */
  tmall_nrt_TcpsDeliveryStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrtTcpsDeliveryStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOicInventoryInbound 天猫 > 天猫货品入库消息} */
  tmall_oic_InventoryInbound(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOicInventoryInbound) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmniStoreAdd 全渠道API > 新零售门店审核通过消息} */
  tmall_omni_StoreAdd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmniStoreAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelDiscountedPriceChange 聚石塔 > 商品优惠价格变更} */
  tmall_omnichannel_DiscountedPriceChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelDiscountedPriceChange) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallOnehourScmItem 天猫 > 货品商品同步} */
  tmall_onehour_ScmItem(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOnehourScmItem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallPosfeeMsg 天猫 > 刷卡费率消息} */
  tmall_posfee_Msg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallPosfeeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundClosed 天猫 > 退款关闭消息} */
  tmall_refund_RefundClosed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundCreate 天猫 > 退款创建消息} */
  tmall_refund_RefundCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundMessageCreated 天猫 > 创建退款留言消息} */
  tmall_refund_RefundMessageCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundMessageCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundModified 天猫 > 买家修改协议消息} */
  tmall_refund_RefundModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundPaymentFinished 天猫 > 赔付完成消息} */
  tmall_refund_RefundPaymentFinished(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundPaymentFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundPrepaid 天猫 > 极速退款消息} */
  tmall_refund_RefundPrepaid(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundPrepaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundSellerAgreeReturn 天猫 > 卖家同意退货消息} */
  tmall_refund_RefundSellerAgreeReturn(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundSellerAgreeReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundSellerRefuse 天猫 > 卖家拒绝退款消息} */
  tmall_refund_RefundSellerRefuse(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundSellerRefuse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundSucceed 天猫 > 退款成功消息} */
  tmall_refund_RefundSucceed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundSucceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundTaobaoInvolved 天猫 > 小二介入消息} */
  tmall_refund_RefundTaobaoInvolved(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundTaobaoInvolved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundableCanceled 天猫 > 退款标记取消消息} */
  tmall_refund_RefundableCanceled(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundableMarked 天猫 > 退款标记创建消息} */
  tmall_refund_RefundableMarked(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnBuyerReturnGoods 天猫 > 买家退货，填写退货单消息} */
  tmall_refund_ReturnBuyerReturnGoods(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnConfirmFailed 天猫 > 买家填写物流单，卖家拒绝退货消息} */
  tmall_refund_ReturnConfirmFailed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnConfirmFailed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnConfirmSucceed 天猫 > 买家填写物流单，卖家确认收货消息} */
  tmall_refund_ReturnConfirmSucceed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnConfirmSucceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnCreated 天猫 > 卖家同意退货，退货单创建消息} */
  tmall_refund_ReturnCreated(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnModified 天猫 > 退货单修改消息} */
  tmall_refund_ReturnModified(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRetailEcRelation 天猫 > 会员管理关系变更同步商家} */
  tmall_retail_EcRelation(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRetailEcRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSasssignMsg 天猫 > sass签约消息} */
  tmall_sasssign_Msg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallSasssignMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallScmSendTmcsDistributeSettleFee 天猫 > 猫超经销结算打款消息} */
  tmall_scm_SendTmcsDistributeSettleFee(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallScmSendTmcsDistributeSettleFee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceCycleBillInvoice 天猫服务 > 服务结算账期账单发票消息} */
  tmall_service_CycleBillInvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceCycleBillInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterConsultationMessage 天猫服务 > 咨询工单消息} */
  tmall_servicecenter_ConsultationMessage(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenterConsultationMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  tmall_servicecenter_TaskUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenterTaskUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformServiceProductChanged 天猫服务 > 天猫服务产品变更消息} */
  tmall_serviceplatform_ServiceProductChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformServiceProductChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSignCreate 天猫服务 > 签到消息} */
  tmall_serviceplatform_SignCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformSignCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSubscribeServiceChanged 天猫服务 > 天猫服务订购消息} */
  tmall_serviceplatform_SubscribeServiceChanged(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformSubscribeServiceChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息} */
  tmall_serviceplatform_WorkerLeave(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformWorkerLeave) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSupermarketHaitunEventCreate 天猫 > 猫超业务支付宝海豚事件创建} */
  tmall_supermarket_HaitunEventCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallSupermarketHaitunEventCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTccompassDeliveryRangesUpdate 天猫 > 罗盘变动消息} */
  tmall_tccompass_DeliveryRangesUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTccompassDeliveryRangesUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcItemExcelSchemaNotify 天猫 > JV商品发布excel schema生成后通知ISV的消息} */
  tmall_tlc_ItemExcelSchemaNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcItemExcelSchemaNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcItemPriceExcelNotify 天猫 > 商品批量改价} */
  tmall_tlc_ItemPriceExcelNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcItemPriceExcelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcItemsExcelResultNotify 天猫 > 商品批量发布excel结果反馈消息} */
  tmall_tlc_ItemsExcelResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcItemsExcelResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcProductsExcelResultNotify 天猫 > 上传货品详情excel结果生成TOP消息} */
  tmall_tlc_ProductsExcelResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcProductsExcelResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcProductsExcelSchemaNotify 天猫 > 货品详情excel模版生成TOP消息} */
  tmall_tlc_ProductsExcelSchemaNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcProductsExcelSchemaNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcUpDownItemNotify 天猫 > JV商品上下架通知ISV的消息} */
  tmall_tlc_UpDownItemNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcUpDownItemNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTmgBrandMemberTrade 天猫 > 天猫国际品牌会员交易消息} */
  tmall_tmg_BrandMemberTrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTmgBrandMemberTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallXfFutureOrders 天猫 > 天猫鞋服期货订单消息} */
  tmall_xf_FutureOrders(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallXfFutureOrders) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallXfGoodsInfo 天猫 > 天猫鞋服货品信息回流} */
  tmall_xf_GoodsInfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallXfGoodsInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYichaoWorkcardStatusUpdate 天猫服务 > 蚁巢工单更新消息} */
  tmall_yichao_WorkcardStatusUpdate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallYichaoWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYougouItemChange 天猫 > 天猫优购商品变更} */
  tmall_yougou_ItemChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallYougouItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYougouOrderChange 天猫 > 天猫优购订单变更} */
  tmall_yougou_OrderChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallYougouOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TobaoLiveLiveEventChange 直播间 > 直播间氛围消息开放} */
  tobao_live_LiveEventChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.TobaoLiveLiveEventChange) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.UmengOplusOfflineDataToAlipay 友盟 > 友盟线下数据} */
  umeng_oplus_OfflineDataToAlipay(fn: (this: TaoMessageConsumer, message: IncomingMessage.UmengOplusOfflineDataToAlipay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkCapacityDelivery 五道口 > 盒马运力消息} */
  wdk_capacity_Delivery(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkCapacityDelivery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuError 五道口营销 > 营销操作错误消息} */
  wdk_market_OperateSkuError(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuErrror 五道口营销 > 营销发布商品错误} */
  wdk_market_OperateSkuErrror(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuErrror) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataPublishError 五道口营销 > 五道口开放数据发布错误} */
  wdk_open_DataPublishError(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataPublishError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataRelation 五道口营销 > 五道口开放数据关联通知} */
  wdk_open_DataRelation(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkWorkforceRequirementPublish 五道口 > 盒马三方用工需求发布} */
  wdk_workforce_RequirementPublish(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkWorkforceRequirementPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XhotelDistributionStatusChange 酒店交易消息API > 飞猪酒店订单状态变更消息} */
  xhotel_distribution_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XhotelDistributionStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersaleOrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  xianyu_aftersale_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersaleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraiseOrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  xianyu_appraise_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraiseOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCarOrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  xianyu_car_OrderStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCarOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCcoComplain 闲鱼电商Saas > 闲鱼投诉消息} */
  xianyu_cco_Complain(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCcoComplain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCoinCoinDeductionChange 闲鱼电商Saas > 闲鱼币交易抵扣变更消息} */
  xianyu_coin_CoinDeductionChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCoinCoinDeductionChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtoxCommissionStateSyn 闲鱼 > 闲鱼C2X抽佣退佣消息同步} */
  xianyu_ctox_CommissionStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtoxCommissionStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtoxPayDkChange 闲鱼 > c2x代扣协议变更通知} */
  xianyu_ctox_PayDkChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtoxPayDkChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtoxRateStateSyn 闲鱼 > c2x业务订单评价消息同步} */
  xianyu_ctox_RateStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtoxRateStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuEnvironmentEventSyn 闲鱼 > 闲鱼双11公益游戏任务事件同步} */
  xianyu_environment_EventSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuEnvironmentEventSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuFishmarketItemSyn 闲鱼 > 鱼市商品状态变更} */
  xianyu_fishmarket_ItemSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuFishmarketItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuHjbtPaymentStatus 闲鱼 > 换机补贴打款消息} */
  xianyu_hjbt_PaymentStatus(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuHjbtPaymentStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuIsvOrderRemind 闲鱼 > 闲鱼服务商订单提醒} */
  xianyu_isv_OrderRemind(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuIsvOrderRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuMarketrecycleOrderStateSyn 闲鱼 > 保卖订单变更通知} */
  xianyu_marketrecycle_OrderStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuMarketrecycleOrderStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuMarketrecyclePlanStateSyn 闲鱼 > 闲鱼保卖计划变更消息} */
  xianyu_marketrecycle_PlanStateSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuMarketrecyclePlanStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuOutletCycleBuyVendueCreate 闲鱼电商Saas > 闲鱼奥莱周期拍拍品创建} */
  xianyu_outlet_CycleBuyVendueCreate(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuOutletCycleBuyVendueCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleOrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  xianyu_recycle_OrderStatusSync(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleSpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  xianyu_recycle_SpuModifySync(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleSpuModifySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRegisterStatusChange 闲鱼 > 闲鱼SPU挂载上下线消息} */
  xianyu_register_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRegisterStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateQuesChange 闲鱼 > 闲鱼问卷变更} */
  xianyu_template_QuesChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateQuesChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateStatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  xianyu_template_StatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTenderOrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  xianyu_tender_OrderSyn(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTenderOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYellowboxGpuTemplatePunish 闲鱼电商Saas > GPU模版处罚消息通知} */
  xianyu_yellowbox_GpuTemplatePunish(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYellowboxGpuTemplatePunish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYushiTsOffShelf 闲鱼 > 闲鱼商品下架消息} */
  xianyu_yushi_TsOffShelf(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYushiTsOffShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuAigcTrainResultNotify 优酷 > 妙鸭SaaS对外开放-训练结果通知} */
  youku_aigc_TrainResultNotify(fn: (this: TaoMessageConsumer, message: IncomingMessage.YoukuAigcTrainResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  youku_tvosappstore_AppStatusChange(fn: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstoreAppStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosWatchCmnsReceive AliOS手表 > 透传cmns接收消息} */
  yunos_watch_CmnsReceive(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosWatchCmnsReceive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  yunos_yoc_DatapoolSandbox(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocDatapoolSandbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocMessageService YunOS YoC > yoc消息服务} */
  yunos_yoc_MessageService(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocMessageService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AeLogistics} */
  ae_logistics(fn: (this: TaoMessageConsumer, message: IncomingMessage.AeLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliFin} */
  ali_fin(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliFin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodept} */
  ali_infodept(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodept) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlab} */
  alibaba_adlab(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlab) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgro} */
  alibaba_agro(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgro) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilabs} */
  alibaba_ailabs(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilabs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilbas} */
  alibaba_ailbas(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilbas) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAis} */
  alibaba_ais(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAis) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliabs} */
  alibaba_aliabs(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliabs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicom} */
  alibaba_alicom(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealth} */
  alibaba_alihealth(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlink} */
  alibaba_alink(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqin} */
  alibaba_aliqin(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlisports} */
  alibaba_alisports(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlisports) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsg} */
  alibaba_ascpchannelmanagermentmsg(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCfo} */
  alibaba_cfo(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCoupon} */
  alibaba_coupon(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCoupon) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrm} */
  alibaba_crm(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrowdsourcing} */
  alibaba_crowdsourcing(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrowdsourcing) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsr} */
  alibaba_csr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecoration} */
  alibaba_decoration(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecoration) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoice} */
  alibaba_einvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEsl} */
  alibaba_esl(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEsl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwu} */
  alibaba_fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappyfinance} */
  alibaba_happyfinance(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappyfinance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytrip} */
  alibaba_happytrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHj} */
  alibaba_hj(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHj) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHomestyler} */
  alibaba_homestyler(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHomestyler) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIcbulive} */
  alibaba_icbulive(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIcbulive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdle} */
  alibaba_idle(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIfp} */
  alibaba_ifp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIfp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfop} */
  alibaba_infop(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIntime} */
  alibaba_intime(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIntime) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoice} */
  alibaba_invoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJym} */
  alibaba_jym(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJym) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKaola} */
  alibaba_kaola(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKaola) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKongur} */
  alibaba_kongur(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKongur) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassen} */
  alibaba_lassen(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLegal} */
  alibaba_legal(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLegal) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLst} */
  alibaba_lst(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmc} */
  alibaba_mmc(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitor} */
  alibaba_monitor(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMos} */
  alibaba_mos(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMos) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsd} */
  alibaba_msd(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfservice} */
  alibaba_msfservice(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMtp} */
  alibaba_mtp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMtp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazca} */
  alibaba_nazca(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazca) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNewretail} */
  alibaba_newretail(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNewretail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlife} */
  alibaba_nlife(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlife) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaOkki} */
  alibaba_okki(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaOkki) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPaimai} */
  alibaba_paimai(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPur} */
  alibaba_pur(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPur) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatform} */
  alibaba_serviceplatform(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSp} */
  alibaba_sp(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaSp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTax} */
  alibaba_tax(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTax) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdx} */
  alibaba_tbdx(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdx) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTc} */
  alibaba_tc(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehours} */
  alibaba_threehours(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehours) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianji} */
  alibaba_tianji(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianji) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTxd} */
  alibaba_txd(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTxd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaUni} */
  alibaba_uni(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaUni) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaYichao} */
  alibaba_yichao(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunio} */
  alibaba_yunio(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunio) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxb} */
  alicom_axb(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomDeduct} */
  alicom_deduct(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomDeduct) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlow} */
  alicom_flow(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeia} */
  aliexpress_aeia(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeia) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAftersaleinsurance} */
  aliexpress_aftersaleinsurance(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAftersaleinsurance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressMessage} */
  aliexpress_message(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrder} */
  aliexpress_order(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressTrade} */
  aliexpress_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarranty} */
  aliexpress_warranty(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarranty) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCep} */
  alihealth_cep(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCep) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthHb} */
  alihealth_hb(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthHb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthTest} */
  alihealth_test(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYs} */
  alihealth_ys(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomer} */
  alihouse_customer(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseHouse} */
  alihouse_house(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseHouse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosCosmo} */
  alios_cosmo(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliosCosmo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosWatch} */
  alios_watch(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliosWatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayAe} */
  alipay_ae(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayAe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoming} */
  alipay_baoming(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoming) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoxian} */
  alipay_baoxian(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoxian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayCharity} */
  alipay_charity(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayCharity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiao} */
  alipay_fenxiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefund} */
  alipay_refund(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayScf} */
  alipay_scf(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayScf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTrade} */
  alipay_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayUpdate} */
  alipay_update(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayXiaodai} */
  alipay_xiaodai(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipayXiaodai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLark} */
  alipic_lark(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLark) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlisportsBank} */
  alisports_bank(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlisportsBank) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgent} */
  alitrip_agent(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtrip} */
  alitrip_btrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtriphotel} */
  alitrip_btriphotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtriphotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbooking} */
  alitrip_ebooking(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbooking) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlight} */
  alitrip_flight(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripHotel} */
  alitrip_hotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesr} */
  alitrip_iesr(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetrade} */
  alitrip_ietrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripSync} */
  alitrip_sync(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTf} */
  alitrip_tf(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrade} */
  alitrip_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrain} */
  alitrip_train(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravel} */
  alitrip_travel(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticket} */
  alitrip_tripticket(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTripticket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisa} */
  alitrip_visa(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlitripVisa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGsc} */
  aliyun_gsc(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIot} */
  aliyun_iot(fn: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCoupon} */
  alsc_coupon(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscCoupon) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponpackage} */
  alsc_couponpackage(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponpackage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscDaodian} */
  alsc_daodian(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscDaodian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKb} */
  alsc_kb(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbaobaotuan} */
  alsc_kbbaobaotuan(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbaobaotuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbbt} */
  alsc_kbbbt(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbbt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscReviewbwc} */
  alsc_reviewbwc(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscReviewbwc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscRisk} */
  alsc_risk(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscRisk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalesadaptor} */
  alsc_salesadaptor(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalesadaptor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalescrm} */
  alsc_salescrm(fn: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalescrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustry} */
  ascp_insdustry(fn: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInstantsonline} */
  ascp_instantsonline(fn: (this: TaoMessageConsumer, message: IncomingMessage.AscpInstantsonline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRight} */
  banma_right(fn: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatform} */
  cainiao_consignplatform(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIot} */
  cainiao_iot(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoLogistics} */
  cainiao_logistics(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuan} */
  cainiao_moduan(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoScf} */
  cainiao_scf(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoScf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoWaybill} */
  cainiao_waybill(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoWaybill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoYima} */
  cainiao_yima(fn: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoYima) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistribution} */
  damai_distribution(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMev} */
  damai_mev(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMev) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMz} */
  damai_mz(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMz) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTrade} */
  damai_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.EleEnterprise} */
  ele_enterprise(fn: (this: TaoMessageConsumer, message: IncomingMessage.EleEnterprise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeBankstatement} */
  eleme_bankstatement(fn: (this: TaoMessageConsumer, message: IncomingMessage.ElemeBankstatement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeFulfill} */
  eleme_fulfill(fn: (this: TaoMessageConsumer, message: IncomingMessage.ElemeFulfill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeRetail} */
  eleme_retail(fn: (this: TaoMessageConsumer, message: IncomingMessage.ElemeRetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtrip} */
  fliggy_btrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyDujia} */
  fliggy_dujia(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyDujia) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyFlight} */
  fliggy_flight(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyInteract} */
  fliggy_interact(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyInteract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiao} */
  fliggy_jipiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyMember} */
  fliggy_member(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyMember) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyPush} */
  fliggy_push(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggySht} */
  fliggy_sht(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggySht) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicket} */
  fliggy_ticket(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTravel} */
  fliggy_travel(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTravel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyVisa} */
  fliggy_visa(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyVisa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyXhotel} */
  fliggy_xhotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.FliggyXhotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FlyggyFlight} */
  flyggy_flight(fn: (this: TaoMessageConsumer, message: IncomingMessage.FlyggyFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirm} */
  fuwu_confirm(fn: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GaodeCaiji} */
  gaode_caiji(fn: (this: TaoMessageConsumer, message: IncomingMessage.GaodeCaiji) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GenieGsc} */
  genie_gsc(fn: (this: TaoMessageConsumer, message: IncomingMessage.GenieGsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GlobalVirtual} */
  global_virtual(fn: (this: TaoMessageConsumer, message: IncomingMessage.GlobalVirtual) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuction} */
  gov_auction(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovAuction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovQual} */
  gov_qual(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovQual) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovRadarclue} */
  gov_radarclue(fn: (this: TaoMessageConsumer, message: IncomingMessage.GovRadarclue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrm} */
  icbu_alicrm(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuChat} */
  icbu_chat(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuChat) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuCrm} */
  icbu_crm(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuCrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuMember} */
  icbu_member(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuMember) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuRisk} */
  icbu_risk(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuRisk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuTrade} */
  icbu_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.IcbuTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreement} */
  idle_agreement(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisv} */
  idle_appraiseisv(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAutotrade} */
  idle_autotrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleAutotrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignment} */
  idle_consignment(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentii} */
  idle_consignmentii(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentii) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCro} */
  idle_cro(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleCro) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCycleshop} */
  idle_cycleshop(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleCycleshop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleDistribution} */
  idle_distribution(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarket} */
  idle_fishmarket(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketfixed} */
  idle_fishmarketfixed(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketfixed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleLuxconsign} */
  idle_luxconsign(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleLuxconsign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleNewoutlets} */
  idle_newoutlets(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleNewoutlets) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycle} */
  idle_recycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleSeller} */
  idle_seller(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisv} */
  idle_topisv(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTrade} */
  idle_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpay} */
  idle_tranferpay(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTwjd} */
  idle_twjd(fn: (this: TaoMessageConsumer, message: IncomingMessage.IdleTwjd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeDatacenter} */
  intime_datacenter(fn: (this: TaoMessageConsumer, message: IncomingMessage.IntimeDatacenter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeSc} */
  intime_sc(fn: (this: TaoMessageConsumer, message: IncomingMessage.IntimeSc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTrade} */
  jae_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.JaeTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JymOrder} */
  jym_order(fn: (this: TaoMessageConsumer, message: IncomingMessage.JymOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LarkTrade} */
  lark_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.LarkTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwa} */
  lianfan_huiwa(fn: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LingyangQuickservice} */
  lingyang_quickservice(fn: (this: TaoMessageConsumer, message: IncomingMessage.LingyangQuickservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplier} */
  lst_supplier(fn: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplier) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompass} */
  niaochao_tccompass(fn: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompass) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedAppraise} */
  selected_appraise(fn: (this: TaoMessageConsumer, message: IncomingMessage.SelectedAppraise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedReverify} */
  selected_reverify(fn: (this: TaoMessageConsumer, message: IncomingMessage.SelectedReverify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAg} */
  taobao_ag(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgent} */
  taobao_agent(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAis} */
  taobao_ais(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAis) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAliauto} */
  taobao_aliauto(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAliauto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlipic} */
  taobao_alipic(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlipic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlsc} */
  taobao_alsc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAps} */
  taobao_aps(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAps) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAscp} */
  taobao_ascp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAscp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuction} */
  taobao_auction(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxin} */
  taobao_axin(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuan} */
  taobao_baichuan(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxian} */
  taobao_baoxian(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBashlive} */
  taobao_bashlive(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBashlive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmc} */
  taobao_bmc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBus} */
  taobao_bus(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarlease} */
  taobao_carlease(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCarlease) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCco} */
  taobao_cco(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCco) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContent} */
  taobao_content(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifa} */
  taobao_daifa(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDatapush} */
  taobao_datapush(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDatapush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDd} */
  taobao_dd(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandian} */
  taobao_diandian(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDispute} */
  taobao_dispute(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDispute) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaas} */
  taobao_dpaas(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaas) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDv} */
  taobao_dv(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoice} */
  taobao_einvoice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEpp} */
  taobao_epp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEpp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiao} */
  taobao_fenxiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilm} */
  taobao_film(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggy} */
  taobao_fliggy(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFsc} */
  taobao_fsc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwu} */
  taobao_fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuys} */
  taobao_globalbuys(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuys) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeai} */
  taobao_homeai(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotel} */
  taobao_hotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIdlefish} */
  taobao_idlefish(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIdlefish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashion} */
  taobao_ifashion(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashion) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIhome} */
  taobao_ihome(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIhome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoInventory} */
  taobao_inventory(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoInventory) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstore} */
  taobao_istore(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItem} */
  taobao_item(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarket} */
  taobao_itemmarket(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJaq} */
  taobao_jaq(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJaq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiao} */
  taobao_jipiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfx} */
  taobao_jzfx(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfx) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoKcb} */
  taobao_kcb(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoKcb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLbs} */
  taobao_lbs(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLbs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLife} */
  taobao_life(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLife) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeservice} */
  taobao_lifeservice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLive} */
  taobao_live(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveaigc} */
  taobao_liveaigc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveaigc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocal} */
  taobao_local(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocal) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocalorder} */
  taobao_localorder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocalorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogistics} */
  taobao_logistics(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniapp} */
  taobao_miniapp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniapp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddress} */
  taobao_modifyaddress(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorder} */
  taobao_modifyorder(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifysku} */
  taobao_modifysku(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifysku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOc} */
  taobao_oc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfn} */
  taobao_ofn(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccount} */
  taobao_openaccount(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccount) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrm} */
  taobao_opencrm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenim} */
  taobao_openim(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenim) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmall} */
  taobao_openmall(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentrade} */
  taobao_opentrade(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOs} */
  taobao_os(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimai} */
  taobao_paimai(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPc} */
  taobao_pc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoProfit} */
  taobao_profit(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoProfit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPunish} */
  taobao_punish(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPunish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniu} */
  taobao_qianniu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdc} */
  taobao_rdc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligenius} */
  taobao_rdcaligenius(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligenius) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycle} */
  taobao_recycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefund} */
  taobao_refund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRetrieve} */
  taobao_retrieve(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRetrieve) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhino} */
  taobao_rhino(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhino) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRobot} */
  taobao_robot(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRobot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSec} */
  taobao_sec(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSec) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSeed} */
  taobao_seed(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSeed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangou} */
  taobao_shangou(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangou) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShop} */
  taobao_shop(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShoptransfer} */
  taobao_shoptransfer(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShoptransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSinian} */
  taobao_sinian(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSinian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartapp} */
  taobao_smartapp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartapp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartcall} */
  taobao_smartcall(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartcall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmall} */
  taobao_smartmall(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSupp} */
  taobao_supp(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSupp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSurvey} */
  taobao_survey(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSurvey) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTae} */
  taobao_tae(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaotv} */
  taobao_taotv(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaotv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbk} */
  taobao_tbk(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTc} */
  taobao_tc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTest} */
  taobao_test(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTmg} */
  taobao_tmg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTmg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTop} */
  taobao_top(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopadmin} */
  taobao_topadmin(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopadmin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopats} */
  taobao_topats(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopats) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrade} */
  taobao_trade(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTraderate} */
  taobao_traderate(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTraderate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrain} */
  taobao_train(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTravelticket} */
  taobao_travelticket(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTravelticket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrip} */
  taobao_trip(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUscesl} */
  taobao_uscesl(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUscesl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsergrowth} */
  taobao_usergrowth(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsergrowth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVerify} */
  taobao_verify(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVerify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVideo} */
  taobao_video(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVideo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVip} */
  taobao_vip(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimai} */
  taobao_waimai(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWangwang} */
  taobao_wangwang(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWangwang) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktms} */
  taobao_wdktms(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktms) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstore} */
  taobao_wisdomstore(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWms} */
  taobao_wms(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWms) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWorktable} */
  taobao_worktable(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWorktable) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWt} */
  taobao_wt(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXhotel} */
  taobao_xhotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXhotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyu} */
  taobao_xianyu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoqu} */
  taobao_xiaoqu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoqu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaowei} */
  taobao_xiaowei(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaowei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoYichao} */
  taobao_yichao(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoYichao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZk} */
  taobao_zk(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaotaoFilm} */
  taotao_film(fn: (this: TaoMessageConsumer, message: IncomingMessage.TaotaoFilm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliauto} */
  tmall_aliauto(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliauto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAuto} */
  tmall_auto(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallAuto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCar} */
  tmall_car(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarprofile} */
  tmall_carprofile(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarprofile) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannel} */
  tmall_channel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwu} */
  tmall_fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomedecorationfuwu} */
  tmall_homedecorationfuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomedecorationfuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeservice} */
  tmall_homeservice(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallIfpfulfill} */
  tmall_ifpfulfill(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallIfpfulfill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallJst} */
  tmall_jst(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallJst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMei} */
  tmall_mei(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlh} */
  tmall_mlh(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlh) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMultshop} */
  tmall_multshop(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallMultshop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrt} */
  tmall_nrt(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOic} */
  tmall_oic(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmni} */
  tmall_omni(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmni) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannel} */
  tmall_omnichannel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOnehour} */
  tmall_onehour(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallOnehour) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallPosfee} */
  tmall_posfee(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallPosfee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefund} */
  tmall_refund(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRetail} */
  tmall_retail(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallRetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSasssign} */
  tmall_sasssign(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallSasssign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallScm} */
  tmall_scm(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallScm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallService} */
  tmall_service(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenter} */
  tmall_servicecenter(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatform} */
  tmall_serviceplatform(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSupermarket} */
  tmall_supermarket(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallSupermarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTccompass} */
  tmall_tccompass(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTccompass) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlc} */
  tmall_tlc(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTmg} */
  tmall_tmg(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallTmg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallXf} */
  tmall_xf(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallXf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYichao} */
  tmall_yichao(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallYichao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYougou} */
  tmall_yougou(fn: (this: TaoMessageConsumer, message: IncomingMessage.TmallYougou) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TobaoLive} */
  tobao_live(fn: (this: TaoMessageConsumer, message: IncomingMessage.TobaoLive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotel} */
  trip_hotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.TripHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.UmengOplus} */
  umeng_oplus(fn: (this: TaoMessageConsumer, message: IncomingMessage.UmengOplus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkCapacity} */
  wdk_capacity(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkCapacity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarket} */
  wdk_market(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpen} */
  wdk_open(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkWorkforce} */
  wdk_workforce(fn: (this: TaoMessageConsumer, message: IncomingMessage.WdkWorkforce) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XhotelDistribution} */
  xhotel_distribution(fn: (this: TaoMessageConsumer, message: IncomingMessage.XhotelDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersale} */
  xianyu_aftersale(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersale) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraise} */
  xianyu_appraise(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCar} */
  xianyu_car(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCco} */
  xianyu_cco(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCco) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCoin} */
  xianyu_coin(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCoin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtox} */
  xianyu_ctox(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuEnvironment} */
  xianyu_environment(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuEnvironment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuFishmarket} */
  xianyu_fishmarket(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuFishmarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuHjbt} */
  xianyu_hjbt(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuHjbt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuIsv} */
  xianyu_isv(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuIsv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuMarketrecycle} */
  xianyu_marketrecycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuMarketrecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuOutlet} */
  xianyu_outlet(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuOutlet) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycle} */
  xianyu_recycle(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRegister} */
  xianyu_register(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplate} */
  xianyu_template(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTender} */
  xianyu_tender(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTender) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYellowbox} */
  xianyu_yellowbox(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYellowbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYushi} */
  xianyu_yushi(fn: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYushi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuAigc} */
  youku_aigc(fn: (this: TaoMessageConsumer, message: IncomingMessage.YoukuAigc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstore} */
  youku_tvosappstore(fn: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosWatch} */
  yunos_watch(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosWatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYoc} */
  yunos_yoc(fn: (this: TaoMessageConsumer, message: IncomingMessage.YunosYoc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ae} */
  ae(fn: (this: TaoMessageConsumer, message: IncomingMessage.Ae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ali} */
  ali(fn: (this: TaoMessageConsumer, message: IncomingMessage.Ali) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alibaba} */
  alibaba(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alibaba) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alicom} */
  alicom(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliexpress} */
  aliexpress(fn: (this: TaoMessageConsumer, message: IncomingMessage.Aliexpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alihealth} */
  alihealth(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alihouse} */
  alihouse(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alihouse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alios} */
  alios(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alios) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alipay} */
  alipay(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alipay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alipic} */
  alipic(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alipic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alisports} */
  alisports(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alisports) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alitrip} */
  alitrip(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alitrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliyun} */
  aliyun(fn: (this: TaoMessageConsumer, message: IncomingMessage.Aliyun) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alsc} */
  alsc(fn: (this: TaoMessageConsumer, message: IncomingMessage.Alsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ascp} */
  ascp(fn: (this: TaoMessageConsumer, message: IncomingMessage.Ascp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Banma} */
  banma(fn: (this: TaoMessageConsumer, message: IncomingMessage.Banma) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Cainiao} */
  cainiao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Cainiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Damai} */
  damai(fn: (this: TaoMessageConsumer, message: IncomingMessage.Damai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ele} */
  ele(fn: (this: TaoMessageConsumer, message: IncomingMessage.Ele) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Eleme} */
  eleme(fn: (this: TaoMessageConsumer, message: IncomingMessage.Eleme) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fliggy} */
  fliggy(fn: (this: TaoMessageConsumer, message: IncomingMessage.Fliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Flyggy} */
  flyggy(fn: (this: TaoMessageConsumer, message: IncomingMessage.Flyggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fuwu} */
  fuwu(fn: (this: TaoMessageConsumer, message: IncomingMessage.Fuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Gaode} */
  gaode(fn: (this: TaoMessageConsumer, message: IncomingMessage.Gaode) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Genie} */
  genie(fn: (this: TaoMessageConsumer, message: IncomingMessage.Genie) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Global} */
  global(fn: (this: TaoMessageConsumer, message: IncomingMessage.Global) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Gov} */
  gov(fn: (this: TaoMessageConsumer, message: IncomingMessage.Gov) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Icbu} */
  icbu(fn: (this: TaoMessageConsumer, message: IncomingMessage.Icbu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Idle} */
  idle(fn: (this: TaoMessageConsumer, message: IncomingMessage.Idle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Intime} */
  intime(fn: (this: TaoMessageConsumer, message: IncomingMessage.Intime) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Jae} */
  jae(fn: (this: TaoMessageConsumer, message: IncomingMessage.Jae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Jym} */
  jym(fn: (this: TaoMessageConsumer, message: IncomingMessage.Jym) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lark} */
  lark(fn: (this: TaoMessageConsumer, message: IncomingMessage.Lark) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lianfan} */
  lianfan(fn: (this: TaoMessageConsumer, message: IncomingMessage.Lianfan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lingyang} */
  lingyang(fn: (this: TaoMessageConsumer, message: IncomingMessage.Lingyang) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lst} */
  lst(fn: (this: TaoMessageConsumer, message: IncomingMessage.Lst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Niaochao} */
  niaochao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Niaochao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Selected} */
  selected(fn: (this: TaoMessageConsumer, message: IncomingMessage.Selected) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Taobao} */
  taobao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Taobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Taotao} */
  taotao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Taotao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Tmall} */
  tmall(fn: (this: TaoMessageConsumer, message: IncomingMessage.Tmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Tobao} */
  tobao(fn: (this: TaoMessageConsumer, message: IncomingMessage.Tobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Trip} */
  trip(fn: (this: TaoMessageConsumer, message: IncomingMessage.Trip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Umeng} */
  umeng(fn: (this: TaoMessageConsumer, message: IncomingMessage.Umeng) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Wdk} */
  wdk(fn: (this: TaoMessageConsumer, message: IncomingMessage.Wdk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Xhotel} */
  xhotel(fn: (this: TaoMessageConsumer, message: IncomingMessage.Xhotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Xianyu} */
  xianyu(fn: (this: TaoMessageConsumer, message: IncomingMessage.Xianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Youku} */
  youku(fn: (this: TaoMessageConsumer, message: IncomingMessage.Youku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Yunos} */
  yunos(fn: (this: TaoMessageConsumer, message: IncomingMessage.Yunos) => void): TaoMessageConsumer;
}

declare interface TaoEventsListener {
  /** {@link IncomingMessage.AeLogisticsTrackingNoUpdate AE > 运单号修改} */
  on(topic: 'ae_logistics_TrackingNoUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AeLogisticsTrackingNoUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliFinDybClaimResult 阿里金融 > 阿里场景金融大延保理赔结果通知给服务商} */
  on(topic: 'ali_fin_DybClaimResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliFinDybClaimResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodeptCaseFilingInfo 网上法庭 > 网上法庭数据交换消息} */
  on(topic: 'ali_infodept_CaseFilingInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodeptCaseFilingInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodeptPreserveEvidence 网上法庭 > 证件保全通知} */
  on(topic: 'ali_infodept_PreserveEvidence', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodeptPreserveEvidence) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodeptYuncourtMsg 网上法庭 > 网上法庭开放平台消息} */
  on(topic: 'ali_infodept_YuncourtMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodeptYuncourtMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabIotDevice 自动驾驶API > 自动驾驶iot设备消息} */
  on(topic: 'alibaba_adlab_IotDevice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabIotDevice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemEtaUpdate 自动驾驶API > 包裹eta更新} */
  on(topic: 'alibaba_adlab_OrderItemEtaUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemEtaUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabOrderItemStatus 自动驾驶API > 包裹配送状态更新} */
  on(topic: 'alibaba_adlab_OrderItemStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabOrderItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlabPackageCheckIn 自动驾驶API > 包裹入库消息} */
  on(topic: 'alibaba_adlab_PackageCheckIn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlabPackageCheckIn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroAccountConfirmPrice 蜂巢 > 分销商同意或者拒绝调价} */
  on(topic: 'alibaba_agro_AccountConfirmPrice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroAccountConfirmPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroItemPriceChange 蜂巢 > 商品调价通知isv} */
  on(topic: 'alibaba_agro_ItemPriceChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroItemPriceChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroLogisticsOrderStatusChange 蜂巢 > 子物流单状态变化小} */
  on(topic: 'alibaba_agro_LogisticsOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroLogisticsOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgroUnpunishProduct 蜂巢 > 取消铺货产品下架} */
  on(topic: 'alibaba_agro_UnpunishProduct', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgroUnpunishProduct) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilabsAutocarNofity 无人车 > 无人车消息推送} */
  on(topic: 'alibaba_ailabs_AutocarNofity', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilabsAutocarNofity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilbasIotMessage 精灵IOT > 精灵iot消息} */
  on(topic: 'alibaba_ailbas_IotMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilbasIotMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentActualDepartureNote AIS&供应商数据对接 > 部件实际发货通知} */
  on(topic: 'alibaba_ais_SupplierComponentActualDepartureNote', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentActualDepartureNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentDeductionPlanNote AIS&供应商数据对接 > 部件扣料计划反馈通知} */
  on(topic: 'alibaba_ais_SupplierComponentDeductionPlanNote', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentDeductionPlanNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentEstimatedArrivalNote AIS&供应商数据对接 > 部件预计到货通知-ETA} */
  on(topic: 'alibaba_ais_SupplierComponentEstimatedArrivalNote', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentEstimatedArrivalNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentInventoryNote AIS&供应商数据对接 > 订阅整机库存反馈通知} */
  on(topic: 'alibaba_ais_SupplierComponentInventoryNote', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentInventoryNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentManufactureOrderNote AIS&供应商数据对接 > 订阅整机生产指令通知} */
  on(topic: 'alibaba_ais_SupplierComponentManufactureOrderNote', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentManufactureOrderNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentMpnPnNote AIS&供应商数据对接 > 订阅MPN/PN查询通知} */
  on(topic: 'alibaba_ais_SupplierComponentMpnPnNote', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentMpnPnNote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAisSupplierComponentPurchaseDirective AIS&供应商数据对接 > 阿里向整机供应商下发部件采购指令} */
  on(topic: 'alibaba_ais_SupplierComponentPurchaseDirective', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAisSupplierComponentPurchaseDirective) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliabsTmallSign 蚂蚁安全 > ailabs蚂蚁安全异步消息} */
  on(topic: 'alibaba_aliabs_TmallSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliabsTmallSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicomFlowGiftSendNotify 阿里通信 > 阿里通信流量统一营销赠品发放通知} */
  on(topic: 'alibaba_alicom_FlowGiftSendNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicomFlowGiftSendNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthBillProcessStatusNotify 阿里健康 > 单据处理状态通知} */
  on(topic: 'alibaba_alihealth_BillProcessStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthBillProcessStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthDoctorMessage 阿里健康 > 医生、服务相关消息} */
  on(topic: 'alibaba_alihealth_DoctorMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthDoctorMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmBizStatusChange 阿里健康 > 售药机营业、歇业消息} */
  on(topic: 'alibaba_alihealth_MvmBizStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmBizStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmInventorySwitch 阿里健康 > 售药机商品库存切换} */
  on(topic: 'alibaba_alihealth_MvmInventorySwitch', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmInventorySwitch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmOrderNotify 阿里健康 > 接单/拒单/取货成功/取消订单消息通知} */
  on(topic: 'alibaba_alihealth_MvmOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmOrderOfflineSync 阿里健康 > 售药机线下订单生成通知} */
  on(topic: 'alibaba_alihealth_MvmOrderOfflineSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmOrderOfflineSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmShopBindStatusChange 阿里健康 > 售药机绑定、解绑} */
  on(topic: 'alibaba_alihealth_MvmShopBindStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmShopBindStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthMvmUpdateInventory 阿里健康 > 售药机商品上下架} */
  on(topic: 'alibaba_alihealth_MvmUpdateInventory', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthMvmUpdateInventory) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange 阿里健康 > 中台订单状态变化推送} */
  on(topic: 'alibaba_alihealth_NrmopOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthNrmopOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthOrderStatusChange 阿里健康 > 平台通知三方机构"订单状态变更"} */
  on(topic: 'alibaba_alihealth_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthPrescriptionConfirm 阿里健康 > 处方平台处方核销消息} */
  on(topic: 'alibaba_alihealth_PrescriptionConfirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthPrescriptionConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeOrderStatusChange 阿里健康 > O2O订单状态变更通知} */
  on(topic: 'alibaba_alihealth_TradeOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange 阿里健康 > 疫苗交易预约信息变动} */
  on(topic: 'alibaba_alihealth_TradeVaccineSubscribeChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthTradeVaccineSubscribeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealthVcRegisterCancel 阿里健康 > 用户取消订阅缺苗登记同步isv} */
  on(topic: 'alibaba_alihealth_VcRegisterCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealthVcRegisterCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceDataPush 阿里物联 > 设备数据推送} */
  on(topic: 'alibaba_alink_DeviceDataPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlinkDeviceMessage 阿里物联 > 设备报警消息} */
  on(topic: 'alibaba_alink_DeviceMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlinkDeviceMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinAxbCallRecord 阿里通信 > axb通话记录} */
  on(topic: 'alibaba_aliqin_AxbCallRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinAxbCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinAxbCallRelease 阿里通信 > 通话结束时产生的通话记录} */
  on(topic: 'alibaba_aliqin_AxbCallRelease', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinAxbCallRelease) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR 阿里通信 > 数字短信模板审批回执} */
  on(topic: 'alibaba_aliqin_DigitalSmsTemplateDR', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinDigitalSmsTemplateDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcActiveIotcard 阿里通信 > 物联网卡激活通知} */
  on(topic: 'alibaba_aliqin_FcActiveIotcard', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcActiveIotcard) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  on(topic: 'alibaba_aliqin_FcCallCdr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCallRecord 阿里通信 > 录音回执} */
  on(topic: 'alibaba_aliqin_FcCallRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinFcCodeSmsUp 阿里通信 > 编码发送短信上行消息} */
  on(topic: 'alibaba_aliqin_FcCodeSmsUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinFcCodeSmsUp) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaAliqinIotCurFlowLimitNotice 阿里通信 > 物联网卡剩余流量提醒} */
  on(topic: 'alibaba_aliqin_IotCurFlowLimitNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotCurFlowLimitNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice 阿里通信 > 实名认证结果通知} */
  on(topic: 'alibaba_aliqin_IotPersonalConfirmNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotPersonalConfirmNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinIotStatusNotice 阿里通信 > 物联网停机消息通知} */
  on(topic: 'alibaba_aliqin_IotStatusNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinIotStatusNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinMiuaCallRecord 阿里通信 > Miua通话记录Top推送} */
  on(topic: 'alibaba_aliqin_MiuaCallRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinMiuaCallRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinPlatformMonitorRecord 阿里通信 > 平台监控记录} */
  on(topic: 'alibaba_aliqin_PlatformMonitorRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinPlatformMonitorRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcCallCdr 阿里通信 > 语音呼叫结果推送} */
  on(topic: 'alibaba_aliqin_TaFcCallCdr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcCallCdr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqinTaFcSmsDR 阿里通信 > 聚石塔短消息发送结果报告} */
  on(topic: 'alibaba_aliqin_TaFcSmsDR', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqinTaFcSmsDR) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlisportsFishingTest 阿里体育 > 钓鱼测试消息} */
  on(topic: 'alibaba_alisports_FishingTest', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlisportsFishingTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderAudit 集采 > 集采订单审核通知} */
  on(topic: 'alibaba_ascpchannelmanagermentmsg_OrderAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderClose 集采 > 集采订单关闭通知} */
  on(topic: 'alibaba_ascpchannelmanagermentmsg_OrderClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderDeliver 集采 > 集采订单发货通知} */
  on(topic: 'alibaba_ascpchannelmanagermentmsg_OrderDeliver', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsgOrderDeliver) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCfoAccountFlowNotify TMI付款及银行支行主数据 > 账号流水通知消息} */
  on(topic: 'alibaba_cfo_AccountFlowNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCfoAccountFlowNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCfoReturnInfo TMI付款及银行支行主数据 > 退票相关消息} */
  on(topic: 'alibaba_cfo_ReturnInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCfoReturnInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCouponOpenCouponDraw 券开放消息权限包 > 用户领取券消息通知} */
  on(topic: 'alibaba_coupon_OpenCouponDraw', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCouponOpenCouponDraw) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrmOutboundInfoMessage ICBU-CRM智能机器人外呼沟通 > 外呼名单消息发送} */
  on(topic: 'alibaba_crm_OutboundInfoMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrmOutboundInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrowdsourcingMaterial - > 素材生成通知} */
  on(topic: 'alibaba_crowdsourcing_Material', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrowdsourcingMaterial) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrDonatePointSync 公益三小时公共 > 公益三小时积分捐行为同步} */
  on(topic: 'alibaba_csr_DonatePointSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrDonatePointSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceExecProgress 公益三小时公共 > 精准捐需求执行记录同步} */
  on(topic: 'alibaba_csr_OpenWorkbenchTargetedInstanceExecProgress', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceExecProgress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceFeedbackStateChange 公益三小时公共 > 精准捐需求反馈记录状态变更} */
  on(topic: 'alibaba_csr_OpenWorkbenchTargetedInstanceFeedbackStateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceFeedbackStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceStateChange 公益三小时公共 > 精准捐需求状态变更} */
  on(topic: 'alibaba_csr_OpenWorkbenchTargetedInstanceStateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrOpenWorkbenchTargetedInstanceStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsrZhiyuanhuiSyncEnergy 公益三小时公共 > 3小时积分捐同步活力值到志愿汇} */
  on(topic: 'alibaba_csr_ZhiyuanhuiSyncEnergy', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsrZhiyuanhuiSyncEnergy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationAidesignFinish 阿里楼盘 > AI设计方案状态变更通知} */
  on(topic: 'alibaba_decoration_AidesignFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationAidesignFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationApartmentExport 阿里楼盘 > 生成户型图消息} */
  on(topic: 'alibaba_decoration_ApartmentExport', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationApartmentExport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationDamoStatusChange 阿里楼盘 > 达摩院户型图消息推送} */
  on(topic: 'alibaba_decoration_DamoStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationDamoStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationExternalAccountFinish 阿里楼盘 > 账号绑定消息} */
  on(topic: 'alibaba_decoration_ExternalAccountFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationExternalAccountFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecorationHousethreedImage 阿里楼盘 > 生成3d全屋漫游图后的消息} */
  on(topic: 'alibaba_decoration_HousethreedImage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecorationHousethreedImage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceApplyUpdate 电子发票 > 发票申请单状态变更通知} */
  on(topic: 'alibaba_einvoice_ApplyUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceApplyUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceCompanyDoAction 电子发票 > 商户事件触发消息} */
  on(topic: 'alibaba_einvoice_CompanyDoAction', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceCompanyDoAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceDeviceOperation 电子发票 > 设备绑定变化消息通知} */
  on(topic: 'alibaba_einvoice_DeviceOperation', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceDeviceOperation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceMerchantAbilityUpdate 电子发票 > 开票能力变更通知} */
  on(topic: 'alibaba_einvoice_MerchantAbilityUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceMerchantAbilityUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefund 电子发票 > 订购单退款通知} */
  on(topic: 'alibaba_einvoice_OrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceOrderRefundResult 电子发票 > 订购单退款审核结果通知} */
  on(topic: 'alibaba_einvoice_OrderRefundResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceOrderRefundResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowChange 电子发票 > 入驻工单状态变更消息} */
  on(topic: 'alibaba_einvoice_RegisterFlowChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRegisterFlowCreate 电子发票 > 入驻工单创建消息} */
  on(topic: 'alibaba_einvoice_RegisterFlowCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRegisterFlowCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceRenewOrder 电子发票 > 订购单续约通知} */
  on(topic: 'alibaba_einvoice_RenewOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceRenewOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoiceTaxDeviceOrder 电子发票 > 增购税控设备触发消息} */
  on(topic: 'alibaba_einvoice_TaxDeviceOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoiceTaxDeviceOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEslSendMsgAliyun ESL > 给阿里云发送消息} */
  on(topic: 'alibaba_esl_SendMsgAliyun', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEslSendMsgAliyun) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuOrderPaid 1688服务市场 > 订单支付消息} */
  on(topic: 'alibaba_fuwu_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuTradeAction 1688服务市场 > 外贸服务市场订单变更消息} */
  on(topic: 'alibaba_fuwu_TradeAction', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuTradeAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwuTradePayAction 1688服务市场 > ICBU服务市场交易支付消息} */
  on(topic: 'alibaba_fuwu_TradePayAction', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwuTradePayAction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappyfinanceInNotify 娱乐宝 > CP入驻通知} */
  on(topic: 'alibaba_happyfinance_InNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappyfinanceInNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripOrderNotify 欢行开放平台 > 欢行统一订单模型变更通知消息} */
  on(topic: 'alibaba_happytrip_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytripOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytripTravelApplyStateNotify 欢行开放平台 > 差旅申请单状态变更同步} */
  on(topic: 'alibaba_happytrip_TravelApplyStateNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytripTravelApplyStateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceCancel 汇金销项票 > 汇金销项票作废通知} */
  on(topic: 'alibaba_hj_InvoiceCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceFileUpload 汇金销项票 > 汇金销项票文件上传通知} */
  on(topic: 'alibaba_hj_InvoiceFileUpload', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceFileUpload) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceIssue 汇金销项票 > 汇金销项票开具通知} */
  on(topic: 'alibaba_hj_InvoiceIssue', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceIssue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceRedIssue 汇金销项票 > 汇金销项票冲红通知} */
  on(topic: 'alibaba_hj_InvoiceRedIssue', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceRedIssue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceReject 汇金销项票 > 汇金销项票开票拒绝通知} */
  on(topic: 'alibaba_hj_InvoiceReject', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceReject) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceReturnReject 汇金销项票 > 汇金销项票拒绝退票通知} */
  on(topic: 'alibaba_hj_InvoiceReturnReject', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceReturnReject) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceSend 汇金销项票 > 汇金销项票发票寄送通知} */
  on(topic: 'alibaba_hj_InvoiceSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHjInvoiceUnissue 汇金销项票 > 汇金销项票待开通知} */
  on(topic: 'alibaba_hj_InvoiceUnissue', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHjInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHomestylerAigcContentImageGenerateCallback 洞窝 > 设计家aigc生图结果消息通知} */
  on(topic: 'alibaba_homestyler_AigcContentImageGenerateCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHomestylerAigcContentImageGenerateCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHomestylerAigcPanoramaReplaceCallback 洞窝 > 洞窝全景图替换消息回调} */
  on(topic: 'alibaba_homestyler_AigcPanoramaReplaceCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHomestylerAigcPanoramaReplaceCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIcbuliveCommentNotice ICBU > 直播评论通知} */
  on(topic: 'alibaba_icbulive_CommentNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIcbuliveCommentNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIcbuliveEnterNotice ICBU > 直播观众进场通知} */
  on(topic: 'alibaba_icbulive_EnterNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIcbuliveEnterNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleApplyInfoSyn 闲鱼 > 灵活用工报名信息同步} */
  on(topic: 'alibaba_idle_ApplyInfoSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleApplyInfoSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleHouseStatusNotify 闲鱼 > 闲鱼房源状态变更通知} */
  on(topic: 'alibaba_idle_HouseStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleHouseStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleJobItemChangeStatusNotify 闲鱼 > 岗位状态变更通知} */
  on(topic: 'alibaba_idle_JobItemChangeStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleJobItemChangeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdleLocalMessageNotify 闲鱼 > 闲鱼KA商家询单消息通知} */
  on(topic: 'alibaba_idle_LocalMessageNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdleLocalMessageNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIfpPackageCfcContainer 五道口配送 > 同城履约包裹状态变更消息} */
  on(topic: 'alibaba_ifp_PackageCfcContainer', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIfpPackageCfcContainer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopGoodsChange 采购系统 > 采购系统商品消息变更消息} */
  on(topic: 'alibaba_infop_GoodsChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopGoodsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopPRAudited 采购系统 > PR 审批完成通知} */
  on(topic: 'alibaba_infop_PRAudited', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopPRAudited) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopRcvAuditStatusChange 采购系统 > 采购系统接收单状态变更通知} */
  on(topic: 'alibaba_infop_RcvAuditStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopRcvAuditStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfopRcvCreateSuccess 采购系统 > 接收单创建成功通知} */
  on(topic: 'alibaba_infop_RcvCreateSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfopRcvCreateSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIntimeServiceOrderCreateUpdate 银泰 > 银泰服务订单创建&更新} */
  on(topic: 'alibaba_intime_ServiceOrderCreateUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIntimeServiceOrderCreateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayApply 电子发票 > 开票申请(支付宝专用)} */
  on(topic: 'alibaba_invoice_AlipayApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayApplyResult 电子发票 > 开票申请审核结果(支付宝专用)} */
  on(topic: 'alibaba_invoice_AlipayApplyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayCreateReq 电子发票 > 开票请求(支付宝专用)} */
  on(topic: 'alibaba_invoice_AlipayCreateReq', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayCreateReq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceAlipayResultReturn 电子发票 > 开票请求结果(支付宝专用)} */
  on(topic: 'alibaba_invoice_AlipayResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceAlipayResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApply 电子发票 > 开票申请} */
  on(topic: 'alibaba_invoice_Apply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyDisagree 电子发票 > 商家拒绝开票} */
  on(topic: 'alibaba_invoice_ApplyDisagree', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyDisagree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceApplyResult 电子发票 > 开票申请审核结果} */
  on(topic: 'alibaba_invoice_ApplyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceChangePaper 电子发票 > 电换纸消息} */
  on(topic: 'alibaba_invoice_ChangePaper', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceChangePaper) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceClerkStatusChange 电子发票 > 商户店员状态变更} */
  on(topic: 'alibaba_invoice_ClerkStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceClerkStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceCreateReq 电子发票 > 开票请求消息} */
  on(topic: 'alibaba_invoice_CreateReq', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceCreateReq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskMail 电子发票 > 商家邮寄税控盘消息} */
  on(topic: 'alibaba_invoice_DiskMail', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskMail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceDiskOffline 电子发票 > 税盘下架单新增和更新通知} */
  on(topic: 'alibaba_invoice_DiskOffline', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceDiskOffline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceFlowBuket 电子发票 > 资源包开通/订购记录同步} */
  on(topic: 'alibaba_invoice_FlowBuket', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceFlowBuket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceGetXmlFile 电子发票 > 获取xml发票文件} */
  on(topic: 'alibaba_invoice_GetXmlFile', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceGetXmlFile) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceHxQuery 电子发票 > 830平台查询单机盒子消息} */
  on(topic: 'alibaba_invoice_HxQuery', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceHxQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeCertificateResult 电子发票 > 进项发票认证结果通知} */
  on(topic: 'alibaba_invoice_IncomeCertificateResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeCertificateResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeOcrResult 电子发票 > ocr结果通知} */
  on(topic: 'alibaba_invoice_IncomeOcrResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeOcrResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeScanResult 电子发票 > 进项扫描结果通知} */
  on(topic: 'alibaba_invoice_IncomeScanResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeScanResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceIncomeVerifyResult 电子发票 > 进项查验结果通知} */
  on(topic: 'alibaba_invoice_IncomeVerifyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceIncomeVerifyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInnerResultReturn 电子发票 > 开票请求结果(内部专用)} */
  on(topic: 'alibaba_invoice_InnerResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInnerResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceInvoiceApply 电子发票 > 税控服务开票申请} */
  on(topic: 'alibaba_invoice_InvoiceApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceInvoiceApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceItemNoSwitch 电子发票 > 税号商品编码切换消息} */
  on(topic: 'alibaba_invoice_ItemNoSwitch', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceItemNoSwitch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceLogistics 电子发票 > 发票对外通知物流信息} */
  on(topic: 'alibaba_invoice_Logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceMakeUp 电子发票 > 补开票消息} */
  on(topic: 'alibaba_invoice_MakeUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceMakeUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePaperOpsReturn 电子发票 > 纸票操作结果回传（打印、作废等）} */
  on(topic: 'alibaba_invoice_PaperOpsReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePaperOpsReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoicePreConsulting 电子发票 > 电子发票售前咨询} */
  on(topic: 'alibaba_invoice_PreConsulting', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoicePreConsulting) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceProxyCreateReq 电子发票 > 开票请求消息} */
  on(topic: 'alibaba_invoice_ProxyCreateReq', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceProxyCreateReq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceProxyCreateReqTest 电子发票 > 开票请求消息影子Topic} */
  on(topic: 'alibaba_invoice_ProxyCreateReqTest', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceProxyCreateReqTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQuery 电子发票 > 数据查询请求} */
  on(topic: 'alibaba_invoice_Query', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceQueryInvoice 电子发票 > 查询发票信息} */
  on(topic: 'alibaba_invoice_QueryInvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceQueryInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRecreateBlue 电子发票 > 订单退款冲红后重开蓝票消息} */
  on(topic: 'alibaba_invoice_RecreateBlue', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRecreateBlue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegist 电子发票 > 入驻阿里发票平台} */
  on(topic: 'alibaba_invoice_Regist', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegist) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegistQuit 电子发票 > 商家请求退出} */
  on(topic: 'alibaba_invoice_RegistQuit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegistQuit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRegistResult 电子发票 > 入驻阿里发票平台结果} */
  on(topic: 'alibaba_invoice_RegistResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRegistResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceResultReturn 电子发票 > 开票请求结果} */
  on(topic: 'alibaba_invoice_ResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceRetryApply 电子发票 > 开票申请失败重试消息} */
  on(topic: 'alibaba_invoice_RetryApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceRetryApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceServiceClose 电子发票 > 服务到期关闭} */
  on(topic: 'alibaba_invoice_ServiceClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceServiceClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceStatusChange 电子发票 > 发票状态变更消息} */
  on(topic: 'alibaba_invoice_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceSubService 电子发票 > 服务子单消息} */
  on(topic: 'alibaba_invoice_SubService', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceSubService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxChange 电子发票 > 商家税号变更} */
  on(topic: 'alibaba_invoice_TaxChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxCodeSwitch 电子发票 > 税号切换商品编码消息} */
  on(topic: 'alibaba_invoice_TaxCodeSwitch', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxCodeSwitch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceTaxOfficeUserkeyReturn 电子发票 > 浙江税局注册商户信息回传} */
  on(topic: 'alibaba_invoice_TaxOfficeUserkeyReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceTaxOfficeUserkeyReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnissue 电子发票 > 创建未开具发票通知} */
  on(topic: 'alibaba_invoice_Unissue', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnissue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnitBuy 电子发票 > 税控单元订购记录同步} */
  on(topic: 'alibaba_invoice_UnitBuy', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnitBuy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceUnitRefund 电子发票 > 税控单元退款消息} */
  on(topic: 'alibaba_invoice_UnitRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceUnitRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoiceVerifyResult 电子发票 > 发票查验结果通知消息} */
  on(topic: 'alibaba_invoice_VerifyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoiceVerifyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJymSteamTradeOrderNotify 交易猫 > 交易猫steam正向消息通知} */
  on(topic: 'alibaba_jym_SteamTradeOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJymSteamTradeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJymSteamTradeRefundNotify 交易猫 > 交易猫steam逆向通知} */
  on(topic: 'alibaba_jym_SteamTradeRefundNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJymSteamTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJymTradeRefundNotify 交易猫 > 交易猫逆向单状态通知} */
  on(topic: 'alibaba_jym_TradeRefundNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJymTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKaolaAlipayTaskFinish 考拉 > 考拉用户完成支付宝任务} */
  on(topic: 'alibaba_kaola_AlipayTaskFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKaolaAlipayTaskFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKaolaSendPromoevent 考拉 > 考拉发送消息到Promoevent} */
  on(topic: 'alibaba_kaola_SendPromoevent', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKaolaSendPromoevent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKongurBusinessMsg 司法开放平台 > 司法开放平台推送消息给提供律师服务的供应商} */
  on(topic: 'alibaba_kongur_BusinessMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKongurBusinessMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassenFileStatusNotify 网上法庭 > 网上法庭证据文件状态变更通知} */
  on(topic: 'alibaba_lassen_FileStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassenFileStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassenLegalCasePaymentOrderNotify 网上法庭 > 发送支付令} */
  on(topic: 'alibaba_lassen_LegalCasePaymentOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassenLegalCasePaymentOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassenLegalCaseStatusNotify 网上法庭 > 网上法庭案件状态变更通知} */
  on(topic: 'alibaba_lassen_LegalCaseStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassenLegalCaseStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLegalMasterdataCompany - > 公司消息变更通知} */
  on(topic: 'alibaba_legal_MasterdataCompany', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLegalMasterdataCompany) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaLstOpenOrderCreate 零售通_公共 > 零售通门店订单创建消息推送} */
  on(topic: 'alibaba_lst_OpenOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstOpenOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstOrderChange 零售通_公共 > 零售通交易订单变更消息} */
  on(topic: 'alibaba_lst_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstRefundChange 零售通_公共 > 订单退单} */
  on(topic: 'alibaba_lst_RefundChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstRefundChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSelfOrderShipChange 零售通_公共 > 线下自有订单发货状态变更消息} */
  on(topic: 'alibaba_lst_SelfOrderShipChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSelfOrderShipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord 零售通_公共 > 如意音箱播放日志} */
  on(topic: 'alibaba_lst_SpeakerAdvertPlayRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSpeakerAdvertPlayRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstSupplierOrderChange 零售通_公共 > 零售通供应商交易订单变更消息} */
  on(topic: 'alibaba_lst_SupplierOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstSupplierOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstVendingInventoryUpdate 零售通_公共 > 自动售货机库存更新消息} */
  on(topic: 'alibaba_lst_VendingInventoryUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstVendingInventoryUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLstVendingTradeCreate 零售通_公共 > 售货机交易创建消息} */
  on(topic: 'alibaba_lst_VendingTradeCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLstVendingTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmcInventorySynchronous MMC五盘货项目 > RT店仓项目-MMC库存增量推送消息} */
  on(topic: 'alibaba_mmc_InventorySynchronous', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmcInventorySynchronous) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaMosSaleOrderDeliver 银泰开放平台消息 > 销售单发货消息} */
  on(topic: 'alibaba_mos_SaleOrderDeliver', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrderDeliver) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosSaleOrderRefund 银泰开放平台消息 > 销售单退款消息} */
  on(topic: 'alibaba_mos_SaleOrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosSaleOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMosTradeOrder 银泰开放平台消息 > 交易订单状态变动} */
  on(topic: 'alibaba_mos_TradeOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMosTradeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsdSettlementBillDetail 天猫服务 > 喵速达服务供应链结算单明细消息} */
  on(topic: 'alibaba_msd_SettlementBillDetail', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsdSettlementBillDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfserviceAuditCreate 天猫服务 > 喵师傅审核单通知} */
  on(topic: 'alibaba_msfservice_AuditCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfserviceAuditCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfserviceExtrafeeRecordCreate 天猫服务 > 喵师傅收费单消息通知} */
  on(topic: 'alibaba_msfservice_ExtrafeeRecordCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfserviceExtrafeeRecordCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfserviceReminderCreate 天猫服务 > 催单消息} */
  on(topic: 'alibaba_msfservice_ReminderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfserviceReminderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMtpItemAddOrUpdate MTP > MTP-商品新建/编辑成功消息} */
  on(topic: 'alibaba_mtp_ItemAddOrUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMtpItemAddOrUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMtpSupplierAddUpdate MTP > 二级供应商入驻/编辑消息} */
  on(topic: 'alibaba_mtp_SupplierAddUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMtpSupplierAddUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaAbandonCert 网上法庭 > 作废存证消息接口} */
  on(topic: 'alibaba_nazca_AbandonCert', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaAbandonCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaQueryChargeNum 网上法庭 > 查询收费数量} */
  on(topic: 'alibaba_nazca_QueryChargeNum', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaQueryChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaSaveCert 网上法庭 > 发起存证消息接口} */
  on(topic: 'alibaba_nazca_SaveCert', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaSaveCert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazcaUpdateChargeNum 网上法庭 > 更新收费数量} */
  on(topic: 'alibaba_nazca_UpdateChargeNum', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazcaUpdateChargeNum) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNewretailPosOrderMessage 本地生活 > 阿里本地生活智慧菜场RTP订单消息} */
  on(topic: 'alibaba_newretail_PosOrderMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNewretailPosOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToBTradeStatusNotify 零售plus > 采购单状态变化通知} */
  on(topic: 'alibaba_nlife_BToBTradeStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToBTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeOrderSync 零售plus > 零售+订单同步消息} */
  on(topic: 'alibaba_nlife_BToCTradeOrderSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToCTradeOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBToCTradeStatusNotify 零售plus > B2C交易订单状态变化通知} */
  on(topic: 'alibaba_nlife_BToCTradeStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBToCTradeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify 零售plus > 采购单发货通知消息} */
  on(topic: 'alibaba_nlife_BtoBTradeDeliverNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeDeliverNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify 零售plus > 采购单生效通知消息} */
  on(topic: 'alibaba_nlife_BtoBTradeEffectiveNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtoBTradeEffectiveNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobRefundInfoNotify 零售plus > 二级供货商批次采退单通知信息} */
  on(topic: 'alibaba_nlife_BtobRefundInfoNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobRefundInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify 零售plus > 采购单退货单确认消息} */
  on(topic: 'alibaba_nlife_BtobTradeRefundConfirmMsgNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundConfirmMsgNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeBtobTradeRefundNotify 零售plus > 采购单退货通知消息} */
  on(topic: 'alibaba_nlife_BtobTradeRefundNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeBtobTradeRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify 零售plus > 供应商审核差异单的通知消息} */
  on(topic: 'alibaba_nlife_InstorageDiffAuditNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeInstorageDiffAuditNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlifeItemUpdate 零售plus > 零售+商品变动消息} */
  on(topic: 'alibaba_nlife_ItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlifeItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaOkkiSpuStatusSync 小满 > 小满商品服务状态同步} */
  on(topic: 'alibaba_okki_SpuStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaOkkiSpuStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPaimaiAlipayConsumeGoldTaskFinish 阿里拍卖 > 支付宝用户完成消费金任务} */
  on(topic: 'alibaba_paimai_AlipayConsumeGoldTaskFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPaimaiAlipayConsumeGoldTaskFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPaimaiCommonPromoTask 阿里拍卖 > 拍卖支付宝营销通用消息} */
  on(topic: 'alibaba_paimai_CommonPromoTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPaimaiCommonPromoTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurContractStatusChange 信息平台-采购 > 合同状态改变发送消息} */
  on(topic: 'alibaba_pur_ContractStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurContractStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurDelSettlementContract 信息平台-采购 > 作废结算合同} */
  on(topic: 'alibaba_pur_DelSettlementContract', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurDelSettlementContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurFaApproveFinished 信息平台-采购 > 入库单审批完成消息广播} */
  on(topic: 'alibaba_pur_FaApproveFinished', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurFaApproveFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoAudited 信息平台-采购 > PO审批完成} */
  on(topic: 'alibaba_pur_PoAudited', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoAudited) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoCancelled 信息平台-采购 > PO作废消息发送} */
  on(topic: 'alibaba_pur_PoCancelled', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoCancelled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoClosed 信息平台-采购 > PO关闭发送消息} */
  on(topic: 'alibaba_pur_PoClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPoNotify 信息平台-采购 > PO状态变更后发送消息通知} */
  on(topic: 'alibaba_pur_PoNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPrApproved 信息平台-采购 > PR审批完成消息通知} */
  on(topic: 'alibaba_pur_PrApproved', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPrApproved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPrDelete 信息平台-采购 > pr删除通知消息} */
  on(topic: 'alibaba_pur_PrDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPrDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPurchaseRequisition 信息平台-采购 > 创建pr} */
  on(topic: 'alibaba_pur_PurchaseRequisition', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPurchaseRequisition) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPurchaseRequisitionCancel 信息平台-采购 > PR作废消息通知} */
  on(topic: 'alibaba_pur_PurchaseRequisitionCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPurchaseRequisitionCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurPurchaseRequisitionDelete 信息平台-采购 > PR删除消息通知} */
  on(topic: 'alibaba_pur_PurchaseRequisitionDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurPurchaseRequisitionDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurRcvNotify 信息平台-采购 > RT状态变更消息通知} */
  on(topic: 'alibaba_pur_RcvNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurRcvNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurResourceOrderCancelNotify 信息平台-采购 > 取消订单结果通知} */
  on(topic: 'alibaba_pur_ResourceOrderCancelNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurResourceOrderCancelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurResourceOrderShipNotify 信息平台-采购 > 发货提醒} */
  on(topic: 'alibaba_pur_ResourceOrderShipNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurResourceOrderShipNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurRtAudited 信息平台-采购 > RT审批完成消息通知} */
  on(topic: 'alibaba_pur_RtAudited', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurRtAudited) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurSettlementContract 信息平台-采购 > 维护结算合同消息发送} */
  on(topic: 'alibaba_pur_SettlementContract', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurSettlementContract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurSupplierChange 信息平台-采购 > 供应商信息变更} */
  on(topic: 'alibaba_pur_SupplierChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurSupplierChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPurVprApproved 信息平台-采购 > VPR审批报价完成发送消息} */
  on(topic: 'alibaba_pur_VprApproved', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPurVprApproved) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaTbdxEBookContent 淘宝电子书 > 电子书内容变更消息} */
  on(topic: 'alibaba_tbdx_EBookContent', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxEBookContent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdxEBookSellerSign 淘宝电子书 > 电子书商家签约消息} */
  on(topic: 'alibaba_tbdx_EBookSellerSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxEBookSellerSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdxEBookUserOrder 淘宝电子书 > 电子书用户下单消息} */
  on(topic: 'alibaba_tbdx_EBookUserOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxEBookUserOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdxPaperPush 淘宝电子书 > 淘宝教育论文查重推送} */
  on(topic: 'alibaba_tbdx_PaperPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdxPaperPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTcLogisticsStatusUpdate 同城 > 同城履约物流状态通知} */
  on(topic: 'alibaba_tc_LogisticsStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTcLogisticsStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursAuthorizationResult 三小时公益 > 授权结果} */
  on(topic: 'alibaba_threehours_AuthorizationResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursAuthorizationResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursDonateStep 三小时公益 > 益起来捐步成功消息} */
  on(topic: 'alibaba_threehours_DonateStep', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursDonateStep) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursUserBindResult 三小时公益 > 用户绑定结果通知} */
  on(topic: 'alibaba_threehours_UserBindResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursUserBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehoursUserJoinActivity 三小时公益 > 用户参与志愿服务活动} */
  on(topic: 'alibaba_threehours_UserJoinActivity', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehoursUserJoinActivity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiContractOrder 阿里通信 > 天机平台合约机供应商订单消息} */
  on(topic: 'alibaba_tianji_ContractOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiContractOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianjiOrderCreate 阿里通信 > 天机平台订单生成通知消息} */
  on(topic: 'alibaba_tianji_OrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianjiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTxdInteractEventNotice 淘鲜达 > 淘鲜达互动事件通知} */
  on(topic: 'alibaba_txd_InteractEventNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTxdInteractEventNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTxdOrderStatusChangeToAlipay 淘鲜达 > 淘鲜达交易状态变化} */
  on(topic: 'alibaba_txd_OrderStatusChangeToAlipay', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTxdOrderStatusChangeToAlipay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaUniTradeStatusNotify 全域收单 > 全域收单交易消息} */
  on(topic: 'alibaba_uni_TradeStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaUniTradeStatusNotify) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaWdkDmsSignError 五道口订单 > 配送异常信消息} */
  on(topic: 'alibaba_wdk_DmsSignError', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkDmsSignError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillOrderChange 五道口订单 > 售中履约变更消息} */
  on(topic: 'alibaba_wdk_FulfillOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkFulfillWarehouseHandover 五道口订单 > 仓配交接消息} */
  on(topic: 'alibaba_wdk_FulfillWarehouseHandover', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkFulfillWarehouseHandover) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkReturnWarehouseStatusChange 五道口订单 > 退仓单物流状态变更通知} */
  on(topic: 'alibaba_wdk_ReturnWarehouseStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkReturnWarehouseStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkStoreItemUpdate 五道口订单 > 商家渠道商品变动消息} */
  on(topic: 'alibaba_wdk_StoreItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkStoreItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaWdkTxdCrmChannelMessagePush 五道口订单 > 外部商家发送push消息} */
  on(topic: 'alibaba_wdk_TxdCrmChannelMessagePush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkTxdCrmChannelMessagePush) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaWdkorderOrderRefundPush 五道口订单 > 猫超订单逆向消息通知商户} */
  on(topic: 'alibaba_wdkorder_OrderRefundPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaWdkorderOrderRefundPush) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaYichaoClaimOrder 天猫服务 > 蚁巢投保理赔消息} */
  on(topic: 'alibaba_yichao_ClaimOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichaoClaimOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYichaoInsuranceUpdate 天猫服务 > 蚁巢保单修改消息} */
  on(topic: 'alibaba_yichao_InsuranceUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichaoInsuranceUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYichaoReportOrder 天猫服务 > 蚁巢报案单更新消息} */
  on(topic: 'alibaba_yichao_ReportOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichaoReportOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunioDataTransfer 平台消息 > YunIO数据流转} */
  on(topic: 'alibaba_yunio_DataTransfer', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunioDataTransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxbSubsEventSync 阿里通信 > 绑定事件同步} */
  on(topic: 'alicom_axb_SubsEventSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxbSubsEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomDeductOrderPay 阿里通信 > 阿里通信代扣订单支付结果消息} */
  on(topic: 'alicom_deduct_OrderPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomDeductOrderPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlowAliPayChargeWalletFlow 阿里通信 > 支付宝流量钱包提取流量} */
  on(topic: 'alicom_flow_AliPayChargeWalletFlow', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlowAliPayChargeWalletFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlowAliPayChargeWalletRed 阿里通信 > 支付宝流量钱包发红包} */
  on(topic: 'alicom_flow_AliPayChargeWalletRed', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlowAliPayChargeWalletRed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlowAliPayWalletFlowDraw 阿里通信 > 支付宝流量钱包领取红包} */
  on(topic: 'alicom_flow_AliPayWalletFlowDraw', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlowAliPayWalletFlowDraw) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeiaTaskplatformInterestNotice AE-任务平台消息 > AE任务平台权益发放通知} */
  on(topic: 'aliexpress_aeia_TaskplatformInterestNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeiaTaskplatformInterestNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAftersaleinsuranceMessageFromAE AE > AE发送给蚂蚁保险的消息} */
  on(topic: 'aliexpress_aftersaleinsurance_MessageFromAE', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAftersaleinsuranceMessageFromAE) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAftersaleinsuranceMessageFromAnt AE > 蚂蚁保险消息-蚂蚁发出到AE} */
  on(topic: 'aliexpress_aftersaleinsurance_MessageFromAnt', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAftersaleinsuranceMessageFromAnt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressMessagePushnewmsg AE > 站内信新消息主动推送} */
  on(topic: 'aliexpress_message_Pushnewmsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressMessagePushnewmsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllFinish AE-交易 > 交易成功} */
  on(topic: 'aliexpress_order_AllFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllFulfillmentOrderCreated AE-交易 > 等待卖家发货（所有卖家的订单）} */
  on(topic: 'aliexpress_order_AllFulfillmentOrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllFulfillmentOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllSellerPartSendGoods AE-交易 > 卖家部分发货（所有卖家的订单）} */
  on(topic: 'aliexpress_order_AllSellerPartSendGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllSellerPartSendGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrderAllWaitBuyerAcceptGoods AE-交易 > 等待买家收货} */
  on(topic: 'aliexpress_order_AllWaitBuyerAcceptGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrderAllWaitBuyerAcceptGoods) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AliexpressTradeOrderNotify AE > AE订单状态通知} */
  on(topic: 'aliexpress_trade_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressTradeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarrantyCreateWarrantyOrderByPms AE > 发送保修单消息ByPms} */
  on(topic: 'aliexpress_warranty_CreateWarrantyOrderByPms', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarrantyCreateWarrantyOrderByPms) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAE AE > 保修商消息-AE} */
  on(topic: 'aliexpress_warranty_WarrantyOrderMessageFromAE', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAE) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAliExpress AE > 保修商消息-AliExpress} */
  on(topic: 'aliexpress_warranty_WarrantyOrderMessageFromAliExpress', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarrantyWarrantyOrderMessageFromAliExpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCepOrderStatusChange 平台消息 > 孔雀翎订单消息通知} */
  on(topic: 'alihealth_cep_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCepOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthHbPushPatientCardToHis 阿里健康 > 患者就诊卡推送至医院进行验证} */
  on(topic: 'alihealth_hb_PushPatientCardToHis', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthHbPushPatientCardToHis) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthHbPushPrescriptionToYh 阿里健康 > 处方推送给银海} */
  on(topic: 'alihealth_hb_PushPrescriptionToYh', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthHbPushPrescriptionToYh) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthTestTmcCreate 阿里健康 > 阿里健康测试消息} */
  on(topic: 'alihealth_test_TmcCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthTestTmcCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderMemConsume 阿里健康&一树-电商中台对接 > 订单支付成功推送} */
  on(topic: 'alihealth_ys_OrderMemConsume', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderMemConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderPushConsume 阿里健康&一树-电商中台对接 > 一树孔雀翎订单付款通知} */
  on(topic: 'alihealth_ys_OrderPushConsume', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderPushConsume) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsOrderRefund 阿里健康&一树-电商中台对接 > 订单退款成功推送} */
  on(topic: 'alihealth_ys_OrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipChange 阿里健康&一树-电商中台对接 > 会员变动} */
  on(topic: 'alihealth_ys_VipChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipIntegralChange 阿里健康&一树-电商中台对接 > 会员积分变动} */
  on(topic: 'alihealth_ys_VipIntegralChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipIntegralChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipIntegralSync 阿里健康&一树-电商中台对接 > 会员积分同步} */
  on(topic: 'alihealth_ys_VipIntegralSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipIntegralSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYsVipSync 阿里健康&一树-电商中台对接 > 会员信息同步} */
  on(topic: 'alihealth_ys_VipSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYsVipSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerActionClueId 阿里楼盘 > 动作线索消息} */
  on(topic: 'alihouse_customer_ActionClueId', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerActionClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerAppNoteSync 阿里楼盘 > 来客通_备注信息同步} */
  on(topic: 'alihouse_customer_AppNoteSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerAppNoteSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerBehaviorClueId 阿里楼盘 > 用户行为线索产出} */
  on(topic: 'alihouse_customer_BehaviorClueId', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerBehaviorClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerBehaviorClueMsg 阿里楼盘 > 新二租归一表单线索消息通知} */
  on(topic: 'alihouse_customer_BehaviorClueMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerBehaviorClueMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerImMsg 阿里楼盘 > IM线索消息通知} */
  on(topic: 'alihouse_customer_ImMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerImMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerRemindNotice 阿里楼盘 > 用户关注提醒消息} */
  on(topic: 'alihouse_customer_RemindNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerRemindNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerRentBehaviorClueId 阿里楼盘 > 租房用户行为线索消息通知} */
  on(topic: 'alihouse_customer_RentBehaviorClueId', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerRentBehaviorClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomerSecondBehaviorClueId 阿里楼盘 > 二手房用户行为线索消息通知} */
  on(topic: 'alihouse_customer_SecondBehaviorClueId', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomerSecondBehaviorClueId) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseHouseProjectAudit 阿里楼盘 > 楼盘消息审核} */
  on(topic: 'alihouse_house_ProjectAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseHouseProjectAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseHouseProjectSaleAudit 阿里楼盘 > 天猫好房商品审核结果通知} */
  on(topic: 'alihouse_house_ProjectSaleAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseHouseProjectSaleAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosCosmoStreamPush AliOS COSMO > 流式API} */
  on(topic: 'alios_cosmo_StreamPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliosCosmoStreamPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosWatchNotifyMessagePush AliOS手表 > 消息推送服务} */
  on(topic: 'alios_watch_NotifyMessagePush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliosWatchNotifyMessagePush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosWatchPassthroughMessagePush AliOS手表 > 透传消息} */
  on(topic: 'alios_watch_PassthroughMessagePush', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliosWatchPassthroughMessagePush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayAeTradePreloan 支付宝 > AE提前放款} */
  on(topic: 'alipay_ae_TradePreloan', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayAeTradePreloan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayAeTradePreloanNew 支付宝 > AE提前放款新链路} */
  on(topic: 'alipay_ae_TradePreloanNew', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayAeTradePreloanNew) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaomingMsg 支付宝 > 活动报名消息} */
  on(topic: 'alipay_baoming_Msg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaomingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoxianPolicySyncAuthorize 支付宝 > 保险线下同步授权消息} */
  on(topic: 'alipay_baoxian_PolicySyncAuthorize', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoxianPolicySyncAuthorize) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoxianPolicySyncCancel 支付宝 > 保险线下同步解除授权消息} */
  on(topic: 'alipay_baoxian_PolicySyncCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoxianPolicySyncCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayCharityThreeHoursBillSync 支付宝 > 支付宝公益平台实时同步淘宝公益三小时流水} */
  on(topic: 'alipay_charity_ThreeHoursBillSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayCharityThreeHoursBillSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderClosed 支付宝 > 采购单关闭} */
  on(topic: 'alipay_fenxiao_FxOrderClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderCreate 支付宝 > 采购单创建} */
  on(topic: 'alipay_fenxiao_FxOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderModifyPrice 支付宝 > 改价} */
  on(topic: 'alipay_fenxiao_FxOrderModifyPrice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderModifyPrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderPaid 支付宝 > 采购单付款} */
  on(topic: 'alipay_fenxiao_FxOrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderShipped 支付宝 > 采购单发货} */
  on(topic: 'alipay_fenxiao_FxOrderShipped', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderShipped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderSuccess 支付宝 > 采购成功} */
  on(topic: 'alipay_fenxiao_FxOrderSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiaoFxOrderTransfered 支付宝 > 采购单结算完成} */
  on(topic: 'alipay_fenxiao_FxOrderTransfered', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiaoFxOrderTransfered) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundDispute 支付宝 > 新退款消息} */
  on(topic: 'alipay_refund_Dispute', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundDispute) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundRefundClosed 支付宝 > 退款关闭} */
  on(topic: 'alipay_refund_RefundClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundRefundCreated 支付宝 > 退款消息} */
  on(topic: 'alipay_refund_RefundCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefundRefundSuccess 支付宝 > 退款成功消息} */
  on(topic: 'alipay_refund_RefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefundRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayScfAdvance 支付宝 > 支付宝菜鸟消息} */
  on(topic: 'alipay_scf_Advance', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayScfAdvance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeAdvanceDisburse 支付宝 > 订单极速放款成功} */
  on(topic: 'alipay_trade_AdvanceDisburse', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeAdvanceDisburse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeBuyerPay 支付宝 > 买家付款} */
  on(topic: 'alipay_trade_BuyerPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeFakeTrade 支付宝 > 虚假交易订单} */
  on(topic: 'alipay_trade_FakeTrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeFakeTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeAlipayCreate 支付宝 > 支付宝订单号创建} */
  on(topic: 'alipay_trade_TradeAlipayCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeBuyerClose 支付宝 > 买家关闭订单} */
  on(topic: 'alipay_trade_TradeBuyerClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeBuyerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeBuyerStepPay 支付宝 > 阶段付款} */
  on(topic: 'alipay_trade_TradeBuyerStepPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeBuyerStepPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeCreate 支付宝 > 订单创建} */
  on(topic: 'alipay_trade_TradeCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradePartlyConfirmPay 支付宝 > 部分收货} */
  on(topic: 'alipay_trade_TradePartlyConfirmPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradePartlyConfirmPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradePeriodSuccess 支付宝 > 交易阶段成功} */
  on(topic: 'alipay_trade_TradePeriodSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradePeriodSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeSellerShip 支付宝 > 订单发货} */
  on(topic: 'alipay_trade_TradeSellerShip', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTradeTradeSuccess 支付宝 > 交易成功} */
  on(topic: 'alipay_trade_TradeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayUpdateSeller 支付宝 > 卖家信息变更} */
  on(topic: 'alipay_update_Seller', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayUpdateSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayXiaodaiSignNotify 阿里金融 > 阿里金融签约通知} */
  on(topic: 'alipay_xiaodai_SignNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayXiaodaiSignNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLarkJiayingDataReport ALIPIC > 佳影数据上云} */
  on(topic: 'alipic_lark_JiayingDataReport', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLarkJiayingDataReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLarkResultDataDownlink ALIPIC > POS配置态数据增量下行} */
  on(topic: 'alipic_lark_ResultDataDownlink', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLarkResultDataDownlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLarkSchedulesDataDownlink ALIPIC > 排期列表数据增量下行} */
  on(topic: 'alipic_lark_SchedulesDataDownlink', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLarkSchedulesDataDownlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlisportsBankAlipayattention 支付宝体育 > 支付宝体育服务小程序关注消息} */
  on(topic: 'alisports_bank_Alipayattention', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlisportsBankAlipayattention) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgentNotify 淘宝机票 > 商家机票业务通知} */
  on(topic: 'alitrip_agent_Notify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgentNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripCorpSignCallback 商旅API > 阿里商旅企业签约结果回调} */
  on(topic: 'alitrip_btrip_CorpSignCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripCorpSignCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtripExceedApplySubmit 商旅API > 阿里商旅企业超标审批单提交消息} */
  on(topic: 'alitrip_btrip_ExceedApplySubmit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtripExceedApplySubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtriphotelRpAudit 商旅API > 商旅酒店rp发布审核} */
  on(topic: 'alitrip_btriphotel_RpAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtriphotelRpAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingActivityAudit 商旅API > tmc营销审核消息} */
  on(topic: 'alitrip_ebooking_ActivityAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingActivityAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingActivityChange 商旅API > EBK天天特惠营销活动变更} */
  on(topic: 'alitrip_ebooking_ActivityChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingActivityChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingCreateRatePlan 商旅API > 通知生成RatePlan消息} */
  on(topic: 'alitrip_ebooking_CreateRatePlan', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingCreateRatePlan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingRepostMessage 商旅API > alitrip_ebooking_RepostMessage} */
  on(topic: 'alitrip_ebooking_RepostMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingRepostMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingSmsRecepit 商旅API > 订单短信回执消息} */
  on(topic: 'alitrip_ebooking_SmsRecepit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingSmsRecepit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbookingTmcPassNotify 商旅API > tmc转发notify消息} */
  on(topic: 'alitrip_ebooking_TmcPassNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbookingTmcPassNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChange 淘宝机票 > 航变消息} */
  on(topic: 'alitrip_flight_Change', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightChangeStatusNotify 淘宝机票 > 机票改签流程状态通知} */
  on(topic: 'alitrip_flight_ChangeStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightChangeStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightFlightChange 淘宝机票 > 新京航航变消息} */
  on(topic: 'alitrip_flight_FlightChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightPayNotification 淘宝机票 > 机票支付结果异步通知} */
  on(topic: 'alitrip_flight_PayNotification', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightPayNotification) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightRefundNotify 淘宝机票 > 新京杭-退票相关通知} */
  on(topic: 'alitrip_flight_RefundNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlightTradeNotify 淘宝机票 > 机票交易通知} */
  on(topic: 'alitrip_flight_TradeNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlightTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripHotelHotelCrawler 商旅API > 转发飞猪推送比价消息} */
  on(topic: 'alitrip_hotel_HotelCrawler', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripHotelHotelCrawler) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripHotelOrderOperation 商旅API > 酒店交易发送云上消息} */
  on(topic: 'alitrip_hotel_OrderOperation', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripHotelOrderOperation) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlitripSyncIatkfTaobao 商旅API > 机票自营淘内应用消息同步云上} */
  on(topic: 'alitrip_sync_IatkfTaobao', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripSyncIatkfTaobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTfOrderStatusChanged 商旅API > 旅行购订单状态变化消息} */
  on(topic: 'alitrip_tf_OrderStatusChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTfOrderStatusChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTradeModifyApply 商旅API > 国内机票改签申请消息} */
  on(topic: 'alitrip_trade_ModifyApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTradeModifyApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainAgentStopQuery 淘宝火车票 > 火车票车次状态变更消息} */
  on(topic: 'alitrip_train_AgentStopQuery', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainAgentStopQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainRiskNotify 淘宝火车票 > 飞猪火车票风控消息} */
  on(topic: 'alitrip_train_RiskNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainRiskNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrainTobOrderCreate 淘宝火车票 > 创建订单成功消息} */
  on(topic: 'alitrip_train_TobOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrainTobOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravelFaceOrder 航旅度假交易 > 线上人脸录入通知消息} */
  on(topic: 'alitrip_travel_FaceOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravelFaceOrder) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AliyunGscProductionQualityCpkCreate 阿里云质检 > 质检结果CPK触发查询} */
  on(topic: 'aliyun_gsc_ProductionQualityCpkCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionQualityCpkCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGscProductionQualityDetailSpcCreate 阿里云质检 > 质检结果SPC详情触发查询} */
  on(topic: 'aliyun_gsc_ProductionQualityDetailSpcCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionQualityDetailSpcCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGscProductionQualitySpcCreate 阿里云质检 > 质检结果SPC触发查询} */
  on(topic: 'aliyun_gsc_ProductionQualitySpcCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionQualitySpcCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGscProductionReceiptInfoCreate 阿里云质检 > C2M物流信息下发} */
  on(topic: 'aliyun_gsc_ProductionReceiptInfoCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGscProductionReceiptInfoCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIotOrderSync IOT-智能制造 > 天天工厂采购单同步} */
  on(topic: 'aliyun_iot_OrderSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIotOrderSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponCouponSync 淘宝闪购联盟-卡券消息API > 淘宝闪购联盟卡券同步消息} */
  on(topic: 'alsc_coupon_CouponSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponCouponSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponOrderVoucherStatus 淘宝闪购联盟-卡券消息API > 淘宝闪购卡券openapi订单消息} */
  on(topic: 'alsc_coupon_OrderVoucherStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponOrderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponpackagePurchaseSync 淘宝闪购联盟-卡券包采购单消息API > 淘宝闪购联盟卡券包采购同步消息} */
  on(topic: 'alsc_couponpackage_PurchaseSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponpackagePurchaseSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponpackagePurchaseTicketSync 淘宝闪购联盟-卡券包采购单消息API > 淘宝闪购联盟卡券包采购凭证同步} */
  on(topic: 'alsc_couponpackage_PurchaseTicketSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponpackagePurchaseTicketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscDaodianHaitunPromoEventNotify 口碑 > 本地生活到店多渠道投放海豚活动事件通知} */
  on(topic: 'alsc_daodian_HaitunPromoEventNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscDaodianHaitunPromoEventNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbShopAudit 口碑 > 本地生活口碑店铺审核消息} */
  on(topic: 'alsc_kb_ShopAudit', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbShopAudit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbShopChange 口碑 > 本地生活口碑店铺变更消息} */
  on(topic: 'alsc_kb_ShopChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbShopChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbaobaotuanOrderVoucherStatus 口碑 > 口碑爆爆团三方订单&凭证状态消息} */
  on(topic: 'alsc_kbbaobaotuan_OrderVoucherStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbaobaotuanOrderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbbtOrderVoucherStatus 口碑 > 口碑爆爆团凭证消息流} */
  on(topic: 'alsc_kbbbt_OrderVoucherStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbbtOrderVoucherStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbbtProductChange 口碑 > 口碑爆爆团商品变更的消息} */
  on(topic: 'alsc_kbbbt_ProductChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbbtProductChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscReviewbwcActivityEnrollSync 淘宝闪购联盟-霸王餐消息推送API > 淘宝闪购评价有礼门店活动消息} */
  on(topic: 'alsc_reviewbwc_ActivityEnrollSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscReviewbwcActivityEnrollSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscReviewbwcSidBindSync 淘宝闪购联盟-霸王餐消息推送API > 评价有礼渠道用户身份SID绑定通知} */
  on(topic: 'alsc_reviewbwc_SidBindSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscReviewbwcSidBindSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscRiskPunishSend 口碑 > 本地生活处罚中心处罚下发} */
  on(topic: 'alsc_risk_PunishSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscRiskPunishSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalesadaptorShopAuditingNotify 口碑 > 饿了么开店状态通知接口} */
  on(topic: 'alsc_salesadaptor_ShopAuditingNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalesadaptorShopAuditingNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalescrmLeadsActionNotify 口碑 > alsc销售商机变更通知} */
  on(topic: 'alsc_salescrm_LeadsActionNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalescrmLeadsActionNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalescrmOpportunityActionNotify 口碑 > alsc销售商机变更通知} */
  on(topic: 'alsc_salescrm_OpportunityActionNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalescrmOpportunityActionNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustryCancelInquiry 天猫服务 > 送货入户并安装取消询价接口} */
  on(topic: 'ascp_insdustry_CancelInquiry', listener: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustryCancelInquiry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInstantsonlineLogisticsStatusCallback 同城配送 > 同城配送在线下单物流状态回告} */
  on(topic: 'ascp_instantsonline_LogisticsStatusCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.AscpInstantsonlineLogisticsStatusCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRightTradeCreate 平台消息 > 斑马权益平台权益变更通知} */
  on(topic: 'banma_right_TradeCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRightTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatformLogisiticsDetail 菜鸟发货工作台 > 发货工作台下发物流详情消息} */
  on(topic: 'cainiao_consignplatform_LogisiticsDetail', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatformLogisiticsDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIotAftersalesTicket IoT售后解决方案 > IoT售后工单信息消息} */
  on(topic: 'cainiao_iot_AftersalesTicket', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIotAftersalesTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoLogisticsAbnormalOrderCreate 菜鸟 > 菜鸟物流异常件创建} */
  on(topic: 'cainiao_logistics_AbnormalOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoLogisticsAbnormalOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoLogisticsAbnormalOrderUpdate 菜鸟 > 异常件变更消息} */
  on(topic: 'cainiao_logistics_AbnormalOrderUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoLogisticsAbnormalOrderUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanAlertOrder 菜鸟 > 异常订单预警通知} */
  on(topic: 'cainiao_moduan_AlertOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanAlertOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCancelTask 菜鸟 > 任务取消消息推送} */
  on(topic: 'cainiao_moduan_CancelTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCancelTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonMailnoUpdated 菜鸟 > 运单号更新} */
  on(topic: 'cainiao_moduan_CommonMailnoUpdated', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonMailnoUpdated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderCanceled 菜鸟 > 订单取消} */
  on(topic: 'cainiao_moduan_CommonOrderCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderGrasped 菜鸟 > 普通寄件接单消息} */
  on(topic: 'cainiao_moduan_CommonOrderGrasped', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderGrasped) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderMailnoReturned 菜鸟 > 回单消息} */
  on(topic: 'cainiao_moduan_CommonOrderMailnoReturned', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderMailnoReturned) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonOrderPickup 菜鸟 > 揽件消息} */
  on(topic: 'cainiao_moduan_CommonOrderPickup', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonOrderPickup) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonWaitWithholdTimeOut 菜鸟 > 支付订单超时} */
  on(topic: 'cainiao_moduan_CommonWaitWithholdTimeOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonWaitWithholdTimeOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCommonWithholdResult 菜鸟 > 代扣结果通知} */
  on(topic: 'cainiao_moduan_CommonWithholdResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCommonWithholdResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCourierAccountSync 菜鸟 > 小件员账号同步} */
  on(topic: 'cainiao_moduan_CourierAccountSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCourierAccountSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanCreateAppointOrder 菜鸟 > 创建预约订单通知} */
  on(topic: 'cainiao_moduan_CreateAppointOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanCreateAppointOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanDispatchTask 菜鸟 > 直送任务广播} */
  on(topic: 'cainiao_moduan_DispatchTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanDispatchTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanGongyiData 菜鸟 > 公益数据对接下发} */
  on(topic: 'cainiao_moduan_GongyiData', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanGongyiData) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanGraspedTask 菜鸟 > 直送抢单成功后消息推送} */
  on(topic: 'cainiao_moduan_GraspedTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanGraspedTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanModifyAppointOrder 菜鸟 > 修改预约订单通知} */
  on(topic: 'cainiao_moduan_ModifyAppointOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanModifyAppointOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderFeeTrans 菜鸟 > 末端订单转账结果通知} */
  on(topic: 'cainiao_moduan_OrderFeeTrans', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderFeeTrans) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderGrasp 菜鸟 > 小件员已接单推送信息} */
  on(topic: 'cainiao_moduan_OrderGrasp', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderGrasp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderInfo 菜鸟 > 菜鸟末端订单信息} */
  on(topic: 'cainiao_moduan_OrderInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderPickup 菜鸟 > 小件员已揽件推送信息} */
  on(topic: 'cainiao_moduan_OrderPickup', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderPickup) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanOrderReturnMailNO 菜鸟 > 回传运单号通知} */
  on(topic: 'cainiao_moduan_OrderReturnMailNO', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanOrderReturnMailNO) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanRedispatchApplied 菜鸟 > 申请改派消息} */
  on(topic: 'cainiao_moduan_RedispatchApplied', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanRedispatchApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanSignInfo 菜鸟 > 签收信息回传} */
  on(topic: 'cainiao_moduan_SignInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskAskGrasp 菜鸟 > 抢单通知} */
  on(topic: 'cainiao_moduan_TaskAskGrasp', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskAskGrasp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskCancel 菜鸟 > 任务被取消} */
  on(topic: 'cainiao_moduan_TaskCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskFeeTrans 菜鸟 > 结算通知} */
  on(topic: 'cainiao_moduan_TaskFeeTrans', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskFeeTrans) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGrasp 菜鸟 > 订单被[抢/兜/追/派]后同步给CP} */
  on(topic: 'cainiao_moduan_TaskGrasp', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGrasp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGroupDone 菜鸟 > 抢单任务组被抢通知} */
  on(topic: 'cainiao_moduan_TaskGroupDone', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGroupDone) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGroupTimeOut 菜鸟 > 抢单任务组超时通知} */
  on(topic: 'cainiao_moduan_TaskGroupTimeOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGroupTimeOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskGroupViolate 菜鸟 > 兜底任务CP违约通知} */
  on(topic: 'cainiao_moduan_TaskGroupViolate', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskGroupViolate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskModifyGotDate 菜鸟 > 修改上门取件时间} */
  on(topic: 'cainiao_moduan_TaskModifyGotDate', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskModifyGotDate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskPaid 菜鸟 > 用户付款通知} */
  on(topic: 'cainiao_moduan_TaskPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskPriceInfo 菜鸟 > 仓配派单订单价格通知} */
  on(topic: 'cainiao_moduan_TaskPriceInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskPriceInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskRedispatch 菜鸟 > 订单改派} */
  on(topic: 'cainiao_moduan_TaskRedispatch', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskRedispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskReturnMailNo 菜鸟 > 小件员回传运单号通知} */
  on(topic: 'cainiao_moduan_TaskReturnMailNo', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskReturnMailNo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanTaskTaken 菜鸟 > 小件员已上门取件} */
  on(topic: 'cainiao_moduan_TaskTaken', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanTaskTaken) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuanUserWord 菜鸟 > 用户留言通知} */
  on(topic: 'cainiao_moduan_UserWord', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuanUserWord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoScfLoanCreate 菜鸟 > 菜鸟金融贷款通知databus} */
  on(topic: 'cainiao_scf_LoanCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoScfLoanCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoWaybillTrackTicketStatus 菜鸟 > 单据状态跟踪} */
  on(topic: 'cainiao_waybill_TrackTicketStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoWaybillTrackTicketStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoYimaSmsRecordPush 菜鸟 > 短信记录推送} */
  on(topic: 'cainiao_yima_SmsRecordPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoYimaSmsRecordPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionMatchSeat 大麦第三方票务供应商接入 > 履约补选座位成功通知三方} */
  on(topic: 'damai_distribution_MatchSeat', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionMatchSeat) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformCancel 大麦第三方票务供应商接入 > 场次取消消息推送} */
  on(topic: 'damai_distribution_PerformCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformStatus 大麦第三方票务供应商接入 > 场次状态变更推送} */
  on(topic: 'damai_distribution_PerformStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPerformTimeChange 大麦第三方票务供应商接入 > 场次时间变更消息} */
  on(topic: 'damai_distribution_PerformTimeChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPerformTimeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionPreSaleToNow 大麦第三方票务供应商接入 > 预售改开票} */
  on(topic: 'damai_distribution_PreSaleToNow', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionPreSaleToNow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionProjectStatus 大麦第三方票务供应商接入 > 项目状态推送} */
  on(topic: 'damai_distribution_ProjectStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionProjectStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionRefundAuditResult 大麦第三方票务供应商接入 > 分销退票审核结果消息通知} */
  on(topic: 'damai_distribution_RefundAuditResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionRefundAuditResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionRefundOrder 大麦第三方票务供应商接入 > 退票通知} */
  on(topic: 'damai_distribution_RefundOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionRefundOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionRefundRule 大麦第三方票务供应商接入 > 项目退款规则} */
  on(topic: 'damai_distribution_RefundRule', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionRefundRule) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionSendExpress 大麦第三方票务供应商接入 > 履约发快递成功通知三方} */
  on(topic: 'damai_distribution_SendExpress', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionSendExpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistributionTicketItemStatus 大麦第三方票务供应商接入 > 票品状态变更} */
  on(topic: 'damai_distribution_TicketItemStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistributionTicketItemStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMevDatasyncTalkMaitix 大麦 > maitix与datasync数据同步} */
  on(topic: 'damai_mev_DatasyncTalkMaitix', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMevDatasyncTalkMaitix) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzEventStateChange 大麦 > 场次状态通知接口} */
  on(topic: 'damai_mz_EventStateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzEventStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzForwardMessage 大麦 > 大麦新麦座消息} */
  on(topic: 'damai_mz_ForwardMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzForwardMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzOrderChangeState 大麦 > 订单状态变动通知} */
  on(topic: 'damai_mz_OrderChangeState', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzOrderChangeState) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzOrderRefund 大麦 > 麦座退单审核通过通知} */
  on(topic: 'damai_mz_OrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzOrderStateChange 大麦 > 订单状态通知} */
  on(topic: 'damai_mz_OrderStateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzOrderStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzSeatStateChange 大麦 > 大麦麦座座位状态变化消息} */
  on(topic: 'damai_mz_SeatStateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzSeatStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzTicketStateChange 大麦 > 大麦麦座票状态变化消息} */
  on(topic: 'damai_mz_TicketStateChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzTicketStateChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMzUserRegister 大麦 > 麦座会员注册成功通知} */
  on(topic: 'damai_mz_UserRegister', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMzUserRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTradeTicketStatusPush 大麦票单状态 > 大麦票单状态推送} */
  on(topic: 'damai_trade_TicketStatusPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTradeTicketStatusPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.EleEnterprisePushOrderDetail 饿了么 > 饿了么企业订餐推送订单详情} */
  on(topic: 'ele_enterprise_PushOrderDetail', listener: (this: TaoMessageConsumer, message: IncomingMessage.EleEnterprisePushOrderDetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeBankstatementGet 饿了么 > 饿了么银行流水对接} */
  on(topic: 'eleme_bankstatement_Get', listener: (this: TaoMessageConsumer, message: IncomingMessage.ElemeBankstatementGet) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeFulfillModifyOrderLabour 五道口配送 > 骑手变更消息通知} */
  on(topic: 'eleme_fulfill_ModifyOrderLabour', listener: (this: TaoMessageConsumer, message: IncomingMessage.ElemeFulfillModifyOrderLabour) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeRetailPosOrderMessage 饿了么 > 饿了么零售智慧菜场订单状态消息} */
  on(topic: 'eleme_retail_PosOrderMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.ElemeRetailPosOrderMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtripHotelDistributionOrderChange 商旅API > 订单状态变化} */
  on(topic: 'fliggy_btrip_HotelDistributionOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtripHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyDujiaApproveSignUp 飞猪商家平台 > 招商审核通过消息} */
  on(topic: 'fliggy_dujia_ApproveSignUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyDujiaApproveSignUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyFlightAdvOfferChangeNotify 淘宝机票 > 飞猪机票商家货品优势变更通知} */
  on(topic: 'fliggy_flight_AdvOfferChangeNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyFlightAdvOfferChangeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyInteractHaitunEventCreate 飞猪 > 飞猪互动海豚事件产生} */
  on(topic: 'fliggy_interact_HaitunEventCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyInteractHaitunEventCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiaoFlightChange 淘宝机票 > 航变消息服务} */
  on(topic: 'fliggy_jipiao_FlightChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiaoFlightChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyMemberLevelChange 飞猪 > 通知合作商家飞猪会员等级变更消息} */
  on(topic: 'fliggy_member_LevelChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyMemberLevelChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyPushHaitunEventCreate 飞猪 > 飞猪多端投放体系海豚事件产生} */
  on(topic: 'fliggy_push_HaitunEventCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyPushHaitunEventCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyShtOrderMsg 飞猪 > 飞猪四海通订单消息} */
  on(topic: 'fliggy_sht_OrderMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyShtOrderMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderRefund 航旅度假交易 > 域外分销订单退款消息} */
  on(topic: 'fliggy_ticket_OrderRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketOrderStatusChange 航旅度假交易 > 域外分销订单状态变更消息} */
  on(topic: 'fliggy_ticket_OrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicketVerifyNotify 航旅度假交易 > 域外分销订单码核销消息} */
  on(topic: 'fliggy_ticket_VerifyNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicketVerifyNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTravelRechargeJtpOrdercancelApply 航旅度假交易 > 飞猪度假通讯流量包无忧行订单退订申请消息发送} */
  on(topic: 'fliggy_travel_RechargeJtpOrdercancelApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTravelRechargeJtpOrdercancelApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTravelRechargeJtpOrdercancelApplyBackUp 航旅度假交易 > 飞猪度假通讯流量包无忧行订单退订申请消息发送（兼容移动老系统）} */
  on(topic: 'fliggy_travel_RechargeJtpOrdercancelApplyBackUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTravelRechargeJtpOrdercancelApplyBackUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyVisaApplicantStatusChanged 航旅度假交易 > 签证申请人状态变更消息} */
  on(topic: 'fliggy_visa_ApplicantStatusChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyVisaApplicantStatusChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyVisaStatusChange 航旅度假交易 > 签证状态变化消息} */
  on(topic: 'fliggy_visa_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyVisaStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyXhotelComboCreateResult 飞猪 > 套餐创建消息回传} */
  on(topic: 'fliggy_xhotel_ComboCreateResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyXhotelComboCreateResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FlyggyFlightDomesticDistributionQuotationFull 飞猪机票 > 飞猪机票国内分销全量报价} */
  on(topic: 'flyggy_flight_DomesticDistributionQuotationFull', listener: (this: TaoMessageConsumer, message: IncomingMessage.FlyggyFlightDomesticDistributionQuotationFull) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FlyggyFlightDomesticDistributionQuotationIncrement 飞猪机票 > 飞猪机票国内分销增量报价} */
  on(topic: 'flyggy_flight_DomesticDistributionQuotationIncrement', listener: (this: TaoMessageConsumer, message: IncomingMessage.FlyggyFlightDomesticDistributionQuotationIncrement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmFail 服务市场 > 收入确认失败} */
  on(topic: 'fuwu_confirm_Fail', listener: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmFail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirmSuccess 服务市场 > 收入确认成功} */
  on(topic: 'fuwu_confirm_Success', listener: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirmSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GaodeCaijiEccTaskAuditStatusNotify 高德 > 高德采集生态小程序任务状态通知} */
  on(topic: 'gaode_caiji_EccTaskAuditStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.GaodeCaijiEccTaskAuditStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GenieGscOrderStatusUpdate 天猫精灵供应链 > 单据状态同步} */
  on(topic: 'genie_gsc_OrderStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.GenieGscOrderStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GlobalVirtualMerchantSendCode 国际虚拟业务 > 国际虚拟业务对接码商} */
  on(topic: 'global_virtual_MerchantSendCode', listener: (this: TaoMessageConsumer, message: IncomingMessage.GlobalVirtualMerchantSendCode) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionAuctionOrderPaid 大资产拍卖Top端拍品消息 > 订单支付消息} */
  on(topic: 'gov_auction_AuctionOrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionAuctionOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionEnd 大资产拍卖Top端拍品消息 > 大资产拍卖拍品结束消息} */
  on(topic: 'gov_auction_End', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionEnd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionEndImmediate 大资产拍卖Top端拍品消息 > 标的结束即刻消息} */
  on(topic: 'gov_auction_EndImmediate', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionEndImmediate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPublish 大资产拍卖Top端拍品消息 > 大资产标的上架消息} */
  on(topic: 'gov_auction_Publish', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionPushVehicleDataToBM 大资产拍卖Top端拍品消息 > 推送机动车数据到斑马} */
  on(topic: 'gov_auction_PushVehicleDataToBM', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionPushVehicleDataToBM) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionQuanAnAssetsPack 大资产拍卖Top端拍品消息 > 打包处置关联资产编号消息} */
  on(topic: 'gov_auction_QuanAnAssetsPack', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionQuanAnAssetsPack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuctionVehicleDataPush 大资产拍卖Top端拍品消息 > 斑马-机动车数据推送} */
  on(topic: 'gov_auction_VehicleDataPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuctionVehicleDataPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovQualSubmit 资产拍卖 > 拍品资质审核提交消息} */
  on(topic: 'gov_qual_Submit', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovQualSubmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovRadarclueExcelFinish 竞价雷达 > 财产线索Excel监控源解析结果通知} */
  on(topic: 'gov_radarclue_ExcelFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovRadarclueExcelFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovRadarclueInfo 竞价雷达 > 财产线索定时统计消息通知} */
  on(topic: 'gov_radarclue_Info', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovRadarclueInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrmCustomerModified ICBU > 客户信息变更同步小满} */
  on(topic: 'icbu_alicrm_CustomerModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrmCustomerModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrmNoteModified ICBU > 客户通小记变更} */
  on(topic: 'icbu_alicrm_NoteModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrmNoteModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrmOfflineDataChanged ICBU > 客户通离线数据变更同步} */
  on(topic: 'icbu_alicrm_OfflineDataChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrmOfflineDataChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuChatMessageTipForXiaoMan ICBU > ICBU沟通消息推送给小满提醒} */
  on(topic: 'icbu_chat_MessageTipForXiaoMan', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuChatMessageTipForXiaoMan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuCrmGgsXMOrderChange ICBU > ICBU CRM小满订单状态变更通知（GGS港台）} */
  on(topic: 'icbu_crm_GgsXMOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuCrmGgsXMOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuCrmXMOrderChange ICBU > ICBU CRM小满订单状态变更通知} */
  on(topic: 'icbu_crm_XMOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuCrmXMOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuMemberXmUnBind ICBU > icbu国际站账号解绑小满账号} */
  on(topic: 'icbu_member_XmUnBind', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuMemberXmUnBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuRiskZeroersMessage ICBU-小满 > 天鹿风控事件异步消息结果} */
  on(topic: 'icbu_risk_ZeroersMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuRiskZeroersMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuTradeOrderNotify ICBU-交易 > 国际站订单变更消息} */
  on(topic: 'icbu_trade_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuTradeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreementStatusChange 闲鱼 > 闲鱼代扣消息通知} */
  on(topic: 'idle_agreement_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreementStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvItemSyn 闲鱼已验货 > 已验货商品消息} */
  on(topic: 'idle_appraiseisv_ItemSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvOrderSyn 闲鱼已验货 > 闲鱼已验货交易事件} */
  on(topic: 'idle_appraiseisv_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisvRefundSyn 闲鱼已验货 > 闲鱼已验货退货/退款事件} */
  on(topic: 'idle_appraiseisv_RefundSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisvRefundSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAutotradeOrderStateSync 闲鱼 > 闲鱼AutoTrade订单状态变更消息} */
  on(topic: 'idle_autotrade_OrderStateSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAutotradeOrderStateSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAutotradeRefundSync 闲鱼 > 闲鱼AutoTrade逆向退款消息} */
  on(topic: 'idle_autotrade_RefundSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAutotradeRefundSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentOrderSyn 闲鱼回收商消息 > 闲鱼帮卖订单履约状态同步} */
  on(topic: 'idle_consignment_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentiiOrderSyn 闲鱼回收商消息 > 闲鱼寄卖V2订单履约状态同步} */
  on(topic: 'idle_consignmentii_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentiiOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCroPunishMsg 闲鱼电商Saas > 闲鱼安全处罚消息} */
  on(topic: 'idle_cro_PunishMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleCroPunishMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCycleshopGoodsNotice 闲鱼循环商店-消息前台 > 闲鱼循环商店-货品变更通知} */
  on(topic: 'idle_cycleshop_GoodsNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleCycleshopGoodsNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCycleshopSaleOrderNotice 闲鱼循环商店-消息前台 > 闲鱼循环商店-销售单变更通知} */
  on(topic: 'idle_cycleshop_SaleOrderNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleCycleshopSaleOrderNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleDistributionItemChange 闲鱼回收商消息 > 分销闲管家消息通道} */
  on(topic: 'idle_distribution_ItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleDistributionItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketBuyerOrderStateSyn 闲鱼 > 闲鱼鱼市买家单状态同步} */
  on(topic: 'idle_fishmarket_BuyerOrderStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketBuyerOrderStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketItemAuctionStateSyn 闲鱼 > 闲鱼鱼市商品竞拍消息同步} */
  on(topic: 'idle_fishmarket_ItemAuctionStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketItemAuctionStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketTenderAutoAuctionMsg 闲鱼 > 一口价转暗拍自动上架消息推送} */
  on(topic: 'idle_fishmarket_TenderAutoAuctionMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketTenderAutoAuctionMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketfixedOrderSyn 闲鱼 > 鱼市一口价买家单订单交易消息变更} */
  on(topic: 'idle_fishmarketfixed_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketfixedOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleLuxconsignOrderNotice 闲鱼奢品寄卖 > 闲鱼奢品寄卖-卖家单消息通知} */
  on(topic: 'idle_luxconsign_OrderNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleLuxconsignOrderNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleNewoutletsUserTagNotice 闲鱼电商Saas > 闲鱼用户身份变更消息} */
  on(topic: 'idle_newoutlets_UserTagNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleNewoutletsUserTagNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderStateSyn 闲鱼回收商消息 > 闲鱼回收业务订单消息} */
  on(topic: 'idle_recycle_OrderStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleOrderStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleOrderSyn 闲鱼回收商消息 > 回收订单交易消息} */
  on(topic: 'idle_recycle_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleRefundStatusModify 闲鱼回收商消息 > 退款消息} */
  on(topic: 'idle_recycle_RefundStatusModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleRefundStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycleStoreSyn 闲鱼回收商消息 > 黄金回收门店信息变更通知} */
  on(topic: 'idle_recycle_StoreSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycleStoreSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleSellerImprovePackOrder 闲鱼电商Saas > 闲鱼鱼小铺运营提效包订购消息} */
  on(topic: 'idle_seller_ImprovePackOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleSellerImprovePackOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleSellerProShopStatus 闲鱼电商Saas > 鱼小铺专业号身份变更状态} */
  on(topic: 'idle_seller_ProShopStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleSellerProShopStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvCompensateNotice 闲鱼电商Saas > 闲鱼开放平台-服务赔付单变更消息通知} */
  on(topic: 'idle_topisv_CompensateNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvCompensateNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvGlobalProductNotice 闲鱼电商Saas > 闲鱼开放平台-国际货品变更消息通知} */
  on(topic: 'idle_topisv_GlobalProductNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvGlobalProductNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvItemNotice 闲鱼电商Saas > 闲鱼开放平台-商品变更消息通知} */
  on(topic: 'idle_topisv_ItemNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvItemNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvRefundNotice 闲鱼电商Saas > 闲鱼开放平台-订单逆向变更消息通知} */
  on(topic: 'idle_topisv_RefundNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvRefundNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisvTradeNotice 闲鱼电商Saas > 闲鱼开放平台-订单变更消息通知} */
  on(topic: 'idle_topisv_TradeNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisvTradeNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTradeAddressModify 闲鱼回收商消息 > 买家修改地址通知卖家} */
  on(topic: 'idle_trade_AddressModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTradeAddressModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTradeTradeReteSuccess 闲鱼回收商消息 > 服务商订单评价消息} */
  on(topic: 'idle_trade_TradeReteSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTradeTradeReteSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpayOrderChange 闲鱼 > 直接转账交易消息} */
  on(topic: 'idle_tranferpay_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpayOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTwjdOrderSyn 闲鱼 > 闲鱼图文鉴定业务订单消息} */
  on(topic: 'idle_twjd_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTwjdOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeDatacenterOrderStatus 银泰 > 状态同步} */
  on(topic: 'intime_datacenter_OrderStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.IntimeDatacenterOrderStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeScOrderCreateUpdate 银泰 > 服务单创建和更新} */
  on(topic: 'intime_sc_OrderCreateUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.IntimeScOrderCreateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTradePaidSuccessed 导购平台 > JAE导购平台成交记录消息} */
  on(topic: 'jae_trade_PaidSuccessed', listener: (this: TaoMessageConsumer, message: IncomingMessage.JaeTradePaidSuccessed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JymOrderBoosterStatusChange 交易猫 > 交易猫代练订单状态变更} */
  on(topic: 'jym_order_BoosterStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.JymOrderBoosterStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LarkTradePosTradeDataTransmit 云智POS > 云智POS离线交易信息同步} */
  on(topic: 'lark_trade_PosTradeDataTransmit', listener: (this: TaoMessageConsumer, message: IncomingMessage.LarkTradePosTradeDataTransmit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaModelStateUpdate 绘蛙消息 > 绘蛙模型状态变更消息} */
  on(topic: 'lianfan_huiwa_ModelStateUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaModelStateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaProjectDelivery 绘蛙消息 > 项目交付消息} */
  on(topic: 'lianfan_huiwa_ProjectDelivery', listener: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaProjectDelivery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaRequirementStateUpdate 绘蛙消息 > 绘蛙需求状态变更消息} */
  on(topic: 'lianfan_huiwa_RequirementStateUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaRequirementStateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwaTaskStateUpdate 绘蛙消息 > 绘蛙生图任务状态变更消息} */
  on(topic: 'lianfan_huiwa_TaskStateUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwaTaskStateUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LingyangQuickserviceMessageCreate 瓴羊 > 瓴羊卡片消息投递} */
  on(topic: 'lingyang_quickservice_MessageCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.LingyangQuickserviceMessageCreate) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.SelectedAppraiseRefundVerifySyn 闲鱼已验货 > 严选售中验订单逆向消息-Saas服务商} */
  on(topic: 'selected_appraise_RefundVerifySyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.SelectedAppraiseRefundVerifySyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedAppraiseVerifySyn 闲鱼已验货 > 严选售中验订单正向消息-Saas服务商} */
  on(topic: 'selected_appraise_VerifySyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.SelectedAppraiseVerifySyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedReverifyOrderSyn 闲鱼已验货 > 严选售中验订单消息同步-验货中心} */
  on(topic: 'selected_reverify_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.SelectedReverifyOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundBroad AliGenius > AG退款消息广播} */
  on(topic: 'taobao_ag_RefundBroad', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgRefundBroad) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgRefundSignInfo AliGenius > 商家在AG的签收信息} */
  on(topic: 'taobao_ag_RefundSignInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgRefundSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgSignInfo AliGenius > AG仓库核验信息} */
  on(topic: 'taobao_ag_SignInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgSignInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgTicketsMsg AliGenius > 商家工单消息} */
  on(topic: 'taobao_ag_TicketsMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgTicketsMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgentWorkflowAsyncResult 淘宝 > 工作流开放异步执行结果通知} */
  on(topic: 'taobao_agent_WorkflowAsyncResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgentWorkflowAsyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAisCommonMessage 淘宝 > 厂商协同统一消息} */
  on(topic: 'taobao_ais_CommonMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAisCommonMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAliautoElectronicVoucherActivationPublish 阿里汽车 > 阿里汽车-电子凭证激活信息推送} */
  on(topic: 'taobao_aliauto_ElectronicVoucherActivationPublish', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAliautoElectronicVoucherActivationPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlipicWuyatestoutmsg 淘宝 > 异业会员正向消息测试} */
  on(topic: 'taobao_alipic_Wuyatestoutmsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlipicWuyatestoutmsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderAfterSaleRefund 淘宝 > 本地生活到店交易逆向售后退款消息通知} */
  on(topic: 'taobao_alsc_DaodianOrderAfterSaleRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderAfterSaleRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderAgreeRefund 淘宝 > 本地生活到店交易，逆向单审核通过消息通知} */
  on(topic: 'taobao_alsc_DaodianOrderAgreeRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderAgreeRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderApplyRefund 淘宝 > 本地生活到店交易用户发起退款消息通知} */
  on(topic: 'taobao_alsc_DaodianOrderApplyRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderApplyRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderDeliver 淘宝 > 本地生活到店订单发货成功消息通知} */
  on(topic: 'taobao_alsc_DaodianOrderDeliver', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderDeliver) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianOrderRejectRefund 淘宝 > 本地生活到店交易逆向单审核拒绝消息通知} */
  on(topic: 'taobao_alsc_DaodianOrderRejectRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianOrderRejectRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlscDaodianTicketUsed 淘宝 > 本地生活到店凭证核销消息通知} */
  on(topic: 'taobao_alsc_DaodianTicketUsed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlscDaodianTicketUsed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsCommentAdd 平台消息 > 百川反馈-开发者/客服回复} */
  on(topic: 'taobao_aps_CommentAdd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsCommentAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoApsNewFeedback 平台消息 > 收到舆情} */
  on(topic: 'taobao_aps_NewFeedback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoApsNewFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAscpQcInspectToErp 淘宝 > 品控验货任务发送三方检验商系统对接} */
  on(topic: 'taobao_ascp_QcInspectToErp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAscpQcInspectToErp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuctionApplyEvent 淘宝 > 大资产拍卖报名消息} */
  on(topic: 'taobao_auction_ApplyEvent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuctionApplyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuctionBidEvent 淘宝 > 大资产拍卖出价消息} */
  on(topic: 'taobao_auction_BidEvent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuctionBidEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuctionQuanAnEvaluatePrice 淘宝 > 拍卖全案评估价变更消息} */
  on(topic: 'taobao_auction_QuanAnEvaluatePrice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuctionQuanAnEvaluatePrice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinAlipayDkSignCallBack 阿信消息通知前台类目 > 支付宝代扣签约回调消息} */
  on(topic: 'taobao_axin_AlipayDkSignCallBack', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinAlipayDkSignCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinDivisionApplyResult 阿信消息通知前台类目 > 新增行政区划结果通知} */
  on(topic: 'taobao_axin_DivisionApplyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinDivisionApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinHotelChangeEvent 阿信消息通知前台类目 > 阿信酒店RP变更通知} */
  on(topic: 'taobao_axin_HotelChangeEvent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinHotelChangeEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinHotelOrderStatus 阿信消息通知前台类目 > 阿信酒店分销订单状态变更通知} */
  on(topic: 'taobao_axin_HotelOrderStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinHotelOrderStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinPackageOrderChange 阿信消息通知前台类目 > 阿信订单变更消息} */
  on(topic: 'taobao_axin_PackageOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinPackageOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinPackageProductChange 阿信消息通知前台类目 > 阿信酒套产品价库变更消息} */
  on(topic: 'taobao_axin_PackageProductChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinPackageProductChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinPoiApplyResult 阿信消息通知前台类目 > 新增POI结果通知} */
  on(topic: 'taobao_axin_PoiApplyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinPoiApplyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxinRefundCallBack 阿信消息通知前台类目 > 阿信退款回调消息} */
  on(topic: 'taobao_axin_RefundCallBack', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxinRefundCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanASODeviceActivate 百川 > 设备APP激活} */
  on(topic: 'taobao_baichuan_ASODeviceActivate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanASODeviceActivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanBrandInfoSend 百川 > 百川媒体品牌号获取} */
  on(topic: 'taobao_baichuan_BrandInfoSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanBrandInfoSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanBrandSync 百川 > 媒体内容数据同步接口} */
  on(topic: 'taobao_baichuan_BrandSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanBrandSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanPasswordRuleChange 百川 > 口令规则变化消息} */
  on(topic: 'taobao_baichuan_PasswordRuleChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanPasswordRuleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuanTaoPasswordRule 百川 > 淘口令规则发生变化} */
  on(topic: 'taobao_baichuan_TaoPasswordRule', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuanTaoPasswordRule) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianAcceptInsurance 淘宝 > 淘宝保险出单数据消息} */
  on(topic: 'taobao_baoxian_AcceptInsurance', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianAcceptInsurance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianClaimApply 淘宝 > 保险理赔消息} */
  on(topic: 'taobao_baoxian_ClaimApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianClaimApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianClaimSuccess 淘宝 > 理赔结果给保险公司消息} */
  on(topic: 'taobao_baoxian_ClaimSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianClaimSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianEndorsementSuccess 淘宝 > 批单成功给保险公司消息} */
  on(topic: 'taobao_baoxian_EndorsementSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianEndorsementSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianIssue 淘宝 > 承保中心出单消息} */
  on(topic: 'taobao_baoxian_Issue', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianIssue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianIssueSuccess 淘宝 > 出单成功给保险公司消息} */
  on(topic: 'taobao_baoxian_IssueSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianIssueSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxianSurrenderredResult 淘宝 > 退保结果给保险公司消息} */
  on(topic: 'taobao_baoxian_SurrenderredResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxianSurrenderredResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBashliveLiveEventChange 淘宝 > 本地生活直播氛围数据共享} */
  on(topic: 'taobao_bashlive_LiveEventChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBashliveLiveEventChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmcShortMessageStatus 导购平台 > 短信状态} */
  on(topic: 'taobao_bmc_ShortMessageStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmcShortMessageStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBusInsureStatus 淘宝汽车票 > 保险投保退保状态} */
  on(topic: 'taobao_bus_InsureStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBusInsureStatus) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoCcoAlipayCase 淘宝 > CCO工单通知支付宝} */
  on(topic: 'taobao_cco_AlipayCase', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCcoAlipayCase) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCcoGjCase 淘宝 > cco工单创建广交通知} */
  on(topic: 'taobao_cco_GjCase', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCcoGjCase) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentAuditAutocut 内容开放 > 智能混剪发布视频空间审核结果} */
  on(topic: 'taobao_content_AuditAutocut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentAuditAutocut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentAuditMvx 内容开放 > 视频工具发布视频空间审核结果} */
  on(topic: 'taobao_content_AuditMvx', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentAuditMvx) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentOrderAuditChange 内容开放 > 短视频模板订单审核状态更新} */
  on(topic: 'taobao_content_OrderAuditChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentOrderAuditChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentOrderPaid 内容开放 > 内容开放短视频模板支付消息} */
  on(topic: 'taobao_content_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContentTaoSubChanged 内容开放 > [淘宝订阅]变更通知} */
  on(topic: 'taobao_content_TaoSubChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContentTaoSubChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaBindChange 代发管理 > 关系绑定更改} */
  on(topic: 'taobao_daifa_BindChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaBindChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaDistributorOrderStatusChange 代发管理 > 代发管理_分销商侧订单状态变更消息} */
  on(topic: 'taobao_daifa_DistributorOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaDistributorOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaSupplierOrderStatusChange 代发管理 > 代发管理_供货商侧订单状态变更消息} */
  on(topic: 'taobao_daifa_SupplierOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaSupplierOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifaUserJoin 代发管理 > 代发用户入驻} */
  on(topic: 'taobao_daifa_UserJoin', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifaUserJoin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDatapushQueryBiz 淘宝 > 数据推送查询订单} */
  on(topic: 'taobao_datapush_QueryBiz', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDatapushQueryBiz) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDdPush 淘宝点点 > 淘点点消息推送} */
  on(topic: 'taobao_dd_Push', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDdPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandianServeOrder 淘宝点点 > 淘宝点点服务订单下单消息} */
  on(topic: 'taobao_diandian_ServeOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandianServeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeAgree 淘宝 > 同意换货} */
  on(topic: 'taobao_dispute_ExchangeAgree', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeClosed 淘宝 > 买家关闭换货协议} */
  on(topic: 'taobao_dispute_ExchangeClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeModified 淘宝 > 买家修改换货申请} */
  on(topic: 'taobao_dispute_ExchangeModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeSellerConfirmed 淘宝 > 卖家确认收货} */
  on(topic: 'taobao_dispute_ExchangeSellerConfirmed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeSellerConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeSellerGoodsConsigned 淘宝 > 换货-卖家寄出商品} */
  on(topic: 'taobao_dispute_ExchangeSellerGoodsConsigned', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeSellerGoodsConsigned) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeSuccess 淘宝 > 买家确认收货,换货成功} */
  on(topic: 'taobao_dispute_ExchangeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeExchangeTurnToRefund 淘宝 > 卖家换货转退款} */
  on(topic: 'taobao_dispute_ExchangeTurnToRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeExchangeTurnToRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeNegotiationAgreed 淘宝 > 退款-买家接受协商申请} */
  on(topic: 'taobao_dispute_NegotiationAgreed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeNegotiationAgreed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeNegotiationApply 淘宝 > 退款-卖家提交协商申请} */
  on(topic: 'taobao_dispute_NegotiationApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeNegotiationApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeNegotiationRefused 淘宝 > 退款-买家拒绝协商申请} */
  on(topic: 'taobao_dispute_NegotiationRefused', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeNegotiationRefused) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputePostageRefundSuccess 淘宝 > 退货运费单成功消息} */
  on(topic: 'taobao_dispute_PostageRefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputePostageRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeRefundCreated 淘宝 > 新退款创建} */
  on(topic: 'taobao_dispute_RefundCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeRefundPriceProtect 淘宝 > 价保退款成功} */
  on(topic: 'taobao_dispute_RefundPriceProtect', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeRefundPriceProtect) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeRefundSuccess 淘宝 > 新退款成功消息} */
  on(topic: 'taobao_dispute_RefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerApply 淘宝 > 补寄-买家已申请补寄} */
  on(topic: 'taobao_dispute_ReshippingBuyerApply', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerApply) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerClose 淘宝 > 补寄-买家关闭补寄申请} */
  on(topic: 'taobao_dispute_ReshippingBuyerClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerConfirm 淘宝 > 补寄-买家确认收货} */
  on(topic: 'taobao_dispute_ReshippingBuyerConfirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingBuyerModify 淘宝 > 补寄-买家修改补寄申请} */
  on(topic: 'taobao_dispute_ReshippingBuyerModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingBuyerModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingSellerAccept 淘宝 > 补寄-卖家同意补寄申请} */
  on(topic: 'taobao_dispute_ReshippingSellerAccept', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingSellerAccept) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingSellerConsignGoods 淘宝 > 补寄-商家寄出补寄商品} */
  on(topic: 'taobao_dispute_ReshippingSellerConsignGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingSellerConsignGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeReshippingSellerRefused 淘宝 > 补寄-商家拒绝申请} */
  on(topic: 'taobao_dispute_ReshippingSellerRefused', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeReshippingSellerRefused) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDisputeTaobaoInterApplied 淘宝 > 申请小二介入} */
  on(topic: 'taobao_dispute_TaobaoInterApplied', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDisputeTaobaoInterApplied) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoDvExternal 阿里通信 > 淘宝数字虚拟外放} */
  on(topic: 'taobao_dv_External', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDvExternal) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceBuyerConfirmSend 电子发票 > 买家确认发送到报销系统} */
  on(topic: 'taobao_einvoice_BuyerConfirmSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceBuyerConfirmSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceRequestCreate 电子发票 > 电子发票开票请求} */
  on(topic: 'taobao_einvoice_InvoiceRequestCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceInvoiceRequestCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoiceInvoiceResultReturn 电子发票 > 电子发票开票回流} */
  on(topic: 'taobao_einvoice_InvoiceResultReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoiceInvoiceResultReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEppOrderCreate 淘宝 > epp企业购对接isv订单状态同步} */
  on(topic: 'taobao_epp_OrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEppOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEppPurchaseOrderStatusUpdate 淘宝 > 天猫企业购实物采购单状态变更消息} */
  on(topic: 'taobao_epp_PurchaseOrderStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEppPurchaseOrderStatusUpdate) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoFenxiaoFxOrderTransfered 淘宝分销 > 采购单结算完成} */
  on(topic: 'taobao_fenxiao_FxOrderTransfered', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxOrderTransfered) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundAgree 淘宝分销 > 供应商同意退款消息} */
  on(topic: 'taobao_fenxiao_FxRefundAgree', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundAgree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundClose 淘宝分销 > 关闭采购单退款消息} */
  on(topic: 'taobao_fenxiao_FxRefundClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundCreate 淘宝分销 > 创建采购单退款消息} */
  on(topic: 'taobao_fenxiao_FxRefundCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundModify 淘宝分销 > 分销退款单修改} */
  on(topic: 'taobao_fenxiao_FxRefundModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods 淘宝分销 > 供应商拒绝确认收货消息} */
  on(topic: 'taobao_fenxiao_FxRefundRefuseGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundRefuseGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxRefundSuccess 淘宝分销 > 采购单退款成功消息} */
  on(topic: 'taobao_fenxiao_FxRefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate 淘宝分销 > 下游订单创建退款消息} */
  on(topic: 'taobao_fenxiao_FxTradeRefundCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess 淘宝分销 > 下游订单退款完成消息} */
  on(topic: 'taobao_fenxiao_FxTradeRefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiaoFxTradeRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilmExternalOrderPush 淘宝 > 淘宝电影tforder消息推送（外部）} */
  on(topic: 'taobao_film_ExternalOrderPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilmExternalOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilmOrderPush 淘宝 > 淘宝电影tforder消息推送} */
  on(topic: 'taobao_film_OrderPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilmOrderPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilmRefundTicketPush 淘宝 > 淘宝电影退票消息推送} */
  on(topic: 'taobao_film_RefundTicketPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilmRefundTicketPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyCommonContractSign 酒店签约中心消息 > 飞猪通用合同签约消息} */
  on(topic: 'taobao_fliggy_CommonContractSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyCommonContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHicItemChange 酒店签约中心消息 > Hsp转发卖家库聚合shid维度库价变更消息} */
  on(topic: 'taobao_fliggy_HspHicItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHicItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyHspHotelIcItemChange 酒店签约中心消息 > HSP酒店商品库价变更消息} */
  on(topic: 'taobao_fliggy_HspHotelIcItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyHspHotelIcItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyMciIndex 酒店签约中心消息 > 商家项目mci} */
  on(topic: 'taobao_fliggy_MciIndex', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyMciIndex) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySignStatus 酒店签约中心消息 > 飞猪签约状态消息} */
  on(topic: 'taobao_fliggy_SignStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySignStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdHotelModify 酒店签约中心消息 > 标准酒店实体变更消息} */
  on(topic: 'taobao_fliggy_StdHotelModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdHotelModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggyStdRoomTypeModify 酒店签约中心消息 > 标准房型领域模型实体变更消息} */
  on(topic: 'taobao_fliggy_StdRoomTypeModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggyStdRoomTypeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggySycm 酒店签约中心消息 > 消息推送} */
  on(topic: 'taobao_fliggy_Sycm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggySycm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFscRouteOrderStatusChange 阿信消息通知前台类目 > 线路订单状态变更通知} */
  on(topic: 'taobao_fsc_RouteOrderStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFscRouteOrderStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuAddressChanged 服务市场 > 收货地址发生变更} */
  on(topic: 'taobao_fuwu_AddressChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuAddressChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuFundsChange 服务市场 > 以旧换新资金变更通知消息} */
  on(topic: 'taobao_fuwu_FundsChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuFundsChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderClosed 服务市场 > 订单关闭消息} */
  on(topic: 'taobao_fuwu_OrderClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderCreated 服务市场 > 订单创建消息} */
  on(topic: 'taobao_fuwu_OrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuOrderPaid 服务市场 > 订单支付消息} */
  on(topic: 'taobao_fuwu_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuRecycleFinalService 服务市场 > 以旧换新取送一体服务最终决策通知} */
  on(topic: 'taobao_fuwu_RecycleFinalService', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuRecycleFinalService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuRecycleOut 服务市场 > 上门换新回收信息} */
  on(topic: 'taobao_fuwu_RecycleOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuRecycleOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuServiceOpen 服务市场 > 服务开通消息} */
  on(topic: 'taobao_fuwu_ServiceOpen', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuServiceOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuSubCreated 服务市场 > 订购消息} */
  on(topic: 'taobao_fuwu_SubCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuSubCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwuWitkeySyncModeling 服务市场 > 威客同步建模数据} */
  on(topic: 'taobao_fuwu_WitkeySyncModeling', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwuWitkeySyncModeling) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify 全球购跨境物流 > 跨境服务平台推送物流订单消息} */
  on(topic: 'taobao_globalbuys_SeamailOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuysSeamailOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiCaseSyncResult HOMEAI消息对接 > 方案消息同步callback} */
  on(topic: 'taobao_homeai_CaseSyncResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiCaseSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiHomestylerRenderResult HOMEAI消息对接 > 居然极速渲染结果} */
  on(topic: 'taobao_homeai_HomestylerRenderResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiHomestylerRenderResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiLayoutTransferResult HOMEAI消息对接 > 居然之家接受迁移结果} */
  on(topic: 'taobao_homeai_LayoutTransferResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiLayoutTransferResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiModelSkuRelation HOMEAI消息对接 > 推送模型与商品关系} */
  on(topic: 'taobao_homeai_ModelSkuRelation', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiModelSkuRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeaiRenderRequest HOMEAI消息对接 > HS渲染消息} */
  on(topic: 'taobao_homeai_RenderRequest', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeaiRenderRequest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelControlMsg 飞猪 > 酒店管控中心消息通知} */
  on(topic: 'taobao_hotel_ControlMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelControlMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelCreditToPreHotelStatus 飞猪 > 信用住转预付酒店签约状态消息} */
  on(topic: 'taobao_hotel_CreditToPreHotelStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelCreditToPreHotelStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelDistributionOrderChange 飞猪 > 分销渠道订单变动通知} */
  on(topic: 'taobao_hotel_DistributionOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelDistributionOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelEbkCommonMessage 飞猪 > 通用消息提醒} */
  on(topic: 'taobao_hotel_EbkCommonMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelEbkCommonMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelOrderChange 飞猪 > 订单变动通知} */
  on(topic: 'taobao_hotel_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchMonitor 飞猪 > 酒店搜索触发商品更新消息} */
  on(topic: 'taobao_hotel_SearchMonitor', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSearchTrigger 飞猪 > 热搜酒店消息} */
  on(topic: 'taobao_hotel_SearchTrigger', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSearchTrigger) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotelSignRollback 飞猪 > 飞猪单体酒店签约重置} */
  on(topic: 'taobao_hotel_SignRollback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotelSignRollback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIdlefishRentContractClose 淘宝 > 合约关闭通知} */
  on(topic: 'taobao_idlefish_RentContractClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIdlefishRentContractClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIdlefishSellerPaid 淘宝 > 打款给房东消息} */
  on(topic: 'taobao_idlefish_SellerPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIdlefishSellerPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashionItemAmountChanged 淘宝 > 库存变更} */
  on(topic: 'taobao_ifashion_ItemAmountChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashionItemAmountChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashionItemInfoCreate 淘宝 > 商品基础信息创建} */
  on(topic: 'taobao_ifashion_ItemInfoCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashionItemInfoCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashionOrderCreate 淘宝 > 创建单据} */
  on(topic: 'taobao_ifashion_OrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashionOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIhomeAigcTaskChange 淘宝 > aigc任务状态变更} */
  on(topic: 'taobao_ihome_AigcTaskChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIhomeAigcTaskChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoInventoryLowQuantityWarning 销售库存 > 低库存预警消息} */
  on(topic: 'taobao_inventory_LowQuantityWarning', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoInventoryLowQuantityWarning) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoInventoryShareInventory 销售库存 > 天猫国际共享库存订单push} */
  on(topic: 'taobao_inventory_ShareInventory', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoInventoryShareInventory) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstoreGiftingMsg Gifting送礼 > istoreGifing消息} */
  on(topic: 'taobao_istore_GiftingMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstoreGiftingMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemAuditResultNotify 淘宝商品 > 淘宝商品审核结果消息通知} */
  on(topic: 'taobao_item_AuditResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemAuditResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemDistributeItemEdit 淘宝商品 > 商品变更消息通知} */
  on(topic: 'taobao_item_DistributeItemEdit', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemDistributeItemEdit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemAdd 淘宝商品 > 商品新增消息} */
  on(topic: 'taobao_item_ItemAdd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDelete 淘宝商品 > 商品删除消息} */
  on(topic: 'taobao_item_ItemDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDelete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemDownshelf 淘宝商品 > 商品下架消息} */
  on(topic: 'taobao_item_ItemDownshelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemDownshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemOfflineNotice 淘宝商品 > 淘宝商品下降消息提醒} */
  on(topic: 'taobao_item_ItemOfflineNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemOfflineNotice) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoItemItemStockChangedOut 淘宝商品 > 淘宝开放平台内部使用库存变更消息out} */
  on(topic: 'taobao_item_ItemStockChangedOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemStockChangedOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpdate 淘宝商品 > 商品更新消息} */
  on(topic: 'taobao_item_ItemUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemUpshelf 淘宝商品 > 商品上架消息} */
  on(topic: 'taobao_item_ItemUpshelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemUpshelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemItemZeroStock 淘宝商品 > 商品卖空消息} */
  on(topic: 'taobao_item_ItemZeroStock', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemItemZeroStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketItemDistributorChange 货源服务消息 > 三方货源分销商货品消息} */
  on(topic: 'taobao_itemmarket_ItemDistributorChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketItemDistributorChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketItemRelationChange 货源服务消息 > 铺货成功推送} */
  on(topic: 'taobao_itemmarket_ItemRelationChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketItemRelationChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketMaterialChange 货源服务消息 > 货品素材信息变更} */
  on(topic: 'taobao_itemmarket_MaterialChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketMaterialChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketPurchaseDistributorChange 货源服务消息 > 三方货源分销商采购单消息} */
  on(topic: 'taobao_itemmarket_PurchaseDistributorChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketPurchaseDistributorChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketPurchaseOrderChange 货源服务消息 > 三方货源采购单变更} */
  on(topic: 'taobao_itemmarket_PurchaseOrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketPurchaseOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarketVideoCreate 货源服务消息 > 货品视频创建} */
  on(topic: 'taobao_itemmarket_VideoCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarketVideoCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJaqAuditResult 淘宝 > 聚安全实人认证审核结果} */
  on(topic: 'taobao_jaq_AuditResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJaqAuditResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoAncillaryOrderPaid 淘宝机票 > 飞猪辅营订单支付通知接口} */
  on(topic: 'taobao_jipiao_AncillaryOrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoAncillaryOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify 淘宝机票 > 【机票代理商】改签订单通知} */
  on(topic: 'taobao_jipiao_JipiaoModifyOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoModifyOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderChanged 淘宝机票 > 机票订单变更} */
  on(topic: 'taobao_jipiao_JipiaoOrderChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoOrderChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify 淘宝机票 > 机票订单状态推送} */
  on(topic: 'taobao_jipiao_JipiaoOrderStatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoOrderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify 淘宝机票 > 机票退票订单状态推送} */
  on(topic: 'taobao_jipiao_JipiaoRefundOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoJipiaoRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerOrderNotify 淘宝机票 > 【机票代理商】订单通知} */
  on(topic: 'taobao_jipiao_SellerOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify 淘宝机票 > 【机票代理商】退票订单通知} */
  on(topic: 'taobao_jipiao_SellerRefundOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoSellerRefundOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiaoUrgeIssueTicket 淘宝机票 > 催出票/拦截出票消息} */
  on(topic: 'taobao_jipiao_UrgeIssueTicket', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiaoUrgeIssueTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseOrderCreate 淘宝分销 > 家装分销_采购单创建} */
  on(topic: 'taobao_jzfx_PurchaseOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseOrderStatusModify 淘宝分销 > 家装分销_采购单状态修改} */
  on(topic: 'taobao_jzfx_PurchaseOrderStatusModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseOrderStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseReverseOrderCreate 淘宝分销 > 家装分销_采购逆向单创建} */
  on(topic: 'taobao_jzfx_PurchaseReverseOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseReverseOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfxPurchaseReverseOrderStatusModify 淘宝分销 > 家装分销_采购逆向单状态修改} */
  on(topic: 'taobao_jzfx_PurchaseReverseOrderStatusModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfxPurchaseReverseOrderStatusModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoKcbMsg 淘宝 > 库存宝消息} */
  on(topic: 'taobao_kcb_Msg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoKcbMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLbsMonitorPush 淘宝 > 支付宝位移监控消息推送} */
  on(topic: 'taobao_lbs_MonitorPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLbsMonitorPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLbsUserMonitorPush 淘宝 > 支付宝用户位移消息推送} */
  on(topic: 'taobao_lbs_UserMonitorPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLbsUserMonitorPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeGroupActivityNotify 淘宝 > 本地生活生服拼团活动变更提醒} */
  on(topic: 'taobao_life_GroupActivityNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeGroupActivityNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeOrder 淘宝 > 生活服务订单消息订阅} */
  on(topic: 'taobao_life_Order', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeOrderNotify 淘宝 > 本地生活生服行业订单触达} */
  on(topic: 'taobao_life_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeStoreInfoChange 淘宝 > 生服门店变更同步消息} */
  on(topic: 'taobao_life_StoreInfoChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeStoreInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeserviceItemMsg 淘宝 > 本地生活生服商品消息} */
  on(topic: 'taobao_lifeservice_ItemMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeserviceItemMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAgencyItemChanged 淘宝直播API > 直播严选机构商品池变化通知} */
  on(topic: 'taobao_live_AgencyItemChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAgencyItemChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAlipayStatusChange 淘宝直播API > 淘宝直播开播或关闭} */
  on(topic: 'taobao_live_AlipayStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAlipayStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveAnchorRoleChange 淘宝直播API > 主播注册身份时通知} */
  on(topic: 'taobao_live_AnchorRoleChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveAnchorRoleChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveBdshLiveEventChange 淘宝直播API > 本地生活直播间氛围消息} */
  on(topic: 'taobao_live_BdshLiveEventChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveBdshLiveEventChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveBookInfoChange 淘宝直播API > 直播预约信息变更} */
  on(topic: 'taobao_live_BookInfoChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveBookInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveFeedRelated 淘宝直播API > 淘宝直播上下播消息} */
  on(topic: 'taobao_live_FeedRelated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveFeedRelated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLivePrintScreen 淘宝直播API > 淘宝直播结帧} */
  on(topic: 'taobao_live_PrintScreen', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLivePrintScreen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveRoomItemChange 淘宝直播API > 直播间添加宝贝} */
  on(topic: 'taobao_live_RoomItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveRoomItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveRoomStatusChange 淘宝直播API > 支付宝直播间状态变更消息} */
  on(topic: 'taobao_live_RoomStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveRoomStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveStatusChange 淘宝直播API > 淘宝直播流状态变更} */
  on(topic: 'taobao_live_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveTcpOrder 淘宝直播API > 淘宝直播订单消息} */
  on(topic: 'taobao_live_TcpOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveTcpOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveaigcCommentSend 淘宝直播API > 淘宝数字人评论推送} */
  on(topic: 'taobao_liveaigc_CommentSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveaigcCommentSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocalOrderPorcess 淘宝 > 通知58订单发生变化} */
  on(topic: 'taobao_local_OrderPorcess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocalOrderPorcess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocalorderStatusNotify 淘宝 > 通知到家服务商订单状态变化} */
  on(topic: 'taobao_localorder_StatusNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocalorderStatusNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsAccept 淘宝物流 > 物流揽收} */
  on(topic: 'taobao_logistics_Accept', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsAccept) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsExceptionConfigChange 淘宝物流 > 物流管理-包裹中心-预警配置变更消息} */
  on(topic: 'taobao_logistics_ExceptionConfigChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsExceptionConfigChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsLogsticDetailTrace 淘宝物流 > 物流详情跟踪消息} */
  on(topic: 'taobao_logistics_LogsticDetailTrace', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsLogsticDetailTrace) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsPackageExceptionCreate 淘宝物流 > 物流管理-包裹中心-异常创建消息} */
  on(topic: 'taobao_logistics_PackageExceptionCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsPackageExceptionCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsPackageExceptionOff 淘宝物流 > 物流管理-包裹中心-异常核销消息} */
  on(topic: 'taobao_logistics_PackageExceptionOff', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsPackageExceptionOff) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogisticsUnTaobaoLogstic 淘宝物流 > 非淘物流消息} */
  on(topic: 'taobao_logistics_UnTaobaoLogstic', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogisticsUnTaobaoLogstic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappArticleContentUnlawful 轻应用 > 小程序文章内容非法} */
  on(topic: 'taobao_miniapp_ArticleContentUnlawful', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappArticleContentUnlawful) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappItemMsg 轻应用 > 轻交易商品状态同步消息} */
  on(topic: 'taobao_miniapp_ItemMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappItemMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappRefundMsg 轻应用 > 轻应用轻交易退款消息} */
  on(topic: 'taobao_miniapp_RefundMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappRefundMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniappTradeMsg 轻应用 > 小程序轻应用轻交易的订单状态同步消息} */
  on(topic: 'taobao_miniapp_TradeMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniappTradeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddressResultNotify 聚石塔 > 自助改地址结果消息通知} */
  on(topic: 'taobao_modifyaddress_ResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddressResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorderConsistencyResult 聚石塔 > 订单一致性校验消息} */
  on(topic: 'taobao_modifyorder_ConsistencyResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorderConsistencyResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyskuResultNotify 聚石塔 > 修改商品信息结果消息} */
  on(topic: 'taobao_modifysku_ResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyskuResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOcTradeTagChanged 交易全链路 > oc订单标签变更} */
  on(topic: 'taobao_oc_TradeTagChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOcTradeTagChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnCreditPayStatusChange 以旧换新-订单域 > 信用代扣状态变更同步} */
  on(topic: 'taobao_ofn_CreditPayStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnCreditPayStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnNewOrderEventSync 以旧换新-订单域 > 以旧换新新机单事件同步} */
  on(topic: 'taobao_ofn_NewOrderEventSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnNewOrderEventSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnOrderStatusSync 以旧换新-订单域 > 以旧换新回收单状态同步} */
  on(topic: 'taobao_ofn_OrderStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnQaAmountConfirm 以旧换新-订单域 > 以旧换新质检价格通知} */
  on(topic: 'taobao_ofn_QaAmountConfirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnQaAmountConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfnRateSync 以旧换新-订单域 > 以旧换新回收单评价消息} */
  on(topic: 'taobao_ofn_RateSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfnRateSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccountDataSync 导购平台 > openaccount数据同步} */
  on(topic: 'taobao_openaccount_DataSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccountDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmAuthTouchMessage 客户运营平台API > 营销短信授权消息} */
  on(topic: 'taobao_opencrm_AuthTouchMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmAuthTouchMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardEstTask 客户运营平台API > 卡片短信发送预估消息} */
  on(topic: 'taobao_opencrm_CardEstTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardEstTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCardTplExamine 客户运营平台API > 卡片短信模板审核消息} */
  on(topic: 'taobao_opencrm_CardTplExamine', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCardTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCouponUseUp 客户运营平台API > 优惠券发完TMC} */
  on(topic: 'taobao_opencrm_CouponUseUp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCouponUseUp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstResult 客户运营平台API > 人群快照生成结果} */
  on(topic: 'taobao_opencrm_CrowdInstResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmCrowdInstSaveResult 客户运营平台API > 人群快照另存为人群结果} */
  on(topic: 'taobao_opencrm_CrowdInstSaveResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmCrowdInstSaveResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmDigitalTplExamine 客户运营平台API > 数字短信模板审核消息} */
  on(topic: 'taobao_opencrm_DigitalTplExamine', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmDigitalTplExamine) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFeedback 客户运营平台API > 反馈tmc} */
  on(topic: 'taobao_opencrm_Feedback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmFeedback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmFullRuleResult 客户运营平台API > 规则全量计算结果通知} */
  on(topic: 'taobao_opencrm_FullRuleResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmFullRuleResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberGradeChange 客户运营平台API > 会员等级变更} */
  on(topic: 'taobao_opencrm_MemberGradeChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberGradeChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberJoin 客户运营平台API > 会员入会消息} */
  on(topic: 'taobao_opencrm_MemberJoin', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberJoin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMemberJoinPrivate 客户运营平台API > 会员入会消息} */
  on(topic: 'taobao_opencrm_MemberJoinPrivate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMemberJoinPrivate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmMobileRankingReceipt 客户运营平台API > 手机热榜回执消息} */
  on(topic: 'taobao_opencrm_MobileRankingReceipt', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmMobileRankingReceipt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmNodeExecuteFinished 客户运营平台API > 节点执行完成消息} */
  on(topic: 'taobao_opencrm_NodeExecuteFinished', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmNodeExecuteFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmOpenStrategyEvent 客户运营平台API > 开放策略事件类单发短信TMC消息} */
  on(topic: 'taobao_opencrm_OpenStrategyEvent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmOpenStrategyEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSMSOfficaial 客户运营平台API > 官方营销场景短信发送通知} */
  on(topic: 'taobao_opencrm_SMSOfficaial', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmSMSOfficaial) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmSellerDimensionCharge 客户运营平台API > CRM商业化计费商家维度账单} */
  on(topic: 'taobao_opencrm_SellerDimensionCharge', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmSellerDimensionCharge) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageBill 客户运营平台API > 短信账单} */
  on(topic: 'taobao_opencrm_ShortMessageBill', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmShortMessageBill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrmShortMessageSent 客户运营平台API > 短信发送TMC} */
  on(topic: 'taobao_opencrm_ShortMessageSent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrmShortMessageSent) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoOpentradeOrderCreated 百川 > 百川订单创建成功} */
  on(topic: 'taobao_opentrade_OrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradeOrderModified 百川 > 百川订单修改成功} */
  on(topic: 'taobao_opentrade_OrderModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeOrderModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradePayOrderCreated 百川 > 百川资金流水单创建成功} */
  on(topic: 'taobao_opentrade_PayOrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradePayOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradePayOrderFailed 百川 > 百川资金流水单处理失败} */
  on(topic: 'taobao_opentrade_PayOrderFailed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradePayOrderFailed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradePayOrderProceed 百川 > 百川资金流水单处理成功} */
  on(topic: 'taobao_opentrade_PayOrderProceed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradePayOrderProceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradeSettleDisburseFailed 百川 > 百川订单分账处理失败} */
  on(topic: 'taobao_opentrade_SettleDisburseFailed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeSettleDisburseFailed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentradeSettleDisburseSucceed 百川 > 百川订单分账处理成功} */
  on(topic: 'taobao_opentrade_SettleDisburseSucceed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentradeSettleDisburseSucceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOsActivityCompleted 营销平台 > 前N有礼活动开奖消息} */
  on(topic: 'taobao_os_ActivityCompleted', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOsActivityCompleted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimaiDigitalTradeSuccess 淘宝 > 阿里拍卖数字商品交易成功消息} */
  on(topic: 'taobao_paimai_DigitalTradeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimaiDigitalTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimaiOrderCreate 淘宝 > 二手车xpos订单生成消息} */
  on(topic: 'taobao_paimai_OrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimaiOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimaiOrderPaid 淘宝 > 二手车xpos订单支付完成消息} */
  on(topic: 'taobao_paimai_OrderPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimaiOrderPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcBillsGenerate 采购宝API > PC企业购出账消息通知} */
  on(topic: 'taobao_pc_BillsGenerate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcBillsGenerate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcEgoDisputeOrder 采购宝API > PC企业购逆向订单消息} */
  on(topic: 'taobao_pc_EgoDisputeOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcEgoDisputeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcEgoTradeOrder 采购宝API > PC企业购交易订单消息} */
  on(topic: 'taobao_pc_EgoTradeOrder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcEgoTradeOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcEgoTradePackage 采购宝API > 订单包裹消息} */
  on(topic: 'taobao_pc_EgoTradePackage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcEgoTradePackage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcItemChange 采购宝API > 商品变更消息} */
  on(topic: 'taobao_pc_ItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcSaleInvoiceResult 采购宝API > PC企业购发票通知消息} */
  on(topic: 'taobao_pc_SaleInvoiceResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcSaleInvoiceResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPcSettleProcessEventMsg 采购宝API > PC企业购结算流程事件消息} */
  on(topic: 'taobao_pc_SettleProcessEventMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPcSettleProcessEventMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoProfitResultNotify 淘宝 > 权益领取结果通知} */
  on(topic: 'taobao_profit_ResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoProfitResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPunishForall 淘宝 > 淘宝处罚消息} */
  on(topic: 'taobao_punish_Forall', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPunishForall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniuCreateComment 千牛 > 工单评论} */
  on(topic: 'taobao_qianniu_CreateComment', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniuCreateComment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniuCreateLog 千牛 > 工单操作记录} */
  on(topic: 'taobao_qianniu_CreateLog', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniuCreateLog) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniuCreateTask 千牛 > 工单创建消息} */
  on(topic: 'taobao_qianniu_CreateTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniuCreateTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcAgDealRefund 淘宝 > AG退款处理} */
  on(topic: 'taobao_rdc_AgDealRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcAgDealRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligeniusOrderMsgSend 淘宝交易 > 订单消息} */
  on(topic: 'taobao_rdcaligenius_OrderMsgSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligeniusOrderMsgSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycleOfnPreRedPacketSync 淘宝交易 > 同步前置补贴红包的最新数据} */
  on(topic: 'taobao_recycle_OfnPreRedPacketSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycleOfnPreRedPacketSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundOrderStatusSync 淘宝退款 > 逆向订单数据同步} */
  on(topic: 'taobao_refund_OrderStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundOrderStatusSync) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoRefundRefundTimeoutRemind 淘宝退款 > 消息已下线} */
  on(topic: 'taobao_refund_RefundTimeoutRemind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableCanceled 淘宝退款 > 退款标记取消消息} */
  on(topic: 'taobao_refund_RefundableCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundRefundableMarked 淘宝退款 > 退款标记创建消息} */
  on(topic: 'taobao_refund_RefundableMarked', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoInterApplied 淘宝退款 > 申请淘宝介入消息} */
  on(topic: 'taobao_refund_TaobaoInterApplied', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoInterApplied) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefundTaobaoIntervened 淘宝退款 > 淘宝介入退款消息} */
  on(topic: 'taobao_refund_TaobaoIntervened', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefundTaobaoIntervened) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRetrieveCompleted 淘宝退款 > 商家挽回完结消息} */
  on(topic: 'taobao_retrieve_Completed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRetrieveCompleted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRetrieveStarted 淘宝退款 > 开始商家挽回消息} */
  on(topic: 'taobao_retrieve_Started', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRetrieveStarted) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeliveryUpdate 智能制造API > 订单发货通知} */
  on(topic: 'taobao_rhino_DeliveryUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoDeliveryUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoDeviceStatus 智能制造API > 智能制造-设备状态变更} */
  on(topic: 'taobao_rhino_DeviceStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoDeviceStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationCutProgressUpdateMessage 智能制造API > 裁剪进度变更消息} */
  on(topic: 'taobao_rhino_IntegrationCutProgressUpdateMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationCutProgressUpdateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationOrderProcessUpdateMessage 智能制造API > 订单工序变更通知消息} */
  on(topic: 'taobao_rhino_IntegrationOrderProcessUpdateMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationOrderProcessUpdateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationOuterOrderCreateMessage 智能制造API > 外协订单创建消息通知} */
  on(topic: 'taobao_rhino_IntegrationOuterOrderCreateMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationOuterOrderCreateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoIntegrationOuterProgressUpdateMessage 智能制造API > 外协进度变更消息} */
  on(topic: 'taobao_rhino_IntegrationOuterProgressUpdateMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoIntegrationOuterProgressUpdateMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoOrderStatusUpdate 智能制造API > 生产订单状态变化通知} */
  on(topic: 'taobao_rhino_OrderStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoOrderStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoPurchaseOrderCreate 智能制造API > 犀牛制造采购订单创建} */
  on(topic: 'taobao_rhino_PurchaseOrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoPurchaseOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoQcResultUpdate 智能制造API > 犀牛智造自动验布机质检结果更新消息} */
  on(topic: 'taobao_rhino_QcResultUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoQcResultUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhinoWarehouseUpdate 智能制造API > 订单入库通知} */
  on(topic: 'taobao_rhino_WarehouseUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhinoWarehouseUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRobotUserSubscribeResult 淘宝 > 机器人辅助状态变更消息通知} */
  on(topic: 'taobao_robot_UserSubscribeResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRobotUserSubscribeResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSecWlcAlipaySync 淘宝 > 无量尺风控信息同步支付宝} */
  on(topic: 'taobao_sec_WlcAlipaySync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSecWlcAlipaySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSeedGeneralDataCommutation 淘宝 > 淘宝种草数据交换} */
  on(topic: 'taobao_seed_GeneralDataCommutation', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSeedGeneralDataCommutation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundBuyerModifyAgreement 闪购交易 > 买家修改退款协议消息} */
  on(topic: 'taobao_shangou_RefundBuyerModifyAgreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundBuyerModifyAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundBuyerReturnGoods 闪购交易 > 买家退货给卖家消息} */
  on(topic: 'taobao_shangou_RefundBuyerReturnGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundClosed 闪购交易 > 闪购退款关闭} */
  on(topic: 'taobao_shangou_RefundClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundCreated 闪购交易 > 闪购退款创建} */
  on(topic: 'taobao_shangou_RefundCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundSellerAgreeAgreement 闪购交易 > 卖家同意退款协议消息} */
  on(topic: 'taobao_shangou_RefundSellerAgreeAgreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundSellerAgreeAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundSellerRefuseAgreement 闪购交易 > 卖家拒绝退款协议消息} */
  on(topic: 'taobao_shangou_RefundSellerRefuseAgreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundSellerRefuseAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouRefundSuccess 闪购交易 > 闪购退款成功} */
  on(topic: 'taobao_shangou_RefundSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouRefundSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeBuyerPay 闪购交易 > 闪购订单付款成功} */
  on(topic: 'taobao_shangou_TradeBuyerPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeClose 闪购交易 > 闪购订单关闭} */
  on(topic: 'taobao_shangou_TradeClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeCreate 闪购交易 > 闪购订单创建} */
  on(topic: 'taobao_shangou_TradeCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeMemoModified 闪购交易 > 闪购订单交易备注变更} */
  on(topic: 'taobao_shangou_TradeMemoModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeMemoModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeSellerShip 闪购交易 > 闪购订单发货} */
  on(topic: 'taobao_shangou_TradeSellerShip', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangouTradeSuccess 闪购交易 > 闪购订单交易成功} */
  on(topic: 'taobao_shangou_TradeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangouTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShopVary 淘宝 > 淘宝店铺变更} */
  on(topic: 'taobao_shop_Vary', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShopVary) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShoptransferUniTrans 淘宝 > 过户结果消息} */
  on(topic: 'taobao_shoptransfer_UniTrans', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShoptransferUniTrans) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSinianTest 淘宝 > 似年测试消息服务} */
  on(topic: 'taobao_sinian_Test', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSinianTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappAppSubChange 平台消息 > 用户订阅变更消息} */
  on(topic: 'taobao_smartapp_AppSubChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappAppSubChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappDataSync 平台消息 > 智能应用服务登记数据变更消息} */
  on(topic: 'taobao_smartapp_DataSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappDataSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappDiagnosticMetrics 平台消息 > 智能应用开放生意参谋诊断指标} */
  on(topic: 'taobao_smartapp_DiagnosticMetrics', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappDiagnosticMetrics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappOrderAlert 平台消息 > 淘宝智能应用订单预警事件} */
  on(topic: 'taobao_smartapp_OrderAlert', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappOrderAlert) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappPresellEnd 平台消息 > 淘宝智能应用预售尾款截止短信催付} */
  on(topic: 'taobao_smartapp_PresellEnd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappPresellEnd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappPresellStart 平台消息 > 淘宝智能应用预售开始短信催付} */
  on(topic: 'taobao_smartapp_PresellStart', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappPresellStart) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappSchedulerTask 平台消息 > 定时任务消息} */
  on(topic: 'taobao_smartapp_SchedulerTask', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappSchedulerTask) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappSendMsg 平台消息 > 淘宝智能应用短信发送触发} */
  on(topic: 'taobao_smartapp_SendMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappSendMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappTableSync 平台消息 > 智能应用服务登记工作表变更消息} */
  on(topic: 'taobao_smartapp_TableSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappTableSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartappWorktableRecord 平台消息 > 智能应用工作表数据操作消息} */
  on(topic: 'taobao_smartapp_WorktableRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartappWorktableRecord) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartcallReceipt 客户运营平台API > 智能外呼回执} */
  on(topic: 'taobao_smartcall_Receipt', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartcallReceipt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmallItemAssigned 淘宝 > 商品已分配消息} */
  on(topic: 'taobao_smartmall_ItemAssigned', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmallItemAssigned) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmallLogistic 淘宝 > 发货物流通知} */
  on(topic: 'taobao_smartmall_Logistic', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmallLogistic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmallPaySuccess 淘宝 > 付款成功消息} */
  on(topic: 'taobao_smartmall_PaySuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmallPaySuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSuppPayment 淘宝 > 猫超供应链打款} */
  on(topic: 'taobao_supp_Payment', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSuppPayment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSurveyAnswerNotify 淘宝 > 悉牛问卷答案提交通知} */
  on(topic: 'taobao_survey_AnswerNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSurveyAnswerNotify) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTaeItemDelete 导购平台 > 商品删除消息} */
  on(topic: 'taobao_tae_ItemDelete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaeItemDelete) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTaotvVideoInvalid 淘宝电视 > 媒资视频下线消息} */
  on(topic: 'taobao_taotv_VideoInvalid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaotvVideoInvalid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaotvVideoPublish 淘宝电视 > 媒资视频上线消息} */
  on(topic: 'taobao_taotv_VideoPublish', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaotvVideoPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkContentMsgGet 淘宝 > 媒体内容消息接收API} */
  on(topic: 'taobao_tbk_ContentMsgGet', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkContentMsgGet) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkItemMaterialPush 淘宝 > 淘宝联盟官方单品物料推送} */
  on(topic: 'taobao_tbk_ItemMaterialPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkItemMaterialPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkJINGCAITOUTIAOTljReport 淘宝 > 淘礼金实时报表} */
  on(topic: 'taobao_tbk_JINGCAITOUTIAOTljReport', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkJINGCAITOUTIAOTljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkJUXIAOXITljReport 淘宝 > 淘礼金实时报表} */
  on(topic: 'taobao_tbk_JUXIAOXITljReport', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkJUXIAOXITljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkMENGXIAOMITljReport 淘宝 > 淘礼金实时报表} */
  on(topic: 'taobao_tbk_MENGXIAOMITljReport', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkMENGXIAOMITljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkPubOrderDispatch 淘宝 > 淘宝客-服务商-pub派单消息发送} */
  on(topic: 'taobao_tbk_PubOrderDispatch', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkPubOrderDispatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbkYOUSHITljReport 淘宝 > 淘礼金报表API} */
  on(topic: 'taobao_tbk_YOUSHITljReport', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbkYOUSHITljReport) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTcMaterialStock 淘宝 > 物资库存变动} */
  on(topic: 'taobao_tc_MaterialStock', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTcMaterialStock) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestChengfeiDirect 淘宝 > taobao_test_ChengfeiDirect} */
  on(topic: 'taobao_test_ChengfeiDirect', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestChengfeiDirect) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestEventScheduleOne 淘宝 > taobao_test_EventScheduleOne} */
  on(topic: 'taobao_test_EventScheduleOne', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestEventScheduleOne) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestEventScheduleThree 淘宝 > taobao_test_EventScheduleThree} */
  on(topic: 'taobao_test_EventScheduleThree', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestEventScheduleThree) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestEventScheduleTwo 淘宝 > taobao_test_EventScheduleTwo} */
  on(topic: 'taobao_test_EventScheduleTwo', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestEventScheduleTwo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestHelloWorld 淘宝 > taobao_test_hellollll} */
  on(topic: 'taobao_test_HelloWorld', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestHelloWorld) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTestTaoNodeTopic 淘宝 > 物流消息taobao_test_logistics_TaoNodeTopic} */
  on(topic: 'taobao_test_TaoNodeTopic', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTestTaoNodeTopic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTmgQualityControlInspectOrderNotify 天猫国际 > 天猫国际品控质检服务单通知} */
  on(topic: 'taobao_tmg_QualityControlInspectOrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTmgQualityControlInspectOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTmgTradeInspectOrderChangeTest 天猫国际 > 天猫国际品控质检单开放测试} */
  on(topic: 'taobao_tmg_TradeInspectOrderChangeTest', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTmgTradeInspectOrderChangeTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopAuthCancel 平台消息 > 取消授权消息通知} */
  on(topic: 'taobao_top_AuthCancel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopAuthCancel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopMqfNotify 平台消息 > mqf消息通道} */
  on(topic: 'taobao_top_MqfNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopMqfNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopOnsSinianTest 平台消息 > 似年测试ONS} */
  on(topic: 'taobao_top_OnsSinianTest', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopOnsSinianTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopOnstest 平台消息 > 承仙测试ons} */
  on(topic: 'taobao_top_Onstest', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopOnstest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopProcessCallback 平台消息 > 工作流执行回调消息} */
  on(topic: 'taobao_top_ProcessCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopProcessCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopSellerFeedbackQuery 平台消息 > 三方应用质量——商家反馈查询} */
  on(topic: 'taobao_top_SellerFeedbackQuery', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopSellerFeedbackQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopTdpCheckOrderAdvance 平台消息 > 淘宝-开放平台-数据推送-对单架构升级-对单任务消息} */
  on(topic: 'taobao_top_TdpCheckOrderAdvance', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopTdpCheckOrderAdvance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopadminHelloWorld 淘宝 > 友仔消息测试} */
  on(topic: 'taobao_topadmin_HelloWorld', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopadminHelloWorld) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopatsTaskComplete 平台消息 > 异步任务执行完成} */
  on(topic: 'taobao_topats_TaskComplete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopatsTaskComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeAdvanceDisburse 淘宝交易 > 订单极速放款成功消息} */
  on(topic: 'taobao_trade_AdvanceDisburse', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeAdvanceDisburse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeDoorInstallsettle 淘宝交易 > 淘宝上门安装服务费用结算} */
  on(topic: 'taobao_trade_DoorInstallsettle', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeDoorInstallsettle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeFiveApi 淘宝交易 > 第五个测试API} */
  on(topic: 'taobao_trade_FiveApi', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeFiveApi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeOpenTradePush 淘宝交易 > 开放交易推进消息} */
  on(topic: 'taobao_trade_OpenTradePush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeOpenTradePush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeOrderSkuChanged 淘宝交易 > 修改子订单SKU成功} */
  on(topic: 'taobao_trade_OrderSkuChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeOrderSkuChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeSecondApi 淘宝交易 > 第二个测试API} */
  on(topic: 'taobao_trade_SecondApi', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeSecondApi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTest 淘宝交易 > 挚涵消息测试} */
  on(topic: 'taobao_trade_Test', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTestFour 淘宝交易 > taobao_trade_TestFour} */
  on(topic: 'taobao_trade_TestFour', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTestFour) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeThirdApi 淘宝交易 > 第三个测试API} */
  on(topic: 'taobao_trade_ThirdApi', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeThirdApi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeAlipayCreate 淘宝交易 > 创建支付宝订单消息} */
  on(topic: 'taobao_trade_TradeAlipayCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeAlipayCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPay 淘宝交易 > 买家付完款，或万人团买家付完尾款} */
  on(topic: 'taobao_trade_TradeBuyerPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeBuyerPaySubOut 淘宝交易 > 子订单维度付款消息（对外）} */
  on(topic: 'taobao_trade_TradeBuyerPaySubOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeBuyerPaySubOut) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTradeTradeCreateDelay 淘宝交易 > 创建淘宝交易延迟消息} */
  on(topic: 'taobao_trade_TradeCreateDelay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCreateDelay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeCreatess 淘宝交易 > 双} */
  on(topic: 'taobao_trade_TradeCreatess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeCreatess) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoTradeTradePeriodSuccess 淘宝交易 > 交易阶段成功消息} */
  on(topic: 'taobao_trade_TradePeriodSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradePeriodSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRated 淘宝交易 > 交易评价变更消息} */
  on(topic: 'taobao_trade_TradeRated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeRated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeRatedOut 淘宝交易 > 淘宝开发平台内部使用评价变更消息out} */
  on(topic: 'taobao_trade_TradeRatedOut', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeRatedOut) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSellerShip 淘宝交易 > 卖家发货消息} */
  on(topic: 'taobao_trade_TradeSellerShip', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSellerShip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccess 淘宝交易 > 交易成功消息} */
  on(topic: 'taobao_trade_TradeSuccess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSuccess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeSuccessDelay 淘宝交易 > 交易成功延迟消息} */
  on(topic: 'taobao_trade_TradeSuccessDelay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeSuccessDelay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeTradeTimeoutRemind 淘宝交易 > 交易超时提醒消息} */
  on(topic: 'taobao_trade_TradeTimeoutRemind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeTradeTimeoutRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTradeZhihan 淘宝交易 > API测试} */
  on(topic: 'taobao_trade_Zhihan', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTradeZhihan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTraderateImprBadTag 淘宝 > 负面印象评价消息} */
  on(topic: 'taobao_traderate_ImprBadTag', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTraderateImprBadTag) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainAgentQueryInfoNotify 淘宝火车票 > 代理商查询信息消息} */
  on(topic: 'taobao_train_AgentQueryInfoNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainAgentQueryInfoNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainOrderNotify 淘宝火车票 > 火车线下票代理商通知} */
  on(topic: 'taobao_train_OrderNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainOrderNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainThirdPartyTradeNotify 淘宝火车票 > 火车票订单发给带三方接入消息} */
  on(topic: 'taobao_train_ThirdPartyTradeNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainThirdPartyTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrainTradeNotify 淘宝火车票 > 火车票订单消息} */
  on(topic: 'taobao_train_TradeNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrainTradeNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTravelticketMsgTrade 淘宝 > 门票交易消息通知} */
  on(topic: 'taobao_travelticket_MsgTrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTravelticketMsgTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTripPartnerLevelUpMessage 淘宝 > 航旅会员升级消息} */
  on(topic: 'taobao_trip_PartnerLevelUpMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTripPartnerLevelUpMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTripUserFlightDelayInsurance 淘宝 > 航旅会员机票延误险消息} */
  on(topic: 'taobao_trip_UserFlightDelayInsurance', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTripUserFlightDelayInsurance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslAlarmCreate 业务平台新零售-消息上行 > 设备报警消息接口} */
  on(topic: 'taobao_uscesl_AlarmCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslAlarmCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsceslBindResult 业务平台新零售-消息上行 > 电子价签绑定执行结果消息} */
  on(topic: 'taobao_uscesl_BindResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsceslBindResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsergrowthIconRelationBind 淘宝 > 金币游戏专用-好友通过之后发消息} */
  on(topic: 'taobao_usergrowth_IconRelationBind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsergrowthIconRelationBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsergrowthRelationBind 淘宝 > 好友关系确认消息通知} */
  on(topic: 'taobao_usergrowth_RelationBind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsergrowthRelationBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVerifyAuditResult 淘宝 > 实人认证审核结果} */
  on(topic: 'taobao_verify_AuditResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVerifyAuditResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVerifyTokenSend 淘宝 > 发送令牌} */
  on(topic: 'taobao_verify_TokenSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVerifyTokenSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVideoSyncResult 淘宝视频 > 淘视频同步视频接口} */
  on(topic: 'taobao_video_SyncResult', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVideoSyncResult) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVideoVideoTran 淘宝视频 > 淘宝视频转码结果消息} */
  on(topic: 'taobao_video_VideoTran', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVideoVideoTran) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVipLevelChange 淘宝VIP > 会员身份变化} */
  on(topic: 'taobao_vip_LevelChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVipLevelChange) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TaobaoWangwangOANotify 淘宝 > 主子账号之间旺旺消息发送} */
  on(topic: 'taobao_wangwang_OANotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWangwangOANotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktmsDeliverer 淘宝 > 配送员消息推送} */
  on(topic: 'taobao_wdktms_Deliverer', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktmsDeliverer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktmsSendDemand 淘宝 > 运力消息} */
  on(topic: 'taobao_wdktms_SendDemand', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktmsSendDemand) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktmsWaybill 淘宝 > 运单变更消息通知外部系统} */
  on(topic: 'taobao_wdktms_Waybill', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktmsWaybill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionNotice 智慧门店下行消息 > 人脸抓拍识别消息} */
  on(topic: 'taobao_wisdomstore_RecognitionNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstoreRecognitionPush 智慧门店下行消息 > 人脸识别结果回传ISV} */
  on(topic: 'taobao_wisdomstore_RecognitionPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstoreRecognitionPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWmsReserveStatusCallback 淘宝 > WMS预约单状态回传} */
  on(topic: 'taobao_wms_ReserveStatusCallback', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWmsReserveStatusCallback) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWmsReserveStockInOrderConfirm 淘宝 > 到货通知单收货确认} */
  on(topic: 'taobao_wms_ReserveStockInOrderConfirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWmsReserveStockInOrderConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWorktableInsertData 淘宝 > 智能应用工作表数据新增} */
  on(topic: 'taobao_worktable_InsertData', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWorktableInsertData) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtContractOrderMsgSync 淘宝 > 通知运营商合约号卡订单可以下行} */
  on(topic: 'taobao_wt_ContractOrderMsgSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtContractOrderMsgSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtOpenTradeMsg 淘宝 > 礼包交易开放消息同步支付宝话费宝侧} */
  on(topic: 'taobao_wt_OpenTradeMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtOpenTradeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtOpenTradePreauthorizMsg 淘宝 > 存送业务预授权操作结果通知} */
  on(topic: 'taobao_wt_OpenTradePreauthorizMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtOpenTradePreauthorizMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtOpenTradeTaskMsg 淘宝 > 开放交易任务完成消息} */
  on(topic: 'taobao_wt_OpenTradeTaskMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtOpenTradeTaskMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWtVerifyInform 淘宝 > 阿里通信实人认证主动通知运营商} */
  on(topic: 'taobao_wt_VerifyInform', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWtVerifyInform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXhotelDistributionStdInfoChange 酒店标准库基础信息变更消息 > 通用分销 标准信息变更消息} */
  on(topic: 'taobao_xhotel_DistributionStdInfoChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXhotelDistributionStdInfoChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuHouseBooking 闲鱼 > 闲鱼房源预约消息} */
  on(topic: 'taobao_xianyu_HouseBooking', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuHouseBooking) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentBillPaid 闲鱼 > 闲鱼租房订单支付} */
  on(topic: 'taobao_xianyu_RentBillPaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentBillPaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentContractCreate 闲鱼 > 闲鱼租房合约创建} */
  on(topic: 'taobao_xianyu_RentContractCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentContractCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnCanceled 闲鱼 > 买家取消预约归还} */
  on(topic: 'taobao_xianyu_RentalItemReturnCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalItemReturnReserved 闲鱼 > 买家预约上门取件} */
  on(topic: 'taobao_xianyu_RentalItemReturnReserved', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalItemReturnReserved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCanceled 闲鱼 > 租赁订单取消} */
  on(topic: 'taobao_xianyu_RentalOrderCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyuRentalOrderCreated 闲鱼 > 租赁订单创建} */
  on(topic: 'taobao_xianyu_RentalOrderCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyuRentalOrderCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderChange 淘宝 > 订单变更通知} */
  on(topic: 'taobao_xiaoqu_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderClose 淘宝 > 订单关闭通知} */
  on(topic: 'taobao_xiaoqu_OrderClose', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderClose) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderCreate 淘宝 > 创建订单消息通知} */
  on(topic: 'taobao_xiaoqu_OrderCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderFinish 淘宝 > 订单正常完成通知} */
  on(topic: 'taobao_xiaoqu_OrderFinish', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderFinish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderPackage 淘宝 > 订单打包完成通知} */
  on(topic: 'taobao_xiaoqu_OrderPackage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderPackage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderPay 淘宝 > 买家付款消息通知} */
  on(topic: 'taobao_xiaoqu_OrderPay', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderPay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoquOrderPorcess 淘宝 > 通知合作伙伴订单发生变化} */
  on(topic: 'taobao_xiaoqu_OrderPorcess', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoquOrderPorcess) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiMessage IOT-智能制造 > 获取推送消息} */
  on(topic: 'taobao_xiaowei_Message', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoweiMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoweiTest IOT-智能制造 > xiaowe测试消息} */
  on(topic: 'taobao_xiaowei_Test', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoweiTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoYichaoWarrantyCodeStatusUpdate 淘宝 > 蚁巢保修码状态变更消息} */
  on(topic: 'taobao_yichao_WarrantyCodeStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoYichaoWarrantyCodeStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkCloudIdentifyCreateNotify 淘宝真酷 > 淘宝真酷-云鉴定创建通知} */
  on(topic: 'taobao_zk_CloudIdentifyCreateNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkCloudIdentifyCreateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkCloudIdentifyResaleNotify 淘宝真酷 > 淘宝真酷二次鉴别通知} */
  on(topic: 'taobao_zk_CloudIdentifyResaleNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkCloudIdentifyResaleNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkFirstLogisticsNotify 淘宝真酷 > 淘宝真酷一段物流发货消息} */
  on(topic: 'taobao_zk_FirstLogisticsNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkFirstLogisticsNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkFirstLogisticsReceivedNotify 淘宝真酷 > 一段物流签收通知} */
  on(topic: 'taobao_zk_FirstLogisticsReceivedNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkFirstLogisticsReceivedNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkFirstLogisticsUpdateNotify 淘宝真酷 > 淘宝真酷-一段运单号修改消息} */
  on(topic: 'taobao_zk_FirstLogisticsUpdateNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkFirstLogisticsUpdateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkIdentifyCancelNotify 淘宝真酷 > 淘宝真酷-取消鉴别通知} */
  on(topic: 'taobao_zk_IdentifyCancelNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkIdentifyCancelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkIdentifyCreate 淘宝真酷 > 淘宝真酷需求鉴别单创建消息} */
  on(topic: 'taobao_zk_IdentifyCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkIdentifyCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkPauseNotify 淘宝真酷 > 淘宝真酷鉴别单暂停通知} */
  on(topic: 'taobao_zk_PauseNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkPauseNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkPreIdentifyModifyPicNotify 淘宝真酷 > 淘宝真酷-提前鉴别修改图片通知} */
  on(topic: 'taobao_zk_PreIdentifyModifyPicNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkPreIdentifyModifyPicNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkRefundNotify 淘宝真酷 > 真酷鉴定用户退款通知} */
  on(topic: 'taobao_zk_RefundNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkRefundNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkSecondLogisticsGotNotify 淘宝真酷 > 淘宝真酷二段寄出后揽收通知机构} */
  on(topic: 'taobao_zk_SecondLogisticsGotNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkSecondLogisticsGotNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkStoreIdentifyRequestResaleNotify 淘宝真酷 > 平台鉴别商家新增/修改二次免鉴申请消息通知isv} */
  on(topic: 'taobao_zk_StoreIdentifyRequestResaleNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkStoreIdentifyRequestResaleNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZkSubmitQuote 淘宝真酷 > 真酷供应商提交报价结果通知} */
  on(topic: 'taobao_zk_SubmitQuote', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZkSubmitQuote) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaotaoFilmThirdPartyRefundPush 淘宝 > 退款消息同步} */
  on(topic: 'taotao_film_ThirdPartyRefundPush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaotaoFilmThirdPartyRefundPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirm 天猫汽车 > 天猫汽车分阶段订单打款消息} */
  on(topic: 'tmall_aliauto_StepOrderPartConfirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliautoStepOrderPartConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliautoStepOrderPartConfirmed 天猫汽车 > 分阶段交易确认消息} */
  on(topic: 'tmall_aliauto_StepOrderPartConfirmed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliautoStepOrderPartConfirmed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoServiceReceiptCreate 天猫汽车 > 服务工单创建} */
  on(topic: 'tmall_auto_ServiceReceiptCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoServiceReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTradeModify 天猫汽车 > 天猫汽车交易订单开放} */
  on(topic: 'tmall_auto_TradeModify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTradeModify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAutoTwoWheelsReceiptCreate 天猫汽车 > 天猫二轮车服务工单创建开放} */
  on(topic: 'tmall_auto_TwoWheelsReceiptCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAutoTwoWheelsReceiptCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarAbnormalSettleSeller 天猫汽车 > 天猫汽车安装服务-异常商家上下线通知} */
  on(topic: 'tmall_car_AbnormalSettleSeller', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarAbnormalSettleSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarAliapayTelRedPacket 天猫汽车 > 天猫汽车-支付宝手机充值红包发放} */
  on(topic: 'tmall_car_AliapayTelRedPacket', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarAliapayTelRedPacket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarAlipayEvent 天猫汽车 > 天猫汽车触发支付宝事件发奖} */
  on(topic: 'tmall_car_AlipayEvent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarAlipayEvent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarContractSign 天猫汽车 > 合同签署消息} */
  on(topic: 'tmall_car_ContractSign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarContractSign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarFinanceMsg 天猫汽车 > 汽车金融消息} */
  on(topic: 'tmall_car_FinanceMsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarFinanceMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarTelCoupon 天猫汽车 > 天猫汽车特惠充} */
  on(topic: 'tmall_car_TelCoupon', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarTelCoupon) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarprofileAuthStatusChangeToISV 天猫 > 用户车辆档案授权状态更新} */
  on(topic: 'tmall_carprofile_AuthStatusChangeToISV', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarprofileAuthStatusChangeToISV) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallFuwuElectricMaintenanceWorkCardComplete 天猫服务 > 天猫服务消电维修工单完结消息} */
  on(topic: 'tmall_fuwu_ElectricMaintenanceWorkCardComplete', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuElectricMaintenanceWorkCardComplete) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuElectricWarrantyCodeStatusUpdate 天猫服务 > 天猫服务消电保修码状态变更} */
  on(topic: 'tmall_fuwu_ElectricWarrantyCodeStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuElectricWarrantyCodeStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuHomeDecorationSupplyRuleUpdate 天猫服务 > 天猫服务家装优质供给规则变更} */
  on(topic: 'tmall_fuwu_HomeDecorationSupplyRuleUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuHomeDecorationSupplyRuleUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuLogisticsInfoMessage 天猫服务 > 服务供应链物流业务消息} */
  on(topic: 'tmall_fuwu_LogisticsInfoMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuLogisticsInfoMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuNewAnomalyRecourseStatusUpdate 天猫服务 > 服务管控消息更新} */
  on(topic: 'tmall_fuwu_NewAnomalyRecourseStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuNewAnomalyRecourseStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuRateMessageTP 天猫服务 > 消费者评价成功top消息} */
  on(topic: 'tmall_fuwu_RateMessageTP', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuRateMessageTP) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuSendCallRecord 天猫服务 > 发送通话记录} */
  on(topic: 'tmall_fuwu_SendCallRecord', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuSendCallRecord) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusChange 天猫服务 > 天猫服务任务工单状态更新} */
  on(topic: 'tmall_fuwu_WorkcardStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwuWorkcardStatusUpdate 天猫服务 > 天猫服务任务工单状态变更} */
  on(topic: 'tmall_fuwu_WorkcardStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwuWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomedecorationfuwuWorkcardStatusUpdateForSeller 天猫 > 天猫家装服务工单状态推送} */
  on(topic: 'tmall_homedecorationfuwu_WorkcardStatusUpdateForSeller', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomedecorationfuwuWorkcardStatusUpdateForSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeserviceGroupWorkcardCreate 天猫服务 > 整单视角工单全部创建消息} */
  on(topic: 'tmall_homeservice_GroupWorkcardCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeserviceGroupWorkcardCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeserviceLogisticsUpdate 天猫服务 > 天猫家享服务物流更新} */
  on(topic: 'tmall_homeservice_LogisticsUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeserviceLogisticsUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeserviceTradeRefund 天猫服务 > 交易逆向消息} */
  on(topic: 'tmall_homeservice_TradeRefund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeserviceTradeRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallIfpfulfillResultNotice 天猫 > 创建订单结果通知接口} */
  on(topic: 'tmall_ifpfulfill_ResultNotice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallIfpfulfillResultNotice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallJstBusinessInformationSend 天猫 > 商家消息} */
  on(topic: 'tmall_jst_BusinessInformationSend', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallJstBusinessInformationSend) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiCrmBind 天猫美妆 > 绑定操作通知} */
  on(topic: 'tmall_mei_CrmBind', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiCrmBind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiCrmBindQuery 天猫美妆 > 用户绑定请求} */
  on(topic: 'tmall_mei_CrmBindQuery', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiCrmBindQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiCrmMemberQuery 天猫美妆 > 会员信息查询通知} */
  on(topic: 'tmall_mei_CrmMemberQuery', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiCrmMemberQuery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiGiftExchange 天猫美妆 > 天猫美妆店铺礼品兑换通知} */
  on(topic: 'tmall_mei_GiftExchange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiGiftExchange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiMemberRegister 天猫美妆 > 飞行入会消息} */
  on(topic: 'tmall_mei_MemberRegister', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiMemberRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMeiPointChange 天猫美妆 > 品牌积分变更通知} */
  on(topic: 'tmall_mei_PointChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMeiPointChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhInseasonUpdateNotify 天猫 > 魅力惠Inseason关键属性变化通知} */
  on(topic: 'tmall_mlh_InseasonUpdateNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhInseasonUpdateNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhInventorySync 天猫 > 魅力惠分销库存同步} */
  on(topic: 'tmall_mlh_InventorySync', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhInventorySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhOrderCancelNotify 天猫 > 魅力惠订单取消通知} */
  on(topic: 'tmall_mlh_OrderCancelNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhOrderCancelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhOrderDeliveryCallBack 天猫 > 魅力惠发货同步回调消息} */
  on(topic: 'tmall_mlh_OrderDeliveryCallBack', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhOrderDeliveryCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhOrderReturnCallBack 天猫 > 分销消退入库消息} */
  on(topic: 'tmall_mlh_OrderReturnCallBack', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhOrderReturnCallBack) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhPOAuditCompletedNotify 天猫 > 魅力惠PO单审批通过消息通知} */
  on(topic: 'tmall_mlh_POAuditCompletedNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhPOAuditCompletedNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlhPoReceivedNotify 天猫 > 魅力惠PO收货消息} */
  on(topic: 'tmall_mlh_PoReceivedNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlhPoReceivedNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMultshopMsg 天猫 > 多旗舰店签约完成消息} */
  on(topic: 'tmall_multshop_Msg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMultshopMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtItemsToEasyHome 新零售终端下行消息 > 商品信息同步} */
  on(topic: 'tmall_nrt_ItemsToEasyHome', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrtItemsToEasyHome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrtTcpsDeliveryStatus 新零售终端下行消息 > 天猫同城配送状态消息} */
  on(topic: 'tmall_nrt_TcpsDeliveryStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrtTcpsDeliveryStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOicInventoryInbound 天猫 > 天猫货品入库消息} */
  on(topic: 'tmall_oic_InventoryInbound', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOicInventoryInbound) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmniStoreAdd 全渠道API > 新零售门店审核通过消息} */
  on(topic: 'tmall_omni_StoreAdd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmniStoreAdd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannelDiscountedPriceChange 聚石塔 > 商品优惠价格变更} */
  on(topic: 'tmall_omnichannel_DiscountedPriceChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannelDiscountedPriceChange) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.TmallOnehourScmItem 天猫 > 货品商品同步} */
  on(topic: 'tmall_onehour_ScmItem', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOnehourScmItem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallPosfeeMsg 天猫 > 刷卡费率消息} */
  on(topic: 'tmall_posfee_Msg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallPosfeeMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundClosed 天猫 > 退款关闭消息} */
  on(topic: 'tmall_refund_RefundClosed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundClosed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundCreate 天猫 > 退款创建消息} */
  on(topic: 'tmall_refund_RefundCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundMessageCreated 天猫 > 创建退款留言消息} */
  on(topic: 'tmall_refund_RefundMessageCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundMessageCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundModified 天猫 > 买家修改协议消息} */
  on(topic: 'tmall_refund_RefundModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundPaymentFinished 天猫 > 赔付完成消息} */
  on(topic: 'tmall_refund_RefundPaymentFinished', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundPaymentFinished) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundPrepaid 天猫 > 极速退款消息} */
  on(topic: 'tmall_refund_RefundPrepaid', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundPrepaid) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundSellerAgreeReturn 天猫 > 卖家同意退货消息} */
  on(topic: 'tmall_refund_RefundSellerAgreeReturn', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundSellerAgreeReturn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundSellerRefuse 天猫 > 卖家拒绝退款消息} */
  on(topic: 'tmall_refund_RefundSellerRefuse', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundSellerRefuse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundSucceed 天猫 > 退款成功消息} */
  on(topic: 'tmall_refund_RefundSucceed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundSucceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundTaobaoInvolved 天猫 > 小二介入消息} */
  on(topic: 'tmall_refund_RefundTaobaoInvolved', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundTaobaoInvolved) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundableCanceled 天猫 > 退款标记取消消息} */
  on(topic: 'tmall_refund_RefundableCanceled', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundableCanceled) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundRefundableMarked 天猫 > 退款标记创建消息} */
  on(topic: 'tmall_refund_RefundableMarked', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundRefundableMarked) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnBuyerReturnGoods 天猫 > 买家退货，填写退货单消息} */
  on(topic: 'tmall_refund_ReturnBuyerReturnGoods', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnBuyerReturnGoods) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnConfirmFailed 天猫 > 买家填写物流单，卖家拒绝退货消息} */
  on(topic: 'tmall_refund_ReturnConfirmFailed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnConfirmFailed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnConfirmSucceed 天猫 > 买家填写物流单，卖家确认收货消息} */
  on(topic: 'tmall_refund_ReturnConfirmSucceed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnConfirmSucceed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnCreated 天猫 > 卖家同意退货，退货单创建消息} */
  on(topic: 'tmall_refund_ReturnCreated', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnCreated) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefundReturnModified 天猫 > 退货单修改消息} */
  on(topic: 'tmall_refund_ReturnModified', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefundReturnModified) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRetailEcRelation 天猫 > 会员管理关系变更同步商家} */
  on(topic: 'tmall_retail_EcRelation', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRetailEcRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSasssignMsg 天猫 > sass签约消息} */
  on(topic: 'tmall_sasssign_Msg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallSasssignMsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallScmSendTmcsDistributeSettleFee 天猫 > 猫超经销结算打款消息} */
  on(topic: 'tmall_scm_SendTmcsDistributeSettleFee', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallScmSendTmcsDistributeSettleFee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceCycleBillInvoice 天猫服务 > 服务结算账期账单发票消息} */
  on(topic: 'tmall_service_CycleBillInvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceCycleBillInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterConsultationMessage 天猫服务 > 咨询工单消息} */
  on(topic: 'tmall_servicecenter_ConsultationMessage', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenterConsultationMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenterTaskUpdate 天猫服务 > 天猫服务平台工单更新} */
  on(topic: 'tmall_servicecenter_TaskUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenterTaskUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformServiceProductChanged 天猫服务 > 天猫服务产品变更消息} */
  on(topic: 'tmall_serviceplatform_ServiceProductChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformServiceProductChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSignCreate 天猫服务 > 签到消息} */
  on(topic: 'tmall_serviceplatform_SignCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformSignCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformSubscribeServiceChanged 天猫服务 > 天猫服务订购消息} */
  on(topic: 'tmall_serviceplatform_SubscribeServiceChanged', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformSubscribeServiceChanged) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatformWorkerLeave 天猫服务 > 工人请假发送消息} */
  on(topic: 'tmall_serviceplatform_WorkerLeave', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatformWorkerLeave) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSupermarketHaitunEventCreate 天猫 > 猫超业务支付宝海豚事件创建} */
  on(topic: 'tmall_supermarket_HaitunEventCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallSupermarketHaitunEventCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTccompassDeliveryRangesUpdate 天猫 > 罗盘变动消息} */
  on(topic: 'tmall_tccompass_DeliveryRangesUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTccompassDeliveryRangesUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcItemExcelSchemaNotify 天猫 > JV商品发布excel schema生成后通知ISV的消息} */
  on(topic: 'tmall_tlc_ItemExcelSchemaNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcItemExcelSchemaNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcItemPriceExcelNotify 天猫 > 商品批量改价} */
  on(topic: 'tmall_tlc_ItemPriceExcelNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcItemPriceExcelNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcItemsExcelResultNotify 天猫 > 商品批量发布excel结果反馈消息} */
  on(topic: 'tmall_tlc_ItemsExcelResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcItemsExcelResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcProductsExcelResultNotify 天猫 > 上传货品详情excel结果生成TOP消息} */
  on(topic: 'tmall_tlc_ProductsExcelResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcProductsExcelResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcProductsExcelSchemaNotify 天猫 > 货品详情excel模版生成TOP消息} */
  on(topic: 'tmall_tlc_ProductsExcelSchemaNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcProductsExcelSchemaNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlcUpDownItemNotify 天猫 > JV商品上下架通知ISV的消息} */
  on(topic: 'tmall_tlc_UpDownItemNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlcUpDownItemNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTmgBrandMemberTrade 天猫 > 天猫国际品牌会员交易消息} */
  on(topic: 'tmall_tmg_BrandMemberTrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTmgBrandMemberTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallXfFutureOrders 天猫 > 天猫鞋服期货订单消息} */
  on(topic: 'tmall_xf_FutureOrders', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallXfFutureOrders) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallXfGoodsInfo 天猫 > 天猫鞋服货品信息回流} */
  on(topic: 'tmall_xf_GoodsInfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallXfGoodsInfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYichaoWorkcardStatusUpdate 天猫服务 > 蚁巢工单更新消息} */
  on(topic: 'tmall_yichao_WorkcardStatusUpdate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallYichaoWorkcardStatusUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYougouItemChange 天猫 > 天猫优购商品变更} */
  on(topic: 'tmall_yougou_ItemChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallYougouItemChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYougouOrderChange 天猫 > 天猫优购订单变更} */
  on(topic: 'tmall_yougou_OrderChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallYougouOrderChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TobaoLiveLiveEventChange 直播间 > 直播间氛围消息开放} */
  on(topic: 'tobao_live_LiveEventChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.TobaoLiveLiveEventChange) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.UmengOplusOfflineDataToAlipay 友盟 > 友盟线下数据} */
  on(topic: 'umeng_oplus_OfflineDataToAlipay', listener: (this: TaoMessageConsumer, message: IncomingMessage.UmengOplusOfflineDataToAlipay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkCapacityDelivery 五道口 > 盒马运力消息} */
  on(topic: 'wdk_capacity_Delivery', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkCapacityDelivery) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuError 五道口营销 > 营销操作错误消息} */
  on(topic: 'wdk_market_OperateSkuError', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarketOperateSkuErrror 五道口营销 > 营销发布商品错误} */
  on(topic: 'wdk_market_OperateSkuErrror', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarketOperateSkuErrror) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataPublishError 五道口营销 > 五道口开放数据发布错误} */
  on(topic: 'wdk_open_DataPublishError', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataPublishError) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpenDataRelation 五道口营销 > 五道口开放数据关联通知} */
  on(topic: 'wdk_open_DataRelation', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpenDataRelation) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkWorkforceRequirementPublish 五道口 > 盒马三方用工需求发布} */
  on(topic: 'wdk_workforce_RequirementPublish', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkWorkforceRequirementPublish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XhotelDistributionStatusChange 酒店交易消息API > 飞猪酒店订单状态变更消息} */
  on(topic: 'xhotel_distribution_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XhotelDistributionStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersaleOrderSyn 闲鱼 > 闲鱼售后订单状态变更消息} */
  on(topic: 'xianyu_aftersale_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersaleOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraiseOrderSyn 闲鱼 > 验货担保订单状态同步回收商} */
  on(topic: 'xianyu_appraise_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraiseOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCarOrderStatusSync 闲鱼回收商消息 > 闲鱼二手车寄卖订单状态同步} */
  on(topic: 'xianyu_car_OrderStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCarOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCcoComplain 闲鱼电商Saas > 闲鱼投诉消息} */
  on(topic: 'xianyu_cco_Complain', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCcoComplain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCoinCoinDeductionChange 闲鱼电商Saas > 闲鱼币交易抵扣变更消息} */
  on(topic: 'xianyu_coin_CoinDeductionChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCoinCoinDeductionChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtoxCommissionStateSyn 闲鱼 > 闲鱼C2X抽佣退佣消息同步} */
  on(topic: 'xianyu_ctox_CommissionStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtoxCommissionStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtoxPayDkChange 闲鱼 > c2x代扣协议变更通知} */
  on(topic: 'xianyu_ctox_PayDkChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtoxPayDkChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtoxRateStateSyn 闲鱼 > c2x业务订单评价消息同步} */
  on(topic: 'xianyu_ctox_RateStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtoxRateStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuEnvironmentEventSyn 闲鱼 > 闲鱼双11公益游戏任务事件同步} */
  on(topic: 'xianyu_environment_EventSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuEnvironmentEventSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuFishmarketItemSyn 闲鱼 > 鱼市商品状态变更} */
  on(topic: 'xianyu_fishmarket_ItemSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuFishmarketItemSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuHjbtPaymentStatus 闲鱼 > 换机补贴打款消息} */
  on(topic: 'xianyu_hjbt_PaymentStatus', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuHjbtPaymentStatus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuIsvOrderRemind 闲鱼 > 闲鱼服务商订单提醒} */
  on(topic: 'xianyu_isv_OrderRemind', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuIsvOrderRemind) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuMarketrecycleOrderStateSyn 闲鱼 > 保卖订单变更通知} */
  on(topic: 'xianyu_marketrecycle_OrderStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuMarketrecycleOrderStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuMarketrecyclePlanStateSyn 闲鱼 > 闲鱼保卖计划变更消息} */
  on(topic: 'xianyu_marketrecycle_PlanStateSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuMarketrecyclePlanStateSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuOutletCycleBuyVendueCreate 闲鱼电商Saas > 闲鱼奥莱周期拍拍品创建} */
  on(topic: 'xianyu_outlet_CycleBuyVendueCreate', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuOutletCycleBuyVendueCreate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleOrderStatusSync 闲鱼 > 订单状态同步给回收商} */
  on(topic: 'xianyu_recycle_OrderStatusSync', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleOrderStatusSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycleSpuModifySync 闲鱼 > 闲鱼回收SPU变更消息} */
  on(topic: 'xianyu_recycle_SpuModifySync', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycleSpuModifySync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRegisterStatusChange 闲鱼 > 闲鱼SPU挂载上下线消息} */
  on(topic: 'xianyu_register_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRegisterStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateQuesChange 闲鱼 > 闲鱼问卷变更} */
  on(topic: 'xianyu_template_QuesChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateQuesChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplateStatusChange 闲鱼 > 闲鱼问卷状态变更消息} */
  on(topic: 'xianyu_template_StatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplateStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTenderOrderSyn 闲鱼 > 省心卖-暗拍项目订单消息} */
  on(topic: 'xianyu_tender_OrderSyn', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTenderOrderSyn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYellowboxGpuTemplatePunish 闲鱼电商Saas > GPU模版处罚消息通知} */
  on(topic: 'xianyu_yellowbox_GpuTemplatePunish', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYellowboxGpuTemplatePunish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYushiTsOffShelf 闲鱼 > 闲鱼商品下架消息} */
  on(topic: 'xianyu_yushi_TsOffShelf', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYushiTsOffShelf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuAigcTrainResultNotify 优酷 > 妙鸭SaaS对外开放-训练结果通知} */
  on(topic: 'youku_aigc_TrainResultNotify', listener: (this: TaoMessageConsumer, message: IncomingMessage.YoukuAigcTrainResultNotify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstoreAppStatusChange TVOS应用审核平台 > TVOS审核平台应用状态变更通知消息} */
  on(topic: 'youku_tvosappstore_AppStatusChange', listener: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstoreAppStatusChange) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosWatchCmnsReceive AliOS手表 > 透传cmns接收消息} */
  on(topic: 'yunos_watch_CmnsReceive', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosWatchCmnsReceive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocDatapoolSandbox YunOS YoC > YunOS YoC datapool 沙箱环境} */
  on(topic: 'yunos_yoc_DatapoolSandbox', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocDatapoolSandbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYocMessageService YunOS YoC > yoc消息服务} */
  on(topic: 'yunos_yoc_MessageService', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosYocMessageService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AeLogistics} */
  on(topic: 'ae_logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.AeLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliFin} */
  on(topic: 'ali_fin', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliFin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliInfodept} */
  on(topic: 'ali_infodept', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliInfodept) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAdlab} */
  on(topic: 'alibaba_adlab', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAdlab) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAgro} */
  on(topic: 'alibaba_agro', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAgro) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilabs} */
  on(topic: 'alibaba_ailabs', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilabs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAilbas} */
  on(topic: 'alibaba_ailbas', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAilbas) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAis} */
  on(topic: 'alibaba_ais', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAis) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliabs} */
  on(topic: 'alibaba_aliabs', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliabs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlicom} */
  on(topic: 'alibaba_alicom', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlihealth} */
  on(topic: 'alibaba_alihealth', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlink} */
  on(topic: 'alibaba_alink', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlink) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAliqin} */
  on(topic: 'alibaba_aliqin', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAliqin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAlisports} */
  on(topic: 'alibaba_alisports', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAlisports) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaAscpchannelmanagermentmsg} */
  on(topic: 'alibaba_ascpchannelmanagermentmsg', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaAscpchannelmanagermentmsg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCfo} */
  on(topic: 'alibaba_cfo', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCfo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCoupon} */
  on(topic: 'alibaba_coupon', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCoupon) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrm} */
  on(topic: 'alibaba_crm', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCrowdsourcing} */
  on(topic: 'alibaba_crowdsourcing', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCrowdsourcing) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaCsr} */
  on(topic: 'alibaba_csr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaCsr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaDecoration} */
  on(topic: 'alibaba_decoration', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaDecoration) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEinvoice} */
  on(topic: 'alibaba_einvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaEsl} */
  on(topic: 'alibaba_esl', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaEsl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaFuwu} */
  on(topic: 'alibaba_fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappyfinance} */
  on(topic: 'alibaba_happyfinance', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappyfinance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHappytrip} */
  on(topic: 'alibaba_happytrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHappytrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHj} */
  on(topic: 'alibaba_hj', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHj) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaHomestyler} */
  on(topic: 'alibaba_homestyler', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaHomestyler) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIcbulive} */
  on(topic: 'alibaba_icbulive', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIcbulive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIdle} */
  on(topic: 'alibaba_idle', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIdle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIfp} */
  on(topic: 'alibaba_ifp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIfp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInfop} */
  on(topic: 'alibaba_infop', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInfop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaIntime} */
  on(topic: 'alibaba_intime', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaIntime) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaInvoice} */
  on(topic: 'alibaba_invoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaInvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaJym} */
  on(topic: 'alibaba_jym', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaJym) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKaola} */
  on(topic: 'alibaba_kaola', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKaola) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaKongur} */
  on(topic: 'alibaba_kongur', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaKongur) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLassen} */
  on(topic: 'alibaba_lassen', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLassen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLegal} */
  on(topic: 'alibaba_legal', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLegal) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaLst} */
  on(topic: 'alibaba_lst', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaLst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMmc} */
  on(topic: 'alibaba_mmc', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMonitor} */
  on(topic: 'alibaba_monitor', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMonitor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMos} */
  on(topic: 'alibaba_mos', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMos) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsd} */
  on(topic: 'alibaba_msd', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMsfservice} */
  on(topic: 'alibaba_msfservice', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMsfservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaMtp} */
  on(topic: 'alibaba_mtp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaMtp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNazca} */
  on(topic: 'alibaba_nazca', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNazca) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNewretail} */
  on(topic: 'alibaba_newretail', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNewretail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaNlife} */
  on(topic: 'alibaba_nlife', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaNlife) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaOkki} */
  on(topic: 'alibaba_okki', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaOkki) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPaimai} */
  on(topic: 'alibaba_paimai', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaPur} */
  on(topic: 'alibaba_pur', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaPur) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaServiceplatform} */
  on(topic: 'alibaba_serviceplatform', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaSp} */
  on(topic: 'alibaba_sp', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaSp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTax} */
  on(topic: 'alibaba_tax', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTax) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTbdx} */
  on(topic: 'alibaba_tbdx', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTbdx) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTc} */
  on(topic: 'alibaba_tc', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaThreehours} */
  on(topic: 'alibaba_threehours', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaThreehours) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTianji} */
  on(topic: 'alibaba_tianji', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTianji) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaTxd} */
  on(topic: 'alibaba_txd', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaTxd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaUni} */
  on(topic: 'alibaba_uni', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaUni) => void): TaoMessageConsumer;
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
  /** {@link IncomingMessage.AlibabaYichao} */
  on(topic: 'alibaba_yichao', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYichao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlibabaYunio} */
  on(topic: 'alibaba_yunio', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlibabaYunio) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomAxb} */
  on(topic: 'alicom_axb', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomAxb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomDeduct} */
  on(topic: 'alicom_deduct', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomDeduct) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlicomFlow} */
  on(topic: 'alicom_flow', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlicomFlow) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAeia} */
  on(topic: 'aliexpress_aeia', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAeia) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressAftersaleinsurance} */
  on(topic: 'aliexpress_aftersaleinsurance', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressAftersaleinsurance) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressMessage} */
  on(topic: 'aliexpress_message', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressMessage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressOrder} */
  on(topic: 'aliexpress_order', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressTrade} */
  on(topic: 'aliexpress_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliexpressWarranty} */
  on(topic: 'aliexpress_warranty', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliexpressWarranty) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthCep} */
  on(topic: 'alihealth_cep', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthCep) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthHb} */
  on(topic: 'alihealth_hb', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthHb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthTest} */
  on(topic: 'alihealth_test', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihealthYs} */
  on(topic: 'alihealth_ys', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihealthYs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseCustomer} */
  on(topic: 'alihouse_customer', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseCustomer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlihouseHouse} */
  on(topic: 'alihouse_house', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlihouseHouse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosCosmo} */
  on(topic: 'alios_cosmo', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliosCosmo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliosWatch} */
  on(topic: 'alios_watch', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliosWatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayAe} */
  on(topic: 'alipay_ae', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayAe) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoming} */
  on(topic: 'alipay_baoming', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoming) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayBaoxian} */
  on(topic: 'alipay_baoxian', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayBaoxian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayCharity} */
  on(topic: 'alipay_charity', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayCharity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayFenxiao} */
  on(topic: 'alipay_fenxiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayFenxiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayRefund} */
  on(topic: 'alipay_refund', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayScf} */
  on(topic: 'alipay_scf', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayScf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayTrade} */
  on(topic: 'alipay_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayUpdate} */
  on(topic: 'alipay_update', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayUpdate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipayXiaodai} */
  on(topic: 'alipay_xiaodai', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipayXiaodai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlipicLark} */
  on(topic: 'alipic_lark', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlipicLark) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlisportsBank} */
  on(topic: 'alisports_bank', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlisportsBank) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripAgent} */
  on(topic: 'alitrip_agent', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripAgent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtrip} */
  on(topic: 'alitrip_btrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripBtriphotel} */
  on(topic: 'alitrip_btriphotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripBtriphotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripEbooking} */
  on(topic: 'alitrip_ebooking', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripEbooking) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripFlight} */
  on(topic: 'alitrip_flight', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripHotel} */
  on(topic: 'alitrip_hotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIesr} */
  on(topic: 'alitrip_iesr', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIesr) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripIetrade} */
  on(topic: 'alitrip_ietrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripIetrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripSync} */
  on(topic: 'alitrip_sync', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripSync) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTf} */
  on(topic: 'alitrip_tf', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrade} */
  on(topic: 'alitrip_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTrain} */
  on(topic: 'alitrip_train', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTravel} */
  on(topic: 'alitrip_travel', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTravel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripTripticket} */
  on(topic: 'alitrip_tripticket', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripTripticket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlitripVisa} */
  on(topic: 'alitrip_visa', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlitripVisa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunGsc} */
  on(topic: 'aliyun_gsc', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunGsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AliyunIot} */
  on(topic: 'aliyun_iot', listener: (this: TaoMessageConsumer, message: IncomingMessage.AliyunIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCoupon} */
  on(topic: 'alsc_coupon', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscCoupon) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscCouponpackage} */
  on(topic: 'alsc_couponpackage', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscCouponpackage) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscDaodian} */
  on(topic: 'alsc_daodian', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscDaodian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKb} */
  on(topic: 'alsc_kb', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbaobaotuan} */
  on(topic: 'alsc_kbbaobaotuan', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbaobaotuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscKbbbt} */
  on(topic: 'alsc_kbbbt', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscKbbbt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscReviewbwc} */
  on(topic: 'alsc_reviewbwc', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscReviewbwc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscRisk} */
  on(topic: 'alsc_risk', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscRisk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalesadaptor} */
  on(topic: 'alsc_salesadaptor', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalesadaptor) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AlscSalescrm} */
  on(topic: 'alsc_salescrm', listener: (this: TaoMessageConsumer, message: IncomingMessage.AlscSalescrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInsdustry} */
  on(topic: 'ascp_insdustry', listener: (this: TaoMessageConsumer, message: IncomingMessage.AscpInsdustry) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.AscpInstantsonline} */
  on(topic: 'ascp_instantsonline', listener: (this: TaoMessageConsumer, message: IncomingMessage.AscpInstantsonline) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.BanmaRight} */
  on(topic: 'banma_right', listener: (this: TaoMessageConsumer, message: IncomingMessage.BanmaRight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoConsignplatform} */
  on(topic: 'cainiao_consignplatform', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoConsignplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoIot} */
  on(topic: 'cainiao_iot', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoIot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoLogistics} */
  on(topic: 'cainiao_logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoModuan} */
  on(topic: 'cainiao_moduan', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoModuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoScf} */
  on(topic: 'cainiao_scf', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoScf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoWaybill} */
  on(topic: 'cainiao_waybill', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoWaybill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.CainiaoYima} */
  on(topic: 'cainiao_yima', listener: (this: TaoMessageConsumer, message: IncomingMessage.CainiaoYima) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiDistribution} */
  on(topic: 'damai_distribution', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMev} */
  on(topic: 'damai_mev', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMev) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiMz} */
  on(topic: 'damai_mz', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiMz) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.DamaiTrade} */
  on(topic: 'damai_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.DamaiTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.EleEnterprise} */
  on(topic: 'ele_enterprise', listener: (this: TaoMessageConsumer, message: IncomingMessage.EleEnterprise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeBankstatement} */
  on(topic: 'eleme_bankstatement', listener: (this: TaoMessageConsumer, message: IncomingMessage.ElemeBankstatement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeFulfill} */
  on(topic: 'eleme_fulfill', listener: (this: TaoMessageConsumer, message: IncomingMessage.ElemeFulfill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.ElemeRetail} */
  on(topic: 'eleme_retail', listener: (this: TaoMessageConsumer, message: IncomingMessage.ElemeRetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyBtrip} */
  on(topic: 'fliggy_btrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyBtrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyDujia} */
  on(topic: 'fliggy_dujia', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyDujia) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyFlight} */
  on(topic: 'fliggy_flight', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyInteract} */
  on(topic: 'fliggy_interact', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyInteract) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyJipiao} */
  on(topic: 'fliggy_jipiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyMember} */
  on(topic: 'fliggy_member', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyMember) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyPush} */
  on(topic: 'fliggy_push', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyPush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggySht} */
  on(topic: 'fliggy_sht', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggySht) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTicket} */
  on(topic: 'fliggy_ticket', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTicket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyTravel} */
  on(topic: 'fliggy_travel', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyTravel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyVisa} */
  on(topic: 'fliggy_visa', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyVisa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FliggyXhotel} */
  on(topic: 'fliggy_xhotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.FliggyXhotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FlyggyFlight} */
  on(topic: 'flyggy_flight', listener: (this: TaoMessageConsumer, message: IncomingMessage.FlyggyFlight) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.FuwuConfirm} */
  on(topic: 'fuwu_confirm', listener: (this: TaoMessageConsumer, message: IncomingMessage.FuwuConfirm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GaodeCaiji} */
  on(topic: 'gaode_caiji', listener: (this: TaoMessageConsumer, message: IncomingMessage.GaodeCaiji) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GenieGsc} */
  on(topic: 'genie_gsc', listener: (this: TaoMessageConsumer, message: IncomingMessage.GenieGsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GlobalVirtual} */
  on(topic: 'global_virtual', listener: (this: TaoMessageConsumer, message: IncomingMessage.GlobalVirtual) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovAuction} */
  on(topic: 'gov_auction', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovAuction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovQual} */
  on(topic: 'gov_qual', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovQual) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.GovRadarclue} */
  on(topic: 'gov_radarclue', listener: (this: TaoMessageConsumer, message: IncomingMessage.GovRadarclue) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuAlicrm} */
  on(topic: 'icbu_alicrm', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuAlicrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuChat} */
  on(topic: 'icbu_chat', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuChat) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuCrm} */
  on(topic: 'icbu_crm', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuCrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuMember} */
  on(topic: 'icbu_member', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuMember) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuRisk} */
  on(topic: 'icbu_risk', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuRisk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IcbuTrade} */
  on(topic: 'icbu_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.IcbuTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAgreement} */
  on(topic: 'idle_agreement', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAgreement) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAppraiseisv} */
  on(topic: 'idle_appraiseisv', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAppraiseisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleAutotrade} */
  on(topic: 'idle_autotrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleAutotrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignment} */
  on(topic: 'idle_consignment', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleConsignmentii} */
  on(topic: 'idle_consignmentii', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleConsignmentii) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCro} */
  on(topic: 'idle_cro', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleCro) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleCycleshop} */
  on(topic: 'idle_cycleshop', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleCycleshop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleDistribution} */
  on(topic: 'idle_distribution', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarket} */
  on(topic: 'idle_fishmarket', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleFishmarketfixed} */
  on(topic: 'idle_fishmarketfixed', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleFishmarketfixed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleLuxconsign} */
  on(topic: 'idle_luxconsign', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleLuxconsign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleNewoutlets} */
  on(topic: 'idle_newoutlets', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleNewoutlets) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleRecycle} */
  on(topic: 'idle_recycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleSeller} */
  on(topic: 'idle_seller', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleSeller) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTopisv} */
  on(topic: 'idle_topisv', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTopisv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTrade} */
  on(topic: 'idle_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTranferpay} */
  on(topic: 'idle_tranferpay', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTranferpay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IdleTwjd} */
  on(topic: 'idle_twjd', listener: (this: TaoMessageConsumer, message: IncomingMessage.IdleTwjd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeDatacenter} */
  on(topic: 'intime_datacenter', listener: (this: TaoMessageConsumer, message: IncomingMessage.IntimeDatacenter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.IntimeSc} */
  on(topic: 'intime_sc', listener: (this: TaoMessageConsumer, message: IncomingMessage.IntimeSc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JaeTrade} */
  on(topic: 'jae_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.JaeTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.JymOrder} */
  on(topic: 'jym_order', listener: (this: TaoMessageConsumer, message: IncomingMessage.JymOrder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LarkTrade} */
  on(topic: 'lark_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.LarkTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LianfanHuiwa} */
  on(topic: 'lianfan_huiwa', listener: (this: TaoMessageConsumer, message: IncomingMessage.LianfanHuiwa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LingyangQuickservice} */
  on(topic: 'lingyang_quickservice', listener: (this: TaoMessageConsumer, message: IncomingMessage.LingyangQuickservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.LstSupplier} */
  on(topic: 'lst_supplier', listener: (this: TaoMessageConsumer, message: IncomingMessage.LstSupplier) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.NiaochaoTccompass} */
  on(topic: 'niaochao_tccompass', listener: (this: TaoMessageConsumer, message: IncomingMessage.NiaochaoTccompass) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedAppraise} */
  on(topic: 'selected_appraise', listener: (this: TaoMessageConsumer, message: IncomingMessage.SelectedAppraise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.SelectedReverify} */
  on(topic: 'selected_reverify', listener: (this: TaoMessageConsumer, message: IncomingMessage.SelectedReverify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAg} */
  on(topic: 'taobao_ag', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAgent} */
  on(topic: 'taobao_agent', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAgent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAis} */
  on(topic: 'taobao_ais', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAis) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAliauto} */
  on(topic: 'taobao_aliauto', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAliauto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlipic} */
  on(topic: 'taobao_alipic', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlipic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAlsc} */
  on(topic: 'taobao_alsc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAlsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAps} */
  on(topic: 'taobao_aps', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAps) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAscp} */
  on(topic: 'taobao_ascp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAscp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAuction} */
  on(topic: 'taobao_auction', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAuction) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoAxin} */
  on(topic: 'taobao_axin', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoAxin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaichuan} */
  on(topic: 'taobao_baichuan', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaichuan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBaoxian} */
  on(topic: 'taobao_baoxian', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBaoxian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBashlive} */
  on(topic: 'taobao_bashlive', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBashlive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBmc} */
  on(topic: 'taobao_bmc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBmc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoBus} */
  on(topic: 'taobao_bus', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoBus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCarlease} */
  on(topic: 'taobao_carlease', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCarlease) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoCco} */
  on(topic: 'taobao_cco', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoCco) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoContent} */
  on(topic: 'taobao_content', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoContent) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDaifa} */
  on(topic: 'taobao_daifa', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDaifa) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDatapush} */
  on(topic: 'taobao_datapush', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDatapush) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDd} */
  on(topic: 'taobao_dd', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDd) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDiandian} */
  on(topic: 'taobao_diandian', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDiandian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDispute} */
  on(topic: 'taobao_dispute', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDispute) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDpaas} */
  on(topic: 'taobao_dpaas', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDpaas) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoDv} */
  on(topic: 'taobao_dv', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoDv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEinvoice} */
  on(topic: 'taobao_einvoice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEinvoice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoEpp} */
  on(topic: 'taobao_epp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoEpp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFenxiao} */
  on(topic: 'taobao_fenxiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFenxiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFilm} */
  on(topic: 'taobao_film', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFilm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFliggy} */
  on(topic: 'taobao_fliggy', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFsc} */
  on(topic: 'taobao_fsc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoFuwu} */
  on(topic: 'taobao_fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoGlobalbuys} */
  on(topic: 'taobao_globalbuys', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoGlobalbuys) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHomeai} */
  on(topic: 'taobao_homeai', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHomeai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoHotel} */
  on(topic: 'taobao_hotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIdlefish} */
  on(topic: 'taobao_idlefish', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIdlefish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIfashion} */
  on(topic: 'taobao_ifashion', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIfashion) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIhome} */
  on(topic: 'taobao_ihome', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIhome) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoInventory} */
  on(topic: 'taobao_inventory', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoInventory) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoIstore} */
  on(topic: 'taobao_istore', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoIstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItem} */
  on(topic: 'taobao_item', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItem) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoItemmarket} */
  on(topic: 'taobao_itemmarket', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoItemmarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJaq} */
  on(topic: 'taobao_jaq', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJaq) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJipiao} */
  on(topic: 'taobao_jipiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJipiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoJzfx} */
  on(topic: 'taobao_jzfx', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoJzfx) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoKcb} */
  on(topic: 'taobao_kcb', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoKcb) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLbs} */
  on(topic: 'taobao_lbs', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLbs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLife} */
  on(topic: 'taobao_life', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLife) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLifeservice} */
  on(topic: 'taobao_lifeservice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLifeservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLive} */
  on(topic: 'taobao_live', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLiveaigc} */
  on(topic: 'taobao_liveaigc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLiveaigc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocal} */
  on(topic: 'taobao_local', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocal) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLocalorder} */
  on(topic: 'taobao_localorder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLocalorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoLogistics} */
  on(topic: 'taobao_logistics', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoLogistics) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoMiniapp} */
  on(topic: 'taobao_miniapp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoMiniapp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyaddress} */
  on(topic: 'taobao_modifyaddress', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyaddress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifyorder} */
  on(topic: 'taobao_modifyorder', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifyorder) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoModifysku} */
  on(topic: 'taobao_modifysku', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoModifysku) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOc} */
  on(topic: 'taobao_oc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOfn} */
  on(topic: 'taobao_ofn', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOfn) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenaccount} */
  on(topic: 'taobao_openaccount', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenaccount) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpencrm} */
  on(topic: 'taobao_opencrm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpencrm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenim} */
  on(topic: 'taobao_openim', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenim) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpenmall} */
  on(topic: 'taobao_openmall', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpenmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOpentrade} */
  on(topic: 'taobao_opentrade', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOpentrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoOs} */
  on(topic: 'taobao_os', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoOs) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPaimai} */
  on(topic: 'taobao_paimai', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPc} */
  on(topic: 'taobao_pc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoProfit} */
  on(topic: 'taobao_profit', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoProfit) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoPunish} */
  on(topic: 'taobao_punish', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoPunish) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoQianniu} */
  on(topic: 'taobao_qianniu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoQianniu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdc} */
  on(topic: 'taobao_rdc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRdcaligenius} */
  on(topic: 'taobao_rdcaligenius', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRdcaligenius) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRecycle} */
  on(topic: 'taobao_recycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRefund} */
  on(topic: 'taobao_refund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRetrieve} */
  on(topic: 'taobao_retrieve', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRetrieve) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRhino} */
  on(topic: 'taobao_rhino', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRhino) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoRobot} */
  on(topic: 'taobao_robot', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoRobot) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSec} */
  on(topic: 'taobao_sec', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSec) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSeed} */
  on(topic: 'taobao_seed', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSeed) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShangou} */
  on(topic: 'taobao_shangou', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShangou) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShop} */
  on(topic: 'taobao_shop', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoShoptransfer} */
  on(topic: 'taobao_shoptransfer', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoShoptransfer) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSinian} */
  on(topic: 'taobao_sinian', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSinian) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartapp} */
  on(topic: 'taobao_smartapp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartapp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartcall} */
  on(topic: 'taobao_smartcall', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartcall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSmartmall} */
  on(topic: 'taobao_smartmall', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSmartmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSupp} */
  on(topic: 'taobao_supp', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSupp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoSurvey} */
  on(topic: 'taobao_survey', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoSurvey) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTae} */
  on(topic: 'taobao_tae', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTaotv} */
  on(topic: 'taobao_taotv', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTaotv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTbk} */
  on(topic: 'taobao_tbk', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTbk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTc} */
  on(topic: 'taobao_tc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTest} */
  on(topic: 'taobao_test', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTest) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTmg} */
  on(topic: 'taobao_tmg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTmg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTop} */
  on(topic: 'taobao_top', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopadmin} */
  on(topic: 'taobao_topadmin', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopadmin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTopats} */
  on(topic: 'taobao_topats', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTopats) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrade} */
  on(topic: 'taobao_trade', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrade) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTraderate} */
  on(topic: 'taobao_traderate', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTraderate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrain} */
  on(topic: 'taobao_train', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrain) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTravelticket} */
  on(topic: 'taobao_travelticket', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTravelticket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoTrip} */
  on(topic: 'taobao_trip', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoTrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUscesl} */
  on(topic: 'taobao_uscesl', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUscesl) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoUsergrowth} */
  on(topic: 'taobao_usergrowth', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoUsergrowth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVerify} */
  on(topic: 'taobao_verify', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVerify) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVideo} */
  on(topic: 'taobao_video', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVideo) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoVip} */
  on(topic: 'taobao_vip', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoVip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWaimai} */
  on(topic: 'taobao_waimai', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWaimai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWangwang} */
  on(topic: 'taobao_wangwang', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWangwang) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWdktms} */
  on(topic: 'taobao_wdktms', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWdktms) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWisdomstore} */
  on(topic: 'taobao_wisdomstore', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWisdomstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWms} */
  on(topic: 'taobao_wms', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWms) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWorktable} */
  on(topic: 'taobao_worktable', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWorktable) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoWt} */
  on(topic: 'taobao_wt', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoWt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXhotel} */
  on(topic: 'taobao_xhotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXhotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXianyu} */
  on(topic: 'taobao_xianyu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXianyu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaoqu} */
  on(topic: 'taobao_xiaoqu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaoqu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoXiaowei} */
  on(topic: 'taobao_xiaowei', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoXiaowei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoYichao} */
  on(topic: 'taobao_yichao', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoYichao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaobaoZk} */
  on(topic: 'taobao_zk', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaobaoZk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TaotaoFilm} */
  on(topic: 'taotao_film', listener: (this: TaoMessageConsumer, message: IncomingMessage.TaotaoFilm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAliauto} */
  on(topic: 'tmall_aliauto', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAliauto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallAuto} */
  on(topic: 'tmall_auto', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallAuto) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCar} */
  on(topic: 'tmall_car', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallCarprofile} */
  on(topic: 'tmall_carprofile', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallCarprofile) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallChannel} */
  on(topic: 'tmall_channel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallChannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallFuwu} */
  on(topic: 'tmall_fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallFuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomedecorationfuwu} */
  on(topic: 'tmall_homedecorationfuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomedecorationfuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallHomeservice} */
  on(topic: 'tmall_homeservice', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallHomeservice) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallIfpfulfill} */
  on(topic: 'tmall_ifpfulfill', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallIfpfulfill) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallJst} */
  on(topic: 'tmall_jst', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallJst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMei} */
  on(topic: 'tmall_mei', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMei) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMlh} */
  on(topic: 'tmall_mlh', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMlh) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallMultshop} */
  on(topic: 'tmall_multshop', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallMultshop) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallNrt} */
  on(topic: 'tmall_nrt', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallNrt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOic} */
  on(topic: 'tmall_oic', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmni} */
  on(topic: 'tmall_omni', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmni) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOmnichannel} */
  on(topic: 'tmall_omnichannel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOmnichannel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallOnehour} */
  on(topic: 'tmall_onehour', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallOnehour) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallPosfee} */
  on(topic: 'tmall_posfee', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallPosfee) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRefund} */
  on(topic: 'tmall_refund', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRefund) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallRetail} */
  on(topic: 'tmall_retail', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallRetail) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSasssign} */
  on(topic: 'tmall_sasssign', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallSasssign) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallScm} */
  on(topic: 'tmall_scm', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallScm) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallService} */
  on(topic: 'tmall_service', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallService) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServicecenter} */
  on(topic: 'tmall_servicecenter', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServicecenter) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallServiceplatform} */
  on(topic: 'tmall_serviceplatform', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallServiceplatform) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallSupermarket} */
  on(topic: 'tmall_supermarket', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallSupermarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTccompass} */
  on(topic: 'tmall_tccompass', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTccompass) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTlc} */
  on(topic: 'tmall_tlc', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTlc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallTmg} */
  on(topic: 'tmall_tmg', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallTmg) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallXf} */
  on(topic: 'tmall_xf', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallXf) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYichao} */
  on(topic: 'tmall_yichao', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallYichao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TmallYougou} */
  on(topic: 'tmall_yougou', listener: (this: TaoMessageConsumer, message: IncomingMessage.TmallYougou) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TobaoLive} */
  on(topic: 'tobao_live', listener: (this: TaoMessageConsumer, message: IncomingMessage.TobaoLive) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.TripHotel} */
  on(topic: 'trip_hotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.TripHotel) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.UmengOplus} */
  on(topic: 'umeng_oplus', listener: (this: TaoMessageConsumer, message: IncomingMessage.UmengOplus) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkCapacity} */
  on(topic: 'wdk_capacity', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkCapacity) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkMarket} */
  on(topic: 'wdk_market', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkMarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkOpen} */
  on(topic: 'wdk_open', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkOpen) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.WdkWorkforce} */
  on(topic: 'wdk_workforce', listener: (this: TaoMessageConsumer, message: IncomingMessage.WdkWorkforce) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XhotelDistribution} */
  on(topic: 'xhotel_distribution', listener: (this: TaoMessageConsumer, message: IncomingMessage.XhotelDistribution) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAftersale} */
  on(topic: 'xianyu_aftersale', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAftersale) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuAppraise} */
  on(topic: 'xianyu_appraise', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuAppraise) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCar} */
  on(topic: 'xianyu_car', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCar) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCco} */
  on(topic: 'xianyu_cco', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCco) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCoin} */
  on(topic: 'xianyu_coin', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCoin) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuCtox} */
  on(topic: 'xianyu_ctox', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuCtox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuEnvironment} */
  on(topic: 'xianyu_environment', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuEnvironment) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuFishmarket} */
  on(topic: 'xianyu_fishmarket', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuFishmarket) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuHjbt} */
  on(topic: 'xianyu_hjbt', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuHjbt) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuIsv} */
  on(topic: 'xianyu_isv', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuIsv) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuMarketrecycle} */
  on(topic: 'xianyu_marketrecycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuMarketrecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuOutlet} */
  on(topic: 'xianyu_outlet', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuOutlet) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRecycle} */
  on(topic: 'xianyu_recycle', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRecycle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuRegister} */
  on(topic: 'xianyu_register', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuRegister) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTemplate} */
  on(topic: 'xianyu_template', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTemplate) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuTender} */
  on(topic: 'xianyu_tender', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuTender) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYellowbox} */
  on(topic: 'xianyu_yellowbox', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYellowbox) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.XianyuYushi} */
  on(topic: 'xianyu_yushi', listener: (this: TaoMessageConsumer, message: IncomingMessage.XianyuYushi) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuAigc} */
  on(topic: 'youku_aigc', listener: (this: TaoMessageConsumer, message: IncomingMessage.YoukuAigc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YoukuTvosappstore} */
  on(topic: 'youku_tvosappstore', listener: (this: TaoMessageConsumer, message: IncomingMessage.YoukuTvosappstore) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosWatch} */
  on(topic: 'yunos_watch', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosWatch) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.YunosYoc} */
  on(topic: 'yunos_yoc', listener: (this: TaoMessageConsumer, message: IncomingMessage.YunosYoc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ae} */
  on(topic: 'ae', listener: (this: TaoMessageConsumer, message: IncomingMessage.Ae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ali} */
  on(topic: 'ali', listener: (this: TaoMessageConsumer, message: IncomingMessage.Ali) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alibaba} */
  on(topic: 'alibaba', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alibaba) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alicom} */
  on(topic: 'alicom', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alicom) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliexpress} */
  on(topic: 'aliexpress', listener: (this: TaoMessageConsumer, message: IncomingMessage.Aliexpress) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alihealth} */
  on(topic: 'alihealth', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alihealth) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alihouse} */
  on(topic: 'alihouse', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alihouse) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alios} */
  on(topic: 'alios', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alios) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alipay} */
  on(topic: 'alipay', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alipay) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alipic} */
  on(topic: 'alipic', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alipic) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alisports} */
  on(topic: 'alisports', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alisports) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alitrip} */
  on(topic: 'alitrip', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alitrip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Aliyun} */
  on(topic: 'aliyun', listener: (this: TaoMessageConsumer, message: IncomingMessage.Aliyun) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Alsc} */
  on(topic: 'alsc', listener: (this: TaoMessageConsumer, message: IncomingMessage.Alsc) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ascp} */
  on(topic: 'ascp', listener: (this: TaoMessageConsumer, message: IncomingMessage.Ascp) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Banma} */
  on(topic: 'banma', listener: (this: TaoMessageConsumer, message: IncomingMessage.Banma) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Cainiao} */
  on(topic: 'cainiao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Cainiao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Damai} */
  on(topic: 'damai', listener: (this: TaoMessageConsumer, message: IncomingMessage.Damai) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Ele} */
  on(topic: 'ele', listener: (this: TaoMessageConsumer, message: IncomingMessage.Ele) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Eleme} */
  on(topic: 'eleme', listener: (this: TaoMessageConsumer, message: IncomingMessage.Eleme) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fliggy} */
  on(topic: 'fliggy', listener: (this: TaoMessageConsumer, message: IncomingMessage.Fliggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Flyggy} */
  on(topic: 'flyggy', listener: (this: TaoMessageConsumer, message: IncomingMessage.Flyggy) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Fuwu} */
  on(topic: 'fuwu', listener: (this: TaoMessageConsumer, message: IncomingMessage.Fuwu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Gaode} */
  on(topic: 'gaode', listener: (this: TaoMessageConsumer, message: IncomingMessage.Gaode) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Genie} */
  on(topic: 'genie', listener: (this: TaoMessageConsumer, message: IncomingMessage.Genie) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Global} */
  on(topic: 'global', listener: (this: TaoMessageConsumer, message: IncomingMessage.Global) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Gov} */
  on(topic: 'gov', listener: (this: TaoMessageConsumer, message: IncomingMessage.Gov) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Icbu} */
  on(topic: 'icbu', listener: (this: TaoMessageConsumer, message: IncomingMessage.Icbu) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Idle} */
  on(topic: 'idle', listener: (this: TaoMessageConsumer, message: IncomingMessage.Idle) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Intime} */
  on(topic: 'intime', listener: (this: TaoMessageConsumer, message: IncomingMessage.Intime) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Jae} */
  on(topic: 'jae', listener: (this: TaoMessageConsumer, message: IncomingMessage.Jae) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Jym} */
  on(topic: 'jym', listener: (this: TaoMessageConsumer, message: IncomingMessage.Jym) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lark} */
  on(topic: 'lark', listener: (this: TaoMessageConsumer, message: IncomingMessage.Lark) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lianfan} */
  on(topic: 'lianfan', listener: (this: TaoMessageConsumer, message: IncomingMessage.Lianfan) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lingyang} */
  on(topic: 'lingyang', listener: (this: TaoMessageConsumer, message: IncomingMessage.Lingyang) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Lst} */
  on(topic: 'lst', listener: (this: TaoMessageConsumer, message: IncomingMessage.Lst) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Niaochao} */
  on(topic: 'niaochao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Niaochao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Selected} */
  on(topic: 'selected', listener: (this: TaoMessageConsumer, message: IncomingMessage.Selected) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Taobao} */
  on(topic: 'taobao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Taobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Taotao} */
  on(topic: 'taotao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Taotao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Tmall} */
  on(topic: 'tmall', listener: (this: TaoMessageConsumer, message: IncomingMessage.Tmall) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Tobao} */
  on(topic: 'tobao', listener: (this: TaoMessageConsumer, message: IncomingMessage.Tobao) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Trip} */
  on(topic: 'trip', listener: (this: TaoMessageConsumer, message: IncomingMessage.Trip) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Umeng} */
  on(topic: 'umeng', listener: (this: TaoMessageConsumer, message: IncomingMessage.Umeng) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Wdk} */
  on(topic: 'wdk', listener: (this: TaoMessageConsumer, message: IncomingMessage.Wdk) => void): TaoMessageConsumer;
  /** {@link IncomingMessage.Xhotel} */
  on(topic: 'xhotel', listener: (this: TaoMessageConsumer, message: IncomingMessage.Xhotel) => void): TaoMessageConsumer;
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
