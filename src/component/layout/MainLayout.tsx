'use client';

// component
import DarkModeBtn from '@/component/common/DarkModeBtn';
import FloatUpBtn from '@/component/common/FloatUpBtn';
import Intro from '@/component/Intro';
import Footer from '@/component/layout/Footer';
import Header from '@/component/layout/Header';

// hook
import React, { useEffect, useRef, useState } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showIntro) {
      document.documentElement.classList.add('visible');
    }

    return () => {
      document.documentElement.classList.remove('visible');
    };
  }, [showIntro]);

  const handleDisMiss = () => {
    setShowIntro(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mainRef.current?.classList.add('main-visible');
      });
    });
  };

  return (
    <>
      <div
        ref={mainRef}
        className="main flex min-h-svh flex-col"
      >
        <Header />
        <main className="min-h-[calc(100svh-58px)] pt-[70px]">{children}</main>
        <Footer />
        <FloatUpBtn />
        <DarkModeBtn />
      </div>

      {showIntro && <Intro onDisMiss={handleDisMiss} />}
    </>
  );
}
