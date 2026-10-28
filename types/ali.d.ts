/** 阿里金融 */
declare namespace Ali.Fin {
  /** {@link https://open.taobao.com/tmc.htm?docId=2391&docType=9 阿里场景金融大延保理赔结果通知给服务商} */
  interface DybClaimResult {
    /** 理赔通过金额，单位分 */
    claim_fee?: string;
    /** 理赔收单id */
    claim_no: string;
    /** 理赔结果，WAIT_UPDATE/FINISHED */
    claim_status: string;
    /** 退回原因 */
    reason?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2813&docType=9 场景金融大延保产品自建工单履约系统工单状态变化消息} */
  interface DybWorkcardUpdate {
    /** 创单时间 */
    create_time: string;
    /** 产品code */
    product_code: string;
    /** 场金报案单号 */
    report_no: string;
    /** serviceCode */
    service_code: string;
    /** 履约工单状态 */
    status: string;
    /** 工单编号（业务唯一幂等号） */
    workcard_no: string;
  }
}

/** 网上法庭 */
declare namespace Ali.Infodept {
  /** {@link https://open.taobao.com/tmc.htm?docId=867&docType=9 网上法庭数据交换消息} */
  interface CaseFilingInfo {
    /** 附件url列表 */
    attachment_files?: string;
    /** 附件url */
    attachment_url?: string;
    /** 加密后案件id */
    biz_id: string;
    /** messageBody格式 */
    format: string;
    /** 消息体 */
    message_body: string;
    /** 签名 */
    message_body_signature?: string;
    /** 消息唯一的id */
    message_id: string;
    /** 消息路由 */
    message_router: string;
    /** 消息唯一标示符 */
    peer_id: string;
    /** biz_id对应 */
    ref_biz_id?: string;
    /** 消息类型 */
    topic: string;
    /** 版本，消息去向 */
    version?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=833&docType=9 证件保全通知} */
  interface PreserveEvidence {
    /** 案件Id */
    case_id?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=943&docType=9 网上法庭开放平台消息} */
  interface YuncourtMsg {
    /** 业务id */
    biz_id: string;
    /** 消息内容 */
    content: string;
    /** 消息类型 */
    type: string;
  }
}
