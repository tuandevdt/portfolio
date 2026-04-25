import { ref, computed } from 'vue'
import { vi } from './vi'
import { en } from './en'

export type Locale = 'vi' | 'en'
export type Translations = typeof vi

const locales: Record<Locale, Translations> = { vi, en }

const currentLocale = ref<Locale>(
  (localStorage.getItem('portfolio-locale') as Locale) || 'vi'
)

export function useI18n() {
  const t = computed<Translations>(() => locales[currentLocale.value])
  const locale = computed(() => currentLocale.value)

  const setLocale = (loc: Locale) => {
    currentLocale.value = loc
    localStorage.setItem('portfolio-locale', loc)
    document.documentElement.lang = loc
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'vi' ? 'en' : 'vi')
  }

  return { t, locale, setLocale, toggleLocale }
}
