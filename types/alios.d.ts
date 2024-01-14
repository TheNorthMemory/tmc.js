/** AliOS COSMO */
declare namespace Alios.Cosmo {
  /** {@link https://open.taobao.com/tmc.htm?docId=1336&docType=9 流式API} */
  interface StreamPush {
    /** 消息体 */
    msg_body: string;
    /** 消息id */
    msg_id: string;
  }
}

/** AliOS手表 */
declare namespace Alios.Watch {
  /** {@link https://open.taobao.com/tmc.htm?docId=1297&docType=9 消息推送服务} */
  interface NotifyMessagePush {
    /** appKey */
    app_key: string;
    /** 厂商设备id集合 */
    cids: string[];
    /** 创建时间 */
    create_time: string;
    /** id */
    id: string;
    /** 需要展现的消息规则 */
    message: string;
    /** topic */
    topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1285&docType=9 透传消息} */
  interface PassthroughMessagePush {
    /** appKey */
    app_key: string;
    /** cid */
    cids: string[];
    /** 消息创建时间 */
    create_time: string;
    /** id */
    id: string;
    /** 根据场景配置，返回的具体的消息数据 */
    message: string;
    /** topic */
    topic: string;
  }
}
