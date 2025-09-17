/** 本地生活联盟平台-卡券消息API */
declare namespace Alsc.Coupon {
  /** {@link https://open.taobao.com/tmc.htm?docId=2459&docType=9 本地联盟卡券同步消息} */
  interface CouponSync {
    /** 扩展信息 */
    ext_info?: string;
    /** 商品ID */
    item_id: string;
    /** 活动库存售罄 */
    sub_type?: string;
    /** 商品上架（create-上架；remove-下架；update-更新） */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2460&docType=9 饿了么卡券openapi订单消息} */
  interface OrderVoucherStatus {
    /** 订单号 */
    biz_order_id: string;
    /** 凭证生效时间 */
    effect_time?: string;
    /** 凭证失效时间 */
    expire_time?: string;
    /** 扩展字段 */
    ext_info?: string;
    /** 商品ID */
    item_id?: string;
    /** 消息类型，订单消息ORDER，凭证消息TICKET，凭证退款消息TICKET_REFUND */
    message_type: string;
    /** 订单状态。当前只有PAID一个状态 */
    order_status?: string;
    /** 外部订单号 */
    outer_order_id?: string;
    /** 已退款份数 */
    refund_amount?: string;
    /** 凭证退款类型。售中退BEFORE_USE_REFUND、售后退AFTER_USE_REFUND、过期退EXPIRATION_REFUND */
    refund_type?: string;
    /** 凭证总份数 */
    total_amount?: string;
    /** 已使用份数 */
    used_amount?: string;
    /** 凭证ID */
    voucher_id?: string;
    /** 凭证状态。可用EFFECTIVE、已用USED、失效CANCELED */
    voucher_status?: string;
  }
}

/** 本地生活联盟平台-卡券包采购单消息API */
declare namespace Alsc.Couponpackage {
  /** {@link https://open.taobao.com/tmc.htm?docId=2471&docType=9 本地联盟卡券包采购同步消息} */
  interface PurchaseSync {
    /** 扩展信息 */
    ext_info: string;
    /** 采购单ID */
    purchase_id: string;
    /** 子类型（预留） */
    sub_type: string;
    /** 类型（create-上架；remove-下架；update-更新） */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2472&docType=9 本地联盟卡券包采购凭证同步} */
  interface PurchaseTicketSync {
    /** 扩展字段 */
    ext_info: string;
    /** 采购单ID */
    purchase_id: string;
    /** 子类型（deliver_success-发放成功；deliver_fail-发放失败；refund_success-撤销成功；refund_fail-撤销失败） */
    sub_type: string;
    /** 凭证ID */
    ticket_id: string;
    /** 类型（ticket_deliver-凭证发放；ticket_refund-凭证撤销） */
    type: string;
  }
}

/** 口碑 */
declare namespace Alsc.Daodian {
  /** {@link https://open.taobao.com/tmc.htm?docId=2234&docType=9 本地生活到店多渠道投放海豚活动事件通知} */
  interface HaitunPromoEventNotify {
    /** 触发事件消息的支付宝用户ID */
    alipay_uid: string;
    /** 业务事件编码 */
    event_code: string;
    /** 业务事件ID */
    event_id: string;
    /** 业务事件时间（毫秒） */
    event_time: number;
    /** 业务事件类型 */
    event_type: string;
    /** 可选扩展参数 */
    ext_info?: string;
  }
}

/** 口碑 */
declare namespace Alsc.Kb {
  /** {@link https://open.taobao.com/tmc.htm?docId=2346&docType=9 本地生活口碑店铺审核消息} */
  interface ShopAudit {
    /** 业务流水动作 CREATE_SHOP创建门店,MODIFY_SHOP修改门店 */
    action: string;
    /** 淘测门店id */
    alsc_store_id?: string;
    /** 审核单id */
    apply_id: string;
    /** 详细审核结果描述 建议用该值 */
    audit_desc: string;
    /** 审核单状态 AUDITING审核中,AUDIT_PASS审核通过,AUDIT_REJECT审核拒绝,CANCELLED已撤销 建议用该值 */
    audit_status: string;
    /** 审核时间 */
    audit_time: string;
    /** 店铺是否在线 取F不在线,T在线 */
    is_online: string;
    /** 店铺是否展示 取F不展示,T展示 */
    is_show: string;
    /** 内部消息id */
    message_id: string;
    /** 提交审核单的requestId */
    order_request_id: string;
    /** 审核结果 审核失败时为RISK_AUDIT_FAIL,其它情况为空 */
    result_code: string;
    /** 审核结果描述 比较粗略 不建议 */
    result_desc: string;
    /** 口碑门店ID */
    shop_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2345&docType=9 本地生活口碑店铺变更消息} */
  interface ShopChange {
    /** 业务流水动作 */
    action: string;
    /** 创建时间 */
    create_time: string;
    /** 显示状态 */
    display_status: string;
    /** 内部消息id */
    message_id: string;
    /** 行业商户主体id */
    partner_id: string;
    /** 行业门店id */
    shop_id: string;
    /** 门店状态 */
    status: string;
    /** alsc门店Id */
    store_id: string;
    /** 更新时间 */
    update_time: string;
  }
}

/** 口碑 */
declare namespace Alsc.Kbbaobaotuan {
  /** {@link https://open.taobao.com/tmc.htm?docId=2117&docType=9 口碑爆爆团三方订单&凭证状态消息} */
  interface OrderVoucherStatus {
    /** 订单号 */
    biz_order_id: number;
    /** 凭证生效时间 */
    effect_time: Date | number | string;
    /** 凭证失效时间 */
    expire_time: Date | number | string;
    /** {} */
    ext_info: string;
    /** 商品ID */
    item_id: string;
    /** 商品名称 */
    item_name: string;
    /** 外部订单号 */
    outer_order_id: string;
    /** 核销码 */
    ticket_code: string;
    /** 凭证ID */
    voucher_id: string;
    /** 凭证状态 */
    voucher_status: string;
  }
}

