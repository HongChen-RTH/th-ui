import { VNode } from "vue"


export interface NotificationConfig {
  title: string | VNode
  content: string | VNode
  duration?: number
  appContext?: any
}

export interface NotificationConfigType extends NotificationConfig {
  _id?: number
  _timer?: ReturnType<typeof setTimeout>
}

export interface NotificationInstance {
  add: (config: NotificationConfig) => (() => void)
}