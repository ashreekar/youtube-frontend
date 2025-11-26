import React from "react";

function VideoDetails({data}) {
  return (
    <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
      <div className="flex gap-3 text-sm text-gray-700">
        <span>{data.views}</span>
        <span>{data.createdAt}</span>
      </div>

      <div className="mt-2 whitespace-pre-line line-clamp-3">
        {data.description}
      </div>
    </div>
  );
}

export default VideoDetails;