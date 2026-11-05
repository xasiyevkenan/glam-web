type Props = {size?: number; color?: string};

const BellIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <path
      d='M6 9a6 6 0 1112 0c0 4 1.3 5.5 2 6.5H4c.7-1 2-2.5 2-6.5z'
      stroke={color}
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path d='M10 19a2 2 0 004 0' stroke={color} strokeWidth={2} strokeLinecap='round' />
  </svg>
);

export default BellIcon;
