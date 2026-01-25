// hook
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
        className="min-h-dvh scroll-mt-[70px] py-[70px]"
        data-aos={aosType}
        data-aos-duration={aosDuration}
      >
        {children}
      </div>
    </>
  );
});

export default Content;
