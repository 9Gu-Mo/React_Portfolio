'use client';

// hook
import { useState } from 'react';

// component
import IconMenu from '@/component/icon/IconMenu';
import Gnb from './Gnb';

// style
import '@/styles/layout/header.scss';
import { AnimatePresence } from 'framer-motion';

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

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-10 p-4">
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
      </header>
    </>
  );
}
