/* eslint-disable react/jsx-key */
import { useTable, useBlockLayout } from 'react-table';
import { TableProps } from './Table.types';
import * as S from './Table.styles';
import { useMemo } from 'react';

const Table = <T extends object>(props: TableProps<T>) => {
  const { columns, data, height, title } = props;

  const defaultColumn = useMemo(
    () => ({
      width: 150,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout
  );

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.Table {...getTableProps()} height={height}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <S.Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <S.Th {...column.getHeaderProps()}>{column.render('Header')}</S.Th>
              ))}
            </S.Tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <S.Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <S.Td {...cell.getCellProps()}>{cell.render('Cell')}</S.Td>;
                })}
              </S.Tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default Table;
