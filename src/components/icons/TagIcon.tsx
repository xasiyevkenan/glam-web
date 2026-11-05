import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const TagIcon = ({size = 16, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      {/* Etiket gövdəsi */}
      <path
        d='M13.73 8.94L8.95 13.72a1.33 1.33 0 0 1-1.89 0L1.33 8V1.33H8l5.73 5.73a1.33 1.33 0 0 1 0 1.88Z'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Kiçik dəlik */}
      <path
        d='M4.67 4.67h.01'
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default TagIcon;
