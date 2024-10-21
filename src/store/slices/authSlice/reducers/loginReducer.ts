import { PayloadAction } from "@reduxjs/toolkit";
import { authState } from "../authSlice";
import { loadToken, saveToken } from "../authUtils";

interface Payload {
    token: string;
}

export const loginReducer = (state: authState, action: PayloadAction<Payload>) => {
    const token = action.payload.token
    saveToken(token)

    return {
        ...loadToken(token),
        isLogged: true,
    }
}