import React from 'react'
import { Link } from 'react-router-dom'

function ErrorFallback() {
  return (
    <div className='flex  w-screen h-screen items-center justify-center flex-col'>
      <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" className='h-40 w-40' alt="error-image" />
      <p className='text-2xl font-medium'>404</p>
      <p className='text-lg'>Oops page not found</p>

      <Link className='mt-10 bg-blue-100 rounded-full px-3 py-3 font-bold'>
        Go to home
      </Link>
    </div>
  )
}

export default ErrorFallback