/** 闲鱼 */
declare namespace Idle.Agreement {
  /** {@link https://open.taobao.com/tmc.htm?docId=1678&docType=9 闲鱼代扣消息通知} */
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
    status_desc?: string;
  }
}

/** 闲鱼已验货 */
declare namespace Idle.Appraiseisv {
  /** {@link https://open.taobao.com/tmc.htm?docId=1927&docType=9 已验货商品消息} */
  interface ItemSyn {
    /** 商品id */
    item_id: number;
    /** 商品状态 */
    item_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1786&docType=9 闲鱼已验货交易事件} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=1934&docType=9 闲鱼已验货退货/退款事件} */
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

/** 闲鱼 */
declare namespace Idle.Autotrade {
  /** {@link https://open.taobao.com/tmc.htm?docId=2412&docType=9 闲鱼AutoTrade订单状态变更消息} */
  interface OrderStateSync {
    /** 订单id */
    order_id: number;
    /** 订单状态 */
    order_status: string;
    /** 订单子状态 */
    order_sub_status?: string;
    /** 交易产品业务标识 */
    x_global_biz_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2435&docType=9 闲鱼AutoTrade逆向退款消息} */
  interface RefundSync {
    /** 订单id */
    order_id: number;
    /** 订单状态;1: 买家已经申请退款，等待卖家同意, 2: 卖家已经同意退款，等待买家退货, 3: 买家已经退货，等待卖家确认收货, 4: 退款关闭, 5: 退款成功, 6: 卖家拒绝退款, 8: 等待卖家确认退货地址, 9: 没有申请退款, 11: 退款结束。 */
    order_status: string;
    /** 订单子状态 */
    order_sub_status?: string;
    /** 业务标识 */
    x_global_biz_code: string;
  }
}

