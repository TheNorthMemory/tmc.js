/** 零售通_公共 */
declare namespace Lst.Supplier {
  /** {@link https://open.taobao.com/tmc.htm?docId=1592&docType=9 零售通广播极速退款消息} */
  interface BroadcastFastRefundMessage {
    /** 主订单id */
    main_order_id: string;
    /** 退款单id */
    refund_id: string;
    /** 卖家登录id */
    seller_login_id: string;
    /** 子订单id */
    sub_order_ids: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1567&docType=9 品牌商极速退款消息创建} */
  interface FastRefundMessageCreate {
    /** 主订单id */
    main_order_id: string;
    /** 退款单id */
    refund_id: string;
    /** 卖家登录id */
    seller_login_id: string;
    /** 子订单id列表 */
    sub_order_ids: string;
  }
}
