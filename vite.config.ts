import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue']
    })
  ],
  resolve: {
    alias: [
      {
        find: /^th-ui/,
        replacement: path.resolve(baseUrl, 'packages/th-ui/src'),
      },
      {
        find: /^@th-ui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
