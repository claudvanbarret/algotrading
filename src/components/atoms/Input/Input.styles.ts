import styled from 'styled-components';
import Theme from '../../../theme/Theme';

const { colors, spaces } = Theme;

export const Input = styled.input`
  height: 34px;
  padding: ${spaces.xs} ${spaces.s};
  background: transparent;
  border: 2px solid ${colors.fillGreySecondary};
  color: ${colors.fillGreyQuinternary};
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
