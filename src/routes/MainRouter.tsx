import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Narbar'
import { LoginScreen } from '../screens/LoginScreen/LoginScreen'
import { MetricsScreen } from '../screens/MetricsScreen/MetricsScreen'
import { SettingsScreen } from '../screens/SettingsScreen/SettingsScreen'
import { APP_ROUTES } from './AppRoutes'
import { PrivateRouteGuard } from './guards/PrivateRouteGuard'
import { PublicRouteGuard } from './guards/PublicRouteGuard'
import { SearchHistoryScreen } from '../screens/SearchHistoryScreen/SearchHistoryScreen'

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

                    <Route path={APP_ROUTES.HISTORY} element={
                        <PrivateRouteGuard>
                            <Dashboard>
                                <SearchHistoryScreen />
                            </Dashboard>
                        </PrivateRouteGuard>
                    } />

                    <Route path={APP_ROUTES.SETTINGS} element={
                        <PrivateRouteGuard>
                            <Dashboard>
                                <SettingsScreen />
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
