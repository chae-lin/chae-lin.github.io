<script setup lang="ts">
import { gsap } from 'gsap'

const titleMain = ref(null)
const titleSub = ref(null)
const quotes01 = ref(null)
const quotes02 = ref(null)
const objectLine = ref(null)

const { prefersReducedMotion } = useMotion()

onMounted(() => {
  if (prefersReducedMotion) {
    gsap.set(
      [
        titleSub.value,
        titleMain.value,
        quotes01.value,
        quotes02.value,
        objectLine.value
      ],
      { opacity: 1 }
    )
    return
  }

  gsap.set(
    [
      titleSub.value,
      titleMain.value,
      quotes01.value,
      quotes02.value,
      objectLine.value
    ],
    {
      opacity: 0
    }
  )

  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } })

  tl.to(titleSub.value, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'back.out(2)'
  })
    .fromTo(
      titleSub.value,
      { y: -40 },
      { y: 0, duration: 0.7, ease: 'back.out(2)' },
      '<' // 동시에
    )
    .fromTo(
      titleMain.value,
      { opacity: 0, y: 60, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.6)'
      },
      '-=0.3'
    )
    .fromTo(
      quotes01.value,
      { opacity: 0, x: -60, rotation: -45, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(2)'
      },
      '-=0.5'
    )
    .fromTo(
      quotes02.value,
      { opacity: 0, x: 60, rotation: 45, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(2)'
      },
      '<' // quotes-01과 동시에
    )
    .fromTo(
      objectLine.value,
      { opacity: 0, scale: 0, rotation: -20 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(3)' },
      '-=0.1'
    )
    .to(objectLine.value, {
      rotation: 10,
      duration: 0.15,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 3
    })

  gsap.to(quotes01.value, {
    y: -8,
    rotation: -5,
    duration: 2.2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    delay: 1.5
  })
  gsap.to(quotes02.value, {
    y: -6,
    rotation: 5,
    duration: 2.6,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    delay: 1.8
  })
})

onUnmounted(() => {
  gsap.killTweensOf([
    titleMain.value,
    titleSub.value,
    quotes01.value,
    quotes02.value,
    objectLine.value
  ])
})
</script>

<template>
  <section class="intro">
    <div class="title-box">
      <h3 ref="titleSub">
        <span class="sr-only">small details, big impact</span>
      </h3>
      <h2 ref="titleMain">
        <span class="sr-only">portfolio</span>
        <i ref="quotes01" class="quotes-01" aria-hidden="true" />
        <i ref="quotes02" class="quotes-02" aria-hidden="true" />
        <i ref="objectLine" class="object-line" aria-hidden="true" />
      </h2>
    </div>
  </section>
</template>

<style scoped>
.intro {
  @apply flex justify-center items-center h-[calc(100vh-40px)] md:h-[calc(100vh-60px)] pb-[10vw];
}
.title-box {
  @apply relative w-full;
}
h2 {
  @apply relative mt-[-4vw] pt-[20vw] bg-[url(/images/intro/title-main.webp)] bg-no-repeat bg-contain bg-center;
}
h3 {
  @apply pt-[16vw] bg-[url(/images/intro/title-sub.webp)] bg-no-repeat bg-contain bg-center;
}
i {
  @apply absolute left-[50%] bg-[url(/images/intro/object.webp)] bg-no-repeat bg-[45vw_auto];
}
.quotes-01 {
  @apply top-[0] w-[9vw] h-[9vw] mt-[-2vw] ml-[-38vw] bg-[-26vw_0];
}
.quotes-02 {
  @apply bottom-[0] w-[9vw] h-[9vw] mb-[-3vw] ml-[28vw] bg-[-35vw_0];
}
.object-line {
  @apply w-[12vw] h-[7vw] mt-[-2vw] ml-[-6vw] bg-[0_-26vw];
}
</style>
