'use client';

import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import { useHeaderStore } from '@/stores/useHeaderStore';
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
      className="content"
      ref={targetRef}
    >
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
  );
}
