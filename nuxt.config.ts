// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],

  devtools: {
    enabled: true,
  },

  css: [
    "~/assets/css/reset.css",
    "~/assets/css/font.css",
    "~/assets/css/app.css",
  ],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  ssr: true,
  nitro: { preset: "github_pages" },
});
