interface IconProps {
  size?: string;
  color?: string;
}

export default function IconMenu(props: IconProps) {
  return (
    <>
      <svg
        width={props.size ? props.size : '24px'}
        height={props.size ? props.size : '24px'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16"
          stroke={props.color ? props.color : '#1C274C'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={props.color ? props.color : '#1C274C'}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
}
