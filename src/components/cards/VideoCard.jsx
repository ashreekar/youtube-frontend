import React from 'react'

function VideoCard({ video, isSidebarOpen }) {
    return (
        <div
            key={video.id}
            className={`
        cursor-pointer transition-transform duration-300
        ${isSidebarOpen ? "scale-100" : "scale-x-102"}
      `}
        >

            <div className="w-full aspect-video rounded-xl overflow-hidden">
                <img src={video.thumbnail} className="w-full h-full object-cover" />
            </div>

            <div className="flex gap-3 mt-3">
                <img
                    src={video.channelLogo}
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
                        {video.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{video.channelName}</p>
                    <p className="text-gray-600 text-xs">
                        {video.views} • {video.uploadedAt}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard