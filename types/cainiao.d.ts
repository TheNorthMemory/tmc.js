/** 菜鸟发货工作台 */
declare namespace Cainiao.Consignplatform {
  /** {@link https://open.taobao.com/tmc.htm?docId=1658&docType=9 发货工作台下发物流详情消息} */
  interface LogisiticsDetail {
    /** 快递公司code */
    cp_code: string;
    /** 快递公司名称 */
    cp_name: string;
    /** TMS_NOT_ACCEPT 已取号未揽收; TMS_ACCEPT 已揽收; TMS_DELIVERING 派件中;TMS_SIGN 妥投; TMS_FAILED 拒收; TMS_ERROR 配送异常; TMS_TRANSPORT 运输中; */
    logistics_action: string;
    /** lpCode */
    lp_code: string;
    /** 面单号 */
    mail_no: string;
    /** 事件发生时间 */
    occur_time: Date | number | string;
    /** 订单来源，比如 ”TMJL“ 代表天猫精灵 */
    order_source: string;
    /** 外部系统的业务id */
    outer_order_id: string;
    /** 外部子订单列表 */
    outer_sub_order_ids: string[];
    /** 商家id */
    user_id: number;
  }
}

/** IoT售后解决方案 */
declare namespace Cainiao.Iot {
  /** {@link https://open.taobao.com/tmc.htm?docId=1771&docType=9 IoT售后工单信息消息} */
  interface AftersalesTicket {
    /** 设备条码 */
    device_bar_code: string;
    /** 消息类型 */
    tag: string;
    /** 工单ID */
    ticket_id: number;
  }
}

