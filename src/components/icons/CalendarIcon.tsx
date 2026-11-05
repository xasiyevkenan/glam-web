import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const CalendarIcon = ({size = 18, color = '#3B6D11', ...rest}: Props) => {
  return (
    <svg width={size} height={size * (19 / 18)} viewBox='0 0 18 19' fill='none' {...rest}>
      <g clipPath='url(#clip0_4_1596)'>
        <path
          d='M14.25 4H3.75C2.92157 4 2.25 4.67157 2.25 5.5V16C2.25 16.8284 2.92157 17.5 3.75 17.5H14.25C15.0784 17.5 15.75 16.8284 15.75 16V5.5C15.75 4.67157 15.0784 4 14.25 4Z'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 2.5V5.5M6 2.5V5.5M2.25 8.5H15.75'
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_4_1596'>
          <rect width={18} height={18} fill='white' transform='translate(0 1)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarIcon;
