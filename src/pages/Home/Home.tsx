import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCheckCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CellProps, Column, Row } from 'react-table';

import { Button } from '../../components/atoms/Button';
import { IconButton } from '../../components/atoms/IconButton';
import { NumberCell } from '../../components/atoms/NumberCell';
import { Side } from '../../components/atoms/Side';
import { Table } from '../../components/molecules/Table';
import useSpreads from '../../hooks/useSpreads';
import { useToggle } from '../../hooks/useToggle';
import { Spread, Spreadcessor } from '../../models/Spread';
import { FormSpread } from '../../shared/FormSpread';
import Theme from '../../theme/Theme';
import * as S from './Home.styles';

const { colors } = Theme;

const Home = () => {
  const { t } = useTranslation();
  const { workingHours, nightShift, refetchSpreads, updateSpreads, createSpread, updateSpread, deleteSpread } = useSpreads();
  const [isOpenFormSpread, openFormSpread, closeFormSpread] = useToggle();

  const handleEdit = useCallback(
    (row: Row<Spread>) => {
      const payload: Spread = {
        ...row.original,
        notionalFrom: row.values[Spreadcessor.NOTIONAL_FROM],
        notionalTo: row.values[Spreadcessor.NOTIONAL_TO],
        spreadPercentil: row.values[Spreadcessor.SPREAD_PERCENTIL],
      };

      updateSpread(payload);
    },
    [updateSpread]
  );

  const handleDelete = useCallback(
    (row: Row<Spread>) => {
      const spreadId = row.original.id;

      deleteSpread(spreadId);
    },
    [deleteSpread]
  );

  const handleSubmit = (spread: Spread) => {
    createSpread(spread);
    closeFormSpread();
  };

  const columns = useMemo(
    () => [
      {
        Header: t('account_id'),
        accessor: Spreadcessor.ACCOUNT_ID,
        width: 120,
      },
      {
        Header: t('symbol'),
        accessor: Spreadcessor.SYMBOL,
        width: 100,
      },
      {
        Header: t('side'),
        accessor: Spreadcessor.SIDE,
        width: 100,
        Cell: (props: CellProps<Spread, number>) => <Side type={props.row.original.side} />,
      },
      {
        Header: t('notional_from'),
        accessor: Spreadcessor.NOTIONAL_FROM,
        width: 160,
        Cell: (props: CellProps<Spread, number>) => <NumberCell {...props} onBlur={updateSpreads} />,
      },
      {
        Header: t('notional_to'),
        accessor: Spreadcessor.NOTIONAL_TO,
        width: 160,
        Cell: (props: CellProps<Spread, number>) => <NumberCell {...props} onBlur={updateSpreads} />,
      },
      {
        Header: t('percent'),
        accessor: Spreadcessor.SPREAD_PERCENTIL,
        width: 160,
        Cell: (props: CellProps<Spread, number>) => <NumberCell {...props} onBlur={updateSpreads} />,
      },
      {
        Header: t('edit'),
        width: 75,
        Cell: (props: CellProps<Spread, number>) => (
          <IconButton onClick={() => handleEdit(props.row)}>
            <AiFillCheckCircle color={colors.fill} />
          </IconButton>
        ),
      },
      {
        Header: t('delete'),
        width: 75,
        Cell: (props: CellProps<Spread, number>) => (
          <IconButton onClick={() => handleDelete(props.row)}>
            <RiDeleteBinLine color={colors.fillRed} />
          </IconButton>
        ),
      },
    ],
    []
  );

  return (
    <S.Container>
      <S.Title>{t('spread_configuration')}</S.Title>
      <S.Buttons>
        <Button variant="secondary" onClick={() => refetchSpreads()}>
          {t('refresh_spread_values')}
        </Button>
        <Button variant="primary" onClick={() => openFormSpread()}>
          {t('add_range')}
        </Button>
      </S.Buttons>
      <FormSpread open={isOpenFormSpread} onSubmit={handleSubmit} onClose={() => closeFormSpread()} />
      <Table columns={columns as Column<Spread>[]} data={workingHours} height={360} title={t('working_hours')} />
      <Table columns={columns as Column<Spread>[]} data={nightShift} height={360} title={t('night_shift')} />
    </S.Container>
  );
};

export default Home;
