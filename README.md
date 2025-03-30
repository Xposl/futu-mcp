# Futu Stock Screener MCP Service

基于富途OpenAPI的股票选股MCP服务，支持按市值、PE、成交量等条件筛选港股、美股、A股。

## 前置要求

1. 安装并运行富途OpenD
2. Node.js 16+

## 安装

```bash
git clone [repository-url]
cd futu-stock-screener
npm install
npm run build
```

## 配置

在MCP设置文件中添加以下配置：

```json
{
  "mcpServers": {
    "futu-stock-screener": {
      "command": "node",
      "args": ["/absolute/path/to/futu-stock-screener/build/index.js"],
      "env": {
        "FUTU_HOST": "localhost",  // FutuOpenD主机地址
        "FUTU_PORT": "11111"       // FutuOpenD端口
      }
    }
  }
}
```

## 使用示例

服务提供以下工具：

### get_stock_history

获取股票历史K线数据。

参数:
- market: 股票市场代码（'HK'/'US'/'SH'/'SZ'）
- code: 股票代码
- days: 获取天数，默认30天，最大90天
- ktype: K线类型，可选值：K_1M(1分钟)、K_5M、K_15M、K_30M、K_60M、K_DAY(日线)、K_WEEK(周线)、K_MON(月线)，默认日线

示例:

```json
{
  "market": "HK",
  "code": "00700",
  "days": 30,
  "ktype": "K_DAY"
}
```

结果将返回指定时间段内的K线数据，包含开盘价、收盘价、最高价、最低价、成交量等信息。

### get_stock_info

获取单个股票的详细信息。

参数:
- market: 股票市场代码（'HK'/'US'/'SH'/'SZ'）
- code: 股票代码

示例:

```json
{
  "market": "HK",
  "code": "00700"
}
```

结果将返回该股票的详细信息，包含名称、当前价格、市值、PE、成交量等信息。

### screen_stocks

基于给定条件筛选股票。

参数：
- market: 股票市场代码（'HK'/'US'/'SH'/'SZ'）
- filters: 筛选条件
  - marketCap: 市值范围（单位：亿）
    - min: 最小市值
    - max: 最大市值
  - pe: 市盈率范围
    - min: 最小市盈率
    - max: 最大市盈率
  - volume: 成交量范围
    - min: 最小成交量
    - max: 最大成交量

示例：

```json
{
  "market": "HK",
  "filters": {
    "marketCap": {
      "min": 100,
      "max": 1000
    },
    "pe": {
      "min": 5,
      "max": 20
    },
    "volume": {
      "min": 1000000
    }
  }
}
```

结果将返回符合条件的股票列表，包含代码、名称、市值、PE、成交量等信息。

## 注意事项

1. 使用前需确保FutuOpenD正在运行且配置正确
2. 建议在非交易时段进行大量数据查询
3. 注意API调用频率限制
