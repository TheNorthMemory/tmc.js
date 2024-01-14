/** 天猫服务 */
declare namespace Ascp.Insdustry {
  /** {@link https://open.taobao.com/tmc.htm?docId=2374&docType=9 送货入户并安装取消询价接口} */
  interface CancelInquiry {
    /** 取消原因 */
    reason: string;
    /** 服务单号 */
    readonly wds_coordination_order_id: string;
  }
}

/** 同城配送 */
declare namespace Ascp.Instantsonline {
  /** {@link https://open.taobao.com/tmc.htm?docId=2404&docType=9 同城配送在线下单物流状态回告} */
  interface LogisticsStatusCallback {
    /** 业务类型，INSTANT_ONLINE：同城配送-在线下单 */
    biz_type: string;
    /** 业务流水号 */
    cw_order_id: string;
    /** 描述 */
    desc?: string;
    /** 扩展，KV结构，key和value之间用"="分隔，多个key之间用";"分隔 */
    features?: string;
    /** ERP单号 */
    out_order_id: string;
    /** 资源CODE，用于发货 */
    resource_code: string;
    /** 物流状态，CREATED：已床单、ACCEPTED：骑手已接单、SHIPPING：配送中、SUCCESS：妥投、CANCELED：已取消、ABNORMAL：配送异常 */
    status_code: string;
    /** 推进状态时间 */
    time: number;
    /** 物流单号，用于发货 */
    waybill_code: string;
  }
}
