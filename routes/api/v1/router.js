import { Router } from "express";
import google from "./google.js";
import isAuthorized from "../../../utils/isAuthorized.js";
const router = Router()

// API Endpoint: /api/v1
router.use("/auth/google", google)
router.get("/test", isAuthorized("Any"), (req, res) => {
    res.status(200).json({ msg: "OK" })
})

export default router