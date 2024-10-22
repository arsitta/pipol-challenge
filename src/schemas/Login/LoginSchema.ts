import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    user: Yup.string()
        .required('El nombre de usuario es requerido'),

    password: Yup.string()
        .required('La contraseña es requerida'),
});