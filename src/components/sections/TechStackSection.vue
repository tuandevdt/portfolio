<template>
  <section id="techstack" class="relative py-32 lg:py-40 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-[200px] pointer-events-none"></div>

    <div class="container-custom">
      <AnimateOnScroll>
        <SectionTitle
          :title="t.techstack.sectionTitle"
          :subtitle="t.techstack.sectionSubtitle"
          :description="t.techstack.sectionDesc"
        />
      </AnimateOnScroll>

      <!-- Category Tabs -->
      <AnimateOnScroll>
        <div class="flex flex-wrap justify-center gap-4 mb-16 px-3">
          <button v-for="cat in categoryTabs" :key="cat.key"
            class="px-6 md:px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer"
            :class="[activeCategory === cat.key ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/20' : 'glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5']"
            @click="activeCategory = cat.key">
            {{ cat.label }}
          </button>
        </div>
      </AnimateOnScroll>

      <!-- Tech Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-7">
        <TransitionGroup name="tech-grid">
          <div v-for="tech in filteredTechs" :key="tech.name" class="h-full">
            <GlowCard class="tech-icon-card h-full p-7 rounded-[1.5rem] text-center cursor-default group" :glow-color="`${tech.color}15`" :border-color="`${tech.color}30`">
              <div class="flex flex-col items-center gap-5">
                <div class="w-16 h-16 flex items-center justify-center">
                  <img :src="tech.icon" :alt="tech.name" class="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110" :style="{ filter: tech.name === 'Express' || tech.name === 'Django' ? 'invert(1)' : 'none' }" loading="lazy" />
                </div>
                <span class="text-sm md:text-[0.95rem] font-medium text-slate-300 group-hover:text-white transition-colors">{{ tech.name }}</span>
                <div class="w-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" :style="{ backgroundColor: tech.color }"></div>
              </div>
            </GlowCard>
          </div>
        </TransitionGroup>
      </div>

      <!-- Stats -->
      <AnimateOnScroll>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-7 mt-16">
          <div v-for="stat in stats" :key="stat.label" class="text-center glass rounded-[1.5rem] p-7 md:p-8 border border-white/5 hover:border-white/10 transition-colors">
            <div class="text-4xl font-bold gradient-text mb-2">{{ stat.value }}</div>
            <div class="text-sm text-slate-400">{{ stat.label }}</div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import GlowCard from '../ui/GlowCard.vue'
import { techStack } from '../../data/techStack'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const categoryTabs = computed(() => [
  { key: 'all' as const, label: t.value.techstack.all },
  { key: 'frontend' as const, label: t.value.techstack.frontend },
  { key: 'backend' as const, label: t.value.techstack.backend },
  { key: 'database' as const, label: t.value.techstack.database },
  { key: 'tools' as const, label: t.value.techstack.tools },
])

const activeCategory = ref<string>('all')
const filteredTechs = computed(() => {
  if (activeCategory.value === 'all') return techStack
  return techStack.filter((t) => t.category === activeCategory.value)
})
const stats = [
  { value: '24+', label: 'Technologies' },
  { value: '4+', label: 'Categories' },
  { value: '∞', label: 'Learning' },
  { value: '💯', label: 'Passion' },
]
</script>

<style scoped>
.tech-grid-enter-active, .tech-grid-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.tech-grid-enter-from { opacity: 0; transform: scale(0.8) translateY(20px); }
.tech-grid-leave-to { opacity: 0; transform: scale(0.8) translateY(-20px); }
.tech-grid-move { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
</style>
