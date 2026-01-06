'use client';

import { Timeline } from '@/types/timeline.types';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  timeline: Timeline;
};

export default function TimeLineItem({ timeline }: Props) {
  const ref = useRef<HTMLLIElement>(null);

  const isInView = useInView(ref, {
    margin: '-40% 0px -40% 0px',
  });

  return (
    <>
      <li
        ref={ref}
        className="timeline-item relative pl-16"
      >
        <span
          className={`timeline-item-dot absolute left-[7px] h-3 w-3 rounded-full transition-colors duration-300 ${isInView ? 'bg-black' : 'bg-gray-400'}`}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`rounded-xl border p-6 break-all text-black shadow-sm transition-colors ${isInView ? 'border-black bg-white' : 'border-gray-200 bg-gray-50'}`}
        >
          <span className="text-sm">{timeline.period}</span>
          <h3 className="mt-2 text-lg font-semibold">{timeline.title}</h3>
          <p className="mt-2 text-sm">{timeline.desc}</p>
        </motion.div>
      </li>
    </>
  );
}
