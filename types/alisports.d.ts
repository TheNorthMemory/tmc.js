/** 支付宝体育 */
declare namespace Alisports.Bank {
  /** {@link https://open.taobao.com/tmc.htm?docId=2120&docType=9 支付宝体育服务小程序关注消息} */
  interface Alipayattention {
    /** 用户触发唯一标识，防止重复 */
    biz_no: string;
    /** 触发时间 */
    biz_time?: string;
    /** 事件码 */
    event_code: string;
    /** 消息触发来源 */
    source: string;
    /** 下游mq topic */
    topic: string;
    /** 用户id */
    uid: string;
  }
}
