// component
import DarkModeBtn from '@/component/common/DarkModeBtn';
import FloatUpBtn from '@/component/common/FloatUpBtn';
import Footer from '@/component/layout/Footer';
import Header from '@/component/layout/Header';

// hook
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatUpBtn />
      <DarkModeBtn />
    </div>
  );
}
