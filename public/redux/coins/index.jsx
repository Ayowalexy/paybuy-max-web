import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
};
const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      return {
        ...state,
        coins: action.payload,
      };
    },
    addCoin: (state, action) => {
      return{
        ...state,
        coins: [...state.coins, action.payload]
      }
    }
  },
});

export const coinReducer = coinsSlice.reducer;
export const { setCoins, addCoin} = coinsSlice.actions;

