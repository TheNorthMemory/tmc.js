/** 天猫精灵供应链 */
declare namespace Genie.Gsc {
  /** {@link https://open.taobao.com/tmc.htm?docId=1906&docType=9 单据状态同步} */
  interface OrderStatusUpdate {
    /** 描述 */
    description?: string;
    /** 单据行 */
    order_line?: string;
    /** 单据编号 */
    order_number: string;
    /** 单据状态 */
    order_state?: string;
    /** 单据类型 */
    order_type: string;
    /** 消息追踪ID */
    trace_id?: string;
    /** 供应商编码 */
    vendor_code?: string;
    /** 供应商名称 */
    vendor_name?: string;
  }
}
