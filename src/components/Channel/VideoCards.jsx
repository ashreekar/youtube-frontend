import React from "react";
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"

function VideoCards({ video }) {
  // dateformattr and views formatter gives date and views inyoutube format
  // eg: 1 L views , 1.1 M views , 1k views
  // eg: 10 h ago, 1d ago, 1 month ago etc

  // refer doe at : /src/utils/
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
        <div className="flex w-full gap-4">
          <p className="text-xs text-gray-600 mt-1">
            {views} views
          </p>
          <p className="text-xs text-gray-600 mt-1">
            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCards;