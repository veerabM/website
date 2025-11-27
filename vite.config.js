import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'https://aizero-website-api.graybeach-8b78e2a5.westus2.azurecontainerapps.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
