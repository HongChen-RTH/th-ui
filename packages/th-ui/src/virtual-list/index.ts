import VirtualList from './virtual-list'
import type { App } from 'vue'

VirtualList.install = (app: App) => {
  app.component(VirtualList.name as string, VirtualList)
}

export default VirtualList