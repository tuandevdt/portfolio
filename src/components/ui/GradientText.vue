<template>
  <component
    :is="tag"
    class="inline-block gradient-text-animated"
    :class="className"
    :style="{
      backgroundImage: `linear-gradient(${angle}, ${colors.join(', ')})`,
      backgroundSize: animate ? '200% 200%' : '100% 100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: animate ? 'gradientTextShift 3s ease infinite' : 'none',
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: string
  colors?: string[]
  angle?: string
  animate?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  tag: 'span',
  colors: () => ['#8b5cf6', '#06b6d4', '#22d3ee'],
  angle: '135deg',
  animate: true,
  className: '',
})
</script>

<style scoped>
@keyframes gradientTextShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
