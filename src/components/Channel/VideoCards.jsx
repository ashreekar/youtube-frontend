import React from "react";
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"

function VideoCards({ video }) {
  const createdAt = dateFormatter(video.uploadedAt);
  const views = viewsFormatter(video.views);
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
          {createdAt}
        </p>
      </div>
    </div>
  );
}

export default VideoCards;