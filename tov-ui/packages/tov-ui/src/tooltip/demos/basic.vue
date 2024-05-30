<docs>
---
title: 基础使用
---

这是一个`tooltip`基础使用的例子
</docs>

<script setup lang="ts">

</script>

<template>
  <div>
    <t-tooltip placement="top" content="测试内容" trigger="click">
      <t-button>111</t-button>
      <template #content>
        <span style="color:red">
          插槽测试内容
        </span>
      </template>
    </t-tooltip>
  </div>
</template>
