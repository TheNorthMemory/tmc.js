/** 饿了么 */
declare namespace Eleme.Bankstatement {
  /** {@link https://open.taobao.com/tmc.htm?docId=1673&docType=9 饿了么银行流水对接} */
  interface Get {
    /** 银行、支付宝账号 */
    account_no: string;
    /** 专属账号 */
    account_no_ex?: string;
    /** 余额 */
    balance: string;
    /** 银行编码 */
    bank_code: string;
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
    /** 贷方金额(收入) */
    credit_amount?: string;
    /** 币种 */
    currency_type: string;
    /** 借方金额(支出) */
    debit_amount?: string;
    /** 跨币种转账时的汇率 */
    exchange_rate?: string;
    /** 对方账户名称 */
    other_side_account_name?: string;
    /** 对方账号 */
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
    /** 同步日期 */
    sync_date: number;
    /** 交易日期 */
    trade_date: number;
    /** 交易流水号 */
    trade_no?: string;
    /** 交易类型 */
    trade_type?: string;
    /** 唯一编码 */
    unique_no: string;
  }
}

/** 饿了么 */
declare namespace Eleme.Retail {
  /** {@link https://open.taobao.com/tmc.htm?docId=1783&docType=9 饿了么零售智慧菜场订单状态消息} */
  interface PosOrderMessage {
    /** 业务方订单id */
    pos_order_id: number;
    /** 饿了么RTF处理状态 */
    status: number;
  }
}
