import { connect, disconnect } from '../utils.js'
import { KLType, KLTypeMap, Market, MarketMap, getMapData } from '../params.js'
import dayjs from 'dayjs'
import { ApiRequest } from "futu-api";


export const name = 'request_history_kl'
export const toolDefine = {
  name,
  description: '获取股票历史K线数据',
  inputSchema: {
    type: 'object',
    properties: {
      market: {
        type: 'string',
        enum: Market,
        description: '股票市场',
      },
      code: {
        type: 'string',
        description: '股票代码',
      },
      days: {
        type: 'number',
        description: '获取天数，默认30天',
        minimum: 1,
        maximum: 90,
        default: 30
      },
      startTime: {
        type: 'string',
        description: '开始时间',
      },
      endTime: {
        type: 'string',
        description: '结束时间',
      },
      maxAckKLNum: {
        type: 'number',
        description: '最大返回K线数，未指定表示不限制',
        minimum: 1
      },
      ktype: {
        type: 'string',
        enum: KLType,
        description: 'K线类型',
        default: 'K_DAY'
      }
    },
    required: ['market', 'code', 'startTime', 'endTime'],
  },
}

export const fetchRequestHistoryKL = async (req: ApiRequest.RequestHistoryKL) => {
  try {
    await connect()
    // const { retMsg, retType,s2c } = await futuClient.websocket.RequestHistoryKL(req)
    // if(retType == Common.RetType.RetType_Succeed){
    //   return s2c
    // } else {
    //   throw new Error('RequestHistoryKL error'+retMsg)
    // }
    return {
      klList: [] as any[]
    }
  } catch (error) {
    console.error('Error connecting to FutuOpenD:', error);
    throw error;
  } finally {
    disconnect()
  }
}

export const mcpCall = async (request:McpRequest<{
  market: string;
  code: string;
  startTime?: string;
  endTime?: string;
  maxAckKLNum?: number;
  ktype?: string;
}>) => {
  try {
    const { market, code, startTime, endTime, maxAckKLNum, ktype = 'K_DAY' } = request.params.arguments
    const req: ApiRequest.RequestHistoryKL = {
      c2s: {
        rehabType: 1,
        security: {
          market: getMapData(MarketMap, market),
          code,
        },
        beginTime:dayjs(startTime).format('YYYY-MM-DD'),
        endTime: dayjs(endTime).format('YYYY-MM-DD'),
        klType: getMapData(KLTypeMap, ktype),
      }
    }
    if(maxAckKLNum != null) {
      req.c2s.maxAckKLNum = Math.max(1, maxAckKLNum)
    }
    const { klList } = await fetchRequestHistoryKL(req)
   
    if (klList && klList.length > 0) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              code,
              market,
              period: `${startTime} 到 ${endTime}`,
              ktype,
              data: klList.map((k) => ({
                time: k.time,
                open: k.openPrice,
                close: k.closePrice,
                high: k.highPrice,
                low: k.lowPrice,
                volume: k.volume,
              })),
            }, null, 2),
          },
        ],
      };
    }
    return {
      content: [
        {
          type: 'text',
          text: '获取K线数据失败: 返回数据格式不正确',
        },
      ],
      isError: true,
    };
  } catch (e:any) {
    return {
      content: [
        {
          type: 'text',
          text: '获取K线数据失败:'+ e.message,
        },
      ],
      isError: true,
    };
  }
}