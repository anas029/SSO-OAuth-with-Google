import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { selectIsUserAuthenticated, selectIsUserLoading } from "../redux/features/auth/authSlice"

const ProtectedLayout = () => {
    const location = useLocation()
    const isAuthenticated = useSelector(selectIsUserAuthenticated)
    const isLoading = useSelector(selectIsUserLoading)
    return (
        isLoading
            ? <p>Please wait ...</p>
            : isAuthenticated
                ? <Outlet />
                : <Navigate to={`/auth/login?callback=${location.pathname}`} state={{ from: location }} replace />
    )
}

export default ProtectedLayout