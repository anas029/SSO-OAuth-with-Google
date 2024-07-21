import { Router } from "express";
import passport from "../../../auth/Google.js";
import { DEBUG, successRedirect } from "../../../configs/env.js";

const router = Router()

// API Endpoint: /api/v1/auth/google
router.get("/login", passport.authenticate("google", { accessType: 'offline' }))
// router to handle response for google after sign-in
router.get("/callback", passport.authenticate("google", {
    failureMessage: "Error",
    failureRedirect: "/falied",
    successRedirect
}))
// Route to logout user 
router.post("/logout", passport.logout("google"));

export default router