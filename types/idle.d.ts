/** 闲鱼 */
declare namespace Idle.Agreement {
  /** 闲鱼代扣消息通知 */
  interface StatusChange {
    /** 支付宝流水号 */
    alipay_trade_no: string;
    /** 代扣金额 */
    amount: number;
    /** 业务单号 */
    biz_order_id: string;
    /** 业务类型 */
    pay_biz_code: string;
    /** 代扣计划id */
    plan_id: string;
    /** 状态 */
    status: string;
    /** 状态描述 */
    status_desc: string;
  }
}

/** 闲鱼已验货 */
declare namespace Idle.Appraiseisv {
  /** 已验货商品消息 */
  interface ItemSyn {
    /** 商品id */
    item_id: number;
    /** 商品状态 */
    item_status: number;
  }

  /** 闲鱼已验货交易事件 */
  interface OrderSyn {
    /** 交易订单号 */
    biz_order_id: number;
    /** 商品Id */
    item_id: number;
    /** 订单状态 */
    order_status: number;
    /** 卖家Id */
    seller_id: number;
  }

  /** 闲鱼已验货退货/退款事件 */
  interface RefundSyn {
    /** 交易订单号 */
    biz_order_id: number;
    /** 商品Id */
    item_id: number;
    /** 退款单状态 */
    order_status: number;
    /** 卖家Id */
    seller_id: number;
  }
}

/** 闲鱼回收商消息 */
declare namespace Idle.Consignment {
  /** 闲鱼帮卖订单履约状态同步 */
  interface OrderSyn {
    /** 服务商appKey */
    app_key: string;
    /** 闲鱼帮卖订单号 */
    biz_order_id: string;
    /** 订单节点主状态。1:已下单;2:已取件;3:已质检;20:竞拍中;5:交易成功;6:卖家已评价;7:服务商已评价;100:申请退货;101:已退货;102:卖家取消订单关闭;103:服务商取消订单关闭; */
    order_status: number;
    /** 订单二级状态，一级状态的子状态。一级状态为2已取件: 21:已取件; 22:已收件; 一级状态为3已质检: 31:已质检; 32:用户已确认; 201:一次挂拍; 一级状态为20竞拍中: 202:一次竞拍中; 203:一次竞拍成交; 204:一次拍卖违约; 205:一次竞拍流拍; 211:二次挂拍; 212:二次竞拍中; 213:二次竞拍成交; 214:二次拍卖违约; 215:二次竞拍流拍; 51:拍卖成功/订单成功; 58:回收商确认交易/拍卖流拍成交; 59:服务商(兜底)确认交易/支付; */
    order_sub_status: number;
  }
}

/** 闲鱼回收商消息 */
declare namespace Idle.Consignmentii {
  /** 闲鱼寄卖V2订单履约状态同步 */
  interface OrderSyn {
    /** 服务商appKey */
    app_key: string;
    /** 闲鱼订单号 */
    biz_order_id: string;
    /** 订单主状态 */
    order_status: string;
    /** 订单子状态 */
    order_sub_status: string;
  }
}

/** 闲鱼回收商消息 */
declare namespace Idle.Recycle {
  /** 回收订单交易消息 */
  interface OrderSyn {
    /** 回收商appkey */
    app_key: string;
    /** 闲鱼交易订单号 */
    biz_order_id: string;
    /** 1:订单创建 2:已上门取件 3:已质检 4:卖家确认交易完成 6:卖家订单已评价 7:回收商订单已评价 9：下单后已付款 10：追缴成功（用户需要还款回收商） 11：补尾款成功（质检金额大于预估价,回收商补尾款） 12：追缴单创建成功（用户需要还款回收商） 13：补尾款单创建成功（质检金额大于预估价,回收商补尾款） 100:卖家申请退回 101:货物已退回 102:卖家关闭订单 */
    order_status: number;
  }

  /** 退款消息 */
  interface RefundStatusModify {
    /** 退款单Id */
    dispute_id: string;
    /** 订单id */
    order_id: string;
    /** 退款状态 */
    refund_status: string;
  }
}

/** 闲鱼已验货 */
declare namespace Idle.Topisv {
  /** 闲鱼开放平台-国际货品变更消息通知 */
  interface GlobalProductNotice {
    /** 对应的货品库存等级，当供货价变更时才会有，即 product_change_type 为 0 时 */
    inv_grade: string;
    /** 商品 id，商货绑定关系变更时才会有，即product_change_type 为 1或者2时 */
    item_id: number;
    /** 货品变更类型 0：供货价变更 1：商货绑定关系解除 */
    product_change_type: number;
    /** 货品id */
    product_id: number;
  }

  /** 闲鱼开放平台-商品变更消息通知 */
  interface ItemNotice {
    /** 商品id */
    item_id: number;
    /** 商品状态 */
    item_status: number;
    /** 卖家id */
    seller_id: number;
  }

  /** 闲鱼开放平台-订单逆向变更消息通知 */
  interface RefundNotice {
    /** 交易订单号 */
    biz_order_id: number;
    /** 商品Id */
    item_id: number;
    /** 订单状态 */
    order_status: number;
    /** 卖家Id */
    seller_id: number;
  }

  /** 闲鱼开放平台-订单变更消息通知 */
  interface TradeNotice {
    /** 交易订单号 */
    biz_order_id: number;
    /** 商品Id */
    item_id: number;
    /** 订单状态 */
    order_status: number;
    /** 卖家Id */
    seller_id: number;
  }
}

/** 闲鱼 */
declare namespace Idle.Tranferpay {
  /** 直接转账交易消息 */
  interface OrderChange {
    /** 支付宝交易号 */
    alipay_trade_no: string;
    /** 付款金额/分 */
    amount: string;
    /** 订单号 */
    biz_order_id: number;
    /** 外部Id 商家关联ID */
    outer_id: string;
    /** 支付状态： 1订单创建(未付款)；2已付款；6交易成功；8交易关闭 */
    pay_status: string;
  }
}
