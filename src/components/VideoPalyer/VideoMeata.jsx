import React, { useState } from "react";
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import VideoDetails from "./VideoDetails";

function VideoMeata({ data }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="w-full">
      <h1 className="text-lg sm:text-2xl font-semibold leading-tight">
        {data.video.title}
      </h1>

      <div className="flex flex-col gap-3 mt-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center justify-between w-full md:justify-start md:gap-4">

          <div className="flex items-center gap-3">
            <img
              src={data.channel.avatar}
              alt={data.channel.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="font-medium text-sm sm:text-base">{data.channel.name}</span>
              <span className="text-xs text-gray-500">{data.channel.subscribers} subscribers</span>
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

        <div
          className="
            flex gap-3 items-center 
            overflow-x-auto no-scrollbar 
            md:overflow-visible md:justify-evenly
            pb-2 md:pb-0
          "
        >
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-10">
            <div className="flex items-center gap-2 px-3 border-r border-gray-300">
              <AiFillLike size={18} />
              <span className="text-sm">22K</span>
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
        <VideoDetails />
      </div>
    </div>
  );
}

export default VideoMeata;