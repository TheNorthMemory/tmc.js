/** 瓴羊 */
declare namespace Lingyang.Quickservice {
  /** {@link https://open.taobao.com/tmc.htm?docId=2709&docType=9 瓴羊卡片消息投递} */
  interface MessageCreate {
    /** 业务类型 */
    biz_type: string;
    /** 业务唯一id */
    biz_unique_id: string;
    /** 请求数据 */
    data: string;
    /** 请求id */
    request_id: string;
    /** 会话id */
    session_id: string;
  }
}
