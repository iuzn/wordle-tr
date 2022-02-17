import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: [
    "favicon.svg",
    "favicon.ico",
    "robots.txt",
    "apple-touch-icon.png",
  ],
  workbox: {
    globPatterns: [
      "**.{js,css,html,png,jpg,jpeg,svg,gif}",
      "**/*.{js,css,html,png,jpg,jpeg,svg,gif}",
      "**/*.*{js,css,html,png,jpg,jpeg,svg,gif}",
    ],
  },
  manifest: {
    name: 'Wordle Kapışması',
    short_name: 'Wordle Kapışması',
    theme_color: '#ffffff',
    display:"standalone",
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
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    navigateFallback: 'index.html',
  },
}
console.log('process.env.SW', process.env.SW);

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.strategies = 'injectManifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).name = 'Wordle Kapışması'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'Wordle Kapışması'
}



export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  }),
    VitePWA(pwaOptions),
  ],
})
