import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { userProfile } from '../../redux/features/auth/authSlice';


const Login = () => {
    const login = useLogin()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [searchParams] = useSearchParams();
    const callback = searchParams.get("callback") || "/"

    const signIn = () => {
        const done = () => {
            dispatch(userProfile());
            navigate(callback)
        }
        login(done)
    }
    return (
        <button onClick={signIn}>
            Login
        </button>
    )
}

export default Login
