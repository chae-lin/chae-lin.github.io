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
      "네이버, LINE FRIENDS 등 대형 서비스의 UI 마크업을 담당한 웹 에이전시에서 다양한 프로젝트를 경험했습니다.",
      "JAM LIVE·BT21 BABY·NAVER WORKPLACE·SMARTPLACE 등 신규 구축부터 운영 대응까지 폭넓게 참여했습니다.",
      "웹 표준·접근성 기반 시맨틱 마크업, 폴더블 디바이스 대응, 5개 언어 다국어 UI 구현, 크로스브라우징 대응 등 안정적인 서비스 환경 구축에 기여했습니다.",
    ],
    tech: ["HTML5", "CSS", "SCSS", "CSS Animation", "Gulp", "Swiper", "Slick"],
  },
  {
    company: "티맥스에이앤씨",
    start: "2020-10",
    end: "2022-07",
    role: "Markup Developer",
    summary: [
      "기업용 올인원 협업 플랫폼 WAPL의 초기 설계부터 서비스 런칭까지 전 과정에 참여했습니다.",
      "플랫폼·캘린더·웍스·메신저 전 영역 UI 마크업을 담당하며 공통 컴포넌트 설계와 Storybook 문서화로 팀 내 UI 파편화를 방지했습니다.",
      "ThemeProvider 기반 다크모드 및 고객사별 커스터마이징 테마 시스템을 구축했습니다.",
      "룸 설정·구성원 관리 등 핵심 플랫폼 기능 개발에도 직접 참여했습니다.",
    ],
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Styled Components",
      "Storybook",
    ],
  },
  {
    company: "스마일게이트",
    start: "2022-08",
    end: null, // 현재 재직중(오늘까지)
    role: "Frontend Developer, Markup Developer",
    summary: [
      "게임 공식 홈페이지 및 프로모션 페이지를 전문으로 개발하는 팀에서 신규 런칭부터 운영·유지보수까지 전 과정을 담당했습니다.",
      " 어드민 연동형 웹 템플릿 플랫폼을 설계·구축하여 신규 게임 홈페이지 제작 공정을 표준화하고 운영 효율을 개선했습니다.",
      "Nuxt Layers 기반 모듈화 아키텍처, Atomic Design 패턴 컴포넌트 설계, SSR/CSR 렌더링 전략 분리, LRU 캐시 적용 등 구조적인 성능 최적화를 주도했습니다.",
      "최대 8개 언어 글로벌 서비스 대응 경험을 쌓았습니다.",
    ],
    tech: [
      "Nuxt 4",
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
