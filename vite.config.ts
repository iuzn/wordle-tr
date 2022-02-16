import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  }), VitePWA({ strategies: 'injectManifest',
    manifest: {
      // content of manifest
    },
    injectManifest: {
      // workbox options for injectManifest
    }}),],
})
