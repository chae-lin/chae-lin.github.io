<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats, strengths } from "~/assets/data/about";
import type UiSectionTitle from "~/components/ui/SectionTitle.vue";

const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<InstanceType<typeof UiSectionTitle> | null>(null);

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger);
  await nextTick();

  const sectionEl = sectionRef.value;
  if (!sectionEl) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const titleEl = titleRef.value?.$el ?? titleRef.value;
  const bio = sectionEl.querySelector(".about-bio");
  const statCards = gsap.utils.toArray(
    sectionEl.querySelectorAll(".stat-card"),
  );
  const chips = gsap.utils.toArray(
    sectionEl.querySelectorAll(".strength-chip"),
  );

  gsap.set([titleEl, bio], { opacity: 0, y: 24 });
  gsap.set(statCards, { opacity: 0, y: 20, scale: 0.96 });
  gsap.set(chips, { opacity: 0, y: 12 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: "top 75%",
      once: true,
    },
  });

  tl.to(titleEl, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(bio, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .to(
      statCards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.4)",
        stagger: 0.1,
      },
      "-=0.2",
    )
    .to(
      chips,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
      },
      "-=0.2",
    );
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <section ref="sectionRef" class="section">
    <UiSectionTitle ref="titleRef" title="About" />

    <p
      class="about-bio mt-4 mb-8 text-sm leading-7 text-gray-600 md:text-base md:leading-8"
    >
      8년의 마크업 전문성 위에 프론트엔드 개발을 쌓았습니다.<br />
      Atomic Design 패턴 기반 컴포넌트 설계부터 성능 최적화까지, 인터페이스의
      시작과 끝을 모두 아는 개발자입니다.
    </p>

    <div class="flex gap-4 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="stat-card flex flex-col items-center justify-center flex-1 py-5 rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        <span class="text-3xl font-bold text-[#f08b89] md:text-4xl">{{
          stat.value
        }}</span>
        <span
          class="mt-1 text-xs text-center text-gray-500 leading-5 whitespace-pre-line"
          >{{ stat.label }}</span
        >
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="strength in strengths"
        :key="strength"
        class="strength-chip rounded-full border border-[#91b0a6] px-4 py-1.5 text-sm text-[#91b0a6]"
      >
        {{ strength }}
      </span>
    </div>
  </section>
</template>
