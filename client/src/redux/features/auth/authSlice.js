import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Client } from '../../../hooks/useApi';

export const userProfile = createAsyncThunk(
    'auth/profile',
    async () => {
        try {
            const response = await Client.post('/user/profile', {});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            const response = await Client.post('/auth/google/logout', {});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false

        },
        unauthenticated: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.isLoading = false
        },
        finishInitialLoad: state => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
                state.user = null;
            });
    },
})

export const { setAuth, unauthenticated } = authSlice.actions
export const selectUser = (state) => state.auth.user
export const selectIsUserAuthenticated = (state) => state.auth.isAuthenticated
export const selectIsUserLoading = (state) => state.auth.isLoading
export default authSlice.reducer