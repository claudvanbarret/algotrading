import { InputProps } from './Input.types';
import * as S from './Input.styles';

const Input = (props: InputProps) => {
  const { id, name, type, onChange, value, required } = props;

  return <S.Input id={id} name={name} type={type} value={value} onChange={onChange} required={required} />;
};

export default Input;
