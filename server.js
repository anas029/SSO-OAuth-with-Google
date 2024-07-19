"use strict"
import express from 'express'
import { config } from 'dotenv'
import v1Router from './routes/api/v1/router.js'
config({ path: ".env.local" })
const app = express()
const PORT = process.env.PORT ?? 3000
app.use('/api/v1', v1Router)
app.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`))