export var QotMarket;
(function (QotMarket) {
    // 未知
    QotMarket[QotMarket["QotMarket_Unknown"] = 0] = "QotMarket_Unknown";
    // 香港市场
    QotMarket[QotMarket["QotMarket_HK_Security"] = 1] = "QotMarket_HK_Security";
    // 港期货（已废弃，使用 QotMarket_HK_Security 即可）
    QotMarket[QotMarket["QotMarket_HK_Future"] = 2] = "QotMarket_HK_Future";
    // 美股市场
    QotMarket[QotMarket["QotMarket_US_Security"] = 11] = "QotMarket_US_Security";
    // 沪股市场
    QotMarket[QotMarket["QotMarket_CNSH_Security"] = 21] = "QotMarket_CNSH_Security";
    // 深股市场
    QotMarket[QotMarket["QotMarket_CNSZ_Security"] = 22] = "QotMarket_CNSZ_Security";
    // 新加坡市场
    QotMarket[QotMarket["QotMarket_SG_Security"] = 31] = "QotMarket_SG_Security";
    // 日本市场
    QotMarket[QotMarket["QotMarket_JP_Security"] = 41] = "QotMarket_JP_Security";
    // 澳洲市场
    QotMarket[QotMarket["QotMarket_AU_Security"] = 51] = "QotMarket_AU_Security";
    // 马来西亚市场
    QotMarket[QotMarket["QotMarket_MY_Security"] = 61] = "QotMarket_MY_Security";
    // 加拿大市场
    QotMarket[QotMarket["QotMarket_CA_Security"] = 71] = "QotMarket_CA_Security";
    // 外汇市场
    QotMarket[QotMarket["QotMarket_FX_Security"] = 81] = "QotMarket_FX_Security";
})(QotMarket || (QotMarket = {}));
export var KLType;
(function (KLType) {
    // 未知
    KLType[KLType["KLType_Unknown"] = 0] = "KLType_Unknown";
    // 1分钟
    KLType[KLType["KLType_1Min"] = 1] = "KLType_1Min";
    // 日线
    KLType[KLType["KLType_Day"] = 2] = "KLType_Day";
    // 周线
    KLType[KLType["KLType_Week"] = 3] = "KLType_Week";
    // 月线
    KLType[KLType["KLType_Month"] = 4] = "KLType_Month";
    // 年线
    KLType[KLType["KLType_Year"] = 5] = "KLType_Year";
    // 5分钟
    KLType[KLType["KLType_5Min"] = 6] = "KLType_5Min";
    // 15分钟
    KLType[KLType["KLType_15Min"] = 7] = "KLType_15Min";
    // 30分钟
    KLType[KLType["KLType_30Min"] = 8] = "KLType_30Min";
    // 60分钟
    KLType[KLType["KLType_60Min"] = 9] = "KLType_60Min";
    // 3分钟
    KLType[KLType["KLType_3Min"] = 10] = "KLType_3Min";
    // 季度线
    KLType[KLType["KLType_Quarter"] = 11] = "KLType_Quarter";
})(KLType || (KLType = {}));
export var KLFields;
(function (KLFields) {
    KLFields[KLFields["KLFields_None"] = 0] = "KLFields_None";
    KLFields[KLFields["KLFields_High"] = 1] = "KLFields_High";
    KLFields[KLFields["KLFields_Open"] = 2] = "KLFields_Open";
    KLFields[KLFields["KLFields_Low"] = 4] = "KLFields_Low";
    KLFields[KLFields["KLFields_Close"] = 8] = "KLFields_Close";
    KLFields[KLFields["KLFields_LastClose"] = 16] = "KLFields_LastClose";
    KLFields[KLFields["KLFields_Volume"] = 32] = "KLFields_Volume";
    KLFields[KLFields["KLFields_Turnover"] = 64] = "KLFields_Turnover";
    KLFields[KLFields["KLFields_TurnoverRate"] = 128] = "KLFields_TurnoverRate";
    KLFields[KLFields["KLFields_PE"] = 256] = "KLFields_PE";
    KLFields[KLFields["KLFields_ChangeRate"] = 512] = "KLFields_ChangeRate";
})(KLFields || (KLFields = {}));
export var RehabType;
(function (RehabType) {
    // 不复权
    RehabType[RehabType["RehabType_None"] = 0] = "RehabType_None";
    // 前复权
    RehabType[RehabType["RehabType_Forward"] = 1] = "RehabType_Forward";
    // 后复权
    RehabType[RehabType["RehabType_Backward"] = 2] = "RehabType_Backward";
})(RehabType || (RehabType = {}));
export var SubType;
(function (SubType) {
    SubType[SubType["SubType_None"] = 0] = "SubType_None";
    SubType[SubType["SubType_Basic"] = 1] = "SubType_Basic";
    SubType[SubType["SubType_OrderBook"] = 2] = "SubType_OrderBook";
    SubType[SubType["SubType_Ticker"] = 4] = "SubType_Ticker";
    SubType[SubType["SubType_RT"] = 5] = "SubType_RT";
    SubType[SubType["SubType_KL_Day"] = 6] = "SubType_KL_Day";
    SubType[SubType["SubType_KL_5Min"] = 7] = "SubType_KL_5Min";
    SubType[SubType["SubType_KL_15Min"] = 8] = "SubType_KL_15Min";
    SubType[SubType["SubType_KL_30Min"] = 9] = "SubType_KL_30Min";
    SubType[SubType["SubType_KL_60Min"] = 10] = "SubType_KL_60Min";
    SubType[SubType["SubType_KL_1Min"] = 11] = "SubType_KL_1Min";
    SubType[SubType["SubType_KL_Week"] = 12] = "SubType_KL_Week";
    SubType[SubType["SubType_KL_Month"] = 13] = "SubType_KL_Month";
})(SubType || (SubType = {}));
