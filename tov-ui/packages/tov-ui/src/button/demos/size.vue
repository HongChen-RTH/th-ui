<docs>
---
title: 按钮大小
---

通过size属性可以设置按钮大小
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <t-button size="default" @click="handleClick">
      按钮1
    </t-button>
    <t-button size="small" @click="handleClick">
      按钮2
    </t-button>
    <t-button size="large" @click="handleClick">
      按钮3
    </t-button>
  </div>
</template>
