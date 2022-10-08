import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CellProps, Column } from 'react-table';

import { NumberCell } from '../../components/atoms/NumberCell';
import { Table } from '../../components/molecules/Table';
import useSpreads from '../../hooks/useSpreads';
import { SpreadConfiguration } from '../../models/SpreadConfiguration';
import { WorkingHoursTableAccessor } from './Home.types';

const Home = () => {
  const { workingHours, updateData } = useSpreads();
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      {
        Header: t('account_id'),
        accessor: WorkingHoursTableAccessor.ACCOUNT_ID,
      },
      {
        Header: t('symbol'),
        accessor: WorkingHoursTableAccessor.SYMBOL,
      },
      {
        Header: t('side'),
        accessor: WorkingHoursTableAccessor.SIDE,
      },
      {
        Header: t('notional_from'),
        accessor: WorkingHoursTableAccessor.NOTIONAL_FROM,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateData} />,
      },
      {
        Header: t('notional_to'),
        accessor: WorkingHoursTableAccessor.NOTIONAL_TO,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateData} />,
      },
      {
        Header: t('percent'),
        accessor: WorkingHoursTableAccessor.SPREAD_PERCENTIL,
        width: 160,
        Cell: (props: CellProps<SpreadConfiguration, number>) => <NumberCell {...props} onBlur={updateData} />,
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
