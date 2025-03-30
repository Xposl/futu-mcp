import { Qot_Common } from "futu-api"

export const Market = ['HK', 'US', 'SH', 'SZ']
export const MarketMap = {
  HK: Qot_Common.QotMarket.QotMarket_HK_Security,
  US: Qot_Common.QotMarket.QotMarket_US_Security,
  SH: Qot_Common.QotMarket.QotMarket_CNSH_Security,
  SZ: Qot_Common.QotMarket.QotMarket_CNSZ_Security,
}

export const KLType = ['K_1M', 'K_5M', 'K_15M', 'K_30M', 'K_60M', 'K_DAY', 'K_WEEK', 'K_MON']
export const KLTypeMap = {
  K_1M: Qot_Common.KLType.KLType_1Min,
  K_5M: Qot_Common.KLType.KLType_5Min,
  K_15M: Qot_Common.KLType.KLType_15Min,
  K_30M: Qot_Common.KLType.KLType_30Min,
  K_60M: Qot_Common.KLType.KLType_60Min,
  K_DAY: Qot_Common.KLType.KLType_Day,
  K_WEEK: Qot_Common.KLType.KLType_Week,
  K_MON: Qot_Common.KLType.KLType_Month,
}

export const getMapData = (map: Record<string, any>, key: string) => {
  const mappedKey = map[key as keyof typeof map]
  if (mappedKey === undefined) {
    throw new Error(`Invalid key: ${key}`)
  }
  return mappedKey
}