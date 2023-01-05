/** AliGenius */
declare namespace Taobao.Ag {
  /** 商家在AG的签收信息 */
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
}

/** 平台消息 */
declare namespace Taobao.Aps {
  /** 百川反馈-开发者/客服回复 */
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

  /** 收到舆情 */
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

/** 阿信消息通知前台类目 */
declare namespace Taobao.Axin {
  /** 阿信退款回调消息 */
  interface RefundCallBack {
    /** 外部订单号 */
    outer_order_id: string;
    /** 是否全部成功 */
    result: boolean;
  }
}

/** 百川 */
declare namespace Taobao.Baichuan {
  /** 设备APP激活 */
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

  /** 口令规则变化消息 */
  interface PasswordRuleChange {
    /** message id */
    message_id: string;
    /** 口令等级 */
    tao_password_level: string;
    /** 口令规则 */
    tao_password_rules: string[];
  }
}

/** 导购平台 */
declare namespace Taobao.Bmc {
  /** 短信状态 */
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
  /** 自助机付款成功结果 */
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

  /** 交易支付状态节点通知 */
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

  /** 支付成功回调消息 */
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

  /** 交易支付状态节点 */
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
  /** 天猫汽车直租免首付订单消息 */
  interface FreeDpOrderMsgSend {
    /** 事件类型：1：免首付订单金额计算完成触发；2：逆向退款触发；3：逆向退款完成 */
    event_type?: number;
    /** 子订单ID */
    oid: number | bigint;
    /** 主订单ID */
    tid: number | bigint;
  }
}

/** 代发管理 */
declare namespace Taobao.Daifa {
  /** 代发管理_分销商侧订单状态变更消息 */
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

  /** 代发管理_供货商侧订单状态变更消息 */
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
}

/** 淘宝点点 */
declare namespace Taobao.Dd {
  /** 淘点点消息推送 */
  interface Push {
  }
}

/** 淘宝点点 */
declare namespace Taobao.Diandian {
  /** 淘宝点点服务订单下单消息 */
  interface ServeOrder {
  }
}

/** DPAAS */
declare namespace Taobao.Dpaas {
  /** dpaas三方服务token */
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

  /** 客流新增及会员到店消息 */
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

  /** 客户上传图片 */
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

  /** 会员人脸信息更新 */
  interface CustomerUploadAck {
    /** 客户会员ID */
    customer_id: string;
    /** 客户会员人脸ID */
    face_id: string;
    /** 客户ID */
    seller_id: number;
  }

  /** 创建设备 */
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

  /** 会员标示消息推送 */
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

/** 电子发票 */
declare namespace Taobao.Einvoice {
  /** 买家确认发送到报销系统 */
  interface BuyerConfirmSend {
    /** 被确认的token */
    token: string;
  }

  /** 电子发票开票回流 */
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

/** 淘宝分销 */
declare namespace Taobao.Fenxiao {
  /** 经销采购单审核通过 */
  interface DealerAgree {
  }

  /** 经销采购单关闭 */
  interface DealerClose {
  }

  /** 经销采购单采购成功 */
  interface DealerConfirm {
  }

  /** 经销采购单创建 */
  interface DealerCreate {
  }

  /** 经销采购单入库 */
  interface DealerInstock {
  }

  /** 经销采购单修改 */
  interface DealerModify {
  }

  /** 经销采购单付款 */
  interface DealerPay {
  }

  /** 经销采购单拒绝通过 */
  interface DealerRefuse {
  }

  /** 经销采购单已发货 */
  interface DealerShipped {
  }

  /** 采购单关闭消息消息 */
  interface FxOrderClosed {
  }

  /** 采购单创建消息 */
  interface FxOrderCreate {
  }

  /** 分销属性变更 */
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

  /** 修改采购单价格消息 */
  interface FxOrderModifyPrice {
  }

  /** 采购单付款消息 */
  interface FxOrderPaid {
  }

  /** 采购单发货消息 */
  interface FxOrderShipped {
  }

  /** 采购单确认收货消息 */
  interface FxOrderSuccess {
  }

  /** 供应商同意退款消息 */
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

  /** 关闭采购单退款消息 */
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

  /** 创建采购单退款消息 */
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

  /** 供应商拒绝确认收货消息 */
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

  /** 采购单退款成功消息 */
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

  /** 下游订单创建退款消息 */
  interface FxTradeRefundCreate {
  }

  /** 下游订单退款完成消息 */
  interface FxTradeRefundSuccess {
  }
}

/** 酒店签约中心消息 */
declare namespace Taobao.Fliggy {
  /** 飞猪通用合同签约消息 */
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

