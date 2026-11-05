import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const MoonIcon = ({size = 16, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      {/* Aypara */}
      <path
        d='M14 8.53A6 6 0 1 1 7.47 2 4.67 4.67 0 0 0 14 8.53Z'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Kiçik ulduz — "maraqlı" görünüş üçün */}
      <path
        d='M12.6 2.4L13 3.3L13.9 3.7L13 4.1L12.6 5L12.2 4.1L11.3 3.7L12.2 3.3L12.6 2.4Z'
        stroke={color}
        strokeWidth={0.9}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MoonIcon;
