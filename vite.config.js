import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Forces Vite to detect file changes
      interval: 100,     // Polling interval to catch fast changes
    },
    hmr: {
      overlay: false,    // Disable error overlay to prevent freezes
    },
  },
  resolve: {
    alias: {
      '@': '/src',       // Optional: Helps with imports
    },
  },
})
