type Props = {size?: number; color?: string};

const HangerIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <circle cx={12} cy={5} r={1.5} stroke={color} strokeWidth={1.5} />
    <path
      d='M12 6.5V9M4 18l8-5.5L20 18a2 2 0 01-1 1.7L12 22l-7-2.3A2 2 0 014 18z'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default HangerIcon;
