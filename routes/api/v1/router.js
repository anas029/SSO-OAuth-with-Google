import { Router } from "express";
const router = Router()
router.get('/test', (_, res) => res.json({ message: "Test is successful" }))
export default router