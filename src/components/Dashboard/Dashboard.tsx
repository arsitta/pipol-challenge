import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { DASH_BOARD_OPTIONS } from './DASH_BOARD_OPTIONS';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import "./dashboard.scss"
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

export const Dashboard = ({ children }: Props) => {

    return (
        <Box className="dashboard-container">
            <Box component="aside">
                <List>
                    {DASH_BOARD_OPTIONS.map(ctOption =>
                        <ListItemButton component={Link} to={ctOption.rootPath}>
                            <ListItemIcon>{ctOption.icon}</ListItemIcon>
                            <ListItemText primary={ctOption.label} />
                        </ListItemButton>
                    )}
                </List>
            </Box>
            <section>
                <Breadcrumb />

                {children}
            </section>
        </Box>
    )
}
