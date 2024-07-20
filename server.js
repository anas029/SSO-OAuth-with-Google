"use strict"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import v1Router from './routes/api/v1/router.js'
import { DEBUG, PORT, secretKey } from './configs/env.js'
import db from './configs/db.js'
import cookieSession from 'cookie-session'
import passport from 'passport'
import regenerate from './auth/regenerate.js'


const app = express()

// add CORS if in development (debug) mood
if (DEBUG) {
    app.use(cors())
}
// logger
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [secretKey],
    httpOnly: true,
    sameSite: DEBUG ? 'none' : 'strict'
}))
// initilaize passport
app.use(passport.initialize())
app.use(passport.session())
app.use(regenerate())
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