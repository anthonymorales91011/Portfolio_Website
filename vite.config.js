import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration for portfolio website
 * Base path is set for GitHub Pages deployment
 * Server configured to allow access from other devices on local network
 */
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Website/', // Required for GitHub Pages when repo name is in URL
  server: {
    host: '0.0.0.0', // Allows access from other devices on local network
    port: 5173,
  },
})

