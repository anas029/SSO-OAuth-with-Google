import { createBrowserRouter } from 'react-router-dom'
import App from './pages/root/App.jsx'
import SuccessfulLogin from './pages/auth/SuccessfulLogin.jsx'
import Profile from './pages/Profile.jsx'
import Protected from './pages/protected/Protected.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import ProtectedLayout from './layouts/ProtectedLayout.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import Unauthrized from './pages/auth/Unauthrized.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

const router = () => {
    return createBrowserRouter([
        {
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <App />,
                },
                {
                    path: "/auth/login",
                    element: <LoginPage />
                },
                {
                    path: "/auth/unauthrized",
                    element: <Unauthrized />
                },
                {
                    element: <ProtectedLayout />,
                    children: [
                        {
                            path: "/profile",
                            element: <Profile />,
                        },
                        {
                            path: "/protected",
                            element: <Protected />
                        },
                    ]
                },
                {
                    element: <AdminLayout />,
                    children: [
                        {
                            path: "/admin/dashboard",
                            element: <AdminDashboard />,
                        },
                    ]
                },
            ]
        },
        {
            path: "/auth/successfullogin",
            element: <SuccessfulLogin />
        }
    ])
}

export default router