  /** Hsp转发卖家库聚合shid维度库价变更消息 */
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

  /** 飞猪签约状态消息 */
  interface SignStatus {
    /** 实体ID（酒店id/合作商Id/卖家Id） */
    entity_id: number;
    /** 实体类型（1:单体酒店 2:合作商 3:天猫卖家 4:航旅卖家 5: 全场景酒店 */
    entity_type: number;
    /** 操作Id(0:邀约 1:同意合同 2:上传资质 3:审核通过 4:修改账号 5:重置 6:释放 7:失效) */
    operate_id: number;
  }

  /** 标准酒店实体变更消息 */
  interface StdHotelModify {
    /** 变更类型，1--新增，2--修改，3--失效或下线 */
    action_type: number;
    /** 用于下一步查询数据的参数，值为可以反序列化为查询接口param对象的JSON串 */
    query_param: string;
    /** 标准酒店shid */
    shid: number;
  }

  /** 标准房型领域模型实体变更消息 */
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
}

/** 服务市场 */
declare namespace Taobao.Fuwu {
  /** 订单关闭消息 */
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

  /** 订单创建消息 */
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

  /** 订单支付消息 */
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

  /** 服务开通消息 */
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
    /** 订购记录id */
    readonly sub_id: number;
    /** 淘宝会员名 */
    user_nick?: string;
  }

  /** 威客同步建模数据 */
  interface WitkeySyncModeling {
  }
}

/** 全球购跨境物流 */
declare namespace Taobao.Globalbuys {
  /** 跨境服务平台推送物流订单消息 */
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
  /** 方案消息同步callback */
  interface CaseSyncResult {
    /** callback result */
    case_sync_result: string;
    /** jobid */
    job_id: string;
  }

  /** 居然之家接受迁移结果 */
  interface LayoutTransferResult {
    /** jobid */
    job_id: string;
    /** 结果 */
    out_param: string;
  }

  /** 推送模型与商品关系 */
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

  /** HS渲染消息 */
  interface RenderRequest {
    /** homeai_fsadfakjlf-f1234j */
    job_id: string;
    /** { "camera" : { "pos" : [ 1.234 ,43.9 ,13.42], "target" : [3,241.4,432], "fov" : 120.0 "near" : 14.2 "far" : 1234.9 "aspect" : 923 }, "sceneUrl" : "https://jr-prod-cms-assets.oss-cn-beijing.aliyuncs.com/Asset/8e87c376-55db-4080-a8e1-e296b9d959ea/v1541572378/scene.json", } */
    render_data: string;
  }
}

/** 酒店签约中心消息 */
declare namespace Taobao.Hotel {
  /** 信用住转预付酒店签约状态消息 */
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

  /** 酒店搜索触发商品更新消息 */
  interface SearchMonitor {
    /** 酒店列表信息 */
    out_hotels: string;
    /** 标准酒店id */
    shid: number;
  }

  /** 热搜酒店消息 */
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
}

/** Gifting送礼 */
declare namespace Taobao.Istore {
  /** istoreGifing消息 */
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
  /** 商品新增消息 */
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

  /** 商品删除消息 */
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

  /** 商品下架消息 */
  interface ItemDownshelf {
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

  /** 小二CC商品消息 */
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

  /** 小二删除商品消息 */
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

  /** 小二下架商品消息 */
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

  /** 橱窗推荐商品消息 */
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

  /** 取消橱窗推荐商品消息 */
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

  /** 商品SKU卖空消息 */
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

  /** 修改商品库存消息 */
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

  /** 商品更新消息 */
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

  /** 商品上架消息 */
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

  /** 商品卖空消息 */
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

/** 淘宝机票 */
declare namespace Taobao.Jipiao {
  /** 飞猪辅营订单支付通知接口 */
  interface AncillaryOrderPaid {
    /** 代理商id */
    agent_id: number;
    /** 订单号 */
    order_id: number;
  }

  /** 【机票代理商】改签订单通知 */
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

  /** 机票订单状态推送 */
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

  /** 机票退票订单状态推送 */
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

  /** 【机票代理商】订单通知 */
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

  /** 【机票代理商】退票订单通知 */
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
}

/** 淘宝直播API */
declare namespace Taobao.Live {
  /** 直播严选机构商品池变化通知 */
  interface AgencyItemChanged {
    /** 机构openUid */
    agency_open_uid: string;
  }

  /** 淘宝直播上下播消息 */
  interface FeedRelated {
    /** 主播openId */
    anchor_open_id: string;
    /** 事件类型 PUBLISH_LIVE上播,STOP_LIVE下播,等 */
    event: string;
    /** 场次id */
    live_id: number;
  }

