import { useDispatch, useSelector } from 'react-redux'
import { loginAuth } from '../../store/slices/authSlice/authSlice'
import { HARDCODED_API_TOKEN } from '../../store/slices/authSlice/authUtils'
import { RootState } from '../../store/store'

export const LoginScreen = () => {
    const dispatch = useDispatch()
    const { isLogged } = useSelector((st: RootState) => st.auth)

    const handleLogin = () => {
        dispatch(loginAuth({ token: HARDCODED_API_TOKEN }))
    }

    return (
        <div>
            <p>isLogged: {isLogged ? "SI" : "NO"}</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
