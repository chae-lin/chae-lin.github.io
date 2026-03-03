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
      "어드민에서 입력한 콘텐츠를 API로 받아 게임 공식 홈페이지와 프로모션 페이지를 자동 생성·운영하는 플랫폼",
    thumbnail: "/images/projects/template.webp",
    stack: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Tailwind",
      "i18n",
      "Layers",
    ],
    detail: {
      role: "Frontend Developer (Markup + FE)",
      highlights: [
        "공식홈/프로모션 공통 템플릿 구축",
        "Nuxt Layers 기반 모듈 분리",
        "동적 라우팅 페이지 생성 기능 구현",
        "다국어(6개 언어) 대응",
        "Tailwind + CSS 변수 기반 반응형/테마 구조 설계",
      ],
      duration: "2025.09~2026.01",
    },
    link: "Internal Platform (Non-public)",
  },
  {
    title: "LORDNINE Asia Official Website \nBuild & Promotion",
    description: "로드나인 아시아 공식 홈페이지 구축 및 운영",
    thumbnail: "/images/projects/l9.jpg",
    stack: ["Nuxt 3", "Vue 3", "TypeScript", "Pinia", "SCSS", "i18n"],
    detail: {
      role: "Frontend Developer (Markup + FE)",
      highlights: [
        "게임 공식 홈페이지 초기 환경 세팅",
        "SCSS(BEM) 기반 스타일 아키텍처 구성",
        "i18n 기반 다국어 대응",
        "Stove 플랫폼 연동",
        "라이브 서비스 운영·유지보수",
      ],
      duration: "2025.06",
    },
    link: "https://l9asia.onstove.com/en",
  },
  {
    title: "LORDNINE Official Website \nBuild & Promotion",
    description: "로드나인 공식 홈페이지 전 페이지 마크업 전담",
    thumbnail: "/images/projects/l9-asia.jpg",
    stack: ["Nuxt 3", "Vue 3", "TypeScript", "Pinia", "SCSS", "i18n"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "공식 홈페이지 전 페이지 (13개) + 다수의 프로모션 이벤트 UI 마크업 전담",
        "SCSS(BEM) 기반 스타일 아키텍처 구성",
        "애니메이션 UI 구현",
      ],
      duration: "2024.03~2024.07 (공홈 구축)\n2024.08~2025.05 (Operation)",
    },
    link: "https://l9.onstove.com/ko",
  },
  {
    title: "Epic Seven Website \nRenewal & Promotion",
    description: "에픽세븐 공식 홈페이지 리뉴얼, 프로모션 페이지 제작",
    thumbnail: "/images/projects/epic7.jpg",
    stack: ["Nuxt 3", "Vue 3", "TypeScript", "Pinia", "SCSS", "i18n"],
    detail: {
      role: "Frontend Developer (Markup + FE)",
      highlights: [
        "메인 페이지 UI 리뉴얼",
        "프로모션 페이지 마크업 및 프론트엔드 개발",
        "반응형·애니메이션 UI 구현",
      ],
    },
    link: "https://epic7.onstove.com/ko/brand",
  },
  {
    title: "TalesRunner Official Website \nRenewal & Promotion",
    description: "테일즈런너 공식 홈페이지 리뉴얼, 프로모션 페이지 제작",
    thumbnail: "/images/projects/tr.jpg",
    stack: ["HTML", "SCSS", "jQuery"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "공식 홈페이지 UI 리뉴얼 마크업",
        "프로모션 페이지 마크업",
        "레거시 환경 유지보수 대응",
        "애니메이션 UI 구현",
      ],
      duration: "2022.08~2024.02 (Operation)",
    },
    link: "Legacy Official Website (Replaced)",
  },
  {
    title: "WAPL Platform",
    description: "메신저·캘린더 등 협업 기능을 포함한 WAPL 플랫폼",
    thumbnail: "/images/projects/wapl.webp",
    stack: ["React", "styled-components", "CSS"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "협업 플랫폼 주요 기능 화면 UI 마크업",
        "styled-components 기반 스타일 구현",
        "반응형·애니메이션 UI 구현",
      ],
      duration: "2020.10~2022.07",
    },
    link: "Previously Live (Service Discontinued)",
  },
];
