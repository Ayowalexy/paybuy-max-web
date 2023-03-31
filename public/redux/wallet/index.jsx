import { createSlice } from "@reduxjs/toolkit";
import { userWallet, currenciesList, newWallet } from "./thunk-action";

const initialState = {
    loading: "idle",
    wallet: [],
    currencies: [],
    createWallet: []
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
         // user wallet
         builder.addCase(userWallet.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(userWallet.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
                wallet: action.payload,
            }
        })

        builder.addCase(userWallet.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
           // currencies list
           builder.addCase(currenciesList.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(currenciesList.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
                currencies: action.payload,
            }
        })

        builder.addCase(currenciesList.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
           // create new wallet
           builder.addCase(newWallet.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(newWallet.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
                createWallet: action.payload,
            }
        })

        builder.addCase(newWallet.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
    }
})
export const walletReducers = walletSlice.reducer