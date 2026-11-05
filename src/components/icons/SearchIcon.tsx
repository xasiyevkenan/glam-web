import type {SVGProps} from 'react';

type Props = {size?: number; color?: string};

const SearchIcon = ({size = 18, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <circle cx={11} cy={11} r={7} stroke={color} strokeWidth={2} />
    <path d='M20 20l-3.5-3.5' stroke={color} strokeWidth={2} strokeLinecap='round' />
  </svg>
);

export default SearchIcon;
