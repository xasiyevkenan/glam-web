import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  checkColor?: string;
};

const VerifiedBadgeIcon = ({
  size = 18,
  color = '#B8905A',
  checkColor = '#FAF7F2',
  ...rest
}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 18 18' fill='none' {...rest}>
      <path
        d='M9 1.5L10.8 3.45L13.35 3L13.95 5.55L16.5 6.75L15.3 9L16.5 11.25L13.95 12.45L13.35 15L10.8 14.55L9 16.5L7.2 14.55L4.65 15L4.05 12.45L1.5 11.25L2.7 9L1.5 6.75L4.05 5.55L4.65 3L7.2 3.45L9 1.5Z'
        fill={color}
      />

      <path
        d='M6.375 9L8.25 10.875L11.625 7.125'
        stroke={checkColor}
        strokeWidth={1.8}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default VerifiedBadgeIcon;
