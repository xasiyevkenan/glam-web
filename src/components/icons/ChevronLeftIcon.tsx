import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const ChevronLeftIcon = ({size = 18, color = '#FAF7F2', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 18 18' fill='none' {...rest}>
      <path
        d='M11.25 13.5L6.75 9L11.25 4.5'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronLeftIcon;
