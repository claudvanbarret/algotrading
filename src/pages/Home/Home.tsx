import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CellProps, Column, Row } from 'react-table';

import { NumberCell } from '../../components/atoms/NumberCell';
import { Table } from '../../components/molecules/Table';
import useSpreads from '../../hooks/useSpreads';
import { SpreadConfiguration, SpreadConfigurationAcessor } from '../../models/SpreadConfiguration';

const Home = () => {
  const { workingHours, updateData, updateSpreadConfigurationById } = useSpreads();
  const { t } = useTranslation();

  const handleEdit = useCallback(
    (row: Row<SpreadConfiguration>) => {
      const payload: SpreadConfiguration = {
        ...row.original,
        notionalFrom: row.values[SpreadConfigurationAcessor.NOTIONAL_FROM],
        notionalTo: row.values[SpreadConfigurationAcessor.NOTIONAL_TO],
        spreadPercentil: row.values[SpreadConfigurationAcessor.SPREAD_PERCENTIL],
      };

      updateSpreadConfigurationById(payload);
    },
    [updateSpreadConfigurationById]
  );

  const columns = useMemo(
    () => [
      {
        Header: t('account_id'),
        accessor: SpreadConfigurationAcessor.ACCOUNT_ID,
      },
      {
        Header: t('symbol'),
        accessor: SpreadConfigurationAcessor.SYMBOL,
      },
      {
        Header: t('side'),
        accessor: SpreadConfigurationAcessor.SIDE,
      },
      {
        Header: t('notional_from'),
        accessor: SpreadConfigurationAcessor.NOTIONAL_FROM,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateData} />,
      },
      {
        Header: t('notional_to'),
        accessor: SpreadConfigurationAcessor.NOTIONAL_TO,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateData} />,
      },
      {
        Header: t('percent'),
        accessor: SpreadConfigurationAcessor.SPREAD_PERCENTIL,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateData} />,
      },
      {
        Header: t('edit'),
        width: 100,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <button onClick={() => handleEdit(props.row)}>Edit</button>,
      },
    ],
    []
  );

  return (
    <>
      <h1>{t('algotrading')}</h1>
      <Table columns={columns as Column<SpreadConfiguration>[]} data={workingHours} height={300} />
    </>
  );
};

export default Home;
