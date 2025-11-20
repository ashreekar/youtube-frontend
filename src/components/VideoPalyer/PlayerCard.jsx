import React from "react";

function PlayerCard({ video }) {
  const thumbnail = video.snippet?.thumbnails?.medium?.url || "";
  const title = video.snippet?.title || "No title";
  const channelName = video.snippet?.channelTitle || "Unknown";
  const views = video.statistics?.viewCount
    ? Number(video.statistics.viewCount).toLocaleString() + " views"
    : "No views";
  const uploadedAt = new Date(video.snippet?.publishedAt).toDateString();

  return (
    <article className="w-full flex flex-col sm:flex-row gap-3 cursor-pointer">
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
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-sm sm:text-base font-medium line-clamp-2">
          {title}
        </h4>

        <p className="text-xs text-gray-500">
          {channelName} • {views} • {uploadedAt}
        </p>
      </div>
    </article>
  );
}

export default PlayerCard;