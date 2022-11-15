/** YunOS YoC */
declare namespace Yunos.Yoc {
  /** YunOS YoC datapool 沙箱环境 */
  interface DatapoolSandbox {
    /** header */
    data: string;
  }

  /** yoc消息服务 */
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
