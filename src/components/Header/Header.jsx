import Hamburger from './components/Hamburger'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import LoginState from './LoginStates/LoginState'
import { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";

function Header() {
    const [needSearchbar, setneedSearchbar] = useState(false);
    return (
        <header
            className="sticky top-0 z-20 w-[98.5vw] h-14 flex justify-between items-center px-4 backdrop-blur-xl bg-white/90">
            <div className={needSearchbar ? "hidden" : "flex items-center gap-4 shrink-0"}>
                <Hamburger />
                <Logo />
            </div>

            <div className={needSearchbar ? "flex" : "hidden"} onClick={() => setneedSearchbar(false)}>
                <MdKeyboardArrowLeft size={24} />
            </div>

            <div className="flex-1 flex justify-center px-4">
                <div className="w-full max-w-2xl">
                    <SearchBar needSearchbar={needSearchbar} setneedSearchbar={setneedSearchbar} />
                </div>
            </div>

            <div className={needSearchbar ? "hidden" : "flex items-center gap-3 shrink-0"}>
                <LoginState />
            </div>
        </header>
    );
}

export default Header;