import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CellProps, Column, Row } from 'react-table';

import { NumberCell } from '../../components/atoms/NumberCell';
import { Table } from '../../components/molecules/Table';
import useSpreads from '../../hooks/useSpreads';
import { SpreadConfiguration, SpreadConfigurationAcessor } from '../../models/SpreadConfiguration';
import * as S from './Home.styles';

const Home = () => {
  const { workingHours, updateSpreadConfigurations, updateSpreadConfigurationById, deleteSpreadConfigurationById } = useSpreads();
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

  const handleDelete = useCallback(
    (row: Row<SpreadConfiguration>) => {
      const spreadConfigurationId = row.original.id;

      deleteSpreadConfigurationById(spreadConfigurationId);
    },
    [deleteSpreadConfigurationById]
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
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateSpreadConfigurations} />,
      },
      {
        Header: t('notional_to'),
        accessor: SpreadConfigurationAcessor.NOTIONAL_TO,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateSpreadConfigurations} />,
      },
      {
        Header: t('percent'),
        accessor: SpreadConfigurationAcessor.SPREAD_PERCENTIL,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateSpreadConfigurations} />,
      },
      {
        Header: t('edit'),
        width: 75,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <button onClick={() => handleEdit(props.row)}>Edit</button>,
      },
      {
        Header: t('delete'),
        width: 75,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <button onClick={() => handleDelete(props.row)}>Delete</button>,
      },
    ],
    []
  );

  return (
    <S.Container>
      <h1>{t('spread_configuration')}</h1>
      <Table columns={columns as Column<SpreadConfiguration>[]} data={workingHours} height={300} title={t('working_hours')} />
    </S.Container>
  );
};

export default Home;
