import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['public/vite.svg'],
      manifest: {
        name: "Ci Capiamo?",
        short_name: "CiCapiamo",
        description: "Ci Capiamo? - A game to play with your friends",
        theme_color: "#000000",
        icons: [
          {
            src: 'public/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'public/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'public/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'public/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      injectRegister: 'script',
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
  base: process.env.NODE_ENV === "production" ? "/cicapiamo/" : "/",
  define: {
    __APP_ID__: JSON.stringify("cicapiamo"),
  }
});
