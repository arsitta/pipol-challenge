import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { ResponsiveMenu } from '../ResponsiveMenu/ResponsiveMenu';
import "./dashboard.scss";

interface Props {
    children: ReactNode;
}

export const Dashboard = ({ children }: Props) => {
    return (
        <Box className="dashboard-container">
            <ResponsiveMenu />
            <section>
                {children}
            </section>
        </Box>
    )
}
