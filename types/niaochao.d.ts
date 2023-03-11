/** 五道口配送 */
declare namespace Niaochao.Tccompass {
  /** 鸟潮站点变更消息 */
  interface DockInfoChange {
    /** 地址 */
    address?: string;
    /** 区编码 */
    area_id?: string;
    /** 站点编码 */
    biz_node_code: string;
    /** 站点名称 */
    biz_node_name: string;
    /** COLLECT_DOCK(2, "揽运站"), DELIVERY_DOCK(3, "配送站"), CFC(4, "近端履约中心"), */
    biz_node_type: number;
    /** 城市编码 */
    city_id?: string;
    /** 城市名称 */
    city_name?: string;
    /** 站点联系人 */
    contacts_name?: string;
    /** 联系电话 */
    contacts_tel?: string;
    /** 站点商家编码 */
    merchant_code: string;
    /** 经纬度 */
    poi?: string;
    /** 省份编码 */
    prov_id?: string;
    /** 省份名称 */
    prov_name?: string;
    /** 链路追踪traceId */
    trace_id?: string;
  }

  /** 仓网络变更消息 */
  interface WarehouseNetworkChange {
    /** 服务，WAVE_ARRIVE(1, "波次达"),ONE_HOUR(0, "小时达"), */
    service_type: string;
    /** 链路追踪ID */
    trace_id: string;
    /** 仓编码 */
    warehouse_code: string;
    /** 仓商家编码 */
    warehouse_merchant_code: string;
  }
}
