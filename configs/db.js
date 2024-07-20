import mongoose from "mongoose";
import { DB_URI } from "./env.js";

const db = mongoose.connect(DB_URI)
    .then(({ connections }) => console.info(
        `connected to Mongodb to database: ${connections[0].name} at ${connections[0].host} port: ${connections[0].port}`
    ))
    .catch(e => console.error(e.message))

export default db