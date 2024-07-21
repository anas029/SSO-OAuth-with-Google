import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { clientID, clientSecret, callbackURL } from "../configs/env.js";
import { User } from "../models/User.js";
import updateUser from "../utils/validateToken.js";
import { encrypt } from "../utils/encrypt.js";
passport.use(
    new Strategy({
        clientID,
        clientSecret,
        callbackURL,
        passReqToCallback: true,
        scope: ['profile', 'email'],
    },
        async (request, accessToken, refreshToken, profile, done) => {
            const data = JSON.parse(profile._raw)
            try {
                let user = await User.findOne({ email: data.email })
                if (!user) {
                    user = await User.create({
                        name: data.name,
                        email: data.email,
                        photo: data.picture,
                        googleId: data.sub,
                    })
                }
                const { iv, data: token } = encrypt(refreshToken)
                user.refreshToken = token
                user.iv = iv
                user.lastCheck = Date.now()
                await user.save()
                return done(null, user)
            } catch (error) {
                return done(error, null)
            }
        }
    ))
passport.serializeUser((user, done) => {
    done(null, user._id)
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id)
        if (!user) return done(null, user)
        await updateUser(user, done)
    } catch (error) {
        done(error, null)
    }
});
passport.logout = () => {
    return (req, res) => {
        if (req.isAuthenticated()) {
            req.logout((error) => {
                if (error) {
                    return res.status(200).json({
                        "status": "error",
                        "message": "Internal Server Error: Please try again later"
                    });
                }
                res.status(200).json({
                    status: "success",
                    message: "User logged out successfully"
                });
            });
        } else {
            res.status(401).json({
                status: "error",
                message: "Unauthorized: User not logged in"
            });
        }
    }
}
export default passport