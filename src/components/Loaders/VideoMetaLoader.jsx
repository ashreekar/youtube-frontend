import React from 'react'

function VideoMetaLoader() {
    return (
        <div className='flex flex-col gap-3 ml-4 sm:ml-8'>
            <div className="flex gap-3 items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10" />

                <div className="flex flex-col gap-2 flex-1 justify-center">
                    <div className="bg-gray-200 h-4 w-3/4 rounded" />
                </div>
                <div className="flex flex-col gap-2 flex-1 justify-center">
                    <div className="bg-gray-200 h-4 w-3/4 rounded" />
                </div>
            </div>
        </div>
    )
}

export default VideoMetaLoader