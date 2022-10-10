import { ChangeEvent } from 'react';

export interface OptionsProps {
  value: string | number;
  label: string;
}

export interface SelectProps {
  id?: string;
  name?: string;
  type?: string;
  options: OptionsProps[];
  onChange: (e: ChangeEvent<HTMLElement>) => void;
  value?: number | string;
  required?: boolean;
  defaultOptionLabel?: string;
}
