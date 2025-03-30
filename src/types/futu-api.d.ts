
declare module 'futu-api' {
  
  // 接口返回
  interface Response<T> {
    retType: Common.RetType;
    retMsg: string;
    errCode: number;
    s2c: T;
  }

  declare namespace Common {
    enum RetType {
      // 成功
      RetType_Succeed = 0,
      // 失败
      RetType_Failed = -1,
      // 超时
      RetType_TimeOut = -100,
      RetType_DisConnect = -200,
      // 未知结果
      RetType_Unknown = -400,
      RetType_Invalid = -500
    }
  }
  
  declare namespace Qot_Common {
    enum QotMarket {
      // 未知
      QotMarket_Unknown = 0,
      // 香港市场
      QotMarket_HK_Security = 1,
      // 港期货（已废弃，使用 QotMarket_HK_Security 即可）
      QotMarket_HK_Future = 2,
      // 美股市场
      QotMarket_US_Security = 11,
      // 沪股市场
      QotMarket_CNSH_Security = 21,
      // 深股市场
      QotMarket_CNSZ_Security = 22,
      // 新加坡市场
      QotMarket_SG_Security = 31,
      // 日本市场
      QotMarket_JP_Security = 41,
      // 澳洲市场
      QotMarket_AU_Security = 51,
      // 马来西亚市场
      QotMarket_MY_Security = 61,
      // 加拿大市场
      QotMarket_CA_Security = 71,
      // 外汇市场
      QotMarket_FX_Security = 81,
    }
    
    export type Security = {
      // 股票市场
      market: QotMarket
      // 股票代码
      code: string
    }
    
    export enum KLType {
      // 未知
      KLType_Unknown = 0,
      // 1分钟
      KLType_1Min = 1,
      // 日线
      KLType_Day = 2,
      // 周线
      KLType_Week = 3,
      // 月线
      KLType_Month = 4,
      // 年线
      KLType_Year = 5,
      // 5分钟
      KLType_5Min = 6,
      // 15分钟
      KLType_15Min = 7,
      // 30分钟
      KLType_30Min = 8,
      // 60分钟
      KLType_60Min = 9,
      // 3分钟
      KLType_3Min = 10,
      // 季度线
      KLType_Quarter = 11,
    }
    
    export enum KLFields {
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
    
    
    type KLine = {
      // 时间戳字符串（格式：yyyy-MM-dd HH:mm:ss）
      time: string;
      // 是否是空内容的点,若为 true 则只有时间信息
      isBlank: boolean;
      // 最高价
      highPrice?: number;
      // 开盘价
      openPrice?: number;
      // 最低价
      lowPrice?: number;
      // 收盘价
      closePrice?: number;
      // 昨收价
      lastClosePrice?: number;
      // 成交量
      volume?: number;
      // 成交额
      turnover?: number;
      // 换手率（该字段为百分比字段，展示为小数表示）
      turnoverRate?: number;
      // 市盈率
      pe?: number;
      // 涨跌幅（该字段为百分比字段，默认不展示 %，如 20 实际对应 20%）
      changeRate?: number;
      // 时间戳
      timestamp?: number;
    }
    
    enum RehabType {
      // 不复权
      RehabType_None = 0,
      // 前复权
      RehabType_Forward = 1,
      // 后复权
      RehabType_Backward = 2
    }
    
    enum SubType {
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
  }

  export namespace ApiRequest {
    type RequestHistoryKL = {
      c2s: {
        // Qot_Common.RehabType,复权类型
        rehabType: Qot_Common.RehabType
        // Qot_Common.KLType,K 线时间周期
        klType: Qot_Common.KLType
        // 股票市场以及股票代码
        security: Qot_Common.Security
        // 开始时间字符串（格式：yyyy-MM-dd）
        beginTime: string
        // 结束时间字符串（格式：yyyy-MM-dd）
        endTime: string
        // 最多返回多少根 K 线，如果未指定表示不限制
        maxAckKLNum?: number
        // 指定返回 K 线结构体特定某几项数据，KLFields 枚举值或组合，如果未指定返回全部字段
        needKLFieldsFlag?: Qot_Common.KLFields
        // 分页请求 key
        nextReqKey?: number
        // 是否获取美股盘前盘后数据，当前仅支持1分 k。
        extendedTime?: boolean
      };
    }
  }

  export namespace ApiResponse {
    type RequestHistoryKL = Response<{
      // 证券
      security: Qot_Common.Security
      // 股票名称
      name?: string
      // K 线数据
      klList: Array<Qot_Common.KLine>
      // 分页请求 key。一次请求没有返回所有数据时，下次请求带上这个 key，会接着请求
      nextReqKey?: number
    }>
  }

  // 导出默认类
  export default class ftWebsocket {
    default: any
    
    constructor();

    // 连接方法
    start(host: string, port: number, ssl: boolean, key?: string): void;

    // 登录回调
    onlogin: (ret: boolean, msg: string) => void;

    // 推送回调
    onPush: (cmd: number, data: any) => void;
    
    // 获取连接ID
    getConnID(): number;

    // 关闭连接
    stop(): void;
    
    // 获取历史K线数据
    RequestHistoryKL(req: ApiRequest.RequestHistoryKL): Promise<ApiResponse.RequestHistoryKL>;
    
  }
}
