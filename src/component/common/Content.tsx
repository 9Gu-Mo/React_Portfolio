import { forwardRef, ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
}

const Content = forwardRef<HTMLDivElement, Props>(function Content({ id, children }, ref) {
  return (
    <>
      <div
        ref={ref}
        id={id}
        className="mx-auto min-h-dvh max-w-[1200px] px-4 py-22"
      >
        {children}
      </div>
    </>
  );
});

export default Content;
