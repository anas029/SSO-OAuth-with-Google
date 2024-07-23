import Logout from "./Logout"
import Login from "./Login"
import { useSelector } from "react-redux"
import { selectIsUserAuthenticated, selectUser } from "../../redux/features/auth/authSlice"
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"
const Navbar = () => {
    const user = useSelector(selectUser)
    const isAuthenticated = useSelector(selectIsUserAuthenticated)
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            Admin
                        </Link>
                    </li>
                </ul>
            </nav>
            {isAuthenticated
                ? (<>
                    <p>Welcom {user.name}</p>
                    <Logout />
                </>)
                : <Login />
            }
        </header>
    )
}

export default Navbar