import { Container } from '@mui/material'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'

export const SettingsScreen = () => {
    return (
        <Container className="fade-in" sx={{ width: "100%" }}>
            <SectionTitle
                title="Configuración"
                description="Administra las opciones y preferencias del sistema"
            />
        </Container>
    )
}

