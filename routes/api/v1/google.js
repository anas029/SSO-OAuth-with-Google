import { Router } from "express";
import passport from "../../../auth/Google.js";

const router = Router()

// API Endpoint: /api/v1/auth/google
router.get("/login", passport.authenticate("google", { scope: ['profile', 'email'] }))
router.get("/callback", passport.authenticate("google", {
    failureMessage: "Error",
    failureRedirect: "/falied",
    successRedirect: "/success"
}))

export default router