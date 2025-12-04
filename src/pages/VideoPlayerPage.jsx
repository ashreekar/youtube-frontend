import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import PlayerSection from "../components/VideoPalyer/PlayerSection";

function VideoPlayerPage() {
  // video player takes video id from params and passed as prop
  const { videoId } = useParams();

  return (
    <div className="flex w-full bg-white">
      {/* This player boolean tells that the parent is video player page */}
      {/* This ensures that player don't have minimzed sidebar */}
      <Sidebar player={Boolean(videoId)} />

      {/* Player section handles all the video play, meta, comment and feed stuffs */}
      <PlayerSection videoId={videoId} />
    </div>
  );
}

export default VideoPlayerPage;