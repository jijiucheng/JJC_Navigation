import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/renderer/src')
      }
    },
    server: {
      port: 5000,
      hmr: {
        overlay: false
      }
    },
    plugins: [vue()]
  }
})
