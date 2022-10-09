import styled from 'styled-components';
import Theme from '../../../theme/Theme';

const { colors, spaces } = Theme;

export const Input = styled.input`
  height: 34px;
  margin: -${spaces.s} -${spaces.sp};
  padding-right: ${spaces.s};
  background-color: ${colors.fillGreySecondary};
  border: 0;
  color: ${colors.fillGreyQuinternary};
  text-align: right;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
