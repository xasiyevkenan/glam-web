import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const CloseIcon = ({size = 16, color = '#1A1A18', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M12 4L4 12'
        stroke={color}
        strokeWidth={1.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 4L12 12'
        stroke={color}
        strokeWidth={1.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CloseIcon;
