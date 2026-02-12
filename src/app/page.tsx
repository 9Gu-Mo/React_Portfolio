import Contents from '@/component/common/Contents';
import TextTypingCursor from '@/component/common/TextTypingCursor';

export default function Home() {
  return (
    <>
      <div className="wrap relative min-h-svh w-full">
        <video
          muted
          loop
          autoPlay
          className="min-h-svh w-full object-cover"
          preload="metadata"
        >
          <source
            src="/images/bg/bg3.mp4#t=0.1"
            type="video/mp4"
          />
        </video>
        <TextTypingCursor text={`Hi, My Name Is\nWonMo Gu :)\nWelcome My Portfolio`} />
      </div>
      <Contents />
    </>
  );
}
