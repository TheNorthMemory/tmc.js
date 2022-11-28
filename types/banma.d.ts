/** 平台消息 */
declare namespace Banma.Right {
  /** 斑马权益平台权益变更通知 */
  interface TradeCreate {
    /** 第三方返回信息 */
    extra: string;
    /** 实例code */
    instance_code: string;
    /** 实例状态 */
    instance_state: string;
    /** 订单编号 */
    order_code?: string;
  }
}
