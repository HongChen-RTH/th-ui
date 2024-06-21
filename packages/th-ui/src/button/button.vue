<template>
    <button :class="cls" :disabled="disabled" @click="click">
        <slot />
    </button>
</template>

<script setup lang="ts">
// import { defineProps, defineEmits } from 'vue';

import { useClassnames } from '@th-ui/utils';

defineOptions({
    name: 'ThButton',
});

const props = defineProps({
    type: {
        type: String as PropType<'default' | 'primary' | 'dashed'>,
        default: 'default',
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    size: {
        type: String as PropType<'small' | 'large' | 'default'>,
        default: 'default',
    },
});

const click = (e) => {
    emit('click', e);
};

const emit = defineEmits(['click']);

const { c, cx, cm } = useClassnames('button');
const cls = cx(() => {
    return {
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
    };
});
</script>

<style lang="scss" scoped></style>
