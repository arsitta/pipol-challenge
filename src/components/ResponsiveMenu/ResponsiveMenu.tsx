import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText, Theme, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logoutAuth } from '../../store/slices/authSlice/authSlice';
import { RootState } from '../../store/store';
import { DASH_BOARD_OPTIONS } from '../Dashboard/DASH_BOARD_OPTIONS';
import "./responsiveMenu.scss";

export const ResponsiveMenu = () => {
    const { isLogged, name } = useSelector((st: RootState) => st.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAuth())
    }

    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    const toggleMenu = () => { setIsOpen(st => !st) }

    const renderSaludo = () => {
        return <Typography variant="h5" sx={{ mr: "0.5rem" }}>
            Hola, <b>{name}</b>!
        </Typography>
    }

    return (
        <>
            <Drawer
                open={isLargeScreen || isOpen}
                variant={isLargeScreen ? 'persistent' : 'temporary'}
                ModalProps={{
                    keepMounted: true,
                }}
                onClose={() => setIsOpen(false)}
                component="aside"
                sx={{
                    [`& .MuiDrawer-paper`]: {
                        position: isLargeScreen ? 'relative' : 'fixed',
                    },
                }}
            >
                <Box sx={{ pt: "3rem" }}>
                    {!isLargeScreen &&
                        <Box sx={{ textAlign: "center", mb: "3rem" }}>
                            {renderSaludo()}
                        </Box>
                    }

                    {DASH_BOARD_OPTIONS.map(ctOption =>
                        <ListItemButton selected={ctOption.rootPath.includes(location.pathname)} key={`DashboardButton-${ctOption.rootPath}`} component={Link} to={ctOption.rootPath}>
                            <ListItemIcon>{ctOption.icon}</ListItemIcon>
                            <ListItemText primary={ctOption.label} />
                        </ListItemButton>
                    )}

                    {!isLargeScreen && <>
                        <hr></hr>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon><LogoutIcon /></ListItemIcon>
                            <ListItemText primary="Cerrar sesion" />
                        </ListItemButton>
                    </>}
                </Box>
            </Drawer>

            <div className="nav-buttons">
                {isLargeScreen ?
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {renderSaludo()}
                        <Tooltip title="Cerrar sesion" arrow>
                            <IconButton onClick={handleLogout} size="large" color="error">
                                <LogoutIcon height={20} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    :
                    <MenuIcon onClick={toggleMenu} fontSize='large' />
                }
            </div>
        </>
    )
}

