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
  padding: ${spaces.sp};
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow-y: auto;
  height: ${({ height }) => `${height}px` ?? '100%'};

  tbody {
    tr {
      background-color: ${colors.fillGreyTertiary};

      :nth-child(2n) {
        background-color: ${colors.fillGreyQuartenary};
      }
    }
  }
`;

export const Tr = styled.tr`
  :last-child {
    .td {
      border-bottom: 0;
    }
  }
`;

const Column = css`
  margin: 0;

  text-align: left;

  :last-child {
    border-right: 0;
  }
`;

export const Th = styled.th`
  ${Column}
  background-color: ${colors.fillBlack};
  padding: ${spaces.sp};
  font-weight: ${fonts.weight.light};
`;

export const Td = styled.td`
  ${Column}
  padding: ${spaces.s} ${spaces.sp};
`;
