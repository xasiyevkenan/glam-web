type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const HeelIcon = ({size = 24, color = '#FAF7F2', strokeWidth = 1.5}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      {/* Əsas silhouette: arxa, stiletto daban, tağ, altlıq, burun, üst xətt */}
      <path
        d='M4 4.5C4 8 4.2 11 4.8 13.5L5.4 21H7.2L7.9 15C10 16.8 12.5 19.5 15 19.5H19.5C20.8 19.5 21.5 18.9 21.5 18.1C21.5 17.3 21 16.7 20.2 16.4C17.5 15 14.5 13.3 12.5 11.5C10 9.5 7.5 6 4 4.5Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Daxili yaxa xətti (detal) */}
      <path
        d='M4.3 8.5C6.5 9 9.2 10.3 12.5 11.5'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HeelIcon;
