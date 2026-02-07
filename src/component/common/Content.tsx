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
        className="w-full px-8 py-[70px]"
      >
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </div>
    </>
  );
});

export default Content;
