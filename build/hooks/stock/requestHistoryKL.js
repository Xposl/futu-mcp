import { Common } from 'futu-api';
import futuClient, { connect, disconnect } from '../utils.js';
import { KLType, Market, MarketMap, getMapData } from '../params.js';
import dayjs from 'dayjs';
export const name = 'request_history_kl';
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
};
export const fetchRequestHistoryKL = async (req) => {
    try {
        await connect();
        const { retMsg, retType, s2c } = await futuClient.websocket.RequestHistoryKL(req);
        await disconnect();
        if (retType == Common.RetType.RetType_Succeed) {
            return s2c;
        }
        else {
            throw new Error('RequestHistoryKL error' + retMsg);
        }
    }
    catch (error) {
        console.error('Error connecting to FutuOpenD:', error);
        throw error;
    }
};
export const mcpCall = async (request) => {
    try {
        const { market, code, startTime, endTime, maxAckKLNum, ktype = 'K_DAY' } = request.params.arguments;
        const req = {
            c2s: {
                rehabType: 1,
                security: {
                    market: getMapData(MarketMap, market),
                    code,
                },
                beginTime: dayjs(startTime).format('yyyy-MM-dd'),
                endTime: dayjs(endTime).format('yyyy-MM-dd'),
                maxAckKLNum: maxAckKLNum || 0,
                klType: getMapData(KLType, ktype),
            }
        };
        const { klList } = await fetchRequestHistoryKL(req);
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
    }
    catch (e) {
        return {
            content: [
                {
                    type: 'text',
                    text: '获取K线数据失败',
                },
            ],
            isError: true,
        };
    }
};
