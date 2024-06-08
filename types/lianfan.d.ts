/** 连凡 */
declare namespace Lianfan.Huiwa {
  /** {@link https://open.taobao.com/tmc.htm?docId=2561&docType=9 绘蛙模型状态变更消息} */
  interface ModelStateUpdate {
    /** 模型id */
    model_id: number;
    /** 模型状态 */
    model_status: number;
    /** 模型类型 */
    model_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2559&docType=9 绘蛙生图任务状态变更消息} */
  interface TaskStateUpdate {
    /** 主任务id */
    main_task_id: number;
    /** 扩展字段 */
    pass_through?: string;
    /** 任务类型 */
    task_biz_type: number;
    /** 任务id */
    task_id: number;
    /** 任务状态 */
    task_status: number;
  }
}
