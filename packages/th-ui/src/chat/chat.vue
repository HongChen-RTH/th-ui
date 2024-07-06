<template>
  <div class="to-chat" ref="chatRef">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        :class="{
          'user-i': item.user === 'i',
          'user-u': item.user === 'u',
          'type-time': item.type === 'time'
        }"
      >
        <template v-if="item.type === 'time'">
          <div class="time">{{ item.time }}</div>
        </template>
        <template v-else>
          <div class="avatar">
            <Loading />
            <!-- <to-pic
                            :src="item.avatar"
                            v-bind="avatarProps"
                        ></to-pic> -->
          </div>
          <div class="content">
            <div v-if="item.name" class="name">{{ item.name }}</div>
            <div class="wrapper">
              <slot :item="item" :index="index">{{ item.content }}</slot>
            </div>
            <!-- <div class="fn">
                            <slot name="fn" :item="item"></slot>
                        </div> -->
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { nextTick, ref, computed, watch } from 'vue'
import { Loading } from '@th-ui/icons'
// import { throttle } from 'throttle-debounce';
import type { ChatProps } from './interface';
defineOptions({
  name: 'ThChat',
  inheritAttrs: false
})

// const props = defineProps<ChatProps>({
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  avatarProps: {
    type: Object,
    default: () => ({})
  }
})
const chatRef = ref<HTMLElement | null>(null)
const dataClone = computed(() => JSON.parse(JSON.stringify(props.data)))
watch(
  dataClone,
  (newVal: any[], oldVal: any[]) => {
    let newLastContent = newVal && newVal[newVal.length - 1].content
    let oldLastContent = oldVal && oldVal[oldVal.length - 1].content
    if (newVal && newVal.length !== 0 && newVal.length > oldVal?.length) {
      nextTick(() => {
        if (chatRef.value) {
          // let that = this
          scrollToBottom()
        }
      })
    }
    if (newLastContent !== oldLastContent) {
      scrollToBottomLi()
    }
  },
  { deep: true }
)

// 	const scrollToBottomLi: throttle(500, true, () => {
// 			scrollToBottom()
// })
const scrollToBottomLi = () => {
  scrollToBottom()
}
const scrollToBottom = () => {
  let endEl = chatRef.value?.querySelector('li:last-child')
  endEl?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest'
  })
}
</script>
