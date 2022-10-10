import styled from 'styled-components';
import Theme from '../../../theme/Theme';

const { colors, spaces } = Theme;

export const Select = styled.select`
  height: 34px;
  padding: ${spaces.xs};
  background: transparent;
  border: 2px solid ${colors.fillGreySecondary};
  color: ${colors.fillGreyQuinternary};
  outline: none;
`;
