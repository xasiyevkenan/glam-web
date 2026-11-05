import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const SendIcon = ({size = 15, color = '#FAF7F2', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 15 15' fill='none' {...rest}>
      <path
        d='M13.75 1.25L9.375 13.75L6.875 8.125L1.25 5.625L13.75 1.25Z'
        stroke={color}
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.75 1.25L6.875 8.125'
        stroke={color}
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SendIcon;
