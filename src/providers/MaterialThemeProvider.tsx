import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

export const themeProvider = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
    },
});

interface Props {
    children: ReactNode;
}

export const MaterialThemeProvider = ({ children }: Props) => {
    return (
        <ThemeProvider theme={themeProvider}>
            {children}
        </ThemeProvider>)
}
