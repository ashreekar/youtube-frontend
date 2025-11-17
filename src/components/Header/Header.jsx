import Hamburger from './components/Hamburger'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import LoginState from './LoginStates/LoginState'

function Header() {
    return (
        <header
            className="
                sticky top-0 z-50
                w-full h-14
                flex justify-between items-center
                px-4

                backdrop-blur-xl  
                bg-white/90   
                dark:bg-[#0f0f0f]/90 
                
                dark:border-white/10
            "
        >
            <div className="flex items-center gap-4 shrink-0">
                <Hamburger />
                <Logo />
            </div>

            <div className="flex-1 flex justify-center px-4">
                <div className="w-full max-w-2xl">
                    <SearchBar />
                </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <LoginState />
            </div>
        </header>
    );
}

export default Header;