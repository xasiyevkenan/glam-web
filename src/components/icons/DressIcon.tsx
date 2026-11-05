type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const DressIcon = ({size = 24, color = '#FAF7F2', strokeWidth = 1.5}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      {/* Bretelkalar */}
      <path
        d='M9.5 2L8.5 6M14.5 2L15.5 6'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Dekolte */}
      <path
        d='M8.5 6Q12 10.5 15.5 6'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Korset, bel xətti və genişlənən ətək */}
      <path
        d='M8.5 6L9.5 12C9.3 16 6.5 19 4 21C8 22.5 16 22.5 20 21C17.5 19 14.7 16 14.5 12L15.5 6M9.5 12H14.5'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DressIcon;
