'use client';

// style
import { cn } from '@/lib/utils';
import style from '@/styles/Footer.module.scss';

export default function Footer() {
  return <footer className={cn('py-8 text-center text-xl', style.footer)}>© 2026 구원모. All rights reserved.</footer>;
}
