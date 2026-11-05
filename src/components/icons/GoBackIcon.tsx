import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const GoBackIcon = ({size = 16, color = '#1A1A18', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <g clipPath='url(#clip0_21_622)'>
        <path
          d='M10 12L6 8L10 4'
          stroke={color}
          strokeWidth={1.33333}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_21_622'>
          <rect width={16} height={16} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GoBackIcon;
