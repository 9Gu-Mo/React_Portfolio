'use client';

// component
import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import TimeLine from '@/component/common/TimeLine';

// hook
import { useEffect, useRef } from 'react';

// store
import { useHeaderStore } from '@/stores/useHeaderStore';
import Skill from '@/component/common/Skill';

export default function Contents() {
  const content = [
    {
      id: 'item01',
      children: <TimeLine />,
    },
    {
      id: 'item02',
      children: <Thumbnail />,
    },
    {
      id: 'item03',
      children: <Skill />,
      aosType: 'fade-down',
      aosDuration: 1000,
    },
  ];

  // const itemRef = useRef<(HTMLDivElement | null)[]>([]);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const setIsPassedTarget = useHeaderStore((state) => state.setIsPassedTarget);

  useEffect(() => {
    const handleScroll = () => {
      // 페이지 스크롤 위치값
      const scrollY = window.scrollY;
      // 컨텐츠 최상단 높이값
      const contentTop = targetRef.current?.offsetTop ?? 0;

      // header
      setIsPassedTarget(scrollY >= contentTop - 54);

      // anchor
      // const index = itemRef.current.findIndex((el, i) => {
      //   if (!el) return false;
      //   const rect = el.getBoundingClientRect();
      //   const top = rect.top + scrollY;
      //   const nextEl = itemRef.current[i + 1];
      //   const nextTop = nextEl ? nextEl.getBoundingClientRect().top + scrollY : Infinity;
      //   return scrollY >= top && scrollY < nextTop;
      // });

      // if (index !== -1) {
      //   setActiveIndex(index);
      // }
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
    <div
      className="content relative"
      ref={targetRef}
    >
      <div className="mx-auto flex max-w-[1200px] items-start gap-8 px-4">
        {/* content */}
        <div className="w-full">
          {content.map((item) => (
            <Content
              key={item.id}
              id={item.id}
              aosType={item.aosType}
              aosDuration={item.aosDuration}
            >
              {item.children}
            </Content>
          ))}
        </div>

        {/* sticky anchor */}
        {/* <section className={`top-26 my-22 h-full w-[100px] ${fixed ? 'fixed' : 'sticky'}`}> */}
        {/* <section className={`fixed top-26 my-22 h-full w-[100px] md:sticky ${fixed ? '' : 'sticky'}`}>
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
        </section> */}
      </div>
    </div>
  );
}
