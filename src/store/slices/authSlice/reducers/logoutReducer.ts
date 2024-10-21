import { initialAuthState } from "../authSlice";
import { clearToken } from "../authUtils";


export const logoutReducer = () => {
    clearToken()

    return {
        ...initialAuthState
    }
}