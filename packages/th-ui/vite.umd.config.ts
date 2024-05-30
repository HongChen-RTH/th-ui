import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import dts from 'vite-plugin-dts'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vue(),
    dts({
      entryRoot: 'src',
      outDir: ['es', 'lib'],
      exclude: ['**/test/**']
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      fileName: () => 'th-ui.js',
      name: 'thUI'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue'
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /^@th-ui\/utils/,
        replacement: path.resolve(baseUrl, '../utils/src'),
      },
    ],
  },
})
