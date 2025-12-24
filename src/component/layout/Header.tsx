'use client';

// hook
import { useState } from 'react';

// component
import IconMenu from '@/component/icon/IconMenu';
import Gnb from './Gnb';

// style
import '@/styles/layout/header.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useHeaderStore } from '@/stores/useHeaderStore';

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

  const isPassedTarget = useHeaderStore((state) => state.isPassedTarget);

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-10 p-4"
        initial={false}
        animate={{
          backgroundColor: isPassedTarget ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isPassedTarget ? 'blur(10px)' : 'blur(0px)',
          boxShadow: isPassedTarget ? '0 2px 8px rgba(0, 0, 0, 0.4)' : '0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <button
          type="button"
          onClick={handleClick}
        >
          {isPassedTarget ? (
            <IconMenu
              color="#000"
              size="30"
            />
          ) : (
            <IconMenu
              color="#fff"
              size="30"
            />
          )}
        </button>
        <AnimatePresence>{open && <Gnb closeClick={handleClick} />}</AnimatePresence>
      </motion.header>
    </>
  );
}
