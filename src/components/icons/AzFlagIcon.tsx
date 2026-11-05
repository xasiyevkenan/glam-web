import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
};

const AzFlagIcon = ({size = 16, ...rest}: Props) => {
  const width = size * 1.375; // 22:16 aspect ratio

  return (
    <svg width={width} height={size} viewBox='0 0 22 16' {...rest}>
      <rect width={22} height={16} fill='#00B9E4' />
      <rect width={22} height={5.33} y={5.33} fill='#EF3340' />
      <rect width={22} height={5.33} y={10.67} fill='#00AF66' />
      <circle cx={11} cy={8} r={2.6} fill='#FAF7F2' />
      <circle cx={11.7} cy={8} r={2.15} fill='#EF3340' />
      <polygon
        points='14.1,8 15.3,7.55 14.6,8.6 15.6,9.2 14.35,9.15 14.5,10.4 13.6,9.5 12.8,10.4 13,9.15 11.75,9.2 12.75,8.6 12.05,7.55'
        fill='#FAF7F2'
      />
    </svg>
  );
};

export default AzFlagIcon;
