export var RetType;
(function (RetType) {
    // 成功
    RetType[RetType["RetType_Succeed"] = 0] = "RetType_Succeed";
    // 失败
    RetType[RetType["RetType_Failed"] = -1] = "RetType_Failed";
    // 超时
    RetType[RetType["RetType_TimeOut"] = -100] = "RetType_TimeOut";
    RetType[RetType["RetType_DisConnect"] = -200] = "RetType_DisConnect";
    // 未知结果
    RetType[RetType["RetType_Unknown"] = -400] = "RetType_Unknown";
    RetType[RetType["RetType_Invalid"] = -500] = "RetType_Invalid";
})(RetType || (RetType = {}));
