import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const StoresIcon = ({size = 20, color = '#B8905A', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' {...rest}>
      {/* Store roof */}
      <path
        d='M3.33333 7.5L4.58333 3.33333H15.4167L16.6667 7.5'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* Store awning */}
      <path
        d='M2.5 7.5H17.5V9.16667C17.5 10.0871 16.7538 10.8333 15.8333 10.8333C14.9129 10.8333 14.1667 10.0871 14.1667 9.16667C14.1667 10.0871 13.4205 10.8333 12.5 10.8333C11.5795 10.8333 10.8333 10.0871 10.8333 9.16667C10.8333 10.0871 10.0871 10.8333 9.16667 10.8333C8.24619 10.8333 7.5 10.0871 7.5 9.16667C7.5 10.0871 6.75381 10.8333 5.83333 10.8333C4.91286 10.8333 4.16667 10.0871 4.16667 9.16667C4.16667 10.0871 3.42048 10.8333 2.5 10.8333V7.5Z'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* Store body */}
      <path
        d='M4.16667 10.8333V17.5H15.8333V10.8333'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* Door */}
      <path
        d='M7.08333 17.5V13.3333C7.08333 12.8731 7.45643 12.5 7.91667 12.5H10.4167C10.8769 12.5 11.25 12.8731 11.25 13.3333V17.5'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* Door handle */}
      <path d='M9.58333 14.5833H9.59167' stroke={color} strokeWidth={1.5} strokeLinecap='round' />
    </svg>
  );
};

export default StoresIcon;
