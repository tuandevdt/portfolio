<template>
  <section id="projects" class="relative py-32 lg:py-40 overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container-custom">
      <AnimateOnScroll>
        <SectionTitle
          :title="t.projects.sectionTitle"
          :subtitle="t.projects.sectionSubtitle"
          :description="t.projects.sectionDesc"
        />
      </AnimateOnScroll>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <AnimateOnScroll v-for="project in projects" :key="project.id">
          <GlowCard class="rounded-[1.75rem] overflow-hidden group h-full" :glow-color="'rgba(139,92,246,0.06)'">
            <!-- Project Image -->
            <div class="relative h-56 overflow-hidden" :class="`bg-gradient-to-br ${project.gradient}`">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-500/20 flex items-center justify-center">
                <div class="w-16 h-16 rounded-2xl glass border border-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white/70"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                </div>
              </div>
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="icon-button w-12 h-12 rounded-2xl !bg-white/10 !border-white/15 text-white hover:!bg-white/20 hover:!border-white/25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="icon-button w-12 h-12 rounded-2xl !bg-white/10 !border-white/15 text-white hover:!bg-white/20 hover:!border-white/25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>

            <!-- Content -->
            <div class="p-7">
              <h3 class="text-lg font-bold text-white mb-3.5 group-hover:text-purple-300 transition-colors">{{ project.title }}</h3>
              <p class="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2.5">
                <span v-for="tech in project.techs" :key="tech" class="pill-tag text-[11px] font-medium">
                  {{ tech }}
                </span>
              </div>
            </div>
          </GlowCard>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import GlowCard from '../ui/GlowCard.vue'
import { projects } from '../../data/projects'
import { useI18n } from '../../i18n'

const { t } = useI18n()
</script>
