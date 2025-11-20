import { FaPlus } from "react-icons/fa"
import { toggelLogin } from '../../../states/userSlice';
import { useDispatch } from "react-redux";
import Sidebar from "../../SidebarAndPopUp/Sidebar";
import { useState } from "react";
import { toggleOverlay } from "../../../states/overlaySlice";

function WhenLogin() {
  const dispatch = useDispatch();

  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const handleClickProfile = () => {
    setIsOpenUser(true);
  }
  const handleClickCreate = () => {
    setIsOpenCreate(true);
  }

  const logoutHandler = () => {
    dispatch(toggelLogin());
  }

  const handleCreate = () => {
    dispatch(toggleOverlay());
  }

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
          <span><FaPlus /></span>
          <span className="capitalize">create</span>
        </div>

        <div
          onClick={handleClickProfile}
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

      {isOpenUser && <Sidebar sidebarKey="user" closePopup={() => { setIsOpenUser(false) }} children={
        [
          {
            "name": "Logout",
            "handler": logoutHandler,
            "to": null
          },
          {
            "name": "View channel",
            "handler": null,
            "to": "/feed/you"
          },
        ]
      } />}

      {isOpenCreate && <Sidebar sidebarKey="create" closePopup={() => { setIsOpenCreate(false) }} children={
        [
          {
            "name": "Create video",
            "handler": handleCreate,
            "to": null
          },
          {
            "name": "Live stream",
            "handler": null,
            "to": null
          },
          {
            "name": "Create post",
            "handler": null,
            "to": null
          },
        ]
      } />}
    </>
  )
}

export default WhenLogin