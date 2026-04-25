<template>
  <section id="contact" class="relative py-32 lg:py-40 overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container-custom">
      <AnimateOnScroll>
        <SectionTitle
          :title="t.contact.sectionTitle"
          :subtitle="t.contact.sectionSubtitle"
          :description="t.contact.sectionDesc"
        />
      </AnimateOnScroll>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <AnimateOnScroll>
          <div class="stack-lg">
            <h3 class="text-2xl font-bold text-white">{{ t.contact.heading }}</h3>
            <p class="text-slate-400 leading-relaxed text-base">{{ t.contact.description }}</p>

            <!-- Contact cards -->
            <div class="space-y-6">
              <GlowCard v-for="info in contactInfo" :key="info.label" class="p-6 rounded-2xl">
                <div class="flex items-center gap-4">
                  <div class="rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0" style="width: 56px; height: 56px;">
                    <component :is="info.iconComp" :size="22" class="text-purple-400" />
                  </div>
                  <div class="stack-sm">
                    <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ info.label }}</p>
                    <a :href="info.href" class="text-sm md:text-base text-white font-medium hover:text-purple-400 transition-colors">{{ info.value }}</a>
                  </div>
                </div>
              </GlowCard>
            </div>

            <!-- Social links -->
            <div class="flex gap-4 pt-2 flex-wrap">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
                class="icon-button"
                :aria-label="social.name">
                <component :is="getIcon(social.icon)" :size="20" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        <!-- Contact Form -->
        <AnimateOnScroll>
          <GlowCard class="p-8 md:p-9 lg:p-10 rounded-[1.75rem]">
            <form @submit.prevent="handleSubmit" class="space-y-7">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="stack-sm">
                  <label for="name" class="block text-sm font-medium text-slate-300">{{ t.contact.formName }}</label>
                  <input id="name" v-model="form.name" type="text" required :placeholder="t.contact.formNamePlaceholder"
                    class="control-field text-sm md:text-base" />
                </div>
                <div class="stack-sm">
                  <label for="email" class="block text-sm font-medium text-slate-300">{{ t.contact.formEmail }}</label>
                  <input id="email" v-model="form.email" type="email" required :placeholder="t.contact.formEmailPlaceholder"
                    class="control-field text-sm md:text-base" />
                </div>
              </div>
              <div class="stack-sm">
                <label for="message" class="block text-sm font-medium text-slate-300">{{ t.contact.formMessage }}</label>
                <textarea id="message" v-model="form.message" required rows="5" :placeholder="t.contact.formMessagePlaceholder"
                  class="control-field control-field--textarea text-sm md:text-base"></textarea>
              </div>
              <button type="submit"
                class="w-full min-h-[3.5rem] px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                {{ t.contact.formSubmit }}
              </button>
            </form>
          </GlowCard>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, type FunctionalComponent } from 'vue'
import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-vue-next'
import SectionTitle from '../common/SectionTitle.vue'
import AnimateOnScroll from '../common/AnimateOnScroll.vue'
import GlowCard from '../ui/GlowCard.vue'
import { socialLinks } from '../../data/socialLinks'
import { useI18n } from '../../i18n'

const { t } = useI18n()
const form = ref({ name: '', email: '', message: '' })

const contactInfo = computed(() => [
  { label: t.value.contact.email, value: 'tuandev@example.com', href: 'mailto:tuandev@example.com', iconComp: Mail },
  { label: t.value.contact.address, value: t.value.contact.addressValue, href: '#', iconComp: MapPin },
  { label: t.value.contact.phone, value: '+84 xxx xxx xxx', href: 'tel:+84xxxxxxxxx', iconComp: Phone },
])

const iconMap: Record<string, FunctionalComponent | typeof Github> = { Github, Linkedin, Mail, Facebook }
const getIcon = (name: string) => iconMap[name] || Mail

const handleSubmit = () => {
  alert(t.value.contact.formSuccess)
  form.value = { name: '', email: '', message: '' }
}
</script>
