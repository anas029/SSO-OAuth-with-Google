import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { callbackURL, clientID, clientSecret } from "../configs/env.js";
import { User } from "../models/User.js";
import { createOrUpdateUser } from "../models/UserRepository.js";
import updateUser from "../utils/validateToken.js";
passport.use(
    new Strategy({
        clientID,
        clientSecret,
        callbackURL,
        passReqToCallback: true,
    },
        async (request, accessToken, refreshToken, profile, done) => {
            const data = JSON.parse(profile._raw)
            return await createOrUpdateUser(refreshToken, data, done)
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