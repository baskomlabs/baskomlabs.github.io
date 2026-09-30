import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { __SITE_URL__: JSON.stringify(process.env.SITE_URL || '') },
})
