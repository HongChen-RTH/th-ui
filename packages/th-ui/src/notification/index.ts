import { createNotification } from './instance'
import type { App } from 'vue'

const instance = createNotification()

instance.install = (app: App) => {
  // app.component(Notification.name as string, Notification)
  app.config.globalProperties.$notification = instance
  // optionApi
  // this.$notification.info({content: 'test', title: 'test'})
}

export default instance