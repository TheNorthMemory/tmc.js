/** 饿了么 */
declare namespace Ele.Enterprise {
  /** {@link https://open.taobao.com/tmc.htm?docId=1680&docType=9 饿了么企业订餐推送订单详情} */
  interface PushOrderDetail {
    /** 消息id */
    message_id: string;
    /** 订单编号 */
    order_id: string;
  }
}