  /** 淘宝直播订单消息 */
  interface TcpOrder {
    /** 主播openId */
    anchor_open_id: string;
    /** 订单号 */
    tid: number | bigint;
  }
}

/** 淘宝物流 */
declare namespace Taobao.Logistics {
  /** 物流详情跟踪消息 */
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
}

/** 聚石塔 */
declare namespace Taobao.Modifyaddress {
  /** 自助改地址结果消息通知 */
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
  /** 订单一致性校验消息 */
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
  /** 修改商品信息结果消息 */
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
  /** oc订单标签变更 */
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

/** 导购平台 */
declare namespace Taobao.Openaccount {
  /** openaccount数据同步 */
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
  /** 营销短信授权消息 */
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

  /** 卡片短信发送预估消息 */
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

  /** 卡片短信模板审核消息 */
  interface CardTplExamine {
    /** 错误码 */
    error_msg?: string;
    /** 0-模板审核通过；1-模板审核不通过 */
    status: number;
    /** 模板id */
    template_id: number;
  }

  /** 人群快照生成结果 */
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

  /** 人群快照另存为人群结果 */
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

  /** 反馈tmc */
  interface Feedback {
    /** 消息体 */
    content: string;
    /** 唯一标志，由isv自己提供自己控制，以便一一对应跟踪消息 */
    node_inst_id: number;
    /** 反馈消息类型 */
    type: number;
  }

  /** 会员等级变更 */
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

  /** 节点执行完成消息 */
  interface NodeExecuteFinished {
    /** 节点实例ID */
    node_inst_id: number;
    /** 状态，3-失败，4-成功 */
    status: number;
  }

  /** 开放策略事件类单发短信TMC消息 */
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

  /** CRM商业化计费商家维度账单 */
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

  /** 短信账单 */
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

  /** 智能外呼回执 */
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
  /** openim 离线消息推送 */
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
  /** Openmall告警消息通知 */
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

  /** Openmall商品变更消息 */
  interface ItemChanged {
    /** 商品事件 */
    event: string;
    /** 商品ID */
    item_id: number;
  }

  /** openmall商品库存变更消息通知 */
  interface ItemStockChanged {
    /** 商品ID */
    item_id: number;
    /** 当前商品维度总库存，单个sku库存需通过API查询 */
    quantity: number;
    /** 当前商品状态 */
    status: string;
  }

  /** OpenMall退款单变更 */
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

  /** 订单消息通知 */
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

/** 营销平台 */
declare namespace Taobao.Os {
  /** 前N有礼活动开奖消息 */
  interface ActivityCompleted {
    /** 活动id */
    readonly activity_id: number;
    /** 活动开奖标识，0表示未开奖，1表示已开奖 */
    complete_tag: number;
    /** 测试商家 */
    seller_nick: string;
  }
}

/** 淘宝交易 */
declare namespace Taobao.Rdcaligenius {
  /** 订单消息 */
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
  /** 同步前置补贴红包的最新数据 */
  interface OfnPreRedPacketSync {
    /** 旧机单id */
    old_order_id: string;
  }
}

/** 淘宝退款 */
declare namespace Taobao.Refund {
  /** 屏蔽退款留言消息-无此消息 */
  interface RefundBlockMessage {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** 买家修改退款协议消息 */
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

  /** 买家退货给卖家消息 */
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

  /** 退款关闭消息 */
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

  /** 发表退款留言消息 */
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

  /** 退款创建消息 */
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

  /** 卖家同意退款协议消息 */
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

  /** 卖家拒绝退款协议消息 */
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

  /** 退款成功消息 */
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

  /** 退款标记取消消息 */
  interface RefundableCanceled {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** 退款标记创建消息 */
  interface RefundableMarked {
    /** 更新时间。格式:yyyy-MM-dd HH:mm:ss */
    modified?: Date | number | string;
  }

  /** 申请淘宝介入消息 */
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

  /** 淘宝介入退款消息 */
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
  /** 智能制造-设备状态变更 */
  interface DeviceStatus {
    /** 设备编号 */
    device_id: string;
    /** 租户编号 */
    tenant_id: string;
  }
}

/** 导购平台 */
declare namespace Taobao.Tae {
  /** 商品信息变更 */
  interface BaichuanAuctionChange {
    /** 对应的是一个由Map转换为的json串，现在只有itemStatus（商品状态）这一个key，对应的value有两个：-1（商品状态不可用）和1（商品状态可用） */
    auction_change_info: string;
    /** 商品混淆Id */
    open_iid: string;
  }

  /** 交易关闭 */
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

  /** 创建订单 */
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

