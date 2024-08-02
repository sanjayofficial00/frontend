import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set base to current directory
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8000/',
    }
  },
})