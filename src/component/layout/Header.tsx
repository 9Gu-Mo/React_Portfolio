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
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 p-4">
        <button
          type="button"
          onClick={handleClick}
        >
          <IconMenu />
        </button>
        <AnimatePresence>
          {open && <Gnb closeClick={handleClick} />}
        </AnimatePresence>
      </header>
    </>
  );
}
