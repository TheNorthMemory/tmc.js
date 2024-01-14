/** 五道口 */
declare namespace Wdk.Capacity {
  /** {@link https://open.taobao.com/tmc.htm?docId=1360&docType=9 盒马运力消息} */
  interface Delivery {
    /** message_type: 2 => 工作状态变更；message_type: 3 => 到离站状态变更 */
    message_type: string;
    /** 消息体 */
    messgae_body: string;
    /** 链路调用ID */
    trace_id: string;
  }
}

/** 五道口营销 */
declare namespace Wdk.Market {
  /** {@link https://open.taobao.com/tmc.htm?docId=1366&docType=9 营销操作错误消息} */
  interface OperateSkuError {
    /** 活动ID */
    activity_id: number;
    /** 逻辑分组ID */
    logic_group_number?: number;
    /** 消息ID */
    readonly msg_id: string;
    /** 操作编码：A-新增，U-更新 */
    operate_code: string;
    /** 商家活动编码 */
    out_act_id?: string;
    /** 错误编码 */
    publish_error_code: string;
    /** 错误描述 */
    publish_error_msg: string;
    /** 门店列表 */
    shop_ids: string[];
    /** 商品skucode */
    sku_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1354&docType=9 营销发布商品错误} */
  interface OperateSkuErrror {
    /** 五道口营销活动Id */
    activity_id: number;
    /** 商家逻辑分组Id */
    logic_group_number?: number;
    /** 消息ID */
    readonly msg_id: string;
    /** 操作编码A-新增，D-删除 */
    operate_code: string;
    /** 商家外部活动Id */
    out_act_id?: string;
    /** 错误编码 */
    publish_error_code: string;
    /** 错误信息 */
    publish_error_msg: string;
    /** 门店列表 */
    shop_ids: string[];
    /** 商品编码 */
    sku_code: string;
  }
}

/** 五道口营销 */
declare namespace Wdk.Open {
  /** {@link https://open.taobao.com/tmc.htm?docId=1503&docType=9 五道口开放数据发布错误} */
  interface DataPublishError {
    /** 数据类型 */
    biz_code: string;
    /** 消息Id */
    readonly message_id: string;
    /** 外部数据Id */
    out_data_id: string;
    /** 关联的外部数据Id */
    relation_out_data_list?: string[];
    /** 错误编码 */
    result_code: string;
    /** 错误描述 */
    result_msg: string;
    /** 数据子类型 */
    sub_biz_code: string;
    /** 数据版本号 */
    version_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1502&docType=9 五道口开放数据关联通知} */
  interface DataRelation {
    /** 数据类型 */
    biz_code: string;
    /** 消息Id：${outDataId} + ${bizCode} + ${subBizCode} */
    readonly message_id: string;
    /** 外部数据ID */
    out_data_id: string;
    /** 子数据类型 */
    sub_biz_code: string;
    /** 淘鲜达数据Id */
    txd_data_id: string;
  }
}

/** 五道口 */
declare namespace Wdk.Workforce {
  /** {@link https://open.taobao.com/tmc.htm?docId=1359&docType=9 盒马三方用工需求发布} */
  interface RequirementPublish {
    /** 需求ID */
    demand_info_id: string;
    /** 消息体 */
    messgae_body: string;
    /** 消息ID */
    trace_id: string;
  }
}
