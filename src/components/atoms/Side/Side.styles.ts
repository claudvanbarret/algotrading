import styled from 'styled-components';

import { Side } from '../../../models/Spread';
import Theme from '../../../theme/Theme';
import { SideProps } from './Side.types';

const { colors } = Theme;

export const Text = styled.span<SideProps>`
  color: ${({ type }) => (type === Side.BUY ? colors.fillGreen : colors.fillRed)};
`;
