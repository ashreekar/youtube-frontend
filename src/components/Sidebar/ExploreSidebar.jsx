import {
  MdOutlineMusicNote,
  MdOutlineMovie,
  MdOutlineLiveTv,
  MdOutlineSportsEsports,
  MdOutlineNewspaper,
  MdOutlineSportsSoccer,
  MdOutlineSchool,
  MdOutlinePodcasts,
} from "react-icons/md";

import { PiShoppingBagLight, PiDressLight } from "react-icons/pi";
import { GiLips } from "react-icons/gi";

function ExploreSidebar() {

  const renderList = [
  { name: "Shopping", icon: <PiShoppingBagLight className="w-6 h-6" />, link: "/features/onit" },
  { name: "Music", icon: <MdOutlineMusicNote className="w-6 h-6" />, link: "/features/onit" },
  { name: "Movies", icon: <MdOutlineMovie className="w-6 h-6" />, link: "/features/onit" },
  { name: "Live", icon: <MdOutlineLiveTv className="w-6 h-6" />, link: "/features/onit" },
  { name: "Gaming", icon: <MdOutlineSportsEsports className="w-6 h-6" />, link: "/features/onit" },
  { name: "News", icon: <MdOutlineNewspaper className="w-6 h-6" />, link: "/features/onit" },
  { name: "Sports", icon: <MdOutlineSportsSoccer className="w-6 h-6" />, link: "/features/onit" },
  { name: "Courses", icon: <MdOutlineSchool className="w-6 h-6" />, link: "/features/onit" },
  { name: "Fashion & Beauty", icon: <PiDressLight className="w-6 h-6" />, link: "/features/onit" },
  { name: "Podcasts", icon: <MdOutlinePodcasts className="w-6 h-6" />, link: "/features/onit" },
];

  return (
    <div className="mt-3">
      <div className="font-medium text-lg">Explore
      </div>

      <div className="mt-1">
        {renderList.map(item => (
          <div
            key={item.name}
            className="flex items-center gap-4 h-12 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreSidebar