<template>
  <Preloader />
  <CustomCursor />
  <div class="app-wrapper noise-overlay">
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
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import TechStackSection from './components/sections/TechStackSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Preloader from './components/ui/Preloader.vue'
import CustomCursor from './components/ui/CustomCursor.vue'
import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  onUnmounted(() => {
    lenis.destroy()
  })
})
</script>
