export const useMotion = () => {
  const prefersReducedMotion = import.meta.client
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  const loadGsap = async () => {
    const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ])
    gsap.registerPlugin(ScrollTrigger)
    return gsap
  }

  const createScrollTimeline = async (trigger: Element) => {
    const gsap = await loadGsap()
    return gsap.timeline({
      scrollTrigger: {
        trigger,
        start: 'top 75%',
        once: true
      }
    })
  }

  return { prefersReducedMotion, loadGsap, createScrollTimeline }
}
