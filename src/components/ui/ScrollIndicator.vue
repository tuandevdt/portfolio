<template>
  <div class="scroll-indicator" @click="scrollDown">
    <div class="scroll-mouse">
      <div class="scroll-dot"></div>
    </div>
    <div class="scroll-arrows">
      <span class="scroll-arrow"></span>
      <span class="scroll-arrow"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-mouse {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(139, 92, 246, 0.5);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: linear-gradient(180deg, var(--color-accent-purple), var(--color-accent-cyan));
  border-radius: 2px;
  animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.3; }
  100% { transform: translateY(0); opacity: 1; }
}

.scroll-arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.scroll-arrow {
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--color-accent-purple);
  border-bottom: 2px solid var(--color-accent-cyan);
  transform: rotate(45deg);
  animation: scrollArrow 2s ease-in-out infinite;
}

.scroll-arrow:nth-child(2) {
  animation-delay: 0.2s;
  opacity: 0.5;
}

@keyframes scrollArrow {
  0% { transform: rotate(45deg) translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: rotate(45deg) translateY(6px); opacity: 0; }
}
</style>
