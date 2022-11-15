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

namespace Message {
    export class Encoder {}
    export class Decoder {}
}
