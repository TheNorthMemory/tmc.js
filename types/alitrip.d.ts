/** 淘宝机票 */
declare namespace Alitrip.Agent {
  /** {@link https://open.taobao.com/tmc.htm?docId=1968&docType=9 商家机票业务通知} */
  interface Notify {
    /** 店铺id */
    agent_id: number;
    /** 业务id */
    biz_id: string;
    /** 事件描述 */
    description: string;
    /** 国内国际标识 */
    domestic_intl: number;
    /** 事件 */
    event: string;
    /** 消息发送时间 */
    msg_time: Date | number | string;
    /** 业务类型 */
    type: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Btrip {
  /** {@link https://open.taobao.com/tmc.htm?docId=1937&docType=9 阿里商旅企业签约结果回调} */
  interface CorpSignCallback {
    /** 第三方企业编码 */
    corp_id: string;
    /** 签约结果：成功/失败 */
    sign_result: boolean;
    /** 签约结果提示：成功/失败提示 */
    sign_tips?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1987&docType=9 阿里商旅企业超标审批单提交消息} */
  interface ExceedApplySubmit {
    /** 商旅审批单号 */
    readonly apply_id: number;
    /** 业务类型，3：超标审批，5：改签审批，6：退票审批 */
    biz_category: number;
    /** 第三方企业id */
    corp_id: string;
    /** 审批消息类目，0机票 1火车票 2酒店 */
    type: number;
    /** 审批提交人用户id */
    user_id: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Btriphotel {
  /** {@link https://open.taobao.com/tmc.htm?docId=1369&docType=9 商旅酒店rp发布审核} */
  interface RpAudit {
    /** 1：通过，2：不通过 */
    audit_status: number;
    /** 渠道：A，O */
    channel: string;
    /** 描述 */
    remark?: string;
    /** rpid */
    rpid: number;
    /** 1:RP绑定,2:RP解绑,3:RP基本信息修改,4:RP日历修改,5:rate日历修改 */
    type: number;
  }
}

/** 商旅API */
declare namespace Alitrip.Ebooking {
  /** {@link https://open.taobao.com/tmc.htm?docId=1353&docType=9 tmc营销审核消息} */
  interface ActivityAudit {
    /** 酒店hid */
    activity_audit_hid: string;
    /** 活动id */
    activity_detail_id: string;
    /** sellerId */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1917&docType=9 EBK天天特惠营销活动变更} */
  interface ActivityChange {
    /** 活动code */
    activity_code: string;
    /** 酒店Id */
    hid: string;
    /** 消息业务Id */
    message_guid: string;
    /** 消息类型 */
    message_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1174&docType=9 通知生成RatePlan消息} */
  interface CreateRatePlan {
    /** 活动详情ID */
    activity_detail_id: number;
    /** ratePlan参数 */
    rate_plan_params: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1207&docType=9 alitrip_ebooking_RepostMessage} */
  interface RepostMessage {
    /** 消息内容 */
    message_body: string;
    /** guid */
    message_guid: string;
    /** 消息类型 */
    message_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1293&docType=9 订单短信回执消息} */
  interface SmsRecepit {
    /** 订单回执短信码 */
    content: string;
    /** 发送时间 */
    send_time: string;
    /** 订单tid */
    tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1267&docType=9 tmc转发notify消息} */
  interface TmcPassNotify {
    /** 酒店id */
    hid: string;
    /** 消息发送时间 */
    send_time: string;
    /** 订单id */
    tid: string;
    /** 电子凭证状态值 */
    voucher_status: number;
  }
}

/** 淘宝机票 */
declare namespace Alitrip.Flight {
  /** {@link https://open.taobao.com/tmc.htm?docId=1288&docType=9 航变消息} */
  interface Change {
    /** 航变时间 */
    flight_change_time: Date | number | string;
    /** 航变类型，1为取消，2为变更，3为保护 */
    flight_change_type: number;
    /** 新到达机场 */
    new_arr_airport: string;
    /** 新到达时间 */
    new_arr_time?: Date | number | string;
    /** 新出发机场 */
    new_dep_airport: string;
    /** 新出发时间 */
    new_dep_time?: Date | number | string;
    /** 新航班号 */
    new_flight_num: string;
    /** 原到达机场 */
    old_arr_airport: string;
    /** 原到达时间 */
    old_arr_time: Date | number | string;
    /** 原出发机场 */
    old_dep_airport: string;
    /** 原出发时间 */
    old_dep_time: Date | number | string;
    /** 原航班号 */
    old_flight_num: string;
    /** 订单id */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2200&docType=9 机票改签流程状态通知} */
  interface ChangeStatusNotify {
    /** 改签单号 */
    change_order_no: number;
    /** 消息ID */
    id: string;
    /** 订单号 */
    order_no: number;
    /** 状态枚举，1、改签单提交成功 2、改签单待支付 3、改签单待出票 4、改签单关闭 5、改签单出票成功 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2359&docType=9 新京航航变消息} */
  interface FlightChange {
    /** 航变原因 */
    changeReason?: string;
    /** 航变时间 */
    changeTime?: Date | number | string;
    /** 航变类型,1为取消，2为变更 */
    changeType?: number;
    /** 消息id */
    messageId: string;
    /** 到达机场三字码 */
    newArriveCode?: string;
    /** 到达时间 */
    newArriveTime?: Date | number | string;
    /** 出发机场三字码 */
    newDepartCode?: string;
    /** 出发时间 */
    newDepartTime?: Date | number | string;
    /** 新航班日期 */
    newFlightDate?: Date | number | string;
    /** 航班号 */
    newFlightNo?: string;
    /** 到达机场三字码 */
    oldArriveCode: string;
    /** 出发时间 */
    oldArriveTime: Date | number | string;
    /** 出发机场三字码 */
    oldDepartCode: string;
    /** 出发时间 */
    oldDepartTime: Date | number | string;
    /** 原航班日期 */
    oldFlightDate?: Date | number | string;
    /** 原航班号 */
    oldFlightNo: string;
    /** 采购订单号 */
    orderId?: number;
    /** 航变子类型 */
    subType?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2189&docType=9 机票支付结果异步通知} */
  interface PayNotification {
    /** 支付宝交易流水号 */
    alipay_trade_no: string;
    /** 消息id */
    id: string;
    /** 支付成功的订单号 */
    order_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2204&docType=9 新京杭-退票相关通知} */
  interface RefundNotify {
    /** 消息标志 */
    id: string;
    /** 消息类型：REFUND_CREATE_MSG：退票单成功；REFUND_CLOSE_MSG：申请单关闭；REFUND_SUCCESS_MSG：申请退款成功 */
    message_type: string;
    /** 是否为补退 */
    multi_refund_flag?: boolean;
    /** 订单号 */
    order_no: number;
    /** 退票单号 */
    refund_order_no: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2208&docType=9 机票交易通知} */
  interface TradeNotify {
    /** 支付宝交易流水号，支付成功通知里会有这个值 */
    alipay_trade_no?: string;
    /** 消息id */
    id: string;
    /** 订单号 */
    order_no: string;
    /** 消息类型 1:支付成功 2:关单 3：出票成功 */
    type: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Hotel {
  /** {@link https://open.taobao.com/tmc.htm?docId=1330&docType=9 转发飞猪推送比价消息} */
  interface HotelCrawler {
    /** content */
    msg_content: string;
    /** id */
    msg_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1546&docType=9 酒店交易发送云上消息} */
  interface OrderOperation {
    /** 消息类型 */
    info_type: number;
    /** 订单ID */
    tid: number | bigint;
  }
}

/** 淘宝机票 */
declare namespace Alitrip.Iesr {
  /** {@link https://open.taobao.com/tmc.htm?docId=1142&docType=9 航变数据推送} */
  interface FlightChange {
    /** 发生航班请及时通知乘客 */
    desc: string;
    /** 航变时间 */
    flight_change_time: Date | number | string;
    /** 航变类型（1-航班取消, 2-航班变更） */
    flight_change_type: number;
    /** 航变后到达机场 */
    new_arr_airport: string;
    /** 航变后到达时间 */
    new_arr_time: Date | number | string;
    /** 航变后出发机场 */
    new_dep_airport: string;
    /** 航变后出发时间 */
    new_dep_time: Date | number | string;
    /** 航变后航班号 */
    new_flight_num: string;
    /** 航变前到达机场 */
    old_arr_airport: string;
    /** 航变前到达时间 */
    old_arr_time: Date | number | string;
    /** 航变前出发机场 */
    old_dep_airport: string;
    /** 航变前出发时间 */
    old_dep_time: Date | number | string;
    /** 航变前航班号 */
    old_flight_num: string;
    /** 订单ID */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1114&docType=9 国际运价采购票消息} */
  interface TicketMessage {
    /** 消息描述 */
    description?: string;
    /** 消息类型 */
    messagetype: string;
    /** 订单ID */
    orderid: number;
    /** 票信息 */
    ticketlist: string[];
  }
}

/** 淘宝机票 */
declare namespace Alitrip.Ietrade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1414&docType=9 国际机票改签订单状态消息} */
  interface ChangeMsg {
    /** 卖家店铺ID */
    agent_id: number;
    /** 消息类型：1.改签申请成功 2.改签支付成功 3.改签完成 4.改签关闭 */
    message_type: number;
    /** 改签申请单ID */
    modify_apply_id: number;
    /** 订单ID */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1409&docType=9 国际机票订单消息} */
  interface OrderMsg {
    /** 卖家店铺ID */
    agent_id: number;
    /** 消息类型：1.订单创建成功 2.支付成功 3.订单完成 4.订单关闭 */
    message_type: number;
    /** 订单ID */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1413&docType=9 国际机票退票订单状态消息} */
  interface RefundMsg {
    /** 卖家店铺ID */
    agent_id: number;
    /** 消息类型：1.退票申请成功 2.退款成功 3.退票关闭 */
    message_type: number;
    /** 订单版本: v1、v2 */
    model_version: string;
    /** 订单ID */
    order_id: number;
    /** 退票申请单ID */
    refund_apply_id: number;
  }
}

/** 商旅API */
declare namespace Alitrip.Sync {
  /** {@link https://open.taobao.com/tmc.htm?docId=1508&docType=9 机票自营淘内应用消息同步云上} */
  interface IatkfTaobao {
    /** 业务类型 */
    biz_type: string;
    /** 业务id，用于消息轨迹查询 */
    business_id: number;
    /** 操作 */
    command: string;
    /** 数据json */
    properties: string;
    /** 表名 */
    table_name: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Tf {
  /** {@link https://open.taobao.com/tmc.htm?docId=1868&docType=9 旅行购订单状态变化消息} */
  interface OrderStatusChanged {
    /** 业务id_订单状态枚举 */
    data_id: string;
    /** 订单id */
    order_id: number;
    /** 状态变化枚举值 */
    status: number;
    /** 状态变化描述 */
    status_desc: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1235&docType=9 国内机票改签申请消息} */
  interface ModifyApply {
    /** 订单id */
    order_id: number;
  }
}

/** 淘宝火车票 */
declare namespace Alitrip.Train {
  /** {@link https://open.taobao.com/tmc.htm?docId=2185&docType=9 火车票车次状态变更消息} */
  interface AgentStopQuery {
    /** 发车时间 */
    dep_time: string;
    /** 出发车站 */
    from_station: string;
    /** 到达车站 */
    to_station: string;
    /** 车次号 */
    train_no: string;
    /** 唯一标识uuid */
    uuid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2465&docType=9 飞猪火车票风控消息} */
  interface RiskNotify {
    /** 12306账号，可能为手机号/邮箱/唯一用户名 */
    accountName: string;
    /** 唯一标识 */
    id: string;
    /** 12306用户ID */
    outUserId: string;
    /** 协议类型，app或pc，一般仅app */
    protocol: string;
    /** 风控码 */
    riskCode: string;
    /** 风控消息类型、MARK_RISK 和 CLEAR_RISK */
    riskTag: string;
    /** 对应的解风控动作 */
    solveAction: string;
    /** 提示信息，指导用户行为 */
    tips: string;
    /** 用户淘宝ID */
    userId: number;
    /** 12306唯一用户名 */
    userUniqName: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2464&docType=9 创建订单成功消息} */
  interface TobOrderCreate {
    /** 平台订单号 */
    orderId: string;
  }
}

/** 航旅度假交易 */
declare namespace Alitrip.Travel {
  /** {@link https://open.taobao.com/tmc.htm?docId=1435&docType=9 线上人脸录入通知消息} */
  interface FaceOrder {
    /** 人脸id，注册时才会返回 */
    face_id?: string;
    /** 操作时间 */
    op_time: Date | number | string;
    /** 订单ID */
    order_id: number;
    /** 操作类型 1--新增 ；-1--删除 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1042&docType=9 飞猪度假交易订单状态变更消息} */
  interface OrderChanged {
    /** 可选字段，跨店铺数据访问情况下，已被授权允许访问该笔订单数据的appkey列表 */
    auth_appkeys?: string;
    /** 垂直业务相关扩展信息，json格式字符串，支持的key列表详见：https://open.alitrip.com/docs/doc.htm?spm=0.0.0.0.wOSWfy&docType=1&articleId=108054&previewCode=99F3B6F3E954A7979A6F2135174EC898 */
    biz_exts?: string;
    /** 可选字段，垂直业务类型。1-度假（自由行，跟团游），2-普通签证，3-门票，4-wifi，7-当地玩乐，9-邮轮，10-用车（包车，租车），12-电话卡，17-流量充值，18-港澳签注，19-在线签证，0-其他 */
    biz_type?: number;
    /** 买家昵称 */
    buyer_nick: string;
    /** 订单创建时间 */
    gmt_created: Date | number | string;
    /** 订单上一次修改时间 */
    gmt_modified: Date | number | string;
    /** 该主订单下子订单列表所对应的商品信息列表，多个以英文逗号分隔。商品信息格式为：类目id:商品id:商品级别商家编码:sku级别商家编码 */
    item_infos: string;
    /** 主订单id */
    order_id: number;
    /** 订单状态。1-订单创建，2-订单已付款（已付全款），3-订单已关闭，4-订单已发货，5-交易成功（全部打款给卖家），6-订单已付定金（只有预售商品订单才有），7-部分交易成功（部分打款给卖家，目前只有签证业务才有），8-在线办理订单买家提交材料（签证在线化业务） */
    order_status: number;
    /** 卖家id */
    seller_id: number;
    /** 卖家昵称 */
    seller_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1223&docType=9 出行人信息变更消息} */
  interface PersonChanged {
    /** 订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1159&docType=9 签证消息服务} */
  interface VisaService {
    /** 申请人id */
    apply_id?: string;
    /** 是否是线下准备 true表示下线 false表示非下线 */
    face_offline?: boolean;
    /** 申请表PDF链接 */
    form_url?: string;
    /** 实人认证身份证号码 */
    id_number?: string;
    /** 物流单号 */
    logistics_numer?: string;
    /** 消息类型 */
    message_type: string;
    /** 订单id */
    order_id: number;
    /** 证件照url */
    photo_url?: string;
    /** 物流公司code */
    post_company_code?: string;
    /** 商家昵称 */
    seller_nick: string;
    /** 实人认证失败原因 */
    verify_fail_msg?: string;
    /** 实人认证姓名 */
    verify_name?: string;
    /** 实人认证状态 -1未认证 0认证中 1通过 2不通过 10失效 */
    verify_status?: number;
  }
}

/** 航旅度假交易 */
declare namespace Alitrip.Tripticket {
  /** {@link https://open.taobao.com/tmc.htm?docId=837&docType=9 旅行机票交易创建} */
  interface TravellerCreate {
    /** 买家昵称 */
    buyer_nick: string;
    /** 扩展字段 */
    ext: string;
    /** 订单id */
    oid: string;
    /** 订单创建时间 */
    order_create_time: Date | number | string;
    /** 卖家昵称 */
    seller_nick: string;
    /** 提交出行人时间 */
    traveler_input_time: Date | number | string;
  }
}

/** 航旅度假交易 */
declare namespace Alitrip.Visa {
  /** {@link https://open.taobao.com/tmc.htm?docId=1187&docType=9 在线签证交易完成消息} */
  interface TradeDone {
    /** 交易流水号 */
    alipay_trade_id: string;
    /** 申请人Id */
    apply_id: string;
    /** 国家信息 */
    country: string;
    /** 货币单位(现在只要RMB) */
    currency_type: string;
    /** 订单ID */
    order_id: number;
    /** 商家申请人Id */
    outer_apply_id: string;
    /** 支付方式(现在只有ALIPAY) */
    payment_type: string;
    /** 汇款方式 */
    remit_type: string;
    /** 商家ID */
    seller_id: number;
    /** 交易金额(单位分) */
    total_amount: number;
    /** 用户ID */
    user_id: number;
    /** 签证类型 */
    visa_mode?: string;
  }
}
