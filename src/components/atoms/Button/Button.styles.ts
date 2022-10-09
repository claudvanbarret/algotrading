import styled from 'styled-components';

import Theme from '../../../theme/Theme';
import { ButtonProps } from './Button.types';

const { colors, spaces } = Theme;

export const Button = styled.button<ButtonProps>`
  padding: ${spaces.s};
  background-color: ${({ variant }) => (variant === 'primary' ? colors.fillGreen : colors.fillGrey)};
  border: 0;
  border-radius: 4px;
  color: ${colors.fill};
  text-transform: uppercase;
`;
