import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})