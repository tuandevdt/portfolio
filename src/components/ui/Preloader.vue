<template>
  <div
    v-if="shouldRender"
    ref="preloader"
    class="fixed inset-0 z-[99999] flex items-center justify-center bg-[#090b10]"
  >
    <div class="w-full max-w-sm px-6 text-center">
      <p ref="eyebrowRef" class="mono-text text-xs uppercase tracking-[0.28em] text-slate-500 opacity-0">
        Tuan Dev
      </p>
      <h1 ref="textRef" class="display-font mt-5 text-4xl font-bold text-white opacity-0 md:text-5xl">
        Loading the editorial build.
      </h1>
      <div class="mt-8 h-px overflow-hidden rounded-full bg-white/8">
        <div ref="progressBar" class="h-full w-0 bg-gradient-to-r from-orange-500 via-orange-300 to-sky-300"></div>
      </div>
      <p class="mono-text mt-4 text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {{ progress }}%
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useReducedMotion } from '../../composables/useReducedMotion'

const shouldRender = ref(true)
const preloader = ref<HTMLElement | null>(null)
const eyebrowRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const progress = ref(0)
const prefersReducedMotion = useReducedMotion()

onMounted(() => {
  if (prefersReducedMotion.value) {
    shouldRender.value = false
    return
  }

  shouldRender.value = true
  document.body.style.overflow = 'hidden'

  const timeline = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = ''
      shouldRender.value = false
    },
  })

  timeline.to(eyebrowRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.45,
    ease: 'power2.out',
  })

  timeline.to(textRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.65,
    ease: 'power3.out',
  }, '-=0.2')

  timeline.to(
    progressBar.value,
    {
      width: '100%',
      duration: 0.85,
      ease: 'power2.inOut',
      onUpdate() {
        progress.value = Math.round(this.progress() * 100)
      },
    },
    '-=0.1',
  )

  timeline.to(preloader.value, {
    autoAlpha: 0,
    duration: 0.42,
    ease: 'power4.inOut',
  })
})
</script>
