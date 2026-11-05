type Props = {
  size?: number;
  color?: string;
};

const PlusIcon = ({size = 18, color = '#FAF7F2'}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 18 18' fill='none'>
      <path
        d='M9 3.75V14.25M3.75 9H14.25'
        stroke={color}
        strokeWidth={1.65}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PlusIcon;
