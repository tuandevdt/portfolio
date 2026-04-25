export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tuandevdt',
    icon: 'Github',
    color: '#FFFFFF',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tuandevdt',
    icon: 'Linkedin',
    color: '#0A66C2',
  },
  {
    name: 'Email',
    url: 'mailto:tuandev@example.com',
    icon: 'Mail',
    color: '#EA4335',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/tuandevdt',
    icon: 'Facebook',
    color: '#1877F2',
  },
]
