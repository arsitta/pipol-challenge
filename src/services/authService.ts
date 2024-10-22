import { LoginFormValues } from "../screens/LoginScreen/LoginScreen"
import { HARDCODED_API_TOKEN } from "../store/slices/authSlice/authUtils"

export const sendLoginUser = async (values: LoginFormValues) => {
    return new Promise<string>((res, rej) => {
        setTimeout(() => {
            if (import.meta.env.VITE_APP_LOGIN_USER == values.user && import.meta.env.VITE_APP_LOGIN_PASS == values.password) {
                res(HARDCODED_API_TOKEN)
            } else {
                rej("El user/password ingresado es incorrecto")
            }
        }, 1000)
    })
}



