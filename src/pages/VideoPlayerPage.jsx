import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar"
import PlayerSection from "../components/VideoPalyer/PlayerSection"
import { useParams } from "react-router-dom";

function VideoPlayerPage() {
  const { videoId } = useParams();

  return (
    <div className="flex">
      <Sidebar player={videoId?true:false} />
      <PlayerSection />
    </div>
  )
}

export default VideoPlayerPage