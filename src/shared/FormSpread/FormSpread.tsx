import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Modal } from '../../components/molecules/Modal';
import { Side, SpreadConfiguration, SpreadConfigurationAcessor, SpreadType } from '../../models/SpreadConfiguration';
import * as S from './FormSpread.styles';
import { FormSpreadProps, FormSpreadValues } from './FormSpread.types';

const FormSpread = (props: FormSpreadProps) => {
  const { open = false, onSubmit, onClose } = props;
  const { t } = useTranslation();

  const formik = useFormik<FormSpreadValues>({
    initialValues: {
      id: Math.floor(Math.random() * 1000),
    },
    onSubmit: (values) => {
      const spread = {
        ...values,
        spreadTypeId: Number(values.spreadTypeId),
      } as SpreadConfiguration;

      onSubmit(spread);
    },
  });

  return (
    <Modal open={open} title="Add new spread range" okText="Add Spread" onOk={() => formik.submitForm()} onClose={onClose}>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Label htmlFor={SpreadConfigurationAcessor.SPREAD_TYPE}>{t('spread_type')}</S.Label>
        <select
          id={SpreadConfigurationAcessor.SPREAD_TYPE}
          name={SpreadConfigurationAcessor.SPREAD_TYPE}
          onChange={formik.handleChange}
          value={formik.values.spreadTypeId}
          required
        >
          <option selected>{t('select')}</option>
          <option value={SpreadType.WORKING_HOURS}>{t('working_hours')}</option>
          <option value={SpreadType.NIGHT_SHIFT}>{t('night_shift')}</option>
        </select>

        <S.Label htmlFor={SpreadConfigurationAcessor.ACCOUNT_ID}>{t('account_id')}</S.Label>
        <input
          id={SpreadConfigurationAcessor.ACCOUNT_ID}
          name={SpreadConfigurationAcessor.ACCOUNT_ID}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.accountId}
          required
        />
        <S.Label htmlFor={SpreadConfigurationAcessor.SYMBOL}>{t('symbol')}</S.Label>
        <input
          id={SpreadConfigurationAcessor.SYMBOL}
          name={SpreadConfigurationAcessor.SYMBOL}
          type="text"
          onChange={formik.handleChange}
          value={formik.values.symbol}
          required
        />
        <S.Label htmlFor={SpreadConfigurationAcessor.SIDE}>{t('side')}</S.Label>
        <select name={SpreadConfigurationAcessor.SIDE} onChange={formik.handleChange} value={formik.values.side}>
          <option selected>{t('select')}</option>
          <option value={Side.BUY}>{Side.BUY}</option>
          <option value={Side.SELL}>{Side.SELL}</option>
        </select>
        <S.Label htmlFor={SpreadConfigurationAcessor.NOTIONAL_FROM}>{t('notional_from')}</S.Label>
        <input
          id={SpreadConfigurationAcessor.NOTIONAL_FROM}
          name={SpreadConfigurationAcessor.NOTIONAL_FROM}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.notionalFrom}
          required
        />
        <S.Label htmlFor={SpreadConfigurationAcessor.NOTIONAL_TO}>{t('notional_to')}</S.Label>
        <input
          id={SpreadConfigurationAcessor.NOTIONAL_TO}
          name={SpreadConfigurationAcessor.NOTIONAL_TO}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.notionalTo}
          required
        />
        <S.Label htmlFor={SpreadConfigurationAcessor.SPREAD_PERCENTIL}>{t('spread_percentil')}</S.Label>
        <input
          id={SpreadConfigurationAcessor.SPREAD_PERCENTIL}
          name={SpreadConfigurationAcessor.SPREAD_PERCENTIL}
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
