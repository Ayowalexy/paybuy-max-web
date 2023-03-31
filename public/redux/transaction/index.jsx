import { createSlice } from "@reduxjs/toolkit";
import { userTransaction } from "./thunk-action";

const initialState = {
    loading: "idle",
    transactions: []
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            // all user transactions
            builder.addCase(userTransaction.pending, (state) => {
                return { ...state, loading: 'pending' }
            });
    
            builder.addCase(userTransaction.fulfilled, (state, action) => {
                return {
                    ...state,
                    loading: 'successful',
                    transactions: action.payload
                }
            })
    
            builder.addCase(userTransaction.rejected, (state, action) => {
                return { ...state, loading: 'failed' }
            })

        }
    })
export const transactionReducers = transactionSlice.reducer
    