<docs>
---
title: 基础使用
---

这是一个`Notification`基础使用的例子
</docs>
<template>
    <div>
        <th-button @click="info">弹框</th-button>
    </div>
</template>
<script setup lang="ts">
import { Notification } from 'th-ui'
import Test from './components/test.vue'
import {h, getCurrentInstance} from 'vue'

const instance = getCurrentInstance()
// const info = () => {
//   Notification.info({
//     title: '通知',
//     content: '这是一条通知'
//   })
// }
const info = () => {
  Notification.info({
    title: '通知',
    content: h(Test),
    appContext: instance?.appContext,
  })
}

const handleClick = (item: any) => {
  console.log("🚀 ~ item:", item)
}
</script>
<style scoped>

</style>
