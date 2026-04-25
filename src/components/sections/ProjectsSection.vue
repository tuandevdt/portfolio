<template>
  <section id="projects" class="section-shell">
    <div class="container-custom">
      <div class="space-y-10">
        <AnimateOnScroll>
          <SectionTitle
            :eyebrow="siteContent.projects.eyebrow"
            :title="siteContent.projects.title"
            :description="siteContent.projects.description"
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="surface-panel-soft rounded-[1.5rem] p-6 md:p-7">
            <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Archive note</p>
            <p class="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              {{ siteContent.projects.archiveNote }}
            </p>
          </div>
        </AnimateOnScroll>

        <div class="grid gap-5 lg:grid-cols-3">
          <AnimateOnScroll v-for="project in siteContent.projects.items" :key="project.slug">
            <SpotlightCard as="article" class="surface-panel project-card flex h-full flex-col rounded-[1.6rem] p-6 md:p-7">
              <div class="flex items-center justify-between gap-4">
                <span class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">{{ project.slug }}</span>
                <span class="status-pill" :class="statusClass(project.status)">
                  {{ project.status }}
                </span>
              </div>

              <h3 class="mt-6 text-2xl font-semibold text-white">{{ project.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                {{ project.summary }}
              </p>
              <p class="mt-4 text-sm leading-7 text-slate-500">
                {{ project.note }}
              </p>

              <div class="tag-list mt-6">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>

              <div class="mt-8 flex flex-wrap gap-3 pt-4">
                <template v-for="link in project.links" :key="`${project.slug}-${link.label}`">
                  <a
                    v-if="link.href"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-chip"
                  >
                    {{ link.label }}
                  </a>
                  <span v-else class="muted-chip">
                    {{ link.label }}
                  </span>
                </template>
              </div>
            </SpotlightCard>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import SpotlightCard from '../ui/SpotlightCard.vue'
import { siteContent, type ProjectLinkStatus } from '../../content/siteContent'

const statusClass = (status: ProjectLinkStatus) => {
  if (status === 'todo') return 'status-pill--todo'
  if (status === 'private') return 'status-pill--private'
  return 'status-pill--case-study'
}
</script>
