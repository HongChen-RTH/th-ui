<docs>
---
title: 基础使用
---

这是一个`虚拟列表`基础使用的例子
</docs>
<template>
    <div>
        <th-virtual-list :data="data" @clickItem="handleClick">
          <template #item="{item}">
            <div class="data-item">
              {{item.name}}
            </div>
            </template>
        </th-virtual-list>
    </div>
</template>
<script setup lang="ts">
const data = Array.from({length: 1000}).map((_, index) => ({
  id: index+ 1,
  name: `Test_${index + 1}`
}))

const handleClick = (item: any) => {
  console.log("🚀 ~ item:", item)
}
</script>
<style scoped>
.data-item { 
  display: flex;
  align-items: center;
}
</style>
