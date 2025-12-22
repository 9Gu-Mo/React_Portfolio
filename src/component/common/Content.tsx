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
        className="flex min-h-dvh items-center justify-center"
      >
        {props.children}
      </div>
    </>
  );
}
