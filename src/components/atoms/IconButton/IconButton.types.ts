import { ReactNode, MouseEvent } from 'react';

export interface IconButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
