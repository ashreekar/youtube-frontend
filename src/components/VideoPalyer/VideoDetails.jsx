import React, { useState } from "react";
import Linkify from "linkify-react";

// video details showed based on the video info ie data prop
function VideoDetails({ data }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={`rounded-lg bg-gray-50 p-3 text-sm text-gray-700 ${!showMore && "hover:bg-pink-50"}`}>
      <div className="flex gap-3 text-sm text-gray-700">
        <span>{data.views} views</span>
        <span>{new Date(data.createdAt)?.toLocaleDateString()}</span>
      </div>

      {showMore ?
        <div className="mt-2 whitespace-pre-line flex flex-col">
          {/* used Linkify to render descriptionas it is */}
          <Linkify>{data.description}</Linkify>
          <button onClick={() => { setShowMore(false) }} className="text-gray-500 cursor-pointer text-base bg-none border-none mt-6 text-start">show less</button>
        </div>
        :
        <>
          <div className="mt-2 whitespace-pre-line line-clamp-3">
            <Linkify>{data.description}</Linkify>
          </div>
          <span onClick={() => setShowMore(true)} className="cursor-pointer">show more...</span>
        </>
      }
    </div>
  );
}

export default VideoDetails;