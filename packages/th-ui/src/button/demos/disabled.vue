<docs>
---
title: 禁用按钮
---

设置`disabled`属性为`true`即可禁用按钮
</docs>

<script setup lang="ts">
function handleClick() {
    console.log('click');
}
</script>

<template>
    <div>
        <th-button disabled @click="handleClick"> 按钮1 </th-button>
        <th-button disabled type="dashed" @click="handleClick">
            按钮2
        </th-button>
        <th-button disabled type="primary" @click="handleClick">
            按钮3
        </th-button>
    </div>
</template>
