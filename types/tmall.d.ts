/** 天猫汽车 */
declare namespace Tmall.Aliauto {
  /** {@link https://open.taobao.com/tmc.htm?docId=2048&docType=9 天猫汽车分阶段订单打款消息} */
  interface StepOrderPartConfirm {
    /** 买家昵称 */
    buyer_nick: string;
    /** 订单id */
    order_id: number;
    /** 商家昵称 */
    seller_nick: string;
    /** 打款类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2050&docType=9 分阶段交易确认消息} */
  interface StepOrderPartConfirmed {
    /** 订单id */
    order_id: number;
    /** 确认类型。一阶段确认，FIRST_STEP_CONFIRMED；二阶段确认，SECOND_STEP_CONFIRMED */
    type: string;
  }
}

/** 天猫汽车 */
declare namespace Tmall.Auto {
  /** {@link https://open.taobao.com/tmc.htm?docId=1989&docType=9 服务工单创建} */
  interface ServiceReceiptCreate {
    /** 工单id */
    receipt_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1949&docType=9 天猫汽车交易订单开放} */
  interface TradeModify {
    /** 订单id */
    order_id?: number;
    /** 订单状态 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1994&docType=9 天猫二轮车服务工单创建开放} */
  interface TwoWheelsReceiptCreate {
    /** 指定的外部门店id */
    appointed_outer_store_id?: string;
    /** 服务工单id */
    receipt_id: number;
  }
}

/** 天猫汽车 */
declare namespace Tmall.Car {
  /** {@link https://open.taobao.com/tmc.htm?docId=2457&docType=9 天猫汽车-支付宝手机充值红包发放} */
  interface AliapayTelRedPacket {
    /** 业务id */
    biz_id: string;
    /** 业务幂等id */
    biz_order_no?: string;
    /** 业务请求时间 */
    biz_time?: string;
    /** 业务uuid */
    biz_uuid: string;
    /** 匹配关键词 */
    match_keyword?: string;
    /** 消息topic */
    topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1952&docType=9 天猫汽车触发支付宝事件发奖} */
  interface AlipayEvent {
    /** 业务id */
    biz_id: string;
    /** 业务幂等id */
    biz_order_no?: string;
    /** 业务请求时间 */
    biz_time?: string;
    /** 业务uuid */
    biz_uuid: string;
    /** 匹配关键词 */
    match_keyword?: string;
    /** 消息topic */
    topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2340&docType=9 合同签署消息} */
  interface ContractSign {
    /** 合同下载地址，有效期10分钟 */
    contract_url: string;
    /** 订单id */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2341&docType=9 汽车金融消息} */
  interface FinanceMsg {
    /** 订单id */
    order_id: number;
    /** 消息类型： FULL_PURCHASE_FINANCE_CANCEL_MSG_TYPE?，因全款购车导致金融取消 REFUND_FINANCE_CANCEL，因退款导致的金融单关闭 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1930&docType=9 天猫汽车特惠充} */
  interface TelCoupon {
    /** 业务id */
    biz_id: string;
    /** 业务幂等id */
    biz_order_no?: string;
    /** 业务请求时间 */
    biz_time?: string;
    /** 业务uuid */
    biz_uuid: string;
    /** 匹配关键词 */
    match_keyword?: string;
    /** 消息topic */
    topic: string;
  }
}

/** 天猫 */
declare namespace Tmall.Carprofile {
  /** {@link https://open.taobao.com/tmc.htm?docId=2127&docType=9 用户车辆档案授权状态更新} */
  interface AuthStatusChangeToISV {
    /** ISV账户编号 */
    channel_id: string;
    /** ISV渠道类型。1-天猫养车 */
    channel_type: number;
    /** 幂等ID */
    impl_id: string;
    /** 同步状态。1-打开，0-关闭 */
    sync_status: number;
  }
}

/** 渠道中心API */
declare namespace Tmall.Channel {
  /** {@link https://open.taobao.com/tmc.htm?docId=1266&docType=9 申请单变更消息} */
  interface ApplyOrderChange {
    /** 申请单单号 */
    readonly channel_purchase_apply_order_no: string;
    /** 消息类型（1-创建；2-撤回; 3-同意供应商的修改; 4-拒绝供应商的修改） */
    message_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1276&docType=9 发货单消息变更} */
  interface DeliverOrderChange {
    /** 发货单单号 */
    readonly main_deliver_order_no: number;
    /** 消息类型 */
    message_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1275&docType=9 采购单变更消息} */
  interface PurchaseOrderChange {
    /** 主采购单号 */
    readonly main_purchase_order_no: number;
    /** 消息类型 */
    message_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1277&docType=9 停止发货单变更消息} */
  interface StopOrderChange {
    /** 主采购单号 */
    readonly main_purchase_order_no: number;
    /** 消息类型 */
    message_type: number;
  }
}

/** 天猫服务 */
declare namespace Tmall.Fuwu {
  /** {@link https://open.taobao.com/tmc.htm?docId=923&docType=9 天猫服务平台一键求助单消息队列} */
  interface AnomalyRecourse {
    /** 一键求助单id */
    anomaly_recourse_id: number;
    /** 一键求助单对象 */
    result: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=957&docType=9 一键求助状态变更消息} */
  interface AnomalyRecourseStatusUpdate {
    /** 一键求助单id */
    anomaly_recourse_id: number;
    /** 状态 1:求助中;2完结(已核销) */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2408&docType=9 天猫服务消电维修工单完结消息} */
  interface ElectricMaintenanceWorkCardComplete {
    /** 工单号 */
    workcard_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2463&docType=9 天猫服务消电保修码状态变更} */
  interface ElectricWarrantyCodeStatusUpdate {
    /** 保修码OSS文件名 */
    oss_file_name: string;
    /** 保修码OSS文件下载链接 */
    oss_file_url: string;
    /** 保修码状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2429&docType=9 天猫服务家装优质供给规则变更} */
  interface HomeDecorationSupplyRuleUpdate {
    /** 叶子类目名称 */
    category_name?: string;
    /** 操作类型（add/edit/delete） */
    operate_type: string;
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