  /** 付款成功 */
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

  /** 创建退款消息 */
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

  /** 退款成功 */
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

  /** 交易成功 */
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

  /** 商品下架 */
  interface ItemDownShelf {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** 下架发生时间 */
    timestamp: Date | number | string;
  }

  /** 商品主图变更 */
  interface ItemImageChange {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 主图变更的时间戳 */
    timestamp: Date | number | string;
  }

  /** 订阅的商品变更消息 */
  interface ItemPriceChange {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 消息发生的时间戳 */
    timestamp: Date | number | string;
  }

  /** sku删除 */
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

  /** sku发布 */
  interface ItemSkuPublish {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 发布sku时间 */
    timestamp: Date | number | string;
  }

  /** 商品sku售空 */
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

  /** 商品售空 */
  interface ItemSoldOut {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** 卖空时间 */
    timestamp: Date | number | string;
  }

  /** 商品订阅成功 */
  interface ItemSubscribe {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 订阅时间 */
    timestamp: Date | number | string;
  }

  /** 商品标题变更 */
  interface ItemTitleChange {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 商品标题修改时间 */
    timestamp: Date | number | string;
  }

  /** 取消商品订阅 */
  interface ItemUnSubscribe {
    /** 商品id */
    item_id: string;
    /** 商品标题 */
    item_title?: string;
    /** 删除消息发送的时间 */
    timestamp: Date | number | string;
  }

  /** 商品上架 */
  interface ItemUpShelf {
    /** 商品id */
    item_id: string;
    /** 商品详情 */
    item_info: string;
    /** 商品上架时间 */
    timestamp: Date | number | string;
  }
}

/** 平台消息 */
declare namespace Taobao.Top {
  /** 取消授权消息通知 */
  interface AuthCancel {
    /** openId */
    readonly open_id: string;
    /** 用户id */
    user_id?: string;
  }
}

/** 平台消息 */
declare namespace Taobao.Topats {
  /** 异步任务执行完成 */
  interface TaskComplete {
  }
}

/** 淘宝交易 */
declare namespace Taobao.Trade {
  /** 订单极速放款成功消息 */
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

  /** 创建支付宝订单消息 */
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

  /** 买家付完款，或万人团买家付完尾款 */
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

  /** 分阶段订单付定金 */
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

  /** 订单信息变更消息 */
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

  /** 关闭交易消息 */
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
    /** 交易状态。可选值: * TRADE_NO_CREATE_PAY(没有创建支付宝交易) * WAIT_BUYER_PAY(等待买家付款) * SELLER_CONSIGNED_PART(卖家部分发货) * WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) * WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) * TRADE_BUYER_SIGNED(买家已签收,货到付款专用) * TRADE_FINISHED(交易成功) * TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) * TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易) * PAY_PENDING(国际信用卡支付付款确认中) * WAIT_PRE_AUTH_CONFIRM(0元购合约中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 商品标题 */
    title?: string;
    /** 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 可选值 fixed(一口价) auction(拍卖) guarantee_trade(一口价、拍卖) auto_delivery(自动发货) independent_simple_trade(旺店入门版交易) independent_shop_trade(旺店标准版交易) ec(直冲) cod(货到付款) fenxiao(分销) game_equipment(游戏装备) shopex_trade(ShopEX交易) netcn_trade(万网交易) external_trade(统一外部交易)o2o_offlinetrade（O2O交易）step (万人团)nopaid(无付款订单)pre_auth_type(预授权0元购机交易) */
    type: string;
  }

  /** 关闭或修改子订单消息 */
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
    /** 交易状态。可选值: * TRADE_NO_CREATE_PAY(没有创建支付宝交易) * WAIT_BUYER_PAY(等待买家付款) * SELLER_CONSIGNED_PART(卖家部分发货) * WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) * WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) * TRADE_BUYER_SIGNED(买家已签收,货到付款专用) * TRADE_FINISHED(交易成功) * TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) * TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易) * PAY_PENDING(国际信用卡支付付款确认中) * WAIT_PRE_AUTH_CONFIRM(0元购合约中) */
    status?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
    /** 交易类型 */
    type?: string;
  }

  /** 创建淘宝交易消息 */
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

  /** 延长收货时间消息 */
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

  /** 修改交易收货地址消息 */
  interface TradeLogisticsAddressChanged {
    /** 买家昵称 */
    buyer_nick: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 主订单ID */
    readonly tid: number | bigint;
  }

  /** 交易备注修改消息 */
  interface TradeMemoModified {
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

  /** 修改交易费用消息 */
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

  /** 子订单打款成功消息 */
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

  /** 子订单退款成功消息 */
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

