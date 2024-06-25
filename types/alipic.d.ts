/** ALIPIC */
declare namespace Alipic.Lark {
  /** {@link https://open.taobao.com/tmc.htm?docId=2563&docType=9 佳影数据上云} */
  interface JiayingDataReport {
    /** 数据内容 */
    data_content: string;
    /** 唯一键 */
    data_id: string;
    /** 数据类型 */
    data_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2558&docType=9 POS配置态数据增量下行} */
  interface ResultDataDownlink {
    /** pos-bus接口返回参数 */
    lark_pos_bus_result_data: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2556&docType=9 排期列表数据增量下行} */
  interface SchedulesDataDownlink {
    /** 发送业务消息 */
    schedules_data: string;
  }
}
