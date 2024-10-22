import { Settings } from "@mui/icons-material";
import { APP_ROUTES } from "../../routes/AppRoutes";

export const DASH_BOARD_OPTIONS = [
    {
        rootPath: APP_ROUTES.METRICS,
        icon: <Settings />,
        label: "Metricas"
    },
    {
        rootPath: APP_ROUTES.SETTINGS,
        icon: <Settings />,
        label: "Settings"
    },
]