/** 闲鱼回收商消息 */
declare namespace Idle.Consignment {
  /** {@link https://open.taobao.com/tmc.htm?docId=1586&docType=9 闲鱼帮卖订单履约状态同步} */
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
  /** {@link https://open.taobao.com/tmc.htm?docId=1950&docType=9 闲鱼寄卖V2订单履约状态同步} */
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

/** 闲鱼 */
declare namespace Idle.Cro {
  /** {@link https://open.taobao.com/tmc.htm?docId=2567&docType=9 闲鱼安全处罚消息} */
  interface PunishMsg {
    /** 0-处罚中，1-处罚完结，2-处罚撤销，10-申诉前置处罚 */
    action_type: string;
    /** 具体处罚项是什么 */
    asset_list: string;
    /** 处罚开始时间 */
    begin_date: Date | number | string;
    /** 处罚结束时间 */
    end_date: Date | number | string;
    /** 处罚ID */
    result_id: string;
    /** 处罚规则CODE */
    rule_code: string;
    /** 处罚规则名称 */
    rule_name: string;
    /** 处罚的用户ID */
    user_id: number;
  }
}

/** 闲鱼 */
declare namespace Idle.Cycleshop {
  /** {@link https://open.taobao.com/tmc.htm?docId=2499&docType=9 闲鱼循环商店-货品变更通知} */
  interface GoodsNotice {
    /** 闲鱼货品id */
    goods_id: number;
    /** 闲鱼商品id */
    item_id?: number;
    /** 闲鱼寄卖包裹id */
    jm_packid: number;
    /** 货品状态【0-0: 录入中(初始状态)，1-1: 待确认-可寄卖，1-2: 待确认-不可寄卖，2-1: 卖家确认寄卖后准备中，3-1:寄卖中-出售中，3-2: 寄卖中-已滞销，3-3: 寄卖中-清仓待确认，3-4: 寄卖中-清仓中，3-5: 寄卖中-清仓失败，4-1: 待取回-主动要求取回，4-2: 待取回-超时，4-3:待取回-强制要求取回， 5-1: 已完成-已成交，5-2: 已完成-已取回，5-3: 已完成-已捐赠，100-1: 已删除-商店删除】 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2502&docType=9 闲鱼循环商店-销售单变更通知} */
  interface SaleOrderNotice {
    /** 货品出清业务单号【线下售出：门店线下销售单Id；线上售出：闲鱼C2C订单Id】 */
    biz_saleid: string;
    /** 闲鱼货品id */
    goods_id: number;
    /** 闲鱼寄卖包裹id */
    jm_packid: number;
    /** 闲鱼销售单id */
    sale_orderid: number;
    /** 销售单状态【10:已付款，20:已发货，30:已售出（待确认金额），40:待结算（已确认金额），50:已完结，99:已取消】 */
    status: number;
  }
}

/** 闲鱼回收商消息 */
declare namespace Idle.Distribution {
  /** {@link https://open.taobao.com/tmc.htm?docId=2598&docType=9 分销闲管家消息通道} */
  interface ItemChange {
    /** 消息类型 */
    event_type: string;
    /** 发生变更的消息列表 */
    item_change_info: string;
  }
}

/** 闲鱼 */
declare namespace Idle.Fishmarketfixed {
  /** {@link https://open.taobao.com/tmc.htm?docId=2623&docType=9 鱼市一口价买家单订单交易消息变更} */
  interface OrderSyn {
    /** 鱼市一口价买家单id */
    biz_order_id: string;
    /** 鱼市一口价ic商品id */
    item_id: number;
    /** 鱼市一口价买家单主状态 */
    order_status: number;
    /** 鱼市一口价买家单子状态 */
    order_sub_status: number;
  }
}

/** 闲鱼 */
declare namespace Idle.Newoutlets {
  /** {@link https://open.taobao.com/tmc.htm?docId=2584&docType=9 闲鱼用户身份变更消息} */
  interface UserTagNotice {
    /** 商家所在的业务类型("new_outlets"-新奥莱，"flash_sale"-特卖) */
    biz_line: string;
    /** 业务所涉及的商家鱼小铺能力（"nfr_policy"-描述不符包邮退，"sdr_policy"-七天无理由退款） */
    idle_shop_ability: string;
    /** 商家身份变化类型（"user_entrance_pass"-商家入驻通过，"user_entrance_clear"-商家清退） */
    operation_type: string;
    /** 业务所涉及的商品类型，通过","分隔。例如(新奥莱)："15,16,26" */
    sp_item_type: string;
    /** 商家ID */
    user_id: number;
    /** 商家名称 */
    user_name: string;
  }
}

/** 闲鱼回收商消息 */
declare namespace Idle.Recycle {
  /** {@link https://open.taobao.com/tmc.htm?docId=2385&docType=9 闲鱼回收业务订单消息} */
  interface OrderStateSyn {
    /** 订单id */
    biz_order_id: string;
    /** 当前状态 */
    order_status: string;
    /** 回收场景 */
    scene_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1509&docType=9 回收订单交易消息} */
  interface OrderSyn {
    /** 回收商appkey */
    app_key: string;
    /** 闲鱼交易订单号 */
    biz_order_id: string;
    /** 1:订单创建 2:已上门取件 3:已质检 4:卖家确认交易完成 6:卖家订单已评价 7:回收商订单已评价 9：下单后已付款 10：追缴成功（用户需要还款回收商） 11：补尾款成功（质检金额大于预估价,回收商补尾款） 12：追缴单创建成功（用户需要还款回收商） 13：补尾款单创建成功（质检金额大于预估价,回收商补尾款） 100:卖家申请退回 101:货物已退回 102:卖家关闭订单 */
    order_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1513&docType=9 退款消息} */
  interface RefundStatusModify {
    /** 退款单Id */
    dispute_id: string;
    /** 订单id */
    order_id: string;
    /** 退款状态 */
    refund_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2609&docType=9 黄金回收门店信息变更通知} */
  interface StoreSyn {
    /** 具体地址 */
    address: string;
    /** 区/县名称 */
    area_name: string;
    /** 扩展字段 */
    attributes: string;
    /** 营业信息 */
    business_info: string;
    /** 城市名称 */
    city_name: string;
    /** 纬度 */
    latitude: string;
    /** 经度 */
    longitude: string;
    /** 高德门店id */
    poid: string;
    /** 省名称 */
    province_name: string;
    /** 门店id */
    store_id: number;
    /** 门店名称 */
    store_name: string;
    /** 门店状态 0:下线 1:上线 */
    store_status: number;
  }
}

/** 闲鱼已验货 */
declare namespace Idle.Topisv {
  /** {@link https://open.taobao.com/tmc.htm?docId=2416&docType=9 闲鱼开放平台-服务赔付单变更消息通知} */
  interface CompensateNotice {
    /** 赔付单申请id */
    apply_id: number;
    /** 主订单id */
    biz_order_id: number;
    /** 服务赔付单类型: NFR（描述不符包邮退），VNR（虚拟-描述不符全额退），FD_24HS（极速发货-24小时），FD_10MS（极速发货-10分钟） */
    service_type: string;
    /** 赔付单当前状态（10：已创建, 30：卖家已拒绝, 40：人工审核中, 50：卖家同意履约单结束, 51：人工审核同意结束, 52：人工审核拒绝履约单结束, 53：买家超时未处理,自动结束, 54：卖家超时未处理,自动支付, 1001：处理前买家取消, 1002：卖家拒绝买家取消） */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2182&docType=9 闲鱼开放平台-国际货品变更消息通知} */
  interface GlobalProductNotice {
    /** 对应的货品库存等级，当供货价变更时才会有，即 product_change_type 为 0 时 */
    inv_grade?: string;
    /** 商品 id，商货绑定关系变更时才会有，即product_change_type 为 1或者2时 */
    item_id?: number;
    /** 货品变更类型 0：供货价变更 1：商货绑定关系解除 */
    product_change_type: number;
    /** 货品id */
    product_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2032&docType=9 闲鱼开放平台-商品变更消息通知} */
  interface ItemNotice {
    /** 商品id */
    item_id: number;
    /** 商品状态 */
    item_status: number;
    /** 卖家id */
    seller_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2076&docType=9 闲鱼开放平台-订单逆向变更消息通知} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=2079&docType=9 闲鱼开放平台-订单变更消息通知} */
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

/** 闲鱼回收商消息 */
declare namespace Idle.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=2632&docType=9 买家修改地址通知卖家} */
  interface AddressModify {
    /** 订单ID */
    biz_order_id: string;
    /** 通知事件类型：BUYER_APPLY买家申请，SELLER_AGREE卖家同意，SELLER_REFUSE卖家拒绝 */
    event: string;
    /** 用户修改的地址 */
    modify_address?: string;
    /** 用户原来的地址 */
    origin_address?: string;
    /** 卖家Id */
    seller_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2648&docType=9 服务商订单评价消息} */
  interface TradeReteSuccess {
    /** 订单ID */
    biz_order_id: number | bigint;
    /** 评论者交易角色 1：评论者是卖家 0：评论者是买家 */
    rater_type: string;
    /** 评价内容 */
    rate_content: string;
    /** 评价类型: 1: 首评，2: 追评 */
    rate_type: string;
  }
}

/** 闲鱼 */
declare namespace Idle.Tranferpay {
  /** {@link https://open.taobao.com/tmc.htm?docId=1840&docType=9 直接转账交易消息} */
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

/** 闲鱼 */
declare namespace Idle.Twjd {
  /** {@link https://open.taobao.com/tmc.htm?docId=2407&docType=9 闲鱼图文鉴定业务订单消息} */
  interface OrderSyn {
    /** 订单信息 */
    biz_order_info: string;
    /** 服务订单主状态 */
    main_status: string;
    /** 订单类型：BIZ_ORDER/SERVICE_ORDER */
    order_type: string;
    /** 支付状态 */
    pay_status: string;
    /** 服务订单子状态 */
    sub_status: string;
  }
}
