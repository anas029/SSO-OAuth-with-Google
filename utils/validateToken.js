import axios from "axios";
import { clientID, clientSecret, revalidationPeriod } from "../configs/env.js";
import { decrypt, encrypt } from "./encrypt.js";

// call https://oauth2.googleapis.com/token to validate token
const validateToken = async (refresh_token) => {
    try {
        const response = await axios.post('https://oauth2.googleapis.com/token', {
            grant_type: 'refresh_token',
            client_id: clientID,
            client_secret: clientSecret,
            refresh_token
        })
        return [null, response.data.refresh_token]
    } catch (error) {
        console.error('Error refreshing token:', error.response.data.error_description);
        return [error, null]
    }
}

// check if token passed revalidationPeriod
const isTokenExpired = (user) => {
    const period = new Date(Date.now() - (revalidationPeriod * 24 * 60 * 60 * 1000));
    if (user?.refreshToken && user?.lastCheck > period) return false
    return true
}

const updateUser = async (user, done) => {
    if (!isTokenExpired(user)) return done(null, user)
    const refreshToken = decrypt(user.refreshToken, user.iv)
    const [error, newToken] = await validateToken(refreshToken)
    user.lastCheck = Date.now()
    if (error) {
        user.refreshToken = null
        user.iv = null
        await user.save()
        return done(null, null)
    } else if (newToken) {
        const { iv, data } = encrypt(newToken)
        user.refreshToken = data
        user.iv = iv
    }
    await user.save()
    return done(null, user)
}

export default updateUser