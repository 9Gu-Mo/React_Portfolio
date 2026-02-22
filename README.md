# 🎨 React Portfolio

웹퍼블리셔 구원모의 포트폴리오 웹사이트입니다. 현대적인 디자인과 부드러운 애니메이션 효과를 통해 개인의 프로젝트와 경력을 효과적으로 전시합니다.

---

## ✨ 주요 기능

- 🌓 **Dark/Light 모드**: 사용자 선호도에 따른 테마 전환
- 🎬 **부드러운 애니메이션**: Framer Motion, Swiper, AOS를 활용한 풍부한 모션 효과
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- ⌨️ **타이핑 애니메이션**: 인터랙티브한 텍스트 효과
- 🎯 **스크롤 감지**: 페이지 스크롤에 따른 헤더 UI 변화

---

## 🛠 기술 스택

### Core Framework

- **[Next.js 14.2.5](https://nextjs.org)** - React 프레임워크
- **[React 18.2.0](https://react.dev)** - UI 라이브러리
- **[TypeScript](https://www.typescriptlang.org)** - 타입 안전성

### Styling

- **[Tailwind CSS 4.1.14](https://tailwindcss.com)** - Utility-first CSS 프레임워크
- **[SCSS/Sass 1.93.2](https://sass-lang.com)** - 고급 CSS 전처리기

### Animation & Motion

- **[Framer Motion 12.23.26](https://www.framer.com/motion)** - React 애니메이션 라이브러리
- **[AOS 2.3.4](https://michalsnik.github.io/aos)** - Scroll Animation

### UI & Components

- **[Swiper 12.1.0](https://swiperjs.com)** - 터치 슬라이더

### State Management

- **[Zustand 5.0.9](https://github.com/pmndrs/zustand)** - 가볍고 효율적인 상태 관리

### Development Tools

- **[ESLint 9](https://eslint.org)** - 코드 품질 관리
- **[Prettier 3.7.4](https://prettier.io)** - 코드 포매팅

---

## 📖 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 페이지
│   ├── fonts.ts                # 폰트 설정
│   └── providers/
│       └── AOSProvider.tsx      # AOS 설정
│
├── component/
│   ├── common/                 # 공통 컴포넌트
│   │   ├── About.tsx           # About 섹션
│   │   ├── Skill.tsx           # 기술 스택 섹션
│   │   ├── Carrer.tsx          # 경력 섹션
│   │   ├── Contact.tsx         # 연락처 섹션
│   │   ├── Contents.tsx        # 메인 컨텐츠
│   │   ├── TextTypingCursor.tsx # 타이핑 애니메이션
│   │   └── DarkModeBtn.tsx      # 다크모드 버튼
│   ├── icon/                   # SVG 아이콘 컴포넌트들
│   ├── layout/                 # 레이아웃 컴포넌트
│   │   ├── Header.tsx          # 네비게이션 헤더
│   │   ├── Footer.tsx          # 푸터
│   │   └── MainLayout.tsx      # 메인 레이아웃
│   └── DeviceDetector.tsx      # 디바이스 감지
│
├── hooks/                      # Custom Hooks
│   └── useScrollAnimation.ts   # 스크롤 애니메이션
│
├── stores/                     # Zustand 상태 관리
│   ├── useDeviceStore.ts       # 디바이스 상태
│   ├── useHeaderStore.ts       # 헤더 상태
│   └── useThemeStore.ts        # 테마 상태
│
├── styles/                     # SCSS 스타일
│   ├── globals.scss            # 전역 스타일
│   ├── theme.scss              # 테마 스타일
│   ├── About.module.scss       # About 컴포넌트 module
│   ├── Skill.module.scss       # Skill 컴포넌트 module
│   ├── Carrer.module.scss      # Carrer 컴포넌트 module
│   └── Contact.module.scss     # Contact 컴포넌트 module
└── types/
    └── icon.types.ts           # 타입 정의

```

---

## 🚀 시작하기

### 1. 설치

```bash
# 저장소 복제
git clone https://github.com/9Gu-Mo/React_Portfolio.git
cd React_Portfolio

# 의존성 설치
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 📝 사용 가능한 스크립트

```bash
# 개발 서버 실행 (핫 리로딩 활성화)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# ESLint 코드 검사
npm run lint
```

---

## 🎯 주요 컴포넌트 설명

### Header

- 반응형 네비게이션 바
- 다크/라이트 모드 토글
- 각 섹션으로의 스크롤 링크
- 스크롤 상태에 따른 UI 변화

### About Section

- 포트폴리오 소개
- 배경 이미지/비디오
- 타이핑 애니메이션 효과

### Skill Section

- 기술 스택 분류 (디자인, 개발, 프레임워크 등)
- 각 기술별 아이콘 표시
- 스크롤 애니메이션

### Career Section

- 경력 및 프로젝트 이력
- 시간순 레이아웃
- 부드러운 페이드-인 효과

### Contact Section

- 개인 메일, 깃, 연락처 기재

---

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Framer Motion 가이드](https://www.framer.com/motion)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Zustand 저장소](https://github.com/pmndrs/zustand)

---

## 👨‍💼 작업자

**구원모(웹퍼블리셔)**

- GitHub: [@9Gu-Mo](https://github.com/9Gu-Mo)
- Portfolio: [My Portfolio](https://react-portfolio-iota-ten-41.vercel.app/)

---
