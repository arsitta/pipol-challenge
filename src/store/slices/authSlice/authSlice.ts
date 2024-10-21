import { createSlice } from '@reduxjs/toolkit';
import { loginReducer } from './reducers/loginReducer';
import { logoutReducer } from './reducers/logoutReducer';
import { getInitialAuthState, } from './authUtils';

export interface authState {
    isLogged: boolean;
    name: string;
    lastname: string;
    id: string;
    token: string;
}

export const initialAuthState: authState = {
    isLogged: false,
    name: "",
    lastname: "",
    id: "",
    token: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialAuthState(),
    reducers: {
        loginAuth: loginReducer,
        logoutAuth: logoutReducer,
    },
})

export const { loginAuth, logoutAuth } = authSlice.actions

export default authSlice.reducer