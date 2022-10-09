import styled from 'styled-components';
import Theme from '../../theme/Theme';

const { spaces } = Theme;

export const Container = styled.div`
  padding: ${spaces.l};
`;

export const Title = styled.h1`
  margin-bottom: ${spaces.mp};
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: ${spaces.m};

  button:not(:last-child) {
    margin-right: ${spaces.s};
  }
`;
