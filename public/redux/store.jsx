import { configureStore } from "@reduxjs/toolkit"
import { rootReducers } from "./root-reducer"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['authReducers']
}

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducers,
    middleware: [thunk]
})
export const persistor = persistStore(store);