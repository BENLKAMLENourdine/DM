// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        'Plus Jakarta Sans': [500, 600, 700],
        download: true,
        inject: true
      }
    }],
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  ssr: true,
  pinia: {
    storesDirs: ["./stores/**"],
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  }
})
