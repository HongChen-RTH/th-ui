<docs>
---
title: 基础使用
---
这是chat sse的基本例子
</docs>

<template>
  <div>
    <th-chat :data="data"></th-chat>
    <th-button @click="test">test</th-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const data = ref([
  {
    type: 'time',
    time: '2022-04-14 20:29:36'
  },
  {
    avatar: '/photo/1.jpg',
    user: 'u',
    type: 'text',
    content: '屋顶'
  },
  {
    avatar: '/photo/5.jpg',
    user: 'u',
    name: '布鲁斯·班纳',
    type: 'text',
    content: '半夜睡不着觉 把心情哼成歌 只好到屋顶找另一个梦境'
  },
  {
    avatar: '/photo/4.jpg',
    user: 'i',
    name: '娜塔莎·罗曼诺夫',
    type: 'text',
    content:
      '睡梦中被敲醒 我还是不确定 怎会有动人 旋律在对面的屋顶 我悄悄关上门 带着希望上去 原来是我梦里常出现的那个人'
  },
  {
    type: 'time',
    time: '2022-04-14 20:29:36'
  },
  {
    avatar: '/photo/5.jpg',
    user: 'u',
    name: '布鲁斯·班纳',
    type: 'text',
    content: '那个人不就是我梦里 那模糊的人 我们有同样的默契 用天线用天线 排成爱你的形状'
  },
  {
    avatar: '/photo/4.jpg',
    user: 'i',
    name: '娜塔莎·罗曼诺夫',
    type: 'text',
    content:
      '在屋顶唱着你的歌 在屋顶和我爱的人 让星星点缀成最浪漫的夜晚 拥抱这时刻这一分一秒全都停止 爱开始纠结'
  }
])

const clientId = ref(Date.now())
const source = ref(null)
const timer = ref(null)
const reconnectTimeout = ref(3000)

const createSSE = (url, messageFn) => {
  // 创建EventSource对象
  clientId.value = Date.now()
  source.value = new EventSource(url)
  source.value.onmessage = (event:Event) => {
    messageFn(event)
  }

  source.value.onerror = (error:any) => {
    console.error('SSE Error:', error)
    source.value?.close() // 关闭现有连接，准备重连
    timer.value = setTimeout(createSSE, reconnectTimeout.value) // 尝试重新连接
  }
}
const handleSSE = () => {
  let content = ''
  let dataIndex = 0 // data数据长度
  const messageFn = (event:Event) => {
    let messageData = JSON.parse(event.data)
    // 判断第一次接受数据，往data里面push数据
    if (messageData === 'start') {
      // console.log('🚀 ~ handleSSE ~ data:', JSON.stringify(data), data.length, dataIndex)
      data.value.push({
        type: 'text',
        avatar: '/static/img/avatar-robot.png',
        user: 'u',
        content: '...'
      })
      dataIndex = data.value.length
    } else if (messageData !== 'start' && messageData !== 'end') {
      // 不是第一次接受数据,去修改data里面的数据
      content += messageData
      if(data.value[dataIndex - 1]?.content) data.value[dataIndex - 1].content = content
    } else {
      // 结束重置数据
      content = ''
      // sse会返回一条数据
      dataIndex = dataIndex + 1
    }
  }
  createSSE(`http://localhost:3000/messages`, messageFn)
}
onMounted(() => {
  handleSSE()
})
const test = () => {
  console.log('test')
}
</script>

<style scoped></style>
