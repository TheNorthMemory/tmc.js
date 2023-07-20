/** 天猫汽车 */
declare namespace Tmall.Aliauto {
  /** 分阶段交易确认消息 */
  interface StepOrderPartConfirmed {
    /** 订单id */
    order_id: number;
    /** 确认类型。一阶段确认，FIRST_STEP_CONFIRMED；二阶段确认，SECOND_STEP_CONFIRMED */
    type: string;
  }
}

/** 天猫汽车 */
declare namespace Tmall.Auto {
  /** 天猫汽车交易订单开放 */
  interface TradeModify {
    /** 订单id */
    order_id?: number;
    /** 订单状态 */
    status: number;
  }

  /** 天猫二轮车服务工单创建开放 */
  interface TwoWheelsReceiptCreate {
    /** 指定的外部门店id */
    appointed_outer_store_id?: string;
    /** 服务工单id */
    receipt_id: number;
  }
}

/** 天猫汽车 */
declare namespace Tmall.Car {
  /** 合同签署消息 */
  interface ContractSign {
    /** 合同下载地址，有效期10分钟 */
    contract_url: string;
    /** 订单id */
    order_id: number;
  }

  /** 汽车金融消息 */
  interface FinanceMsg {
    /** 订单id */
    order_id: number;
    /** 消息类型： FULL_PURCHASE_FINANCE_CANCEL_MSG_TYPE?，因全款购车导致金融取消 REFUND_FINANCE_CANCEL，因退款导致的金融单关闭 */
    type: string;
  }
}

/** 渠道中心API */
declare namespace Tmall.Channel {
  /** 申请单变更消息 */
  interface ApplyOrderChange {
    /** 申请单单号 */
    readonly channel_purchase_apply_order_no: string;
    /** 消息类型（1-创建；2-撤回; 3-同意供应商的修改; 4-拒绝供应商的修改） */
    message_type: number;
  }

  /** 发货单消息变更 */
  interface DeliverOrderChange {
    /** 发货单单号 */
    readonly main_deliver_order_no: number;
    /** 消息类型 */
    message_type: number;
  }

  /** 采购单变更消息 */
  interface PurchaseOrderChange {
    /** 主采购单号 */
    readonly main_purchase_order_no: number;
    /** 消息类型 */
    message_type: number;
  }

  /** 停止发货单变更消息 */
  interface StopOrderChange {
    /** 主采购单号 */
    readonly main_purchase_order_no: number;
    /** 消息类型 */
    message_type: number;
  }
}

/** 天猫服务 */
declare namespace Tmall.Fuwu {
  /** 天猫服务平台一键求助单消息队列 */
  interface AnomalyRecourse {
    /** 一键求助单id */
    anomaly_recourse_id: number;
    /** 一键求助单对象 */
    result: string;
  }

  /** 一键求助状态变更消息 */
  interface AnomalyRecourseStatusUpdate {
    /** 一键求助单id */
    anomaly_recourse_id: number;
    /** 状态 1:求助中;2完结(已核销) */
    status: number;
  }

  /** 天猫服务消电维修工单完结消息 */
  interface ElectricMaintenanceWorkCardComplete {
    /** 工单号 */
    workcard_id: string;
  }

  /** 天猫服务家装优质供给规则变更 */
  interface HomeDecorationSupplyRuleUpdate {
    /** 叶子类目名称 */
    category_name?: string;
    /** servicecode */
    service_code: string;
    /** 店铺名称 */
    shop_name?: string;
    /** 规则唯一编号 */
    unique_no: string;
    /** 更新时间 */
    update_date: Date | number | string;
    /** 工人校验类型（高级工人/品牌品类工人） */
    worker_check_type_list: string;
  }

  /** 服务供应链物流业务消息 */
  interface LogisticsInfoMessage {
    /** 物流创建 ：create 物流取消 ：cancel 分派小件员：assign 已经分派小件员: assigned 包裹上门揽收: pickup_door 包裹已揽收完成: pickup_finished 包裹派送中: dispatching 包裹已签收: signed */
    action: string;
    /** 天猫物流订单号。1、物流CP系统的物流单号关系为1对1。 2、要求物流CP系统内部需要保证幂等。 */
    logistics_order_id: number;
    /** 是否为来自新数据源的物流信息 */
    new_logistics?: boolean;
    /** 消费者-->门店（工厂）:STAGE1 门店（工厂）--> 消费者:STAGE2 */
    stage_type: string;
  }

