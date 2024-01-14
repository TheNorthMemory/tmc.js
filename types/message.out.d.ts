/// <reference path="message.d.ts" />

declare namespace OutgoingMessage {
  /** {@link Ali.Infodept.CaseInfoBack 网上法庭 > 云嘉返回数据} */
  type AliInfodeptCaseInfoBack = Message & { content: MessageContent & { topic: 'ali_infodept_CaseInfoBack', content: string | Ali.Infodept.CaseInfoBack } };
  /** {@link Alibaba.Kongur.BusinessMsgResponse 司法开放平台 > 开放平台接收返回消息} */
  type AlibabaKongurBusinessMsgResponse = Message & { content: MessageContent & { topic: 'alibaba_kongur_BusinessMsgResponse', content: string | Alibaba.Kongur.BusinessMsgResponse } };
  /** {@link Alibaba.Nazca.AbandonCertResponse 网上法庭 > 作废存证返回消息接口} */
  type AlibabaNazcaAbandonCertResponse = Message & { content: MessageContent & { topic: 'alibaba_nazca_AbandonCertResponse', content: string | Alibaba.Nazca.AbandonCertResponse } };
  /** {@link Alibaba.Nazca.QueryChargeNumResponse 网上法庭 > 查询收费数量返回消息} */
  type AlibabaNazcaQueryChargeNumResponse = Message & { content: MessageContent & { topic: 'alibaba_nazca_QueryChargeNumResponse', content: string | Alibaba.Nazca.QueryChargeNumResponse } };
  /** {@link Alibaba.Nazca.SaveCertResponse 网上法庭 > 存证返回消息接口} */
  type AlibabaNazcaSaveCertResponse = Message & { content: MessageContent & { topic: 'alibaba_nazca_SaveCertResponse', content: string | Alibaba.Nazca.SaveCertResponse } };
  /** {@link Alibaba.Nazca.UpdateChargeNumResponse 网上法庭 > 更新收费数量返回消息} */
  type AlibabaNazcaUpdateChargeNumResponse = Message & { content: MessageContent & { topic: 'alibaba_nazca_UpdateChargeNumResponse', content: string | Alibaba.Nazca.UpdateChargeNumResponse } };
  /** {@link Alibaba.Pur.NotifyProduct 信息平台-采购 > 同步商品通知} */
  type AlibabaPurNotifyProduct = Message & { content: MessageContent & { topic: 'alibaba_pur_NotifyProduct', content: string | Alibaba.Pur.NotifyProduct } };
  /** {@link Alicom.Secret.VendorMonitor 阿里通信 > 供应商监控消息} */
  type AlicomSecretVendorMonitor = Message & { content: MessageContent & { topic: 'alicom_secret_VendorMonitor', content: string | Alicom.Secret.VendorMonitor } };
  /** {@link Aliexpress.Warranty.WarrantyOrderMessageFromWarranty AE > 保修商消息-from warranty} */
  type AliexpressWarrantyWarrantyOrderMessageFromWarranty = Message & { content: MessageContent & { topic: 'aliexpress_warranty_WarrantyOrderMessageFromWarranty', content: string | Aliexpress.Warranty.WarrantyOrderMessageFromWarranty } };
  /** {@link Alipay.Bk.Scf 支付宝 > 网商消息回流} */
  type AlipayBkScf = Message & { content: MessageContent & { topic: 'alipay_bk_Scf', content: string | Alipay.Bk.Scf } };
  /** {@link Alipay.Xiaodai.CorpShop 阿里金融 > 阿里金融商家和店铺维表数据回流} */
  type AlipayXiaodaiCorpShop = Message & { content: MessageContent & { topic: 'alipay_xiaodai_CorpShop', content: string | Alipay.Xiaodai.CorpShop } };
  /** {@link Alipay.Xiaodai.Item 阿里金融 > 阿里金融商品数据回流} */
  type AlipayXiaodaiItem = Message & { content: MessageContent & { topic: 'alipay_xiaodai_Item', content: string | Alipay.Xiaodai.Item } };
  /** {@link Alipay.Xiaodai.MerchantInfo 阿里金融 > 阿里金融商家信息} */
  type AlipayXiaodaiMerchantInfo = Message & { content: MessageContent & { topic: 'alipay_xiaodai_MerchantInfo', content: string | Alipay.Xiaodai.MerchantInfo } };
  /** {@link Alipay.Xiaodai.Order 阿里金融 > 阿里金融订单数据回流} */
  type AlipayXiaodaiOrder = Message & { content: MessageContent & { topic: 'alipay_xiaodai_Order', content: string | Alipay.Xiaodai.Order } };
  /** {@link Alipay.Xiaodai.ProfitLoss 阿里金融 > 阿里金融损益数据回流} */
  type AlipayXiaodaiProfitLoss = Message & { content: MessageContent & { topic: 'alipay_xiaodai_ProfitLoss', content: string | Alipay.Xiaodai.ProfitLoss } };
  /** {@link Alipay.Xiaodai.PurchaseOrder 阿里金融 > 阿里金融采购单数据回流} */
  type AlipayXiaodaiPurchaseOrder = Message & { content: MessageContent & { topic: 'alipay_xiaodai_PurchaseOrder', content: string | Alipay.Xiaodai.PurchaseOrder } };
  /** {@link Alipay.Xiaodai.Service 阿里金融 > 阿里金融商品退换货数据回流} */
  type AlipayXiaodaiService = Message & { content: MessageContent & { topic: 'alipay_xiaodai_Service', content: string | Alipay.Xiaodai.Service } };
  /** {@link Alipay.Xiaodai.SubInfo 阿里金融 > 阿里金融商家订购软件信息} */
  type AlipayXiaodaiSubInfo = Message & { content: MessageContent & { topic: 'alipay_xiaodai_SubInfo', content: string | Alipay.Xiaodai.SubInfo } };
  /** {@link Alitrip.Iatkfr.Sync 商旅API > 云上国际逆向增加对淘内的DTS消息同步} */
  type AlitripIatkfrSync = Message & { content: MessageContent & { topic: 'alitrip_iatkfr_Sync', content: string | Alitrip.Iatkfr.Sync } };
  /** {@link Alitrip.Sync.Iatkf 商旅API > 机票自营云上应用消息同步淘内} */
  type AlitripSyncIatkf = Message & { content: MessageContent & { topic: 'alitrip_sync_Iatkf', content: string | Alitrip.Sync.Iatkf } };
  /** {@link Ant.Pur.NotifyProduct 蚂蚁采购 > 蚂蚁采购同步商品通知} */
  type AntPurNotifyProduct = Message & { content: MessageContent & { topic: 'ant_pur_NotifyProduct', content: string | Ant.Pur.NotifyProduct } };
  /** {@link Banma.Dataplatform.AiRouteCreate 斑马 > AI出行-行程消息} */
  type BanmaDataplatformAiRouteCreate = Message & { content: MessageContent & { topic: 'banma_dataplatform_AiRouteCreate', content: string | Banma.Dataplatform.AiRouteCreate } };
  /** {@link Banma.Dataplatform.DataDriverAppTrafficCreate 斑马 > datadriver的app_traffic类消息} */
  type BanmaDataplatformDataDriverAppTrafficCreate = Message & { content: MessageContent & { topic: 'banma_dataplatform_DataDriverAppTrafficCreate', content: string | Banma.Dataplatform.DataDriverAppTrafficCreate } };
  /** {@link Banma.Dataplatform.HeapmapCreate 斑马 > 热力图MQ消息} */
  type BanmaDataplatformHeapmapCreate = Message & { content: MessageContent & { topic: 'banma_dataplatform_HeapmapCreate', content: string | Banma.Dataplatform.HeapmapCreate } };
  /** {@link Cbu.Device.DeviceOnline CBU > cbu专业市场设备状态回流} */
  type CbuDeviceDeviceOnline = Message & { content: MessageContent & { topic: 'cbu_device_DeviceOnline', content: string | Cbu.Device.DeviceOnline } };
  /** {@link Ele.Fengniao.ChainstoreAbility 蜂鸟物流 > 门店开关店能力通知} */
  type EleFengniaoChainstoreAbility = Message & { content: MessageContent & { topic: 'ele_fengniao_ChainstoreAbility', content: string | Ele.Fengniao.ChainstoreAbility } };
  /** {@link Ele.Fengniao.ChainstoreRange 蜂鸟物流 > 门店配送范围变更消息} */
  type EleFengniaoChainstoreRange = Message & { content: MessageContent & { topic: 'ele_fengniao_ChainstoreRange', content: string | Ele.Fengniao.ChainstoreRange } };
  /** {@link Ele.Fengniao.ChainstoreSign 蜂鸟物流 > 门店签约结果通知} */
  type EleFengniaoChainstoreSign = Message & { content: MessageContent & { topic: 'ele_fengniao_ChainstoreSign', content: string | Ele.Fengniao.ChainstoreSign } };
  /** {@link Ele.Fengniao.MerchantSign 蜂鸟物流 > 商家签约结果通知} */
  type EleFengniaoMerchantSign = Message & { content: MessageContent & { topic: 'ele_fengniao_MerchantSign', content: string | Ele.Fengniao.MerchantSign } };
  /** {@link Ele.Fengniao.ReportAbnormal 蜂鸟物流 > 异常报备消息通知} */
  type EleFengniaoReportAbnormal = Message & { content: MessageContent & { topic: 'ele_fengniao_ReportAbnormal', content: string | Ele.Fengniao.ReportAbnormal } };
  /** {@link Ele.Fengniao.StatusSync 蜂鸟物流 > 物流状态信息同步} */
  type EleFengniaoStatusSync = Message & { content: MessageContent & { topic: 'ele_fengniao_StatusSync', content: string | Ele.Fengniao.StatusSync } };
  /** {@link Iatkf.Flightchg.Sync 机票自营 > flightChg应用消息同步淘内} */
  type IatkfFlightchgSync = Message & { content: MessageContent & { topic: 'iatkf_flightchg_Sync', content: string | Iatkf.Flightchg.Sync } };
  /** {@link Iatkf.Order.Sync 机票自营 > 机票自营云上order应用消息同步淘内} */
  type IatkfOrderSync = Message & { content: MessageContent & { topic: 'iatkf_order_Sync', content: string | Iatkf.Order.Sync } };
  /** {@link Mmc.Pos.AdCatUserBack 变现猫 > 变现猫曝光用户回传pos} */
  type MmcPosAdCatUserBack = Message & { content: MessageContent & { topic: 'mmc_pos_AdCatUserBack', content: string | Mmc.Pos.AdCatUserBack } };
  /** {@link Mybank.Aepreloandeposit.Sync 网商银行 > AE提前放款卖家保证金水位同步} */
  type MybankAepreloandepositSync = Message & { content: MessageContent & { topic: 'mybank_aepreloandeposit_Sync', content: string | Mybank.Aepreloandeposit.Sync } };
  /** {@link Mybank.Aepreloanresult.Sync 网商银行 > AE提前放款订单受理结果通知} */
  type MybankAepreloanresultSync = Message & { content: MessageContent & { topic: 'mybank_aepreloanresult_Sync', content: string | Mybank.Aepreloanresult.Sync } };
  /** {@link Mybank.Bkcloudfunds.FundToCardNotify 网商银行 > 资金到卡签约成功通知} */
  type MybankBkcloudfundsFundToCardNotify = Message & { content: MessageContent & { topic: 'mybank_bkcloudfunds_FundToCardNotify', content: string | Mybank.Bkcloudfunds.FundToCardNotify } };
  /** {@link Mybank.Bkcloudfunds.PosSignSuccessNotify 网商银行 > 网商银行POS签约正式开通通知天猫接?} */
  type MybankBkcloudfundsPosSignSuccessNotify = Message & { content: MessageContent & { topic: 'mybank_bkcloudfunds_PosSignSuccessNotify', content: string | Mybank.Bkcloudfunds.PosSignSuccessNotify } };
  /** {@link Qimen.Reflow.BatchTrace 奇门 > 奇门批量回流消息} */
  type QimenReflowBatchTrace = Message & { content: MessageContent & { topic: 'qimen_reflow_BatchTrace', content: string | Qimen.Reflow.BatchTrace } };
  /** {@link Qimen.Reflow.Trace 奇门 > 奇门回流轨迹} */
  type QimenReflowTrace = Message & { content: MessageContent & { topic: 'qimen_reflow_Trace', content: string | Qimen.Reflow.Trace } };
  /** {@link Taobao.Astrolabe.TradeHold 淘宝 > 星盘交易截单} */
  type TaobaoAstrolabeTradeHold = Message & { content: MessageContent & { topic: 'taobao_astrolabe_TradeHold', content: string | Taobao.Astrolabe.TradeHold } };
  /** {@link Taobao.Fuwu.CustomerServicePerformance 服务市场 > 客服绩效统计表} */
  type TaobaoFuwuCustomerServicePerformance = Message & { content: MessageContent & { topic: 'taobao_fuwu_CustomerServicePerformance', content: string | Taobao.Fuwu.CustomerServicePerformance } };
  /** {@link Taobao.Fuwu.ElectronicInvoice 服务市场 > 电子发票信息} */
  type TaobaoFuwuElectronicInvoice = Message & { content: MessageContent & { topic: 'taobao_fuwu_ElectronicInvoice', content: string | Taobao.Fuwu.ElectronicInvoice } };
  /** {@link Taobao.Homeai.CaseSync HOMEAI消息对接 > HOMEAI同步Case消息接口} */
  type TaobaoHomeaiCaseSync = Message & { content: MessageContent & { topic: 'taobao_homeai_CaseSync', content: string | Taobao.Homeai.CaseSync } };
  /** {@link Taobao.Homeai.LayoutTransfer HOMEAI消息对接 > 一键迁移算法接口} */
  type TaobaoHomeaiLayoutTransfer = Message & { content: MessageContent & { topic: 'taobao_homeai_LayoutTransfer', content: string | Taobao.Homeai.LayoutTransfer } };
  /** {@link Taobao.Homeai.RenderResult HOMEAI消息对接 > HomeStyler渲染结果消息} */
  type TaobaoHomeaiRenderResult = Message & { content: MessageContent & { topic: 'taobao_homeai_RenderResult', content: string | Taobao.Homeai.RenderResult } };
  /** {@link Taobao.Homeai.SyncData HOMEAI消息对接 > homestyler渲染图数据同步} */
  type TaobaoHomeaiSyncData = Message & { content: MessageContent & { topic: 'taobao_homeai_SyncData', content: string | Taobao.Homeai.SyncData } };
  /** {@link Taobao.Homeai.SyncHsData HOMEAI消息对接 > Homestyler模型数据同步到Homeai消息} */
  type TaobaoHomeaiSyncHsData = Message & { content: MessageContent & { topic: 'taobao_homeai_SyncHsData', content: string | Taobao.Homeai.SyncHsData } };
  /** {@link Taobao.Ihomesvj.SyncSvjCrmData HOMEAI > 同步svj的crm数据} */
  type TaobaoIhomesvjSyncSvjCrmData = Message & { content: MessageContent & { topic: 'taobao_ihomesvj_SyncSvjCrmData', content: string | Taobao.Ihomesvj.SyncSvjCrmData } };
  /** {@link Taobao.Jds.RefundTrace 交易全链路 > 退款单状态跟踪} */
  type TaobaoJdsRefundTrace = Message & { content: MessageContent & { topic: 'taobao_jds_RefundTrace', content: string | Taobao.Jds.RefundTrace } };
  /** {@link Taobao.Jds.TradeTrace 交易全链路 > 交易订单状态跟踪} */
  type TaobaoJdsTradeTrace = Message & { content: MessageContent & { topic: 'taobao_jds_TradeTrace', content: string | Taobao.Jds.TradeTrace } };
  /** {@link Taobao.Wisdomstore.FaceUpload 智慧门店下行消息 > 人脸抓拍数据上传消息} */
  type TaobaoWisdomstoreFaceUpload = Message & { content: MessageContent & { topic: 'taobao_wisdomstore_FaceUpload', content: string | Taobao.Wisdomstore.FaceUpload } };
  /** {@link Tmall.Carprofile.AuthStatusChangeToTB 天猫 > 用户车辆档案授权状态更新} */
  type TmallCarprofileAuthStatusChangeToTB = Message & { content: MessageContent & { topic: 'tmall_carprofile_AuthStatusChangeToTB', content: string | Tmall.Carprofile.AuthStatusChangeToTB } };
  /** {@link Tmall.Chaoshi.AuctionInfo 天猫 > 天猫超市商品信息} */
  type TmallChaoshiAuctionInfo = Message & { content: MessageContent & { topic: 'tmall_chaoshi_AuctionInfo', content: string | Tmall.Chaoshi.AuctionInfo } };
  /** {@link Tmall.Chaoshi.DataMark 天猫 > 天猫超市业务控制信息} */
  type TmallChaoshiDataMark = Message & { content: MessageContent & { topic: 'tmall_chaoshi_DataMark', content: string | Tmall.Chaoshi.DataMark } };
  /** {@link Tmall.Chaoshi.McasCat 天猫 > 天猫超市mcas类目信息} */
  type TmallChaoshiMcasCat = Message & { content: MessageContent & { topic: 'tmall_chaoshi_McasCat', content: string | Tmall.Chaoshi.McasCat } };
  /** {@link Tmall.Chaoshi.PayInfoReport 天猫 > 天猫超市应收明细表} */
  type TmallChaoshiPayInfoReport = Message & { content: MessageContent & { topic: 'tmall_chaoshi_PayInfoReport', content: string | Tmall.Chaoshi.PayInfoReport } };
  /** {@link Tmall.Fushi.CollocationSynthesis 天猫 > 天猫服饰虚拟搭配合成图} */
  type TmallFushiCollocationSynthesis = Message & { content: MessageContent & { topic: 'tmall_fushi_CollocationSynthesis', content: string | Tmall.Fushi.CollocationSynthesis } };
  /** {@link Tmall.Fushi.VirtualCollocation 天猫 > 天猫服饰虚拟搭配} */
  type TmallFushiVirtualCollocation = Message & { content: MessageContent & { topic: 'tmall_fushi_VirtualCollocation', content: string | Tmall.Fushi.VirtualCollocation } };
  /** {@link Tmall.Fushi.VirtualCollocationNew 天猫 > 虚拟单品信息同步} */
  type TmallFushiVirtualCollocationNew = Message & { content: MessageContent & { topic: 'tmall_fushi_VirtualCollocationNew', content: string | Tmall.Fushi.VirtualCollocationNew } };
  /** {@link Tmall.Instant.Recover 天猫 > 极速回款追缴消息回流} */
  type TmallInstantRecover = Message & { content: MessageContent & { topic: 'tmall_instant_Recover', content: string | Tmall.Instant.Recover } };
  /** {@link Tmall.Jia.DiyDesign 天猫 > 设计表信息} */
  type TmallJiaDiyDesign = Message & { content: MessageContent & { topic: 'tmall_jia_DiyDesign', content: string | Tmall.Jia.DiyDesign } };
  /** {@link Tmall.Jia.DiyDesignItem 天猫 > 设计模型关联表} */
  type TmallJiaDiyDesignItem = Message & { content: MessageContent & { topic: 'tmall_jia_DiyDesignItem', content: string | Tmall.Jia.DiyDesignItem } };
  /** {@link Tmall.Jia.DiyHouseLayout 天猫 > 户型表} */
  type TmallJiaDiyHouseLayout = Message & { content: MessageContent & { topic: 'tmall_jia_DiyHouseLayout', content: string | Tmall.Jia.DiyHouseLayout } };
  /** {@link Tmall.Jia.DiyItem 天猫 > 模型商品表} */
  type TmallJiaDiyItem = Message & { content: MessageContent & { topic: 'tmall_jia_DiyItem', content: string | Tmall.Jia.DiyItem } };
  /** {@link Tmall.Jia.DiyLocationCommunity 天猫 > 楼盘小区} */
  type TmallJiaDiyLocationCommunity = Message & { content: MessageContent & { topic: 'tmall_jia_DiyLocationCommunity', content: string | Tmall.Jia.DiyLocationCommunity } };
  /** {@link Tmall.Jia.DiyRender 天猫 > 渲染任务表} */
  type TmallJiaDiyRender = Message & { content: MessageContent & { topic: 'tmall_jia_DiyRender', content: string | Tmall.Jia.DiyRender } };
  /** {@link Tmall.Jst.BusinessInformationReceipt 天猫 > 商家消息回执} */
  type TmallJstBusinessInformationReceipt = Message & { content: MessageContent & { topic: 'tmall_jst_BusinessInformationReceipt', content: string | Tmall.Jst.BusinessInformationReceipt } };
  /** {@link Tmall.Mh.MacAddress 天猫魔盒 > 天猫魔盒线下Mac地址回传} */
  type TmallMhMacAddress = Message & { content: MessageContent & { topic: 'tmall_mh_MacAddress', content: string | Tmall.Mh.MacAddress } };
  /** {@link Tmall.Mh.SerialNumber 天猫魔盒 > 天猫魔盒扫码SN号回传} */
  type TmallMhSerialNumber = Message & { content: MessageContent & { topic: 'tmall_mh_SerialNumber', content: string | Tmall.Mh.SerialNumber } };
  /** {@link Tmall.Nrt.DealerToTmall 新零售终端上行消息 > 商户信息回流} */
  type TmallNrtDealerToTmall = Message & { content: MessageContent & { topic: 'tmall_nrt_DealerToTmall', content: string | Tmall.Nrt.DealerToTmall } };
  /** {@link Tmall.Nrt.StallContractToTmall 新零售终端上行消息 > 摊位合同数据回流} */
  type TmallNrtStallContractToTmall = Message & { content: MessageContent & { topic: 'tmall_nrt_StallContractToTmall', content: string | Tmall.Nrt.StallContractToTmall } };
  /** {@link Tmall.Nrt.StallInfoToTmall 新零售终端上行消息 > 摊位信息数据回流} */
  type TmallNrtStallInfoToTmall = Message & { content: MessageContent & { topic: 'tmall_nrt_StallInfoToTmall', content: string | Tmall.Nrt.StallInfoToTmall } };
  /** {@link Tmall.Nrt.StoreInfoToTmall 新零售终端上行消息 > 门店信息回流} */
  type TmallNrtStoreInfoToTmall = Message & { content: MessageContent & { topic: 'tmall_nrt_StoreInfoToTmall', content: string | Tmall.Nrt.StoreInfoToTmall } };
  /** {@link Tmall.Txcs.FinanceCargoDamageDetail 天猫 > 财务货损明细数据信息回流} */
  type TmallTxcsFinanceCargoDamageDetail = Message & { content: MessageContent & { topic: 'tmall_txcs_FinanceCargoDamageDetail', content: string | Tmall.Txcs.FinanceCargoDamageDetail } };
  /** {@link Tmall.Txcs.FinanceCargoDamageSummary 天猫 > 财务货损汇总数据信息回流} */
  type TmallTxcsFinanceCargoDamageSummary = Message & { content: MessageContent & { topic: 'tmall_txcs_FinanceCargoDamageSummary', content: string | Tmall.Txcs.FinanceCargoDamageSummary } };
  /** {@link Tmall.Txcs.PurchasePrice 天猫 > 商品进价信息回流} */
  type TmallTxcsPurchasePrice = Message & { content: MessageContent & { topic: 'tmall_txcs_PurchasePrice', content: string | Tmall.Txcs.PurchasePrice } };
  /** {@link Xiaoman.Call.MsgSync 小满 > 小满外呼信息同步} */
  type XiaomanCallMsgSync = Message & { content: MessageContent & { topic: 'xiaoman_call_MsgSync', content: string | Xiaoman.Call.MsgSync } };
  /** {@link Xiaoman.Customer.ImplementationStatusSync 小满 > 小满客户实施状态同步} */
  type XiaomanCustomerImplementationStatusSync = Message & { content: MessageContent & { topic: 'xiaoman_customer_ImplementationStatusSync', content: string | Xiaoman.Customer.ImplementationStatusSync } };
  /** {@link Xiaoman.Email.MsgSync 小满 > 小满邮件信息同步} */
  type XiaomanEmailMsgSync = Message & { content: MessageContent & { topic: 'xiaoman_email_MsgSync', content: string | Xiaoman.Email.MsgSync } };
  /** {@link Xiaoman.Perform.OrderChange 小满 > 小满订单履约状态回流ICBU-CRM} */
  type XiaomanPerformOrderChange = Message & { content: MessageContent & { topic: 'xiaoman_perform_OrderChange', content: string | Xiaoman.Perform.OrderChange } };
  /** {@link Xiaoman.Register.CallBack 小满 > CGS客户小满注册消息回调} */
  type XiaomanRegisterCallBack = Message & { content: MessageContent & { topic: 'xiaoman_register_CallBack', content: string | Xiaoman.Register.CallBack } };
  /** {@link Xiaoman.Work.MsgSync 小满 > 小满工单信息同步} */
  type XiaomanWorkMsgSync = Message & { content: MessageContent & { topic: 'xiaoman_work_MsgSync', content: string | Xiaoman.Work.MsgSync } };
}

