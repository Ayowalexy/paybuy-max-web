import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 0
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setData: (state, action) => {
            return {
                ...state, data: action.payload
            }
        }
    }
})
export const authReducers = authSlice.reducer