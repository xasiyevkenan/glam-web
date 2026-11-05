import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const BuyerIcon = ({size = 20, color = '#FAF7F2', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' {...rest}>
      <g clipPath='url(#clip0_21_676)'>
        <path
          d='M5 1.66663L2.5 4.99996V16.6666C2.5 16.8876 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H16.6667C16.8877 17.5 17.0996 17.4122 17.2559 17.2559C17.4122 17.0996 17.5 16.8876 17.5 16.6666V4.99996L15 1.66663H5Z'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.5 5H17.5'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.3332 8.33337C13.3332 9.21743 12.982 10.0653 12.3569 10.6904C11.7317 11.3155 10.8839 11.6667 9.99984 11.6667C9.11578 11.6667 8.26794 11.3155 7.64281 10.6904C7.01769 10.0653 6.6665 9.21743 6.6665 8.33337'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_21_676'>
          <rect width={20} height={20} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BuyerIcon;
