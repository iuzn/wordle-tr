import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  }),     VitePWA({
    strategies: 'generateSW',
    manifest: {
      name: 'Wordle Kapışması',
      short_name: 'Wordle TR',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),],
})
