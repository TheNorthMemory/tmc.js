/** 酒店交易消息API */
declare namespace Xhotel.Distribution {
  /** {@link https://open.taobao.com/tmc.htm?docId=2375&docType=9 飞猪酒店订单状态变更消息} */
  interface StatusChange {
    /** 外部订单号 */
    dis_order_id: string;
    /** 分销渠道 */
    distributor: string;
    /** 飞猪订单号 */
    fliggy_order_id: number | bigint;
    /** 订单状态 */
    status: string;
    /** 订单状态描述 */
    status_desc: string;
  }
}
