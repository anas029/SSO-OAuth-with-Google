import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/features/auth/authSlice';

export const BASE_URL = import.meta.env.VITE_BASE_URL + "/api/v1"
export const Client = Axios.create({ baseURL: BASE_URL, withCredentials: true, timeout: 5000 })
const useApi = () => {
    const dispatch = useDispatch()
    const Client = Axios.create({ baseURL: BASE_URL, withCredentials: true, timeout: 5000 })
    Client.interceptors.response.use(
        response => {
            // If the request succeeds, return the response directly
            return response;
        },
        error => {
            // Handle errors (including 401 Unauthorized)
            if (error.response && error.response.status === 401) {
                // logging out the user
                dispatch(logOut())
            }
            return Promise.reject(error);
        }
    );

    return Client
}
export default useApi