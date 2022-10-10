import { SelectProps } from './Select.types';
import * as S from './Select.styles';

const Select = (props: SelectProps) => {
  const { id, name, options, onChange, value, required, defaultOptionLabel } = props;

  return (
    <S.Select id={id} name={name} value={value} onChange={onChange} required={required}>
      <option selected>{defaultOptionLabel}</option>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Select>
  );
};

export default Select;
