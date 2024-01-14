/** 国际虚拟业务 */
declare namespace Global.Virtual {
  /** {@link https://open.taobao.com/tmc.htm?docId=1695&docType=9 国际虚拟业务对接码商} */
  interface MerchantSendCode {
    /** 订单类型 */
    biz_code: string;
    /** 商家sku code */
    ean_code: string;
    /** item id */
    item_id: string;
    /** 子交易订单号 */
    order_id: number;
    /** 商品数量 */
    quantity: number;
    /** 交易价格 */
    sale_price: number;
    /** 交易比重 */
    sale_price_currency_code: string;
    /** sku id */
    sku_id: string;
  }
}
