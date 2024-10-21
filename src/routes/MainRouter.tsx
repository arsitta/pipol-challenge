import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../screens/LoginScreen/LoginScreen'
import { APP_ROUTES } from './AppRoutes'
import { PublicRouteGuard } from './guards/PublicRouteGuard'
import { PrivateRouteGuard } from './guards/PrivateRouteGuard'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Narbar'

export const MainRouter = () => {
    return (<>
        <Navbar />
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path={APP_ROUTES.LOGIN} element={
                        <PublicRouteGuard>
                            <LoginScreen />
                        </PublicRouteGuard>

                    }>
                    </Route>

                    <Route path={APP_ROUTES.HOME} element={
                        <PrivateRouteGuard>
                            <div>HOME</div>
                        </PrivateRouteGuard>
                    } />

                    <Route path={"*"} element={<Navigate to={"/"} />} />
                </Routes>
            </BrowserRouter >
        </main>
        <Footer />
    </>
    )
}
