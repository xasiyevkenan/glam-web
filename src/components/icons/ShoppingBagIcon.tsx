import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const ShoppingBagIcon = ({size = 26, color = '#2E2140', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 26 26' fill='none' {...rest}>
      <path
        d='M9.74984 4.33337L6.49984 6.50004L7.58317 9.75004L5.4165 10.8334V21.6667H20.5832V10.8334L18.4165 9.75004L19.4998 6.50004L16.2498 4.33337'
        stroke={color}
        strokeWidth={1.84167}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.75 4.33337C9.75 5.95837 11.1583 7.04171 13 7.04171C14.8417 7.04171 16.25 5.95837 16.25 4.33337'
        stroke={color}
        strokeWidth={1.84167}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ShoppingBagIcon;
