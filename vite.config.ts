import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `product-quiz.js`,
        chunkFileNames: `product-quiz.js`,
        assetFileNames: `product-quiz.[ext]`
      }
    }
  }
})
