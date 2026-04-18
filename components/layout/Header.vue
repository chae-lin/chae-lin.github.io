<script setup lang="ts">
import { navItems } from "~/assets/data/navigation";

const { activeSection } = useActiveSection();

const { isDark, toggle: toggleDark } = useDarkMode();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="sticky top-0 left-0 right-0 flex items-center justify-between h-[40px] px-[20px] z-[100] md:h-[60px] md:px-[40px]"
    :class="{ 'is-scrolled': isScrolled }"
  >
    <h1 class="sr-only">chaelin portfolio</h1>
    <nav aria-label="내비게이션">
      <ul
        class="flex items-center h-[40px] gap-[20px] text-[16px] text-fg-default md:h-[60px] md:text-[20px]"
      >
        <li
          v-for="item in navItems"
          :key="item.id"
          class="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-2xl after:h-[2px] md:after:h-[4px]"
          :class="{
            'text-[#f08b89] after:bg-[#f08b89]': activeSection === item.id,
          }"
        >
          <button
            type="button"
            :aria-current="activeSection === item.id ? 'true' : undefined"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </nav>
    <div class="ml-2">
      <button
        type="button"
        :aria-label="
          isDark
            ? '현재 다크 모드 · 라이트 모드로 전환'
            : '현재 라이트 모드 · 다크 모드로 전환'
        "
        class="group block relative w-6 h-6 overflow-hidden md:w-8 md:h-8"
        @click="toggleDark()"
      >
        <span
          aria-hidden="true"
          class="absolute inset-0 bg-[url('/images/header/img-sun.png')] bg-contain bg-center bg-no-repeat grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
          :class="
            isDark
              ? 'translate-x-full translate-y-full opacity-0'
              : 'translate-x-0 translate-y-0 opacity-100'
          "
        />
        <span
          aria-hidden="true"
          class="absolute inset-0 bg-[url('/images/header/img-moon.png')] bg-contain bg-center bg-no-repeat grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
          :class="
            isDark
              ? 'translate-x-0 translate-y-0 opacity-100'
              : '-translate-x-full translate-y-full opacity-0'
          "
        />
      </button>
    </div>
  </header>
</template>

<style scoped>
header.is-scrolled {
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--color-surface-default) 80%, transparent) 0%,
    transparent 100%
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(12px);
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}
</style>
