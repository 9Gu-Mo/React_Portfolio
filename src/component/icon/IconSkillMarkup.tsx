'use client';

import { Icon } from '@/types/icon.types';

export default function IconSkillMarkup(props: Icon) {
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </>
  );
}
