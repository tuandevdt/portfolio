<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'py-3 bg-[#0a0a0f]/80 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/20'
        : 'py-4 bg-transparent',
    ]"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-3 group" @click.prevent="scrollToSection('hero')">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg transform group-hover:scale-110 transition-transform duration-300">
          T
        </div>
        <span class="text-xl font-bold">
          <span class="text-white">Tuấn</span><span class="gradient-text">Dev</span>
        </span>
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-3">
        <li v-for="item in menuItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="relative px-4 lg:px-5 py-2.5 text-[0.95rem] font-medium transition-colors duration-300 rounded-xl"
            :class="[
              activeSection === item.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white',
            ]"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.label }}
            <span
              v-if="activeSection === item.id"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
            ></span>
          </a>
        </li>
      </ul>

      <!-- Right side: Language + CTA -->
      <div class="hidden md:flex items-center gap-3.5">
        <!-- Language Switcher -->
        <button
          class="flex min-h-[3rem] items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white glass border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          @click="toggleLocale"
          :title="t.language"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          {{ locale === 'vi' ? 'EN' : 'VI' }}
        </button>

        <!-- CTA Button -->
        <a
          href="#contact"
          class="inline-flex min-h-[3rem] items-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/15 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          @click.prevent="scrollToSection('contact')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {{ t.nav.contact }}
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden flex items-center gap-3">
        <!-- Mobile Language -->
        <button
          class="flex min-h-[2.5rem] items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-300 glass border border-white/10 cursor-pointer"
          @click="toggleLocale"
        >
          {{ locale === 'vi' ? 'EN' : 'VI' }}
        </button>
        <button
          class="flex flex-col gap-1.5 p-3 rounded-xl glass border border-white/10 cursor-pointer"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
          <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
          <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/5"
      >
        <ul class="container-custom py-5 flex flex-col gap-2.5">
          <li v-for="item in menuItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block px-4 py-3.5 text-base font-medium rounded-2xl transition-all duration-300"
              :class="[
                activeSection === item.id
                  ? 'text-white bg-white/5'
                  : 'text-slate-400 hover:text-white hover:bg-white/5',
              ]"
              @click.prevent="scrollToSection(item.id); isMobileMenuOpen = false"
            >
              {{ item.label }}
            </a>
          </li>
          <li class="mt-3">
            <a
              href="#contact"
              class="block text-center px-4 py-3.5 text-base font-semibold rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/15"
              @click.prevent="scrollToSection('contact'); isMobileMenuOpen = false"
            >
              {{ t.nav.contactNow }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from '../../i18n'

const { t, locale, toggleLocale } = useI18n()

const menuItems = computed(() => [
  { id: 'hero', label: t.value.nav.home },
  { id: 'about', label: t.value.nav.about },
  { id: 'techstack', label: t.value.nav.skills },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'contact', label: t.value.nav.contact },
])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  const sections = menuItems.value.map((item) => document.getElementById(item.id))
  const scrollPos = window.scrollY + 150
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = menuItems.value[i].id
      break
    }
  }
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
