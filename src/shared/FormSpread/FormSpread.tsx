import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Input } from '../../components/atoms/Input';
import { Select } from '../../components/atoms/Select';

import { Modal } from '../../components/molecules/Modal';
import { Side, Spread, Spreadcessor, SpreadType } from '../../models/Spread';
import * as S from './FormSpread.styles';
import { FormSpreadProps, SpreadFormValues } from './FormSpread.types';

const FormSpread = (props: FormSpreadProps) => {
  const { open = false, onSubmit, onClose } = props;
  const { t } = useTranslation();

  const spreadSchema = Yup.object().shape({
    spreadTypeId: Yup.string().required(),
    accountId: Yup.number().required(),
    symbol: Yup.string().length(3).required(),
    side: Yup.mixed().oneOf(Object.values(Side)).required(),
    notionalFrom: Yup.number().required(),
    notionalTo: Yup.number().required(),
    spreadPercentil: Yup.number().required(),
  });

  const formik = useFormik<SpreadFormValues>({
    initialValues: {
      id: Math.floor(Math.random() * 1000),
    },
    validationSchema: spreadSchema,
    onSubmit: (values) => {
      if (!formik.isValid) return;
      const spread = {
        ...values,
        spreadTypeId: Number(values.spreadTypeId),
      } as Spread;

      onSubmit(spread);
    },
  });

  const { errors, touched, submitForm } = formik;

  return (
    <Modal open={open} title={t('add_new_spread_range')} okText={t('add_spread')} onOk={() => submitForm()} onClose={onClose}>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Label htmlFor={Spreadcessor.SPREAD_TYPE}>{t('spread_type')}</S.Label>
        <Select
          id={Spreadcessor.SPREAD_TYPE}
          name={Spreadcessor.SPREAD_TYPE}
          onChange={formik.handleChange}
          value={formik.values.spreadTypeId}
          defaultOptionLabel={t('select')}
          options={[
            { value: SpreadType.WORKING_HOURS, label: t('working_hours') },
            { value: SpreadType.NIGHT_SHIFT, label: t('night_shift') },
          ]}
          required
        />
        {errors.spreadTypeId && touched.spreadTypeId && <S.Error>{errors.spreadTypeId}</S.Error>}

        <S.Label htmlFor={Spreadcessor.ACCOUNT_ID}>{t('account_id')}</S.Label>
        <Input
          id={Spreadcessor.ACCOUNT_ID}
          name={Spreadcessor.ACCOUNT_ID}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.accountId}
          required
        />
        {errors.accountId && touched.accountId && <S.Error>{errors.accountId}</S.Error>}

        <S.Label htmlFor={Spreadcessor.SYMBOL}>{t('symbol')}</S.Label>
        <Input
          id={Spreadcessor.SYMBOL}
          name={Spreadcessor.SYMBOL}
          type="text"
          onChange={formik.handleChange}
          value={formik.values.symbol}
          required
        />
        {errors.symbol && touched.symbol && <S.Error>{errors.symbol}</S.Error>}

        <S.Label htmlFor={Spreadcessor.SIDE}>{t('side')}</S.Label>
        <Select
          id={Spreadcessor.SIDE}
          name={Spreadcessor.SIDE}
          onChange={formik.handleChange}
          value={formik.values.side}
          defaultOptionLabel={t('select')}
          options={[
            { value: Side.BUY, label: Side.BUY },
            { value: Side.SELL, label: Side.SELL },
          ]}
        />
        {errors.side && touched.side && <S.Error>{errors.side}</S.Error>}

        <S.Label htmlFor={Spreadcessor.NOTIONAL_FROM}>{t('notional_from')}</S.Label>
        <Input
          id={Spreadcessor.NOTIONAL_FROM}
          name={Spreadcessor.NOTIONAL_FROM}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.notionalFrom}
          required
        />
        {errors.notionalFrom && touched.notionalFrom && <S.Error>{errors.notionalFrom}</S.Error>}

        <S.Label htmlFor={Spreadcessor.NOTIONAL_TO}>{t('notional_to')}</S.Label>
        <Input
          id={Spreadcessor.NOTIONAL_TO}
          name={Spreadcessor.NOTIONAL_TO}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.notionalTo}
          required
        />
        {errors.notionalTo && touched.notionalTo && <S.Error>{errors.notionalTo}</S.Error>}

        <S.Label htmlFor={Spreadcessor.SPREAD_PERCENTIL}>{t('spread_percentil')}</S.Label>
        <Input
          id={Spreadcessor.SPREAD_PERCENTIL}
          name={Spreadcessor.SPREAD_PERCENTIL}
          type="number"
          onChange={formik.handleChange}
          value={formik.values.spreadPercentil}
          required
        />
        {errors.spreadPercentil && touched.spreadPercentil && <S.Error>{formik.errors.spreadPercentil}</S.Error>}
      </S.Form>
    </Modal>
  );
};

export default FormSpread;
