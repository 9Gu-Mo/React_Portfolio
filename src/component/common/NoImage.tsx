'use client';

import { cn } from '@/lib/utils';
// style
import style from '@/styles/Carrer.module.scss';

export default function NoImage() {
  return (
    <>
      <div
        className={cn(
          'relative flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-[12px] md:min-h-[500px]',
          style.carrerNo,
        )}
      >
        <div className={cn('relative z-5', style.carrerNoIcon)}>
          <div className="flex h-[120px] w-[120px] items-center justify-center">
            <svg
              className="h-[60px] w-[60px]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        </div>

        <div className="text-center text-white">
          <h3 className="text-3xl">No Image</h3>
        </div>
      </div>
    </>
  );
}
