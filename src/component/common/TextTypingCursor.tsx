'use client';

// component
import { motion } from 'framer-motion';

// hook
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
      <div className="absolute top-70 left-10 text-[30px] text-white transition-all duration-300 md:left-30 md:text-[50px]">
        <p className="inline-block break-keep whitespace-pre-wrap">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block"
          >
            |
          </motion.span>
        </p>
      </div>
    </>
  );
}
