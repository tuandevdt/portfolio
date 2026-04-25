<template>
  <div class="max-w-3xl" :class="align === 'center' ? 'mx-auto text-center' : 'text-left'">
    <span class="eyebrow mb-5">{{ eyebrow }}</span>
    <TextReveal tag="h2" class="section-heading text-white mb-5" :text="title" />
    <p v-if="description" class="lead-text">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import TextReveal from '../ui/TextReveal.vue'

interface Props {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left',
})
</script>
