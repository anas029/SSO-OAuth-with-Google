import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    googleId: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: false },
    iv: { type: String, required: false },
    lastCheck: { type: Date, required: false }
}, {
    timestamps: true
})
export const User = mongoose.model("User", schema)