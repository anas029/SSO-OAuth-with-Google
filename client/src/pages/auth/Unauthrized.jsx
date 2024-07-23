import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Navigate, useLocation } from "react-router-dom"

const Unauthrized = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", {
                replace: true,
                state: { from: location }
            })
        }, 1000);
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>You don't have accees to visit this page</div>
    )
}

export default Unauthrized