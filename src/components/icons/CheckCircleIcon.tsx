import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const CheckCircleIcon = ({size = 16, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M14.6668 7.38663V8.00663C14.6659 9.43812 14.2016 10.8309 13.3434 11.9781C12.4852 13.1253 11.2793 13.9659 9.90513 14.3745C8.53096 14.7831 7.06175 14.7379 5.71548 14.2457C4.36921 13.7534 3.21734 12.8404 2.43151 11.6425C1.64568 10.4445 1.26802 9.0254 1.35426 7.59653C1.4405 6.16767 1.98603 4.80446 2.9106 3.70982C3.83517 2.61518 5.08894 1.84734 6.48539 1.52192C7.88184 1.19649 9.34578 1.33052 10.6602 1.90396'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.6668 2.66663L8.00016 9.33996L6.00016 7.33996'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckCircleIcon;
