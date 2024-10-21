import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import { APP_ROUTES } from '../AppRoutes'

interface Props {
    children: ReactNode
}

export const PublicRouteGuard = ({ children }: Props) => {
    const { isLogged } = useSelector((st: RootState) => st.auth)

    return (
        isLogged ?
            <Navigate to={APP_ROUTES.HOME} />
            :
            children
    )
}
