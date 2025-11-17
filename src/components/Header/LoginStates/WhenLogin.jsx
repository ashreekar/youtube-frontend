import { FaPlus } from "react-icons/fa"
import { toggelLogin } from '../../../states/userSlice';
import { useDispatch } from "react-redux";

function WhenLogin() {
  
      const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4">
      <div
        className="
            px-3 py-2 flex items-center gap-2 
            rounded-full bg-gray-100 
            hover:bg-gray-200 transition 
            cursor-pointer select-none
            w-fit
        "
        title="Create"
      >
        <span><FaPlus /></span>
        <span className="capitalize">create</span>
      </div>

      <div
       onClick={() => dispatch(toggelLogin())}
        className="
            rounded-full bg-pink-900 text-white 
            h-9 w-9 flex items-center justify-center 
            font-semibold cursor-pointer 
            hover:opacity-80 transition
        "
        title="Profile"
      >
        A
      </div>
    </div>
  )
}

export default WhenLogin