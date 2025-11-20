import React from 'react';
import { MdOutlineVideoCall } from "react-icons/md";
import { FaBroadcastTower } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";

function CreateInfo() {
  return (
    <div className="w-56 bg-white py-3 px-0 text-sm rounded-lg">

      <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <MdOutlineVideoCall className="text-xl" />
        <p>Upload video</p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <FaBroadcastTower className="text-lg" />
        <p>Go live</p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <RiMessage2Line className="text-lg" />
        <p>Create post</p>
      </div>

    </div>
  );
}

export default CreateInfo;