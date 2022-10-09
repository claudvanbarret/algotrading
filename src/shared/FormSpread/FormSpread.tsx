import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Modal } from '../../components/molecules/Modal';
import { Side, Spread, Spreadcessor, SpreadType } from '../../models/Spread';
import * as S from './FormSpread.styles';
import { FormSpreadProps, SpreadFormValues } from './FormSpread.types';

const FormSpread = (props: FormSpreadProps) => {
  const { open = false, onSubmit, onClose } = props;
  const { t } = useTranslation();

  const formik = useFormik<SpreadFormValues>({
    initialValues: {
      id: Math.floor(Math.random() * 1000),
    },
    onSubmit: (values) => {
      const spread = {
        ...values,
        spreadTypeId: Number(values.spreadTypeId),
      } as Spread;

      onSubmit(spread);
    },
  });

  return (
    <Modal open={open} title="Add new spread range" okText="Add Spread" onOk={() => formik.submitForm()} onClose={onClose}>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Label htmlFor={Spreadcessor.SPREAD_TYPE}>{t('spread_type')}</S.Label>
        <select
          id={Spreadcessor.SPREAD_TYPE}
          name={Spreadcessor.SPREAD_TYPE}
          onChange={formik.handleChange}
          value={formik.values.spreadTypeId}
          required
        >
          <option selected>{t('select')}</option>
          <option value={SpreadType.WORKING_HOURS}>{t('working_hours')}</option>
          <option value={SpreadType.NIGHT_SHIFT}>{t('night_shift')}</option>
        </select>

        <S.Label htmlFor={Spreadcessor.ACCOUNT_ID}>{t('account_id')}</S.Label>
        <input
          id={Spreadcessor.ACCOUNT_ID}
          name={Spreadcessor.ACCOUNT_ID}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.accountId}
          required
        />
        <S.Label htmlFor={Spreadcessor.SYMBOL}>{t('symbol')}</S.Label>
        <input
          id={Spreadcessor.SYMBOL}
          name={Spreadcessor.SYMBOL}
          type="text"
          onChange={formik.handleChange}
          value={formik.values.symbol}
          required
        />
        <S.Label htmlFor={Spreadcessor.SIDE}>{t('side')}</S.Label>
        <select name={Spreadcessor.SIDE} onChange={formik.handleChange} value={formik.values.side}>
          <option selected>{t('select')}</option>
          <option value={Side.BUY}>{Side.BUY}</option>
          <option value={Side.SELL}>{Side.SELL}</option>
        </select>
        <S.Label htmlFor={Spreadcessor.NOTIONAL_FROM}>{t('notional_from')}</S.Label>
        <input
          id={Spreadcessor.NOTIONAL_FROM}
          name={Spreadcessor.NOTIONAL_FROM}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.notionalFrom}
          required
        />
        <S.Label htmlFor={Spreadcessor.NOTIONAL_TO}>{t('notional_to')}</S.Label>
        <input
          id={Spreadcessor.NOTIONAL_TO}
          name={Spreadcessor.NOTIONAL_TO}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.notionalTo}
          required
        />
        <S.Label htmlFor={Spreadcessor.SPREAD_PERCENTIL}>{t('spread_percentil')}</S.Label>
        <input
          id={Spreadcessor.SPREAD_PERCENTIL}
          name={Spreadcessor.SPREAD_PERCENTIL}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.spreadPercentil}
          required
        />
      </S.Form>
    </Modal>
  );
};

export default FormSpread;
