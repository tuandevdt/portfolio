<template>
  <footer class="relative pb-10 pt-8">
    <div class="container-custom">
      <div class="editorial-divider mb-8"></div>

      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div class="space-y-4">
          <div class="eyebrow">Footer</div>
          <h3 class="display-font text-2xl font-bold text-white">Tuan Dev</h3>
          <p class="max-w-2xl text-sm leading-7 text-slate-400">
            {{ siteContent.footer.blurb }}
          </p>
          <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">
            {{ siteContent.footer.note }}
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2">
          <div>
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Navigation</p>
            <ul class="space-y-3">
              <li v-for="item in siteContent.nav" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  @click.prevent="scrollToSection(item.id)"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Profiles</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in siteContent.socials"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="link-chip"
              >
                {{ social.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-white/6 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {{ currentYear }} Tuan Dev. Dark editorial portfolio v1.</p>
        <p class="mono-text uppercase tracking-[0.16em]">
          Real case studies and public email replace TODO slots next.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteContent } from '../../content/siteContent'
import { scrollToSection } from '../../utils/scroll'

const currentYear = new Date().getFullYear()
</script>
