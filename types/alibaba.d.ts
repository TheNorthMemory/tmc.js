/** 自动驾驶API */
declare namespace Alibaba.Adlab {
  /** 自动驾驶iot设备消息 */
  interface IotDevice {
    /** iot设备key */
    iot_device_key: string;
    /** 车辆编号 */
    udid: string;
  }

  /** 包裹eta更新 */
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

  /** 包裹配送状态更新 */
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
}

/** 阿里通信 */
declare namespace Alibaba.Alicom {
  /** 阿里通信流量统一营销赠品发放通知 */
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

/** 阿里健康追溯码 */
declare namespace Alibaba.Alihealth {
  /** 单据处理状态通知 */
  interface BillProcessStatusNotify {
    /** 单据号 */
    bill_code: string;
    /** 单据时间 */
    bill_time: string;
    /** 单据类型 */
    bill_type: string;
    /** 单据上传人 */
    ic_code: string;
    /** 单据处理时间 */
    process_date: string;
    /** 处理信息 */
    process_info: string;
    /** 单据企业ID */
    ref_user_id: string;
    /** 处理状态 0，处理中 1, 上传成功 3, 处理成功 4, 处理失败 */
    result_type: string;
    /** 出入库号 */
    store_inout_seq_no: string;
  }

  /** 医生、服务相关消息 */
  interface DoctorMessage {
    /** 医生id */
    doctor_id: string;
    /** 通知消息ID */
    message_id: string;
    /** 枚举：AUDIT_PASS=审核通过，AUDIT_FAILED=审核未通过 */
    message_type: string;
    /** 操作时间 */
    operate_time: string;
    /** 原因 */
    reason: string;
  }

  /** 中台订单状态变化推送 */
  interface NrmopOrderStatusChange {
    /** 渠道类型：o2o-手淘O2O；ele-饿了么；baidu-百度外卖；meituan-美团；jd-京东；mvm-售药机 */
    biz_type: string;
    /** 渠道订单号 */
    channel_order_id: string;
    /** 物流单号(目前只支持手淘订单) */
    delivery_no: string;
    /** 物流状态：0未呼物流，默认值；1已呼叫物流，2配送员已接单，3配送中，4已完成，5已取消 */
    delivery_status: string;
    /** 中台订单号 */
    order_id: string;
    /** 订单状态：1已支付；2已接单；3已完成；4已取消 */
    order_status: string;
    /** 退款状态：0未申请退款，默认值；1已申请退款；2同意退款；3拒绝退款；4已取消退款 */
    refund_status: string;
  }

  /** 平台通知三方机构"订单状态变更" */
  interface OrderStatusChange {
    /** 问诊对话结束原因 */
    dialog_close_reason: string;
    /** 医生UUID */
    doctor_id: string;
    /** 三方互联网医院编码 */
    hospital_id: string;
    /** 通知消息ID */
    message_id: string;
    /** 通知消息类型：ORDER（订单状态变更，具体的订单状态需查看order_status字段）或者REVIEW（患者完成服务评价） */
    message_type: string;
    /** 订单ID */
    order_id: string;
    /** 新订单通知：WAIT_DIAGNOSE；医生接诊：DIAGNOSING ； 问诊结束：DIAGNOSED ； 退款成功：REFUNDED ； 已结算：THIRD_SELLER_PAID ； */
    order_status: string;
    /** 会话ID */
    session_id: string;
    /** 通知时间，精确到秒 */
    time: Date;
  }

  /** O2O订单状态变更通知 */
  interface TradeOrderStatusChange {
    /** O2O订单id。 */
    order_id: number;
    /** O2O订单状态。100：订单已创建；110：用户已支付；180：交易失败，订单关闭；190：交易成功。 */
    order_status: number;
  }

  /** 疫苗交易预约信息变动 */
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
}

/** 阿里物联 */
declare namespace Alibaba.Alink {
  /** 设备数据推送 */
  interface DeviceDataPush {
    /** 设备数据 */
    device_data: string;
    /** 设备MAC */
    mac: string;
    /** 设备型号 */
    model: string;
    /** 设备数据上报时间（毫秒格式） */
    msg_time: string;
    /** 通知Id */
    notify_id: string;
    /** 设备SN */
    sn: string;
  }

  /** 设备报警消息 */
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
  /** 数字短信模板审批回执 */
  interface DigitalSmsTemplateDR {
    /** 审批状态，1：审批通过；2：审批不通过 */
    approval_status: number;
    /** 数字短信模板code */
    template_code: string;
    /** 运营商类型，UNICOM_VENDOR：联通；MOBILE_VENDOR：移动，TELCOM_VENDOR：电信 */
    vendor: string;
  }

  /** 物联网卡激活通知 */
  interface FcActiveIotcard {
    /** 激活类型：1，实名后激活；2，首话单激活； */
    active_type: string;
    /** 激活时间YYYYMMDDHHMMSS */
    first_activetime: string;
    /** ICCID(SIM卡卡号) */
    iccid: string;
    /** 实名认证的用户身份证号(个人认证) */
    ident_number: string;
    /** 终端ID 终端IMEI */
    imei: string;
    /** 身份证名字(个人认证) */
    name: string;
    /** 手机号码 */
    phone: string;
  }

  /** 语音呼叫结果推送 */
  interface FcCallCdr {
    /** 任务主键 */
    biz_id: string;
    /** DTMF */
    dtmf: string;
    /** 通话时长，未接通为0 */
    duration: string;
    /** 通话结束时间，未接通则为空 */
    end_time: string;
    /** 扩展字段回传，将调用api时传入的字段返回 */
    extend: string;
    /** 通话开始时间，未接通则为空 */
    start_time: string;
    /** 呼叫结果状态码 */
    status_code: string;
    /** 结果描述 */
    status_msg: string;
  }

