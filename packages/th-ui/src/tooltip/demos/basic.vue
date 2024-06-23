<docs>
---
title: 基础使用
---

这是一个`Tooltip`基础使用的例子
</docs>
<template>
  <div>
    <th-tooltip placement="top" content="测试" trigger="click">
      <th-button>111</th-button>
      <template #content>
        <span style="color: red">666</span>
      </template>
    </th-tooltip>
  </div>
</template>
<script setup lang="ts">

</script>
