import { Router } from "express";
import isAuthorized from "../../../utils/isAuthorized.js";

const router = Router()

// API Endpoint: /api/v1/user
router.post("/profile", isAuthorized("Any"), (req, res) => {
    const user = {
        email: req.user.email,
        name: req.user.name,
        photo: req.user.photo,
        role: req.user.role,
        id: req.user._id,
    }
    res.status(200).json(user)
});

export default router