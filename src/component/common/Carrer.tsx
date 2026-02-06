'use client';

// type
type ProjectType = 'pc' | 'mo' | 'responsive' | 'adaptive';

interface ImageType {
  src: string;
  alt: string;
}

interface AttrType {
  period: string;
  contribution: string;
  role: string;
}

interface Props {
  id: string;
  no: string;
  img: ImageType[];
  type: ProjectType;
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
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        alt: 'img01',
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: 'img02',
      },
      {
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        alt: 'img03',
      },
      {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
        alt: 'img04',
      },
    ],
    type: 'pc',
    name: '가나다라마바사아자차타',
    attr: [
      {
        period: '25.11 ~ 26.02',
        role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: 'CJ제일제당 연구 상품 관련 내부 연구원 설문조사 및 평가를 위한 모바일 웹/앱 서비스. 연구원들의 편리한 설문 참여, 관리자의 실시간 응답 모니터링, 평가 결과 통계 및 시각화를 통해 연구 상품 개선 의사결정을 지원',
    skill: ['react', 'typescript', 'vite', 'scss', 'figma', 'gitlab'],
    result: [
      'CJ Olive Networks 자체 개발 Canal Framework 활용한 UI 컴포넌트 제작(BO)',
      'Ant Design 라이브러리를 활용한 공통 컴포넌트 제작(BO, FO)',
      'hello-pangea/dnd 라이브러리를 활용한 Drag And Drop 컴포넌트 제작(FO)',
      'GitLab을 활용한 FE 개발자와의 협업 업무 수행',
      'Figma를 통한 디자인 시안 확인 및 협업 진행',
    ],
    site: 'https://cgv.co.kr/',
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
    type: 'mo',
    name: '가나다라마바사아자차타',
    attr: [
      {
        period: '25.11 ~ 26.02',
        role: '웹 퍼블리셔',
        contribution: '퍼블리싱 100%',
      },
    ],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    skill: ['react', 'typescript'],
    result: [
      'consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
      'tempor incididunt ut labore Lorem ipsum dolor sit',
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
          className={`flex flex-col items-start gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} ${style.carrer}`}
          data-aos={`fade-${isMobile ? 'down' : index % 2 !== 0 ? 'right' : 'left'}`}
          data-aos-duration={1000}
        >
          <div
            className={`${style.carrerImg} w-full md:max-w-[calc(100%-400px-50px)] lg:max-w-[calc(100%-650px-50px)]`}
          >
            <Swiper
              navigation
              thumbs={{ swiper: thumbsSwiper[index] }}
              modules={[Thumbs, EffectFade, Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="aspect-square"
              effect="fade"
            >
              {item.img.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="overflow-hidden rounded-[10px]"
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
                  className={`aspect-square !w-[calc((100%-30px)/4)] cursor-pointer overflow-hidden rounded-[10px]`}
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
          <div className={`${style.carrerCon} md:min-w-[400px] lg:min-w-[650px]`}>
            <b className="mb-6 block text-3xl tracking-widest uppercase">{item.no}</b>
            <h2 className="mb-6 text-5xl font-bold">{item.name}</h2>
            <div className={`${style.carrerAttr} mb-6 flex gap-6 text-2xl`}>
              {item.attr.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="relative flex items-center gap-3 font-medium">{item.period}</span>
                  <span className="relative flex items-center gap-3 font-medium">{item.role}</span>
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
            <div className={`${style.carrerResult} min-h-[200px] rounded-[12px]`}>
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
