<script setup lang="ts">
const { init } = useDarkMode()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '김채린' },
    { name: 'theme-color', content: '#f08b89' }
  ],
  link: [
    { rel: 'icon', href: '/images/favicon.png' },
    { rel: 'canonical', href: 'https://chae-lin.github.io/' }
  ],
  htmlAttrs: {
    lang: 'ko'
  }
})

const title = '김채린 | UI·UX 퍼블리셔 & 프론트엔드 개발자'
const description =
  '웹 표준과 접근성을 기반으로 확장 가능한 구조를 설계하는 8년차 UI·UX 퍼블리셔/프론트엔드 개발자입니다.'
const ogImage = '/images/og-image.jpg'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogUrl: 'https://chae-lin.github.io',
  ogType: 'website',
  twitterImage: ogImage,
  twitterCard: 'summary_large_image'
})

onMounted(() => init())
</script>

<template>
  <div class="app">
    <a href="#main-content" class="skip-nav">본문 바로가기</a>
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
    <UiBackToTop />
  </div>
</template>

<style scoped>
.app {
  @apply flex flex-col min-w-[320px] min-h-[100vh] bg-[url(/images/common/bg_light.webp)] bg-repeat dark:[background-image:url(/images/common/bg_dark.webp)];
}
main {
  @apply flex-1;
}
</style>
