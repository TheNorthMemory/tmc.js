/** TVOS应用审核平台 */
declare namespace Youku.Tvosappstore {
  /** TVOS审核平台应用状态变更通知消息 */
  interface AppStatusChange {
    /** apk文件记录id */
    apk_file_id: number;
    /** 应用包名 */
    package_name: string;
    /** 操作原由 */
    reason: string;
    /** 应用状态，0下线，1上线 */
    status: number;
    /** 变更时间戳，单位毫秒 */
    time: number;
    /** 应用版本，version_code，为空时表示所有版本都下线 */
    version: number;
  }
}
