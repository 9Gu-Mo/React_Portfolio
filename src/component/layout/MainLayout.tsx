'use client';

// component
import DarkModeBtn from '@/component/common/DarkModeBtn';
import FloatUpBtn from '@/component/common/FloatUpBtn';
import Intro from '@/component/Intro';
import Footer from '@/component/layout/Footer';
import Header from '@/component/layout/Header';

// hook
import React, { useState } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onDisMiss={() => setShowIntro(false)} />
      ) : (
        <div className="flex min-h-svh flex-col">
          <Header />
          <main className="min-h-[calc(100svh-58px)] pt-[70px]">{children}</main>
          <Footer />
          <FloatUpBtn />
          <DarkModeBtn />
        </div>
      )}
    </>
  );
}
