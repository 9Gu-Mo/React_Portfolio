import { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
}

export default function Content(props: Props) {
  return (
    <>
      <div
        id={props.id}
        className="mx-auto min-h-dvh max-w-[1200px] px-4 py-20"
      >
        {props.children}
      </div>
    </>
  );
}
