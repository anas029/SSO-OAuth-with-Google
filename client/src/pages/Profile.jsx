import { useSelector } from "react-redux"
import { selectUser } from "../redux/features/auth/authSlice"

const Profile = () => {
    const user = useSelector(selectUser)
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <img width={200} height={200} src={user.photo} alt={user.name} />
        </div>
    )
}
export default Profile