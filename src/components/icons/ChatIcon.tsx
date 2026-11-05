import type {SVGProps} from 'react';

type Props = {size?: number; color?: string};

const ChatIcon = ({size = 24, color = '#000'}: Props) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <path
      d='M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 3.5V16H4a1 1 0 01-1-1V6a1 1 0 011-1z'
      stroke={color}
      strokeWidth={2}
      strokeLinejoin='round'
    />
  </svg>
);

export default ChatIcon;
