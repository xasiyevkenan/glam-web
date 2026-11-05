import type {SVGProps} from 'react';

type Props = {size?: number; color?: string; filled?: boolean};

const HeartIcon = ({size = 15, color = '#5F5E5A', filled = false}: Props) => (
  <svg width={size} height={size} viewBox='0 0 15 15' fill='none'>
    <path
      d='M11.8751 8.74995C12.8126 7.81245 13.7501 6.62495 13.7501 5.31245C13.7984 4.56345 13.6002 3.81922 13.1858 3.19342C12.7715 2.56761 12.1637 2.09462 11.4553 1.84667C10.7468 1.59873 9.97674 1.58945 9.26256 1.82027C8.54838 2.05108 7.92937 2.5093 7.50005 3.12495C7.07074 2.5093 6.45172 2.05108 5.73754 1.82027C5.02336 1.59873 4.25326 1.59873 3.54484 1.84667C2.83643 2.09462 2.22863 2.56761 1.81426 3.19342C1.3999 3.81922 1.20174 4.56345 1.25005 5.31245C1.25005 9.37495 7.50005 13.1249 7.50005 13.1249C7.50005 13.1249 9.68755 11.6874 11.8751 9.62495C11.8751 9.34745 11.8751 9.05995 11.8751 8.74995Z'
      stroke={color}
      strokeWidth={1.25}
      strokeLinecap='round'
      strokeLinejoin='round'
      fill={filled ? color : 'none'}
    />
  </svg>
);

export default HeartIcon;
