import { useEffect, useState } from 'react';

import { NumberCellProps } from './NumberCell.types';
import * as S from './NumberCell.styles';

const NumberCell = <T extends object>(props: NumberCellProps<T>): JSX.Element => {
  const {
    value: initialValue,
    row: { index },
    column: { id },
    onBlur,
  } = props;
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleBlur = () => onBlur(index, id, value);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <S.Input type="number" value={value} onChange={handleChange} onBlur={handleBlur} />;
};

export default NumberCell;
