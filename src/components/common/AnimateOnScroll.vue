<template>
  <div ref="el" class="animate-on-scroll" :class="{ visible: isVisible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  threshold?: number
  rootMargin?: string
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
})

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  useIntersectionObserver(
    el,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin,
    }
  )
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
