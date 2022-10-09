import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CellProps, Column, Row } from 'react-table';
import { Button } from '../../components/atoms/Button';

import { NumberCell } from '../../components/atoms/NumberCell';
import { Side } from '../../components/atoms/Side';
import { Table } from '../../components/molecules/Table';
import useSpreads from '../../hooks/useSpreads';
import { SpreadConfiguration, SpreadConfigurationAcessor } from '../../models/SpreadConfiguration';
import * as S from './Home.styles';

const Home = () => {
  const {
    workingHours,
    refetchSpreadConfigurations,
    updateSpreadConfigurations,
    updateSpreadConfigurationById,
    deleteSpreadConfigurationById,
  } = useSpreads();
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
        width: 120,
      },
      {
        Header: t('symbol'),
        accessor: SpreadConfigurationAcessor.SYMBOL,
        width: 100,
      },
      {
        Header: t('side'),
        accessor: SpreadConfigurationAcessor.SIDE,
        width: 100,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <Side type={props.row.original.side} />,
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
      <S.Title>{t('spread_configuration')}</S.Title>
      <S.Buttons>
        <Button variant="secondary" onClick={() => refetchSpreadConfigurations()}>
          {t('refresh_spread_values')}
        </Button>
        <Button variant="primary">{t('add_range')}</Button>
      </S.Buttons>
      <Table columns={columns as Column<SpreadConfiguration>[]} data={workingHours} height={360} title={t('working_hours')} />
    </S.Container>
  );
};

export default Home;
