'use client';

import Content from '@/component/common/Content';
import Thumbnail from '@/component/common/Thumbnail';
import { useScrollObserver } from '@/stores/scrollStore';
import { useEffect } from 'react';

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

  useEffect(() => {
    console.log('📄 Page 마운트됨');
    console.log('📌 targetRef:', targetRef);

    // 2초 후 targetRef 확인
    setTimeout(() => {
      console.log('⏰ 2초 후 targetRef.current:', targetRef.current);
    }, 2000);
  }, [targetRef]);

  return (
    <>
      <div
        className="content"
        ref={targetRef}
      >
        {content.map((item, index) => (
          <>
            <Content
              key={index}
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
