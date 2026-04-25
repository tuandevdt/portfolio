<template>
  <button
    ref="btnRef"
    class="magnetic-btn-wrapper relative inline-flex min-h-[3.5rem] items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 rounded-2xl font-semibold text-sm md:text-[0.95rem] tracking-[0.02em] transition-all duration-300 cursor-pointer"
    :class="[
      variant === 'primary'
        ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/15 hover:shadow-xl hover:shadow-purple-500/25'
        : 'glass border border-white/10 text-white hover:border-white/20 hover:bg-white/8',
      className,
    ]"
    :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  className?: string
  strength?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  className: '',
  strength: 0.3,
})

const btnRef = ref<HTMLElement | null>(null)
const offsetX = ref(0)
const offsetY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (!btnRef.value) return
  const rect = btnRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  offsetX.value = (e.clientX - centerX) * props.strength
  offsetY.value = (e.clientY - centerY) * props.strength
}

const handleMouseLeave = () => {
  offsetX.value = 0
  offsetY.value = 0
}
</script>
