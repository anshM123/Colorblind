import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Fix base for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/Colorblind/',  // <-- MUST match your repo name exactly
  build: {
    outDir: '../docs',   // output to docs folder for GitHub Pages
    emptyOutDir: true,
  },
})
