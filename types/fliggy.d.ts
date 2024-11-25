/** 商旅API */
declare namespace Fliggy.Btrip {
  /** {@link https://open.taobao.com/tmc.htm?docId=1940&docType=9 订单状态变化} */
  interface HotelDistributionOrderChange {
    /** 商旅订单号 */
    btrip_order_id: number;
    /** 分销渠道 */
    distributor: string;
    /** 分销商订单号 */
    dis_order_id: string;
    /** 订单状态1-待付款，2-待确认，3-已确认，4-已完成，5-退款申请待商家确认，6-卖家已拒绝退款申请，7-订单已关闭，8-已取消 */
    status: number;
    /** 订单状态1-待付款，2-待确认，3-已确认，4-已完成，5-退款申请待商家确认，6-卖家已拒绝退款申请，7-订单已关闭，8-已取消 */
    status_desc: string;
  }
}

/** 飞猪 */
declare namespace Fliggy.Interact {
  /** {@link https://open.taobao.com/tmc.htm?docId=1932&docType=9 飞猪互动海豚事件产生} */
  interface HaitunEventCreate {
    /** 支付宝id */
    alipay_uid: string;
    /** 业务编号 */
    biz_no: string;
    /** 业务类型 */
    biz_type: string;
    /** 事件类型 */
    event_type: string;
    /** 消息topic */
    topic?: string;
  }
}

/** 淘宝机票 */
declare namespace Fliggy.Jipiao {
  /** {@link https://open.taobao.com/tmc.htm?docId=1281&docType=9 航变消息服务} */
  interface FlightChange {
    /** 航变产生时间 */
    flight_change_time: Date | number | string;
    /** 1为取消，2为变更 */
    flight_change_type: number;
    /** 新到达机场 */
    new_arr_airport?: string;
    /** 新到达时间 */
    new_arr_time: Date | number | string;
    /** 新出发机场 */
    new_dep_airport?: string;
    /** 新出发时间 */
    new_dep_time?: Date | number | string;
    /** 新航班号 */
    new_flight_num?: string;
    /** 到达机场三字码 */
    old_arr_airport: string;
    /** 到达时间 */
    old_arr_time: Date | number | string;
    /** 出发机场三字码 */
    old_dep_airport: string;
    /** 出发时间 */
    old_dep_time: Date | number | string;
    /** 原航班号 */
    old_flight_num: string;
    /** 订单id */
    order_id: number;
  }
}

/** 飞猪 */
declare namespace Fliggy.Member {
  /** {@link https://open.taobao.com/tmc.htm?docId=1632&docType=9 通知合作商家飞猪会员等级变更消息} */
  interface LevelChange {
    /** 飞猪会员身份唯一标识 */
    fliggy_user_name: string;
    /** openuid */
    openuid?: string;
    /** 商家会员系统标识 */
    partner_key: string;
    /** 商家会员身份唯一标识 */
    partner_member_id: string;
  }
}

/** 飞猪 */
declare namespace Fliggy.Push {
  /** {@link https://open.taobao.com/tmc.htm?docId=2161&docType=9 飞猪多端投放体系海豚事件产生} */
  interface HaitunEventCreate {
    /** 支付宝用户id */
    alipay_id: string;
    /** 业务编号，唯一便于后面查消息轨迹 */
    biz_no: string;
    /** 业务类型 */
    biz_type: string;
    /** 事件类型 */
    event_type: string;
    /** 消息topic */
    topic: string;
  }
}

/** 飞猪 */
declare namespace Fliggy.Sht {
  /** {@link https://open.taobao.com/tmc.htm?docId=2517&docType=9 飞猪四海通订单消息} */
  interface OrderMsg {
    /** 订单信息 */
    content: string;
    /** 消息唯一ID */
    msg_id: string;
    /** 淘宝订单ID */
    order_id: string;
    /** 订单状态 */
    order_status: number;
  }
}

/** 航旅度假交易 */
declare namespace Fliggy.Ticket {
  /** {@link https://open.taobao.com/tmc.htm?docId=1920&docType=9 域外分销订单退款消息} */
  interface OrderRefund {
    /** 子采购单id */
    order_id: number;
    /** 退款失败原因 */
    refund_fail_reason: string;
    /** 退款单id */
    refund_order_id: number;
    /** 退款状态 */
    refund_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1918&docType=9 域外分销订单状态变更消息} */
  interface OrderStatusChange {
    /** 购买数量 */
    buy_amount: number;
    /** 采购单关闭原因 */
    close_order_reason: string;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 子采购单id */
    order_id: number;
    /** 外部订单id */
    out_order_id: string;
    /** 产品id */
    product_id: number;
    /** 产品名称 */
    product_name: string;
    /** 产品价格 */
    product_price: number;
    /** skuId */
    sku_id: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1919&docType=9 域外分销订单码核销消息} */
  interface VerifyNotify {
    /** 子采购单id */
    order_id: number;
    /** 码核销信息 */
    voucher_infos: string;
  }
}

/** 航旅度假交易 */
declare namespace Fliggy.Visa {
  /** {@link https://open.taobao.com/tmc.htm?docId=2582&docType=9 签证申请人状态变更消息} */
  interface ApplicantStatusChanged {
    /** 申请人id */
    apply_id: string;
    /** 办理模式 */
    apply_mode: number;
    /** 申请人状态 */
    apply_status: number;
    /** 订单拓展信息，详情见[签证对接文档](https://open.alitrip.com/docs/doc.htm?docType=1&articleId=121404) */
    biz_exts: string;
    /** 订单id */
    order_id: string;
    /** 办签进度流程类型 */
    process_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1867&docType=9 签证状态变化消息} */
  interface StatusChange {
    /** 申请人id */
    apply_id: string;
    /** 申请人状态 */
    apply_status: number;
    /** 申请人状态描述 */
    apply_status_desc: string;
    /** 备注信息 */
    remark: string;
  }
}

/** 飞猪 */
declare namespace Fliggy.Xhotel {
  /** {@link https://open.taobao.com/tmc.htm?docId=2405&docType=9 套餐创建消息回传} */
  interface ComboCreateResult {
    /** 套餐创建的返回值 */
    combo_result: string;
    /** itemid */
    item_id: number;
  }
}
