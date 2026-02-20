'use client';

import { Icon } from '@/types/icon.types';

export default function IconSkillJavascript(props: Icon) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={props.size ? props.size : 30}
        height={props.size ? props.size : 30}
        aria-hidden={props.ariaHidden !== false ? 'true' : 'false'}
        aria-label={props.ariaLabel}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </>
  );
}
