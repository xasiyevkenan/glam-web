import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
};

const RuFlagIcon = ({size = 50, ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 50 50' fill='none' {...rest}>
      <g clipPath='url(#clip0_23_1089)'>
        <g clipPath='url(#clip1_23_1089)'>
          <path d='M50 0H0V16.6667H50V0Z' fill='white' />
          <path d='M50 16.6667H0V33.3333H50V16.6667Z' fill='#0039A6' />
          <path d='M50 33.3333H0V50H50V33.3333Z' fill='#D52B1E' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_23_1089'>
          <path d='M0 0H50V50H0V0Z' fill='white' />
        </clipPath>
        <clipPath id='clip1_23_1089'>
          <path d='M0 0H50V50H0V0Z' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RuFlagIcon;
