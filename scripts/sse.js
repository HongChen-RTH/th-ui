// server.js
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/messages', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.flushHeaders()

  // 假设有个消息队列，用于存放待发送的消息
  const messageQueue = [
    {
      resourceLLValue: '10G',
      cancelMode: '次月失效',
      offeringName: 'start',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'text',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '15G',
      cancelMode: '次月失效',
      offeringName: '666666666',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'text',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '20G',
      cancelMode: '次月失效',
      offeringName: '777777',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'text',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '15G',
      cancelMode: '次月失效',
      offeringName: 'enter',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'text',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '20G',
      cancelMode: '次月失效',
      offeringName: 'start',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'REQUIREMENT',
      region: '全省',
      monthlyFee: '15元'
    },

    {
      resourceLLValue: '30G',
      cancelMode: '次月失效',
      offeringName: '888888',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'REQUIREMENT',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '30G',
      cancelMode: '次月失效',
      offeringName: 'enter',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'REQUIREMENT',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '20G',
      cancelMode: '次月失效',
      offeringName: 'start',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'list',
      region: '全省',
      monthlyFee: '15元'
    },

    {
      resourceLLValue: '30G',
      cancelMode: '次月失效',
      offeringName: '888888',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'list',
      region: '全省',
      monthlyFee: '15元'
    },
    {
      resourceLLValue: '30G',
      cancelMode: '次月失效',
      offeringName: 'enter',
      enableMode: '立即生效',
      FeeType: '/月',
      offeringType: '叠加包',
      cType: 'list',
      region: '全省',
      monthlyFee: '15元'
    }
  ]

  // 模拟消息推送
  setInterval(() => {
    if (messageQueue.length > 0) {
      const message = messageQueue.shift()
      res.write(`data: ${JSON.stringify(message)}\n\n`)
    }
  }, 1000)

  req.on('close', () => {
    console.log('Client disconnected')
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
