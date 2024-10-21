import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../screens/LoginScreen/LoginScreen'
import { APP_ROUTES } from './AppRoutes'

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path={APP_ROUTES.LOGIN} element={
                        <LoginScreen />
                    }>
                    </Route>

                    <Route path={APP_ROUTES.HOME} element={
                        <div>HOME</div>
                    } />

                    <Route path={"*"} element={<Navigate to={"/"} />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
