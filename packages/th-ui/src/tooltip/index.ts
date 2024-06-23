import Tooltip from './tooltip'
import type { App } from 'vue'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name as string, Tooltip)
}

export default Tooltip