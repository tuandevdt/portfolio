export type SectionId = 'hero' | 'about' | 'capabilities' | 'projects' | 'contact'
export type ProjectLinkStatus = 'live' | 'case-study' | 'private' | 'todo'

export interface NavItem {
  id: SectionId
  label: string
}

export interface SeoContent {
  title: string
  description: string
  keywords: string[]
  url?: string
  image?: string
}

export interface CtaLink {
  label: string
  href: string
  external?: boolean
}

export interface HeroProofItem {
  label: string
  value: string
}

export interface AboutCard {
  title: string
  description: string
}

export interface CapabilityGroup {
  number: string
  title: string
  summary: string
  items: string[]
}

export interface ProjectLink {
  label: string
  status: ProjectLinkStatus
  href?: string
}

export interface ProjectItem {
  slug: string
  title: string
  summary: string
  note: string
  tags: string[]
  status: ProjectLinkStatus
  links: ProjectLink[]
}

export interface ContactChannel {
  icon: 'linkedin' | 'github' | 'mail' | 'map-pin' | 'clock-4'
  label: string
  value: string
  href?: string
  note?: string
}

export interface SocialItem {
  label: string
  href: string
}

export interface SiteContent {
  seo: SeoContent
  nav: NavItem[]
  hero: {
    eyebrow: string
    title: string
    summary: string
    description: string
    primaryCta: CtaLink
    secondaryCta: CtaLink
    note: string
    proofItems: HeroProofItem[]
  }
  about: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    cards: AboutCard[]
  }
  capabilities: {
    eyebrow: string
    title: string
    description: string
    groups: CapabilityGroup[]
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    archiveNote: string
    items: ProjectItem[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    channels: ContactChannel[]
    primaryCta: CtaLink
    secondaryCta: CtaLink
    availability: string
    footerNote: string
  }
  footer: {
    blurb: string
    note: string
  }
  socials: SocialItem[]
}

