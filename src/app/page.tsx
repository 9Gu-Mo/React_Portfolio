import Content from '@/component/common/Content';
import TextTypingCursor from '@/component/common/TextTypingCursor';

export default function Home() {
  const content = [
    {
      id: 'item01',
      children: <div>item01</div>,
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

  return (
    <>
      <div className="wrap">
        <TextTypingCursor text={`타이핑 모션 테스트 :)`} />
      </div>
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
    </>
  );
}
