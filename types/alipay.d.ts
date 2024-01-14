/** 支付宝 */
declare namespace Alipay.Ae {
  /** {@link https://open.taobao.com/tmc.htm?docId=1396&docType=9 AE提前放款} */
  interface TradePreloan {
    /** 内容 */
    content?: string;
    /** 消息ID */
    id?: string;
    /** messageType */
    message_type?: string;
    /** topic */
    topic?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1569&docType=9 AE提前放款新链路} */
  interface TradePreloanNew {
    /** json字符串 */
    content: string;
    /** 消息ID */
    id: string;
    /** messageType */
    message_type: string;
    /** topic */
    topic: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Baoming {
  /** {@link https://open.taobao.com/tmc.htm?docId=1081&docType=9 活动报名消息} */
  interface Msg {
    /** 报名ID */
    baoming_config_id: number;
  }
}

/** 支付宝 */
declare namespace Alipay.Baoxian {
  /** {@link https://open.taobao.com/tmc.htm?docId=699&docType=9 保险线下同步授权消息} */
  interface PolicySyncAuthorize {
    /** 授权时间 */
    authorize_time: Date | number | string;
    /** 用户证件号 */
    card_no: string;
    /** 用户证件类型 */
    card_type: string;
    /** 商家支付宝ID */
    merchant_alipay_id: string;
    /** 用户姓名 */
    name: string;
    /** 用户支付宝ID */
    user_alipay_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=700&docType=9 保险线下同步解除授权消息} */
  interface PolicySyncCancel {
    /** 解除授权时间 */
    cancel_time: Date | number | string;
    /** 商家支付宝ID */
    merchant_alipay_id: string;
    /** 用户支付宝ID */
    user_alipay_id: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Charity {
  /** {@link https://open.taobao.com/tmc.htm?docId=1258&docType=9 支付宝公益平台实时同步淘宝公益三小时流水} */
  interface ThreeHoursBillSync {
    /** 关联动作数据 */
    action_data?: string;
    /** 关联动作类型 */
    action_type?: string;
    /** 活动id */
    activity_id: string;
    /** 活动说明 */
    activity_name: string;
    /** 支付宝UID */
    alipay_user_id: string;
    /** 获得公益时时间 */
    approve_date: Date | number | string;
    /** 公益其他属性 */
    attr?: string;
    /** bill_no唯一ID(幂等和核对使用) */
    bill_no: string;
    /** 公益时(单位秒) */
    charity_time: number;
    /** 公益类型ID */
    charity_type_id: string;
    /** 公益类型说明 */
    charity_type_name: string;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 是否为亲子活动相关公益时 */
    is_kids?: boolean;
    /** 淘宝捐赠商品ID */
    item_id?: number;
    /** 淘宝UID */
    taobao_user_id: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Fenxiao {
  /** {@link https://open.taobao.com/tmc.htm?docId=976&docType=9 采购单关闭} */
  interface FxOrderClosed {
    /** 分销ID */
    fenxiao_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=974&docType=9 采购单创建} */
  interface FxOrderCreate {
    /** 分销ID */
    fenxiao_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=975&docType=9 改价} */
  interface FxOrderModifyPrice {
    /** 分销ID */
    fenxiao_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=977&docType=9 采购单付款} */
  interface FxOrderPaid {
    /** 分销ID */
    fenxiao_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=978&docType=9 采购单发货} */
  interface FxOrderShipped {
    /** 分销ID */
    fenxiao_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=979&docType=9 采购成功} */
  interface FxOrderSuccess {
    /** 分销ID */
    fenxiao_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=972&docType=9 采购单结算完成} */
  interface FxOrderTransfered {
    /** 分销ID */
    fenxiao_id: number;
  }
}

/** 支付宝 */
declare namespace Alipay.Refund {
  /** {@link https://open.taobao.com/tmc.htm?docId=1236&docType=9 新退款消息} */
  interface Dispute {
    /** 消息内容 */
    content: string;
    /** 消息主键ID */
    dataid: string;
    /** messageType */
    message_type: string;
    /** 原始topic */
    topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1079&docType=9 退款关闭} */
  interface RefundClosed {
    /** 订单ID */
    biz_order_id: number;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1077&docType=9 退款消息} */
  interface RefundCreated {
    /** order Id */
    biz_order_id: number;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1078&docType=9 退款成功消息} */
  interface RefundSuccess {
    /** 订单ID */
    biz_order_id: number;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Scf {
  /** {@link https://open.taobao.com/tmc.htm?docId=1010&docType=9 支付宝菜鸟消息} */
  interface Advance {
    /** 内容 */
    content: string;
    /** 消息ID */
    id: string;
    /** messageType */
    message_type: string;
    /** topic */
    topic: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1532&docType=9 订单极速放款成功} */
  interface AdvanceDisburse {
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=928&docType=9 买家付款} */
  interface BuyerPay {
    /** 商品数字id */
    auction_id?: number;
    /** 商品标题图片 */
    auction_pict_url?: string;
    /** 商品名称 */
    auction_title?: string;
    /** 购买人 */
    buyer_id?: number;
    /** 买家nick */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 购买数量 */
    buy_amount?: number;
    /** 子订单 */
    childs?: string;
    /** 购买时间 */
    gmt_create?: number;
    /** 业务订单ID */
    oid?: number | bigint;
    /** 购买数量 */
    payment: number;
    /** 类目明细 */
    root_cat?: string;
    /** 卖家ID */
    seller_id?: number;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺数字id */
    shop_id?: number;
    /** 状态 */
    status?: string;
    /** 订单ID */
    tid?: number | bigint;
    /** 成交金额 */
    total_fee?: number;
    /** 类型 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=950&docType=9 虚假交易订单} */
  interface FakeTrade {
    /** 支付宝用户ID */
    buyer_alipay_id?: number;
    /** 淘宝用户ID */
    buyer_id?: number;
    /** 订单创建时间 */
    create_time?: number;
    /** 当前订单ID */
    order_id?: number;
    /** 父订单ID */
    parent_order_id?: number;
    /** 卖家ID */
    seller_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1116&docType=9 支付宝订单号创建} */
  interface TradeAlipayCreate {
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1093&docType=9 买家关闭订单} */
  interface TradeBuyerClose {
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1111&docType=9 阶段付款} */
  interface TradeBuyerStepPay {
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=931&docType=9 订单创建} */
  interface TradeCreate {
    /** 商品id */
    auction_id?: number;
    /** 商品标题图片 */
    auction_pict_url?: string;
    /** 商品名称 */
    auction_title?: string;
    /** 买家id */
    buyer_id?: number;
    /** 卖家nick */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单 */
    childs?: string;
    /** 订单创建时间 */
    gmt_create?: number;
    /** 业务订单号 */
    oid?: number | bigint;
    /** 商品数量 */
    payment?: number;
    /** 类目明细 */
    root_cat?: string;
    /** 卖家id */
    seller_id?: number;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺ID */
    shop_id?: number;
    /** 订单状态 */
    status?: string;
    /** 订单号 */
    tid?: number | bigint;
    /** 成交金额 */
    total_fee?: number;
    /** 类型 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1094&docType=9 部分收货} */
  interface TradePartlyConfirmPay {
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 订单ID */
    tid: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2093&docType=9 交易阶段成功} */
  interface TradePeriodSuccess {
    /** 商品数字id */
    auction_id?: number;
    /** 商品标题图片 */
    auction_pict_url?: string;
    /** 商品名称 */
    auction_title?: string;
    /** 购买人(转openuid) */
    buyer_id?: string;
    /** 买家nick */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单 */
    childs?: string;
    /** 购买时间 */
    gmt_create?: number;
    /** 业务订单ID */
    oid?: number | bigint;
    /** 购买数量 */
    payment?: number;
    /** 类目明细 */
    root_cat?: string;
    /** 卖家ID */
    seller_id?: number;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺数字id */
    shop_id?: number;
    /** 状态 */
    status?: string;
    /** 订单ID */
    tid?: number | bigint;
    /** 成交金额 */
    total_fee?: number;
    /** 类型 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=930&docType=9 订单发货} */
  interface TradeSellerShip {
    /** 商品id */
    auction_id?: number;
    /** 商品标题图片 */
    auction_pict_url?: string;
    /** 商品名称 */
    auction_title?: string;
    /** 购买人 */
    buyer_id?: number;
    /** 卖家nick */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单 */
    childs?: string;
    /** 购买时间 */
    gmt_create?: number;
    /** 业务订单号 */
    oid?: number | bigint;
    /** 商品数量 */
    payment?: number;
    /** 类目明细 */
    root_cat?: string;
    /** 卖家ID */
    seller_id?: number;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺ID */
    shop_id?: number;
    /** 订单状态 */
    status?: string;
    /** 订单号 */
    tid?: number | bigint;
    /** 成交金额 */
    total_fee?: number;
    /** 类型 */
    type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=929&docType=9 交易成功} */
  interface TradeSuccess {
    /** 商品数字id */
    auction_id?: number;
    /** 商品标题图片 */
    auction_pict_url?: string;
    /** 商品名称 */
    auction_title?: string;
    /** 购买人 */
    buyer_id?: number;
    /** 买家nick */
    buyer_nick?: string;
    /** 由buyer_id加密, 可对外开放, 用来替换buyer_nick作为唯一标识 */
    buyer_open_uid?: string;
    /** 子订单 */
    childs?: string;
    /** 购买时间 */
    gmt_create?: number;
    /** 业务订单ID */
    oid?: number | bigint;
    /** 购买数量 */
    payment?: number;
    /** 类目明细 */
    root_cat?: string;
    /** 卖家ID */
    seller_id?: number;
    /** 卖家nick */
    seller_nick?: string;
    /** 店铺数字id */
    shop_id?: number;
    /** 状态 */
    status?: string;
    /** 订单ID */
    tid?: number | bigint;
    /** 成交金额 */
    total_fee?: number;
    /** 类型 */
    type?: string;
  }
}

/** 支付宝 */
declare namespace Alipay.Update {
  /** {@link https://open.taobao.com/tmc.htm?docId=1080&docType=9 卖家信息变更} */
  interface Seller {
    /** 用户ID */
    user_id: number;
  }
}

/** 阿里金融 */
declare namespace Alipay.Xiaodai {
  /** {@link https://open.taobao.com/tmc.htm?docId=642&docType=9 阿里金融签约通知} */
  interface SignNotify {
  }
}
