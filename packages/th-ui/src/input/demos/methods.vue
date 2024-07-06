<docs>
---
title: 基础使用
---

这是一个`input`基础使用的例子
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const value = ref('');
const inputRef = ref();

onMounted(() => {
    inputRef.value.focus();
});
</script>

<template>
    <div class="size">
        value: {{ value }}
        <th-input
            ref="inputRef"
            v-model="value"
            test
            autocomplete="off"
            size="large"
        >
            <template #prefix> 前缀</template>
            <template #suffix> 后缀 </template>
        </th-input>
        <th-input v-model="value" size="small">
            <template #prefix> 前缀 </template>
            <template #suffix> 后缀 </template>
        </th-input>
        <th-input v-model="value">
            <template #prefix> 前缀 </template>
            <template #suffix> 后缀 </template>
        </th-input>
    </div>
</template>

<style scoped>
.size {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.th-input {
  margin-top: 1em;
}
</style>