  /** {@link https://open.taobao.com/tmc.htm?docId=1926&docType=9 服务供应链物流业务消息} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=2409&docType=9 消费者评价成功top消息} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=1290&docType=9 服务商品信息变更消息} */
  interface ServiceItemUpdate {
    /** 服务商品id */
    data_id: number;
    /** 更新后的服务商品对象 */
    result: string;
    /** 更新来源的事件类型 createTemplate创建模板/updateTemplate更新模板 */
    src_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1247&docType=9 服务预警消息} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=1843&docType=9 服务网点注册消息} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=927&docType=9 单个结算调整单数据推送} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=2372&docType=9 天猫服务服务商分账消息推送} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=888&docType=9 天猫服务履约合同单} */
  interface WorkcardContract {
    /** long，id */
    id: number;
    /** 返回的数据结构 */
    result: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=659&docType=9 天猫服务任务工单} */
  interface WorkcardInfo {
    /** 商品附加属性 */
    auction_sku_properties?: string;
    /** 买家地址编码 */
    buyer_location?: number;
    /** 对外开放的业务对象 */
    result?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=683&docType=9 天猫服务任务工单状态更新} */
  interface WorkcardStatusChange {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=660&docType=9 天猫服务任务工单状态变更} */
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

/** 天猫 */
declare namespace Tmall.Homedecorationfuwu {
  /** {@link https://open.taobao.com/tmc.htm?docId=2490&docType=9 天猫家装服务工单状态推送} */
  interface WorkcardStatusUpdateForSeller {
    /** 工单状态 */
    action: string;
    /** 更新时间 */
    update_date: string;
    /** 工单号 */
    workcard_id: number;
  }
}

/** 天猫 */
declare namespace Tmall.Ifpfulfill {
  /** {@link https://open.taobao.com/tmc.htm?docId=1997&docType=9 创建订单结果通知接口} */
  interface ResultNotice {
    /** 错误码 */
    create_error_code: string;
    /** 错误消息 */
    create_error_message: string;
    /** true-创建订单成功 false-失败 */
    create_order_result: boolean;
    /** 履约状态 */
    fulfill_order_status: string;
    /** 时间片结束时间，create_order_result=true有效 */
    promise_arrive_time_end: Date | number | string;
    /** 时间片开始时间，create_order_result=true有效 */
    promise_arrive_time_start: Date | number | string;
    /** 订单id */
    source_order_id: string;
  }
}

/** 天猫 */
declare namespace Tmall.Jst {
  /** {@link https://open.taobao.com/tmc.htm?docId=804&docType=9 商家消息} */
  interface BusinessInformationSend {
    /** 消息体 */
    bodys: string;
    /** 类目Key */
    category_key: string;
    /** 类目名 */
    category_name: string;
    /** 消息编号 */
    id: string;
    /** 次级类目Key */
    sub_category_key: string;
    /** 次级类目名 */
    sub_category_name: string;
  }
}

/** 天猫美妆 */
declare namespace Tmall.Mei {
  /** {@link https://open.taobao.com/tmc.htm?docId=693&docType=9 绑定操作通知} */
  interface CrmBind {
    /** 混淆的淘宝昵称 */
    mix_taobao_nick?: string;
    /** 加密后的手机号码 */
    mobile: string;
    /** 卖家昵称 */
    seller_name: string;
    /** 消息序列号 */
    sequence: number;
    /** 淘宝昵称 */
    taobao_nick?: string;
    /** 1.绑定，2.解绑 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=690&docType=9 用户绑定请求} */
  interface CrmBindQuery {
    /** 加密后的手机号码 */
    mobile: string;
    /** 卖家昵称 */
    seller_name: string;
    /** 序列号 */
    sequence: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=694&docType=9 会员信息查询通知} */
  interface CrmMemberQuery {
    /** 加密后的用户手机号 */
    mobile: string;
    /** 卖家名称 */
    seller_name: string;
    /** 消息序列号 */
    sequence: number;
    /** 淘宝昵称 */
    taobao_nick: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=653&docType=9 天猫美妆店铺礼品兑换通知} */
  interface GiftExchange {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1425&docType=9 飞行入会消息} */
  interface MemberRegister {
    /** 消息业务ID */
    record_id: number;
    /** 商家ID */
    seller_id: number;
    /** 商家名称 */
    seller_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=721&docType=9 品牌积分变更通知} */
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

/** 天猫 */
declare namespace Tmall.Mlh {
  /** {@link https://open.taobao.com/tmc.htm?docId=1274&docType=9 魅力惠Inseason关键属性变化通知} */
  interface InseasonUpdateNotify {
    /** 业务对象Id */
    biz_objid: string;
    /** 帐套BizType */
    biz_type: number;
    /** 商品开始时间 */
    item_starts?: number;
    /** 修改时间，yyyy-MM-dd HH:mm:ss */
    modified_time: string;
    /** 用业务目标+下划线+业务Id+下划线+时间戳为消息Id，确保唯一性 */
    msg_id: string;
    /** 表示消息通知的目标 */
    msg_target: string;
    /** 对应的店铺ID */
    seller_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2261&docType=9 魅力惠分销库存同步} */
  interface InventorySync {
    /** 消息时间戳 */
    msg_id: number;
    /** 库存数量 */
    quantity: number;
    /** 货品ID */
    sc_item_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2157&docType=9 魅力惠订单取消通知} */
  interface OrderCancelNotify {
    /** 主订单号 */
    biz_order_id: string;
    /** 主订单状态 */
    biz_order_status: string;
    /** 主订单状态 */
    biz_order_status_desc: string;
    /** 消退单号 */
    refund_id: string;
    /** 子订单号 */
    sub_biz_order_id: string;
    /** 子订单状态 0-正常 1-取消 2-已退货退款 */
    sub_biz_order_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2257&docType=9 魅力惠发货同步回调消息} */
  interface OrderDeliveryCallBack {
    /** 承运商 */
    express_com: string;
    /** 运单号 */
    express_no: string;
    /** 分销订单编码（非奢品订单ID） */
    order_code: string;
    /** 履约子单明细 */
    order_items?: string;
    /** 分销来源 */
    source: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2263&docType=9 分销消退入库消息} */
  interface OrderReturnCallBack {
    /** 快递单号 */
    logistics_mail_no: string;
    /** 淘系退单号 */
    refund_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1520&docType=9 魅力惠PO单审批通过消息通知} */
  interface POAuditCompletedNotify {
    /** 10000/69000 */
    biz_code: string;
    /** 营销类型 */
    marketing_type: number;
    /** 唯一id */
    msg_id: string;
    /** 采购单No. */
    purchase_order_no: string;
    /** 销售方式 */
    sale_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1234&docType=9 魅力惠PO收货消息} */
  interface PoReceivedNotify {
    /** 修改时间，yyyy-MM-dd HH:mm:ss */
    modify_time: string;
    /** 以PO+_+系统时间戳作为消息ID，确定唯一性 */
    msg_id: string;
    /** po单号，即收货中的PO号 */
    po: string;
  }
}

/** 天猫 */
declare namespace Tmall.Multshop {
  /** {@link https://open.taobao.com/tmc.htm?docId=1456&docType=9 多旗舰店签约完成消息} */
  interface Msg {
    /** 消息id */
    message_id: string;
    /** 物理门店所在的旗舰店id */
    real_seller_id: number;
    /** 物理门店所在旗舰店名称 */
    real_seller_name?: string;
    /** 物理门店id */
    real_store_id: number;
    /** 物理门店名称 */
    real_store_name?: string;
    /** 授权状态：1、授权中 2、虚拟门店确认授权 3、同意授权 4、授权完成 5、解除授权 */
    status: number;
    /** 虚拟门店所在旗舰店id */
    virtual_seller_id: number;
    /** 虚拟门店所在旗舰店名称 */
    virtual_seller_name?: string;
    /** 虚拟门店id */
    virtual_store_id: number;
    /** 虚拟门店名称 */
    virtual_store_name?: string;
  }
}

/** 新零售终端下行消息 */
declare namespace Tmall.Nrt {
  /** {@link https://open.taobao.com/tmc.htm?docId=1341&docType=9 商品信息同步} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=1748&docType=9 天猫同城配送状态消息} */
  interface TcpsDeliveryStatus {
    /** 状态描述、取消原因等 */
    desc: string;
    /** 淘宝主订单ID */
    order_id: number;
    /** 配送状态， WAIT_DSD_DISPATCH：已创建履行单,等待呼叫运力 WAIT_DSD_TAKE_ORDER：已下发,等待骑手接单 WAIT_DSD_RIDER_PICK_GOODS：骑手已接单,待骑手提货 WAIT_DSD_RIDER_SERVED：骑手已提货,待骑手送达 WAIT_DSD_RIDER_REFUSE_SIGN：骑手送达,妥投失败 FULFILL_DSD_FAIL：履行失败 FULFILL_DSD_SUCCESS：妥投成功,履行成功 */
    status: string;
    /** 配送状态描述 */
    status_desc: string;
    /** 淘宝卖家ID */
    user_id: number;
  }
}

/** 天猫 */
declare namespace Tmall.Oic {
  /** {@link https://open.taobao.com/tmc.htm?docId=1570&docType=9 天猫货品入库消息} */
  interface InventoryInbound {
    /** 支付宝userId */
    alipay_user_id: string;
    /** 入库库存数目 */
    inbound_amount: number;
    /** 入库时间 */
    inbound_time: number;
    /** 货主id */
    owner_id: number;
    /** 货主昵称 */
    owner_nick: string;
    /** 后端货品id */
    sc_item_id: number;
    /** 仓库编码 */
    store_code: string;
    /** 仓库类型 */
    store_type: string;
    /** 幂等编号 */
    unique_no: string;
  }
}

/** 聚石塔 */
declare namespace Tmall.Omnichannel {
  /** {@link https://open.taobao.com/tmc.htm?docId=826&docType=9 商品优惠价格变更} */
  interface DiscountedPriceChange {
    /** 商品Id */
    item_id: number;
    /** 消息Id */
    message_id: string;
    /** 卖家Id */
    seller_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=809&docType=9 商品库存变化} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=810&docType=9 商品库存归零} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=800&docType=9 商品描述变化} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=801&docType=9 商品下架} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=802&docType=9 商品图片变化} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=803&docType=9 商品价格变更} */
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

