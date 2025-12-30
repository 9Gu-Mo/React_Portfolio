'use client';

import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import { useHeaderStore } from '@/stores/useHeaderStore';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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

      const center = scrollY + window.innerHeight / 2;

      const index = itemRef.current.findIndex((el, i) => {
        if (!el) return false;

        const top = el.offsetTop;
        const nextTop = itemRef.current[i + 1]?.offsetTop ?? Infinity;

        return center >= top && center < nextTop;
      });

      if (index !== -1) {
        setActiveIndex(index);
      }
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

  const [activeIndex, setActiveIndex] = useState(0);

  const itemRef = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = Math.min(content.length - 1, Math.floor(latest * content.length));
    setActiveIndex(step);
  });

  return (
    <div
      className="content relative"
      ref={targetRef}
    >
      <div className="mx-auto flex max-w-[1200px] items-start gap-8 px-4">
        {/* content */}
        <div className="w-[calc(100%-120px)]">
          {content.map((item, index) => (
            <Content
              key={item.id}
              id={item.id}
              ref={(el) => {
                itemRef.current[index] = el;
              }}
              // aosType={item.aosType}
              // aosDuration={item.aosDuration}
            >
              {item.children}
            </Content>
          ))}
        </div>

        {/* sticky anchor */}
        <section className="sticky top-26 my-22 h-full w-[100px]">
          <ul className="flex flex-col gap-4">
            {content.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  key={item.id}
                  className="relative flex items-center gap-4"
                >
                  <motion.span
                    animate={{
                      scale: isActive ? 1.4 : 1,
                      backgroundColor: isActive ? '#3b82f6' : '#d1d5db',
                    }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    className="inline-block h-3.5 w-3.5 rounded-full"
                  />

                  <Link
                    href={`#${item.id}`}
                    className={`text-lg font-semibold ${isActive ? 'text-blue-600' : 'text-gray-900'}`}
                  >
                    {index + 1}.{item.id}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
