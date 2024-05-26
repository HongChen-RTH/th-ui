<docs>
---
title: 基础使用
---

这是一个`button`基础使用的例子
</docs>
<template>
    <div>
        <th-button @click="handleClick"> 按钮1 </th-button>
        <th-button type="dashed" @click="handleClick"> 按钮2 </th-button>
        <th-button type="primary" @click="handleClick"> 按钮3 </th-button>
    </div>
</template>
<script setup lang="ts">
function handleClick() {
    console.log('click');
}
</script>
