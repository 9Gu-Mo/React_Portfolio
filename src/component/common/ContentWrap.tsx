'use client';

import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import { useScrollObserver } from '@/stores/scrollStore';

export default function ContentWrap() {
  const content = [
    {
      id: 'item01',
      children: <Thumbnail />,
    },
    {
      id: 'item02',
      children: <div>item02</div>,
    },
    {
      id: 'item03',
      children: <div>item03</div>,
    },
  ];

  const targetRef = useScrollObserver('-54px 0px 0px 0px');

  return (
    <>
      <div
        className="content"
        ref={targetRef}
      >
        {content.map((item) => (
          <>
            <Content
              key={item.id}
              id={item.id}
            >
              {item.children}
            </Content>
          </>
        ))}
      </div>
    </>
  );
}
