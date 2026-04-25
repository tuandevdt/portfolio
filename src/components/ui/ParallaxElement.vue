<template>
  <div ref="container" class="parallax-container h-full w-full">
    <div ref="content" class="parallax-content w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  speed?: number
}

const props = withDefaults(defineProps<Props>(), {
  speed: -0.15,
})

const container = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const prefersReducedMotion = useReducedMotion()
let trigger: ScrollTrigger | null = null

onMounted(() => {
  if (prefersReducedMotion.value || !container.value || !content.value) return

  trigger = ScrollTrigger.create({
    trigger: container.value,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    animation: gsap.fromTo(
      content.value,
      { y: () => `${-props.speed * 100}%` },
      { y: () => `${props.speed * 100}%`, ease: 'none' }
    ),
  })
})

onUnmounted(() => {
  if (trigger) {
    trigger.kill()
  }
})
</script>
