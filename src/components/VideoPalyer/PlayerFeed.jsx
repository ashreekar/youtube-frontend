import React from "react";
import PlayerCard from "./PlayerCard";
import { useFetch } from "../../utils/useFetch";

function PlayerFeed() {
  const { data, error, loading } = useFetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=yt-api",
    "get"
  );

  const videosData = data?.items || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load videos</p>;

  return (
    <div className="w-full p-2 sm:p-4">
      <h3 className="text-lg font-semibold mb-3">More to watch</h3>

      <div className="flex flex-col gap-4">
        {videosData.map((video,index) => (
            index<=19 &&
          <PlayerCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default PlayerFeed;