export const siteContent: SiteContent = {
  seo: {
    title: 'Tuan Dev | Fullstack Developer',
    description:
      'Dark editorial portfolio for a fullstack developer focused on polished product surfaces, reliable APIs, and clean delivery.',
    keywords: [
      'Tuan Dev',
      'Fullstack Developer',
      'Portfolio',
      'Vue',
      'TypeScript',
      'Frontend',
      'Backend',
      'API',
      'Dark Portfolio',
    ],
    image: '/favicon.svg',
  },
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'Dark editorial portfolio refresh',
    title: 'Fullstack systems with sharp interfaces and solid delivery underneath.',
    summary:
      'I build product surfaces, backend services, and handoff-ready systems that feel considered from the first screen to the operational layer.',
    description:
      'This version is intentionally English-first and structure-driven. Real case studies, final metrics, and a public work email are still marked as TODOs instead of being faked.',
    primaryCta: {
      label: 'View selected work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Open contact',
      href: '#contact',
    },
    note: 'TODO: replace the placeholder project slots below with verified launches, screenshots, and measurable outcomes.',
    proofItems: [
      { label: 'Focus', value: 'Frontend + Backend' },
      { label: 'Delivery', value: 'Clean handoff' },
      { label: 'Location', value: 'Vietnam / ICT' },
      { label: 'Status', value: 'Open to roles' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'A builder for the UI layer, the API layer, and the decisions between them.',
    description:
      'The goal is not just to make something look modern. It has to read clearly, ship cleanly, and remain maintainable after the launch energy is gone.',
    paragraphs: [
      'I care about product-facing implementation that feels deliberate: typography with hierarchy, motion that supports comprehension, and interfaces that do not collapse into generic templates.',
      'On the backend side, I focus on pragmatic APIs, clear data flow, and delivery practices that make the project easier to extend instead of harder to own.',
    ],
    cards: [
      {
        title: 'Product-first implementation',
        description: 'Translate visual direction into code without losing the intended tone, hierarchy, or pacing.',
      },
      {
        title: 'Systems that stay readable',
        description: 'Prefer structure, constraints, and typed content over scattered hardcoded UI state.',
      },
      {
        title: 'Editorial dark mode',
        description: 'Use contrast, spacing, and restrained motion to feel premium instead of noisy.',
      },
      {
        title: 'Shipping discipline',
        description: 'No fake links, no fake contacts, and no placeholder success states pretending to be live.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'A working stack organized by delivery, not by icon collection.',
    description:
      'The groups below reflect how the work is actually structured when building product interfaces, services, and internal delivery workflows.',
    groups: [
      {
        number: '01',
        title: 'Product Frontend',
        summary: 'Build responsive UI systems with intentional motion, solid spacing, and maintainable component structure.',
        items: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Animation restraint', 'Design-to-code implementation'],
      },
      {
        number: '02',
        title: 'Backend Delivery',
        summary: 'Design APIs and supporting services that stay clear under iteration and real feature pressure.',
        items: ['Node.js', 'Python', 'REST APIs', 'Auth flows', 'Data modeling'],
      },
      {
        number: '03',
        title: 'Workflow and Ops',
        summary: 'Keep the project shippable with clean handoff, sensible tooling, and low-friction iteration.',
        items: ['Git', 'Docker', 'Postman', 'Performance cleanup', 'Implementation documentation'],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'The archive is being refreshed with verified case studies.',
    description:
      'Instead of inventing finished work, the section keeps explicit case-study slots ready for real content, links, screenshots, and outcomes.',
    archiveNote:
      'Ship the structure now. Replace each slot with an actual launch, measurable result, and public proof when that material is ready.',
    items: [
      {
        slug: 'flagship-product-slot',
        title: 'Flagship product case study',
        summary:
          'Use this slot for the strongest public product build: polished interface, clear product goal, and a result worth naming.',
        note: 'TODO: add real title, screenshots, stack decisions, and a live or case-study link.',
        tags: ['UI quality', 'Product thinking', 'Frontend architecture'],
        status: 'todo',
        links: [{ label: 'TODO add public link', status: 'todo' }],
      },
      {
        slug: 'api-platform-slot',
        title: 'API or platform case study',
        summary:
          'Use this slot for backend-heavy work with architecture decisions, constraints, and reliability or performance detail.',
        note: 'TODO: add concrete scope, system constraints, and one meaningful metric or operational result.',
        tags: ['API design', 'Backend delivery', 'Data flow'],
        status: 'todo',
        links: [{ label: 'TODO add case-study link', status: 'todo' }],
      },
      {
        slug: 'internal-tooling-slot',
        title: 'Internal tooling or workflow case study',
        summary:
          'Use this slot for the work that improved delivery speed, operational clarity, or team workflow quality.',
        note: 'TODO: add before/after context and a visible impact on delivery, maintenance, or quality.',
        tags: ['Tooling', 'Workflow', 'Maintainability'],
        status: 'private',
        links: [{ label: 'Private work', status: 'private' }],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Use the channels that already exist. Add public email when ready.',
    description:
      'The contact area keeps real profile links available now and leaves the email slot as a visible TODO instead of shipping a fake address.',
    channels: [
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/tuandevdt',
        href: 'https://linkedin.com/in/tuandevdt',
      },
      {
        icon: 'github',
        label: 'GitHub',
        value: 'github.com/tuandevdt',
        href: 'https://github.com/tuandevdt',
      },
      {
        icon: 'mail',
        label: 'Work email',
        value: 'TODO add public work email',
        note: 'No dead mailto link is shipped in this version.',
      },
      {
        icon: 'clock-4',
        label: 'Timezone',
        value: 'ICT (UTC+7)',
      },
      {
        icon: 'map-pin',
        label: 'Location',
        value: 'Vietnam',
      },
    ],
    primaryCta: {
      label: 'Message on LinkedIn',
      href: 'https://linkedin.com/in/tuandevdt',
      external: true,
    },
    secondaryCta: {
      label: 'View GitHub',
      href: 'https://github.com/tuandevdt',
      external: true,
    },
    availability: 'Available for full-time roles and select freelance collaboration.',
    footerNote:
      'TODO: replace the email slot above once a public work address is ready.',
  },
  footer: {
    blurb:
      'Dark editorial one-page portfolio focused on product implementation, backend delivery, and structure that is ready for real case studies.',
    note: 'Built to remove template noise first, then layer real project proof on top.',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/tuandevdt' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tuandevdt' },
  ],
}

export const sectionIds = siteContent.nav.map((item) => item.id)
