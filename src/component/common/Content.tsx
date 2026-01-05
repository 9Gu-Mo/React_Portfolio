import { forwardRef, ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  // aosType?: string;
  // aosDuration?: number;
}

const Content = forwardRef<HTMLDivElement, Props>(function Content({ id, children }, ref) {
  return (
    <>
      <div
        ref={ref}
        id={id}
        className="item min-h-dvh max-w-[1200px]"
        // data-aos={aosType ? aosType : 'fade-down'}
        // data-aos-duration={aosDuration ? aosDuration : '200'}
      >
        {children}
      </div>
    </>
  );
});

export default Content;
