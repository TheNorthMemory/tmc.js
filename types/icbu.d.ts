/** ICBU */
declare namespace Icbu.Alicrm {
  /** {@link https://open.taobao.com/tmc.htm?docId=2023&docType=9 客户信息变更同步小满} */
  interface CustomerModified {
    /** 客户对应的member seq，若是线下导入买家，则为空 */
    buyer_member_seq?: string;
    /** 变更记录 */
    change_log: string;
    /** 客户ID */
    customer_id: string;
    /** 操作人member seq，若系统操作可为空或-1 */
    operator?: number;
    /** 卖家主账号aliId，只能是主账号 */
    seller_ali_id: string;
    /** 同步时间 */
    sync_time: Date | number | string;
    /** 同步类型，Sync_Cust_Add，Sync_Info_Edit，Sync_Contact_Add，Sync_Contact_Update，Sync_Cust_Frozen，Sync_Cust_Transfer */
    sync_type: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1938&docType=9 客户通小记变更} */
  interface NoteModified {
    /** 店铺ID */
    company_id: string;
    /** 客户ID */
    customer_id: string;
    /** 是否删除，默认为添加（添加：n，删除：y） */
    is_deleted: string;
    /** 小记ID */
    note_id: string;
    /** 小记时间 */
    note_time: Date | number | string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2415&docType=9 客户通离线数据变更同步} */
  interface OfflineDataChanged {
    /** 客户对应的member seq，若是线下导入买家，则为空 */
    buyer_member_seq?: string;
    /** 变更记录 */
    change_log: string;
    /** 客户ID */
    customer_id: string;
    /** 操作人member seq，若系统操作可为空或-1 */
    operator?: number;
    /** 卖家主账号aliId，只能是主账号 */
    seller_ali_id: string;
    /** 同步时间 */
    sync_time: Date | number | string;
    /** 同步类型，Sync_Cust_Add，Sync_Info_Edit，Sync_Contact_Add，Sync_Contact_Update，Sync_Cust_Frozen，Sync_Cust_Transfer */
    sync_type: string;
  }
}

/** ICBU */
declare namespace Icbu.Chat {
  /** {@link https://open.taobao.com/tmc.htm?docId=1813&docType=9 ICBU沟通消息推送给小满提醒} */
  interface MessageTipForXiaoMan {
    /** 相关的业务id */
    business_id: string;
    /** 相关的加密业务id */
    business_id_encrypt: string;
    /** 业务类型 */
    business_type: string;
    /** 消息内容 */
    content: string;
    /** 消息来源场景 */
    entrance: string;
    /** 发送方的accountid */
    from_account_id: number;
    /** 发送方加密的accountid */
    from_account_id_encrypt: string;
    /** 发送方email */
    from_email: string;
    /** 消息类型 */
    message_type: number;
    /** 消息时间戳 */
    time_stamp: number;
    /** 接收方的accountId(为小满绑定用户) */
    to_account_id: number;
    /** 消息唯一标识id */
    uuid: string;
  }
}

/** ICBU */
declare namespace Icbu.Crm {
  /** {@link https://open.taobao.com/tmc.htm?docId=1797&docType=9 ICBU CRM小满订单状态变更通知} */
  interface XMOrderChange {
    /** 2支付订单 3取消订单 */
    action: string;
    /** 阿里客户id标识 */
    ali_cgs: string;
    /** 阿里订单号 */
    ali_order_no: string;
    /** 付款时间 */
    ali_paid_time: Date | number | string;
    /** 付款金额 */
    amout: string;
  }
}

/** ICBU */
declare namespace Icbu.Member {
  /** {@link https://open.taobao.com/tmc.htm?docId=1837&docType=9 icbu国际站账号解绑小满账号} */
  interface XmUnBind {
    /** icbu账号id */
    ali_account_id: string;
    /** 消息类型 */
    message_type: number;
    /** 小满账户id */
    okki_user_id: string;
  }
}

/** ICBU */
declare namespace Icbu.Risk {
  /** {@link https://open.taobao.com/tmc.htm?docId=2525&docType=9 天鹿风控事件异步消息结果} */
  interface ZeroersMessage {
    /** 业务回调id */
    callback_id: string;
    /** 审核结果 */
    callback_result?: string;
    /** 风控事件 */
    event_code: string;
    /** 风控唯一id */
    event_data_id?: string;
    /** reject原因 */
    reject_reason?: string;
    /** 风控结果 */
    risk_judge_result: string;
  }
}

/** ICBU-交易 */
declare namespace Icbu.Trade {
  /** {@link https://open.taobao.com/tmc.htm?docId=1754&docType=9 国际站订单变更消息} */
  interface OrderNotify {
    /** 待支付 */
    status: string;
    /** 订单号 */
    trade_id: number;
  }
}
