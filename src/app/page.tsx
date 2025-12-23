import Contents from '@/component/common/Contents';
import TextTypingCursor from '@/component/common/TextTypingCursor';

export default function Home() {
  return (
    <>
      <div className="wrap">
        <TextTypingCursor text={`타이핑 모션 테스트 :)`} />
      </div>
      <Contents />
    </>
  );
}
