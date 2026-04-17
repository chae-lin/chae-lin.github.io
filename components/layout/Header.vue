<script setup lang="ts">
import { navItems } from "~/assets/data/navigation";

const { activeSection } = useActiveSection();

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
    class="sticky top-0 left-0 right-0 h-[40px] z-[100] md:h-[60px]"
    :class="{ 'is-scrolled': isScrolled }"
  >
    <h1 class="sr-only">chaelin portfolio</h1>
    <nav aria-label="주 내비게이션">
      <ul class="flex items-center h-[40px] gap-[20px] px-[20px] text-[16px] text-[#7a7a7a] md:h-[60px] md:px-[40px] md:text-[20px]">
        <li
          v-for="item in navItems"
          :key="item.id"
          class="relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-2xl after:h-[2px] md:after:h-[4px]"
          :class="{ 'text-[#f08b89] after:bg-[#f08b89]': activeSection === item.id }"
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
  </header>
</template>

<style scoped>
header.is-scrolled {
  background: linear-gradient(
    to bottom,
    rgb(255 255 255 / 80%) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(12px);
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}
</style>
