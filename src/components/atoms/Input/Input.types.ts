import { ChangeEvent } from 'react';

export interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLElement>) => void;
  value?: number | string;
  required?: boolean;
}
