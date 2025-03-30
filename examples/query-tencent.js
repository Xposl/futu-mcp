/**
 * 使用更新后的富途MCP服务查询腾讯股票30天走势
 * 
 * 此示例展示如何通过更新后基于官方富途API的MCP服务获取腾讯股票的30天历史走势数据
 */

/**
 * 使用方法：
 * 
 * 1. 确保富途OpenD已启动并登录
 * 
 * 2. 使用以下MCP命令查询腾讯30天历史行情:
 * 
 * ```
 * use_mcp_tool(
 *   server_name: "github.com/xposl/futu-stock-screener",
 *   tool_name: "get_stock_history",
 *   arguments: {
 *     "market": "HK",
 *     "code": "00700",
 *     "days": 30,
 *     "ktype": "K_DAY"
 *   }
 * )
 * ```
 * 
 * 返回数据示例:
 * 
 * ```json
 * {
 *   "code": "00700",
 *   "market": "HK",
 *   "period": "30天",
 *   "ktype": "K_DAY",
 *   "data": [
 *     {
 *       "time": "2025-02-28T08:00:00.000Z",
 *       "open": 354.0,
 *       "close": 359.2,
 *       "high": 362.4,
 *       "low": 352.6,
 *       "volume": 12345678
 *     },
 *     {
 *       "time": "2025-03-01T08:00:00.000Z",
 *       "open": 360.0,
 *       "close": 365.4,
 *       "high": 368.0,
 *       "low": 359.2,
 *       "volume": 13245678
 *     },
 *     // ...更多日期的数据
 *   ]
 * }
 * ```
 * 
 * 3. 可视化数据（示例代码）
 * 
 * 下面是一个简单的HTML代码示例，用于将获取到的K线数据可视化:
 * 
 * ```html
 * <!DOCTYPE html>
 * <html>
 * <head>
 *   <title>腾讯股票30天走势图</title>
 *   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 * </head>
 * <body>
 *   <h1>腾讯控股 (00700.HK) 30天走势图</h1>
 *   <div style="width: 800px; height: 400px;">
 *     <canvas id="stockChart"></canvas>
 *   </div>
 *   <script>
 *     // 这里插入API返回的数据
 *     const stockData = {
 *       // 从API返回的数据替换这里
 *     };
 *     
 *     const ctx = document.getElementById('stockChart').getContext('2d');
 *     new Chart(ctx, {
 *       type: 'line',
 *       data: {
 *         labels: stockData.data.map(d => new Date(d.time).toLocaleDateString()),
 *         datasets: [
 *           {
 *             label: '收盘价',
 *             data: stockData.data.map(d => d.close),
 *             borderColor: 'rgba(0, 123, 255, 1)',
 *             backgroundColor: 'rgba(0, 123, 255, 0.2)',
 *             borderWidth: 2,
 *             fill: false
 *           },
 *           {
 *             label: '最高价',
 *             data: stockData.data.map(d => d.high),
 *             borderColor: 'rgba(40, 167, 69, 1)',
 *             backgroundColor: 'rgba(40, 167, 69, 0.2)',
 *             borderWidth: 1,
 *             borderDash: [5, 5],
 *             fill: false
 *           },
 *           {
 *             label: '最低价',
 *             data: stockData.data.map(d => d.low),
 *             borderColor: 'rgba(220, 53, 69, 1)',
 *             backgroundColor: 'rgba(220, 53, 69, 0.2)',
 *             borderWidth: 1,
 *             borderDash: [5, 5],
 *             fill: false
 *           }
 *         ]
 *       },
 *       options: {
 *         responsive: true,
 *         maintainAspectRatio: false,
 *         scales: {
 *           y: {
 *             beginAtZero: false
 *           }
 *         }
 *       }
 *     });
 *   </script>
 * </body>
 * </html>
 * ```
 * 
 * 使用以下命令创建HTML文件并打开:
 * 
 * ```
 * write_to_file(
 *   path: "tencent-chart.html",
 *   content: `以上HTML代码`
 * )
 * 
 * execute_command(
 *   command: "open tencent-chart.html",
 *   requires_approval: false
 * )
 * ```
 */
