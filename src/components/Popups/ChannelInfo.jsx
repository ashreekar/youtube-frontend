import React from 'react';
import { FaGlobe, FaInfo, FaSubscript, FaTiktok, FaVideo } from 'react-icons/fa';

// popup that displays channel info based on data
function ChannelInfo({ data, channelId }) {

  const description = `${data?.meta?.name} is a channel that delivers engaging and easy-to-watch content for all audiences. With over ${data?.stats?.total_videos} videos uploaded so far and a growing community of ${data?.stats?.total_subscribers} subscribers, this channel shares fresh perspectives, reviews, reactions, and interesting breakdowns across different topics. Stay connected for more updates, new uploads, and enjoyable content from ${data?.meta?.handle}.`.trim();

  const title = data?.meta?.name || "Unknown Channel";
  const customUrl = `https://www.youtube.com/${channelId}` || "https://www.youtube.com/"

  const published = new Date(data?.meta?.createdAt).toLocaleDateString() || "1 year ago";

  const subscribers = data?.stats?.total_subscribers
    ? Number(data.stats.total_subscribers).toLocaleString()
    : "—";

  const videos = data?.stats?.total_videos || "—";

  return (
    <div className="flex flex-col h-full w-full justify-center">

      <div className="flex justify-between items-center py-2">
        <h2 className="text-3xl font-bold">{title}</h2>
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