import { Box, Container, IconButton, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutAuth } from '../../store/slices/authSlice/authSlice';
import "./navbar.scss"

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
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <IconButton onClick={handleLogout} size="large" color="error" >
                        <LogoutIcon height={20} color={'primary'} />
                    </IconButton>
                </Box>
            }
        </Box>
    )
}
