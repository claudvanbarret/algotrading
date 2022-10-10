import { IconButtonProps } from './IconButton.types';

import * as S from './IconButton.styles';

const IconButton = (props: IconButtonProps) => {
  const { children, onClick } = props;

  return <S.IconButton onClick={onClick}>{children}</S.IconButton>;
};

export default IconButton;
