/** 阿里云质检 */
declare namespace Aliyun.Gsc {
  /** {@link https://open.taobao.com/tmc.htm?docId=1899&docType=9 质检结果CPK触发查询} */
  interface ProductionQualityCpkCreate {
    /** 检测项目 */
    check_point: string;
    /** 查询唯一ID */
    id: string;
    /** 时间维度 */
    period_type: string;
    /** 产品编码列表 */
    product_infos?: string;
    /** 查询截止时间 */
    query_time_end?: number;
    /** 查询开始时间 */
    query_time_start?: number;
    /** 消息追踪ID */
    trace_id?: string;
    /** 供应商编码 */
    vendor_code?: string;
    /** 供应商名称 */
    vendor_name?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1900&docType=9 质检结果SPC详情触发查询} */
  interface ProductionQualityDetailSpcCreate {
    /** 检测项目 */
    check_point: string;
    /** 查询唯一ID */
    id?: string;
    /** 产品编码 */
    product_code: string;
    /** 日期 */
    statistical_date: string;
    /** 消息追踪ID */
    trace_id?: string;
    /** 供应商编码 */
    vendor_code?: string;
    /** 供应商名称 */
    vendor_name?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1898&docType=9 质检结果SPC触发查询} */
  interface ProductionQualitySpcCreate {
    /** 检测项目 */
    check_point: string;
    /** 查询唯一ID */
    id: string;
    /** 时间维度 */
    period_type: string;
    /** 产品编码列表 */
    product_infos?: string;
    /** 查询截止时间 */
    query_time_end?: number;
    /** 查询开始时间 */
    query_time_start?: number;
    /** 消息追踪ID */
    trace_id?: string;
    /** 供应商编码 */
    vendor_code?: string;
    /** 供应商名称 */
    vendor_name?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1874&docType=9 C2M物流信息下发} */
  interface ProductionReceiptInfoCreate {
    /** 发货状态 */
    delivery_status: string;
    /** 发货状态时间 */
    delivery_time: number;
    /** 描述 */
    description?: string;
    /** 采购单信息，包括单号和行号 */
    po_infos?: string;
    /** PO行号 */
    po_line_no?: string;
    /** PO号 */
    po_no?: string;
    /** 签收信息项(SN号) */
    sn?: string;
    /** 签收sn列表 */
    sn_infos?: string;
    /** 消息追踪ID */
    trace_id?: string;
    /** 供应商编码 */
    vendor_code?: string;
    /** 供应商名称 */
    vendor_name?: string;
    /** 快递单号 */
    waybill_code: string;
  }
}

/** IOT-智能制造 */
declare namespace Aliyun.Iot {
  /** {@link https://open.taobao.com/tmc.htm?docId=1683&docType=9 天天工厂采购单同步} */
  interface OrderSync {
    /** 采购单Id */
    external_id: string;
    /** 订单Id */
    order_id: string;
  }
}
