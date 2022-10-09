import { ReactNode, MouseEvent } from 'react';

export type ButtonType = 'primary' | 'secondary';

type HtmlType = 'submit' | 'button' | 'reset' | undefined;

export interface ButtonProps {
  htmlType?: HtmlType;
  variant?: ButtonType;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
