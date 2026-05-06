import { createSlice } from "@reduxjs/toolkit"
import { UserLogin } from "./auth.action"


const initialState = {
    loading: false,
    user: null
}

const authSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(UserLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(UserLogin.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(UserLogin.rejected, (state) => {
                state.loading = false
            })
    }
})

export default authSlice.reducer