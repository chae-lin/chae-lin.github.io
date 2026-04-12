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
      role: "Frontend Developer, Markup Developer",
      highlights: [
        "Nuxt4 + Vue3 기반 게임 웹사이트 템플릿 플랫폼 설계 및 구현",
        "Nuxt Layers 기반 composables·stores·server·middleware 공통 레이어 분리 아키텍처 구축",
        "Atomic Design 패턴 기반 UI 컴포넌트 구조 설계",
        "동적 라우트 기반 최대 3뎁스 URL 처리 구조 설계",
        "LRU 캐시 적용 + SSR/CSR 미들웨어 역할 분리로 초기 렌더링 성능 개선",
        "i18n 기반 6개 언어 다국어 지원 구조 구현",
        "템플릿 기반 사이트 생성 구조로 신규 게임 홈페이지 제작 공수 절감",
      ],
      duration: "2025.09 ~ 2026.03",
    },
    link: "Internal Platform (Non-public)",
  },
  {
    title: "LORDNINE Official Website",
    description: "로드나인 홈페이지 구축 및 라이브 서비스 운영",
    thumbnail: "/images/projects/l9-asia.jpg",
    stack: ["Nuxt 3", "Vue 3", "TypeScript", "Pinia", "SCSS", "i18n"],
    detail: {
      role: "Frontend Developer, Markup Developer",
      highlights: [
        "공식 홈페이지 전체 13개 페이지 UI 마크업 전담 및 다수 프로모션 페이지 제작·운영",
        "SCSS(BEM) 기반 스타일 아키텍처 구성 및 재사용 가능한 공통 컴포넌트·레이아웃 설계",
        "슬라이드·마우스오버·스크롤 등 상태 기반 인터랙션 UI 구현",
        "광각 화면(1920px+) 블러 처리 방식 제안·적용, 태블릿 중간 해상도 자체 대응",
        "WebP 포맷 적용 및 비활성 영상 정지·초기화 처리로 렌더링 성능 개선",
        "SSR 기반 메타 정보 수정으로 SEO 개선",
        "다국어를 고려한 글로벌 서비스 대응 UI 구현",
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
      role: "Frontend Developer, Markup Developer",
      highlights: [
        "메인 페이지 UI 리뉴얼 마크업 전담",
        "반응형 레이아웃 및 인터랙션 UI 구현",
        "Nuxt 기반 API 연동으로 동적 콘텐츠 렌더링 구현",
        "프로모션 페이지 UI 마크업 및 프론트엔드 개발",
      ],
      duration: "2023.10 ~ 2024.02",
    },
    link: "https://epic7.onstove.com/ko/brand",
  },
  {
    title: "Blue Protocol Brand Website",
    description: "블루프로토콜 브랜드 홈페이지 및 사전예약 페이지 제작",
    thumbnail: "/images/projects/blueprotocol.png",
    stack: ["HTML", "Gulp", "SCSS", "GSAP", "jQuery", "Responsive Web"],
    detail: {
      role: "Markup Developer",
      highlights: [
        "fullpage.js 기반 원페이지 풀스크린 스크롤 인터랙션 구현",
        "GSAP 기반 섹션별 애니메이션 및 동적 모션 구현",
        "가로모드 fullpage 레이아웃 왜곡 문제 파악 및 시스템 스크롤 전환 구조 제안·적용",
        "폴더블·가로모드 포함 다양한 해상도 대응으로 크로스 디바이스 UI 안정성 확보",
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
        "공식 홈페이지 UI 리뉴얼 마크업 및 100건 이상 프로모션 이벤트 페이지 제작·운영",
        "EJS 템플릿 엔진 도입으로 헤더·푸터 공통 컴포넌트 분리, 단일 파일 수정으로 유지보수 구조 개선",
        "Gulp 기반 빌드 자동화 환경 구성 및 SCSS·믹스인 도입으로 스타일 재사용성 개선",
        "jQuery 기반 다양한 모션·인터랙션 구현 및 레거시 서비스 유지보수",
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
        "플랫폼·캘린더·웍스·메신저 전 영역 UI 마크업, 초기 설계부터 서비스 런칭까지 참여",
        "Button·Modal·Input 등 공통 UI 컴포넌트 설계 및 Storybook 문서화로 UI 파편화 방지",
        "styled-components ThemeProvider 기반 다크모드 및 고객사별 커스터마이징 테마 시스템 구축",
        "테마 이미지 로딩 전 레이아웃 사이즈 변동, 불필요한 빈 DOM 생성 등 서비스 안정화 이슈 해결",
        "다국어 대응 UI 구조 구현 및 웹 표준·접근성 준수 시맨틱 마크업",
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
        "Live·Advertiser 페이지 UI 마크업 및 반응형 웹 구현",
        "실시간 채팅 UI 마크업, CSS 마스크 기반 채팅 페이드 처리로 UI 안정성 개선",
        "vh/vw 기반 유동형 레이아웃 설계로 다양한 화면 환경 대응",
        "CSS Animation 기반 인터랙션 및 Slick 슬라이드 구현, 크로스브라우징 대응",
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
        "BABY·FESTIVAL 페이지 UI 마크업 전담",
        "5개 언어(한·영·일·중 간체·번체) 다국어 지원 UI 구조 설계",
        "CSS Animation 기반 인터랙션 및 Input range 커스텀 슬라이더 구현",
        "크로스브라우징 대응 (IE·Chrome·Safari·Firefox)",
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
        "메인 페이지 및 개발자 등록 페이지 UI 마크업 및 반응형 웹 구현",
        "커스텀 체크박스 fallback 구조 제안·적용으로 UI 안정성 개선",
        "dimmed 레이어 기반 overlay hover 인터랙션 구조 제안·적용",
        "Gulp 기반 빌드 환경 구성",
      ],
      duration: "2018.06 ~ 2018.09",
    },
    link: "https://deview.kr/2018",
  },
];
