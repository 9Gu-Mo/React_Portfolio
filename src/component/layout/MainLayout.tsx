import React from 'react';
import Header from './Header';
import DarkModeBtn from '@/component/common/DarkModeBtn';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main>{children}</main>
      <DarkModeBtn />
    </div>
  );
}
