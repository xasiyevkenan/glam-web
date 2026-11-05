import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const InfoCircleIcon = ({size = 16, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.3181 14.6667 8 14.6667Z'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 10.6667V7.33334'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 5.33334H8.00667'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default InfoCircleIcon;
