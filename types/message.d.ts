declare interface Message {
    protocolVersion: number;
    messageType: number;
    statusCode?: number;
    statusPhrase?: string;
    flag?: number;
    token?: string;
    content?: MessageContent;
}

declare interface MessageContent {
    __kind?: number;
    id?: number | bigint;
    content?: string;
}

declare namespace Message {
    class Encoder {}
    class Decoder {}
}
