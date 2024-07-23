import { useSelector } from "react-redux"
import { selectUser } from "../redux/features/auth/authSlice"

const useIsAuthorized = () => {
    const user = useSelector(selectUser)
    const isAuthorized = (...roles) => {
        if (!user) return false
        if (roles.length == 0 || (roles.length == 1 && roles[0] == "")) return true
        if (roles.includes(user.role)) return true
        return false
    }
    return isAuthorized
}

export default useIsAuthorized