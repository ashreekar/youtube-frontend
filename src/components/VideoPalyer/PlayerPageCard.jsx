import React, { useEffect, useState, Suspense, lazy } from "react";
import { useFetch } from "../../utils/useFetch";
import axios from "axios";

import Player from "./Player";
import VideoMeata from "./VideoMeata";
import CommentSection from "./CommentSection";
import AskLogin from "../Popups/AskLogin";
import PlayerLoader from "../Loaders/PlayerLoader";
import Popup from "../SidebarAndPopUp/Popup";

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
  const [errorState, setError] = useState(null);
  const [askLogin, setAskLogin] = useState(false);

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
      setError({
        title: "Videoload failed Failed",
        description: error.response?.data?.message || "Video load failed",
        customUrl: window.location.hostname,
      });
    }
  }, [changeSubs, reactionState, videoId])

  if (loading) return <PlayerLoader/>;
  if (error) {
    setError({
      title: "Videoload failed Failed",
      description: error.response?.data?.message || "Video load failed",
      customUrl: window.location.hostname,
    });
  };
  if (!video || data.data.length === 0) return <p>No video found</p>;

  return (
    <>
      <div className="flex flex-col gap-6">
        <Player source={`${video.url}`} />

        <div className="space-y-6">
          <VideoMeata
            video={video}
            videoId={videoId}
            changeSubs={changeSubs}
            setChangeSubs={setChangeSubs}
            setreactionState={setreactionState}
            askLogin={askLogin}
            setAskLogin={setAskLogin} />

          <CommentSection id={videoId} askLogin={askLogin} setAskLogin={setAskLogin} />
        </div>
      </div>

      {
        askLogin && (
          <Popup popupkey="channel" closePopup={() => setAskLogin(false)}>
              <AskLogin />
          </Popup>
        )
      }
    </>
  );
}

export default PlayerPageCard;