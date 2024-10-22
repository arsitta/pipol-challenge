import * as Yup from 'yup';

export const SearchMetricsSchema = Yup.object().shape({
    desde: Yup.string()
        .required('La fecha es requerida'),

    hasta: Yup.string()
        .required('La fecha es requerida'),
});