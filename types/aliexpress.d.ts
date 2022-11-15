/** AE-任务平台消息 */
declare namespace Aliexpress.Aeia {
  /** AE任务平台权益发放通知 */
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

/** AE-交易 */
declare namespace Aliexpress.Order {
  /** 交易成功 */
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

  /** 资金处理中 */
  interface FundProcessing {
    /** 当前订单状态，唯一值为：FINISH */
    current_status: string;
    /** 上一个订单状态:RISK_CONTROL、RISK_CONTROL_HOLD、WAIT_SELLER_EXAMINE_MONEY、WAIT_GROUP_SUCCESS、WAIT_SELLER_SEND_GOODS、WAIT_BUYER_ACCEPT_GOODS或IN_CANCEL */
    last_status: string;
    /** 卖家账号ID */
    login_id: string;
    /** 订单状态变化时间 */
    order_change_time: string;
    /** 订单ID */
    order_id: string;
  }

  /** 取消订单中 */
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

  /** 下单成功 */
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

  /** 风控24小时 */
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

  /** 等待部分发货 */
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

  /** 等待买家收货 */
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

  /** 等待成团 */
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

  /** 待卖家验款 */
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

  /** 等待卖家发货 */
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
