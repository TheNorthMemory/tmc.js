/** 优酷 */
declare namespace Youku.Aigc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2477&docType=9 妙鸭SaaS对外开放-训练结果通知} */
  interface TrainResultNotify {
    /** 训练生成的模型信息 */
    data?: string;
    /** 错误码 */
    res_code?: string;
    /** 错误信息 */
    res_info?: string;
    /** 是否成功标识 */
    success: boolean;
    /** 任务id */
    task_id: string;
  }
}

/** TVOS应用审核平台 */
declare namespace Youku.Tvosappstore {
  /** {@link https://open.taobao.com/tmc.htm?docId=1397&docType=9 TVOS审核平台应用状态变更通知消息} */
  interface AppStatusChange {
    /** apk文件记录id */
    apk_file_id: number;
    /** 应用包名 */
    package_name: string;
    /** 操作原由 */
    reason?: string;
    /** 应用状态，0下线，1上线 */
    status: number;
    /** 变更时间戳，单位毫秒 */
    time: number;
    /** 应用版本，version_code，为空时表示所有版本都下线 */
    version: number;
  }
}
