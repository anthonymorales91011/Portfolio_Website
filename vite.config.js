import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Website/',
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,
  },
})

