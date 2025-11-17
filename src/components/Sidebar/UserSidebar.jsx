import { useSelector } from 'react-redux'
import { FaHistory, FaUserCircle } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { FiChevronRight } from "react-icons/fi";

function UserSidebar() {
  const loggedIn = useSelector(store => store.user.loggedIn);
  const user = useSelector(store => store.user.user);

  if (!loggedIn) {
    return (
      <div className="w-full flex flex-col">
        <div
          className='flex h-12 gap-4 rounded-lg hover:bg-gray-100 justify-items-start items-center py-1 px-3 w-full mb-3 mt-3'>
          <span className='text-lg font-medium'><FaUserCircle /></span>
          You
        </div>
        <div
          className='flex h-12 gap-4 rounded-lg hover:bg-gray-100 justify-items-start items-center py-1 px-3 w-full mb-3'>
          <span className='text-lg font-medium'><FaHistory /></span>
          History
        </div>
      </div>
    )
  }

  return (
    <div>
      <div
      role="link"
      tabIndex={0}
      className="flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-gray-100 rounded transition"
    >
      {/* Profile Icon */}
      <CgProfile className="w-6 h-6 text-gray-700" />

      {/* Title */}
      <p className="text-sm font-medium text-gray-900">You</p>

      {/* Arrow Icon */}
      <FiChevronRight className="ml-auto w-4 h-4 text-gray-600" />

      {/* Newness Dot */}
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
    </div>

    </div>
  )
}

export default UserSidebar