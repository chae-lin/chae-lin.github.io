export interface ProjectItem {
  title: string;
  description: string;
  thumbnail?: string;
  stack: string[];
  detail: {
    role: string;
    highlights: string[];
    duration?: string;
  };
  link: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Game Web Template Platform",
    description:
      "어드민에서 입력한 콘텐츠를 API로 받아 게임 공식 홈페이지와 프로모션 페이지를 자동 생성·운영하는 웹 템플릿 플랫폼",
    thumbnail: "/images/projects/template.webp",
    stack: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Pinia",
      "TailwindCSS",
      "i18n",
      "Nuxt Layers",
      "Responsive Web",
    ],
    detail: {
      role: "Frontend Developer",
      highlights: [
        "게임 공식 홈페이지 및 프로모션 페이지 공통 템플릿 구조 설계",
        "Nuxt Layers 기반 모듈 분리 아키텍처 구축",
        "Atomic Design 패턴 기반 UI 컴포넌트 구조 설계 및 제작",
        "동적 라우팅 기반 페이지 자동 생성 기능 구현",
        "i18n 기반 다국어(6개 언어) 지원 구조 설계",
        "TailwindCSS + CSS 변수 기반 반응형 및 테마 구조 설계",
        "템플릿 기반 구조를 도입하여 신규 사이트 구축 공수 절감",
      ],
      duration: "2025.09 ~ 2026.01",
    },
    link: "Internal Platform (Non-public)",
  },
  {
    title: "LORDNINE Official Website",
    description: "로드나인 홈페이지 구축 및 라이브 서비스 운영",
    thumbnail: "/images/projects/l9-asia.jpg",
    stack: ["Nuxt 3", "Vue 3", "TypeScript", "Pinia", "SCSS", "i18n"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "공식 홈페이지 전체 페이지(13개) UI 마크업 전담",
        "프로모션 이벤트 페이지 UI 구현",
        "SCSS(BEM) 기반 스타일 아키텍처 설계",
        "애니메이션 및 인터랙션 UI 구현",
        "라이브 서비스 운영 및 이벤트 페이지 제작",
      ],
      duration: "2024.03 ~ 2025.06",
    },
    link: "https://l9.onstove.com/ko",
  },
  {
    title: "Epic Seven Official Website",
    description: "에픽세븐 홈페이지 리뉴얼 및 프로모션 페이지 개발",
    thumbnail: "/images/projects/epic7.jpg",
    stack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Pinia",
      "SCSS",
      "i18n",
      "Responsive Web",
    ],
    detail: {
      role: "Frontend Developer",
      highlights: [
        "메인 페이지 UI 리뉴얼",
        "프로모션 페이지 프론트엔드 개발 및 UI 구현",
        "반응형 레이아웃 및 인터랙션 UI 구현",
        "Nuxt 기반 페이지 구조 구성",
      ],
      duration: "2023.10 ~ 2024.02",
    },
    link: "https://epic7.onstove.com/ko/brand",
  },
  {
    title: "Blue Protocol Brand Website",
    description: "블루프로토콜 브랜드 공식 홈페이지 및 사전예약 페이지 제작",
    thumbnail: "/images/projects/blueprotocol.png",
    stack: ["HTML", "Gulp", "SCSS", "GSAP", "jQuery", "Responsive Web"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "브랜드 홈페이지 UI 마크업",
        "GSAP 기반 원페이지 스크롤 인터랙션 구현",
        "사전예약 프로모션 페이지 구현",
        "반응형 UI 및 애니메이션 인터랙션 구현",
      ],
      duration: "2023.04 ~ 2023.09",
    },
    link: "Legacy Official Website (Replaced)",
  },
  {
    title: "TalesRunner Official Website",
    description: "테일즈런너 공식 홈페이지 리뉴얼 및 이벤트 페이지 운영",
    thumbnail: "/images/projects/tr.jpg",
    stack: ["HTML", "Gulp", "SCSS", "jQuery"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "공식 홈페이지 UI 리뉴얼 마크업",
        "100건 이상의 프로모션 페이지 제작",
        "레거시 jQuery 환경 유지보수",
        "애니메이션 및 인터랙션 UI 구현",
        "Gulp 기반 프론트엔드 빌드 환경 구성",
        "SCSS 믹스인 구조를 활용한 스타일 재사용성 개선",
      ],
      duration: "2022.08 ~ 2023.03",
    },
    link: "Legacy Official Website (Replaced)",
  },
  {
    title: "WAPL Platform",
    description: "메신저·캘린더 등 협업 기능을 포함한 기업용 협업 플랫폼",
    thumbnail: "/images/projects/wapl.webp",
    stack: ["React", "TypeScript", "styled-components", "Responsive Web"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "협업 플랫폼 주요 기능 화면 UI 마크업",
        "공통 UI 컴포넌트(Button, Checkbox, Modal 등) 제작",
        "styled-components 기반 스타일 시스템 구현",
        "다국어 지원 UI 구조 구현",
        "반응형 레이아웃 및 인터랙션 UI 구현",
        "Storybook 기반 컴포넌트 문서화",
      ],
      duration: "2020.10 ~ 2022.07",
    },
    link: "Previously Live (Service Discontinued)",
  },
  {
    title: "JAM LIVE",
    description: "실시간 참여형 라이브 방송 서비스 웹사이트",
    thumbnail: "/images/projects/jam.png",
    stack: ["HTML", "SCSS", "Responsive Web", "Animation"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "라이브 방송 웹사이트 UI 마크업",
        "PC / Tablet / Mobile 대응 반응형 웹 구현",
        "vh / vw 단위 기반 유동 레이아웃 설계",
        "애니메이션 및 인터랙션 UI 구현",
        "라이브 상태에 따른 UI 분기 구조 구현",
      ],
      duration: "2020.06 ~ 2020.08",
    },
    link: "Previously Live (Service Discontinued)",
  },
  {
    title: "BT21 BABY",
    description:
      "LINE FRIENDS와 BTS 협업 캐릭터 브랜드 'BT21 BABY' 프로모션 웹사이트",
    thumbnail: "/images/projects/bt21.png",
    stack: ["HTML", "Gulp", "SCSS", "Animation"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "BT21 BABY 캐릭터 브랜드 프로모션 웹사이트 UI 마크업",
        "캐릭터 중심 인터랙션 및 애니메이션 UI 구현",
        "5개 언어 다국어 지원 (KR / EN / JP / CN Simplified / CN Traditional)",
        "브랜드 콘텐츠 중심 프로모션 페이지 UI 구현",
      ],
      duration: "2020.02",
    },
    link: "https://www.bt21.com/BT21BABY",
  },
  {
    title: "DEVIEW 2018",
    description: "네이버 개발자 컨퍼런스 DEVIEW 2018 공식 웹사이트",
    thumbnail: "/images/projects/deview.png",
    stack: ["HTML", "SCSS", "Animation", "Responsive Web"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "HTML / SCSS 기반 UI 마크업 및 인터랙션 구현",
        "PC / Tablet / Mobile 대응 반응형 웹 구현",
        "hover 인터랙션을 위한 overlay 기반 애니메이션 구조 제안",
        "커스텀 체크박스 fallback 구조 적용으로 UI 안정성 개선",
      ],
      duration: "2018.06 ~ 2018.09",
    },
    link: "https://deview.kr/2018",
  },
];
