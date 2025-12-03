import React, { useState } from 'react';
import { MdOutlineVideoCall } from "react-icons/md";
import { FaBroadcastTower } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { RiMessage2Line } from "react-icons/ri";

import { toggleVideoOverlay, togglePostOverlay } from '../../states/overlaySlice'
import { toggleCreateOverlay } from '../../states/sideOverlaySlice';


function CreateInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleCreateVideo = () => {
    dispatch(toggleCreateOverlay())
    dispatch(toggleVideoOverlay())
  }

  const handleCreatePost = () => {
    dispatch(toggleCreateOverlay())
    dispatch(togglePostOverlay())
  }

  return (
      <div className="w-56 bg-white py-3 px-0 text-sm rounded-lg">

        <div onClick={handleCreateVideo} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <MdOutlineVideoCall className="text-xl" />
          <p>Upload video</p>
        </div>

        <button disabled className="flex items-center gap-3 outline-none border-none w-full px-4 py-2 hover:bg-gray-100 cursor-not-allowed">
          <FaBroadcastTower className="text-lg" />
          <p>Go live</p>
        </button>

        <div onClick={handleCreatePost} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <RiMessage2Line className="text-lg" />
          <p>Create post</p>
        </div>
      </div>

  );
}

export default CreateInfo;