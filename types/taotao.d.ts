/** 淘宝 */
declare namespace Taotao.Film {
  /** {@link https://open.taobao.com/tmc.htm?docId=1158&docType=9 退款消息同步} */
  interface ThirdPartyRefundPush {
    /** 冥等串，消息的唯一性标识。由于网络重传，消息可能会有重复投递的情况，外部渠道可利用该字段判断是否已经消费过该消息，如果已经消费，则可对该消息不做处理 */
    biz_serial?: string;
    /** 影院地址 */
    cinema_address?: string;
    /** 影院ID */
    cinema_id?: string;
    /** 影院名称 */
    cinema_name?: string;
    /** 外部订单号 */
    ext_order_id?: string;
    /** 影厅名称 */
    hall?: string;
    /** 订单金额 */
    ori_price?: number;
    /** 支付时间 */
    pay_date?: Date | number | string;
    /** 退款时间 */
    refund_date?: Date | number | string;
    /** 退款原因 */
    refund_reason?: string;
    /** 场次ID */
    schedule_id?: string;
    /** 座位数量 */
    seat_count?: number;
    /** 座位名称 */
    seat_info?: string;
    /** 电影结束时间 */
    show_end_time?: Date | number | string;
    /** 影片ID */
    show_id?: string;
    /** 影片名称 */
    show_name?: string;
    /** 放映时间 */
    show_time?: Date | number | string;
    /** 退款状态。 REFUNDING,代表发起退款,正在退款中 REFUND_SUCCESS,代表退款成功,钱已经回退到外部渠道支付宝账号 */
    status?: string;
    /** 淘宝订单号 */
    tb_order_id?: string;
  }
}
