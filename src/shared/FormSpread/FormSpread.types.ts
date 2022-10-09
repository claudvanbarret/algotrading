import { Spread } from '../../models/Spread';

export interface FormSpreadProps {
  open?: boolean;
  onSubmit: (spread: Spread) => void;
  onClose?: () => void;
}

export type SpreadFormValues = Partial<Spread>;
