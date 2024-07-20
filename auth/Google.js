import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { clientID, clientSecret, callbackURL } from "../configs/env.js";
passport.use(
    new Strategy({
        clientID,
        clientSecret,
        callbackURL,
    },
        async (request, accessToken, refreshToken, profile, done) => {
            console.log(profile);
            return done(null, profile)
        }
    ))
passport.serializeUser((user, done) =>
    done(null, user.id)

);

passport.deserializeUser((user, done) => {
    // User.findById(id, function (err, user) {
    //     done(err, user)
    // })
    done(null, user)
}
);
export default passport