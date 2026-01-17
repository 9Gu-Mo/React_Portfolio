import Contents from '@/component/common/Contents';
import TextTypingCursor from '@/component/common/TextTypingCursor';

export default function Home() {
  return (
    <>
      <div className="wrap relative min-h-dvh w-full">
        <video
          src="/images/bg/bg.mp4"
          muted
          loop
          autoPlay
          className="min-h-dvh w-full object-cover"
        />
        {/* <TextTypingCursor text={`Hi, My Name Is WonMo Gu :) Welcome My Portfolio`} /> */}
        <TextTypingCursor text={`Welcome`} />
      </div>
      <Contents />
    </>
  );
}
