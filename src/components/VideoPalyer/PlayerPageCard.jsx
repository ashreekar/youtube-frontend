import React, { useEffect, useState } from "react";
import { useFetch } from "../../utils/useFetch";
import axios from "axios";

import Player from "./Player";
import VideoMeata from "./VideoMeata";
import CommentSection from "./CommentSection";
import AskLogin from "../Popups/AskLogin";
import PlayerLoader from "../Loaders/PlayerLoader";
import Popup from "../SidebarAndPopUp/Popup";
import NotFound from "../NotFound/NotFound";

function PlayerPageCard({ videoId }) {
  const { data, error, loading } = useFetch(
    `https://youtube-backend-pvvc.onrender.com/api/v1/video/${videoId}`,
    "get"
  );
  // fetching a particular video details

  //states that maintain all state like reaction,login etc
  const [video, setVideo] = useState(null);
  const [changeSubs, setChangeSubs] = useState(false);
  const [reactionState, setreactionState] = useState(false);
  const [askLogin, setAskLogin] = useState(false);

  // When data arrives from useFetch
  useEffect(() => {
    if (data?.data?.length) {
      setVideo(data.data[0]);
    }
  }, [data]);

  // Refresh video when subs or reaction changes
  useEffect(() => {
    async function refreshVideo() {
      try {
        const res = await axios.get(
          `https://youtube-backend-pvvc.onrender.com/api/v1/video/${videoId}`
        );
        setVideo(res.data.data[0]);
      } catch (err) {
        if (!error) {
          return <NotFound target={"video"} fullscreen={false} />;
        }
      }
    }

    if (videoId) refreshVideo();
  }, [changeSubs, reactionState, videoId]);

  if (loading) return <PlayerLoader />;
  if (error) return <NotFound target={"video"} fullscreen={false} />;
  if (!video) return <PlayerLoader />;

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* rendering player, video details, comment section resoectivly */}
        <Player source={video.url} />

        <div className="space-y-2">
          <VideoMeata
            video={video}
            videoId={videoId}
            changeSubs={changeSubs}
            setChangeSubs={setChangeSubs}
            setreactionState={setreactionState}
            askLogin={askLogin}
            setAskLogin={setAskLogin}
          />

          <CommentSection
            id={videoId}
            askLogin={askLogin}
            setAskLogin={setAskLogin}
          />
        </div>
      </div>

      {/* Popup appers on action that requires login but not logged in */}
      {askLogin && (
        <Popup popupkey="channel" closePopup={() => setAskLogin(false)}>
          <AskLogin />
        </Popup>
      )}
    </>
  );
}

export default PlayerPageCard;