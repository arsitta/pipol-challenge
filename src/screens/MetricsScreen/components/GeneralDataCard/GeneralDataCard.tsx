import StarsIcon from '@mui/icons-material/Stars';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { Box, Container, Typography } from '@mui/material';
interface Props {
    totalBlocksCount: number;
    totalReward: number;
}

export const GeneralDataCard = ({
    totalBlocksCount,
    totalReward,
}: Props) => {
    return (
        <Container sx={{ textAlign: "center" }}>
            <Box sx={{ mb: "2rem" }}>
                <ViewAgendaIcon color='disabled' fontSize={"large"} />
                <Typography variant="h4" fontWeight={"bold"}>{totalBlocksCount}</Typography>
                <Typography variant="h6" fontWeight={"300"}>Bloques Totales</Typography>
            </Box>
            <Box>
                <StarsIcon color='disabled' fontSize={"large"} />
                <Typography variant="h4" fontWeight={"bold"}>{totalReward.toFixed(2)}</Typography>
                <Typography variant="h6" fontWeight={"300"}>Recompenzas Totales</Typography>
            </Box>
        </Container>
    )
}
