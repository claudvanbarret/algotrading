import styled, { css } from 'styled-components';
import Theme from '../../../theme/Theme';

const { colors, spaces, fonts } = Theme;

interface TableStyleProps {
  height?: number;
}

export const Container = styled.div`
  width: fit-content;
`;

export const Title = styled.h3`
  padding: ${spaces.s};
  background-color: ${colors.fillGrey};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  text-transform: uppercase;
  font-weight: ${fonts.weight.medium};
`;

export const Table = styled.table<TableStyleProps>`
  display: inline-block;
  border-spacing: 0;
  border: 1px solid ${colors.fillGrey};
  overflow-y: auto;
  height: ${({ height }) => `${height}px` ?? '100%'};
`;

export const Tr = styled.td`
  :last-child {
    .td {
      border-bottom: 0;
    }
  }
`;

const Column = css`
  margin: 0;
  padding: ${spaces.xs};
  border-bottom: 1px solid ${colors.fillGrey};
  border-right: 1px solid ${colors.fillGrey};
  text-align: left;

  :last-child {
    border-right: 0;
  }
`;

export const Th = styled.th`
  ${Column}
`;

export const Td = styled.td`
  ${Column}
`;
