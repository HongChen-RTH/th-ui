import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue']
    })
  ],
})