  /** 录音回执 */
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

  /** 流量直充状态报告 */
  interface FcFlowUp {
    /** 明细id */
    data_id: string;
    /** 错误描述 */
    error_msg: string;
    /** 外部流水号 */
    out_id: string;
    /** 手机号 */
    phone: string;
    /** 状态 */
    status: string;
    /** 状态码 */
    status_code: string;
  }

  /** 短消息发送结果报告 */
  interface FcSmsDR {
    /** 任务主键 */
    biz_id: string;
    /** 返回原因code */
    err_code: string;
    /** 扩展字段回传，调用api时传入，消息通知原样返回 */
    extend: string;
    /** 短信接收号码 */
    receiver: string;
    /** 报告时间 */
    rept_time: string;
    /** 发送时间 */
    send_time: string;
    /** 状态 1：成功，2：失败 */
    state: string;
  }

  /** 短信上行 */
  interface FcSmsUp {
    /** 短信内容 */
    content: string;
    /** 扩展码 */
    dest_code: string;
    /** 手机号码 */
    sender: string;
    /** 时间 */
    sender_time: string;
    /** 上行对应的签名 */
    sign_name: string;
    /** 唯一ID */
    sms_seq: string;
  }

  /** 语音呼叫中间状态消息 */
  interface FcTmpStatus {
    /** 任务主键 */
    biz_id: string;
    /** 呼叫状态码 */
    status_code: string;
    /** 动作发生时间 */
    status_time: string;
  }

  /** 流量直充 */
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

  /** 实名认证结果通知 */
  interface IotPersonalConfirmNotice {
    /** 认证结果（Pass 通过 Reject 拒绝） */
    auth_result: string;
    /** Sim卡编号 */
    iccid: string;
    /** 消息流水id */
    msgid: string;
  }

  /** 物联网停机消息通知 */
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

  /** 语音呼叫结果推送 */
  interface TaFcCallCdr {
    /** 任务主键 */
    biz_id: string;
    /** DTMF */
    dtmf: string;
    /** 通话时长，未接通为0 */
    duration: string;
    /** 通话结束时间，未接通则为空 */
    end_time: string;
    /** 扩展字段回传，将调用api时传入的字段返回 */
    extend: string;
    /** 通话开始时间，未接通则为空 */
    start_time: string;
    /** 呼叫结果状态码 */
    status_code: string;
    /** 结果描述 */
    status_msg: string;
  }

  /** 聚石塔短消息发送结果报告 */
  interface TaFcSmsDR {
    /** 任务主键 */
    biz_id: string;
    /** 返回原因code */
    err_code: string;
    /** 扩展字段回传，调用api时传入，消息通知原样返回 */
    extend: string;
    /** 短信接收号码 */
    receiver: string;
    /** 报告时间 */
    rept_time: string;
    /** 发送时间 */
    send_time: string;
    /** 状态 1：成功，2：失败 */
    state: string;
  }
}

/** 电子发票 */
declare namespace Alibaba.Einvoice {
  /** 发票申请单状态变更通知 */
  interface ApplyUpdate {
    /** 中台发票申请ID，由中台生成。字母或数字组成。 可用于查询发票申请的详情。 */
    apply_id: string;
    /** 申请状态，多个之间逗号分隔。不填则表示查询所有状态。 可选值： applying: 申请中，初始状态； cancelled: 申请已取消； confirmed: 商户已确认，待开/录入发票； craeting_inv: 开票中，待发票结果回传； inv_failed: 开票失败； inv_success: 开票成功； inv_part_success: 部分成功（拆单场景下存在。举例：发票申请拆单之后有10张票，其中有1张开票成功时，此时申请状态即为inv_part_success，当10张票全部成功申请状态则为inv_success） */
    apply_status: string;
    /** 当前申请单中累计已开票失败的金额（含税）。 主要用于拆单场景：拆单的情况下一笔申请可能会拆分成多张发票 */
    fail_amount: string;
    /** 当前申请是否为已终结状态。true: 是，false: 否。 主要用于区分inv_part_success状态下是终态还是中间态 */
    is_finally: string;
    /** 外部业务方发起开票申请的唯一幂等ID, 由调用平台生成。 只能由字母和数字组成。 */
    outer_id: string;
    /** 业务平台code, 由发票中台分配 */
    platform_code: string;
    /** 当前申请单中累计已开票成功的金额（含税）。 主要用于拆单场景：拆单的情况下一笔申请可能会拆分成多张发票 */
    success_amount: string;
  }

  /** 商户事件触发消息 */
  interface CompanyDoAction {
    /** 事件，可选值： device_launch_query：虚拟设备发行查询； */
    action: string;
    /** 拓展字段，json格式 */
    ext_json: string;
    /** 纳税人识别号 */
    payee_register_no: string;
  }

  /** 订购单退款审核结果通知 */
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
    remark: string;
  }

  /** 入驻工单状态变更消息 */
  interface RegisterFlowChange {
    /** 事件，可选值：isv_agree: 服务商接单,isv_reject: 服务商驳回工单, device_deploy: 税控设备上架部署完成,confirm_qualification: 商户确认获取电子发票资质, fill_delivery_address: 商家填写税控设备收获地址, confirm_published: 服务商回传发行完毕,user_send_device: 商家确认已发出税控设备, machine_room_received: 服务商确认已收到税控设备, refund_start: 发起退款, refund_agree: 服务商同意退款, refund_reject: 服务商拒绝退单, inv_test_start: 开始测试开票, inv_test_success: 开票结果回传：开票成功,inv_test_fail: 开票结果回传：开票失败,confirm_test_success: 确认测试开票成功proxy_sync_ca: ISV同步CA与签章信息至税控应用proxy_sync_company: ISV触发税控应用进行企业信息同步 */
    action: string;
    /** 附加消息，拓展字段，json格式。 当 action = inv_test_fail, 拓展字段必填, 必须包含message（失败原因）。 当 action = confirm_test_success, 拓展字段必填, 必须包含serv_start_time（服务起始时间）和serv_end_time（服务截止时间）。 当 action = isv_reject 或者 action = refund_reject, 拓展字段必填, 必须包含message（拒绝原因）。 */
    ext_json: string;
    /** 入驻开通工单ID，入驻开通工单流程中为必选字段 */
    flow_id: string;
    /** 入驻工单ID */
    register_id: string;
    /** 消息接收目标，业务平台对应为platformCode, 税控服务商对应为productCode */
    target_code: string;
  }

