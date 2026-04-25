<template>
  <Preloader />
  <CustomCursor />
  <div class="app-shell">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import TechStackSection from './components/sections/TechStackSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Preloader from './components/ui/Preloader.vue'
import CustomCursor from './components/ui/CustomCursor.vue'
import { useReducedMotion } from './composables/useReducedMotion'

const prefersReducedMotion = useReducedMotion()

let lenis: Lenis | null = null
let animationFrameId = 0

onMounted(() => {
  if (prefersReducedMotion.value) return

  lenis = new Lenis({
    duration: 1.15,
    easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.2,
  })

  const raf = (time: number) => {
    lenis?.raf(time)
    animationFrameId = requestAnimationFrame(raf)
  }

  animationFrameId = requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  lenis?.destroy()
})
</script>
