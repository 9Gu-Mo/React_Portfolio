'use client';

import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import { useHeaderStore } from '@/stores/useHeaderStore';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Contents() {
  const content = [
    {
      id: 'item01',
      children: <Thumbnail />,
      aosType: 'fade-right',
      aosDuration: 700,
    },
    {
      id: 'item02',
      children: <div>item02</div>,
      aosDuration: 700,
    },
    {
      id: 'item03',
      children: <div>item03</div>,
      aosType: 'fade-right',
      aosDuration: 700,
    },
  ];

  const setIsPassedTarget = useHeaderStore((state) => state.setIsPassedTarget);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const handleScroll = () => {
      // target content 상단 위치 저장
      const targetOffsetTop = targetRef.current!.offsetTop;

      // 현재 스크롤 값 저장
      const scrollY = window.scrollY;

      setIsPassedTarget(scrollY >= targetOffsetTop - 54);
    };

    // 페이지 초기 진입 시 상태 계산
    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsPassedTarget]);

  return (
    <div
      className="content relative"
      ref={targetRef}
    >
      <div className="mx-auto flex max-w-[1200px] items-start gap-4 px-4">
        {/* content */}
        <div className="w-[calc(100%-110px)]">
          {content.map((item) => (
            <Content
              key={item.id}
              id={item.id}
              // aosType={item.aosType}
              // aosDuration={item.aosDuration}
            >
              {item.children}
            </Content>
          ))}
        </div>

        {/* sticky anchor */}
        <section className="sticky top-26 my-22 h-full w-[100px] bg-red-100">
          <ul>
            {content.map((item, index) => (
              <li
                key={item.id}
                className="relative"
              >
                <Link href={`#${item.id}`}>
                  {index + 1}.{item.id}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
