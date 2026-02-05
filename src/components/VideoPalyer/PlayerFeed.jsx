import React from "react";
import PlayerCard from "./PlayerCard";
import { useFetch } from "../../utils/useFetch";
import { Link } from "react-router-dom";

import FeedLoader from "../Loaders/FeedLoader"
import ErrorFallback from "../ErrorBoundary/ErrorFallback";

// player feed part
function PlayerFeed({ videoId }) {
  // rendering all videos except video with videoId
  const { data, error, loading } = useFetch(
    "https://youtube-backend-pvvc.onrender.com/api/v1/video", "get"
  );

  // structuring videos based on this format of data exists
  const videosData = data?.data?.map((video) => (
    {
      id: video?._id,
      title: video?.title || "",
      channelName: video.owner?.name || "",
      thumbnail: video?.thumbnail || "",
      views: video.views || "0",
      publishedAt: video.createdAt || "",
      raw: video
    }
  )) || [];

  if (loading) return <FeedLoader />;
  if (error) return <ErrorFallback/>;

  return (
    <div className="w-full p-2 sm:p-4">
      <h3 className="text-lg font-semibold mb-3">More to watch</h3>

      <div className="flex flex-col gap-4">
        {/* removing the videoId matched vudeo and only rendering 19 videos */}
        {videosData.map((video, index) => (
          index <= 19 && video.id !== videoId &&
          <Link key={video.id} to={`/watch/${video.id}`}>
            <PlayerCard key={video.id} video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PlayerFeed;