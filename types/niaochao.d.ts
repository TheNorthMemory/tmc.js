/** 五道口配送 */
declare namespace Niaochao.Tccompass {
  /** 仓网络变更消息 */
  interface WarehouseNetworkChange {
    /** service_type */
    service_type: string;
    /** trace_id */
    trace_id: string;
    /** warehouse_code */
    warehouse_code: string;
    /** warehouse_merchant_code */
    warehouse_merchant_code: string;
  }
}
