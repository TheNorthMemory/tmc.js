/** 大麦第三方票务供应商接入 */
declare namespace Damai.Distribution {
  /** {@link https://open.taobao.com/tmc.htm?docId=2541&docType=9 履约补选座位成功通知三方} */
  interface MatchSeat {
    /** 主订单号 */
    main_order_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1980&docType=9 场次取消消息推送} */
  interface PerformCancel {
    /** 场次取消的场次id */
    perform_id: number;
    /** 场次取消的项目id */
    project_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1627&docType=9 场次状态变更推送} */
  interface PerformStatus {
    /** 是否可售 */
    can_sale: boolean;
    /** 场次id */
    perform_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1629&docType=9 预售改开票} */
  interface PreSaleToNow {
    /** 场次id */
    perform_id: number;
    /** 预售变为开票 */
    pre_sale_2_now: boolean;
    /** 项目id */
    project_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1626&docType=9 项目状态推送} */
  interface ProjectStatus {
    /** 是否可售 */
    can_sale: boolean;
    /** 项目id */
    project_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2334&docType=9 退票通知} */
  interface RefundOrder {
    /** 渠道id */
    channel_id: string;
    /** 大麦订单号 */
    external_order_no: string;
    /** 场次id */
    perform_id: number;
    /** 项目id */
    project_id: number;
    /** 部分退true，整单退false */
    refund_part: boolean;
    /** 票单列表 */
    voucher_ids: number[];
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2513&docType=9 项目退款规则} */
  interface RefundRule {
    /** 项目id */
    project_id: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2540&docType=9 履约发快递成功通知三方} */
  interface SendExpress {
    /** 物流类型，1-顺丰，2-EMS */
    delivery_company_id: number;
    /** 主订单号 */
    main_order_id: number;
    /** 物流单号 */
    waybill_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1628&docType=9 票品状态变更} */
  interface TicketItemStatus {
    /** 是否可售 */
    can_sale: boolean;
    /** 票品id */
    ticket_item_id: number;
  }
}

/** 大麦 */
declare namespace Damai.Mev {
  /** {@link https://open.taobao.com/tmc.htm?docId=1303&docType=9 maitix与datasync数据同步} */
  interface DatasyncTalkMaitix {
    /** 请求数据 */
    data?: string;
    /** 场次ID */
    perform_id: number;
    /** 发送时间毫秒 */
    send_time: number;
    /** 系统ID */
    system_id: number;
    /** 请求类型 */
    type: number;
    /** 唯一ID */
    uuid: string;
  }
}

/** 大麦 */
declare namespace Damai.Mz {
  /** {@link https://open.taobao.com/tmc.htm?docId=1737&docType=9 场次状态通知接口} */
  interface EventStateChange {
    /** 场次 Id 列表 */
    event_id_list: string[];
    /** 附加 Id 列表（票档 Id 列表） */
    extra_id_list?: string[];
    /** 通知类型，1:演出;2:票档; */
    notify_type: number;
    /** 状态，0:关;1:开 */
    state: number;
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1208&docType=9 大麦新麦座消息} */
  interface ForwardMessage {
    /** 消息业务ID */
    message_id: string;
    /** metaq消息的bornTime */
    metaq_born_time: number;
    /** 原始报文信息 */
    metaq_message: string;
    /** metaq tag */
    metaq_tag: string;
    /** metaq topic */
    metaq_topic: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2242&docType=9 订单状态变动通知} */
  interface OrderChangeState {
    /** 麦座订单号 */
    mz_order_id: string;
    /** 麦座会员id */
    mz_user_id: string;
    /** 订单状态 1 订单未完成 2 订单已完成 3订单已关闭 */
    order_state: number;
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2539&docType=9 麦座退单审核通过通知} */
  interface OrderRefund {
    /** 会员id */
    mz_user_id: string;
    /** 正式单id */
    order_id: string;
    /** 退单id */
    refund_order_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2241&docType=9 订单状态通知} */
  interface OrderStateChange {
    /** 麦座订单号 */
    mz_order_id: string;
    /** 订单状态（1未完成 2已完成 3已关闭） */
    order_state: string;
    /** 消息时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1787&docType=9 大麦麦座座位状态变化消息} */
  interface SeatStateChange {
    /** 座位状态列表JSON */
    seat_state_list: string;
    /** 消息时间戳； */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1611&docType=9 大麦麦座票状态变化消息} */
  interface TicketStateChange {
    /** 1123132 */
    customer_id?: number;
    /** 123123213213 */
    order_id?: number;
    /** 通知状态；3=已退票 4=已验票 5=已作废（重打完成）6=已换票；注意：票状态=5时，说明老票作废，已生成新票，需重新调用获取票列表接口（入参订单号）获取所有票信息。 */
    state: number;
    /** 单票票单codes */
    ticket_code_no_list: string[];
    /** 时间戳 */
    timestamp: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2538&docType=9 麦座会员注册成功通知} */
  interface UserRegister {
    /** 麦座会员id */
    mz_user_id: string;
    /** 时间戳 */
    timestamp: number;
  }
}

/** 大麦票单状态 */
declare namespace Damai.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1350&docType=9 大麦票单状态推送} */
  interface TicketStatusPush {
    /** 订单号 */
    order_id: number;
    /** 票单状态：1:已出票；2：已验票；3：已退票 退票状态：100:审核通过；101:驳回（拒绝） */
    status: number;
    /** 1表示票单状态，2表示退票状态 */
    status_type: number;
    /** 子订单ID */
    sub_order_id?: number;
  }
}
