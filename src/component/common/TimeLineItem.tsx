'use client';

// component
import { motion, useInView } from 'framer-motion';

// hook
import { useRef } from 'react';

// type
import { Timeline } from '@/types/timeline.types';

type Props = {
  timeline: Timeline;
};

export default function TimeLineItem({ timeline }: Props) {
  const ref = useRef<HTMLLIElement>(null);

  const isInView = useInView(ref, {
    margin: '0px 0px -40% 0px',
  });

  return (
    <>
      <li
        ref={ref}
        className="timeline-item relative"
      >
        <span
          className={`timeline-item-dot absolute top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 md:left-1/2 ${isInView ? 'bg-black' : 'bg-gray-400'}`}
        />

        <motion.div
          initial={{ opacity: 0.2, y: 50 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`timeline-item-con rounded-xl border bg-white p-6 break-all text-black shadow-sm transition-colors md:w-[calc(50%-20px)] ${isInView ? 'border-black' : 'border-gray-200'}`}
        >
          <span className="text-sm">{timeline.period}</span>
          <h3 className="mt-2 text-lg font-semibold">{timeline.title}</h3>
          <p className="mt-2 text-sm">{timeline.desc}</p>
        </motion.div>
      </li>
    </>
  );
}
