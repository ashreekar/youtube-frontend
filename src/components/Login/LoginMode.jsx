import React from 'react'
import { Link } from 'react-router-dom'

function LoginMode({ start, setMode, setStart }) {

    function emailLogin() {
        setMode("email");
        setStart(true);
    }

    function usernameLogin() {
        setMode("username");
        setStart(true);
    }

    return (
        <>
            {!start && (
                <div className="flex flex-col gap-4 items-center w-full">

                    <button
                        onClick={emailLogin}
                        className="px-2 py-2 md:px-3 md:py-2.5 bg-red-600 hover:bg-red-700 text-white 
                        rounded-xl md:rounded-full text-sm md:text-lg font-medium transition cursor-pointer w-[70%] md:w-[50%]"
                    >
                        Login using Email
                    </button>

                    <button
                        onClick={usernameLogin}
                        className="px-2 py-2 md:px-3 md:py-2.5 bg-red-600 hover:bg-red-700 text-white 
                         rounded-xl md:rounded-full text-sm md:text-lg font-medium transition cursor-pointer w-[70%] md:w-[50%]"
                    >
                        Login using Username
                    </button>

                    <Link to={'/create-account'}>
                        <p className='text-blue-900 hover:text-blue-950 hover:underline'>Not have and account <span>create one</span></p>
                    </Link>

                </div>
            )}
        </>
    )
}

export default LoginMode