<template>
  <div ref="el" class="reveal" :class="{ 'is-visible': isVisible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

interface Props {
  rootMargin?: string
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.18,
})

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const prefersReducedMotion = useReducedMotion()
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (prefersReducedMotion.value) {
    isVisible.value = true
    return
  }

  if (!el.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin,
    },
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
