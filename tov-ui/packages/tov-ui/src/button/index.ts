import type { App } from 'vue'
import Button from './button.vue'

// import { Button } from "xx"
// app.use(Button)
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
export default Button
