import Hamburger from './components/Hamburger'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import LoginState from './LoginStates/LoginState'

function Header() {

    return (
        <header className='w-full flex justify-between items-center px-4 py-2'>

            <div className='flex items-center gap-4'>
                <Hamburger />
                <Logo />
            </div>

            <div className='flex-1 flex justify-center px-4'>
                <div className='w-full max-w-2xl'>
                    <SearchBar />
                </div>
            </div>

            <div className='flex items-center'>
                <LoginState />
            </div>
        </header>
    )
}

export default Header