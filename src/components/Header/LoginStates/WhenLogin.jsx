import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { toggleCreateOverlay, toggleUserOverlay } from "../../../states/sideOverlaySlice";

function WhenLogin() {
  const dispatch = useDispatch();
  const user=useSelector(state=>state.user.user);

  const handleClickProfile = () => {
    dispatch(toggleUserOverlay());
  };

  const handleClickCreate = () => {
    dispatch(toggleCreateOverlay());
  };

  return (
    <>
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
          onClick={handleClickCreate}
        >
          <FaPlus />
          <span className="capitalize">create</span>
        </div>

        <img
          src={user?.avatar}
          className="
            rounded-full relative
            h-9 w-9 flex items-center justify-center 
            cursor-pointer 
            hover:opacity-80 transition
          "
          onClick={handleClickProfile}
          title="Profile"
       />
      </div>
    </>
  );
}

export default WhenLogin;