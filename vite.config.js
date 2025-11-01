import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // إضافة هذا السطر لمساعدة CodeSandbox/StackBlitz على إيجاد المنفذ
  server: {
    host: '0.0.0.0',
    port: 5173 // هذا هو المنفذ الافتراضي لـ Vite
  }
})