  /** 入驻工单创建消息 */
  interface RegisterFlowCreate {
    /** 企业名称 */
    company_name: string;
    /** 附加消息, json格式 */
    ext_json: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 入驻工单ID */
    register_id: string;
  }

  /** 增购税控设备触发消息 */
  interface TaxDeviceOrder {
    /** 订购商品ID */
    article_id: string;
    /** 订购时间，格式yyyy-MM-dd HH:mm:ss */
    buy_date: Date;
    /** 拓展字段，json格式 */
    ext_json: string;
    /** 实付总金额，单位元，最多2位小数 */
    fact_total_fee: string;
    /** 税控设备订购单ID */
    flow_id: string;
    /** 商品规格ID */
    item_id: string;
    /** 服务市场订单号 */
    order_id: string;
    /** 纳税人识别号 */
    payee_register_no: string;
    /** 税控产品code */
    product_code: string;
  }
}

/** 1688服务市场 */
declare namespace Alibaba.Fuwu {
  /** 订单支付消息 */
  interface OrderPaid {
    /** app唯一标识 */
    app_key: string;
    /** 订单服务状态（B: 服务前； S: 服务中； E: 服务结束； P: 服务暂停； C: 作废；） */
    biz_status: string;
    /** 订单行号 */
    order_item_no: string;
    /** 支付金额 */
    paid_amount: string;
    /** 支付状态（payment_none: 未支付； payment_part: 部分支付； payment_success: 支付完成；） */
    pay_status: string;
  }
}

/** 欢行开放平台 */
declare namespace Alibaba.Happytrip {
  /** 欢行统一订单模型变更通知消息 */
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
}

/** 电子发票 */
declare namespace Alibaba.Invoice {
  /** 开票申请 */
  interface Apply {
    /** 发票申请ID */
    apply_id: string;
    /** 抬头类型，0=个人，1=企业 */
    business_type: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 卖家Nick */
    seller_nick: string;
    /** 开票申请的触发类型，buyer_payed=卖家已付款，sent_goods=卖家已发货，buyer_confirm=买家确认收货，refund_seller_confirm=卖家同意退款，invoice_supply=买家申请补开发票，invoice_change=买家申请改抬头，change_paper=电换纸 */
    trigger_status: string;
  }

  /** 开票申请审核结果 */
  interface ApplyResult {
    /** 发票申请ID */
    apply_id: string;
    /** 审核备注 */
    message: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 审核结果 */
    result: boolean;
  }

  /** 税盘下架单新增和更新通知 */
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

  /** 资源包开通/订购记录同步 */
  interface FlowBuket {
    /** 开票业务类型，0 电票，1 纸票 */
    biz_type: number;
    /** 订购时间 */
    buy_date: Date;
    /** 资源包到期时间 */
    end_time: Date;
    /** 产品特性，0 默认值、普通电纸票，1 魔盒版，2 移动版开票 */
    feature: number;
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

  /** 税控服务开票申请 */
  interface InvoiceApply {
    /** 开票申请ID */
    apply_id: string;
    /** 企业名称 */
    company_name: string;
    /** 税号 */
    payee_register_no: string;
  }

  /** 发票对外通知物流信息 */
  interface Logistics {
    /** 客户id */
    customer_id: string;
    /** 客户站点（必填） */
    customer_site: string;
    /** 具体的客户系统 */
    customer_system: string;
    /** 寄送时间 */
    gmt_send: Date;
    /** 发票代码 */
    invoice_code: string;
    /** 开票日期 */
    invoice_date: Date;
    /** 税务平台发票ID */
    invoice_id: string;
    /** 发票号码 */
    invoice_no: string;
    /** 物流公司 目前只有EMS */
    logistics_companies: string;
    /** 外围系统发票ID，即申请开票时的requestNo */
    related_id: string;
    /** sender */
    sender: string;
    /** 消息时间戳 */
    timestamp: Date;
    /** 运单号 */
    tracking_number: string;
  }

  /** 纸票操作结果回传（打印、作废等） */
  interface PaperOpsReturn {
    /** 错误码，create_result=fail时有值 */
    biz_error_code: string;
    /** 错误消息，create_result=fail时有值 */
    biz_error_msg: string;
    /** 操作结果，success=成功，fail=失败 */
    create_result: string;
    /** 操作类型，print=打印，invalid=作废 */
    ops_type: string;
    /** 税号 */
    payee_register_no: string;
    /** 打印标记，ops_type=print时有值，0=打印发票，1=打印清单 */
    print_flag: number;
    /** 已开具纸票的流水号 */
    serial_no: string;
  }

  /** 电子发票售前咨询 */
  interface PreConsulting {
    /** 企业名称 */
    company_name: string;
    /** 联系人邮箱 */
    contact_mail: string;
    /** 联系人名称 */
    contact_name: string;
    /** 联系人电话 */
    contact_phone: string;
    /** 联系人旺旺 */
    contact_wangwang: string;
    /** 信息提交时间 */
    create_time: Date;
    /** 问题类型 */
    issue_type: string;
  }

