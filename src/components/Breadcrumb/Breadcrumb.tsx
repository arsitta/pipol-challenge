import { Breadcrumbs, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Breadcrumb = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {/* <Link color="inherit" href="/">
                MUI
            </Link>
            <Link
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                Core
            </Link> */}
            <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>
    )
}
