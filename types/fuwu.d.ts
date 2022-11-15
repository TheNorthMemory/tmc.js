/** 服务市场 */
declare namespace Fuwu.Confirm {
  /** 收入确认失败 */
  interface Fail {
    /** 内购服务名称 */
    article_name: string;
    /** 确认单Id */
    confirm_id: number;
    /** 订单id */
    order_id: string;
    /** 失败原因：用户拒绝，内部错误 */
    remark: string;
    /** 错误类型user_refuse:"用户拒绝",system_error:"系统错误“ */
    remark_code: string;
    /** 用户nick */
    user_nick: string;
  }

  /** 收入确认成功 */
  interface Success {
    /** 内购服务名称 */
    article_name: string;
    /** 确认单Id */
    confirm_id: number;
    /** 订单id */
    order_id: string;
    /** 成功原因：一种是用户主动确认，一种是到期自动确认 */
    remark: string;
    /** 用户nick */
    user_nick: string;
  }
}
