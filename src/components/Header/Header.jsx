import React from 'react'
import Hamburger from './components/Hamburger'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import MoreButton from './components/MoreButton'
import LoginState from './LoginStates/LoginState'

function Header() {

    return (
        <header className='w-full flex justify-between px-6 py-2'>
            <div className='flex gap-10'>
                <Hamburger />
                <Logo />
            </div>

            <div>
                <SearchBar />
            </div>

            <div className='flex gap-10'>
                <MoreButton />

                <LoginState />
            </div>
        </header>
    )
}

export default Header