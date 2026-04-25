import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export const useActiveSection = (ids: string[]): Ref<string> => {
  const activeSection = ref(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!sections.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

        if (visibleEntries[0]) {
          activeSection.value = visibleEntries[0].target.id
        }
      },
      {
        rootMargin: '-42% 0px -42% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer?.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return activeSection
}
