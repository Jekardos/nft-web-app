import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true
  },
  build: {
    outDir: 'docs'  // Для GitHub Pages
  },
  base: '/nft-ecosystem-minimal/'  // Замени на имя своего репозитория
})