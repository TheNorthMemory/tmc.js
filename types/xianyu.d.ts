/** 闲鱼 */
declare namespace Xianyu.Aftersale {
  /** {@link https://open.taobao.com/tmc.htm?docId=2286&docType=9 闲鱼售后订单状态变更消息} */
  interface OrderSyn {
    /** 售后服务订单号 */
    after_sale_order_id: string;
    /** 推进到当前状态的事件 */
    event: string;
    /** 正向交易买家单订单号 */
    main_order_id: string;
    /** 当前主状态 */
    main_status: string;
    /** 当前子状态 */
    sub_status: string;
    /** 帮卖卖家单单号 */
    tender_order_id?: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Appraise {
  /** {@link https://open.taobao.com/tmc.htm?docId=1781&docType=9 验货担保订单状态同步回收商} */
  interface OrderSyn {
    /** 触发服务商服务的消息具体动作 */
    action?: string;
    /** 交易订单号 */
    biz_order_id: string;
    /** 订单状态。(主状态,子状态,状态说明)示例如下： ("1", "1", "买家拍下未付款") ("2", "1", "买家拍下已付款") ("3", "1", "卖家已发货")等。详情见对接文档 */
    order_status: string;
    /** 订单子状态，说明见order_status */
    order_sub_status: string;
  }
}

/** 闲鱼回收商消息 */
declare namespace Xianyu.Car {
  /** {@link https://open.taobao.com/tmc.htm?docId=2296&docType=9 闲鱼二手车寄卖订单状态同步} */
  interface OrderStatusSync {
    /** 订单id */
    biz_order_id: string;
    /** 订单状态 */
    order_status: string;
    /** 订单子状态 */
    order_sub_status?: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Ctox {
  /** {@link https://open.taobao.com/tmc.htm?docId=2564&docType=9 闲鱼C2X抽佣退佣消息同步} */
  interface CommissionStateSyn {
    /** 订单id */
    biz_order_id: string;
    /** 11-抽佣帮卖卖家服务费;12-抽佣:帮卖买家服务费;21-退佣:帮卖售后 */
    biz_type: string;
    /** 佣金，单位分 */
    fee_commission: string;
    /** 1-正向抽佣；2-逆向退佣 */
    fee_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2535&docType=9 c2x代扣协议变更通知} */
  interface PayDkChange {
    /** 主订单（保卖订单等） */
    biz_order_id: string;
    /** 代扣金额，分 */
    confirm_fee: string;
    /** 代扣流水号 */
    dk_number: string;
    /** 代扣订单 */
    dk_order_id: string;
    /** 代扣时间 */
    dk_time: string;
    /** 代扣状态 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2536&docType=9 c2x业务订单评价消息同步} */
  interface RateStateSyn {
    /** 服务商appkey */
    app_key: string;
    /** 被评价订单号 */
    biz_order_id: string;
    /** 评价类目 */
    biz_type: string;
    /** 评价分数 */
    score: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Environment {
  /** {@link https://open.taobao.com/tmc.htm?docId=1427&docType=9 闲鱼双11公益游戏任务事件同步} */
  interface EventSyn {
    /** 周期 */
    ds: string;
    /** 3：日常行为 4：闲鱼互动行为 5：发布闲置、发布免费送、发布信用回收、购买商品 */
    task_biz_code: string;
    /** 用户ID */
    user_id: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Fishmarket {
  /** {@link https://open.taobao.com/tmc.htm?docId=2574&docType=9 鱼市商品状态变更} */
  interface ItemSyn {
    /** 卖家单id */
    biz_order_id: string;
    /** true-表示有出价 */
    is_bid: string;
    /** 商品ID */
    item_id: string;
    /** 场次 */
    schedule: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Isv {
  /** {@link https://open.taobao.com/tmc.htm?docId=2219&docType=9 闲鱼服务商订单提醒} */
  interface OrderRemind {
    /** 订单号 */
    biz_order_id: string;
    /** 提醒消息类型，见对接文档 */
    remind_type: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Marketrecycle {
  /** {@link https://open.taobao.com/tmc.htm?docId=2534&docType=9 保卖订单变更通知} */
  interface OrderStateSyn {
    /** 订单号 */
    biz_order_id: string;
    /** 环境参数 */
    env: string;
    /** 状态变更 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2533&docType=9 闲鱼保卖计划变更消息} */
  interface PlanStateSyn {
    /** 地址信息 */
    address?: string;
    /** 地址详细信息 */
    address_detail?: string;
    /** 纬度 */
    lat?: string;
    /** 经度 */
    lng?: string;
    /** 计划主状态 */
    main_status: string;
    /** 计划id */
    plan_id: string;
    /** 估价id */
    quote_id: string;
    /** 估价版本 */
    quote_version: string;
    /** 上门时间 */
    ship_time?: string;
    /** 计划子状态 */
    sub_status: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Recycle {
  /** {@link https://open.taobao.com/tmc.htm?docId=1209&docType=9 订单状态同步给回收商} */
  interface OrderStatusSync {
    /** 预估金额,单位分 */
    apprize_amount: number;
    /** 估价id */
    apprize_id: string;
    /** 回收商appkey */
    app_key: string;
    /** 区 */
    area?: string;
    /** 交易订单号 */
    biz_order_id: string;
    /** 已做安全处理,统一给0 */
    buyer_id: number;
    /** 回收商淘宝账号 */
    buyer_nick: string;
    /** idle（历史订单可能没有channel字段,闲鱼）、tmall（天猫）、alipay（支付宝）、taobao（淘宝渠道） */
    channel?: string;
    /** 渠道内的业务数据json格式 比如 ship=1 服装类的不需要发货,weight=5-15 代表服装5-15kg, userLevel=vip 代表免议价用户,sellerRealPhone 淘宝账号绑定的手机号 */
    channel_data?: string;
    /** 城市信息 */
    city?: string;
    /** 卖家关闭订单原因 */
    close_reason?: string;
    /** 卡券费用,单位分 */
    coupon_fee?: string;
    /** 未来的权益id */
    coupon_id?: string;
    /** 卡券规则 actType: 1（按百分比加价）、2（固定加价） 3(阶梯价) couponFee:下单时候按预估价产生的加价券费用单位分 couponId: 目前只是一个活动标示 desc:卡券的使用规则描述 idleBizCode:闲鱼侧的场景区分,可以无视 8（3c） 9(大件) 10（奢侈） low:满足使用加价券的条件金额单位分 up:阶梯价时的价格上限金额单位分 range:阶梯价列表 percent:加价比例只在actType=1时出现,注意这个百分比计算出来的金额可能会有分.我们统一抹掉角、分精度 比如：((125*0.05d)*100)/100=6 beg:活动开始时间 end:活动结束时间 addFee：固定的加价金额,单位分（actType=2时出现） */
    coupon_rule?: string;
    /** 是否信用预付订单 */
    credit_pay: boolean;
    /** 信用预付金额,单位分 */
    credit_pay_amount: number;
    /** 代扣类型：xydk：闲鱼代扣，shdk:商家代扣(默认) */
    dk_type?: string;
    /** 订单创建时间 */
    gmt_create: string;
    /** 1：现金支付 2：天猫红包支付 */
    idle_pay_type: string;
    /** 1:订单创建 2:已上门取件 3:已质检 4:卖家确认交易完成 5:回收商确认交易完成 6:卖家订单已评价 7:回收商订单已评价 100:卖家申请退回 101:货物已退回 102:卖家关闭订单 103:回收商关闭订单 */
    order_status: number;
    /** 省份 */
    province?: string;
    /** 卖家评价内容 */
    rate_content?: string;
    /** 1 好评,0 默认中评 */
    rate_grade?: string;
    /** 卖家申请退回原因 */
    refund_reason?: string;
    /** 卖家收货地址 */
    seller_address: string;
    /** 卖家支付宝账号id */
    seller_alipay_user_id: string;
    /** 已做安全处理,统一给0 */
    seller_id: number;
    /** 卖家淘宝账号 */
    seller_nick: string;
    /** 卖家手机号码 */
    seller_phone: string;
    /** 用户真实姓名 */
    seller_real_name: string;
    /** 上门取件时间 */
    ship_time: string;
    /** 1:顺丰 2:大件上门 */
    ship_type: string;
    /** spuId */
    spu_id?: string;
    /** 支付宝代扣成功 */
    zfb_dk: boolean;
    /** 支付代扣的合同编号 */
    zfb_dk_code?: string;
    /** 600以下为Z5，600-649为Z4，650-699为Z3，700-749为Z2，750及以上为Z1 */
    zm_level?: string;
    /** 用户芝麻分 */
    zm_score?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1206&docType=9 闲鱼回收SPU变更消息} */
  interface SpuModifySync {
    /** 操作类型，0新增，1删除，2修改 */
    action_type: string;
    /** 四级类目id */
    cat_id: string;
    /** 四级类目名称 */
    cat_name: string;
    /** spu属性值对名称 */
    property_values: string;
    /** spu属性值对id */
    property_value_ids: string;
    /** spu唯一id */
    spu_id: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Register {
  /** {@link https://open.taobao.com/tmc.htm?docId=2476&docType=9 闲鱼SPU挂载上下线消息} */
  interface StatusChange {
    /** 业务英文编码，如HS-回收，BM-帮卖 */
    pd_code: string;
    /** 场景，如3C、3C_TENDER、BULKS */
    scene_type: string;
    /** spuId */
    spu_id: string;
    /** 状态英文编码，OFFLINE-下线，ONLINE-上线 */
    status: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Template {
  /** {@link https://open.taobao.com/tmc.htm?docId=2250&docType=9 闲鱼问卷变更} */
  interface QuesChange {
    /** 投放业务 */
    biz_type: string;
    /** 目前在线版本 */
    online_version: string;
    /** 新版本号 */
    pre_version: string;
    /** 问卷内容 */
    questionnaire: string;
    /** spu id */
    spu_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2251&docType=9 闲鱼问卷状态变更消息} */
  interface StatusChange {
    /** 投放业务 */
    biz_type: string;
    /** 被上线、下线的版本号 */
    online_version: string;
    /** spu id */
    spu_id: string;
    /** 变更类型，online上线，offline下线 */
    type: string;
  }
}

/** 闲鱼 */
declare namespace Xianyu.Tender {
  /** {@link https://open.taobao.com/tmc.htm?docId=2054&docType=9 省心卖-暗拍项目订单消息} */
  interface OrderSyn {
    /** 订单ID */
    biz_order_id: string;
    /** 订单状态机主状态 */
    order_status: string;
    /** 订单状态机子状态 */
    order_sub_status: string;
  }
}
