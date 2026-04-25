<template>
  <div class="section-title-wrapper text-center mb-20 lg:mb-24 px-2">
    <div class="inline-flex items-center gap-4 mb-5">
      <div class="h-px w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
      <span class="text-xs font-mono uppercase tracking-[0.3em] text-purple-400">{{ subtitle }}</span>
      <div class="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
    </div>
    <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-none">
      <GradientText>{{ title }}</GradientText>
    </h2>
    <p v-if="description" class="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
      {{ description }}
    </p>
    <div class="mt-7 flex justify-center">
      <div class="h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animated-underline"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GradientText from '../ui/GradientText.vue'

interface Props {
  title: string
  subtitle: string
  description?: string
}

defineProps<Props>()
</script>

<style scoped>
.animated-underline {
  animation: underlinePulse 3s ease-in-out infinite;
}

@keyframes underlinePulse {
  0%, 100% { width: 5rem; opacity: 0.8; }
  50% { width: 8rem; opacity: 1; }
}
</style>
