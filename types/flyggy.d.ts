/** 飞猪机票 */
declare namespace Flyggy.Flight {
  /** {@link https://open.taobao.com/tmc.htm?docId=2618&docType=9 飞猪机票国内分销全量报价} */
  interface DomesticDistributionQuotationFull {
    /** 旗舰店报价 */
    flagship?: string;
    /** 消息Id */
    id: string;
    /** 代理商报价 */
    normal_agent?: string;
    /** 自营报价 */
    self_agent?: string;
  }

  /** {@link https://open.taobao.com/tmc.htm?docId=2645&docType=9 飞猪机票国内分销增量报价} */
  interface DomesticDistributionQuotationIncrement {
    /** 旗舰店报价 */
    flagship?: string;
    /** 消息Id */
    id: string;
    /** 代理商报价 */
    normal_agent?: string;
    /** 自营报价 */
    self_agent?: string;
  }
}
