<template>
  <section id="about" class="section-shell">
    <div class="container-custom">
      <div class="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
        <AnimateOnScroll class="space-y-8">
          <SectionTitle
            :eyebrow="siteContent.about.eyebrow"
            :title="siteContent.about.title"
            :description="siteContent.about.description"
          />
          <div class="surface-panel-soft detail-card rounded-[1.5rem] p-6 md:p-7">
            <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Principles</p>
            <div class="mt-4 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
              <p v-for="paragraph in siteContent.about.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="grid gap-4 sm:grid-cols-2 grid-equal">
            <SpotlightCard
              as="article"
              v-for="card in siteContent.about.cards"
              :key="card.title"
              class="surface-panel capability-card rounded-[1.5rem] p-6"
            >
              <p class="mono-text text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <h3 class="mt-4 text-xl font-semibold text-white">{{ card.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-slate-400">
                {{ card.description }}
              </p>
            </SpotlightCard>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import SpotlightCard from '../ui/SpotlightCard.vue'
import { siteContent } from '../../content/siteContent'
</script>
