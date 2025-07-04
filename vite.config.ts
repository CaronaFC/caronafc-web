import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV !== 'development' ? '/caronafc-web/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 8081,
  }
})