  /** 数据查询请求 */
  interface Query {
    /** 查询参数 */
    param: string;
    /** 查询类别码 */
    query_code: string;
  }

  /** 查询发票信息 */
  interface QueryInvoice {
    /** 发票代码 */
    normal_invoice_code: string;
    /** 发票号码 */
    normal_invoice_no: string;
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
    version: string;
  }

  /** 入驻阿里发票平台 */
  interface Regist {
    /** 用户企业名称 */
    company_name: string;
    /** 附加消息 */
    ex_info: string;
    /** 注册ID */
    regist_id: string;
    /** 商家/用户名称 */
    user_name: string;
  }

  /** 开票请求结果 */
  interface ResultReturn {
    /** 错误码，create_result=fail才有 */
    biz_error_code: string;
    /** 错误原因，create_result=fail才有 */
    biz_error_msg: string;
    /** 开票结果，success=成功，fail=失败 */
    create_result: string;
    /** ERP的开票单号 */
    erp_tid: string;
    /** 错误类型，create_result=fail时有值，biz=业务错误（需要修改报文重新发起开票），sys=服务商系统错误（阿里发票平台自动重试），tax=税务错误（比如盘无票、抄报税等，可重试） */
    error_type: string;
    /** 发票种类,0=电子发票，1=纸质普通发票，2=纸质专用发票 */
    invoice_kind: number;
    /** 发票类型，blue：蓝票，red：红票 */
    invoice_type: string;
    /** 是否重试中，根据开票服务商返回的错误码判断是否在重试中 */
    is_retrying: boolean;
    /** 收款方税务登记证号 */
    payee_register_no: string;
    /** 电商平台代码,TB,TM,ALIPAY,JD */
    platform_code: string;
    /** 电商平台对应的订单号 */
    platform_tid: string;
    /** 开票卖家的nick */
    seller_nick: string;
    /** 开票流水号 */
    serial_no: string;
  }

  /** 发票状态变更消息 */
  interface StatusChange {
    /** 发票代码 */
    invoice_code: string;
    /** 发票号码 */
    invoice_no: string;
    /** 发票当前状态 */
    invoice_status: string;
    /** 外围系统发票ID，及申请开票时的requestNo */
    related_id: string;
    /** 消息时间戳 */
    time_stamp: Date;
  }

  /** 商家税号变更 */
  interface TaxChange {
    /** 变更类型 */
    change_type: number;
    /** 企业名称 */
    company_name: string;
    /** 新税号 */
    new_payee_register_no: string;
    /** 旧税号 */
    old_payee_register_no: string;
    /** 税号变更单id */
    taxchange_id: string;
  }

  /** 创建未开具发票通知 */
  interface Unissue {
    /** 发票列表idlist */
    invoice_id_list: number[];
    /** 请求单号 */
    request_no: string;
    /** 时间戳 */
    timestamp: Date;
  }
}

/** 零售通_公共 */
declare namespace Alibaba.Lst {
  /** 品牌商-订单物流状态变化 */
  interface BmOrderLogisticsChange {
    /** 主订单id，消息业务id，可用于消息轨迹查询 */
    main_order_id: number;
    /** 子订单id列表 */
    sub_order_ids: string;
  }

  /** 线下自有订单发货状态变更消息 */
  interface BroadcastSelfOrderShipChange {
    /** 外部主订单号 */
    out_order_id: string;
    /** 零售通供应商userId */
    supplier_user_id: number;
    /** appkey_userId_outOrderId */
    vir_id: string;
  }

  /** 收银快照同步消息 */
  interface CashierSync {
    /** 收银快照同步消息消息体内容JSON串 */
    data_json: string;
    /** 消息业务Id */
    msg_biz_id: string;
  }

  /** 商品同步消息 */
  interface GoodsSync {
    /** 消息体数据JSON串 */
    data_json: string;
    /** 业务消息ID */
    msg_biz_id: string;
  }

  /** 商品库存修改同步消息 */
  interface InventorySync {
    /** 消息体内容JSON串 */
    data_json: string;
    /** 消息业务ID */
    msg_biz_id: string;
  }

  /** 消息测试 */
  interface MsgTest {
    /** 消息体内容JSON串 */
    data_json: string;
    /** 消息业务Id */
    msg_biz_id: string;
  }

  /** 零售通交易订单变更消息 */
  interface OrderChange {
    /** 主订单id，消息业务id，可用于消息轨迹查询 */
    main_order_id: number;
    /** 子订单id列表 */
    sub_order_ids: string;
  }

  /** 订单退单 */
  interface RefundChange {
    /** 主订单id */
    main_order_id: string;
    /** 退款单id */
    refund_id: string;
    /** 子订单列表 */
    sub_order_ids: string;
  }

  /** 如意音箱播放日志 */
  interface SpeakerAdvertPlayRecord {
    /** 折扣率 */
    advert_discount_ratio: string;
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
    store_discount_ratio: string;
    /** 单价 */
    unit_price: string;
  }

  /** 零售通供应商交易订单变更消息 */
  interface SupplierOrderChange {
    /** 主订单id，消息业务id，可用于消息轨迹查询 */
    main_order_id: number;
    /** 子订单id列表 */
    sub_order_ids: string;
  }
}

/** MMC五盘货项目 */
declare namespace Alibaba.Mmc {
  /** MMC五盘货盘招投域盘货变更消息 */
  interface OpenStockAlterNotify {
    /** 盘货结束时间 */
    end_time: string;
    /** MMC商家编码 */
    merchant_code: string;
    /** 消息业务id，用于排查问题 */
    msg_id: string;
    /** 消息标签：STOCK_TAKE_SAVE/STOCK_TAKE_DELETE */
    msg_tag: string;
    /** 机构子公司编码 */
    org_no: string;
    /** 外部盘货结束时间(RT专用) */
    out_end_time: string;
    /** 外部盘货开始时间(RT专用),会增加两个小时 */
    out_start_time: string;
    /** 盘货开始时间 */
    start_time: string;
    /** 盘货id */
    stock_take_id: string;
    /** 盘货名称 */
    stock_take_name: string;
    /** 仓编码 */
    warehouse_code: string;
  }

