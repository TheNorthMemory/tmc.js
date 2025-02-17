/** AliGenius */
declare namespace Taobao.Ag {
  /** {@link https://open.taobao.com/tmc.htm?docId=1248&docType=9 AG退款消息广播} */
  interface RefundBroad {
    /** 退款编号 */
    refund_id: number;
    /** 退款打标是否成功 */
    tag_success: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1271&docType=9 商家在AG的签收信息} */
  interface RefundSignInfo {
    /** 验货备注 */
    inspection_memo: string;
    /** 物流公司 */
    logistics_company_name: string;
    /** 运单号 */
    logistics_no: string;
    /** 签收对应的退款信息：包括 parent_order_id:主订单，refund_id:退款编号，item_out_id:商家编码，refund_possible_num:可能的退款数量，注意同一个包裹可能关联多个退款 */
    refund_info: string;
    /** 卖家ID */
    seller_id: number;
    /** 卖家名称 */
    seller_name: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 签收时间 */
    sign_date: Date | number | string;
    /** 用作消息业务ID */
    readonly sign_id: number;
    /** 签收操作人 */
    sign_operator_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1314&docType=9 AG仓库核验信息} */
  interface SignInfo {
    /** 是否能关联到退款，关联的到值为true则用refund_ext_info传递关联的退款信息，false则用item_info传递商家输入的无头包裹商品信息 */
    can_relevancy_refund: boolean;
    /** 核验时间 */
    check_date: Date | number | string;
    /** 备注核验信息 */
    check_memo?: string;
    /** 核验人 */
    check_operator_name: string;
    /** 包裹中商品信息：商品编码、商品数量和对应的订单号 */
    item_info?: string;
    /** 物流公司名字 */
    logistics_company_name: string;
    /** 物流运单号 */
    logistics_no: string;
    /** 包裹关联的退款信息：check_result核验结果：0不完全匹配，1完全匹配；orderInfo为关联的订单信息， */
    refund_ext_info?: string;
    /** 消息业务id，用作查询卖家昵称，买家昵称，寄件人信息的调用API入参。 */
    scan_id: number;
    /** 1：签收，2：拒签 */
    sign_action: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2086&docType=9 商家工单消息} */
  interface TicketsMsg {
    /** 通用工单id */
    case_id: string;
    /** 店铺名称 */
    seller_nick: string;
    /** 工单动作类型，0：创建，2：完结 */
    type: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Ais {
  /** {@link https://open.taobao.com/tmc.htm?docId=1398&docType=9 厂商协同统一消息} */
  interface CommonMessage {
    /** 行为 */
    action: string;
    /** 业务参数JSON，包含厂商具体操作指令，比如需求计划、生产指令等 */
    param_json?: string;
    /** 业务域 */
    service: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Alipic {
  /** {@link https://open.taobao.com/tmc.htm?docId=1639&docType=9 异业会员正向消息测试} */
  interface Wuyatestoutmsg {
    /** 111 */
    param0: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Alsc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2288&docType=9 本地生活到店交易逆向售后退款消息通知} */
  interface DaodianOrderAfterSaleRefund {
    /** 本地生活主单号 */
    alsc_order_no: string;
    /** 本地生活子单号 */
    alsc_sub_order_no: string;
    /** 混淆后的用户id */
    buyer_id: string;
    /** 内部消息id */
    msg_id: string;
    /** 退款金额-单位为分 */
    refund_amount: number;
    /** 退款原因 */
    refund_reason: string;
    /** 退款凭证id列表 */
    refund_ticket_ids: string;
    /** 逆向单id */
    reverse_order_id: string;
    /** 混淆后的商户id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2265&docType=9 本地生活到店交易，逆向单审核通过消息通知} */
  interface DaodianOrderAgreeRefund {
    /** 本地生活主单号 */
    alsc_order_no: string;
    /** 本地生活子单号 */
    alsc_sub_order_no: string;
    /** 混淆后的用户id */
    buyer_id: string;
    /** 内部消息id */
    msg_id: string;
    /** 逆向单id */
    reverse_order_id: string;
    /** 商户id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2264&docType=9 本地生活到店交易用户发起退款消息通知} */
  interface DaodianOrderApplyRefund {
    /** 本地生活主单号 */
    alsc_order_no: string;
    /** 本地生活子单号 */
    alsc_sub_order_no: string;
    /** 混淆后的用户id */
    buyer_id: string;
    /** 内部消息id */
    msg_id: string;
    /** 退款金额-单位为分 */
    refund_amount: number;
    /** 退款原因 */
    refund_reason: string;
    /** 退款凭证id列表 */
    refund_ticket_ids: string;
    /** 逆向单id */
    reverse_order_id: string;
    /** 商户id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2236&docType=9 本地生活到店订单发货成功消息通知} */
  interface DaodianOrderDeliver {
    /** 本地生活主单号 */
    alsc_order_no: string;
    /** 混淆后的用户id */
    buyer_id: string;
    /** 内部消息id */
    msg_id: string;
    /** 商户id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2266&docType=9 本地生活到店交易逆向单审核拒绝消息通知} */
  interface DaodianOrderRejectRefund {
    /** 本地生活主单号 */
    alsc_order_no: string;
    /** 本地生活子单号 */
    alsc_sub_order_no: string;
    /** 混淆后的用户id */
    buyer_id: string;
    /** 内部消息id */
    msg_id: string;
    /** 逆向单id */
    reverse_order_id: string;
    /** 商户id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2289&docType=9 本地生活到店凭证核销消息通知} */
  interface DaodianTicketUsed {
    /** 本地订单-主单号 */
    alsc_order_no: string;
    /** 本地订单-子单号 */
    alsc_sub_order_no: string;
    /** 混淆后的uid */
    buyer_id: string;
    /** 核销成功时间。格式：yyyy-MM-dd HH:mm:ss.SSS */
    gmt_biz_succ: string;
    /** 消息id */
    msg_id: string;
    /** 商户实收，单位：分。抽佣前的商户实收金额 */
    real_amount: string;
    /** 核销门店ID，长度32位 */
    shop_id: string;
    /** 券码code */
    ticket_code: string;
    /** 凭证ID */
    ticket_id: string;
    /** 凭证价值，单位：分。价值=商户实收+商户优惠。 */
    trans_amount: string;
    /** 核销流水id */
    trans_id: string;
    /** 团购：固定为1，即使1次核销多份，会发送多个消息，每个消息里固定为1；次卡：本次核销的次数 */
    trans_quantity: string;
  }
}

/** 平台消息 */
declare namespace Taobao.Aps {
  /** {@link https://open.taobao.com/tmc.htm?docId=872&docType=9 百川反馈-开发者/客服回复} */
  interface CommentAdd {
    /** 回复的内容 */
    content: string;
    /** 回复的时间，时区+0800 */
    created_at: Date | number | string;
    /** 在提交反馈时附带的扩展属性，可用于区分开发者自己设置的用户名，手机号等信息 */
    extra_info: string;
    /** 主键 */
    id: number;
    /** 会话ID。与用户7天内的对话都视为一次会话 */
    session_id: number;
    /** 百川服务端的用户id */
    user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=879&docType=9 收到舆情} */
  interface NewFeedback {
    /** 舆情抓取时间 */
    created_at: Date | number | string;
    /** 主键 */
    id: number;
    /** 社会舆情关键词ID */
    monitor_keyword_id?: number;
    /** 社会舆情监控专题ID */
    monitor_topic_id?: number;
    /** 微博作者或者新闻发布者 */
    nickname: string;
    /** 先知产品空间的主键 */
    product_id: number;
    /** 舆情发布时间 */
    pub_time: Date | number | string;
    /** 先知来源名 */
    source: string;
    /** 新闻标题或者微博摘要 */
    subject: string;
    /** 舆情的微博账号ID */
    user_id: number;
    /** 有效状态。0：无效，1：有效， 2:被过滤 */
    valid_status: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Auction {
  /** {@link https://open.taobao.com/tmc.htm?docId=2110&docType=9 大资产拍卖报名消息} */
  interface ApplyEvent {
    /** 用户竞买号 */
    alias: string;
    /** 消息唯一ID（结构为：auction_apply_标的id_用户竞买号） */
    biz_message_id: string;
    /** 标的id */
    item_id: number;
    /** 外部系统用户id */
    out_user_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2102&docType=9 大资产拍卖出价消息} */
  interface BidEvent {
    /** 本次出价用户的竞买号 */
    alias: string;
    /** 本次用户出价金额，单位分 */
    bid_price: number;
    /** 本次出价时间 */
    bid_time: Date | number | string;
    /** 出价连续的序号，表示这是当前标的的第几次出价 */
    bid_version_sequence?: number;
    /** 消息唯一ID（结构为：auction_bid_标的id_版本） */
    biz_message_id: string;
    /** 标的item_id */
    item_id: number;
    /** 当前系统时间 */
    now: Date | number | string;
    /** 外部用户id */
    out_user_id: string;
    /** 本次出价用户的优先顺位，不是优先人话返回-1 */
    priority_index: number;
    /** 版本号，记录标的的版本状态，每当有出价操作或者标的信息变更时版本号+1，用于判断标的状态是否有更新 */
    version: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2130&docType=9 拍卖全案评估价变更消息} */
  interface QuanAnEvaluatePrice {
    /** 案件号 */
    case_no: string;
    /** 评估价（单位：分） */
    evaluate_price: number;
    /** 资产需求唯一ID */
    id: string;
    /** 公安单位名称 */
    institution_name: string;
    /** 物品编号 */
    out_biz_id: string;
  }
}

/** 阿信消息通知前台类目 */
declare namespace Taobao.Axin {
  /** {@link https://open.taobao.com/tmc.htm?docId=1990&docType=9 支付宝代扣签约回调消息} */
  interface AlipayDkSignCallBack {
    /** 签约协议号 */
    agreement_no: string;
    /** 脱敏的支付宝账号 */
    alipay_login_id: string;
    /** 支付宝2088ID */
    alipay_user_id: string;
    /** 外部用户id */
    external_login_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2402&docType=9 新增行政区划结果通知} */
  interface DivisionApplyResult {
    /** 行政区划编号 */
    division_id: string;
    /** 行政区划外部编号（供应商侧编号） */
    division_outer_id: string;
    /** 新增结果 */
    result: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2129&docType=9 阿信酒店RP变更通知} */
  interface HotelChangeEvent {
    /** 对应房间价格列表,json数组 */
    room_price_list: string[];
    /** 标准酒店id */
    shid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1983&docType=9 阿信酒店分销订单状态变更通知} */
  interface HotelOrderStatus {
    /** 分销商id */
    distributor_id: string;
    /** 订单状态 */
    order_status: string;
    /** 订单状态描述 */
    order_status_desc: string;
    /** 外部订单号id */
    outer_order_id: string;
    /** 采购单id */
    pur_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2198&docType=9 阿信订单变更消息} */
  interface PackageOrderChange {
    /** 分销商ID */
    distributor_id: number;
    /** 订单变更类型 */
    order_status: string;
    /** 订单变更类型名称 */
    order_status_desc: string;
    /** 分销商订单号 */
    outer_order_id: string;
    /** 采购单ID */
    pur_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2197&docType=9 阿信酒套产品价库变更消息} */
  interface PackageProductChange {
    /** 产品变更时间 */
    modify_time: Date | number | string;
    /** 产品变更类型 */
    modify_type: string;
    /** 产品id */
    product_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2403&docType=9 新增POI结果通知} */
  interface PoiApplyResult {
    /** POI编号 */
    poi_id: string;
    /** POI外部编号（供应商侧编号） */
    poi_outer_id: string;
    /** 新增结果 */
    result: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1958&docType=9 阿信退款回调消息} */
  interface RefundCallBack {
    /** 外部订单号 */
    outer_order_id: string;
    /** 是否全部成功 */
    result: boolean;
  }
}

/** 百川 */
declare namespace Taobao.Baichuan {
  /** {@link https://open.taobao.com/tmc.htm?docId=1161&docType=9 设备APP激活} */
  interface ASODeviceActivate {
    /** 冲榜APP ID */
    app_id: string;
    /** 设备信息 */
    device_info: string;
    /** 激活失败信息 */
    error_info: string;
    /** 设备是否激活成功 */
    is_success: boolean;
    /** message ID */
    msg_id: string;
    /** 冲榜平台 */
    os: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1150&docType=9 百川媒体品牌号获取} */
  interface BrandInfoSend {
    /** 行为 1:开通 2：取消 3 ：账号信息修改 */
    action: number;
    /** 消息发生时间 */
    action_time: string;
    /** 描述 */
    desc: string;
    /** 品牌商logo */
    logo: string;
    /** 品牌号Id */
    taobao_uid: number;
    /** 标题 */
    title: string;
    /** 品牌商id */
    tm_brand_id: string;
    /** 跳转url */
    url: string;
    /** 微博Id */
    weibo_uid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1151&docType=9 媒体内容数据同步接口} */
  interface BrandSync {
    /** 内容 */
    content: string;
    /** 内容Id */
    content_id: number;
    /** 描述 */
    desc: string;
    /** 淘宝用户id */
    taobao_uid: number;
    /** 标题 */
    title: string;
    /** 微博用户id */
    weibo_uid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1183&docType=9 口令规则变化消息} */
  interface PasswordRuleChange {
    /** message id */
    message_id: string;
    /** 口令等级 */
    tao_password_level: string;
    /** 口令规则 */
    tao_password_rules: string[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1169&docType=9 淘口令规则发生变化} */
  interface TaoPasswordRule {
    /** messageId */
    message_id: string;
    /** 淘口令级别（0-规则口令，1-文本口令） */
    tao_password_level: string;
    /** 淘口令规则的正则表达式 */
    tao_password_rule: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Baoxian {
  /** {@link https://open.taobao.com/tmc.htm?docId=647&docType=9 淘宝保险出单数据消息} */
  interface AcceptInsurance {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=668&docType=9 保险理赔消息} */
  interface ClaimApply {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=651&docType=9 理赔结果给保险公司消息} */
  interface ClaimSuccess {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=650&docType=9 批单成功给保险公司消息} */
  interface EndorsementSuccess {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=678&docType=9 承保中心出单消息} */
  interface Issue {
    /** 购买份数(非必填) */
    apply_num?: number;
    /** 受益人(必填，列表) */
    benefit_users?: string;
    /** 账单号（非必填 */
    bill_no?: string;
    /** 保险订单号（必填） */
    bx_order_id?: string;
    /** 保险条款（责任），JSONArray格式（非必填） */
    clause?: string;
    /** 保额，单位分（必填） */
    coverage?: number;
    /** 保单失效时间(必填) */
    effect_end_time?: Date | number | string;
    /** 保单生效时间(必填) */
    effect_start_time?: Date | number | string;
    /** 拓展字段（可放其他信息，非必填） */
    extends_attribute?: string;
    /** 犹豫期到期时间，退保使用，犹豫期范围内可直接退保(非必填) */
    hesitate_date?: number;
    /** 投保人 */
    holder_user?: string;
    /** 标的物（被保物,非必填），JSONArray格式 */
    insured_object?: string;
    /** 投保时间（非必填） */
    insured_time?: Date | number | string;
    /** 被保人(必填，列表类型) */
    insured_users?: string;
    /** 出单时间（必填） */
    issue_time?: Date | number | string;
    /** 商品Id */
    item_id?: number;
    /** 外部商品Id，上层交易自定义商品Id */
    out_item_id?: string;
    /** 外部产品Id，保险公司定义的保险产品Id */
    out_product_id?: string;
    /** 保单号（必填） */
    policy_no?: string;
    /** 保单状态（非必填） */
    policy_status?: number;
    /** 保单标，64为二进制，类似于uic的tag（非必填） */
    policy_tag?: number;
    /** 保费，单位分(必填) */
    premium?: number;
    /** 投保单号（非必填） */
    proposal_no?: string;
    /** 保单变更原因(非必填) */
    status_change_reason?: string;
    /** 追溯期到期时间，理赔使用，追溯期内还可以申请理赔（法定,非必填） */
    traced_date?: number;
    /** 等待期，理赔等待期(非必填) */
    wait_date?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=648&docType=9 出单成功给保险公司消息} */
  interface IssueSuccess {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=649&docType=9 退保结果给保险公司消息} */
  interface SurrenderredResult {
  }
}

/** 淘宝 */
declare namespace Taobao.Bashlive {
  /** {@link https://open.taobao.com/tmc.htm?docId=1846&docType=9 本地生活直播氛围数据共享} */
  interface LiveEventChange {
    /** 互动类型 */
    action: string;
    /** 主播id */
    anchor_id: number;
    /** 互动次数 */
    count: number;
    /** 扩展参数 */
    extend: string;
    /** 直播间id */
    live_id: number;
    /** 唯一id */
    msg_id: string;
    /** 时间戳 */
    timestamp: number;
    /** 用户江湖昵称 */
    user_nick: string;
  }
}

/** 导购平台 */
declare namespace Taobao.Bmc {
  /** {@link https://open.taobao.com/tmc.htm?docId=806&docType=9 短信状态} */
  interface ShortMessageStatus {
    /** 延迟任务id */
    delay_task_id?: string;
    /** 运营商错误信息 */
    error?: string;
    /** 发送时传入的唯一id */
    external_id?: string;
    /** 唯一号 */
    id: string;
    /** 用户是否成功接收 */
    is_successful?: boolean;
    /** 手机号 */
    mobile: string;
    /** 短信发送接口返回的任务ID */
    task_id: number;
  }
}

/** 淘宝汽车票 */
declare namespace Taobao.Bus {
  /** {@link https://open.taobao.com/tmc.htm?docId=2282&docType=9 保险投保退保状态} */
  interface InsureStatus {
    /** 商家订单号 */
    agent_order_id: string;
    /** 保险订单号 */
    ins_tp_order_id: number;
    /** 飞猪订单号 */
    main_order_id: number;
    /** 保险变更时间，投保成功代表投保成功时间，投保失败代表投保失败时间 */
    performance_date: Date | number | string;
    /** 投保人 */
    policyholder: string;
    /** 保单号 */
    policy_no: string;
    /** 保费(单份:分) */
    price: number;
    /** 保险险种 */
    product_name: string;
    /** 保险状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1069&docType=9 自助机付款成功结果} */
  interface TVMTradePay {
    /** 代理商ID */
    agent_id: number;
    /** 支付宝流水号 */
    alipay_trade_no: string;
    /** 支付宝ID */
    alipay_user_id: string;
    /** 支付宝账号 */
    alipay_user_name: string;
    /** 飞猪订单号 */
    alitrip_order_id: string;
    /** 付款金额 分为单位 */
    pay_amount: number;
    /** 付款时间 */
    pay_time: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2187&docType=9 交易支付状态节点通知} */
  interface TVMTradePayStatusNotice {
    /** 商家订单号，若商家未下单，则为空 */
    agent_order_id?: string;
    /** 处理时间 */
    deal_time: string;
    /** 飞猪订单号 */
    fliggy_order_id: string;
    /** 二维码编号 */
    goods_id?: string;
    /** 订单金额，单位/元 */
    order_amount?: string;
    /** 票数 */
    ticket_count?: number;
    /** 交易支付类型，cancel_user_pay：用户取消支付 */
    trade_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1121&docType=9 支付成功回调消息} */
  interface TVMTradePaySuccess {
    /** 代理商ID */
    agent_id: number;
    /** 支付宝流水号 */
    alipay_trade_no: string;
    /** 支付宝数字ID */
    alipay_user_id: string;
    /** 支付宝账号 */
    alipay_user_name: string;
    /** 飞猪订单号 */
    alitrip_order_id: string;
    /** 支付金额（分） */
    pay_amount: number;
    /** 支付时间 */
    pay_time: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2188&docType=9 交易支付状态节点} */
  interface TradePayStatus {
    /** 商家订单号，若商家未下单，则为空 */
    agent_order_id?: string;
    /** 处理时间 */
    deal_time: string;
    /** 飞猪订单号 */
    fliggy_order_id: string;
    /** 二维码编号 */
    goods_id?: string;
    /** 订单金额，单位/元 */
    order_amount?: string;
    /** 票数 */
    ticket_count?: number;
    /** 交易支付类型，cancel_user_pay：用户取消支付 */
    trade_type: string;
  }
}

/** 天猫服务 */
declare namespace Taobao.Carlease {
  /** {@link https://open.taobao.com/tmc.htm?docId=1595&docType=9 天猫汽车直租免首付订单消息} */
  interface FreeDpOrderMsgSend {
    /** 事件类型：1：免首付订单金额计算完成触发；2：逆向退款触发；3：逆向退款完成 */
    event_type?: number;
    /** 子订单ID */
    oid: number | bigint;
    /** 主订单ID */
    tid: number | bigint;
  }
}

/** 淘宝 */
declare namespace Taobao.Cco {
  /** {@link https://open.taobao.com/tmc.htm?docId=1822&docType=9 CCO工单通知支付宝} */
  interface AlipayCase {
    /** 同步活动的编码，可以理解为消息类型，表示这是一个什么类型的消息 */
    activity_code: string;
    /** 工单ID */
    case_id: string;
    /** 此次同步的唯一标识，用于问题排查，无业务语义 */
    instance_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1804&docType=9 cco工单创建广交通知} */
  interface GjCase {
    /** 同步活动的编码，可以理解为消息类型，表示这是一个什么类型的消息 */
    activity_code: string;
    /** 创建的工单ID */
    case_id: string;
    /** 此次同步的唯一标识，用于问题排查，无业务语义 */
    instance_id?: string;
  }
}

/** 淘宝交易 */
declare namespace Taobao.Content {
  /** {@link https://open.taobao.com/tmc.htm?docId=2474&docType=9 智能混剪发布视频空间审核结果} */
  interface AuditAutocut {
    /** 视频id/内容id */
    content_id: number;
    /** 文件id */
    file_id: string;
    /** isvKey */
    isv_key: string;
    /** 预览id */
    pre_id: number;
    /** 商家openUid */
    seller_open_uid: string;
    /** PASS通过 REJECT拒绝 */
    status: string;
    /** 状态变更时间 */
    status_date: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2473&docType=9 视频工具发布视频空间审核结果} */
  interface AuditMvx {
    /** 视频id/内容id */
    content_id: number;
    /** 文件id */
    file_id: string;
    /** 商家openUid */
    seller_open_uid: string;
    /** PASS通过 REJECT拒绝 */
    status: string;
    /** 状态变更时间 */
    status_date: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2379&docType=9 短视频模板订单审核状态更新} */
  interface OrderAuditChange {
    /** 审核通过PASS; 审核不通过REJECT; 审核异常ERROR_* */
    audit_status: string;
    /** 交付渠道 */
    channel: string;
    /** 交付文件对应的视频空间id或内容id */
    content_id: string;
    /** 订单标识(临时订单号) */
    outer_trade_code: string;
    /** 外部产品ID */
    out_product_id: string;
    /** 服务市场的产品子订单号 */
    sub_order_id: string;
    /** 短视频模板ID */
    video_service_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2370&docType=9 内容开放短视频模板支付消息} */
  interface OrderPaid {
    /** 订单标识 */
    outer_trade_code?: string;
    /** 外部产品ID */
    out_product_id: string;
    /** 服务市场的产品子订单号 */
    sub_order_id: string;
    /** 商家openUid */
    user_open_uid: string;
    /** 短视频模板ID */
    video_service_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2401&docType=9 [淘宝订阅]变更通知} */
  interface TaoSubChanged {
    /** 实例类型code */
    app_type_code: string;
    /** 内容id */
    content_id: number;
    /** 说明信息 */
    description?: string;
    /** 状态修改时间戳 */
    modified: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 发布状态 waitPublish:发布中,publish:已发布,offline:已下架 */
    status_code?: string;
    /** 审核状态 machineFail:机审不通过 securityFail:安审不通过 */
    title?: number;
    /** 消息类型(status 发布状态变化, statusTag 审核状态变化) */
    type: string;
  }
}

/** 代发管理 */
declare namespace Taobao.Daifa {
  /** {@link https://open.taobao.com/tmc.htm?docId=2201&docType=9 关系绑定更改} */
  interface BindChange {
    /** 分销商id */
    distributor_id: number;
    /** 分销商名称 */
    distributor_name: string;
    /** 绑定关系状态（1-待处理 2-同意 3-拒绝 4-取消） */
    status: number;
    /** 供货商id */
    supplier_id: number;
    /** 供货商名称 */
    supplier_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2167&docType=9 代发管理_分销商侧订单状态变更消息} */
  interface DistributorOrderStatusChange {
    /** 主订单ID */
    biz_order_id: string;
    /** DISTRIBUTE-分配，CONSIGN-回传运单号，CANCEL-取消分单 */
    order_status: string;
    /** 代发单据id */
    scp_order_id?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 子订单ID，主子一体订单subBizOrderId=bizOrderId */
    sub_biz_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2168&docType=9 代发管理_供货商侧订单状态变更消息} */
  interface SupplierOrderStatusChange {
    /** 对应淘宝主订单ID */
    biz_order_id: string;
    /** DISTRIBUTE-分配，CONSIGN-回传运单号，CANCEL-取消分单 */
    order_status: string;
    /** 代发单据ID */
    scp_order_id: string;
    /** 对应淘宝子订单ID */
    sub_biz_order_id: string;
    /** 供货商ID */
    supplier_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2202&docType=9 代发用户入驻} */
  interface UserJoin {
    /** 用户id */
    id: number;
    /** 用户类型（0-分销商 1-供货商） */
    role: number;
    /** 淘宝用户id */
    user_id: number;
    /** 平台用户名称 */
    user_name: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Datapush {
  /** {@link https://open.taobao.com/tmc.htm?docId=829&docType=9 数据推送查询订单} */
  interface QueryBiz {
    /** 查询的appkey */
    appkey: string;
    /** 查询的订单号列表 */
    biz_id_list: string;
    /** 查看的类型(trade/refund) */
    biz_type: string;
    /** 用户Nick */
    nick: string;
    /** 查询的唯一密钥 */
    query_key: string;
    /** 用户ID */
    user_id: number;
  }
}

/** 淘宝点点 */
declare namespace Taobao.Dd {
  /** {@link https://open.taobao.com/tmc.htm?docId=667&docType=9 淘点点消息推送} */
  interface Push {
  }
}

/** 淘宝点点 */
declare namespace Taobao.Diandian {
  /** {@link https://open.taobao.com/tmc.htm?docId=602&docType=9 淘宝点点服务订单下单消息} */
  interface ServeOrder {
  }
}

/** 淘宝 */
declare namespace Taobao.Dispute {
  /** {@link https://open.taobao.com/tmc.htm?docId=2400&docType=9 同意换货} */
  interface ExchangeAgree {
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款ID */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2506&docType=9 买家关闭换货协议} */
  interface ExchangeClosed {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2514&docType=9 买家修改换货申请} */
  interface ExchangeModified {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2508&docType=9 卖家确认收货} */
  interface ExchangeSellerConfirmed {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2583&docType=9 换货-卖家寄出商品} */
  interface ExchangeSellerGoodsConsigned {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2510&docType=9 买家确认收货,换货成功} */
  interface ExchangeSuccess {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2509&docType=9 卖家换货转退款} */
  interface ExchangeTurnToRefund {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2451&docType=9 新退款创建} */
  interface RefundCreated {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2399&docType=9 价保退款成功} */
  interface RefundPriceProtect {
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款ID */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2398&docType=9 新退款成功消息} */
  interface RefundSuccess {
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款ID */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2532&docType=9 申请小二介入} */
  interface TaobaoInterApplied {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }
}

/** DPAAS */
declare namespace Taobao.Dpaas {
  /** {@link https://open.taobao.com/tmc.htm?docId=1237&docType=9 dpaas三方服务token} */
  interface AuthTokenCreate {
    /** 修改或生成时间 */
    modify_time: string;
    /** 商家id */
    seller_id: number;
    /** 状态值，1=有效，2=关闭 */
    status: number;
    /** token */
    token: string;
    /** token对应的类型，包括Customer Store Trade Product等 */
    token_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1241&docType=9 客流新增及会员到店消息} */
  interface CustomerFlow {
    /** 年龄 */
    age?: string;
    /** 会员id */
    customer_id?: string;
    /** 设备编码 */
    equipment_id: string;
    /** 人脸ID */
    face_id?: string;
    /** 到达时间 */
    get_time?: string;
    /** 图片id */
    image_id?: string;
    /** 图片url */
    image_url?: string;
    /** Y=会员，N=非会员 */
    is_vip?: string;
    /** 商家id */
    seller_id?: string;
    /** 性别，0=男，1=女，2=不确定 */
    sex?: string;
    /** 照片清晰度 */
    star?: string;
    /** 门店编码 */
    store_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1256&docType=9 客户上传图片} */
  interface CustomerUpload {
    /** 客户会员ID */
    customer_id: string;
    /** 门店设备ID */
    equipment_id: string;
    /** 图片路径 */
    img_path: string;
    /** 图片格式,jpg,png等 */
    pic_type?: string;
    /** 客户ID */
    seller_id: string;
    /** 门店ID */
    store_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1257&docType=9 会员人脸信息更新} */
  interface CustomerUploadAck {
    /** 客户会员ID */
    customer_id: string;
    /** 客户会员人脸ID */
    face_id: string;
    /** 客户ID */
    seller_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1261&docType=9 创建设备} */
  interface EquipmentCreate {
    /** 设备区域 */
    equipment_area: string;
    /** 设备ID */
    equipment_id: string;
    /** 设备类型 */
    equipment_type: string;
    /** 用户ID */
    seller_id: string;
    /** 店铺编码 */
    store_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1239&docType=9 会员标示消息推送} */
  interface FaceToCustomerAck {
    /** 会员id */
    customer_id: string;
    /** 人脸id */
    face_id?: string;
    /** 图片时间 */
    get_time?: string;
    /** 图片id */
    img_id: string;
    /** 图片路径 */
    img_path?: string;
    /** 商家账号id */
    seller_id: string;
  }
}

/** 阿里通信 */
declare namespace Taobao.Dv {
  /** {@link https://open.taobao.com/tmc.htm?docId=2419&docType=9 淘宝数字虚拟外放} */
  interface External {
    /** json形式，里面包括bizType和业务信息 */
    ext?: string;
    /** 外部订单号 */
    out_order_id: string;
    /** 0:进行中，1:成功，2:失败，9:不存在 */
    status: string;
  }
}

/** 电子发票 */
declare namespace Taobao.Einvoice {
  /** {@link https://open.taobao.com/tmc.htm?docId=863&docType=9 买家确认发送到报销系统} */
  interface BuyerConfirmSend {
    /** 被确认的token */
    token: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=816&docType=9 电子发票开票请求} */
  interface InvoiceRequestCreate {
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 电商平台代码 */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 开票流水号 */
    serial_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=817&docType=9 电子发票开票回流} */
  interface InvoiceResultReturn {
    /** 开票结果 */
    create_result: string;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 电商平台代码 */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 开票流水号 */
    serial_no: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Epp {
  /** {@link https://open.taobao.com/tmc.htm?docId=2500&docType=9 epp企业购对接isv订单状态同步} */
  interface OrderCreate {
    /** String	变化时间 */
    modified_time: string;
    /** 外部采购单号 */
    out_order_id: string;
    /** 订单ID */
    tb_order_id: string;
    /** 当前订单状态： 2=已支付 6=交易成功 8=关闭 */
    tb_order_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2528&docType=9 天猫企业购实物采购单状态变更消息} */
  interface PurchaseOrderStatusUpdate {
    /** 外部采购单号 */
    out_order_id: string;
    /** 状态描述（会随淘宝订单的状态变化而变化） -1：采购失败 10：采购中 11：采购成功 31：部分已发货 32：已全部发货 51：部分交易成功 52：全部交易成功 */
    status: string;
  }
}

/** 淘宝分销 */
declare namespace Taobao.Fenxiao {
  /** {@link https://open.taobao.com/tmc.htm?docId=640&docType=9 经销采购单审核通过} */
  interface DealerAgree {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=633&docType=9 经销采购单关闭} */
  interface DealerClose {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=637&docType=9 经销采购单采购成功} */
  interface DealerConfirm {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=632&docType=9 经销采购单创建} */
  interface DealerCreate {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=635&docType=9 经销采购单入库} */
  interface DealerInstock {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=634&docType=9 经销采购单修改} */
  interface DealerModify {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=638&docType=9 经销采购单付款} */
  interface DealerPay {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=639&docType=9 经销采购单拒绝通过} */
  interface DealerRefuse {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=636&docType=9 经销采购单已发货} */
  interface DealerShipped {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=142&docType=9 采购单关闭消息消息} */
  interface FxOrderClosed {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=140&docType=9 采购单创建消息} */
  interface FxOrderCreate {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1284&docType=9 分销属性变更} */
  interface FxOrderModifyConsign {
    /** 分销订单调整金额 */
    adjust_fee?: string;
    /** 支付宝账号 */
    alipay_no?: string;
    /** 分销商付款金额 */
    distributor_payment?: string;
    /** 分销商账号 */
    distributor_username: string;
    /** 分销订单ID */
    readonly fenxiao_id: string;
    /** 物流公司 */
    logistics_company_name?: string;
    /** 物流运单号 */
    logistics_id?: string;
    /** 物流邮费 */
    post_fee?: string;
    /** 物流方式 */
    shipping?: string;
    /** 分销子订单ID */
    sub_order_id?: string;
    /** 供应商账号 */
    supplier_username: string;
    /** 分销订单类型 */
    trade_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=141&docType=9 修改采购单价格消息} */
  interface FxOrderModifyPrice {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=143&docType=9 采购单付款消息} */
  interface FxOrderPaid {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=144&docType=9 采购单发货消息} */
  interface FxOrderShipped {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=145&docType=9 采购单确认收货消息} */
  interface FxOrderSuccess {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=973&docType=9 采购单结算完成} */
  interface FxOrderTransfered {
    /** 分销订单调整金额 */
    adjust_fee?: string;
    /** 支付宝账号 */
    alipay_no?: string;
    /** 分销商付款金额 */
    distributor_payment?: string;
    /** 分销商账号 */
    distributor_username: string;
    /** 分销订单ID */
    fenxiao_id: string;
    /** 物流公司 */
    logistics_company_name?: string;
    /** 物流运单号 */
    logistics_id?: string;
    /** 物流邮费 */
    post_fee?: string;
    /** 物流方式 */
    shipping?: string;
    /** 分销子订单ID */
    sub_order_id?: string;
    /** 供应商账号 */
    supplier_username: string;
    /** 分销订单类型 */
    trade_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=149&docType=9 供应商同意退款消息} */
  interface FxRefundAgree {
    /** 分销商账号 */
    distributor_username: string;
    /** 分销退款金额 */
    refund_fee?: string;
    /** 退款流程类型（4：发货前退款，1：发货后退款不退货，2：发货后退款退货,3：交易完成后退款维权） */
    refund_flow_type?: number;
    /** 分销子订单ID */
    readonly sub_order_id: number;
    /** 供应商账号 */
    supplier_username: string;
    /** 淘宝子订单ID */
    tc_order_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=733&docType=9 关闭采购单退款消息} */
  interface FxRefundClose {
    /** 分销商账号 */
    distributor_username: string;
    /** 分销退款金额 */
    refund_fee?: string;
    /** 退款流程类型（4：发货前退款，1：发货后退款不退货，2：发货后退款退货,3：交易完成后退款维权） */
    refund_flow_type?: number;
    /** 分销子订单ID */
    readonly sub_order_id: number;
    /** 供应商账号 */
    supplier_username: string;
    /** 淘宝子订单ID */
    tc_order_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=146&docType=9 创建采购单退款消息} */
  interface FxRefundCreate {
    /** 分销商账号 */
    distributor_username: string;
    /** 分销退款金额 */
    refund_fee?: string;
    /** 退款流程类型（4：发货前退款，1：发货后退款不退货，2：发货后退款退货,3：交易完成后退款维权） */
    refund_flow_type?: number;
    /** 分销子订单ID */
    readonly sub_order_id: number;
    /** 供应商账号 */
    supplier_username: string;
    /** 淘宝子订单ID */
    tc_order_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1088&docType=9 分销退款单修改} */
  interface FxRefundModify {
    /** 分销商账号 */
    distributor_username: string;
    /** 分销ID */
    fenxiao_id: number;
    /** 分销退款金额 */
    refund_fee: string;
    /** 退款流程类型（4：发货前退款，1：发货后退款不退货，2：发货后退款退货,3：交易完成后退款维权） */
    refund_flow_type: number;
    /** 分销子订单ID */
    sub_order_id: number;
    /** 供应商账号 */
    supplier_username: string;
    /** 淘宝子订单ID */
    tc_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=148&docType=9 供应商拒绝确认收货消息} */
  interface FxRefundRefuseGoods {
    /** 分销商账号 */
    distributor_username: string;
    /** 分销退款金额 */
    refund_fee?: string;
    /** 退款流程类型（4：发货前退款，1：发货后退款不退货，2：发货后退款退货,3：交易完成后退款维权） */
    refund_flow_type?: number;
    /** 分销子订单ID */
    readonly sub_order_id: number;
    /** 供应商账号 */
    supplier_username: string;
    /** 淘宝子订单ID */
    tc_order_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=150&docType=9 采购单退款成功消息} */
  interface FxRefundSuccess {
    /** 分销商账号 */
    distributor_username: string;
    /** 分销退款金额 */
    refund_fee?: string;
    /** 退款流程类型（4：发货前退款，1：发货后退款不退货，2：发货后退款退货,3：交易完成后退款维权） */
    refund_flow_type?: number;
    /** 分销子订单ID */
    readonly sub_order_id: number;
    /** 供应商账号 */
    supplier_username: string;
    /** 淘宝子订单ID */
    tc_order_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=151&docType=9 下游订单创建退款消息} */
  interface FxTradeRefundCreate {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=152&docType=9 下游订单退款完成消息} */
  interface FxTradeRefundSuccess {
  }
}

/** 淘宝 */
declare namespace Taobao.Film {
  /** {@link https://open.taobao.com/tmc.htm?docId=982&docType=9 淘宝电影tforder消息推送（外部）} */
  interface ExternalOrderPush {
    /** 支付宝ID */
    account_no?: string;
    /** 活动标记 */
    activity_flag?: string;
    /** 支付宝订单号 */
    alipay_order_id?: string;
    /** 用户付款价格 */
    amount?: string;
    /** 业务订单ID */
    biz_order_id?: string;
    /** 业务类型 */
    biz_type?: string;
    /** 影院地址 */
    cinema_address?: string;
    /** 影院ID */
    cinema_id?: string;
    /** 电影院名称 */
    cinema_name?: string;
    /** 外部订单ID */
    ext_order_id?: string;
    /** 预留字段(json) */
    features?: string;
    /** 影院大厅 */
    hall?: string;
    /** 出票时间 */
    issue_date?: Date | number | string;
    /** 淘宝昵称 */
    nick_name?: string;
    /** 影院所在市id */
    object_city_id?: string;
    /** 电影结束时间 */
    object_endtime?: Date | number | string;
    /** 影院纬度 */
    object_latitude?: string;
    /** 影院经度 */
    object_longitude?: string;
    /** 电影开始时间 */
    object_starttime?: Date | number | string;
    /** 订单标记 */
    order_flag?: string;
    /** 电影票原价 */
    ori_price?: string;
    /** 系统商代码 */
    partner_code?: string;
    /** 付款日期 */
    pay_date?: Date | number | string;
    /** 退票时间 */
    refund_date?: Date | number | string;
    /** 座位个数 */
    seat_count?: string;
    /** 座位号码 */
    seat_info?: string;
    /** 电影结束时间 */
    show_end_time?: Date | number | string;
    /** 影片ID */
    show_id?: string;
    /** 电影名字 */
    show_name?: string;
    /** 电影放映时间 */
    show_time?: Date | number | string;
    /** 淘宝订单 */
    tb_order_id?: string;
    /** 取票码 */
    ticket_content?: string;
    /** 支付宝id（如果没有淘宝id也可以） */
    user_id?: string;
    /** 用户手机号 */
    user_phone?: string;
    /** 影片版本 */
    version?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=883&docType=9 淘宝电影tforder消息推送} */
  interface OrderPush {
    /** 支付宝ID */
    account_no?: string;
    /** 活动标记 */
    activity_flag?: string;
    /** 支付宝订单号 */
    alipay_order_id?: string;
    /** 用户付款价格 */
    amount?: string;
    /** 业务订单ID */
    biz_order_id?: string;
    /** 业务类型 */
    biz_type?: string;
    /** 影院地址 */
    cinema_address?: string;
    /** 影院ID */
    cinema_id?: string;
    /** 电影院名称 */
    cinema_name?: string;
    /** 彩蛋数量 */
    easter_eggs_count?: number;
    /** 彩蛋信息 */
    easter_eggs_info?: string;
    /** 外部订单ID */
    ext_order_id?: string;
    /** 影院大厅 */
    hall?: string;
    /** 出票时间 */
    issue_date?: Date | number | string;
    /** 淘宝昵称 */
    nick_name?: string;
    /** 影院所在市id */
    object_city_id?: string;
    /** 电影结束时间 */
    object_endtime?: Date | number | string;
    /** 影院纬度 */
    object_latitude?: string;
    /** 影院经度 */
    object_longitude?: string;
    /** 电影开始时间 */
    object_starttime?: Date | number | string;
    /** 订单标记 */
    order_flag?: string;
    /** 电影票原价 */
    ori_price?: string;
    /** 系统商代码 */
    partner_code?: string;
    /** 付款日期 */
    pay_date?: Date | number | string;
    /** 取票二维码字段 */
    qrcode?: string;
    /** 退票时间 */
    refund_date?: Date | number | string;
    /** 座位个数 */
    seat_count?: string;
    /** 座位号码 */
    seat_info?: string;
    /** 电影结束时间 */
    show_end_time?: Date | number | string;
    /** 影片ID */
    show_id?: string;
    /** 电影名字 */
    show_name?: string;
    /** 影片海报。具体示例如下： 第一部分：https://gw.alicdn.com/tfscom/ cdn域名拼接 第二部分："poster"字段: "i1/TB1iRSWSXXXXXcVXFXXXXXXXXXX_.jpg" 第三部分：控制图片大小_80x80.jpg 完整示例 https://gw.alicdn.com/tfscom/i1/TB1iRSWSXXXXXcVXFXXXXXXXXXX_.jpg_80x80.jpg。该链接严禁外传及其他用途 */
    show_photo?: string;
    /** 电影放映时间 */
    show_time?: Date | number | string;
    /** 淘宝订单 */
    tb_order_id?: string;
    /** 取票信息根据不同的影院会有不同的文案，所以文案的字符和格式没有固定的，多条文案以中划线分隔，外部渠道根据分隔后的字符串在app页面上逐条展示即可，文案的顺序由淘票票提供。以下是两种取票信息的示例， 1.订单号:8652026|验证码:84811 2.取票码:865202 */
    ticket_content?: string;
    /** 淘宝账号id */
    user_id?: string;
    /** 用户手机号 */
    user_phone?: string;
    /** 影片版本 */
    version?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1203&docType=9 淘宝电影退票消息推送} */
  interface RefundTicketPush {
    /** 业务类型 */
    biz_type?: string;
    /** 描述 */
    description?: string;
    /** 退票截止时间 */
    limit_date?: Date | number | string;
    /** 退票短信 */
    message?: string;
    /** 操作退款的人 */
    operator?: string;
    /** 平台渠道 */
    platform?: number;
    /** 退票原因 */
    reason?: string;
    /** 创建退款记录的时间 */
    refund_create_time?: Date | number | string;
    /** 发起退票的时间 */
    refund_date?: Date | number | string;
    /** 退款失败的时间（预留） */
    refund_fail_time?: Date | number | string;
    /** 退款手续费 */
    refund_fee?: string;
    /** 退票订单的状态 */
    refund_order_status?: string;
    /** 退票类型,1表示商户，2表示运维，3表示用户 */
    refund_order_type?: string;
    /** 退款成功的时间 */
    refund_success_time?: Date | number | string;
    /** 座位订单号 */
    seat_order_id: number;
    /** 用户id */
    user_id?: number;
  }
}

/** 酒店签约中心消息 */
declare namespace Taobao.Fliggy {
  /** {@link https://open.taobao.com/tmc.htm?docId=1596&docType=9 飞猪通用合同签约消息} */
  interface CommonContractSign {
    /** 合同模板ID */
    contract_id: number;
    /** 合同模板类型 */
    contract_type: number;
    /** 实体ID（酒店id/合作商Id/卖家Id） */
    entity_id: number;
    /** 实体类型（1:单体酒店 2:合作商 3:天猫卖家 4:航旅卖家 5: 全场景酒店 */
    entity_type: number;
    /** 签约状态 0: 合同未推送；1：合同已推送，未签约；2：合同签约完成 */
    sign_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1708&docType=9 Hsp转发卖家库聚合shid维度库价变更消息} */
  interface HspHicItemChange {
    /** shid对应标准酒店所在城市id */
    city: number;
    /** 库价变更时间 */
    gmt_modified?: Date | number | string;
    /** 优先级 */
    priority?: number;
    /** 发生库价变更的标准酒店shid */
    shid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1700&docType=9 HSP酒店商品库价变更消息} */
  interface HspHotelIcItemChange {
    /** 标准酒店所在城市id */
    city: number;
    /** 变更时间 */
    gmt_modified: Date | number | string;
    /** 优先级 */
    priority?: number;
    /** 标准酒店shid */
    shid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1471&docType=9 商家项目mci} */
  interface MciIndex {
    /** 业务唯一id */
    biz_id: string;
    /** 消息体 */
    msg_body: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1597&docType=9 飞猪签约状态消息} */
  interface SignStatus {
    /** 实体ID（酒店id/合作商Id/卖家Id） */
    entity_id: number;
    /** 实体类型（1:单体酒店 2:合作商 3:天猫卖家 4:航旅卖家 5: 全场景酒店 */
    entity_type: number;
    /** 操作Id(0:邀约 1:同意合同 2:上传资质 3:审核通过 4:修改账号 5:重置 6:释放 7:失效) */
    operate_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1604&docType=9 标准酒店实体变更消息} */
  interface StdHotelModify {
    /** 变更类型，1--新增，2--修改，3--失效或下线 */
    action_type: number;
    /** 用于下一步查询数据的参数，值为可以反序列化为查询接口param对象的JSON串 */
    query_param: string;
    /** 标准酒店shid */
    shid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1605&docType=9 标准房型领域模型实体变更消息} */
  interface StdRoomTypeModify {
    /** 变更类型，1--新增，2--修改，3--下线或失效 */
    action_type: number;
    /** 用于下一步查询数据的参数，值为可以反序列化为查询接口param对象的JSON串 */
    query_param: string;
    /** 标准房型所属shid */
    shid: number;
    /** srid */
    srid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1521&docType=9 消息推送} */
  interface Sycm {
    /** 业务消息id */
    biz_id: string;
    /** hid就是酒店下面的运营商id， shid是酒店门店的id */
    msg_body: string;
  }
}

/** 阿信消息通知前台类目 */
declare namespace Taobao.Fsc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2420&docType=9 线路订单状态变更通知} */
  interface RouteOrderStatusChange {
    /** 阿信订单id */
    order_id: string;
    /** 1-已下单 2-已确认 3-已退团 4-已取消 5-拒绝确认，驳回 14-交易成功 */
    order_status: string;
    /** 外部团id	String */
    out_project_id: string;
    /** 付款状态1-未付款 2-已付定金3-已付款（代表全部付款完成） 4-已结算完成 5-已关闭 */
    pay_status: string;
    /** 供应商id */
    supplier_id: string;
    /** 供应商订单号id */
    supplier_order_id: string;
  }
}

/** 服务市场 */
declare namespace Taobao.Fuwu {
  /** {@link https://open.taobao.com/tmc.htm?docId=1910&docType=9 收货地址发生变更} */
  interface AddressChanged {
    /** 新机单的单号 */
    new_order_id: string;
    /** 回收单的单号 */
    recycle_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2384&docType=9 以旧换新资金变更通知消息} */
  interface FundsChange {
    /** 资金类型 */
    funds_type?: string;
    /** 新机单ID */
    new_order_id?: string;
    /** 回收单ID */
    old_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=790&docType=9 订单关闭消息} */
  interface OrderClosed {
    /** 活动代码，从合作伙伴后台（i.fuwu.taobao.com）-收费管理-营销活动列表 能够获得该活动的代码 */
    activity_code?: string;
    /** 应用收费代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得该应用的收费代码 */
    article_code: string;
    /** 应用名称 */
    article_name: string;
    /** 订单号 */
    biz_order_id: number;
    /** 订单类型，1=新订 2=续订 3=升级 4=后台赠送 5=后台自动续订 6=订单审核后生成订购关系（暂时用不到） */
    biz_type: number;
    /** 订单创建时间 */
    create: Date | number | string;
    /** 原价（单位为分） */
    fee: string;
    /** 收费项目代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得收费项目代码 */
    item_code: string;
    /** 收费项目名称 */
    item_name: string;
    /** 用户昵称 */
    nick: string;
    /** 订购周期 1表示年 ，2表示月，3表示天。 */
    order_cycle: string;
    /** 订购周期结束时间 */
    order_cycle_end: Date | number | string;
    /** 订购周期开始时间 */
    order_cycle_start: Date | number | string;
    /** 子订单号 */
    readonly order_id: number;
    /** 订单状态, 1=订单合法，2=订单非法,3=订单完成，4=订单确认 */
    order_status: number;
    /** 外部交易号 */
    outer_trade_code?: string;
    /** 付款状态：0-未付款，1-已付款 */
    pay_status?: number;
    /** 优惠（单位为分） */
    prom_fee: string;
    /** 退款（单位为分；升级时，系统会将升级前老版本按照剩余订购天数退还剩余金额） */
    refund_fee: string;
    /** 实付（单位为分） */
    total_pay_fee: string;
    /** 收费项目的版本序号 */
    version_no?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=789&docType=9 订单创建消息} */
  interface OrderCreated {
    /** 活动代码，从合作伙伴后台（i.fuwu.taobao.com）-收费管理-营销活动列表 能够获得该活动的代码 */
    activity_code?: string;
    /** 应用收费代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得该应用的收费代码 */
    article_code: string;
    /** 应用名称 */
    article_name: string;
    /** 订单号 */
    biz_order_id: number;
    /** 订单类型，1=新订 2=续订 3=升级 4=后台赠送 5=后台自动续订 6=订单审核后生成订购关系（暂时用不到） */
    biz_type: number;
    /** 订单创建时间 */
    create: Date | number | string;
    /** 原价（单位为分） */
    fee: string;
    /** 收费项目代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得收费项目代码 */
    item_code: string;
    /** 收费项目名称 */
    item_name: string;
    /** 用户昵称 */
    nick: string;
    /** 订购周期 1表示年 ，2表示月，3表示天。 */
    order_cycle: string;
    /** 订购周期结束时间 */
    order_cycle_end: Date | number | string;
    /** 订购周期开始时间 */
    order_cycle_start: Date | number | string;
    /** 子订单号 */
    readonly order_id: number;
    /** 订单状态, 1=订单合法，2=订单非法,3=订单完成，4=订单确认 */
    order_status: number;
    /** 外部交易号 */
    outer_trade_code?: string;
    /** 付款状态：0-未付款，1-已付款 */
    pay_status?: number;
    /** 优惠（单位为分） */
    prom_fee: string;
    /** 退款（单位为分；升级时，系统会将升级前老版本按照剩余订购天数退还剩余金额） */
    refund_fee: string;
    /** 实付（单位为分） */
    total_pay_fee: string;
    /** 收费项目的版本序号 */
    version_no?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=716&docType=9 订单支付消息} */
  interface OrderPaid {
    /** 活动代码，从合作伙伴后台（i.fuwu.taobao.com）-收费管理-营销活动列表 能够获得该活动的代码 */
    activity_code?: string;
    /** 应用收费代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得该应用的收费代码 */
    article_code: string;
    /** 应用名称 */
    article_name: string;
    /** 订单号 */
    biz_order_id: number;
    /** 订单类型，1=新订 2=续订 3=升级 4=后台赠送 5=后台自动续订 6=订单审核后生成订购关系（暂时用不到） */
    biz_type: number;
    /** 订单创建时间（订购时间） */
    create: Date | number | string;
    /** 原价（单位为分） */
    fee: string;
    /** 收费项目代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得收费项目代码 */
    item_code: string;
    /** 收费项目名称 */
    item_name: string;
    /** 用户昵称 */
    nick: string;
    /** 订购周期 1表示年 ，2表示月，3表示天。 */
    order_cycle: string;
    /** 订购周期结束时间 */
    order_cycle_end: Date | number | string;
    /** 订购周期开始时间 */
    order_cycle_start: Date | number | string;
    /** 子订单号 */
    readonly order_id: number;
    /** 订单状态, 1=订单合法，2=订单非法,3=订单完成，4=订单确认 */
    order_status: number;
    /** 外部交易号 */
    outer_trade_code?: string;
    /** 付款状态：0-未付款，1-已付款 */
    pay_status?: number;
    /** 优惠（单位为分） */
    prom_fee: string;
    /** 退款（单位为分；升级时，系统会将升级前老版本按照剩余订购天数退还剩余金额） */
    refund_fee: string;
    /** 实付（单位为分） */
    total_pay_fee: string;
    /** 收费项目的版本序号 */
    version_no?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2455&docType=9 以旧换新取送一体服务最终决策通知} */
  interface RecycleFinalService {
    /** 是否取送一体，1表示取送一体，0表示非取送一体 */
    old_and_new_together: string;
    /** 回收单ID */
    recycle_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1861&docType=9 上门换新回收信息} */
  interface RecycleOut {
    /** 物流平台名称 */
    logistics_comp_name: string;
    /** 物流单 */
    logistics_order_id: string;
    /** 新机单 */
    new_order_id: string;
    /** 回收单 */
    recycle_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=701&docType=9 服务开通消息} */
  interface ServiceOpen {
    /** 应用收费代码，从服务商后台（i.fuwu.taobao.com）-收费管理-收费项目列表 能够获得该应用的收费代码 */
    article_code: string;
    /** 应用名称 */
    article_name: string;
    /** 是否自动续费 */
    autosub: boolean;
    /** 状态，1=有效 2=过期 */
    effect_status: number;
    /** 订购关系到期时间 */
    end_date: Date | number | string;
    /** 是否到期提醒 */
    expire_notice: boolean;
    /** 收费项目代码，从服务商后台（i.fuwu.taobao.com）-收费管理-收费项目列表 能够获得收费项目代码 */
    item_code: string;
    /** 收费项目名称 */
    item_name?: string;
    /** 由user_id加密, 可对外开放, 用来替换user_nick作为唯一标识 */
    open_uid?: string;
    /** 订购记录id */
    readonly sub_id: number;
    /** 淘宝会员名 */
    user_nick?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1332&docType=9 订购消息} */
  interface SubCreated {
    /** 代理商 */
    agent_id?: string;
    /** 商品code */
    article_code: string;
    /** 规格code */
    article_item_code: string;
    /** 业务类型 */
    biz_type: number;
    /** 结束时间 */
    end_date: Date | number | string;
    /** 实际支付金额 */
    fact_money: number;
    /** 标志位 */
    flag: number;
    /** 是否前台显示 */
    front_display?: number;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 订购id */
    id: number | bigint;
    /** 用户昵称 */
    nick: string;
    /** 原订购升级因子 */
    old_trans_index?: number;
    /** 订单ID */
    order_id: number;
    /** 来源类型。1 订购 2 赠送 3 后台赠送 */
    origin_type?: number;
    /** 原始结束时间 */
    orig_end_date: Date | number | string;
    /** 原始开始时间 */
    orig_start_date: Date | number | string;
    /** 外部交易号 */
    outer_trade_code?: string;
    /** 套餐ID */
    plan_id?: string;
    /** 父订单ID */
    porder_id: number;
    /** 实际支付产品金额 */
    prod_fee?: number;
    /** 产品ID */
    prod_id?: number;
    /** 记账日 */
    rate_day?: number;
    /** 服务实例Id */
    service_intance_id?: number;
    /** 服务code */
    serv_code: string;
    /** 服务ID */
    serv_id: number;
    /** 开始时间 */
    start_date: Date | number | string;
    /** 订购状态。1=等待开通，2=开通，3=关闭，4=等待审核 */
    status: number;
    /** 订购参数。json格式 */
    sub_params: string;
    /** 升级因子 */
    trans_index?: number;
    /** 订阅0 订购 1 */
    type?: number;
    /** 用户ID */
    user_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=641&docType=9 威客同步建模数据} */
  interface WitkeySyncModeling {
  }
}

/** 全球购跨境物流 */
declare namespace Taobao.Globalbuys {
  /** {@link https://open.taobao.com/tmc.htm?docId=995&docType=9 跨境服务平台推送物流订单消息} */
  interface SeamailOrderNotify {
    /** 【废弃】该字段 */
    biz_order_id?: number;
    /** 备注（加固等） */
    extra?: string;
    /** 【废弃】该字段 */
    items?: string[];
    /** 门到仓物流单号 */
    lc_trace_no: string;
    /** 淘宝主订单ID */
    main_order_id: number;
    /** 子订单ID */
    order_list: string[];
    /** 包裹ID */
    package_id: number;
    /** 商家识别码 */
    seller_code: string;
    /** 商家联系方式 */
    seller_info: string;
    /** 收货地址 */
    target_address: string;
    /** 指定发送仓库地址 */
    warehouse: string;
  }
}

/** HOMEAI消息对接 */
declare namespace Taobao.Homeai {
  /** {@link https://open.taobao.com/tmc.htm?docId=1465&docType=9 方案消息同步callback} */
  interface CaseSyncResult {
    /** callback result */
    case_sync_result: string;
    /** jobid */
    job_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1525&docType=9 居然极速渲染结果} */
  interface HomestylerRenderResult {
    /** 渲染结果的url */
    result_url: string;
    /** 渲染执行结果，0为成功，小于0的值为失败 */
    ret_code: number;
    /** 渲染返回消息，success为成功，其它为失败原因 */
    ret_msg: string;
    /** 居然调用taobao.homeai.homestyler.render.request API时发送的任务id */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1449&docType=9 居然之家接受迁移结果} */
  interface LayoutTransferResult {
    /** jobid */
    job_id: string;
    /** 结果 */
    out_param: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1458&docType=9 推送模型与商品关系} */
  interface ModelSkuRelation {
    /** 淘宝的商品ID */
    item_id: string;
    /** 居然模型ID */
    jid: string;
    /** 阿里模型ID */
    readonly model_id: string;
    /** 描述绑定或者解绑操作。绑定对应BIND,解绑对应UNBIND */
    operation: string;
    /** 经销商ID */
    seller_id: string;
    /** SKU_ID */
    sku_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1511&docType=9 HS渲染消息} */
  interface RenderRequest {
    /** homeai_fsadfakjlf-f1234j */
    job_id: string;
    /** { "camera" : { "pos" : [ 1.234 ,43.9 ,13.42], "target" : [3,241.4,432], "fov" : 120.0 "near" : 14.2 "far" : 1234.9 "aspect" : 923 }, "sceneUrl" : "https://jr-prod-cms-assets.oss-cn-beijing.aliyuncs.com/Asset/8e87c376-55db-4080-a8e1-e296b9d959ea/v1541572378/scene.json", } */
    render_data: string;
  }
}

/** 酒店签约中心消息 */
declare namespace Taobao.Hotel {
  /** {@link https://open.taobao.com/tmc.htm?docId=1368&docType=9 酒店管控中心消息通知} */
  interface ControlMsg {
    /** 管控动作 */
    action_desc: string;
    /** 1 告警 7下架信用住 */
    action_type: number;
    /** 管控结束时间 */
    end_time?: Date | number | string;
    /** 实体id */
    entity_id: string;
    /** 1卖家酒店 2卖家 3房型 4RP 5rate 6标准酒店 */
    entity_type: number;
    /** 酒店名称 */
    hotel_name?: string;
    /** 管控原因 */
    reason?: string;
    /** 管控场景 */
    scene_desc: string;
    /** 卖家id */
    seller_id: string;
    /** 卖家昵称 */
    seller_nick?: string;
    /** 管控开始时间 */
    start_time?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1363&docType=9 信用住转预付酒店签约状态消息} */
  interface CreditToPreHotelStatus {
    /** 合同模板ID */
    contract_type: number;
    /** 补充字段 */
    extend?: string;
    /** 卖家酒店id */
    hid: number;
    /** 签约状态 0: 合同未推送；1：合同已推送，未签约；2：合同签约完成 */
    sign_status: number;
    /** 签约类型 1: 新签合同； 2：续签合同 */
    sign_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1702&docType=9 分销渠道订单变动通知} */
  interface DistributionOrderChange {
    /** 分销渠道外部订单号 */
    dis_oid: string;
    /** 订单状态 */
    status?: string;
    /** 飞猪酒店订单号 */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1815&docType=9 通用消息提醒} */
  interface EbkCommonMessage {
    /** 1：发送，0：撤销 */
    action: number;
    /** 消息key */
    msg_key: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1147&docType=9 订单变动通知} */
  interface OrderChange {
    /** 支付宝流水号 */
    alipay_trade_no?: string;
    /** 买家id */
    buyer_id: number;
    /** 入住时间 */
    check_in?: Date | number | string;
    /** 离店时间 */
    check_out?: Date | number | string;
    /** 联系人 */
    contact_name?: string;
    /** 联系人手机号 */
    contact_phone?: string;
    /** gid */
    gid?: number;
    /** hid */
    hid?: number;
    /** 消息类型： NM_ORDER_ENABLE订单可见；NM_ORDER_ORDER_CREATE_2_SUCC订单创建成功； NM_ORDER_760_CLOSE订单取消成功；NM_ORDER_760_CONFIRM 订单确认； NM_ORDER_760_SETTLE结账请求成功；NM_ORDER_760_SETTLE_CANCE取消结账成功；NM_ORDER_760_SETTLE_SUCC结账扣款成功（结账）；NM_ORDER_760_LOANING_SUC结账扣款成功（垫付）；NM_ORDER_710_PAID预付订单支付成功；NM_ORDER_710_PAID_REFUND_CREATE预付订单开始退款；NM_ORDER_710_PAID_REFUND_SUCCESS预付订单退款成功；NM_POST_TRADE_REFUND_SUC售后申请退款成功； hbs_notify_add_invoice补开发票消息； */
    message_type: string;
    /** oid */
    oid: number | bigint;
    /** 外部订单号 */
    out_order_id?: string;
    /** 支付金额 */
    payment?: number;
    /** 支付类型：1预付 5现付 6信用住 7在线预约 */
    payment_type?: number;
    /** rateId */
    rate_id?: number;
    /** rid */
    rid?: number;
    /** 房间数量 */
    room_number?: string;
    /** rpId */
    rp_id?: number;
    /** 卖家id */
    seller_id: number;
    /** 卖家昵称 */
    seller_nick: string;
    /** 标准酒店id */
    shid?: number;
    /** 订单状态：预付交易状态:1:等待买家付款 2:等待卖家发货 4:交易关闭 6:交易成功 7:没有创建支付宝交易 8:交易被淘宝关闭\n面付交易状态:1:已下单,2:确认有房,3:确认前用户取消,4:确认无房,5:买家入住,6:系统自动核实入住成功,7:确认后用户取消，8:卖家核实未入住NoShow\n信用住交易状态:1:已下单,2:确认有房,3:确认前用户取消,4:确认无房,5:买家入住,6:系统自动核实入住成功,7:确认后用户取消，8:卖家核实未入住NoShow,\n9:买家离店,10:结账中,11:结账成功,12:结账失败追账中,13:追账成功,14:NOSHOW结账中,15:NOSHOW结账成功，16:NOSHOW结账失败，17:NOSHOW追账成功,\n18:结账取消,19:系统自动核实未入住成功,20:结账失败追账失败,21:结账失败追账成功\n在线预约交易状态:1:已下单,2:确认有房,3:用户取消,4:确认无房,5:买家入住,6:买家离店,7:确认后取消中 */
    status?: string;
    /** tid */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1321&docType=9 酒店搜索触发商品更新消息} */
  interface SearchMonitor {
    /** 酒店列表信息 */
    out_hotels: string;
    /** 标准酒店id */
    shid: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1488&docType=9 热搜酒店消息} */
  interface SearchTrigger {
    /** 入住日期 */
    check_in: string;
    /** 离店日期 */
    check_out: string;
    /** 酒店外部编码 */
    hotel_code: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 供应商名称 */
    supplier: string;
    /** 随机ID */
    uuid: number;
    /** 系统商名称 */
    vendor: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1527&docType=9 飞猪单体酒店签约重置} */
  interface SignRollback {
    /** 卖家酒店Id */
    hid: number;
    /** 重置类型 （目前只有0，为兼容拓展所留） */
    rollback_type: number;
    /** 重置状态 0：重置中;1：签约完成 */
    status: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Idlefish {
  /** {@link https://open.taobao.com/tmc.htm?docId=1506&docType=9 合约关闭通知} */
  interface RentContractClose {
    /** 合约id */
    contract_id: string;
    /** 房源id */
    house_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1607&docType=9 打款给房东消息} */
  interface SellerPaid {
    /** 打款金额，单位分 */
    amount: number;
    /** 合约id */
    contract_id: string;
    /** 是否打款成功，true表示成功 */
    paid_success: boolean;
    /** 打款时间 */
    time: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Ifashion {
  /** {@link https://open.taobao.com/tmc.htm?docId=1655&docType=9 库存变更} */
  interface ItemAmountChanged {
    /** 变更库存 */
    amount: number;
    /** 当前库存数量，变更后的库存 */
    current_amount: number;
    /** 商品编码 */
    item_id: number;
    /** 不保证全局唯一，各type下独立唯一 */
    order_id: number;
    /** sku编码 */
    sku_id: number | bigint;
    /** 门店id */
    store_id: number;
    /** 库存变化类型 qt-stock-in：入库 qt-sale：销售 qt-stock-back：采购退货 qt-sale-back: 销售退货 erp-stock-in：入库 erp-sale：销售 erp-stock-back：采购退货 erp-sale-back: 销售退货 erp-sync: erp同步库存 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1650&docType=9 商品基础信息创建} */
  interface ItemInfoCreate {
    /** 商品id */
    item_id: number;
    /** skuId */
    sku_id: number | bigint;
    /** 门店id */
    store_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1656&docType=9 创建单据} */
  interface OrderCreate {
    /** 订单id */
    order_id: number;
    /** 门店id */
    store_id: number;
    /** 订单类型 */
    type: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Ihome {
  /** {@link https://open.taobao.com/tmc.htm?docId=2444&docType=9 aigc任务状态变更} */
  interface AigcTaskChange {
    /** 对应bizType */
    biz_type: string;
    /** 失败原因 */
    reason?: string;
    /** 分片id */
    shard_id: number;
    /** 任务状态 */
    status: string;
    /** 任务id */
    task_id: number;
    /** 用户平台 */
    user_platform: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Inventory {
  /** {@link https://open.taobao.com/tmc.htm?docId=813&docType=9 天猫国际共享库存订单push} */
  interface ShareInventory {
    /** 订单付款时间 */
    gmt_create: Date | number | string;
    /** 订单审核过期时间 */
    gmt_expired: Date | number | string;
    /** 主订单号 */
    order_id: string;
    /** 子订单号列表,逗号分隔 */
    sub_order_id: string;
  }
}

/** Gifting送礼 */
declare namespace Taobao.Istore {
  /** {@link https://open.taobao.com/tmc.htm?docId=1407&docType=9 istoreGifing消息} */
  interface GiftingMsg {
    /** 消息附加信息 */
    attach_info: string;
    /** 消息创建的时间戳 */
    create_time: number;
    /** 礼盒id */
    gift_box_id: number;
    /** 消息id */
    id: number;
    /** 消息状态 */
    message_status: number;
    /** 消息类型 */
    message_type: number;
    /** 消息接收着 */
    receiver_id: number;
    /** 消息发送者 */
    sender_id: number;
  }
}

/** 淘宝商品 */
declare namespace Taobao.Item {
  /** {@link https://open.taobao.com/tmc.htm?docId=1172&docType=9 淘宝商品审核结果消息通知} */
  interface AuditResultNotify {
    /** 商品审核的结果。true 表示审核成功, false 表示审核失败 */
    audit_result: boolean;
    /** 查看商品审核详细信息的链接 */
    detail_url?: string;
    /** 本次审核的商品ID */
    item_id: number;
    /** 商品审核不通过的提示信息 */
    message?: string;
    /** 本次审核操作的traceId，可用于系统定位问题 */
    trace_id: string;
    /** 审核商品所属的卖家昵称 */
    user_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2551&docType=9 商品变更消息通知} */
  interface DistributeItemEdit {
    /** 业务类型 */
    biz_type: string;
    /** 变更类型 */
    message_type?: string;
    /** 消息主键id */
    msg_id: string;
    /** 平台商品id */
    platform_item_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=128&docType=9 商品新增消息} */
  interface ItemAdd {
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
    /** 商品标题 */
    title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=131&docType=9 商品删除消息} */
  interface ItemDelete {
    /** 卖家昵称 */
    nick: string;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=130&docType=9 商品下架消息} */
  interface ItemDownshelf {
    /** 卖家昵称(不发送) */
    nick?: string;
    /** 商品ID */
    readonly num_iid: number | bigint;
    /** 商品价格(不发送) */
    price?: string;
    /** 商品SKU ID(不发送) */
    sku_id?: number | bigint;
    /** 商品SKU数量(不发送) */
    sku_num?: number;
    /** 商品状态(不发送) */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2426&docType=9 淘宝商品下降消息提醒} */
  interface ItemOfflineNotice {
    /** 商品id */
    num_iid: number | bigint;
    /** skuid */
    sku_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=137&docType=9 小二CC商品消息} */
  interface ItemPunishCc {
    /** 卖家昵称 */
    nick: string;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=135&docType=9 小二删除商品消息} */
  interface ItemPunishDelete {
    /** 卖家昵称 */
    nick: string;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=136&docType=9 小二下架商品消息} */
  interface ItemPunishDownshelf {
    /** 卖家昵称 */
    nick: string;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=133&docType=9 橱窗推荐商品消息} */
  interface ItemRecommendAdd {
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
    /** 商品标题 */
    title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=201&docType=9 取消橱窗推荐商品消息} */
  interface ItemRecommendDelete {
    /** 粉丝变化，add新增、delete删除 */
    event: string;
    /** 城市 */
    follower_city: string;
    /** 用户创建时间 */
    follower_create_at: string;
    /** 用户个人描述 */
    follower_description: string;
    /** 用户个性化域名 */
    follower_domain: string;
    /** 性别，m:男、f:女、n:未知 */
    follower_gender: string;
    /** 用户ID */
    follower_id: number;
    /** 省份 */
    follower_province: string;
    /** 用户昵称 */
    follower_screen_name: string;
    /** 用户博客地址 */
    follower_url: string;
    /** 认证原因 */
    follower_verified_reason: string;
    /** 用户的微号 */
    follower_weihao: string;
    /** 商品库存变化量 */
    increment?: number;
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
    /** 城市 */
    target_city: string;
    /** 用户创建时间 */
    target_create_at: string;
    /** 用户个人描述 */
    target_description: string;
    /** 用户个性化域名 */
    target_domain: string;
    /** 性别，m:男、f:女、n:未知 */
    target_gender: string;
    /** 用户ID */
    target_id: number;
    /** 省份 */
    target_province: string;
    /** 用户昵称 */
    target_screen_name: string;
    /** 用户博客地址 */
    target_url: string;
    /** 认证原因 */
    target_verified_reason: string;
    /** 用户的微号 */
    target_weihao: string;
    /** 商品标题 */
    title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=138&docType=9 商品SKU卖空消息} */
  interface ItemSkuZeroStock {
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=139&docType=9 修改商品库存消息} */
  interface ItemStockChanged {
    /** 商品修改字段 */
    changed_fields?: string;
    /** 商品库存变化量 */
    increment?: number;
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2324&docType=9 淘宝开放平台内部使用库存变更消息out} */
  interface ItemStockChangedOut {
    /** 1 - 带SKU，2 - 不带SKU */
    item_type: number;
    /** 商品当前库存 */
    num: number;
    /** 商品ID */
    num_iid: number | bigint;
    /** SKU ID */
    sku_id: number | bigint;
    /** SKU当前库存 */
    sku_num: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=132&docType=9 商品更新消息} */
  interface ItemUpdate {
    /** title:标题,desc:描述,价格:price,num:总库存,props:关键属性或spu,item_img,prop_img:图片,location:宝贝所在地, sku:sku的数目,cid:类目,approve_status:立即上架,list_time:定时上架,edit_spu_id:编辑的时候Spu_id改变, edit_postage_id:postage_id,edit_features:features,extends:商品附加信息,ends:ends时间改变,edit_autoends:auto_end字段值, auction_status:商品的状态,stuff_status:商品的新旧,options:options字段,auction_type:商品的类型，拍卖、一口价、团购,promote_status:橱窗推荐状态, edit_shop_categories:商品所属的店铺类目,wl_description:手机版宝贝描述,subtitle:子标题,starts:上架时间,mini_mum_bid:更改了起拍价, duration:销售周期,increment_num_bid:拍卖价格的增幅,current_bid:当前拍卖价,old_starts:商品最早发布时间,zoo:优惠, secure_trade_ordinary_post_fee:平邮费用,secure_trade_fast_post_fee:快递费用,secure_trade_ems_post_fee:EMS费用, old_quantity:累积库存,point_price:淘宝直通车,feature_tag:标签,feature_input_property:输入属性,auction_point:积分比率, property_alias:属性别名,outer_id:商品编码,quanlity_score:品级,auction_sub_status:商品子状态,user_type:用户类型, vertical_market:垂直类型,sb_wl_description:手淘和神笔合作的宝贝无线描述,terminal_image:多端图,major_image:主图 */
    changed_fields?: string;
    /** 商品库存变化量 */
    increment?: number;
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
    /** 商品标题 */
    title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=129&docType=9 商品上架消息} */
  interface ItemUpshelf {
    /** 卖家昵称 */
    nick: string;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=134&docType=9 商品卖空消息} */
  interface ItemZeroStock {
    /** 卖家昵称 */
    nick: string;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    readonly num_iid: number | bigint;
    /** 商品价格 */
    price?: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 商品状态 */
    status?: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Itemmarket {
  /** {@link https://open.taobao.com/tmc.htm?docId=2456&docType=9 三方货源分销商货品消息} */
  interface ItemDistributorChange {
    /** 变更事件 */
    event: string;
    /** 货品id */
    third_item_id: number;
    /** sku id */
    third_sku_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2461&docType=9 铺货成功推送} */
  interface ItemRelationChange {
    /** 商品id */
    item_id: number;
    /** 分销商店铺名称 */
    shop_name: string;
    /** 淘宝商品id */
    tb_item_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2356&docType=9 货品素材信息变更} */
  interface MaterialChange {
    /** 素材 id */
    id: string;
    /** 状态异常的原因 */
    reason: string;
    /** 状态；0：审核中；1：正常；-1：异常； */
    status: number;
    /** 素材类型；VIDEO：视频 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2454&docType=9 三方货源分销商采购单消息} */
  interface PurchaseDistributorChange {
    /** 购买状态 */
    buying_status?: number;
    /** 是否是子单 */
    is_detail: string;
    /** 是否是主单 */
    is_main?: string;
    /** 操作类型 */
    operation_type?: string;
    /** 采购单id */
    purchase_order_id: number;
    /** 销售状态 */
    selling_status?: number;
    /** 采购单类型 */
    usage_type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2354&docType=9 三方货源采购单变更} */
  interface PurchaseOrderChange {
    /** 代发单 id */
    distribution_order_id: string;
    /** 采购单 id */
    purchase_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2544&docType=9 货品视频创建} */
  interface VideoCreate {
    /** 自定义参数 */
    custom_id?: string;
    /** 视频id */
    video_id: number;
    /** 上传时的视频url */
    video_url: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Jaq {
  /** {@link https://open.taobao.com/tmc.htm?docId=886&docType=9 聚安全实人认证审核结果} */
  interface AuditResult {
    /** account_id */
    account_id: string;
    /** biz */
    biz: string;
    /** security_key */
    security_key: string;
    /** source */
    source: string;
    /** status */
    status: string;
  }
}

/** 淘宝机票 */
declare namespace Taobao.Jipiao {
  /** {@link https://open.taobao.com/tmc.htm?docId=2181&docType=9 飞猪辅营订单支付通知接口} */
  interface AncillaryOrderPaid {
    /** 代理商id */
    agent_id: number;
    /** 订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=922&docType=9 【机票代理商】改签订单通知} */
  interface JipiaoModifyOrderNotify {
    /** 改签申请单id */
    apply_id: number;
    /** 改签后舱位 */
    cabin: string;
    /** 改签后航班信息 */
    flight_after_modify: string;
    /** 改签前航班信息 */
    flight_before_modify: string;
    /** 改签前舱位 */
    last_cabin: string;
    /** 改签备注 */
    memo?: string;
    /** 消息id */
    msg_id: string;
    /** APPLY：提交申请，PAID：已支付 */
    msg_type: string;
    /** 乘客信息 */
    passenger: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=621&docType=9 机票订单变更} */
  interface JipiaoOrderChanged {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=679&docType=9 机票订单状态推送} */
  interface JipiaoOrderStatusNotify {
    /** 支付宝交易流水号 */
    alipay_trade_no?: string;
    /** 失败原因,订单状态为0或1时会有详细的失败原因 */
    cause?: string;
    /** 消息描述，例如：HK/支付/出票 */
    description?: string;
    /** 扩展字段，例如：k1,v1;k2,v2 */
    extra?: string;
    /** 失败类型 */
    order_fail_fype?: number;
    /** 淘宝系统订单号 */
    order_id: string;
    /** 订单状态，1:订单失败 2:支付成功 3:订单成功（有票号） 4:订单强制成功（无票号） */
    order_status?: number;
    /** 外部订单号 */
    out_order_id?: string;
    /** 订单实际支付金额（单位：分） */
    paid_price?: number;
    /** 产品类型（见京杭支付接口定义） */
    product_type?: string;
    /** 票号信息列表，json格式 */
    ticket_item_infos?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=857&docType=9 机票退票订单状态推送} */
  interface JipiaoRefundOrderNotify {
    /** 触发该消息的退票申请单ID */
    apply_id: number;
    /** 机票订单id */
    order_id?: number;
    /** 该订单所有相关退票申请信息 */
    refund_info_list?: string;
    /** 该订单实际退给用户的总金额（单位：元） */
    refund_money?: number;
    /** 该订单实际退给用户的总金额（单位：分） */
    refund_money_fen?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=951&docType=9 【机票代理商】订单通知} */
  interface SellerOrderNotify {
    /** 订单创建时间 */
    create_time: string;
    /** 出票方式 1：手工 ，2自动出票， 3：仅自动HK 4：多种方式组合 */
    issue_way?: number;
    /** 订单号 */
    order_id: number;
    /** 订单支付时间 */
    pay_time?: string;
    /** 1:待确认 2:待出票 3:强制成功 5:预定成功 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=952&docType=9 【机票代理商】退票订单通知} */
  interface SellerRefundOrderNotify {
    /** 退票申请单id */
    apply_id: number;
    /** 申请单创建时间 */
    create_time: string;
    /** 申请单变更时间 */
    modify_time: string;
    /** 申请单状态 1：买家发起退票申请 2：费用完整 3：卖家接受退票申请 4：卖家确认退票 5：退款成功 6：退佣成功 7：退票失败 */
    msg_type: number;
    /** 机票订单id */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2481&docType=9 催出票/拦截出票消息} */
  interface UrgeIssueTicket {
    /** 代理商id */
    agent_id: number;
    /** 订单号 */
    order_id: number;
    /** 消息类型：0-催出票，1-拦截出票 */
    send_type: number;
  }
}

/** 淘宝分销 */
declare namespace Taobao.Jzfx {
  /** {@link https://open.taobao.com/tmc.htm?docId=2430&docType=9 家装分销_采购单创建} */
  interface PurchaseOrderCreate {
    /** 采购单创建时间 */
    created: Date | number | string;
    /** 分销商店铺昵称 */
    distributor_shop_name: string;
    /** 采购单号 */
    purchase_id: number;
    /** 供应商店铺昵称 */
    supplier_shop_name: string;
    /** 交易主订单号 */
    tc_order_id: number;
    /** 交易子订单号 */
    tc_sub_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2433&docType=9 家装分销_采购单状态修改} */
  interface PurchaseOrderStatusModify {
    /** 分销商店铺昵称 */
    distributor_shop_name: string;
    /** 采购单修改时间 */
    modified: Date | number | string;
    /** 采购单号 */
    purchase_id: number;
    /** 采购单状态：WAIT_BUYER_PAY(待付款) WAIT_SELLER_SEND_GOODS(待发货) WAIT_BUYER_CONFIRM_GOODS(待收货确认) WAIT_SETTLE(已收货待结算) SETTLE_IN_PROGRESS(结算中) TRADE_FINISHED(交易成功) TRADE_CLOSED(已关闭) */
    status: string;
    /** 供应商店铺昵称 */
    supplier_shop_name: string;
    /** 交易主订单号 */
    tc_order_id: number;
    /** 交易子订单号 */
    tc_sub_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2432&docType=9 家装分销_采购逆向单创建} */
  interface PurchaseReverseOrderCreate {
    /** 修改时间 */
    created: Date | number | string;
    /** 分销商店铺名称 */
    distributor_shop_name: string;
    /** 采购单ID */
    purchase_id: number;
    /** 采购逆向单ID */
    purchase_reverse_id: number;
    /** 供应商店铺名称 */
    supplier_shop_name: string;
    /** 淘宝主订单ID */
    tc_order_id: number;
    /** 淘宝子订单ID */
    tc_sub_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2434&docType=9 家装分销_采购逆向单状态修改} */
  interface PurchaseReverseOrderStatusModify {
    /** 分销商店铺名称 */
    distributor_shop_name: string;
    /** 修改时间 */
    modified: Date | number | string;
    /** 采购单ID */
    purchase_id: number;
    /** 采购逆向单ID */
    purchase_reverse_id: number;
    /** 采购逆向单状态，INIT(消费者发起退款申请) AGREE(分销商同意退货中) REFUND(退款完成) SETTLE(退款结算完成) CLOSED(退款关闭) */
    status: string;
    /** 供应商店铺名称 */
    supplier_shop_name: string;
    /** 淘宝主订单ID */
    tc_order_id: number;
    /** 淘宝子订单ID */
    tc_sub_order_id: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Kcb {
  /** {@link https://open.taobao.com/tmc.htm?docId=1064&docType=9 库存宝消息} */
  interface Msg {
    /** 业务ID */
    pid: string;
    /** 业务备注 */
    pmemo?: string;
    /** 卖家nick */
    seller_nick?: string;
    /** 状态 */
    status?: string;
    /** 业务类型 */
    type?: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Lbs {
  /** {@link https://open.taobao.com/tmc.htm?docId=1178&docType=9 支付宝位移监控消息推送} */
  interface MonitorPush {
    /** 用户经纬度等 */
    content: string;
    /** 消息ID */
    id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1182&docType=9 支付宝用户位移消息推送} */
  interface UserMonitorPush {
    /** 消息内容 */
    content: string;
    /** 消息ID */
    id: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Life {
  /** {@link https://open.taobao.com/tmc.htm?docId=1999&docType=9 本地生活生服拼团活动变更提醒} */
  interface GroupActivityNotify {
    /** 活动id */
    activity_id: string;
    /** 活动类型，KBT_GROUP_ACTIVITY（拼团活动）；ISV_DISTRIBUTE（服务商分销） */
    activity_type: string;
    /** 拼团活动id，已废弃；请使用activity_id */
    group_activity_id?: string;
    /** 已废弃，请使用msg_type；消息类型，活动发布（新增）：PUBLISHED 状态变更：STATUS_CHANGED */
    group_activity_msg_type?: string;
    /** 已废弃，已活动查询为准；活动状态，进行中：PUBLISHED，可开团可参团； 软下架：CLOSED，仅参团； 结束：FINISHED，不可开不可参 */
    group_activity_status?: string;
    /** 消息类型，PUBLISHED 状态变更：STATUS_CHANGED */
    msg_type: string;
    /** 商家id */
    seller_id: string;
    /** 已废弃，以活动查询数据为准；关联商品id */
    tb_item_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=831&docType=9 生活服务订单消息订阅} */
  interface Order {
    /** 消息类型 */
    message_type: string;
    /** 淘宝订单ID */
    tb_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2000&docType=9 本地生活生服行业订单触达} */
  interface OrderNotify {
    /** 混淆后的买家用户ID */
    buyer_id: string;
    /** 订单变更通知消息ID */
    order_msg_id: string;
    /** 变更类型，ALSC_TRADE_PAID	订单支付成功 ALSC_ORDER_SEND	订单发放成功 ALSC_SUB_ORDER_USE	核销成功 ALSC_TRADE_REFUND	退款成功 */
    order_msg_type: string;
    /** 淘宝订单id */
    order_no: string;
    /** 商家id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1998&docType=9 生服门店变更同步消息} */
  interface StoreInfoChange {
    /** msgId */
    msg_id: string;
    /** 卖家Id */
    seller_id: string;
    /** 门店id */
    store_id: string;
    /** 门店状态 */
    store_status?: string;
    /** 变更类型 */
    type: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Lifeservice {
  /** {@link https://open.taobao.com/tmc.htm?docId=1979&docType=9 本地生活生服商品消息} */
  interface ItemMsg {
    /** 消息业务扩展信息，里面的内容不易过多,子属性:gmtModified,tbItemId,itemTitle,itemStatus,pid */
    biz_ext_info: string;
    /** ITEM_STATUS_CHANGE:商品状态变更 ITEM_INFO_CHANGE:商品信息变更 ITEM_CREATE:商品创建 ITEM_SHOP_CHANGE:商品适用门店变更 */
    item_msg_type: string;
    /** 消息id */
    msg_id: string;
    /** 卖家id */
    seller_id: string;
    /** 本地生活商品id */
    tb_item_id: string;
  }
}

/** 淘宝直播API */
declare namespace Taobao.Live {
  /** {@link https://open.taobao.com/tmc.htm?docId=2357&docType=9 直播严选机构商品池变化通知} */
  interface AgencyItemChanged {
    /** 机构openUid */
    agency_open_uid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1751&docType=9 淘宝直播开播或关闭} */
  interface AlipayStatusChange {
    /** 直播间id */
    feed_id: string;
    /** 直播状态 */
    room_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1747&docType=9 主播注册身份时通知} */
  interface AnchorRoleChange {
    /** 蚂蚁透传字段，再透传给蚂蚁 */
    extra_param?: string;
    /** 主播havanaId */
    id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1841&docType=9 本地生活直播间氛围消息} */
  interface BdshLiveEventChange {
    /** 氛围类型，区分评论还是点赞等 */
    action: string;
    /** 主播id */
    anchor_id?: number;
    /** 完成次数 */
    count?: number;
    /** 扩展参数 */
    extend?: string;
    /** 直播间id */
    live_id: number;
    /** 消息唯一id */
    msg_id: string;
    /** 时间戳 */
    timestamp?: number;
    /** 用户昵称 */
    user_nick?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1765&docType=9 直播预约信息变更} */
  interface BookInfoChange {
    /** 额外信息 */
    extra?: string;
    /** 预约对象id */
    feed_id: string;
    /** 是否向端上推送了消息 */
    push_c_msg: boolean;
    /** 预约状态，1代表订阅成功，0代表取消订阅 */
    status: string;
    /** 用户id */
    user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2344&docType=9 淘宝直播上下播消息} */
  interface FeedRelated {
    /** 主播openId */
    anchor_open_id: string;
    /** 事件类型 PUBLISH_LIVE上播,STOP_LIVE下播,等 */
    event: string;
    /** 场次id */
    live_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1752&docType=9 淘宝直播结帧} */
  interface PrintScreen {
    /** 直播间id */
    feed_id: string;
    /** 截屏url */
    print_screen_url: string;
    /** 房间状态 */
    room_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1790&docType=9 直播间添加宝贝} */
  interface RoomItemChange {
    /** 主播ID */
    account_id: string;
    /** 主播账号等级 */
    account_level: number;
    /** 是否测试账号 */
    is_test: boolean;
    /** 宝贝ID列表 */
    item_ids: string[];
    /** 直播间ID */
    live_id: string;
    /** 直播间状态 */
    room_status: number;
    /** 直播间类型 */
    room_type: string;
    /** 直播间topic（唯一标识） */
    topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1746&docType=9 支付宝直播间状态变更消息} */
  interface RoomStatusChange {
    /** 直播间id */
    id: number;
    /** 直播间当前状态 */
    live_room_status: number;
    /** 直播间当前状态 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=926&docType=9 淘宝直播流状态变更} */
  interface StatusChange {
    /** 直播ID */
    feed_id: number;
    /** 新直播状态 */
    new_status: number;
    /** 用户ID */
    user_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2347&docType=9 淘宝直播订单消息} */
  interface TcpOrder {
    /** 主播openId */
    anchor_open_id: string;
    /** 订单号 */
    tid: number | bigint;
  }
}

/** 淘宝 */
declare namespace Taobao.Local {
  /** {@link https://open.taobao.com/tmc.htm?docId=924&docType=9 通知58订单发生变化} */
  interface OrderPorcess {
    /** 用户的服务地址 */
    address?: string;
    /** 不同类目服务的扩展字段 */
    attribute?: string;
    /** 城市6位编码 */
    city_code?: string;
    /** 城市名称 */
    city_name?: string;
    /** 服务时长 */
    duration?: string;
    /** 订单商品所属类目(区分保洁还是美甲等) */
    item_catid?: string;
    /** 用户所在地经纬度 (经度,纬度)，“,”分割 */
    location?: string;
    /** 订单类型 0:创单 1:付款 2:订单关闭 3:订单完成 */
    order_type: string;
    /** 外部订单id */
    outer_orderid?: string;
    /** 价格 */
    price?: string;
    /** 原因 */
    reason?: string;
    /** 用户备注 */
    remark?: string;
    /** 服务开始时间 */
    service_starttime?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单状态发生变化的时间 */
    time?: string;
    /** 用户联系电话 */
    user_phone?: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Localorder {
  /** {@link https://open.taobao.com/tmc.htm?docId=964&docType=9 通知到家服务商订单状态变化} */
  interface StatusNotify {
    /** 附件参数 */
    attribute_params: string;
    /** 创建订单的参数 */
    create_order_params?: string;
    /** 消息类型：1创单；2付款；6确认完成/确认收货；7用户取消订单；9支付超时；10接单超时；11安排服务者超时/配送超时 */
    order_action_type: number;
    /** 订单状态发生变化的时间 */
    order_status_modified_time: Date | number | string;
    /** 淘宝订单ID */
    taobao_order_id: number;
  }
}

/** 淘宝物流 */
declare namespace Taobao.Logistics {
  /** {@link https://open.taobao.com/tmc.htm?docId=2306&docType=9 物流揽收} */
  interface Accept {
    /** cp编号 */
    cp_code: string;
    /** 描述 */
    logistics_detail_description?: string;
    /** 运单号 */
    mail_no: string;
    /** 发生时间 */
    occur_time?: number;
    /** 卖家 */
    seller_open_uid: string;
    /** 状态码 */
    status_code: string;
    /** tid */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=728&docType=9 物流详情跟踪消息} */
  interface LogsticDetailTrace {
    /** 事件名称。类型如下：CREATE:物流订单创建, CONSIGN:卖家发货, GOT:揽收成功, ARRIVAL:进站, DEPARTURE:出站, SIGNED:签收成功, SENT_SCAN:派件扫描, FAILED:签收失败/拒签, LOST:丢失, SENT_CITY:到货城市, TO_EMS:订单转给EMS, OTHER:其他事件/操作 */
    action: string;
    /** 物流公司名称 */
    company_name?: string;
    /** 物流流转信息 */
    desc: string;
    /** 运单号 */
    out_sid?: string;
    /** 交易订单号 */
    readonly tid: number | bigint;
    /** 处理时间 */
    time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1188&docType=9 非淘物流消息} */
  interface UnTaobaoLogstic {
    /** 消息内容JSON */
    content?: string;
    /** metaq消息ID */
    msg_id?: string;
  }
}

/** 轻应用 */
declare namespace Taobao.Miniapp {
  /** {@link https://open.taobao.com/tmc.htm?docId=2307&docType=9 小程序文章内容非法} */
  interface ArticleContentUnlawful {
    /** 小程序文章内容ID */
    article_id: string;
    /** 文章内容状态 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2143&docType=9 轻交易商品状态同步消息} */
  interface ItemMsg {
    /** 轻交易商品id */
    item_id: number;
    /** 小程序id */
    miniapp_id: number;
    /** 外部商品id */
    out_item_id?: string;
    /** 状态 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2166&docType=9 轻应用轻交易退款消息} */
  interface RefundMsg {
    /** 退款结束时间 */
    end_time?: Date | number | string;
    /** 小程序id */
    miniapp_id: number;
    /** 订单id */
    order_id?: number;
    /** 订单外部订单号 */
    out_order_id?: string;
    /** 退款订单号 */
    refund_id: number;
    /** 退款金额（单位：分） */
    refund_price: number;
    /** 退款开始时间 */
    start_time?: Date | number | string;
    /** 子订单id */
    sub_order_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2142&docType=9 小程序轻应用轻交易的订单状态同步消息} */
  interface TradeMsg {
    /** 小程序id */
    miniapp_id: number;
    /** 内部订单id */
    order_id: number;
    /** 外部订单id */
    out_order_id?: string;
    /** 订单状态值 */
    status: number;
  }
}

/** 聚石塔 */
declare namespace Taobao.Modifyaddress {
  /** {@link https://open.taobao.com/tmc.htm?docId=2091&docType=9 自助改地址结果消息通知} */
  interface ResultNotify {
    /** 奇门接口回告， true -- 可修改； false -- 不可修改； timeout -- 超时未返回 */
    api_result: string;
    /** 主订单ID */
    biz_order_id: number;
    /** 平台是否修改成功：true -- 修改成功；false -- 修改失败 */
    result: boolean;
    /** 商家昵称 */
    seller_nick?: string;
  }
}

/** 聚石塔 */
declare namespace Taobao.Modifyorder {
  /** {@link https://open.taobao.com/tmc.htm?docId=2147&docType=9 订单一致性校验消息} */
  interface ConsistencyResult {
    /** 地址是否一致 */
    address_same: boolean;
    /** 订单id */
    biz_order_id: string;
    /** oaid */
    oaid?: string;
    /** outerId */
    outer_id?: string;
    /** 商家昵称 */
    seller_nick: string;
    /** skuId */
    sku_id?: string;
    /** 商品是否一致 */
    sku_same: boolean;
    /** 子订单id */
    sub_order_id?: string;
  }
}

/** 聚石塔 */
declare namespace Taobao.Modifysku {
  /** {@link https://open.taobao.com/tmc.htm?docId=2031&docType=9 修改商品信息结果消息} */
  interface ResultNotify {
    /** true-修改成功；false-修改失败；timeout-接口超时 */
    api_result: string;
    /** 服务商appkey */
    appkey: string;
    /** 主订单ID */
    biz_order_id: string;
    /** 商品ID */
    item_id: string;
    /** 原SKUID对应的outerId */
    old_outer_id: string;
    /** 原SKUID */
    old_sku_id: string;
    /** 新SKUID对应的outerId */
    outer_id: string;
    /** 修改SKU结果：成功-true；失败-false；推荐使用api_result，增加了奇门调用超时这个状态 */
    result: boolean;
    /** 店铺nick */
    seller_nick: string;
    /** 新SKUID */
    sku_id: string;
    /** 子订单ID */
    sub_order_id: string;
  }
}

/** 交易全链路 */
declare namespace Taobao.Oc {
  /** {@link https://open.taobao.com/tmc.htm?docId=718&docType=9 oc订单标签变更} */
  interface TradeTagChanged {
    /** 卖家nick */
    seller_nick: string;
    /** 标签名称 */
    tag_name: string;
    /** 标签类型，1:官方标签，2:自定义标签 */
    tag_type: number;
    /** 订单编号 */
    readonly tid: number | bigint;
  }
}

/** 淘宝交易 */
declare namespace Taobao.Ofn {
  /** {@link https://open.taobao.com/tmc.htm?docId=2482&docType=9 信用代扣状态变更同步} */
  interface CreditPayStatusChange {
    /** 支付宝流水号 */
    alipay_trade_no: string;
    /** 回收单 ID */
    biz_order_id: number;
    /** 预付金额，单位 分 */
    credit_amount: number;
    /** 代扣状态 */
    recover_status: string;
    /** 代扣状态描述 */
    recover_status_desc: string;
    /** 回收商 ID（appKey） */
    supplier_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2483&docType=9 以旧换新新机单事件同步} */
  interface NewOrderEventSync {
    /** 事件类型，SHIPPED（已发货），PAID（已支付） */
    event_type: string;
    /** 新机单 ID */
    new_order_id: string;
    /** 回收单 ID */
    recycle_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2503&docType=9 以旧换新回收单状态同步} */
  interface OrderStatusSync {
    /** 估价金额，单位 分 */
    apprize_amount?: string;
    /** 回收单 ID */
    biz_order_id: string;
    /** 渠道 */
    channel: string;
    /** 渠道数据，json格式 */
    channel_data?: string;
    /** 信用预付金额，单位分 */
    credit_pay_amount?: string;
    /** 创单时间 */
    gmt_create?: string;
    /** 订单状态 */
    order_status: string;
    /** 1 现金支付 / 2 红包支付 */
    pay_type?: string;
    /** 估价 ID */
    quote_id?: string;
    /** 上门取件时间 */
    ship_time?: string;
    /** SPU ID */
    spu_id: string;
    /** 回收商 appKey */
    supplier_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2572&docType=9 以旧换新回收单评价消息} */
  interface RateSync {
    /** 回收单 ID */
    biz_order_id: string;
    /** 评价内容 */
    rate_content: string;
    /** 1是好评，0 是差评 */
    rate_grade: string;
  }
}

/** 导购平台 */
declare namespace Taobao.Openaccount {
  /** {@link https://open.taobao.com/tmc.htm?docId=731&docType=9 openaccount数据同步} */
  interface DataSync {
    /** 消息id */
    id: string;
    /** 数据变更内容 */
    new_value: string;
    /** 操作类型insert、update、delete */
    operation_type: string;
  }
}

/** 客户运营平台API */
declare namespace Taobao.Opencrm {
  /** {@link https://open.taobao.com/tmc.htm?docId=2248&docType=9 营销短信授权消息} */
  interface AuthTouchMessage {
    /** 服务商appkey */
    app_key: string;
    /** 首次授权时间 */
    first: string;
    /** 最近一次授权时间 */
    latest: string;
    /** 消息幂等ID */
    msg_id: string;
    /** ouid */
    ouid: string;
    /** 商家ID */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2196&docType=9 卡片短信发送预估消息} */
  interface CardEstTask {
    /** 预估结果，cardEstErrorCount:预估可发送总人数; cardEstErrorCount:预估失败人数;cardEstParseCount:预估卡片短信可解析手机号数;cardEstParseErrorCount:卡片短信解析预估失败人数 */
    content?: string;
    /** 任务失败原因 */
    error_message?: string;
    /** 接口请求时的requestid */
    interface_request_id: string;
    /** 任务是否成功 */
    status: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2124&docType=9 卡片短信模板审核消息} */
  interface CardTplExamine {
    /** 错误码 */
    error_msg?: string;
    /** 0-模板审核通过；1-模板审核不通过 */
    status: number;
    /** 模板id */
    template_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1117&docType=9 优惠券发完TMC} */
  interface CouponUseUp {
    /** 规则实例ID */
    rule_inst_id: number;
    /** 卖家ID */
    seller_id: number;
    /** 优惠券唯一ID */
    uuid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1058&docType=9 人群快照生成结果} */
  interface CrowdInstResult {
    /** 营销活动ID */
    activity_id?: string;
    /** 营销活动实例ID */
    activity_inst_id?: string;
    /** 人群快照ID */
    crowd_inst_id: number;
    /** 人群快照成员买家数量 */
    member_count?: number;
    /** 节点ID */
    node_id?: string;
    /** 节点实例ID */
    node_inst_id?: string;
    /** 结果编码 */
    result_code: number;
    /** 结果信息 */
    result_msg?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1059&docType=9 人群快照另存为人群结果} */
  interface CrowdInstSaveResult {
    /** 营销活动ID */
    activity_id?: string;
    /** 营销活动实例ID */
    activity_inst_id?: string;
    /** 属性id，接口返回用来匹配人群的标识 */
    attr_id?: number;
    /** 人群ID */
    crowd_id: number;
    /** 节点ID */
    node_id?: string;
    /** 节点实例ID */
    node_inst_id?: string;
    /** 结果编码 */
    result_code: number;
    /** 结果信息 */
    result_msg?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2363&docType=9 数字短信模板审核消息} */
  interface DigitalTplExamine {
    /** 不通过 */
    error_msg?: string;
    /** 运营商类型 */
    operator_code: string;
    /** 审批状态，1：审批通过；2：审批不通过 */
    status: string;
    /** 模板id */
    template_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1224&docType=9 反馈tmc} */
  interface Feedback {
    /** 消息体 */
    content: string;
    /** 唯一标志，由isv自己提供自己控制，以便一一对应跟踪消息 */
    node_inst_id: number;
    /** 反馈消息类型 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1061&docType=9 规则全量计算结果通知} */
  interface FullRuleResult {
    /** 业务id,时间戳 */
    id: string;
    /** 描述信息 */
    msg_info: string;
    /** 全部成功：0,其他1 */
    result: string;
    /** 卖家昵称 */
    seller_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2104&docType=9 会员等级变更} */
  interface MemberGradeChange {
    /** 扩展字段 bizOrderId：付费会员订单ID */
    ext_info: string;
    /** 变更后等级 */
    grade: number;
    /** 等级过期结束时间，毫秒时间戳 */
    grade_expire_end_time: number;
    /** 消息id */
    msg_id: string;
    /** 商家主体维度买家唯一id */
    omid?: string;
    /** 买家维度唯一id */
    ouid: string;
    /** 商家ID */
    seller_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1424&docType=9 会员入会消息} */
  interface MemberJoin {
    /** 首次入会时间 */
    first_join_time: Date | number | string;
    /** 本次入会时间 */
    join_time: Date | number | string;
    /** 消息id，无实际意义 */
    msg_id: string;
    /** 卖家昵称 */
    seller: string;
    /** 买家昵称 */
    user: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2029&docType=9 会员入会消息} */
  interface MemberJoinPrivate {
    /** 首次入会时间 */
    first_join_time: Date | number | string;
    /** 本次入会时间 */
    join_time: Date | number | string;
    /** 消息id,无实际意义 */
    msg_id: string;
    /** 卖家昵称 */
    seller: string;
    /** ouid */
    user: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2519&docType=9 手机热榜回执消息} */
  interface MobileRankingReceipt {
    /** 点击pv */
    clicked_pv?: string;
    /** 1：点击效率不达标自动结束；2：曝光量达活动预定量；3：时间到活动结束时间；4：商家主动结束；5：对应惊喜码活动提前结束。 */
    finished_reason?: number;
    /** 任务完结时间,type为2时提供 */
    finished_time?: Date | number | string;
    /** 外部活动id */
    out_node_id: string;
    /** 热榜策略id */
    strategy_id: number;
    /** 报告对应的完结时间,type为1时提供 */
    time_slot_end?: Date | number | string;
    /** 报告对应的开始时间,type为1时提供 */
    time_slot_start?: Date | number | string;
    /** 1:执行报告，2:任务终结 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1050&docType=9 节点执行完成消息} */
  interface NodeExecuteFinished {
    /** 节点实例ID */
    node_inst_id: number;
    /** 状态，3-失败，4-成功 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2103&docType=9 开放策略事件类单发短信TMC消息} */
  interface OpenStrategyEvent {
    /** 内容 */
    content: string;
    /** 模板code */
    event_code: string;
    /** 节点id */
    node_inst_id: string;
    /** 商家id */
    seller_id: number;
    /** 模板实例id */
    task_inst_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1377&docType=9 官方营销场景短信发送通知} */
  interface SMSOfficaial {
    /** 通知内容，发送失败通知内容为空 */
    content: string;
    /** 错误描述 */
    error_msg: string;
    /** 商家主账号nick */
    seller: string;
    /** 任务id */
    task_id: number;
    /** 通知类型：0-发送失败，1-发送成功 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2192&docType=9 CRM商业化计费商家维度账单} */
  interface SellerDimensionCharge {
    /** isv appkey */
    app_key: string;
    /** 业务时间 */
    biz_date: string;
    /** {"sellerId": 计费数} */
    charge: string;
    /** 外部业务ID */
    out_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1051&docType=9 短信账单} */
  interface ShortMessageBill {
    /** 账单日期 */
    bill_date?: Date | number | string;
    /** 账单类型，1-智能营销账单，2-事件营销账单 */
    bill_type?: number;
    /** 失败条数 */
    fail_bill_count: number;
    /** 失败人数 */
    fail_count: number;
    /** 节点实例ID */
    node_inst_id?: number;
    /** 卖家ID */
    seller_id?: number;
    /** 成功条数 */
    success_bill_count: number;
    /** 成功人数 */
    success_count: number;
    /** 状态未知条数 */
    unknown_status_bill_count: number;
    /** 状态未知人数 */
    unknown_status_count: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1119&docType=9 短信发送TMC} */
  interface ShortMessageSent {
    /** 计费条数 */
    bill_count: number;
    /** 短信流水唯一ID */
    biz_id: number;
    /** 卖家ID */
    seller_id: number;
    /** 短信发送时间 */
    send_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2082&docType=9 智能外呼回执} */
  interface Utouch {
    /** 外呼通话时长,单位:秒。接通时>0;未接通=0。注:没有振铃等异常不存在当前值。 */
    callout_duration?: string;
    /** 计划中记账的额度, 预留字段 */
    charge_amount?: string;
    /** 结束时间 */
    end_time?: Date | number | string;
    /** 失败原因 */
    error_msg?: string;
    /** 外部节点id */
    node_inst_id: string;
    /** ouid */
    ouid: string;
    /** 商家id */
    seller_id: number;
    /** 开始时间 */
    start_time?: Date | number | string;
    /** 是否成功 */
    touch_success: boolean;
    /** 幂等建 */
    unicode: string;
    /** 用户反馈识别 */
    user_feed_back_code?: string;
  }
}

/** OpenIM消息 */
declare namespace Taobao.Openim {
  /** {@link https://open.taobao.com/tmc.htm?docId=786&docType=9 openim 离线消息推送} */
  interface OffMsgPush {
    /** content */
    content: string;
    /** from */
    from_id: string;
    /** 发送时间 */
    gmt_send: number;
    /** msgId */
    msg_id?: string;
    /** 消息类型。0:单聊消息;2:多聊;6:群聊消息;***目前仅有单聊消息，即msg_type=0***** */
    msg_type?: number;
    /** nickname */
    nickname?: string;
    /** 子类型（消息格式）。-1: 未知类型;0:文本;1:图片;2:语音;4:GIF图片 */
    sub_type?: number;
    /** to */
    to_id: string;
  }
}

/** OpenMall-API */
declare namespace Taobao.Openmall {
  /** {@link https://open.taobao.com/tmc.htm?docId=1924&docType=9 Openmall告警消息通知} */
  interface AlarmMsg {
    /** 详情 */
    detail: string;
    /** 分销者 */
    distributor: string;
    /** 外部outId */
    outer_id: string;
    /** 淘宝订单号 */
    tid: string;
    /** 告警类型 ORDER_NO_PAY（订单支付失败） ORDER_HIGH_POSTFEE（订单高运费，超过20元） */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1778&docType=9 Openmall商品变更消息} */
  interface ItemChanged {
    /** 商品事件 */
    event: string;
    /** 商品ID */
    item_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1779&docType=9 openmall商品库存变更消息通知} */
  interface ItemStockChanged {
    /** 商品ID */
    item_id: number;
    /** 当前商品维度总库存，单个sku库存需通过API查询 */
    quantity: number;
    /** 当前商品状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1784&docType=9 OpenMall退款单变更} */
  interface RefundChanged {
    /** 渠道身份 */
    distributor: string;
    /** 退款单ID */
    refund_id: number;
    /** 退款单状态 */
    status: string;
    /** 订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1780&docType=9 订单消息通知} */
  interface TradeChanged {
    /** 分销者 */
    distributor: string;
    /** 外部业务单号 */
    outer_id: string;
    /** 订单状态 */
    status: string;
    /** 淘宝交易号 */
    tid: string;
  }
}

/** 百川 */
declare namespace Taobao.Opentrade {
  /** {@link https://open.taobao.com/tmc.htm?docId=722&docType=9 百川订单创建成功} */
  interface OrderCreated {
    /** 扩展字段 */
    ext_data: string;
    /** 百川交易外部订单号 */
    isv_order_id: string;
    /** 百川交易订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=723&docType=9 百川订单修改成功} */
  interface OrderModified {
    /** 扩展字段 */
    ext_data: string;
    /** 百川订单外部订单号 */
    isv_order_id: string;
    /** 百川交易订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=724&docType=9 百川资金流水单创建成功} */
  interface PayOrderCreated {
    /** 扩展字段 */
    ext_data: string;
    /** 百川交易外部订单号 */
    isv_order_id: string;
    /** 百川外部资金流水号 */
    isv_pay_id: string;
    /** 百川交易订单号 */
    order_id: number;
    /** 百川资金流水单号 */
    pay_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=726&docType=9 百川资金流水单处理失败} */
  interface PayOrderFailed {
    /** 扩展字段 */
    ext_data: string;
    /** 百川交易外部订单号 */
    isv_order_id: string;
    /** 百川交易外部资金流水号 */
    isv_pay_id: string;
    /** 百川交易订单号 */
    order_id: number;
    /** 百川交易资金流水单号 */
    pay_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=725&docType=9 百川资金流水单处理成功} */
  interface PayOrderProceed {
    /** 扩展字段 */
    ext_data: string;
    /** 百川交易外部订单号 */
    isv_order_id: string;
    /** 百川交易外部资金流水号 */
    isv_pay_id: string;
    /** 百川交易订单号 */
    order_id: number;
    /** 百川交易资金流水单号 */
    pay_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=755&docType=9 百川订单分账处理失败} */
  interface SettleDisburseFailed {
    /** 发起支付时间 */
    alipay_time: number;
    /** 扣款金额 */
    amount: number;
    /** 扣款周期 */
    bill_cycle: number;
    /** 账单时间（即第一次扣款的时间） */
    bill_time: number;
    /** 支付宝扣款是否成功 */
    is_success: boolean;
    /** 用户名 */
    nick: string;
    /** 支付失败code */
    pay_error_code: string;
    /** 服务code */
    serv_code: string;
    /** 交易订单id */
    trade_id: number;
    /** 外部订单号（扣款唯一编号） */
    trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=743&docType=9 百川订单分账处理成功} */
  interface SettleDisburseSucceed {
    /** 发起支付时间 */
    alipay_time: number;
    /** 扣款金额 */
    amount: number;
    /** 扣款周期 */
    bill_cycle: number;
    /** 账单时间（即第一次扣款的时间） */
    bill_time: number;
    /** 支付宝扣款是否成功 */
    is_success: boolean;
    /** 用户名 */
    nick: string;
    /** 支付失败code */
    pay_error_code: string;
    /** 服务code */
    serv_code: string;
    /** 交易订单id */
    trade_id: number;
    /** 外部订单号（扣款唯一编号） */
    trade_no: string;
  }
}

/** 营销平台 */
declare namespace Taobao.Os {
  /** {@link https://open.taobao.com/tmc.htm?docId=1652&docType=9 前N有礼活动开奖消息} */
  interface ActivityCompleted {
    /** 活动id */
    readonly activity_id: number;
    /** 活动开奖标识，0表示未开奖，1表示已开奖 */
    complete_tag: number;
    /** 测试商家 */
    seller_nick: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Paimai {
  /** {@link https://open.taobao.com/tmc.htm?docId=2183&docType=9 阿里拍卖数字商品交易成功消息} */
  interface DigitalTradeSuccess {
    /** 购买数量. */
    amount?: number;
    /** 下单时间 */
    gmt_create?: Date | number | string;
    /** 数交所用户id */
    huid: string;
    /** 商品货号 */
    item_no?: number;
    /** 商品主图 */
    main_pic?: string;
    /** 订单号 */
    order_id: string;
    /** 订单状态 : 1 待支付 ;2 交易成功 */
    status?: number;
    /** 商品名称 */
    title?: string;
    /** 购买总价. 单位分 */
    total_price: number;
    /** 商品单价. 单位分 */
    unit_price?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1457&docType=9 二手车xpos订单生成消息} */
  interface OrderCreate {
    /** 业务类型 1-线下POS订单 2-线上二手车订单 9- 其它订单 */
    biz_code: string;
    /** 外部传入信息 */
    extra_info: string;
    /** 淘宝商品id */
    item_id: number;
    /** 订单id */
    order_id: number | bigint;
    /** 支付时间 */
    pay_time: Date | number | string;
    /** 商品价格(单位:分) */
    price: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1475&docType=9 二手车xpos订单支付完成消息} */
  interface OrderPaid {
    /** 业务类型 1-线下POS订单 2-线上二手车订单 9- 其它订单 */
    biz_code: number;
    /** 外部传入信息 */
    extra_info: string;
    /** 商品ID */
    item_id: number;
    /** 订单ID */
    order_id: number;
    /** 支付完成时间 */
    pay_time: Date | number | string;
    /** 商品价格(单位:分) */
    price: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Profit {
  /** {@link https://open.taobao.com/tmc.htm?docId=1190&docType=9 权益领取结果通知} */
  interface ResultNotify {
    /** 用户手机号码 */
    phone_number: string;
    /** 权益内容 */
    profit_content?: string;
    /** 权益领取成功或失败 */
    profit_success: boolean;
  }
}

/** 淘宝 */
declare namespace Taobao.Punish {
  /** {@link https://open.taobao.com/tmc.htm?docId=1045&docType=9 淘宝处罚消息} */
  interface Forall {
    /** 内容 */
    content?: string;
    /** 消息ID */
    id: string;
    /** messageType */
    message_type?: string;
    /** topic */
    topic?: string;
  }
}

/** 千牛 */
declare namespace Taobao.Qianniu {
  /** {@link https://open.taobao.com/tmc.htm?docId=1740&docType=9 工单评论} */
  interface CreateComment {
    /** 动作 */
    action: string;
    /** 评论id */
    id: number;
    /** 用户id */
    user_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1741&docType=9 工单操作记录} */
  interface CreateLog {
    /** 操作类型 */
    action: string;
    /** 日志id */
    id: number;
    /** 操作人 */
    operator: string;
    /** 流程id */
    process_inst_id: string;
    /** 任务id */
    task_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1739&docType=9 工单创建消息} */
  interface CreateTask {
    /** 动作类型，比如创建工单 */
    action?: string;
    /** 主账号id */
    main_user_id: number;
    /** 工单id */
    process_inst_id?: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Rdc {
  /** {@link https://open.taobao.com/tmc.htm?docId=1197&docType=9 AG退款处理} */
  interface AgDealRefund {
    /** 商家商品编码 */
    outer_item_id: string;
    /** 主订单号 */
    parent_order_id: number;
    /** 退款类型 */
    refund_claim_type: string;
    /** 退款金额/分 */
    refund_fee: number;
    /** 退款编号 */
    refund_id: number;
    /** 退款原因 */
    refund_reason: string;
    /** 退款状态 */
    refund_status: string;
    /** 卖家昵称 */
    seller_nick: string;
  }
}

/** 淘宝交易 */
declare namespace Taobao.Rdcaligenius {
  /** {@link https://open.taobao.com/tmc.htm?docId=1412&docType=9 订单消息} */
  interface OrderMsgSend {
    /** 1=hold单，目前只有1 */
    action_type: number;
    /** 子订单 */
    oid: number | bigint;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单 */
    readonly tid: number | bigint;
  }
}

/** 淘宝交易 */
declare namespace Taobao.Recycle {
  /** {@link https://open.taobao.com/tmc.htm?docId=1973&docType=9 同步前置补贴红包的最新数据} */
  interface OfnPreRedPacketSync {
    /** 旧机单id */
    old_order_id: string;
  }
}

/** 淘宝退款 */
declare namespace Taobao.Refund {
  /** {@link https://open.taobao.com/tmc.htm?docId=2520&docType=9 逆向订单数据同步} */
  interface OrderStatusSync {
    /** 更新时间 */
    modified_time: string;
    /** 外部订单号 */
    out_order_id: string;
    /** 退款单号 */
    refund_order_id: string;
    /** 退款单状态 1:退款单创建;2:卖家同意退款;3:卖家拒绝退款;4:卖家同意退货; 5:买家已寄回;6:退款单完成;7:退款单已取消; */
    refund_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=124&docType=9 屏蔽退款留言消息-无此消息} */
  interface RefundBlockMessage {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=121&docType=9 买家修改退款协议消息} */
  interface RefundBuyerModifyAgreement {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=122&docType=9 买家退货给卖家消息} */
  interface RefundBuyerReturnGoods {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=126&docType=9 退款关闭消息} */
  interface RefundClosed {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=123&docType=9 发表退款留言消息} */
  interface RefundCreateMessage {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=118&docType=9 退款创建消息} */
  interface RefundCreated {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type?: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=119&docType=9 卖家同意退款协议消息} */
  interface RefundSellerAgreeAgreement {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=120&docType=9 卖家拒绝退款协议消息} */
  interface RefundSellerRefuseAgreement {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=127&docType=9 退款成功消息} */
  interface RefundSuccess {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 退款金额 */
    refund_fee: string;
    /** 退款ID */
    readonly refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=125&docType=9 消息已下线} */
  interface RefundTimeoutRemind {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=666&docType=9 退款标记取消消息} */
  interface RefundableCanceled {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=665&docType=9 退款标记创建消息} */
  interface RefundableMarked {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=663&docType=9 申请淘宝介入消息} */
  interface TaobaoInterApplied {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单退款交易编号 */
    oid?: number | bigint;
    /** 退款金额,"100.00"的格式 */
    refund_fee: string;
    /** 退款编号 */
    readonly refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 父订单退款交易编号 */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=664&docType=9 淘宝介入退款消息} */
  interface TaobaoIntervened {
    /** 退款单类型：refund_bill(退款单)，return_bill(退货单),replace_bill(退换货单) */
    bill_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
    /** 子订单退款交易编号 */
    oid?: number | bigint;
    /** 退款金额,用"100.00"的格式 */
    refund_fee: string;
    /** 退款编号 */
    readonly refund_id: number;
    /** 退款阶段类型:onsale(售中),aftersale(售后)。aftersale消息是本次新加类型。 */
    refund_phase: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 父订单退款交易编号 */
    tid: number | bigint;
  }
}

/** 智能制造API */
declare namespace Taobao.Rhino {
  /** {@link https://open.taobao.com/tmc.htm?docId=2153&docType=9 订单发货通知} */
  interface DeliveryUpdate {
    /** 发货单号 */
    delivery_id: string;
    /** 订单BP号 */
    order_number: string;
    /** 状态（finish:完成） */
    status: string;
    /** 租户ID */
    tenant_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1699&docType=9 智能制造-设备状态变更} */
  interface DeviceStatus {
    /** 设备编号 */
    device_id: string;
    /** 租户编号 */
    tenant_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2496&docType=9 裁剪进度变更消息} */
  interface IntegrationCutProgressUpdateMessage {
    /** 消息唯一id */
    auction_id: number;
    /** 裁剪指示单列表 */
    ticket_list: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2537&docType=9 订单工序变更通知消息} */
  interface IntegrationOrderProcessUpdateMessage {
    /** 消息唯一id */
    auction_id: number;
    /** 订单编号 */
    order_no: string;
    /** 产品名称 */
    product_name: string;
    /** 款式编号 */
    style_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2494&docType=9 外协订单创建消息通知} */
  interface IntegrationOuterOrderCreateMessage {
    /** 消息唯一id */
    auction_id: number;
    /** 计数来源 */
    count_source?: string;
    /** 入库类型 */
    enter_type?: string;
    /** 外协订单编号 */
    outer_order_id: string;
    /** 自制类型 */
    outer_type?: string;
    /** 外协订单明细 */
    plans?: string;
    /** 备注 */
    remark?: string;
    /** 供应商名称 */
    supplier_name?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2495&docType=9 外协进度变更消息} */
  interface IntegrationOuterProgressUpdateMessage {
    /** 消息唯一id */
    auction_id: number;
    /** 外协订单编号 */
    outer_order_id: string;
    /** 计划单列表 */
    plan_order_list: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2150&docType=9 生产订单状态变化通知} */
  interface OrderStatusUpdate {
    /** 采购订单 */
    biz_id_purchase_order: string;
    /** 订单BP号 */
    order_number: string;
    /** 订单状态-WAIT_DTECH-已创建；WAIT_PLAN:待排产；WAIT_PRODUCTION：待生产；PRODUCING:生产中；CLOSED:生产关闭 */
    status: string;
    /** 租户ID */
    tenant_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2164&docType=9 犀牛制造采购订单创建} */
  interface PurchaseOrderCreate {
    /** 采购订单号 */
    biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2180&docType=9 犀牛智造自动验布机质检结果更新消息} */
  interface QcResultUpdate {
    /** 设备id */
    device_id: string;
    /** 物料id */
    material_id: string;
    /** 消息所属租户id */
    tenant_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2152&docType=9 订单入库通知} */
  interface WarehouseUpdate {
    /** 入库单号 */
    inbound_id: string;
    /** 订单BP号 */
    order_number: string;
    /** 入库单状态（finish_inboud：完成） */
    status: string;
    /** 租户ID */
    tenant_id: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Sec {
  /** {@link https://open.taobao.com/tmc.htm?docId=1152&docType=9 无量尺风控信息同步支付宝} */
  interface WlcAlipaySync {
    /** EC_qd_risk_consult_result */
    event_code: string;
    /** 风险信息 */
    event_payload: string;
    /** 无量尺扫描ID,总是以wlc.开头 */
    gid: string;
    /** uct */
    topic: string;
    /** apprisk或者smsrisk */
    type: string;
    /** UMID */
    umid: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Shop {
  /** {@link https://open.taobao.com/tmc.htm?docId=1044&docType=9 淘宝店铺变更} */
  interface Vary {
    /** 内容 */
    content?: string;
    /** 消息ID */
    id: string;
    /** messageType */
    message_type?: string;
    /** topic */
    topic?: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Shoptransfer {
  /** {@link https://open.taobao.com/tmc.htm?docId=1551&docType=9 过户结果消息} */
  interface UniTrans {
    /** 过户场景枚举 */
    biz_scene: number;
    /** 消息id */
    message_id: string;
    /** 过户记录id */
    record_id: string;
    /** 过户结果枚举 */
    trans_result: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Sinian {
  /** {@link https://open.taobao.com/tmc.htm?docId=874&docType=9 似年测试消息服务} */
  interface Test {
    /** appKey */
    appkey: string;
    /** 消息Id */
    msg_id: number;
    /** 消息的用户名称 */
    user_name: string;
  }
}

/** 平台消息 */
declare namespace Taobao.Smartapp {
  /** {@link https://open.taobao.com/tmc.htm?docId=2371&docType=9 用户订阅变更消息} */
  interface AppSubChange {
    /** 应用id */
    app_id: string;
    /** 对接应用名称列表 */
    cooperation_list: string[];
    /** open_uid */
    open_uid: string;
    /** 场景code */
    screen_code: string;
    /** 订阅状态，ON:开启 ，OFF:关闭 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2450&docType=9 智能应用服务登记数据变更消息} */
  interface DataSync {
    /** 智能应用ID */
    app_id: number;
    /** 操作类型，包含INSERT、UPDATE、DELETE */
    operation_type: string;
    /** 表记录ID */
    record_id: string;
    /** 表id */
    table_id: string;
    /** 表中文名称 */
    table_name: string;
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2397&docType=9 智能应用开放生意参谋诊断指标} */
  interface DiagnosticMetrics {
    /** 消息key */
    id: number;
    /** 指标名称 */
    metric_name: string;
    /** 移动端处理url */
    mobile_action_url: string;
    /** pc端处理url */
    pc_action_url: string;
    /** 商家userid */
    user_id: number;
    /** 商家淘宝nick */
    user_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2529&docType=9 淘宝智能应用订单预警事件} */
  interface OrderAlert {
    /** 操作链接 */
    action: string;
    /** 预警任务类型 */
    alert_type: string;
    /** 预警任务ID */
    event_id: string;
    /** 预警任务名称 */
    flow_name: string;
    /** 订单号 */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2414&docType=9 淘宝智能应用预售尾款截止短信催付} */
  interface PresellEnd {
    /** 买家openId */
    buyer_open_uid: string;
    /** 预售尾款截止时间 */
    pay_end_time?: number | bigint;
    /** 预售尾款开始时间 */
    pay_start_time?: number | bigint;
    /** 订单号 */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2413&docType=9 淘宝智能应用预售开始短信催付} */
  interface PresellStart {
    /** 买家openId */
    buyer_open_uid: string;
    /** 尾款支付截止时间 */
    pay_end_time?: number | bigint;
    /** 尾款支付开始时间 */
    pay_start_time?: number | bigint;
    /** 订单号 */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2447&docType=9 定时任务消息} */
  interface SchedulerTask {
    /** 事件执行时间 */
    event_time?: Date | number | string;
    /** 消息发送时间 */
    send_time?: Date | number | string;
    /** 定时任务ID */
    sub_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2395&docType=9 淘宝智能应用短信发送触发} */
  interface SendMsg {
    /** 工作流定义ID */
    process_definition_id: string;
    /** 商家openId */
    seller_open_uid: string;
    /** 订单号 */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2478&docType=9 智能应用服务登记工作表变更消息} */
  interface TableSync {
    /** 智能应用ID */
    app_id: number;
    /** 表id */
    table_id: string;
    /** 表中文名称 */
    table_name: string;
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2368&docType=9 智能应用工作表数据操作消息} */
  interface WorktableRecord {
    /** 智能应用ID */
    app_id: string;
    /** 操作后数据 */
    new_record?: string;
    /** 操作前数据 */
    original_record?: string;
    /** 数据行ID */
    record_id?: string;
    /** 智能应用工作表名称 */
    table_name: string;
    /** 时间戳 */
    timestamp: number;
    /** 操作类型 */
    type: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Smartmall {
  /** {@link https://open.taobao.com/tmc.htm?docId=1614&docType=9 商品已分配消息} */
  interface ItemAssigned {
    /** 活动ID */
    activity_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1615&docType=9 发货物流通知} */
  interface Logistic {
    /** 活动Id */
    activity_id: number;
    /** 商品物流信息 */
    item_info: string;
    /** 物流ID，注意这个ID不是物流单号，该字段已作废 */
    logistics_id?: number;
    /** 仓库ID */
    warehouse_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1630&docType=9 付款成功消息} */
  interface PaySuccess {
    /** 扩展字段 */
    extend: string;
    /** 订单号 */
    out_trade_no: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Supp {
  /** {@link https://open.taobao.com/tmc.htm?docId=1046&docType=9 猫超供应链打款} */
  interface Payment {
    /** 内容 */
    content?: string;
    /** 消息ID */
    id: string;
    /** messageType */
    message_type?: string;
    /** topic */
    topic?: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Survey {
  /** {@link https://open.taobao.com/tmc.htm?docId=1375&docType=9 悉牛问卷答案提交通知} */
  interface AnswerNotify {
    /** 回答记录编号 */
    rid: string;
  }
}

/** 导购平台 */
declare namespace Taobao.Tae {
  /** {@link https://open.taobao.com/tmc.htm?docId=675&docType=9 商品信息变更} */
  interface BaichuanAuctionChange {
    /** 对应的是一个由Map转换为的json串，现在只有itemStatus（商品状态）这一个key，对应的value有两个：-1（商品状态不可用）和1（商品状态可用） */
    auction_change_info: string;
    /** 商品混淆Id */
    open_iid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=681&docType=9 交易关闭} */
  interface BaichuanTradeClosed {
    /** 商品列表，类型为List。其中每个商品对应一个Map，包含商品模糊Id(auction_id)，商品标题(auction_title)，商品缩略图(auction_pict_url) 、子订单号(detail_order_id)、商品数量(auction_amount)几个字段。注意：auction_pict_url为相对路径，需要拼接host。 */
    auction_infos: string;
    /** 轻服务打点信息 */
    bc_trace?: string;
    /** 买家混淆id */
    buyer_id: string;
    /** 订单创建时间 */
    create_order_time?: string;
    /** 扩展字段 */
    extre?: string;
    /** 电子凭证类订单标示。true：是电子凭证类订单；空or false：不是电子凭证类订单。 */
    is_eticket?: boolean;
    /** 主订单Id */
    order_id: string;
    /** 订单状态 */
    order_status: string;
    /** 买家实付金额、单位元。格式： 100.00 */
    paid_fee: string;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺名称 */
    shop_title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=673&docType=9 创建订单} */
  interface BaichuanTradeCreated {
    /** 商品列表，类型为List。其中每个商品对应一个Map，包含商品模糊Id(auction_id)，商品标题(auction_title)，商品缩略图(auction_pict_url) 三个字段。注意：auction_pict_url为相对路径，需要拼接host。 */
    auction_infos?: string;
    /** 百川轻服务埋点信息 */
    bc_trace?: string;
    /** 买家混淆id */
    buyer_id: string;
    /** 订单创建时间 */
    create_order_time?: string;
    /** 扩展字段 */
    extre?: string;
    /** 电子凭证类订单标示。true：是电子凭证类订单；空or false：不是电子凭证类订单。 */
    is_eticket?: boolean;
    /** 主订单Id */
    order_id: string;
    /** 订单状态：1-等待买家付款,2-等待卖家发货,6-交易成功 */
    order_status: string;
    /** 买家实付金额、单位元。格式： 100.00 */
    paid_fee: string;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺名称 */
    shop_title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=677&docType=9 付款成功} */
  interface BaichuanTradePaidDone {
    /** 商品列表类型为List其中每个商品对应一个Map包含商品模糊Id(auction_id)商品标题(auction_title)商品缩略图(auction_pict_url)这是auction_infos这个字段的描述 */
    auction_infos: string;
    /** 百川轻服务埋点信息 */
    bc_trace?: string;
    /** 买家混淆ID */
    buyer_id: string;
    /** 订单创建时间 */
    create_order_time?: string;
    /** 预留字段，ISV个性化业务 */
    extre?: string;
    /** 电子凭证类订单标示。true：是电子凭证类订单；空or false：不是电子凭证类订单。 */
    is_eticket?: boolean;
    /** 订单ID */
    order_id: string;
    /** 订单状态 */
    order_status: string;
    /** 订单金额 */
    paid_fee: string;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺名称 */
    shop_title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=749&docType=9 创建退款消息} */
  interface BaichuanTradeRefundCreated {
    /** 商品id */
    auction_id: string;
    /** 买家混淆ID */
    buyer_id: string;
    /** 预留字段，ISV个性化需求字段 */
    extre: string;
    /** 子订单ID */
    oid: string;
    /** 退款金额，单位分 */
    refund_fee: string;
    /** 退款单ID */
    refund_id: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=676&docType=9 退款成功} */
  interface BaichuanTradeRefundSuccess {
    /** 商品id */
    auction_id?: string;
    /** 买家混淆ID */
    buyer_id: string;
    /** 预留字段，ISV个性化业务扩展属性 */
    extre: string;
    /** 子订单ID */
    oid: string;
    /** 退款金额 */
    refund_fee: string;
    /** 退款单ID */
    refund_id: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=658&docType=9 交易成功} */
  interface BaichuanTradeSuccess {
    /** 商品列表，类型为List；其中每个商品对应一个Map，包含商品模糊Id(auction_id)，商品标题(auction_title)，商品缩略图(auction_pict_url)这是auction_infos这个字段的描述 */
    auction_infos: string;
    /** 订单创建时间 */
    create_order_time?: string;
    /** 扩展字段 */
    extre?: string;
    /** 电子凭证类订单标示。true：是电子凭证类订单；空or false：不是电子凭证类订单 */
    is_eticket?: boolean;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺名称 */
    shop_title?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=909&docType=9 商品删除消息} */
  interface ItemDelete {
    /** 商品id */
    item_id: string;
    /** 商品title */
    item_title?: string;
    /** 删除动作发生时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=910&docType=9 商品下架} */
  interface ItemDownShelf {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** 下架发生时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=911&docType=9 商品主图变更} */
  interface ItemImageChange {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 主图变更的时间戳 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=906&docType=9 订阅的商品变更消息} */
  interface ItemPriceChange {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 消息发生的时间戳 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=912&docType=9 sku删除} */
  interface ItemSkuDelete {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** sku描述 */
    sku_desc?: string;
    /** skuId */
    sku_id: string;
    /** 删除sku的时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=914&docType=9 sku发布} */
  interface ItemSkuPublish {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 发布sku时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=917&docType=9 商品sku售空} */
  interface ItemSkuSoldOut {
    /** itemId */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** sku 描述 */
    sku_desc?: string;
    /** skuId */
    sku_id: string;
    /** 售空时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=916&docType=9 商品售空} */
  interface ItemSoldOut {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** 卖空时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=918&docType=9 商品订阅成功} */
  interface ItemSubscribe {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 订阅时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=915&docType=9 商品标题变更} */
  interface ItemTitleChange {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 商品标题修改时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=919&docType=9 取消商品订阅} */
  interface ItemUnSubscribe {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** 删除消息发送的时间 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=913&docType=9 商品上架} */
  interface ItemUpShelf {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 商品上架时间 */
    timestamp: Date | number | string;
  }
}

/** 淘宝电视 */
declare namespace Taobao.Taotv {
  /** {@link https://open.taobao.com/tmc.htm?docId=856&docType=9 媒资视频下线消息} */
  interface VideoInvalid {
    /** 视频播控信息 */
    license: string;
    /** 视频状态 */
    status: number;
    /** 视频ID */
    video_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=855&docType=9 媒资视频上线消息} */
  interface VideoPublish {
    /** 视频播控信息 */
    license: string;
    /** 视频状态 */
    status: number;
    /** 视频ID */
    video_id: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Tbk {
  /** {@link https://open.taobao.com/tmc.htm?docId=1186&docType=9 媒体内容消息接收API} */
  interface ContentMsgGet {
    /** 内容唯一id */
    content_id: number;
    /** 扩展字段，联系运营 */
    extend?: string;
    /** 内容状态：1 下线 */
    status: number;
    /** 消息发送的时间，以毫秒为单位 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2170&docType=9 淘宝联盟官方单品物料推送} */
  interface ItemMaterialPush {
    /** 优惠券信息-优惠券(元)。若属于预售商品，该优惠券付尾款可用，付定金不可用 */
    coupon_amount: string;
    /** 优惠券信息-优惠券结束时间 */
    coupon_end_time: string;
    /** 优惠券信息-优惠券剩余量 */
    coupon_remain_count: string;
    /** 优惠券信息-优惠券起用门槛，满X元可用。如：满299元减20元 */
    coupon_start_fee: string;
    /** 优惠券信息-优惠券开始时间 */
    coupon_start_time: string;
    /** 商品优惠券链接（凭证） */
    coupon_url: string;
    /** 商品原始链接 */
    detail_url: string;
    /** 推送消息ID */
    floor_id: string;
    /** 是否定向，0：否，1：是 */
    is_directional: string;
    /** 商品ID */
    item_id: string;
    /** 商品主图 */
    pict_url: string;
    /** 商品原价 */
    price: string;
    /** 推送时间 */
    push_time: Date | number | string;
    /** 商品标题 */
    title: string;
    /** 商品活动券后价 */
    zk_final_price: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1593&docType=9 淘礼金实时报表} */
  interface JINGCAITOUTIAOTljReport {
    /** 消息体 消息体，领取成功、冻结和解冻消息体：{rightsRecordId:130,sendSuccessTime:2019-04-24 14:26:23,tbTradeMap:{263793420087036305:{affectFee:10},263793420087036302:{affectFee:10}},rightsId:379HznWr3iIXVxtyx0aaOQ%3D%3D, unid:23867822111,relationId:34341323}，其中 rightsRecordId为红包ID，sendSuccessTime为红包发放成功时间、rightsId为活动ID，tbTradeMap中key为订单ID，value包含下单时间和下单使用的红包面额，或者为取消订单时间和红包金额，unid和relationId为领取红包时淘客传入的扩展字段。 未被领取且过期消息体：{instanceStatus:EXPIRED,unclaimedAmount:5000,unclaimedNum:90,rightsId:I2Hf1LCMKeC9jqYjemE6%2Bg%3D%3D,expiredTime:2019-04-24 14:26:23}。其中rightsId为活动ID，instanceStatus为活动状态，unclaimedAmount为活动剩余金额，unclaimedNum为活动剩余红包个数,expiredTime为活动结束时间。 */
    msg_body: string;
    /** 消息ID */
    msg_id: string;
    /** 消息类型 消息类型，领取成功消息（SUCCESS）、被冻结消息（USED）、被解冻消息（UNFREEZE）、活动未被领取且过期消息（EXPIRED） */
    msg_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1584&docType=9 淘礼金实时报表} */
  interface JUXIAOXITljReport {
    /** 消息体，领取成功、冻结和解冻消息体：{rightsRecordId:130,sendSuccessTime:2019-04-24 14:26:23,tbTradeMap:{263793420087036305:{affectFee:10},263793420087036302:{affectFee:10}},rightsId:379HznWr3iIXVxtyx0aaOQ%3D%3D, unid:23867822111,relationId:34341323}，其中 rightsRecordId为红包ID，sendSuccessTime为红包发放成功时间、rightsId为活动ID，tbTradeMap中key为订单ID，value包含下单时间和下单使用的红包面额，或者为取消订单时间和红包金额，unid和relationId为领取红包时淘客传入的扩展字段。 未被领取且过期消息体：{instanceStatus:EXPIRED,unclaimedAmount:5000,unclaimedNum:90,rightsId:I2Hf1LCMKeC9jqYjemE6%2Bg%3D%3D,expiredTime:2019-04-24 14:26:23}。其中rightsId为活动ID，instanceStatus为活动状态，unclaimedAmount为活动剩余金额，unclaimedNum为活动剩余红包个数,expiredTime为活动结束时间。 */
    msg_body: string;
    /** 消息ID */
    msg_id: string;
    /** 消息类型，领取成功消息（SUCCESS）、被冻结消息（USED）、被解冻消息（UNFREEZE）、活动未被领取且过期消息（EXPIRED） */
    msg_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1583&docType=9 淘礼金实时报表} */
  interface MENGXIAOMITljReport {
    /** 消息体，领取成功、冻结和解冻消息体：{rightsRecordId:130,sendSuccessTime:2019-04-24 14:26:23,tbTradeMap:{263793420087036305:{affectFee:10},263793420087036302:{affectFee:10}},rightsId:379HznWr3iIXVxtyx0aaOQ%3D%3D, unid:23867822111,relationId:34341323}，其中 rightsRecordId为红包ID，sendSuccessTime为红包发放成功时间、rightsId为活动ID，tbTradeMap中key为订单ID，value包含下单时间和下单使用的红包面额，或者为取消订单时间和红包金额，unid和relationId为领取红包时淘客传入的扩展字段。 未被领取且过期消息体：{instanceStatus:EXPIRED,unclaimedAmount:5000,unclaimedNum:90,rightsId:I2Hf1LCMKeC9jqYjemE6%2Bg%3D%3D,expiredTime:2019-04-24 14:26:23}。其中rightsId为活动ID，instanceStatus为活动状态，unclaimedAmount为活动剩余金额，unclaimedNum为活动剩余红包个数,expiredTime为活动结束时间。 */
    msg_body: string;
    /** 消息ID */
    msg_id: string;
    /** 消息类型，领取成功消息（SUCCESS）、被冻结消息（USED）、被解冻消息（UNFREEZE）、活动未被领取且过期消息（EXPIRED） */
    msg_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2366&docType=9 淘宝客-服务商-pub派单消息发送} */
  interface PubOrderDispatch {
    /** 扩展信息参数 */
    ext_param?: string;
    /** 发送的物料消息id */
    id: string;
    /** 物料对应的联盟新商品id */
    item_id: string;
    /** 物料营销信息 */
    material_info: string;
    /** 物料图片URL，多个图片用英文逗号分隔 */
    material_pic?: string;
    /** 状态 0取消 1新增 2修改 */
    material_status: string;
    /** 素材类型 素材类型,社群素材/朋友圈素材 */
    material_type: string;
    /** 推送物料使用时间 */
    material_use_time: Date | number | string;
    /** 物料视频URL，多个视频用英文逗号分隔 */
    material_video?: string;
    /** 物料视频封面图片URL，多个图片用英文逗号分隔 */
    material_video_pic?: string;
    /** 淘宝客账户memberid */
    tk_pub_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1585&docType=9 淘礼金报表API} */
  interface YOUSHITljReport {
    /** 消息体，领取成功、冻结和解冻消息体：{rightsRecordId:130,sendSuccessTime:2019-04-24 14:26:23,tbTradeMap:{263793420087036305:{affectFee:10},263793420087036302:{affectFee:10}},rightsId:379HznWr3iIXVxtyx0aaOQ%3D%3D, unid:23867822111,relationId:34341323}，其中 rightsRecordId为红包ID，sendSuccessTime为红包发放成功时间、rightsId为活动ID，tbTradeMap中key为订单ID，value包含下单时间和下单使用的红包面额，或者为取消订单时间和红包金额，unid和relationId为领取红包时淘客传入的扩展字段。 未被领取且过期消息体：{instanceStatus:EXPIRED,unclaimedAmount:5000,unclaimedNum:90,rightsId:I2Hf1LCMKeC9jqYjemE6%2Bg%3D%3D,expiredTime:2019-04-24 14:26:23}。其中rightsId为活动ID，instanceStatus为活动状态，unclaimedAmount为活动剩余金额，unclaimedNum为活动剩余红包个数,expiredTime为活动结束时间。 */
    msg_body: string;
    /** 消息ID */
    msg_id: string;
    /** 消息类型，领取成功消息（SUCCESS）、被冻结消息（USED）、被解冻消息（UNFREEZE）、活动未被领取且过期消息（EXPIRED） */
    msg_type: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Tc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2364&docType=9 物资库存变动} */
  interface MaterialStock {
    /** code */
    node_code: string;
    /** WAREHOUSE("仓"), CFC("CFC"), DP("配送站"), TMS("运输/司机"), */
    node_type: string;
    /** DRF-大润发 */
    ownership_institution: string;
    /** 处理列表 */
    processing_list: string;
    /** 时间戳 */
    timestamp: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Test {
  /** {@link https://open.taobao.com/tmc.htm?docId=2191&docType=9 taobao_test_ChengfeiDirect} */
  interface ChengfeiDirect {
    /** buyer_id不转换 */
    buyer_id: number;
    /** buyer_id转换uid */
    buyer_id_turn?: string;
    /** buyer_id转换uid无效 */
    buyer_id_turn_none: number;
    /** buyer_id不混淆 */
    buyer_nick?: string;
    /** buyer_nick模糊化 */
    buyer_nick_turn?: string;
    /** 必填id */
    id: string;
    /** 测试字段 */
    test?: string;
    /** 测试必填 */
    test_must: string;
    /** 由user_id_1自动 groovy复制 */
    user_id_1_cp?: number;
    /** 由user_id_1自动 groovy复制 并后续配置加密openUid */
    user_open_uid?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2290&docType=9 taobao_test_EventScheduleOne} */
  interface EventScheduleOne {
    /** id */
    id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2292&docType=9 taobao_test_EventScheduleThree} */
  interface EventScheduleThree {
    /** 1 */
    id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2291&docType=9 taobao_test_EventScheduleTwo} */
  interface EventScheduleTwo {
    /** id */
    id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2329&docType=9 taobao_test_hellollll} */
  interface HelloWorld {
    /** 1 */
    param0: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2294&docType=9 物流消息taobao_test_logistics_TaoNodeTopic} */
  interface TaoNodeTopic {
    /** 1 */
    buyer_id: string;
    /** 1 */
    buyer_nick: string;
    /** 1 */
    iid: string;
    /** 1 */
    oid: string;
    /** 1 */
    seller_id: string;
    /** 1 */
    seller_nick: string;
    /** 1 */
    status: string;
    /** 1 */
    tid: string;
  }
}

/** 平台消息 */
declare namespace Taobao.Top {
  /** {@link https://open.taobao.com/tmc.htm?docId=1317&docType=9 取消授权消息通知} */
  interface AuthCancel {
    /** openId */
    readonly open_id: string;
    /** 用户id */
    user_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2504&docType=9 mqf消息通道} */
  interface MqfNotify {
    /** dataId */
    data_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1534&docType=9 似年测试ONS} */
  interface OnsSinianTest {
    /** 似年test */
    id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=811&docType=9 承仙测试ons} */
  interface Onstest {
    /** id */
    id: number;
    /** key */
    key: string;
    /** value */
    value: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2365&docType=9 工作流执行回调消息} */
  interface ProcessCallback {
    /** 节点名称 */
    node_name?: string;
    /** 工作流运行实例id */
    process_instance_id: string;
    /** 备注 */
    remark?: string;
    /** 错误码 */
    sys_error_code?: string;
    /** 错误信息 */
    sys_error_msg?: string;
    /** 是否成功 */
    sys_success: boolean;
    /** traceId */
    trace_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2378&docType=9 三方应用质量——商家反馈查询} */
  interface SellerFeedbackQuery {
    /** 服务商处理状态，1 无回复 2 新回复 3新回复 */
    comment_status: number;
    /** 反馈时间，yyyy-MM-dd HH:mm:ss */
    day: string;
    /** 反馈 id */
    feedback_id: number;
    /** 反馈对象 */
    feedback_target: string;
    /** 问题描述 */
    issue_content: string;
    /** 问题截图 */
    issue_picture: string;
    /** 店铺 id */
    shop_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2437&docType=9 淘宝-开放平台-数据推送-对单架构升级-对单任务消息} */
  interface TdpCheckOrderAdvance {
    /** 任务唯一标识 */
    biz_id: string;
    /** 所属分组 */
    group_name: string;
    /** 对单任务数据(json string) */
    task_data: string;
    /** 所属topic */
    topic: string;
    /** 任务单次执行traceId */
    trace?: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Topadmin {
  /** {@link https://open.taobao.com/tmc.htm?docId=2383&docType=9 友仔消息测试} */
  interface HelloWorld {
    /** 1/2:退款,3:退货退款,4/6:换货,其他请调api获取详细信息 */
    biz_claim_type: number;
    /** 涉及金额 */
    buyer_refund_fee: number;
    /** 创建时间 */
    create: Date | number | string;
    /** 1:售中, 2:售后 */
    dispute_type: number;
    /** 更新时间 */
    modified: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 退款id(Long)或消息id(字符串) */
    refund_id: number;
    /** 卖家openUid */
    seller_open_uid: string;
    /** 支付单ID */
    tid: number | bigint;
  }
}

/** 平台消息 */
declare namespace Taobao.Topats {
  /** {@link https://open.taobao.com/tmc.htm?docId=613&docType=9 异步任务执行完成} */
  interface TaskComplete {
  }
}

/** 淘宝交易 */
declare namespace Taobao.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1533&docType=9 订单极速放款成功消息} */
  interface AdvanceDisburse {
    /** 买家昵称 */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick?: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1295&docType=9 淘宝上门安装服务费用结算} */
  interface DoorInstallsettle {
    /** 服务采购单ID */
    biz_order_id: number;
    /** 服务费用结算状态，1未核销，2待核销，3已核销，4未核销且中间账户退款 */
    settle_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2351&docType=9 第五个测试API} */
  interface FiveApi {
    /** 商家测试帐号18 */
    nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=680&docType=9 开放交易推进消息} */
  interface OpenTradePush {
    /** 买家昵称 */
    buyer_nick: string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 开放给第三方的状态。当type为e_government_trade时，此字段值表示：1-待审核，2-审核通过，3-审核拒绝，4-审核打回。 */
    third_party_status?: number;
    /** 主订单ID */
    tid: number | bigint;
    /** 交易类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2348&docType=9 第二个测试API} */
  interface SecondApi {
    /** 消息id */
    id: number;
    /** 昵称 */
    nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1984&docType=9 挚涵消息测试} */
  interface Test {
    /** 参数0 */
    param0: string;
    /** 参数1 */
    param1: string;
    /** 参数2 */
    param2: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2335&docType=9 taobao_trade_TestFour} */
  interface TestFour {
    /** ss */
    param0: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2349&docType=9 第三个测试API} */
  interface ThirdApi {
    /** 发送内容 */
    content: string;
    /** 消息id */
    id: number;
    /** 名称 */
    name: string;
    /** 用户昵称 */
    nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=116&docType=9 创建支付宝订单消息} */
  interface TradeAlipayCreate {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 交易状态 */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=105&docType=9 买家付完款，或万人团买家付完尾款} */
  interface TradeBuyerPay {
    /** 分销订单调整金额 */
    adjust_fee?: string;
    /** 支付宝账号 */
    alipay_no?: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 分销商付款金额 */
    distributor_payment?: string;
    /** 分销商账号 */
    distributor_username?: string;
    /** 分销订单ID */
    fenxiao_id: number;
    /** 物流运单号 */
    logistics_id?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 物流邮费 */
    post_fee?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 物流方式 */
    shipping?: number;
    /** 分销子订单ID */
    sub_order_id?: number;
    /** 供应商账号 */
    supplier_username?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 分销订单类型 */
    trade_type?: string;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2322&docType=9 子订单维度付款消息（对外）} */
  interface TradeBuyerPaySubOut {
    /** 子订单id */
    oid: number | bigint;
    /** 卖家id 加密 */
    seller_open_uid: string;
    /** 主订单id */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=674&docType=9 分阶段订单付定金} */
  interface TradeBuyerStepPay {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=115&docType=9 订单信息变更消息} */
  interface TradeChanged {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=104&docType=9 关闭交易消息} */
  interface TradeClose {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 商品修改字段 */
    changed_fields?: string;
    /** 商品库存变化量 */
    increment?: number;
    /** 商品数量 */
    num?: number;
    /** 商品数字ID */
    num_iid: number | bigint;
    /** 子订单ID */
    oid?: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 商品价格 */
    price?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 商品SKU ID */
    sku_id?: number | bigint;
    /** 商品SKU数量 */
    sku_num?: number;
    /** 交易状态。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) SELLER_CONSIGNED_PART(卖家部分发货) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易) PAY_PENDING(国际信用卡支付付款确认中) WAIT_PRE_AUTH_CONFIRM(0元购合约中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 商品标题 */
    title?: string;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=103&docType=9 关闭或修改子订单消息} */
  interface TradeCloseAndModifyDetailOrder {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 退款金额 */
    refund_fee?: string;
    /** 退款ID */
    refund_id?: number | bigint;
    /** 卖家昵称 */
    seller_nick?: string;
    /** 交易状态。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) SELLER_CONSIGNED_PART(卖家部分发货) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易) PAY_PENDING(国际信用卡支付付款确认中) WAIT_PRE_AUTH_CONFIRM(0元购合约中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=101&docType=9 创建淘宝交易消息} */
  interface TradeCreate {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 交易状态 */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2360&docType=9 创建淘宝交易延迟消息} */
  interface TradeCreateDelay {
    /** 订单实付金额 */
    payment: string;
    /** 交易状态 */
    status: string;
    /** 主订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1242&docType=9 双} */
  interface TradeCreatess {
    /** 111 */
    param0: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=107&docType=9 延长收货时间消息} */
  interface TradeDelayConfirmPay {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=114&docType=9 修改交易收货地址消息} */
  interface TradeLogisticsAddressChanged {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=113&docType=9 交易备注修改消息} */
  interface TradeMemoModified {
    /** buyer:更新买家备注,seller:更新卖家备注,other:其他 */
    action_type: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 旗标 */
    seller_flag?: number;
    /** 卖家留言 */
    seller_memo?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=102&docType=9 修改交易费用消息} */
  interface TradeModifyFee {
    /** 买家昵称 */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 退款ID */
    refund_id?: number;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=109&docType=9 子订单打款成功消息} */
  interface TradePartlyConfirmPay {
    /** 退款/退货，可选值：refund_bill/return_bill */
    bill_type?: string;
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 退款修改时间 */
    modified?: Date | number | string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 退款编号 */
    refund_id?: number;
    /** 退款阶段，可选值：onsale/aftersale */
    refund_phase?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=108&docType=9 子订单退款成功消息} */
  interface TradePartlyRefund {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 旺旺通知内容 */
    content?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 旺旺通知标题 */
    subject?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=117&docType=9 交易的部分子订单发货消息} */
  interface TradePartlySellerShip {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2092&docType=9 交易阶段成功消息} */
  interface TradePeriodSuccess {
    /** 买家nick */
    buyer_nick: string;
    /** 子订单id */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家nick */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=112&docType=9 交易评价变更消息} */
  interface TradeRated {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 评价者：枚举buyer,seller,unknown */
    rater?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2323&docType=9 淘宝开发平台内部使用评价变更消息out} */
  interface TradeRatedOut {
    /** 子订单id */
    oid?: number | bigint;
    /** 评价人身份:枚举buyer,seller,unknown */
    rater?: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 支付id */
    tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type?: string;
    /** 用户类型，1 - 淘宝卖家，2 - 天猫卖家 */
    user_type?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=106&docType=9 卖家发货消息} */
  interface TradeSellerShip {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 分销商账号 */
    distributor_username?: string;
    /** 子订单ID */
    oid?: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 分销退款金额 */
    refund_fee?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 交易状态。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) SELLER_CONSIGNED_PART(卖家部分发货) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易) PAY_PENDING(国际信用卡支付付款确认中) WAIT_PRE_AUTH_CONFIRM(0元购合约中) */
    status?: string;
    /** 分销子订单ID */
    sub_order_id?: number | bigint;
    /** 供应商账号 */
    supplier_username?: string;
    /** 淘宝子订单ID */
    tc_order_id?: number | bigint;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=110&docType=9 交易成功消息} */
  interface TradeSuccess {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2362&docType=9 交易成功延迟消息} */
  interface TradeSuccessDelay {
    /** 订单状态 */
    status?: string;
    /** 主订单ID */
    tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=111&docType=9 交易超时提醒消息} */
  interface TradeTimeoutRemind {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单ID */
    oid: number | bigint;
    /** 订单实付金额 */
    payment?: string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值: TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2226&docType=9 API测试} */
  interface Zhihan {
    /** 1 */
    param1: string;
    /** xx */
    param2: string;
    /** 33 */
    param3: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Traderate {
  /** {@link https://open.taobao.com/tmc.htm?docId=783&docType=9 负面印象评价消息} */
  interface ImprBadTag {
    /** 业务类型，0：评价 、3：追评 */
    biz_type: number;
    /** 评价内容 */
    feedback: string;
    /** 评价修改时间 */
    gmt_modified: Date | number | string;
    /** 分析出的短语多个标签用;分隔格式为:[类别1]-[负面]-[标签短语1];[类别2]-[负面]-[标签短语2]如"款式-负面-款式比较旧;尺码-负面-偏小"类别如下：女装：材质、款式、尺码手机：屏幕、性能、外观女装：材质、款式、尺码手机：屏幕、性能、外观 */
    impr_words?: string;
    /** 商品编号 */
    num_iid: number | bigint;
    /** 交易的子订单号，如果没有子订单则为主订单号 */
    oid: number | bigint;
    /** 卖家昵称 */
    seller_nick: string;
    /** 交易的主订单号 */
    tid: number | bigint;
  }
}

/** 淘宝火车票 */
declare namespace Taobao.Train {
  /** {@link https://open.taobao.com/tmc.htm?docId=2105&docType=9 代理商查询信息消息} */
  interface AgentQueryInfoNotify {
    /** 消息主体 */
    content: string;
    /** 唯一标识 */
    id: string;
    /** 查询类型 */
    query_type: string;
    /** 消息发送时间 */
    time_stamp: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2154&docType=9 火车线下票代理商通知} */
  interface OrderNotify {
    /** 消息类型（1 分单 2 余票提醒 3 取消订单 4 修改订单） */
    msg_type: number;
    /** 子订单号 */
    sub_order_ids: number[];
    /** 订单生成时间 */
    timestamp: Date | number | string;
    /** 主订单号 */
    ttp_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1734&docType=9 火车票订单发给带三方接入消息} */
  interface ThirdPartyTradeNotify {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=603&docType=9 火车票订单消息} */
  interface TradeNotify {
  }
}

/** 淘宝 */
declare namespace Taobao.Travelticket {
  /** {@link https://open.taobao.com/tmc.htm?docId=750&docType=9 门票交易消息通知} */
  interface MsgTrade {
    /** 买家淘宝帐号 */
    buyer_nick?: string;
    /** 购买数量 */
    count: number;
    /** 消息类型：买家拍下订单、买家取消订单、买家支付、买家申请退款、退款成功等 */
    msg_type: string;
    /** 淘宝交易订单id */
    order_id: number;
    /** 订单当前状态 */
    order_status?: string;
    /** B2B平台商品唯一标识 */
    outer_id: string;
    /** 卖家淘宝帐号 */
    seller_nick: string;
    /** 供应商支付宝帐号 */
    supplier_id?: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Trip {
  /** {@link https://open.taobao.com/tmc.htm?docId=684&docType=9 航旅会员升级消息} */
  interface PartnerLevelUpMessage {
    /** 用户绑定的酒店会员卡卡号 */
    card_number: string;
    /** （废弃，暂保留）航旅会员升级后会员等级 */
    new_level: string;
    /** 建议接入方升降级的会员等级 */
    new_suggest_level: string;
    /** （废弃，暂保留）航旅会员升级前会员等级 */
    old_level: string;
    /** 用户升降级前的三方会员等级 */
    old_suggest_level: string;
    /** 会员绑定酒店id */
    partner_id: string;
    /** 淘宝会员id，base64加密 */
    user_id: string;
    /** 会员提供商名字 */
    vendor?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=652&docType=9 航旅会员机票延误险消息} */
  interface UserFlightDelayInsurance {
  }
}

/** 业务平台新零售-消息上行 */
declare namespace Taobao.Uscesl {
  /** {@link https://open.taobao.com/tmc.htm?docId=1388&docType=9 设备报警消息接口} */
  interface AlarmCreate {
    /** 消息内容 */
    msg_content: string;
    /** 消息ID */
    msg_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1381&docType=9 电子价签绑定执行结果消息} */
  interface BindResult {
    /** 消息内容 */
    msg_content: string;
    /** 消息ID，唯一 */
    msg_id: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Usergrowth {
  /** {@link https://open.taobao.com/tmc.htm?docId=1433&docType=9 金币游戏专用-好友通过之后发消息} */
  interface IconRelationBind {
    /** 绑定时间 */
    bind_time: string;
    /** 消息id */
    msg_id: string;
    /** 关系类型 */
    relation_type: string;
    /** 来源用户的openId */
    source_id: string;
    /** 状态 */
    status: string;
    /** 目标用的的openId */
    target_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1429&docType=9 好友关系确认消息通知} */
  interface RelationBind {
    /** 绑定时间 */
    bind_time: number;
    /** 消息id */
    msg_id: string;
    /** 关系类型 */
    relation_type: string;
    /** 来源用户的openId */
    source_id: string;
    /** 状态 */
    status: string;
    /** 目标用的的openId */
    target_id: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Verify {
  /** {@link https://open.taobao.com/tmc.htm?docId=834&docType=9 实人认证审核结果} */
  interface AuditResult {
    /** accountId */
    accountid: string;
    /** accounttype */
    accounttype: string;
    /** accountId */
    account_id?: string;
    /** accountType */
    account_type?: string;
    /** appName */
    app_name?: string;
    /** category */
    category?: string;
    /** comments */
    comments?: string;
    /** gmtFinished */
    gmt_finished?: Date | number | string;
    /** source */
    source: string;
    /** status */
    status: string;
    /** subCategory */
    sub_category?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=840&docType=9 发送令牌} */
  interface TokenSend {
    /** 账号 */
    account_id: string;
    /** 账号类型 */
    account_type: string;
    /** 加密身份证 */
    card_no: string;
    /** 来源 */
    source: string;
    /** token */
    token: string;
  }
}

/** 淘宝视频 */
declare namespace Taobao.Video {
  /** {@link https://open.taobao.com/tmc.htm?docId=945&docType=9 淘视频同步视频接口} */
  interface SyncResult {
    /** 视频同步状态，返回值2表示同步成功，3表示同步失败 */
    status?: number;
    /** 同步任务id */
    task_id: string;
    /** 生成的视频id */
    video_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1712&docType=9 淘宝视频转码结果消息} */
  interface VideoTran {
    /** 发布码 */
    biz_code: string;
    /** 业务线 */
    biz_line: string;
    /** 内容id */
    content_id: string;
    /** 结果 */
    is_success: boolean;
    /** 结果原因 */
    reason: string;
  }
}

/** 淘宝VIP */
declare namespace Taobao.Vip {
  /** {@link https://open.taobao.com/tmc.htm?docId=1095&docType=9 会员身份变化} */
  interface LevelChange {
    /** 当前的等级 */
    current_level?: string;
    /** 扩展信息 */
    ext?: string;
    /** 之前的等级 */
    former_level?: string;
    /** 会员名 */
    name?: string;
    /** 外部id */
    open_uid?: string;
  }
}

/** 淘宝点点 */
declare namespace Taobao.Waimai {
  /** {@link https://open.taobao.com/tmc.htm?docId=737&docType=9 点点送抢单结果通知消息} */
  interface GrabOrderResult {
    /** 广播ID */
    broadcast_id: number;
    /** 消息内容（物流单号deliveryOrderNo;广播订单状态rabOrderStatus:1成功|2失败;广播idbroadcast_id） */
    infos: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=758&docType=9 淘点点外卖订单关闭消息通知} */
  interface OrderClose {
    /** 物流单号 */
    delivery_order_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=844&docType=9 点点送订单投诉} */
  interface OrderComplain {
    /** 点点送物流订单号 */
    delivery_order_no: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=845&docType=9 点点送订单撤诉} */
  interface OrderComplainCancel {
    /** 点点送物流订单号 */
    delivery_order_no: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=846&docType=9 点点送订单投诉结果} */
  interface OrderComplainResult {
    /** 投诉处理结果 1成立 2不成立 */
    complain_result: number;
    /** 点点送物流单号 */
    delivery_order_no: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=757&docType=9 点点送订单通知消息} */
  interface OrderDispatch {
    /** 实付金额（单位：分） */
    actually_paid: number;
    /** 城市编码 */
    city_code: string;
    /** 城市名称 */
    city_name: string;
    /** 买家收货地址 */
    consignee_address: string;
    /** 买家姓名 */
    consignee_name: string;
    /** 买家电话 */
    consignee_phone: string;
    /** 配送费（单位：分） */
    delivery_fee: number;
    /** 物流单号 */
    delivery_order_no: number | bigint;
    /** 收货地址经纬度 */
    destination_point: string;
    /** 订单确认结束时间 */
    end_time: number;
    /** 期望送达时间 */
    expected_delivery: number;
    /** 期望取件时间 */
    expected_take_time: number;
    /** 子订单信息 */
    items: string;
    /** 通知时间 */
    notify_time: number;
    /** 订单扩展信息 */
    order_ext_info: string;
    /** 商品数量 */
    quantity: number;
    /** 小票ID */
    receipt_id: string;
    /** 卖家电话 */
    shipper_phone: string;
    /** 店铺经纬度 */
    starting_point: string;
    /** 店铺地址 */
    store_address: string;
    /** 店铺ID */
    store_id: string;
    /** 店铺名称 */
    store_name: string;
    /** 订单标题 */
    title: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=843&docType=9 点点送派单通知} */
  interface OrderDispatchSimple {
    /** 物流订单号 */
    delivery_order_no: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=735&docType=9 点点送接单广播通知消息} */
  interface OrderPush {
    /** 广播ID */
    broadcast_id: number;
    /** 消息内容（广播时间broadcastTime;配送费deliveryFee;物流单号deliveryOrderNo;菜品总数量quantity;店铺经纬度startingPoint;经度longitude;纬度latitude;店铺地址storeAddress;店铺ID storeId;店铺名称storeName;菜品总价格totalAmount;广播ID broadcast_id） */
    infos: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=832&docType=9 点点送催单消息通知} */
  interface OrderRemind {
    /** 催单物流单号 */
    delivery_order_no: string;
    /** 催单消息内容 */
    info: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=807&docType=9 点点送外部订单通知消息} */
  interface OuterOrderDispatch {
    /** 通知时间 */
    notify_time: number;
    /** 订单扩展信息 */
    order_ext_info: string;
    /** 外单交易号 */
    record_id: number | bigint;
    /** 店铺地址 */
    store_address: string;
    /** 店铺ID */
    store_id: string;
    /** 店铺名称 */
    store_name: string;
    /** 卖家电话 */
    store_phone: string;
    /** 店铺经纬度 */
    store_point: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Wangwang {
  /** {@link https://open.taobao.com/tmc.htm?docId=301&docType=9 主子账号之间旺旺消息发送} */
  interface OANotify {
  }
}

/** 淘宝 */
declare namespace Taobao.Wdktms {
  /** {@link https://open.taobao.com/tmc.htm?docId=1192&docType=9 配送员消息推送} */
  interface Deliverer {
    /** 配送员编号 */
    out_deliverer_id: string;
    /** 揽收时间 */
    take_time: Date | number | string;
    /** 订单号 */
    waybill_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1123&docType=9 运力消息} */
  interface SendDemand {
    /** 消息类型 */
    message_type: string;
    /** 消息体json内容 */
    messgae_body: string;
    /** 消息线程traceId */
    trace_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1124&docType=9 运单变更消息通知外部系统} */
  interface Waybill {
    /** 消息类型 */
    message_type: string;
    /** 消息内容，JSON字符串 */
    messgae_body: string;
    /** 消息业务ID */
    trace_id: string;
  }
}

/** 智慧门店下行消息 */
declare namespace Taobao.Wisdomstore {
  /** {@link https://open.taobao.com/tmc.htm?docId=1253&docType=9 人脸抓拍识别消息} */
  interface RecognitionNotice {
    /** 设备code */
    device_code: string;
    /** 人脸ID */
    face_id?: string;
    /** 附加人脸特征信息，JSON字符串 */
    feature?: string;
    /** 识别图片地址 */
    image_recognition_url: string;
    /** 标准图片地址 */
    image_standard_url: string;
    /** 消息ID */
    message_id: string;
    /** 门店ID */
    store_id: string;
    /** 用户性别。M表示男，F表示女，无表示保密 */
    user_gender?: string;
    /** 用户真实名 */
    user_name?: string;
    /** 用户名 */
    user_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1278&docType=9 人脸识别结果回传ISV} */
  interface RecognitionPush {
    /** 设备code */
    device_code: string;
    /** 人脸ID */
    face_id?: string;
    /** 附加人脸特征信息，JSON字符串 */
    feature?: string;
    /** 识别图片地址 */
    image_recognition_url: string;
    /** 标准图片地址 */
    image_standard_url: string;
    /** 消息ID */
    message_id: string;
    /** 门店ID */
    store_id: string;
    /** 用户性别。M表示男，F表示女，无表示保密 */
    user_gender?: string;
    /** 用户真实名 */
    user_name: string;
    /** 用户名 */
    user_nick: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Wms {
  /** {@link https://open.taobao.com/tmc.htm?docId=669&docType=9 WMS预约单状态回传} */
  interface ReserveStatusCallback {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=670&docType=9 到货通知单收货确认} */
  interface ReserveStockInOrderConfirm {
  }
}

/** 淘宝 */
declare namespace Taobao.Worktable {
  /** {@link https://open.taobao.com/tmc.htm?docId=2367&docType=9 智能应用工作表数据新增} */
  interface InsertData {
    /** 智能应用ID */
    app_id: string;
    /** 新增数据 */
    records: string;
    /** 智能应用工作表名称 */
    table_name: string;
    /** 时间戳 */
    timestamp: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Wt {
  /** {@link https://open.taobao.com/tmc.htm?docId=1176&docType=9 礼包交易开放消息同步支付宝话费宝侧} */
  interface OpenTradeMsg {
    /** 预授权冻结编号 */
    auth_no?: string;
    /** 商户的预授权资金订单号 */
    auth_order_no?: string;
    /** 商户的预授权资金操作流水号 */
    auth_request_no?: string;
    /** 合约id，由话费宝平台分配 */
    contract_id?: string;
    /** 订单名称 */
    name?: string;
    /** 运营商名称 */
    operator?: string;
    /** 手机号码 */
    phone?: string;
    /** 阿里侧虚拟产品Id */
    product_id?: string;
    /** 办理结果描述 */
    result_desc?: string;
    /** 订单状态: 0-代付款 1-支付成功 2-合约办理成功 3-合约办理失败 */
    status: string;
    /** 淘宝id */
    taobao_id: string;
    /** 天猫订单号 */
    tmall_order_id: string;
    /** 充值金额，单位分 */
    total_fee: string;
    /** 请求流水号 */
    transfer_id?: string;
    /** 支付宝UID */
    user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1775&docType=9 存送业务预授权操作结果通知} */
  interface OpenTradePreauthorizMsg {
    /** 操作周期 */
    operator_cycle: string;
    /** 操作结果 */
    operator_status: boolean;
    /** 操作类型:正常履约OPENTRADE_KEEP_ORDER/宽限期内违约OPENTRADE_DISTROY_ONMONTH_ORDER/解除合约OPENTRADE_DISTROY_ALL_ORDER/订购失败释放冻结OPENTRADE_ORDER_OFFER_FAIL */
    operator_type: string;
    /** 淘宝订单号 */
    tmall_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2109&docType=9 开放交易任务完成消息} */
  interface OpenTradeTaskMsg {
    /** 业务类型 */
    biz_type: string;
    /** 订单状态 */
    order_status: string;
    /** 天猫订单号 */
    tmall_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1036&docType=9 阿里通信实人认证主动通知运营商} */
  interface VerifyInform {
    /** 地址信息，可能为空 */
    address?: string;
    /** 认证时间，可能为空 */
    auth_time?: string;
    /** 背面照，有效期15分钟，需要对接网关 */
    card_back_path?: string;
    /** 正面照,有效期为15分钟，需要对接网关 */
    card_front_path?: string;
    /** 手持照,有效期为15分钟，过时间以后需要到另外的拉取接口重新获取照片信息，下同，需要对接网关 */
    card_in_hand_path?: string;
    /** 证件号码 */
    card_num?: string;
    /** 证件类型，目前仅支持身份证 */
    card_type?: string;
    /** 用户名称 */
    cust_name: string;
    /** 订单id，线上实人认证为淘宝交易订单，线下实人认证为外部订单号 */
    order_id?: string;
    /** 实人认证状态 0-初始化 1-审核中 2-审核失败 3-审核成功，目前只有审核成功才会发消息出来 */
    verify_status: string;
  }
}

/** 酒店标准库基础信息变更消息 */
declare namespace Taobao.Xhotel {
  /** {@link https://open.taobao.com/tmc.htm?docId=2569&docType=9 通用分销 标准信息变更消息} */
  interface DistributionStdInfoChange {
    /** 消息id */
    msg_id: string;
    /** 产生变更的标准酒店id */
    shids: string;
  }
}

/** 闲鱼 */
declare namespace Taobao.Xianyu {
  /** {@link https://open.taobao.com/tmc.htm?docId=1633&docType=9 闲鱼房源预约消息} */
  interface HouseBooking {
    /** 预约房源id */
    house_id: number;
    /** 发起预约的租客id */
    user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1495&docType=9 闲鱼租房订单支付} */
  interface RentBillPaid {
    /** 账单实付金额，单位分 */
    actual_fee: number;
    /** 账期结束时间 */
    bill_end_time: Date | number | string;
    /** 账期开始时间 */
    bill_start_time: Date | number | string;
    /** 账单期数 */
    bill_term: number;
    /** 合约id */
    contract_id: string;
    /** 房源id */
    house_id: number;
    /** 账单支付时间 */
    payment_time: Date | number | string;
    /** 支付宝订单id */
    pay_order_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1494&docType=9 闲鱼租房合约创建} */
  interface RentContractCreate {
    /** 合约id */
    contract_id: string;
    /** 房源id */
    house_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1622&docType=9 买家取消预约归还} */
  interface RentalItemReturnCanceled {
    /** 订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1621&docType=9 买家预约上门取件} */
  interface RentalItemReturnReserved {
    /** 订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1620&docType=9 租赁订单取消} */
  interface RentalOrderCanceled {
    /** 租赁订单id */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1619&docType=9 租赁订单创建} */
  interface RentalOrderCreated {
    /** 订单id */
    order_id: number;
  }
}

/** 淘宝 */
declare namespace Taobao.Xiaoqu {
  /** {@link https://open.taobao.com/tmc.htm?docId=1007&docType=9 订单变更通知} */
  interface OrderChange {
    /** 不同类目服务的扩展字段 */
    attribute?: string;
    /** 用户唯一id */
    open_uid?: string;
    /** 代表有订单发生变更 */
    order_type: string;
    /** 外部订单id */
    outer_orderid?: string;
    /** 暂时无用 */
    price?: string;
    /** 消息产生原因 */
    reason?: string;
    /** 门店id */
    store_id?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=985&docType=9 订单关闭通知} */
  interface OrderClose {
    /** 扩展字段 */
    attribute?: string;
    /** 用户唯一id */
    open_uid?: string;
    /** 订单关闭 */
    order_type: string;
    /** 外部订单id，暂时无用 */
    outer_orderid?: string;
    /** 订单价格 */
    price?: string;
    /** 订单产生的原因 */
    reason?: string;
    /** 订单商品所属门店id */
    store_id?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=983&docType=9 创建订单消息通知} */
  interface OrderCreate {
    /** 不同类目服务的扩展字段 */
    attribute?: string;
    /** 用户唯一id */
    open_uid?: string;
    /** 0代表创单 */
    order_type: string;
    /** 外部订单id */
    outer_orderid?: string;
    /** 暂时无用 */
    price?: string;
    /** 原因 */
    reason?: string;
    /** 订单商品所属门店id */
    store_id?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=986&docType=9 订单正常完成通知} */
  interface OrderFinish {
    /** 扩展字段 */
    attribute?: string;
    /** 用户唯一id */
    open_uid?: string;
    /** 代表订单完成 */
    order_type: string;
    /** 外部订单id，暂时无用 */
    outer_orderid?: string;
    /** 订单价格 */
    price?: string;
    /** 订单产生的原因 */
    reason?: string;
    /** 订单商品所属门店id */
    store_id?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1099&docType=9 订单打包完成通知} */
  interface OrderPackage {
    /** 扩展信息 */
    attribute?: string;
    /** 订单所属门店id */
    store_id?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 打包完成发送通知时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=984&docType=9 买家付款消息通知} */
  interface OrderPay {
    /** 扩展信息 */
    attribute?: string;
    /** 用户唯一id */
    open_uid?: string;
    /** 代表是付款消息 */
    order_type: string;
    /** 外部id，暂时无用 */
    outer_orderid?: string;
    /** 订单中价格 */
    price?: string;
    /** 订单产生的原因 */
    reason?: string;
    /** 订单商品所属门店id */
    store_id?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单付款时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=961&docType=9 通知合作伙伴订单发生变化} */
  interface OrderPorcess {
    /** 用户的服务地址 */
    address?: string;
    /** 不同类目服务的扩展字段 */
    attribute?: string;
    /** 城市6位编码 */
    city_code?: string;
    /** 城市名称 */
    city_name?: string;
    /** 服务时长 */
    duration?: string;
    /** 订单商品所属类目(区分保洁还是美甲等) */
    item_catid?: string;
    /** 用户所在地经纬度 (经度,纬度)，“,”分割 */
    location?: string;
    /** 订单类型 0:创单 1:付款 2:订单关闭 3:订单完成 */
    order_type: string;
    /** 外部订单id */
    outer_orderid?: string;
    /** 价格 */
    price?: string;
    /** 原因 */
    reason?: string;
    /** 用户备注 */
    remark?: string;
    /** 服务开始时间 */
    service_starttime?: string;
    /** 淘宝订单id */
    taobao_orderid: string;
    /** 订单状态发生变化的时间 */
    time?: string;
    /** 用户联系电话 */
    user_phone?: string;
  }
}

/** IOT-智能制造 */
declare namespace Taobao.Xiaowei {
  /** {@link https://open.taobao.com/tmc.htm?docId=1791&docType=9 获取推送消息} */
  interface Message {
    /** 时间 */
    date: Date | number | string;
    /** id */
    id: number;
    /** 消息 */
    message: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2030&docType=9 xiaowe测试消息} */
  interface Test {
    /** 涉及金额 */
    buyer_refund_fee: string;
    /** 卖家openUid */
    seller_open_uid: string;
  }
}

/** 淘宝 */
declare namespace Taobao.Yichao {
  /** {@link https://open.taobao.com/tmc.htm?docId=2462&docType=9 蚁巢保修码状态变更消息} */
  interface WarrantyCodeStatusUpdate {
    /** 保修码OSS文件名 */
    oss_file_name: string;
    /** 保修码OSS文件下载链接 */
    oss_file_url: string;
    /** 保修码状态 */
    status: string;
  }
}

/** 淘宝真酷 */
declare namespace Taobao.Zk {
  /** {@link https://open.taobao.com/tmc.htm?docId=2599&docType=9 淘宝真酷-云鉴定创建通知} */
  interface CloudIdentifyCreateNotify {
    /** 货品鉴别单号 */
    biz_identify_order_id: string;
    /** 品牌id */
    brand_id?: string;
    /** 品牌名称 */
    brand_name?: string;
    /** 检测点 */
    check_point?: string;
    /** 货号 */
    goods_number?: string;
    /** 机构id */
    identify_institution_id: string;
    /** 货品鉴别id */
    identify_order_id: string;
    /** 需求鉴别id */
    identify_request_id: string;
    /** 行业id */
    industry_id?: string;
    /** 行业名称 */
    industry_name?: string;
    /** 商品id */
    item_id?: string;
    /** 是否二次鉴别 */
    resale?: boolean;
    /** skuId */
    sku_id?: string;
    /** sku名称 */
    sku_name?: string;
    /** 商品名称 */
    title?: string;
    /** 订单号 */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2612&docType=9 淘宝真酷二次鉴别通知} */
  interface CloudIdentifyResaleNotify {
    /** 货品鉴别单号 */
    identify_order_id: string;
    /** 鉴别请求单号 */
    identify_request_id: string;
    /** 是否二次鉴别 */
    resale: boolean;
    /** 变更时间 */
    time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2581&docType=9 淘宝真酷一段物流发货消息} */
  interface FirstLogisticsNotify {
    /** 鉴定机构id */
    identify_institution_id: string;
    /** 一段物流单号 */
    identify_logistics_id: string;
    /** 订单id */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2588&docType=9 一段物流签收通知} */
  interface FirstLogisticsReceivedNotify {
    /** 鉴定机构id */
    identify_institution_id: string;
    /** 一段物流单号 */
    identify_logistics_id: string;
    /** 订单id */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2616&docType=9 淘宝真酷-一段运单号修改消息} */
  interface FirstLogisticsUpdateNotify {
    /** 货品鉴别单id */
    identify_order_id: string;
    /** 需求鉴别单号 */
    identify_request_id: string;
    /** 运单号(修改后) */
    new_mail_no?: string;
    /** 运单号(修改前) */
    old_mail_no?: string;
    /** 订单号 */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2571&docType=9 淘宝真酷需求鉴别单创建消息} */
  interface IdentifyCreate {
    /** 鉴定机构id */
    identify_institution_id: string;
    /** 货品鉴别单id，多个以逗号分隔 */
    identify_order_id_list: string;
    /** 需求鉴别单id */
    identify_request_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2620&docType=9 淘宝真酷鉴别单暂停通知} */
  interface PauseNotify {
    /** 货品鉴别单号 */
    biz_identify_order_id: string;
    /** 需求鉴别单号 */
    biz_identify_request_id: string;
    /** 是否暂停 */
    is_pause: boolean;
    /** 订单号 */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2589&docType=9 真酷鉴定用户退款通知} */
  interface RefundNotify {
    /** 鉴定机构id */
    identify_institution_id: string;
    /** 物流单号 */
    identify_logistics_id: string;
    /** 订单id */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2590&docType=9 淘宝真酷二段寄出后揽收通知机构} */
  interface SecondLogisticsGotNotify {
    /** 鉴定机构id */
    identify_institution_id: string;
    /** 物流单号 */
    identify_logistics_id: string;
    /** 订单id */
    tp_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2593&docType=9 真酷供应商提交报价结果通知} */
  interface SubmitQuote {
    /** 返回结果 */
    data: string;
    /** 用户id */
    user_id: string;
  }
}
