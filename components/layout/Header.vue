<script setup lang="ts">
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
  <header :class="{ 'is-scrolled': isScrolled }">
    <h1 class="sr-only">chaelin portfolio</h1>
    <ul>
      <li
        role="button"
        :class="{ active: activeSection === 'projects' }"
        @click="scrollToSection('projects')"
      >
        Projects
      </li>
      <li
        role="button"
        :class="{ active: activeSection === 'career' }"
        @click="scrollToSection('career')"
      >
        Career
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  @apply sticky top-0 left-0 right-0 h-[40px] z-[100] md:h-[60px];
}
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
header ul {
  @apply flex items-center h-full gap-[20px] px-[20px] text-[16px] md:px-[40px] md:text-[20px] text-[#7a7a7a];
}
header li {
  @apply relative;
}
header li.active {
  @apply text-[#f08b89];
}
header li:after {
  @apply content-[''] absolute left-0 right-0 bottom-0 rounded-2xl h-[2px] md:h-[4px];
}
header li.active:after {
  @apply bg-[#f08b89];
}
</style>
