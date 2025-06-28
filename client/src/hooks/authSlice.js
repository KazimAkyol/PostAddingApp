// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // initialState'in tipi (TypeScript kullanıyorsanız)
// interface AuthState {
//     user: null | { id: string; email: string };
//     token: string | null;
//     isLoading: boolean;
//     error: string | null;
// }

// // Başlangıç state'i
// const initialState: AuthState = {
//     user: null,
//     token: null,
//     isLoading: false,
//     error: null,
// };

// // Slice oluşturma
// const authSlice = createSlice({
//     name: 'auth', // Slice adı
//     initialState,
//     reducers: {
//         // Kullanıcı giriş yaptığında state'i güncelle
//         loginSuccess: (state, action: PayloadAction<{ user: { id: string; email: string }; token: string }>) => {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLoading = false;
//             state.error = null;
//         },
//         // Çıkış yapıldığında state'i sıfırla
//         logout: (state) => {
//             state.user = null;
//             state.token = null;
//             state.error = null;
//         },
//         // Yükleme durumu
//         setLoading: (state, action: PayloadAction<boolean>) => {
//             state.isLoading = action.payload;
//         },
//         // Hata durumu
//         setError: (state, action: PayloadAction<string>) => {
//             state.error = action.payload;
//         },
//     },
// });

// // Action'ları dışa aktar
// export const { loginSuccess, logout, setLoading, setError } = authSlice.actions;

// // Reducer'ı dışa aktar
// export default authSlice.reducer;