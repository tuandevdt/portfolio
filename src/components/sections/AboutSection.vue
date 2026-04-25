<template>
  <section id="about" class="relative py-32 lg:py-40 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container-custom">
      <AnimateOnScroll>
        <SectionTitle
          :title="t.about.sectionTitle"
          :subtitle="t.about.sectionSubtitle"
          :description="t.about.sectionDesc"
        />
      </AnimateOnScroll>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
        <!-- Left - Avatar & Decoration -->
        <AnimateOnScroll>
          <div class="relative flex justify-center lg:justify-center py-4">
            <!-- Avatar container -->
            <div class="relative">
              <!-- Rotating gradient border -->
              <div class="w-72 h-72 md:w-80 md:h-80 rounded-3xl animate-spin-slow absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-30 blur-sm"></div>

              <!-- Avatar card -->
              <div class="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden glass border border-white/10">
                <div class="w-full h-full bg-gradient-to-br from-purple-600/30 via-cyan-500/20 to-purple-600/30 flex items-center justify-center">
                  <div class="text-center">
                    <div class="text-6xl mb-4">👨‍💻</div>
                    <span class="text-lg font-bold gradient-text">Tuấn Dev</span>
                  </div>
                </div>
              </div>

              <!-- Floating badges -->
              <div class="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 border border-white/10 animate-float text-sm">
                <span class="text-purple-400">⚡</span> Fullstack
              </div>
              <div class="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 border border-white/10 animate-float-delay text-sm">
                <span class="text-cyan-400">🚀</span> Clean Code
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <!-- Right - Content -->
        <AnimateOnScroll>
          <div class="stack-lg">
            <!-- Role badge -->
            <div class="inline-flex items-center gap-3 px-5 py-3 rounded-full glass border border-white/10">
              <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span class="text-sm font-medium text-slate-300">{{ t.about.role }}</span>
            </div>

            <!-- Description -->
            <div class="stack-md text-slate-400 leading-8 text-[1.02rem]">
              <p>
                {{ t.about.p1 }} <span class="text-white font-semibold">{{ t.about.p1Name }}</span>{{ t.about.p1End }}
              </p>
              <p>
                {{ t.about.p2Start }} <span class="text-purple-400 font-medium">{{ t.about.p2WebApps }}</span>,
                <span class="text-cyan-400 font-medium">{{ t.about.p2APIs }}</span>{{ t.about.p2And }}
                <span class="text-pink-400 font-medium">{{ t.about.p2SystemDesign }}</span>{{ t.about.p2End }}
              </p>
              <p>{{ t.about.p3 }}</p>
            </div>

            <!-- Info Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <GlowCard
                v-for="card in infoCards"
                :key="card.title"
                class="p-6 rounded-2xl"
                :glow-color="card.glowColor"
              >
                <div class="flex items-start gap-[1.125rem]">
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    :style="{ background: card.bgColor }"
                  >
                    {{ card.emoji }}
                  </div>
                  <div>
                    <h4 class="text-base font-semibold text-white mb-2">{{ card.title }}</h4>
                    <p class="text-sm text-slate-400 leading-relaxed">{{ card.description }}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import GlowCard from '../ui/GlowCard.vue'
import { useI18n } from '../../i18n'

const { t } = useI18n()

const infoCards = computed(() => [
  {
    emoji: '🎯',
    title: t.value.about.cards.focus,
    description: t.value.about.cards.focusDesc,
    glowColor: 'rgba(139, 92, 246, 0.06)',
    bgColor: 'rgba(139, 92, 246, 0.1)',
  },
  {
    emoji: '📚',
    title: t.value.about.cards.learning,
    description: t.value.about.cards.learningDesc,
    glowColor: 'rgba(6, 182, 212, 0.06)',
    bgColor: 'rgba(6, 182, 212, 0.1)',
  },
  {
    emoji: '💡',
    title: t.value.about.cards.passion,
    description: t.value.about.cards.passionDesc,
    glowColor: 'rgba(236, 72, 153, 0.06)',
    bgColor: 'rgba(236, 72, 153, 0.1)',
  },
  {
    emoji: '🚀',
    title: t.value.about.cards.goal,
    description: t.value.about.cards.goalDesc,
    glowColor: 'rgba(34, 211, 238, 0.06)',
    bgColor: 'rgba(34, 211, 238, 0.1)',
  },
])
</script>
