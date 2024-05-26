import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

// import tov from "tov-ui"
// app.use(tov)
// import { Button } from "tov-ui"
export * from './components'
export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, comp]) => {
      if (comp.install)
        app.use(comp as any)
    })
  },
  version: pkg.version,
} as Plugin

