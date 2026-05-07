import p5eventImg from '../assets/images/project/5pevent/home.png'
import airemakeproImg from '../assets/images/project/airemakepro/home.png'
import templatewebImg from '../assets/images/project/templateweb/home.png'

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
  image?: string
}

export interface ContactChannel {
  icon: 'linkedin' | 'github' | 'mail' | 'map-pin'
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
    approachText: string
    techStackText: string
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
    eyebrow: 'Dark editorial portfolio',
    title: 'Fullstack systems with sharp interfaces and solid delivery underneath.',
    summary:
      'I am a full-stack developer with expertise in building scalable web applications. My technical stack includes Node.js, Python, Vue, React, PostgreSQL, MySQL, Postman, Tailwind CSS, and TypeScript.',
    description:
      'I build product surfaces, backend services, and handoff-ready systems that feel considered from the first screen to the operational layer.',
    primaryCta: {
      label: 'View selected work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Open contact',
      href: '#contact',
    },
    note: 'Selected works and case studies are available below.',
    proofItems: [
      { label: 'Focus', value: 'Frontend + Backend' },
      { label: 'Delivery', value: 'Clean handoff' },
      { label: 'Location', value: 'Da Nang, Vietnam' },
      { label: 'Status', value: 'Open to roles' },
    ],
    approachText: 'Less glow, clearer hierarchy, and UI surfaces that feel intentional instead of decorative.',
    techStackText: 'Node.js, Vue 3, TypeScript, Python, and scalable databases.',
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
    title: 'Selected works & case studies.',
    description:
      'A collection of recent projects demonstrating frontend architecture, backend delivery, and full-stack implementation.',
    archiveNote:
      'These projects highlight my experience in building scalable and modern web applications from end to end.',
    items: [
      {
        slug: '5pevent',
        title: '5Pevent',
        summary:
          'A full-featured event management platform for 5Pevent — covering company introduction, equipment rental catalog, and end-to-end event organization services with turnkey packages tailored for corporate and private clients.',
        note: 'Live production site with real-time equipment inventory management, smooth service booking flow, and a polished client-facing experience.',
        tags: ['Node.js', 'Cloudinary', 'JWT', 'MySQL', 'NodeMailer', 'TypeScript', 'Vue 3', 'Tailwind CSS'],
        status: 'live',
        links: [{ label: 'View Live Site', status: 'live', href: 'https://5pevent.vn/' }],
        image: p5eventImg,
      },
      {
        slug: 'airemakepro',
        title: 'AIRemakePro',
        summary:
          'A SaaS licensing and subscription platform for Remake Video Pro — enabling users to purchase license keys, subscribe to rental plans, and access a free-tier toolset directly from the system.',
        note: 'Integrated with Web2M online payment gateway for fully automated transaction processing, real-time license activation, and seamless subscription lifecycle management.',
        tags: ['Node.js', 'Web2M Payment', 'Cloudinary', 'JWT', 'MySQL', 'NodeMailer', 'TypeScript', 'Vue 3', 'Tailwind CSS'],
        status: 'live',
        links: [{ label: 'View Live Site', status: 'live', href: 'https://airemakepro.com/' }],
        image: airemakeproImg,
      },
      {
        slug: 'templateweb',
        title: 'Template Website',
        summary:
          'A showcase platform presenting a curated collection of modern website templates to prospective clients, complemented by custom web design and development services tailored to individual business needs.',
        note: 'Features a sleek, contemporary interface with carefully crafted visual aesthetics and optimized user experience designed to convert visitors into clients.',
        tags: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
        status: 'live',
        links: [{ label: 'View Live Site', status: 'live', href: 'https://websitecraft-eta.vercel.app/' }],
        image: templatewebImg,
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Available for full-time roles and collaborations.',
    description:
      'Feel free to reach out to discuss new opportunities or collaborations. You can find me on these platforms or email me directly.',
    channels: [
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/tuandevdt',
        href: 'https://www.linkedin.com/in/tuấn-doãn-a47272340/',
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
        value: 'tuandtdeveloper@gmail.com',
        href: 'mailto:tuandtdeveloper@gmail.com',
      },
      {
        icon: 'map-pin',
        label: 'Location',
        value: 'Da Nang, Vietnam',
      },
    ],
    primaryCta: {
      label: 'Message on LinkedIn',
      href: 'https://www.linkedin.com/in/tuấn-doãn-a47272340/',
      external: true,
    },
    secondaryCta: {
      label: 'View GitHub',
      href: 'https://github.com/tuandevdt',
      external: true,
    },
    availability: 'Available for full-time roles and select freelance collaboration.',
    footerNote: 'Available for new opportunities.',
  },
  footer: {
    blurb:
      'Fullstack developer specializing in polished product interfaces, reliable backend services, and end-to-end web application delivery.',
    note: 'Designed and built with Vue 3, TypeScript, and Tailwind CSS.',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/tuandevdt' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tuấn-doãn-a47272340/' },
  ],
}

export const sectionIds = siteContent.nav.map((item) => item.id)
