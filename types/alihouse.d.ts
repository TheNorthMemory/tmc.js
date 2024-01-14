/** 阿里楼盘 */
declare namespace Alihouse.Customer {
  /** {@link https://open.taobao.com/tmc.htm?docId=1978&docType=9 动作线索消息} */
  interface ActionClueId {
    /** 业务线 1 楼盘详情底Bar2 楼盘详情员工list3 楼盘详情提醒留资4 楼盘卡片(地图）5 楼盘评测详情底bar6 楼盘卡片(泛内容）7 VR详情8 楼盘卡片(专题页)9 楼盘详情(精准营销)底Bar0 楼盘详情(精准营销)_其他留资11 楼盘详情领车券12 车券详情13 首次找房卡14 完整找房卡 */
    biz_line: number;
    /** 主键id */
    id: number;
    /** 0-非测试 1-测试 */
    is_test: number;
    /** 端口来源 1-天猫好房 2-会场 3-精准营销 */
    source: number;
    /** 业务系统来源 1-新房 2-二手房 */
    system: number;
    /** 类型 1 IM 2 电话咨询 3 预约看房 4 变价提醒 5 开盘提醒 6 电话留资表单 7 领车券 8 车券预约 9 找房卡提交 10 关注频道 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2284&docType=9 来客通_备注信息同步} */
  interface AppNoteSync {
    /** 备注信息业务id */
    biz_id: string;
    /** 备注关联的经纪人id */
    broker_id: number;
    /** 1661160810537【13位绝对毫秒】 */
    data_version: number;
    /** 0：非测试 1：测试 */
    is_test: number;
    /** 备注关联的经纪人门店id */
    store_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1963&docType=9 用户行为线索产出} */
  interface BehaviorClueId {
    /** 业务线 1 楼盘详情底Bar2 楼盘详情员工list3 楼盘详情提醒留资4 楼盘卡片(地图）5 楼盘评测详情底bar6 楼盘卡片(泛内容）7 VR详情8 楼盘卡片(专题页)9 楼盘详情(精准营销)底Bar0 楼盘详情(精准营销)_其他留资11 楼盘详情领车券12 车券详情13 首次找房卡14 完整找房卡 */
    biz_line: number;
    /** 主键id */
    id: number;
    /** 0-非测试 1-测试 */
    is_test: number;
    /** 归属商户code */
    merchant_id?: string;
    /** 端口来源 1-天猫好房 2-会场 3-精准营销 */
    source: number;
    /** 业务系统来源 1-新房 2-二手房 3-租房 */
    system: number;
    /** 1-预约看房 2-领车券 3-开盘提醒 4-变价提醒 5-IM留资 6-加入会员 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2439&docType=9 新二租归一表单线索消息通知} */
  interface BehaviorClueMsg {
    /** 业务线 1 楼盘详情底Bar 2 楼盘详情员工list */
    biz_line?: number;
    /** 主键id */
    id: number;
    /** 是否测试 0-非测试 1-测试 */
    is_test: number;
    /** 留资归属店铺code */
    merchant_id?: string;
    /** 端口来源 1-天猫好房 2-会场 3-精准营销 */
    source: number;
    /** 业务系统来源 1-新房 2-二手房 3-租房 4-房产服务 20-未知 */
    system: number;
    /** 留资类型 3 预约看房 4 变价提醒 5 开盘提醒 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2453&docType=9 IM线索消息通知} */
  interface ImMsg {
    /** 业务线 */
    biz_line?: number;
    /** IM留资id */
    id: number;
    /** 是否测试 0-非测试 1-测试 */
    is_test: number;
    /** 归属商户code */
    merchant_id?: string;
    /** 端口来源 1-天猫好房 2-会场 3-精准营销 */
    source: number;
    /** 业务系统来源 1-新房 2-二手房 3-租房 5-房产服务 20-未知 */
    system: number;
    /** 留资类型 3-IM */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1985&docType=9 用户关注提醒消息} */
  interface RemindNotice {
    /** 类型 0-新房 1-二手房 */
    data_type: number;
    /** 主键id */
    id: number;
    /** 0 - 非测试 1 - 测试 */
    is_test: number;
    /** 提醒类型 1-预约看房 3 - 开盘提醒 4 - 变价提醒 */
    remind_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2247&docType=9 租房用户行为线索消息通知} */
  interface RentBehaviorClueId {
    /** 业务线 1 楼盘详情底Bar2 楼盘详情员工list3 楼盘详情提醒留资4 楼盘卡片(地图） */
    biz_line?: number;
    /** 主键id */
    id: number;
    /** 0-非测试 1-测试 */
    is_test: number;
    /** 留资归属店铺code */
    merchant_id?: string;
    /** 端口来源 1-天猫好房 2-会场 3-精准营销 */
    source: number;
    /** 业务系统来源 3-租房 */
    system: number;
    /** 类型 1 IM 2 电话咨询 3 预约看房 4 变价提醒 5 开盘提醒 6 电话留资表单 7 领车券 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2246&docType=9 二手房用户行为线索消息通知} */
  interface SecondBehaviorClueId {
    /** 业务线 */
    biz_line?: number;
    /** 主键id */
    id: number;
    /** 0 - 非测试 1 - 测试 */
    is_test: number;
    /** 归属商户code */
    merchant_id?: string;
    /** 端口来源 1-天猫好房 2-会场 3-精准营销 */
    source: number;
    /** 2-二手房 */
    system: number;
    /** 类型 1 IM 2 电话咨询 3 预约看房 4 变价提醒 5 开盘提醒 6 电话留资表单 7 领车券 */
    type: number;
  }
}

/** 阿里楼盘 */
declare namespace Alihouse.House {
  /** {@link https://open.taobao.com/tmc.htm?docId=1842&docType=9 楼盘消息审核} */
  interface ProjectAudit {
    /** 详细信息 */
    detail: string;
    /** 外部编号 */
    external_id: string;
    /** 通知时间 */
    notify_time: string;
    /** 楼盘id */
    project_id: number;
    /** 状态 */
    status: number;
    /** 状态 */
    status_desc: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1845&docType=9 天猫好房商品审核结果通知} */
  interface ProjectSaleAudit {
    /** 详细原因 */
    detail: string;
    /** 通知时间 */
    notify_time: string;
    /** 楼盘id */
    project_id: number;
    /** 补贴id */
    sale_id: number;
    /** 审核状态 */
    status: number;
    /** 审核状态详情 */
    status_desc: string;
  }
}
