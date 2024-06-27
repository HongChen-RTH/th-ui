<docs>
---
title: 基础使用
---
这是表格的基本例子
</docs>

<template>
    <div>
        <th-table :data="data">
            <!-- <th-table-column title="姓名" key="name"></th-table-column> -->
            <!-- <table-column title="姓名" key="name"></table-column> -->
            <t-table-column title="姓名" key="name" />
            <t-table-column key="age" title="年龄" />
            <t-table-column key="address" title="住址" />
            <t-table-column key="action" title="操作" />
        </th-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const columns = ref([
    {
        title: '姓名',
        key: 'name',
    },
    {
        title: '年龄',
        key: 'age',
    },
    {
        title: '住址',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
    },
]);

const data = ref(
    Array.from({ length: 10 }).map((_, index) => {
        return {
            name: `王小虎${index + 1}`,
            age: 32 + index,
            address: `上海市普陀区金沙江路 1518 弄${index + 1}`,
            action: index % 2 === 0 ? '删除' : '保存',
        };
    })
);
</script>

<style scoped></style>
