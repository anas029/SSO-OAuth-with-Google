import { config } from 'dotenv'

// load enviroment variables from .env.local file
config({ path: ".env.local" })
export const PORT = process.env.PORT ?? 3000
export const DEBUG = process.env.DEBUG == "true"
export const clientID = process.env.GOOGLE_CLIENT_ID
export const clientSecret = process.env.GOOGLE_CLIENT_SECRET
export const callbackURL = process.env.GOOGLE_CALLBACK
export const DB_URI = process.env.MONGODB_URI
export const secretKey = process.env.SECRET_KEY