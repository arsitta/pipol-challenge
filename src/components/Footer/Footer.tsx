import { Box, Typography } from '@mui/material';

export const Footer = () => {

  return (
    <Box sx={{ backgroundColor: "#909090", p: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center" }} component="footer">
      <Typography variant="body2">
        Todos los derechos reservados (?
      </Typography>
    </Box>
  )
}
