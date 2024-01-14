/** 高德 */
declare namespace Gaode.Caiji {
  /** {@link https://open.taobao.com/tmc.htm?docId=1745&docType=9 高德采集生态小程序任务状态通知} */
  interface EccTaskAuditStatusNotify {
    /** 审核状态 3:审核中;4:审核通过;5:审核不通过 */
    audit_status: string;
    /** 发生时间 */
    occur_time: string;
    /** 店铺ID */
    shop_id: string;
    /** 商家提交信息 */
    submit_info: string;
    /** 用户ID */
    uid: string;
  }
}
