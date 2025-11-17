import WhenLogin from './WhenLogin'
import WhenLogout from './WhenLogout'
import { useSelector } from 'react-redux'

function LoginState() {
    const loggedIn = useSelector(store => store.user.loggedIn);

    return (
        loggedIn ? <WhenLogin /> : <WhenLogout />
    )
}

export default LoginState