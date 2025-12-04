import React, { useState } from 'react'
import VideoCard from '../../cards/VideoCard';
import axios from 'axios';

function DeleteVideo({ closePopup, videos = [], setvideoDeleted }) {
    const [loading, setLoading] = useState(false);
    const [selectedVideo, setSelctedVideo] = useState(null);

    // delete video functiontaht dletes video on id
    const deleteVideoFunction = async (data) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("acceasToken")

            const res = await axios.delete(`http://localhost:3317/api/v1/video/${selectedVideo._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

            // if flags gets updated then channel page refreshes
            if (res) {
                setvideoDeleted(prev => !prev)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            closePopup();
        }
    }

    return (
        <div className="bg-white w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-2 gap-10">
            <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
                <img src="/youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Delete video</h2>
                <p className="text-lg text-gray-600 font-medium">Selct video to be deleted</p>
                {/* Gives option to select video to delete */}
                <select className='mt-6 bg-red-600 w-3/4 px-3 py-3 rounded-full outline-none border-none text-white font-bold' id="videos" name="videos" onChange={(e) => {
                    const selected = videos.find(video => video._id === e.target.value);
                    setSelctedVideo(selected);
                }}
                >

                    <option value="">Select a video</option>
                    {
                        videos.map((video) => {
                            return (
                                <option className='bg-white text-black hover:bg-gray-100' key={video._id} value={video._id}>{video.title}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='w-full lg:w-1/2 max-w-xl bg-gray-50 p-4 rounded-2xl shadow-md space-y-4 overflow-y-auto'>

                <div
                    className={`cursor-pointer transition-transform duration-300`}
                >
                    {/* rendering the thumbnail of selected video */}
                    <div className="w-full aspect-video rounded-xl overflow-hidden">
                        <img src={selectedVideo?.thumbnail || "https://i.sstatic.net/PtbGQ.png"} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex gap-3 mt-3 justify-center w-full">
                        <h3 className="font-semibold text-2xl line-clamp-2 leading-tight">
                            {selectedVideo?.title}
                        </h3>
                    </div>
                </div>

                <button
                    onClick={deleteVideoFunction}
                    disabled={!selectedVideo}
                    className={selectedVideo ? "w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-lg transition cursor-pointer" : "w-full py-3 rounded-full text-lg bg-gray-200 cursor-not-allowed"}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteVideo