<template>
  <div v-if="isEnabled" class="pointer-events-none fixed inset-0 z-[10000] hidden lg:block">
    <div
      ref="cursorDot"
      class="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400"
    />
    <div
      ref="cursorRing"
      class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/50 bg-sky-200/5 transition-[width,height,background-color,border-color] duration-200 ease-out"
      :class="isHovering ? 'h-14 w-14 border-orange-300/60 bg-orange-200/10' : ''"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

const cursorDot = ref<HTMLElement | null>(null)
const cursorRing = ref<HTMLElement | null>(null)
const isHovering = ref(false)
const isEnabled = ref(false)
const prefersReducedMotion = useReducedMotion()

let animationFrameId = 0
const pointer = { x: 0, y: 0 }
const ring = { x: 0, y: 0 }

const renderCursor = () => {
  ring.x += (pointer.x - ring.x) * 0.18
  ring.y += (pointer.y - ring.y) * 0.18

  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`
  }

  if (cursorRing.value) {
    cursorRing.value.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
  }

  animationFrameId = requestAnimationFrame(renderCursor)
}

const onMouseMove = (event: MouseEvent) => {
  pointer.x = event.clientX
  pointer.y = event.clientY
}

const onMouseOver = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (
    target.closest('a') ||
    target.closest('button') ||
    target.closest('input') ||
    target.closest('textarea')
  ) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches
  if (prefersReducedMotion.value || !finePointer) return

  isEnabled.value = true
  document.documentElement.classList.add('has-custom-cursor')
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  animationFrameId = requestAnimationFrame(renderCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  cancelAnimationFrame(animationFrameId)
  document.documentElement.classList.remove('has-custom-cursor')
})
</script>
