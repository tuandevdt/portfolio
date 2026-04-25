<template>
  <div class="custom-cursor hidden lg:block pointer-events-none fixed inset-0 z-[10000]">
    <div
      ref="cursorDot"
      class="cursor-dot absolute w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      ref="cursorRing"
      class="cursor-ring absolute w-8 h-8 border border-cyan-400/50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
      :class="{ 'scale-[1.5] border-purple-400 bg-purple-400/10': isHovering }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const cursorDot = ref<HTMLElement | null>(null)
const cursorRing = ref<HTMLElement | null>(null)
const isHovering = ref(false)

onMounted(() => {
  const onMouseMove = (e: MouseEvent) => {
    if (cursorDot.value && cursorRing.value) {
      gsap.to(cursorDot.value, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })
      gsap.to(cursorRing.value, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
      })
    }
  }

  const onMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const clickableElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT']
    if (
      clickableElements.includes(target.tagName) ||
      target.closest('a') ||
      target.closest('button') ||
      target.closest('.magnetic-btn') ||
      target.closest('.icon-button') ||
      target.closest('.glow-card-wrapper')
    ) {
      isHovering.value = true
    } else {
      isHovering.value = false
    }
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseover', onMouseOver)
  })
})
</script>
