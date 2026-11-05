import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const HelpIcon = ({size = 17, color = '#444441', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 17 17' fill='none' {...rest}>
      <path
        d='M8.49996 15.5833C12.412 15.5833 15.5833 12.412 15.5833 8.49996C15.5833 4.58794 12.412 1.41663 8.49996 1.41663C4.58794 1.41663 1.41663 4.58794 1.41663 8.49996C1.41663 12.412 4.58794 15.5833 8.49996 15.5833Z'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.43872 6.37504C6.60525 5.90164 6.93395 5.50245 7.36661 5.24817C7.79926 4.9939 8.30794 4.90095 8.80255 4.98579C9.29717 5.07063 9.7458 5.32778 10.069 5.7117C10.3922 6.09562 10.5691 6.58153 10.5683 7.08337C10.5683 8.50004 8.4433 9.20837 8.4433 9.20837'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 12.0416H8.50708'
        stroke={color}
        strokeWidth={1.275}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HelpIcon;
