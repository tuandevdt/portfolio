<template>
  <component :is="tag" ref="textContainer" class="text-reveal-container">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="inline-block overflow-hidden align-top"
    >
      <span class="reveal-word inline-block opacity-0">{{ word }}</span>
      <span v-if="index < words.length - 1">&nbsp;</span>
    </span>
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { useReducedMotion } from '../../composables/useReducedMotion'

interface Props {
  tag?: string
  text: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  delay: 0,
})

const textContainer = ref<HTMLElement | null>(null)
const prefersReducedMotion = useReducedMotion()
let observer: IntersectionObserver | null = null

const words = computed(() => props.text.trim().split(/\s+/))

onMounted(() => {
  if (!textContainer.value) return

  const element = textContainer.value
  const wordElements = element.querySelectorAll('.reveal-word')

  if (prefersReducedMotion.value) {
    gsap.set(wordElements, { opacity: 1, y: 0 })
    return
  }

  // Set initial state via GSAP to avoid Tailwind conflict
  gsap.set(wordElements, { y: '110%', opacity: 0 })

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(wordElements, {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out',
          delay: props.delay,
        })
        observer?.disconnect()
      }
    },
    { threshold: 0.1 }
  )

  observer.observe(element)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.text-reveal-container {
  visibility: visible;
}
</style>
