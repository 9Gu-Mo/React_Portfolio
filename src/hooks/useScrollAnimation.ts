'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOption {
  threshold?: number; // 요소가 얼마나 보여야 감지할지 결정(0~1)
  rootMargin?: string; // 감지 영역 확장/축소
  triggerOnce?: boolean; // 한 번만 트리거할지 여부 결정
}

// 별도로 타입을 명시하지 않으면 요소 타입의 기본값을 HTMLDivElement로 인지
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(option: UseScrollAnimationOption = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = option;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      // callback
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(!isVisible);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(isVisible);
        }
      },

      // option
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
