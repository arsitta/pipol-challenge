import { APP_ROUTES } from "../../routes/AppRoutes";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';

export const DASH_BOARD_OPTIONS = [
    {
        rootPath: APP_ROUTES.METRICS,
        icon: <BarChartIcon />,
        label: "Metricas"
    },
    {
        rootPath: APP_ROUTES.SETTINGS,
        icon: <SettingsIcon />,
        label: "Settings"
    },
]