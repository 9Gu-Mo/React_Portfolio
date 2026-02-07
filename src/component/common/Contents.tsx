'use client';

// component
import About from '@/component/common/About';
import Content from '@/component/common/Content';
import Skill from '@/component/common/Skill';

// hook
import { useEffect, useRef } from 'react';

// store
import Carrer from '@/component/common/Carrer';
import { useHeaderStore } from '@/stores/useHeaderStore';

export default function Contents() {
  const content = [
    {
      id: 'about',
      children: <About />,
    },
    {
      id: 'skill',
      children: <Skill />,
    },
    {
      id: 'career',
      children: <Carrer />,
    },
    {
      id: 'contact',
      children: '문의정보',
    },
  ];

  const targetRef = useRef<HTMLDivElement | null>(null);
  const setIsPassedTarget = useHeaderStore((state) => state.setIsPassedTarget);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      const contentTop = Math.round(targetRef.current.getBoundingClientRect().top);

      setIsPassedTarget(0 >= contentTop - 70);
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
      className="relative"
      ref={targetRef}
    >
      <div className="content flex flex-col items-start overflow-x-hidden">
        {/* content */}
        {content.map((item) => (
          <Content
            key={item.id}
            id={item.id}
          >
            {item.children}
          </Content>
        ))}
      </div>
    </div>
  );
}
