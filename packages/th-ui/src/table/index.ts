import type { App, Plugin } from "vue"
import Table from './table'

(Table as Plugin).install = (app: App) => {
  app.component(Table.name, Table)
}

export default Table