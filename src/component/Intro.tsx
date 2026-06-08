'use client';

import { useEffect, useRef } from 'react';
import style from '../styles/Intro.module.scss';

interface IntroProps {
  onDisMiss: () => void;
}

const PROGRESS_DURATION = 1800;
const HOLD_AFTER_FULL = 400;
const SLIDE_DURATION = 900;

export default function Intro({ onDisMiss }: IntroProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const add = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    // 1단계 — 텍스트 페이드인
    add(() => innerRef.current?.classList.add(style.visible), 150);

    // 2단계 — 프로그레스바 시작
    // width 트랜지션은 CSS에 걸려 있으므로,
    // 한 프레임 뒤에 클래스를 붙여야 브라우저가 0% → 100%를 감지함
    add(() => {
      requestAnimationFrame(() => {
        fillRef.current?.classList.add(style.running);
      });
    }, 300);

    // 3단계 — 슬라이드 아웃
    const slideStart = 300 + PROGRESS_DURATION + HOLD_AFTER_FULL;

    add(() => {
      const el = overlayRef.current;
      if (!el) return;

      el.classList.add(style.slideOut);

      // ✅ transitionend 기반으로 변경
      el.addEventListener(
        'transitionend',
        (e) => {
          if (e.propertyName === 'transform') onDisMiss();
        },
        { once: true },
      );
    }, slideStart);

    // 4단계 — 애니메이션 종료 후 언마운트
    add(onDisMiss, slideStart + SLIDE_DURATION);

    return () => timers.forEach(clearTimeout);
  }, [onDisMiss]);

  const handleSkip = () => {
    // 진행 중인 타이머와 무관하게 즉시 슬라이드 아웃
    overlayRef.current?.classList.add(style.slideOut);
    setTimeout(onDisMiss, SLIDE_DURATION);
  };

  return (
    <div
      ref={overlayRef}
      className={style.intro}
    >
      <div
        ref={innerRef}
        className={style.inner}
      >
        <p className={style.eyebrow}>PUBLISHER</p>
        <h1 className={style.title}>
          구원모
          <br />
          <span>포트폴리오</span>
        </h1>
      </div>

      <div className={style.progressTrack}>
        <div
          ref={fillRef}
          className={style.progressFill}
        />
      </div>

      <button
        className={style.skip}
        onClick={handleSkip}
      >
        Skip
      </button>
    </div>
  );
}
