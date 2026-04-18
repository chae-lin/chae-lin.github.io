# 🍒 Chaelin Portfolio

디자인의 의도를 정확히 구현하고,  
작은 디테일까지 고민하는 프론트엔드 개발자입니다.

부드러운 인터랙션과 접근성을 기반으로  
사용자에게 자연스러운 경험을 제공합니다.

---

## Tech Stack

- **Framework**: Nuxt 4 / Vue 3 / TypeScript
- **Styling**: TailwindCSS + CSS Variables (시맨틱 컬러 토큰)
- **Animation**: GSAP (lazy import, ScrollTrigger)
- **Deploy**: GitHub Pages (GitHub Actions)

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| 명령어              | 설명                 |
| ------------------- | -------------------- |
| `npm run dev`       | 개발 서버 실행       |
| `npm run generate`  | 정적 사이트 빌드     |
| `npm run lint`      | ESLint 검사          |
| `npm run typecheck` | TypeScript 타입 검사 |

## Code Style

- **Formatter**: Prettier (`semi: false`, `singleQuote: true`)
- **Linter**: ESLint (`@nuxt/eslint` + `eslint-config-prettier`)
- 저장 시 자동 포맷 적용 (VS Code ESLint + Prettier 확장 필요)

> Prettier는 코드 포매팅(들여쓰기, 따옴표, 세미콜론, 줄바꿈 등)을 담당하고,
> ESLint도 동일한 포매팅 룰을 가지고 있어 충돌이 발생할 수 있습니다.<br>
> `eslint-config-prettier`를 적용해 ESLint의 포매팅 룰을 비활성화하고,
> **Prettier가 포맷 담당 / ESLint는 코드 로직 오류 담당**으로 역할을 분리했습니다.
