import React from 'react'

function LoginMode({ start, setMode, setStart }) {

    function emailLogin(){
         setMode("email"); 
         setStart(true); 
    }

    function usernameLogin(){
        setMode("username"); 
        setStart(true); 
    }

    return (
        <>
            {!start && (
                <div className="flex flex-col gap-4 text-center">

                    <button
                        onClick={emailLogin}
                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white 
                         rounded-full text-lg font-medium transition"
                    >
                        Login using Email
                    </button>

                    <button
                        onClick={usernameLogin}
                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white 
                         rounded-full text-lg font-medium transition"
                    >
                        Login using Username
                    </button>

                </div>
            )}
        </>
    )
}

export default LoginMode