import LogoutIcon from '@mui/icons-material/Logout';
import { Box, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAuth } from '../../store/slices/authSlice/authSlice';
import { RootState } from '../../store/store';
import "./navbar.scss";
import { Tooltip } from '@mui/material';

export const Navbar = () => {
    const { isLogged, name } = useSelector((st: RootState) => st.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAuth())
    }

    return (
        <Box component="nav">
            <Typography variant="h4" component="h1">BMetrics<b>App</b></Typography>

            {isLogged &&
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" sx={{ mr: "0.5rem" }}>
                        Hola, <b>{name}</b>!
                    </Typography>

                    <Tooltip title="Cerrar sesion" arrow>
                        <IconButton onClick={handleLogout} size="large" color="error">
                            <LogoutIcon height={20} />
                        </IconButton>
                    </Tooltip>
                </Box>
            }
        </Box>
    )
}
