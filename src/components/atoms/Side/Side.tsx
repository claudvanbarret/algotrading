import { SideProps } from './Side.types';

import * as S from './Side.styles';

const Side = (props: SideProps) => {
  const { type } = props;

  return <S.Text type={type}>{type}</S.Text>;
};

export default Side;
