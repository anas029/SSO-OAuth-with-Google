"use strict"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import v1Router from './routes/api/v1/router.js'

// load enviroment variables from .env.local file
config({ path: ".env.local" })

const app = express()
const PORT = process.env.PORT ?? 3000
const DEBUG = process.env.DEBUG == "true"

// add CORS if in development (debug) mood
if (DEBUG) {
    app.use(cors())
}
// logger
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// API Routes
app.use('/api/v1', v1Router)

// website Page
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// catch 404 
app.use((_, res) => res.status(404).json({ message: "Requested page does not exist." }));
app.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`))