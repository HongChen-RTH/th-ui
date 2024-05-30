import { defineConfig } from 'vite'
import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => 'th-ui-style.js',
    },
    rollupOptions: {

      output: {
        assetFileNames: () => 'th-ui.css'
      }
    }
  },
  plugins: [{
    name: 'remove:th-ui-style.js',
    closeBundle() {
      const thPath = fileURLToPath(new URL('./dist', import.meta.url));
      const stylePath = path.resolve(thPath, 'th-ui-style.js');
      fs.removeSync(stylePath)
    }
  }]
})
