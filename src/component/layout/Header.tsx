'use client';

// hook
import { useEffect } from 'react';

// style
import { motion } from 'framer-motion';
import { useHeaderStore } from '@/stores/useHeaderStore';
import { useThemeStore } from '@/stores/useThemeStore';
import Link from 'next/link';

export default function Header() {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, [setTheme]);

  // const handleClick = () => {
  //   setOpen(!open);

  //   if (open) {
  //     document.body.classList.remove('overflow-hidden');
  //   } else {
  //     document.body.classList.add('overflow-hidden');
  //   }
  // };

  const isPassedTarget = useHeaderStore((state) => state.isPassedTarget);

  const items = [
    {
      id: 'item01',
      name: 'item01',
      direction: '',
    },
    {
      id: 'item02',
      name: 'item02',
    },
    {
      id: 'item03',
      name: 'item03',
      direction: '',
    },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-10 flex h-[54px] items-center justify-end px-8"
        initial={false}
        animate={{
          backgroundColor: isPassedTarget ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isPassedTarget ? 'blur(10px)' : 'blur(0px)',
          boxShadow: isPassedTarget ? '0 2px 8px rgba(0, 0, 0, 0.4)' : '0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="list flex gap-8">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.id}`}
                className={`relative pb-1 text-2xl after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full ${isPassedTarget ? 'text-black after:bg-black' : 'text-white after:bg-white'}`}
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
