import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
};

const AzFlagIcon = ({size = 50, ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 50 50' fill='none' {...rest}>
      <g clipPath='url(#clip0_23_1083)'>
        <g clipPath='url(#clip1_23_1083)'>
          <path d='M50 0H0V16.6667H50V0Z' fill='#00B5E2' />
          <path d='M50 16.6667H0V33.3333H50V16.6667Z' fill='#EF3340' />
          <path d='M50 33.3333H0V50H50V33.3333Z' fill='#509E2F' />
          <path
            d='M22.5 31.25C25.9518 31.25 28.75 28.4518 28.75 25C28.75 21.5482 25.9518 18.75 22.5 18.75C19.0482 18.75 16.25 21.5482 16.25 25C16.25 28.4518 19.0482 31.25 22.5 31.25Z'
            fill='#FAF7F2'
          />
          <path
            d='M24.5834 30C27.3448 30 29.5834 27.7614 29.5834 25C29.5834 22.2386 27.3448 20 24.5834 20C21.822 20 19.5834 22.2386 19.5834 25C19.5834 27.7614 21.822 30 24.5834 30Z'
            fill='#EF3340'
          />
          <path
            d='M31.6666 20L32.5 23L35.2 21.4667L33.6666 24.1667L36.6666 25L33.6666 25.8333L35.2 28.5333L32.5 27L31.6666 30L30.8333 27L28.1333 28.5333L29.6666 25.8333L26.6666 25L29.6666 24.1667L28.1333 21.4667L30.8333 23L31.6666 20Z'
            fill='#FAF7F2'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_23_1083'>
          <path d='M0 0H50V50H0V0Z' fill='white' />
        </clipPath>
        <clipPath id='clip1_23_1083'>
          <path d='M0 0H50V50H0V0Z' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AzFlagIcon;
