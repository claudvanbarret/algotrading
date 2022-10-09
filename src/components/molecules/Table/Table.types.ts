import { UseTableOptions } from 'react-table';

export interface TableProps<T extends object> extends UseTableOptions<T> {
  height?: number;
  title?: string;
}
