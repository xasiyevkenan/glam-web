type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const CoatIcon = ({size = 24, color = '#FAF7F2', strokeWidth = 1.5}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path
        d='M8.5 3L4 5.5L2.5 18H7V21H17V18H21.5L20 5.5L15.5 3'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 3L12 9.5L15.5 3M12 9.5V21M7 8V18M17 8V18'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx={14.5} cy={13} r={0.75} fill={color} />
      <circle cx={14.5} cy={16.5} r={0.75} fill={color} />
    </svg>
  );
};

export default CoatIcon;