  /** 消费者评价成功top消息 */
  interface RateMessageTP {
    /** 单据类型 */
    order_type: number;
    /** 评价id */
    rate_id: number;
    /** 评价星级 */
    rate_value: number;
    /** 单据id */
    work_order_id: number;
  }

  /** 服务商品信息变更消息 */
  interface ServiceItemUpdate {
    /** 服务商品id */
    data_id: number;
    /** 更新后的服务商品对象 */
    result: string;
    /** 更新来源的事件类型 createTemplate创建模板/updateTemplate更新模板 */
    src_type: string;
  }

  /** 服务预警消息 */
  interface ServiceMonitorMessage {
    /** 业务实体id，如果bizType为1，则bizId为工单id */
    biz_id: number;
    /** biz_id的业务类型，如果为1，则bizId为工单id */
    biz_type: number;
    /** 预警提示内容，如请及时处理即将超出6小时时未回传工人信息的服务工单，详情如下：父订单编号：XXX，服务子订单：XXX，服务工单号：XXX */
    content: string;
    /** 服务预警单创建时间，格式如：2011-11-06 13:12:11 */
    gmt_create: Date | number | string;
    /** 预警单主键id */
    id: number;
    /** 预警级别，1、预警 2、警告 3、严重 */
    level: number;
    /** 预警规则id */
    rule_id: string;
    /** 服务类型 */
    service_code: string;
  }

  /** 服务网点注册消息 */
  interface ServiceStoreRegister {
    /** 服务网点编号 */
    service_store_code: string;
    /** 服务网点id */
    service_store_id: number;
    /** 服务网点名称 */
    service_store_name: string;
    /** 服务商id */
    tp_id: number;
    /** 服务商名称 */
    tp_name: string;
  }

  /** 单个结算调整单数据推送 */
  interface SettleAdjustmentStatusUpdate {
    /** 扩展属性 */
    attributes: string;
    /** 实物订单信息 */
    biz_order_id: number;
    /** 费用 */
    cost: number;
    /** 调整单描述 */
    description: string;
    /** 结算调整单ID */
    id: number;
    /** 主订单id */
    parent_biz_order_id: number;
    /** 图片地址 */
    picture_urls: string;
    /** 相关计价因子 */
    price_factors: string;
    /** 服务编码 */
    service_code: string;
    /** 服务订单号 */
    service_order_id: number;
    /** 调整单状态 */
    state: number;
    /** 调整单类型 */
    type: number;
    /** 结算调整单状态 */
    workcard_id: number;
  }

  /** 天猫服务服务商分账消息推送 */
  interface SettleSupplierFcBill {
    /** 分成金额，单位分 */
    amount: number;
    /** 结算费用项 */
    details: string;
    /** 平台佣金比例 */
    platform_commission_rate: number;
    /** 服务工单ID */
    workcard_id: number;
  }

  /** 天猫服务履约合同单 */
  interface WorkcardContract {
    /** long，id */
    id: number;
    /** 返回的数据结构 */
    result: string;
  }

  /** 天猫服务任务工单 */
  interface WorkcardInfo {
    /** 商品附加属性 */
    auction_sku_properties?: string;
    /** 买家地址编码 */
    buyer_location?: number;
    /** 对外开放的业务对象 */
    result?: string;
  }

  /** 天猫服务任务工单状态变更 */
  interface WorkcardStatusUpdate {
    /** 工单变更动作。枚举。创建create,完成complete,取消cancel,发货consign */
    action?: string;
    /** 备注 */
    comment: string;
    /** 剩余服务次数。仅用于cancel节点和complete节点 */
    left_service_count?: number;
    /** 退掉的服务次数。仅用于cancel节点 */
    refund_service_count?: number;
    /** 状态。使用action，不要使用本字段 */
    status: number;
    /** 目前总的使用次数。仅用于complete节点 */
    total_used_service_count?: number;
    /** 服务提供商id */
    tp_id: number;
    /** 工单类型,固定值:1 */
    type: number;
    /** 更新时间 */
    update_date: Date | number | string;
    /** 本次使用的服务次数。仅用于complete节点 */
    used_service_count?: number;
    /** 工单id */
    workcard_id: number;
  }
}

