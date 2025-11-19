import React from 'react'

function Player({ source }) {
  return (
    <div className='w-full h-[85%]'>
      {/* <video 
        src={source} 
        className="w-full rounded-lg h-full" 
        controls 
      ></video> */}

        <iframe 
                className='h-[55vh] md:h-[72vh] w-full md:w-[60vw] rounded-2xl mt-6'
                src="https://www.youtube.com/embed/k2MOfVOUU78?si=6SEzDwYgeUbok77L" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
    </div>
  )
}

export default Player