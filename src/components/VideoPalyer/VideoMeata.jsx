import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import VideoDetails from "./VideoDetails";
import { useFetch } from "../../utils/useFetch";

function VideoMeata({ video }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="w-full">
      <h1 className="text-lg sm:text-2xl font-semibold leading-tight">
        {video.title}
      </h1>

      <div className="flex flex-col gap-3 mt-4 md:flex-row md:items-center md:justify-between">
        
        <div className="flex items-center justify-between w-full md:justify-start md:gap-4">
          <div className="flex items-center gap-3">
            <Link to={`/channel/${video.owner._id}`}>
            <img
              src={video.owner.avatar}
              alt={video.owner.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
          </Link>
            <div className="flex flex-col">
              <Link to={`/channel/${video.owner._id}`}>
              <span className="font-medium text-sm sm:text-base">
                {video.owner.name}
              </span>
              </Link>
              <span className="text-xs text-gray-500">
                {Number(video.totalSubscribers).toLocaleString()} subscribers
              </span>
            </div>
          </div>

          {isSubscribed ? (
            <button
              onClick={() => setIsSubscribed(false)}
              className="px-4 py-1 bg-gray-200 text-black rounded-full text-sm font-semibold md:ml-4"
            >
              Subscribed
            </button>
          ) : (
            <button
              onClick={() => setIsSubscribed(true)}
              className="px-4 py-1 bg-black text-white rounded-full text-sm font-semibold md:ml-4"
            >
              Subscribe
            </button>
          )}
        </div>

        <div className="flex gap-3 items-center overflow-x-auto no-scrollbar md:overflow-visible md:justify-evenly pb-2 md:pb-0">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-10">
            <div className="flex items-center gap-2 px-3 border-r border-gray-300">
              <AiFillLike size={18} />
              <span className="text-sm">
                {(video.likes / 1000).toFixed(1)}k
              </span>
            </div>
            <div className="flex items-center px-3">
              <AiOutlineDislike size={18} />
            </div>
          </div>

          <button className="flex items-center gap-2 bg-gray-100 rounded-full px-3 h-10 whitespace-nowrap">
            <RiShareForwardLine size={18} />
            <span className="text-sm">Share</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 rounded-full px-3 h-10 whitespace-nowrap">
            <TfiDownload size={16} />
            <span className="text-sm">Download</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <VideoDetails data={video} />
      </div>
    </div>
  );
}

export default VideoMeata;