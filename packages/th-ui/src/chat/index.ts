import type { App } from 'vue'
import Chat from './chat.vue'

Chat.install = (app: App) => {
  app.component(Chat.name as string, Chat)
}

export default Chat
