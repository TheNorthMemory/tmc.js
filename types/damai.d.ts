/** 大麦第三方票务供应商接入 */
declare namespace Damai.Distribution {
  /** 场次取消消息推送 */
  interface PerformCancel {
    /** 场次取消的场次id */
    perform_id: number;
    /** 场次取消的项目id */
    project_id: number;
  }

  /** 场次状态变更推送 */
  interface PerformStatus {
    /** 是否可售 */
    can_sale: boolean;
    /** 场次id */
    perform_id: number;
  }

  /** 预售改开票 */
  interface PreSaleToNow {
    /** 场次id */
    perform_id: number;
    /** 预售变为开票 */
    pre_sale_2_now: boolean;
    /** 项目id */
    project_id: number;
  }

  /** 项目状态推送 */
  interface ProjectStatus {
    /** 是否可售 */
    can_sale: boolean;
    /** 项目id */
    project_id: number;
  }

  /** 票品状态变更 */
  interface TicketItemStatus {
    /** 是否可售 */
    can_sale: boolean;
    /** 票品id */
    ticket_item_id: number;
  }
}

/** 大麦票单状态 */
declare namespace Damai.Trade {
  /** 大麦票单状态推送 */
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
