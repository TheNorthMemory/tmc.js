/** 菜鸟发货工作台 */
declare namespace Cainiao.Consignplatform {
  /** 发货工作台下发物流详情消息 */
  interface LogisiticsDetail {
    /** 快递公司code */
    cp_code: string;
    /** 快递公司名称 */
    cp_name: string;
    /** TMS_NOT_ACCEPT 已取号未揽收; TMS_ACCEPT 已揽收; TMS_DELIVERING 派件中;TMS_SIGN 妥投; TMS_FAILED 拒收; TMS_ERROR 配送异常; TMS_TRANSPORT 运输中; */
    logistics_action: string;
    /** lpCode */
    lp_code: string;
    /** 面单号 */
    mail_no: string;
    /** 事件发生时间 */
    occur_time: Date | number | string;
    /** 订单来源，比如 ”TMJL“ 代表天猫精灵 */
    order_source: string;
    /** 外部系统的业务id */
    outer_order_id: string;
    /** 外部子订单列表 */
    outer_sub_order_ids: string[];
    /** 商家id */
    user_id: number;
  }
}

/** IoT售后解决方案 */
declare namespace Cainiao.Iot {
  /** IoT售后工单信息消息 */
  interface AftersalesTicket {
    /** 设备条码 */
    device_bar_code: string;
    /** 消息类型 */
    tag: string;
    /** 工单ID */
    ticket_id: number;
  }
}
