import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./useApi";
// Define the dimensions of the new window
const width = 500;
const height = 600;

// Calculate the center position of the screen
const left = window.innerWidth / 2 - width / 2;
const top = window.innerHeight / 2 - height / 2;

// Construct the window.open() parameters
const features = `width=${width},height=${height},left=${left},top=${top}`;
const GoogleLoginURL = `${BASE_URL}/auth/google/login`

const useLogin = () => {
    const navigate = useNavigate()
    const login = (url) => {
        let timer
        let loginWindow
        if (timer) {
            clearInterval(timer)
        }
        if (loginWindow) {
            loginWindow.close()
        }
        loginWindow = window.open(GoogleLoginURL, "_blank", features)
        if (loginWindow) {
            timer = setInterval(() => {
                if (loginWindow.closed) {
                    if (url) {
                        navigate(url);
                    }
                    clearInterval(timer)
                }
            }, 500)
        }
    }
    return login
}

export default useLogin
