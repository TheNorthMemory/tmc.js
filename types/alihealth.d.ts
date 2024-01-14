/** 平台消息 */
declare namespace Alihealth.Cep {
  /** {@link https://open.taobao.com/tmc.htm?docId=1972&docType=9 孔雀翎订单消息通知} */
  interface OrderStatusChange {
    /** 孔雀翎O2O订单ID */
    cep_order_id: number;
    /** 魔方平台服务商id */
    cube_id: number;
    /** 物流状态（0-未呼物流，默认值；1-已呼叫物流，2-配送员已接单，3-配送中，4-已完成，5-已取消） */
    delivery_status: number;
    /** 订单状态（1-已支付；2-已接单；3-已完成；4-已取消） */
    order_status: number;
    /** 退款状态（0-未申请退款，默认值；1-已申请退款；2-同意退款；3-拒绝退款；4-已取消退款） */
    refund_status: number;
  }
}

/** 阿里健康 */
declare namespace Alihealth.Hb {
  /** {@link https://open.taobao.com/tmc.htm?docId=1677&docType=9 患者就诊卡推送至医院进行验证} */
  interface PushPatientCardToHis {
    /** 患者就诊卡号 */
    card_number?: string;
    /** 机构id */
    org_id: string;
    /** 患者就诊卡id */
    patient_card_id?: string;
    /** 患者id */
    patient_id: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=1664&docType=9 处方推送给银海} */
  interface PushPrescriptionToYh {
    /** HB系统处方表主键(处方id) */
    prescription_id: string;
  }
}

/** 阿里健康 */
declare namespace Alihealth.Test {
  /** {@link https://open.taobao.com/tmc.htm?docId=1148&docType=9 阿里健康测试消息} */
  interface TmcCreate {
    /** 测试参数1 */
    param0: number;
    /** 测试参数2 */
    param1: string;
    /** 测试参数3 */
    param2: Date | number | string;
    /** 测试参数4 */
    param3: boolean;
    /** 测试参数5 */
    param4: string;
    /** 测试参数6 */
    param5: string;
  }
}

/** 阿里健康&一树-电商中台对接 */
declare namespace Alihealth.Ys {
  /** {@link https://open.taobao.com/tmc.htm?docId=2237&docType=9 订单支付成功推送} */
  interface OrderMemConsume {
    /** 企业号 */
    entid: string;
    /** 订单信息 */
    order: string;
    /** 请求平台1:平台2:商家 */
    platform: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2244&docType=9 一树孔雀翎订单付款通知} */
  interface OrderPushConsume {
    /** 企业号 */
    entid: string;
    /** 订单信息 */
    order: string;
    /** 请求平台1:平台2:商家 */
    platform: number;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2239&docType=9 订单退款成功推送} */
  interface OrderRefund {
    /** 退美?条件 1：全部退； 0：部分退； */
    all_refund_flag: number;
    /** 原单据号 */
    original_order_no: string;
    /** 退款单号 */
    refund_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2238&docType=9 会员变动} */
  interface VipChange {
    /** 详细地址 */
    address?: string;
    /** 生日 */
    birthday?: string;
    /** 会员卡号 */
    card_no: string;
    /** 市 */
    city?: string;
    /** 创建时间 */
    create_time: string;
    /** 门店编码 */
    dept_code: string;
    /** 门店名称 */
    dept_name: string;
    /** 区 */
    district?: string;
    /** 邮箱地址 */
    email?: string;
    /** 中台商家id */
    ent_id: string;
    /** 性别：男1，女2，未知3 */
    gender?: number;
    /** 身份证号 */
    id_no?: string;
    /** 备注 */
    memo?: string;
    /** 姓名 */
    name: string;
    /** 经办人姓名 */
    operator_name: string;
    /** 助记码 */
    op_code?: string;
    /** 手机号 */
    phone_no: string;
    /** 省 */
    province?: string;
    /** 状态：正常1，停用2 */
    status: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2240&docType=9 会员积分变动} */
  interface VipIntegralChange {
    /** 会员卡号 */
    card_no: string;
    /** 创建时间 */
    create_time: string;
    /** 门店编码 */
    dept_code: string;
    /** 门店名称 */
    dept_name: string;
    /** 中台商家id */
    ent_id: string;
    /** 变更积分 */
    integral: string;
    /** 经办人姓名 */
    operator_name: string;
    /** 手机号 */
    phone_no: string;
    /** 积分类型 */
    point_type: number;
    /** 孔雀翎业务单号 */
    source_bill_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2245&docType=9 会员积分同步} */
  interface VipIntegralSync {
    /** 会员卡号 */
    card_no: string;
    /** 创建时间 */
    create_time: Date | number | string;
    /** 门店编码 */
    dept_code: string;
    /** 门店名称 */
    dept_name: string;
    /** 中台商家id */
    ent_id: string;
    /** 变更积分 */
    integral: number;
    /** 操作人编码 */
    operator_code?: string;
    /** 操作人姓名 */
    operator_name?: string;
    /** 手机号，加密传输 */
    phone_no: string;
    /** 积分类型 */
    point_type: number;
    /** 孔雀翎业务单号 */
    source_bill_no: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2243&docType=9 会员信息同步} */
  interface VipSync {
    /** 详细地址，加密传输 */
    address?: string;
    /** 生日 */
    birthday?: Date | number | string;
    /** 会员卡号 */
    card_no: string;
    /** 市 */
    city?: string;
    /** 创建时间 */
    create_time: Date | number | string;
    /** 门店编码 */
    dept_code: string;
    /** 门店名称 */
    dept_name: string;
    /** 区 */
    district?: string;
    /** 邮箱地址，加密传输 */
    email?: string;
    /** 中台商家id */
    ent_id: string;
    /** 性别：男1，女2，未知3 */
    gender?: number;
    /** 身份证号，加密传输 */
    id_no?: string;
    /** 备注 */
    memo?: string;
    /** 姓名，加密传输 */
    name: string;
    /** 操作人编码 */
    operator_code?: string;
    /** 操作人姓名 */
    operator_name?: string;
    /** 助记码 */
    op_code?: string;
    /** 手机号，加密传输 */
    phone_no: string;
    /** 省 */
    province?: string;
    /** 状态：正常1，停用2 */
    status: number;
  }
}
