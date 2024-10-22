import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { DASH_BOARD_OPTIONS } from './DASH_BOARD_OPTIONS';
import "./dashboard.scss"
import { Link, useLocation } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

export const Dashboard = ({ children }: Props) => {

    const location = useLocation();

    return (
        <Box className="dashboard-container">
            <Box component="aside">
                <List>
                    {DASH_BOARD_OPTIONS.map(ctOption =>
                        <ListItemButton selected={ctOption.rootPath.includes(location.pathname)} key={`DashboardButton-${ctOption.rootPath}`} component={Link} to={ctOption.rootPath}>
                            <ListItemIcon>{ctOption.icon}</ListItemIcon>
                            <ListItemText primary={ctOption.label} />
                        </ListItemButton>
                    )}
                </List>
            </Box>
            <section>
                {children}
            </section>
        </Box>
    )
}
