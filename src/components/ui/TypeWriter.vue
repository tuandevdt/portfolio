<template>
  <span class="typewriter-text">
    <span class="typewriter-prefix" v-if="prefix">{{ prefix }}</span>
    <span class="typewriter-dynamic gradient-text">{{ displayText }}</span>
    <span class="typewriter-cursor" :class="{ 'cursor-blink': !isTyping }">|</span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  texts: string[]
  prefix?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

const props = withDefaults(defineProps<Props>(), {
  prefix: '',
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseTime: 2000,
})

const displayText = ref('')
const isTyping = ref(true)
let currentTextIndex = 0
let currentCharIndex = 0
let timeoutId: ReturnType<typeof setTimeout> | null = null
let isDeleting = false

const type = () => {
  const currentWord = props.texts[currentTextIndex]

  if (!isDeleting) {
    displayText.value = currentWord.substring(0, currentCharIndex + 1)
    currentCharIndex++
    isTyping.value = true

    if (currentCharIndex === currentWord.length) {
      isTyping.value = false
      isDeleting = true
      timeoutId = setTimeout(type, props.pauseTime)
      return
    }
    timeoutId = setTimeout(type, props.typingSpeed)
  } else {
    displayText.value = currentWord.substring(0, currentCharIndex - 1)
    currentCharIndex--
    isTyping.value = true

    if (currentCharIndex === 0) {
      isDeleting = false
      currentTextIndex = (currentTextIndex + 1) % props.texts.length
      timeoutId = setTimeout(type, props.typingSpeed * 2)
      return
    }
    timeoutId = setTimeout(type, props.deletingSpeed)
  }
}

onMounted(() => {
  timeoutId = setTimeout(type, 500)
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<style scoped>
.typewriter-text {
  font-family: var(--font-mono);
}

.typewriter-prefix {
  color: var(--color-text-secondary);
  margin-right: 0.5rem;
}

.typewriter-cursor {
  color: var(--color-accent-cyan);
  font-weight: 300;
  margin-left: 2px;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