/** 口碑 */
declare namespace Alsc.Kbbbt {
  /** {@link https://open.taobao.com/tmc.htm?docId=2141&docType=9 口碑爆爆团凭证消息流} */
  interface OrderVoucherStatus {
    /** 订单号 */
    biz_order_id: string;
    /** 凭证生效时间 */
    effect_time?: Date | number | string;
    /** 凭证失效时间 */
    expire_time?: Date | number | string;
    /** 扩展字段 */
    ext_info?: string;
    /** 商品ID */
    item_id?: string;
    /** 消息类型，订单消息ORDER，凭证消息TICKET，凭证退款消息TICKET_REFUND */
    message_type: string;
    /** 订单状态。当前只有PAID一个状态 */
    order_status?: string;
    /** 外部订单号 */
    outer_order_id: string;
    /** 已退款份数 */
    refund_amount?: number;
    /** 凭证退款类型。售中退BEFORE_USE_REFUND、售后退AFTER_USE_REFUND、过期退EXPIRATION_REFUND */
    refund_type?: string;
    /** 核销码。使用时需要生成二维码，并提示“使用口碑掌柜核销”，否则用户核销时会被商家拒绝 */
    ticket_code?: string;
    /** 商品名称 */
    title?: string;
    /** 凭证总份数 */
    total_amount?: number;
    /** 已使用份数 */
    used_amount?: number;
    /** 凭证ID */
    voucher_id?: string;
    /** 凭证状态。可用EFFECTIVE、已用USED、失效CANCELED */
    voucher_status?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2173&docType=9 口碑爆爆团商品变更的消息} */
  interface ProductChange {
    /** 扩展信息 */
    ext_info?: string;
    /** 商品ID */
    item_id: string;
    /** 消息类型。STOCK_CHANGE库存变化，SCHEDULE_CHANGE排期变化，价格变化PRICE_CHANGE，ITEM_CHANGE商品信息变化 */
    message_type: string;
    /** 商品名称 */
    title: string;
  }
}

/** 本地生活联盟平台-霸王餐消息推送API */
declare namespace Alsc.Reviewbwc {
  /** {@link https://open.taobao.com/tmc.htm?docId=2486&docType=9 本地联盟饿了么评价有礼门店活动消息} */
  interface ActivityEnrollSync {
    /** 活动ID */
    activity_id: string;
    /** 报名ID */
    enroll_id: string;
    /** 扩展信息 */
    ext_info?: string;
    /** 门店ID */
    shop_id: string;
    /** 子类型（预留） */
    sub_type?: string;
    /** 消息类型 */
    type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2552&docType=9 评价有礼渠道用户身份SID绑定通知} */
  interface SidBindSync {
    /** 推广位 */
    pid: string;
    /** 短码 */
    scene: string;
    /** 用户侧会员ID */
    sid: string;
  }
}

/** 口碑 */
declare namespace Alsc.Risk {
  /** {@link https://open.taobao.com/tmc.htm?docId=1773&docType=9 本地生活处罚中心处罚下发} */
  interface PunishSend {
    /** 内容id */
    biz_id: string;
    /** 备注状态信息 */
    memo: string;
    /** 处罚id */
    punish_event_id: string;
    /** 主体id */
    tgt_id: string;
  }
}

/** 口碑 */
declare namespace Alsc.Salesadaptor {
  /** {@link https://open.taobao.com/tmc.htm?docId=1782&docType=9 饿了么开店状态通知接口} */
  interface ShopAuditingNotify {
    /** 审核通过时间 */
    audit_pass_time?: Date | number | string;
    /** 审批状态（AUDIT_BACK：审核驳回、AUDIT_ING：审核中、AUDIT_PASSED：审核通过） */
    audit_status: string;
    /** 审核时间 */
    audit_time?: Date | number | string;
    /** 全量驳回原因 */
    full_reject_reason?: string;
    /** isvId */
    isv_id: string;
    /** isv门店id */
    isv_shop_id: string;
    /** 审批驳回原因 */
    reject_reason?: string;
  }
}

/** 口碑 */
declare namespace Alsc.Salescrm {
  /** {@link https://open.taobao.com/tmc.htm?docId=1667&docType=9 alsc销售商机变更通知} */
  interface LeadsActionNotify {
    /** 操作类型 */
    action: string;
    /** action操作时间 */
    action_time: Date | number | string;
    /** action对应的扩展信息，json格式 */
    ext_info: string;
    /** 备注信息 */
    memo?: string;
    /** 操作人id */
    operator_id: string;
    /** 操作人名称 */
    operator_name: string;
    /** alsc商机id */
    opportunity_id: string;
    /** 外部请求id，每次请求唯一 */
    req_id: string;
    /** 消息版本号（更新的消息版本号更大），外围要基于此版本号作好乱序控制 */
    version: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1671&docType=9 alsc销售商机变更通知} */
  interface OpportunityActionNotify {
    /** 操作类型 */
    action: string;
    /** action操作时间 */
    action_time: Date | number | string;
    /** action对应的扩展信息，json格式 */
    ext_info: string;
    /** 备注信息 */
    memo?: string;
    /** 操作人id */
    operator_id: string;
    /** 操作人名称 */
    operator_name: string;
    /** alsc商机id */
    opportunity_id: string;
    /** 外部请求id，每次请求唯一 */
    req_id: string;
    /** 消息版本号（更新的消息版本号更大），外围要基于此版本号作好乱序控制 */
    version: string;
  }
}
