import { navItems } from '~/assets/data/navigation'

export const useActiveSection = () => {
  const activeSection = ref('')

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px'
      }
    )

    ;['intro', ...navItems.map((item) => item.id)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onUnmounted(() => observer.disconnect())
  })

  return { activeSection }
}
