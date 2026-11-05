type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const HandbagIcon = ({size = 24, color = '#FAF7F2', strokeWidth = 1.5}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path
        d='M2.05 18.57A2 2 0 0 0 4 21H20A2 2 0 0 0 21.95 18.57L19.95 9.57A2 2 0 0 0 18 8H6A2 2 0 0 0 4.05 9.57Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 11V6A4 4 0 0 1 16 6V11'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HandbagIcon;