  /** 交易的部分子订单发货消息 */
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

  /** 交易评价变更消息 */
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

  /** 卖家发货消息 */
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
    /** 交易状态。可选值: * TRADE_NO_CREATE_PAY(没有创建支付宝交易) * WAIT_BUYER_PAY(等待买家付款) * SELLER_CONSIGNED_PART(卖家部分发货) * WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) * WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) * TRADE_BUYER_SIGNED(买家已签收,货到付款专用) * TRADE_FINISHED(交易成功) * TRADE_CLOSED(付款以后用户退款成功，交易自动关闭) * TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易) * PAY_PENDING(国际信用卡支付付款确认中) * WAIT_PRE_AUTH_CONFIRM(0元购合约中) */
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

  /** 交易成功消息 */
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

  /** 交易超时提醒消息 */
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
}

/** 淘宝火车票 */
declare namespace Taobao.Train {
  /** 代理商查询信息消息 */
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

  /** 火车线下票代理商通知 */
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

  /** 火车票订单发给带三方接入消息 */
  interface ThirdPartyTradeNotify {
  }

  /** 火车票订单消息 */
  interface TradeNotify {
  }
}

/** 业务平台新零售-消息上行 */
declare namespace Taobao.Uscesl {
  /** 设备报警消息接口 */
  interface AlarmCreate {
    /** 消息内容 */
    msg_content: string;
    /** 消息ID */
    msg_id: string;
  }

  /** 电子价签绑定执行结果消息 */
  interface BindResult {
    /** 消息内容 */
    msg_content: string;
    /** 消息ID，唯一 */
    msg_id: string;
  }
}

/** 淘宝点点 */
declare namespace Taobao.Waimai {
  /** 点点送抢单结果通知消息 */
  interface GrabOrderResult {
    /** 广播ID */
    broadcast_id: number;
    /** 消息内容（物流单号deliveryOrderNo;广播订单状态rabOrderStatus:1成功|2失败;广播idbroadcast_id） */
    infos: string;
  }

  /** 淘点点外卖订单关闭消息通知 */
  interface OrderClose {
    /** 物流单号 */
    delivery_order_no: string;
  }

  /** 点点送订单投诉 */
  interface OrderComplain {
    /** 点点送物流订单号 */
    delivery_order_no: number;
  }

  /** 点点送订单撤诉 */
  interface OrderComplainCancel {
    /** 点点送物流订单号 */
    delivery_order_no: number;
  }

  /** 点点送订单投诉结果 */
  interface OrderComplainResult {
    /** 投诉处理结果 1成立 2不成立 */
    complain_result: number;
    /** 点点送物流单号 */
    delivery_order_no: number;
  }

  /** 点点送订单通知消息 */
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

  /** 点点送派单通知 */
  interface OrderDispatchSimple {
    /** 物流订单号 */
    delivery_order_no: number;
  }

  /** 点点送接单广播通知消息 */
  interface OrderPush {
    /** 广播ID */
    broadcast_id: number;
    /** 消息内容（广播时间broadcastTime;配送费deliveryFee;物流单号deliveryOrderNo;菜品总数量quantity;店铺经纬度startingPoint;经度longitude;纬度latitude;店铺地址storeAddress;店铺ID storeId;店铺名称storeName;菜品总价格totalAmount;广播ID broadcast_id） */
    infos: string;
  }

  /** 点点送催单消息通知 */
  interface OrderRemind {
    /** 催单物流单号 */
    delivery_order_no: string;
    /** 催单消息内容 */
    info: string;
  }

  /** 点点送外部订单通知消息 */
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

/** 智慧门店下行消息 */
declare namespace Taobao.Wisdomstore {
  /** 人脸抓拍识别消息 */
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

  /** 人脸识别结果回传ISV */
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

/** 闲鱼 */
declare namespace Taobao.Xianyu {
  /** 买家取消预约归还 */
  interface RentalItemReturnCanceled {
    /** 订单号 */
    order_id: number;
  }

  /** 买家预约上门取件 */
  interface RentalItemReturnReserved {
    /** 订单号 */
    order_id: number;
  }

  /** 租赁订单取消 */
  interface RentalOrderCanceled {
    /** 租赁订单id */
    order_id: number;
  }

  /** 租赁订单创建 */
  interface RentalOrderCreated {
    /** 订单id */
    order_id: number;
  }
}

/** IOT-智能制造 */
declare namespace Taobao.Xiaowei {
  /** 获取推送消息 */
  interface Message {
    /** 时间 */
    date: Date | number | string;
    /** id */
    id: number;
    /** 消息 */
    message: string;
  }
}
