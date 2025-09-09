/** 闲鱼已验货 */
declare namespace Selected.Appraise {
  /** {@link https://open.taobao.com/tmc.htm?docId=2685&docType=9 严选售中验订单逆向消息-Saas服务商} */
  interface RefundVerifySyn {
    /** 闲鱼订单ID */
    biz_order_id: number;
    /** 买家ID */
    buyer_id?: number;
    /** 额外信息 */
    extra_msg?: string;
    /** 闲鱼商品ID */
    item_id: number;
    /** 物流单号 */
    logistics_order_id?: string;
    /** 闲鱼订单状态 */
    order_status_4_saas: number;
    /** 闲鱼订单状态 */
    order_status_4_saas_desc?: string;
    /** 发品服务商appKey */
    saas_app_key?: string;
    /** 闲鱼卖家ID */
    seller_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2684&docType=9 严选售中验订单正向消息-Saas服务商} */
  interface VerifySyn {
    /** 闲鱼订单ID */
    biz_order_id: number;
    /** 买家ID */
    buyer_id?: number;
    /** 额外信息 */
    extra_msg?: string;
    /** 闲鱼商品ID */
    item_id?: number;
    /** 物流单号 */
    logistics_order_id?: string;
    /** 闲鱼订单状态 */
    order_status_4_saas: number;
    /** 闲鱼订单状态 */
    order_status_4_saas_desc?: string;
    /** 发品服务商appKey */
    saas_app_key?: string;
    /** 闲鱼卖家ID */
    seller_id?: number;
  }
}

/** 闲鱼已验货 */
declare namespace Selected.Reverify {
  /** {@link https://open.taobao.com/tmc.htm?docId=2686&docType=9 严选售中验订单消息同步-验货中心} */
  interface OrderSyn {
    /** 验货中心appkey */
    ac_app_key?: string;
    /** 闲鱼订单号 */
    biz_order_id: string;
    /** 买家收货地址 */
    buyer_address?: string;
    /** 消息事件类型 */
    event_type?: string;
    /** 事件描述 */
    event_type_desc?: string;
    /** 订单原始IMEI号 */
    imei?: string;
    /** 闲鱼订单状态 */
    order_status_4_ac: string;
    /** 卖家收货地址 */
    seller_address?: string;
  }
}
