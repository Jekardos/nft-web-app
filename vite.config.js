import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true
  },
  // ВАЖНО: Укажи правильный base path для GitHub Pages
  base: '/nft-web-app/',
  build: {
    outDir: 'docs'
  }
})