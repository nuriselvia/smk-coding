// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
    
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
      ],
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@kevinmarrec/nuxt-pwa", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.js",
  },
  pwa: {
    manifest: {
      name: "smkcoding",
      short_name: "smkcofing",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "public/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "public/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "public/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "public/icon.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "public/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "public/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "public/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "public/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
  },
  },
});