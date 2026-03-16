export interface CareerItem {
  company: string;
  start: string; // YYYY-MM-DD
  end?: string | null; // null/undefined이면 현재 재직중 처리
  role?: string;
  summary?: string[];
  tech?: string[];
}

export const careers: CareerItem[] = [
  {
    company: "인컴즈",
    start: "2018-03",
    end: "2020-09",
    role: "Markup Developer",
    summary: [
      "네이버 서비스 UI 마크업 전담: 자회사 소속으로서 JAM LIVE, BT21, 스마트플레이스 등 20여 개 이상의 네이버 핵심 서비스 마크업 수행.",
      "웹 표준 및 접근성: 네이버 책 서비스 접근성 개선 프로젝트 참여 및 시맨틱 마크업 최적화.",
      "대규모 어드민 시스템 리딩: 네이버 사내 어드민 마크업 가이드 수립 및 프로젝트 리딩 경험 보유.",
    ],
    tech: ["HTML", "CSS", "SCSS", "Gulp", "Swiper", "Slick"],
  },
  {
    company: "티맥스에이앤씨",
    start: "2020-10",
    end: "2022-07",
    role: "Markup Developer",
    summary: [
      "협업 플랫폼 '티맥스 와플' 초기 런칭 멤버: 제품 설계 단계부터 오픈 및 안정화까지 전 과정 참여.",
      "컴포넌트 중심 개발 및 시스템화: Storybook 기반의 공통 컴포넌트 라이브러리 구축으로 개발 생산성 30% 이상 향상.",
      "웹 표준 및 UI/UX 정밀 구현: Figma 기반의 시맨틱 마크업과 React 기반의 고도화된 UI 개발 경험 보유.",
    ],
    tech: ["React", "TypeScript", "JavaScript", "Styled Components"],
  },
  {
    company: "스마일게이트",
    start: "2022-08",
    end: null, // 현재 재직중(오늘까지)
    role: "Markup & Frontend Developer",
    summary: [
      "국내외 대형 게임 타이틀의 웹 서비스 구축: '로드나인', '블루프로토콜' 등 신규 런칭 프로젝트의 공식 홈페이지 제작 주도.",
      "개발 효율화를 위한 시스템 구축: 공식 홈페이지 템플릿화를 통해 반복적인 제작 공정 단축 및 코드 품질 일관성 확보.",
      "라이브 서비스 운영 및 이벤트 최적화: '테일즈런너', '에픽세븐', '로드나인' 등 라이브 게임의 대규모 이벤트 페이지 제작 및 유지보수 전담.",
    ],
    tech: [
      "Nuxt 3/4",
      "Vue 3",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "Pinia",
      "i18n",
      "Storybook",
      "Tailwind",
      "GSAP",
    ],
  },
];
