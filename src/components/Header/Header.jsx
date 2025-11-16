import React from 'react'
import Hamburger from './components/Hamburger'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import MoreButton from './components/MoreButton'
import LoginState from './LoginStates/LoginState'

function Header() {

    return (
        <header>
                <Hamburger />

                <Logo />

                <SearchBar/>

                <MoreButton/>

                <LoginState/>
        </header>
    )
}

export default Header