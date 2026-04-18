export interface SkillGroup {
  category: string
  accent: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Language & Markup',
    accent: '#91b0a6',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Framework & Library',
    accent: '#f08b89',
    skills: ['Vue 3', 'Nuxt 4', 'Pinia', 'VueUse', 'GSAP', 'jQuery']
  },
  {
    category: 'Styling',
    accent: '#a8b8d0',
    skills: ['TailwindCSS', 'Styled Components', 'CSS Animation', 'BEM']
  },
  {
    category: 'Dev Tools',
    accent: '#c4a8d4',
    skills: ['Storybook', 'ESLint', 'Prettier', 'Gulp', 'Vite', 'Git', 'i18n']
  },
  {
    category: 'Design Tools',
    accent: '#d4b896',
    skills: ['Figma', 'Zeplin', 'Photoshop']
  },
  {
    category: 'Architecture',
    accent: '#b0c4b1',
    skills: [
      'Atomic Design',
      'Responsive Web',
      'SSR / CSR',
      'Nuxt Layers',
      'Web Standards',
      'Accessibility'
    ]
  }
]
