import React from 'react'
import { FaGlobe, FaInfo, FaSubscript, FaTiktok, FaVideo } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function ChannelInfo() {
  return (
    <div className="flex flex-col h-full">

      <div className="flex justify-between items-center py-2">
        <h2 className="text-xl font-semibold">T-Series</h2>
        <FaX className="text-xl cursor-pointer" />
      </div>

      <div className="flex flex-col gap-6 mt-3 overflow-y-auto pb-6">

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-600">Description</p>

          <p className="text-sm text-gray-800 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ex!
          </p>

          <p className="text-sm text-gray-600">Email: <span className="text-gray-800">addnd@mail.com</span></p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-600">Links</p>

          <div className="flex flex-col gap-4">

            <div className="flex items-start gap-3">
              <FaTiktok className="text-lg mt-1" />
              <div className="flex flex-col text-sm">
                <p className="font-medium">TikTok</p>
                <p className="text-gray-600 break-all">tiktok.com/@tseries</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaTiktok className="text-lg mt-1" /> {/* Change icon if needed */}
              <div className="flex flex-col text-sm">
                <p className="font-medium">Twitter</p>
                <p className="text-gray-600 break-all">tiktok.com/@tseries</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaTiktok className="text-lg mt-1" />
              <div className="flex flex-col text-sm">
                <p className="font-medium">Instagram</p>
                <p className="text-gray-600 break-all">tiktok.com/@tseries</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaTiktok className="text-lg mt-1" />
              <div className="flex flex-col text-sm">
                <p className="font-medium">GitHub</p>
                <p className="text-gray-600 break-all">tiktok.com/@tseries</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-gray-600">More Info</p>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaGlobe className="text-base" />
            <p>www.youtube.com/addka</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaInfo className="text-base" />
            <p>Joined Mar 14, 2023</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaSubscript className="text-base" />
            <p>248k subscribers</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaVideo className="text-base" />
            <p>20 videos</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChannelInfo