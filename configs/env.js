import { config } from 'dotenv'

// load enviroment variables from .env.local file
config({ path: ".env.local" })
const isDefined = (value, name) => {
    if (value != undefined) return value
    throw new Error(`${name} not found in environment variables`)
}
const evalNumber = (value) => {
    try {
        if (!value) return 1
        return eval(value)
    } catch (_) {
        return 1
    }
}

export const PORT = process.env.PORT ?? 3000
export const DEBUG = process.env.DEBUG == "true"
export const clientID = isDefined(process.env.GOOGLE_CLIENT_ID, "Google client id")
export const clientSecret = isDefined(process.env.GOOGLE_CLIENT_SECRET, "Google client secret")
export const callbackURL = isDefined(process.env.GOOGLE_CALLBACK, "Google callback")
export const revalidationPeriod = evalNumber(process.env.GOOGLE_TOKEN_REVALIDATION_IN_DAYS)
export const DB_URI = isDefined(process.env.MONGODB_URI, "Mongo db uri")
export const secretKeys = isDefined(process.env.COOKIES_SECRET_KEYS, "Session secret key").split(",")
export const maxAge = evalNumber(process.env.COOKIES_MAX_AGE_IN_DAYS)
export const failureRedirect = isDefined(process.env.FAILURE_REDIRECT, "Loging failure redirect")
export const successRedirect = isDefined(process.env.SUCCESS_REDIRECT, "Loging success redirect")
export const CORS_WHITELIST = process.env.CORS_WHITELIST ? process.env.CORS_WHITELIST.split(",") : []
export const ENCRYPTION_KEY = isDefined(process.env.ENCRYPTION_KEY, "Encryption key")
