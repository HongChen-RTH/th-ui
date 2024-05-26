<docs>
---
title: 按钮大小
---

通过size属性可以设置按钮大小
</docs>

<script setup lang="ts">
function handleClick() {
    console.log('click');
}
</script>

<template>
    <div>
        <th-button size="default" @click="handleClick"> 按钮1 </th-button>
        <th-button size="small" @click="handleClick"> 按钮2 </th-button>
        <th-button size="large" @click="handleClick"> 按钮3 </th-button>
    </div>
</template>
