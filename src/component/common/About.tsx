'use client';

export default function About() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <span>안녕하세요</span>
          <h1>
            강력한
            <br />
            <span>가나다</span>
          </h1>
        </div>
        <div className="profile flex w-full max-w-[400px]">
          <div className="profile-image flex aspect-square w-full flex-col items-center justify-center rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>Profile Image</span>
          </div>
        </div>
      </div>
    </>
  );
}
