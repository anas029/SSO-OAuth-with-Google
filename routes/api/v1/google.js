import { Router } from "express";
import passport from "../../../auth/Google.js";
import { successRedirect, failureRedirect } from "../../../configs/env.js";

const router = Router()

// API Endpoint: /api/v1/auth/google
router.get("/login", passport.authenticate("google", { scope: ['profile', 'email'], accessType: 'offline' }))
// router to handle response for google after sign-in
router.get("/callback", passport.authenticate("google", {
    failureRedirect,
    successRedirect
}))
// Route to logout user 
router.post("/logout", passport.logout("google"));

export default router