/** 天猫 */
declare namespace Tmall.Onehour {
  /** {@link https://open.taobao.com/tmc.htm?docId=1357&docType=9 货品商品同步} */
  interface ScmItem {
    /** 品牌名称 */
    brand?: string;
    /** 一级类目编码 */
    category_1_code?: string;
    /** 淘宝一级类目名称 */
    category_1_name: string;
    /** 二级类目编码 */
    category_2_code?: string;
    /** 淘宝二级类目名称 */
    category_2_name?: string;
    /** 三级类目编码 */
    category_3_code?: string;
    /** 淘宝三级类目名称 */
    category_3_name?: string;
    /** 高 */
    high?: string;
    /** 商品详细 */
    item_detail?: string;
    /** 商品id */
    item_id: string;
    /** 长 */
    length?: string;
    /** 主图 */
    main_picture?: string;
    /** 原产地 */
    original_location: string;
    /** 箱规 */
    pcs?: string;
    /** 产地 */
    place_of_origin?: string;
    /** 一口价 */
    price?: string;
    /** 生产许可证编号 */
    production_license_number?: string;
    /** 条码 */
    scm_barcode?: string;
    /** 货品ID,后端商品ID */
    sc_item_id?: string;
    /** 售卖单位 */
    sell_unit?: string;
    /** 商品保质期 */
    shelf_life?: string;
    /** 规格 */
    spec_detail?: string;
    /** 税率 */
    tax_invoice?: string;
    /** 税收编码 */
    tax_rate_code?: string;
    /** 商品标题 */
    title: string;
    /** 重量 */
    weight?: string;
    /** 宽 */
    wide?: string;
  }
}