  /** MMC盘招投商品变更消息 */
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

  /** MMC五盘货对接大润发正向订单消息 */
  interface OrderNotify {
    /** 属性 */
    attributes_str: string;
    /** 主订单id */
    biz_order_id: string;
    /** 创建时间 */
    gmt_create: Date;
    /** 修改时间 */
    gmt_modified: Date;
    /** 消息id */
    message_id: string;
    /** 消息标签 */
    message_tag: string;
    /** 子订单信息列表 */
    sub_biz_order_list: string;
    /** 系统时间 */
    sys_time: Date;
  }

  /** MMC五盘货对接大润发价格修改消息 */
  interface PriceUpdate {
    /** 是否 */
    effective: boolean;
    /** 拓展信息，标准Json格式 */
    ext_info: string;
    /** 商家身份，仅用于测试 */
    merchant_code: string;
    /** 消息id，用于消息轨迹查询 */
    message_id: string;
    /** 生效价格列表 */
    price_amount_list: string;
    /** 失败原因，有改价单的时候 可能会有 */
    reason: string;
    /** 改价单编号，有改价单才会返回(MMC内部改价生成的改价单id不会透出) */
    sheet_no: string;
    /** MMC内部的商品sku编码 */
    sku_code: string;
    /** 改价类型 */
    type: string;
    /** 仓code */
    warehouse_code: string;
  }

  /** MMC五盘货对接大润发逆向交易消息 */
  interface RefundOrderNotify {
    /** 主订单id */
    biz_order_id: string;
    /** 用户id */
    buyer_id: number;
    /** 创建时间 */
    gmt_create: Date;
    /** 修改时间 */
    gmt_modified: Date;
    /** 消息id */
    message_id: string;
    /** 消息标签 */
    message_tag: string;
    /** 退款单id */
    rp_refund_id: string;
    /** 子订单id */
    sub_biz_order_id: string;
    /** 系统时间 */
    sys_time: Date;
  }
}

/** 聚石塔监控告警 */
declare namespace Alibaba.Monitor {
  /** 聚石塔监控告警消息投递 */
  interface EventSendMessage {
    /** 告警产生时间 */
    alarm_time: string;
    /** 应用id */
    app_id: number;
    /** 应用名称 */
    app_name: string;
    /** 集群实例id */
    cluster_id: string;
    /** 集群名称 */
    cluster_name: string;
    /** 备注信息 */
    comment: string;
    /** 环境id */
    env_id: number;
    /** 环境名称 */
    env_name: string;
    /** 节点名称 cn-zhangjiakou.内网ip */
    host_name: string;
    /** 事件源类型 Pod或Node */
    kind: string;
    /** 告警信息 */
    message: string;
    /** 推荐的解决方案 */
    resolution: string;
    /** 告警源 POD实例或者节点实例 */
    source: string;
    /** 监控项名称 */
    trigger_name: string;
  }

  /** 聚石塔监控告警消息投递 */
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
    instance_name: string;
    /** 监控指标 */
    metric_name: string;
    /** 规则名称 */
    rule_name: string;
  }
}

/** 银泰开放平台消息 */
declare namespace Alibaba.Mos {
  /** 销售单状态变更 */
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
    update_time: Date;
  }

  /** 销售单退款消息 */
  interface SaleOrderRefund {
    /** 渠道订单号 */
    out_trade_no: string;
    /** 退款完成时间 */
    refund_end_time: Date;
    /** 退款原因 */
    refund_reason: string;
    /** 退款状态 */
    refund_status: number;
    /** 销售退款单主单号 */
    rp_master_order_no: string;
  }
}

/** 网上法庭 */
declare namespace Alibaba.Nazca {
  /** 作废存证消息接口 */
  interface AbandonCert {
    /** 申请流水号 */
    apply_id: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
  }

  /** 查询收费数量 */
  interface QueryChargeNum {
    /** 流水号 */
    apply_id: string;
    /** 客户ID */
    customer_id: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
  }

  /** 发起存证消息接口 */
  interface SaveCert {
    /** 消息流水号 */
    apply_id: string;
    /** 合同编号 */
    contract_num: string;
    /** 源文件（加密） */
    file: string;
    /** 源文件hash */
    file_sha: string;
    /** ip */
    ip: string;
    /** 签署后的文件（加密） */
    pdf_file: string;
    /** 盖章后的hash */
    pdf_sha: string;
    /** 客户在1688的唯一标识 */
    platform_user_id: string;
    /** 盖章前的hash */
    pristine_pdf_sha: string;
    /** 合同发起时间 */
    send_date: Date;
    /** 角色 0:接收者 1：发送者 */
    send_receive: string;
    /** 签署合同的时间 */
    sign_date: Date;
    /** 签署合同手机验证码 */
    sms: string;
    /** 合同名称 */
    topic: string;
  }

  /** 更新收费数量 */
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

/** 零售plus */
declare namespace Alibaba.Nlife {
  /** 采购单状态变化通知 */
  interface BToBTradeStatusNotify {
    /** 采购单状态，枚举类型。 1. WAIT_FOR_CONFIRM：等待确认，此时可接单或拒单，新创建的采购单为此状态； 2. REFUSED：供货商已拒单，如果供货商拒单，采购单为此状态； 3. WAIT_FOR_PAY：等待零售商支付预付款，如果供货商接单，采购单为此状态； 3. WAIT_FOR_CONSIGN：等待供货商发货，如果零售商支付了预付款，采购单为此状态，此时可发货； 4. CONSIGNED_PART：部分发货中（含部分发货的情况），如果供货商发货但没有把采购单中的全部商品发出，采购单为此状态，此时，供货商还可以多次发货； 5. CONSIGNED：已全部发货，如果供货商发货且把采购单中的全部商品发出，采购单为此状态； */
    status: string;
    /** 供货商的用户nick */
    supplier_nick: string;
    /** 零售+平台中的采购单编号 */
    trade_no: string;
  }

