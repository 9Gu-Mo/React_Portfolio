'use client';

import { useEffect, useRef } from 'react';
import { create } from 'zustand';

// store의 상태 타입 정의
interface ScrollState {
  isScrolled: boolean; // 스크롤 동작 여부
  scrollY: number; // 스크롤 위치 값
  setIsScrolled: (value: boolean) => void; // isScrolled 변경 함수
  setScrollY: (value: number) => void; // scrollY 변경 함수
}

// store 생성
export const useScrollStore = create<ScrollState>((set) => ({
  isScrolled: false,
  scrollY: 0,

  // set을 사용해 상태 업데이트
  // setIsScrolled: (value) => set({ isScrolled: value }),
  // setScrollY: (value) => set({ scrollY: value }),
  setIsScrolled: (value) => {
    console.log('🔵 setIsScrolled 호출:', value);
    set({ isScrolled: value });
  },
  setScrollY: (value) => {
    console.log('📊 setScrollY 호출:', value);
    set({ scrollY: value });
  },
}));

export function useScrollObserver(rootMargin = '-54px 0px 0px 0px') {
  // 높이값 요소 ref
  const targetRef = useRef<HTMLDivElement>(null);
  const setIsScrolled = useScrollStore((state) => state.setIsScrolled);
  const setScrollY = useScrollStore((state) => state.setScrollY);

  useEffect(() => {
    console.log('🟢 useScrollObserver 마운트됨');
    console.log('🎯 targetRef.current:', targetRef.current);

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('👀 Intersection 감지!');
        console.log('  - isIntersecting:', entry.isIntersecting);
        console.log('  - intersectionRatio:', entry.intersectionRatio);
        console.log('  - boundingClientRect:', entry.boundingClientRect);
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin }
    );

    if (targetRef.current) {
      console.log('✅ Observer 시작!');
      observer.observe(targetRef.current);
    } else {
      console.log('❌ targetRef.current가 null입니다!');
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      console.log('🔴 useScrollObserver 언마운트됨');
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rootMargin, setIsScrolled, setScrollY]);

  return targetRef;
}
