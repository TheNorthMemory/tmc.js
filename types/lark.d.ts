/** 云智POS */
declare namespace Lark.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=2547&docType=9 云智POS离线交易信息同步} */
  interface PosTradeDataTransmit {
    /** 消息业务ID */
    pos_bus_data_id: string;
    /** 消息主体 */
    pos_bus_result_data: string;
  }
}
