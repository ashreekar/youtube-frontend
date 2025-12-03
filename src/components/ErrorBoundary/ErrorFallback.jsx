import React from 'react'

function ErrorFallback() {
  return (
    <div className='flex  w-screen h-screen items-center justify-center flex-col'>
      <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" className='h-20 w-20' alt="error-image" />
      <h1 className='text-lg'>Oops something went wrong</h1>
    </div>
  )
}

export default ErrorFallback