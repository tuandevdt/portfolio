<template>
  <div
    ref="cardRef"
    class="glow-card-wrapper relative rounded-[1.5rem] overflow-hidden border border-white/6 transition-all duration-300 hover:-translate-y-1 hover:border-white/12"
    :class="[glass ? 'glass' : '', className]"
    :style="cardStyle"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <!-- Glow effect following mouse -->
    <div
      v-if="isHovering"
      class="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition-opacity duration-500"
      :class="{ 'opacity-100': isHovering }"
      :style="{
        background: `radial-gradient(600px circle at ${glowX}px ${glowY}px, ${glowColor}, transparent 40%)`,
      }"
    />

    <!-- Border glow -->
    <div
      v-if="isHovering && showBorder"
      class="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition-opacity duration-500"
      :class="{ 'opacity-100': isHovering }"
      :style="{
        background: `radial-gradient(400px circle at ${glowX}px ${glowY}px, ${borderColor}, transparent 40%)`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        padding: '1px',
      }"
    />

    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

interface Props {
  glowColor?: string
  borderColor?: string
  showBorder?: boolean
  glass?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  glowColor: 'rgba(139, 92, 246, 0.08)',
  borderColor: 'rgba(139, 92, 246, 0.2)',
  showBorder: true,
  glass: true,
  className: '',
})

const cardRef = ref<HTMLElement | null>(null)
const isHovering = ref(false)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(cardRef)

const glowX = computed(() => elementX.value)
const glowY = computed(() => elementY.value)

const cardStyle = computed(() => {
  if (isOutside.value || !isHovering.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }

  // Calculate rotation (max 10 degrees)
  const xAxis = (elementWidth.value / 2 - elementX.value) / 15
  const yAxis = (elementY.value - elementHeight.value / 2) / 15

  return {
    transform: `perspective(1000px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>
