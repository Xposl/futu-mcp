import { handlers } from '../build/hooks/mcp.js'


const main = async () => {
 const res = await handlers.request_history_kl({
    params: {
      arguments: {
        market: 'HK',
        code: '00700',
        startTime: '2025-03-01',
        endTime: '2025-03-30'
      }
    }
  })
  console.log(res)
}

main()