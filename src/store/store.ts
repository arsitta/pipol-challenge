import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./slices/authSlice/authSlice"
import searchHistorySlice from './slices/searchHistorySlice/searchHistorySlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        searchHistory: searchHistorySlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch