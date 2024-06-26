/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import Components from 'unplugin-vue-components/vite'
import { thUIResolver } from './scripts/th-ui-resolver'



import alias from './alias'


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue']
    }),
    Components({
      resolvers: [
        thUIResolver()
      ]
    }),
    // vue(),
  ],
  resolve: {
    alias
  },
})
