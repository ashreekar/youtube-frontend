import WhenLogin from './WhenLogin'
import WhenLogout from './WhenLogout'
import { useSelector } from 'react-redux'

// login state shows whether user logged in or not
function LoginState() {
    // this state is filled on login
    const loggedIn = useSelector(store => store.user.loggedIn);

    // if logged in show deatils else show lgin option
    return (
        loggedIn ? <WhenLogin /> : <WhenLogout />
    )
}

export default LoginState