/** 天猫美妆 */
declare namespace Tmall.Mei {
  /** 飞行入会消息 */
  interface MemberRegister {
    /** 消息业务ID */
    record_id: number;
    /** 商家ID */
    seller_id: number;
    /** 商家名称 */
    seller_name: string;
  }

  /** 品牌积分变更通知 */
  interface PointChange {
    /** 业务类型。gift_exchange:礼品兑换， cancel_exchange:取消兑换。 */
    biz_type?: string;
    /** 拓展信息 */
    ext_info?: string;
    /** 加密后的会员手机 */
    mix_mobile?: string;
    /** 加密后的NICK */
    mix_nick?: string;
    /** 明文手机号 */
    mobile?: string;
    /** 买家明文nick */
    nick?: string;
    /** 商家主体维度唯一id */
    omid: string;
    /** 卖家维度唯一id */
    ouid: string;
    /** 变动积分值，大于0 */
    point?: number;
    /** 该次变更记录ID */
    record_id?: number;
    /** 卖家名称 */
    seller_name?: string;
    /** 1：扣减，2：增加 */
    type?: number;
  }
}

/** 新零售终端下行消息 */
declare namespace Tmall.Nrt {
  /** 商品信息同步 */
  interface ItemsToEasyHome {
    /** 品牌id */
    brand_id: number;
    /** 品牌名称 */
    brand_name: string;
    /** 商品id */
    item_id: number;
    /** 商品名称 */
    item_name: string;
    /** 商品类型 同城站 city 普通线下 booth */
    item_type?: string;
    /** 操作类型 基础类型 new 、update、delete、query */
    op_type: string;
    /** 租赁合同号 */
    rent_contract_code: string;
  }
}

/** 聚石塔 */
declare namespace Tmall.Omnichannel {
  /** 商品库存变化 */
  interface InventoryChange {
    /** 业务操作类型 1.预扣（引起库存变化） 2.超时（释放引起库存变化） 3.付款（减库存引起库存变化） 4.拍下（减库存引起库存变化） 5.订单（关闭回补引起库存变化） 6.切换sku（引起库存变化） 7.商家（修改引起库存变化） 8.其他 */
    biz_operate_type: string;
    /** 变化的可售库存数 */
    change_sellable_quantity: number;
    /** 变化的预扣库存数 */
    change_withhold_quantity: number;
    /** 库存变更业务发送时间 */
    gmt_modified: Date | number | string;
    /** 库存变更类型 1.增量修改库存 2.全量修改库存 */
    inventory_change_type: number;
    /** 库存记录ID */
    inventory_id: number;
    /** 商品ID */
    item_id: number;
    /** 全渠道ID */
    omni_id?: string;
    /** 变化后的可售库存数 */
    result_sellable_quantity: number;
    /** 变化后的预扣库存数 */
    result_withhold_quantity: number;
    /** 事件类型 */
    type: string;
  }

  /** 商品库存归零 */
  interface InventoryZero {
    /** 当前总库存 */
    after_quantity: string;
    /** 0库存之前的总库存数 */
    before_quantity: number;
    /** 消息产生的时间 */
    event_time: Date | number | string;
    /** 触发0库存的原因 */
    event_type: string;
    /** 商品ID */
    item_id: number;
    /** 消息ID */
    message_id: string;
    /** 全渠道ID */
    omni_id?: string;
    /** Sku ID */
    sku_id: number | bigint;
    /** 事件类型 */
    type: string;
  }

  /** 商品描述变化 */
  interface ItemDescChange {
    /** 事件ID，能唯一标识一次事件请求 */
    event_id: string;
    /** 变更的时间 */
    gmt_modified: Date | number | string;
    /** 是否小二操作 */
    is_by_xiaoer: boolean;
    /** 商品ID */
    item_id: number;
    /** 修改之后的描述地址 */
    new_desc_path: string;
    /** 修改之前的描述地址 */
    old_desc_path: string;
    /** 全渠道ID */
    omni_id?: string;
    /** 卖家ID */
    seller_id: number;
    /** 事件类型 */
    type: string;
    /** 商品类型 */
    user_type: number;
  }

