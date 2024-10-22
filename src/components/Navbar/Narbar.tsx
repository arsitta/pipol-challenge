import { Box, Typography } from '@mui/material';
import "./navbar.scss";

export const Navbar = () => {
    return (
        <Box component="nav">
            <Typography variant="h4" component="h1">BMetrics<b>App</b></Typography>
        </Box>
    )
}
