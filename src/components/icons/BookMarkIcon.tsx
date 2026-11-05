import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const BookmarkIcon = ({size = 16, color = '#3B6D11', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 17 17' fill='none' {...rest}>
      <path
        d='M13.4583 2.83337H3.54167C2.75926 2.83337 2.125 3.46764 2.125 4.25004V14.1667C2.125 14.9491 2.75926 15.5834 3.54167 15.5834H13.4583C14.2407 15.5834 14.875 14.9491 14.875 14.1667V4.25004C14.875 3.46764 14.2407 2.83337 13.4583 2.83337Z'
        stroke={color}
        strokeWidth={1.41667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.3333 1.41663V4.24996M5.66667 1.41663V4.24996M2.125 7.08329H14.875'
        stroke={color}
        strokeWidth={1.41667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BookmarkIcon;
