import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { FormikErrors, FormikTouched } from 'formik';

interface Props<T> {
    id: keyof T;
    values: T;
    touched: FormikTouched<T>;
    errors: FormikErrors<T>;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    disableFuture?: boolean;
    size?: "small" | "medium"
    maxDate?: dayjs.Dayjs;
    minDate?: dayjs.Dayjs;
}

export function DateInput<T>({
    id,
    values,
    errors,
    touched,
    onChange,
    label,
    placeholder,
    disabled,
    size = "medium",
    disableFuture,
    maxDate,
    minDate,
}: Props<T>) {

    const errorText = touched[id] && errors[id] ? String(errors[id]) : undefined;
    const parsedId = String(id)

    const dateValue = values[id] ? dayjs(values[id] as unknown as string) : null;

    const handleDateChange = (value: Dayjs | null) => {
        const formattedValue = value ? value.toISOString() : '';
        const customEvent = {
            target: {
                name: parsedId,
                value: formattedValue,
            },
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
        onChange(customEvent);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <DatePicker
                name={parsedId}
                label={label}
                value={dateValue}
                onChange={handleDateChange}
                disabled={disabled}
                format="DD/MM/YYYY"
                disableFuture={disableFuture}
                maxDate={maxDate}
                minDate={minDate}
            />
            {errorText && <Typography
                variant="caption" // Puedes usar "caption" o "body2" según lo que prefieras
                color="error" // Aplica el color de error de Material-UI
                style={{ marginTop: '4px', marginBottom: '0px' }}
            >{errorText}</Typography>
            }
        </Box>
    )
}
