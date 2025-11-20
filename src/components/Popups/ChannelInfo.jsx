import React from 'react';
import { FaGlobe, FaInfo, FaSubscript, FaTiktok, FaVideo } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

function ChannelInfo({ data }) {
  const channel = data?.items?.[0];

  const title = channel?.snippet?.title || "Unknown Channel";
  const description = channel?.snippet?.description || "No description available.";
  const customUrl = channel?.snippet?.customUrl
    ? `https://www.youtube.com/${channel.snippet.customUrl}`
    : "No custom URL";

  const published = new Date(channel?.snippet?.publishedAt).toDateString();

  const subscribers = channel?.statistics?.subscriberCount
    ? Number(channel.statistics.subscriberCount).toLocaleString()
    : "—";

  const videos = channel?.statistics?.videoCount || "—";

  return (
    <div className="flex flex-col h-full">

      <div className="flex justify-between items-center py-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <FaX className="text-xl cursor-pointer" />
      </div>

      <div className="flex flex-col gap-6 mt-3 overflow-y-auto pb-6">

        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold">Description</p>

          <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">More Info</p>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaGlobe className="text-base" />
            <p>{customUrl}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaInfo className="text-base" />
            <p>Joined {published}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaSubscript className="text-base" />
            <p>{subscribers} subscribers</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaVideo className="text-base" />
            <p>{videos} videos</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChannelInfo;