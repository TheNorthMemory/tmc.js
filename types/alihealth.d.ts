/** 平台消息 */
declare namespace Alihealth.Cep {
  /** 孔雀翎订单消息通知 */
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

/** 阿里健康&一树-电商中台对接 */
declare namespace Alihealth.Ys {
  /** 订单支付成功推送 */
  interface OrderMemConsume {
    /** 企业号 */
    entid: string;
    /** 订单信息 */
    order: string;
    /** 请求平台1:平台2:商家 */
    platform: number;
  }

  /** 一树孔雀翎订单付款通知 */
  interface OrderPushConsume {
    /** 企业号 */
    entid: string;
    /** 订单信息 */
    order: string;
    /** 请求平台1:平台2:商家 */
    platform: number;
  }
}
