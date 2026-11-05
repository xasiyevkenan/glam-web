import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const LockIcon = ({size = 16, color = '#8A8A85', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M12.6667 7.33337H3.33333C2.59695 7.33337 2 7.93033 2 8.66671V12.6667C2 13.4031 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.4031 14 12.6667V8.66671C14 7.93033 13.403 7.33337 12.6667 7.33337Z'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.6665 7.33337V4.66671C4.6665 3.78265 5.01769 2.93481 5.64281 2.30968C6.26794 1.68456 7.11578 1.33337 7.99984 1.33337C8.88389 1.33337 9.73174 1.68456 10.3569 2.30968C10.982 2.93481 11.3332 3.78265 11.3332 4.66671V7.33337'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LockIcon;
