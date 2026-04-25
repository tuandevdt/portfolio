<template>
  <div
    v-if="!isDone"
    ref="preloader"
    class="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030303]"
  >
    <!-- Logo or text -->
    <div class="relative overflow-hidden mb-6">
      <h1 ref="textRef" class="text-4xl md:text-6xl font-black tracking-tighter text-white translate-y-full opacity-0">
        TUẤN <span class="text-purple-500">DEV</span>
      </h1>
    </div>

    <!-- Progress bar -->
    <div class="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
      <div
        ref="progressBar"
        class="h-full bg-gradient-to-r from-purple-500 to-cyan-500 w-0"
      ></div>
    </div>
    
    <div class="mt-4 text-sm text-slate-500 font-mono">
      {{ progress }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const isDone = ref(false)
const preloader = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const progress = ref(0)

onMounted(() => {
  // Hide scrollbar during preload
  document.body.style.overflow = 'hidden'

  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = ''
      setTimeout(() => {
        isDone.value = true
      }, 500)
    }
  })

  // Reveal text
  tl.to(textRef.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Animate progress bar
  tl.to(
    progressBar.value,
    {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function () {
        progress.value = Math.round(this.progress() * 100)
      },
    },
    '-=0.2'
  )

  // Slide out preloader
  tl.to(preloader.value, {
    yPercent: -100,
    duration: 0.8,
    ease: 'power4.inOut',
  })
})
</script>
