import { Alert, Box, Button, CircularProgress, Container, Paper, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAuth } from '../../store/slices/authSlice/authSlice';
import { Input } from '../../components/Input/Input';
import { loginSchema } from '../../schemas/Login/LoginSchema';
import { sendLoginUser } from '../../services/authService';

export interface LoginFormValues {
    user: string;
    password: string;
}

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [formError, setFormError] = useState<string | null>(null)

    const initialValues: LoginFormValues = {
        user: "",
        password: "",
    }

    const onSubmit = async (values: LoginFormValues) => {
        try {
            const token = await sendLoginUser(values)
            dispatch(loginAuth({ token }))
        } catch (err: any) {
            setFormError(err);
        }
    }

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    })

    const handleClickSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        handleSubmit(e)
        setFormError(null)
    }

    return (
        <Container className="screen-section" maxWidth="xs">
            <Paper elevation={3} sx={{ height: "fit-content" }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: "center",
                        padding: 3,
                    }}
                >

                    <Typography variant="h5" component="h1">Iniciar Sesión</Typography>

                    {formError && <Alert severity="error" sx={{ mb: 3, mt: 2 }}>{formError}</Alert>}

                    <Box component="form" onSubmit={handleClickSubmit}>
                        <Input
                            id="user"
                            values={values}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            label="User"
                            placeholder='Ingresa tu usuario'
                            disabled={isSubmitting}

                        />

                        <Input
                            id="password"
                            values={values}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            label="Password"
                            placeholder='Ingresa tu contraseña'
                            disabled={isSubmitting}
                            type="password"
                        />

                        <Button size="large" type="submit" fullWidth variant="contained" color="primary" sx={{ mt: "1rem" }} disabled={isSubmitting}>
                            {isSubmitting ?
                                <>
                                    <CircularProgress size={20} color="inherit" sx={{ mr: "0.4rem" }} />
                                    Enviando
                                </>
                                :
                                "Iniciar Sesión"
                            }
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}
