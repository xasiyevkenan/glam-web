import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const MailIcon = ({size = 16, color = '#8A8A85', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M13.3335 2.66663H2.66683C1.93045 2.66663 1.3335 3.26358 1.3335 3.99996V12C1.3335 12.7363 1.93045 13.3333 2.66683 13.3333H13.3335C14.0699 13.3333 14.6668 12.7363 14.6668 12V3.99996C14.6668 3.26358 14.0699 2.66663 13.3335 2.66663Z'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.6668 4L8.00016 8.66667L1.3335 4'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MailIcon;
