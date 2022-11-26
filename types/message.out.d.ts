/// <reference path="message.d.ts" />

declare namespace OutgoingMessage {
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
  /** {@link Ant.Pur.NotifyProduct 蚂蚁采购 > 蚂蚁采购同步商品通知} */
  type AntPurNotifyProduct = Message & { content: MessageContent & { topic: 'ant_pur_NotifyProduct', content: string | Ant.Pur.NotifyProduct } };
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
  /** {@link Taobao.Fuwu.CustomerServicePerformance 服务市场 > 客服绩效统计表} */
  type TaobaoFuwuCustomerServicePerformance = Message & { content: MessageContent & { topic: 'taobao_fuwu_CustomerServicePerformance', content: string | Taobao.Fuwu.CustomerServicePerformance } };
  /** {@link Taobao.Fuwu.ElectronicInvoice 服务市场 > 电子发票信息} */
  type TaobaoFuwuElectronicInvoice = Message & { content: MessageContent & { topic: 'taobao_fuwu_ElectronicInvoice', content: string | Taobao.Fuwu.ElectronicInvoice } };
  /** {@link Taobao.Homeai.LayoutTransfer HOMEAI消息对接 > 一键迁移算法接口} */
  type TaobaoHomeaiLayoutTransfer = Message & { content: MessageContent & { topic: 'taobao_homeai_LayoutTransfer', content: string | Taobao.Homeai.LayoutTransfer } };
  /** {@link Taobao.Homeai.RenderResult HOMEAI消息对接 > HomeStyler渲染结果消息} */
  type TaobaoHomeaiRenderResult = Message & { content: MessageContent & { topic: 'taobao_homeai_RenderResult', content: string | Taobao.Homeai.RenderResult } };
  /** {@link Taobao.Ihomesvj.SyncSvjCrmData HOMEAI > 同步svj的crm数据} */
  type TaobaoIhomesvjSyncSvjCrmData = Message & { content: MessageContent & { topic: 'taobao_ihomesvj_SyncSvjCrmData', content: string | Taobao.Ihomesvj.SyncSvjCrmData } };
  /** {@link Taobao.Jds.RefundTrace 交易全链路 > 退款单状态跟踪} */
  type TaobaoJdsRefundTrace = Message & { content: MessageContent & { topic: 'taobao_jds_RefundTrace', content: string | Taobao.Jds.RefundTrace } };
  /** {@link Taobao.Jds.TradeTrace 交易全链路 > 交易订单状态跟踪} */
  type TaobaoJdsTradeTrace = Message & { content: MessageContent & { topic: 'taobao_jds_TradeTrace', content: string | Taobao.Jds.TradeTrace } };
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
}

/** 网上法庭 */
declare namespace Alibaba.Nazca {
  /** 作废存证返回消息接口 */
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

  /** 查询收费数量返回消息 */
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

  /** 存证返回消息接口 */
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

  /** 更新收费数量返回消息 */
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
  /** 同步商品通知 */
  interface NotifyProduct {
    /** 消息描述 */
    desc: string;
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
    supplier_name: string;
    /** 租户 */
    tenant_id: number;
  }
}

/** 阿里通信 */
declare namespace Alicom.Secret {
  /** 供应商监控消息 */
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
    timestamp: Date;
    /** 供应商Key */
    vendor_key: string;
  }
}

/** 蚂蚁采购 */
declare namespace Ant.Pur {
  /** 蚂蚁采购同步商品通知 */
  interface NotifyProduct {
    /** 消息描述 */
    desc: string;
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
    supplier_name: string;
    /** 租户 */
    tenant_id: number;
  }
}

/** 蜂鸟物流 */
declare namespace Ele.Fengniao {
  /** 门店开关店能力通知 */
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

  /** 门店配送范围变更消息 */
  interface ChainstoreRange {
    /** 门店code */
    chainstore_code: string;
    /** 商户code */
    merchant_code: string;
    /** 时间戳 */
    timestamp: number;
  }

  /** 门店签约结果通知 */
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

  /** 商家签约结果通知 */
  interface MerchantSign {
    /** 签约失败原因 */
    fail_reason: string;
    /** 是否通过 */
    is_sign: boolean;
    /** 商家code */
    merchant_code: string;
    /** 时间戳 毫秒 */
    timestamp: number;
  }

  /** 异常报备消息通知 */
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

  /** 物流状态信息同步 */
  interface StatusSync {
    /** 蜂鸟配送员姓名 */
    carrier_driver_name: string;
    /** 蜂鸟配送员电话 */
    carrier_driver_phone: string;
    /** 描述信息 */
    description: string;
    /** 状态码 */
    order_status: number;
    /** 商户自己的订单号 */
    partner_order_code: string;
    /** 状态推送时间(毫秒) */
    push_time: number;
    /** 说明状态码 */
    remark_code: string;
    /** 时间戳(毫秒) */
    timestamp: number;
  }
}

