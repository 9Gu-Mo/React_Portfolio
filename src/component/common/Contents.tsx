'use client';

// component
import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import Skill from '@/component/common/Skill';
import Footer from '@/component/layout/Footer';

// hook
import { useEffect, useRef } from 'react';

// store
import { useHeaderStore } from '@/stores/useHeaderStore';
import Contact from '@/component/common/Contact';

export default function Contents() {
  const content = [
    {
      id: 'about',
      // children: <TimeLine />,
      children: <div>ss</div>,
    },
    {
      id: 'career',
      children: <Thumbnail />,
    },
    {
      id: 'skill',
      children: <Skill />,
    },
    {
      id: 'contact',
      children: <Contact />,
    },
  ];

  const targetRef = useRef<HTMLDivElement | null>(null);
  const setIsPassedTarget = useHeaderStore((state) => state.setIsPassedTarget);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      const contentTop = targetRef.current.getBoundingClientRect().top;

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
      <div className="content flex flex-col items-start">
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
