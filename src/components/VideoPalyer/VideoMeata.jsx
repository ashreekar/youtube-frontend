import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import VideoDetails from './VideoDetails';

function VideoMeata({ data }) {
    const [isSubscribed, setIsSubscribed] = useState(true);

    return (
        <>
            <h2 className='text-3xl font-semibold mt-2'>
                {data.video.title}
            </h2>

            <div className='flex justify-between'>
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

                <div className='flex gap-4'>
                    {/* Like section */}

                    <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-12">

                        {/* Like Section */}
                        <div className="flex h-full items-center px-4 gap-2 border-r border-gray-300 cursor-pointer hover:bg-gray-200">
                            <AiFillLike size={22} />
                            <span className="font-medium text-base">22K</span>
                        </div>

                        {/* Dislike Section */}
                        <div className="flex h-full items-center px-4 cursor-pointer hover:bg-gray-200">
                            <AiOutlineDislike size={22} />
                        </div>

                    </div>

                    <div className="flex items-center gap-2 bg-gray-100 rounded-full overflow-hidden h-12 px-2">
                        <span><RiShareForwardLine size={22} /></span>
                        <span className="font-medium text-base">Share</span>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-100 rounded-full overflow-hidden h-12 px-2">
                        <span><TfiDownload size={22} /></span>
                        <span className="font-medium text-base">Download</span>
                    </div>

                </div>
            </div>

            <VideoDetails/>

        </>
    )
}

export default VideoMeata