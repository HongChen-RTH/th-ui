import { TransitionGroup, defineComponent, ref, onMounted } from "vue";
import type { NotificationConfig, NotificationConfigType, NotificationInstance } from './interface'

import { useClassnames } from "@th-ui/utils";

export default defineComponent<{
  onReady: (instance: NotificationInstance) => void
}>({
  name: "ThNotification",
  setup(props, { expose }) {
    const { c } = useClassnames('notification');

    let index = 0
    const data = ref<NotificationConfigType[]>([])


    const add = (config: NotificationConfig) => {
      const instance: NotificationConfig = {
        ...config,
        // title: '通知标题',
        // content: `通知测试数据${index++}`,
        _id: index
      }

      const close = () => {
        const closeIndex = data.value.findIndex((item) => item._id === instance._id);
        if (closeIndex !== -1) {
          data.value.splice(closeIndex, 1)
        }

        if (instance._timer) clearTimeout(instance._timer)
      }

      if (instance.duration !== 0) {
        instance._timer = setTimeout(() => {
          close()
        }, instance.duration ?? 3000)
      }
      data.value.push(instance)
      return close
    }

    const onReady = () => {
      console.log('ready');
      props.onReady?.({
        add
      })
    }

    onMounted(() => {
      onReady()
    })

    expose({
      add,
    })
    return () => {
      const renderNotification = () => {
        const cls = {
          [c('wrapper')]: true
        }
        const titleCls = {
          [c('wrapper', 'title')]: true
        }

        const contentCls = {
          [c('wrapper', 'content')]: true
        }
        return data.value.map((item) => {
          return (
            <div class={cls} key={item._id}>
              <div class={titleCls}>
                {item.title}
              </div>
              <div class={contentCls}>
                {item.content}
              </div>
            </div>
          )
        })
      }
      const notificationCls = {
        [c()]: true,
      }
      return (
        <>
          <div class={notificationCls}>
            <TransitionGroup name="th-side-right" tag="div">
              {renderNotification()}
            </TransitionGroup>
          </div>
        </>)
    }
  }
})