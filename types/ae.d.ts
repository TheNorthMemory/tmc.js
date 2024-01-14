/** AE */
declare namespace Ae.Logistics {
  /** {@link https://open.taobao.com/tmc.htm?docId=2209&docType=9 运单号修改} */
  interface TrackingNoUpdate {
    /** 新运单号 */
    new_logistics_no: string;
    /** 老运单号 */
    old_logistics_no: string;
    /** 商家ID */
    seller_id: number;
  }
}
