import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 0,
    products: [],
    details: {}
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setData: (state, action) => {
            return {
                ...state, data: action.payload
            }
        },
        setProducts: (state, action) => {
            return{
                ...state, products: action.payload
            }
        },
        setDetails: (state, actions) => {
            return{
                ...state, details: actions.payload
            }
        }
    }
})
export const authReducers = authSlice.reducer
export const {setData, setProducts, setDetails}= authSlice.actions
