import React from 'react'

function MangeVideoState({ setStage, closePopup }) {
    return (
        <div className="bg-white w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-2 gap-10">
            <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
                <img src="/youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Manage videos</h2>
                <p className="text-lg text-gray-600 font-medium">Selct any options to proceed</p>
            </div> 
            
            <div className='flex w-1/2 flex-col gap-7 h-full bg-white items-center justify-center'>
                <button onClick={() => setStage(1)} className='px-3 py-3 w-44 bg-red-600 rounded-full text-white font-medium cursor-pointer'>Update video</button>
                <button onClick={() => setStage(2)} className='px-3 py-3 w-44 bg-red-600 rounded-full text-white font-medium cursor-pointer'>Delete video</button>
                <button onClick={closePopup} className='px-3 py-3 w-44 bg-gray-200 rounded-full font-medium cursor-pointer'>Close</button>
            </div>
        </div>
    )
}

export default MangeVideoState