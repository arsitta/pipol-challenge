import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const MaterialLocalizationProvider = ({ children }: Props) => {
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
    </LocalizationProvider>

}