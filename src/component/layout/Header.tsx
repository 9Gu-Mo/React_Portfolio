'use client';

// component
import { motion } from 'framer-motion';
import Link from 'next/link';

// hook
import { useEffect } from 'react';

// store
import { useHeaderStore } from '@/stores/useHeaderStore';
import { useThemeStore } from '@/stores/useThemeStore';

export default function Header() {
  // dark mode state
  const { theme, toggleTheme } = useThemeStore();

  // header scroll state
  const isPassedTarget = useHeaderStore((state) => state.isPassedTarget);

  const items = [
    {
      id: 'about',
      name: 'about',
    },
    {
      id: 'career',
      name: 'career',
    },
    {
      id: 'skill',
      name: 'skill',
    },
    {
      id: 'contact',
      name: 'contact',
    },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-10 z-50 box-border flex h-[70px] items-center justify-between px-8`}
        initial={false}
        animate={{
          backgroundColor:
            isPassedTarget && theme === 'light'
              ? 'rgba(255, 255, 255, 1)'
              : isPassedTarget && theme === 'dark'
                ? '#0f172a'
                : 'rgba(0, 0, 0, 0)',
          backdropFilter: isPassedTarget ? 'blur(10px)' : 'blur(0px)',
          color: isPassedTarget && theme === 'light' ? '#0f172a' : '#e2e8f0',
          borderBottom:
            isPassedTarget && theme === 'light'
              ? '1px solid #e2e8f0'
              : isPassedTarget && theme === 'dark'
                ? '1px solid #334155'
                : '1px solid transparent',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <h1 className="logo">
          <Link href={'/'}>
            <strong className="block text-3xl">구원모</strong>
            <span className="job text-xl">web publisher</span>
          </Link>
        </h1>
        <ul className="list flex gap-6 transition-all duration-300 md:gap-12">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.id}`}
                className={`relative pb-1 text-2xl after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full md:text-3xl ${isPassedTarget && theme === 'light' ? 'after:bg-black' : 'after:bg-white'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.header>
    </>
  );
}
