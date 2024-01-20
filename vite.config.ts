import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cicapiamo/",
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['/cicapiamo/vite.svg', '/cicapiamo/pwa-192x192.png', '/cicapiamo/pwa-512x512.png'],
      manifest: {
        name: "Ci Capiamo?",
        short_name: "Ci Capiamo?",
        description: "Ci Capiamo? - A game to play with your friends",
        theme_color: "#000000",
        related_applications: [
          {
            platform: "webapp",
            url: "http://localhost:5173/cicapiamo/manifest.webmanifest"
          }
        ],
        icons: [
          {
            src: '/cicapiamo/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/cicapiamo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/cicapiamo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/cicapiamo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      injectRegister: null,
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  define: {
    __APP_ID__: JSON.stringify("cicapiamo"),
  },
});
