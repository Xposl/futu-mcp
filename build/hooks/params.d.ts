import { Qot_Common } from "futu-api";
export declare const Market: string[];
export declare const MarketMap: {
    HK: Qot_Common.QotMarket;
    US: Qot_Common.QotMarket;
    SH: Qot_Common.QotMarket;
    SZ: Qot_Common.QotMarket;
};
export declare const KLType: string[];
export declare const KLTypeMap: {
    K_1M: Qot_Common.KLType;
    K_5M: Qot_Common.KLType;
    K_15M: Qot_Common.KLType;
    K_30M: Qot_Common.KLType;
    K_60M: Qot_Common.KLType;
    K_DAY: Qot_Common.KLType;
    K_WEEK: Qot_Common.KLType;
    K_MON: Qot_Common.KLType;
};
export declare const getMapData: (map: Record<string, any>, key: string) => any;
