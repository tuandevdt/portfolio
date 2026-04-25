import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export const useActiveSection = (ids: string[]): Ref<string> => {
  const activeSection = ref(ids[0] ?? '')
  let observer: IntersectionObserver | null = null
  const ratios = new Map<string, number>()

  onMounted(() => {
    setTimeout(() => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section instanceof HTMLElement)

      if (!sections.length) return

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
          })

          let mostVisible = ''
          let maxRatio = 0

          ratios.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio
              mostVisible = id
            }
          })

          if (mostVisible) {
            activeSection.value = mostVisible
          }
        },
        {
          rootMargin: '-20% 0px -20% 0px',
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
        },
      )

      sections.forEach((section) => observer?.observe(section))
    }, 100)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return activeSection
}
