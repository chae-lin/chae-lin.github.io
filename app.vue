<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.png" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="app">
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>

<style scoped>
.app {
  @apply flex flex-col min-h-[100vh] bg-[url(/images/intro/bg.jpeg)] bg-repeat;
}
main {
  @apply flex-1;
}
</style>
