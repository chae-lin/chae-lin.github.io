// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],

  ssr: true,

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/reset.css',
    '~/assets/css/font.css',
    '~/assets/css/theme.css',
    '~/assets/css/app.css'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',
  nitro: { preset: 'github_pages' },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
