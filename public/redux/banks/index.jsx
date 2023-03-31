import { createSlice } from "@reduxjs/toolkit";
import { getBanks, createBank, showBanks, deleteBanks } from "./thunk-action";

const initialState = {
    getBankNames: [],
    showAccounts: []
}

const bankSlice = createSlice({
    name: "banks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get banks names
        builder.addCase(getBanks.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(getBanks.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
                getBankNames: action.payload
            }
        })

        builder.addCase(getBanks.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
          //create bank account
          builder.addCase(createBank.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(createBank.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(createBank.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
           //display bank accounts
           builder.addCase(showBanks.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(showBanks.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
                showAccounts: action.payload
            }
        })

        builder.addCase(showBanks.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
            //delete bank accounts
            builder.addCase(deleteBanks.pending, (state) => {
                return { ...state, loading: 'pending' }
            });
    
            builder.addCase(deleteBanks.fulfilled, (state, action) => {
                return {
                    ...state,
                    loading: 'successful',
                }
            })
    
            builder.addCase(deleteBanks.rejected, (state, action) => {
                return { ...state, loading: 'failed' }
            })

    }
    
})
export const bankReducers = bankSlice.reducer