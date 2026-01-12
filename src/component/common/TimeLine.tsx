'use client';

// component
import TimeLineItem from '@/component/common/TimeLineItem';
import { motion, useScroll, useTransform } from 'framer-motion';

// hook
import { useRef } from 'react';

// type
import { Timeline } from '@/types/timeline.types';

const careers: Timeline[] = [
  {
    id: 1,
    period: '2022.01.01 ~ 2022.01.01',
    title: 'title',
    desc: 'descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc',
  },
  {
    id: 2,
    period: '2022.01.01 ~ 2022.01.01',
    title: 'title',
    desc: 'desc',
  },
  {
    id: 3,
    period: '2022.01.01 ~ 2022.01.01',
    title: 'title',
    desc: 'desc',
  },
  {
    id: 4,
    period: '2022.01.01 ~ 2022.01.01',
    title: 'title',
    desc: 'desc',
  },
  {
    id: 5,
    period: '2022.01.01 ~ 2022.01.01',
    title: 'title',
    desc: 'desc',
  },
];

export default function TimeLine() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <section className="relative">
        <h2 className="mb-20 text-center text-3xl font-bold">title</h2>

        <div
          ref={containerRef}
          className="relative mx-auto max-w-6xl"
        >
          {/* line */}
          <div className="timeline absolute">
            <div className="timeline-line absolute top-0 h-full w-px" />
            <motion.div
              style={{ height: lineHeight }}
              className="timeline-line-active absolute top-0 w-px"
            />
          </div>

          {/* item */}
          <ul className="space-y-24">
            {careers.map((item) => (
              <TimeLineItem
                key={item.id}
                timeline={item}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
