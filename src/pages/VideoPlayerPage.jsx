import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar"
import PlayerSection from "../components/VideoPalyer/PlayerSection"

function VideoPlayerPage() {
const isSidebarOpen = useSelector(store => store.sidebar.open);

  return (
    <div className="flex">
      <Sidebar />
      <div className={`flex-1 min-h-screen ml-4 sm:ml-24 mr-4 sm:mr-8`}>
          <PlayerSection />
      </div>
    </div>
  )
}

export default VideoPlayerPage