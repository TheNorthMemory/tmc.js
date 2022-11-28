/** 大资产拍卖Top端拍品消息 */
declare namespace Gov.Auction {
  /** 推送机动车数据到斑马 */
  interface PushVehicleDataToBM {
    /** 时间戳 */
    datestamp: number;
    /** 拍品id */
    item_id: number;
    /** 拍品标题 */
    item_title: string;
    /** 拍品链接 */
    item_url: string;
    /** 车辆vin码 */
    vin?: string;
  }

  /** 斑马-机动车数据推送 */
  interface VehicleDataPush {
    /** 时间戳 */
    datestamp: number;
    /** 标的id */
    item_id: number;
    /** 拍品标题 */
    item_title: string;
    /** 拍品链接 */
    item_url: string;
    /** 机动车vin码 */
    vin?: string;
  }
}
