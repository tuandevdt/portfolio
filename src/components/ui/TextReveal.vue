<template>
  <component :is="tag" ref="textContainer" class="text-reveal-container">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="inline-block overflow-hidden align-top"
    >
      <span
        class="reveal-word inline-block translate-y-[110%] opacity-0"
      >
        {{ word }}
      </span>
      <span v-if="index < words.length - 1">&nbsp;</span>
    </span>
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

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
let trigger: ScrollTrigger | null = null

const words = computed(() => props.text.trim().split(/\s+/))

onMounted(() => {
  if (prefersReducedMotion.value || !textContainer.value) {
    // If reduced motion, just show the words immediately
    if (textContainer.value) {
      const wordElements = textContainer.value.querySelectorAll('.reveal-word')
      gsap.set(wordElements, { y: '0%', opacity: 1 })
    }
    return
  }

  const element = textContainer.value
  const wordElements = element.querySelectorAll('.reveal-word')

  // Setup GSAP animation
  trigger = ScrollTrigger.create({
    trigger: element,
    start: 'top 90%',
    onEnter: () => {
      gsap.to(wordElements, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        delay: props.delay,
      })
      trigger?.disconnect()
    }
  })
})

onUnmounted(() => {
  if (trigger) {
    trigger.kill()
  }
})
</script>

<style scoped>
.text-reveal-container {
  visibility: visible;
}
</style>
