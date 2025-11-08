import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'client',
  base: '/Colorblind/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'client/src'), // 👈 This fixes "@/..." imports
    },
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
