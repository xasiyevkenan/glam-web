import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const ClockIcon = ({size = 16, color = '#8A8A85', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M8 5.33334V8L10 10'
        stroke={color}
        strokeWidth={1.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
        stroke={color}
        strokeWidth={1.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ClockIcon;
