import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const EyeOffIcon = ({size = 16, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' {...rest}>
      <path
        d='M6.35 6.35C5.96 6.71 5.7167 7.2267 5.7167 8C5.7167 9.10457 6.61213 10 7.7167 10C8.49 10 9.00667 9.75667 9.36667 9.36667'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.03333 3.7C1.55 4.90667 0.666664 8 0.666664 8C0.666664 8 3.33333 12.6667 8 12.6667C9.05333 12.6667 9.97333 12.4267 10.7533 12.0533'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.2733 10.5C13.7867 9.31333 15.3333 8 15.3333 8C15.3333 8 12.6667 3.33333 8 3.33333C7.53333 3.33333 7.09333 3.37333 6.68 3.44667'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.33333 1.33337L14.6667 14.6667'
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default EyeOffIcon;
