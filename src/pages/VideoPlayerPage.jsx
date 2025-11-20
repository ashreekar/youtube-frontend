import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import PlayerSection from "../components/VideoPalyer/PlayerSection";

function VideoPlayerPage() {
  const { videoId } = useParams();

  return (
    <div className="flex w-full bg-white">
      <Sidebar player={Boolean(videoId)} />
      <PlayerSection videoId={videoId} />
    </div>
  );
}

export default VideoPlayerPage;