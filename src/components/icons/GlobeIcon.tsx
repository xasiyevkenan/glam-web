import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const GlobeIcon = ({size = 17, color = '#444441', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 17 17' fill='none' {...rest}>
      <path
        d='M8.5 14.875C12.0208 14.875 14.875 12.0208 14.875 8.5C14.875 4.97918 12.0208 2.125 8.5 2.125C4.97918 2.125 2.125 4.97918 2.125 8.5C2.125 12.0208 4.97918 14.875 8.5 14.875Z'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.125 8.5H14.875'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 2.125C10.0681 3.8782 10.935 6.14784 10.935 8.5C10.935 10.8522 10.0681 13.1218 8.5 14.875'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.49997 2.125C6.93187 3.8782 6.06494 6.14784 6.06494 8.5C6.06494 10.8522 6.93187 13.1218 8.49997 14.875'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GlobeIcon;
