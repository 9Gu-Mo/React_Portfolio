import { forwardRef, ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  aosType?: string;
  aosDuration?: number;
}

const Content = forwardRef<HTMLDivElement, Props>(function Content({ id, children, aosType, aosDuration }, ref) {
  return (
    <>
      <div
        ref={ref}
        id={id}
        className="mx-auto min-h-dvh max-w-[1200px] px-4 py-22"
        // data-aos={aosType ? aosType : 'fade-down'}
        // data-aos-duration={aosDuration ? aosDuration : '200'}
      >
        {children}
      </div>
    </>
  );
});

export default Content;
