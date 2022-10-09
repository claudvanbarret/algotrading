import { ReactNode } from 'react';

export interface ModalProps {
  title?: string;
  children?: ReactNode;
  open?: boolean;
  okText?: string;
  onOk?: () => void;
  onClose?: () => void;
}
