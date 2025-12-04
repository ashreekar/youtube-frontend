import React from 'react'
import { Link } from 'react-router-dom'

function NotFound({ target = "resource", fullscreen = true }) {
    // This component renders a ui for resouce not found on server or invalid input request
    return (
        <div className={
            fullscreen
                ? "flex w-screen h-screen items-center justify-center flex-col"
                : "flex flex-col h-screen items-center justify-center gap-2 py-5"
        }>
            <img
                src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
                className={fullscreen ? "h-40 w-40" : "h-24 w-24"}
                alt="error-image"
            />

            <p className={fullscreen ? "text-2xl font-medium" : "text-xl font-semibold"}>
                404
            </p>

            <p className="text-lg">
                Oops! {target} not found
            </p>


            <Link
                to="/"
                className='mt-10 bg-blue-100 rounded-full px-3 py-3 font-bold'
            >
                Go to home
            </Link>
        </div>
    )
}

export default NotFound;