/** 天猫 */
declare namespace Tmall.Posfee {
  /** {@link https://open.taobao.com/tmc.htm?docId=1460&docType=9 刷卡费率消息} */
  interface Msg {
    /** 订单号 */
    order_id: number;
    /** 支付记录流水号 */
    pay_serial_no: string;
    /** 刷卡费用 */
    pos_fee: number;
    /** 子支付订单号 */
    sub_payorder_id: number;
    /** 收单机构流水号 */
    trx_id: string;
  }
}

/** 天猫 */
declare namespace Tmall.Refund {
  /** {@link https://open.taobao.com/tmc.htm?docId=304&docType=9 退款关闭消息} */
  interface RefundClosed {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=303&docType=9 退款创建消息} */
  interface RefundCreate {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=314&docType=9 创建退款留言消息} */
  interface RefundMessageCreated {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=305&docType=9 买家修改协议消息} */
  interface RefundModified {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=306&docType=9 赔付完成消息} */
  interface RefundPaymentFinished {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=307&docType=9 极速退款消息} */
  interface RefundPrepaid {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=310&docType=9 卖家同意退货消息} */
  interface RefundSellerAgreeReturn {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=311&docType=9 卖家拒绝退款消息} */
  interface RefundSellerRefuse {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=312&docType=9 退款成功消息} */
  interface RefundSucceed {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=313&docType=9 小二介入消息} */
  interface RefundTaobaoInvolved {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=308&docType=9 退款标记取消消息} */
  interface RefundableCanceled {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=309&docType=9 退款标记创建消息} */
  interface RefundableMarked {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=315&docType=9 买家退货，填写退货单消息} */
  interface ReturnBuyerReturnGoods {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=319&docType=9 买家填写物流单，卖家拒绝退货消息} */
  interface ReturnConfirmFailed {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=318&docType=9 买家填写物流单，卖家确认收货消息} */
  interface ReturnConfirmSucceed {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=316&docType=9 卖家同意退货，退货单创建消息} */
  interface ReturnCreated {
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=317&docType=9 退货单修改消息} */
  interface ReturnModified {
  }
}

