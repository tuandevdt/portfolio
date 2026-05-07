<template>
  <nav class="fixed inset-x-0 top-0 z-50">
    <div class="container-custom pt-4 md:pt-5">
      <div
        class="surface-panel-soft flex items-center justify-between gap-4 rounded-full px-4 py-3 md:px-6 transition-all duration-300"
        :class="isScrolled ? 'border-white/14 shadow-[0_22px_50px_-32px_rgba(0,0,0,0.85)]' : 'border-white/8'"
      >
        <a href="#hero" class="flex items-center gap-3" @click.prevent="handleJump('hero')">
          <img src="../../assets/images/chan-dung.jpg" alt="Tuan Dev" class="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/10" />
          <div class="block">
            <p class="display-font text-sm font-bold uppercase tracking-[0.3em] text-white">Tuan Dev</p>
            <p class="hidden text-xs text-slate-400 sm:block">Fullstack Developer</p>
          </div>
        </a>

        <ul class="hidden items-center gap-2 md:flex">
          <li v-for="item in siteContent.nav" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
              :class="activeSection === item.id ? 'bg-white/8 text-white' : 'text-slate-400 hover:text-white'"
              @click.prevent="handleJump(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="hidden items-center gap-3 md:flex">
          <a
            :href="siteContent.contact.primaryCta.href"
            class="button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ siteContent.contact.primaryCta.label }}
          </a>
        </div>

        <button
          class="button-tertiary md:!hidden"
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="block h-0.5 w-5 bg-white transition-transform duration-200" :class="{ 'translate-y-[5px] rotate-45': isMobileMenuOpen }"></span>
          <span class="block h-0.5 w-5 bg-white transition-opacity duration-200" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
          <span class="block h-0.5 w-5 bg-white transition-transform duration-200" :class="{ '-translate-y-[5px] -rotate-45': isMobileMenuOpen }"></span>
        </button>
      </div>

      <Transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="mt-3 md:hidden">
          <div class="surface-panel rounded-[1.5rem] p-4">
            <ul class="flex flex-col gap-2">
              <li v-for="item in siteContent.nav" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200"
                  :class="activeSection === item.id ? 'bg-white/8 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'"
                  @click.prevent="handleJump(item.id)"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
            <div class="editorial-divider my-4"></div>
            <a
              :href="siteContent.contact.primaryCta.href"
              class="button-primary w-full"
              target="_blank"
              rel="noopener noreferrer"
              @click="isMobileMenuOpen = false"
            >
              {{ siteContent.contact.primaryCta.label }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { siteContent, sectionIds, type SectionId } from '../../content/siteContent'
import { scrollToSection } from '../../utils/scroll'
import { useActiveSection } from '../../composables/useActiveSection'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = useActiveSection(sectionIds)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 18
}

const handleJump = (id: SectionId) => {
  isMobileMenuOpen.value = false
  activeSection.value = id
  scrollToSection(id)
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.24s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