  /** 商品下架 */
  interface ItemDownShelf {
    /** 事件ID，能唯一标识一次事件请求 */
    event_id: string;
    /** 变更的时间 */
    gmt_modified: Date | number | string;
    /** 是否小二操作 */
    is_by_xiaoer: boolean;
    /** 商品ID */
    item_id: number;
    /** 全渠道ID */
    omni_id?: string;
    /** 卖家ID */
    seller_id: number;
    /** 事件类型 */
    type: string;
    /** 商品类型 */
    user_type: number;
  }

  /** 商品图片变化 */
  interface ItemImageChange {
    /** 商品多图信息(已经去除主图,不含属性图片) */
    common_image_pict_url_list: string[];
    /** 事件ID，能唯一标识一次事件请求 */
    event_id: string;
    /** 变更的时间 */
    gmt_modified: Date | number | string;
    /** 是否小二操作 */
    is_by_xiaoer: boolean;
    /** 商品ID */
    item_id: number;
    /** 商品主图信息 */
    main_pict_url: string;
    /** 全渠道ID */
    omni_id?: string;
    /** 卖家ID */
    seller_id: number;
    /** 事件类型 */
    type: string;
    /** 商品类型 */
    user_type: number;
  }

  /** 商品价格变更 */
  interface ItemPriceChange {
    /** 事件ID，能唯一标识一次事件请求 */
    event_id: string;
    /** 变更的时间 */
    gmt_modified: Date | number | string;
    /** 是否小二操作 */
    is_by_xiaoer: boolean;
    /** 商品ID */
    item_id: number;
    /** 修改之后的价格 */
    new_price: number;
    /** 修改之前的价格 */
    old_price: number;
    /** 全渠道ID */
    omni_id?: string;
    /** 卖家ID */
    seller_id: number;
    /** 事件类型 */
    type: string;
    /** 商品类型 */
    user_type: number;
  }
}

/** 天猫服务 */
declare namespace Tmall.Servicecenter {
  /** 天猫服务平台工单更新 */
  interface TaskUpdate {
    /** 属性字符串。使用;隔开，key:value格式保存。 */
    attributes?: string;
    /** 省市区地址,之间用空白隔开 */
    buyer_address?: string;
    /** 买家id */
    buyer_id?: number;
    /** 买家名称 */
    buyer_name: string;
    /** 买家电话 */
    buyer_phone?: string;
    /** 操作类型，如CREATE:创建， CANCEL:取消，RESERVE:预约，RERESERVE:重新预约 */
    change_type: string;
    /** 工单id */
    id: number;
    /** 主状态,1000:工单创建,2000:服务中,3000:完结 */
    main_status: number;
    /** 来源系统 */
    order_source: string;
    /** 顾客提交退货取消或改期申请时间 */
    order_time?: string;
    /** 服务名称,买断 */
    service_code: string;
    /** 买家预约时间 */
    service_time?: Date | number | string;
    /** 子状态,1001:鉴定,1002:非鉴定(强制),1003:从新预约;2001:预安排师傅,2002:上门;3001:取消,3002:完成,3003:拒收; */
    sub_status: number;
    /** 更新时间 */
    update_time?: Date | number | string;
  }
}

/** 天猫服务 */
declare namespace Tmall.Serviceplatform {
  /** 签到消息 */
  interface SignCreate {
    /** id */
    id: number;
    /** ouid */
    outid: string;
    /** parent_order_ids */
    parent_order_ids: string;
    /** sign_datetime */
    sign_datetime: Date | number | string;
  }

  /** 工人请假发送消息 */
  interface WorkerLeave {
    /** 请假日期 */
    leave_day: string;
    /** 具体请假时间段 */
    leave_time: string;
    /** 操作请假日期的时间 */
    operate_time: Date | number | string;
    /** 工人姓名 */
    worker_name: string;
    /** 工人手机号 */
    worker_phone: string;
  }
}
