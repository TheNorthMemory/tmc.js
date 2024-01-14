/** 阿里通信 */
declare namespace Alicom.Axb {
  /** {@link https://open.taobao.com/tmc.htm?docId=1259&docType=9 绑定事件同步} */
  interface SubsEventSync {
    /** 绑定关系中的黑名单 */
    black_list: string;
    /** 显号策略AXB(A和B互打都显示X号码)，RAXB(A给B打在B端显示真实real的A号码)，AXRB，RAXRB(基本不存在这种情况) */
    call_display: string;
    /** 事件名:BIND(绑定事件), UPDATE_NO_A(修改A号码)，UPDATE_NO_B(修改B号码)，UNBIND(解绑) */
    event: string;
    /** 绑定关系变更事件event的ID，一组绑定关系分配一个subs_id，期间发生多次变更会产生多个event事件,每个event有一个event_id */
    event_id: number;
    /** 事件生成时间 */
    gmt_create: Date | number | string;
    /** 绑定失效时间 */
    gmt_subs_end: string;
    /** 绑定开始时间 */
    gmt_subs_start: Date | number | string;
    /** 是否需要录音 */
    need_record: boolean;
    /** AXB三元组的A号码 */
    phone_no_a: string;
    /** AXB三元组的B号码 */
    phone_no_b: string;
    /** AXB三元组中的X号码 */
    phone_no_x: string;
    /** 阿里侧对应的产品类型,AXB、AXN、AXN_EXTESION_REUSE */
    product_type: string;
    /** SMS_NORMAL_SEND:正常短信下发,SMS_INTERCEPT短信托收,SMS_DROP拦截丢弃 */
    sms_channel: string;
    /** 绑定关系当前状态，1绑定生效状态，0绑定失效状态 */
    status: number;
    /** 阿里侧的绑定关系ID */
    subs_id: string;
    /** 阿里侧分配给供应商的KEY */
    vendor_key: string;
    /** 绑定关系中的白名单。比如AXB中有白名单号码C和D，那么C和D就可以给X打电话 */
    white_list: string;
  }
}

/** 阿里通信 */
declare namespace Alicom.Deduct {
  /** {@link https://open.taobao.com/tmc.htm?docId=1280&docType=9 阿里通信代扣订单支付结果消息} */
  interface OrderPay {
    /** 商户id */
    merchant_id: string;
    /** 商户订单代扣流水 */
    out_order_id: string;
    /** 支付金额，单位分，只有订单支付成功才有该字段 */
    pay_amount?: string;
    /** 代扣支付状态，成功：SUCCESS,失败:FAILED */
    pay_status: string;
    /** 支付时间，格式yyyy-MM-dd HH:mm:ss */
    pay_time?: string;
    /** 淘宝订单号 */
    tb_order_id: string;
  }
}

/** 阿里通信 */
declare namespace Alicom.Flow {
  /** {@link https://open.taobao.com/tmc.htm?docId=1128&docType=9 支付宝流量钱包提取流量} */
  interface AliPayChargeWalletFlow {
    /** 业务的操作场景 */
    "30": string;
    /** 业务创建的来源 */
    "134": string;
    /** apdidToken无线设备标示 */
    apdid_token?: string;
    /** 受益人手机号 */
    beneficiary_phone_number: string;
    /** 消息id */
    data_id: string;
    /** 数据流量，单位为M，例如“2000M” */
    data_traffic: string;
    /** code */
    event_code: string;
    /** 手机流量提现 */
    event_name: string;
    /** server_name */
    server_name: string;
    /** 手机流量提现 */
    topic: string;
    /** 支付宝ID */
    user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1139&docType=9 支付宝流量钱包发红包} */
  interface AliPayChargeWalletRed {
    /** 业务的操作场景 */
    "30": string;
    /** commonMobileData */
    "78": string;
    /** 红包名称 */
    "82": string;
    /** 红包发行数量 */
    "84": string;
    /** 业务流水号 */
    "112": string;
    /** 业务创建的来源 */
    "134": string;
    /** 对方id */
    "150"?: string;
    /** apdidToken无线设备标示 */
    apdid_token: string;
    /** 创建红包的入口 */
    coupon_create_source: string;
    /** 事件编码 */
    event_code: string;
    /** 事件名称 */
    event_name: string;
    /** friend_group_id */
    friend_group_id?: string;
    /** server_name */
    server_name: string;
    /** 红包id */
    springcoupon_id: string;
    /** topic */
    topic: string;
    /** 红包总数据流量 */
    total_data_traffic: string;
    /** 支付宝id */
    user_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1140&docType=9 支付宝流量钱包领取红包} */
  interface AliPayWalletFlowDraw {
    /** 场景 */
    "30": string;
    /** 红包模板类型 */
    "78": string;
    /** 红包名称 */
    "82": string;
    /** 红包发行数量 */
    "84": string;
    /** 来源 */
    "134": string;
    /** 对方账户id */
    "150"?: string;
    /** apdidToken */
    apdid_token: string;
    /** 领用红包的入口 */
    coupon_draw_source: string;
    /** 消息id */
    data_id: string;
    /** 本次领取的手机数据流量 */
    data_traffic: string;
    /** 时间编码 */
    event_code: string;
    /** 个人红包领取 */
    event_name: string;
    /** 群号Id */
    friend_group_id?: string;
    /** server_name */
    server_name: string;
    /** 红包ID */
    springcoupon_id: string;
    /** topic */
    topic: string;
    /** 红包总数据流量 */
    total_data_traffic: string;
    /** 支付宝账户id */
    user_id: string;
  }
}
