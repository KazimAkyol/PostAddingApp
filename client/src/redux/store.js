import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage için
import { combineReducers } from 'redux';

// 1. Adım: initialState ve reducers'ı tanımla (auth örneği)
const authInitialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

// 2. Adım: Reducer'ları birleştir (birden fazla slice varsa)
const rootReducer = combineReducers({
    auth: authSlice.reducer,
    // Diğer reducer'lar buraya eklenebilir (örneğin: cart: cartReducer)
});

// 3. Adım: Redux Persist yapılandırması
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], // Sadece auth kalıcı olsun
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Adım: Store'u oluştur
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Redux Persist için gerekli
        }),
});

// 5. Adım: Persist store'u dışa aktar (React'ta <PersistGate> ile kullanım için)
export const persistor = persistStore(store);
export default store;

// 6. Adım: Action'ları dışa aktar (bileşenlerde kullanmak için)
export const { loginSuccess, logout } = authSlice.actions;