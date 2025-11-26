import React from "react";
import Player from "./Player";
import VideoMeata from "./VideoMeata";
import CommentSection from "./CommentSection";
import { useFetch } from "../../utils/useFetch";

function PlayerPageCard({ videoId }) {
  const { data, error, loading } = useFetch(
    `http://localhost:3317/api/v1/video/${videoId}`,
    "get"
  );

  const {
    data: commentData,
    loading: commentLoading,
    error: commentError,
  } = useFetch(
    `http://localhost:3317/api/v1/comment/video/${videoId}`,
    "get"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading video</p>;
  if (!data || data.data.length === 0) return <p>No video found</p>;

  const video = data.data[0];

  return (
    <div className="flex flex-col gap-6">
      <Player source={`${video.url}`} />

      <div className="space-y-6">
        <VideoMeata video={video} />

        {commentLoading ? (
          <p>Loading comments...</p>
        ) : (
          <CommentSection id={video._id} />
        )}
      </div>
    </div>
  );
}

export default PlayerPageCard;