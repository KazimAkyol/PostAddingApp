import { configureStore } from "@reduxjs/toolkit"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage/session"

const initialState = {

}

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['token', 'user'], // Sadece token ve user kalici olsun
}

const persistedReducer = persistReducer(persistConfig)

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Özel middleware ayarı
        }),
});

export const persistor = persistStore(store)
export default store
