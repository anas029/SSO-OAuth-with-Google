import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useIsAuthorized from "../hooks/useIsAuthorized"
import { selectIsUserLoading } from "../redux/features/auth/authSlice"

const AdminLayout = () => {
    const location = useLocation()
    const isAuthorized = useIsAuthorized()
    const isLoading = useSelector(selectIsUserLoading)

    return (
        isLoading
            ? <p>Please wait ...</p>
            : isAuthorized("Admin")
                ? <Outlet />
                : <Navigate to="/auth/unauthrized" state={{ from: location }} replace />
    )
}

export default AdminLayout