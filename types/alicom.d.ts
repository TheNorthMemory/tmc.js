/** 阿里通信 */
declare namespace Alicom.Axb {
  /** 绑定事件同步 */
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
