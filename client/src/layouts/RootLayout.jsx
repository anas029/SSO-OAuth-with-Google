import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import "./RootLayout.css"
import Footer from '../components/common/Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userProfile } from '../redux/features/auth/authSlice'
function RootLayout() {
    const dispatch = useDispatch();

    useEffect(() => {
        //   fetch user profile
        dispatch(userProfile());
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout