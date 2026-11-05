import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  filled?: boolean;
};

const StarIcon = ({size = 17, color = '#854F0B', filled = false, ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 17 17' fill='none' {...rest}>
      <path
        d='M8.50002 2.125L10.3417 6.09167L14.6625 6.51667L11.4042 9.42083L12.325 13.6708L8.50002 11.475L4.67502 13.6708L5.59586 9.42083L2.33752 6.51667L6.65836 6.09167L8.50002 2.125Z'
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default StarIcon;
