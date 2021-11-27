import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import api from './api/api';
import authReducer from './state/auth';

// Add your reducers here
const reducer = {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
};

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
