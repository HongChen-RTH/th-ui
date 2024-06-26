<docs>
---
title: Tooltip插槽
---
</docs>

<template>
    <th-tooltip placement="top" content="测试">
        <th-button>111</th-button>
        <template #content>
            <span style="color: red">666</span>
        </template>
    </th-tooltip>
</template>

<script setup lang="ts"></script>