  /** 零售+订单同步消息 */
  interface BToCTradeOrderSync {
    /** 用户实付金额 单位 人民币 分 */
    actural_pay_fee: number;
    /** 会员id，会员订单必选 */
    card_no: string;
    /** 会员所属的企业，会员订单必选 */
    company_id: string;
    /** 订单创建时间 */
    gmt_create: Date;
    /** 全渠道订单淘宝/天猫订单号 */
    omni_trade_no: string;
    /** 外部订单号 */
    out_trade_no: string;
    /** 会员手机号，会员订单必选 */
    phone_no: string;
    /** LOGISTICS：物流发货；SELF_DELIVERY：门店自提，全渠道订单设置该字段 */
    picking_up_type: string;
    /** 会员所属的零售+门店 */
    store_id: string;
    /** 订单总金额 单位 人民币 分 */
    total_fee: number;
    /** 0：门店订单；1：全渠道订单；3：网直供订单 */
    trade_biz_type: number;
    /** 零售+交易号 */
    trade_no: string;
  }

  /** 采购单发货通知消息 */
  interface BtoBTradeDeliverNotify {
    /** 发货单号 */
    consign_no: string;
    /** 发货单发货时间 */
    gmt_consign: Date;
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

  /** 采购单生效通知消息 */
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

  /** 采购单退货单确认消息 */
  interface BtobTradeRefundConfirmMsgNotify {
    /** 采购退货单状态 */
    status: string;
    /** 零售商的门店id */
    store_id: number;
    /** 采购退货单号 */
    trade_refund_no: string;
  }

  /** 采购单退货通知消息 */
  interface BtobTradeRefundNotify {
    /** 采购退货单生效时间 */
    gmt_cretae: Date;
    /** 零售商的门店id */
    store_id: number;
    /** 采购退货单号 */
    trade_refund_no: string;
  }

  /** 供应商审核差异单的通知消息 */
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

  /** 零售+商品变动消息 */
  interface ItemUpdate {
    /** 商品变动前的值（目前包括库存和价格） */
    before_value: string;
    /** 商品的itemId */
    item_id: number;
    /** 商品类型:0-IC线上商品; 1-商户导入线下商品 */
    item_type: number;
    /** 商品的商家编码 */
    outer_id: string;
    /** 商品的skuId */
    sku_id: number | bigint;
    /** 门店id */
    store_id: string;
    /** 商品的变动类型:PRICE_CHANGE-价格变化; INVENTORY_CHANGE-库存变化; ONSALE_CHANGE-上架变化; OFFSALE_CHANGE-下架变化; NEWSKU_CHANGE-新增sku变化; DELSKU_CHANGE-删除sku变化 */
    type: string;
    /** 商品变动后的值（目前包括库存和价格） */
    update_value: string;
  }
}

/** 天猫服务 */
declare namespace Alibaba.Serviceplatform {
  /** 服务供应链核销单消息 */
  interface FulfilTask {
    /** 核销单操作，比如create、reserve */
    action: string;
    /** 业务身份 */
    biz_code: string;
    /** 核销单id */
    fulfil_task_id: number;
    /** 网点id（寄送业务用） */
    service_store_id: number;
    /** 操作来源，buyer、worker、system、tp */
    source: string;
    /** 核销单操作时间 */
    update_date: Date;
    /** 工单id列表 */
    workcard_ids: number[];
  }

  /** 服务供应链服务单消息 */
  interface ServiceOrder {
    /** 服务单操作，如create,effect */
    action: string;
    /** 业务身份 */
    biz_code: string;
    /** 服务单id */
    service_order_id: number;
    /** 服务单操作时间 */
    update_date: Date;
  }
}

/** 阿里智付 */
declare namespace Alibaba.Sp {
  /** 通知付款结果 */
  interface NotifyPaymentResult {
    /** 付款时间 */
    actual_pay_time: Date;
    /** 业务身份 */
    biz_code: string;
    /** 业务付款流水号 */
    no: string;
    /** 通知日期 */
    notify_time: Date;
    /** 付款单号 */
    out_trade_no: string;
    /** 实际付款账号 */
    pay_account_no: string;
    /** 付款币种 */
    pay_currency: string;
    /** 付款状态信息描述 */
    pay_msg: string;
    /** 付款状态 */
    pay_status: string;
    /** 交易金额 */
    trade_amount: string;
  }
}

/** 阿里发票 */
declare namespace Alibaba.Tax {
  /** 税优雇员签约结果消息 */
  interface EmployeeSignResult {
    /** 三方协议ID */
    agreement_id: string;
    /** 雇主企业编码 */
    company_code: string;
    /** 雇主企业名称 */
    company_name: string;
    /** 雇员在雇主企业身份标识 */
    company_user_identification: string;
    /** 协议终止时间 */
    end_time: string;
    /** 扩展信息 */
    ext_json: string;
    /** 服务商编码 */
    isv_code: string;
    /** 服务商名称 */
    isv_name: string;
    /** 注册结果 */
    result: boolean;
    /** 结果码 */
    result_code: string;
    /** 结果描述 */
    result_msg: string;
    /** 发薪资产符号 */
    salary_asset_symbol: string;
    /** 发薪资产类型 */
    salary_asset_type: string;
    /** 协议开始时间 */
    start_time: string;
    /** 税优模式 */
    tax_optimization_mode: string;
  }

