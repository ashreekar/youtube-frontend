import React, { useEffect, useState } from "react";
import Player from "./Player";
import VideoMeata from "./VideoMeata";
import CommentSection from "./CommentSection";
import { useFetch } from "../../utils/useFetch";
import axios from "axios";

function PlayerPageCard({ videoId }) {
  const { data, error, loading } = useFetch(
    `http://localhost:3317/api/v1/video/${videoId}`,
    "get"
  );

  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (data) {
      setVideo(data?.data[0]);
    }
  }, [data])

  const [changeSubs, setChangeSubs] = useState(false);
  const [reactionState, setreactionState] = useState(false);

  useEffect(() => {
    try {
      async function getUpdatedVideoResult() {
        const res = await axios.get(`http://localhost:3317/api/v1/video/${videoId}`);

        if (res?.data?.data) {
          setVideo(res.data.data[0]);
        }
      }

      getUpdatedVideoResult();
    } catch (error) {
      console.log(error)
    }
  }, [changeSubs, reactionState, videoId])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading video</p>;
  if (!video || data.data.length === 0) return <p>No video found</p>;

  return (
    <div className="flex flex-col gap-6">
      <Player source={`${video.url}`} />

      <div className="space-y-6">
        <VideoMeata video={video} videoId={videoId} changeSubs={changeSubs} setChangeSubs={setChangeSubs} setreactionState={setreactionState} />

        <CommentSection id={videoId} />
      </div>
    </div>
  );
}

export default PlayerPageCard;