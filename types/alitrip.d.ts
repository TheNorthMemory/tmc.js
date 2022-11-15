/** 淘宝机票 */
declare namespace Alitrip.Agent {
  /** 商家机票业务通知 */
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
    msg_time: Date;
    /** 业务类型 */
    type: string;
  }
}

/** 商旅API */
declare namespace Alitrip.Btrip {
  /** 阿里商旅企业签约结果回调 */
  interface CorpSignCallback {
    /** 第三方企业编码 */
    corp_id: string;
    /** 签约结果：成功/失败 */
    sign_result: boolean;
    /** 签约结果提示：成功/失败提示 */
    sign_tips: string;
  }

  /** 阿里商旅企业超标审批单提交消息 */
  interface ExceedApplySubmit {
    /** 商旅审批单号 */
    apply_id: number;
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

/** 淘宝机票 */
declare namespace Alitrip.Flight {
  /** 航变消息 */
  interface Change {
    /** 航变时间 */
    flight_change_time: Date;
    /** 航变类型，1为取消，2为变更，3为保护 */
    flight_change_type: number;
    /** 新到达机场 */
    new_arr_airport: string;
    /** 新到达时间 */
    new_arr_time: Date;
    /** 新出发机场 */
    new_dep_airport: string;
    /** 新出发时间 */
    new_dep_time: Date;
    /** 新航班号 */
    new_flight_num: string;
    /** 原到达机场 */
    old_arr_airport: string;
    /** 原到达时间 */
    old_arr_time: Date;
    /** 原出发机场 */
    old_dep_airport: string;
    /** 原出发时间 */
    old_dep_time: Date;
    /** 原航班号 */
    old_flight_num: string;
    /** 订单id */
    order_id: number;
  }
}

/** 淘宝机票 */
declare namespace Alitrip.Iesr {
  /** 航变数据推送 */
  interface FlightChange {
    /** 发生航班请及时通知乘客 */
    desc: string;
    /** 航变时间 */
    flight_change_time: Date;
    /** 航变类型（1-航班取消, 2-航班变更） */
    flight_change_type: number;
    /** 航变后到达机场 */
    new_arr_airport: string;
    /** 航变后到达时间 */
    new_arr_time: Date;
    /** 航变后出发机场 */
    new_dep_airport: string;
    /** 航变后出发时间 */
    new_dep_time: Date;
    /** 航变后航班号 */
    new_flight_num: string;
    /** 航变前到达机场 */
    old_arr_airport: string;
    /** 航变前到达时间 */
    old_arr_time: Date;
    /** 航变前出发机场 */
    old_dep_airport: string;
    /** 航变前出发时间 */
    old_dep_time: Date;
    /** 航变前航班号 */
    old_flight_num: string;
    /** 订单ID */
    order_id: number;
  }

  /** 国际运价采购票消息 */
  interface TicketMessage {
    /** 消息描述 */
    description: string;
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
  /** 国际机票改签订单状态消息 */
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

  /** 国际机票订单消息 */
  interface OrderMsg {
    /** 卖家店铺ID */
    agent_id: number;
    /** 消息类型：1.订单创建成功 2.支付成功 3.订单完成 4.订单关闭 */
    message_type: number;
    /** 订单ID */
    order_id: number;
  }

  /** 国际机票退票订单状态消息 */
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

/** 淘宝火车票 */
declare namespace Alitrip.Train {
  /** 火车票车次状态变更消息 */
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
}

/** 航旅度假交易 */
declare namespace Alitrip.Travel {
  /** 飞猪度假交易订单状态变更消息 */
  interface OrderChanged {
    /** 可选字段，跨店铺数据访问情况下，已被授权允许访问该笔订单数据的appkey列表 */
    auth_appkeys: string;
    /** 垂直业务相关扩展信息，json格式字符串，支持的key列表详见：https://open.alitrip.com/docs/doc.htm?spm=0.0.0.0.wOSWfy&docType=1&articleId=108054&previewCode=99F3B6F3E954A7979A6F2135174EC898 */
    biz_exts: string;
    /** 可选字段，垂直业务类型。1-度假（自由行，跟团游），2-普通签证，3-门票，4-wifi，7-当地玩乐，9-邮轮，10-用车（包车，租车），12-电话卡，17-流量充值，18-港澳签注，19-在线签证，0-其他 */
    biz_type: number;
    /** 买家昵称 */
    buyer_nick: string;
    /** 订单创建时间 */
    gmt_created: Date;
    /** 订单上一次修改时间 */
    gmt_modified: Date;
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

  /** 出行人信息变更消息 */
  interface PersonChanged {
    /** 订单号 */
    order_id: number;
  }

  /** 签证消息服务 */
  interface VisaService {
    /** 申请人id */
    apply_id: string;
    /** 是否是线下准备 true表示下线 false表示非下线 */
    face_offline: boolean;
    /** 申请表PDF链接 */
    form_url: string;
    /** 实人认证身份证号码 */
    id_number: string;
    /** 物流单号 */
    logistics_numer: string;
    /** 消息类型 */
    message_type: string;
    /** 订单id */
    order_id: number;
    /** 证件照url */
    photo_url: string;
    /** 物流公司code */
    post_company_code: string;
    /** 商家昵称 */
    seller_nick: string;
    /** 实人认证失败原因 */
    verify_fail_msg: string;
    /** 实人认证姓名 */
    verify_name: string;
    /** 实人认证状态 -1未认证 0认证中 1通过 2不通过 10失效 */
    verify_status: number;
  }
}

/** 航旅度假交易 */
declare namespace Alitrip.Tripticket {
  /** 旅行机票交易创建 */
  interface TravellerCreate {
    /** 买家昵称 */
    buyer_nick: string;
    /** 扩展字段 */
    ext: string;
    /** 订单id */
    oid: string;
    /** 订单创建时间 */
    order_create_time: Date;
    /** 卖家昵称 */
    seller_nick: string;
    /** 提交出行人时间 */
    traveler_input_time: Date;
  }
}

/** 航旅度假交易 */
declare namespace Alitrip.Visa {
  /** 在线签证交易完成消息 */
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
    visa_mode: string;
  }
}
