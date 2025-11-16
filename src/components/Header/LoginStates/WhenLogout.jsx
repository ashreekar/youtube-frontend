import { FaRegCircleUser } from "react-icons/fa6";

function WhenLogout() {
  return (
    <div className="flex items-center gap-2 cursor-pointer
    border-2 border-gray-300 
    py-2 px-5 rounded-full 
    text-blue-800
    text-lg
    hover:bg-blue-50 transition font-semibold">
      <FaRegCircleUser className="text-2xl" />
      <span>sign in</span>
    </div>

  )
}

export default WhenLogout