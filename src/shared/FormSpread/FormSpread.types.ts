import { SpreadConfiguration } from '../../models/SpreadConfiguration';

export interface FormSpreadProps {
  open?: boolean;
  onSubmit: (spreadConfiguration: SpreadConfiguration) => void;
  onClose?: () => void;
}

export type FormSpreadValues = Partial<SpreadConfiguration>;
