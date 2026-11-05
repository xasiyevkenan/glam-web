import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const MapPinIcon = ({size = 11, color = '#C9BBD8', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 11 11' fill='none' {...rest}>
      <path
        d='M5.50002 9.625C5.50002 9.625 2.29169 6.6 2.29169 4.35417C2.29169 2.70417 3.71252 1.375 5.50002 1.375C7.28752 1.375 8.70835 2.70417 8.70835 4.35417C8.70835 6.6 5.50002 9.625 5.50002 9.625Z'
        stroke={color}
        strokeWidth={1.6}
      />

      <path
        d='M5.50003 5.40832C6.08223 5.40832 6.5542 4.93635 6.5542 4.35415C6.5542 3.77195 6.08223 3.29999 5.50003 3.29999C4.91783 3.29999 4.44586 3.77195 4.44586 4.35415C4.44586 4.93635 4.91783 5.40832 5.50003 5.40832Z'
        stroke={color}
        strokeWidth={1.6}
      />
    </svg>
  );
};

export default MapPinIcon;
