# Futu Stock Screener

基于富途API的股票筛选MCP服务，使用Model Context Protocol (MCP)来提供股票数据查询功能。

## 项目概述

该项目是一个基于富途API的股票数据查询工具，采用MCP协议封装了富途API的功能，目前实现了获取股票历史K线数据的功能。

### 主要特性

- 支持连接到富途OpenD交易网关
- 提供股票历史K线数据查询
- 支持多种市场：香港(HK)、美国(US)、上海(SH)、深圳(SZ)
- 支持多种K线类型：1分钟、5分钟、15分钟、30分钟、60分钟、日K、周K、月K

## 安装与设置

### 前置要求

- Node.js (推荐v18或更高版本)
- 富途OpenD交易网关 (需要单独安装并运行)
- 富途交易账户

### 安装步骤

1. 克隆仓库
```bash
git clone [repository-url]
cd futu-stock-screener
```

2. 安装依赖
```bash
npm install
```

3. 构建项目
```bash
npm run build
```

### 环境变量配置

项目使用以下环境变量来配置富途API连接：

```
FUTU_HOST=127.0.0.1            # 富途OpenD主机地址
FUTU_PORT=11111                # 富途OpenD端口
FUTU_WEBSOCKET_PORT=33333      # 富途OpenD WebSocket端口
FUTU_WEBSOCKET_KEY=your-key    # 富途WebSocket连接密钥
```

可以通过环境变量或在运行时参数配置这些值。

## 使用方法

### 启动服务

```bash
npm start
```

### 作为MCP服务使用

该项目可以作为MCP服务连接到支持MCP协议的应用中。在MCP配置中添加以下内容：

```json
{
  "mcpServers": {
    "futu-stock": {
      "command": "node",
      "args": ["path-to-project/build/index.js"],
      "env": {
        "FUTU_HOST": "127.0.0.1",
        "FUTU_PORT": "11111",
        "FUTU_WEBSOCKET_PORT": "33333",
        "FUTU_WEBSOCKET_KEY": "your-key"
      }
    }
  }
}
```

## 工具功能

### request_history_kl

获取股票的历史K线数据。

#### 参数

- `market`：股票市场 (必需，枚举值：HK, US, SH, SZ)
- `code`：股票代码 (必需)
- `startTime`：开始时间 (必需，格式：YYYY-MM-DD)
- `endTime`：结束时间 (必需，格式：YYYY-MM-DD)
- `ktype`：K线类型 (可选，默认：K_DAY，枚举值：K_1M, K_5M, K_15M, K_30M, K_60M, K_DAY, K_WEEK, K_MON)
- `maxAckKLNum`：最大返回K线数量 (可选)

#### 示例

```json
{
  "market": "HK",
  "code": "00700",
  "startTime": "2024-03-01",
  "endTime": "2024-03-30",
  "ktype": "K_DAY"
}
```

## 开发

### 项目结构

```
futu-stock-screener/
├── src/
│   ├── hooks/
│   │   ├── enum/
│   │   │   ├── common.ts
│   │   │   └── qot_common.ts
│   │   ├── stock/
│   │   │   └── requestHistoryKL.ts
│   │   ├── enum.ts
│   │   ├── mcp.ts
│   │   ├── params.ts
│   │   └── utils.ts
│   ├── types/
│   │   ├── futu-api.d.ts
│   │   └── typing.d.ts
│   ├── index.test.js
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

### 开发命令

- `npm run build`：构建项目
- `npm start`：启动服务
- `npm run dev`：以监听模式编译TypeScript文件
- `npm test`：运行测试

## 未来计划

- [ ] 添加更多富途API功能
- [ ] 支持实时行情订阅
- [ ] 提供股票筛选功能
- [ ] 优化连接管理机制

## 许可证

ISC
