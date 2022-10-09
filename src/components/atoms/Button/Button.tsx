import { ButtonProps } from './Button.types';

import * as S from './Button.styles';

const Button = (props: ButtonProps) => {
  const { htmlType, variant, children, onClick } = props;

  return (
    <S.Button htmlType={htmlType} variant={variant} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
