import { encrypt } from "../utils/encrypt.js"
import { User } from "./User.js"


export const createOrUpdateUser = async (token, profile, done) => {
    let user = await User.findOne({ googleId: profile.sub })
    if (!user) {
        if (!token) return done(new Error("Token not found"), null)
        user = await User.create({
            name: profile.name,
            email: profile.email,
            photo: profile.picture,
            googleId: profile.sub,
        })
    }
    if (token) {
        const { iv, data: refreshToken } = encrypt(token)
        user.refreshToken = refreshToken
        user.iv = iv
    }
    user.lastCheck = Date.now()
    await user.save()
    return done(null, user)
}