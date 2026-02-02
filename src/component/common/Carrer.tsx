'use client';

// type
type ProjectType = 'pc' | 'mo' | 'responsive' | 'adaptive';

interface ImageType {
  src: string;
  alt: string;
}

interface Props {
  id: string;
  no: string;
  img: ImageType[];
  type: ProjectType;
  name: string;
  period: string;
  contribution: string;
  desc: string;
  skill: string[];
  result: string[];
  site?: string;
}

// next
import Image from 'next/image';
import { useState } from 'react';

// lib
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

// style
import style from '@/styles/Carrer.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

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
    period: '25.11 ~ 26.02',
    contribution: '100%',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    skill: ['react', 'typescript'],
    result: ['ss', 'ss'],
  },
];

export default function Carrer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      {carArr.map((item) => (
        <div
          key={item.id}
          className={`flex items-start gap-20 ${style.carrer}`}
        >
          <div className={`w-[500px] ${style.carrerImg}`}>
            <Swiper
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, EffectFade, Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="h-[500px]"
              effect="fade"
            >
              {item.img.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    alt={item.alt}
                    src={item.src}
                    width={500}
                    height={500}
                    className="h-full rounded-[10px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Navigation, Thumbs]}
              slidesPerView={5}
              spaceBetween={10}
              className="h-[100px] md:mt-8"
            >
              {item.img.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    alt={item.alt}
                    src={item.src}
                    width={100}
                    height={100}
                    className="h-full rounded-[10px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={style.carrerCon}>
            <b className="mb-4 block text-3xl tracking-widest uppercase">{item.no}</b>
            <h2 className="mb-6 text-5xl font-bold">{item.name}</h2>
            <div className="flex gap-4 text-2xl">
              <span>{item.period}</span>
              <span>{item.contribution}</span>
            </div>
            <p>{item.desc}</p>
            <ul>
              {item.skill.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div>
              <h3>주요 성과 및 특징</h3>
              <ul>
                {item.result.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
