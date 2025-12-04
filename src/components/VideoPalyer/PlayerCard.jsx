import React from "react";
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"
import { LazyLoadImage } from "react-lazy-load-image-component";

function PlayerCard({ video }) {
  //player card to render for feed of videos
  const createdAt = dateFormatter(video.publishedAt);
  const views = viewsFormatter(video.views);

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
        {/* using lazy laod images */}
        <LazyLoadImage
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-sm sm:text-base font-medium line-clamp-2">
          {video.title}
        </h4>

        <p className="text-xs text-gray-500">
          {video.channelName}  {views} views  {createdAt}
        </p>
      </div>
    </article>
  );
}

export default PlayerCard;