import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const InfoIcon = ({size = 17, color = '#FAF7F2', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 17 17' fill='none' {...rest}>
      <path
        d='M8.50008 15.5834C12.4121 15.5834 15.5834 12.412 15.5834 8.50002C15.5834 4.588 12.4121 1.41669 8.50008 1.41669C4.58806 1.41669 1.41675 4.588 1.41675 8.50002C1.41675 12.412 4.58806 15.5834 8.50008 15.5834Z'
        stroke={color}
        strokeWidth={1.41667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 11.3333V8.5'
        stroke={color}
        strokeWidth={1.41667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 5.66669H8.50708'
        stroke={color}
        strokeWidth={1.41667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default InfoIcon;
