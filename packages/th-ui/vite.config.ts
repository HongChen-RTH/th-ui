import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import dts from 'vite-plugin-dts'


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
    },
    rollupOptions: {
      external: ['@th-ui/utils'],
      output: [
        {
          preserveModules: true,  //按需加载
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          format: 'esm',
          dir: 'es'
        },
        {
          preserveModules: true,  //按需加载
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          exports: 'named',
          format: 'cjs',
          dir: 'lib'
        }
      ]
    }
  }
})
