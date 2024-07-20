import { Router } from "express";
import google from "./google.js";
const router = Router()

// API Endpoint: /api/v1
router.use("/auth/google", google)

export default router