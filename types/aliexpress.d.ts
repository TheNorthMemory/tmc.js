/** AE-任务平台消息 */
declare namespace Aliexpress.Aeia {
  /** {@link https://open.taobao.com/tmc.htm?docId=1864&docType=9 AE任务平台权益发放通知} */
  interface TaskplatformInterestNotice {
    /** 业务幂等id */
    detail_id: number;
    /** 权益code */
    interest_code: string;
    /** 发放数目 */
    interest_num: number;
    /** 项目id */
    project_id: number;
    /** 任务id */
    task_id: number;
    /** 任务名称 */
    task_name: string;
    /** 任务类型 */
    task_type: number;
    /** 任务类型mark */
    task_type_mark: string;
    /** 用户id */
    user_id: number;
  }
}

/** AE */
declare namespace Aliexpress.Aftersaleinsurance {
  /** {@link https://open.taobao.com/tmc.htm?docId=1479&docType=9 AE发送给蚂蚁保险的消息} */
  interface MessageFromAE {
    /** 消息补充信息 */
    biz_data: string;
    /** 订单号 */
    biz_order_id: string;
    /** 消息类型 */
    message_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1478&docType=9 蚂蚁保险消息-蚂蚁发出到AE} */
  interface MessageFromAnt {
    /** 消息补充信息 */
    biz_data?: string;
    /** 订单id */
    biz_order_id: string;
    /** 消息类型 */
    message_type: string;
  }
}

/** AE */
declare namespace Aliexpress.Message {
  /** {@link https://open.taobao.com/tmc.htm?docId=1268&docType=9 站内信新消息主动推送} */
  interface Pushnewmsg {
    /** 消息内容 */
    content: string;
    /** 针对不同类型填对应关联对象的ID：如msgType为product时填入productId值(必填) 如msgType为member时不填 */
    extern_id?: string;
    /** 消息发送时间 */
    gmt_create: string;
    /** 消息id */
    id: string;
    /** product、member、order */
    message_type: string;
    /** 订单url */
    order_url?: string;
    /** 产品rul */
    product_detail_url?: string;
    /** 接收者登录账号 */
    receiver_login_id: string;
    /** 发送者登录账号 */
    sender_login_id: string;
    /** 发送者全名 */
    sender_name?: string;
  }
}

/** AE-交易 */
declare namespace Aliexpress.Order {
  /** {@link https://open.taobao.com/tmc.htm?docId=1603&docType=9 交易成功} */
  interface AllFinish {
    /** 当前订单状态，唯一值为：FINISH */
    current_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1594&docType=9 等待卖家发货（所有卖家的订单）} */
  interface AllFulfillmentOrderCreated {
    /** 当前订单状态，唯一值为：WAIT_SELLER_SEND_GOODS */
    current_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1601&docType=9 卖家部分发货（所有卖家的订单）} */
  interface AllSellerPartSendGoods {
    /** 当前订单状态，唯一值为：SELLER_PART_SEND_GOODS */
    current_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1602&docType=9 等待买家收货} */
  interface AllWaitBuyerAcceptGoods {
    /** 当前订单状态，唯一值为：WAIT_BUYER_ACCEPT_GOODS */
    current_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1138&docType=9 交易成功} */
  interface Finish {
    /** 当前订单状态，唯一值为：FINISH */
    current_status: string;
    /** 上一个订单状态PLACE_ORDER_SUCCESS、PAYMENT_PROCESSING、IN_BOOK_SALE或FUND_PROCESSING等 */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 消息发送时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1137&docType=9 资金处理中} */
  interface FundProcessing {
    /** 当前订单状态，唯一值为：FINISH */
    current_status: string;
    /** 上一个订单状态:RISK_CONTROL、RISK_CONTROL_HOLD、WAIT_SELLER_EXAMINE_MONEY、WAIT_GROUP_SUCCESS、WAIT_SELLER_SEND_GOODS、WAIT_BUYER_ACCEPT_GOODS或IN_CANCEL */
    last_status?: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1136&docType=9 取消订单中} */
  interface InCancel {
    /** 当前订单状态，唯一值为：IN_CANCEL */
    current_status: string;
    /** 上一个订单状态：WAIT_SELLER_SEND_GOODS */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 消息发送时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1129&docType=9 下单成功} */
  interface PlaceOrderSuccess {
    /** 当前订单状态，唯一值为PLACE_ORDER_SUCCESS */
    current_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 123456 */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1130&docType=9 风控24小时} */
  interface RiskControl {
    /** 当前订单状态，唯一值为：RISK_CONTROL */
    current_status: string;
    /** 上一个订单状态PLACE_ORDER_SUCCESS、PAYMENT_PROCESSING或IN_BOOK_SALE */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 消息发送时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1134&docType=9 等待部分发货} */
  interface SellerPartSendGoods {
    /** 当前订单状态，唯一值为：SELLER_PART_SEND_GOODS */
    current_status: string;
    /** 上一个订单状态：WAIT_SELLER_SEND_GOODS或SELLER_PART_SEND_GOODS */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1135&docType=9 等待买家收货} */
  interface WaitBuyerAcceptGoods {
    /** 当前订单状态，唯一值为：RISK_CONTROL */
    current_status: string;
    /** 上一个订单状态：WAIT_SELLER_SEND_GOODS或SELLER_PART_SEND_GOODS */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1132&docType=9 等待成团} */
  interface WaitGroupSuccess {
    /** 当前订单状态，唯一值为：RISK_CONTROL */
    current_status: string;
    /** 上一个订单状态: RISK_CONTROL或RISK_CONTROL_HOLD */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1131&docType=9 待卖家验款} */
  interface WaitSellerExamineMoney {
    /** 当前订单状态，唯一值为：WAIT_SELLER_EXAMINE_MONEY */
    current_status: string;
    /** 上一个订单状态：RISK_CONTROL或RISK_CONTROL_HOLD */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1133&docType=9 等待卖家发货} */
  interface WaitSellerSendGoods {
    /** 当前订单状态，唯一值为：WAIT_SELLER_SEND_GOODS */
    current_status: string;
    /** 上一个订单状态RISK_CONTROL或RISK_CONTROL_HOLD */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }
}

/** AE */
declare namespace Aliexpress.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1753&docType=9 AE订单状态通知} */
  interface OrderNotify {
    /** 外部交易单号 */
    out_id: string;
    /** 支付收单id */
    payment_id: string;
    /** 卖家id */
    seller_id: string;
    /** 状态 */
    status: string;
    /** 平台的交易订单号 */
    trade_order_id: string;
  }
}

/** AE */
declare namespace Aliexpress.Warranty {
  /** {@link https://open.taobao.com/tmc.htm?docId=1244&docType=9 发送保修单消息ByPms} */
  interface CreateWarrantyOrderByPms {
    /** 买家地址 */
    buyer_address: string;
    /** 保修单号 */
    warranty_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1249&docType=9 保修商消息-AE} */
  interface WarrantyOrderMessageFromAE {
    /** status */
    status: string;
    /** warranty_code */
    warranty_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1282&docType=9 保修商消息-AliExpress} */
  interface WarrantyOrderMessageFromAliExpress {
    /** status */
    status: string;
    /** warranty_code */
    warranty_code: string;
  }
}
