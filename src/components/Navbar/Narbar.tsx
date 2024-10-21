import { Box, Container, IconButton, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutAuth } from '../../store/slices/authSlice/authSlice';

export const Navbar = () => {
    const { isLogged, name } = useSelector((st: RootState) => st.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAuth())
    }

    return (
        <Box sx={{ backgroundColor: "red" }}>
            <Container component="nav" >
                <Typography variant="h4" component="h1">ChallengeApp</Typography>

                {isLogged &&
                    <IconButton onClick={handleLogout} size="large" >
                        {name}
                        <LogoutIcon height={20} color={'primary'} />
                    </IconButton>
                }
            </Container >
        </Box>
    )
}
