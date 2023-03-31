import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth";
import { coinReducer } from "./coins";
import { walletReducers } from "./wallet";
import { transactionReducers } from "./transaction";
import { bankReducers } from "./banks";

export const rootReducers = combineReducers({
  authReducers,
  coinReducer,
  walletReducers,
  transactionReducers,
  bankReducers
});
