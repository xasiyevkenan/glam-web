import type {SVGProps} from 'react';

type Props = {size?: number; color?: string};

const HomeIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <path
      d='M3 10.5L12 3l9 7.5M5 9.5V20a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V9.5'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default HomeIcon;
