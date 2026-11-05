import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const PinIcon = ({size = 15, color = '#534AB7', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 15 15' fill='none' {...rest}>
      <g clipPath='url(#clip0_27_1556)'>
        <path
          d='M12.5 6.25C12.5 10 7.5 13.75 7.5 13.75C7.5 13.75 2.5 10 2.5 6.25C2.5 4.92392 3.02678 3.65215 3.96447 2.71447C4.90215 1.77678 6.17392 1.25 7.5 1.25C8.82608 1.25 10.0979 1.77678 11.0355 2.71447C11.9732 3.65215 12.5 4.92392 12.5 6.25Z'
          stroke={color}
          strokeWidth={1.25}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z'
          stroke={color}
          strokeWidth={1.25}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_27_1556'>
          <rect width={15} height={15} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PinIcon;
