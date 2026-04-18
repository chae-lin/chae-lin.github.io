export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'career', label: 'Career' }
] as const

export type SectionId = (typeof navItems)[number]['id']
