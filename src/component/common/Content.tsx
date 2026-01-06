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
        className="item min-h-dvh max-w-[1200px]"
        data-aos={aosType}
        data-aos-duration={aosDuration}
      >
        {children}
      </div>
    </>
  );
});

export default Content;
