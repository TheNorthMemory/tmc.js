/** 闲鱼电商Saas */
declare namespace Logistics.Idlefish {
  /** {@link https://open.taobao.com/tmc.htm?docId=2800&docType=9 闲鱼寄件分单完成通知} */
  interface SeekFinish {
    /** 大头笔及路由码 */
    big_head_routing_code?: string;
    /** 快递大网订单号 */
    express_network_order_no?: string;
    /** 运单号 */
    mail_no: string;
    /** 新派件区域码 */
    new_delivery_chute_area_code?: string;
    /** 闲鱼寄件单号 */
    order_id: string;
    /** 闲鱼外部单号 */
    out_order_no: string;
    /** 集包地 */
    package_consolidation_location?: string;
  }
}