/** 服务市场 */
declare namespace Taobao.Fuwu {
  /** 客服绩效统计表 */
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
    date: Date;
    /** 最早上线时间 HH:mm:ss */
    earliest_online_time: Date;
    /** 首次响应总耗时(s) */
    first_reply_cost: number;
    /** 首次响应人数 */
    first_reply_times: number;
    /** 最晚上线时间 HH:mm:ss */
    latest_online_time: Date;
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
    updatetime: Date;
    /** 用户系统配置 */
    user_config_params: string;
    /** 旺旺昵称 */
    wangwang_nick: string;
  }

  /** 电子发票信息 */
  interface ElectronicInvoice {
    /** 开票金额 */
    amount: string;
    /** 电子发票号 */
    e_invoice_no: string;
    /** 电子发票流水号，流水号唯一标识 */
    id: number;
    /** 发票代码 */
    invoice_code: string;
    /** 发票文件,此参数通过taobao.tmc.message.produce中的media_content指定 */
    invoice_file: number;
    /** 发票号码 */
    invoice_no: string;
    /** 开票日期 */
    invoice_time: Date;
    /** 淘宝子订单号 */
    oid: number | bigint;
    /** 交易编号 (父订单的交易编号) */
    tid: number | bigint;
  }
}

/** HOMEAI消息对接 */
declare namespace Taobao.Homeai {
  /** 一键迁移算法接口 */
  interface LayoutTransfer {
    /** 入参数，包括sceneUrl， */
    in_param: string;
    /** 居然之家软装服务id */
    job_id: string;
  }

  /** HomeStyler渲染结果消息 */
  interface RenderResult {
    /** 任务id */
    job_id: string;
    /** renderResult包含渲染状态，预计完成时间等信息 */
    render_result: string;
  }
}

/** HOMEAI */
declare namespace Taobao.Ihomesvj {
  /** 同步svj的crm数据 */
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
  /** 退款单状态跟踪 */
  interface RefundTrace {
  }

  /** 交易订单状态跟踪 */
  interface TradeTrace {
    /** 业务动作发生的时间 */
    action_time: Date;
    /** 操作人 */
    operator: string;
    /** 子订单ID列表，多个ID用半角逗号分隔 */
    order_ids: string;
    /** 业务备注 */
    remark: string;
    /** 卖家的淘宝用户名 */
    seller_nick: string;
    /** 订单状态。T_WAIT_BUYER_PAY(等待买家付款),T_WAIT_SELLER_SEND_GOODS(等待卖家发货),X_DOWNLOADED(订单已推送),X_TO_SYSTEM(系统已接单),X_SERVICE_AUDITED(已客审),X_FINANCE_AUDITED(已财审),X_ALLOCATION_NOTIFIED(已通知配货),X_WAIT_ALLOCATION(待配货),X_SORT_PRINTED(已打拣货单),X_SEND_PRINTED(已打发货单),X_LOGISTICS_PRINTED(已打物流单),X_SORTED(已拣货),X_EXAMINED(已验货),X_PACKAGED(已打包),X_WEIGHED(已称重),X_OUT_WAREHOUSE(已出库),T_WAIT_BUYER_CONFIRM_GOODS(已发货),T_TRADE_FINISHED(已完成),T_TRADE_CLOSED(已结束) */
    status: string;
    /** 交易ID */
    tid: number | bigint;
  }
}

/** 天猫魔盒 */
declare namespace Tmall.Mh {
  /** 天猫魔盒线下Mac地址回传 */
  interface MacAddress {
    /** 回传时间(出库扫描二维码时间) */
    backflow_time: string;
    /** 下单时间 */
    creat_time: string;
    /** 客户 */
    customer: string;
    /** 发货仓库 */
    delivery_store: string;
    /** 快递公司 */
    express: string;
    /** 商品名称 */
    item_name: string;
    /** Mac地址 */
    mac_address: string;
    /** 数量 */
    num: string;
    /** 单价 */
    price: string;
    /** 详细信息 */
    receiver_address: string;
    /** 城市 */
    receiver_city: string;
    /** 区县 */
    receiver_district: string;
    /** 收货人 */
    receiver_name: string;
    /** 省份 */
    receiver_state: string;
    /** 店铺名称 */
    seller_nick: string;
    /** 规格名称 */
    sku_name: string;
    /** 规格编码 */
    sku_num: string;
    /** 订单id */
    tid: number | bigint;
    /** 总价 */
    total: string;
    /** 单位 */
    unit: string;
  }

  /** 天猫魔盒扫码SN号回传 */
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
  /** 商户信息回流 */
  interface DealerToTmall {
    /** 商户编号 */
    f_code: string;
    /** 商户简称 */
    f_jc: string;
    /** 主营品牌 阿里品牌 */
    f_jypp: string;
    /** 商户名称 */
    f_name: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
  }

  /** 摊位合同数据回流 */
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
    f_hth_old: string;
    /** 租赁日期 止 */
    f_htyxq_end: Date;
    /** 租赁日期 起 */
    f_htyxq_start: Date;
    /** 摊位钉钉部门ID */
    f_stalldingdeptid: string;
    /** 原摊位钉钉部门ID */
    f_stalldingdeptid_old: string;
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
    f_zyppdm: string;
    /** 主营品牌名称 */
    f_zypp_name: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
    /** 跨摊位合同号 */
    related_contract_no: string;
  }

  /** 摊位信息数据回流 */
  interface StallInfoToTmall {
    /** 门店编号 */
    f_fddm: string;
    /** 摊位资产编码 */
    f_wldpdm: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
  }

  /** 门店信息回流 */
  interface StoreInfoToTmall {
    /** 门店地址 */
    f_dz: string;
    /** 门店编码 */
    f_fddm: string;
    /** 门店名称 */
    f_fdmc: string;
    /** 操作类型 删除-delete 新增-insert 更新-update */
    op_type: string;
  }
}
