import type {SVGProps} from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const ListingsIcon = ({size = 22, color = '#ADADA6', ...rest}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 22 22' fill='none' {...rest}>
      <path
        d='M8.24992 3.66663L5.49992 5.49996L6.41659 8.24996L4.58325 9.16663V18.3333H17.4166V9.16663L15.5833 8.24996L16.4999 5.49996L13.7499 3.66663'
        stroke={color}
        strokeWidth={1.83333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.25 3.66663C8.25 5.04163 9.44167 5.95829 11 5.95829C12.5583 5.95829 13.75 5.04163 13.75 3.66663'
        stroke={color}
        strokeWidth={1.83333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ListingsIcon;
