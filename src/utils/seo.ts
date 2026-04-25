import type { SeoContent } from '../content/siteContent'

const ensureMetaTag = (selector: string, attr: 'name' | 'property', value: string) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  if (existing) return existing

  const meta = document.createElement('meta')
  meta.setAttribute(attr, value)
  document.head.appendChild(meta)
  return meta
}

const setMetaContent = (selector: string, attr: 'name' | 'property', value: string, content: string) => {
  ensureMetaTag(selector, attr, value).setAttribute('content', content)
}

export const applySeoMetadata = (seo: SeoContent) => {
  document.title = seo.title
  document.documentElement.lang = 'en'

  setMetaContent('meta[name="description"]', 'name', 'description', seo.description)
  setMetaContent('meta[name="keywords"]', 'name', 'keywords', seo.keywords.join(', '))
  setMetaContent('meta[property="og:title"]', 'property', 'og:title', seo.title)
  setMetaContent('meta[property="og:description"]', 'property', 'og:description', seo.description)
  setMetaContent('meta[property="og:type"]', 'property', 'og:type', 'website')
  setMetaContent('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
  setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)

  if (seo.url) {
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', seo.url)
  }

  if (seo.image) {
    setMetaContent('meta[property="og:image"]', 'property', 'og:image', seo.image)
    setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', seo.image)
  }
}
