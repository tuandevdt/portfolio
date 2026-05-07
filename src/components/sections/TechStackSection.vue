<template>
  <section id="capabilities" class="section-shell">
    <div class="container-custom">
      <div class="space-y-10">
        <AnimateOnScroll>
          <SectionTitle
            :eyebrow="siteContent.capabilities.eyebrow"
            :title="siteContent.capabilities.title"
            :description="siteContent.capabilities.description"
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="grid gap-5 lg:grid-cols-3">
            <SpotlightCard
              as="article"
              v-for="group in siteContent.capabilities.groups"
              :key="group.title"
              class="surface-panel capability-card rounded-[1.6rem] p-6 md:p-7"
            >
              <div class="flex items-center justify-between gap-3">
                <span class="mono-text text-sm text-slate-500">{{ group.number }}</span>
                <span class="status-pill status-pill--case-study">Working set</span>
              </div>
              <h3 class="mt-6 text-2xl font-semibold text-white">{{ group.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-slate-400 md:text-base">
                {{ group.summary }}
              </p>
              <ul class="mt-6 space-y-3 text-sm text-slate-300">
                <li v-for="item in group.items" :key="item" class="flex items-center gap-3">
                  <span class="h-2 w-2 rounded-full bg-orange-400"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </SpotlightCard>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="surface-panel-soft rounded-[1.5rem] p-6 md:p-7">
            <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Philosophy</p>
            <p class="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              Capabilities are organized by delivery function — how the work actually ships — rather than a flat list of tool logos. Each group reflects a real layer of the development workflow, from pixel-perfect interfaces to production-ready APIs and deployment pipelines.
            </p>
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
