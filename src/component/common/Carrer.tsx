'use client';

interface ImageType {
  src: string;
  alt: string;
}

interface AttrType {
  period: string;
  contribution: string;
  // role: string;
}

interface Props {
  id: string;
  no: string;
  img?: ImageType[];
  type: string[];
  name: string;
  attr: AttrType[];
  desc: string;
  skill: string[];
  work?: string[];
  result: string[];
  site?: string;
}

// react
import React, { useState } from 'react';

// next
import Image from 'next/image';
import Link from 'next/link';

// lib
import { Autoplay, EffectFade, Keyboard, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

// store
import { useDeviceStore } from '@/stores/useDeviceStore';

// component
import NoImage from '@/component/common/NoImage';

// style
import { cn } from '@/lib/utils';
import style from '@/styles/Carrer.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

const carArr: Props[] = [
  {
    id: 'prj01',
    no: 'project 01',
    img: [
      {
        src: '/images/temp/cheilJedang01.png',
        alt: 'cj 제일제당 슬라이드01',
      },
      {
        src: '/images/temp/cheilJedang02.png',
        alt: 'cj 제일제당 슬라이드02',
      },
      {
        src: '/images/temp/cheilJedang03.png',
        alt: 'cj 제일제당 슬라이드03',
      },
    ],
    type: ['Mobile', 'Adaptive'],
    name: 'CJ 제일제당 SENSORY 내부 설문조사 시스템 구축',
    attr: [
      {
        period: '25.11 ~ 26.02',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: 'CJ제일제당 연구 상품 관련 내부 연구원 설문조사 및 평가를 위한 모바일 웹/앱 서비스. 연구원들의 편리한 설문 참여, 관리자의 실시간 응답 모니터링, 평가 결과 통계 및 시각화를 통해 연구 상품 개선 의사결정을 지원',
    skill: ['react', 'typescript', 'vite', 'scss', 'figma', 'gitlab'],
    work: [
      'CJ Olive Networks 자체 개발 Canal Framework 활용한 UI 컴포넌트 제작',
      'Ant Design 라이브러리를 활용한 공통 컴포넌트 제작',
      '그룹별 상이한 레이아웃을 가진 Drag & Drop 선호도 조사 UI 구현',
    ],
    result: [
      'Drag & Drop 기반 선호도 조사 UI 구현으로 사용자 경험 개선',
      'React/TypeScript 기반 공통 컴포넌트 체계 구축으로 개발 효율성 향상',
      '비상주 환경에서 GitLab feature 브랜치 전략으로 안정적인 버전 관리',
    ],
  },
  {
    id: 'prj02',
    no: 'project 02',
    img: [
      {
        src: '/images/temp/cgv01.png',
        alt: 'cgv 슬라이드 01',
      },
      {
        src: '/images/temp/cgv02.png',
        alt: 'cgv 슬라이드 02',
      },
      {
        src: '/images/temp/cgv03.png',
        alt: 'cgv 슬라이드 03',
      },
      {
        src: '/images/temp/cgv04.png',
        alt: 'cgv 슬라이드 04',
      },
    ],
    type: ['Responsive'],
    name: 'CGV 차세대 디지털 시스템 구축',
    attr: [
      {
        period: '24.05 ~ 25.07',
        contribution: '퍼블리싱 40%(작업 인원 3명)',
      },
    ],
    desc: '영화 예매, 모바일 티켓, 매점 상품(스토어) 구매, 액티비티 예약 등 사용자 편의성을 고려한 반응형 웹/앱 서비스 구축 프로젝트. 예매·결제·티켓 화면 등 주요 서비스 UI/UX 구현 및 각 카테고리별 재사용 가능한 공통 컴포넌트 구축',
    skill: ['react', 'typescript', 'next.js', 'scss', 'figma', 'gitlab', 'jira', 'confluence'],
    work: [
      '디자인 가이드 기반 공통 UI 컴포넌트 구축 및 모바일 티켓, 결제, 액티비티등 다수 카테고리 퍼블리싱 작업 진행',
      'Next.js 환경에서 Server/Client Component 구분한 퍼블리싱 작업 진행',
      'TypeScript interface 정의 및 React Hook(useState, useEffect) 활용 타입 안전한 동적 UI 구현',
      '외부 라이브러리(Swiper, Ant Design, react-swipe-to-delete-ios) 활용 및 커스터마이징',
      'SCSS module 기반 컴포넌트 스타일 관리',
    ],
    result: [
      'Server/Client Component 구분 및 module.scss 스타일 격리로 프로젝트 안정성 확보',
      '공통 컴포넌트 체계 구축으로 퍼블리셔 간 작업 효율성 및 코드 재사용성 향상',
      'TypeScript 타입 안정성으로 프로젝트 코드 품질 유지',
      '영화 예매, 스토어, 액티비티 등 다양한 서비스를 일관된 UI/UX로 통합 구현',
    ],
    site: 'https://cgv.co.kr/',
  },
  {
    id: 'prj03',
    no: 'project 03',
    img: [
      {
        src: '/images/temp/skt01.png',
        alt: 'skt 슬라이드 01',
      },
      {
        src: '/images/temp/skt02.png',
        alt: 'skt 슬라이드 02',
      },
      {
        src: '/images/temp/skt03.png',
        alt: 'skt 슬라이드 03',
      },
      {
        src: '/images/temp/skt04.png',
        alt: 'skt 슬라이드 04',
      },
    ],
    type: ['Adaptive', 'Pc'],
    name: 'SKT 정보보호 위험관리 내부 사이트 구축',
    attr: [
      {
        period: '23.09 ~ 24.01',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '기업 내부 정보보호 관리체계(ISMS-P) 인증 획득 및 유지를 위한 증적 관리 시스템. 정보보호 현황 모니터링, 인증 심사 대응 자료 관리, 증적 문서의 체계적 보관을 지원하는 사내 웹 서비스 개발',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'photoshop'],
    work: [
      '내부 보안 정책으로 인해 최신 브라우저가 아닌 Chrome 하위 버전 환경에 맞춰 퍼블리싱 진행',
      'jqGrid 라이브러리를 활용한 그리드 UI 커스텀 작업 진행',
      '정보보호 진단 보고서의 PDF 변환 및 A4 인쇄 규격 대응',
    ],
    result: [
      '레거시 브라우저 제약 환경에서 안정적인 시스템 구축 완료',
      '미디어 쿼리를 활용한 인쇄 맞춤 스타일링으로 인한 ISMS-P 인증 심사 대응 문서화 업무 효율성 향상',
    ],
  },
  {
    id: 'prj04',
    no: 'project 04',
    img: [
      {
        src: '/images/temp/ocloud01.png',
        alt: 'ocloud 슬라이드 01',
      },
      {
        src: '/images/temp/ocloud02.png',
        alt: 'ocloud 슬라이드 02',
      },
      {
        src: '/images/temp/ocloud03.png',
        alt: 'ocloud 슬라이드 03',
      },
      {
        src: '/images/temp/ocloud04.png',
        alt: 'ocloud 슬라이드 04',
      },
    ],
    type: ['Responsive'],
    name: 'CJ O’CLOUD 소개 사이트 리뉴얼 및 요금 계산기 구축',
    attr: [
      {
        period: '23.05 ~ 23.08',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '클라우드 서비스 소개 사이트 리뉴얼 및 요금 계산기 카테고리 신규 구축. 서비스 이용 전 예상 비용을 실시간으로 확인할 수 있는 요금 산정 시스템으로 사용자 편의성 강화',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'figma'],
    work: [
      '메인페이지 포함 클라우드 서비스 소개 사이트 리뉴얼',
      '요금 계산기 카테고리 신규 구축 및 실시간 요금 산정 UI 구현',
      'CSS 미디어쿼리를 활용한 반응형 레이아웃 제작',
      '웹 접근성 지침을 준수한 시맨틱 마크업 및 크로스브라우징 대응',
    ],
    result: [
      '요금 계산기 신규 구축으로 사용자의 서비스 비용 확인 편의성 향상',
      '반응형 웹 구현으로 PC/Tablet/Mobile 환경에서 일관된 사용자 경험 제공',
    ],
    site: 'https://ocloudservice.com/',
  },
  {
    id: 'prj05',
    no: 'project 05',
    type: ['Adaptive'],
    name: '삼성 CCC(Career Consulting Center) 내부 시스템 구축',
    attr: [
      {
        period: '22.10 ~ 23.02',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '퇴직·이직 예정 임직원의 재취업 지원을 위한 커리어 컨설팅 플랫폼 구축. 맞춤형 교육 프로그램, 커리어 컨설팅 신청, 구직 활동 지원 등 체계적인 재취업 콘텐츠를 사용자 페이지(FO)와 관리자 페이지(BO) 통합 구조로 제공',
    skill: ['vue.js', 'scss', 'photoshop', 'github', 'jira', 'confluence'],
    work: [
      'Vuetify UI 라이브러리를 활용한 폼, 버튼, 테이블 등 공통 컴포넌트 구현',
      '디자인 가이드 기반 대시보드 UI 컴포넌트 구축',
      'scoped CSS를 활용한 페이지별 스타일 격리 및 충돌 방지',
    ],
    result: [
      '공통 컴포넌트 체계 구축으로 개발 생산성 및 유지보수성 개선',
      'Vuetify 라이브러리 활용으로 완성도 높은 UI 구현',
    ],
  },
  {
    id: 'prj06',
    no: 'project 06',
    img: [
      {
        src: '/images/temp/dgb01.png',
        alt: 'dgb 슬라이드 01',
      },
      {
        src: '/images/temp/dgb02.png',
        alt: 'dgb 슬라이드 02',
      },
      {
        src: '/images/temp/dgb03.png',
        alt: 'dgb 슬라이드 03',
      },
    ],
    type: ['Hybrid App'],
    name: 'DGB 대구은행 iM 샵(#) SHOP 카테고리 구축',
    attr: [
      {
        period: '22.02 ~ 22.04',
        contribution: '퍼블리싱 40%(작업 인원 2명)',
      },
    ],
    desc: '대구 지역 소상공인 무료 홍보 및 쿠폰·혜택 중심의 소비자 서비스를 제공하는 iM SHOP 앱 내 SHOP 카테고리 구축. 고객 주문·결제 서비스와 점주 관리자 모드를 통한 소상공인 지원 플랫폼',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'adobe xd', 'svn'],
    work: [
      '고객 서비스 화면(주문/결제/장바구니/마이페이지) 및 점주 관리자 모드(직원 등록·관리, 실시간 주문 처리, 상품 등록·수정·재고 관리 등) UI 퍼블리싱 작업',
      '타 업체 선행 작업 분석 및 공통 레이아웃 구조 적용',
      '웹 접근성을 준수한 시맨틱 마크업 및 크로스브라우징 대응',
    ],
    result: [
      '고객 서비스와 점주 관리자 모드 통합 구축으로 소상공인 지원 플랫폼 완성',
      '기존 레이아웃 구조 활용으로 일관된 UI 및 개발 효율성 향상',
    ],
    site: 'https://m.imbank.co.kr/shp_ebz_nims_main_0010.act',
  },
  {
    id: 'prj07',
    no: 'project 07',
    img: [
      {
        src: '/images/temp/geogreen01.png',
        alt: 'geogreen 슬라이드 01',
      },
      {
        src: '/images/temp/geogreen02.png',
        alt: 'geogreen 슬라이드 02',
      },
    ],
    type: ['Adaptive'],
    name: '기술혁신 ESG기업 지오그린21 사이트 구축',
    attr: [
      {
        period: '21.09 ~ 21.10',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '환경·지하수·토양 엔지니어링 전문 기업인 geogreen21 회사 소개 웹사이트 구축 프로젝트',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'photoshop'],
    work: ['기업 홍보 및 서비스 안내 목적의 적응형 웹사이트 제작', 'Photoshop을 활용한 시안 확인 및 디자이너 협업'],
    result: [
      '기획/디자인과 긴밀한 협업을 통해 효율적인 산출물 제작',
      '프로젝트 관리 툴 활용으로 일정 및 업무 효율성 확보',
    ],
    site: 'https://www.geogreen21.com/',
  },
  // {
  //   id: 'prj08',
  //   no: 'project 08',
  //   type: ['Adaptive'],
  //   name: '이랜드 내부 차량 관리 & 회의실 예약 관리 사이트 구축',
  //   attr: [
  //     {
  //       period: '21.08 ~ 21.09',
  //       contribution: '퍼블리싱 100%',
  //     },
  //   ],
  //   desc: '이랜드 그룹 내부 임직원을 대상으로 차량 관리 및 회의실 예약 기능을 제공하는 사내 전용 사이트 구축 프로젝트',
  //   skill: ['html5', 'css3', 'javascript', 'jquery', 'photoshop'],
  //   result: [
  //     '웹 표준 및 웹 접근성을 준수한 웹 퍼블리싱 진행',
  //     'Photoshop을 활용한 시안 확인 및 디자이너 협업',
  //     '프로젝트 관리 툴(Redmine) 활용으로 일정 및 업무 효율성 확보',
  //   ],
  // },
];

export default function Carrer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<(SwiperType | null)[]>([]);
  const { isMobile } = useDeviceStore();

  return (
    <>
      {carArr.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'flex flex-col items-start gap-10 md:gap-20',
            index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row',
            style.carrer,
          )}
          data-aos={`fade-${isMobile ? 'down' : index % 2 !== 0 ? 'right' : 'left'}`}
          data-aos-duration={1000}
        >
          <div
            className={cn(
              'w-full md:max-w-[calc(100%-400px-50px)] md:min-w-[300px] lg:max-w-[calc(100%-650px-50px)] lg:min-w-[400px]',
              style.carrerImg,
            )}
          >
            {item.img ? (
              <>
                <Swiper
                  navigation
                  thumbs={{ swiper: thumbsSwiper[index] }}
                  modules={[Thumbs, EffectFade, Autoplay, Keyboard]}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  onSwiper={(swiper) => {
                    // 초기 aria-hidden 및 tabIndex 설정
                    swiper.slides.forEach((slide, idx) => {
                      const slideEl = slide as HTMLElement;
                      const isActive = idx === swiper.activeIndex;
                      slideEl.setAttribute('aria-hidden', isActive ? 'false' : 'true');
                      slideEl.setAttribute('tabindex', isActive ? '0' : '-1');
                    });
                  }}
                  onSlideChange={(swiper) => {
                    // 슬라이드 변경 시 aria-hidden 및 tabIndex 업데이트
                    swiper.slides.forEach((slide, idx) => {
                      const slideEl = slide as HTMLElement;
                      const isActive = idx === swiper.activeIndex;
                      slideEl.setAttribute('aria-hidden', isActive ? 'false' : 'true');
                      slideEl.setAttribute('tabindex', isActive ? '0' : '-1');
                    });
                    // autoplay로 인한 변경에서는 포커스 이동하지 않음
                  }}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="aspect-square"
                  effect="fade"
                  aria-roledescription="carousel"
                  aria-label={`${item.name} 이미지 갤러리, 총 ${item.img.length}개 이미지`}
                >
                  {item.img.map((el, index) => (
                    <SwiperSlide
                      key={index}
                      className="overflow-hidden rounded-[10px] bg-white"
                      aria-label={`이미지 ${index + 1} / ${item.img ? item.img.length : 1}`}
                    >
                      <Image
                        alt={el.alt}
                        src={el.src}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={(swiper) => {
                    setThumbsSwiper((prev) => {
                      const newSwipers = [...prev];
                      newSwipers[index] = swiper;
                      return newSwipers;
                    });
                  }}
                  modules={[Navigation, Thumbs]}
                  slidesPerView="auto"
                  spaceBetween={10}
                  className="mt-4"
                >
                  {item.img.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      tabIndex={0}
                      className={`aspect-square !w-[calc((100%-30px)/4)] cursor-pointer overflow-hidden rounded-[10px] bg-white`}
                    >
                      <Image
                        alt={item.alt}
                        src={item.src}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <NoImage />
            )}
          </div>
          <div
            className={`${style.carrerCon}`}
            tabIndex={0}
          >
            <b className="mb-6 block text-2xl tracking-widest uppercase md:text-3xl">{item.no}</b>
            <h2 className="mb-6 text-3xl font-bold break-keep md:text-5xl md:leading-[35px]">{item.name}</h2>
            <div className={cn('mb-6 flex gap-3 text-xl md:gap-6 lg:text-2xl', style.carrerAttr)}>
              {item.attr.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="relative flex items-center gap-3 font-medium">{item.period}</span>
                  <span className="relative flex items-center gap-3 font-medium">{item.contribution}</span>
                </React.Fragment>
              ))}
            </div>
            <p className={cn('mb-6 text-2xl break-all', style.carrerDesc)}>{item.desc}</p>
            <ul className={cn('mb-8 flex flex-wrap items-start gap-4', style.carrerSkill)}>
              {item.skill.map((item, index) => (
                <li
                  className="rounded-xl px-3 py-2 text-xl"
                  key={index}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
            <div className={cn('min-h-[150px] overflow-hidden rounded-[12px]', style.carrerResult)}>
              <div className={cn('flex gap-4 p-6', style.carrerResultHead)}>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className={cn('h-[12px] w-[12px] rounded-[12px]', style.carrerResultDot)}
                  >
                    <em className="sr-only">{`도트표기${index}`}</em>
                  </span>
                ))}
              </div>
              <div className={cn('p-6', style.carrerResultCon)}>
                <div className="text-3xl">
                  <h3 className="mb-3 text-2xl">업무</h3>
                  <ul className={`flex flex-col gap-2`}>
                    {item.work?.map((item, index) => (
                      <li
                        key={index}
                        className="relative pl-6 text-2xl"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="mb-3 text-2xl">성과</h3>
                  <ul className={`flex flex-col gap-2`}>
                    {item.result.map((item, index) => (
                      <li
                        key={index}
                        className="relative pl-6 text-2xl"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {item.site ? (
              <Link
                target="_blink"
                href={item.site ?? ''}
                className={cn('mt-6 block w-full rounded-[20px] py-4 text-center text-2xl', style.carrerUrl)}
              >
                <span>Live Site</span>
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </>
  );
}
