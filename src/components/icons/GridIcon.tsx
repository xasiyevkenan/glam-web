import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const GridIcon = ({size = 16, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      {/* 2x2 kvadrat şəbəkə */}
      <rect
        x={2}
        y={2}
        width={5}
        height={5}
        rx={1}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x={9}
        y={2}
        width={5}
        height={5}
        rx={1}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x={2}
        y={9}
        width={5}
        height={5}
        rx={1}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x={9}
        y={9}
        width={5}
        height={5}
        rx={1}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GridIcon;
