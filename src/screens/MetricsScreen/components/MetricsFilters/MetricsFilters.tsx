import { Box, Button, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { DateInput } from '../../../../components/DateInput/DateInput';
import { SearchMetricsSchema } from '../../../../schemas/Metrics/SearchMetricsSchema';

interface Props {
    handleSearch: () => void
}

export const MetricsFilters = ({
    handleSearch,
}: Props) => {

    const initialValues = {
        desde: null,
        hasta: null,
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
        onSubmit: handleSearch,
        validationSchema: SearchMetricsSchema,
    })

    console.log({ values })

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} width={"100%"}>
                <Grid size={4}>
                    <DateInput
                        id={"desde"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        disableFuture={true}
                        maxDate={values.hasta ? dayjs(values.hasta) : undefined}
                    />
                </Grid>
                <Grid size={4}>
                    <DateInput
                        id={"hasta"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        disableFuture={true}
                        minDate={values.desde ? dayjs(values.desde) : undefined}
                    />
                </Grid>
            </Grid>

            <Button size="large" type="submit" fullWidth variant="contained" color="primary" sx={{ mt: "1rem" }} disabled={isSubmitting}>
                {isSubmitting ?
                    <>
                        <CircularProgress size={20} color="inherit" sx={{ mr: "0.4rem" }} />
                        Enviando
                    </>
                    :
                    "Buscar"
                }
            </Button>
        </Box>
    )
}
