import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';

interface Props<T> {
    id: keyof T;
    values: T;
    touched: FormikTouched<T>;
    errors: FormikErrors<T>;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: "password" | "text";
    size?: "small" | "medium"
}

export function Input<T>({
    id,
    values,
    errors,
    touched,
    onChange,
    label,
    placeholder,
    disabled,
    size = "medium",
    type = "text",
}: Props<T>) {

    const errorText = touched[id] && errors[id] ? String(errors[id]) : undefined;
    const parsedId = String(id)

    const defaultStylesInput = { my: "12px", width: "100%" }

    return (
        <TextField
            id={parsedId}
            name={parsedId}
            label={label}
            variant="outlined"
            placeholder={placeholder}
            value={values[id]}
            error={touched[id] && Boolean(errors[id])}
            helperText={errorText}
            onChange={onChange}
            disabled={disabled}
            size={size}
            type={type}
            sx={defaultStylesInput}
        />
    )
}
