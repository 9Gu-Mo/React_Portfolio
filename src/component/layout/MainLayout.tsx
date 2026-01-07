import React from 'react';
import DarkModeBtn from '@/component/common/DarkModeBtn';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
      <DarkModeBtn />
    </div>
  );
}
