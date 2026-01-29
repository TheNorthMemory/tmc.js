/** 自动驾驶API */
declare namespace Alibaba.Adlab {
  /** {@link https://open.taobao.com/tmc.htm?docId=2015&docType=9 自动驾驶iot设备消息} */
  interface IotDevice {
    /** iot设备key */
    iot_device_key: string;
    /** 车辆编号 */
    udid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2010&docType=9 包裹eta更新} */
  interface OrderItemEtaUpdate {
    /** 预计到达时间 */
    eta_arrival_time: string;
    /** 消息id */
    message_id: string;
    /** 订单项编列表 */
    order_item_sn: string;
    /** 订单编号 */
    order_sn: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2002&docType=9 包裹配送状态更新} */
  interface OrderItemStatus {
    /** 消息id */
    message_id: string;
    /** 订单项编号 */
    order_item_sn: string;
    /** 订单编号 */
    order_sn: string;
    /** 包裹状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2013&docType=9 包裹入库消息} */
  interface PackageCheckIn {
    /** 快递公司名 */
    cp_name: string;
    /** 运单号 */
    mail_no: string;
    /** 消息id */
    message_id: string;
  }
}

/** 蜂巢 */
declare namespace Alibaba.Agro {
  /** {@link https://open.taobao.com/tmc.htm?docId=1705&docType=9 分销商同意或者拒绝调价} */
  interface AccountConfirmPrice {
    /** 蜂巢id */
    account_id: number;
    /** 消息业务id */
    data_id: string;
    /** 是否同意，y同意，n不同意 */
    price_confirm_status: string;
    /** 产品id */
    product_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1697&docType=9 商品调价通知isv} */
  interface ItemPriceChange {
    /** 调价后的价格 */
    adjust_price: number;
    /** 消息唯一标志 */
    data_id: string;
    /** 价格生效时间 */
    executive_time: Date | number | string;
    /** 原始价格 */
    origin_price: number;
    /** 蜂巢产品id */
    product_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1679&docType=9 子物流单状态变化小} */
  interface LogisticsOrderStatusChange {
    /** 蜂巢id */
    account_id: number;
    /** 物流公司编码 */
    logistics_company_code: string;
    /** 物流公司名字 */
    logistics_company_name: string;
    /** 运单号，多个以英文逗号分隔 */
    logistics_no?: string;
    /** 商家内部主订单号 */
    out_sale_order_no: string;
    /** 商家内部子订单号 */
    out_sub_sale_order_no: string;
    /** 备注 */
    remark?: string;
    /** 订单发货状态值， (10, "未发货"), (20, "已发货"), (30, "已收货"), */
    status: number;
    /** 状态变更时间 */
    update_time?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1706&docType=9 取消铺货产品下架} */
  interface UnpunishProduct {
    /** 消息业务id */
    data_id: string;
    /** 产品id */
    product_id: string;
  }
}

/** 无人车 */
declare namespace Alibaba.Ailabs {
  /** {@link https://open.taobao.com/tmc.htm?docId=1325&docType=9 无人车消息推送} */
  interface AutocarNofity {
    /** 车辆id */
    car_id?: string;
    /** 消息内容 */
    content: string;
    /** 消息id */
    msg_id: string;
    /** 消息类型 */
    type: string;
  }
}

/** 精灵IOT */
declare namespace Alibaba.Ailbas {
  /** {@link https://open.taobao.com/tmc.htm?docId=1766&docType=9 精灵iot消息} */
  interface IotMessage {
    /** 设备id */
    device_id: string;
    /** iot设备事件与属性 */
    payload: string;
    /** 产品key */
    product_key: string;
    /** 时间戳 */
    timestamp: string;
    /** 消息id */
    trace_id: string;
    /** 设备类型 */
    type: string;
    /** 用户id */
    user_id: string;
    /** 音箱id */
    uuid?: string;
  }
}

/** AIS&供应商数据对接 */
declare namespace Alibaba.Ais {
  /** {@link https://open.taobao.com/tmc.htm?docId=1217&docType=9 部件实际发货通知} */
  interface SupplierComponentActualDepartureNote {
    /** 实际发货通知单号（全局唯一），EAN开头，后面10位数字 */
    actual_departure_note_number: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1372&docType=9 部件扣料计划反馈通知} */
  interface SupplierComponentDeductionPlanNote {
    /** 指令号 */
    inventory_directive: string;
    /** 部件扣料类型20，目前只有20 */
    inventory_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1216&docType=9 部件预计到货通知-ETA} */
  interface SupplierComponentEstimatedArrivalNote {
    /** ETA变更 0：新反馈ETA 1：ETA量变更 */
    estimated_arrival_note_change: string;
    /** 预计到货发货通知单号（全局唯一），EAN开头，后面10位数字 */
    estimated_arrival_note_number: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1331&docType=9 订阅整机库存反馈通知} */
  interface SupplierComponentInventoryNote {
    /** 库存反馈指令 */
    inventory_directive: string;
    /** 库存类型：(1代表整机) */
    inventory_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1233&docType=9 订阅整机生产指令通知} */
  interface SupplierComponentManufactureOrderNote {
    /** 指令类型 1:预发指令；2:正式指令 */
    directive_type: string;
    /** 生产指令 */
    manufacturing_directive: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1218&docType=9 订阅MPN/PN查询通知} */
  interface SupplierComponentMpnPnNote {
    /** 采购品牌 Intel、Samsung */
    brand: string;
    /** MPN */
    mpn: string;
    /** 规格 */
    spec: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1202&docType=9 阿里向整机供应商下发部件采购指令} */
  interface SupplierComponentPurchaseDirective {
    /** 采购品牌 intel、samsung */
    brand: string;
    /** 指令发送日期、精确到毫秒 */
    create_time: Date | number | string;
    /** 指令变更 0:指令新建 1：指令量变更 */
    directive_change: string;
    /** 指令号(消息数据唯一标识) */
    directive_number: string;
    /** 采购方式 1:B&S；2:AVAP */
    purchase_way: string;
  }
}

/** 蚂蚁安全 */
declare namespace Alibaba.Aliabs {
  /** {@link https://open.taobao.com/tmc.htm?docId=1324&docType=9 ailabs蚂蚁安全异步消息} */
  interface TmallSign {
    /** 业务的操作场景 */
    "30": string;
    /** 不同业务自定义的流水号 */
    "112": string;
    /** 业务创建的来源 */
    "134": string;
    /** 蚂蚁SDK获取参数 */
    apdid_token: string;
    /** 业务场景定义 */
    business_code: string;
    /** databus业务流配置中的client_ip */
    client_ip: string;
    /** 业务场景定义 */
    event_code: string;
    /** databus业务流配置中的serverid */
    server_id: string;
    /** 蚂蚁SDK获取参数 */
    umid_token: string;
    /** 用户ID */
    user_id: string;
    /** 本期代扣签约的有效期 */
    withhold_sign_period: string;
  }
}

/** 阿里通信 */
declare namespace Alibaba.Alicom {
  /** {@link https://open.taobao.com/tmc.htm?docId=1155&docType=9 阿里通信流量统一营销赠品发放通知} */
  interface FlowGiftSendNotify {
    /** 赠品面额(单位：分) */
    gift_amount: number;
    /** 赠品详情 */
    gift_desc: string;
    /** 幂等字段 */
    order_no: string;
    /** 商家名称 */
    seller_nick: string;
  }
}

/** 阿里健康 */
declare namespace Alibaba.Alihealth {
  /** {@link https://open.taobao.com/tmc.htm?docId=1977&docType=9 单据处理状态通知} */
  interface BillProcessStatusNotify {
    /** 单据号 */
    bill_code: string;
    /** 单据时间 */
    bill_time: string;
    /** 单据类型 */
    bill_type?: string;
    /** 单据上传人 */
    ic_code?: string;
    /** 单据处理时间 */
    process_date: string;
    /** 处理信息 */
    process_info?: string;
    /** 单据企业ID */
    ref_user_id: string;
    /** 处理状态 0，处理中 1, 上传成功 3, 处理成功 4, 处理失败 */
    result_type: string;
    /** 出入库号 */
    store_inout_seq_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1806&docType=9 医生、服务相关消息} */
  interface DoctorMessage {
    /** 医生id */
    doctor_id?: string;
    /** 通知消息ID */
    message_id: string;
    /** 枚举：AUDIT_PASS=审核通过，AUDIT_FAILED=审核未通过 */
    message_type: string;
    /** 操作时间 */
    operate_time: string;
    /** 原因 */
    reason?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1467&docType=9 售药机营业、歇业消息} */
  interface MvmBizStatusChange {
    /** ERP店铺ID */
    erp_shop_id: string;
    /** 0:营业 / 1:歇业 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1472&docType=9 售药机商品库存切换} */
  interface MvmInventorySwitch {
    /** ERPID */
    erp_shop_id: string;
    /** 库存状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1474&docType=9 接单/拒单/取货成功/取消订单消息通知} */
  interface MvmOrderNotify {
    /** 渠道ID（1-饿百 2-手淘 3-京东 4-美团 5-售药机） */
    channel_id: number;
    /** 渠道订单号 */
    channel_order_id: string;
    /** 拒单原因（按照渠道要求） */
    refuse_reason?: string;
    /** 消息类型 1-接单 2-拒单 3-取货成功 4-取消订单 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1469&docType=9 售药机线下订单生成通知} */
  interface MvmOrderOfflineSync {
    /** 渠道id，一般为5-售药机 */
    channel_id: number;
    /** 订单在渠道方的订单id */
    channel_order_id: string;
    /** 中台订单ID */
    nrmop_order_id?: number;
    /** 订单状态 */
    order_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1468&docType=9 售药机绑定、解绑} */
  interface MvmShopBindStatusChange {
    /** 售药机地址 */
    device_address?: string;
    /** 设备id */
    device_id: number;
    /** 售药机营业结束时间 */
    end_time?: string;
    /** ERP店铺id */
    erp_shop_id: string;
    /** 售药机是否处理线上订单(0 -处理 1-不处理；default=0) */
    mvn_deal_status?: number;
    /** 售药机营业开始时间 */
    start_time?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1476&docType=9 售药机商品上下架} */
  interface MvmUpdateInventory {
    /** ErpShopID */
    erp_shop_id: string;
    /** 更新商品信息 */
    nrmop_item: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1374&docType=9 中台订单状态变化推送} */
  interface NrmopOrderStatusChange {
    /** 渠道类型：o2o-手淘O2O；ele-饿了么；baidu-百度外卖；meituan-美团；jd-京东；mvm-售药机 */
    biz_type: string;
    /** 渠道订单号 */
    channel_order_id: string;
    /** 物流单号(目前只支持手淘订单) */
    delivery_no?: string;
    /** 物流状态：0未呼物流，默认值；1已呼叫物流，2配送员已接单，3配送中，4已完成，5已取消 */
    delivery_status: string;
    /** 中台订单号 */
    order_id: string;
    /** 订单状态：1已支付；2已接单；3已完成；4已取消 */
    order_status: string;
    /** 退款状态：0未申请退款，默认值；1已申请退款；2同意退款；3拒绝退款；4已取消退款 */
    refund_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1795&docType=9 平台通知三方机构"订单状态变更"} */
  interface OrderStatusChange {
    /** 问诊对话结束原因 */
    dialog_close_reason?: string;
    /** 医生UUID */
    doctor_id?: string;
    /** 三方互联网医院编码 */
    hospital_id?: string;
    /** 通知消息ID */
    message_id: string;
    /** 通知消息类型：ORDER（订单状态变更，具体的订单状态需查看order_status字段）或者REVIEW（患者完成服务评价） */
    message_type?: string;
    /** 订单ID */
    order_id?: string;
    /** 新订单通知：WAIT_DIAGNOSE；医生接诊：DIAGNOSING ； 问诊结束：DIAGNOSED ； 退款成功：REFUNDED ； 已结算：THIRD_SELLER_PAID ； */
    order_status?: string;
    /** 会话ID */
    session_id?: string;
    /** 通知时间，精确到秒 */
    time?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1528&docType=9 处方平台处方核销消息} */
  interface PrescriptionConfirm {
    /** 消息id，用于识别一条独立消息 */
    message_id: string;
    /** 处方id */
    rx_id: string;
    /** 处方状态 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1466&docType=9 O2O订单状态变更通知} */
  interface TradeOrderStatusChange {
    /** O2O订单id。 */
    order_id: number;
    /** O2O订单状态。100：订单已创建；110：用户已支付；180：交易失败，订单关闭；190：交易成功。 */
    order_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2278&docType=9 疫苗交易预约信息变动} */
  interface TradeVaccineSubscribeChange {
    /** 业务订单号 */
    biz_order_id: string;
    /** 消息ID */
    message_id: string;
    /** 消息类型 */
    message_type: string;
    /** 预约记录对应的订单的商家ID */
    seller_id: string;
    /** 预约记录主键 */
    subscribe_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2449&docType=9 用户取消订阅缺苗登记同步isv} */
  interface VcRegisterCancel {
    /** 消息id */
    message_id: string;
    /** 消息类型 */
    msg_type: string;
    /** 对外登记单id */
    outer_register_id: string;
  }
}

/** 阿里物联 */
declare namespace Alibaba.Alink {
  /** {@link https://open.taobao.com/tmc.htm?docId=993&docType=9 设备数据推送} */
  interface DeviceDataPush {
    /** 设备数据 */
    device_data?: string;
    /** 设备MAC */
    mac?: string;
    /** 设备型号 */
    model?: string;
    /** 设备数据上报时间（毫秒格式） */
    msg_time?: string;
    /** 通知Id */
    notify_id?: string;
    /** 设备SN */
    sn?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=958&docType=9 设备报警消息} */
  interface DeviceMessage {
    /** 消息上下文 */
    context: string;
    /** 消息内容 */
    message: string;
    /** 消息id */
    msg_id: string;
    /** 用户openuid */
    uid: string;
  }
}

/** 阿里通信 */
declare namespace Alibaba.Aliqin {
  /** {@link https://open.taobao.com/tmc.htm?docId=877&docType=9 axb通话记录} */
  interface AxbCallRecord {
    /** 呼叫ID */
    call_id?: string;
    /** 拨打时间点 */
    call_time?: Date | number | string;
    /** 呼叫类型（0:主叫；1:被叫；2:短信发送；3:短信接收） */
    call_type?: number;
    /** id */
    id: number;
    /** 原始呼叫号码 */
    origin_no?: string;
    /** 商户Key */
    partner_key: string;
    /** 对端号码 */
    peer_no: string;
    /** 真实号码 */
    phone_no: string;
    /** 隐私号码 */
    secret_no: string;
    /** 订购ID */
    sub_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=885&docType=9 通话结束时产生的通话记录} */
  interface AxbCallRelease {
    /** 运营商通话标识id */
    call_id?: string;
    /** 拨打时间 */
    call_time?: Date | number | string;
    /** 呼叫类型（0:主叫；1:被叫；2:短信发送；3:短信接收） */
    call_type?: number;
    /** id */
    id: number;
    /** 原始呼叫号码 */
    origin_no?: string;
    /** 商户Key */
    partner_key: string;
    /** 对端号码B */
    peer_no: string;
    /** 真实号码A */
    phone_no: string;
    /** 释放原因: 1:未分配的号码 2:无路由到指定的转接网 3:无路由到目的地 4:发送专用信息音 16:正常的呼叫拆线 17:用户忙 18:用户未响应 19:用户未应答 20:用户缺席 21:呼叫拒收 22:号码改变 27:目的地不可达 28:无效的号码格式（地址不全） 29:性能拒绝 31:正常—未指定 34: 无电路/通路可用 42: 交换设备拥塞 50:所请求的性能未预定 53:CUG中限制去呼叫 55: CUG中限制来呼叫 57:承载能力无权 58:承载能力目前不可用 65:承载能力未实现 69:所请求的性能未实现 87:被叫用户不是CUG的成员 88:不兼容的目的地 90:不存在的CUG 91:无效的转接网选择 95:无效的消息，未指定 97:消息类型不存在或未实现 99:参数不存在或未实现 102:定时器终了时恢复 103:参数不存在或未实现—传递 110:消息带有未被识别的参数—舍弃 111:协议错误，未指定 127:互通，未指定 */
    release_cause?: number;
    /** 释放方向： 0：平台释放 1：主叫释放， 2：被叫释放 */
    release_dir?: number;
    /** 通话结束时间 */
    release_time?: Date | number | string;
    /** 振铃时间 */
    ring_time?: Date | number | string;
    /** 隐私号码X */
    secret_no: string;
    /** 通话开始时间 */
    start_time?: Date | number | string;
    /** 订单号 */
    sub_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1434&docType=9 数字短信模板审批回执} */
  interface DigitalSmsTemplateDR {
    /** 审批状态，1：审批通过；2：审批不通过 */
    approval_status: number;
    /** 数字短信模板code */
    template_code: string;
    /** 运营商类型，UNICOM_VENDOR：联通；MOBILE_VENDOR：移动，TELCOM_VENDOR：电信 */
    vendor: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=970&docType=9 物联网卡激活通知} */
  interface FcActiveIotcard {
    /** 激活类型：1，实名后激活；2，首话单激活； */
    active_type: string;
    /** 激活时间YYYYMMDDHHMMSS */
    first_activetime: string;
    /** ICCID(SIM卡卡号) */
    iccid: string;
    /** 实名认证的用户身份证号(个人认证) */
    ident_number?: string;
    /** 终端ID 终端IMEI */
    imei?: string;
    /** 身份证名字(个人认证) */
    name?: string;
    /** 手机号码 */
    phone: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=730&docType=9 语音呼叫结果推送} */
  interface FcCallCdr {
    /** 任务主键 */
    biz_id: string;
    /** DTMF */
    dtmf?: string;
    /** 通话时长，未接通为0 */
    duration?: string;
    /** 通话结束时间，未接通则为空 */
    end_time?: string;
    /** 扩展字段回传，将调用api时传入的字段返回 */
    extend?: string;
    /** 通话开始时间，未接通则为空 */
    start_time?: string;
    /** 呼叫结果状态码 */
    status_code: string;
    /** 结果描述 */
    status_msg?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1156&docType=9 录音回执} */
  interface FcCallRecord {
    /** 呼叫唯一ID */
    biz_id: string;
    /** 通话时长 */
    duration: number;
    /** 呼叫结束时间 */
    end_time: string;
    /** 录音文件外部可访问的url */
    record_file: string;
    /** 呼叫开始时间 */
    start_time: string;
    /** 呼叫状态 */
    status_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=873&docType=9 编码发送短信上行消息} */
  interface FcCodeSmsUp {
    /** 短信内容 */
    content?: string;
    /** 扩展码 */
    dest_code: string;
    /** 时间 */
    sender_time: string;
    /** 唯一ID */
    sms_seq: string;
    /** 编码类型 */
    type: string;
    /** 编码值 */
    value: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=852&docType=9 流量直充状态报告} */
  interface FcFlowUp {
    /** 明细id */
    data_id: string;
    /** 错误描述 */
    error_msg?: string;
    /** 外部流水号 */
    out_id: string;
    /** 手机号 */
    phone: string;
    /** 状态 */
    status: string;
    /** 状态码 */
    status_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=738&docType=9 短消息发送结果报告} */
  interface FcSmsDR {
    /** 任务主键 */
    biz_id: string;
    /** 返回原因code */
    err_code?: string;
    /** 扩展字段回传，调用api时传入，消息通知原样返回 */
    extend?: string;
    /** 短信接收号码 */
    receiver?: string;
    /** 报告时间 */
    rept_time?: string;
    /** 发送时间 */
    send_time?: string;
    /** 状态 1：成功，2：失败 */
    state: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=820&docType=9 短信上行} */
  interface FcSmsUp {
    /** 短信内容 */
    content?: string;
    /** 扩展码 */
    dest_code: string;
    /** 手机号码 */
    sender: string;
    /** 时间 */
    sender_time: string;
    /** 上行对应的签名 */
    sign_name?: string;
    /** 唯一ID */
    sms_seq: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1049&docType=9 语音呼叫中间状态消息} */
  interface FcTmpStatus {
    /** 任务主键 */
    biz_id: string;
    /** 呼叫状态码 */
    status_code: string;
    /** 动作发生时间 */
    status_time: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=729&docType=9 流量直充} */
  interface FlowDirectCharge {
    /** 渠道ID */
    channel_id: string;
    /** 外部流水号 */
    out_id: string;
    /** 电话号码 */
    phone: string;
    /** 状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1096&docType=9 物联网卡剩余流量提醒} */
  interface IotCurFlowLimitNotice {
    /** 物联卡号信息 */
    iccid: string;
    /** 触发通知时剩余流量等级 */
    limit_leve: string;
    /** 消息流水号 */
    msgid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1074&docType=9 实名认证结果通知} */
  interface IotPersonalConfirmNotice {
    /** 认证结果（Pass 通过 Reject 拒绝） */
    auth_result: string;
    /** Sim卡编号 */
    iccid: string;
    /** 消息流水id */
    msgid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1091&docType=9 物联网停机消息通知} */
  interface IotStatusNotice {
    /** 卡号编码 */
    iccid: string;
    /** 消息流水号 */
    msgid: string;
    /** 停机原因（control：管理停机；credit：信控停机；） */
    operation_reason: string;
    /** 停机类型(1：停机；2：停GPRS功能；3：停短信功能；4：停语音功能；) */
    oper_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=880&docType=9 Miua通话记录Top推送} */
  interface MiuaCallRecord {
    /** 运营商通话ID */
    call_id?: string;
    /** 呼叫来源类型（ 0：保留； 1：未获取到ip； 2：获取到ip，无法判断ip类别； 3：端局ip； 4：关口局国际ip； 5：互联互通关口局ip； 6：运营商其他网元ip ；） */
    call_source_class?: number;
    /** 呼叫来源IP */
    call_source_ip?: string;
    /** 呼叫来源检查结果（ 0:无法判断呼叫来源 1:正常的呼叫 2:异常的呼叫 ） */
    call_source_result?: number;
    /** 拨打时间点 */
    call_time: Date | number | string;
    /** 市 */
    city?: string;
    /** 区 */
    district?: string;
    /** DTMF语音码 */
    dtmf_code?: string;
    /** DTMF结果 */
    dtmf_result?: string;
    /** id */
    id: number;
    /** 业务方外键，验证结果会回传 */
    out_id?: string;
    /** 商户Key */
    partner_key: string;
    /** 对端号码（非真实） */
    peer_no: string;
    /** 真实号码 */
    phone_no: string;
    /** 真实号码状态 （0:空闲；1:忙；2:空号；3:关机；4:停机；5:异常） */
    phone_state?: number;
    /** 省 */
    province?: string;
    /** 虚拟号码（小号） */
    secret_no: string;
    /** 街道 */
    street?: string;
    /** 订购关系 */
    sub_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=890&docType=9 平台监控记录} */
  interface PlatformMonitorRecord {
    /** 小号平台可用 */
    available: boolean;
    /** 推送毫秒时间戳 */
    ts_in_milliseconds: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=889&docType=9 语音呼叫结果推送} */
  interface TaFcCallCdr {
    /** 任务主键 */
    readonly biz_id: string;
    /** DTMF */
    dtmf?: string;
    /** 通话时长，未接通为0 */
    duration?: string;
    /** 通话结束时间，未接通则为空 */
    end_time?: string;
    /** 扩展字段回传，将调用api时传入的字段返回 */
    extend?: string;
    /** 通话开始时间，未接通则为空 */
    start_time?: string;
    /** 呼叫结果状态码 */
    status_code: string;
    /** 结果描述 */
    status_msg?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=808&docType=9 聚石塔短消息发送结果报告} */
  interface TaFcSmsDR {
    /** 任务主键 */
    biz_id: string;
    /** 返回原因code */
    err_code?: string;
    /** 扩展字段回传，调用api时传入，消息通知原样返回 */
    extend?: string;
    /** 短信接收号码 */
    receiver?: string;
    /** 报告时间 */
    rept_time?: string;
    /** 发送时间 */
    send_time?: string;
    /** 状态 1：成功，2：失败 */
    state: string;
  }
}

/** 阿里体育 */
declare namespace Alibaba.Alisports {
  /** {@link https://open.taobao.com/tmc.htm?docId=1608&docType=9 钓鱼测试消息} */
  interface FishingTest {
    /** id */
    id: number;
    /** 状态 2:成功, 1:失败 */
    status: number;
  }
}

/** 集采 */
declare namespace Alibaba.Ascpchannelmanagermentmsg {
  /** {@link https://open.taobao.com/tmc.htm?docId=1373&docType=9 集采订单审核通知} */
  interface OrderAudit {
    /** 商品列表 */
    audit_item_infos?: string[];
    /** 渠道编码 */
    channel_code: string;
    /** 外部订单号 */
    external_order_no: string;
    /** 审核是否通过 */
    pass: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1382&docType=9 集采订单关闭通知} */
  interface OrderClose {
    /** 渠道编码 */
    channel_code: string;
    /** 外部订单号 */
    external_order_no: string;
    /** 渠道单号 */
    main_channel_purchase_order_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1376&docType=9 集采订单发货通知} */
  interface OrderDeliver {
    /** 渠道编码 */
    channel_code: string;
    /** 发货商品列表json串 */
    consigned_item_infos: string[];
    /** 签收单编号 */
    delivery_receipt_no: string;
    /** 外部订单号 */
    external_order_no: string;
  }
}

/** TMI付款及银行支行主数据 */
declare namespace Alibaba.Cfo {
  /** {@link https://open.taobao.com/tmc.htm?docId=2101&docType=9 账号流水通知消息} */
  interface AccountFlowNotify {
    /** 账号 */
    account_no: string;
    /** 专属账号 */
    account_no_ex?: string;
    /** 接收方应用code */
    app_code: string;
    /** 余额 */
    balance?: string;
    /** 银行编码 */
    bank_code?: string;
    /** 业务名称 */
    biz_name?: string;
    /** 业务参考号 */
    biz_ref_no?: string;
    /** 业务摘要 */
    biz_summary?: string;
    /** 手续费金额 */
    charges_amount?: string;
    /** 手续费币种 */
    charges_currency_type?: string;
    /** 转入金额（收入） */
    credit_amount?: string;
    /** 币种 */
    currency_type: string;
    /** 转出金额（支出） */
    debit_amount?: string;
    /** 跨币种转账时的汇率 */
    exchange_rate?: string;
    /** 交易对手名称 */
    other_side_account_name?: string;
    /** 交易对手账号 */
    other_side_account_no?: string;
    /** 对方账号币种 */
    other_side_currency_type?: string;
    /** 其它摘要 */
    other_summary?: string;
    /** 支付金额 */
    payment_amount?: string;
    /** 支付币种 */
    payment_currency_type?: string;
    /** 流程实例号 */
    process_no?: string;
    /** 用途 */
    purpose?: string;
    /** 摘要 */
    summary?: string;
    /** 交易同步时间时间戳 */
    sync_date: number;
    /** 交易发生时间时间戳 */
    trade_date: number;
    /** 交易流水号 */
    trade_no?: string;
    /** 交易类型 */
    trade_type?: string;
    /** 唯一编码 */
    unique_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2713&docType=9 退票相关消息} */
  interface ReturnInfo {
    /** 发票编码 */
    invoice_code: string;
    /** 发票号 */
    invoice_no: string;
    /** 请求单号 */
    request_no: string;
  }
}

/** 券开放消息权限包 */
declare namespace Alibaba.Coupon {
  /** {@link https://open.taobao.com/tmc.htm?docId=1378&docType=9 用户领取券消息通知} */
  interface OpenCouponDraw {
    /** 领券来源导购 */
    guider_id?: string;
    /** 领券用户 OPEN ID */
    open_buyer_id: number;
    /** 领券来源门店 */
    store_id?: string;
    /** 券模板 */
    template_code: string;
    /** 被领取的券模板 code 码 */
    template_code_instance: string;
    /** 用于消息追踪 */
    trace_id: string;
    /** 领券用户 UNI ID */
    uni_buyer_id: number;
  }
}

/** ICBU-CRM智能机器人外呼沟通 */
declare namespace Alibaba.Crm {
  /** {@link https://open.taobao.com/tmc.htm?docId=2479&docType=9 外呼名单消息发送} */
  interface OutboundInfoMessage {
    /** 公司名称 */
    company_name: string;
    /** 联系人 */
    contact: string;
    /** { "address":"", "model_name":"测试外呼小i", "model_id":11203, "table_name":"et_model_output_11203", "result_count":4, "partition_info":"ds='20231102'" } */
    ext_map: string;
    /** 424324242 */
    global_id: string;
    /** 13721766721 */
    mobile_phone: string;
    /** 小i_23232 */
    xiaoi_task_id: string;
  }
}

/** - */
declare namespace Alibaba.Crowdsourcing {
  /** {@link https://open.taobao.com/tmc.htm?docId=2165&docType=9 素材生成通知} */
  interface Material {
    /** 企业id */
    enterpriseid?: string;
    /** 商品id */
    item_id?: string;
    /** skuid */
    sku_id?: string;
    /** 完成状态 */
    status?: string;
  }
}

/** 公益三小时公共 */
declare namespace Alibaba.Csr {
  /** {@link https://open.taobao.com/tmc.htm?docId=2596&docType=9 公益三小时积分捐行为同步} */
  interface DonatePointSync {
    /** 捐赠积分数量 */
    donate_point_num: string;
    /** 捐赠时间毫秒级时间戳 */
    donate_time: string;
    /** 消息幂等id */
    msg_id: string;
    /** 合作方绑定三小时账户时传递的用户标识 */
    user_account_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2625&docType=9 精准捐需求执行记录同步} */
  interface OpenWorkbenchTargetedInstanceExecProgress {
    /** 链接数组 */
    cover: string;
    /** 内容 image-图片 */
    cover_type: string;
    /** 内容 非必填 */
    desc: string;
    /** 认领数量 */
    exec_count: number;
    /** 物流信息 */
    express_info: string;
    /** 机构侧需求唯一标识 */
    instance_out_unique_id: string;
    /** 执行记录唯一ID */
    progress_id: number;
    /** 具体执行时间 毫秒时间戳 非必填 */
    progress_time: number;
    /** 提供方/执行人 */
    provider: string;
    /** 执行记录状态 已寄出-executed */
    state: string;
    /** 提交时间 毫秒时间戳 非必填 */
    submit_time: number;
    /** 标题 非必填 */
    title: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2626&docType=9 精准捐需求反馈记录状态变更} */
  interface OpenWorkbenchTargetedInstanceFeedbackStateChange {
    /** 机构侧反馈唯一ID */
    feedback_out_unique_id: string;
    /** 需求外部唯一id——机构侧唯一标识 */
    instance_out_unique_id: string;
    /** 消息唯一标识 instanceId+"_"+时间戳 */
    msg_key: string;
    /** 通过/驳回原因 */
    reason?: string;
    /** 反馈状态 审核驳回-auditRefuse 已发布-published 已下线/撤回-retract */
    state: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2624&docType=9 精准捐需求状态变更} */
  interface OpenWorkbenchTargetedInstanceStateChange {
    /** 需求外部唯一id——机构侧唯一标识 */
    instance_out_unique_id: string;
    /** 消息唯一标识 instanceOutUniqueId+"_"+时间戳 */
    msg_key: string;
    /** 需求通过/驳回原因 */
    reason?: string;
    /** 需求状态 */
    state: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2594&docType=9 3小时积分捐同步活力值到志愿汇} */
  interface ZhiyuanhuiSyncEnergy {
    /** 捐赠爱能数量 */
    donate_love_bean_num: string;
    /** 用户3小时id#用户捐赠记录id */
    msg_id: string;
    /** 用户志愿汇侧用户标识 */
    zyh_user_account_code: string;
  }
}

/** 阿里楼盘 */
declare namespace Alibaba.Decoration {
  /** {@link https://open.taobao.com/tmc.htm?docId=2014&docType=9 AI设计方案状态变更通知} */
  interface AidesignFinish {
    /** 1:成功 2:失败 */
    status: number;
    /** 提交生成AI设计方案的任务的唯一id */
    unique_task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2279&docType=9 生成户型图消息} */
  interface ApartmentExport {
    /** 方案id */
    design_id: string;
    /** 状态 1成功 2失败 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2285&docType=9 达摩院户型图消息推送} */
  interface DamoStatusChange {
    /** 1成功 2失败 */
    status: number;
    /** 任务id */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2275&docType=9 账号绑定消息} */
  interface ExternalAccountFinish {
    /** 外部账号 */
    external_account_id: string;
    /** 状态 1：成功 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2281&docType=9 生成3d全屋漫游图后的消息} */
  interface HousethreedImage {
    /** 1成功 2失败 */
    status: number;
    /** 任务id */
    unique_task_id: string;
  }
}

/** 电子发票 */
declare namespace Alibaba.Einvoice {
  /** {@link https://open.taobao.com/tmc.htm?docId=1789&docType=9 发票申请单状态变更通知} */
  interface ApplyUpdate {
    /** 中台发票申请ID，由中台生成。字母或数字组成。 可用于查询发票申请的详情。 */
    apply_id: string;
    /** 申请状态，多个之间逗号分隔。不填则表示查询所有状态。 可选值： applying: 申请中，初始状态； cancelled: 申请已取消； confirmed: 商户已确认，待开/录入发票； craeting_inv: 开票中，待发票结果回传； inv_failed: 开票失败； inv_success: 开票成功； inv_part_success: 部分成功（拆单场景下存在。举例：发票申请拆单之后有10张票，其中有1张开票成功时，此时申请状态即为inv_part_success，当10张票全部成功申请状态则为inv_success） */
    apply_status: string;
    /** 当前申请单中累计已开票失败的金额（含税）。 主要用于拆单场景：拆单的情况下一笔申请可能会拆分成多张发票 */
    fail_amount: string;
    /** 当前申请是否为已终结状态。true: 是，false: 否。 主要用于区分inv_part_success状态下是终态还是中间态 */
    is_finally?: string;
    /** 外部业务方发起开票申请的唯一幂等ID, 由调用平台生成。 只能由字母和数字组成。 */
    outer_id: string;
    /** 业务平台code, 由发票中台分配 */
    platform_code: string;
    /** 当前申请单中累计已开票成功的金额（含税）。 主要用于拆单场景：拆单的情况下一笔申请可能会拆分成多张发票 */
    success_amount: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1674&docType=9 商户事件触发消息} */
  interface CompanyDoAction {
    /** 事件，可选值： device_launch_query：虚拟设备发行查询； */
    action: string;
    /** 拓展字段，json格式 */
    ext_json?: string;
    /** 纳税人识别号 */
    payee_register_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1805&docType=9 设备绑定变化消息通知} */
  interface DeviceOperation {
    /** 税控设备ID */
    device_id: string;
    /** 工单ID（绑定时必传，解绑不传） */
    flow_id?: string;
    /** 工单类型 1：入驻工单，2：加盘工单（绑定时必传，解绑时不传） */
    flow_type?: number;
    /** 操作类型 BIND:绑定，UNBIND:解绑 */
    operation_type: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 业务平台Code，由中台定义 */
    platform_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1802&docType=9 开票能力变更通知} */
  interface MerchantAbilityUpdate {
    /** 结果类型： opened:开通，invalid:失效 */
    biz_type: string;
    /** 服务市场订单号。入驻、增购开通必填（有多个时用英文逗号","分隔) */
    order_ids?: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 业务平台code, 由发票中台分配 */
    platform_code: string;
    /** 业务平台商户ID/用户ID */
    platform_user_id: string;
    /** 税控产品Code, 由发票中台定义 */
    product_code?: string;
    /** 服务截止时间。开通必填 */
    serv_end_time?: string;
    /** 服务生效时间。开通必填 */
    serv_start_time?: string;
    /** 子业务类型： register_open:入驻开通 added_open:增购开通 authorize_open:授权开通 authorize_release:解除授权 renew_open:续费 */
    sub_biz_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1912&docType=9 订购单退款通知} */
  interface OrderRefund {
    /** 退款工单流程ID */
    flow_id: string;
    /** 服务市场订单号 */
    order_id: string;
    /** 退款原因 */
    reason?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1892&docType=9 订购单退款审核结果通知} */
  interface OrderRefundResult {
    /** 退款结果： refund_agree: ISV同意退款, refund_reject：ISV拒绝退款 */
    action: string;
    /** 服务市场订单号 */
    order_id: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 业务平台Code */
    platform_code: string;
    /** 退款审核结果备注信息 */
    remark?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1660&docType=9 入驻工单状态变更消息} */
  interface RegisterFlowChange {
    /** 事件，可选值：isv_agree: 服务商接单,isv_reject: 服务商驳回工单, device_deploy: 税控设备上架部署完成,confirm_qualification: 商户确认获取电子发票资质, fill_delivery_address: 商家填写税控设备收获地址, confirm_published: 服务商回传发行完毕,user_send_device: 商家确认已发出税控设备, machine_room_received: 服务商确认已收到税控设备, refund_start: 发起退款, refund_agree: 服务商同意退款, refund_reject: 服务商拒绝退单, inv_test_start: 开始测试开票, inv_test_success: 开票结果回传：开票成功,inv_test_fail: 开票结果回传：开票失败,confirm_test_success: 确认测试开票成功proxy_sync_ca: ISV同步CA与签章信息至税控应用proxy_sync_company: ISV触发税控应用进行企业信息同步 */
    action?: string;
    /** 附加消息，拓展字段，json格式。 当 action = inv_test_fail, 拓展字段必填, 必须包含message（失败原因）。 当 action = confirm_test_success, 拓展字段必填, 必须包含serv_start_time（服务起始时间）和serv_end_time（服务截止时间）。 当 action = isv_reject 或者 action = refund_reject, 拓展字段必填, 必须包含message（拒绝原因）。 */
    ext_json?: string;
    /** 入驻开通工单ID，入驻开通工单流程中为必选字段 */
    flow_id?: string;
    /** 入驻工单ID */
    register_id: string;
    /** 消息接收目标，业务平台对应为platformCode, 税控服务商对应为productCode */
    target_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1659&docType=9 入驻工单创建消息} */
  interface RegisterFlowCreate {
    /** 企业名称 */
    company_name: string;
    /** 附加消息, json格式 */
    ext_json?: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 入驻工单ID */
    register_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1913&docType=9 订购单续约通知} */
  interface RenewOrder {
    /** 订购时间 */
    buy_date: Date | number | string;
    /** 服务结束时间 */
    end_time: Date | number | string;
    /** 实付总金额，单位元，最多2位小数 */
    fact_total_fee: string;
    /** 订购单ID，格式：platformCode_outerId */
    flow_id: string;
    /** 当前续约订购单的服务市场订单id */
    order_id: string;
    /** 被续约订购单的服务市场订单ID */
    original_order_id: string;
    /** 商户税号 */
    payee_register_no: string;
    /** 产品Code,中台定义的税控产品Code */
    product_code: string;
    /** 服务起始时间 */
    start_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1785&docType=9 增购税控设备触发消息} */
  interface TaxDeviceOrder {
    /** 订购商品ID */
    article_id: string;
    /** 订购时间，格式yyyy-MM-dd HH:mm:ss */
    buy_date: Date | number | string;
    /** 拓展字段，json格式 */
    ext_json?: string;
    /** 实付总金额，单位元，最多2位小数 */
    fact_total_fee: string;
    /** 税控设备订购单ID */
    flow_id: string;
    /** 商品规格ID */
    item_id?: string;
    /** 服务市场订单号 */
    order_id: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 税控产品code */
    product_code: string;
  }
}

/** ESL */
declare namespace Alibaba.Esl {
  /** {@link https://open.taobao.com/tmc.htm?docId=1651&docType=9 给阿里云发送消息} */
  interface SendMsgAliyun {
    /** mac地址 */
    esl_mac: string;
    /** nfc_tag */
    nfc_tag_ids: string;
  }
}

/** 1688服务市场 */
declare namespace Alibaba.Fuwu {
  /** {@link https://open.taobao.com/tmc.htm?docId=1318&docType=9 订单支付消息} */
  interface OrderPaid {
    /** app唯一标识 */
    app_key?: string;
    /** 订单服务状态（B: 服务前； S: 服务中； E: 服务结束； P: 服务暂停； C: 作废；） */
    biz_status?: string;
    /** 订单行号 */
    order_item_no: string;
    /** 支付金额 */
    paid_amount: string;
    /** 支付状态（payment_none: 未支付； payment_part: 部分支付； payment_success: 支付完成；） */
    pay_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1171&docType=9 外贸服务市场订单变更消息} */
  interface TradeAction {
    /** 交易状态 */
    tid_trade_status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1170&docType=9 ICBU服务市场交易支付消息} */
  interface TradePayAction {
    /** 交易支付状态 */
    tid_pay_status: string;
  }
}

/** 娱乐宝 */
declare namespace Alibaba.Happyfinance {
  /** {@link https://open.taobao.com/tmc.htm?docId=1180&docType=9 CP入驻通知} */
  interface InNotify {
    /** msg_id */
    msg_id: string;
    /** value */
    value: string;
  }
}

/** 欢行开放平台 */
declare namespace Alibaba.Happytrip {
  /** {@link https://open.taobao.com/tmc.htm?docId=1346&docType=9 欢行统一订单模型变更通知消息} */
  interface OrderNotify {
    /** 订单一级类型 (一级类型，一级类型描述，二级类型，二级类型描述) (-1, "未知", -1, "未知") (4, "机票", 24, "飞猪国内机票") (4, "机票", 47, "飞猪国际机票") (4, "机票", 48, "飞猪国际询价单机票") (4, "机票", 49, "GT国际机票") (5, "酒店", 14, "飞猪国内酒店") (5, "酒店", 34, "HRS国际酒店") (6, "用车", 23, "国内用车") */
    order_class_id: string;
    /** 订单二级类型 定义参考一级类型 */
    order_class_second_id: string;
    /** 欢行统一订单id */
    order_id: number;
    /** 订单当前状态 -1, "未知状态" 1, "预定中" 2, "已取消" 3, "待付款" 4, "已付款" 5, "已删除" 6, "已完成" 7, "已关闭" 8, "已预订" 9, "已变更" 10, "预定失败" */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2617&docType=9 差旅申请单状态变更同步} */
  interface TravelApplyStateNotify {
    /** 欢行租户id */
    corp_id: string;
    /** 消息id */
    msg_id: string;
    /** 差旅单审批状态 */
    state: string;
    /** 差旅单号 */
    ta_head_id: string;
  }
}

/** 汇金销项票 */
declare namespace Alibaba.Hj {
  /** {@link https://open.taobao.com/tmc.htm?docId=1500&docType=9 汇金销项票作废通知} */
  interface InvoiceCancel {
    /** 蓝票(发票ID,请求单号，发票号，发票状态，是否重开以及关联发票号) */
    blue_invoice_info?: string;
    /** 作废/冲红的原因类型 */
    cancel_type?: string;
    /** 是否重开的标志 */
    is_reissue?: boolean;
    /** 红票(发票ID,请求单号，发票号，发票状态，是否重开以及关联发票号) */
    red_invoice_info?: string;
    /** 关联发票编码 */
    related_invoice_code?: string;
    /** 关联发票号 */
    related_invoice_no?: string;
    /** 请求单号 */
    request_no?: string;
    /** 时间戳 */
    timestamp?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2523&docType=9 汇金销项票文件上传通知} */
  interface InvoiceFileUpload {
    /** 发票信息 */
    invoice_info: string;
    /** 请求号 */
    request_no: string;
    /** 时间戳 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1498&docType=9 汇金销项票开具通知} */
  interface InvoiceIssue {
    /** 蓝票(发票ID,请求单号，发票号，发票状态，是否重开以及关联发票号) */
    blue_invoice_info?: string;
    /** 作废/冲红的原因类型 */
    cancel_type?: string;
    /** 是否重开的标志 */
    is_reissue?: boolean;
    /** 红票(发票ID,请求单号，发票号，发票状态，是否重开以及关联发票号) */
    red_invoice_info?: string;
    /** 关联发票编码 */
    related_invoice_code?: string;
    /** 关联发票号 */
    related_invoice_no?: string;
    /** 请求单号 */
    request_no?: string;
    /** 时间戳 */
    timestamp?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1499&docType=9 汇金销项票冲红通知} */
  interface InvoiceRedIssue {
    /** 蓝票(发票ID,请求单号，发票号，发票状态，是否重开以及关联发票号) */
    blue_invoice_info?: string;
    /** 作废/冲红的原因类型 */
    cancel_type?: string;
    /** 是否重开的标志 */
    is_reissue?: boolean;
    /** 红票(发票ID,请求单号，发票号，发票状态，是否重开以及关联发票号) */
    red_invoice_info?: string;
    /** 关联票编码 */
    related_invoice_code?: string;
    /** 关联发票号 */
    related_invoice_no?: string;
    /** 请求单号 */
    request_no?: string;
    /** 时间戳 */
    timestamp?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1501&docType=9 汇金销项票开票拒绝通知} */
  interface InvoiceReject {
    /** 统一透出为sys */
    auditor?: string;
    /** 发票平台id */
    invoice_id: number;
    /** 拒绝开票原因 */
    reject_reason?: string;
    /** 请求单号 */
    request_no: string;
    /** 时间戳 */
    timestamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1504&docType=9 汇金销项票拒绝退票通知} */
  interface InvoiceReturnReject {
    /** 统一为sys */
    auditor?: string;
    /** 请求操作时间 */
    audit_date?: Date | number | string;
    /** 发票编码 */
    invoice_code?: string;
    /** 发票ID */
    invoice_id?: number;
    /** 发票号 */
    invoice_no?: string;
    /** 是否成功处理 */
    is_success?: boolean;
    /** 拒绝原因 */
    refuse_reason?: string;
    /** 时间戳 */
    timestamp?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1505&docType=9 汇金销项票发票寄送通知} */
  interface InvoiceSend {
    /** 发票编码 */
    invoice_code: string;
    /** 开票时间 */
    invoice_date: Date | number | string;
    /** 发票号 */
    invoice_no: string;
    /** 物流公司 */
    logistics_company: string;
    /** 请求单号 */
    request_no: string;
    /** 时间戳 */
    timestamp: Date | number | string;
    /** 物流单号 */
    tracking_number: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1497&docType=9 汇金销项票待开通知} */
  interface InvoiceUnissue {
    /** 发票列表idlist */
    invoice_id_list: number[];
    /** 请求单号 */
    request_no: string;
    /** 时间戳 */
    timestamp: Date | number | string;
  }
}

/** 洞窝 */
declare namespace Alibaba.Homestyler {
  /** {@link https://open.taobao.com/tmc.htm?docId=2497&docType=9 设计家aigc生图结果消息通知} */
  interface AigcContentImageGenerateCallback {
    /** 结果数据 */
    data_str: string;
    /** 生成类型 */
    generate_type: string;
    /** 错误信息 */
    message: string;
    /** 同步请求返回的requestId */
    request_id: string;
    /** 生成状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2498&docType=9 洞窝全景图替换消息回调} */
  interface AigcPanoramaReplaceCallback {
    /** 合成结果图片地址 */
    image_url: string;
    /** 错误信息描述 */
    message: string;
    /** 同步请求返回的requestId */
    request_id: string;
    /** 合成结果 */
    status: string;
  }
}

/** ICBU */
declare namespace Alibaba.Icbulive {
  /** {@link https://open.taobao.com/tmc.htm?docId=2524&docType=9 直播评论通知} */
  interface CommentNotice {
    /** 评论内容 */
    comment_content?: string;
    /** 评论id */
    comment_id: number;
    /** 国家code */
    country_code?: string;
    /** 直播liveUuid */
    live_uuid: string;
    /** 用户名称 */
    user_nick_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2522&docType=9 直播观众进场通知} */
  interface EnterNotice {
    /** 国家 */
    country_code?: string;
    /** 进场id */
    enter_notice_id: number;
    /** 直播的liveuuid */
    live_uuid: string;
    /** 用户名称 */
    user_nick_name?: string;
  }
}

/** 闲鱼 */
declare namespace Alibaba.Idle {
  /** {@link https://open.taobao.com/tmc.htm?docId=2653&docType=9 灵活用工报名信息同步} */
  interface ApplyInfoSyn {
    /** 年龄 */
    age: number;
    /** 报名时间 */
    apply_time: number;
    /** 学历 2:高中 3:大专 4:本科 6:硕士 7:博士 */
    diploma: number;
    /** 性别 0:男，1:女 */
    gender: number;
    /** 报名信息唯一id */
    id: number;
    /** 身份 0:学生 1:上班族 2:自由职业 */
    identity: number;
    /** 岗位id */
    item_id: number;
    /** 应聘者电话号码 */
    telephone: string;
    /** 应聘者姓名 */
    user_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2555&docType=9 闲鱼房源状态变更通知} */
  interface HouseStatusNotify {
    /** 房源状态 0：上架，-1：删除，-2：下架 */
    house_status: number;
    /** 房源id */
    item_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2652&docType=9 岗位状态变更通知} */
  interface JobItemChangeStatusNotify {
    /** 岗位商品id */
    item_id: number;
    /** 变更状态 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2738&docType=9 闲鱼同城ka商家im绑定状态同步} */
  interface LocalIMBindStatusSyn {
    /** 行业 */
    biz_type: number;
    /** 加密卖家会员名 */
    encrypt_member_name: string;
    /** 变更状态 0：服务商绑定，-1:解绑，1：授权 */
    status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2737&docType=9 闲鱼留资卡确认消息同步} */
  interface LocalLeadConfirmSyn {
    /** 加密买家展示昵称 */
    encry_buyer_display_nick: string;
    /** 加密买家id */
    encry_buyer_id: string;
    /** 加密商品id */
    encry_item_id: string;
    /** 加密卖家id */
    encry_seller_id: string;
    /** 加密卖家会员名 */
    encry_seller_member_name: string;
    /** 加密会话id */
    encry_session_id: string;
    /** 加密电话号码 */
    encry_tel: string;
    /** 时间戳 */
    time_stamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2712&docType=9 闲鱼KA商家询单消息通知} */
  interface LocalMessageNotify {
    /** 消息内容 */
    content: string;
    /** 消息唯一id */
    content_id: string;
  }
}

/** 五道口配送 */
declare namespace Alibaba.Ifp {
  /** {@link https://open.taobao.com/tmc.htm?docId=2386&docType=9 同城履约包裹状态变更消息} */
  interface PackageCfcContainer {
    /** 履约单号 */
    fulfill_order_id: string;
    /** CFC_CONTAINER:CFC封箱 */
    status: string;
    /** 包裹令牌号 */
    token: string;
    /** 仓编码 */
    warehouse_code: string;
    /** 仓商户编码 */
    work_merchant_code: string;
  }
}

/** 采购系统 */
declare namespace Alibaba.Infop {
  /** {@link https://open.taobao.com/tmc.htm?docId=1299&docType=9 采购系统商品消息变更消息} */
  interface GoodsChange {
    /** 商品ID */
    goods_id: number;
    /** 品类英文名 */
    product_catalog_en_name: string;
    /** 品类中文名 */
    product_catalog_name: string;
    /** 相关联的商品ID */
    refer_goods_id_list: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1616&docType=9 PR 审批完成通知} */
  interface PRAudited {
    /** 审批结果：通过、不通过 */
    approval_action: string;
    /** 审批意见 */
    approval_remark?: string;
    /** 采购pr单号 */
    pr_number: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1296&docType=9 采购系统接收单状态变更通知} */
  interface RcvAuditStatusChange {
    /** 审批内容节点 */
    audit_fail_node: string;
    /** 来源系统code */
    interface_source_code: string;
    /** 接收单号 */
    rcv_number: string;
    /** 接收单状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1304&docType=9 接收单创建成功通知} */
  interface RcvCreateSuccess {
    /** 来源系统 */
    interface_source_code: string;
    /** 接收单列表 */
    rcv_number_list: string[];
    /** 幂等校验id */
    unique_id: string;
  }
}

/** 银泰 */
declare namespace Alibaba.Intime {
  /** {@link https://open.taobao.com/tmc.htm?docId=1946&docType=9 银泰服务订单创建&更新} */
  interface ServiceOrderCreateUpdate {
    /** 工单变更动作。枚举。创建create,完成complete,取消cancel,发货consign */
    action?: string;
    /** 备注 */
    comment?: string;
    /** 服务单id */
    sc_order_id: number;
    /** 服务单状态，初始状态是1 */
    status: number;
    /** 类型，默认1 */
    type?: number;
    /** 变更时间 */
    update_date: Date | number | string;
    /** 本次使用的服务次数 */
    used_service_count?: number;
  }
}

/** 电子发票 */
declare namespace Alibaba.Invoice {
  /** {@link https://open.taobao.com/tmc.htm?docId=896&docType=9 开票申请(支付宝专用)} */
  interface AlipayApply {
    /** 支付宝用户ID */
    alipay_user_id: string;
    /** 发票申请ID */
    apply_id: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=895&docType=9 开票申请审核结果(支付宝专用)} */
  interface AlipayApplyResult {
    /** 支付宝用户ID */
    alipay_user_id: string;
    /** 发票申请ID */
    apply_id: string;
    /** 审核备注 */
    message?: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 审核结果 */
    result: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=898&docType=9 开票请求(支付宝专用)} */
  interface AlipayCreateReq {
    /** 支付宝用户ID */
    alipay_buyer_id?: string;
    /** 税号 */
    payee_register_no?: string;
    /** 支付单号 */
    pay_no?: string;
    /** 电商平台代码。TB=淘宝 、TM=天猫 、JD=京东、DD=当当、PP=拍拍、YX=易讯、EBAY=ebay、QQ=QQ网购、AMAZON=亚马逊、SN=苏宁、GM=国美、WPH=唯品会、JM=聚美、LF=乐蜂、MGJ=蘑菇街、JS=聚尚、PX=拍鞋、YT=银泰、YHD=1号店、VANCL=凡客、YL=邮乐、YG=优购、1688=阿里巴巴、POS=POS门店、OTHER=其他, (只传英文编码) */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 卖家id */
    seller_id?: string;
    /** 开票流水号，唯一标志开票请求。如果两次请求流水号相同，则表示重复请求。 */
    serial_no: string;
    /** 卖家所属平台 */
    user_platform_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=897&docType=9 开票请求结果(支付宝专用)} */
  interface AlipayResultReturn {
    /** 支付宝买家id */
    alipay_buyer_id: string;
    /** 支付宝卖家id */
    alipay_seller_id: string;
    /** 发票请求ID */
    apply_id?: string;
    /** 淘宝买家id */
    buyer_id: string;
    /** 开票结果 */
    create_result: string;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 支付流水号 */
    pay_no: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 淘宝卖家id */
    seller_id: string;
    /** 开票流水号 */
    serial_no: string;
    /** 卖家所属电商平台 */
    user_platform_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=891&docType=9 开票申请} */
  interface Apply {
    /** 发票申请ID */
    apply_id: string;
    /** 抬头类型，0=个人，1=企业 */
    business_type: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    readonly platform_tid: string;
    /** 卖家Nick */
    seller_nick?: string;
    /** 流水号 */
    serial_no?: string;
    /** 开票申请的触发类型，buyer_payed=卖家已付款，sent_goods=卖家已发货，buyer_confirm=买家确认收货，refund_seller_confirm=卖家同意退款，invoice_supply=买家申请补开发票，invoice_change=买家申请改抬头，change_paper=电换纸 */
    trigger_status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1043&docType=9 商家拒绝开票} */
  interface ApplyDisagree {
    /** 扩展字段 */
    ex_info: string;
    /** 销方税号 */
    payee_register_no?: string;
    /** 订单所属平台 */
    platform_code: string;
    /** 平台订单id */
    platform_tid: string;
    /** 卖家id */
    seller_id: string;
    /** 卖家所属平台 */
    seller_platform_code: string;
    /** 开票流水号 */
    serial_no?: string;
    /** 拒绝类型:1.已开纸票;2.已开电票;3.与消费者协商;4.其它原因 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=892&docType=9 开票申请审核结果} */
  interface ApplyResult {
    /** 发票申请ID */
    apply_id: string;
    /** 审核备注 */
    message?: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    readonly platform_tid: string;
    /** 审核结果 */
    result: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1436&docType=9 电换纸消息} */
  interface ChangePaper {
    /** 买家昵称 */
    buyer_nick: string;
    /** 发票种类，0：电票，1：纸票，2：电票 */
    invoice_kind?: number;
    /** 购买方企业地址 */
    payer_address?: string;
    /** 购买方开户行 */
    payer_bank?: string;
    /** 购买方开户行账号 */
    payer_bank_account?: string;
    /** 抬头 */
    payer_name?: string;
    /** 购买方企业电话 */
    payer_phone?: string;
    /** 购买方税号 */
    payer_register_no?: string;
    /** 来源 */
    source?: string;
    /** 订单号 */
    tid: string;
    /** 用户所属平台 */
    user_platform_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1936&docType=9 商户店员状态变更} */
  interface ClerkStatusChange {
    /** 店员状态变更，可选值：join加入，exit退出 */
    action: string;
    /** 企业店员id */
    clerk_id: string;
    /** 企业税号 */
    register_no: string;
    /** 状态变更时间，可用于判断消息时序 */
    ts: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=908&docType=9 开票请求消息} */
  interface CreateReq {
    /** 商家税号 */
    payee_register_no: string;
    /** 电商平台代码。TB=淘宝 、TM=天猫 、JD=京东、DD=当当、PP=拍拍、YX=易讯、EBAY=ebay、QQ=QQ网购、AMAZON=亚马逊、SN=苏宁、GM=国美、WPH=唯品会、JM=聚美、LF=乐蜂、MGJ=蘑菇街、JS=聚尚、PX=拍鞋、YT=银泰、YHD=1号店、VANCL=凡客、YL=邮乐、YG=优购、1688=阿里巴巴、POS=POS门店、OTHER=其他, (只传英文编码) */
    platform_code: string;
    /** 平台订单号 */
    platform_tid: string;
    /** 开票流水号 */
    serial_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=954&docType=9 商家邮寄税控盘消息} */
  interface DiskMail {
    /** 寄件人名称 */
    contact_name: string;
    /** 寄件人联系电话 */
    contact_phone: string;
    /** 物流公司 */
    logistics_company: string;
    /** 物流单号 */
    logistics_no: string;
    /** 工单编号 */
    order_id: string;
    /** 税控盘数量 */
    tax_disk_count: string;
    /** 工单类型:1-入驻工单,2-购买税控单元工单,3-税控单元下架单 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1038&docType=9 税盘下架单新增和更新通知} */
  interface DiskOffline {
    /** 企业名称 */
    company_name: string;
    /** 下架申请单id */
    diskoffline_id: string;
    /** 税盘对应订购单id,用来对应税盘 */
    order_id: string;
    /** 税号 */
    payee_register_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1168&docType=9 资源包开通/订购记录同步} */
  interface FlowBuket {
    /** 开票业务类型，0 电票，1 纸票 */
    biz_type?: number;
    /** 订购时间 */
    buy_date: Date | number | string;
    /** 资源包到期时间 */
    end_time: Date | number | string;
    /** 产品特性，0 默认值、普通电纸票，1 魔盒版，2 移动版开票 */
    feature?: number;
    /** 资源包ID */
    flow_buket_id: string;
    /** 资源包类型：0 基础流量包，1 付费套餐包 */
    flow_type: number;
    /** 税号 */
    payee_register_no: string;
    /** 资源包套餐总流量 */
    quantity: number;
    /** 资源包总价，单位为分 */
    total_price: number;
    /** 订购业务类型：0 新订购，1 续订 */
    trade_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2512&docType=9 获取xml发票文件} */
  interface GetXmlFile {
    /** 全电发票的发票号码 */
    invoice_no: string;
    /** 订单号 */
    readonly platform_tid: string;
    /** 卖家Nick */
    seller_nick?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1090&docType=9 830平台查询单机盒子消息} */
  interface HxQuery {
    /** 查询Id */
    machine_no: string;
    /** 内容 */
    payee_register_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1395&docType=9 进项发票认证结果通知} */
  interface IncomeCertificateResult {
    /** 错误码，is_success=false时有值 */
    biz_error_code?: string;
    /** 错误消息，is_success=false时有值 */
    biz_error_msg?: string;
    /** 是否成功，true|false */
    is_success: boolean;
    /** 本次发票认证的流水号 */
    serial_no: string;
    /** 认证的步骤，1=勾选，2=汇总，3=确认 */
    step: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1393&docType=9 ocr结果通知} */
  interface IncomeOcrResult {
    /** 错误码，is_success=false时有值 */
    biz_error_code?: string;
    /** 错误消息，is_success=false时有值 */
    biz_error_msg?: string;
    /** 影像的id标识，type=1时有值 */
    image_id?: string;
    /** 是否成功，true|false */
    is_success: boolean;
    /** 本次ocr的请求流水号，type=1时流水号为批次号 */
    serial_no: string;
    /** ocr类型，0=主动发起ocr，1=批量ocr */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1392&docType=9 进项扫描结果通知} */
  interface IncomeScanResult {
    /** 本次扫描的批次号 */
    batch_no: string;
    /** 错误码 */
    biz_error_code?: string;
    /** 错误消息 */
    biz_error_msg?: string;
    /** 扫描驱动是否成功 */
    is_success: boolean;
    /** 扫描状态，0=开始扫描，1=扫描结束，2=开始查验，3=查验结束 */
    status?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1394&docType=9 进项查验结果通知} */
  interface IncomeVerifyResult {
    /** 错误码，is_success=false时有值 */
    biz_error_code?: string;
    /** 错误消息，is_success=false时有值 */
    biz_error_msg?: string;
    /** 影像的id标识，type=1时有值 */
    image_id?: string;
    /** 是否成功，true|false */
    is_success: boolean;
    /** 本次查验的请求流水号，type=1时流水号为批次号 */
    serial_no: string;
    /** 查验类型，0=主动发起查验，1=批量扫描查验 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=921&docType=9 开票请求结果(内部专用)} */
  interface InnerResultReturn {
    /** halo授权token */
    access_token?: string;
    /** 支付宝买家id */
    alipay_buyer_id: string;
    /** 支付宝卖家id */
    alipay_seller_id: string;
    /** 发票请求ID */
    apply_id?: string;
    /** 错误码，开票失败返回 */
    biz_error_code?: string;
    /** 错误消息，开票失败返回 */
    biz_error_msg?: string;
    /** create_result=fail开票失败的情况下才会有值，biz=业务参数错误（最终状态），sys=服务商系统错误（发票平台自动重试），waiting=盘余量不足、欠费或者抄报税等错误（开票中需要卖家进行处理） */
    biz_error_type?: string;
    /** 淘宝买家id */
    buyer_id: string;
    /** 开票结果 */
    create_result: string;
    /** 0=电子发票，1=纸票，2=专票，默认为电子发票 */
    invoice_kind?: number;
    /** 发票(开票)类型蓝票blue,红票red，默认blue */
    invoice_type?: string;
    /** 物流单号 */
    logistic_code?: string;
    /** 物流公司 */
    logistic_name?: string;
    /** 是否需要物流，true：需要物流，则logistic_code和logistic_name不能为空，false：不需要物流 */
    need_logistic?: boolean;
    /** 原发票代码(开红票时传入) */
    normal_invoice_code?: string;
    /** 原发票号码(开红票时传入) */
    normal_invoice_no?: string;
    /** 收款方税务登记证号 */
    payee_register_no?: string;
    /** 支付流水号 */
    pay_no?: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 淘宝卖家id */
    seller_id: string;
    /** 开票流水号 */
    serial_no?: string;
    /** 触发类型，ep_auto=平台自动开票，ep_manual=平台手动开票，third_erp=三方erp开票，upload=只回传发票的ERP */
    trigger_type?: string;
    /** 卖家所属电商平台 */
    user_platform_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1005&docType=9 税控服务开票申请} */
  interface InvoiceApply {
    /** 开票申请ID */
    apply_id: string;
    /** 企业名称 */
    company_name: string;
    /** 税号 */
    payee_register_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1070&docType=9 税号商品编码切换消息} */
  interface ItemNoSwitch {
    /** 商品编码开关，on=开启，off=关闭 */
    item_no_switch?: string;
    /** 税号 */
    payee_register_no?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1352&docType=9 发票对外通知物流信息} */
  interface Logistics {
    /** 客户id */
    customer_id?: string;
    /** 客户站点（必填） */
    customer_site?: string;
    /** 具体的客户系统 */
    customer_system?: string;
    /** 寄送时间 */
    gmt_send?: Date | number | string;
    /** 发票代码 */
    invoice_code: string;
    /** 开票日期 */
    invoice_date?: Date | number | string;
    /** 税务平台发票ID */
    invoice_id: string;
    /** 发票号码 */
    invoice_no: string;
    /** 物流公司 目前只有EMS */
    logistics_companies?: string;
    /** 外围系统发票ID，即申请开票时的requestNo */
    related_id?: string;
    /** sender */
    sender?: string;
    /** 消息时间戳 */
    timestamp?: Date | number | string;
    /** 运单号 */
    tracking_number?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1013&docType=9 补开票消息} */
  interface MakeUp {
    /** 补票申请id */
    apply_id?: string;
    /** 来源渠道 */
    channel?: string;
    /** 发票种类，1=电子发票，2=纸质发票 */
    invoice_kind?: string;
    /** 买家抬头 */
    payer_name?: string;
    /** 买家税号 */
    payer_register_no?: string;
    /** 来源 */
    source?: string;
    /** 记录一个状态，冗余自动 */
    status?: string;
    /** 订单号 */
    tid?: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1358&docType=9 纸票操作结果回传（打印、作废等）} */
  interface PaperOpsReturn {
    /** 错误码，create_result=fail时有值 */
    biz_error_code?: string;
    /** 错误消息，create_result=fail时有值 */
    biz_error_msg?: string;
    /** 操作结果，success=成功，fail=失败 */
    create_result: string;
    /** 操作类型，print=打印，invalid=作废 */
    ops_type: string;
    /** 税号 */
    payee_register_no: string;
    /** 打印标记，ops_type=print时有值，0=打印发票，1=打印清单 */
    print_flag?: number;
    /** 已开具纸票的流水号 */
    readonly serial_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1065&docType=9 电子发票售前咨询} */
  interface PreConsulting {
    /** 企业名称 */
    company_name?: string;
    /** 联系人邮箱 */
    contact_mail?: string;
    /** 联系人名称 */
    contact_name?: string;
    /** 联系人电话 */
    contact_phone?: string;
    /** 联系人旺旺 */
    contact_wangwang?: string;
    /** 信息提交时间 */
    create_time: Date | number | string;
    /** 问题类型 */
    issue_type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=893&docType=9 开票请求消息} */
  interface ProxyCreateReq {
    /** 支付宝帐号id */
    alipay_id?: string;
    /** 默认：0。对于商家对个人开具，为0;对于商家对企业开具，为1; */
    business_type?: string;
    /** 差额征税 */
    deduct_amount?: string;
    /** ERP系统中的单据号。如果没有erp的唯一单据号。建议使用platform_code+”_”+ platform_tid的组合方式 */
    erp_tid?: string;
    /** 扩展属性 */
    ext_props?: string;
    /** 开票金额 */
    invoice_amount?: string;
    /** 电子发票明细JSON数据 */
    invoice_items?: string;
    /** 发票种类，51=电子发票，1=纸质发票，0=专票 */
    invoice_kind?: string;
    /** 发票备注，有些省市会把此信息打印到PDF中 */
    invoice_memo?: string;
    /** 开票日期, 格式"YYYY-MM-DD HH:SS:MM" */
    invoice_time?: string;
    /** 发票(开票)类型，蓝票blue,红票red，默认blue */
    invoice_type?: string;
    /** 原发票代码(开红票时传入) */
    normal_invoice_code?: string;
    /** 原发票号码(开红票时传入) */
    normal_invoice_no?: string;
    /** 老税号，只有红票才有，税号变更后冲红老税号下的发票，做个标识，给开票服务商用 */
    old_payee_register_no?: string;
    /** 开票方地址(新版中为必传) */
    payee_address?: string;
    /** 开票方银行及 帐号 */
    payee_bankaccount?: string;
    /** 复核人 */
    payee_checker?: string;
    /** 开票方名称，公司名(如:XX商城) */
    payee_name?: string;
    /** 开票人 */
    payee_operator?: string;
    /** 收款方电话 */
    payee_phone?: string;
    /** 收款人 */
    payee_receiver?: string;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 消费者地址 */
    payer_address?: string;
    /** 付款方开票开户银行及账号 */
    payer_bankaccount?: string;
    /** 消费者电子邮箱 */
    payer_email?: string;
    /** 付款方名称, 对应发票台头 */
    payer_name?: string;
    /** 消费者联系电话 */
    payer_phone?: string;
    /** 付款方税务登记证号。对企业开具电子发票时必填。目前北京地区暂未开放对企业开具电子发票，若北京地区放开后，对于向企业开具的情况，付款方税务登记证号和名称也不能为空 */
    payer_register_no?: string;
    /** 电商平台代码。TB=淘宝 、TM=天猫 、JD=京东、DD=当当、PP=拍拍、YX=易讯、EBAY=ebay、QQ=QQ网购、AMAZON=亚马逊、SN=苏宁、GM=国美、WPH=唯品会、JM=聚美、LF=乐蜂、MGJ=蘑菇街、JS=聚尚、PX=拍鞋、YT=银泰、YHD=1号店、VANCL=凡客、YL=邮乐、YG=优购、1688=阿里巴巴、POS=POS门店、OTHER=其他, (只传英文编码) */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 开票服务商的APPKEY */
    provider_appkey: string;
    /** 商家自己申请的放在开票代理客户端的appkey */
    proxy_appkey?: string;
    /** 开票请求唯一索引 */
    req_index: string;
    /** 开票流水号，唯一标志开票请求。如果两次请求流水号相同，则表示重复请求。 */
    serial_no: string;
    /** SPI模式的请求body */
    spi_body?: string;
    /** SPI模式的服务商url */
    spi_url?: string;
    /** 合计金额(新版中为必传) */
    sum_price?: string;
    /** 合计税额 */
    sum_tax?: string;
    /** 税控产品code，用于路由到真实税控服务商 */
    target_code?: string;
    /** 请求版本，null=正常版本，single_disk=单机盘，item_no=商品编码版本 */
    version?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1970&docType=9 开票请求消息影子Topic} */
  interface ProxyCreateReqTest {
    /** 支付宝帐号id */
    alipay_id?: string;
    /** 默认：0。对于商家对个人开具，为0;对于商家对企业开具，为1; */
    business_type?: string;
    /** 差额征税 */
    deduct_amount?: string;
    /** ERP系统中的单据号。如果没有erp的唯一单据号。建议使用platform_code+”_”+ platform_tid的组合方式 */
    erp_tid?: string;
    /** 扩展属性 */
    ext_props?: string;
    /** 开票金额 */
    invoice_amount?: string;
    /** 电子发票明细JSON数据 */
    invoice_items?: string;
    /** 发票类型：0电子发票，1纸质发票，2专票 */
    invoice_kind?: string;
    /** 发票备注，有些省市会把此信息打印到PDF中 */
    invoice_memo?: string;
    /** 开票日期, 格式"YYYY-MM-DD HH:SS:MM" */
    invoice_time?: string;
    /** 发票(开票)类型，蓝票blue,红票red，默认blue */
    invoice_type?: string;
    /** 原发票代码(开红票时传入) */
    normal_invoice_code?: string;
    /** 原发票号码(开红票时传入) */
    normal_invoice_no?: string;
    /** 老税号，只有红票才有，税号变更后冲红老税号下的发票，做个标识，给开票服务商用 */
    old_payee_register_no?: string;
    /** 开票方地址(新版中为必传) */
    payee_address?: string;
    /** 开票方银行及 帐号 */
    payee_bankaccount?: string;
    /** 复核人 */
    payee_checker?: string;
    /** 开票方名称，公司名(如:XX商城) */
    payee_name?: string;
    /** 开票人 */
    payee_operator?: string;
    /** 收款方电话 */
    payee_phone?: string;
    /** 收款人 */
    payee_receiver?: string;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 购方地址 */
    payer_address?: string;
    /** 付款方开票开户银行及账号 */
    payer_bankaccount?: string;
    /** 消费者电子邮箱 */
    payer_email?: string;
    /** 付款方名称, 对应发票台头 */
    payer_name?: string;
    /** 消费者联系电话 */
    payer_phone?: string;
    /** 付款方税务登记证号。对企业开具电子发票时必填。目前北京地区暂未开放对企业开具电子发票，若北京地区放开后，对于向企业开具的情况，付款方税务登记证号和名称也不能为空 */
    payer_register_no?: string;
    /** 电商平台代码。TB=淘宝 、TM=天猫 、JD=京东、DD=当当、PP=拍拍、YX=易讯、EBAY=ebay、QQ=QQ网购、AMAZON=亚马逊、SN=苏宁、GM=国美、WPH=唯品会、JM=聚美、LF=乐蜂、MGJ=蘑菇街、JS=聚尚、PX=拍鞋、YT=银泰、YHD=1号店、VANCL=凡客、YL=邮乐、YG=优购、1688=阿里巴巴、POS=POS门店、OTHER=其他, (只传英文编码) */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 开票服务商的APPKEY */
    provider_appkey: string;
    /** 商家自己申请的放在开票代理客户端的appkey */
    proxy_appkey?: string;
    /** 开票请求唯一索引 */
    req_index: string;
    /** 开票流水号，唯一标志开票请求。如果两次请求流水号相同，则表示重复请求。 */
    serial_no: string;
    /** SPI模式的请求body */
    spi_body?: string;
    /** SPI模式的服务商url */
    spi_url?: string;
    /** 合计金额(新版中为必传) */
    sum_price?: string;
    /** 合计税额 */
    sum_tax?: string;
    /** 税控产品code，用于路由到真实税控服务商 */
    target_code?: string;
    /** 请求版本，null=正常版本，single_disk=单机盘，item_no=商品编码版本 */
    version?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=992&docType=9 数据查询请求} */
  interface Query {
    /** 查询参数 */
    param: string;
    /** 查询类别码 */
    query_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=902&docType=9 查询发票信息} */
  interface QueryInvoice {
    /** 发票代码 */
    normal_invoice_code?: string;
    /** 发票号码 */
    normal_invoice_no?: string;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 平台代码 */
    platform_code: string;
    /** 订单号 */
    platform_tid: string;
    /** 开票服务商的APPKEY */
    provider_appkey: string;
    /** 请求ID */
    req_index: string;
    /** 流水号 */
    serial_no: string;
    /** 税号版本，商品编码、单机版、移动版、魔盒等 */
    version?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1012&docType=9 订单退款冲红后重开蓝票消息} */
  interface RecreateBlue {
    /** 红票的流水号，用来查询triggerStatus，改抬头的入口在天猫那边 */
    serial_no?: string;
    /** 订单的状态 */
    status?: string;
    /** 订单号 */
    tid?: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=899&docType=9 入驻阿里发票平台} */
  interface Regist {
    /** 用户企业名称 */
    company_name: string;
    /** 附加消息 */
    ex_info?: string;
    /** 注册ID */
    regist_id: string;
    /** 商家/用户名称 */
    user_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2442&docType=9 商家请求退出} */
  interface RegistQuit {
    /** 公司名称 */
    company_name: string;
    /** 服务结束时间 */
    end_time: Date | number | string;
    /** 附加消息, json格式 */
    ext_info?: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 产品编码 */
    product_code: string;
    /** 服务起始时间 */
    start_time: Date | number | string;
    /** 子产品编码 */
    sub_product_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=900&docType=9 入驻阿里发票平台结果} */
  interface RegistResult {
    /** 支付宝卖家id */
    alipay_seller_id?: string;
    /** 自动开票规则 */
    auto_invoice_rule?: string;
    /** 开户行 */
    bank?: string;
    /** 银行账号 */
    bank_account?: string;
    /** 店铺当前支持的开票业务类型，0 电子发票，1 纸质发票，10 同时支持电票和纸票 */
    biz_type?: number;
    /** 默认税率 */
    default_tax_rate: string;
    /** 是否自动开票 */
    is_auto_invoice: boolean;
    /** 是否默认勾选开票 */
    is_default_invoice: boolean;
    /** 是否支持补票 */
    is_support_makeup?: boolean;
    /** 其他说明信息 */
    message: string;
    /** 开票服务商appkey */
    partner_appkey: string;
    /** 纳税主体地址 */
    payee_address: string;
    /** 纳税主体 */
    payee_name: string;
    /** 开票人 */
    payee_operator: string;
    /** 税号 */
    payee_register_no: string;
    /** 注册ID */
    regist_id: string;
    /** 注册结果 */
    result: boolean;
    /** 卖家所在平台Id */
    user_id: string;
    /** 卖家所在平台 */
    user_platform_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=894&docType=9 开票请求结果} */
  interface ResultReturn {
    /** 错误码，create_result=fail才有 */
    biz_error_code?: string;
    /** 错误原因，create_result=fail才有 */
    biz_error_msg?: string;
    /** 开票结果，success=成功，fail=失败 */
    create_result: string;
    /** ERP的开票单号 */
    erp_tid?: string;
    /** 错误类型，create_result=fail时有值，biz=业务错误（需要修改报文重新发起开票），sys=服务商系统错误（阿里发票平台自动重试），tax=税务错误（比如盘无票、抄报税等，可重试） */
    error_type?: string;
    /** 发票种类,0=电子发票，1=纸质普通发票，2=纸质专用发票 */
    invoice_kind?: number;
    /** 发票类型，blue：蓝票，red：红票 */
    invoice_type?: string;
    /** 是否重试中，根据开票服务商返回的错误码判断是否在重试中 */
    is_retrying?: boolean;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 开票卖家的nick */
    seller_nick?: string;
    /** 开票流水号 */
    readonly serial_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1029&docType=9 开票申请失败重试消息} */
  interface RetryApply {
    /** 流水号 */
    serial_no?: string;
    /** 订单的状态 */
    status?: string;
    /** 订单号 */
    tid?: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1204&docType=9 服务到期关闭} */
  interface ServiceClose {
    /** 开票业务类型 0 电票，1 纸票 */
    biz_type: number;
    /** 税号 */
    payee_register_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1349&docType=9 发票状态变更消息} */
  interface StatusChange {
    /** 发票代码 */
    invoice_code: string;
    /** 发票号码 */
    invoice_no: string;
    /** 发票当前状态 */
    invoice_status: string;
    /** 外围系统发票ID，及申请开票时的requestNo */
    related_id?: string;
    /** 消息时间戳 */
    time_stamp: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1364&docType=9 服务子单消息} */
  interface SubService {
    /** 重开标识 */
    is_recreate?: boolean;
    /** 补票标识 */
    is_sub_service_supply?: boolean;
    /** 开具服务子单发票的卖家id */
    seller_id?: number;
    /** 订单号 */
    tid?: number | bigint;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1089&docType=9 商家税号变更} */
  interface TaxChange {
    /** 变更类型 */
    change_type?: number;
    /** 企业名称 */
    company_name?: string;
    /** 新税号 */
    new_payee_register_no: string;
    /** 旧税号 */
    old_payee_register_no: string;
    /** 税号变更单id */
    taxchange_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1073&docType=9 税号切换商品编码消息} */
  interface TaxCodeSwitch {
    /** 商品编码开关，on=开启，off=关闭 */
    item_no_switch?: string;
    /** 税号 */
    payee_register_no?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1776&docType=9 浙江税局注册商户信息回传} */
  interface TaxOfficeUserkeyReturn {
    /** 加密的身份证号码 */
    id: string;
    /** 注册商户税号 */
    payee_register_no: string;
    /** 注册商户标识 */
    userkey: string;
    /** 接入方串联字段 */
    uuid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1347&docType=9 创建未开具发票通知} */
  interface Unissue {
    /** 发票列表idlist */
    invoice_id_list: number[];
    /** 请求单号 */
    request_no: string;
    /** 时间戳 */
    timestamp?: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=955&docType=9 税控单元订购记录同步} */
  interface UnitBuy {
    /** 订购时间 */
    buy_date: Date | number | string;
    /** 企业名称 */
    company_name: string;
    /** 产品属性，0 默认值、普通电纸票，1 魔盒版，2 移动版开票 */
    feature?: number;
    /** 所订购规格的单价（单位分） */
    item_base_price: number;
    /** 所订购规格的规格编码 */
    item_code: string;
    /** 订单编号 */
    order_id: string;
    /** 税号 */
    payee_register_no: string;
    /** 服务操作类型：1-新增，2-释放，3-移除，4-续订 */
    status: number;
    /** 实付总金额（单位分） */
    total_pay_fee?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=956&docType=9 税控单元退款消息} */
  interface UnitRefund {
    /** 订购时间 */
    buy_date: Date | number | string;
    /** 公司名称 */
    company_name: string;
    /** 订单编号 */
    order_id: string;
    /** 税号 */
    payee_register_no: string;
    /** 退款原因 */
    reason: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=994&docType=9 发票查验结果通知消息} */
  interface VerifyResult {
    /** 错误码 */
    biz_error_code?: string;
    /** 错误消息 */
    biz_error_msg?: string;
    /** 业务流水id，用于标志某次调用 */
    biz_serial_id?: string;
    /** 大写开票金额 */
    capital_invoice_amount?: string;
    /** 校验码 */
    checksum?: string;
    /** 价税合计金额（invoiceAmount=sumPrice+sumTax） */
    invoice_amount?: string;
    /** 发票代码 */
    invoice_code?: string;
    /** 开票日期 */
    invoice_date?: string;
    /** 发票明细 */
    invoice_items?: string;
    /** 发票备注 */
    invoice_memo?: string;
    /** 发票号码 */
    invoice_no?: string;
    /** 开票行政区域 */
    invoice_region?: string;
    /** 发票(开票)类型，蓝票blue,红票red，默认blue */
    invoice_type?: string;
    /** 查验结果 */
    is_success: boolean;
    /** 机器编号 */
    machine_no?: string;
    /** 开票方地址和电话 */
    payee_address_phone?: string;
    /** 开票方银行及帐号 */
    payee_bank_account?: string;
    /** 收款方名称 */
    payee_name?: string;
    /** 收款方税务登记证号 */
    payee_register_no?: string;
    /** 消费者地址和电话 */
    payer_address_phone?: string;
    /** 付款方开票开户银行及账号 */
    payer_bank_account?: string;
    /** 付款方名称, 对应发票抬头 */
    payer_name?: string;
    /** 付款方税务登记证号 */
    payer_register_no?: string;
    /** 合计不含税金额 */
    sum_price?: string;
    /** 合计税额 */
    sum_tax?: string;
  }
}

/** 交易猫 */
declare namespace Alibaba.Jym {
  /** {@link https://open.taobao.com/tmc.htm?docId=2445&docType=9 交易猫steam正向消息通知} */
  interface SteamTradeOrderNotify {
    /** 订单ID */
    order_id: string;
    /** 订单状态 1.交易成功 2.结算成功 */
    order_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2446&docType=9 交易猫steam逆向通知} */
  interface SteamTradeRefundNotify {
    /** 1-新建 */
    is_new_refund?: number;
    /** 逆向单新状态 */
    new_status: number;
    /** 逆向单新子状态 */
    new_sub_status: number;
    /** 逆向单旧状态 */
    old_status?: number;
    /** 逆向单旧子状态 */
    old_sub_status?: number;
    /** 订单ID */
    order_id: string;
    /** 1.快速退款 2.审核退款 */
    process_type: number;
    /** 退款单ID */
    refund_order_id: string;
    /** 退款类型 1:售中 2:售后 */
    refund_type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2441&docType=9 交易猫逆向单状态通知} */
  interface TradeRefundNotify {
    /** 1-新建 */
    is_new_refund?: number;
    /** 逆向单新状态 */
    new_status?: number;
    /** 逆向单新子状态 */
    new_sub_status?: number;
    /** 逆向单旧状态 */
    old_status?: number;
    /** 逆向单旧子状态 */
    old_sub_status?: number;
    /** 商品ID */
    order_id: string;
    /** 1.快速退款 2.审核退款 */
    process_type: number;
    /** 退款单ID */
    refund_order_id: string;
    /** 退款类型 1:售中 2:售后 */
    refund_type: number;
  }
}

/** 考拉 */
declare namespace Alibaba.Kaola {
  /** {@link https://open.taobao.com/tmc.htm?docId=1911&docType=9 考拉用户完成支付宝任务} */
  interface AlipayTaskFinish {
    /** 支付宝id */
    alipay_uid?: string;
    /** 业务id */
    biz_id?: string;
    /** 业务时间 */
    biz_time?: string;
    /** 冗余字段 */
    ext_info?: string;
    /** 请求id */
    id?: string;
    /** 考拉用户id */
    kl_uid?: string;
    /** 发送时间 */
    send_time?: string;
    /** 任务信息 */
    task_status?: string;
    /** 消息topic */
    topic?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1875&docType=9 考拉发送消息到Promoevent} */
  interface SendPromoevent {
    /** 支付宝用户id */
    alipay_uid?: string;
    /** 流水号，用来做幂等 */
    biz_id?: string;
    /** 业务时间 */
    biz_time?: string;
    /** 消息主键id */
    id?: string;
    /** 考拉用户账号 */
    kl_uid?: string;
    /** 发送时间 */
    send_time?: string;
    /** 用户任务状态 */
    task_status?: string;
    /** databus消息TOPIC */
    topic?: string;
  }
}

/** 司法开放平台 */
declare namespace Alibaba.Kongur {
  /** {@link https://open.taobao.com/tmc.htm?docId=1076&docType=9 司法开放平台推送消息给提供律师服务的供应商} */
  interface BusinessMsg {
    /** 消息id */
    apply_id: string;
    /** 消息内容 */
    content: string;
    /** 消息类型 */
    type: string;
  }
}

/** 网上法庭 */
declare namespace Alibaba.Lassen {
  /** {@link https://open.taobao.com/tmc.htm?docId=1011&docType=9 网上法庭证据文件状态变更通知} */
  interface FileStatusNotify {
    /** 消费方记录ID */
    record_id: string;
    /** 状态 */
    status: string;
    /** 服务方记录ID */
    uploadfile_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1109&docType=9 发送支付令} */
  interface LegalCasePaymentOrderNotify {
    /** 文件流 */
    content: string;
    /** 对接催收的任务ID */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1026&docType=9 网上法庭案件状态变更通知} */
  interface LegalCaseStatusNotify {
    /** 状态 */
    status: string;
    /** 外部关联的任务ID */
    task_id: string;
  }
}

/** - */
declare namespace Alibaba.Legal {
  /** {@link https://open.taobao.com/tmc.htm?docId=1606&docType=9 公司消息变更通知} */
  interface MasterdataCompany {
    /** socialCreditCode */
    credit_code: string;
    /** 旧的socialCreditCode(当社会统一信用代码变化时，才有值，默认为null) */
    old_credit_code?: string;
    /** 操作类型：insert 新增公司；update 变更公司；cancel注销公司 */
    operate_type: string;
    /** 消息的唯一标志 */
    uuid: string;
  }
}

/** 零售通_公共 */
declare namespace Alibaba.Lst {
  /** {@link https://open.taobao.com/tmc.htm?docId=1862&docType=9 品牌商-订单物流状态变化} */
  interface BmOrderLogisticsChange {
    /** 主订单id，消息业务id，可用于消息轨迹查询 */
    main_order_id: number;
    /** 子订单id列表 */
    sub_order_ids: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1816&docType=9 线下自有订单发货状态变更消息} */
  interface BroadcastSelfOrderShipChange {
    /** 外部主订单号 */
    out_order_id: string;
    /** 零售通供应商userId */
    supplier_user_id: number;
    /** appkey_userId_outOrderId */
    vir_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1210&docType=9 收银快照同步消息} */
  interface CashierSync {
    /** 收银快照同步消息消息体内容JSON串 */
    data_json: string;
    /** 消息业务Id */
    msg_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1214&docType=9 商品同步消息} */
  interface GoodsSync {
    /** 消息体数据JSON串 */
    data_json: string;
    /** 业务消息ID */
    msg_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1213&docType=9 商品库存修改同步消息} */
  interface InventorySync {
    /** 消息体内容JSON串 */
    data_json: string;
    /** 消息业务ID */
    msg_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1481&docType=9 消息测试} */
  interface MsgTest {
    /** 消息体内容JSON串 */
    data_json: string;
    /** 消息业务Id */
    msg_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1316&docType=9 零售通门店订单创建消息推送} */
  interface OpenOrderCreate {
    /** 消息体数据JSON串 */
    data_json: string;
    /** 业务消息ID */
    msg_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1517&docType=9 零售通交易订单变更消息} */
  interface OrderChange {
    /** 主订单id，消息业务id，可用于消息轨迹查询 */
    main_order_id: number;
    /** 子订单id列表 */
    sub_order_ids: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1545&docType=9 订单退单} */
  interface RefundChange {
    /** 主订单id */
    main_order_id: string;
    /** 退款单id */
    refund_id: string;
    /** 子订单列表 */
    sub_order_ids: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1799&docType=9 线下自有订单发货状态变更消息} */
  interface SelfOrderShipChange {
    /** 外部主订单号 */
    out_order_id: string;
    /** 零售通供应商userId */
    supplier_user_id: number;
    /** appkey_userId_outOrderId */
    vir_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1617&docType=9 如意音箱播放日志} */
  interface SpeakerAdvertPlayRecord {
    /** 折扣率 */
    advert_discount_ratio?: string;
    /** 业务ID */
    biz_id: string;
    /** 设备编码 */
    device_code: string;
    /** 播放开始时间戳 */
    end_date_time: number;
    /** 播放结束的音量 */
    end_volumn: string;
    /** 广告ID */
    id: string;
    /** 订单ID */
    order_id: string;
    /** 播放开始时间戳 */
    start_date_time: number;
    /** 播放开始的音量 */
    start_volumn: string;
    /** 折扣率 */
    store_discount_ratio?: string;
    /** 单价 */
    unit_price: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1863&docType=9 零售通供应商交易订单变更消息} */
  interface SupplierOrderChange {
    /** 主订单id，消息业务id，可用于消息轨迹查询 */
    main_order_id: number;
    /** 子订单id列表 */
    sub_order_ids: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1371&docType=9 自动售货机库存更新消息} */
  interface VendingInventoryUpdate {
    /** 消息内容 */
    data_json: string;
    /** 业务ID，用于幂等处理 */
    msg_biz_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1370&docType=9 售货机交易创建消息} */
  interface VendingTradeCreate {
    /** 消息体 */
    data_json: string;
    /** 业务ID，用于幂等处理 */
    msg_biz_id: string;
  }
}

/** MMC五盘货项目 */
declare namespace Alibaba.Mmc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2099&docType=9 RT店仓项目-MMC库存增量推送消息} */
  interface InventorySynchronous {
    /** 订单时间 */
    bizdate: number;
    /** 订单库存变动数量 */
    moving_quantity: string;
    /** 消息Id */
    msg_id: string;
    /** 消息类型 */
    msg_tag: string;
    /** 消息时间戳 */
    msg_time_stamp: string;
    /** 经营店编码 */
    operation_shop_code: string;
    /** 交易订单号 */
    order_no: string;
    /** 外部商品编码 */
    out_sku_code: string;
    /** 商品编码 */
    sku_code: string;
    /** 中心仓编码 */
    warehouse_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2126&docType=9 MMC五盘货盘招投域盘货变更消息} */
  interface OpenStockAlterNotify {
    /** 盘货结束时间 */
    end_time?: string;
    /** MMC商家编码 */
    merchant_code?: string;
    /** 消息业务id，用于排查问题 */
    msg_id?: string;
    /** 消息标签：STOCK_TAKE_SAVE/STOCK_TAKE_DELETE */
    msg_tag?: string;
    /** 机构子公司编码 */
    org_no?: string;
    /** 外部盘货结束时间(RT专用) */
    out_end_time?: string;
    /** 外部盘货开始时间(RT专用),会增加两个小时 */
    out_start_time?: string;
    /** 盘货开始时间 */
    start_time?: string;
    /** 盘货id */
    stock_take_id?: string;
    /** 盘货名称 */
    stock_take_name?: string;
    /** 仓编码 */
    warehouse_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2019&docType=9 MMC盘招投商品变更消息} */
  interface OpenStockItemAlter {
    /** 活动信息 */
    activity: string;
    /** 审核结果 */
    audit_status: string;
    /** 消息id */
    message_id: string;
    /** 备注 */
    remark: string;
    /** 商品skuCode */
    sku_code: string;
    /** 盘货id */
    stock_take_id: string;
    /** 仓编码 */
    warehouse_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2024&docType=9 MMC五盘货对接大润发正向订单消息} */
  interface OrderNotify {
    /** 属性 */
    attributes_str: string;
    /** 主订单id */
    biz_order_id: string;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 消息id */
    message_id: string;
    /** 消息标签 */
    message_tag: string;
    /** 子订单信息列表 */
    sub_biz_order_list: string;
    /** 系统时间 */
    sys_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2017&docType=9 MMC五盘货对接大润发价格修改消息} */
  interface PriceUpdate {
    /** 是否 */
    effective: boolean;
    /** 拓展信息，标准Json格式 */
    ext_info?: string;
    /** 商家身份，仅用于测试 */
    merchant_code: string;
    /** 消息id，用于消息轨迹查询 */
    message_id: string;
    /** 生效价格列表 */
    price_amount_list: string;
    /** 失败原因，有改价单的时候 可能会有 */
    reason?: string;
    /** 改价单编号，有改价单才会返回(MMC内部改价生成的改价单id不会透出) */
    sheet_no?: string;
    /** MMC内部的商品sku编码 */
    sku_code: string;
    /** 改价类型 */
    type: string;
    /** 仓code */
    warehouse_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2025&docType=9 MMC五盘货对接大润发逆向交易消息} */
  interface RefundOrderNotify {
    /** 主订单id */
    biz_order_id: string;
    /** 用户id */
    buyer_id: number;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** 消息id */
    message_id: string;
    /** 消息标签 */
    message_tag: string;
    /** 退款单id */
    rp_refund_id: string;
    /** 子订单id */
    sub_biz_order_id: string;
    /** 系统时间 */
    sys_time: Date | number | string;
  }
}

/** 聚石塔监控告警 */
declare namespace Alibaba.Monitor {
  /** {@link https://open.taobao.com/tmc.htm?docId=1812&docType=9 聚石塔监控告警消息投递} */
  interface EventSendMessage {
    /** 告警产生时间 */
    alarm_time: string;
    /** 应用id */
    app_id?: number;
    /** 应用名称 */
    app_name?: string;
    /** 集群实例id */
    cluster_id: string;
    /** 集群名称 */
    cluster_name: string;
    /** 备注信息 */
    comment?: string;
    /** 环境id */
    env_id?: number;
    /** 环境名称 */
    env_name?: string;
    /** 节点名称 cn-zhangjiakou.内网ip */
    host_name: string;
    /** 事件源类型 Pod或Node */
    kind: string;
    /** 告警信息 */
    message: string;
    /** 推荐的解决方案 */
    resolution?: string;
    /** 告警源 POD实例或者节点实例 */
    source: string;
    /** 监控项名称 */
    trigger_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1811&docType=9 聚石塔监控告警消息投递} */
  interface MessageSend {
    /** 报警级别 */
    alert_level: string;
    /** 监控指标阀值 */
    alert_threshold: string;
    /** 报警值 */
    alert_value: string;
    /** 应用id */
    app_id: string;
    /** 应用名称 */
    app_name: string;
    /** 集群id */
    cluster_id: string;
    /** 环境id */
    env_id: string;
    /** 环境名称 */
    env_name: string;
    /** 应用实例名称 */
    instance_name?: string;
    /** 监控指标 */
    metric_name: string;
    /** 规则名称 */
    rule_name: string;
  }
}

/** 银泰开放平台消息 */
declare namespace Alibaba.Mos {
  /** {@link https://open.taobao.com/tmc.htm?docId=2194&docType=9 销售单状态变更} */
  interface SaleOrder {
    /** 业务动作（支付：PAID,完成：FINISHED,退款/关单：REFUND） */
    biz_action: string;
    /** 销售单主单号 */
    master_order_no: string;
    /** 渠道订单号 */
    out_trade_no: string;
    /** 订单渠道 */
    sale_channel: number;
    /** 订单状态 */
    trade_status: number;
    /** 更新时间 */
    update_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2249&docType=9 销售单发货消息} */
  interface SaleOrderDeliver {
    /** 发货商品 */
    deliver_items: string;
    /** 发货时间 */
    deliver_time: Date | number | string;
    /** 销售单主单号 */
    master_order_no: string;
    /** 渠道订单号 */
    out_trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2193&docType=9 销售单退款消息} */
  interface SaleOrderRefund {
    /** 渠道订单号 */
    out_trade_no: string;
    /** 退款完成时间 */
    refund_end_time: Date | number | string;
    /** 退款原因 */
    refund_reason: string;
    /** 退款状态 */
    refund_status: number;
    /** 销售退款单主单号 */
    rp_master_order_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2186&docType=9 交易订单状态变动} */
  interface TradeOrder {
    /** 销售单主单号 */
    master_order_no: string;
    /** 渠道订单号 */
    out_trade_no: string;
    /** 订单渠道 */
    sale_channel: number;
    /** 订单状态 */
    trade_status: number;
    /** 更新时间 */
    update_time: Date | number | string;
  }
}

/** 天猫服务 */
declare namespace Alibaba.Msd {
  /** {@link https://open.taobao.com/tmc.htm?docId=2458&docType=9 喵速达服务供应链结算单明细消息} */
  interface SettlementBillDetail {
    /** 支付流水号 */
    alipay_order_id: string;
    /** 结算金额 */
    amount: string;
    /** 服务交易订单id */
    service_trade_order_id: number;
    /** 服务单id */
    sp_service_order_id: number;
  }
}

/** 天猫服务 */
declare namespace Alibaba.Msfservice {
  /** {@link https://open.taobao.com/tmc.htm?docId=2387&docType=9 喵师傅审核单通知} */
  interface AuditCreate {
    /** 审核单id */
    audit_id: number;
    /** 下次联系时间（日期）（改约不确定时间） */
    contact_time: string;
    /** 下次联系时间（时间段）（改约不确定时间） */
    contact_time_range: string;
    /** 审批单创建时间 */
    gmt_create: Date | number | string;
    /** 核销单id */
    identify_task_id: string;
    /** 原始时间(日期) */
    origin_time: string;
    /** 原始时间（时间段） */
    origin_time_range: string;
    /** 改约原因 */
    reason: string;
    /** 改约原因编号 */
    reason_code: number;
    /** 交易单id */
    trade_order_id: string;
    /** 变更时间（日期）（改约确定时间） */
    update_time: string;
    /** 变更时间（时间段）（改约确定时间） */
    update_time_range: string;
    /** 工单id */
    workcard_ids: string;
    /** 师傅id */
    worker_id: number;
    /** 师傅手机号 */
    worker_mobile: string;
    /** 师傅名称 */
    worker_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2452&docType=9 喵师傅收费单消息通知} */
  interface ExtrafeeRecordCreate {
    /** 收费明细 */
    content_detail: string;
    /** 生成时间 */
    gmt_create: Date | number | string;
    /** 核销单id */
    identify_task_id: number;
    /** 总价 */
    price: string;
    /** 收费单id */
    record_id: string;
    /** 工单id */
    workcard_ids: string;
    /** 师傅id */
    worker_id: number;
    /** 师傅姓名 */
    worker_name: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2431&docType=9 催单消息} */
  interface ReminderCreate {
    /** 渠道（0:商家端 1消费者端） */
    channel: number;
    /** 催单生成时间 */
    gmt_create: Date | number | string;
    /** 催单id */
    reminder_id: string;
    /** 时间类型 */
    type: number;
    /** 工单id（多工单用逗号分隔） */
    workcard_ids: string;
    /** 师傅id */
    worker_id: number;
    /** 师傅姓名 */
    worker_name: string;
  }
}

/** MTP */
declare namespace Alibaba.Mtp {
  /** {@link https://open.taobao.com/tmc.htm?docId=2098&docType=9 MTP-商品新建/编辑成功消息} */
  interface ItemAddOrUpdate {
    /** 商品条码 */
    bar_code: string;
    /** 平台类目叶子类目（三级类目）ID */
    cat_id: string;
    /** 保质期天数 */
    durability_period: number;
    /** 平台类目一级类目名称 */
    forest_first_cat_name: string;
    /** 平台类目二级类目名称 */
    forest_second_cat_name: string;
    /** 平台类目三级类目名称 */
    forest_third_cat_name: string;
    /** 货主 */
    goods_owner: string;
    /** 销售规格描述 */
    goods_standards: string;
    /** 外箱高 */
    height: string;
    /** 商品是否进口 */
    import_goods: boolean;
    /** 商品最后更新时间 */
    last_update_time: Date | number | string;
    /** 外箱长 */
    length: string;
    /** 商品状态 */
    life_status: string;
    /** 商家编码 */
    merchant_code: string;
    /** 消息id */
    msg_id: string;
    /** 消息类型 */
    msg_tag: string;
    /** 消息发送时间戳 */
    msg_timestamp: string;
    /** 商品产地 */
    producing_area: string;
    /** 采购规格 */
    purchasing_specific: number;
    /** 商品编码 */
    sku_code: string;
    /** 商品名称 */
    sku_name: string;
    /** 二级供应商编码 */
    supplier_id: string;
    /** 共享仓Id */
    warehouse_code: string;
    /** 单品重量 */
    weight: string;
    /** 外箱宽 */
    width: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2095&docType=9 二级供应商入驻/编辑消息} */
  interface SupplierAddUpdate {
    /** 二级供应商对应各仓编码 */
    dc_ids: string;
    /** 货主 */
    goods_owner: string;
    /** 二级供应商最后更新时间戳 */
    last_update_time: Date | number | string;
    /** 商家编码 */
    merchant_code: string;
    /** 消息id */
    msg_id: string;
    /** 消息类型 */
    msg_tag: string;
    /** 消息发送时间戳 */
    msg_timestamp: string;
    /** 二级供应商id */
    supplier_id: string;
    /** 二级供应商名称 */
    supplier_name: string;
  }
}

/** 网上法庭 */
declare namespace Alibaba.Nazca {
  /** {@link https://open.taobao.com/tmc.htm?docId=1041&docType=9 作废存证消息接口} */
  interface AbandonCert {
    /** 申请流水号 */
    apply_id: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1053&docType=9 查询收费数量} */
  interface QueryChargeNum {
    /** 流水号 */
    apply_id: string;
    /** 客户ID */
    customer_id: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1032&docType=9 发起存证消息接口} */
  interface SaveCert {
    /** 消息流水号 */
    apply_id: string;
    /** 合同编号 */
    contract_num: string;
    /** 源文件（加密） */
    file?: string;
    /** 源文件hash */
    file_sha?: string;
    /** ip */
    ip: string;
    /** 签署后的文件（加密） */
    pdf_file?: string;
    /** 盖章后的hash */
    pdf_sha: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
    /** 盖章前的hash */
    pristine_pdf_sha: string;
    /** 合同发起时间 */
    send_date?: Date | number | string;
    /** 角色 0:接收者 1：发送者 */
    send_receive: string;
    /** 签署合同的时间 */
    sign_date: Date | number | string;
    /** 签署合同手机验证码 */
    sms: string;
    /** 合同名称 */
    topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1054&docType=9 更新收费数量} */
  interface UpdateChargeNum {
    /** 流水号 */
    apply_id: string;
    /** 客户ID */
    customer_id: string;
    /** 操作类型 */
    operation: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
  }
}

/** 本地生活 */
declare namespace Alibaba.Newretail {
  /** {@link https://open.taobao.com/tmc.htm?docId=1717&docType=9 阿里本地生活智慧菜场RTP订单消息} */
  interface PosOrderMessage {
    /** 客如云本地订单id */
    pos_order_id: number;
    /** 饿了么RTF处理状态 */
    status: number;
  }
}

/** 零售plus */
declare namespace Alibaba.Nlife {
  /** {@link https://open.taobao.com/tmc.htm?docId=1028&docType=9 采购单状态变化通知} */
  interface BToBTradeStatusNotify {
    /** 采购单状态，枚举类型。 1. WAIT_FOR_CONFIRM：等待确认，此时可接单或拒单，新创建的采购单为此状态； 2. REFUSED：供货商已拒单，如果供货商拒单，采购单为此状态； 3. WAIT_FOR_PAY：等待零售商支付预付款，如果供货商接单，采购单为此状态； 3. WAIT_FOR_CONSIGN：等待供货商发货，如果零售商支付了预付款，采购单为此状态，此时可发货； 4. CONSIGNED_PART：部分发货中（含部分发货的情况），如果供货商发货但没有把采购单中的全部商品发出，采购单为此状态，此时，供货商还可以多次发货； 5. CONSIGNED：已全部发货，如果供货商发货且把采购单中的全部商品发出，采购单为此状态； */
    status: string;
    /** 供货商的用户nick */
    supplier_nick: string;
    /** 零售+平台中的采购单编号 */
    trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1125&docType=9 零售+订单同步消息} */
  interface BToCTradeOrderSync {
    /** 用户实付金额 单位 人民币 分 */
    actural_pay_fee: number;
    /** 会员id，会员订单必选 */
    card_no?: string;
    /** 会员所属的企业，会员订单必选 */
    company_id?: string;
    /** 订单创建时间 */
    gmt_create: Date | number | string;
    /** 全渠道订单淘宝/天猫订单号 */
    omni_trade_no?: string;
    /** 外部订单号 */
    out_trade_no?: string;
    /** 会员手机号，会员订单必选 */
    phone_no?: string;
    /** LOGISTICS：物流发货；SELF_DELIVERY：门店自提，全渠道订单设置该字段 */
    picking_up_type?: string;
    /** 会员所属的零售+门店 */
    store_id: string;
    /** 订单总金额 单位 人民币 分 */
    total_fee: number;
    /** 0：门店订单；1：全渠道订单；3：网直供订单 */
    trade_biz_type: number;
    /** 零售+交易号 */
    trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1034&docType=9 B2C交易订单状态变化通知} */
  interface BToCTradeStatusNotify {
    /** 订单汇总的物流状态，枚举类型。1. WAIT_FOR_CONSIGN：有待发货商品（可能存在部分商品已发货，甚至已收货）；2. WAIT_FOR_SIGN：全部商品已发货，有商品待收货（可能存在部分商品已收货）；3. SIGNED：全部商品已收货；4. REJECTED：全部商品已拒收； */
    logistics_status?: string;
    /** 物流状态列表,商品是itemId_skuId:数量 */
    logistics_status_list?: string[];
    /** 全渠道订单淘宝/天猫订单号 */
    omni_trade_no?: string;
    /** 外部订单号 */
    out_trade_no?: string;
    /** 订单的支付状态：1. WAIT_BUYER_PAY：等待付款；2. CLOSED：交易关闭；3. SUCCESS：交易成功； */
    pay_status: string;
    /** 最新一条退款记录,金额单位 人民币：分 */
    refund_detail?: string;
    /** 订单的退款状态，枚举类型。如果未退款，不返回。1. REFUNDED：已全额退款；2. REFUNDED_PART：已部分退款； */
    refund_status?: string;
    /** 订单归属零售+门店ID */
    store_id: number;
    /** 0：门店订单；1：全渠道订单；3：网直供订单 */
    trade_biz_type: number;
    /** 零售+平台订单号 */
    trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1222&docType=9 采购单发货通知消息} */
  interface BtoBTradeDeliverNotify {
    /** 发货单号 */
    consign_no: string;
    /** 发货单发货时间 */
    gmt_consign: Date | number | string;
    /** 物流公司 */
    logistics_company: string;
    /** 物流单号 */
    logistics_no: string;
    /** 零售商的门店id */
    store_id: number;
    /** 供应商id */
    supplier_id: number;
    /** 关联的门店采购订单号 */
    trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1221&docType=9 采购单生效通知消息} */
  interface BtoBTradeEffectiveNotify {
    /** 集团ID */
    ent_id: number;
    /** 集团采购单号 */
    ent_trade_no: string;
    /** 生效时间 */
    gmt_effective: string;
    /** 门店ID */
    store_id: string;
    /** 供应商ID */
    supplier_id: number;
    /** 门店采购单号 */
    trade_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1323&docType=9 二级供货商批次采退单通知信息} */
  interface BtobRefundInfoNotify {
    /** 退货地址 */
    refund_address: string;
    /** 退货商品的itemId */
    refund_itemids: string;
    /** 采退子单号 */
    sub_refund_no: string;
    /** 采购退货单号 */
    trade_refund_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1230&docType=9 采购单退货单确认消息} */
  interface BtobTradeRefundConfirmMsgNotify {
    /** 采购退货单状态 */
    status: string;
    /** 零售商的门店id */
    store_id: number;
    /** 采购退货单号 */
    trade_refund_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1227&docType=9 采购单退货通知消息} */
  interface BtobTradeRefundNotify {
    /** 采购退货单生效时间 */
    gmt_cretae: Date | number | string;
    /** 零售商的门店id */
    store_id: number;
    /** 采购退货单号 */
    trade_refund_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1225&docType=9 供应商审核差异单的通知消息} */
  interface InstorageDiffAuditNotify {
    /** 审核结果 （0为审核通过，1为审核不通过） */
    audit: number;
    /** 审核的说明 */
    audit_msg: string;
    /** 发货单编号 */
    consign_no: string;
    /** 零售商的门店id */
    store_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1154&docType=9 零售+商品变动消息} */
  interface ItemUpdate {
    /** 商品变动前的值（目前包括库存和价格） */
    before_value?: string;
    /** 商品的itemId */
    item_id: number;
    /** 商品类型:0-IC线上商品; 1-商户导入线下商品 */
    item_type?: number;
    /** 商品的商家编码 */
    outer_id?: string;
    /** 商品的skuId */
    sku_id?: number | bigint;
    /** 门店id */
    store_id: string;
    /** 商品的变动类型:PRICE_CHANGE-价格变化; INVENTORY_CHANGE-库存变化; ONSALE_CHANGE-上架变化; OFFSALE_CHANGE-下架变化; NEWSKU_CHANGE-新增sku变化; DELSKU_CHANGE-删除sku变化 */
    type: string;
    /** 商品变动后的值（目前包括库存和价格） */
    update_value?: string;
  }
}

/** 小满 */
declare namespace Alibaba.Okki {
  /** {@link https://open.taobao.com/tmc.htm?docId=2557&docType=9 小满商品服务状态同步} */
  interface SpuStatusSync {
    /** 小满客户id */
    client_id: string;
    /** 先富客户id */
    global_id: string;
    /** 小满商品服务状态 */
    spu_status: string;
  }
}

/** 阿里拍卖 */
declare namespace Alibaba.Paimai {
  /** {@link https://open.taobao.com/tmc.htm?docId=2111&docType=9 支付宝用户完成消费金任务} */
  interface AlipayConsumeGoldTaskFinish {
    /** 支付宝用户id */
    alipay_uid?: string;
    /** 消息业务id */
    biz_id?: string;
    /** 额外信息 */
    features?: string;
    /** 支付完成时间 */
    finish_time?: string;
    /** 请求id */
    id?: string;
    /** 发送时间 */
    send_time?: string;
    /** 任务状态 */
    task_status?: string;
    /** 消息topic */
    topic?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2114&docType=9 拍卖支付宝营销通用消息} */
  interface CommonPromoTask {
    /** 活动行为【VISIT | SUBSCRIBE | FOREGIFT | BID ...】 */
    action: string;
    /** 支付宝用户id */
    alipay_uid: string;
    /** 海豚消息id（幂等键） */
    biz_order_id: string;
    /** 业务完成时间 */
    biz_time: string;
    /** 额外信息 */
    features: string;
    /** 活动场景【LARGE_PROMO | CONSUME_GOLD ...】 */
    scene: string;
    /** Y | N */
    state: string;
    /** 消息topic */
    topic: string;
    /** top消息id */
    top_id: string;
  }
}

/** 信息平台-采购 */
declare namespace Alibaba.Pur {
  /** {@link https://open.taobao.com/tmc.htm?docId=2119&docType=9 合同状态改变发送消息} */
  interface ContractStatusChange {
    /** 合同id */
    contract_ids: string;
    /** 合同状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1975&docType=9 作废结算合同} */
  interface DelSettlementContract {
    /** 操作类型，作废 */
    action_type: string;
    /** 立项id */
    project_number: string;
    /** 寻源ID */
    sourcing_request_ids: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1648&docType=9 入库单审批完成消息广播} */
  interface FaApproveFinished {
    /** 入库单ID */
    business_number: string;
    /** 备注信息，无业务敏感数据 */
    ext_str?: string;
    /** 单据ID */
    id: number;
    /** 完成状态 */
    status?: string;
    /** 租户 */
    tenant_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1657&docType=9 PO审批完成} */
  interface PoAudited {
    /** 业务类型 */
    biz_type?: string;
    /** 订单编号 */
    po_number: string;
    /** 订单状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1665&docType=9 PO作废消息发送} */
  interface PoCancelled {
    /** 业务类型 */
    biz_type?: string;
    /** 订单编号 */
    po_number: string;
    /** {行号:状态} */
    status_list: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1666&docType=9 PO关闭发送消息} */
  interface PoClosed {
    /** 订单编号 */
    po_number: string;
    /** 订单状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2642&docType=9 PO状态变更后发送消息通知} */
  interface PoNotify {
    /** PO的来源类型 */
    biz_type: string;
    /** PO的ID */
    po_id: number;
    /** PO的单号 */
    po_number: string;
    /** PO的状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2089&docType=9 PR审批完成消息通知} */
  interface PrApproved {
    /** 消息唯一标识sourceType + sourceValue */
    message_id: string;
    /** PR单号 */
    pr_number: string;
    /** PR状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1514&docType=9 pr删除通知消息} */
  interface PrDelete {
    /** PR编号 */
    pr_number: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1844&docType=9 创建pr} */
  interface PurchaseRequisition {
    /** 消息唯一标识sourceType + sourceValue */
    message_id: string;
    /** pr单号 */
    pr_number: string;
    /** 创建成功与否 */
    result_msg: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2026&docType=9 PR作废消息通知} */
  interface PurchaseRequisitionCancel {
    /** 消息唯一标识sourceType + sourceValue */
    message_id: string;
    /** pr单号 */
    pr_number: string;
    /** PR状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2058&docType=9 PR删除消息通知} */
  interface PurchaseRequisitionDelete {
    /** 消息唯一标识sourceType + sourceValue */
    message_id: string;
    /** PR单号 */
    pr_number: string;
    /** PR状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2641&docType=9 RT状态变更消息通知} */
  interface RcvNotify {
    /** RT的来源类型 */
    biz_type: string;
    /** RT的ID */
    rcv_id: number;
    /** RT的单号 */
    rcv_number: string;
    /** RT的状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2485&docType=9 取消订单结果通知} */
  interface ResourceOrderCancelNotify {
    /** 失败原因 */
    failed_msg?: string;
    /** 平台子订单号 */
    order_item_no: string;
    /** 平台订单号 */
    order_no: string;
    /** 三方子订单号 */
    out_order_item_no: string;
    /** 三方订单号 */
    out_order_no: string;
    /** 逆向单号 */
    return_no: string;
    /** 取消订单是否成功 */
    success: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2448&docType=9 发货提醒} */
  interface ResourceOrderShipNotify {
    /** 子订单 */
    order_items: string;
    /** 平台订单号 */
    order_no: string;
    /** 三方订单号 */
    out_order_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2084&docType=9 RT审批完成消息通知} */
  interface RtAudited {
    /** RT单号 */
    rt_number: string;
    /** RT的状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1974&docType=9 维护结算合同消息发送} */
  interface SettlementContract {
    /** 操作类型，创建/更新/作废 */
    action_type: string;
    /** 立项id */
    project_number: string;
    /** 寻源id */
    sourcing_request_ids: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1653&docType=9 供应商信息变更} */
  interface SupplierChange {
    /** 供应商的归属组织 */
    org_id?: string;
    /** 变更/删除 */
    status: string;
    /** 供应商编号 */
    supplier_code: string;
    /** 供应商ID */
    supplier_id: number;
    /** 供应商名称 */
    supplier_name: string;
    /** 消息业务ID(32位) */
    trace_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1976&docType=9 VPR审批报价完成发送消息} */
  interface VprApproved {
    /** VPR审批报价消息 */
    audit_call_back_send_msg: string;
    /** 寻源id */
    sourcing_project_id: string;
  }
}

/** 天猫服务 */
declare namespace Alibaba.Serviceplatform {
  /** {@link https://open.taobao.com/tmc.htm?docId=1945&docType=9 服务供应链核销单消息} */
  interface FulfilTask {
    /** 核销单操作，比如create、reserve */
    action: string;
    /** 业务身份 */
    biz_code?: string;
    /** 核销单id */
    fulfil_task_id: number;
    /** 网点id（寄送业务用） */
    service_store_id?: number;
    /** 操作来源，buyer、worker、system、tp */
    source?: string;
    /** 核销单操作时间 */
    update_date: Date | number | string;
    /** 工单id列表 */
    workcard_ids?: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1965&docType=9 服务供应链服务单消息} */
  interface ServiceOrder {
    /** 服务单操作，如create,effect */
    action: string;
    /** 业务身份 */
    biz_code?: string;
    /** 服务单id */
    service_order_id: number;
    /** 服务单操作时间 */
    update_date: Date | number | string;
  }
}

/** 阿里智付 */
declare namespace Alibaba.Sp {
  /** {@link https://open.taobao.com/tmc.htm?docId=2107&docType=9 通知付款结果} */
  interface NotifyPaymentResult {
    /** 付款时间 */
    actual_pay_time?: Date | number | string;
    /** 业务身份 */
    biz_code?: string;
    /** 业务付款流水号 */
    no: string;
    /** 通知日期 */
    notify_time: Date | number | string;
    /** 付款单号 */
    out_trade_no: string;
    /** 实际付款账号 */
    pay_account_no?: string;
    /** 付款币种 */
    pay_currency: string;
    /** 付款状态信息描述 */
    pay_msg?: string;
    /** 付款状态 */
    pay_status: string;
    /** 交易金额 */
    trade_amount: string;
  }
}

/** 阿里发票 */
declare namespace Alibaba.Tax {
  /** {@link https://open.taobao.com/tmc.htm?docId=1809&docType=9 税优雇员签约结果消息} */
  interface EmployeeSignResult {
    /** 三方协议ID */
    agreement_id: string;
    /** 雇主企业编码 */
    company_code: string;
    /** 雇主企业名称 */
    company_name?: string;
    /** 雇员在雇主企业身份标识 */
    company_user_identification: string;
    /** 协议终止时间 */
    end_time: string;
    /** 扩展信息 */
    ext_json?: string;
    /** 服务商编码 */
    isv_code: string;
    /** 服务商名称 */
    isv_name?: string;
    /** 注册结果 */
    result: boolean;
    /** 结果码 */
    result_code?: string;
    /** 结果描述 */
    result_msg?: string;
    /** 发薪资产符号 */
    salary_asset_symbol: string;
    /** 发薪资产类型 */
    salary_asset_type: string;
    /** 协议开始时间 */
    start_time: string;
    /** 税优模式 */
    tax_optimization_mode: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1821&docType=9 税优发薪结果通知} */
  interface SalaryPayResult {
    /** 发薪账期 */
    account_date: string;
    /** 发薪流水ID */
    detail_id: string;
    /** 业务方编码 */
    employer_code: string;
    /** 雇员在雇主企业身份标识别 */
    identification_in_belonging_employer: string;
    /** 消息类型 */
    message_type: string;
    /** 发薪时间 */
    pay_salary_time: Date | number | string;
    /** 发薪结果码，当发薪失败时，有这个字段 */
    result_code?: string;
    /** 发薪结果:SUCCESS-成功， NEED_RETRY-处理中（重试发薪），FAIL(失败，不可重试） */
    status: string;
    /** 发薪商户订单号 */
    tax_fund_order_ids?: string;
  }
}

/** 淘宝电子书 */
declare namespace Alibaba.Tbdx {
  /** {@link https://open.taobao.com/tmc.htm?docId=2144&docType=9 电子书内容变更消息} */
  interface EBookContent {
    /** itemId */
    item_id: number;
    /** open_uid */
    seller_open_id: number;
    /** 类型：11-电子书内容新建，12-电子书内容编辑，21-宝贝新建，22-宝贝编辑，23-宝贝下架 */
    type: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2148&docType=9 电子书商家签约消息} */
  interface EBookSellerSign {
    /** 机构ID */
    org_id: number;
    /** 卖家openUid */
    seller_open_id: number;
    /** 签约状态：1-已签约；2-终止协议 */
    sign_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2149&docType=9 电子书用户下单消息} */
  interface EBookUserOrder {
    /** 买家openUid */
    buyer_open_id: number;
    /** 订单号 */
    order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1939&docType=9 淘宝教育论文查重推送} */
  interface PaperPush {
    /** 论文ID */
    paper_id: string;
    /** 提交时间 */
    submit_time: Date | number | string;
  }
}

/** 同城 */
declare namespace Alibaba.Tc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2049&docType=9 同城履约物流状态通知} */
  interface LogisticsStatusUpdate {
    /** 外部订单ID */
    source_order_id: string;
    /** 当前状态 */
    status: string;
    /** 状态描述 */
    status_desc: string;
    /** 发生时间 */
    time: Date | number | string;
    /** 仓作业单IDs */
    work_order_ids: string[];
  }
}

/** 三小时公益 */
declare namespace Alibaba.Threehours {
  /** {@link https://open.taobao.com/tmc.htm?docId=2083&docType=9 授权结果} */
  interface AuthorizationResult {
    /** 行为，AUTH：授权，CANCEL_AUTH：取消授权 */
    action: string;
    /** 授权码 */
    auth_code?: string;
    /** 错误信息 */
    error_msg?: string;
    /** 200:成功 4001:认证失败 500:意料之外的异常 */
    result_code: number;
    /** 传入参数 */
    source_params?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1960&docType=9 益起来捐步成功消息} */
  interface DonateStep {
    /** 支付宝ID */
    alipay_user_id: number | bigint;
    /** 捐步数量 */
    donate_step: number;
    /** 捐步时间 yyyy-MM-dd HH:mm:ss */
    donate_step_time: string;
    /** 捐步唯一ID */
    id: number;
    /** 是否为孩子 */
    kids_user?: boolean;
    /** 家长支付宝ID */
    parent_alipay_user_id?: number | bigint;
    /** 家长3小时公益用户ID */
    parent_user_id?: number;
    /** 3小时公益用户ID */
    user_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2112&docType=9 用户绑定结果通知} */
  interface UserBindResult {
    /** 行为 绑定/取消绑定 */
    action: string;
    /** 错误信息 */
    error_msg?: string;
    /** 消息结果值，200成功 4001失败 500未知异常 */
    result_code: number;
    /** 第三方用户ID */
    user_key: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1959&docType=9 用户参与志愿服务活动} */
  interface UserJoinActivity {
    /** 活动ID */
    activity_id: number;
    /** 活动名称 */
    activity_name: string;
    /** 支付宝ID */
    alipay_user_id: number | bigint;
    /** 报名唯一ID */
    id: number;
    /** 是否为孩子 */
    kids_user?: boolean;
    /** 家长支付宝ID */
    parent_alipay_user_id?: number | bigint;
    /** 家长3小时公益用户ID */
    parent_user_id?: number;
    /** 报名时间 yyyy-MM-dd HH:mm:ss */
    register_time: string;
    /** 3小时公益用户ID */
    user_id: number;
  }
}

/** 阿里通信 */
declare namespace Alibaba.Tianji {
  /** {@link https://open.taobao.com/tmc.htm?docId=870&docType=9 天机平台合约机供应商订单消息} */
  interface ContractOrder {
    /** 合约订单状态,1, "未订购" ;2, "订购中"; 4, "订购失败"; 5, "订购成功" ;6, "订购取消" */
    contract_order_status: number;
    /** 合约类型 */
    plan_item_type: number;
    /** 供应商名称 */
    supplier_name: string;
    /** 淘宝订单号 */
    tb_order_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=839&docType=9 天机平台订单生成通知消息} */
  interface OrderCreate {
    /** 充值账号 */
    account: string;
    /** 业务类型，10-企业充值 */
    biz_type: string;
    /** 买家nick */
    buyer_nick: string;
    /** 购买数量 */
    buy_quantity: number;
    /** 分销商用户名称 */
    distributor_name: string;
    /** 单笔充值面额（分） */
    face_price: number;
    /** 分账总金额，单位：分 */
    ledger_amount: number;
    /** 外部产品编码 */
    out_product_code?: string;
    /** 供应商用户名称 */
    supplier_name: string;
    /** 淘宝交易订单创建时间 */
    tb_order_create_time: Date | number | string;
    /** 淘宝交易订单号 */
    tb_order_no: string;
    /** 交易支付时间 */
    tb_order_pay_time: Date | number | string;
  }
}

/** 淘鲜达 */
declare namespace Alibaba.Txd {
  /** {@link https://open.taobao.com/tmc.htm?docId=1769&docType=9 淘鲜达互动事件通知} */
  interface InteractEventNotice {
    /** 活动id */
    activity_id: number;
    /** 业务唯一号，用于幂等去重 */
    biz_id: string;
    /** 互动事件code */
    interact_event_code: string;
    /** 商家编码 */
    merchant_code?: string;
    /** 用户id */
    user_id?: number;
    /** 混淆昵称 */
    user_nick?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2118&docType=9 淘鲜达交易状态变化} */
  interface OrderStatusChangeToAlipay {
    /** 支付宝用户id */
    alipay_user_id: string;
    /** 业务id */
    biz_id: string;
    /** 业务幂等id */
    biz_order_no: string;
    /** 业务请求时间 */
    biz_time: string;
    /** 海豚事件code */
    event_code: string;
    /** 状态 */
    status: string;
    /** 消息topic */
    topic: string;
  }
}

/** 全域收单 */
declare namespace Alibaba.Uni {
  /** {@link https://open.taobao.com/tmc.htm?docId=1260&docType=9 全域收单交易消息} */
  interface TradeStatusNotify {
    /** 外部商家订单号 */
    out_trade_no: string;
    /** 退款状态。REFUND_FAILED:退款失败; REFUND_SUCCESS:退款成功，针对指定退款号; REFUND_PARTLY:部分退款，针对整单交易; REFUND_FINISHED:退款完成，针对整单交易; */
    refund_status?: string;
    /** 订单归属门店 */
    store_id?: string;
    /** 平台订单号 */
    trade_no: string;
    /** 订单状态.WAIT_BUYER_PAY:等待用户付款, TRADE_SUCCESS:已付款，交易成功, TRADE_ACCEPT:已接单,需要配货的情况, TRADE_FINISHED:交易完成, TRADE_CLOSED:交易关闭; */
    trade_status: string;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdk {
  /** {@link https://open.taobao.com/tmc.htm?docId=1564&docType=9 差评回评} */
  interface ChannelCommentAudit {
    /** 回评内容 */
    audit_content: string;
    /** 盒马主单号 */
    biz_order_id: string;
    /** 商家编码 */
    merchant_code?: string;
    /** 外部评论id */
    out_comment_id: string;
    /** 商品编码 */
    sku_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1550&docType=9 五道口售中取消外部订单消息} */
  interface ChannelOrderCancel {
    /** 主单号 */
    biz_order_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 外部主单号 */
    out_order_id: string;
    /** 渠道店Id */
    shop_id: string;
    /** 经营店Id */
    store_id: string;
    /** 退款子单列表，整单取消时（whole_cancel=true），该值为空，包含子单Id（subBizOrderId）、退款单Id（refundId）、外部子单Id（subOutOrderId）、商家编码（skuCode）、逆向库存数量（refundStockQuantity）、逆向销售数量（refundSaleQuantity）、退款原因类型（refundType）。 */
    sub_refund_orders?: string;
    /** 是否整单取消 */
    whole_cancel: boolean;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1561&docType=9 客服审核退款结果} */
  interface ChannelOrderCsRefundAudit {
    /** 同意退款子单 */
    agree_sub_orders: string;
    /** 盒马主单号 */
    biz_order_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 外部订单号 */
    out_order_id: string;
    /** 外部退款批次Id */
    out_refund_batch_id: string;
    /** 拒绝退款子单 */
    reject_sub_orders: string;
    /** 渠道店ID */
    shop_id: string;
    /** 经营店ID */
    store_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1560&docType=9 客服代客发起售后退款(整单/部分)} */
  interface ChannelOrderCsUserrefund {
    /** 盒马主单号 */
    biz_order_id: string;
    /** 退款备注 */
    memo?: string;
    /** 商家编码 */
    merchant_code: string;
    /** 外部订单号 */
    out_order_id: string;
    /** 退款原因 */
    refund_reason?: string;
    /** 退款子单 */
    refund_sub_orders: string;
    /** 渠道店ID */
    shop_id: string;
    /** 经营店ID */
    store_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1559&docType=9 订单状态变更消息} */
  interface ChannelOrderStatusChange {
    /** 主单号 */
    biz_order_id: string;
    /** 履约状态 */
    fulfill_status: string;
    /** 商家编码 */
    merchant_code: string;
    /** 订单状态 */
    order_status: string;
    /** 外部订单号 */
    out_order_id: string;
    /** 渠道店id */
    shop_id: string;
    /** 经营店Id */
    store_id: string;
    /** 子单列表 */
    sub_orders: string;
    /** 退款子单列表，仅订单完成时，有部分退款的 */
    sub_refund_orders?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1562&docType=9 库存同步} */
  interface ChannelStockSync {
    /** 发生时间 */
    biz_date: string;
    /** 业务编号,唯一性，用于幂等，避免重复处理 */
    biz_uniq_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 发布库存列表 */
    sale_inventory_list: string;
    /** 渠道店列表 */
    shop_ids: string;
    /** 经营店编码 */
    store_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2301&docType=9 配送异常信消息} */
  interface DmsSignError {
    /** 配送异常原因 */
    abnormal_reason: string;
    /** 配送异常原因编码 */
    abnormal_reason_code: string;
    /** 配送异常时间（时间戳） */
    abnormal_time: string;
    /** 骑手名称 */
    deliverer_name: string;
    /** 骑手电话 */
    deliverer_phone: string;
    /** 交易单号 */
    order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1738&docType=9 售中履约变更消息} */
  interface FulfillOrderChange {
    /** 操作修改时间，消息消费端可用此字段处理消息乱序问题 */
    gmt_modified: string;
    /** 商家编码 */
    merchant_code: string;
    /** 淘宝主单ID */
    source_order_id: string;
    /** 经营门店编码 */
    store_id: string;
    /** 用户选择送达时间 格式：2019-09-05 11:00:00~2019-09-05 11:30:00 */
    user_expect_time: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1624&docType=9 仓配交接消息} */
  interface FulfillWarehouseHandover {
    /** 批次号 */
    batch_id: string;
    /** 过机时间 */
    passing_machine_time: string;
    /** 仓编码 */
    warehouse_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1996&docType=9 退仓单物流状态变更通知} */
  interface ReturnWarehouseStatusChange {
    /** 退仓单附加属性 */
    attribute: string;
    /** 物流状态,REFUND_LEAVE_DELIVERY_DOCK:出配送站 REFUND_ARRIVE_WAREHOUSE:送达仓 */
    logistics_status: string;
    /** 退仓单号 */
    return_warehouse_bill_id: string;
    /** 仓编码 */
    warehouse_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1733&docType=9 商家渠道商品变动消息} */
  interface StoreItemUpdate {
    /** 此次消息唯一标志 */
    biz_uniq_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 门店编码 */
    ou_code?: string;
    /** 商品编码 */
    sku_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1694&docType=9 外部商家发送push消息} */
  interface TxdCrmChannelMessagePush {
    /** 渠道编码 */
    channel_code: string;
    /** 发送内容 */
    content: string;
    /** 此次push唯一标志 */
    crm_push_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 商家用户id */
    merchant_user_id?: string;
    /** 外部用户id */
    open_member_id: string;
  }
}

/** 五道口商品 */
declare namespace Alibaba.Wdkitem {
  /** {@link https://open.taobao.com/tmc.htm?docId=1440&docType=9 五道口仓商品变更消息} */
  interface WarehouseSkuModify {
    /** 商家编码 */
    merchant_code: string;
    /** 商品编码 */
    sku_code: string;
    /** 仓编码 */
    warehouse_code: string;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdkop {
  /** {@link https://open.taobao.com/tmc.htm?docId=1703&docType=9 Rex用户信息变更消息} */
  interface RexAccountChange {
    /** 消息通知id */
    msg_id: string;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdkopen {
  /** {@link https://open.taobao.com/tmc.htm?docId=1774&docType=9 五道口交易状态变更消息通知} */
  interface OrderMessage {
    /** 五道口订单ID */
    biz_order_id: number;
    /** 商户编码 */
    merchant_code: string;
    /** 订单状态 */
    order_status: string;
    /** 外部订单ID */
    out_order_id: string;
    /** 经营店ID */
    store_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2125&docType=9 采购价变更消息} */
  interface PriceAdjust {
    /** 操作类型：1=修改 2=删除 3=失效 */
    operate_type: number;
    /** 操作唯一号 */
    out_unique_id: string;
    /** 状态：1为"处理中",2为"拦截",3为"审批中",4为"审批拒绝",5为"成功" */
    status: number;
    /** 供给方商家编码 */
    supply_merchant_code: string;
    /** 供给方商品编码 */
    supply_sku_code: string;
    /** 供给方仓编码 */
    supply_store_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1819&docType=9 同城零售逆向交易消息} */
  interface RefundMessage {
    /** 退款单号 */
    refund_id?: string;
    /** 淘宝子订单ID */
    tb_sub_order_id?: number;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdkorder {
  /** {@link https://open.taobao.com/tmc.htm?docId=1289&docType=9 五道口订单履约状态变更消息} */
  interface FulfillStatusChange {
    /** 履约值 */
    fulfill?: string;
    /** 业务消息id */
    msg_id: string;
    /** 履约状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1807&docType=9 共享库存保险正向投保消息} */
  interface InsuranceOrder {
    /** 淘宝交易子订单 */
    tb_sub_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1808&docType=9 共享库存保险逆向理赔消息} */
  interface InsuranceRefund {
    /** 退货单ID */
    refund_id: string;
    /** 淘宝交易子订单ID */
    tb_sub_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1770&docType=9 订单履约状态变更消息} */
  interface OrderFulfillPush {
    /** 履约单ID */
    fulfill_order_id: string;
    /** 履约状态 */
    fulfill_status: string;
    /** 商户编号 */
    merchant_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1801&docType=9 履约状态变更消息} */
  interface OrderFulfillTokenPush {
    /** 履约单ID */
    fulfill_order_id: string;
    /** 履约状态 */
    fulfill_status: string;
    /** 商户编号 */
    merchant_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1762&docType=9 猫超订单逆向消息通知商户} */
  interface OrderRefundPush {
    /** 商户编码 */
    merchant_code: string;
    /** 退款单ID */
    refund_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1761&docType=9 猫超订单数据变更消息通知} */
  interface OrderStatusPush {
    /** 商户编码 */
    merchant_code: string;
    /** 订单状态 */
    order_status?: string;
    /** 主站主订单ID */
    tb_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1631&docType=9 逆向单企业积分消息发送} */
  interface RefundOrgPoint {
    /** 退款单商品ID */
    item_id?: string;
    /** 退款单商品标题 */
    item_title?: string;
    /** 退款子单号 */
    origin_order_id?: string;
    /** 主订单号 */
    origin_parent_id?: string;
    /** 支付单号 */
    pay_order_id?: string;
    /** 企业商户对应渠道code */
    refund_channel: string;
    /** 该渠道退款金额, 单位:分 */
    refund_channel_fee: string;
    /** 退款单退款金额(不包含折扣计算), 单位:分 */
    refund_fee?: string;
    /** 退款单号 */
    refund_order_id: string;
    /** 退款完成时间 格式: yyyy-MM-dd HH:mm:ss */
    refund_time?: string;
    /** 退款子订单号_渠道code,作为消息追溯唯一键 */
    suborder_channel_uuid: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1283&docType=9 五道口淘鲜达逆向订单消息} */
  interface RefundSuccess {
    /** 实际取货数量 */
    actual_pick_quantity?: string;
    /** 实际退货数量 */
    actual_refund_quantity?: string;
    /** 跑批时间 */
    batch_time?: Date | number | string;
    /** 库存单位购买数量 */
    buy_amount_stock?: string;
    /** 纠纷类型 1：售中 2：售后 */
    dispute_type?: number;
    /** 商品skucode */
    item_code?: string;
    /** 商家编码 */
    merchant_code?: string;
    /** 非标品购买数量 */
    ns_quantity?: string;
    /** open_uid */
    open_uid?: string;
    /** 操作人id */
    operator_id?: string;
    /** 操作人名称 */
    operator_name?: string;
    /** 订单渠道，2-APP, 3-POS */
    order_client?: number;
    /** 渠道来源 3：饿了么 4：淘宝 */
    order_from?: number;
    /** 淘鲜达子订单号 */
    origin_order_id?: number;
    /** 淘鲜达父订单号 */
    origin_parent_id?: number;
    /** 外部主订单号 */
    out_mian_order_id?: string;
    /** 外部子订单号 */
    out_order_id?: string;
    /** 外部退款id */
    out_refund_id?: string;
    /** 外部门店id */
    out_shop_id?: string;
    /** 外部skucode */
    out_sku_code?: string;
    /** 库存单位拣货数量 */
    pick_amount_stock?: string;
    /** 履约状态 */
    promise_status?: string;
    /** 原购买数量 */
    quantity?: number;
    /** 退款金额 */
    refund_amount?: number;
    /** 退款渠道 */
    refund_channel_list?: string;
    /** 退款单id */
    refund_order_id?: number;
    /** 退款运费，单位为分 */
    refund_post_fee?: number;
    /** 理论退货数量 */
    refund_quantity?: string;
    /** 退款时间 */
    refund_time?: Date | number | string;
    /** 退款类型 */
    refund_type?: number;
    /** 销售单位 */
    sale_unit?: string;
    /** 非标品单位 */
    sell_unit?: string;
    /** 渠道店id */
    shop_id?: string;
    /** 库存单位 */
    stock_unit?: string;
    /** 店铺码 */
    store_id?: string;
    /** 同步状态 */
    sync_status?: string;
    /** 淘宝子订单号 */
    tb_biz_order_id?: number;
    /** 淘宝主订单号 */
    tb_biz_parent_id?: number;
    /** 交易属性 */
    trade_attributes?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1587&docType=9 共享库存SOPO} */
  interface SoPo {
    /** 履约子订单号 如果是正向，则为正向履约子单号，如果是退款，则为逆向履约子单号 */
    fulfill_sub_order_id?: string;
    /** 45=猫超，100=共享库存 */
    order_from?: number;
    /** 未税单价 */
    price_without_tax?: string;
    /** 采购价（含税） */
    price_with_tax: string;
    /** PO单单号 */
    process_order_no: string;
    /** 数量 */
    quantity: string;
    /** 交易类型 */
    sales_type: number;
    /** 商品code */
    sku_code?: string;
    /** 经营店id */
    store_id: string;
    /** 税率 */
    tax_rate?: string;
    /** 淘系子订单号 */
    tb_sub_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1272&docType=9 五道口订单状态变更消息} */
  interface StatusChange {
    /** 盒马主订单号 */
    biz_order_id: number;
    /** 商品优惠总额 */
    discount_amt?: number;
    /** 班次号 */
    duty_code?: string;
    /** 赠券，格式为 券ID_券金额， 金额单位为分 */
    gift_coupon?: string;
    /** 会员卡号 */
    member_card_num?: string;
    /** 会员价优惠总金额 */
    member_discount_amt?: number;
    /** 会员积分 */
    member_point?: string;
    /** 商户码 */
    merchant_code?: string;
    /** open_uid */
    open_uid?: string;
    /** 收银员编号 */
    operator_id?: string;
    /** 收银员名字 */
    operator_name?: string;
    /** app或pos */
    order_client?: string;
    /** 渠道来源， 3：饿了么 4：盒马 */
    order_from?: number;
    /** 订单状态 */
    order_status?: string;
    /** 商品总金额（优惠前） */
    original_amt?: number;
    /** 外部订单号 */
    out_order_id?: string;
    /** 外部门店号 */
    out_shop_id?: string;
    /** 打包时间 */
    package_time?: Date | number | string;
    /** 支付渠道信息 */
    pay_channels?: string;
    /** 成交时间 */
    pay_time?: Date | number | string;
    /** 配送费 */
    post_fee?: number;
    /** 渠道店id */
    shop_id?: string;
    /** 门店编码 */
    store_id?: string;
    /** 子订单信息 */
    sub_orders?: string;
    /** 淘宝主订单号 */
    tb_biz_order_id?: number;
    /** 主订单附加属性 */
    trade_attributes?: string;
    /** 销售类型（正向销售1：逆向销售2。本接口应返回2） */
    trd_type?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1623&docType=9 淘鲜达订单优惠券状态变更} */
  interface VoucherStatus {
    /** 业务时间 */
    biz_time: Date | number | string;
    /** 经营店id */
    store_id?: string;
    /** 淘系主订单号 */
    tb_order_id: string;
    /** 优惠券状态，occupy：占用 ，used：已使用 ，release：释放 */
    voucher_status: string;
    /** 券id和code */
    wdk_order_voucher_codes: string;
  }
}

/** 五道口营销 */
declare namespace Alibaba.Wdktrade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1625&docType=9 营销券实例消息} */
  interface CouponInstance {
    /** 门槛金额 */
    amount?: number;
    /** 可使用店列表 */
    can_use_shop_list?: string[];
    /** 申请渠道 */
    channel?: string;
    /** 优惠券发放方式 */
    coupon_send_type?: string;
    /** 卡券来源 */
    coupon_source?: string;
    /** 优惠券详情描述 */
    description?: string;
    /** 券详情 */
    details?: string[];
    /** 结束时间 */
    end_time?: Date | number | string;
    /** 特性 */
    features?: string;
    /** 匿名码code */
    ma_code: string;
    /** 商家编码 */
    merchant_code: string;
    /** 开始时间 */
    start_time?: Date | number | string;
    /** 模板id */
    template_id?: string;
    /** 优惠券名称 */
    title?: string;
    /** 券实例ID */
    voucher_id: string;
  }
}

/** 天猫服务 */
declare namespace Alibaba.Yichao {
  /** {@link https://open.taobao.com/tmc.htm?docId=2607&docType=9 蚁巢投保理赔消息} */
  interface ClaimOrder {
    /** 行为 */
    action: string;
    /** 理赔申请方ID */
    claimant_id: string;
    /** 理赔单号 */
    claim_order_id: string;
    /** 外部业务单据 报案单 */
    out_order_id: string;
    /** 产品码 */
    product_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2549&docType=9 蚁巢保单修改消息} */
  interface InsuranceUpdate {
    /** 保单生效时间 */
    gmt_effect: string;
    /** 保单失效时间 */
    gmt_expiry: string;
    /** 保司保单号 */
    insurance_application_no: string;
    /** 蚁巢保单号 */
    insurance_order_id: string;
    /** 单据唯一键 */
    out_id: string;
    /** 工单或者服务单号 */
    out_order_id: string;
    /** 关联单据类型 */
    out_order_type: string;
    /** 保单类型 */
    product_code: string;
    /** 蚁巢保单状态 */
    status: string;
    /** 蚁巢保单状态 */
    status_code: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2696&docType=9 蚁巢报案单更新消息} */
  interface ReportOrder {
    /** 保司保单号 */
    insurance_application_no: string;
    /** 投保单id */
    insurance_order_id: string;
    /** 报案单申请id */
    reporter_id: string;
    /** 报案单申请号 */
    report_apply_no: string;
    /** 报案失败原因 */
    report_fail_reason: string;
    /** 报案单id */
    report_order_id: string;
    /** 状态码 */
    status: string;
    /** 状态code */
    status_code: string;
  }
}

/** 平台消息 */
declare namespace Alibaba.Yunio {
  /** {@link https://open.taobao.com/tmc.htm?docId=1063&docType=9 YunIO数据流转} */
  interface DataTransfer {
    /** 流转数据体 */
    data: string;
    /** 数据体业务标识 */
    data_id: string;
  }
}
