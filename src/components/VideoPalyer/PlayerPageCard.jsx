import React from "react";
import Player from "./Player";
import VideoMeata from "./VideoMeata";
import CommentSection from "./CommentSection";
import { useFetch } from "../../utils/useFetch";

function PlayerPageCard({ videoId }) {
  const { data, error, loading } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=AIzaSyApkq1vX5ecF8ghABa7uRrxiN7ndQslxCA`,
    "get"
  );

  const {
    data: commentData,
    loading: commentLoading,
    error: commentError,
  } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=50&key=AIzaSyApkq1vX5ecF8ghABa7uRrxiN7ndQslxCA`,
    "get"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading video</p>;
  if (!data || data.items.length === 0) return <p>No video found</p>;

  const video = data.items[0];

  return (
    <div className="flex flex-col gap-6">
      <Player source={`https://www.youtube.com/embed/${video.id}`} />

      <div className="space-y-6">
        <VideoMeata video={video} />

        {commentLoading ? (
          <p>Loading comments...</p>
        ) : (
          <CommentSection data={commentData} />
        )}
      </div>
    </div>
  );
}

export default PlayerPageCard;