<template>
  <section id="contact" class="section-shell">
    <div class="container-custom">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
        <AnimateOnScroll class="space-y-7">
          <SectionTitle
            :eyebrow="siteContent.contact.eyebrow"
            :title="siteContent.contact.title"
            :description="siteContent.contact.description"
          />

          <div class="surface-panel-soft rounded-[1.5rem] p-6 md:p-7">
            <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Availability</p>
            <p class="mt-4 text-base leading-8 text-slate-200">
              {{ siteContent.contact.availability }}
            </p>
            <p class="mt-4 text-sm leading-7 text-slate-500">
              {{ siteContent.contact.footerNote }}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="grid gap-4">
            <SpotlightCard
              as="article"
              v-for="channel in siteContent.contact.channels"
              :key="channel.label"
              class="surface-panel contact-card rounded-[1.45rem] p-5 md:p-6"
            >
              <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <component :is="iconMap[channel.icon]" :size="20" class="text-slate-200" />
                  </div>
                  <div>
                    <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">{{ channel.label }}</p>
                    <a
                      v-if="channel.href"
                      :href="channel.href"
                      class="mt-2 inline-flex text-base font-semibold text-white transition-colors hover:text-sky-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ channel.value }}
                    </a>
                    <p v-else class="mt-2 text-base font-semibold text-white">{{ channel.value }}</p>
                    <p v-if="channel.note" class="mt-2 text-sm leading-7 text-slate-500">{{ channel.note }}</p>
                  </div>
                </div>

                <span v-if="channel.href" class="status-pill status-pill--case-study">
                  live
                </span>
              </div>
            </SpotlightCard>

            <div class="surface-panel-soft rounded-[1.5rem] p-6 md:p-7">
              <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Direct actions</p>
              <div class="mt-5 flex flex-col gap-4 sm:flex-row">
                <a
                  :href="siteContent.contact.primaryCta.href"
                  class="button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ siteContent.contact.primaryCta.label }}
                </a>
                <a
                  :href="siteContent.contact.secondaryCta.href"
                  class="button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ siteContent.contact.secondaryCta.label }}
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { Mail, MapPin, Clock4, Github, Linkedin } from 'lucide-vue-next'
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import SpotlightCard from '../ui/SpotlightCard.vue'
import { siteContent } from '../../content/siteContent'

const iconMap: Record<string, Component> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  'map-pin': MapPin,
  'clock-4': Clock4,
}
</script>