/** 菜鸟 */
declare namespace Cainiao.Logistics {
  /** {@link https://open.taobao.com/tmc.htm?docId=2352&docType=9 菜鸟物流异常件创建} */
  interface AbnormalOrderCreate {
    /** 异常件ID */
    abnormal_piece_id: string;
    /** 异常件类型 */
    abnormal_type: string;
    /** 疑似订单号 */
    order_id: string;
    /** 照片详情 */
    pic_detail: string;
    /** 商家ID */
    seller_id: string;
    /** 疑似运单号 */
    sid: string;
    /** 状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2353&docType=9 异常件变更消息} */
  interface AbnormalOrderUpdate {
    /** 异常件ID */
    abnormal_piece_id: string;
    /** 异常件类型 */
    abnormal_type: string;
    /** 疑似订单号 */
    order_id: string;
    /** 状态：3快递同意/4快递驳回/5失效 */
    status: string;
    /** 疑似运单号 */
    waybill_no: string;
  }
}

/** 菜鸟 */
declare namespace Cainiao.Moduan {
  /** {@link https://open.taobao.com/tmc.htm?docId=1037&docType=9 异常订单预警通知} */
  interface AlertOrder {
    /** 预警级别，目前1为黄，2为红 */
    alert_level: number;
    /** 预警原因 */
    alert_reason_cn: string;
    /** 小件员注册手机 */
    deilver_mobile: string;
    /** 小件员id */
    delivery_user_id: string;
    /** 小件员nick */
    deliver_nick: string;
    /** 小件员真实姓名 */
    deliver_real_name: string;
    /** 接单时间 */
    grasp_date: string;
    /** Lp订单号，唯一键 */
    lp_code: string;
    /** 运单号 */
    mail_no?: string;
    /** 收件人姓名 */
    receiver_name?: string;
    /** 寄件人姓名 */
    sender_name?: string;
    /** 任务Id,唯一键 */
    task_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=948&docType=9 任务取消消息推送} */
  interface CancelTask {
    /** 取消补贴，接单3分钟后取消有补贴 */
    cancel_allownce_amount?: string;
    /** 取消原因 */
    cancel_reason?: string;
    /** 取消原因id */
    cancel_reason_id?: number;
    /** 取消时间 */
    end_time: Date | number | string;
    /** 消息类型 */
    message_type: number;
    /** 任务id */
    task_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1087&docType=9 运单号更新} */
  interface CommonMailnoUpdated {
    /** 更新运单号 */
    new_mailno: string;
    /** 外部订单列表 */
    out_order_ids: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 菜鸟末端订单ID */
    td_order_id: number;
    /** 更新订单时间 */
    update_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1071&docType=9 订单取消} */
  interface CommonOrderCanceled {
    /** 取消代码 */
    cancel_reason_code?: string;
    /** 取消消息 */
    cancel_reason_msg?: string;
    /** 取消角色 */
    cancel_role?: string;
    /** 取消时间 */
    cancel_time: Date | number | string;
    /** 外部订单ID */
    out_order_ids?: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 内部订单ID */
    td_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1082&docType=9 普通寄件接单消息} */
  interface CommonOrderGrasped {
    /** 小件员名称 */
    delivery_name: string;
    /** 小件员电话 */
    delivery_phone: string;
    /** 预计上门揽件时间 */
    expect_got_time: Date | number | string;
    /** 接单CPCODE（内部CP） */
    grasp_cp_code?: string;
    /** 接单CP名称（内部CP） */
    grasp_cp_name?: string;
    /** 初始接单时间 */
    grasp_time: Date | number | string;
    /** 外部订单ID列表 */
    out_order_ids: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 末端订单ID */
    td_order_id: number;
    /** 更新时间（改派的时间以此为准） */
    update_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1084&docType=9 回单消息} */
  interface CommonOrderMailnoReturned {
    /** 运单号 */
    mailno: string;
    /** 外部订单ID列表 */
    out_order_ids?: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 回单CP */
    return_mailno_cp_code: string;
    /** 回单CP名称 */
    return_mailno_cp_name: string;
    /** 回单时间 */
    return_mailno_time: Date | number | string;
    /** 末端订单ID */
    td_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1083&docType=9 揽件消息} */
  interface CommonOrderPickup {
    /** 订单价格 */
    order_price?: string;
    /** 外部订单ID */
    out_order_ids?: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 揽件时间 */
    pickup_time: Date | number | string;
    /** 末端内部订单ID */
    td_order_id: number;
    /** 订单重量 */
    weight?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1086&docType=9 支付订单超时} */
  interface CommonWaitWithholdTimeOut {
    /** 超时时间 */
    expire_time: Date | number | string;
    /** 外部订单ID列表 */
    out_order_ids: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 菜鸟末端订单ID */
    td_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1085&docType=9 代扣结果通知} */
  interface CommonWithholdResult {
    /** 订单金额 */
    order_price?: string;
    /** 外部订单ID列表 */
    out_order_ids?: string[];
    /** 外部用户ID */
    out_user_id: string;
    /** 代扣结果 */
    result: boolean;
    /** 末端订单ID */
    td_order_id: number;
    /** 重量 */
    weight?: number;
    /** 最后代扣时间 */
    withhold_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=981&docType=9 小件员账号同步} */
  interface CourierAccountSync {
    /** 小件员菜鸟账号ID */
    account_id: string;
    /** 小件员手机号 */
    courier_mobile?: string;
    /** 小件员姓名 */
    courier_name?: string;
    /** 菜鸟账单 */
    delivery_cp_user_id: string;
    /** 小件员所属CP员工号 */
    employee_no?: string;
    /** 认证是否成功 */
    is_success?: boolean;
    /** 认证失败原因 */
    status_message?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1030&docType=9 创建预约订单通知} */
  interface CreateAppointOrder {
    /** 预约日期 */
    appoint_day?: string;
    /** 预约时间终点 */
    appoint_time_end: string;
    /** 预约时间起点 */
    appoint_time_start: string;
    /** 业务类型，1-预约派送订单 */
    biz_type: number;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** Lp订单号，唯一键 */
    lp_code: string;
    /** 运单号 */
    mail_no: string;
    /** CP分账金额，单位：元 */
    money_cp?: string;
    /** 小件员分账金额，单位：元 */
    money_deliver?: string;
    /** 预约订单号，唯一键 */
    order_id: string;
    /** 订单状态，10：有效订单 */
    order_status: number;
    /** 收件人详细地址 */
    receiver_address: string;
    /** 寄件人所在市 */
    receiver_city: string;
    /** 寄件人所在区/县 */
    receiver_district?: string;
    /** 收件人姓名 */
    receiver_name: string;
    /** 寄件人所在省 */
    receiver_province: string;
    /** 末端网点code */
    receive_branch_code?: string;
    /** 末端网点信息 */
    receive_branch_name?: string;
    /** 服务订单价格 */
    service_price?: string;
    /** 二段码+三段码 */
    three_segment_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=944&docType=9 直送任务广播} */
  interface DispatchTask {
    /** 消息类型 */
    message_type: number;
    /** 奖励金额 */
    reward?: string;
    /** {} */
    tasks: string;
    /** 任务组id */
    task_group_id: string;
    /** 任务数量 */
    task_nums: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1092&docType=9 公益数据对接下发} */
  interface GongyiData {
    /** 捐赠日期 */
    donation_date?: Date | number | string;
    /** 捐赠人ID */
    donation_guoguo_id?: string;
    /** 捐赠人手机号 */
    donator_mobile?: string;
    /** 捐赠人姓名 */
    donator_name?: string;
    /** 快递公司名称 */
    express_name?: string;
    /** 寄件人所在地址 */
    from_address?: string;
    /** 寄件人城市 */
    from_city?: string;
    /** 寄件人所在县 */
    from_county?: string;
    /** 寄件人所在区 */
    from_district?: string;
    /** 寄件人省 */
    from_province?: string;
    /** 捐赠数量 */
    garment_amount?: number;
    /** 裹裹订单iD */
    guoguo_id?: string;
    /** 善淘网 */
    org_name?: string;
    /** 123456789012345 */
    ship_number?: string;
    /** 包裹状态 */
    status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=947&docType=9 直送抢单成功后消息推送} */
  interface GraspedTask {
    /** 消息类型 */
    message_type: number;
    /** 任务组id */
    task_group_id: string;
    /** taskId */
    task_id_list: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1031&docType=9 修改预约订单通知} */
  interface ModifyAppointOrder {
    /** 预约日期 */
    appoint_day?: string;
    /** 预约时间终点 */
    appoint_time_end: string;
    /** 预约时间起点 */
    appoint_time_start: string;
    /** 业务类型，1-预约派送订单 */
    biz_type: number;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 修改时间 */
    gmt_modified: Date | number | string;
    /** Lp订单号，唯一键 */
    lp_code: string;
    /** 运单号 */
    mail_no: string;
    /** 1:用户;2:小件员;3:小二;100:系统 */
    modify_operator_type?: string;
    /** CP分账金额，单位：元 */
    money_cp?: string;
    /** 小件员分账金额，单位：元 */
    money_deliver?: string;
    /** 预约订单号，唯一键 */
    order_id: string;
    /** 订单状态，10：有效订单，20：取消订单 */
    order_status: number;
    /** 收件人详细地址 */
    receiver_address: string;
    /** 寄件人所在市 */
    receiver_city: string;
    /** 寄件人所在区/县 */
    receiver_district?: string;
    /** 收件人姓名 */
    receiver_name: string;
    /** 寄件人所在省 */
    receiver_province: string;
    /** 末端网点code */
    receive_branch_code?: string;
    /** 末端网点信息 */
    receive_branch_name?: string;
    /** 二段码+三段码 */
    three_segment_code?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=854&docType=9 末端订单转账结果通知} */
  interface OrderFeeTrans {
    /** cp_code */
    cp_code?: string;
    /** 扩展字段 */
    extension: string;
    /** 费用 */
    fee: string;
    /** 1运费 2补贴 */
    fee_type: string;
    /** lpcode */
    lp_code?: string;
    /** 运单号 */
    mail_no?: string;
    /** 订单号 */
    order_id: string;
    /** 1在线支付 */
    pay_status: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=989&docType=9 小件员已接单推送信息} */
  interface OrderGrasp {
    /** 小件员姓名 */
    delivery_name: string;
    /** 小件员电话 */
    delivery_phone: string;
    /** 接单时间 */
    grasp_time: string;
    /** 订单ID */
    out_order_id: string;
    /** 用户ID */
    out_user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=878&docType=9 菜鸟末端订单信息} */
  interface OrderInfo {
    /** 代收金额 */
    collection_amount?: string;
    /** 代收类型 */
    collection_type?: string;
    /** 快递公司code */
    cp_code?: string;
    /** 客户声明价值 */
    customer_declaration_value?: string;
    /** 送货方式 */
    delivery_type?: string;
    /** json扩展字段 */
    extend_fields?: string;
    /** 创建时间 */
    gmt_create: Date | number | string;
    /** 总件数 */
    goods_count?: string;
    /** 物品类型 */
    goods_type?: string;
    /** 总体积 */
    goods_volume?: string;
    /** 重量 */
    goods_weight?: string;
    /** 取件时间 */
    got_date?: Date | number | string;
    /** 接单时间 */
    grasp_date?: Date | number | string;
    /** 保价费 */
    insurance_fee?: string;
    /** 上门接货 */
    is_pickup_door?: boolean;
    /** 快递单号 */
    mail_no?: string;
    /** 订单号 */
    order_code: string;
    /** 订单来源，固定值 */
    order_from?: string;
    /** 订单金额 */
    order_price?: string;
    /** 订单来源0裹裹1支付宝2天猫 */
    order_source?: string;
    /** 0创建20接单30取件40回传运单 */
    order_status?: string;
    /** 订单类型10抢单11兜底 */
    order_type?: string;
    /** 订单中心外部订单号 */
    out_biz_id?: string;
    /** 支付时间 */
    pay_date?: Date | number | string;
    /** 0未支付1线上支付2线下现金支付 */
    pay_status?: string;
    /** 取件人所属公司名称 */
    pickup_company?: string;
    /** 取件人id */
    pickup_man_id?: string;
    /** 取件人姓名 */
    pickup_man_name?: string;
    /** 取件人手机 */
    pickup_man_phone?: string;
    /** 取件员所属网点 */
    pickup_site?: string;
    /** 首重重量,首重价格,续重价格 */
    price_scheme?: string;
    /** 是否存在价格方案 */
    price_scheme_exist?: boolean;
    /** 服务商ID */
    provider_id?: string;
    /** 收件人地址 */
    receiver_address?: string;
    /** 收件人地址-市 */
    receiver_city?: string;
    /** 收件人公司 */
    receiver_company?: string;
    /** 收件人地址-区 */
    receiver_district?: string;
    /** 收件人姓名 */
    receiver_name?: string;
    /** 收件人电话 */
    receiver_phone?: string;
    /** 收件人地址-省 */
    receiver_province?: string;
    /** 收件人电话 */
    receiver_telephone?: string;
    /** 备注 */
    remark?: string;
    /** 寄件人地址 */
    sender_address?: string;
    /** 寄件地址-市 */
    sender_city?: string;
    /** 寄件人公司 */
    sender_company?: string;
    /** 寄件地址-区 */
    sender_district?: string;
    /** 寄件人姓名 */
    sender_name?: string;
    /** 寄件电话 */
    sender_phone?: string;
    /** 寄件地址-省 */
    sender_province?: string;
    /** 寄件人电话 */
    sender_telephone?: string;
    /** 1001半小时上门 1002两小时上门 */
    service_type?: string;
    /** 特殊商品性质 */
    special_commodity_nature?: string;
    /** 运输方式，默认为快递 */
    transport_type?: string;
    /** 用户ID */
    user_id: number;
    /** 1:轻货，2:重货，3:超重货 */
    weight_type?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=990&docType=9 小件员已揽件推送信息} */
  interface OrderPickup {
    /** 订单ID */
    out_order_id: string;
    /** 用户ID */
    out_user_id: string;
    /** 揽收时间 */
    pickup_time: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=991&docType=9 回传运单号通知} */
  interface OrderReturnMailNO {
    /** 快递单号 */
    mail_no: string;
    /** 订单ID */
    out_order_id: string;
    /** 菜鸟用户ID */
    out_user_id: string;
    /** 回单时间 */
    return_mailno_time: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1039&docType=9 申请改派消息} */
  interface RedispatchApplied {
    /** 申请改派时间 */
    apply_time: Date | number | string;
    /** 小件员公司编码 */
    delivery_cp_code: string;
    /** 小件员工号 */
    delivery_cp_user_id: string;
    /** 小件员电话 */
    delivery_mobile_phone?: string;
    /** 菜鸟小件员id */
    delivery_user_id: string;
    /** lp号 */
    lp_code?: string;
    /** 改派原因 */
    redispatch_reason: string;
    /** 任务id */
    task_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1185&docType=9 签收信息回传} */
  interface SignInfo {
    /** cp编号 */
    delivery_cp_code?: string;
    /** 小件员账号 */
    delivery_cp_user_id?: string;
    /** LP订单号 */
    lp_code: string;
    /** 订单ID */
    order_id: number;
    /** 能力产品 */
    product_code?: string;
    /** 拒收原因（当签收类型是1时此字段为必填项 */
    refuse_reason?: string;
    /** 签收人员 */
    signer?: string;
    /** 签收时间 */
    sign_date?: Date | number | string;
    /** 签收类型（0：签收、1：拒收） */
    sign_type: number;
    /** 任务ID */
    task_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=940&docType=9 抢单通知} */
  interface TaskAskGrasp {
    /** 通知小件员列表 */
    couriers?: string;
    /** 菜鸟小件员id */
    delivery_user_id?: string;
    /** 补贴，单位：元 */
    reward?: string;
    /** 抢单任务列表 */
    tasks: string;
    /** 抢单的任务组编码 菜鸟支持合单抢单，即一个任务组包含几个订单Task，也可以只有一个订单Task。小件员抢单按任务组进行抢单。 */
    task_group_id: string;
    /** 任务组内任务数 */
    task_nums: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=933&docType=9 任务被取消} */
  interface TaskCancel {
    /** 取消时间 */
    cancel_date: Date | number | string;
    /** 取消原因 */
    cancel_reason?: string;
    /** 小件员所属公司代码 */
    delivery_cp_code?: string;
    /** 小件员所属公司员工编号 */
    delivery_cp_user_id?: string;
    /** 小件员的手机号 */
    delivery_mobile_phone?: string;
    /** 取消类型（20：寄件人取消 24：小二取消 25：小件员取消 26：系统取消） */
    end_type?: number;
    /** lpCode */
    lp_code?: string;
    /** 能力产品信息 */
    product_code?: string;
    /** taskId */
    task_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=937&docType=9 结算通知} */
  interface TaskFeeTrans {
    /** 小件员所在公司编号 */
    delivery_cp_code?: string;
    /** 小件员员工编号 */
    delivery_cp_user_id?: string;
    /** 费用 */
    fee: string;
    /** 结算时间 */
    fee_date: Date | number | string;
    /** 1运费 2补贴 */
    fee_type: number;
    /** LP订单号 */
    lp_code?: string;
    /** 运单号 */
    mail_no?: string;
    /** 支付状态 0未支付 1线上支付 2线下现金支付 */
    pay_status?: number;
    /** 预计任务补贴 */
    reward?: string;
    /** 任务ID */
    task_id?: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=932&docType=9 订单被[抢/兜/追/派]后同步给CP} */
  interface TaskGrasp {
    /** 小件员所属公司代码 */
    delivery_cp_code?: string;
    /** 小件员所属公司员工编号 */
    delivery_cp_user_id?: string;
    /** 小件员手机号 */
    delivery_mobile_phone?: string;
    /** 小件员ID */
    delivery_user_id?: string;
    /** 小件员账号类型( NORMAL:普通小件员, BRANCH_GRSAP_MANAGER:网点接单负责人, BRANCH_COMPANY_GRASP_MANAGER:分公司接单负责人, HEAD_COMPANY_GRASP_MANEGER: 总部接单负责人, COMPANY_ACCOUNT:公司帐号 */
    delivery_user_type: string;
    /** 0 抢单 1 追单 2 派单 3 兜底 4 承包 */
    message_type: number;
    /** 能力产品 */
    product_code?: string;
    /** 任务列表 */
    tasks: string;
    /** 任务组编号 */
    task_group: string;
    /** 包含几个订单 */
    task_num: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=939&docType=9 抢单任务组被抢通知} */
  interface TaskGroupDone {
    /** 抢单的任务组编码 菜鸟支持合单抢单，即一个任务组包含几个订单Task，也可以只有一个订单Task。小件员抢单按任务组进行抢单。 */
    task_group_id: string;
    /** 被抢单任务列表 */
    task_id_list: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=938&docType=9 抢单任务组超时通知} */
  interface TaskGroupTimeOut {
    /** 抢单的任务组编码 菜鸟支持合单抢单，即一个任务组包含几个订单Task，也可以只有一个订单Task。小件员抢单按任务组进行抢单。 */
    task_group_id: string;
    /** 任务ID列表 */
    task_id_list: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=959&docType=9 兜底任务CP违约通知} */
  interface TaskGroupViolate {
    /** 任务组编号 */
    task_group_id: string;
    /** 任务组包含的任务编号 */
    task_id_list?: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1035&docType=9 修改上门取件时间} */
  interface TaskModifyGotDate {
    /** 小件员所属公司代码 */
    delivery_cp_code?: string;
    /** 小件员所属公司员工编号 */
    delivery_cp_user_id?: string;
    /** 小件员的手机号 */
    delivery_mobile_phone?: string;
    /** 修改后的上门结束时间 */
    got_date_end: string;
    /** 修改后的上门开始时间 */
    got_date_start: string;
    /** LP Code */
    lp_code?: string;
    /** 修改操作时间戳 */
    modify_date?: string;
    /** 操作人角色 1：消费者 4：小件员 */
    modify_role?: number;
    /** taskId */
    task_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=934&docType=9 用户付款通知} */
  interface TaskPaid {
    /** 小件员所在公司编号 */
    delivery_cp_code: string;
    /** 小件员员工编号 */
    delivery_cp_user_id?: string;
    /** 运费金额 */
    delivery_price?: string;
    /** 加价金额 */
    delivery_service_price?: string;
    /** 菜鸟小件员id */
    delivery_user_id: string;
    /** LP订单号 */
    lp_code?: string;
    /** 订单声明价 */
    order_insured_value?: string;
    /** 订单保费 */
    order_insure_price?: string;
    /** 用户应付金额 */
    order_total_price?: string;
    /** 支付时间 */
    pay_date: Date | number | string;
    /** 支付状态 0未支付 1线上支付 2线下现金支付 */
    pay_status: number;
    /** 能力产品编码 */
    product_code?: string;
    /** 任务ID */
    task_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=980&docType=9 仓配派单订单价格通知} */
  interface TaskPriceInfo {
    /** CP编号 */
    delivery_cp_code?: string;
    /** 订单价格信息 */
    delivery_price_infos?: string;
    /** 任务组编号 */
    task_group_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1177&docType=9 订单改派} */
  interface TaskRedispatch {
    /** CpCode */
    cp_code: string;
    /** 被改派的小件员CP内部账号 */
    from_cp_user_id?: string;
    /** 被改派的小件员包裹侠ID */
    from_delivery_user_id: number;
    /** 改派前小件员账号类型( NORMAL:普通小件员, BRANCH_GRSAP_MANAGER:网点接单负责人, BRANCH_COMPANY_GRASP_MANAGER:分公司接单负责人, HEAD_COMPANY_GRASP_MANEGER: 总部接单负责人, COMPANY_ACCOUNT:公司帐号) */
    from_delivery_user_type?: string;
    /** 被改派的电话号码 */
    from_mobile?: string;
    /** LP号 */
    lp_code: string;
    /** 改派来源:(BIAOJU:裹裹镖局,CP:菜鸟合作伙伴) */
    redispatch_source?: string;
    /** 改派时间 */
    redispatch_time: Date | number | string;
    /** taskId */
    task_id: number;
    /** 接受改派的小件员CP内部账号 */
    to_cp_user_id?: string;
    /** 接受改派的小件员包裹侠ID */
    to_delivery_user_id: number;
    /** 改派后小件员账号类型( NORMAL:普通小件员, BRANCH_GRSAP_MANAGER:网点接单负责人, BRANCH_COMPANY_GRASP_MANAGER:分公司接单负责人, HEAD_COMPANY_GRASP_MANEGER: 总部接单负责人, COMPANY_ACCOUNT:公司帐号) */
    to_delivery_user_type?: string;
    /** 接受改派的电话号码 */
    to_mobile?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=936&docType=9 小件员回传运单号通知} */
  interface TaskReturnMailNo {
    /** 快递员调价 */
    ajust_fee?: string;
    /** 物品计价方式:1重量 2体积 */
    calculate_price_type?: number;
    /** 小件员所在公司编号 */
    delivery_cp_code: string;
    /** 小件员员工编号 */
    delivery_cp_user_id?: string;
    /** 运费金额。首重+续重金额-快递员调价 */
    delivery_price?: string;
    /** 加价金额 */
    delivery_service_price?: string;
    /** 菜鸟小件员id */
    delivery_user_id: string;
    /** 物品毛重 单位:千克 */
    gross_weight?: string;
    /** 物品个数 */
    item_count?: number;
    /** 物品标题 */
    item_title?: string;
    /** LP订单号 */
    lp_code?: string;
    /** 运单号 */
    mail_no: string;
    /** 电子面单类型 */
    mail_no_type?: string;
    /** 订单声明价 */
    order_insured_value?: string;
    /** 订单保费 */
    order_insure_price?: string;
    /** 用户实付金额 */
    order_total_price?: string;
    /** 订单支付状态。若订单已支付则显示具体的“现金支付”或者“在线支付”，若未支付则为空 */
    pay_type?: string;
    /** 收件人详细地址 */
    receiver_address?: string;
    /** 收件人所处区 */
    receiver_area?: string;
    /** 收件人所处城市 */
    receiver_city?: string;
    /** 收件人姓名 */
    receiver_name?: string;
    /** 收件人联系方式 */
    receiver_phone?: string;
    /** 收件人所处省份 */
    receiver_province?: string;
    /** 回传运单号时间 */
    return_mailno_date?: Date | number | string;
    /** 寄件人详细地址 */
    sender_address?: string;
    /** 寄件人所处区 */
    sender_area?: string;
    /** 寄件人所处城市 */
    sender_city?: string;
    /** 寄件人姓名 */
    sender_name?: string;
    /** 寄件人联系方式 */
    sender_phone?: string;
    /** 寄件人所处省份 */
    sender_province?: string;
    /** 任务ID */
    task_id: number;
    /** 电子面单编码 */
    way_bill_code?: string;
    /** 电子面单地址 */
    way_bill_short_address?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=935&docType=9 小件员已上门取件} */
  interface TaskTaken {
    /** 小件员所属公司代码 */
    delivery_cp_code?: string;
    /** 小件员所属公司员工编号 */
    delivery_cp_user_id?: string;
    /** 小件员手机号 */
    delivery_mobile_phone?: string;
    /** 取件码 */
    got_code: string;
    /** 上门取件时间 */
    got_date: Date | number | string;
    /** LP订单号 */
    lp_code?: string;
    /** 能力产品信息 */
    product_code?: string;
    /** taskId */
    task_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=966&docType=9 用户留言通知} */
  interface UserWord {
    /** 运单号 */
    mail_no: string;
    /** 时间戳 */
    time_stamp: Date | number | string;
    /** 用户留言 */
    user_word: string;
  }
}

/** 菜鸟 */
declare namespace Cainiao.Scf {
  /** {@link https://open.taobao.com/tmc.htm?docId=1100&docType=9 菜鸟金融贷款通知databus} */
  interface LoanCreate {
    /** 支用金额 */
    2: string;
    /** 业务的操作场景 */
    "30": string;
    /** 业务创建的来源 */
    "134": string;
    /** 产品接入渠道，请输入申请表格中对应的接入渠道 */
    access_channel: string;
    /** clientIp */
    client_ip?: string;
    /** clientMac */
    client_mac?: string;
    /** umid环境参数 */
    client_pcid_guid: string;
    /** 可贷额度 */
    credit_available_limits: string;
    /** creditLimits，贷款额度 */
    credit_limits: string;
    /** 信贷产品code */
    credit_prod_code: string;
    /** 事件编码 */
    event_code: string;
    /** 放款渠道 */
    loan_channel_type: string;
    /** 产品名称，请输入申请表格中对应的产品名称 */
    product_name: string;
    /** 产品节点（业务场景），请输入申请表格中对应的产品节点 */
    product_node: string;
    /** referer */
    referer: string;
    /** server_ip */
    server_ip: string;
    /** server_name */
    server_name: string;
    /** 会话ID */
    session_id: string;
    /** 应用场景所在系统，请输入申请表格中对应的系统名称 */
    system_name: string;
    /** 消息主题 */
    topic: string;
    /** user_agent */
    user_agent: string;
    /** userId，支付宝用户id */
    user_id: string;
  }
}

/** 菜鸟 */
declare namespace Cainiao.Waybill {
  /** {@link https://open.taobao.com/tmc.htm?docId=2376&docType=9 单据状态跟踪} */
  interface TrackTicketStatus {
    /** 操作时间 */
    op_time: number;
    /** 外部单号 */
    order_id: string;
    /** 拦截状态 */
    status: string;
    /** 状态描述 */
    status_desc: string;
  }
}

/** 菜鸟 */
declare namespace Cainiao.Yima {
  /** {@link https://open.taobao.com/tmc.htm?docId=941&docType=9 短信记录推送} */
  interface SmsRecordPush {
    /** 快递公司工号 */
    cp_user_id: string;
    /** 运单号 */
    mailno: string;
    /** 小件员姓名 */
    name: string;
    /** 得到短信结果的时间 */
    result_time: number;
    /** 短信发送时间 */
    send_time: number;
    /** 短信内容 */
    sms_context: string;
    /** 1，为成功；2，为失败 */
    status: number;
    /** 短信类型 */
    template_type: string;
    /** 网点名称 */
    work_station: string;
  }
}
