'use client';

import { motion } from 'framer-motion';

export default function TextTyping() {
  const text = 'Hello World\nwidth';

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <>
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="typing"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={child}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
    </>
  );
}