/** 天猫 */
declare namespace Tmall.Retail {
  /** {@link https://open.taobao.com/tmc.htm?docId=1300&docType=9 会员管理关系变更同步商家} */
  interface EcRelation {
    /** 导购id */
    employee_id?: number;
    /** 导购员工工号 */
    employee_no: string;
    /** 事件类型，新增：ADD，编辑：EDIT，删除：DEL */
    event_type: string;
    /** 消息唯一id */
    message_id: string;
    /** 加密后的手机号码 */
    mix_mobile?: string;
    /** 店铺名称 */
    seller_name?: string;
    /** 门店id */
    store_id?: number;
  }
}

/** 天猫 */
declare namespace Tmall.Sasssign {
  /** {@link https://open.taobao.com/tmc.htm?docId=1450&docType=9 sass签约消息} */
  interface Msg {
    /** 合作方机构String32M 号（网商银 行分配）。 */
    isv_org_id: string;
    /** 商户号 */
    merchant_id: string;
    /** 消息id */
    message_id: string;
    /** 签约状态 */
    status: number;
    /** 门店ID */
    store_id: number;
  }
}

/** 天猫 */
declare namespace Tmall.Scm {
  /** {@link https://open.taobao.com/tmc.htm?docId=1226&docType=9 猫超经销结算打款消息} */
  interface SendTmcsDistributeSettleFee {
    /** json消息体 */
    messageinfo: string;
    /** 业务id，结算单号 */
    serial_no: string;
  }
}

