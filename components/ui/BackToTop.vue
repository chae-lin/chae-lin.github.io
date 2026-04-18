<script setup lang="ts">
const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      type="button"
      aria-label="맨 위로 이동"
      class="fixed bottom-6 right-6 z-80 flex h-11 w-11 items-center justify-center rounded-full bg-[#f08b89] text-white shadow-md transition hover:opacity-80 hover:-translate-y-1"
      @click="scrollToTop"
    >
      <span aria-hidden="true" class="text-lg leading-none">↑</span>
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
