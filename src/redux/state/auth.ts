import {createSlice, Draft} from '@reduxjs/toolkit';
import authApi from "../api/auth";

export enum LoginStatus {
    LOGGED_IN,
    NOT_LOGGED_IN,
}

export interface AuthState {
    token: string | null;
    status: LoginStatus;
}

const initialState: AuthState = {
    status: LoginStatus.NOT_LOGGED_IN,
    token: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state: Draft<AuthState>) => {
            state.token = null;
            state.status = LoginStatus.NOT_LOGGED_IN;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state: Draft<AuthState>, { payload }) => {
                state.token = payload.token;
                state.status = LoginStatus.LOGGED_IN;
            }
        );
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
