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
  img: ImageType[];
  type: string[];
  name: string;
  attr: AttrType[];
  desc: string;
  skill: string[];
  result: string[];
  site?: string;
}

// react
import React, { useState } from 'react';

// next
import Image from 'next/image';
import Link from 'next/link';

// lib
import { Autoplay, EffectFade, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

// store
import { useDeviceStore } from '@/stores/useDeviceStore';

// style
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
        alt: 'img01',
      },
      {
        src: '/images/temp/cheilJedang02.png',
        alt: 'img02',
      },
      {
        src: '/images/temp/cheilJedang03.png',
        alt: 'img03',
      },
    ],
    type: ['Mobile', 'Adaptive'],
    name: 'CJ 제일제당 SENSORY 내부 설문조사 시스템 구축',
    attr: [
      {
        period: '25.11 ~ ',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: 'CJ제일제당 연구 상품 관련 내부 연구원 설문조사 및 평가를 위한 모바일 웹/앱 서비스. 연구원들의 편리한 설문 참여, 관리자의 실시간 응답 모니터링, 평가 결과 통계 및 시각화를 통해 연구 상품 개선 의사결정을 지원',
    skill: ['react', 'typescript', 'vite', 'scss', 'figma', 'gitlab'],
    result: [
      'CJ Olive Networks 자체 개발 Canal Framework를 활용한 UI 컴포넌트 제작',
      'Ant Design 라이브러리를 활용한 공통 컴포넌트 제작',
      'hello-pangea/dnd 라이브러리를 활용한 Drag And Drop 컴포넌트 제작',
      'GitLab을 활용한 FE 개발자와의 협업 업무 수행',
      'Figma를 통한 디자인 시안 확인 및 협업 진행',
    ],
  },
  {
    id: 'prj02',
    no: 'project 02',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Responsive'],
    name: 'CGV 차세대 디지털 시스템 구축',
    attr: [
      {
        period: '24.05 ~ 25.07',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 40%(작업 인원 3명)',
      },
    ],
    desc: '영화 예매, 모바일 티켓, 매점 상품(스토어) 구매, 액티비티 예약 등 사용자 편의성을 고려한 반응형 웹/앱 서비스 구축 프로젝트. 예매·결제·티켓 화면 등 주요 서비스 UI/UX 구현 및 각 카테고리별 재사용 가능한 공통 컴포넌트 구축',
    skill: ['react', 'typescript', 'next.js', 'scss', 'figma', 'gitlab', 'jira', 'confluence'],
    result: [
      '디자인 가이드 기반 공통 UI 컴포넌트 구축 및 map 구조화를 통한 재사용성 향상',
      'React Hook(useState, useEffect) 및 조건부 렌더링 기반 동적 UI 구현',
      '웹 접근성 준수 및 크로스브라우징 대응으로 안정적인 서비스 품질 제공',
      'Swiper, Ant Design, AUI Grid 라이브러리 활용한 FO/BO UI 구현',
      'module.scss 적용으로 컴포넌트 스타일 격리 및 클래스 충돌 방지',
      'GitLab·Jira·Confluence·Figma 기반 프로젝트 협업 및 이슈 관리',
    ],
    site: 'https://cgv.co.kr/',
  },
  {
    id: 'prj03',
    no: 'project 03',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Adaptive', 'Pc'],
    name: 'SKT ISMS-P 증적관리 내부 시스템 구축',
    attr: [
      {
        period: '23.09 ~ 24.02',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '기업 내부의 정보보호 관리체계(ISMS-P) 인증 획득 및 유지를 위한 증적 관리 시스템 구축. 정보보호 현황 모니터링, 인증 심사 대응 자료 관리, 관련 문서 및 증적 자료의 체계적 보관을 지원하는 사내 웹 서비스 개발',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'photoshop'],
    result: [
      '내부 보안 정책으로 인해 최신 브라우저가 아닌 Chrome 하위 버전(8.xx) 환경에 맞춰 개발 진행',
      'jqGrid 라이브러리를 활용한 데이터 그리드 UI 구현',
      '정보보호 진단 보고서의 PDF 변환 및 A4 인쇄 규격 대응',
    ],
  },
  {
    id: 'prj04',
    no: 'project 04',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Responsive'],
    name: 'CJ O’CLOUD 소개 사이트 리뉴얼 및 요금 계산기 구축',
    attr: [
      {
        period: '23.05 ~ 23.08',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '클라우드 서비스 소개 사이트 리뉴얼 및 요금 계산기 카테고리 신규 구축. 서비스 이용 전 예상 비용을 실시간으로 확인할 수 있는 요금 산정 시스템을 통한 사용자의 편의성을 강화하는 UI 구현',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'figma'],
    result: [
      '메인페이지 포함 클라우드 서비스 소개 사이트 리뉴얼',
      '요금 계산기 카테고리 신규 구축 및 실시간 요금 산정 UI 구현',
      'CSS 미디어쿼리를 활용한 PC/Tablet/Mobile 반응형 레이아웃 제작',
      '웹 접근성 지침 준수한 시맨틱 마크업 및 크로스브라우징 대응',
    ],
    site: 'https://ocloudservice.com/',
  },
  {
    id: 'prj05',
    no: 'project 05',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Adaptive'],
    name: '삼성 CCC(Career Consulting Center) 내부 시스템 구축',
    attr: [
      {
        period: '22.10 ~ 23.02',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '퇴직·이직 예정 임직원의 재취업 지원을 위한 커리어 컨설팅 플랫폼 구축. 맞춤형 교육 프로그램, 커리어 컨설팅 신청, 구직 활동 지원 등 체계적인 재취업 콘텐츠를 사용자 페이지(FO)와 관리자 페이지(BO) 통합 구조로 제공',
    skill: ['vue.js', 'scss', 'photoshop', 'github', 'figma', 'jira', 'confluence'],
    result: [
      'Samsung SDS 자체 개발 라이브러리(DWP) 및 Vuetify UI 라이브러리 분석 및 적용',
      '디자인 가이드 기반 공통 UI 컴포넌트 구축',
      '사용자/관리자 페이지 통합 구조 및 계정 권한별 GNB 메뉴 노출 기능 구현',
      'scoped CSS를 활용한 페이지별 스타일 격리 및 충돌 방지',
    ],
  },
  {
    id: 'prj06',
    no: 'project 06',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Hybrid App'],
    name: 'DGB 대구은행 IM 샵(#) SHOP 카테고리 구축',
    attr: [
      {
        period: '22.02 ~ 22.04',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 40%(작업 인원 2명)',
      },
    ],
    desc: '대구 지역 소상공인 무료 홍보 및 쿠폰·혜택 중심의 소비자 서비스를 제공하는 iM SHOP 앱 내 SHOP 카테고리 구축. 고객 주문·결제 서비스와 점주 관리자 모드를 통한 소상공인 지원 플랫폼',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'adobe xd', 'svn'],
    result: [
      '고객 서비스 화면(주문/결제/장바구니/마이페이지) 및 점주 관리자 모드(직원 등록·관리, 실시간 주문 처리, 상품 등록·수정·재고 관리 등) UI 퍼블리싱 작업',
      '타 업체 선행 작업 분석 및 공통 레이아웃 구조 적용',
      '고객사에서 제공한 웹표준 및 웹 접근성 지침을 준수한 퍼블리싱 작업 진행',
      'SVN을 활용한 버전 관리 및 산출물 공유',
    ],
  },
  {
    id: 'prj07',
    no: 'project 07',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Adaptive'],
    name: '기술혁신 ESG기업 지오그린21 사이트 구축',
    attr: [
      {
        period: '21.09 ~ 21.10',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '환경·지하수·토양 엔지니어링 전문 기업인 geogreen21 회사 소개 웹사이트 구축 프로젝트',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'photoshop'],
    result: [
      '기업 홍보 및 서비스 안내 목적의 적응형 웹사이트 제작',
      'Photoshop을 활용한 시안 확인 및 디자이너 협업',
      '프로젝트 관리 툴(Redmine) 활용으로 일정 및 업무 효율성 확보',
    ],
    site: 'https://www.geogreen21.com/',
  },
  {
    id: 'prj08',
    no: 'project 08',
    img: [
      {
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
    ],
    type: ['Adaptive'],
    name: '이랜드 내부 차량 관리 & 회의실 예약 관리 사이트 구축',
    attr: [
      {
        period: '21.08 ~ 21.09',
        // role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: '이랜드 그룹 내부 임직원을 대상으로 차량 관리 및 회의실 예약 기능을 제공하는 사내 전용 사이트 구축 프로젝트',
    skill: ['html5', 'css3', 'javascript', 'jquery', 'photoshop'],
    result: [
      '웹 표준 및 웹 접근성을 준수한 웹 퍼블리싱 진행',
      'Photoshop을 활용한 시안 확인 및 디자이너 협업',
      '프로젝트 관리 툴(Redmine) 활용으로 일정 및 업무 효율성 확보',
    ],
  },
];

export default function Carrer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<(SwiperType | null)[]>([]);
  const { isMobile } = useDeviceStore();

  return (
    <>
      {carArr.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col items-start gap-10 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} ${style.carrer}`}
          data-aos={`fade-${isMobile ? 'down' : index % 2 !== 0 ? 'right' : 'left'}`}
          data-aos-duration={1000}
        >
          <div
            className={`${style.carrerImg} w-full md:max-w-[calc(100%-400px-50px)] md:min-w-[300px] lg:max-w-[calc(100%-650px-50px)] lg:min-w-[400px]`}
          >
            <Swiper
              navigation
              thumbs={{ swiper: thumbsSwiper[index] }}
              modules={[Thumbs, EffectFade, Autoplay]}
              slidesPerView={1}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              className="aspect-square"
              effect="fade"
            >
              {item.img.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="overflow-hidden rounded-[10px] bg-white"
                >
                  <Image
                    alt={item.alt}
                    src={item.src}
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
          </div>
          {/* <div className={`${style.carrerCon} md:min-w-[400px] lg:min-w-[650px]`}> */}
          <div className={`${style.carrerCon}`}>
            <b className="mb-6 block text-2xl tracking-widest uppercase md:text-3xl">{item.no}</b>
            <h2 className="mb-6 text-3xl font-bold break-keep md:text-5xl md:leading-[35px]">{item.name}</h2>
            <div className={`${style.carrerAttr} mb-6 flex gap-3 text-xl md:gap-6 lg:text-2xl`}>
              {item.attr.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="relative flex items-center gap-3 font-medium">{item.period}</span>
                  {/* <span className="relative flex items-center gap-3 font-medium">{item.role}</span> */}
                  <span className="relative flex items-center gap-3 font-medium">{item.contribution}</span>
                </React.Fragment>
              ))}
            </div>
            <p className={`${style.carrerDesc} mb-6 text-2xl break-all`}>{item.desc}</p>
            <ul className={`${style.carrerSkill} mb-8 flex flex-wrap items-start gap-4`}>
              {item.skill.map((item, index) => (
                <li
                  className="rounded-xl px-3 py-2 text-xl"
                  key={index}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
            <div className={`${style.carrerResult} min-h-[150px] rounded-[12px]`}>
              <div className={`${style.carrerResultHead} flex gap-4 p-6`}>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className={`${style.carrerResultDot} h-[12px] w-[12px] rounded-[12px]`}
                  >
                    <em className="sr-only">{`도트표기${index}`}</em>
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-2 p-6">
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
            {item.site ? (
              <Link
                target="_blink"
                href={item.site ?? ''}
                className={`mt-6 block w-full rounded-[10px] py-4 text-center text-2xl ${style.carrerUrl}`}
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
