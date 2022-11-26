/** 商旅API */
declare namespace Fliggy.Btrip {
  /** 订单状态变化 */
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

/** 淘宝机票 */
declare namespace Fliggy.Jipiao {
  /** 航变消息服务 */
  interface FlightChange {
    /** 航变产生时间 */
    flight_change_time: Date;
    /** 1为取消，2为变更 */
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
    /** 到达机场三字码 */
    old_arr_airport: string;
    /** 到达时间 */
    old_arr_time: Date;
    /** 出发机场三字码 */
    old_dep_airport: string;
    /** 出发时间 */
    old_dep_time: Date;
    /** 原航班号 */
    old_flight_num: string;
    /** 订单id */
    order_id: number;
  }
}

/** 航旅度假交易 */
declare namespace Fliggy.Ticket {
  /** 域外分销订单退款消息 */
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

  /** 域外分销订单状态变更消息 */
  interface OrderStatusChange {
    /** 购买数量 */
    buy_amount: number;
    /** 采购单关闭原因 */
    close_order_reason: string;
    /** 创建时间 */
    gmt_create: Date;
    /** 修改时间 */
    gmt_modified: Date;
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

  /** 域外分销订单码核销消息 */
  interface VerifyNotify {
    /** 子采购单id */
    order_id: number;
    /** 码核销信息 */
    voucher_infos: string;
  }
}
