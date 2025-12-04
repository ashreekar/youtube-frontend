import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'

function ChannelBanner({ url, self, setUpdateBanner }) {
  const [showEdit, setShowEdit] = useState(false);
  // show edit shows icon to edit if channel is self
  // to update the banner
  return (
    <div onMouseOver={() => setShowEdit(true)} onMouseOut={() => setShowEdit(false)} className="w-full h-16 sm:h-32 md:h-44 lg:h-52 mt-4 rounded-2xl overflow-hidden relative">
      <img
        src={url}
        alt="channel-banner"
        className="w-full h-full object-cover rounded-2xl"
      />
      {self && showEdit &&
        <span onClick={() => setUpdateBanner(true)} className='absolute cursor-pointer transition duration-500 hover:bg-gray-100 left-8 top-5 bg-white rounded-full p-3'>
          <BiEdit size={24} />
        </span>
      }
    </div>
  )
}

export default ChannelBanner