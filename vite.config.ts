import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    // Add your ngrok host here
    allowedHosts: ['337392f9731a.ngrok-free.app', 'localhost'],
    // Optional: allow all hosts
    // allowedHosts: 'all',
  },
})
