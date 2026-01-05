'use client';

import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import { motion } from 'framer-motion';
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

  const itemRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 값 저장
      const scrollY = window.scrollY;

      const index = itemRef.current.findIndex((el, i) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const nextEl = itemRef.current[i + 1];
        const nextTop = nextEl ? nextEl.getBoundingClientRect().top + scrollY : Infinity;
        return scrollY >= top && scrollY < nextTop;
      });

      console.log('index', index);

      if (index !== -1) {
        setActiveIndex(index);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="content relative">
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
          <ul className="flex flex-col gap-8">
            {content.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  key={item.id}
                  className={`relative flex items-center gap-4 text-lg font-semibold ${isActive ? 'text-blue-500' : 'text-gray-400'}`}
                >
                  <motion.span
                    animate={{
                      scale: isActive ? 1.4 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    className={`inline-block h-3.5 w-3.5 rounded-full ${isActive ? 'bg-blue-500' : 'bg-gray-400'}`}
                  />

                  <Link href={`#${item.id}`}>{item.id}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
