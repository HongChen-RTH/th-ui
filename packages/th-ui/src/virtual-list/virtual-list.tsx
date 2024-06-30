
import { CSSProperties, defineComponent, onMounted, onUnmounted, ref, computed } from "vue";

import { useClassnames } from "@th-ui/utils";


export default defineComponent({
  name: "ThVirtualList",
  props: {
    height: {
      type: Number,
      default: 300
    },
    itemHeight: {
      type: Number,
      default: 40
    },
    data: {
      type: Array,
      default: () => []
    },
    buffer: { // 缓冲区个数
      type: Number,
      default: 5
    }
  },
  emits: ['clickItem'],
  setup(props, { emit }) {
    const { c } = useClassnames("virtual-list");

    const containerRef = ref<HTMLElement | null>(null);
    const scrollTop = ref(0)
    const onScroll = () => {
      scrollTop.value = containerRef.value?.scrollTop || 0

    }

    const handleItemClick = (item: any) => {
      emit('clickItem', item)
    }
    onMounted(() => {
      if (containerRef.value) {
        containerRef.value.addEventListener('scroll', onScroll)
      }
    })
    onUnmounted(() => {
      if (containerRef.value) {
        containerRef.value.removeEventListener('scroll', onScroll)
      }
    })

    const containerHeight = computed(() => {
      if (containerRef.value) {
        return containerRef.value.clientHeight
      }
      return props.height
    })

    const sliceItem = computed(() => {
      const itemHeight = props.itemHeight
      const buffer = props.buffer
      // 向上取整
      const showCounter = Math.ceil(containerHeight.value / itemHeight)
      // 向下取整
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer

      const startIndex = Math.max(0, counterIndex)
      const endIndex = showCounter + buffer * 2 + counterIndex
      return props.data.slice(startIndex, endIndex).map((item, index) => ({
        item,
        top: (index + startIndex) * itemHeight,
        key: "virtualList" + `${startIndex + index}`
      }))
    })


    return {
      c,
      sliceItem,
      handleItemClick,
      containerRef,
    }
  },
  render() {
    const { c, height, data, itemHeight, sliceItem, handleItemClick } = this
    const slots = this.$slots
    const containerCls = {
      [c()]: true
    }

    const containerStyle: CSSProperties = {
      height: height + "px",
    }

    const bodyHeight = data.length * itemHeight

    const bodyCls = {
      [c('body')]: true
    }

    const bodyStyle: CSSProperties = {
      height: bodyHeight + "px",
    }

    const renderItems = () => {
      const height = itemHeight ?? 40
      const itemCls = {
        [c('item')]: true,
      }
      // console.log("🚀 ~ returnsliceItem.map ~ sliceItem:", sliceItem)
      return sliceItem.map((item) => {
        const itemStyle: CSSProperties = {
          height: height + "px",
          top: item.top + "px",
        }

        const onClick = () => {
          handleItemClick(item.item)
        }
        return (
          <div class={itemCls} onClick={onClick} style={itemStyle} key={item.key}>
            {slots.item && slots.item({ item: item.item })}
          </div>
        )
      })
    }



    return (
      <div class={containerCls} ref="containerRef" style={containerStyle} >
        <div class={bodyCls} style={bodyStyle}>
          {renderItems()}
        </div>
      </div>
    )
  }
})