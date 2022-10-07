import styled, { css } from 'styled-components';
import Theme from '../../../theme/Theme';

const { colors } = Theme;

interface TableStyleProps {
  height?: number;
}

export const Table = styled.table<TableStyleProps>`
  display: inline-block;
  border-spacing: 0;
  border: 1px solid ${colors.fillGrey};
  overflow: scroll;
  height: ${({ height }) => height ?? '100%'};

  .tr {
    :last-child {
      .td {
        border-bottom: 0;
      }
    }
  }

  .th,
  .td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid ${colors.fillGrey};
    border-right: 1px solid ${colors.fillGrey};

    :last-child {
      border-right: 0;
    }
  }
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
  padding: 0.5rem;
  border-bottom: 1px solid ${colors.fillGrey};
  border-right: 1px solid ${colors.fillGrey};

  :last-child {
    border-right: 0;
  }
`;

export const Th = styled.td`
  ${Column}
`;

export const Td = styled.td`
  ${Column}
`;
