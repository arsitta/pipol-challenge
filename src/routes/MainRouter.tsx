import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../screens/LoginScreen/LoginScreen'
import { APP_ROUTES } from './AppRoutes'
import { PublicRouteGuard } from './guards/PublicRouteGuard'
import { PrivateRouteGuard } from './guards/PrivateRouteGuard'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Narbar'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { MetricsScreen } from '../screens/MetricsScreen/MetricsScreen'

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

                    <Route path={APP_ROUTES.METRICS} element={
                        <PrivateRouteGuard>
                            <Dashboard>
                                <MetricsScreen />
                            </Dashboard>
                        </PrivateRouteGuard>
                    } />

                    <Route path={APP_ROUTES.SETTINGS} element={
                        <PrivateRouteGuard>
                            <Dashboard>
                                <div>settings</div>
                            </Dashboard>
                        </PrivateRouteGuard>
                    } />

                    <Route path={"*"} element={<Navigate to={APP_ROUTES.METRICS} />} />
                </Routes>
            </BrowserRouter >
        </main>
        <Footer />
    </>
    )
}
