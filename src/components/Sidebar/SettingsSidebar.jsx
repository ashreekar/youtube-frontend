import {
  MdOutlineSettings,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback
} from "react-icons/md";

function SettingsSidebar() {
   const renderList = [
  { name: "Settings", icon: <MdOutlineSettings className="w-6 h-6" />, link: "/features/onit" },
  { name: "Report history", icon: <MdOutlineFlag className="w-6 h-6" />, link: "/features/onit" },
  { name: "Help", icon: <MdOutlineHelpOutline className="w-6 h-6" />, link: "/features/onit" },
  { name: "Send feedback", icon: <MdOutlineFeedback className="w-6 h-6" />, link: "/features/onit" }
];
  return (
       <div className="mt-3">
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

export default SettingsSidebar