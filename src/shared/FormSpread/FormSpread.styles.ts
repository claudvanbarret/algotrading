import styled from 'styled-components';
import Theme from '../../theme/Theme';

const { spaces, colors } = Theme;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: ${spaces.s};
  margin-bottom: ${spaces.xs};
`;

export const Error = styled.span`
  color: ${colors.fillRed};
  font-size: 1.2rem;
`;
