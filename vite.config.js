import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'my-vue-e-commerce',
  plugins: [vue(), vueJsx(), vueDevTools()],
  server: {
    // proxy: {
    //   '/products': 'http://localhost:3000'
    // },
    // cors: {
    //   origin: false
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
