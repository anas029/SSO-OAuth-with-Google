import { useLocation, useSearchParams } from "react-router-dom"
import useLogin from "../../hooks/useLogin"


const Login = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams);
    const login = useLogin()
    const signIn = () => {
        login("/profile")
    }
    return (
        <button onClick={signIn}>
            Login
        </button>
    )
}

export default Login
