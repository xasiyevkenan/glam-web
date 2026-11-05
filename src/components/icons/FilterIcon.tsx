import type {SVGProps} from 'react';

type Props = {size?: number; color?: string};

const FilterIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <path d='M4 6h16M7 12h10M10 18h4' stroke={color} strokeWidth={2} strokeLinecap='round' />
  </svg>
);

export default FilterIcon;
