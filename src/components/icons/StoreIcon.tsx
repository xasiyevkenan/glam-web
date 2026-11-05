import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const StoreIcon = ({size = 20, color = '#444441', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' {...rest}>
      <g clipPath='url(#clip0_21_679)'>
        <path
          d='M2.5 5.83337V8.33337C2.5 8.7754 2.67559 9.19932 2.98816 9.51188C3.30072 9.82445 3.72464 10 4.16667 10C4.60869 10 5.03262 9.82445 5.34518 9.51188C5.65774 9.19932 5.83333 8.7754 5.83333 8.33337C5.83333 8.7754 6.00893 9.19932 6.32149 9.51188C6.63405 9.82445 7.05797 10 7.5 10C7.94203 10 8.36595 9.82445 8.67851 9.51188C8.99107 9.19932 9.16667 8.7754 9.16667 8.33337C9.16667 8.7754 9.34226 9.19932 9.65482 9.51188C9.96738 9.82445 10.3913 10 10.8333 10C11.2754 10 11.6993 9.82445 12.0118 9.51188C12.3244 9.19932 12.5 8.7754 12.5 8.33337C12.5 8.7754 12.6756 9.19932 12.9882 9.51188C13.3007 9.82445 13.7246 10 14.1667 10C14.6087 10 15.0326 9.82445 15.3452 9.51188C15.6577 9.19932 15.8333 8.7754 15.8333 8.33337V5.83337'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.5 5.83333L4.16667 2.5H15.8333L17.5 5.83333'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.1665 10V16.6667H15.8332V10'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_21_679'>
          <rect width={20} height={20} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StoreIcon;
