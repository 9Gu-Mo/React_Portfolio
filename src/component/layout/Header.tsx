'use client';

// hook
import { useState } from 'react';

// component
import IconMenu from '@/component/icon/IconMenu';
import Gnb from './Gnb';

// style
import '@/styles/layout/header.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollStore } from '@/stores/scrollStore';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  };

  const isScrolled = useScrollStore((state) => state.isScrolled);
  const scrollY = useScrollStore((state) => state.scrollY);

  console.log('🎨 Header 렌더링 - isScrolled:', isScrolled, 'scrollY:', scrollY);

  return (
    <>
      {/* <header className="fixed top-0 right-0 left-0 z-10 p-4">
        <button
          type="button"
          onClick={handleClick}
          className="transition-transform duration-500 ease-in-out hover:rotate-180"
        >
          <IconMenu
            color="#fff"
            size="30"
          />
        </button>
        <AnimatePresence>{open && <Gnb closeClick={handleClick} />}</AnimatePresence>
      </header> */}

      <motion.header
        className="fixed top-0 right-0 left-0 z-10 p-4"
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        }}
      >
        <button
          type="button"
          onClick={handleClick}
        >
          <IconMenu
            color="#fff"
            size="30"
          />
        </button>
        <AnimatePresence>{open && <Gnb closeClick={handleClick} />}</AnimatePresence>
        {process.env.NODE_ENV === 'development' && (
          <div className="debug text-xs">
            Scroll: {Math.round(scrollY)}px | Status: {isScrolled ? 'Scrolled' : 'Top'}
          </div>
        )}
      </motion.header>
    </>
  );
}
