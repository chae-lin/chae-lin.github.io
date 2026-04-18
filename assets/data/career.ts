export interface CareerItem {
  company: string
  start: string // YYYY-MM-DD
  end?: string | null // null/undefined이면 현재 재직중 처리
  role?: string
  summary?: string[]
  tech?: string[]
}

export const careers: CareerItem[] = [
  {
    company: '인컴즈',
    start: '2018-03',
    end: '2020-09',
    role: 'Markup Developer',
    summary: [
      '네이버, LINE FRIENDS 등 대형 서비스의 UI 마크업을 담당한 웹 에이전시에서 다양한 프로젝트를 경험했습니다.',
      'Pixel-perfect 정밀 마크업으로 디자인 완성도를 높였습니다.',
      'NAVER MOVIE 웹 접근성 개선 프로젝트에 참여하여 시맨틱 마크업 구조를 재설계하고 접근성 품질 향상에 기여했습니다.',
      '폴더블을 포함한 다양한 디바이스·해상도 환경에 대응하는 적응형 UI를 구현했습니다.',
      '5개 언어 다국어 UI 구현 및 크로스브라우징 대응으로 안정적인 서비스 환경을 구축했습니다.'
    ],
    tech: [
      'HTML5',
      'CSS3',
      'SCSS',
      'CSS Animation',
      'Gulp',
      'Swiper',
      'Slick',
      'Storybook',
      'Zeplin',
      'Photoshop'
    ]
  },
  {
    company: '티맥스에이앤씨',
    start: '2020-10',
    end: '2022-07',
    role: 'Markup Developer',
    summary: [
      '기업용 올인원 협업 플랫폼 WAPL 초기 설계부터 서비스 런칭까지 전 과정에 참여했습니다.',
      'Button·Checkbox·Modal·Input 등 공통 UI 컴포넌트 설계 및 Storybook 문서화로 UI 파편화를 방지했습니다.',
      '팀 내 마크업 컨벤션 수립 및 구조 표준화를 주도했습니다.',
      'ThemeProvider 기반 다크모드 및 고객사별 커스터마이징 테마 시스템을 구축했습니다.',
      'TypeScript 기반 환경에서 컴포넌트 타입 안정성을 확보하고 런타임 에러를 감소시켰습니다.'
    ],
    tech: [
      'React',
      'TypeScript',
      'JavaScript',
      'Styled Components',
      'Storybook',
      'Figma',
      'Zeplin'
    ]
  },
  {
    company: '스마일게이트',
    start: '2022-08',
    end: null, // 현재 재직중(오늘까지)
    role: 'Frontend Developer, Markup Developer',
    summary: [
      '게임 공식 홈페이지 및 프로모션 페이지를 전문으로 개발하는 팀에서 신규 런칭부터 운영·유지보수까지 전 과정을 담당했습니다.',
      '어드민 연동형 웹 템플릿 플랫폼을 설계·구축하여 신규 게임 홈페이지 제작 공정을 표준화하고 운영 효율을 개선했습니다.',
      'Storybook 기반 컴포넌트 가이드 제작으로 디자이너·개발자 간 협업 기준을 정립했습니다.',
      'Nuxt Layers 기반 모듈화 아키텍처와 Atomic Design 패턴으로 확장 가능한 UI 구조를 설계했습니다.',
      'SSR/CSR 렌더링 전략 분리, LRU 캐시 적용, Lighthouse 성능 최적화, font-display:swap 적용 등 다각도 성능 개선을 주도했습니다.',
      '최대 8개 언어 글로벌 서비스 대응 및 국가별 네트워크 환경을 고려한 리소스 경량화로 글로벌 서비스 안정성을 확보했습니다.'
    ],
    tech: [
      'Nuxt 4',
      'Vue 3',
      'JavaScript',
      'TypeScript',
      'Pinia',
      'VueUse',
      'TailwindCSS',
      'GSAP',
      'i18n',
      'Storybook',
      'ESLint',
      'Prettier'
    ]
  }
]
