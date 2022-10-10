import styled from 'styled-components';

import Theme from '../../../theme/Theme';

const { colors } = Theme;

export const IconButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: ${colors.fill};
  cursor: pointer;
  svg {
    font-size: 1.8rem;
  }
`;
