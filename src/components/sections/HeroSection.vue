<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
    <!-- Animated background orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px] animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] animate-float-slow"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] animate-pulse-glow"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <!-- Floating code decoration -->
    <div class="absolute top-24 right-16 hidden lg:block code-decoration animate-float-delay">
      <div class="glass rounded-xl px-5 py-4 border border-white/5">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-3 h-3 rounded-full bg-red-400/60"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-400/60"></span>
          <span class="w-3 h-3 rounded-full bg-green-400/60"></span>
        </div>
        <pre class="text-[11px] leading-relaxed"><span class="text-purple-400">const</span> <span class="text-cyan-300">developer</span> = {
  <span class="text-green-400">name</span>: <span class="text-amber-300">"Tuấn Dev"</span>,
  <span class="text-green-400">role</span>: <span class="text-amber-300">"Fullstack"</span>,
  <span class="text-green-400">passion</span>: <span class="text-amber-300">"∞"</span>
};</pre>
      </div>
    </div>

    <!-- Floating decoration left -->
    <div class="absolute bottom-36 left-16 hidden lg:block code-decoration animate-float">
      <div class="glass rounded-xl px-5 py-4 border border-white/5">
        <pre class="text-[11px] leading-relaxed"><span class="text-cyan-400">$</span> <span class="text-slate-300">git commit -m</span>
  <span class="text-green-400">"building amazing things"</span>
<span class="text-cyan-400">$</span> <span class="text-slate-300">git push origin main</span>
  <span class="text-purple-400">✓</span> <span class="text-slate-400">deployed</span></pre>
      </div>
    </div>

    <!-- Main content -->
    <div class="container-custom relative z-10 text-center py-28 md:py-32 lg:py-36">
      <!-- Status badge -->
      <div class="hero-badge inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full glass border border-white/10 mb-8">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
        </span>
        <span class="text-sm font-medium text-slate-300">{{ t.hero.available }}</span>
      </div>

      <!-- Greeting -->
      <p class="hero-greeting text-lg md:text-xl text-slate-400 mb-5 font-light">
        {{ t.hero.greeting }}
      </p>

      <!-- Name -->
      <h1 class="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black mb-10 tracking-tight">
        <GradientText
          :colors="['#8b5cf6', '#06b6d4', '#22d3ee', '#8b5cf6']"
          class="leading-tight"
        >
          TUẤN DEV
        </GradientText>
      </h1>

      <!-- TypeWriter -->
      <div class="hero-typewriter mb-8">
        <TypeWriter
          :texts="t.hero.roles"
          prefix=">"
          :typing-speed="70"
          :deleting-speed="35"
          :pause-time="2500"
        />
      </div>

      <!-- Description -->
      <p class="hero-desc text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed px-2">
        {{ t.hero.description }}
        <span class="text-purple-400">{{ t.hero.cleanCode }}</span> &
        <span class="text-cyan-400">{{ t.hero.performance }}</span> {{ t.hero.priority }}
      </p>

      <!-- CTA Buttons -->
      <div class="hero-buttons flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
        <MagneticButton variant="primary" class-name="w-full sm:w-auto sm:min-w-[12.5rem]" @click="scrollTo('projects')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          {{ t.hero.viewProjects }}
        </MagneticButton>
        <MagneticButton variant="secondary" class-name="w-full sm:w-auto sm:min-w-[12.5rem]" @click="scrollTo('contact')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {{ t.hero.contactMe }}
        </MagneticButton>
      </div>

      <!-- Tech stack mini preview -->
      <div class="hero-techs inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap px-6 py-5 rounded-[1.75rem] glass border border-white/5">
        <span class="text-xs text-slate-500 uppercase tracking-widest">{{ t.hero.techStack }}</span>
        <div class="flex items-center justify-center gap-3 flex-wrap">
          <div
            v-for="tech in previewTechs"
            :key="tech.name"
            class="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:border-purple-500/30 hover:scale-110 transition-all duration-300 group"
            :title="tech.name"
          >
            <img :src="tech.icon" :alt="tech.name" class="w-[22px] h-[22px] opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16">
        <ScrollIndicator />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import GradientText from '../ui/GradientText.vue'
import TypeWriter from '../ui/TypeWriter.vue'
import MagneticButton from '../ui/MagneticButton.vue'
import ScrollIndicator from '../ui/ScrollIndicator.vue'
import { techStack } from '../../data/techStack'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const previewTechs = techStack.filter((tech) =>
  ['React', 'Vue.js', 'Node.js', 'Python', 'TypeScript', 'Docker', 'PostgreSQL'].includes(tech.name)
)

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
    .fromTo('.hero-greeting', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
    .fromTo('.hero-name', { y: 50, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, '-=0.5')
    .fromTo('.hero-typewriter', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
    .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
    .fromTo('.hero-buttons', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
    .fromTo('.hero-techs', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
})
</script>
