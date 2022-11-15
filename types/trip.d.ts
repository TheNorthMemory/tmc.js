/** 酒店商品消息api */
declare namespace Trip.Hotel {
  /** 酒店商品底价加价商品加价规则消息通知 */
  interface BottomPriceRuleChange {
    /** 实体类型,枚举:rate,hotel,supplier,seller */
    entity_type: string;
    /** 商品id */
    gid: number;
    /** 酒店id */
    hid: number;
    /** 消息id */
    requestid: string;
    /** rpId */
    rp_id: number;
    /** 卖家id */
    seller_id: number;
    /** supplier */
    supplier: string;
  }

  /** 飞猪卖家酒店实体变更消息同步 */
  interface HotelChange {
    /** json格式,一些定制的扩展信息。目前暂定会放酒店标签信息。比如是否菲住联盟签约酒店 */
    extend: string;
    /** 酒店id */
    hid: number;
    /** 外部酒店code */
    out_hid: string;
    /** 卖家id */
    seller_id: number;
    /** 卖家昵称 */
    seller_nick: string;
    /** 变更类型，add,update,delete */
    type: string;
  }

  /** 酒店rate信息变更 */
  interface RateChange {
    /** 所属酒店hid */
    hid: number;
    /** 消息类型,add,update,delete */
    msg_type: string;
    /** 所属酒店code */
    out_hid: string;
    /** 所属房型code */
    out_rid: string;
    /** 所属的rateId */
    rate_id: number;
    /** 所属房型rid */
    rid: number;
    /** 所属的价格策略rpCode */
    rp_code: string;
    /** 所属的价格策略rpId */
    rp_id: number;
    /** 所属的卖家id */
    seller_id: number;
    /** 所属的供应商 */
    vendor: string;
  }

  /** 酒店价格计划消息 */
  interface RatePlanChange {
    /** 所属的hid */
    hid: number;
    /** 操作类型,add,update,delete */
    msg_type: string;
    /** 所属酒店的外部code */
    out_hid: string;
    /** 所属房型的外部code */
    out_rid: string;
    /** 说是房型的rid */
    rid: number;
    /** 修改的价格策略的rp_code */
    rp_code: string;
    /** 修改的价格策略的rpId */
    rp_id: number;
    /** 所属的卖家 */
    seller_id: number;
    /** 所属的供应商 */
    vendor: string;
  }

  /** room变更消息 */
  interface RoomChange {
    /** room的id */
    gid: number;
    /** 酒店hid */
    hid: number;
    /** 外部酒店code */
    out_hid: string;
    /** 外部房型code */
    out_rid: string;
    /** 房型rid */
    rid: number;
    /** 卖家id */
    seller_id: number;
  }

  /** 酒店房型消息 */
  interface RoomTypeChange {
    /** 变更酒店的hid */
    hid: number;
    /** 变更类型, 取值add,update,delete */
    msg_type: string;
    /** 变更酒店的外部code */
    out_hid: string;
    /** 变更房型的外部code */
    out_rid: string;
    /** 变更房型的rid */
    rid: string;
    /** 变更的卖家id */
    seller_id: number;
    /** 变更卖家的供应商名称 */
    vendor: string;
  }
}
