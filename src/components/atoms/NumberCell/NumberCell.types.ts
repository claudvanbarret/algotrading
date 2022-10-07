import { CellProps, IdType } from 'react-table';

export interface NumberCellProps<T extends object> extends CellProps<T, number> {
  onBlur: (index: number, id: IdType<T>, value: unknown) => void;
}
