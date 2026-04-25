<template>
  <footer class="relative border-t border-white/5 bg-[#08080d]">
    <!-- Gradient line on top -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

    <div class="container-custom py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        <!-- Brand -->
        <div class="stack-md">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg">
              T
            </div>
            <span class="text-xl font-bold">
              <span class="text-white">Tuấn</span><span class="gradient-text">Dev</span>
            </span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed max-w-xs">
            {{ t.footer.description }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-5">{{ t.footer.quickLinks }}</h3>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.id">
              <a
                :href="`#${link.id}`"
                class="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-300 inline-flex py-1"
                @click.prevent="scrollTo(link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-5">{{ t.footer.connect }}</h3>
          <div class="flex gap-4 flex-wrap">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-button"
              :aria-label="social.name"
            >
              <component :is="getIcon(social.icon)" :size="18" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slate-500">
          © {{ currentYear }} Tuấn Dev. {{ t.footer.rights }}
        </p>
        <p class="text-xs text-slate-500 flex items-center gap-1.5">
          {{ t.footer.madeWith }} <span class="text-red-400">❤</span> {{ t.footer.by }}
          <span class="gradient-text font-semibold">Tuấn Dev</span>
        </p>
      </div>
    </div>

    <!-- Back to top -->
    <Transition name="fade">
      <button
        v-if="showBackToTop"
        class="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/25 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
        @click="scrollToTop"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </Transition>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, type FunctionalComponent } from 'vue'
import { Github, Linkedin, Mail, Facebook } from 'lucide-vue-next'
import { socialLinks } from '../../data/socialLinks'
import { useI18n } from '../../i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
const showBackToTop = ref(false)

const quickLinks = computed(() => [
  { id: 'hero', label: t.value.nav.home },
  { id: 'about', label: t.value.nav.about },
  { id: 'techstack', label: t.value.nav.skills },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'contact', label: t.value.nav.contact },
])

const iconMap: Record<string, FunctionalComponent | typeof Github> = { Github, Linkedin, Mail, Facebook }
const getIcon = (name: string) => iconMap[name] || Mail

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
