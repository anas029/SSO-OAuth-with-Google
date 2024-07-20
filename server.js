"use strict"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import v1Router from './routes/api/v1/router.js'
import { DEBUG, PORT } from './configs/env.js'
// import passport from 'passport'



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
// var session = require('express-session');
// var passport = require('passport');
// Initialize Passport
// app.use(passport.initialize());
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
// }));
// app.use(passport.authenticate('session'));

// passport.serializeUser(function (user, cb) {
//     process.nextTick(function () {
//         cb(null, { id: user.id, username: user.username, name: user.name });
//     });
// });

// passport.deserializeUser(function (user, cb) {
//     process.nextTick(function () {
//         return cb(null, user);
//     });
// });


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