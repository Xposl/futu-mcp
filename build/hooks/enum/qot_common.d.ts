export declare enum QotMarket {
    QotMarket_Unknown = 0,
    QotMarket_HK_Security = 1,
    QotMarket_HK_Future = 2,
    QotMarket_US_Security = 11,
    QotMarket_CNSH_Security = 21,
    QotMarket_CNSZ_Security = 22,
    QotMarket_SG_Security = 31,
    QotMarket_JP_Security = 41,
    QotMarket_AU_Security = 51,
    QotMarket_MY_Security = 61,
    QotMarket_CA_Security = 71,
    QotMarket_FX_Security = 81
}
export type Security = {
    market: QotMarket;
    code: string;
};
export declare enum KLType {
    KLType_Unknown = 0,
    KLType_1Min = 1,
    KLType_Day = 2,
    KLType_Week = 3,
    KLType_Month = 4,
    KLType_Year = 5,
    KLType_5Min = 6,
    KLType_15Min = 7,
    KLType_30Min = 8,
    KLType_60Min = 9,
    KLType_3Min = 10,
    KLType_Quarter = 11
}
export declare enum KLFields {
    KLFields_None = 0,
    KLFields_High = 1,
    KLFields_Open = 2,
    KLFields_Low = 4,
    KLFields_Close = 8,
    KLFields_LastClose = 16,
    KLFields_Volume = 32,
    KLFields_Turnover = 64,
    KLFields_TurnoverRate = 128,
    KLFields_PE = 256,
    KLFields_ChangeRate = 512
}
export type KLine = {
    time: string;
    isBlank: boolean;
    highPrice?: number;
    openPrice?: number;
    lowPrice?: number;
    closePrice?: number;
    lastClosePrice?: number;
    volume?: number;
    turnover?: number;
    turnoverRate?: number;
    pe?: number;
    changeRate?: number;
    timestamp?: number;
};
export declare enum RehabType {
    RehabType_None = 0,
    RehabType_Forward = 1,
    RehabType_Backward = 2
}
export declare enum SubType {
    SubType_None = 0,
    SubType_Basic = 1,
    SubType_OrderBook = 2,
    SubType_Ticker = 4,
    SubType_RT = 5,
    SubType_KL_Day = 6,
    SubType_KL_5Min = 7,
    SubType_KL_15Min = 8,
    SubType_KL_30Min = 9,
    SubType_KL_60Min = 10,
    SubType_KL_1Min = 11,
    SubType_KL_Week = 12,
    SubType_KL_Month = 13
}
