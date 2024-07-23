import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../components/common/Login";
import { selectIsUserAuthenticated } from "../../redux/features/auth/authSlice";
import { useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") || "/"

  const isAuthenticated = useSelector(selectIsUserAuthenticated)
  if (isAuthenticated)
    navigate(callback)
  return (
    <div>
      <h3>Please login to continue</h3>
      <Login />
    </div>
  )
}

export default LoginPage