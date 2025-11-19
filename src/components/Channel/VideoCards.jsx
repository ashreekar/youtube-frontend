import React from "react";

function VideoCards({ video }) {
  return (
    <div className="w-full max-w-sm cursor-pointer">

      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="mt-3">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
          {video.title}
        </h3>

        <p className="text-xs text-gray-600 mt-1">
          {video.views} views • {video.uploadedAt}
        </p>

      </div>

    </div>
  );
}

export default VideoCards;