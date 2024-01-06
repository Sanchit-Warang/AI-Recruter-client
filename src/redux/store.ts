import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "@/redux/api/apiSlice"
import themeReducer from "@/redux/features/theme/themeSlice"
import authReducer from '@/redux/features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        theme: themeReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch