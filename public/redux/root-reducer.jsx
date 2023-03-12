import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth";
import { coinReducer } from "./coins";

export const rootReducers = combineReducers({
  authReducers,
  coinReducer,
});
