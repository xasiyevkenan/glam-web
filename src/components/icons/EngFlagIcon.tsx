import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
};

const EngFlagIcon = ({size = 50, ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 50 50' fill='none' {...rest}>
      <g clipPath='url(#clip0_23_1086)'>
        <g clipPath='url(#clip1_23_1086)'>
          <path d='M50 0H0V50H50V0Z' fill='#012169' />
          <path d='M0 0L50 50ZM50 0L0 50Z' fill='black' />
          <path d='M0 0L50 50M50 0L0 50' stroke='white' strokeWidth={9} />
          <path d='M0 0L50 50ZM50 0L0 50Z' fill='black' />
          <path d='M0 0L50 50M50 0L0 50' stroke='#C8102E' strokeWidth={4} />
          <path d='M25 0V50ZM0 25H50Z' fill='black' />
          <path d='M25 0V50M0 25H50' stroke='white' strokeWidth={15} />
          <path d='M25 0V50ZM0 25H50Z' fill='black' />
          <path d='M25 0V50M0 25H50' stroke='#C8102E' strokeWidth={9} />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_23_1086'>
          <path d='M0 0H50V50H0V0Z' fill='white' />
        </clipPath>
        <clipPath id='clip1_23_1086'>
          <path d='M0 0H50V50H0V0Z' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EngFlagIcon;
