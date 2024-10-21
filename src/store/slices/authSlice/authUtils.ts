import Cookies from 'js-cookie';
import { initialAuthState } from "./authSlice";

export const HARDCODED_API_TOKEN = JSON.stringify({
    name: "Mister",
    lastname: "Admin",
    id: "1",
})

export const getInitialAuthState = () => {
    const appToken = Cookies.get(import.meta.env.VITE_APP_COOKIE_KEY)
    return appToken ?
        {
            ...loadToken(appToken),
            isLogged: true,
        }
        :
        initialAuthState
}

export const loadToken = (appToken: string) => {
    // Si tuvieramos una api que devolviera un token, en el cual dentro hubiera 
    // data no sensible, guardariamos ese token en una cookie x el tiempo de exp
    // y al cargar recuperariamos esa data usando jwt-decrypt
    // Para el challenge guardamos la data stringifyada
    const appData = JSON.parse(appToken);

    return {
        ...appData,
    }
}

export const saveToken = (appToken: string) => {
    Cookies.set(import.meta.env.VITE_APP_COOKIE_KEY, appToken)
}

export const clearToken = () => {
    Cookies.remove(import.meta.env.VITE_APP_COOKIE_KEY)
}