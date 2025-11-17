import { useSelector } from 'react-redux';
import {
  MdAccountCircle,
  MdOutlinePlaylistPlay,
  MdOutlineVideoLibrary,
  MdOutlineWorkspacePremium,
  MdOutlineWatchLater,
  MdOutlineDownload,
  MdOutlineContentCut,
} from "react-icons/md";

import {
  AiOutlineHistory,
  AiOutlineLike,
} from "react-icons/ai";

import { FiChevronRight } from "react-icons/fi";

export default function UserSidebar() {
  const loggedIn = useSelector(store => store.user.loggedIn);

  const renderList = [
    { name: "History", icon: <AiOutlineHistory className="w-6 h-6" />, link: "/feed/history" },
    { name: "Playlists", icon: <MdOutlinePlaylistPlay className="w-6 h-6" />, link: "/feed/playlists" },
    { name: "Your videos", icon: <MdOutlineVideoLibrary className="w-6 h-6" />, link: "/feed/videos" },
    { name: "Your courses", icon: <MdOutlineWorkspacePremium className="w-6 h-6" />, link: "/feed/courses" },
    { name: "Watch later", icon: <MdOutlineWatchLater className="w-6 h-6" />, link: "/playlist?list=WL" },
    { name: "Liked videos", icon: <AiOutlineLike className="w-6 h-6" />, link: "/playlist?list=LL" },
    { name: "Downloads", icon: <MdOutlineDownload className="w-6 h-6" />, link: "/feed/downloads" },
    { name: "Your clips", icon: <MdOutlineContentCut className="w-6 h-6" />, link: "/feed/clips" },
  ];

  if (!loggedIn) {
    return (
      <div className="w-full flex flex-col mt-3">
        <div className="flex h-12 gap-4 items-center px-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <MdAccountCircle className="w-6 h-6 text-gray-700" />
          <span>You</span>
        </div>

        <div className="flex h-12 gap-4 items-center px-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <AiOutlineHistory className="w-6 h-6 text-gray-700" />
          <span>History</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <div
        className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
      >
        <span className="font-medium text-sm">You</span>
        <FiChevronRight className="w-4 h-4 text-gray-600" />
      </div>

      <div className="mt-1">
        {renderList.map(item => (
          <a
            key={item.name}
            href={item.link}
            className="flex items-center gap-4 h-12 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}