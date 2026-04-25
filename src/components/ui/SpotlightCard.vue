<template>
  <component
    :is="as"
    ref="cardRef"
    class="spotlight-card group relative overflow-hidden"
  >
    <!-- Inner soft glow -->
    <div
      v-if="!prefersReducedMotion"
      class="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
      }"
    />
    <!-- Border glow -->
    <div
      v-if="!prefersReducedMotion"
      class="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style="mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);"
      :style="{
        background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.18), transparent 40%)`,
      }"
    />
    <div class="relative z-10 h-full w-full">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { useReducedMotion } from '../../composables/useReducedMotion'

interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'div',
})

const cardRef = ref<HTMLElement | null>(null)
const prefersReducedMotion = useReducedMotion()

const { elementX, elementY } = useMouseInElement(cardRef)

const mouseX = computed(() => elementX.value)
const mouseY = computed(() => elementY.value)
</script>

<style scoped>
.spotlight-card {
  border-radius: inherit;
}
</style>
