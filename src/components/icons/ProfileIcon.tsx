type Props = {size?: number; color?: string};

const ProfileIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <circle cx={12} cy={8} r={4} stroke={color} strokeWidth={2} />
    <path
      d='M4 20c1.5-4 5-5.5 8-5.5s6.5 1.5 8 5.5'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

export default ProfileIcon;
