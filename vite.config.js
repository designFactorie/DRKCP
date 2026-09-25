import { enquiryApi } from './server/vite-plugin.mjs'
import { seoPreview } from './server/seo-preview.mjs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    enquiryApi(),
    seoPreview(),
  ],
})
