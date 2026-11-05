import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const ListIcon = ({size = 15, color = '#534AB7', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 15 15' fill='none' {...rest}>
      <g clipPath='url(#clip0_27_1549)'>
        <path
          d='M11.875 2.5H3.125C2.43464 2.5 1.875 3.05964 1.875 3.75V12.5C1.875 13.1904 2.43464 13.75 3.125 13.75H11.875C12.5654 13.75 13.125 13.1904 13.125 12.5V3.75C13.125 3.05964 12.5654 2.5 11.875 2.5Z'
          stroke={color}
          strokeWidth={1.25}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10 1.25V3.75M5 1.25V3.75M1.875 6.25H13.125'
          stroke={color}
          strokeWidth={1.25}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_27_1549'>
          <rect width={15} height={15} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ListIcon;
