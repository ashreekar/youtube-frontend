import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../SidebarAndPopUp/Sidebar";
import UserInfo from "../../Popup/UserInfo";
import CreateInfo from "../../Popup/CreateInfo";

import { toggleCreateOverlay, toggleUserOverlay } from "../../../states/sideOverlaySlice";

function WhenLogin() {
  const dispatch = useDispatch();

  const isOpenUser = useSelector((state) => state.sideOverlay.user);
  const isOpenCreate = useSelector((state) => state.sideOverlay.create);

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

        <div
          className="
            rounded-full bg-pink-900 text-white 
            h-9 w-9 flex items-center justify-center 
            font-semibold cursor-pointer 
            hover:opacity-80 transition
          "
          onClick={handleClickProfile}
          title="Profile"
        >
          A
        </div>
      </div>

      {isOpenUser && (
        <Sidebar
          sidebarKey="user"
          closePopup={() => dispatch(toggleUserOverlay())}
        >
          <UserInfo />
        </Sidebar>
      )}

      {isOpenCreate && (
        <Sidebar sidebarKey="create" closePopup={() => dispatch(toggleCreateOverlay())}>
          <CreateInfo />
        </Sidebar>
      )}
    </>
  );
}

export default WhenLogin;