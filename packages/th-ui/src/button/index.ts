import Button from './button.vue';
import type { App } from 'vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button