  /** 税优发薪结果通知 */
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
    pay_salary_time: Date;
    /** 发薪结果码，当发薪失败时，有这个字段 */
    result_code: string;
    /** 发薪结果:SUCCESS-成功， NEED_RETRY-处理中（重试发薪），FAIL(失败，不可重试） */
    status: string;
    /** 发薪商户订单号 */
    tax_fund_order_ids: string;
  }
}

/** 阿里通信 */
declare namespace Alibaba.Tianji {
  /** 天机平台合约机供应商订单消息 */
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

  /** 天机平台订单生成通知消息 */
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
    out_product_code: string;
    /** 供应商用户名称 */
    supplier_name: string;
    /** 淘宝交易订单创建时间 */
    tb_order_create_time: Date;
    /** 淘宝交易订单号 */
    tb_order_no: string;
    /** 交易支付时间 */
    tb_order_pay_time: Date;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdk {
  /** 差评回评 */
  interface ChannelCommentAudit {
    /** 回评内容 */
    audit_content: string;
    /** 盒马主单号 */
    biz_order_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 外部评论id */
    out_comment_id: string;
    /** 商品编码 */
    sku_code: string;
  }

  /** 五道口售中取消外部订单消息 */
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
    sub_refund_orders: string;
    /** 是否整单取消 */
    whole_cancel: boolean;
  }

  /** 客服审核退款结果 */
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

  /** 客服代客发起售后退款(整单/部分) */
  interface ChannelOrderCsUserrefund {
    /** 盒马主单号 */
    biz_order_id: string;
    /** 退款备注 */
    memo: string;
    /** 商家编码 */
    merchant_code: string;
    /** 外部订单号 */
    out_order_id: string;
    /** 退款原因 */
    refund_reason: string;
    /** 退款子单 */
    refund_sub_orders: string;
    /** 渠道店ID */
    shop_id: string;
    /** 经营店ID */
    store_id: string;
  }

  /** 订单状态变更消息 */
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
    sub_refund_orders: string;
  }

  /** 库存同步 */
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

  /** 售中履约变更消息 */
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

  /** 商家渠道商品变动消息 */
  interface StoreItemUpdate {
    /** 此次消息唯一标志 */
    biz_uniq_id: string;
    /** 商家编码 */
    merchant_code: string;
    /** 门店编码 */
    ou_code: string;
    /** 商品编码 */
    sku_code: string;
  }
}

/** 五道口商品 */
declare namespace Alibaba.Wdkitem {
  /** 五道口仓商品变更消息 */
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
  /** Rex用户信息变更消息 */
  interface RexAccountChange {
    /** 消息通知id */
    msg_id: string;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdkopen {
  /** 五道口交易状态变更消息通知 */
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

  /** 采购价变更消息 */
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

  /** 同城零售逆向交易消息 */
  interface RefundMessage {
    /** 退款单号 */
    refund_id: string;
    /** 淘宝子订单ID */
    tb_sub_order_id: number;
  }
}

/** 五道口订单 */
declare namespace Alibaba.Wdkorder {
  /** 五道口订单履约状态变更消息 */
  interface FulfillStatusChange {
    /** 履约值 */
    fulfill: string;
    /** 业务消息id */
    msg_id: string;
    /** 履约状态 */
    status: string;
  }

  /** 共享库存保险正向投保消息 */
  interface InsuranceOrder {
    /** 淘宝交易子订单 */
    tb_sub_order_id: number;
  }

  /** 共享库存保险逆向理赔消息 */
  interface InsuranceRefund {
    /** 退货单ID */
    refund_id: string;
    /** 淘宝交易子订单ID */
    tb_sub_order_id: number;
  }

  /** 订单履约状态变更消息 */
  interface OrderFulfillPush {
    /** 履约单ID */
    fulfill_order_id: string;
    /** 履约状态 */
    fulfill_status: string;
    /** 商户编号 */
    merchant_code: string;
  }

  /** 履约状态变更消息 */
  interface OrderFulfillTokenPush {
    /** 履约单ID */
    fulfill_order_id: string;
    /** 履约状态 */
    fulfill_status: string;
    /** 商户编号 */
    merchant_code: string;
  }

  /** 猫超订单数据变更消息通知 */
  interface OrderStatusPush {
    /** 商户编码 */
    merchant_code: string;
    /** 订单状态 */
    order_status: string;
    /** 主站主订单ID */
    tb_order_id: number;
  }

  /** 逆向单企业积分消息发送 */
  interface RefundOrgPoint {
    /** 退款单商品ID */
    item_id: string;
    /** 退款单商品标题 */
    item_title: string;
    /** 退款子单号 */
    origin_order_id: string;
    /** 主订单号 */
    origin_parent_id: string;
    /** 支付单号 */
    pay_order_id: string;
    /** 企业商户对应渠道code */
    refund_channel: string;
    /** 该渠道退款金额, 单位:分 */
    refund_channel_fee: string;
    /** 退款单退款金额(不包含折扣计算), 单位:分 */
    refund_fee: string;
    /** 退款单号 */
    refund_order_id: string;
    /** 退款完成时间 格式: yyyy-MM-dd HH:mm:ss */
    refund_time: string;
    /** 退款子订单号_渠道code,作为消息追溯唯一键 */
    suborder_channel_uuid: string;
  }

