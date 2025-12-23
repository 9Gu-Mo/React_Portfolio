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
  // const scrollY = useScrollStore((state) => state.scrollY);

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-10 p-4"
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
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
      </motion.header>
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="debug text-xs">
          Scroll: {Math.round(scrollY)}px | Status: {isScrolled ? 'Scrolled' : 'Top'}
        </div>
      )} */}
    </>
  );
}
