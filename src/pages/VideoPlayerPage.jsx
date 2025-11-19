import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar"
import PlayerSection from "../components/VideoPalyer/PlayerSection"

function VideoPlayerPage() {
  const isSidebarOpen = useSelector(store => store.sidebar.open);

  return (
    <div className="flex">
      <Sidebar />
      <PlayerSection />
    </div>
  )
}

export default VideoPlayerPage