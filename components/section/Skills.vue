<script setup lang="ts">
import { skillGroups } from '~/assets/data/skills'
import type UiSectionTitle from '~/components/ui/SectionTitle.vue'

const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<InstanceType<typeof UiSectionTitle> | null>(null)
const { prefersReducedMotion, loadGsap, createScrollTimeline } = useMotion()

onMounted(async () => {
  await nextTick()

  const sectionEl = sectionRef.value
  if (!sectionEl || prefersReducedMotion) return

  const gsap = await loadGsap()
  const titleEl = titleRef.value?.$el ?? titleRef.value
  const groups = gsap.utils.toArray(sectionEl.querySelectorAll('.skill-group'))

  gsap.set(titleEl, { opacity: 0, y: 24 })
  gsap.set(groups, { opacity: 0, y: 20 })

  const tl = await createScrollTimeline(sectionEl)

  tl.to(titleEl, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }).to(
    groups,
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.08 },
    '-=0.3'
  )
})

onUnmounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>

<template>
  <section ref="sectionRef" class="section">
    <UiSectionTitle ref="titleRef" title="Skills" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="group in skillGroups"
        :key="group.category"
        class="skill-group relative overflow-hidden rounded-2xl bg-surface-default p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        :style="{ borderLeft: `4px solid ${group.accent}` }"
      >
        <div
          class="absolute top-0 right-0 h-24 w-24 rounded-bl-full opacity-[0.06]"
          :style="{ backgroundColor: group.accent }"
        />

        <h4
          class="mb-3 text-xs font-bold uppercase tracking-widest"
          :style="{ color: group.accent }"
        >
          {{ group.category }}
        </h4>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-full px-3 py-1 text-sm font-medium"
            :style="{
              backgroundColor: `${group.accent}18`,
              color: group.accent
            }"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
