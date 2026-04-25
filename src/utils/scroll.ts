export const NAV_SCROLL_OFFSET = 88

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (!section) return

  const top = section.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}
