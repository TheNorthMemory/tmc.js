/** 交易猫 */
declare namespace Jym.Order {
  /** {@link https://open.taobao.com/tmc.htm?docId=1971&docType=9 交易猫代练订单状态变更} */
  interface BoosterStatusChange {
    /** 订单id */
    order_id: string;
    /** 订单子状态 */
    order_status: string;
    /** 订单主状态 */
    order_status_type: string;
  }
}
