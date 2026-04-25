<template>
  <section id="hero" class="section-shell overflow-hidden !pt-40 md:!pt-[11.5rem]">
    <div class="container-custom relative z-10">
      <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-16">
        <AnimateOnScroll class="space-y-8">
          <div class="space-y-5">
            <div class="flex items-center gap-5">
              <!-- TODO: Thay ảnh Avatar lớn của bạn ở đây -->
              <div class="relative flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-xl ring-1 ring-white/5">
                <!-- Bạn có thể xóa thẻ SVG này đi và thay bằng thẻ img: 
                     <img src="/anh-chan-dung.jpg" alt="Tuan Dev" class="h-full w-full object-cover" /> 
                -->
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div class="flex flex-col items-start gap-3">
                <span class="eyebrow">{{ siteContent.hero.eyebrow }}</span>
                <span class="editorial-label">{{ siteContent.contact.availability }}</span>
              </div>
            </div>
            <h1 class="display-title text-gradient max-w-5xl text-white">{{ siteContent.hero.title }}</h1>
            <p class="max-w-2xl text-lg font-semibold text-slate-200 md:text-xl">
              {{ siteContent.hero.summary }}
            </p>
            <p class="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              {{ siteContent.hero.description }}
            </p>
          </div>

          <div class="flex flex-col gap-4 sm:flex-row">
            <a :href="siteContent.hero.primaryCta.href" class="button-primary" @click.prevent="scrollToSection('projects')">
              {{ siteContent.hero.primaryCta.label }}
            </a>
            <a :href="siteContent.hero.secondaryCta.href" class="button-secondary" @click.prevent="scrollToSection('contact')">
              {{ siteContent.hero.secondaryCta.label }}
            </a>
          </div>

          <div class="surface-panel-soft rounded-[1.5rem] p-5 md:p-6">
            <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Implementation note</p>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              {{ siteContent.hero.note }}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll class="hero-visual relative flex flex-col items-center justify-center lg:justify-end">
          <!-- TÙY CHỌN ẢNH ĐỨNG TỰ DO (XÓA PHÔNG) 
               Khung bên phải giờ đây không bị giới hạn trong viền nữa.
               Lời khuyên: Hãy chèn một ảnh chân dung hoặc toàn thân ĐÃ XÓA PHÔNG (.png) vào biến heroArtwork.
               Ảnh sẽ hiển thị cực kỳ to, rõ ràng và có hiệu ứng đổ bóng hòa vào nền web.
          -->
          <div class="relative w-full max-w-[480px]">
            <ParallaxElement :speed="-0.1">
              <img 
                :src="heroArtwork" 
                alt="Tuan Dev Portrait" 
                class="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              />
            </ParallaxElement>
          </div>
          <div class="mt-8 grid w-full gap-4 sm:grid-cols-2">
            <div class="glass-rule rounded-[1.25rem] p-4">
              <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Approach</p>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                Less glow, clearer hierarchy, and UI surfaces that feel intentional instead of decorative.
              </p>
            </div>
            <div class="glass-rule rounded-[1.25rem] p-4">
              <p class="mono-text text-xs uppercase tracking-[0.18em] text-slate-500">Content strategy</p>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                Real channels stay live. Missing proof stays marked as TODO instead of pretending to exist.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll class="mt-12 md:mt-14">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <SpotlightCard v-for="item in siteContent.hero.proofItems" :key="item.label" class="surface-panel-soft metric-card rounded-[1.4rem] p-5">
            <p class="mono-text text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">{{ item.label }}</p>
            <p class="mt-3 text-lg font-semibold text-white md:text-xl">{{ item.value }}</p>
          </SpotlightCard>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroArtwork from '../../assets/hero.png'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import ParallaxElement from '../ui/ParallaxElement.vue'
import SpotlightCard from '../ui/SpotlightCard.vue'
import { siteContent } from '../../content/siteContent'
import { scrollToSection } from '../../utils/scroll'
</script>
