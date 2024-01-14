/** AliOS手表 */
declare namespace Yunos.Watch {
  /** {@link https://open.taobao.com/tmc.htm?docId=1265&docType=9 透传cmns接收消息} */
  interface CmnsReceive {
    /** appKey */
    app_key: string;
    /** 透传消息 */
    dat?: string;
    /** 随机字符串 */
    id: string;
    /** ip地址 */
    ip?: string;
    /** 网络环境 */
    networking?: string;
    /** 来源app */
    src_app?: string;
    /** 来源app类型 */
    src_app_type: string;
    /** 时间 */
    timestamp?: number;
    /** yunos手机uuid */
    uuid?: string;
  }
}

/** YunOS YoC */
declare namespace Yunos.Yoc {
  /** {@link https://open.taobao.com/tmc.htm?docId=987&docType=9 YunOS YoC datapool 沙箱环境} */
  interface DatapoolSandbox {
    /** header */
    data: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=881&docType=9 yoc消息服务} */
  interface MessageService {
    /** args */
    args: string;
    /** id2 */
    id2: string;
    /** name */
    name: string;
    /** sid */
    sid: string;
    /** type */
    type: string;
  }
}
