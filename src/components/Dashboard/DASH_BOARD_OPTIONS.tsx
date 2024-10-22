import { APP_ROUTES } from "../../routes/AppRoutes";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
export const DASH_BOARD_OPTIONS = [
    {
        rootPath: APP_ROUTES.METRICS,
        icon: <BarChartIcon />,
        label: "Metricas"
    },
    {
        rootPath: APP_ROUTES.HISTORY,
        icon: < HistoryIcon />,
        label: "Historial de busquedas"
    },
    {
        rootPath: APP_ROUTES.SETTINGS,
        icon: <SettingsIcon />,
        label: "Configuración"
    },
]