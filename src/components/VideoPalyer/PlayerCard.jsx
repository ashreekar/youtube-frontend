import React from "react";

function PlayerCard({ video }) {
  return (
    <article className="w-full flex flex-col sm:flex-row gap-3">
      <div
        className="
          w-full 
          sm:w-[168px]   
          sm:h-[94px]   
          aspect-video 
          rounded-lg 
          overflow-hidden 
          bg-gray-200 
          shrink-0
        "
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-sm sm:text-base font-medium line-clamp-2">{video.title}</h4>
        <p className="text-xs text-gray-500">
          {video.channelName} • {video.views} • {video.uploadedAt}
        </p>
      </div>
    </article>
  );
}

export default PlayerCard;