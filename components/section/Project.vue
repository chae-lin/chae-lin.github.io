<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "~/assets/data/projects";
import type UiSectionTitle from "~/components/ui/SectionTitle.vue";

const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<InstanceType<typeof UiSectionTitle> | null>(null);

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger);
  await nextTick();

  const sectionEl = sectionRef.value;
  const titleEl = titleRef.value?.$el ?? titleRef.value;
  const cards = gsap.utils.toArray(
    sectionEl!.querySelectorAll(".project-card"),
  );

  gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });
  gsap.set(titleEl, { opacity: 0, y: 30 });

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
  ).fromTo(
    cards,
    { opacity: 0, y: 30, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1,
    },
    "-=0.1",
  );
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <section ref="sectionRef" class="section">
    <UiSectionTitle ref="titleRef" title="Major Projects" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <UiProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
