'use client';

import { create } from 'zustand';
import { useEffect, useState, useCallback } from 'react';

interface ScrollState {
  isScrolled: boolean;
  scrollY: number;
  setIsScrolled: (value: boolean) => void;
  setScrollY: (value: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  isScrolled: false,
  scrollY: 0,
  setIsScrolled: (value) => set({ isScrolled: value }),
  setScrollY: (value) => set({ scrollY: value }),
}));

export function useScrollObserver(rootMargin = '-54px 0px 0px 0px') {
  const [targetElement, setTargetElement] = useState<HTMLDivElement | null>(null);
  const setIsScrolled = useScrollStore((state) => state.setIsScrolled);
  const setScrollY = useScrollStore((state) => state.setScrollY);

  const targetRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setTargetElement(node);
    }
  }, []);

  useEffect(() => {
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin }
    );

    observer.observe(targetElement);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetElement, rootMargin, setIsScrolled, setScrollY]);

  return targetRef;
}