/** 网上法庭 */
declare namespace Ali.Infodept {
  /** {@link https://open.taobao.com/tmc.htm?docId=859&docType=9 云嘉返回数据} */
  interface CaseInfoBack {
    /** 附件列表 */
    attachment_files?: string;
    /** 附件url */
    attachment_url?: string;
    /** 加密后案件id */
    biz_id: string;
    /** messageBody格式 */
    format: string;
    /** 消息体 */
    message_body: string;
    /** 签名 */
    message_body_signature?: string;
    /** 消息唯一的id */
    message_id: string;
    /** 消息路由 */
    message_router?: string;
    /** 消息唯一表示符 */
    peer_id: string;
    /** biz_id对应 */
    ref_biz_id?: string;
    /** 消息类型 */
    topic: string;
    /** 版本，消息去向 */
    version?: string;
  }
}

/** 司法开放平台 */
declare namespace Alibaba.Kongur {
  /** {@link https://open.taobao.com/tmc.htm?docId=1098&docType=9 开放平台接收返回消息} */
  interface BusinessMsgResponse {
    /** 请求唯一标识 */
    apply_id: string;
    /** 处理状态 */
    result: string;
  }
}

/** 网上法庭 */
declare namespace Alibaba.Nazca {
  /** {@link https://open.taobao.com/tmc.htm?docId=1048&docType=9 作废存证返回消息接口} */
  interface AbandonCertResponse {
    /** 消息流水号 */
    apply_id: string;
    /** 消息体 */
    content: string;
    /** 错误码 */
    err_code: string;
    /** 错误信息 */
    err_message: string;
    /** 状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1056&docType=9 查询收费数量返回消息} */
  interface QueryChargeNumResponse {
    /** 流水号 */
    apply_id: string;
    /** 消耗数量 */
    consumption_quantity: string;
    /** 客户ID */
    customer_id: string;
    /** 剩余数量 */
    number_remaining: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
    /** 总数 */
    total_number: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1047&docType=9 存证返回消息接口} */
  interface SaveCertResponse {
    /** 消息流水号 */
    apply_id: string;
    /** 消息体 */
    content: string;
    /** 错误码 */
    err_code: string;
    /** 错误信息 */
    err_message: string;
    /** 状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1057&docType=9 更新收费数量返回消息} */
  interface UpdateChargeNumResponse {
    /** 流水号 */
    apply_id: string;
    /** 客户ID */
    customer_id: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
    /** 处理状态 */
    result: string;
  }
}

/** 信息平台-采购 */
declare namespace Alibaba.Pur {
  /** {@link https://open.taobao.com/tmc.htm?docId=1462&docType=9 同步商品通知} */
  interface NotifyProduct {
    /** 消息描述 */
    desc?: string;
    /** 通知的标识 */
    message_id: string;
    /** 来源 */
    source: string;
    /** 来源ID */
    source_id: string;
    /** 来源类型 */
    source_type: string;
    /** 状态 enabled,disabled */
    status: string;
    /** 供应商名称 */
    supplier_name?: string;
    /** 租户 */
    tenant_id?: number;
  }
}

/** 阿里通信 */
declare namespace Alicom.Secret {
  /** {@link https://open.taobao.com/tmc.htm?docId=1380&docType=9 供应商监控消息} */
  interface VendorMonitor {
    /** 监控日志 */
    log: string;
    /** 监控日志元数据 */
    log_meta: string;
    /** 监控项 */
    monitor_type: string;
    /** 消息ID */
    msg_id: string;
    /** 分隔符,|默认是'|'分隔 */
    split: string;
    /** 时间挫 */
    timestamp: Date | number | string;
    /** 供应商Key */
    vendor_key: string;
  }
}

/** AE */
declare namespace Aliexpress.Warranty {
  /** {@link https://open.taobao.com/tmc.htm?docId=1250&docType=9 保修商消息-from warranty} */
  interface WarrantyOrderMessageFromWarranty {
    /** information */
    information?: string;
    /** status */
    status: string;
    /** warranty_code */
    warranty_code: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Bk {
  /** {@link https://open.taobao.com/tmc.htm?docId=1110&docType=9 网商消息回流} */
  interface Scf {
    /** 消息内容，JSON格式，每个事件类型数据格式不一样 */
    content: string;
    /** 机构ID, 如天猫在网商银行开户的IpRoleId。 */
    custinst_role_id: string;
    /** eventType */
    event_type: string;
  }
}

/** 阿里金融 */
declare namespace Alipay.Xiaodai {
  /** {@link https://open.taobao.com/tmc.htm?docId=643&docType=9 阿里金融商家和店铺维表数据回流} */
  interface CorpShop {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=607&docType=9 阿里金融商品数据回流} */
  interface Item {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=618&docType=9 阿里金融商家信息} */
  interface MerchantInfo {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=605&docType=9 阿里金融订单数据回流} */
  interface Order {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=608&docType=9 阿里金融损益数据回流} */
  interface ProfitLoss {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=606&docType=9 阿里金融采购单数据回流} */
  interface PurchaseOrder {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=644&docType=9 阿里金融商品退换货数据回流} */
  interface Service {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=616&docType=9 阿里金融商家订购软件信息} */
  interface SubInfo {
  }
}

/** 商旅API */
declare namespace Alitrip.Iatkfr {
  /** {@link https://open.taobao.com/tmc.htm?docId=1536&docType=9 云上国际逆向增加对淘内的DTS消息同步} */
  interface Sync {
    /** 业务类型 */
    biz_type?: string;
    /** 主键id */
    business_id: number;
    /** 操作类型 */
    command: string;
    /** 属性值json */
    properties: string;
    /** 表名 */
    table_name: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Sync {
  /** {@link https://open.taobao.com/tmc.htm?docId=1507&docType=9 机票自营云上应用消息同步淘内} */
  interface Iatkf {
    /** 业务类型 */
    biz_type?: string;
    /** 主键id */
    business_id: number;
    /** 操作类型 */
    command: string;
    /** 属性值json */
    properties: string;
    /** 表名 */
    table_name: string;
  }
}

/** 蚂蚁采购 */
declare namespace Ant.Pur {
  /** {@link https://open.taobao.com/tmc.htm?docId=2171&docType=9 蚂蚁采购同步商品通知} */
  interface NotifyProduct {
    /** 消息描述 */
    desc?: string;
    /** 通知的标识 */
    message_id: string;
    /** 来源 */
    source: string;
    /** 来源ID */
    source_id: string;
    /** 来源类型 */
    source_type: string;
    /** 状态 enabled,disabled */
    status: string;
    /** 供应商名称 */
    supplier_name?: string;
    /** 租户 */
    tenant_id?: number;
  }
}

/** 斑马 */
declare namespace Banma.Dataplatform {
  /** {@link https://open.taobao.com/tmc.htm?docId=1707&docType=9 AI出行-行程消息} */
  interface AiRouteCreate {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1772&docType=9 datadriver的app_traffic类消息} */
  interface DataDriverAppTrafficCreate {
    /** 123456 */
    msg_body: string;
    /** 123456 */
    msg_id: string;
    /** 123456 */
    msg_tag: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1749&docType=9 热力图MQ消息} */
  interface HeapmapCreate {
    /** 弹外MQ的内容 */
    msg_body: string;
    /** 弹外MQ的msgId */
    msg_id: string;
    /** 弹外MQ的tag */
    msg_tag: string;
  }
}

/** CBU */
declare namespace Cbu.Device {
  /** {@link https://open.taobao.com/tmc.htm?docId=1403&docType=9 cbu专业市场设备状态回流} */
  interface DeviceOnline {
    /** 设备编码 */
    device_code: string;
    /** ONLINE_WITH_CONTENT("ONLINE_WITH_CONTENT", "设备在线"), OFFLINE("OFFLINE", "设备断线"); */
    status: string;
    /** 当前状态的时间 */
    status_time: Date | number | string;
  }
}

/** 蜂鸟物流 */
declare namespace Ele.Fengniao {
  /** {@link https://open.taobao.com/tmc.htm?docId=1417&docType=9 门店开关店能力通知} */
  interface ChainstoreAbility {
    /** 门店code */
    chainstore_code: string;
    /** 商家code */
    merchant_code: string;
    /** 1关闭；2开启 */
    operator: number;
    /** 时间戳 毫秒 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1444&docType=9 门店配送范围变更消息} */
  interface ChainstoreRange {
    /** 门店code */
    chainstore_code: string;
    /** 商户code */
    merchant_code: string;
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1416&docType=9 门店签约结果通知} */
  interface ChainstoreSign {
    /** 门店code */
    chainstore_code: string;
    /** 是否通过 */
    is_sign: boolean;
    /** 商户code */
    merchant_code: string;
    /** 时间戳(毫秒) */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1415&docType=9 商家签约结果通知} */
  interface MerchantSign {
    /** 签约失败原因 */
    fail_reason?: string;
    /** 是否通过 */
    is_sign: boolean;
    /** 商家code */
    merchant_code: string;
    /** 时间戳 毫秒 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1418&docType=9 异常报备消息通知} */
  interface ReportAbnormal {
    /** 异常报备code */
    exception_code: string;
    /** 异常报备描述 */
    exception_desc: string;
    /** 异常报备时间 */
    exception_time: number;
    /** 订单号 */
    partner_order_code: string;
    /** 时间戳 毫秒 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1419&docType=9 物流状态信息同步} */
  interface StatusSync {
    /** 蜂鸟配送员姓名 */
    carrier_driver_name?: string;
    /** 蜂鸟配送员电话 */
    carrier_driver_phone?: string;
    /** 描述信息 */
    description?: string;
    /** 状态码 */
    order_status: number;
    /** 商户自己的订单号 */
    partner_order_code: string;
    /** 状态推送时间(毫秒) */
    push_time: number;
    /** 说明状态码 */
    remark_code?: string;
    /** 时间戳(毫秒) */
    timestamp: number;
  }
}

/** 机票自营 */
declare namespace Iatkf.Flightchg {
  /** {@link https://open.taobao.com/tmc.htm?docId=1526&docType=9 flightChg应用消息同步淘内} */
  interface Sync {
    /** 主键id */
    business_id: number;
    /** 操作类型 */
    command: string;
    /** 属性值json */
    properties: string;
    /** 表名 */
    table_name: string;
  }
}

/** 机票自营 */
declare namespace Iatkf.Order {
  /** {@link https://open.taobao.com/tmc.htm?docId=1522&docType=9 机票自营云上order应用消息同步淘内} */
  interface Sync {
    /** 主键id */
    business_id: number;
    /** 操作类型 */
    command: string;
    /** 属性值json */
    properties: string;
    /** 表名 */
    table_name: string;
  }
}

/** 变现猫 */
declare namespace Mmc.Pos {
  /** {@link https://open.taobao.com/tmc.htm?docId=2145&docType=9 变现猫曝光用户回传pos} */
  interface AdCatUserBack {
    /** 唯一id */
    message_id: string;
    /** 消息类型 */
    message_type: string;
    /** 门店id */
    store_id: number;
    /** 增值任务id */
    task_id?: string;
    /** 曝光日期 */
    time?: string;
    /** 曝光时间戳 */
    timestamp?: string;
    /** 用户id */
    uid: string;
  }
}

/** 网商银行 */
declare namespace Mybank.Aepreloandeposit {
  /** {@link https://open.taobao.com/tmc.htm?docId=1411&docType=9 AE提前放款卖家保证金水位同步} */
  interface Sync {
    /** 相对于前一天全量变化类型 */
    action?: string;
    /** 保证金金额 */
    fixed_deposit_amt?: string;
    /** 币种 */
    fixed_deposit_ccy?: string;
    /** 是否固定保证金 */
    is_fixed_deposit?: string;
    /** 提前放款比例 */
    rate?: string;
    /** 卖家支付宝ID */
    seller_aliid?: string;
    /** AE卖家id */
    seller_loginid: string;
    /** 卖家类型EBAY,CREDIT_AUTH,AE,AE_TEST(非AE不发送) */
    seller_type?: string;
  }
}

/** 网商银行 */
declare namespace Mybank.Aepreloanresult {
  /** {@link https://open.taobao.com/tmc.htm?docId=1410&docType=9 AE提前放款订单受理结果通知} */
  interface Sync {
    /** 拒绝原因 */
    denied_reason?: string;
    /** 订单是否受理 */
    pre_loan?: string;
    /** 订单号 */
    reference_code: string;
    /** AE卖家ID */
    seller_id?: string;
    /** 审核阶段 */
    stage?: string;
  }
}

/** 网商银行 */
declare namespace Mybank.Bkcloudfunds {
  /** {@link https://open.taobao.com/tmc.htm?docId=1484&docType=9 资金到卡签约成功通知} */
  interface FundToCardNotify {
    /** 签约类型 1资金到卡 */
    contract_type: number;
    /** 申请企业类型: 01 自然人 02、个体工商户 03、企业 */
    enterprise_type: string;
    /** 合作方机构号（网商银行分配） */
    isv_org_id: string;
    /** 负责人 */
    legalrep_man: string;
    /** 唯一标识 */
    message_id: string;
    /** 企业名称 */
    operating_license: string;
    /** 营业执照号 */
    operating_license_number: string;
    /** pos收款账户（网商银行账号） */
    pos_bankcard_no: string;
    /** pos收款账户名称（网商银行名称） */
    pos_bankcert_no: string;
    /** 签约门店 */
    store_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1485&docType=9 网商银行POS签约正式开通通知天猫接?} */
  interface PosSignSuccessNotify {
    /** 收单机构类型：1、通联 2、银联 */
    acquirer_type: string;
    /** 合作方机构号（网商银行分配） */
    isv_org_id: string;
    /** 商户号（收单商户号） */
    merchant_id: string;
    /** 唯一标识 */
    message_id: string;
    /** pos收款账户（网商银行账号） */
    pos_bankcard_no: string;
    /** pos收款账户名称（网商银行名称） */
    pos_bankcert_no: string;
    /** 签约门店 */
    store_id: string;
  }
}

/** 奇门 */
declare namespace Qimen.Reflow {
  /** {@link https://open.taobao.com/tmc.htm?docId=1052&docType=9 奇门批量回流消息} */
  interface BatchTrace {
    /** 内容，JSON字段 */
    content: string;
    /** 消息ID */
    msg_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1040&docType=9 奇门回流轨迹} */
  interface Trace {
    /** 回流方appkey */
    appkey: string;
    /** 订单创建时间 */
    create?: number;
    /** 主单号对应的erp单号，转单、审单、通知配货、出库 需要填。拆单、合单场景下不用填 */
    erp_order_id?: string;
    /** 触发事件的时间 */
    event_time?: string;
    /** JSON格式扩展信息 */
    ext?: string;
    /** 三方渠道下的卖家昵称 */
    nick?: string;
    /** 关联的三方渠道 */
    platform?: string;
    /** 回流的状态 */
    status: string;
    /** 淘宝子订单id（拆单、合单场景下不用填，其他场景需要回传,用英文逗号隔开） */
    taobao_sub_order_ids?: string;
    /** 关联的订单号 */
    tid: string;
    /** 卖家ID */
    uid?: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Astrolabe {
  /** {@link https://open.taobao.com/tmc.htm?docId=953&docType=9 星盘交易截单} */
  interface TradeHold {
    /** 订单ID */
    biz_id: number;
    /** 额外信息 */
    ext: string;
    /** 用户ID */
    user_id: number;
  }
}

/** 服务市场 */
declare namespace Taobao.Fuwu {
  /** {@link https://open.taobao.com/tmc.htm?docId=720&docType=9 客服绩效统计表} */
  interface CustomerServicePerformance {
    /** 询单人数 */
    ask_num: number;
    /** 询单最终付款人数 */
    ask_today_final_paid_num: number;
    /** 询单到次日付款人数 */
    ask_today_paid_today_or_tomorrow_num: number;
    /** 买家消息数 */
    buyer_msg_num: number;
    /** 咨询人数 */
    consult_num: number;
    /** 报表统计日期 */
    date: Date | number | string;
    /** 最早上线时间 HH:mm:ss */
    earliest_online_time: Date | number | string;
    /** 首次响应总耗时(s) */
    first_reply_cost: number;
    /** 首次响应人数 */
    first_reply_times: number;
    /** 最晚上线时间 HH:mm:ss */
    latest_online_time: Date | number | string;
    /** 日登录次数 */
    login_num: number;
    /** 长接待人数 */
    long_receive_num: number;
    /** 未回复人数 */
    no_reply_num: number;
    /** 下单优先判定销售人数 */
    onetime_buyer_num: number;
    /** 下单优先判定客单价 */
    onetime_buyer_unit: string;
    /** 下单优先判定退款人数 */
    onetime_finish_refund_persons: number;
    /** 下单优先判定销售量 */
    onetime_item_num: number;
    /** 下单优先判定销售额 */
    onetime_payments: string;
    /** 下单优先判定邮费 */
    onetime_post_fee: string;
    /** 下单优先判定退款金额 */
    onetime_refund_fee: string;
    /** 下单优先判定退款件数 */
    onetime_refund_item_num: number;
    /** 下单判定销售人数 */
    order_buyer_num: number;
    /** 下单判定客单价 */
    order_buyer_unit: string;
    /** 下单判定退款人数 */
    order_finish_refund_persons: number;
    /** 下单判定销售量 */
    order_item_num: number;
    /** 下单判定销售额 */
    order_payments: string;
    /** 下单判定邮费 */
    order_post_fee: string;
    /** 下单判定退款金额 */
    order_refund_fee: string;
    /** 下单判定退款件数 */
    order_refund_item_num: number;
    /** 付款判定销售人数 */
    paid_buyer_num: number;
    /** 付款判定客单价 */
    paid_buyer_unit: string;
    /** 付款优先判定退款人数 */
    paid_finish_refund_persons: number;
    /** 付款判定销售量 */
    paid_item_num: number;
    /** 付款判定销售额 */
    paid_payments: string;
    /** 付款判定邮费 */
    paid_post_fee: string;
    /** 付款判定退款金额 */
    paid_refund_fee: string;
    /** 付款判定退款件数 */
    paid_refund_item_num: number;
    /** 接待总时长(秒) */
    receive_cost: number;
    /** 商家ID */
    seller_id: string;
    /** 客服消息数 */
    seller_msg_num: number;
    /** 商家nick */
    seller_nick: string;
    /** 客服字数 */
    seller_word_num: number;
    /** 服务总时长(秒) */
    service_cost: number;
    /** 接待人数 */
    service_num: number;
    /** 慢响应人数 */
    slow_reception_num: number;
    /** 挂起总时长(秒) */
    suspend_cost: number;
    /** 总未回复聊天对数：包含过滤 */
    total_noreply_chatpeer: number;
    /** 总响应时间(s) */
    total_reply_cost: number;
    /** 总响应人数 */
    total_reply_times: number;
    /** 数据上传时间 */
    updatetime: Date | number | string;
    /** 用户系统配置 */
    user_config_params: string;
    /** 旺旺昵称 */
    wangwang_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=732&docType=9 电子发票信息} */
  interface ElectronicInvoice {
    /** 开票金额 */
    amount: string;
    /** 电子发票号 */
    e_invoice_no?: string;
    /** 电子发票流水号，流水号唯一标识 */
    id: number;
    /** 发票代码 */
    invoice_code: string;
    /** 发票文件,此参数通过taobao.tmc.message.produce中的media_content指定 */
    invoice_file: number;
    /** 发票号码 */
    invoice_no: string;
    /** 开票日期 */
    invoice_time: Date | number | string;
    /** 淘宝子订单号 */
    oid?: number | bigint;
    /** 交易编号 (父订单的交易编号) */
    tid: number | bigint;
  }
}

/** HOMEAI消息对接 */
declare namespace Taobao.Homeai {
  /** {@link https://open.taobao.com/tmc.htm?docId=1464&docType=9 HOMEAI同步Case消息接口} */
  interface CaseSync {
    /** 同步需要的资源 */
    case_import_desc: string;
    /** jobid */
    job_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1448&docType=9 一键迁移算法接口} */
  interface LayoutTransfer {
    /** 入参数，包括sceneUrl， */
    in_param: string;
    /** 居然之家软装服务id */
    job_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1515&docType=9 HomeStyler渲染结果消息} */
  interface RenderResult {
    /** 任务id */
    job_id: string;
    /** renderResult包含渲染状态，预计完成时间等信息 */
    render_result: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1565&docType=9 homestyler渲染图数据同步} */
  interface SyncData {
    /** 数据全量json */
    data: string;
    /** 唯一taskId标识 */
    task_id: string;
    /** 数据变更类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1571&docType=9 Homestyler模型数据同步到Homeai消息} */
  interface SyncHsData {
    /** 数据,json格式 */
    data: string;
    /** jid */
    jid: string;
    /** 时间戳 */
    time: number;
  }
}

/** HOMEAI */
declare namespace Taobao.Ihomesvj {
  /** {@link https://open.taobao.com/tmc.htm?docId=1636&docType=9 同步svj的crm数据} */
  interface SyncSvjCrmData {
    /** 数据体json */
    json: string;
    /** 业务的唯一标示 */
    key: string;
    /** 标示数据体的type */
    type: string;
  }
}

/** 交易全链路 */
declare namespace Taobao.Jds {
  /** {@link https://open.taobao.com/tmc.htm?docId=646&docType=9 退款单状态跟踪} */
  interface RefundTrace {
    /** 业务动作发生的时间 */
    action_time: Date | number | string;
    /** 操作人 */
    operator?: string;
    /** 退款单Id */
    refund_id: number | bigint;
    /** 卖家的淘宝用户名 */
    seller_nick: string;
    /** 退款单状态。X_REFUND_START(退款开始),X_RETURN_START(退货开始),X_TO_SYSTEM(已转单),X_SERVICE_AUDITED(已客审),T_SELLER_REFUSE_BUYER(拒绝退款),X_FINANCE_AUDITED(已财审),T_WAIT_BUYER_RETURN_GOODS(等待买家发货),T_WAIT_SELLER_CONFIRM_GOODS(买家已发货),X_MATCHED(退货已匹配),X_EXAMINED(商家已验收),T_SUCCESS(退款成功),X_RETURN_SUCCESS(退货成功),T_CLOSED(退款关闭) */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=620&docType=9 交易订单状态跟踪} */
  interface TradeTrace {
    /** 业务动作发生的时间 */
    action_time: Date | number | string;
    /** 操作人 */
    operator?: string;
    /** 子订单ID列表，多个ID用半角逗号分隔 */
    order_ids?: string;
    /** 业务备注 */
    remark?: string;
    /** 卖家的淘宝用户名 */
    seller_nick: string;
    /** 订单状态。T_WAIT_BUYER_PAY(等待买家付款),T_WAIT_SELLER_SEND_GOODS(等待卖家发货),X_DOWNLOADED(订单已推送),X_TO_SYSTEM(系统已接单),X_SERVICE_AUDITED(已客审),X_FINANCE_AUDITED(已财审),X_ALLOCATION_NOTIFIED(已通知配货),X_WAIT_ALLOCATION(待配货),X_SORT_PRINTED(已打拣货单),X_SEND_PRINTED(已打发货单),X_LOGISTICS_PRINTED(已打物流单),X_SORTED(已拣货),X_EXAMINED(已验货),X_PACKAGED(已打包),X_WEIGHED(已称重),X_OUT_WAREHOUSE(已出库),T_WAIT_BUYER_CONFIRM_GOODS(已发货),T_TRADE_FINISHED(已完成),T_TRADE_CLOSED(已结束) */
    status: string;
    /** 交易ID */
    tid: number | bigint;
  }
}

/** 智慧门店下行消息 */
declare namespace Taobao.Wisdomstore {
  /** {@link https://open.taobao.com/tmc.htm?docId=1245&docType=9 人脸抓拍数据上传消息} */
  interface FaceUpload {
    /** 视频设备ID */
    camera_id?: number;
    /** 设备ID */
    device_code: string;
    /** 抓拍的人脸图片二进制流 */
    face_bin?: string;
    /** 边缘计算节点定义的FaceID */
    face_id: number;
    /** 抓拍的人脸图片保存地址，和FaceBin必须有一个出现 */
    face_url?: string;
    /** 保留 */
    feature?: string;
    /** 图片拍摄时间 */
    timestamp: number;
    /** 消息类型 */
    type: number;
  }
}

/** 天猫 */
declare namespace Tmall.Carprofile {
  /** {@link https://open.taobao.com/tmc.htm?docId=2115&docType=9 用户车辆档案授权状态更新} */
  interface AuthStatusChangeToTB {
    /** ISV账户编号 */
    channel_id: string;
    /** ISV渠道类型。1-天猫养车 */
    channel_type: number;
    /** 幂等ID */
    impl_id: string;
    /** 同步状态。1-打开，0-关闭 */
    sync_status: number;
  }
}

/** 天猫 */
declare namespace Tmall.Chaoshi {
  /** {@link https://open.taobao.com/tmc.htm?docId=629&docType=9 天猫超市商品信息} */
  interface AuctionInfo {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=630&docType=9 天猫超市业务控制信息} */
  interface DataMark {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=631&docType=9 天猫超市mcas类目信息} */
  interface McasCat {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=628&docType=9 天猫超市应收明细表} */
  interface PayInfoReport {
  }
}

/** 天猫 */
declare namespace Tmall.Fushi {
  /** {@link https://open.taobao.com/tmc.htm?docId=746&docType=9 天猫服饰虚拟搭配合成图} */
  interface CollocationSynthesis {
    /** 标识一个合成图片 */
    key: string;
    /** 合成图 此参数通过taobao.tmc.message.produce中的media_content指定 */
    syn_img: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=744&docType=9 天猫服饰虚拟搭配} */
  interface VirtualCollocation {
    /** 货号 */
    art_num: string;
    /** 图片 此参数通过taobao.tmc.message.produce中的media_content指定 */
    img: string;
    /** 外部编码 */
    outer_id: number;
    /** 卖家id */
    seller_id: number;
    /** 款式信息 */
    style_info: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=756&docType=9 虚拟单品信息同步} */
  interface VirtualCollocationNew {
    /** 货号 */
    art_num: string;
    /** 衣服开闭，1是闭合，2是打开 */
    cardigan?: number;
    /** 衣服后摆图片，对应media_content5 */
    coattail?: string;
    /** 性别，男：male，女：female，不分：both */
    gender?: string;
    /** 单品图，对应media_content */
    item_pic: string;
    /** 层级id */
    layer_id: number;
    /** 遮罩配饰图，对应media_content4 */
    mask_accessories?: string;
    /** 遮罩图，对应media_content3 */
    mask_pic: string;
    /** 遮罩作用 */
    mask_type: number;
    /** 外部编码 */
    outer_id: number;
    /** 卖家id */
    seller_id: number;
    /** 鞋型,高跟：0，平底：1 */
    shoe_type?: number;
    /** 是否显示领子 */
    show_collar: number;
    /** 是否显示裤袢 */
    show_pant?: number;
    /** 款式信息 */
    style_info: string;
    /** 试穿图，对应media_content2 */
    try_pic: string;
  }
}

/** 天猫 */
declare namespace Tmall.Instant {
  /** {@link https://open.taobao.com/tmc.htm?docId=1518&docType=9 极速回款追缴消息回流} */
  interface Recover {
    /** 追缴业务单号 */
    biz_id: string;
    /** 消息内容，JSON格式，每个事件类型数据格式不一样 */
    content: string;
    /** sceneCode */
    scene_code: string;
  }
}

/** 天猫 */
declare namespace Tmall.Jia {
  /** {@link https://open.taobao.com/tmc.htm?docId=704&docType=9 设计表信息} */
  interface DiyDesign {
    /** 面积(平米) */
    area?: number;
    /** 小区ID */
    community_id?: number;
    /** 小区名称 */
    community_name?: string;
    /** 设计师是公司名称 */
    company_name?: string;
    /** 描述 */
    description?: string;
    /** 设计ID */
    design_id: number;
    /** 设计名称 */
    design_name: string;
    /** 设计NO */
    design_no: string;
    /** 设计状态 0 - 已发布（展示中样板房）1 - 待发布（设计师未展示样板房）2 - 审核失败（已下架样板房）3 - 等待审核（待小二审核样板房） */
    design_state: number;
    /** 设计风格风格 0 – 其它 1 – 现代简约 2 – 田园 3 – 新中式 4 – 欧式 5 – 地中海 6 – 东南亚 7 – 美式乡村 8 – 日式 9 – 中式古典 10 – 混搭 */
    design_style: number;
    /** 喜欢数 */
    enjoy_count?: number;
    /** 扩展 */
    ext?: string;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 户型NO */
    houselayout_no?: string;
    /** 户型图PIC */
    house_pic: string;
    /** 户型 0 – 其它 1 – 一室一厅 2 – 两室一厅 3 – 两室两厅 4 – 三室一厅 5 – 三室两厅 6 – 四室两厅 7 – 五室两厅 8 – LOFT 9 – 复式 */
    house_type: number;
    /** 设计理念 */
    idea: string;
    /** 软件商 */
    isv: string;
    /** 软件商授权码 */
    isv_l: string;
    /** 发布时间 */
    publish_time: Date | number | string;
    /** 封面ID */
    render_id?: number;
    /** 封面NO */
    render_no: string;
    /** 封面图片 */
    render_pic: string;
    /** 对应house_type对应的图片链接 Json格式 {1:url,2:url,3:url} */
    render_pic_house_type: string;
    /** 用户ID（淘宝用户ID） */
    user_id: number;
    /** 用户nike(淘宝NIKE) */
    user_nike: string;
    /** 浏览数 */
    visit_count?: number;
    /** 周浏览量 */
    week_visit_count?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=707&docType=9 设计模型关联表} */
  interface DiyDesignItem {
    /** 个数 */
    count: number;
    /** 设计no */
    design_no: string;
    /** id */
    id: number;
    /** 软件商 */
    isv: string;
    /** 软件商授权码 */
    isv_l: string;
    /** 物品no */
    item_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=708&docType=9 户型表} */
  interface DiyHouseLayout {
    /** 城市名 */
    city_name: string;
    /** 小区id */
    community_id: number;
    /** 2D平面图链接 */
    house_pic: string;
    /** 户型 0 – 其它 1 – 一室一厅 2 – 两室一厅 3 – 两室两厅 4 – 三室一厅 5 – 三室两厅 6 – 四室两厅 7 – 五室两厅 8 – LOFT 9 – 复式 */
    house_type: string;
    /** ID */
    id: number;
    /** 软件商 */
    isv: string;
    /** 软件商授权 */
    isv_l: string;
    /** 名称 */
    name: string;
    /** 唯一标识NO. */
    no: string;
    /** 状态 0 – 正常 1 – 临时记录 9 – 删除 */
    state: number;
    /** 用户id */
    user_id: number;
    /** 用户昵称（淘宝昵称） */
    user_nike: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=706&docType=9 模型商品表} */
  interface DiyItem {
    /** 3D模型类型（待扩展 ） */
    "3d_type"?: string;
    /** 建模商用户id */
    author_id?: number;
    /** 0－未烘培模型 1－已烘培模型 */
    baked: number;
    /** 是否可单向缩放 */
    direct_scalable: string;
    /** 收藏数 */
    favorite_count?: number;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 类型默认填0 */
    inner_type?: string;
    /** 软件商 */
    isv: string;
    /** 软件商授权码 */
    isv_l: string;
    /** 产品模型文件链接 */
    item_model?: string;
    /** 产品模型图链接 */
    item_pic: string;
    /** NO. */
    no: string;
    /** 图片比例 */
    photo_scale?: string;
    /** 品牌 */
    product_brand?: string;
    /** 高（单位:毫米) */
    product_height: number;
    /** 长（单位:毫米) */
    product_length: number;
    /** 产品名称 */
    product_name: string;
    /** 宽（单位:毫米) */
    product_width: number;
    /** 0 －未渲染 1 －准备渲染 2 －渲染中 3 －渲染完成 4 －渲染失败 */
    render_state: number;
    /** 状态 0 – 正常 1 – 临时记录 9 – 删除 */
    state: number;
    /** 子类型 */
    sub_type?: string;
    /** 天猫商品item id */
    taobao_item_id?: number;
    /** 天猫商品sku_id */
    taobao_sku_id?: number;
    /** 商家用户id 卖家ID */
    user_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=709&docType=9 楼盘小区} */
  interface DiyLocationCommunity {
    /** 地址 */
    address: string;
    /** 区域吗 */
    area_code: string;
    /** 所在区名称 */
    area_name: string;
    /** 城市名 */
    city_name: string;
    /** 描述 */
    description?: string;
    /** 开发商 */
    developer?: string;
    /** 户型数 */
    houselayout_count: number;
    /** 户型 0 – 其它 1 – 一室一厅 2 – 两室一厅 3 – 两室两厅 4 – 三室一厅 5 – 三室两厅 6 – 四室两厅 7 – 五室两厅 8 – LOFT 9 – 复式 */
    house_type: number;
    /** id */
    id: number;
    /** 纬度 */
    latitude?: string;
    /** 经度 */
    longitude?: string;
    /** 小区名称 */
    name: string;
    /** 省 */
    province_name: string;
    /** 状态 0 – 正常 1 – 临时记录 9 – 删除 */
    state: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=705&docType=9 渲染任务表} */
  interface DiyRender {
    /** 模型锚点数据 描点数据要改要增加淘宝商品ID skuid */
    apoints: string;
    /** 展示类型 0 – 不展示 1 – 展示 2 – 封面 */
    cover: number;
    /** 描述 */
    description?: string;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 软件商授权码 */
    isv_l: string;
    /** 渲染任务id */
    render_id: number;
    /** 渲染图 */
    render_pic: string;
    /** 房间 0 – 其它 1 – 客厅 2 – 主卧 3 – 次卧 4 – 厨房 5 – 餐厅 6 – 卫生间 7 – 书房 8 – 阳台 9 – 玄关 10 – 儿童房 11 – 储物室 */
    room_type: number;
    /** 渲染服务类型 0 – 预览渲染 1 – 效果图渲染 2 – 全景图渲染 */
    service_type: number;
  }
}

/** 天猫 */
declare namespace Tmall.Jst {
  /** {@link https://open.taobao.com/tmc.htm?docId=805&docType=9 商家消息回执} */
  interface BusinessInformationReceipt {
    /** 操作 */
    action: string;
    /** 类目Key */
    category_key: string;
    /** 处理人编号 */
    handler_id: string;
    /** 处理人角色 */
    handler_role: string;
    /** 消息编号 */
    message_id: string;
    /** 店铺编号 */
    shop_id: string;
    /** 次级类目Key */
    sub_category_key: string;
  }
}

/** 天猫魔盒 */
declare namespace Tmall.Mh {
  /** {@link https://open.taobao.com/tmc.htm?docId=752&docType=9 天猫魔盒线下Mac地址回传} */
  interface MacAddress {
    /** 回传时间(出库扫描二维码时间) */
    backflow_time: string;
    /** 下单时间 */
    creat_time: string;
    /** 客户 */
    customer: string;
    /** 发货仓库 */
    delivery_store?: string;
    /** 快递公司 */
    express?: string;
    /** 商品名称 */
    item_name: string;
    /** Mac地址 */
    mac_address: string;
    /** 数量 */
    num: string;
    /** 单价 */
    price?: string;
    /** 详细信息 */
    receiver_address?: string;
    /** 城市 */
    receiver_city?: string;
    /** 区县 */
    receiver_district?: string;
    /** 收货人 */
    receiver_name: string;
    /** 省份 */
    receiver_state?: string;
    /** 店铺名称 */
    seller_nick?: string;
    /** 规格名称 */
    sku_name?: string;
    /** 规格编码 */
    sku_num: string;
    /** 订单id */
    tid: number | bigint;
    /** 总价 */
    total?: string;
    /** 单位 */
    unit?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=818&docType=9 天猫魔盒扫码SN号回传} */
  interface SerialNumber {
    /** 魔盒分销商 */
    customer: string;
    /** 开票金额 */
    invoice_amount: string;
    /** 商品ID */
    item_id: string;
    /** 商品名称 */
    item_name: string;
    /** 商品数量 */
    item_quantity: string;
    /** 商品对应sn码(商品数量与sn的个数要对等) */
    item_sn: string;
    /** 淘宝订单号 */
    order_number: number | bigint;
    /** 商品单价 */
    price: string;
    /** 销售渠道 */
    sales_channels: string;
    /** 订单ID */
    tid: number | bigint;
  }
}

/** 新零售终端上行消息 */
declare namespace Tmall.Nrt {
  /** {@link https://open.taobao.com/tmc.htm?docId=1338&docType=9 商户信息回流} */
  interface DealerToTmall {
    /** 商户编号 */
    f_code: string;
    /** 商户简称 */
    f_jc: string;
    /** 主营品牌 阿里品牌 */
    f_jypp?: string;
    /** 商户名称 */
    f_name: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1340&docType=9 摊位合同数据回流} */
  interface StallContractToTmall {
    /** 经营品牌钉钉部门ID */
    f_branddingdeptid: string;
    /** 楼栋钉钉部门ID */
    f_buildingdingdeptid: string;
    /** 分类钉钉部门ID */
    f_categorydingdeptid: string;
    /** 门店编码 */
    f_fddm: string;
    /** 门店名称 */
    f_fdmc: string;
    /** 楼层钉钉部门ID */
    f_floordingdeptid: string;
    /** 商户代码 */
    f_ghdwdm: string;
    /** 商户名称 */
    f_ghdwmc: string;
    /** 合同编号 */
    f_hth: string;
    /** 原合同编号 */
    f_hth_old?: string;
    /** 租赁日期 止 */
    f_htyxq_end: Date | number | string;
    /** 租赁日期 起 */
    f_htyxq_start: Date | number | string;
    /** 摊位钉钉部门ID */
    f_stalldingdeptid: string;
    /** 原摊位钉钉部门ID */
    f_stalldingdeptid_old?: string;
    /** 合同状态 */
    f_status: number;
    /** 门店钉钉部门ID */
    f_storedingdeptid: string;
    /** 租赁单元(摊位编码) */
    f_wldpdm: string;
    /** 摊位名称 */
    f_wldpmc: string;
    /** 主营品类名称 */
    f_zypl_name: string;
    /** 主营品牌代码 */
    f_zyppdm?: string;
    /** 主营品牌名称 */
    f_zypp_name: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
    /** 跨摊位合同号 */
    related_contract_no?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1339&docType=9 摊位信息数据回流} */
  interface StallInfoToTmall {
    /** 门店编号 */
    f_fddm: string;
    /** 摊位资产编码 */
    f_wldpdm: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1328&docType=9 门店信息回流} */
  interface StoreInfoToTmall {
    /** 门店地址 */
    f_dz?: string;
    /** 门店编码 */
    f_fddm: string;
    /** 门店名称 */
    f_fdmc: string;
    /** 操作类型 删除-delete 新增-insert 更新-update */
    op_type: string;
  }
}

/** 天猫 */
declare namespace Tmall.Txcs {
  /** {@link https://open.taobao.com/tmc.htm?docId=1582&docType=9 财务货损明细数据信息回流} */
  interface FinanceCargoDamageDetail {
    /** 所属区域 */
    area?: string;
    /** 猫超承担比例 */
    assume_percent: number;
    /** 业务模式 */
    channel_code: number;
    /** 货损数量 */
    damage_cnt: string;
    /** 货损费金额(不含税) */
    exc_tax_fee: number;
    /** 不含税RPO单价 */
    exc_tax_rpo_price: number;
    /** 好品数量 */
    good_cnt: string;
    /** 货损费金额(含税) */
    inc_tax_fee: number;
    /** RT判断时间 */
    judge_time: number;
    /** 商家编码 */
    merchant_code: string;
    /** 门店编码 */
    ou_code: string;
    /** RPO数量 */
    return_cnt: string;
    /** RSO单号 */
    rso_code: string;
    /** RSO创建时间 */
    rso_create_time: number;
    /** 商品编码 */
    sku_code: string;
    /** 汇总数据编码 */
    summary_id: string;
    /** 时间戳 */
    timestamp: number;
    /** 单位 */
    unit: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1574&docType=9 财务货损汇总数据信息回流} */
  interface FinanceCargoDamageSummary {
    /** 业务模式 */
    channel_code: number;
    /** 时间周期 */
    cost_period: string;
    /** 货损费金额(不含税) */
    exc_tax_fee: number;
    /** 货损费金额(含税) */
    inc_tax_fee: number;
    /** 商家编码 */
    merchant_code: string;
    /** 原始金额(不含税) */
    origin_fee: number;
    /** 门店编码 */
    ou_code: string;
    /** 汇总编码 */
    summary_id: string;
    /** 货损费金额(税额) */
    tax_fee: number;
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1577&docType=9 商品进价信息回流} */
  interface PurchasePrice {
    /** 渠道类型 */
    channel_code?: number;
    /** 币种 */
    currency?: string;
    /** 含税采购价(分) */
    inc_tax_purchase_price?: number;
    /** 默认6寄售 */
    marketing_type?: number;
    /** 商家编码 */
    merchant_code: string;
    /** 门店编码 */
    ou_code: string;
    /** 1基准价；2扣点 */
    price_type: number;
    /** 扣点 */
    sales_point?: string;
    /** 商品编码 */
    sku_code: string;
    /** 时间戳 */
    timestamp: number;
  }
}

/** 小满 */
declare namespace Xiaoman.Call {
  /** {@link https://open.taobao.com/tmc.htm?docId=1954&docType=9 小满外呼信息同步} */
  interface MsgSync {
    /** 客户ID */
    ali_cgs: string;
    /** 跟进记录内容，长文本 */
    content: string;
    /** 记录创建时间 */
    create_time: string;
    /** 跟进记录唯一标识 */
    record_id: string;
    /** 跟进类型：快速跟进-101、电话-103 */
    record_type: string;
  }
}

/** 小满 */
declare namespace Xiaoman.Customer {
  /** {@link https://open.taobao.com/tmc.htm?docId=1832&docType=9 小满客户实施状态同步} */
  interface ImplementationStatusSync {
    /** 阿里客户ID，所有客户都会有的一个唯一ID，包括未签约，已签约 */
    ali_cgs: string;
    /** 小满实施状态 */
    implementation_status: string;
    /** 小满客户ID */
    okki_client_id: string;
  }
}

/** 小满 */
declare namespace Xiaoman.Email {
  /** {@link https://open.taobao.com/tmc.htm?docId=1953&docType=9 小满邮件信息同步} */
  interface MsgSync {
    /** 关联客户ID */
    ali_cgs: string;
    /** 创建时间 */
    create_time: string;
    /** 邮件记录主键 */
    email_id: string;
    /** 发送时间 */
    send_time: string;
    /** 邮件标题 */
    title?: string;
  }
}

/** 小满 */
declare namespace Xiaoman.Perform {
  /** {@link https://open.taobao.com/tmc.htm?docId=1798&docType=9 小满订单履约状态回流ICBU-CRM} */
  interface OrderChange {
    /** 4生效订单 5结束订单 */
    action: string;
    /** 客户aliid */
    ali_cgs: string;
    /** 阿里订单号 */
    ali_order_no: string;
    /** 阿里订单行号 */
    ali_order_product_id: string;
    /** 小满客户id */
    okki_client_id: string;
    /** 执行时间 */
    okki_execute_time: Date | number | string;
    /** 小满订单号 */
    okki_order_no: string;
    /** 小满合同号 */
    okki_order_product_id: string;
    /** 服务开始时间 */
    okki_valid_from: Date | number | string;
    /** 服务结束时间 */
    okki_valid_to: Date | number | string;
  }
}

/** 小满 */
declare namespace Xiaoman.Register {
  /** {@link https://open.taobao.com/tmc.htm?docId=1803&docType=9 CGS客户小满注册消息回调} */
  interface CallBack {
    /** aliId */
    ali_cgs: string;
    /** 小满客户id */
    okki_client_id: string;
    /** 小满客户注册邮箱账号 */
    okki_master_account: string;
  }
}

/** 小满 */
declare namespace Xiaoman.Work {
  /** {@link https://open.taobao.com/tmc.htm?docId=1925&docType=9 小满工单信息同步} */
  interface MsgSync {
    /** 阿里cgs唯一标识 */
    ali_cgs: string;
    /** 创建时间 */
    create_time: string;
    /** 小满公司唯一标识 */
    okki_client_id: string;
    /** 小满账号唯一标识 */
    okki_user_id?: string;
    /** 最新回复记录，为 HTML 格式 */
    reply_content?: string;
    /** 问题描述 */
    ticket_content?: string;
    /** 工单编号 */
    ticket_id: string;
    /** 工单状态：0尚未受理，1受理中，2等待回复，3已解决，99已关闭，98已删除 */
    ticket_status: string;
    /** 工单标题 */
    ticket_title: string;
    /** 工单类型：建议/BUG */
    ticket_type_name: string;
    /** 更新时间 */
    update_time: string;
  }
}