  /** 五道口淘鲜达逆向订单消息 */
  interface RefundSuccess {
    /** 实际取货数量 */
    actual_pick_quantity: string;
    /** 实际退货数量 */
    actual_refund_quantity: string;
    /** 跑批时间 */
    batch_time: Date;
    /** 库存单位购买数量 */
    buy_amount_stock: string;
    /** 纠纷类型 1：售中 2：售后 */
    dispute_type: number;
    /** 商品skucode */
    item_code: string;
    /** 商家编码 */
    merchant_code: string;
    /** 非标品购买数量 */
    ns_quantity: string;
    /** open_uid */
    open_uid: string;
    /** 操作人id */
    operator_id: string;
    /** 操作人名称 */
    operator_name: string;
    /** 订单渠道，2-APP, 3-POS */
    order_client: number;
    /** 渠道来源 3：饿了么 4：淘宝 */
    order_from: number;
    /** 淘鲜达子订单号 */
    origin_order_id: number;
    /** 淘鲜达父订单号 */
    origin_parent_id: number;
    /** 外部主订单号 */
    out_mian_order_id: string;
    /** 外部子订单号 */
    out_order_id: string;
    /** 外部退款id */
    out_refund_id: string;
    /** 外部门店id */
    out_shop_id: string;
    /** 外部skucode */
    out_sku_code: string;
    /** 库存单位拣货数量 */
    pick_amount_stock: string;
    /** 履约状态 */
    promise_status: string;
    /** 原购买数量 */
    quantity: number;
    /** 退款金额 */
    refund_amount: number;
    /** 退款渠道 */
    refund_channel_list: string;
    /** 退款单id */
    refund_order_id: number;
    /** 退款运费，单位为分 */
    refund_post_fee: number;
    /** 理论退货数量 */
    refund_quantity: string;
    /** 退款时间 */
    refund_time: Date;
    /** 退款类型 */
    refund_type: number;
    /** 销售单位 */
    sale_unit: string;
    /** 非标品单位 */
    sell_unit: string;
    /** 渠道店id */
    shop_id: string;
    /** 库存单位 */
    stock_unit: string;
    /** 店铺码 */
    store_id: string;
    /** 同步状态 */
    sync_status: string;
    /** 淘宝子订单号 */
    tb_biz_order_id: number;
    /** 淘宝主订单号 */
    tb_biz_parent_id: number;
    /** 交易属性 */
    trade_attributes: string;
  }

  /** 共享库存SOPO */
  interface SoPo {
    /** 履约子订单号 如果是正向，则为正向履约子单号，如果是退款，则为逆向履约子单号 */
    fulfill_sub_order_id: string;
    /** 45=猫超，100=共享库存 */
    order_from: number;
    /** 未税单价 */
    price_without_tax: string;
    /** 采购价（含税） */
    price_with_tax: string;
    /** PO单单号 */
    process_order_no: string;
    /** 数量 */
    quantity: string;
    /** 交易类型 */
    sales_type: number;
    /** 商品code */
    sku_code: string;
    /** 经营店id */
    store_id: string;
    /** 税率 */
    tax_rate: string;
    /** 淘系子订单号 */
    tb_sub_order_id: string;
  }

  /** 五道口订单状态变更消息 */
  interface StatusChange {
    /** 盒马主订单号 */
    biz_order_id: number;
    /** 商品优惠总额 */
    discount_amt: number;
    /** 班次号 */
    duty_code: string;
    /** 赠券，格式为 券ID_券金额， 金额单位为分 */
    gift_coupon: string;
    /** 会员卡号 */
    member_card_num: string;
    /** 会员价优惠总金额 */
    member_discount_amt: number;
    /** 会员积分 */
    member_point: string;
    /** 商户码 */
    merchant_code: string;
    /** open_uid */
    open_uid: string;
    /** 收银员编号 */
    operator_id: string;
    /** 收银员名字 */
    operator_name: string;
    /** app或pos */
    order_client: string;
    /** 渠道来源， 3：饿了么 4：盒马 */
    order_from: number;
    /** 订单状态 */
    order_status: string;
    /** 商品总金额（优惠前） */
    original_amt: number;
    /** 外部订单号 */
    out_order_id: string;
    /** 外部门店号 */
    out_shop_id: string;
    /** 打包时间 */
    package_time: Date;
    /** 支付渠道信息 */
    pay_channels: string;
    /** 成交时间 */
    pay_time: Date;
    /** 配送费 */
    post_fee: number;
    /** 渠道店id */
    shop_id: string;
    /** 门店编码 */
    store_id: string;
    /** 子订单信息 */
    sub_orders: string;
    /** 淘宝主订单号 */
    tb_biz_order_id: number;
    /** 主订单附加属性 */
    trade_attributes: string;
    /** 销售类型（正向销售1：逆向销售2。本接口应返回2） */
    trd_type: number;
  }

  /** 淘鲜达订单优惠券状态变更 */
  interface VoucherStatus {
    /** 业务时间 */
    biz_time: Date;
    /** 经营店id */
    store_id: string;
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
  /** 营销券实例消息 */
  interface CouponInstance {
    /** 门槛金额 */
    amount: number;
    /** 可使用店列表 */
    can_use_shop_list: string[];
    /** 申请渠道 */
    channel: string;
    /** 优惠券发放方式 */
    coupon_send_type: string;
    /** 卡券来源 */
    coupon_source: string;
    /** 优惠券详情描述 */
    description: string;
    /** 券详情 */
    details: string[];
    /** 结束时间 */
    end_time: Date;
    /** 特性 */
    features: string;
    /** 匿名码code */
    ma_code: string;
    /** 商家编码 */
    merchant_code: string;
    /** 开始时间 */
    start_time: Date;
    /** 模板id */
    template_id: string;
    /** 优惠券名称 */
    title: string;
    /** 券实例ID */
    voucher_id: string;
  }
}

/** 平台消息 */
declare namespace Alibaba.Yunio {
  /** YunIO数据流转 */
  interface DataTransfer {
    /** 流转数据体 */
    data: string;
    /** 数据体业务标识 */
    data_id: string;
  }
}
