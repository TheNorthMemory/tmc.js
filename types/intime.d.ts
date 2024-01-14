/** 银泰 */
declare namespace Intime.Datacenter {
  /** {@link https://open.taobao.com/tmc.htm?docId=2056&docType=9 状态同步} */
  interface OrderStatus {
    /** 单据号 */
    current_no?: number;
    /** 枚举类型的class */
    enum_class?: string;
    /** 枚举名称 */
    enum_name?: string;
    /** 当前状态值 */
    new_status?: number;
    /** 之前状态值 */
    old_status?: number;
  }
}

/** 银泰 */
declare namespace Intime.Sc {
  /** {@link https://open.taobao.com/tmc.htm?docId=1966&docType=9 服务单创建和更新} */
  interface OrderCreateUpdate {
    /** 工单变更动作。枚举。创建create,完成complete,取消cancel,发货consign */
    action: string;
    /** 备注 */
    comment: string;
    /** 服务单id */
    sc_order_id: number;
    /** 服务单状态，初始状态是1 */
    status: number;
    /** 类型，默认1 */
    type: number;
    /** 变更时间 */
    update_date: Date | number | string;
    /** 本次使用的服务次数 */
    used_service_count: number;
  }
}
