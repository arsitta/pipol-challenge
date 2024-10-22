import * as Yup from 'yup';

export const SearchMetricsSchema = Yup.object().shape({
    after: Yup.string()
        .required('La fecha es requerida'),

    before: Yup.string()
        .required('La fecha es requerida'),
});