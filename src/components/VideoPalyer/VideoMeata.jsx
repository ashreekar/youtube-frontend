import React, { useState } from 'react'

function VideoMeata({ data }) {
    const [isSubscribed, setIsSubscribed] = useState(true);

    return (
        <>
            <h2 className='text-3xl font-semibold mt-2'>
                {data.video.title}
            </h2>

            <div className='flex items-center mt-4 gap-4'>

                <img
                    src={data.channel.avatar}
                    alt=""
                    className='w-12 h-12 rounded-full'
                />

                <div>
                    <h3 className='font-semibold text-lg'>{data.channel.name}</h3>
                    <p className='text-sm text-gray-500'>{data.channel.subscribers} subscribers</p>
                </div>

                {isSubscribed ? (
                    <button
                        onClick={() => setIsSubscribed(false)}
                        className='ml-auto px-4 py-1 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold'
                    >
                        Subscribed
                    </button>
                ) : (
                    <button
                        onClick={() => setIsSubscribed(true)}
                        className='ml-auto px-4 py-1 rounded-full bg-black hover:bg-gray-900 text-white font-semibold'
                    >
                        Subscribe
                    </button>
                )}
            </div>
        </>
    )
}

export default VideoMeata