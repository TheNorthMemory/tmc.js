/** 天猫服务 */
declare namespace Ascp.Insdustry {
  /** 送货入户并安装取消询价接口 */
  interface CancelInquiry {
    /** 取消原因 */
    reason: string;
    /** 服务单号 */
    readonly wds_coordination_order_id: string;
  }
}
