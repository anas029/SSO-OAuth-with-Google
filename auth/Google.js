import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { clientID, clientSecret, callbackURL } from "../configs/env.js";
import { User } from "../models/User.js";
passport.use(
    new Strategy({
        clientID,
        clientSecret,
        callbackURL,
    },
        async (request, accessToken, refreshToken, profile, done) => {
            const data = JSON.parse(profile._raw)
            try {
                let user = await User.findOne({ email: data.email })
                if (user)
                    return done(null, user)
                user = await User.create({
                    name: data.name,
                    email: data.email,
                    photo: data.picture,
                    googleId: data.sub,
                })
                return done(null, user)

            } catch (error) {
                return done(error, null)
            }
        }
    ))
passport.serializeUser((user, done) =>
    done(null, user.id)

);

passport.deserializeUser((id, done) => {
    try {
        User.findById(id, function (err, user) {
            done(err, user)
        })
    } catch (error) {
        done(error, null)
    }
}
);
export default passport