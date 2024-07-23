import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/auth/authSlice";

const Logout = () => {
    const dispatch = useDispatch()
    const signout = async () => {
        dispatch(logOut())
    }

    return (
        <button onClick={signout}>
            Logout
        </button>
    )
}

export default Logout
