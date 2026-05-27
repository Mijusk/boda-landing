import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/boda-landing/', // ¡Muy importante que coincida con tu repo!
  plugins: [vue()],
})