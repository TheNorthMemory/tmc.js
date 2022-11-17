declare namespace MessageFields {
  type TYPE = 'messageType';
  type CODE = 'statusCode';
  type PHRASE = 'statusPhrase';
  type FLAG = 'flag';
  type TOKEN = 'token';
  type CONTENT = 'content';
  type APP_KEY = 'app_key';
  type GROUP_NAME = 'group_name';
  type TIMESTAMP = 'timestamp';
  type SIGN = 'sign';
  type SDK = 'sdk';
  type INTRANET_IP = 'intranet_ip';
  type ID = 'id';
  type TOPIC = 'topic';
  type MSG = 'msg';
  type DATAID = 'dataid';
  type USERID = 'userid';
  type OUTTIME = 'outtime';
  type PUBLISHER = 'publisher';
}

declare class MessageFields {
  static TYPE: MessageFields.TYPE;
  static CODE: MessageFields.CODE;
  static PHRASE: MessageFields.PHRASE;
  static FLAG: MessageFields.FLAG;
  static TOKEN: MessageFields.TOKEN;
  static CONTENT: MessageFields.CONTENT;
  static APP_KEY: MessageFields.APP_KEY;
  static GROUP_NAME: MessageFields.GROUP_NAME;
  static TIMESTAMP: MessageFields.TIMESTAMP;
  static SIGN: MessageFields.SIGN;
  static SDK: MessageFields.SDK;
  static INTRANET_IP: MessageFields.INTRANET_IP;
  static ID: MessageFields.ID;
  static TOPIC: MessageFields.TOPIC;
  static MSG: MSG;
  static DATAID: DATAID;
  static USERID: USERID;
  static OUTTIME: OUTTIME;
  static PUBLISHER: PUBLISHER;
}
