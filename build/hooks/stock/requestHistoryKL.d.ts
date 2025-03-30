import { ApiRequest } from 'futu-api';
export declare const name = "request_history_kl";
export declare const toolDefine: {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            market: {
                type: string;
                enum: string[];
                description: string;
            };
            code: {
                type: string;
                description: string;
            };
            days: {
                type: string;
                description: string;
                minimum: number;
                maximum: number;
                default: number;
            };
            startTime: {
                type: string;
                description: string;
            };
            endTime: {
                type: string;
                description: string;
            };
            maxAckKLNum: {
                type: string;
                description: string;
                minimum: number;
            };
            ktype: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
        };
        required: string[];
    };
};
export declare const fetchRequestHistoryKL: (req: ApiRequest.RequestHistoryKL) => Promise<{
    security: import("futu-api").Qot_Common.Security;
    name?: string;
    klList: Array<import("futu-api").Qot_Common.KLine>;
    nextReqKey?: number;
}>;
export declare const mcpCall: (request: McpRequest<{
    market: string;
    code: string;
    startTime?: string;
    endTime?: string;
    maxAckKLNum?: number;
    ktype?: string;
}>) => Promise<{
    content: {
        type: string;
        text: string;
    }[];
    isError?: undefined;
} | {
    content: {
        type: string;
        text: string;
    }[];
    isError: boolean;
}>;
