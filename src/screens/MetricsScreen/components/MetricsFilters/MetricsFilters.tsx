import { Box, Button, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { DateInput } from '../../../../components/DateInput/DateInput';
import { SearchMetricsSchema } from '../../../../schemas/Metrics/SearchMetricsSchema';

interface Props {
    handleSearch: (values: MetricsFiltersValues) => Promise<void>
    loading?: boolean;
}

export interface MetricsFiltersValues {
    after: dayjs.Dayjs | null
    before: dayjs.Dayjs | null
}

export const MetricsFilters = ({
    handleSearch,
    loading,
}: Props) => {

    const initialValues: MetricsFiltersValues = {
        after: null,
        before: null,
    }

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues,
        onSubmit: handleSearch,
        validationSchema: SearchMetricsSchema,
    })

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: "3rem" }}>
            <Grid container spacing={2} width={"100%"}>
                <Grid size={4}>
                    <DateInput
                        id={"after"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        disabled={loading}
                        disableFuture={true}
                        maxDate={values.before ? dayjs(values.before) : undefined}
                    />
                </Grid>
                <Grid size={4}>
                    <DateInput
                        id={"before"}
                        values={values}
                        touched={touched}
                        errors={errors}
                        onChange={handleChange}
                        disabled={loading}
                        disableFuture={true}
                        minDate={values.after ? dayjs(values.after) : undefined}
                    />
                </Grid>
            </Grid>

            <Button size="large" type="submit" variant="contained" color="primary" sx={{ mt: "1rem" }} disabled={loading}>
                {loading ?
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
