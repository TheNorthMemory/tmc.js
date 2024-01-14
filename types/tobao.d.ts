/** 直播间 */
declare namespace Tobao.Live {
  /** {@link https://open.taobao.com/tmc.htm?docId=1820&docType=9 直播间氛围消息开放} */
  interface LiveEventChange {
    /** 氛围类型，区分评论还是点赞等 */
    action: number;
    /** 主播id */
    anchor_id: number;
    /** 完成次数 */
    count?: number;
    /** 扩展参数 */
    extend?: string;
    /** 直播间id */
    live_id: number;
    /** 消息唯一id */
    msg_id: string;
    /** 直播间类型 */
    new_room_type?: string;
    /** 时间戳 */
    timestamp: string;
    /** 用户id */
    user_id: number;
    /** 用户昵称 */
    user_nick?: string;
  }
}
