import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api requests to a backend during development.
      // Override target by setting BACKEND env var (e.g., BACKEND=http://localhost:5000)
      '/api': {
        target: process.env.BACKEND || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
