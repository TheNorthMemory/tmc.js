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

  /** {@link https://open.taobao.com/tmc.htm?docId=2759&docType=9 线下门店订单发货消息} */
  interface SopStoreOrderDelivery {
    /** 发货单号 */
    delivery_order_code: string;
    /** 发货行信息 */
    order_lines: string;
    /** 包裹信息 */
    packages: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2765&docType=9 线下门店订单发货SN信息回传} */
  interface SopStoreOrderSnReport {
    /** 发货单号 */
    delivery_order_code: string;
    /** 发货订单行号和SN对应关系 */
    items: string;
    /** 发货的订单行信息 */
    order_lines: string;
  }
}
