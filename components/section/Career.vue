<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { careers } from "~/assets/data/career";
import type UiSectionTitle from "~/components/ui/SectionTitle.vue";

const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<InstanceType<typeof UiSectionTitle> | null>(null);
const { prefersReducedMotion, createScrollTimeline } = useMotion();

const activeIndex = ref(careers.length - 1);

watch(activeIndex, async () => {
  await nextTick();
  const sectionEl = sectionRef.value;
  if (!sectionEl || prefersReducedMotion) return;

  const panelEl = sectionEl.querySelector(".career-panel");
  if (!panelEl) return;

  gsap.fromTo(
    panelEl,
    { opacity: 0.6, y: 8 },
    { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" },
  );
});

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger);
  await nextTick();

  const sectionEl = sectionRef.value;
  if (!sectionEl || prefersReducedMotion) return;

  const titleEl = titleRef.value?.$el ?? titleRef.value;

  // hook 클래스 기준으로 DOM 수집
  const barEl = sectionEl.querySelector(".career-bar");
  const panelEl = sectionEl.querySelector(".career-panel");

  const panelCard =
    panelEl?.querySelector(".career-card") ||
    panelEl?.querySelector(".panel") ||
    panelEl;

  const panelLines = panelEl
    ? gsap.utils.toArray(
        panelEl.querySelectorAll("li, dt, dd, .tag, .chip, .badge"),
      )
    : [];

  gsap.set(titleEl, { opacity: 0, y: 30 });

  if (barEl) gsap.set(barEl, { opacity: 0, y: 18 });
  if (panelCard) gsap.set(panelCard, { opacity: 0, y: 26, scale: 0.98 });
  if (panelLines.length) gsap.set(panelLines, { opacity: 0, y: 10 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: "top 75%",
      once: true,
    },
  });

  tl.fromTo(
    titleEl,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
  );
  if (barEl) {
    tl.to(
      barEl,
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
      "-=0.25",
    );
  }
  if (panelCard) {
    tl.to(
      panelCard,
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
      "-=0.2",
    );
  }
  if (panelLines.length) {
    tl.to(
      panelLines,
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.03 },
      "<",
    );
  }
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <section ref="sectionRef" class="section">
    <UiSectionTitle ref="titleRef" title="Career" />
    <UiCareerBar
      class="career-bar"
      v-model:activeIndex="activeIndex"
      :careers="careers"
    />
    <UiCareerPanel
      class="career-panel"
      :activeIndex="activeIndex"
      :careers="careers"
      aria-live="polite"
      aria-atomic="true"
    />
  </section>
</template>
