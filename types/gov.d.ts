/** 大资产拍卖Top端拍品消息 */
declare namespace Gov.Auction {
  /** {@link https://open.taobao.com/tmc.htm?docId=2179&docType=9 订单支付消息} */
  interface AuctionOrderPaid {
    /** 业务消息标识 */
    biz_msg_id: string;
    /** 订单id */
    biz_order_id: number;
    /** 公告案号或编号(可以是非必填，可能为空) */
    case_no?: string;
    /** 标的id */
    item_id: number;
    /** 订单金额（单位：分） */
    order_amount: number;
    /** 机构nick */
    org_nick: string;
    /** 资产编号(可以是非必填，可能为空) */
    out_biz_id?: string;
    /** 外部系统ID */
    out_item_id?: string;
    /** 外部系统用户ID */
    out_user_id?: string;
    /** 状态：0 支付成功； */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1838&docType=9 大资产拍卖拍品结束消息} */
  interface End {
    /** 业务消息标识 */
    biz_msg_id: string;
    /** 公告案号或者编号 */
    case_no: string;
    /** 拍品ID */
    item_id: number;
    /** 机构nick */
    org_nick: string;
    /** 资产编号 */
    out_biz_id?: string;
    /** 外部系统ID */
    out_item_id?: string;
    /** 标的物结束后竞价结果（0:流拍；1：竞价成交） */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2160&docType=9 标的结束即刻消息} */
  interface EndImmediate {
    /** 标的结束时间 */
    auction_end_time: string;
    /** 标的开始时间 */
    auction_start_time: string;
    /** 业务消息标识 */
    biz_msg_id: string;
    /** 标的id */
    item_id: number;
    /** 外部系统标的id，可能为空，发拍时传入了的话，这里就会有值 */
    out_item_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2178&docType=9 大资产标的上架消息} */
  interface Publish {
    /** 业务消息标识 */
    biz_msg_id: string;
    /** 公告案号或者编号 */
    case_no?: string;
    /** 标的ID */
    item_id: number;
    /** 机构Nick */
    org_nick: string;
    /** 资产编号 */
    out_biz_id?: string;
    /** 外部系统ID */
    out_item_id?: string;
    /** 发布状态（0:上架） */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2222&docType=9 推送机动车数据到斑马} */
  interface PushVehicleDataToBM {
    /** 时间戳 */
    datestamp: number;
    /** 拍品id */
    item_id: number;
    /** 拍品标题 */
    item_title: string;
    /** 拍品链接 */
    item_url: string;
    /** 车辆vin码 */
    vin?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2396&docType=9 全案资产打包信息} */
  interface QuanAnAssetsPack {
    /** 业务消息标识 */
    biz_msg_id: string;
    /** 主物品所属案号 */
    master_case_no: string;
    /** 主物品编号 */
    master_out_biz_id: string;
    /** 操作类型：0 新增，1 修改，2 删除 */
    operate_type: number;
    /** 主物品下的所有子物品编号，用,进行分割 */
    sub_out_biz_id_list_str: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2205&docType=9 斑马-机动车数据推送} */
  interface VehicleDataPush {
    /** 时间戳 */
    datestamp: number;
    /** 标的id */
    item_id: number;
    /** 拍品标题 */
    item_title: string;
    /** 拍品链接 */
    item_url: string;
    /** 机动车vin码 */
    vin?: string;
  }
}

/** 资产拍卖 */
declare namespace Gov.Qual {
  /** {@link https://open.taobao.com/tmc.htm?docId=2044&docType=9 拍品资质审核提交消息} */
  interface Submit {
    /** 资质审核ID */
    apply_id: string;
    /** 消息表示ID（结构为：拍品ID_资质审核ID） */
    biz_msg_id: string;
    /** 买家nick */
    buyer_nick: string;
    /** 拍品ID */
    item_id: string;
    /** 机构nick */
    org_nick: string;
  }
}

/** 竞价雷达 */
declare namespace Gov.Radarclue {
  /** {@link https://open.taobao.com/tmc.htm?docId=2087&docType=9 财产线索Excel监控源解析结果通知} */
  interface ExcelFinish {
    /** 上传的附件 ID */
    attach_id: string;
    /** 上传的附件名称 */
    attach_name: string;
    /** 消息唯一标识（附件ID_时间戳） */
    biz_msg_id: string;
    /** 解析失败条目 */
    parse_fail_item: number;
    /** 格式错误条数 */
    parse_formaterr_item: number;
    /** 非法条数(非银行上传个人) */
    parse_illegal_item: number;
    /** 敏感数据错误条数(备注、监控对象编号包含名称或证件号) */
    parse_sensitive_item: number;
    /** 解析是否成功 */
    parse_success: boolean;
    /** 解析成功条目 */
    parse_success_item: number;
    /** 机构淘宝账号nick(淘宝账户名称) */
    user_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2088&docType=9 财产线索定时统计消息通知} */
  interface Info {
    /** 附件 ID */
    attach_id: string;
    /** 附件名 */
    attach_name: string;
    /** 破产强清线索数 */
    banckrupt_clue_count: number;
    /** 正在拍卖线索条数 */
    bidding_clue_count: number;
    /** 消息唯一标识（消息ID_时间毫秒值） */
    biz_msg_id: string;
    /** 已成交线索条数 */
    deal_clue_count: number;
    /** 诉讼线索数 */
    litigation_clue_count: number;
    /** 保全线索数 */
    preservation_clue_count: number;
    /** 最近一次查找线索的时间 */
    recent_query_time: string;
    /** 机构淘宝账号nick(淘宝账户名称) */
    user_nick: string;
    /** 即将拍卖线索条数 */
    waiting_start_clue_count: number;
  }
}
