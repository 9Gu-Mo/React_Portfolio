'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ScrollTrigger.normalizeScroll(false);

    const trigger = triggerRef.current;
    const section = sectionRef.current;

    if (!section || !trigger) return;

    const panels = gsap.utils.toArray<HTMLElement>('.panel');

    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 1,
        // snap: 1 / (panels.length - 1),
        end: () => `+=${section.offsetWidth + 1000}`,
        // markers: true, // 디버깅용 (개발 시에만 사용)
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={triggerRef}
        className="overflow-hidden"
      >
        <section
          ref={sectionRef}
          className="flex h-screen w-fit"
        >
          <div className="panel flex h-full w-screen flex-shrink-0 items-center justify-center bg-red-500">
            <h2 className="text-4xl text-white">가로 패널 1</h2>
          </div>
          <div className="panel flex h-full w-screen flex-shrink-0 items-center justify-center bg-green-500">
            <h2 className="text-4xl text-white">가로 패널 2</h2>
          </div>
          <div className="panel flex h-full w-screen flex-shrink-0 items-center justify-center bg-yellow-500">
            <h2 className="text-4xl text-white">가로 패널 3</h2>
          </div>
          <div className="panel flex h-full w-screen flex-shrink-0 items-center justify-center bg-purple-500">
            <h2 className="text-4xl text-white">가로 패널 4</h2>
          </div>
        </section>
      </div>
    </>
  );
}
