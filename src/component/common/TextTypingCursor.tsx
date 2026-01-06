'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TextTypingCursor({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <div className="typing text-white">
        <p style={{ display: 'inline' }}>
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="cursor"
            style={{ display: 'inline-block' }}
          >
            |
          </motion.span>
        </p>
      </div>
    </>
  );
}
