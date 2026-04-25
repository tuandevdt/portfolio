import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseGlow(elementRef: { value: HTMLElement | null }) {
  const glowX = ref(0)
  const glowY = ref(0)
  const isHovering = ref(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    glowX.value = e.clientX - rect.left
    glowY.value = e.clientY - rect.top
  }

  const handleMouseEnter = () => {
    isHovering.value = true
  }

  const handleMouseLeave = () => {
    isHovering.value = false
  }

  onMounted(() => {
    if (elementRef.value) {
      elementRef.value.addEventListener('mousemove', handleMouseMove)
      elementRef.value.addEventListener('mouseenter', handleMouseEnter)
      elementRef.value.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  onUnmounted(() => {
    if (elementRef.value) {
      elementRef.value.removeEventListener('mousemove', handleMouseMove)
      elementRef.value.removeEventListener('mouseenter', handleMouseEnter)
      elementRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return {
    glowX,
    glowY,
    isHovering,
  }
}