/** 天猫 */
declare namespace Tmall.Service {
  /** {@link https://open.taobao.com/tmc.htm?docId=2542&docType=9 服务结算账期账单发票消息} */
  interface CycleBillInvoice {
    /** 含税金额 元 */
    amount: string;
    /** 账期 */
    bill_cycle: string;
    /** 账单ID */
    bill_id: string;
    /** 不含税金额 元 */
    excluding_tax_amount: string;
    /** 发票错误信息 */
    invoice_error_info?: string;
    /** 发票状态 */
    invoice_status?: string;
    /** 税额 元 */
    tax_amount: string;
  }
}

/** 天猫服务 */
declare namespace Tmall.Servicecenter {
  /** {@link https://open.taobao.com/tmc.htm?docId=905&docType=9 天猫服务平台工单更新} */
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
  /** {@link https://open.taobao.com/tmc.htm?docId=1486&docType=9 天猫服务产品变更消息} */
  interface ServiceProductChanged {
    /** 服务名称 */
    service_code: string;
    /** 服务产品ID */
    service_product_id: number;
    /** json格式 */
    service_sku: string;
    /** 服务spu */
    spu_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1060&docType=9 签到消息} */
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

  /** {@link https://open.taobao.com/tmc.htm?docId=1487&docType=9 天猫服务订购消息} */
  interface SubscribeServiceChanged {
    /** 服务code */
    service_code: string;
    /** 订购者昵称 */
    subscriber_nick: string;
    /** 订购单id */
    subscribe_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1964&docType=9 工人请假发送消息} */
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

/** 天猫 */
declare namespace Tmall.Supermarket {
  /** {@link https://open.taobao.com/tmc.htm?docId=2085&docType=9 猫超业务支付宝海豚事件创建} */
  interface HaitunEventCreate {
    /** 支付宝用户id */
    alipay_user_id: string;
    /** 交易订单id */
    biz_order_no: string;
    /** 业务时间 */
    biz_time: string;
    /** 海豚事件code */
    event_code: string;
    /** 消息topic */
    topic: string;
  }
}

/** 天猫 */
declare namespace Tmall.Tccompass {
  /** {@link https://open.taobao.com/tmc.htm?docId=2256&docType=9 罗盘变动消息} */
  interface DeliveryRangesUpdate {
    /** MAOCHAODANNIAO3429 */
    dock_code: string;
    /** 商家code */
    merchant_code: string;
    /** 仓code */
    merchant_warehouse_code: string;
    /** 鸟巢仓code */
    nc_warehouse_code: string;
    /** 网络类型 */
    service_type: string;
    /** 平台跟踪使用，无业务含义 */
    trace_id?: string;
  }
}

/** 天猫 */
declare namespace Tmall.Tlc {
  /** {@link https://open.taobao.com/tmc.htm?docId=1538&docType=9 JV商品发布excel schema生成后通知ISV的消息} */
  interface ItemExcelSchemaNotify {
    /** 商品发布excel schema oss地址 */
    excel_oss_url: string;
    /** 消息生成时间 */
    modified_time: Date | number | string;
    /** 消息id，用业务目标+下划线+业务Id+下划线+时间戳为消息Id，确保唯一性 */
    msg_id: string;
    /** 消息通知的目标类型 */
    msg_target: string;
    /** 商品schema生成内部服务处理任务id */
    sell_task_id: string;
    /** 商品schema生成任务id */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1684&docType=9 商品批量改价} */
  interface ItemPriceExcelNotify {
    /** 错误信息 */
    error_msg: string;
    /** Excel结果 */
    excel_oss_url: string;
    /** 消息ID */
    msg_id: string;
    /** 任务ID */
    task_id: string;
    /** 结果 */
    task_success: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1549&docType=9 商品批量发布excel结果反馈消息} */
  interface ItemsExcelResultNotify {
    /** 批量发布/复制结果excel oss地址 */
    excel_oss_url: string;
    /** 消息生成时间 */
    modified_time: Date | number | string;
    /** 消息唯一标识 */
    msg_id: string;
    /** 批量创建结果标识TLC_ITEM_EXCEL_RESULT，批量复制结果标识TLC_ITEM_EXCEL_COPY_RESULT */
    msg_target: string;
    /** 商品批量发布内部服务处理任务id */
    sell_task_id: string;
    /** 商品批量发布店铺id */
    shop_id: string;
    /** 商品批量发布店铺名称 */
    shop_name: string;
    /** 商品批量发布任务id */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1548&docType=9 上传货品详情excel结果生成TOP消息} */
  interface ProductsExcelResultNotify {
    /** 货品批量发布excel结果oss地址 */
    excel_oss_url: string;
    /** 任务处理失败时的原因 */
    message: string;
    /** 消息产生时间 */
    modified_time: Date | number | string;
    /** 消息唯一标识 */
    msg_id: string;
    /** 货品批量发布结果消息标识 */
    msg_target: string;
    /** 货品批量发布内部服务处理任务标识 */
    sell_task_id: string;
    /** 任务是否处理成功标识 */
    success_flag: boolean;
    /** 货品批量发布任务标识 */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1547&docType=9 货品详情excel模版生成TOP消息} */
  interface ProductsExcelSchemaNotify {
    /** 货品批量发布excel oss地址 */
    excel_oss_url: string;
    /** 任务处理失败时的原因 */
    message: string;
    /** 消息产生时间 */
    modified_time: Date | number | string;
    /** 消息唯一标识 */
    msg_id: string;
    /** 消息标识 */
    msg_target: string;
    /** 内部业务处理标识 */
    sell_task_id: string;
    /** 任务是否处理成功 */
    success_flag: boolean;
    /** 货品批量发布任务标识 */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1540&docType=9 JV商品上下架通知ISV的消息} */
  interface UpDownItemNotify {
    /** 上下架商品id */
    item_id: number;
    /** 消息触发时间 */
    modified_time: Date | number | string;
    /** 消息id，用业务目标+下划线+业务Id+下划线+时间戳为消息Id，确保唯一性 */
    msg_id: string;
    /** 消息通知的目标类型 */
    msg_target: string;
  }
}

/** 天猫 */
declare namespace Tmall.Tmg {
  /** {@link https://open.taobao.com/tmc.htm?docId=2332&docType=9 天猫国际品牌会员交易消息} */
  interface BrandMemberTrade {
    /** 用户实际支付金额（单位：分） */
    actual_paid_fee?: number;
    /** 商品原价（单位：分） */
    auction_price?: number;
    /** 子订单id，正逆向都有值。 */
    biz_order_id: number;
    /** 淘系品牌id，用于品牌侧做品牌映射。 */
    brand_id: number;
    /** 子订单商品个数 */
    buy_amount?: number;
    /** 退款成功时间戳，event_type=refund_success时有值。 */
    dispute_end_time?: Date | number | string;
    /** 退款单id，仅逆向有值。 */
    dispute_id?: number;
    /** 事件类型。正向：order-下单成功，pay-支付成功，trade_success-交易成功（确认收货）；逆向：refund_success-退款成功 */
    event_type: string;
    /** 幂等id。由event_type+biz_order_id+dispute_id组成。dispute_id是因为价保等原因可能退多次。 */
    idempotent_id: string;
    /** 淘系商品id */
    item_id: number;
    /** 淘系商品标题（可变，仅方便运维，请勿依赖） */
    item_title?: string;
    /** 主订单id，如果是主子合一订单，等同于子订单id。 */
    main_biz_order_id?: number;
    /** 一个主订单的子订单列表中（如果是主子合一订单，则为主订单本身），属于同一品牌的子订单数。例如，子订单A、B、C，其中A、B属于品牌1，C属于品牌2，则A、B的orderNumsByBrand为2，C的为1。主要用于下游判断同一主订单的多笔子订单数据是否收齐。 */
    order_nums_by_brand?: number;
    /** 下单时间戳，event_type=order时有值。 */
    order_time?: Date | number | string;
    /** 用户在官旗店铺侧唯一id */
    ouid: string;
    /** 支付单id，正逆向仅当支付成功过才有值。 */
    pay_order_id?: number;
    /** 支付时间戳，event_type=pay时有值。 */
    pay_time?: Date | number | string;
    /** 退款金额(单位：分) */
    refund_fee?: number;
    /** 国际侧淘系店铺id，比如妙颜社的淘系店铺id，主要用于标识来源。 */
    shop_id: number;
    /** 淘系sku id，用于品牌侧做商品映射。 */
    sku_id: number | bigint;
    /** sku属性，用于在sku内容变化，skuid不变时的货品定位 */
    sku_properties?: string;
    /** 确认收货时间戳，event_type=trade_success时有值。 */
    trade_end_time?: Date | number | string;
  }
}

/** 天猫 */
declare namespace Tmall.Xf {
  /** {@link https://open.taobao.com/tmc.htm?docId=736&docType=9 天猫鞋服期货订单消息} */
  interface FutureOrders {
    /** 货号 */
    art_no?: string;
    /** 系列属性 */
    attribute?: string;
    /** 品牌 */
    brand: string;
    /** 是否新品 */
    is_new?: string;
    /** 是否商场同款 */
    is_same: string;
    /** 叶子类目 */
    leaf_category: string;
    /** 上市时间 */
    market_time?: string;
    /** 吊牌价 */
    price?: string;
    /** 定量 */
    quantity: string;
    /** 代言明显 */
    represent?: string;
    /** 店铺名称 */
    seller_nick: string;
    /** 性别 */
    sex: string;
    /** 款号编码 */
    style_code: string;
    /** 科技 */
    technology?: string;
    /** 店铺userid */
    uid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=734&docType=9 天猫鞋服货品信息回流} */
  interface GoodsInfo {
    /** 货号 */
    art_no?: string;
    /** 系类属性 */
    attribute?: string;
    /** 条形码 */
    bar_code?: string;
    /** 品牌 */
    brand: string;
    /** 是否新款 */
    is_new: string;
    /** 是否商场同款 */
    is_same?: string;
    /** 叶子类目 */
    leaf_category: string;
    /** 上市时间 */
    market_time?: string;
    /** 吊牌价 */
    price?: string;
    /** 代言明显 */
    represent?: string;
    /** 性别 */
    sex: string;
    /** 款号编码 */
    style_code: string;
    /** 科技 */
    technology?: string;
  }
}

/** 天猫服务 */
declare namespace Tmall.Yichao {
  /** {@link https://open.taobao.com/tmc.htm?docId=2546&docType=9 蚁巢工单更新消息} */
  interface WorkcardStatusUpdate {
    /** 行为 */
    action: string;
    /** 下次预约时间 */
    gmt_next_contact: string;
    /** 原因码 */
    reason_code: string;
    /** 原因描述 */
    reason_desc: string;
    /** 预约结束时间 */
    reserve_time_end: string;
    /** 预约开始时间 */
    reserve_time_start: string;
    /** 服务商 */
    source: string;
    /** 发生时间 */
    update_date: string;
    /** 工单id */
    workcard_id: number;
  }
}

/** 天猫 */
declare namespace Tmall.Yougou {
  /** {@link https://open.taobao.com/tmc.htm?docId=1758&docType=9 天猫优购商品变更} */
  interface ItemChange {
    /** 商品ID */
    item_id: number;
    /** 消息业务ID */
    message_key: string;
    /** 消息类型，区分处理逻辑 */
    message_type: string;
    /** 商品池编码 */
    pool_code: string;
    /** skuId列表 */
    sku_id_list?: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1759&docType=9 天猫优购订单变更} */
  interface OrderChange {
    /** 阿里测主订单id */
    main_order_id: number;
    /** 消息唯一的标记，用于消息轨迹查询 */
    message_key: string;
    /** 消息类型，区分处理逻辑 */
    message_type: string;
    /** 渠道侧的主订单id */
    outer_order_id: string;
  }
}
