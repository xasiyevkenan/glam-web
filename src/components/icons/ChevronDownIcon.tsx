type Props = {size?: number; color?: string};

const ChevronDownIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <path
      d='M6 9l6 6 6-6'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ChevronDownIcon;
