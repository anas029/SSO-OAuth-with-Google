import { useEffect } from "react";
import "./SuccessfulLogin.module.css";
import styles from './SuccessfulLogin.module.css';

const SuccessfulLogin = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.close()
        }, 500);
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className={styles.successful_login}>SuccessfulLogin</div>
    )
}

export default SuccessfulLogin